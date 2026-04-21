# N27 Boston Food-Truck TAM Map — Integration Bundle

**Purpose.** This folder is a drop-in bundle of the N27 Boston food-truck TAM map. Place it at `ui_kits/tam-map/` in your site structure (or wherever you prefer), rename `tam-map.html` to `index.html` inside that directory, and it will serve correctly from that path.

**Path assumption.** The map uses relative paths for assets. It will work at any directory depth as long as `tam-map.html`, `app.js`, `styles.css`, and `data/` stay together in the same folder.

**Dependencies.** External dependencies are Leaflet 1.9.4 CDN, Leaflet.markercluster CDN, Carto Positron basemap tiles, and Google Fonts (Cinzel, Georgia fallback). No build step required.

**Brand restraint.** The map uses the N27 monochrome + deep-lime palette with one strictly scoped accent color (`#990011` cherry red) reserved for city-designated active public vending sites. This scoping is documented in `app.js` and `styles.css` — please preserve it when integrating. Do not introduce new red uses.

**Single source of truth.** `data/zones.json` is the authoritative source for zone colors, neighborhood assignments, and truck capacities. If you need to display "by the numbers" content in the site (e.g., "50 trucks, 6 zones, 13 public sites"), read from this file rather than hardcoding.

**Two warnings.** Do not open `tam-map.html` via `file://` — Chrome's CORS policy blocks `fetch()` from file URLs. Serve via HTTP (local dev or Pages). Do not use `localStorage` — none of the current code uses it, and we want integration to stay portable.
