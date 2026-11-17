---
name: Clerk
url: https://clerk.com
category: devtool
theme: light
mood: [minimal, technical, cool]
signature: The hero is the product itself, a live sign-up form card with its neighbours faded out on either side, sitting under a heavy left-aligned headline.
palette:
  - { hex: "#F7F7F8", role: canvas }
  - { hex: "#131316", role: text-and-button }
  - { hex: "#747686", role: text-muted }
  - { hex: "#2F3037", role: dark-border }
  - { hex: "#FFFFFF", role: card-surface }
fonts:
  - { family: "Suisse Intl", role: display-and-body, weights: "bold 700 headline, regular 400 body", free_alternative: "Inter (Fontsource / Google Fonts)" }
radius: "6px buttons, 12px cards, pill nav bar"
checked: 2026-11-17
visual_check: true
---

# Clerk

**In one line:** an authentication product that shows its own sign-up screen as the hero, in near-monochrome.

## Colour
A pale grey (#F7F7F8) canvas, ink-black (#131316) text and buttons, and a mid grey-violet (#747686) for secondary text. A black announcement bar crowns the page. Colour is nearly absent: tiny indigo dots mark the active tab, and the only glow is a faint lavender halo behind the form card.

## Type
A tight, heavy grotesk in the Suisse style at about 64px with tight tracking, left aligned over two lines, followed by a muted 18px subtitle. Form labels and the tab bar are small, 12 to 14px, regular and medium weight.

## Layout and rhythm
A floating rounded nav pill sits centred on the page, then a left-aligned headline with a Copy prompt chip on the right. Below, a bordered stage holds four tabs (User Authentication, Multi-tenancy, Enterprise, Agent) and a centred sign-up card; sibling cards (account chooser, sign-in) fade into the background on both sides. A second pill tab row sits at the bottom edge of the stage.

## Shape, depth and texture
The stage and cards have soft borders and generous radii; the form card has a faint shadow and glow. Imagery is real working UI, not illustration, including a typing caret in the email field.

## Motion
A caret types into the email field while the neighbouring cards stay blurred.

## Why it does not look generic
The product's output is a UI component, so the page shows that component working, with context-switching tabs, instead of a mockup beside copy. Everything else steps back to grey and black.

## Steal this
- Make the hero a live component stage with faded neighbours so depth shows without a device frame.
- Put segmented tabs on top of the stage to switch product scenarios in place.
- Float the nav as a rounded pill under a thin black announcement bar.

## Not for
Brands that need warmth or imagery; this is intentionally neutral.
