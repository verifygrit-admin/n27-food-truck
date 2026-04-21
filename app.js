// N27 Food Truck TAM — interactive map logic.
// Runs without a build step. Single non-modular script loaded via
// <script src="app.js" defer> in index.html.
//
// Architecture:
//   - constants (SITE_RED, stroke/fill/weight defaults)
//   - filterState (session-scoped; no localStorage)
//   - init sequence: Promise.all([zones, neighborhoods, adj zips, sites])
//   - layer creation: nbhdLayer, zipLayer, clusterLayer on pane 'n27-sites'
//   - LegendControl (topright) + FilterControl (topleft)
//
// Red (#990011) scoping: declared as SITE_RED below; used only for
// site circleMarkers and cluster badges. Legend + filter panel and all
// zone polygons are red-free. See styles.css :root for the CSS-side rule.

// ---- Map initialization ----
const BOSTON_CENTER = [42.3601, -71.0589];
const DEFAULT_ZOOM = 12;

const map = L.map('map', {
  center: BOSTON_CENTER,
  zoom: DEFAULT_ZOOM,
  zoomControl: true,
  attributionControl: true,
});

// Carto Positron — low-chroma basemap that lets the N27 lime ramp stay dominant
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
  subdomains: 'abcd',
  maxZoom: 19,
}).addTo(map);

// Custom pane for public-site markers + cluster icons. z-index 650 puts
// them above the default overlayPane (400) where L.GeoJSON polygons and
// SVG circleMarkers would otherwise compete for pointer events. This
// eliminates the polygon-steals-the-click bug when a site marker sits
// over a zone polygon.
map.createPane('n27-sites');
map.getPane('n27-sites').style.zIndex = 650;

// ---- Step 6: Zone-based choropleth styling ----
// All zone colors, labels, and capacities come from data/zones.json.
// Edit that file to reassign neighborhoods or change colors — no code
// changes needed.

const STROKE_ACTIVE = '#33412A';        // N27 lime dark
const STROKE_UNASSIGNED = '#8A7E6E';    // N27 mute
const DEBUG_COLOR = '#FF00FF';          // magenta — loud unmatched warning
const FILL_ACTIVE = 0.7;
const FILL_UNASSIGNED = 0.4;
const FILL_HOVER = 0.9;
const WEIGHT_BASE = 1;
const WEIGHT_HOVER = 2;

