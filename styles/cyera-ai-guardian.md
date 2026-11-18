---
name: Cyera AI Guardian
url: https://secure-the-unknown.cyera.com/
category: ai
theme: dark
mood: [playful, cinematic, bold]
signature: A cel-shaded 3D asteroid field in violet, with a capsule spacecraft at the centre, behind a three-sentence headline and one "begin your mission" button that starts an interactive story.
palette:
  - { hex: "#6D2D93", role: violet scene and brand }
  - { hex: "#160923", role: deep violet text and panels }
  - { hex: "#FBFBFB", role: text and light button }
  - { hex: "#000000", role: space }
fonts:
  - { family: "Haffer", role: display and body, weights: "variable 100-900, 400-600 used", free_alternative: "Host Grotesk, or Hanken Grotesk" }
radius: "8 to 16px on buttons and panels"
stack: [WebGL, Theatre.js, GSAP SplitText, CSS keyframes]
checked: 2026-11-18
visual_check: true
---

# Cyera AI Guardian

**In one line:** a data-security campaign site built as a short space mission: you start a guided 3D story instead of scrolling a page.

## Colour
The scene is violet (#6D2D93) shading into near-black, with small lime and lilac crystals as the only contrasting colours. Interface panels and button fills use a deep violet (#160923); text and the secondary button are near-white.

## Type
One variable grotesk (Haffer). The headline is roughly 64px (measured from the render), weight 500, set as three short sentences across two centred lines. Interface text is 14 to 16px at weights 400 to 600 with slight negative tracking.

## Layout and rhythm
A single full-viewport WebGL scene with the headline centred and one dark pill button under it. Only a logo top left and two links top right sit outside the scene. The experience advances in steps (a mission) rather than by page scroll.

## Shape, depth and texture
Toon-shaded 3D objects with flat colour bands and dark outlines, so the 3D reads as illustration. A soft radial glow lights the centre. Buttons have 8px corners; the main button is a dark pill with a white arrow square inside.

## Motion
Asteroids and crystals drift and rotate continuously; the camera and scene states are sequenced with Theatre.js; headline text is split with GSAP SplitText for staged entrances. A 5s shimmer runs on a highlight, and custom loader particles float during load. Transitions use 0.6s `cubic-bezier(0.215, 0.61, 0.355, 1)` for fades and 1.4s expo out for large moves.

## Rebuild notes
- Scene: three.js with a toon material (stepped gradient map, 3 to 4 bands) plus an outline pass, objects in violet with a few lime accents, slow random rotation.
- Sequencing: author the camera path and object states as a timeline (Theatre.js or a GSAP timeline) and step through it on button presses.
- Headline: about 64px weight 500, line height 1.05, tracking -0.02em, centred, split by words for a staggered rise.
- Easing: cubic out `cubic-bezier(0.215, 0.61, 0.355, 1)` 0.6s for UI; expo out `cubic-bezier(0.19, 1, 0.22, 1)` 1.4s for scene moves.
- Provide a plain HTML version of the story (headings and text) for screen readers and no-WebGL devices.

## Why it does not look generic
A security product becomes a mission with a ship and hazards, which explains "unknown data" as unexplored space. Cel shading keeps the 3D friendly and on-brand instead of photoreal.

## Steal this
- Turn a campaign into a short guided sequence with one call to action that starts it.
- Use toon shading and outlines so 3D matches a flat brand illustration style.
- Put the whole headline in the middle of the scene and let the 3D frame it.

## Not for
Evergreen product pages that need search visibility and fast scanning. Audiences on low-power devices, unless a light fallback is built.
