# Pre-ship checklist

Run this in order on the rendered page, in a browser, served from a local server and not from `file://`. A check that cannot run goes under "Not verified" in the report. Rule IDs point into `rules/`.

## The checks

1. **1440 wide.** Take a full-page screenshot and look at it. Every brief requirement is present, and the headline is two lines or fewer (TYP12).
2. **390 wide.** Take a full-page screenshot and look at it. Each section has a deliberate one-column form, reading text is 16px or larger, and targets are 44px (LAY26, CMP2).
3. **First screen.** At 1280 by 720 and at 390 by 700, the headline, the primary action and part of the signature show without scrolling (LAY7).
4. **320 wide.** `document.documentElement.scrollWidth === document.documentElement.clientWidth` is true. Repeat at 768, 1024 and 1920. At 200 percent zoom nothing is clipped (LAY25, A11.29).
5. **Keyboard.** Tab from the top of the page to the bottom. Every control is reachable in order, focus is always visible, Escape closes overlays, the skip link works, and the main task can be completed (A11.7 to A11.13).
6. **Reduced motion.** Emulate `prefers-reduced-motion: reduce` and reload. Nothing travels, loops or autoplays, and all content is visible (MOT30 to MOT33).
7. **JavaScript off.** Disable scripts and reload. Content, navigation, links and forms are all there, and nothing is stuck at opacity 0 (PRO32, MOT18).
8. **Contrast.** Compute the lowest text pair and the lowest control pair in each theme: text 4.5:1, large text and controls 3:1. Check text over images at its worst spot (COL23 to COL26).
9. **Console and network.** Zero errors, no 404s, and the computed font is the intended face, not the fallback (TYP35).
10. **States.** Hover, focus, press, disabled and loading on each kind of control. Empty, loading and error on each view that loads data (CMP1, CMP45 to CMP47).
11. **Worst-case data.** A 38-character name, a one-letter name, an empty list, counts of 0, 1 and 1,284, and a missing image. Nothing overflows or collapses (PRO31).
12. **Forced colours.** Emulate `forced-colors: active`. Buttons, inputs and focus rings are still visible (A11.33).
13. **Performance.** On a throttled phone profile, record LCP, CLS and total transfer size, and name the LCP element (PRF1, PRF34).
14. **Copy scan.** Read every visible string once: headings, buttons, alt text, errors, footer. No hype words, no formula cadence, no em or en dashes, no placeholder names, no number without a source (CPY8 to CPY39).
15. **Slop scan.** Run `node scripts/slop-scan.mjs <files or folders>`. Fix every error and explain any warning you keep. Then read `rules/anti-slop.md` against the screenshots, because most of it cannot be scanned. Three or more matches means going back to the plan.
16. **The four lines.** Compare the page with your commitment. The signature is there and nothing competes with it, the accent does one job, and the type move is visible (PRO17, PRO20).
17. **The logo-covered test.** Hide the logo and the product name. If the page could belong to any company in its category, the signature is too weak. Do not report the page as finished (PRO35).
18. **Remove one thing.** Delete the least necessary decoration (PRO36).

## The report

End with this, and only with what is true. Never write "verified" for a check that did not run.

```markdown
### Done
- What was built or changed, by page and section.
- The four-line commitment, and the references that shaped it.
### Verified
- Each check that ran, how it ran, and the result. For example: "390 and 1440 screenshots reviewed.
  No overflow at 320. Lowest contrast 5.2:1 (muted text on canvas). Slop scan: 0 errors, 1 warning
  (SLOP77, kept because the brief asks for a full-height hero)."
### Not verified
- Each check that did not run, and why. For example: "Real-device touch: no phone available."
### Assumptions and open items
- What you inferred in place of a missing brief field.
- Placeholder images, draft copy and sample data that still need replacing.
```