Promise.all([
  fetch('data/zones.json').then(r => r.json()),
  fetch('data/neighborhoods.geojson').then(r => r.json()),
  fetch('data/adjacent-zips.geojson').then(r => r.json()),
  fetch('data/sites.geojson').then(r => r.json()),
]).then(([zonesDoc, neighborhoods, adjZips, sites]) => {
  const zones = zonesDoc.zones;

  // Build name → zoneKey lookups. zones.json is single source of truth.
  const neighborhoodToZone = new Map();
  const zipToZone = new Map();
  for (const [zoneKey, zone] of Object.entries(zones)) {
    (zone.neighborhoods || []).forEach(n => neighborhoodToZone.set(n, zoneKey));
    (zone.zips || []).forEach(z => zipToZone.set(z, zoneKey));
  }

  const unmatched = [];

  // Filter state — session-scoped, no localStorage.
  // Layer-level overrides add/remove the whole Leaflet layer from the map.
  // Zone-level hides individual polygons by setting fill: false, stroke: false
  // (SVG pointer-events: visiblePainted means no-fill + no-stroke = no clicks).
  const filterState = {
    layers: { zones: true, zips: true, sites: true },
    zones: {
      downtown_core: true,
      innovation_corridor: true,
      medical_academic: true,
      neighborhood_density: true,
      entertainment_venues: true,
      adjacent_zip_expansion: true,
      unassigned_future: true,
    },
  };

  function baseStyle(zoneKey) {
    const zone = zones[zoneKey];
    if (!zone) {
      return { fillColor: DEBUG_COLOR, fillOpacity: FILL_ACTIVE, color: DEBUG_COLOR, weight: WEIGHT_HOVER };
    }
    const isUnassigned = zoneKey === 'unassigned_future';
    return {
      fillColor: zone.color,
      fillOpacity: isUnassigned ? FILL_UNASSIGNED : FILL_ACTIVE,
      color: isUnassigned ? STROKE_UNASSIGNED : STROKE_ACTIVE,
      weight: WEIGHT_BASE,
    };
  }

  // Filter-aware style — returns fully transparent, non-interactive when
  // the zone is unchecked. Falls through to baseStyle otherwise.
  function polygonStyleFor(zoneKey) {
    if (zoneKey && filterState.zones[zoneKey] === false) {
      return { fill: false, stroke: false, fillOpacity: 0, opacity: 0 };
    }
    return baseStyle(zoneKey);
  }

  function hoverStyle(zoneKey) {
    if (zoneKey && filterState.zones[zoneKey] === false) {
      return polygonStyleFor(zoneKey);
    }
    return { ...baseStyle(zoneKey), fillOpacity: FILL_HOVER, weight: WEIGHT_HOVER };
  }

  function escapeHTML(s) {
    return String(s).replace(/[&<>"']/g, c => ({
      '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    }[c]));
  }

  function popupHTML(name, zoneKey) {
    const zone = zones[zoneKey];
    if (!zone) {
      return `<div class="n27-popup"><h3>${escapeHTML(name)}</h3>` +
             `<p class="n27-popup-warn">Unmatched — check zones.json</p></div>`;
    }
    const isUnassigned = zoneKey === 'unassigned_future';
    const driver = isUnassigned
      ? 'Outside current TAM — future expansion candidate'
      : zone.demand_driver;
    const capacity = isUnassigned
      ? '<span class="n27-popup-mute">No trucks allocated</span>'
      : `<strong>${zone.truck_capacity}</strong> ${zone.truck_capacity === 1 ? 'truck' : 'trucks'} allocated`;
    return `
      <div class="n27-popup">
        <h3>${escapeHTML(name)}</h3>
        <div class="n27-popup-zone">${escapeHTML(zone.label)}</div>
        <div class="n27-popup-driver">${escapeHTML(driver)}</div>
        <div class="n27-popup-capacity">${capacity}</div>
      </div>`;
  }

  function tooltipHTML(name, zoneKey) {
    const zone = zones[zoneKey];
    if (!zone) return `<strong>${escapeHTML(name)}</strong> — unmatched`;
    return `<strong>${escapeHTML(name)}</strong> &middot; ${escapeHTML(zone.label)}`;
  }

  function makeInteractionHandler(getLayerGroup, getKey, getName) {
    return (feature, layer) => {
      const key = getKey(feature);
      const name = getName(feature);
      layer.bindTooltip(tooltipHTML(name, key), { sticky: true, direction: 'auto' });
      layer.bindPopup(popupHTML(name, key), { maxWidth: 280, minWidth: 200 });
      layer.on('mouseover', e => {
        e.target.setStyle(hoverStyle(key));
        e.target.bringToFront();
      });
      layer.on('mouseout', e => {
        getLayerGroup().resetStyle(e.target);
      });
    };
  }

  // Forward-declare so mouseout handlers can close over the layer groups
  let nbhdLayer, zipLayer;

  // Neighborhoods layer
  nbhdLayer = L.geoJSON(neighborhoods, {
    style: f => {
      const key = neighborhoodToZone.get(f.properties.name);
      if (!key) {
        unmatched.push(f.properties.name);
        return baseStyle(null);
      }
      return polygonStyleFor(key);
    },
    onEachFeature: makeInteractionHandler(
      () => nbhdLayer,
      f => neighborhoodToZone.get(f.properties.name),
      f => f.properties.name
    ),
  }).addTo(map);

  // Adjacent zips layer — all 7 fall in adjacent_zip_expansion
  zipLayer = L.geoJSON(adjZips, {
    style: f => polygonStyleFor(zipToZone.get(f.properties.zip) || 'adjacent_zip_expansion'),
    onEachFeature: makeInteractionHandler(
      () => zipLayer,
      f => zipToZone.get(f.properties.zip) || 'adjacent_zip_expansion',
      f => 'ZIP ' + f.properties.zip
    ),
  }).addTo(map);

  // Report polygon layers
  const matched = neighborhoods.features.length - unmatched.length;
  console.log(
    `[N27] Layers styled. neighborhoods: ${matched}/${neighborhoods.features.length} matched, ` +
    `zips: ${zipLayer.getLayers().length}/7 rendered`
  );
  if (unmatched.length) {
    console.warn('[N27] Unmatched neighborhood polygons (rendered magenta):', unmatched);
  } else {
    console.log('[N27] All BPDA polygons matched to a zone.');
  }

  // ---- Public sites as clustered markers ----
  // Red (#990011) is reserved in the N27 map for city-designated active public vending sites only.
  // Do NOT introduce red anywhere else in this map (zones, panels, typography, cluster badges for
  // anything other than site clusters). Breaking this rule causes brand drift.
  const SITE_RED = '#990011';
  const SITE_COUNT_AUTHORITATIVE = sites.metadata && sites.metadata.site_count || sites.features.length;

  function siteMarker(lngLat) {
    return L.circleMarker(L.latLng(lngLat[1], lngLat[0]), {
      pane: 'n27-sites',     // above polygons so clicks land on the marker, not the zone beneath
      radius: 7,
      fillColor: SITE_RED,
      fillOpacity: 1,
      color: '#F5EEE3',      // ivory border
      weight: 1.5,
    });
  }

  function sitePopupHTML(p) {
    const tierLabel = p.tier === 1 ? 'Tier 1 · Prime' : p.tier === 2 ? 'Tier 2 · Commercial' : 'Tier 3 · Neighborhood';
    const slotLabel = String(p.time_slots || '').split(',').map(s => s.trim()).filter(Boolean).join(' · ');
    const capLabel = p.capacity === 1 ? '1 truck slot' : `${p.capacity} concurrent truck slots`;
    return `
      <div class="n27-popup">
        <h3>${escapeHTML(p.name)}</h3>
        <div class="n27-popup-address">${escapeHTML(p.address)}</div>
        <div class="n27-popup-tier">${escapeHTML(tierLabel)}</div>
        <div class="n27-popup-meta">Slots: <strong>${escapeHTML(slotLabel || 'not scheduled')}</strong></div>
        <div class="n27-popup-meta">Capacity: <strong>${escapeHTML(capLabel)}</strong></div>
      </div>`;
  }

  const clusterLayer = L.markerClusterGroup({
    clusterPane: 'n27-sites',  // cluster icons ride the site pane (z-index 650)
    showCoverageOnHover: false,
    spiderfyOnMaxZoom: true,
    maxClusterRadius: 40,
    iconCreateFunction: cluster => {
      const count = cluster.getChildCount();
      const size = count < 5 ? 32 : count < 10 ? 38 : 44;
      return L.divIcon({
        html: `<div class="n27-site-cluster" style="width:${size}px;height:${size}px;">${count}</div>`,
        className: 'n27-site-cluster-wrapper',
        iconSize: L.point(size, size),
      });
    },
  });

  sites.features.forEach(f => {
    const m = siteMarker(f.geometry.coordinates);
    m.bindTooltip(`<strong>${escapeHTML(f.properties.name)}</strong>`, { sticky: true, direction: 'top' });
    m.bindPopup(sitePopupHTML(f.properties), { maxWidth: 300, minWidth: 220 });
    clusterLayer.addLayer(m);
  });
  clusterLayer.addTo(map);

  console.log(`[N27] Public sites rendered. sites: ${sites.features.length}/${SITE_COUNT_AUTHORITATIVE}`);

  // ---- Legend control (top-right, collapsible) ----
  const ACTIVE_ZONE_ORDER = [
    'downtown_core',
    'innovation_corridor',
    'medical_academic',
    'neighborhood_density',
    'entertainment_venues',
    'adjacent_zip_expansion',
  ];

  function buildLegendHTML() {
    const rowForZone = (zoneKey) => {
      const z = zones[zoneKey];
      // Swatch uses the same fill color + opacity + stroke as the map polygons
      const swatchStyle = `background:${z.color}; opacity:0.7; border-color:${STROKE_ACTIVE};`;
      return `
        <div class="n27-legend-row">
          <span class="n27-legend-swatch" style="${swatchStyle}"></span>
          <span class="n27-legend-label">${escapeHTML(z.label)}</span>
          <span class="n27-legend-figure">${z.truck_capacity}</span>
        </div>`;
    };

    const unassigned = zones.unassigned_future;
    const unassignedRow = `
      <div class="n27-legend-row">
        <span class="n27-legend-swatch n27-legend-swatch-unassigned" style="background:${unassigned.color}; opacity:${unassigned.opacity || 0.4};"></span>
        <span class="n27-legend-label n27-legend-label-mute">${escapeHTML(unassigned.label)}</span>
      </div>`;

    const totalCapacity = ACTIVE_ZONE_ORDER.reduce((s, k) => s + (zones[k].truck_capacity || 0), 0);
    const sitesActive = sites.features.length;

    return `
      <div class="n27-legend-body">
        <div class="n27-legend-section-label">Deployment zones</div>
        ${ACTIVE_ZONE_ORDER.map(rowForZone).join('')}
        <hr class="n27-legend-rule" />
        ${unassignedRow}

        <div class="n27-legend-section-label">Public sites</div>
        <div class="n27-legend-row">
          <span class="n27-legend-dot" aria-hidden="true"></span>
          <span class="n27-legend-label n27-legend-label-small">
            City-designated public sites (${sitesActive} active as of Spring 2026)
          </span>
        </div>

        <div class="n27-legend-total">
          <span class="n27-legend-total-label">Total TAM capacity</span>
          <span class="n27-legend-total-figure">${totalCapacity} trucks by 2028</span>
        </div>
      </div>`;
  }

  const LegendControl = L.Control.extend({
    options: { position: 'topright' },
    onAdd() {
      let expanded = window.innerWidth >= 900;  // default collapse on narrow viewports
      const container = L.DomUtil.create('div', 'n27-legend');
      container.setAttribute('role', 'region');
      container.setAttribute('aria-label', 'Map legend');
      container.setAttribute('aria-expanded', 'true');

      function render() {
        const chevron = expanded ? '&#9662;' : '&#9656;'; // ▾ ▸
        container.innerHTML = `
          <div class="n27-legend-header" role="button" tabindex="0"
               aria-expanded="${expanded}">
            <span class="n27-legend-title">Legend</span>
            <span class="n27-legend-chevron" aria-hidden="true">${chevron}</span>
          </div>
          ${expanded ? buildLegendHTML() : ''}
        `;
        container.setAttribute('aria-expanded', String(expanded));
      }

      function toggle() { expanded = !expanded; render(); }

      L.DomEvent.on(container, 'click', e => {
        const header = e.target.closest('.n27-legend-header');
        if (header) { L.DomEvent.stopPropagation(e); toggle(); }
      });
      L.DomEvent.on(container, 'keydown', e => {
        const header = e.target.closest('.n27-legend-header');
        if (header && (e.key === 'Enter' || e.key === ' ')) {
          L.DomEvent.preventDefault(e);
          toggle();
        }
      });
      // Prevent map pan/zoom interactions bubbling from the legend
      L.DomEvent.disableClickPropagation(container);
      L.DomEvent.disableScrollPropagation(container);

      render();
      return container;
    },
  });
  map.addControl(new LegendControl());

  // ---- Filter control (top-left, below zoom) ----
  // Layer-level toggles add/remove the whole Leaflet layer from the map.
  // Zone-level toggles hide individual polygons by style (fill:false,
  // stroke:false -> non-interactive under SVG pointer-events rules).
  // Legend does NOT mirror filter state — legend is reference docs.

  function applyLayerToggle(key, checked) {
    const layerByKey = { zones: nbhdLayer, zips: zipLayer, sites: clusterLayer };
    const layer = layerByKey[key];
    if (!layer) return;
    if (checked && !map.hasLayer(layer)) map.addLayer(layer);
    if (!checked && map.hasLayer(layer)) map.removeLayer(layer);
  }

  function applyZoneFilter() {
    // Re-style both polygon layers; Leaflet calls the style fn per feature.
    nbhdLayer.setStyle(f => {
      const key = neighborhoodToZone.get(f.properties.name);
      return key ? polygonStyleFor(key) : baseStyle(null);
    });
    zipLayer.setStyle(f =>
      polygonStyleFor(zipToZone.get(f.properties.zip) || 'adjacent_zip_expansion')
    );
  }

  const ALL_ZONE_KEYS = [...ACTIVE_ZONE_ORDER, 'unassigned_future'];

  function buildFilterHTML() {
    const layerRow = (key, label) => `
      <label class="n27-filter-row">
        <input type="checkbox" data-filter-layer="${key}" ${filterState.layers[key] ? 'checked' : ''} />
        <span class="n27-filter-label">${escapeHTML(label)}</span>
      </label>`;
    const zoneRow = (zoneKey) => {
      const z = zones[zoneKey];
      const isUnassigned = zoneKey === 'unassigned_future';
      const swatchStyle = isUnassigned
        ? `background:${z.color}; opacity:${z.opacity || 0.4};`
        : `background:${z.color}; opacity:0.7; border-color:${STROKE_ACTIVE};`;
      const swatchClass = isUnassigned ? 'n27-filter-swatch n27-filter-swatch-unassigned' : 'n27-filter-swatch';
      const labelClass = isUnassigned ? 'n27-filter-label n27-filter-label-mute' : 'n27-filter-label';
      return `
        <label class="n27-filter-row">
          <input type="checkbox" data-filter-zone="${zoneKey}" ${filterState.zones[zoneKey] ? 'checked' : ''} />
          <span class="${swatchClass}" style="${swatchStyle}"></span>
          <span class="${labelClass}">${escapeHTML(z.label)}</span>
        </label>`;
    };
    return `
      <div class="n27-filter-body">
        <div class="n27-filter-eyebrow" role="presentation">Layers</div>
        <div role="group" aria-label="Layer visibility">
          ${layerRow('zones', 'Deployment zones')}
          ${layerRow('zips', 'Adjacent zips')}
          ${layerRow('sites', 'Public sites')}
        </div>

        <hr class="n27-filter-rule" />

        <div class="n27-filter-eyebrow" role="presentation">Zones</div>
        <div role="group" aria-label="Zone visibility">
          ${ALL_ZONE_KEYS.map(zoneRow).join('')}
        </div>

        <hr class="n27-filter-rule" />

        <div class="n27-filter-actions">
          <button type="button" class="n27-filter-reset" data-filter-reset>Reset filters</button>
        </div>
      </div>`;
  }

  const FilterControl = L.Control.extend({
    options: { position: 'topleft' },
    onAdd() {
      let expanded = window.innerWidth >= 900;  // default collapse on narrow viewports
      const container = L.DomUtil.create('div', 'n27-filter');
      container.setAttribute('role', 'region');
      container.setAttribute('aria-label', 'Map filters');
      container.setAttribute('aria-expanded', 'true');

      function render() {
        const chevron = expanded ? '&#9662;' : '&#9656;';
        container.innerHTML = `
          <div class="n27-filter-header" role="button" tabindex="0" aria-expanded="${expanded}">
            <span class="n27-filter-title">Filters</span>
            <span class="n27-filter-chevron" aria-hidden="true">${chevron}</span>
          </div>
          ${expanded ? buildFilterHTML() : ''}
        `;
        container.setAttribute('aria-expanded', String(expanded));
      }

      function togglePanel() { expanded = !expanded; render(); }

      function onInputChange(e) {
        const t = e.target;
        if (t.matches('input[data-filter-layer]')) {
          const key = t.dataset.filterLayer;
          filterState.layers[key] = t.checked;
          applyLayerToggle(key, t.checked);
        } else if (t.matches('input[data-filter-zone]')) {
          const key = t.dataset.filterZone;
          filterState.zones[key] = t.checked;
          applyZoneFilter();
        }
      }

      function onReset() {
        Object.keys(filterState.layers).forEach(k => { filterState.layers[k] = true; });
        Object.keys(filterState.zones).forEach(k => { filterState.zones[k] = true; });
        applyLayerToggle('zones', true);
        applyLayerToggle('zips', true);
        applyLayerToggle('sites', true);
        applyZoneFilter();
        render();
      }

      L.DomEvent.on(container, 'click', e => {
        if (e.target.closest('.n27-filter-reset')) {
          L.DomEvent.stopPropagation(e);
          onReset();
          return;
        }
        const header = e.target.closest('.n27-filter-header');
        if (header) {
          L.DomEvent.stopPropagation(e);
          togglePanel();
        }
      });
      L.DomEvent.on(container, 'keydown', e => {
        const header = e.target.closest('.n27-filter-header');
        if (header && (e.key === 'Enter' || e.key === ' ')) {
          L.DomEvent.preventDefault(e);
          togglePanel();
        }
      });
      L.DomEvent.on(container, 'change', onInputChange);
      L.DomEvent.disableClickPropagation(container);
      L.DomEvent.disableScrollPropagation(container);

      render();
      return container;
    },
  });
  map.addControl(new FilterControl());

  // Fit to combined bounds of polygons only (sites are all inside)
  const group = L.featureGroup([nbhdLayer, zipLayer]);
  map.fitBounds(group.getBounds(), { padding: [20, 20] });
}).catch(err => {
  console.error('[N27] Failed to load data layers:', err);
});

console.log('[N27] Map scaffolded.');
