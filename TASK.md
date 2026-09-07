# Task

| Field | Value |
|---|---|
| status | active |
| phase | preview |
| updated | 2026-09-07 |
| agent | Codex |
| repo | myhiwi-webseite |
| accepted_commit | 9a33b3c (current production base) |

## Objective
Tell the full Formazin project story: MyHiwi built and launched the complete website, then expanded energy consulting into a specific offer and inquiry process. Prepare a tested revised preview and report the publication state.

## Constraints
Own branch codex/formazin-project-story-20260907 from origin/main in the existing isolated worktree. No blog or customer-site edits. Previous revision is live; this expanded narrative is a new preview. Public facts and approved live photos only. Built inquiry routes are not measured inquiries, sales or revenue. No unsupported premium/performance claims or invented historical screenshots.

## Decisions
- Homepage screenshot becomes the cover for the whole project.
- Existing comparison component receives optional labels to show foundation and expansion using current screenshots, explicitly dated, rather than implying historical before/after photos.
- Describe the actual portfolio filters, project detail pages, mobile navigation, structured inquiry steps and page metadata. Do not present implementation features as proven commercial outcomes.

## Failed approaches
- Search crawl returned an older energy page; use direct public browser verification.

## Next
Build and four relevant Playwright checks passed. Prepare branch preview and draft PR, verify hosted HTML/images, then close task-owned sessions.

## Evidence
See docs/verification/formazin-project-story-2026-09-07.md. Build52 routes/typecheck/lint and 4 Playwright checks passed. Desktop1440/mobile390 images and layout verified.
