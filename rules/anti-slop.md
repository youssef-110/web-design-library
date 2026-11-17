# Anti-slop catalogue (SLOP)

The patterns that mark a page as generated. Each item names what you can see on the page, then what to do instead. Read it twice: once against your plan before you write code, once against the rendered page before you ship.

How to use it:

- Three or more matches in a plan means the plan is the category average. Change the plan, not the polish.
- When you find one in your output, rebuild that element. Toning it down leaves the same pattern, only quieter.
- The brief outranks this list. If the person asked for one of these by name, do it on purpose and do it well ([process.md](process.md) PRO6).
- Items marked (scan) are caught by `node scripts/slop-scan.mjs <path>`. A clean scan is the floor. Most of this list needs eyes on the page.

## Composition

- **SLOP1. The stock hero.** A small pill label, a centred headline, a grey sub-line, two buttons, then a rounded screenshot or a blob. Instead: stake the first screen on one thing from the subject's world ([layout.md](layout.md) LAY5).
- **SLOP2. The equal card row.** Three or six same-size cards, each with an icon, a bold title and two grey lines. Instead: a list with rules, a table, or unequal tiles sized by importance.
- **SLOP3. The stat band.** Three or four huge numbers nobody measured. Instead: one sourced number inside a sentence, or nothing.
- **SLOP4. Product UI faked from divs.** A dashboard, terminal, chat window or browser frame assembled from styled boxes. Instead: a real screenshot, a small working component, or no product shot.
- **SLOP5. Boxes in boxes.** A card inside a card, or one big rounded panel wrapping smaller rounded panels. Instead: one level of container, with spacing doing the grouping.
- **SLOP6. One skeleton for every section.** Centred heading, centred sub-line, grid, repeat. Or image and text swapping sides three times running. Instead: change the layout family at least every second section (LAY4).
- **SLOP7. A label above every heading.** Tiny pill or uppercase line over each title. Instead: delete it. Keep one only when it tells the reader something the title does not, such as a publication date.
- **SLOP8. Numbers on things that are not a sequence.** 01, 02, 03 on features, sections or cards. Instead: numbers belong on steps the reader follows in order, and nowhere else.
- **SLOP9. The text-only bento.** Pastel tiles holding nothing but a title and a sentence, or a grid with an empty cell. Instead: fill every cell, and make most tiles show something (a photo, a chart, a control) instead of describing it.
- **SLOP10. The overloaded hero.** Logo strip, avatar stack with a customer count, version badge and a tagline under the buttons, all in the first screen. Instead: headline, one supporting line, the action. The rest moves down.
- **SLOP11. Ornament that reports nothing.** Scroll cues, bouncing chevrons, crosshair marks, grid-line backdrops, a city and clock strip, coloured dots that report no state. Instead: delete. A line stays only if it separates real content (LAY34). (scan: scroll cues)
- **SLOP12. The invented logo wall.** Made-up company names or plain-text wordmarks under a "trusted by" line. Instead: real logos you were given, or no wall.
- **SLOP13. The split section header.** Big heading on the left, a small paragraph floating far right, nothing else in the row. Instead: stack them, paragraph at 65ch or less.
- **SLOP14. The closing banner that repeats the hero.** A gradient box with the headline again and the same button. Instead: end on the real next step: the form, the price, the contact.
- **SLOP15. Template pricing.** Three columns with the middle one enlarged and badged, for a product with one price. Instead: show the pricing shape the product has.
- **SLOP16. Filler proof.** An accordion of questions nobody asked, or a testimonial carousel with dots. Instead: answer the few real questions in plain view, and set one real quote large or use none.
- **SLOP17. Everything centred.** Including paragraphs longer than three lines. Instead: left-align running text and centre only short display lines.
- **SLOP18. The needless dialog.** A newsletter modal on load, or a dialog for a task that needs no interruption. Instead: put it inline ([components.md](components.md) CMP40).

## Colour and surface

