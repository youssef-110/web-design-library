# Copy (CPY)

Words are part of the design. Template copy makes a custom layout look like a template. Load this whenever you write or edit a visible string.

## Voice

- **CPY1. Write the voice down before the copy.** Three adjectives and one "never": "dry, exact, warm; never cute". Hold it from the headline to the footer.
- **CPY2. Use the reader's words for things.** Name features the way a customer would, not the way the system is built: "Bills", not "Payables module".
- **CPY3. Second person, active voice, present tense.** "You get paid in two days", not "Payments will be processed within two business days".
- **CPY4. Specific beats clever.** Replace each adjective with a number, a name or a thing, or delete it. "Fast" becomes "loads in 0.4 seconds" or goes.
- **CPY5. Say each thing once.** If the supporting line repeats the headline in other words, cut it.
- **CPY6. The small text carries the voice too.** Empty states, tooltips, the footer, the 404. See [teenage engineering](../styles/teenage-engineering.md) and [PostHog](../styles/posthog.md). Never joke in an error, or about money, privacy or deletion.
- **CPY7. One register per page.** Do not mix terse data labels, long-form prose and sales punch unless the brand already does.

## Headlines

- **CPY8. The headline says what it is, or what changes for the reader, in ten words or fewer.** Test it by swapping in a competitor's name. If it is still true, rewrite it.
- **CPY9. The supporting line adds the how or the for-whom.** 25 words at most.
- **CPY10. Section headings are statements or plain labels.** "Payouts in two days", not an adjective and a noun.
- **CPY11. Sentence case, no closing full stop, no exclamation mark.**
- **CPY12. No formula cadence.** "Not just a tool. A partner." "X, reimagined." "Meet X." "Say goodbye to X." "Fast. Simple. Secure." Questions that begin "Tired of". Each is a template with the product name filled in. <!-- slop-ok -->

## Buttons and links

- **CPY13. A button names its result.** Verb plus object in one to three words: "Create invoice", "Book a table". Avoid Submit, Continue, OK, Learn more and Get started when something specific can be said.
- **CPY14. One label per intent.** The navigation, the hero and the footer use the same words for the same action.
- **CPY15. Link text makes sense on its own.** "Read the pricing guide", never "click here".
- **CPY16. An arrow only where direction is the meaning.** A next step or an external link. Not on every link.
- **CPY17. Confirmation buttons repeat the verb.** "Delete project" and "Keep project", not Yes and No.

## Errors and system messages

- **CPY18. An error says what happened, then what to do next.** Two sentences at most: "That card was declined. Try another card or call your bank."
- **CPY19. No blame, no apology theatre, no "Oops", no bare "Something went wrong".** An error code may follow in muted text; it is never the message. <!-- slop-ok -->
- **CPY20. Field errors are specific.** "Enter a date after 1 March", not "Invalid input".
- **CPY21. Empty, loading and success have set jobs.** Empty says what goes here and how to add the first one. Loading names the operation. Success is the past tense of the button, with no exclamation mark.
- **CPY22. A destructive confirmation states the consequence.** "This deletes 14 files. You cannot undo it."

## Numbers and claims

- **CPY23. Every number on the page has a source you can name.** No source means remove it or label it as an example. Never invent customers, logos, quotes, ratings, awards, prices or benchmarks.
- **CPY24. Real numbers are odd.** "212 teams" is believable; "200+" is not. Avoid 10x, 99.9% and 10,000+ unless the brief supplied them. <!-- slop-ok -->
- **CPY25. Numerals for all numbers in an interface.** "3 files", not "three files". Put a non-breaking space between number and unit, and format dates, currency and thousands with `Intl` for the locale.
- **CPY26. A claim sits next to its proof.** A screenshot, a sourced number, or a quote with name, role and company. A superlative such as fastest or best needs a citation or it goes.
- **CPY27. Sample content is labelled wherever it could be taken for real.** "Example data" in the corner of a demo table is enough.
- **CPY28. Draft copy is real sentences in the product's terms.** When the brief has no copy, write it properly, never filler text, and mark it as draft in the report.
- **CPY29. Sample names are believable and varied for the locale.** Not John Doe, Jane Smith or Acme, and not celebrities. <!-- slop-ok -->

## Words to avoid

- **CPY30. Hype.** Seamless, effortless, supercharge, turbocharge, reimagine, revolutionise, cutting-edge, next-gen, world-class, best-in-class, state-of-the-art, game-changing, frictionless, unleash, elevate, empower, synergy, blazing fast. <!-- slop-ok -->
- **CPY31. Words that call the reader's work easy.** Just, simply, easily, very, really, actually, basically.
- **CPY32. Stock phrases.** "In today's fast-paced world", "take your team to the next level", "we're excited to", "look no further", "the future of", "made simple", "for teams of all sizes", "everything you need", "trusted by teams worldwide". <!-- slop-ok -->
- **CPY33. The borrowed workshop voice.** "Crafted with care", "Made with love", "obsessively designed". Craft shows in the page or it does not.
- **CPY34. Punctuation tells.** No em dashes. No en dashes: write "3 to 5" or use a hyphen. No chains of middots, no trailing dots for drama, no exclamation marks, no emoji in interface copy, no sentences in capitals.
- **CPY35. Dressed-up verbs and tails.** "Functions as", "acts as" and "comes equipped with" become "is" and "has". Cut clauses that trail off in "making it easy to", "enabling" or "allowing you to".

## Honesty about what exists

- **CPY36. Describe only what exists.** No "AI-powered" unless it is. No feature the brief did not mention. No "coming soon" you were not told about. No fake live signals: viewers right now, updated two minutes ago, only 3 left.
- **CPY37. No dark patterns.** No guilt-trip decline links, no countdown that resets, no pre-ticked consent, no cost revealed at the last step.
- **CPY38. In a redesign, facts are not yours to edit.** Prices, legal text, claims and testimonials stay as they are. List every copy change you made.
- **CPY39. Read every string once before shipping.** Headings, buttons, alt text, errors, the footer. Anything you would not say to a person across a counter gets rewritten in plain words.
