---
name: Zirka
url: https://www.zrk.technology/
category: hardware
theme: dark
mood: [technical, serious, cinematic]
signature: A black targeting display: a header strip of vertical bars that fill orange as you scroll, mono telemetry text typing itself out, and 200px orange figures framed like readouts beside a hard-lit render of the interceptor.
palette:
  - { hex: "#000000", role: canvas }
  - { hex: "#DDDDDD", role: text, rules and outlines }
  - { hex: "#FC4F00", role: figures, progress and the contact button }
  - { hex: "#050505", role: panels }
fonts:
  - { family: "Inter Display", role: display and body, weights: "500, tight", free_alternative: "Inter Display (Google Fonts, opsz)" }
  - { family: "Geist Mono", role: telemetry and labels, weights: "400 at 10px uppercase", free_alternative: "Geist Mono (Google Fonts)" }
radius: "0px, square"
stack: [GSAP 3 ScrollTrigger, GSAP Observer, Lenis, Webflow, Canvas image sequence, CSS keyframes, Custom cursor]
checked: 2026-11-18
visual_check: true
---

# Zirka

**In one line:** a Ukrainian drone-interceptor maker whose site behaves like the system's own heads-up display: telemetry, coordinates, progress bars and big orange numbers on black.

## Colour
Black for the whole page, a light grey (#DDDDDD) for text, rules and outlines, and grey at 40 percent for secondary lines. One signal orange (#FC4F00) marks key figures, the filled part of the progress strip and the outlined contact button. Product renders are monochrome with hard white light.

## Type
Inter Display at weight 500 throughout: 187 to 200px for figures, 72px headlines at line height 0.88 and -0.05em, 48 and 32px for subheads. Geist Mono at 10px uppercase carries telemetry blocks, coordinates and labels, and is the most-used text on the page by volume. Headlines split two tones: grey for context, white for the subject.

## Layout and rhythm
A framed header bar holds the logo, a city clock, four nav items, a strip of about 40 vertical bars and a contact button. Corner labels show live cursor coordinates (X and Y). The hero puts the headline bottom left over a dark product render; telemetry text sits top left. Stats sections centre one huge orange number inside a thin rectangle, with a label on the left and a step counter (01 / 02) on the right.

## Shape, depth and texture
Square corners, 1px light outlines, thin frames around figures and a subtle film grain over black. Depth comes from the product render's hard light.

## Motion
Mono text decodes character by character (220 to 320ms fade per character, with blink and flicker keyframes). The header bars fill as you progress through the page. A canvas image sequence of the product is scrubbed by scroll (frames snapped), a long info section scrubs over about 3150px, and dividing lines draw with `scrub: 1`. Vertical marquees drift over 80s. GSAP with ScrollTrigger and Observer, Lenis and Webflow Interactions.

## Rebuild notes
- Type: figures 187 to 200px weight 500, line height 0.74 to 1.0, tracking -0.05em; headlines 72px, line height 0.88, -0.05em; 48px at 0.9, -0.04em; 32px at 0.9, -0.03em. Telemetry 10px uppercase mono, line height 1.3.
- Progress strip: 40 thin vertical bars in the header; on scroll, fill `n = round(progress * 40)` of them with #FC4F00.
- Decode text: split mono lines into characters, reveal each with a 220 to 320ms opacity step and a short random-character flicker before settling.
- Image sequence: preload a frame set, draw to a full-viewport canvas, map ScrollTrigger progress to a frame index with snapping.
- Readout box: a 1px #DDDDDD frame around the figure with generous padding, label left, step counter right, everything vertically centred.
- Library rules to weigh: the city clock and coordinates are ornament unless the subject is location and targeting (SLOP11). Here they are; elsewhere, cut them.

## Why it does not look generic
The interface borrows the product's own operating context (targeting, telemetry, signal orange), so the site feels like using the system, not reading about it. Numbers are framed as instrument readouts, which makes statistics feel measured instead of boasted.

## Steal this
- Let the page chrome reproduce the product's operating display (a HUD, a console, a dashboard strip) when the audience uses that kind of interface.
- Show a key figure in a thin frame like an instrument readout, with a step counter beside it.
- Fill a segmented bar in the header as the reader moves through the story.

## Not for
Consumer or lifestyle brands, where the military HUD reads as cold or threatening. Pages that need to be skimmed quickly; the decoding text and pinned stats slow reading on purpose.
