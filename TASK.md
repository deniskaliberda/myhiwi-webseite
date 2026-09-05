# Task

| Field | Value |
|---|---|
| status | review-ready |
| phase | verified-preview |
| updated | 2026-09-05 |
| agent | Codex |
| repo | myhiwi-webseite |
| accepted_commit | 3f22346 |

## Objective
Relaunch MyHiwi for local businesses with three clear services: websites, Google visibility and AI search visibility. Deliver a tested, reviewable preview.

## Constraints
Preserve existing URLs, AI training and Fahrschule functionality. Do not overwrite original checkout changes. No fabricated results, ranking guarantees, testimonials or prices. German Sie voice and existing blue/ink brand. Do not send test messages to real recipients.

## Decisions
- User approved audit direction and implementation ("ja go").
- Branch codex/google-ki-relaunch starts from current origin/main 3f22346, preserving live AI training.
- Existing uncommitted performance changes copied from original checkout; original remains untouched.
- Existing brand visual tokens retained; old positioning/CTA rules superseded by approved Google/AI visibility focus.
- First deliverable is tested preview; GSC/GBP access remains external dependency.

## Failed approaches
- None in implementation.

## Next
Review the relaunch preview, then approve integration into main and production; separately grant the existing reporting account access to MyHiwi Search Console.

## Evidence
Production build and full Playwright suite passed (50 tests). All 37 sitemap routes returned HTTP 200 locally. Preview: https://myhiwi-webseite-jvabolm3g-denis24.vercel.app. Verification: docs/research/2026-09-05-relaunch-verification.md.
