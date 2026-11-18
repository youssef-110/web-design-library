---
name: Don't Look Up
url: https://www.dontlookup.app/
category: consumer-app
theme: light
mood: [playful, friendly, tactile]
signature: A pencil-drawn game on warm paper: a giant pair of legs stands over a crowd of tiny sketched people, under a hand-lettered black title with eyes for the O's, and two sticker-like buttons with thick outlines.
palette:
  - { hex: "#F4F3EF", role: paper canvas }
  - { hex: "#14140F", role: ink, outlines and buttons }
  - { hex: "#F8E08A", role: highlight yellow }
  - { hex: "#C0342A", role: alarm red }
fonts:
  - { family: "Marsipan", role: display and buttons, weights: "400-900, hand-drawn", free_alternative: "Gochi Hand, or Patrick Hand for small sizes" }
  - { family: "Nunito", role: body and interface, weights: "600-800", free_alternative: "Nunito (Google Fonts)" }
radius: "irregular 24 to 30px on stickers, circles on tokens"
stack: [Vite, Canvas 2D, CSS keyframes, CSS transitions]
checked: 2026-11-18
visual_check: true
---

# Don't Look Up

**In one line:** a satirical browser game where you are rich, very tall and standing on a crowd; the whole site is the game, drawn in pencil on paper.

## Colour
Warm paper (#F4F3EF) and soft-black ink (#14140F) do almost everything. A butter yellow (#F8E08A) highlights coins and fees, and a red (#C0342A) signals alarms and urgency. No gradients, no photography.

## Type
A hand-drawn display face (Marsipan) for the title and buttons, heavy (800 to 900), at 13 to 40px in the interface with slight positive tracking; the hero title itself is lettered artwork. Nunito at 600 to 800 handles body text and HUD numbers at 11 to 17px.

## Layout and rhythm
One full-screen canvas: the title in the centre, a single line of premise under it, and two buttons (start, tutorial). Everything else is the game world: tiny people walking around a pair of giant legs, with speech bubbles. Panels and HUD elements appear in game states rather than as page sections.

## Shape, depth and texture
Pencil texture and cross-hatching on the drawings, soft grey cast shadows under characters, and buttons that look like stickers: thick 2 to 3px ink outlines with an offset solid shadow. Irregular, slightly uneven radii.

## Motion
The canvas animates the crowd continuously. Interface feedback is fast: 0.12 to 0.26s on opacity, transform and shadow. Named keyframes cover coin flips (5s loops), a fee bob, drop-in, fade-up and rise-in entrances, an urgent pulse, a tap beat and a pile wipe for game events.

## Rebuild notes
- Buttons: ink fill or paper fill, 3px #14140F border, `box-shadow: 3px 4px 0 #14140F`, radius about 24px 30px (uneven); on press translate 2px down and shrink the shadow, 0.12s ease-out.
- Drawings: pencil-textured sprites (scanned or drawn), soft grey ellipse shadows under each character, 2D canvas with simple steering for the crowd.
- Type: hand-drawn display 800 at 13 to 40px with +0.02 to +0.04em; Nunito 600 at 11 to 17px for UI text.
- Timing: game feedback under 0.26s; entrances 0.7 to 0.9s with a slight overshoot only on tokens and coins.
- Library rules to weigh: hard offset shadows are a costume outside a world that earns them; here the sketchbook world does. Keep them on game objects and buttons only.

## Why it does not look generic
The landing page is the game, so the first screen already shows the premise (the crowd, the legs) instead of describing it. The pencil style makes a dark joke feel gentle.

## Steal this
- Make the first screen the product's own scene running, with only a title, one line and two buttons over it.
- Draw buttons as stickers (thick outline, offset shadow) when the world is hand-drawn, and nowhere else.
- Use a hand-lettered title with one drawn detail that carries the theme (here eyes in the O's).

## Not for
Serious or professional products. Content-heavy sites that need scrolling sections.
