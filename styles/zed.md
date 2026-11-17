---
name: Zed
url: https://zed.dev
category: devtool
theme: light
mood: [editorial, tactile, technical]
signature: The page presents two products as a pair of printed-style masthead cards, one red and one blue, each with its own pixel-pattern tile, above a full editor screenshot on marbled pink paper.
palette:
  - { hex: "#EEE7E7", role: canvas }
  - { hex: "#0A0A0A", role: text }
  - { hex: "#1348DC", role: accent-blue }
  - { hex: "#BF3C27", role: accent-red }
  - { hex: "#669F59", role: green-diff }
  - { hex: "#C8C4C4", role: border }
fonts:
  - { family: "IBM Plex Serif", role: display, weights: "regular 400 to medium 500, italic for taglines", free_alternative: "IBM Plex Serif (Fontsource / Google Fonts)" }
  - { family: "Writer", role: body, weights: "400", free_alternative: "IBM Plex Mono (Fontsource / Google Fonts)" }
radius: "4px, nearly square with raised bottom edges"
checked: 2026-11-17
visual_check: true
---

# Zed

**In one line:** a code editor company whose page reads like a small publisher's catalogue: two product cards, warm paper, and a real working editor underneath.

## Colour
The canvas is blush grey-pink paper (#EEE7E7) with a faint marbled texture. Brand colours are assigned per product: bold blue (#1348DC) for Zed and brick red (#BF3C27) for the new Delta, each filling its icon tile and its Download button. The screenshot adds pale red and green diff stripes and lavender comment highlights. Text is near-black.

## Type
A serif for the company line ("Zed Industries", about 25px) and product names, with italic mono-flavoured taglines at about 14px, and a typewriter-style body for everything else. The serif-plus-mono mix reads as editorial instead of developer-tool sans.

## Layout and rhythm
A narrow centred column about 750px wide with hairline edges. The top block is a masthead: company name left, tagline under it, then a two-up row of product cards, each with a square pixel-pattern tile at left and name, "Est" year, two-line description and two buttons at right. The editor screenshot follows at full column width, tall and dense.

## Shape, depth and texture
Buttons are 4px with a darker inset bottom edge, so they look pressed from a keycap. Tiles are chunky dithered patterns of a triangle and a Z form in red and blue. The screenshot is real UI with three panes (project list, agent thread, diff).

## Motion
Not observed.

## Why it does not look generic
Two products are shown as sibling "Industries" brands with establishment dates, which makes the company feel like a studio. The marbled paper and tactile buttons are rare in dev tools.

## Steal this
- Give each product in a family its own saturated colour for tile and button, on one neutral paper background.
- Add a dark inset line along the bottom of buttons for a pressed-key feel without gradients.
- Lead with a masthead (company name, italic tagline, "Est" dates) before showing screenshots.

## Not for
Products with a single focused message; the double-card masthead splits attention.
