# N27 Food Truck TAM Map

Interactive Leaflet map visualizing the Greater Boston food-truck total addressable market for **Number 20 Seven LLC (N27)**.

> Live URL: _pending GitHub Pages deploy_

## What this is

A single-page static map showing:
- Boston neighborhoods colored by N27 deployment zone (6 zones, single-hue lime ramp)
- Adjacent-zip expansion areas (Cambridge, Somerville, Quincy, Revere, Chelsea)
- 20 City-of-Boston designated public food truck sites, clustered and clickable
- Legend with zone colors and truck-capacity totals
- Filter panel to toggle layers on/off

Total planned truck capacity: **50**.

## Stack

- Static HTML + CSS + vanilla JS — no build step
- [Leaflet 1.9.4](https://leafletjs.com/) + [Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster) via CDN
- GeoJSON data committed under `data/`
- [Carto Positron](https://carto.com/attributions) basemap tiles

## Run locally

```
# from the repo root
open index.html      # macOS
start index.html     # Windows
xdg-open index.html  # Linux
```

Or drag `index.html` into any modern browser. No server needed.

## Deploy

This repo is served by GitHub Pages from the `main` branch root. Push to `main` and Pages rebuilds automatically.

## Editing

### Add a public food truck site
Edit `data/sites.geojson` — add a Feature with `site_id`, `name`, `address`, `tier` (1-3), `time_slots`, `capacity`, and `[longitude, latitude]` coordinates.

### Reassign a neighborhood to a different zone
Edit `data/zones.json` — move the neighborhood name from one zone's `neighborhoods` array to another's. The map reads this file at load time; no code change needed.

### Change zone colors
Edit the `color` field in `data/zones.json`. Stick to single-hue ramps — see the N27 brand system.

## Data sources

- **Boston neighborhoods:** [Analyze Boston — Boston Neighborhoods](https://data.boston.gov/dataset/boston-neighborhoods)
- **Adjacent zip boundaries:** US Census TIGER/Line ZCTA, filtered to MA zips 02139, 02142, 02143, 02144, 02150, 02151, 02169
- **Public food truck sites:** [City of Boston Food Trucks Schedule](https://www.boston.gov/departments/small-business-development/city-boston-food-trucks-schedule), geocoded manually

## License

Map code: repo owner's discretion. Data layers retain original licenses (Analyze Boston / US Census / City of Boston open data).
