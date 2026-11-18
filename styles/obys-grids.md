---
name: Obys Grids
url: https://grids03.obys.agency/
category: editorial
theme: light
mood: [minimal, editorial, bold]
signature: A white page ruled by thick black column bars, one grotesk used at only two sizes (378px and 12px), black and white portraits, and an animated barcode of vertical stripes running down the left edge.
palette:
  - { hex: "#FFFFFF", role: canvas }
  - { hex: "#000000", role: type, bars and stripes }
  - { hex: "#DEDFD9", role: warm grey panels }
  - { hex: "#B2B2B2", role: secondary text }
fonts:
  - { family: "Obys Sans", role: display and body, weights: "400 only", free_alternative: "Inter Tight 400, or Neue Montreal (Pangram, free for personal use)" }
radius: "0px, square"
stack: [Vite, Lenis, Canvas 2D, CSS keyframes, Custom cursor]
checked: 2026-11-18
visual_check: true
---

# Obys Grids

**In one line:** an agency's design-education microsite about grids that is itself a grid demonstration: rules, columns and extreme type contrast in black and white.

## Colour
White and black only, with a warm grey (#DEDFD9) for the closing panel and grey (#B2B2B2) for secondary notes. Colour is absent on purpose; photographs are black and white.

## Type
One grotesk at weight 400, used at almost only two sizes: 378px for the title and season number, and 12px for everything else, with a 90px uppercase step for section words. The 12px text runs at 1.17 line height and -0.02em. The jump between sizes is the design.

## Layout and rhythm
A four-column page where each column is capped by a thick black bar, so the grid is drawn rather than implied. The title sits top left and the season number top right at the same huge size, with a short list of principles beside it. A canvas of vertical black and white stripes fills a narrow strip on the left edge. Sections demonstrate column structures (4-column and others) with portraits placed exactly on the grid.

## Shape, depth and texture
Square everything, solid black bars as rules, no shadows. The only texture is the barcode stripe animation and photographic grain.

## Motion
Rules sweep in along their length (a keyframed line sweep), the stripe canvas animates continuously, Lenis smooths the scroll and a custom cursor follows. Interface transitions are minimal (0.3s opacity).

## Rebuild notes
- Two-size type system: display 378px (about 26vw) line height 1.0, tracking -0.04em visually; section words 90px uppercase line height 1.2; all other text 12px / 14px, -0.02em.
- Grid: four equal columns with an 8px gutter; each column starts with a black bar about 16px tall, so the grid is visible.
- Stripe strip: a 50px-wide canvas on the left edge drawing vertical bars of random widths in black and white, shifting every few frames.
- Rule sweep: `transform-origin: left; animation: sweep 0.9s cubic-bezier(0.65, 0, 0.35, 1)` from `scaleX(0)` when the section enters.

## Why it does not look generic
The subject (grids) is the layout, drawn in black bars instead of hidden. Using only two type sizes is a strong, legible system that makes every other page with five heading levels look busy.

## Steal this
- Draw the grid: cap each column with a solid bar so structure becomes the decoration.
- Limit the type to two sizes, one enormous and one small, and let the gap carry hierarchy.
- Use one narrow animated strip at the page edge as the only ornament.

## Not for
Products that need colour coding or many content types. Long reading, where 12px body text across the whole site would be too small.
