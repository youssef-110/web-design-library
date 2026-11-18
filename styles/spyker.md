---
name: Spyker Cars
url: https://www.spykercars.com/
category: mobility
theme: mixed
mood: [luxurious, cinematic, serious]
signature: A full-bleed close-up video of bodywork in dark teal, with a centred condensed uppercase headline in widely tracked capitals and one white rectangular button, under a script logo.
palette:
  - { hex: "#000000", role: dark sections and text }
  - { hex: "#FFFFFF", role: light sections, text on video, button }
  - { hex: "#F0F0F0", role: light grey panels }
  - { hex: "#101010", role: near-black text }
fonts:
  - { family: "Futura PT Condensed", role: display and labels, weights: "500 uppercase, positive tracking", free_alternative: "Oswald 500, or Barlow Condensed 500" }
  - { family: "Swiss 721", role: body, weights: "400-500", free_alternative: "Inter, or Arimo" }
  - { family: "PT Serif", role: occasional accents, weights: "400", free_alternative: "PT Serif (Google Fonts)" }
radius: "2px, square"
stack: [Next.js, Lenis, Autoplay video, CSS transitions]
checked: 2026-11-18
visual_check: true
---

# Spyker Cars

**In one line:** a Dutch supercar maker's relaunch told through slow, dark footage of the cars and a condensed, aviation-flavoured typeface in tracked capitals.

## Colour
Black and white sections alternate, with a light grey (#F0F0F0) for panels. Colour comes only from the car footage (dark teal paint, copper details). Video carries black gradient overlays from the bottom for text legibility.

## Type
Futura PT Condensed at weight 500, uppercase, with positive tracking (+0.017 to +0.04em): 120px headlines at line height 0.85, 56px subheads, 14px labels and buttons. Swiss 721 (a Helvetica cut) handles body text at 12 to 20px and 38px statements in sentence case.

## Layout and rhythm
Three items in the header: a menu icon left, the script logo centred and a cart icon right. The hero is centred: a small kicker, a two-line condensed headline and a white rectangular button, over full-bleed video. Sections alternate full-bleed footage with narrow text columns of about 416 to 438px on white.

## Shape, depth and texture
Square corners (2px), solid white buttons with black condensed text, and no shadows. Footage and gradient overlays give all depth.

## Motion
Looping muted videos, Lenis smoothing, and short interface transitions on the standard ease (`cubic-bezier(0.4, 0, 0.2, 1)`) at 0.15 to 0.5s. Motion comes from the footage, not the interface.

## Rebuild notes
- Display: condensed sans 500 uppercase, 120px, line height 0.85, tracking +0.017em; 56px at 0.85, +0.04em. Labels and buttons 14px uppercase +0.06em.
- Body: Helvetica-style sans 20px / 1.4 for lead, 14px / 1.6 for body; statements 38px / 1.1 at -0.01em.
- Video hero: `autoplay muted loop playsinline`, object-fit cover, bottom overlay `linear-gradient(to top, rgba(0,0,0,.8), transparent 13%)`.
- Button: white fill, black condensed uppercase text, 2px radius, about 48px tall and wide horizontal padding.

## Why it does not look generic
The condensed, tracked capitals recall vintage aviation and coachbuilding plates, which is the brand's heritage. The footage stays close on surfaces and details instead of the full car, which reads as craft.

## Steal this
- Shoot or crop product video as extreme close-ups of materials and let it fill the hero.
- Set headlines in a condensed uppercase with positive tracking when the brand has engineering heritage.
- Keep the header to three items: menu, centred logo, one action icon.

## Not for
Brands without high-quality footage. Products that sell on specifications and comparison above the fold.
