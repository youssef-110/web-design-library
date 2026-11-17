# Sources

The rules in `rules/`, `SKILL.md`, `CHECKLIST.md` and `scripts/slop-scan.mjs` are original writing. They were written after studying the design skills below. No sentences, lists, tables, code or pattern lists were copied from any of them. Ideas and facts were learned, then every rule was written fresh, with its own wording, numbering, examples and values.

Where an idea is closely tied to one source, that source is credited here. Authors and links are given only where a file on the machine that did this work states them. "Per the suite notice" means the attribution comes from the `NOTICE.md` of web-design-suite, not from the skill's own file.

## Skills studied

| Source | Author or publisher | Link | Ideas it shaped |
|---|---|---|---|
| web-design-suite | Youssef | https://github.com/youssef-110/web-design-suite | Routing rule files by task; settling conflicts between rules in writing; a report that separates verified from not verified. It also served as a map to the sources below. |
| frontend-design | Anthropic | none given | Designing from the subject matter; the look-alike clusters that generated pages fall into; making one element memorable; checking a plan against what a similar prompt would produce; naming things from the user's side. |
| impeccable | Paul Bakaus | https://impeccable.style and https://github.com/pbakaus/impeccable | Choosing by what the visitor came to do; picking light or dark from the place of use; styling selection, caret and scrollbars; a floor for tight tracking; treating a category's first idea and its opposite as the same rut; capping self-review passes. |
| design-taste-frontend (taste-skill), with redesign-existing-projects, gpt-taste, minimalist-ui, high-end-visual-design, industrial-brutalist-ui | Leonxlnx, per the suite notice | https://github.com/leonxlnx/taste-skill, per the suite notice | Limits on what a hero holds; restraint with labels above headings; not repeating one section layout; the small tells of a generated page (scroll cues, version badges, locale strips, product screens faked from divs); a ban on em dashes; auditing before a redesign and asking before changing things other systems rely on. |
| emil-design-eng, improve-animations, find-animation-opportunities, animation-vocabulary, break-ui | Emil Kowalski (named in the files) | https://emilkowal.ski/ | Letting frequency of use decide whether something animates; naming the purpose of a motion; ease-out for entering and leaving; nothing from scale zero; popovers that grow from their trigger; faster exits; transitions over keyframes for interruptible motion; reviewing motion slowed down; testing components with worst-case data. |
| apple-design | Part of Emil Kowalski's skills, per the suite notice; the file says its knowledge comes from Apple's WWDC design talks | none given | Feedback on pointer down; springs that continue a gesture's velocity; overshoot only after a throw. |
| make-interfaces-feel-better | Jakub Krehel, per the suite notice | https://github.com/jakubkrehel/make-interfaces-feel-better, per the suite notice | Concentric corner radii; optical alignment; shadows and borders doing different jobs; tabular figures; balanced headings; press scale; minimum hit areas; icon stroke matched to text weight; sparing use of `will-change`. |
| refero-design | Refero | https://styles.refero.design/ (from this repository's README) | Research before design; several references, never one, never an average; indigo, cards everywhere, dark by default and the calm editorial serif as tells; keeping a colour or token in the role its reference gave it. |
| transitions-dev, transitions-polish | Jakub Antalik, Transitions.dev | https://transitions.dev | Read for principles only: timing should match what the motion does; closing is quicker than opening; travel grows with ceremony. Its licence does not allow redistributing the collection, and none of its transitions, tokens or values are used here. |
| gsap-scrolltrigger | GreenSock, per the suite notice; the file calls itself the official GSAP skill | https://github.com/greensock/gsap-skills, per the suite notice | Creating scroll triggers in page order, refreshing after late layout changes, cleaning up, removing debug markers. |
| web-animation-design, emil-design-engineering | Orbit audit-suite, per the suite notice; both files say they are based on Emil Kowalski's work | https://github.com/Recusive/Orbit-plugin, per the suite notice | No layout shift from dynamic content; touch first with hover as an addition. Most of the content overlaps the Emil Kowalski skills above. |
| unslop | Jan Blazej (hzblj-skills), per the suite notice | https://github.com/hzblj/skills, per the suite notice | Tells in prose: inflated verbs for "is", forced groups of three, trailing "-ing" clauses; and the point that removing tells is not enough without a voice. |
| writing-guidelines, web-design-guidelines | Vercel (stated in the files' metadata) | https://github.com/vercel-labs/writing-guidelines and https://github.com/vercel-labs/web-interface-guidelines (the files fetch from these) | The installed files only fetch their rules at run time, and the remote rules were not fetched for this work. Their ideas reached this library second-hand through web-design-suite: sentence case, form attributes, state kept in the URL. |
| design-critique, accessibility-review | Anthropic (plugin manifest) | none given | A first-impression check; the structure of a WCAG AA review; automated audits finding only part of the problems. |

## Not available

The skills ui-typography, ui-surfaces, ui-motion and ui-interactions were on the reading list but could not be found on the machine, so nothing here comes from them.

## Public standards and facts

Contrast ratios, target sizes, reflow and text-spacing requirements come from WCAG 2.2. The loading thresholds are the published Core Web Vitals. The easing curves in `rules/motion.md` are standard ease-out quint and ease-in-out cubic approximations. The Tailwind colour values in the scanner's purple check are that framework's public palette.

## This library

`PATTERNS.md`, `USING.md` and the entries in `styles/` are part of this repository and are linked from the rules as illustrations. The site entries describe public websites in original words; see `README.md` for how they were made.
