---
name: Preymaker
url: https://preymaker.com/
category: studio
theme: dark
mood: [cinematic, minimal, serious]
signature: A full-screen black and white video of feathered wings in extreme close-up, with one short two-line statement placed right of centre and almost nothing else on screen.
palette:
  - { hex: "#000000", role: canvas }
  - { hex: "#F1F3F5", role: text }
  - { hex: "#859099", role: secondary text }
  - { hex: "#E9E9E9", role: light surfaces }
fonts:
  - { family: "New Grotesk", role: display and body, weights: "600 for statements, 700 uppercase labels, 400-500 body", free_alternative: "Inter Tight 600, or Schibsted Grotesk 600" }
radius: "2px, square"
stack: [Next.js, Autoplay video, CSS transitions, Custom cursor]
checked: 2026-11-18
visual_check: true
---

# Preymaker

**In one line:** a production company that lets its footage speak: black page, monochrome motion, one sentence and two words of navigation.

## Colour
Black canvas and near-white text (#F1F3F5), with a cool grey (#859099) for secondary information. All other colour comes from the reel and project videos; the interface itself is monochrome.

## Type
One grotesk at small, confident sizes. The statement is 40px weight 600 with a 1.05 line height and -0.02em tracking; labels are 20 to 25px weight 700 uppercase with tight line heights; body and metadata run at 12 to 14px. Nothing is larger than 40px, which keeps the footage dominant.

## Layout and rhythm
The nav is three words spread across the top edge (logo left, menu centre, search right) at small size, with no bar behind them. The statement sits right of centre over the video. The rest of the site scrolls in a single long inner container of project films, with a 706px text measure and a 1440px frame.

## Shape, depth and texture
Square edges (2px), no shadows, no outlines. Texture comes from the footage itself: macro detail, grain and light.

## Motion
Large moves use a long expo ease-out: transforms over 1.5s on `cubic-bezier(0.19, 1, 0.22, 1)`, with 0.7s for scale and background changes on the same curve. Smaller reveals fade and translate over 0.6s on `cubic-bezier(0.39, 0.575, 0.565, 1)`. Looping muted videos play throughout and a custom cursor replaces the pointer.

## Rebuild notes
- Statement: 40px weight 600, line height 1.05, tracking -0.02em, max two lines, placed at about 50 percent from the left and vertically centred.
- Labels: 20 to 25px weight 700 uppercase, line height 0.9, tracking -0.04em. Metadata 12px / 14px.
- Easing: expo out `cubic-bezier(0.19, 1, 0.22, 1)`; 1.5s for section-scale moves, 0.7s for hovers and scale. Sine out `cubic-bezier(0.39, 0.575, 0.565, 1)` at 0.6s for fades.
- Video: `autoplay muted loop playsinline`, object-fit cover, a poster frame for first paint, paused when off screen.

## Why it does not look generic
It refuses to explain. One macro image and one line say "visual content" more convincingly than a list of services. The tiny, spread-out nav leaves the frame to the film.

## Steal this
- Spread three nav words across the top edge with no bar, so the hero image runs to every edge.
- Cap all type at 40px when the imagery is the product, and let one sentence carry the page.
- Use a long expo ease-out (1.5s) for large moves so the page feels like camera movement.

## Not for
Products that need to explain what they do or show pricing. Any site without strong, owned footage.
