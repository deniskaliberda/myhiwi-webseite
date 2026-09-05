# Task

| Field | Value |
|---|---|
| status | ready-for-review |
| phase | protected-preview |
| updated | 2026-09-05 |
| agent | Codex |
| repo | myhiwi-webseite |
| accepted_commit | 3f22346 |

## Objective
Relaunch MyHiwi for local businesses with websites, Google visibility and AI search visibility. Latest user scope: implement the approved reference refresh across project pages, homepage and service pages using current customer results and authentic images.

## Constraints
Preserve existing URLs, AI training and Fahrschule functionality. Do not overwrite original checkout changes. No fabricated results, ranking guarantees, testimonials or prices. German Sie voice and existing blue/ink brand. Do not send test messages to real recipients.

## Decisions
- User approved audit direction and implementation ("ja go").
- Branch codex/google-ki-relaunch starts from current origin/main 3f22346, preserving live AI training.
- Existing uncommitted performance changes copied from original checkout; original remains untouched.
- Existing brand visual tokens retained; old positioning/CTA rules superseded by approved Google/AI visibility focus.
- First deliverable is tested preview; MyHiwi's own GSC/GBP access remains an external dependency. Customer reference metrics were checked against available source records.
- User confirmed five core references: Sonnenhof, Mr. Sherman, Formazin, Physio Antje Förster and Mannis Fahrschule.
- Existing preview implementation e0768a4 is a technical/design foundation; its older reference content is not the completed editorial scope.
- Final August GSC data overrides incomplete monthly report snapshots. Antje July has only four days of data; no monthly growth percentage. Formazin September redesign needs a later observation period.
- User approved implementation of the researched masterplan with "go". Deliver updated verified preview, not production publication. Keep private evidence outside public assets and distinguish inquiries, search clicks and actual bookings.

## Failed approaches
- None in implementation.

## Next
Review the protected preview through draft PR #4. Production publication remains a separate phase. MyHiwi Search Console access remains a separate measurement dependency.

## Evidence
Five source-backed reference pages, 23 curated images, shared homepage/service/industry evidence and project-aware contact entry are implemented. Local and Vercel production builds pass. All 58 Playwright tests pass; all 39 sitemap routes return HTTP 200 locally. Independent review findings on overview metrics and Sherman role images are resolved. Authenticated preview checks pass for all five cases, overview, home, AI service, project contact context, sitemap and a role image. Archived raw files and internal research URLs return 404.
Preview: https://myhiwi-webseite-hi50jvpwu-denis24.vercel.app. Verification: docs/research/2026-09-05-reference-refresh-verification.md.
Private source records, screenshot captures and the approved masterplan are retained locally and excluded from this public repository and preview uploads. Fifteen legacy raw public documents were retained in the local archive and removed from serving paths.
