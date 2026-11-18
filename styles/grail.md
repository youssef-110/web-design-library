---
name: Grail
url: https://grail-app.com/
category: consumer-app
theme: mixed
mood: [editorial, playful, cinematic]
signature: A wide, flared light serif in capitals spanning the black hero, over a 3D cloud of floating quest cards and heraldic pattern tiles, then a pale sheet of numbered "a chance to" rows on lilac.
palette:
  - { hex: "#000000", role: hero canvas }
  - { hex: "#F6F6F6", role: light sheet }
  - { hex: "#ECD2F3", role: lilac background and buttons }
  - { hex: "#623562", role: plum text and accents }
  - { hex: "#FFFFFF", role: text on black }
fonts:
  - { family: "PP Pangaia", role: display, weights: "300 light, uppercase", free_alternative: "Cormorant 300 uppercase, or Gloock" }
  - { family: "Switzer", role: body, weights: "400-700 variable", free_alternative: "Switzer (Fontshare, free)" }
radius: "pills (999px) on buttons, 20 to 24px on sheets and cards"
stack: [Vite, Lenis, WebGL, CSS keyframes, CSS modules, Custom cursor]
checked: 2026-11-18
visual_check: true
---

# Grail

**In one line:** an app that gives you one real-world quest a day, introduced like a book of heraldry: a flared serif, playing-card quests floating in space and a soft lilac paper underneath.

## Colour
The hero is black with white type; later sections sit on a pale grey sheet (#F6F6F6) that floats on a lilac field (#ECD2F3). Plum (#623562) is the brand ink for accents. The quest cards carry red, mustard and lilac heraldic patterns, the only strong colour.

## Type
PP Pangaia Light, a high-contrast serif with flared terminals, in capitals at 72 to 208px with line height 0.88 and slight negative tracking. Switzer carries the interface and body at 16 to 24px, bold for card titles. The contrast between a medieval-feeling display and a clean Swiss sans matches "quests" with "app".

## Layout and rhythm
A small header with the logo, a centred one-line description and a lilac pill button. The hero headline runs edge to edge; below it, a WebGL scene of cards and tiles drifts in depth. Further down, a rounded light sheet holds numbered rows in three columns: a short title on the left, a small photograph in the centre, and a sentence on the right.

## Shape, depth and texture
Pill buttons, 20 to 24px rounded sheets, playing-card proportions for quest cards, and flat heraldic patterns (checks, trees, scallops). Photography in rows is candid and small.

## Motion
Words rise in (0.78s), blocks rise (0.62s), footer items rise in sequence (0.5s each), and digits swap in for counters. A 3.4s float loops on a speech bubble. Interactions use `cubic-bezier(0.22, 1, 0.36, 1)` at 0.3s for transform and colour. The cards drift in 3D, Lenis smooths the scroll and a custom cursor follows.

## Rebuild notes
- Display: uppercase light high-contrast serif, 208px on the hero (about 14.5vw), line height 0.88, tracking -0.005em; 92 to 145px for section titles at -0.01em.
- Body: Switzer 16px / 1.24, card titles 18 to 24px weight 700.
- Floating cards: three.js planes textured with card and pattern images, scattered in a cylinder around the camera with slow random rotation; hover lifts one card toward the camera.
- Rows: a three-column grid (title, small photo, sentence) with numbers under each title, separated by 1px rules, inside a sheet with 24px radius and generous padding.
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)`; rises 0.5 to 0.8s from 16 to 24px below.

## Why it does not look generic
The heraldic patterns and flared serif turn daily habits into a quest, which is the product's promise. The rows say "a chance to" with real photographs instead of feature icons.

## Steal this
- Pick a display face from the product's metaphor (here quests and heraldry) rather than from the app category.
- Float the product's own content units (cards) in 3D behind the headline instead of a phone mockup.
- List benefits as numbered rows with a small real photo each, in three columns, not as icon cards.

## Not for
Productivity or enterprise tools, where the medieval flavour would confuse. Pages that need a product screenshot above the fold.
