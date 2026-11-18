---
name: Forge Automotive
url: https://forgeautomotive.co.uk/
category: mobility
theme: dark
mood: [luxurious, cinematic, bold]
signature: Three customised cars lined up nose-on in the dark, a red one in the middle, under a centred ultralight serif headline, behind a black entry gate that asks you to accept or reject cookies before entering.
palette:
  - { hex: "#000000", role: canvas }
  - { hex: "#0C0C0C", role: raised surfaces }
  - { hex: "#161616", role: panels }
  - { hex: "#FFFFFF", role: text }
  - { hex: "#F2F1ED", role: light buttons }
fonts:
  - { family: "PP Editorial New", role: display, weights: "200 ultralight, 300", free_alternative: "Instrument Serif 400, or Newsreader 200" }
  - { family: "Geist", role: body and labels, weights: "300 body, 600 tracked uppercase labels", free_alternative: "Geist (Google Fonts)" }
radius: "0px, square"
stack: [Next.js, Lenis, Canvas 2D, Split words, CSS keyframes, CSS transitions]
checked: 2026-11-18
visual_check: true
---

# Forge Automotive

**In one line:** a UK atelier for bespoke vehicle builds that opens like a private garage: a black gate, then three cars lit in the dark under a thin, elegant serif.

## Colour
Black and two near-blacks (#0C0C0C, #161616) for every surface, white type, and an off-white for the few filled buttons. The red of the hero car is the only colour on the first screen, and it is in the photograph, not the interface.

## Type
PP Editorial New at weight 200 for display: 90 to 140px headlines with -2px tracking and a 1.1 line height, centred. Geist at 300 carries 18px body text with -0.5px tracking; labels are Geist 600 at 10px uppercase with very wide tracking (+0.3em). The contrast is hairline serif against spaced-out capitals.

## Layout and rhythm
An entry gate first: logo, a centred line of tracked capitals stating the promise, and two serif text buttons ("accept and enter", "reject and enter"). Inside, the header holds social icons left, the logo centred and a "navigate" label with a menu icon right. The hero centres the headline over a composed photograph of three vehicles, with a two-line description under them. Builds follow as full-screen chapters with "next build" transitions.

## Shape, depth and texture
Square edges, no outlines beyond hairlines, and studio car photography on black tarmac. A thin conic-gradient shine travels around some button borders.

## Motion
Words rise into place on a sharp ease-out, `cubic-bezier(0.43, 0.195, 0.02, 1)` at 0.5s (0.75s for larger moves), on about 140 split word spans. Filters and borders transition at 0.5 to 0.6s ease-in-out; letter-spacing animates on hover. Moving to the next build dims and rises the current one and fades the next in. A conic shine rotates around buttons every 4.5s and a logo marquee scrolls at 20s.

## Rebuild notes
- Display: ultralight serif 200, 96px (90 to 140px), line height 1.1 to 1.2, tracking -2px, centred, two lines.
- Labels: 10px uppercase weight 600, tracking +0.3em, line height 2.0. Body 18px / 1.4 weight 300, -0.5px.
- Word rise: split headings into words wrapped in an overflow-hidden span; translate from 105 percent with `cubic-bezier(0.43, 0.195, 0.02, 1)` over 0.5s, 30 to 40ms stagger.
- Border shine: a `conic-gradient` with a narrow white band, rotated via an animated custom property (`@property --angle`) over 4.5s, masked to the border.
- Entry gate: keep it to one screen with both choices equal in weight; never make "reject" harder to find.

## Why it does not look generic
The gate and the dark studio lighting make the site feel like being admitted into a private workshop. The ultralight serif against the heavy vehicles is a deliberate contrast of craft and power.

## Steal this
- Set a hairline serif headline over heavy, physical photography for a craft-versus-power contrast.
- Pair it with tiny, widely tracked uppercase labels for all navigation.
- Treat each item in a portfolio as a full-screen chapter with a "next" transition instead of a grid.

## Not for
Sites that must show prices or comparison quickly; the gate and chapters slow the visit. Brands without studio-grade photography.
