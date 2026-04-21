# N27 Design System

**Number 20 Seven LLC** — Boston-based holding company spanning **real estate, restaurants, and mobile-food advisory services**. N27's current operating subsidiary is a Boston brick-and-mortar restaurant that grounds its advisory work in live restaurant operations; its flagship advisory play is a food-truck franchise expansion thesis that inverts the traditional truck-to-restaurant playbook.

This design system codifies N27's brand — **classical hospitality, investor-grade**. The typographic vocabulary of a well-established steakhouse or long-standing architecture firm: restraint, serifs, generous whitespace, a single accent color used sparingly. Every surface should read as operator-led and institutionally credible.

> **Number 20 Seven LLC — Real Estate · Restaurants · Mobile Food**
>
> That's the tagline. It's the umbrella. Subsidiaries, products, and advisory engagements sit beneath it.

---

## Sources

- **Brand Guide:** `reference/N27_Brand_Guide.md` — full brand system + 16-slide investor deck content, provided by Chris Conroy.
- **Codebase:** `verifygrit-admin/n27-food-truck` (GitHub) — the Greater Boston Food Truck TAM map. Static Leaflet single-page app. Its `index.html` already uses the N27 CSS variable palette, Cinzel typography, and the single-hue lime zone ramp — treated here as the canonical in-code reference for N27 web rendering.
- **Planned integrations (future work):** investor-grade prospectus, TAM map, Investor Deck — all to be unified in a single-page marketing/prospectus site that leverages this system.

---

## Index

| File / Folder | Purpose |
|---|---|
| `README.md` | This file — context, content fundamentals, visual foundations, iconography. |
| `SKILL.md` | Skill manifest (cross-compatible with Claude Code Agent Skills). |
| `colors_and_type.css` | CSS custom properties for colors, fonts, spacing, semantic tokens. |
| `reference/N27_Brand_Guide.md` | Full source brand guide (read-only reference). |
| `assets/` | Logos, star motif SVGs, background textures, placeholder imagery. |
| `preview/` | HTML cards that populate the Design System tab. One concept per card. |
| `ui_kits/tam-map/` | UI kit: Greater Boston Food Truck TAM map (Leaflet). |
| `ui_kits/prospectus-site/` | UI kit: single-page investor prospectus marketing site. |
| `slides/` | Deck templates — title, content, big-stat, comparison, table, ask, thank-you. |

---

## Content Fundamentals

**Voice:** Founder-operator speaking to sophisticated capital. Confident without swagger. Specific about numbers and geography. Restrained about superlatives.

**Tense & pronoun:** First-person plural (**we**) when N27 speaks; named third-person when describing brand partners or comparables. Direct address ("you") is rare — the deck is a position paper, not a sales brochure.

**Casing conventions:**
- **SMALL CAPS, TRACKED** — eyebrows, section tags, footer, tagline lockups. Always Calibri, bold, tracked ~0.14em. Examples: `YESTERDAY`, `OUR THESIS`, `WHY MOBILE WINS`, `USE OF FUNDS`.
- **Sentence case** for slide titles. Titles end with a period — they are declarative statements, not headlines. Examples: `Inverting the restaurant-to-truck playbook.` / `Fixed restaurants have a scaling problem.` / `A $1.1B U.S. market growing at 6.5% CAGR.`
- **Title Case** reserved only for proper nouns and N27's own composed titles (e.g. `Food Truck / Franchise Expansion`).

**Numbers:** Abbreviated for scale (`$5M`, not `$5,000,000`), with ranges for honesty (`$1.3–2.3M`, `12–24 mo`, `5–6% royalty`). Never invent precision — use `~90 days`, `12–18 months`, `80%+ brand recognition`.

**Star motif in copy:** `★` is a divider, not a bullet marker. Major sections separated by `★ ★ ★` (three stars). Individual bullets use a deep-lime `★` in place of a disc.

**Example phrases that hit the voice:**
- "We're not writing a new playbook — we're syndicating the one that already works."
- "Operators who know restaurants and the streets."
- "Trucks chase traffic; buildings wait for it."
- "Brand equity already paid for."
- "Let's put every brand on every corner — and every curb."