- **SLOP19. Purple into blue.** Indigo or violet gradients on a product that is not purple. Instead: take the hue from the subject ([color.md](color.md) COL9). (scan)
- **SLOP20. Gradient text.** Instead: one solid colour. Emphasis comes from size or weight. (scan)
- **SLOP21. Glows.** Coloured zero-offset shadows, a radial halo behind the hero, a spotlight on nothing. Instead: a flat surface, or one light source with a real offset (COL14). (scan)
- **SLOP22. Dark with one neon, by reflex.** A near-black page with a single acid accent, chosen because dark feels premium. Instead: pick the theme from where the page is used (COL17).
- **SLOP23. Cream with a serif and terracotta, by reflex.** The tasteful default. Instead: the same test. If the subject does not print on cream, neither does the page.
- **SLOP24. Glass cards.** Blur and translucency on content panels. Instead: solid surfaces. Keep blur for a navigation bar or sheet that content scrolls beneath.
- **SLOP25. One radius on everything.** The same 12 or 16px on buttons, cards, images and the panel that holds them. Instead: a radius scale, with inner radius equal to outer radius minus padding (CMP30).
- **SLOP26. A border and a shadow on every box.** Hairline plus soft grey blur, repeated down the page. Instead: a border where it marks a part, a shadow only where something floats (COL15).
- **SLOP27. The side stripe.** A thick coloured bar down one edge of a card or callout. Instead: a tinted background, a full border, or an icon and a word. (scan)
- **SLOP28. Icons in tinted squares.** A small icon inside a pastel rounded square, repeated for every feature. Instead: the icon at text size beside the words, or no icon.
- **SLOP29. Filler shapes.** Blobs, mesh gradients, floating orbs, noise over everything. Instead: something from the subject's world, or empty space next to something large.
- **SLOP30. Grey text on a coloured surface.** Instead: a tint of that surface's own hue at 4.5:1 or better (COL12).
- **SLOP31. The lone dark band.** One dark section in a light page for variety. Instead: one theme per page (COL21).
- **SLOP32. Untinted defaults.** Pure black on pure white with mid greys and default blue links. Instead: neutrals tinted toward one hue (COL2).
- **SLOP33. Buried or stock imagery.** A photo under an 80 percent overlay, a smiling stock team, a generated image with broken hands. Instead: real imagery at full strength, or none (LAY36 to LAY40).
- **SLOP34. Emoji and cliché icons.** Emoji as icons, icons from two libraries, a rocket for launch, a shield for security. Instead: one icon library, one stroke weight, plain metaphors. (scan: emoji)
- **SLOP35. The kit left at its defaults.** A component library in its stock radius, grey and shadow. Instead: remap its tokens to yours before first use (CMP6).

## Type

- **SLOP36. The default face at one weight.** Inter, or the nearest geometric sans, at 600 for everything. Instead: a face chosen for the subject and a weight chosen on purpose ([typography.md](typography.md) TYP1, TYP13).
- **SLOP37. The accent word.** One word of the headline in italic serif, in the accent colour, or in a pill, for no reason. Instead: one voice for the whole line, or two tones split by clause (TYP27).
- **SLOP38. Tiny tracked capitals everywhere.** Instead: sentence-case labels, or no label. (scan)
- **SLOP39. Title Case Headings.** Instead: sentence case. (scan)
- **SLOP40. Monospace as a costume.** Mono for dates, labels and captions to look technical. Instead: mono only for code, data, IDs and keys (TYP24).
- **SLOP41. A flat or broken scale.** Headings barely larger than body, or a giant headline over 12px grey text. Instead: steps of 1.25 times or more, and reading text at 16px (TYP9, TYP10).
- **SLOP42. The four-line headline.** Or a headline with one stranded word. Instead: shorten, shrink or widen until it is two lines at 1280 (TYP12).
- **SLOP43. Wide or centred paragraphs.** Lines past 75 characters, or a centred block of body text. Instead: 65ch, left-aligned (TYP17).
- **SLOP44. Crushed letters.** Tracking tighter than minus 0.04em, or wrapped headings at line height 1 with colliding lines. Instead: stay inside TYP18 and TYP19. (scan: tracking)
- **SLOP45. Typewriter punctuation.** Straight quotes and three full stops in display copy. Instead: curly quotes and the ellipsis character (TYP23).
- **SLOP46. Weight that changes on hover.** Text jumps as it goes bold. Instead: change colour or underline; keep the weight. (scan)

## Motion

- **SLOP47. Hidden until a script arrives.** Content at opacity 0 waiting for an observer. With JavaScript off the page is blank. Instead: visible by default ([motion.md](motion.md) MOT18).
- **SLOP48. The same fade-up on every section.** Instead: no scroll reveals by default, and one authored moment (MOT20, MOT34).
- **SLOP49. Hover lift on every card.** Instead: hover changes colour or shadow, and only on things that can be clicked (MOT22).
- **SLOP50. Bounce, elastic and pop-from-nothing.** Overshooting curves and entrances from `scale(0)`. Instead: ease-out from 0.96 with opacity (MOT8, MOT9). (scan)
- **SLOP51. Lazy transitions.** `transition: all`, ease-in on interface, or controls that take half a second. Instead: named properties, ease-out, under 300ms (MOT6, MOT13). (scan)
- **SLOP52. Loops with no live data.** Pulsing dots, a typewriter headline, a blinking cursor, shimmer on static text, shapes that float forever. Instead: loop only for real loading or live state (MOT33). (scan: infinite animations)
- **SLOP53. Things that move on their own.** An auto-advancing carousel or a logo marquee. Instead: a static row, or controls the visitor operates. (scan: marquee)
- **SLOP54. Scroll taken from the visitor.** Smooth-scroll libraries, wheel hijacking, pins that trap for three screens. Instead: native scroll, scrubbed one to one if at all (MOT24, MOT26). (scan: smooth-scroll imports)
- **SLOP55. Numbers that count up.** Instead: show the number.
- **SLOP56. Cursor toys.** Cursor followers, magnetic buttons and tilting cards on a page that is not a portfolio. Instead: none.
- **SLOP57. No reduced-motion path.** Instead: write movement inside a `no-preference` query so stillness is the default (MOT31). (scan)
- **SLOP58. Scroll listeners and splash screens.** Animation driven from a scroll event, or a preloader on a page that loads in under a second. Instead: CSS scroll timelines or IntersectionObserver, and no splash (MOT25, MOT37). (scan: scroll listeners)

