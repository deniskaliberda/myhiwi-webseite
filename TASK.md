# Task

## Objective
Expand the five customer case studies with verified, dated results and publish the extension on myhiwi.de.

## Constraints
Preserve existing URLs, AI training and Fahrschule functionality. Leave the original checkout unchanged. No fabricated results or customer records in public assets. Keep German Sie voice and existing brand. Do not send test messages to real recipients. Keep private source exports outside the public repository and deployment.

## Decisions
- User explicitly authorized publication on 6 September 2026; the latest request extends the same release with more numerical evidence.
- Each overview card now shows four dated metrics with expandable sources. Each detail page has six main metrics, supplemented by relevant monthly, technical or campaign results.
- Sonnenhof shows all eight recorded months, totaling 607 inquiries; partial months are labeled. Accommodation and source subsets are identified, with overlapping attribution excluded from totals. Requested stays are not presented as bookings.
- Antje has four technical before/after comparisons, explicitly identified as lab measurements. Mannis separates registration forms and contact inquiries. Formazin retains its pre-redesign baseline. Sherman separates Meta campaign results from Google and platform outcomes.
- The original yellow Sonnenhof before image from d6757f2 remains unchanged.
- Source reconciliation and the full 60-test browser suite passed. The final production build also passed after a single-month heading clarification; three focused final-build browser checks passed. Production verification follows.
- Earlier relaunch PR #4 is merged. Public deployment uses the main branch; no other checkout or customer project is changed.

## Failed approaches
Do not infer results from incomplete months, historical unverified marketing claims, unmarked traffic sources or mixed measurement methods.

## Next
Publish, verify the production pages, and confirm temporary test-server cleanup. Obtain MyHiwi's own Search Console access separately for the postlaunch baseline.

## accepted_commit
d6757f2