**What to avoid:**
- Emoji. Full stop.
- Exclamation marks.
- Startup-speak ("disrupt", "unlock", "synergy", "game-changer", "unlocks value").
- Sales-brochure adjectives ("amazing", "incredible", "awesome"). The one use of "Incredible reach" in the source deck is title-cased and deliberate — don't generalize it.
- First-person singular ("I", "me") — N27 always speaks as a firm.

---

## Visual Foundations

### Palette

Tight monochrome + one deep-lime accent. **Black + ivory carry 90%+ of surface area. Deep lime is the singular accent.** Never introduce red, amber, blue, or navy.

| Role | Hex | Token |
|---|---|---|
| Black (dominant) | `#0A0A0A` | `--n27-black` |
| Ink (body on ivory) | `#1A1A1A` | `--n27-ink` |
| Ivory | `#F5EEE3` | `--n27-ivory` |
| Cream | `#FAF6EE` | `--n27-cream` |
| Rule (hairline) | `#DDD5C7` | `--n27-rule` |
| Mute (warm gray) | `#8A7E6E` | `--n27-mute` |
| **Deep lime (accent)** | `#4A5D3A` | `--n27-lime` |
| Lime dark | `#33412A` | `--n27-lime-dark` |

For maps and charts, the zone ramp is a **single-hue lime ladder** from `#2C3722` to `#D4DEC1` — six steps, monochromatic. Charts use lime + lime-dark + ivory; no legend colors beyond that.

### Typography

- **Display / headers:** `Cinzel` (fallback: Trajan Pro → Playfair Display → Cormorant Garamond → Georgia Bold). Classical Roman capitals. Tracked ~0.08em. **Never substitute a geometric sans-serif (Inter, Poppins, Montserrat) — it breaks the brand vocabulary entirely.**
- **Body / subtitle:** `Georgia`. Italic for subtitles and callouts. Regular for paragraphs and tables.
- **UI / eyebrows / footers:** `Calibri`. Used *only* for small-caps tracking artifacts — never for headers.
- **Slide titles:** 28–32pt max. Long titles split into title + subtitle rather than force-wrap.

### Spacing

Generous whitespace is part of the brand. A slide's content area starts well below its title (y: 2.4" on 13.3×7.5" wide layout) and always clears the footer by 0.4"+. In web layouts, prefer 48–96px vertical separators between major sections. Dense tables are acceptable; crowded hero sections are not.

### Backgrounds

- **Content:** white or ivory (`#F5EEE3`). Never cream on content slides.
- **Feature / cover / Ask / Thank You:** full black (`#0A0A0A`) with ivory type.
- **No gradients. No blur. No textures or photos behind text.** The palette is flat by design.
- Imagery, when used, is warm-toned, classical, editorial — never saturated or synthetic. Think hospitality photography: restaurant interiors, brass fixtures, food overhead shots in natural light. Use sparingly and always full-bleed within a panel — never tiled or decorative.

### Motifs (repeatable)

