---
name: Linear
url: https://linear.app
category: devtool
theme: dark
mood: [technical, minimal, cool, serious]
signature: A heavy-weight, two-line headline floating in a black void above a full-width screenshot of the real app, so the page is the product's dark UI continued.
palette:
  - { hex: "#08090A", role: canvas }
  - { hex: "#141516", role: button-surface }
  - { hex: "#F7F8F8", role: text-strong }
  - { hex: "#D0D6E0", role: text }
  - { hex: "#8A8F98", role: text-muted }
  - { hex: "#E5E5E6", role: primary-button }
  - { hex: "#5E6AD2", role: accent-icon }
fonts:
  - { family: "Inter", role: display-and-body, weights: "medium 500 headline, regular 400 body", free_alternative: "Inter" }
  - { family: "Berkeley Mono", role: mono, weights: "regular 400", free_alternative: "JetBrains Mono (Fontsource / Google Fonts)" }
radius: "12px frame, 8px inner items, full pills on buttons"
checked: 2026-11-16
visual_check: true
---

# Linear

**In one line:** a black, near-empty homepage for a product-planning tool, where the screenshot of the app does all the selling.

## Colour
The canvas is #08090A, with a hairline under the header and a soft grey glow rising at the bottom edge behind the screenshot. Text steps through white (#F7F8F8), light grey (#D0D6E0) and muted grey (#8A8F98). The only saturated colour above the fold lives inside the screenshot: small status icons and an indigo release badge (#5E6AD2). The Sign up button is a light grey pill, the single bright spot in the header.

## Type
The headline is about 64px Inter at medium weight with tight negative tracking, on two left-aligned lines. A 15px grey subline sits below, and a small "New Loops" link sits at the opposite edge on the same line. The jump between a heavy 64px line and a very small, low-contrast subline gives the hero a calm authority.

## Layout and rhythm
A 1280px column starting at about x=320. The top 200px is empty, then the headline, subline, then the screenshot starts and runs the full column width, cropped by the fold. There are no buttons in the hero; the nav carries Log in and Sign up. Nav links are small, grey and right-aligned.

## Shape, depth and texture
The screenshot sits in a thin-bordered frame with about 12px corners. Inside, the app shows a sidebar, an issue with a comment thread, and a properties panel, with 8px item radii and hairline dividers. There are no drop shadows; separation is done with 1px borders and slightly lighter dark fills.

## Motion
Not observed.

## Why it does not look generic
Instead of an illustration or abstract art, the hero is the real interface at full size, with real-looking content (an issue, a Slack-created ticket, an agent mention). The marketing page and the product look identical.

## Steal this
- Put the actual product UI directly under the headline at full container width and let the fold crop it; no tabs, no carousel.
- Skip hero buttons when the nav already has a Sign up; the headline then reads as a statement instead of an ad.
- Keep every colour inside the product screenshot and make the page chrome grey only, so the first colour a visitor sees is the product's.

## Not for
Consumer products that need emotion, or any brand without a strong interface to show.
