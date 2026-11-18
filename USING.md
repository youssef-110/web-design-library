# Using this library

How to pick and apply references, for an agent that is about to design or redesign a web page. Follow the steps in order. They take a few minutes and they change the result.

This file covers the references. The full workflow, from brief to verified build, is in [`SKILL.md`](SKILL.md); the craft rules are in [`rules/`](rules) and the pre-ship check is [`CHECKLIST.md`](CHECKLIST.md).

## 1. Say what you are making

One sentence, before you open any reference:

> A <kind of page> for <who arrives, from where, in what mood>, that should feel <two or three words>.

If you cannot fill this in, ask the person you work for. Do not pick references to compensate for a missing brief.

## 2. Find the subject's own world first

Before the references, list five physical things from the product's subject: objects, places, documents, tools, materials. A phone-call agent gives you hold queues, receipts, reference numbers, forms, rubber stamps. A flight tracker gives you departure boards and boarding passes. The strongest pages in this library are built from their subject's world, not from their category's conventions. Your design direction should come from this list. The references then teach you how to execute it well.

## 3. Pick two or three references

Open `INDEX.md` (or query `index.json`). Choose:

- **one for the world**: closest to the feeling you want, whatever its category;
- **one for type**: a site whose typography does something you want to learn;
- **one for a detail**: a component, a motion idea or a way of using colour.

Rules:

- At least one reference must come from outside your product's category. If every reference is a competitor, you will ship the category average.
- Never use one reference alone. One reference is a clone; two or three are an education.
- Skip an entry whose "Not for" describes your case.

## 4. Read them properly

Read each chosen entry in full. From each, write down:

- the technique in "Steal this" that you will use, restated for your product;
- what in "Why it does not look generic" you can do an equivalent of.

Take technique, not appearance. "Reserve the accent colour for one object" transfers. A hex value does not; nor does a layout.

## 5. Commit before you build

Write four lines and keep to them:

1. **World**: the subject-derived idea, in a phrase.
2. **Signature**: the one element a visitor would remember. Everything else stays quiet.
3. **Palette**: neutrals plus at most two colours, each with a job.
4. **Type**: display face, body face, and the single typographic move that is not a default.

Then check it against [`rules/anti-slop.md`](rules/anti-slop.md), the full catalogue (`PATTERNS.md`, section "Marks of a generated page", is the short version). If your plan matches three or more, revise the plan, not the polish.

## 6. Credit

If a reference shaped the work, say which in your hand-off notes. It helps the next person understand the decisions.

## What not to do

- Do not reproduce a brand's logo, illustrations, photography or copy.
- Do not rebuild a site's layout section by section.
- Do not present the result as affiliated with any referenced brand.
- Do not average five references into beige. Pick a direction and leave things out.
