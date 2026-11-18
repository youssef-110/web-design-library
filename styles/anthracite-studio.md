---
name: Anthracite Studio
url: https://anthracitestudio.be/
category: studio
theme: dark
mood: [editorial, technical, bold]
signature: A large light serif headline on a blue-black page where selected words sit on solid electric-blue blocks, above a hero field of drifting ASCII characters that forms a landscape.
palette:
  - { hex: "#04040E", role: canvas }
  - { hex: "#FFFFFF", role: text }
  - { hex: "#0004EB", role: highlight blocks and active buttons }
fonts:
  - { family: "Instrument Serif", role: display, weights: "400", free_alternative: "Instrument Serif (Google Fonts)" }
  - { family: "Figtree", role: body, weights: "300-900 variable, mostly 400", free_alternative: "Figtree (Google Fonts)" }
  - { family: "Sometype Mono", role: labels and buttons, weights: "400 at 11-12px uppercase, +0.06em", free_alternative: "Sometype Mono (Google Fonts)" }
radius: "0px, square everywhere"
stack: [Astro, View Transitions API, Lenis, Canvas 2D, CSS transitions, Custom cursor]
checked: 2026-11-18
visual_check: true
---

# Anthracite Studio

**In one line:** a one-person web studio in Belgium presented like a printed magazine on a night-blue page, where a highlighter in electric blue marks the words that matter.

## Colour
Almost the whole page is a blue-black (#04040E) with white text at 100, 80, 70 and 60 percent opacity for hierarchy. One saturated blue (#0004EB) appears as solid rectangles behind single words in headings, on the active state of toggles and on the language switch. Photography in the project grid supplies all other colour.

## Type
Instrument Serif at weight 400 carries every heading, from a 101px hero line to 66px section titles and 28px pull text, with slight negative tracking (about -0.025em at the largest size). Figtree handles body text at 15 to 18px. Navigation, buttons and labels are Sometype Mono at 11 to 12px, uppercase, tracked +0.06em.

## Layout and rhythm
Full-width with a left-aligned headline and a short paragraph under it, and two square outlined buttons on the right of the same row. The nav is a small black bar centred at the top that holds the logo, a mono label and a menu icon; the label changes to name the current section as you scroll. Sections alternate between large serif statements with a narrow paragraph on the opposite side and a big photo grid with a grid and list toggle.

## Shape, depth and texture
Square corners everywhere; buttons are 1px white outlines. The hero bottom is a canvas field of monospace characters in blue and white that draws hills and figures. No shadows, no gradients.

## Motion
Page loads and navigations use View Transitions API (fade and slide). Content reveals with opacity and a translate over 0.7 to 1s on `cubic-bezier(0.25, 1, 0.5, 1)`, staggered by element. Hovers are quick opacity and colour changes at 0.25 to 0.35s. Lenis smooths the scroll, a custom cursor follows the pointer, and an idle screensaver takes over after inactivity.

## Rebuild notes
- Type scale: 101 / 66 / 64 / 52 / 48 / 28px Instrument Serif 400; line height 1.0 at 101px, 1.08 at 66px, 1.3 at 64px quotes. Tracking -0.025em at 101px, -0.015em at 52 to 66px.
- Body: Figtree 15px / 1.45 and 18px / 1.4, tracking -0.01em. Labels: Sometype Mono 11 to 12px uppercase, +0.06em.
- Highlight: wrap the stressed words in an inline span with `background: #0004EB; box-decoration-break: clone; padding: 0 .08em`; keep the text white.
- Reveal: `opacity 0.8s ease, translate 1s cubic-bezier(0.25, 1, 0.5, 1)` from `translate: 0 24px`, staggered 60 to 100ms, triggered once by IntersectionObserver.
- Section-aware nav label: one IntersectionObserver over the sections updates the label text in the fixed bar.
- ASCII field: a canvas that maps a grayscale height map (or noise) to a ramp of monospace glyphs, coloured blue to white by value, redrawn slowly.
- Page transitions: the View Transitions API (Astro's `ClientRouter`), fade plus a short horizontal slide.

## Why it does not look generic
The highlighter blocks borrow from print proofing and give a serif page a sharp, digital edge. The ASCII landscape turns "I build websites" into texture made of code. The nav that names the section you are in is a quiet, useful detail.

## Steal this
- Mark the two or three words that carry a headline with solid accent blocks behind them instead of colouring the text.
- Pair a light serif display with a mono for every control, and keep all buttons as square 1px outlines.
- Let a fixed mini nav show the name of the current section, updated by an IntersectionObserver.

## Not for
Products whose audience needs warmth or softness; the night-blue and square outlines read as precise and cool. Pages that cannot afford a canvas in the hero on low-power devices.
