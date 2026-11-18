---
name: Afternow
url: https://afternow.co/
category: studio
theme: light
mood: [minimal, playful, technical]
signature: A small rounded showreel video in the middle of a white page grows to full width as you scroll, while flat coloured copies of its shape trail behind it and catch up, like an echo.
palette:
  - { hex: "#FFFFFF", role: canvas }
  - { hex: "#000000", role: text and primary pill button }
  - { hex: "#9C9E94", role: secondary text }
  - { hex: "#F0F0EF", role: tag chips and quote cards }
  - { hex: "#6E56FF", role: echo layer, one of six picked at random }
  - { hex: "#FD8A65", role: echo layer, one of six picked at random }
  - { hex: "#FFFF8C", role: echo layer, one of six picked at random }
fonts:
  - { family: "Messina Sans", role: display and body, weights: "400-500", free_alternative: "Hanken Grotesk (Google Fonts)" }
  - { family: "Messina Sans Mono", role: navigation, labels and tags, weights: "400-500 uppercase", free_alternative: "IBM Plex Mono (Google Fonts)" }
radius: "12px cards, 20-24px media, pills for buttons"
stack: [WordPress, GSAP 3 ScrollTrigger, GSAP SplitText, Lenis, Autoplay video, Swiper, CSS keyframes, CSS transitions, Custom cursor]
checked: 2026-11-18
visual_check: true
---

# Afternow

**In one line:** a B2B brand, web and product studio whose homepage is a white, nearly silent page where the only colour comes from the client work and from bright flat shapes that lag a beat behind whatever you scroll.

## Colour
The interface is black on white with one warm grey for secondary text and a pale grey for chips and quote cards; there is no accent colour in the chrome at all. The brand palette (violet, coral, butter yellow, sky blue, mauve, steel blue) lives only in the echo layers: each echoing block gets two of them, drawn at random from two fixed sets of three, so the colours change on every visit. Everything else colourful is client photography and video.

## Type
One grotesque, Messina Sans, does every sentence at weight 400 or 500, never bold: an 86px headline, 54px and 36px statements, and 14px body. Large sizes are tracked tight, about -0.05em at 86px and -0.04em at 36 to 54px. A companion mono at 14 to 16px, uppercase, with line height 1, carries the navigation, the contact button and the small tags under each project, so the two faces split the page into reading and labelling.

## Layout and rhythm
The first screen is mostly empty: logo top left, mono links in a soft grey bar top right, a small centred video, and a two-line headline anchored bottom left. Below it a long statement paragraph sits on a wide left column, then work appears as a three-column grid of large rounded media tiles, each with a name, one grey line and a mono tag chip. A grey testimonial card with two small stats, a slow marquee of client logos and a pinned horizontal section follow, with generous white space between them.

## Shape, depth and texture
Cards round at 12px and media at 20 to 24px; buttons are full pills. No shadows, no borders, no gradients in the interface: depth comes only from the echo layers, solid flat colour shapes stacked behind a block with the same radius. The nav links take a translucent grey pill background once the page scrolls.

## Motion
On load the hero video opens from its centre with a clip-path and the headline rises in line by line. Scrolling pins the hero and scrubs the video from a third of its size to full width while the headline fades. Behind the video, the content area and the full-screen menu, two coloured echo layers follow the scroll with a lag and settle back; on the hero they also swell briefly with scroll speed. Hovers are short colour and radius changes, and the client logo wall drifts in an 80 second loop.

## Rebuild notes
- Type scale: Messina Sans 86px / 500 / 1.09 / -0.05em; 54px / 500 / 1.11 / -0.04em; 36px / 500 / 1.11 / -0.04em; 20px / 400 / 1.35 / -0.02em; body 14px / 400 / 1.4 / -0.026em. Mono labels 14 to 16px, 400 to 500, uppercase, line height 1, about -0.03em.
- Hero intro: video starts at `clip-path: inset(50% round 20px)` and opens to `inset(0% round 20px)` over 0.6s, `power3.inOut`; the title is split into lines that rise from `yPercent: 100` with opacity 0, staggered 0.2s. The rest of the page fades in after.
- Hero scroll, 768px and up: pin the hero (no pin spacing) for 1.3 times the spacer height, `scrub: 0.2`; scale the video from 0.35 to 1 while the title fades to 0 over the first 70 percent. This is the technique in [the scroll-grown product film recipe](../recipes/scroll-grown-product-film.md), done with GSAP instead of a CSS scroll timeline.
- Echo layers, 1000px and up: two absolutely positioned spans behind the block, `inset: 0`, `border-radius: inherit`, each with a background picked from {violet, coral, steel blue} and {sky blue, butter yellow, mauve}. Each frame, every layer eases its stored scroll value toward `scrollY` with lerp 0.14 for the first layer and 0.08 for the second, clamped to a lag of 50px and 100px by default (a data attribute raises the cap per block), and is translated by the difference. The whole effect is off below 1000px.
- Velocity swell on the hero echoes: on each scroll update, scale layer i to `1 + min(0.15 + 0.05i, |velocity| / 8000 * 0.5(i+1))` over 0.1s, then back to 1 over 0.3 to 0.4s, `power1.out`.
- Interface transitions: 0.35s `cubic-bezier(0.17, 0.17, 0.2, 1)` on colour, background, radius and padding; 0.25s ease on link colour and underline.
- Elsewhere: a pinned horizontal strip moved with `x` and `scrub: 1`; Lenis smooth scroll; a custom cursor over the hero video, which opens the full film with sound in a native `<dialog>`.

## Why it does not look generic
The echo is a studio's name made literal: the page shows "after" as shapes arriving late. It lets a strictly black and white interface stay playful without adding a single coloured button. Keeping every heading at weight 500 and letting a mono do all the labelling gives an agency site the tone of a product spec rather than a pitch.

## Steal this
- Put colour behind content as lagging, same-shaped layers that react to scroll, and keep the interface itself monochrome.
- Start the hero as a small centred media object on an empty white screen and let scrolling grow it to full width, so the work is the first thing that gets big.
- Split the voice between one sans for sentences and one uppercase mono for every label, tag and control, and never go above weight 500.

## Not for
Pages whose audience scrolls on phones first, since both signature effects are switched off or reduced below desktop widths. Products that need colour to signal state in the interface, because here colour carries no meaning at all.
