# Process (PRO)

How to get from a request to a committed direction, and how to check your own work. Load this first on every task.

## Intake

- **PRO1. Read before you ask.** Go through the request, the repository (stack, tokens, fonts, existing components) and every link or screenshot you were given. For each question in PRO3, note whether the answer was given, inferred or missing.
- **PRO2. Write the one-sentence brief.** "A (kind of page) for (who arrives, from where, in what mood), that should feel (two or three words)." If you cannot fill it in, that is the question to ask.
- **PRO3. Answer six intake questions from the material first.** Who arrives and what do they already know? What one thing must they do or understand? What real content and proof exists (copy, numbers, photographs, logos, quotes)? What is fixed (brand colours, fonts, stack, URLs)? What must it not look like? What counts as done (pages, states, breakpoints)?
- **PRO4. Ask once, three questions at most.** Ask only what would change the result, and attach your assumption to each: "I am assuming this is for first-time visitors from search. Say if not." Never ask for hex values, font names or a pick from a menu of styles.
- **PRO5. With nobody to ask, proceed on labelled assumptions.** List them at the top of the report so they can be corrected in one reply.
- **PRO6. A choice pinned in the brief outranks these rules.** A pinned font, palette, layout or motion level is done exactly and done well, even if [anti-slop.md](anti-slop.md) lists it. Two things are never traded away: the accessibility floor ([accessibility.md](accessibility.md)) and honesty about what exists ([copy.md](copy.md) CPY23, CPY36).
- **PRO7. Name what the visitor came to do.** Decide (marketing, pricing), work (app, dashboard, settings), read (docs, articles) or look (portfolio, gallery). Pages for deciding and looking may carry the voice in their layout. Pages for working and reading keep standard structure and controls, and express the brand through type, colour and one detail.

## The subject's world

- **PRO8. List five physical things from the subject before opening any reference.** Objects, places, documents, tools, materials. A parcel tracker gives shipping labels, barcodes, customs stamps, conveyor belts, brown tape.
- **PRO9. Derive palette, type and one structural idea from that list.** Ask what the subject looked like before the web. The shipping label gives black on kraft and white, a condensed grotesque, thick rules, and a barcode strip as a divider. None of that comes from "logistics software".
- **PRO10. Throw away the category's first idea and its obvious opposite.** Both are averages. For a bank the first idea is a blue gradient and the opposite is black with neon. Take the third idea.
- **PRO11. Check the world against the audience.** If the people who use the product would not recognise the reference, it is your taste, not their world. A children's reading app built from archive index cards fails this.

## References

- **PRO12. Pick two or three entries from [INDEX.md](../INDEX.md).** One for the world, one for type, one for a detail (a component, a motion idea, a use of colour). At least one comes from outside the product's category. Never use one alone: one reference is a copy.
- **PRO13. Take technique, never appearance.** From each entry's "Steal this", write the technique restated for your product. "Keep the brand colour to the wordmark" transfers. A hex value or a section order does not.
- **PRO14. One reference leads.** When they disagree, the world reference wins and each of the others contributes one narrow detail. Blending three gives beige.
- **PRO15. Skip an entry whose "Not for" describes your case.**
- **PRO16. Never reproduce a brand's logo, illustration, photography or sentences.** The library describes those sites for study. The page you build belongs to someone else.

## The four-line commitment

- **PRO17. Write four lines before any code and keep to them.** World: the subject-derived idea in a phrase. Signature: the one element a visitor would remember. Palette: neutrals plus at most two colours, each with a job. Type: display face, body face, and the one typographic move that is not a default.
- **PRO18. Show the four lines to the person when someone is there.** It costs one message and saves a rebuild.
- **PRO19. Describe the first screen in six words.** Without "clean", "modern" or "gradient". If you cannot, the hero is not committed yet.
- **PRO20. Be loud once.** The signature carries the page; everything around it is quiet and exact. If two elements compete to be remembered, demote one.
- **PRO21. Run the same-brief test.** Imagine the brief arriving for a competitor. Any of the four lines that would come out the same is the generic one. Rewrite that line.
- **PRO22. Check the plan against [anti-slop.md](anti-slop.md) now, not after the build.** Three or more matches means a new plan.
- **PRO23. Define tokens before components.** Colour roles, type scale, spacing scale, radius scale, durations and easing, as CSS custom properties in one place. Components never hold raw values.

## Redesign or new build

- **PRO24. Decide which job it is.** Sharpen (keep the identity, fix the execution), re-skin (keep content and structure, replace the look) or new build. If unclear, ask once. A re-skin that keeps the old look, or a sharpen that discards it, is the wrong job done well.
- **PRO25. Audit before editing.** Record the stack, tokens, fonts, page tree, the main conversion path and what already works. List problems with file and line before fixing any.
- **PRO26. Fix in order of value per risk.** Type, then colour, then interactive states, then spacing and alignment, then generic components, then empty, loading and error states, then motion, then the hero. Stop when the brief is met.
- **PRO27. Ask before changing anything other systems depend on.** URLs, navigation labels, form field names, anchors and IDs, analytics hooks, the logo, legal text, prices, claims.
- **PRO28. Stay in the existing stack.** No framework or styling migration as a side effect. Check the installed versions before using a feature.
- **PRO29. Show before and after at the same viewport.** One pair per major section, plus a list of what you left alone and why.

## Building

- **PRO30. Build the whole thing.** Every section, state and breakpoint that was asked for. If you must stop, stop at a clean boundary and say exactly what is missing.
- **PRO31. Use real content from the first commit.** A layout that only holds with short demo strings is not done. Feed it a 38-character name, a one-letter name, an empty list, counts of 0, 1 and 1,284, a missing image and a label 40 percent longer than the English.
- **PRO32. The page works without JavaScript.** Content, navigation, links and forms are in the HTML. Scripts add behaviour on top ([motion.md](motion.md) MOT18).

## Reviewing your own work

- **PRO33. Judge the render, not the code.** Open it in a browser. Take screenshots at 390 and 1440 wide and look at each one before deciding anything.
- **PRO34. Blur it.** Zoom out to 25 percent or squint. You should still see the first thing, then the second, then the groups, in that order. If not, fix hierarchy before detail.
- **PRO35. Cover the logo.** Hide the logo and the product name. If the page could belong to any company in the category, the signature is too weak.
- **PRO36. Remove one thing.** Before shipping, delete the least necessary decoration. There is always one.
- **PRO37. Cap review at two passes.** The first pass finds everything and you fix the lot together. The second only confirms. Past that, write down what is left and stop.
- **PRO38. Run [CHECKLIST.md](../CHECKLIST.md) and `node scripts/slop-scan.mjs <path>`.** Fix every error. Explain any warning you keep.
- **PRO39. Report honestly.** What was done, what was verified and how, what was not verified. Name the references that shaped the work. Never write "verified" for a check that did not run.
