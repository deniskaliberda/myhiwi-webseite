# Task

| Field | Value |
|---|---|
| status | active |
| phase | preview |
| updated | 2026-09-07 |
| agent | Codex |
| repo | myhiwi-webseite |
| accepted_commit | 21cd792 (origin/main base) |

## Objective
Update the Formazin case study with verified current public content and website screenshots. Deliver tested changes and a reviewable preview with the publication status.

## Constraints
Own worktree and branch codex/formazin-case-study-20260907 from origin/main. Preserve original checkout, customer sites and all blog work. No production publication or external messages. Only public facts and approved live visuals; no internal customer information or invented results. Reuse canonical DESIGN.md and existing case components for this authorized content refresh.

## Decisions
- Current main and the public case use the shared case-study data, unlike the older original checkout.
- Direct browser verification takes precedence over the stale web-search snapshot.
- Use dated screenshots of the live energy overview and services. Remove the obsolete image comparison and unsupported delivery totals. Unknown outcomes remain explicitly open.

## Failed approaches
- Search crawl returns an older energy page; direct browser shows the current 6 September release.

## Next
Build, lint and three relevant browser tests passed. Create the branch preview and draft PR, verify deployed pages, then close task-owned browser/server.

## Evidence
See docs/verification/formazin-case-study-2026-09-07.md. Build 52 routes, lint/types passed; three Playwright checks passed. Desktop 1440/mobile 390 images loaded without overflow.
