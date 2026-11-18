---
name: Awards Racing
url: https://awards.racing/
category: consumer-app
theme: dark
mood: [loud, playful, bold]
signature: A wide italic racing title split diagonally into yellow and white, over a stepped, pixel-edged window into a 3D scene of two cartoon racers facing off behind a turbine wheel.
palette:
  - { hex: "#000000", role: canvas }
  - { hex: "#FFC500", role: racing yellow }
  - { hex: "#FFFFFF", role: text }
fonts:
  - { family: "Druk Wide", role: display, weights: "900 italic uppercase, 500", free_alternative: "Unbounded 900 with a CSS skew, or Archivo Black" }
radius: "0px; the hero frame is a stepped pixel shape"
stack: [Nuxt, WebGL, Physics engine, CSS keyframes]
checked: 2026-11-18
visual_check: true
---

# Awards Racing

**In one line:** an online racing game for the awards crowd, introduced like a fight poster: two characters, one wide italic title and a live player counter.

## Colour
Black around everything, a racing yellow (#FFC500) and white. The title is split along a diagonal so the left part is yellow and the right part white. The 3D characters bring purple, yellow and red.

## Type
Druk Wide at weight 900 italic, uppercase, 138px, line height 0.92, with no extra tracking; a 500 weight appears in the interface. One face, used at poster scale.

## Layout and rhythm
A single full-viewport stage: a black page with a stepped, pixel-edged frame (like an enlarged 8-bit outline) that crops the 3D scene, the title centred across it, and minimal interface. A welcome sequence plays before the race interface.

## Shape, depth and texture
The frame edge is built from square steps, so a modern 3D render sits inside a retro game shape. Rendered characters with soft shading, smoke and a chrome turbine wheel provide all depth.

## Motion
Letters of the welcome title pop in one by one and the two halves fly out left and right on exit; a circle reveal opens the next state; an online counter pulses with the number of live players; share buttons have a press animation. The race runs in a physics engine on a canvas.

## Rebuild notes
- Title: wide 900 italic uppercase at 138px (about 9.6vw), line height 0.92; the two-colour split is a hard-stop `linear-gradient(99deg, #FFC500 calc(50% - 1px), #FFFFFF calc(50% + 1px))` clipped to the text. This is gradient text (SLOP20) used as a split, not a blend; keep the stop hard.
- Pixel frame: a CSS `clip-path: polygon(...)` with stepped coordinates in 4 to 6 steps per corner, or an SVG mask; animate the steps outward for the intro.
- Letter pop: per-letter spans scaling from 0.6 with opacity, 40ms stagger, a short overshoot; fly-out by translating each half 120vw in opposite directions.
- Live counter: pulse only when the number changes, not on a loop.

## Why it does not look generic
It borrows boxing-poster composition (two rivals face to face, one title between them) for a racing game. The stepped frame ties a polished 3D scene to arcade history.

## Steal this
- Split a title colour along a diagonal with a hard stop to show two sides or two teams.
- Crop a 3D or photo scene inside a stepped, pixel-edged window for a retro-game frame.
- Show a live count of people present as the page's only statistic, pulsing when it changes.

## Not for
Anything that needs reading or explanation; the page is a poster and a game. Calm or premium brands.
