# Layout (LAY)

Composition, the hero, grid, rhythm, density, responsive behaviour, visible structure and imagery. Load this for any page build.

## Composition from content

- **LAY1. Write the reading order before any CSS.** What is seen first, second and third on the first screen, and which things belong together. Then use the simplest structure that shows it.
- **LAY2. Let the content pick the form.** A comparison is a table. A sequence is numbered steps. A collection is a list or a grid. An argument is a column of prose. Pouring all four into cards hides what they are.
- **LAY3. Neither centred nor split is the default.** Ask what the first screen has to prove, then choose the arrangement that proves it. A manifesto can be centred; a product with a working control puts the control first.
- **LAY4. Three layout families on a long page, and no family three times running.** Prose column, full-bleed image, ruled list, table, grid of unequal tiles, one large quote. Image and text may swap sides twice in a row, not three times.

## The hero

- **LAY5. The hero is one committed thing.** A real photograph with the type on it ([Monzo](../styles/monzo.md), [Sweetgreen](../styles/sweetgreen.md)), the product itself ([Perplexity](../styles/perplexity.md), [Linear](../styles/linear.md)), a working control ([Uber](../styles/uber.md)), a colour field ([Wise](../styles/wise.md)), one strange object ([teenage engineering](../styles/teenage-engineering.md)), or type at a size that is a decision ([Granola](../styles/granola.md)).
- **LAY6. Four text elements at most in the hero.** Headline, one supporting line of 25 words or fewer, a primary action, an optional secondary action. Logos, statistics, badges and avatar rows live further down.
- **LAY7. The first screen holds at 1280 by 720 and at 390 by 700.** Headline, primary action and part of the signature are visible without scrolling at both sizes.
- **LAY8. Make the hero shorter than the screen so the next section shows.** 80 to 90svh lets a strip of what follows peek in, which does the job of a scroll cue. If it must be full height, use `min-height: 100svh`, never `100vh`. App shells use `100dvh`.
- **LAY9. Put the real action in the first screen in working form.** The search field, the booking form, the install command, the email input. See [Uber](../styles/uber.md) and [Airbnb](../styles/airbnb.md). A button that leads to the action is weaker than the action.
- **LAY10. Let type and image share space.** Run the visual behind or under the text and let it bleed off an edge, as at [Stripe](../styles/stripe.md) and [Revolut](../styles/revolut.md). Text in one box and a picture in the box beside it is the template.

## Grid and alignment

- **LAY11. One grid for the page.** 12 columns on desktop, 4 on a phone. Gutters 16px on phones and 24 to 32px on desktop. Content width 1200 to 1280px at most. Side padding 16px at 320 wide and 24px or more from 768.
- **LAY12. Everything aligns to a column edge or to another element.** Count the distinct left edges on one screen. More than three is noise.
- **LAY13. Break the grid once, on purpose.** One element may bleed or overlap as the signature. A second break reads as a mistake.
- **LAY14. Align shared parts across siblings.** In pricing or comparison columns the titles, prices, lists and buttons sit on common lines. Use `subgrid`, or push the action to the bottom with `margin-top: auto`.
- **LAY15. Correct by eye after it renders.** An icon with a point, such as an arrow or a triangle, is shifted toward its point. A round avatar beside a square thumbnail is drawn slightly larger to look the same size. Geometry gets you close; your eyes finish it.
- **LAY16. Grid for two dimensions, flex for one row.** Space siblings with `gap`, not margins on components. Give grid tracks `minmax(0, 1fr)` and flex children `min-width: 0` so long content cannot push the layout wide.

## Rhythm between sections

- **LAY17. All spacing comes from one scale.** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128. A value off the scale needs a reason.
- **LAY18. Space shows grouping.** The gap inside a group is at most half the gap between groups: label to field 8, field to field 24, group to group 48.
- **LAY19. A heading sits closer to its own text than to the text before it.** Put two or three times as much space over it as under it, for example 64 and 24.
- **LAY20. Vary section spacing with the content.** 64 to 96 between ordinary sections and 128 or more once, around the peak. The same padding on every section is monotone however generous it is.
- **LAY21. Give the page one peak and a real ending.** One section has the largest type or image. A dense passage is followed by a quiet one. The last screen is the next step: a form, a price, a contact.