1. **★ ★ ★ three-star divider** — deep lime, centered, between major sections or above/below key statements.
2. **Single centered ★** — section-open flourish above slide titles on key slides (cover, Ask, Thank You).
3. **Deep-lime hairline** — `#4A5D3A`, 1–2pt, short (1.5–2.5" wide, **never full-width**). Under cover titles, above signatures, separating hierarchy within dark panels.
4. **Category tagline lockup** — `REAL ESTATE · RESTAURANTS · MOBILE FOOD` in small tracked italic serif, mute color. On cover, Thank You, and end-of-document signature block.

### Borders & corners

- **Corner radius: 0 (or near-zero).** Classical geometry only. `--radius-0: 0px` is the default; `--radius-1: 2px` is the largest rounding allowed and is reserved for form inputs.
- **Hairline borders:** 1px solid `--n27-rule` (`#DDD5C7`). Used on cards, table rows, footer dividers.
- **Lime hairline accent:** 1.5pt solid `--n27-lime`. Used at the *top* of stat cards and on the *left edge* of "thesis" cards (2–3px vertical bar).

### Shadows & elevation

Restraint. Three levels:
- `--shadow-0` — none. Default. Most surfaces sit flat on the page, separated by hairlines, not shadows.
- `--shadow-1` — near-imperceptible. `0 1px 2px rgba(10,10,10,0.04)`. Used only on actively-interactive controls (the map layer panel, a hover-lifted card).
- `--shadow-2` / `--shadow-lift` — reserved for modal overlays or print preview panels. Not used in flat layout.

No inner shadows. No glow. No colored shadows.

### Cards

- White or ivory fill (ivory on white page; white on ivory page — always one step of contrast).
- 1px `--n27-rule` border, square corners.
- Optional top hairline in `--n27-lime` (for stat cards) **or** left-edge `--n27-lime` bar (for thesis cards). Never both.
- Eyebrow top-left (Calibri caps tracked). Header (Cinzel bold). Body (Georgia). ★ divider before bullet lists.

### Animation & motion

Understated. Three rules:
- **Ease-out, short durations** — 180ms for hover states, 240ms for layout transitions. Cubic-bezier `(0.2, 0.0, 0, 1)`.
- **Opacity and position only.** Fade and short-distance slide (6–12px). Never scale, bounce, spring, or elastic.
- **No parallax, no scroll-jacking, no hero auto-rotation.** Classical brands don't jitter.

### Hover / press states

- **Hover (links, buttons):** shift color to `--n27-lime` if ink, or to `--n27-ivory` if mute. Do not add underline on hover if already underlined; do not animate color — instant.
- **Press (buttons):** 4% darken on the fill; no shrink, no shadow change.
- **Focus:** 2px `--n27-lime` outline offset 2px. Never remove focus rings.

### Transparency & blur

Avoid both. The brand is opaque. The single exception: a map can use a 60% opacity ivory overlay on a hovered zone to create a subtle highlight without introducing a new color.

### Layout rules

- Max content width on web: **1120px** for prose surfaces, **1280px** for dashboards/maps.
- Footer convention (deck): left = `NUMBER 20 SEVEN LLC`, center = `CONFIDENTIAL · INVESTOR DECK`, right = `NN / 16`. All Calibri 9pt, mute, tracked. Preceded by a full-width `--n27-rule` hairline.
- Slide/page titles: left-aligned, at consistent y-offset (web: 96px from top; deck: 0.9" from top).
- **Never center body paragraphs.** Center only display hero elements (cover title, Ask $5M, Thank You).

### Color vibe of imagery

Warm-neutral. Suitable: low-contrast restaurant interiors in natural light, black-and-white city photography (Boston in particular), natural-toned food overheads. **Never:** saturated reds, cool blues, neon, grain-heavy film simulations, AI-slick composites, or product-shot drop shadows.

---

## Iconography

**N27 uses almost no iconography.** The brand's signal is typographic, not pictographic. When marks are needed:

1. **The ★ (Unicode U+2605 black star).** The signature mark. Deep-lime, used as:
   - Single centered flourish on cover / Ask / Thank You.
   - `★ ★ ★` divider between major sections.
   - `★` bullet markers in lists (replacing disc or dash bullets).
   The star is the *only* decorative glyph the brand uses regularly.

2. **En-dashes and middle dots** for separation: `REAL ESTATE · RESTAURANTS · MOBILE FOOD`, `857.919.1552 · marlon@n27llc.com`. Spaces-around-dots set tight tracking; Calibri or Georgia depending on context.

3. **Roman numerals** for enumeration: `I / II / III` in Cinzel bold deep lime for tiers and numbered lists. Never Arabic numerals for outline levels.

4. **Functional UI icons** (map controls, close-X, zoom +/−) — use the **native Leaflet control set** where present (the TAM map already ships these). For anything beyond, use **Lucide** (`https://unpkg.com/lucide-static@0.452.0/`) via CDN in line-only (stroke 1.5px) and always render in `--n27-ink` or `--n27-mute` — never in lime unless indicating a selected state. Lucide is flagged as a substitution — the brand has no proprietary icon system.

**No emoji.** **No colored pictograms.** **No emoji-as-bullet-in-card.** If a section feels like it wants an icon, it probably wants a number or a star instead.

---

## Next Steps / Open Items

- Web font files: **Cinzel** and **Cormorant Garamond** loaded via Google Fonts. Calibri is a system font on Windows and has no web substitute with identical metrics — on the web, the `--font-ui` stack falls through to Helvetica Neue / Arial. If the brand wants a web-faithful Calibri replacement (e.g. **Carlito**, an open metric-compatible clone), flag and swap the stack.
- The star motif and N27 lockup exist as typographic setups here; if the brand has a custom-drawn star or wordmark SVG, please supply and replace `assets/n27-lockup.svg`.
