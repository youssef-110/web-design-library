---
name: Sybiosme
url: https://www.sybiosme.com/en
category: studio
theme: mixed
mood: [bold, minimal, technical]
signature: A grey halftone dot field with a soft sphere behind it, the brand name set across the full width at 345px along the bottom edge, and a monthly price as the first thing you read.
palette:
  - { hex: "#FFFFFF", role: canvas }
  - { hex: "#111111", role: text }
  - { hex: "#F3F2F2", role: panels }
  - { hex: "#686868", role: secondary text and hero grey }
  - { hex: "#FA6B2A", role: primary action only }
fonts:
  - { family: "Overused Grotesk", role: display, weights: "400 for the wordmark, 500 for headings at -0.05em", free_alternative: "Overused Grotesk (free, open source)" }
  - { family: "SYBIOSME Numerals (custom)", role: body and interface, weights: "500", free_alternative: "Overused Grotesk 500, or Inter 500 with tabular numerals" }
radius: "pills and circles on controls, 24 to 54px on cards"
stack: [SvelteKit, Lenis, Canvas 2D, CSS transitions, CSS keyframes]
checked: 2026-11-18
visual_check: true
---

# Sybiosme

**In one line:** a website-design subscription that sells like a product: price first, a huge wordmark, and a calm grey halftone hero that feels like a scanned object.

## Colour
White and light grey (#F3F2F2) panels for most of the page, dark #1F1F1F sections for contrast, and grey (#686868, #AAAAAA) for secondary text. Orange (#FA6B2A) is reserved for the primary call to action and the chat button. The hero is entirely greyscale.

## Type
Overused Grotesk carries the voice: weight 500 headings from 24 to 72px, all at -0.05em tracking with line height 1.0 to 1.08, and a 345px weight 400 wordmark that spans the viewport. Interface and body text run in a custom numeral-tuned grotesk at 14 to 23px, weight 500. Headlines split into two tones (white then grey) instead of using a subheading.

## Layout and rhythm
The hero puts the price and two pill buttons on the left, the two-tone headline on the right, and the giant wordmark along the bottom. A cluster of round icon buttons (chat, sound, account, menu) sits top right instead of a text nav. Below, long sections cover the approach, a 10-day process, work and pricing plans, each in rounded panels.

## Shape, depth and texture
Large radii (24, 38, 54px) on cards, full pills on buttons and circles on icon controls. The hero texture is a dot grid with a halftone stroke and a blurred sphere, rendered on canvas. Thin 1px borders at 20 percent black separate content.

## Motion
Interactions are fast: 0.14 to 0.2s on `cubic-bezier(0.22, 1, 0.36, 1)` for scale, opacity, translate and colour. The hero headline swaps with turn-in and turn-out keyframes, page navigations use leave and arrive keyframes, and small decorative pulses run on interface details. Lenis smooths an inner scroll container. Intro keyframes carry a failsafe so content appears even if scripts stall.

## Rebuild notes
- Wordmark: 345px (about 24vw) weight 400, line height 0.72, set so its baseline crops into the bottom of the hero.
- Headings: 46 to 51px weight 500, line height 1.08, tracking -0.05em; the second clause in #AAAAAA (on dark) or #686868 (on light).
- Interface text: 17px weight 500, line height 1.0 to 1.15, tracking -0.02em.
- Easing for everything interactive: `cubic-bezier(0.22, 1, 0.36, 1)`, 140ms for colour and scale on press, 200ms for opacity and translate.
- Halftone hero: a canvas grid of dots whose size follows a blurred mask image, over a soft radial sphere in grey; no colour.
- Intro failsafe: put the reveal in a CSS keyframe with `animation-delay` that ends visible, so the page shows even if JavaScript never runs.

## Why it does not look generic
Leading with a monthly price turns a service into a product. The greyscale halftone looks printed and physical rather than like a gradient blob. The wordmark is set at a size that makes the brand the layout.

## Steal this
- Put the price and the booking action in the first view when the offer is a subscription.
- Split each headline into two tones by clause instead of adding a subheading.
- Replace the text nav with a row of round icon buttons when the site has only a few destinations.

## Not for
Brands that need many visible navigation items or long product menus. Content-heavy sites, since the inner scroll container and large panels favour short, sales-led pages.
