---
name: Agrumea Farm
url: https://www.agrumeafarm.it/en
category: food
theme: light
mood: [warm, playful, friendly]
signature: A carousel of 3D jam and preserve jars floating in an arc on a warm cream page, turning around a large burgundy disc whose edge carries a curved line of text.
palette:
  - { hex: "#FDF3EB", role: cream canvas }
  - { hex: "#762530", role: burgundy text and disc }
  - { hex: "#E94E1B", role: blood-orange actions and accents }
fonts:
  - { family: "Ivy Style Sans", role: body and interface, weights: "400-600", free_alternative: "Figtree, or Instrument Sans" }
  - { family: "IvyMode", role: wordmark-style accents, weights: "400-600", free_alternative: "Fraunces 500" }
radius: "pills and circles on controls, 14 to 16px on cards"
stack: [Nuxt, Lenis, WebGL, CSS keyframes, Page transitions, Custom cursor]
checked: 2026-11-18
visual_check: true
---

# Agrumea Farm

**In one line:** a Sicilian maker of marmalades and preserves whose home page is a product carousel you could pick a jar from, set on cream like a farm shop label.

## Colour
Cream (#FDF3EB) is the paper, a deep burgundy (#762530) is the ink and the big disc, and a blood-orange (#E94E1B) marks interactive elements (the active language circle, the menu dot, cookie buttons). The jars bring their own label colours, which the page leaves to stand out.

## Type
Ivy Style Sans at 14 to 32px, weights 400 and 600, with small uppercase labels at +0.04em. The type stays small and calm; the products and the curved text on the disc do the shouting. IvyMode echoes the logo's serif.

## Layout and rhythm
A centred logo at the top with round language toggles left and a pill menu right. The hero is the product carousel itself: jars arranged on an arc, the centre jar upright and the side ones tilted, over a large rotated burgundy disc with curved lettering at its edge. A "scroll to discover" label sits at the bottom centre; the page scrolls inside a single container.

## Shape, depth and texture
Circles and pills for controls, a large disc as the stage, and rendered 3D jars with soft natural shadows. No hard rules; outlines are 1px in orange or burgundy on buttons.

## Motion
Page loads and navigations use branded transitions: a fruit loader whose mark draws in, then an orange panel sweeps and lifts away with a line sweep. Interface moves use `cubic-bezier(0.4, 0, 0.2, 1)` at 0.35s; larger moves `cubic-bezier(0.645, 0.045, 0.355, 1)` at 0.78s. The jar carousel rotates around the disc on scroll, Lenis smooths scrolling and a custom cursor follows.

## Rebuild notes
- Carousel: place 5 to 7 product images (or 3D renders) on a circle of radius about 70vw centred below the fold; rotate the ring with scroll and tilt each item by its angle so the centre item stands upright.
- Disc: a burgundy circle about 90vw wide behind the ring, with SVG `textPath` lettering along its rim, rotating slowly with the ring.
- Page transition: a full-screen orange panel that translates up to cover (0.78s in-out), the logo mark draws in, then the panel lifts away; keep it under one second in total.
- Type: body 14.4px / 1.5 at +0.01em, lead 32px / 1.3 weight 400, labels 14px uppercase +0.04em.

## Why it does not look generic
The home page is a shop shelf: the products are the hero, arranged as if on a turntable at a market stall. Cream, burgundy and blood orange come straight from Sicilian citrus and preserves.

## Steal this
- Make the hero a physical arrangement of your actual products on a ring that turns with scroll.
- Run text along the edge of a large disc with `textPath` to frame the product without a headline block.
- Use a branded panel wipe in the brand's action colour for page changes, short and once per navigation.

## Not for
Catalogues with many products to compare; the carousel shows a handful at a time. Services without a physical product to stage.
