---
name: Delta Cafés
url: https://deltacafes.com/en
category: food
theme: dark
mood: [warm, editorial, cinematic]
signature: Coffee-brown pages with a light, wide serif for warm sentences and a heavy condensed sans for shouted titles, under a dark floating pill nav with the red triangle logo in its centre.
palette:
  - { hex: "#2B1B14", role: coffee-brown canvas }
  - { hex: "#35221A", role: raised brown surfaces and text on light }
  - { hex: "#EDD1BD", role: milk-cream text and buttons }
  - { hex: "#F8EAE0", role: light text }
  - { hex: "#142115", role: green sustainability section }
  - { hex: "#CF1010", role: logo red only }
fonts:
  - { family: "Delta Season (custom variable serif)", role: display and body, weights: "300 display, 420-550 text, with italic", free_alternative: "Fraunces variable (opsz, wght 300-550)" }
  - { family: "Trade Gothic Condensed", role: titles and labels, weights: "500-700 uppercase", free_alternative: "Oswald 600, or Barlow Condensed 700" }
radius: "8 to 16px on cards, 48 to 60px pills"
stack: [Nuxt, Lenis, Canvas 2D, Autoplay video, CSS transitions]
checked: 2026-11-18
visual_check: true
---

# Delta Cafés

**In one line:** a Portuguese coffee roaster told through warehouse photography and coffee-coloured pages, with a serif that sounds like a conversation and a condensed sans that sounds like a sack stamp.

## Colour
The whole page is tinted by the product: espresso brown (#2B1B14) as the canvas, a lighter brown for surfaces, and milk-foam cream (#EDD1BD, #F8EAE0) for text and buttons. A forest green (#142115) marks the sustainability section. The brand red appears only in the triangle logo.

## Type
A custom variable serif in a light weight (300) sets the warm lines at 43 to 77px with a line height of 1.0 and slight negative tracking; the same family runs body text at 19px weight 550. Trade Gothic Condensed in uppercase at 110px weight 700 (tracking -0.06em) shouts section titles and sets the small nav labels at 12px. The pairing reads like a menu board and a coffee sack together.

## Layout and rhythm
A dark, translucent pill nav floats at the top with links split either side of the centred red logo, and round buttons at each end. The hero is full-bleed warehouse footage with the serif headline set low left and two small preview cards bottom right. Sections stack: the coffee journey, a magazine block with a scrolling strip of rounded photos, a quiz, the journal and sustainability.

## Shape, depth and texture
Soft radii (8 to 16px) on cards and photos, pill buttons in cream with a round arrow button attached. Photography is warm, documentary and low-lit. No gradients beyond photo overlays.

## Motion
Large moves use an in-out quart, `cubic-bezier(0.77, 0, 0.175, 1)` at 0.675s. The nav and buttons morph with a playful back curve, `cubic-bezier(0.68, -0.55, 0.265, 1.55)` at 0.45s, on position and radius. Content fades and rises slowly over 1.5s on a sine in-out. A badge rotates slowly (24s), Lenis smooths the scroll and photo strips glide horizontally.

## Rebuild notes
- Serif display: variable serif 300, 43 / 59 / 77px, line height 1.0, tracking -0.02 to -0.03em. Body 19px weight 550, line height 1.25.
- Condensed titles: 110px weight 700 uppercase, line height 0.94, tracking -0.06em; nav labels 12px 700 uppercase.
- Easing set: section moves `cubic-bezier(0.77, 0, 0.175, 1)` 675ms; nav and button morphs `cubic-bezier(0.68, -0.55, 0.265, 1.55)` 450ms; reveals `cubic-bezier(0.455, 0.03, 0.515, 0.955)` 1.5s; hovers `cubic-bezier(0.165, 0.84, 0.44, 1)` 0.5s.
- Pill nav: translucent dark fill (about rgba(20,14,10,.6)) with a backdrop blur, links split around a centred logo.

## Why it does not look generic
The palette is literally coffee, milk and the green of the plantation, so colour carries the product before any word does. The two typefaces map to the brand's two voices: the family café and the industrial roaster.

## Steal this
- Take the canvas, surface and text colours from the product itself (here espresso, crema and milk).
- Pair a light variable serif for human sentences with a heavy condensed uppercase for titles.
- Split nav links either side of a centred logo inside one floating pill.

## Not for
Cold, technical products where warmth would feel staged. Brands without their own documentary photography.