## Copy

- **SLOP59. Hype words.** Seamless, effortless, supercharge, reimagine, cutting-edge, next-gen, world-class, game-changing, frictionless, unleash, elevate, empower. Instead: say what the product does, with a number ([copy.md](copy.md) CPY4). (scan) <!-- slop-ok -->
- **SLOP60. Formula cadence.** "Not just a tool. A partner." Or "X, reimagined", "Meet X", "Say goodbye to X". Instead: one plain sentence that is only true of this product (CPY8). (scan) <!-- slop-ok -->
- **SLOP61. The three-beat list.** "Fast. Simple. Secure." Instead: the one claim you can prove. (scan) <!-- slop-ok -->
- **SLOP62. Dash and dot punctuation.** Em dashes anywhere, en dashes in ranges, middots chaining metadata. Instead: full stops, commas, "to", line breaks. (scan)
- **SLOP63. Invented proof.** Made-up testimonials, customers, awards, ratings, and round figures such as 10x, 99.9% or 10,000+. Instead: real, sourced, odd numbers, or none (CPY23, CPY24). (scan: round figures) <!-- slop-ok -->
- **SLOP64. Placeholder people and filler.** John Doe, Jane Smith, Acme, lorem ipsum. Instead: believable names and real sentences in the product's terms (CPY28, CPY29). (scan) <!-- slop-ok -->
- **SLOP65. Buttons that say nothing.** Get started, Learn more, Submit, Click here, or two buttons with the same intent in different words. Instead: verb plus object, one label per intent (CPY13, CPY14). (scan)
- **SLOP66. The headline that fits anyone.** Swap in a competitor's name and it is still true. Instead: rewrite until it is not.
- **SLOP67. Cute or empty errors.** "Oops!", "Something went wrong", exclamation marks, apology theatre. Instead: what happened and what to do next (CPY18). (scan) <!-- slop-ok -->
- **SLOP68. The borrowed workshop voice.** "Crafted with care", "Made with love", "Notes from the studio", "Loved by makers". Instead: plain functional labels, or no label.
- **SLOP69. An arrow on every link.** Instead: a directional glyph only where direction is the meaning. (scan)
- **SLOP70. Abstract feature headings.** Adjective plus noun: "Powerful analytics", "Smart automation". Instead: a statement with a fact in it: "See late invoices by customer" (CPY10).
- **SLOP71. Intros that restate the heading.** Instead: add new information or delete the line (CPY5).
- **SLOP72. Fake live signals.** "Updated 2 minutes ago", "3 people are viewing this", build numbers and version stamps on a marketing page. Instead: remove unless real data drives them (CPY36).

## Code

- **SLOP73. Placeholder code.** Comments that promise work later, an ellipsis standing in for code, "rest of the styles here". Instead: finish it, or say in the report exactly what is missing. (scan)
- **SLOP74. Clickable divs.** A `div` or `span` with a click handler. Instead: `button` for actions, `a href` for navigation. (scan)
- **SLOP75. Images without alt.** Or alt text that says "image". Instead: describe what the image tells, or `alt=""` if it is decoration. (scan: missing alt)
- **SLOP76. Focus outline removed.** `outline: none` with no `:focus-visible` style. Instead: a 2px ring at 3:1 ([accessibility.md](accessibility.md) A11.11). (scan)
- **SLOP77. The 100vh hero.** It is cut off under mobile browser bars. Instead: `min-height: 100svh`, or shorter (LAY8). (scan)
- **SLOP78. z-index 9999.** Instead: a short named layer scale, and `isolation: isolate` for local stacking. (scan)
- **SLOP79. Zoom disabled.** `user-scalable=no` or `maximum-scale=1`. Instead: never. Set inputs to 16px to stop iOS zooming. (scan)
- **SLOP80. Fixed widths that overflow.** Pixel widths on text containers, `100vw` blocks, a sideways scrollbar at 320px. Instead: fluid widths and the fixes in LAY29.
- **SLOP81. Dead links.** `href="#"` and buttons wired to nothing. Instead: every control goes somewhere or does something, or it is not on the page. (scan)
- **SLOP82. Raw values and overrides.** Hex codes scattered through components, piles of `!important`. Instead: role tokens (COL32). (scan: `!important`)
- **SLOP83. Missing document basics.** No `lang`, no `title`, no meta description, no favicon, no viewport tag. Instead: add all five. (scan: `lang`)
- **SLOP84. Errors in the console.** Red messages, 404 images, fonts that never load. Instead: zero errors before you report.
- **SLOP85. A library for a fade.** An animation or carousel package imported for one small effect. Instead: CSS first ([performance.md](performance.md) PRF22).

## The last test

Cover the logo and the product name. If the page could belong to any company in its category, it is still slop, however clean the scan. Go back to the four-line commitment and strengthen the signature.