## Density

- **LAY22. Match density to the task.** A marketing page carries one idea per screen. A tool carries rows of 32 to 40px with 14px text, ruled lines instead of cards, and tabular figures.
- **LAY23. Empty is not the same as considered.** A sparse page of thin grey text is as generic as a crowded one. Put something large next to the space, or fill it with content at a scale that means something.

## Responsive from 320px up

- **LAY24. Write the phone layout first.** Base CSS is the 320px page. `min-width` queries add columns. Break where the content breaks, not at device names; 640, 768, 1024 and 1280 cover most pages.
- **LAY25. Test at 320, 390, 768, 1024, 1440 and 1920.** At each, `document.documentElement.scrollWidth` equals `clientWidth`. Any sideways scroll is a bug.
- **LAY26. Every multi-column block states its one-column form in the same rule set.** Overlaps, rotations and offsets flatten below 768: they collide with thumbs.
- **LAY27. Rethink the layout; do not shrink it.** On a phone the order may change, a table becomes stacked rows or scrolls inside its own container, and the navigation becomes a menu or a bottom bar.
- **LAY28. Be fluid between breakpoints.** `clamp()` for display type and section spacing, for example `padding-block: clamp(3rem, 2rem + 5vw, 8rem)`.
- **LAY29. Know the usual causes of overflow.** Fixed pixel widths, `100vw` (it includes the scrollbar), long unbroken strings (fix with `overflow-wrap: anywhere`), images without `max-width: 100%`, and decorations hanging off the edge (wrap them in `overflow-x: clip`).
- **LAY30. Cap content on wide screens.** At 1920 the text column is no wider than at 1440. Backgrounds and images may bleed to the edge; text does not.
- **LAY31. Gate hover by input, not by screen size.** Hover effects go inside `@media (hover: hover) and (pointer: fine)`. Use container queries for a component that appears at several widths.

## Structure drawn with lines

- **LAY32. Reach for a line before a box.** A 1px rule between rows, hairline column guides, a ruled table in place of a card grid. See the column rules at [Stripe](../styles/stripe.md), the two-column text list at [Locomotive](../styles/locomotive.md), the registration marks at [Intercom](../styles/intercom.md) and the dot grid at [Ramp](../styles/ramp.md).
- **LAY33. One rule per boundary.** Between rows, not above and below each. 1px, one step on the neutral scale.
- **LAY34. A line must separate real content or sit on the real grid.** Crosshairs, grid backdrops and rules that divide nothing are ornament ([anti-slop.md](anti-slop.md) SLOP11). Visible structure is not a licence for a newspaper costume either: choose it because the content is tabular or serial.
- **LAY35. A box only for an object.** Give something a background or a border when the user acts on it as a whole, or when it floats above the page. Never a box inside a box ([components.md](components.md) CMP28 to CMP30).

## Imagery

- **LAY36. Include one thing made by a hand or a camera.** A photograph, an illustration, a painting, a texture, a physical still life. A page of only rectangles, text and icons reads as a template. If you have no imagery, make type or one drawn diagram the object and say in the report that imagery is missing.
- **LAY37. Show the product as itself.** A real screenshot or a working component, cropped to the part that proves the claim, with interface text still legible (11px or more as rendered). Never a mock-up assembled from divs.
- **LAY38. Images at full strength.** No overlay heavier than text contrast requires, and no photographs at 10 percent opacity as wallpaper.
- **LAY39. Art-direct the crop per breakpoint.** Use `picture` with different sources so the subject stays in frame at 390 wide. Set `aspect-ratio`, `object-fit: cover` and `object-position`.
- **LAY40. Label every placeholder image and list it in the report.** Never hotlink random stock, and never invent a person.
- **LAY41. One icon library, one stroke weight.** 1.5px strokes beside regular text and 2px beside semibold, sized 1 to 1.25em. No emoji as icons and no icon in a tinted square.
