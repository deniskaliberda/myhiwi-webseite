# Planned editorial access graphic — 2026-09-07

The rejected folder-and-monitor illustration did not explain information selection or access boundaries. It and the previous data diagram are replaced by one responsive HTML graphic immediately below the relevant section heading.

The graphic separates a protected customer workspace from a proposed editorial workspace. Denis selects and checks information; only the approved selection becomes a separate brief. The text assistant uses that brief, asks questions and drafts. Final review remains with Denis. The access boundary and implementation still required are explicit. No legal compliance guarantee is added.

## Verification

- Production build passed, including TypeScript/lint and 52 routes. Existing unrelated image lint warnings remain.
- Desktop 1440px: complete graphic, legible zones/labels, planned-state and provenance visible.
- Mobile 390px: cards stack in reading order, no element or page horizontal overflow. Arrow orientation follows the stack.
- Browser animation control starts a single 4.8-second sequence. Computed CSS durations/delays verified. It returns to static state and the button becomes available again.
- CSS restricts animation to no-preference media and hides playback for reduced-motion. All explanatory content is present in server-generated HTML regardless of JavaScript.
- Generated HTML has one H1, three figures total, exactly one access graphic and no rejected briefing image. Hero OG metadata remains the approved six-scene mosaic.
- Content provenance paragraph updated: only the main illustration is credited to Higgsfield; the new graphic is labelled Schematische Webgrafik · MyHiwi.
- Coordinating task visually reviewed the desktop screenshot and confirmed ready for release, no corrections required (2026-09-07).
- No Formazin, overview, hero image or unrelated repository edits. No new image generation.

Public release verification pending.
