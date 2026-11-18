---
name: Santal
url: https://santalarch.com/
category: studio
theme: mixed
mood: [minimal, serious, cinematic]
signature: One Helvetica word at 98px set left of centre on a slowly lit 3D field of perforated metal, with its definition in a short paragraph to the right and a six-column nav whose items each hang from a thin tick.
palette:
  - { hex: "#0F0F0F", role: dark canvas }
  - { hex: "#F0F0F0", role: light canvas and text on dark }
  - { hex: "#F2F0F0", role: muted text at 40 percent }
fonts:
  - { family: "Helvetica", role: display and body, weights: "400-500 only", free_alternative: "Inter 400 with tighter tracking, or Arimo" }
radius: "0px, square"
stack: [Nuxt, Lenis, WebGL, Swiper, CSS transitions, Custom cursor]
checked: 2026-11-18
visual_check: true
---

# Santal

**In one line:** an architecture practice presented in plain Helvetica over a rendered material surface, as if the site were a sample board of the studio's work.

## Colour
Two near-neutrals only: an off-black (#0F0F0F) and an off-white (#F0F0F0), switching between dark and light bands, with secondary text at 40 percent opacity. Colour enters only through project photography.

## Type
Helvetica at 400 for everything, with weight 500 reserved for small labels. The scale is wide and tight: 234px uppercase titles at -0.1em, 98px words at -0.05em, 50px statements at -0.03em, 33px leads, 16px body and 10px labels. Line heights hug the type (0.87 at the top sizes, 1.28 for body).

## Layout and rhythm
A six-item nav spreads across the full width, each label sitting on a short vertical tick with a hairline under the active one. The hero is a rendered field of perforated metal with soft moving light; one word sits left of centre and a three-line definition sits to its right, with a step counter (02 / 03) at the bottom. Long sections follow for philosophy, featured projects, services, consulting, the founder and an enquiry form.

## Shape, depth and texture
Square everything, hairline rules and ticks, no shadows. Depth and texture come from the WebGL material in the hero and from architectural photography.

## Motion
Words in the hero cycle (each with its definition) while the light moves across the metal. Images reveal with clip-path over 0.8s and blur clears over 0.5s, both on `cubic-bezier(0.25, 1, 0.5, 1)`. Location lines rotate slowly (24s) in the company section, tickers scroll, Lenis smooths the scroll and a custom cursor follows.

## Rebuild notes
- Type: 234px uppercase, line height 0.87, tracking -0.1em; 98px at 0.88, -0.05em; 50px at 1.0, -0.03em; 33px at 1.08, -0.03em; body 16px / 1.28, -0.02em; labels 10 to 12px weight 500.
- Easing: `cubic-bezier(0.25, 1, 0.5, 1)`; clip-path reveal 0.8s from `inset(0 0 100% 0)`; filter blur 8px to 0 over 0.5s.
- Hero material: a three.js plane with a perforated-metal normal map and a slowly orbiting area light; keep it greyscale.
- Nav: six equal columns; each item is a 1px vertical tick (about 8px) with the label beside it; the active item gets a hairline underline across its column.
- Cycling word: swap the hero word and its definition every few seconds with a short blur crossfade; provide a pause and stop it under reduced motion.

## Why it does not look generic
The hero shows a material instead of a building, which is how architects think about surfaces. Defining one word at a time ("Confident", then its definition) states the practice's values without a list.

## Steal this
- Make the hero a single word plus a two-line definition, cycling through the brand's values.
- Render one material from the trade (metal, stone, timber) as the hero texture instead of using a photo.
- Hang each nav label from a short vertical tick across a full-width six-column grid.

## Not for
Brands that need warmth or colour. Low-power audiences, since the hero relies on a WebGL material.
