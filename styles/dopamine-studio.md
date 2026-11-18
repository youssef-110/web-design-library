---
name: Dopamine Studio
url: https://www.dopaminestudio.io/
category: studio
theme: dark
mood: [bold, loud, technical]
signature: A black page with acid-lime type and a grainy lime glow rising from the bottom of the hero, beside a rendered 3D toggle switch, then project screens orbiting a wireframe globe.
palette:
  - { hex: "#000000", role: canvas }
  - { hex: "#FFFFFF", role: text }
  - { hex: "#CCFF00", role: accent text, buttons and one full section }
  - { hex: "#333333", role: surfaces }
fonts:
  - { family: "Space Grotesk", role: display and body, weights: "300 for large headings, 400 elsewhere", free_alternative: "Space Grotesk (Google Fonts)" }
  - { family: "IBM Plex Mono", role: labels and service lists, weights: "300 uppercase", free_alternative: "IBM Plex Mono (Google Fonts)" }
  - { family: "ITC Avant Garde Gothic", role: oversized wordmark, weights: "400 at 216px", free_alternative: "Questrial or Didact Gothic" }
radius: "pills (100px) on buttons, 24px on cards"
stack: [GSAP 3 ScrollTrigger, GSAP SplitText, GSAP Observer, Webflow, Webflow Interactions, Canvas 2D, CSS keyframes]
checked: 2026-11-18
visual_check: true
---

# Dopamine Studio

**In one line:** a Rome web, 3D and AI studio that sells energy: black, acid lime, a 3D toggle in the hero and a scroll story built around a spinning wireframe globe.

## Colour
Black for nearly all of the page, white for running text, and one acid lime (#CCFF00) used for the second clause of headlines, primary pill buttons, labels, a grainy glow at the bottom of the hero and one full-bleed section. Greys (#333333) only for inactive surfaces.

## Type
Space Grotesk at weight 300 for 64px headlines and 48px statements, weight 400 for mid sizes, with no extra tracking; body at 14 to 16px weight 300. IBM Plex Mono 300 uppercase lists services and labels. An oversized ITC Avant Garde wordmark at 216px appears once.

## Layout and rhythm
A 940px text measure inside full-width sections. The hero is two columns: headline, paragraph and two pills on the left, a rendered 3D object on the right, with small status chips (partner badge, location) above the headline. The work section pins project screens around a wireframe sphere drawn on a canvas, with service lists in mono on the right.

## Shape, depth and texture
Pill buttons and chips at 100px radius, cards at 24px, circles for icon buttons. Depth comes from a 3D render and from heavy film grain over the lime glow. Thin white borders at 12 to 50 percent opacity.

## Motion
GSAP with ScrollTrigger, SplitText and Observer, plus Webflow Interactions on about 70 elements. Project items move with ScrollTrigger scrub 0.5 across roughly a viewport each; clip-path and yPercent reveals at 0.5s on a custom ease; a 2.5s orbit animation and a 20s marquee loop. A live local clock sits in the nav.

## Rebuild notes
- Type scale: 216 (wordmark) / 64 / 54 / 48 / 42 / 32 / 24 / 16 / 14px. Headlines Space Grotesk 300, line height 1.0 to 1.2; statements 48px 400, line height 1.2.
- Accent split: the last clause of each headline in #CCFF00, same weight and size.
- Hero glow: a radial gradient of #CCFF00 to transparent from the bottom edge, with an SVG feTurbulence grain layer over it at about 30 percent opacity.
- Work scroll: ScrollTrigger per project item, `scrub: 0.5`, over about 975px; images reveal with `clipPath` and `yPercent` at 0.5s.
- Interactions: `transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1)` on cards. The site uses `transition: all` at 0.2 to 0.3s; name the properties instead (SLOP51).
- Library rules to weigh: dark with one neon (SLOP22), a live city clock (SLOP11) and endless loops (SLOP52) are all present. Use the technique, not the defaults.

## Why it does not look generic
The 3D toggle literally renders the studio's name (dopamine as a switch you turn on). The wireframe globe gives the work gallery a spatial frame instead of a grid of thumbnails.

## Steal this
- Render one product-like object that visualises the brand name and let it own the right half of the hero.
- Stage a work gallery around one rotating wireframe form, with project screens orbiting it as you scroll.
- Put a grain layer over any large gradient so it reads as light on film rather than a flat CSS blend.

## Not for
Calm, trust-led products (health, finance, public services); the neon and grain read as nightlife. Teams who cannot maintain a 3D asset and a canvas scene.
