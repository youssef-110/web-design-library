# Patterns

What the references in this library have in common, and what marks a page as generated. Read this after choosing references and before writing code.

## What the strong pages share

### 1. The hero is one committed thing

None of the strong heroes is "headline, sub-line, two buttons, gradient". Each stakes the first screen on a single object or decision:

- **A real photograph, full bleed, with the type on it**: [Monzo](styles/monzo.md), [Mercury](styles/mercury.md), [Revolut](styles/revolut.md), [Sweetgreen](styles/sweetgreen.md), [Superhuman](styles/superhuman.md).
- **The product itself, unstyled**: [Perplexity](styles/perplexity.md) makes the homepage the app; [Linear](styles/linear.md) continues its own dark UI into the page; [Airbnb](styles/airbnb.md) skips the hero and shows listings.
- **A colour field as the layout**: [Wise](styles/wise.md) fills the hero with its lime and sets everything in one dark green.
- **One strange object**: the long cast shadow at [Teenage Engineering](styles/teenage-engineering.md), the lone triangle at [Vercel](styles/vercel.md), the ribbon at [Stripe](styles/stripe.md), the green-bezelled phone at [Cash App](styles/cash-app.md).
- **Type alone, at a size that is a decision**: [Granola](styles/granola.md), [Anthropic](styles/anthropic.md).

The test: describe your hero in six words without the words "clean", "modern" or "gradient". If you cannot, it is not committed yet.

### 2. Colour has a job, and usually one job

- Most pages are 90 percent neutral. The accent appears on one kind of thing: the primary action ([Airbnb](styles/airbnb.md), [Sweetgreen](styles/sweetgreen.md)), the product imagery only ([ElevenLabs](styles/elevenlabs.md), [Figma](styles/figma.md)), or the wordmark only ([Monzo](styles/monzo.md)).
- Several pages carry no accent colour in the interface at all and are stronger for it: [Anthropic](styles/anthropic.md), [Uber](styles/uber.md), [Pentagram](styles/pentagram.md).
- Text on a brand colour is a dark tint of that hue, not black ([Wise](styles/wise.md)). Dark themes are tinted, not `#000` with a neon.
- When a page is loud, it is loud with one colour, flat ([Wise](styles/wise.md), [Impossible Foods](styles/impossible-foods.md), [Hungry Tiger](styles/hungry-tiger.md)).

### 3. Type carries the voice

- **Weight is a choice, not a default.** Half of these headlines are light or regular ([Revolut](styles/revolut.md), [Mercury](styles/mercury.md), [Cash App](styles/cash-app.md), [monday.com](styles/monday.md), [Intercom](styles/intercom.md)); the other half are heavy on purpose ([Wise](styles/wise.md), [Discord](styles/discord.md), [Flighty](styles/flighty.md)). Almost none sit at the template's semibold.
- **Hierarchy inside one sentence**: two tones in a single headline ([Stripe](styles/stripe.md), [Intercom](styles/intercom.md)) or two faces in one paragraph ([Anthropic](styles/anthropic.md)) replace the eyebrow-headline-subhead stack.
- **A serif for the human sentence** next to a sans interface ([Granola](styles/granola.md), [Wispr Flow](styles/wispr-flow.md), [Intercom](styles/intercom.md), [Faire](styles/faire.md)). Roman, not a reflex italic.
- **Restraint as a signature**: a tiny serif wordmark and five text links around one photograph at [Pentagram](styles/pentagram.md), so the work is the only loud thing.
- Custom or licensed faces are common. When you cannot license one, choose a free face for its own character rather than the nearest lookalike of the template default.

### 4. Something made by a hand or a camera

Every memorable page contains at least one thing a layout tool does not produce on its own: a photograph of real people ([Monzo](styles/monzo.md)), character illustration ([Family](styles/family.md), [Notion](styles/notion.md), [Duolingo](styles/duolingo.md)), a painting ([Cursor](styles/cursor.md)), print texture and collage ([Granola](styles/granola.md), [Craft](styles/craft.md)), cut-out food photos ([Impossible Foods](styles/impossible-foods.md)), a physical still life ([Brex](styles/brex.md)). If your page is only rectangles, text and icons, it will read as a template however good the spacing is.

### 5. Structure you can see

Hairline column rules ([Stripe](styles/stripe.md)), registration squares ([Intercom](styles/intercom.md)), dot grids with selection handles ([Ramp](styles/ramp.md)), a portfolio set as a plain two-column text list ([Locomotive](styles/locomotive.md)). Structure drawn with lines replaces the stack of rounded cards and makes a page feel edited.

### 6. A voice in the small text

Lowercase jokes in the interface at [Teenage Engineering](styles/teenage-engineering.md), a whole site staged as a desktop operating system at [PostHog](styles/posthog.md), a booking form before any marketing copy at [Uber](styles/uber.md). The micro-copy is part of the design system.

## Marks of a generated page

If your plan or your result matches three or more of these, change the plan.

**Composition**
- Centred hero: small pill label, big headline, grey sub-line, two buttons, then a rounded screenshot or a gradient blob.
- A row of three (or six) equal cards, each with an icon in a tinted square, a bold title and two lines of grey text.
- A bento grid of pastel tiles with nothing in them but text.
- A "stats" band of three big numbers nobody measured.
- Every section built the same way and revealed with the same fade-up.
- A fake dashboard or terminal assembled from divs.

**Colour and surface**
- Purple-to-blue gradients, glowing shadows, a radial halo behind the hero.
- Gradient text.
- Near-black page with one neon accent, or cream page with a terracotta accent and an italic serif, chosen because they are safe.
- Glass cards. The same large radius on everything. A soft grey shadow on every box.

**Type**
- Inter, or a geometric sans, at weight 600, for everything.
- One word of the headline in italic serif or in the accent colour, for no reason.
- Tiny uppercase tracked labels above every heading.
- Title Case Headings.

**Copy**
- Seamless, effortless, powerful, supercharge, unlock, reimagine.
- "Not just X. It's Y." Three-beat lists. Em dashes everywhere.
- Invented testimonials, logos and round numbers.

**Motion**
- Content invisible until a script fades it in.
- Hover lift on every card. Bounce easing. Looping pulses and typewriter text with no data behind them.

## The short version

1. Start from the subject's world, not the category's conventions.
2. Commit the hero to one thing.
3. Give each colour one job.
4. Choose type weight on purpose.
5. Include something made by a hand or a camera.
6. Draw the structure with lines, not boxes.
7. Leave things out.
