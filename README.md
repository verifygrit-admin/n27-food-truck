# N27 Food Truck TAM Map

An interactive Leaflet map visualizing the Greater Boston food-truck total addressable market for **Number 20 Seven LLC (N27)**. The map pairs a six-zone choropleth of N27's Boston deployment thesis with the 13 city-designated active public vending sites, so a prospectus reader can see at a glance where the strategy places trucks and where the city currently permits them.

> Live site: _coming soon once GitHub Pages is enabled_

## Run locally

The map reads its GeoJSON and `zones.json` files with `fetch()`. Chrome and most modern browsers block `fetch()` from `file://` URLs for security reasons, so opening `tam-map.html` directly from Finder/Explorer will usually leave you staring at an empty basemap. Serve over HTTP instead:

```bash
# from the repo root
python -m http.server 8000
# then open http://localhost:8000/tam-map.html in your browser
```

Any static server works (`npx serve`, `caddy file-server`, `php -S localhost:8000`). Do not use a build tool — there isn't one.

> **Note:** there is intentionally no `index.html` at the repo root. The map lives at `/tam-map.html`. The root `index.html` slot is reserved for a full N27 investor site that will be integrated in a later pass. Visiting the bare Pages URL before that integration will return 404 — visit the `/tam-map.html` path directly.

## Data provenance

All three data layers are committed to `data/` and served locally. Nothing is fetched from the network at runtime.

| Layer | Source | Notes |
|---|---|---|
| `neighborhoods.geojson` | [Analyze Boston — BPDA Neighborhood Boundaries](https://data.boston.gov/dataset/bpda-neighborhood-boundaries) | Authoritative 26-polygon BPDA set. Geometry unmodified from source. |
| `adjacent-zips.geojson` | [OpenDataDE / State-zip-code-GeoJSON](https://github.com/OpenDataDE/State-zip-code-GeoJSON) (MA file) | Filtered locally to ZCTAs 02139, 02142, 02143, 02144, 02150, 02151, 02169. Properties slimmed to `{zip, geoid}`. |
| `sites.geojson` | [City of Boston — Food Trucks Schedule](https://www.boston.gov/departments/small-business-development/city-boston-food-trucks-schedule) | 13 active public sites as of Spring 2026. Addresses geocoded via [OpenStreetMap Nominatim](https://nominatim.openstreetmap.org/) once, results committed. |

## Zone configuration

**`data/zones.json` is the single source of truth** for everything the map shows about deployment zones: colors, labels, demand drivers, truck capacities, and which BPDA neighborhoods or ZCTAs belong to each zone. Editing `zones.json` and reloading the map applies the change — no code edits needed. The legend and filter panel read from the same file.

### Reassign a neighborhood to a different zone

Find the neighborhood name in the current zone's `neighborhoods` array, move it to the target zone's `neighborhoods` array. The legend will re-render, the choropleth will re-color, and the filter panel will route the polygon under the new zone's checkbox.

### Change a zone color

Edit the `color` field on that zone. Legend swatches and polygon fills update together. Stay within single-hue ramps — the brand system expects a lime family; introducing a different hue will drift from the prospectus.

### Adjust truck capacity

Edit the `truck_capacity` integer on the zone. The legend total at the bottom (`TOTAL TAM CAPACITY`) is computed from the sum of all active zones at load time.

### Add a new zone

Add a new top-level key under `zones` with the same shape (`label`, `color`, `demand_driver`, `truck_capacity`, `neighborhoods` or `zips`), and add its key to `ACTIVE_ZONE_ORDER` in `app.js` if you want it in the legend's order.

## Public sites

The map shows the **13 city-designated active public vending sites** (in cherry red) pulled from the current boston.gov schedule. This differs from the legacy figure in Boston's 2013 Food Truck Legal Toolkit: the City of Boston's program previously designated 20 public sites; the current public schedule lists 13 active. N27's deployment thesis scales beyond public sites via private and event-based placements — the red pins are a floor showing known vending anchors, while the lime choropleth is the ceiling showing the full 50-truck TAM across public, private, event, and adjacent-zip deployment.

### Add a site

Edit `data/sites.geojson` — append a new `Feature` with `geometry.coordinates: [lng, lat]` and a `properties` object with `site_id`, `name`, `address`, `tier` (1/2/3), `time_slots` (comma-separated), `capacity`, and optional `notes`. Reload.

## Brand system

Monochrome plus one accent. Resist introducing additional hues.

### Palette

| Token | Value | Use |
|---|---|---|
| Black | `#0A0A0A` | Header bar, dominant surface |
| Ink | `#1A1A1A` | Body text, footer |
| Ivory | `#F5EEE3` | Panel backgrounds, light type on dark |
| Cream | `#FAF6EE` | Popup background |
| Lime (primary) | `#4A5D3A` | Accent, Innovation corridor zone |
| Lime dark | `#33412A` | Borders, strokes, eyebrow labels |
| Mute | `#8A7E6E` | Secondary text, unassigned stroke |
| Rule | `#DDD5C7` | Borders, dividers |
| **Accent site red** | **`#990011`** | **Reserved — see below** |

**Red (`#990011`) is reserved for city-designated active public vending sites only.** It appears on the 13 site markers, the marker-cluster badges, and the matching dot in the legend's "Public sites" row. Do not use it elsewhere in the map — not for zones, not for alerts, not for typography, not for UI chrome. One color, one meaning. Breaking this rule causes brand drift.

### Zone color ramp

Single-hue lime family, six stops dark-to-light.

| Zone | Hex | Lightness |
|---|---|---|
| Downtown core | `#2C3722` | darkest |
| Innovation corridor | `#4A5D3A` | dark (primary lime) |
| Medical-academic | `#6B8257` | mid-dark |
| Neighborhood density | `#8FA577` | mid |
| Entertainment & venues | `#B4C59D` | mid-light |
| Adjacent zip expansion | `#D4DEC1` | lightest |
| Outside current TAM | `#D4D4D4` (gray, 40% opacity) | muted |

### Typography

| Role | Stack |
|---|---|
| Headings | `'Cinzel'` (loaded via Google Fonts) → Trajan Pro → Playfair Display → Georgia Bold |
| Eyebrow labels | `'Calibri'` → Segoe UI → system-ui → sans-serif |
| Body | Georgia → Times New Roman → serif |

Cinzel is loaded from Google Fonts with the `display=swap` hint so the page renders in Georgia first and restyles once Cinzel arrives — no blank-text flash.

## File structure

```
n27-food-truck/
├── tam-map.html        ← HTML scaffold for the map (served at /tam-map.html)
├── styles.css          ← All CSS (N27 palette, panels, popups, responsive)
├── app.js              ← All JS (map init, layers, legend, filter control)
├── README.md           ← you are here
├── .gitignore
├── .nojekyll           ← disables Jekyll processing on GitHub Pages
└── data/
    ├── neighborhoods.geojson
    ├── adjacent-zips.geojson
    ├── sites.geojson
    └── zones.json
```

The repo root has no `index.html` by design; the investor site that will live there is a separate deliverable.

## License

Prepared for Number 20 Seven LLC. Map code is free to use under standard permissive terms at the project owner's discretion. Data sources retain their original licenses: Analyze Boston (ODbL), OpenStreetMap / ZCTA (ODbL), City of Boston open data.
