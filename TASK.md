# Task

| Field | Value |
|---|---|
| status | active |
| phase | publish |
| updated | 2026-09-07 |
| agent | Codex |
| repo | myhiwi-webseite |
| accepted_commit | 5226331 (base) |

## Objective
Publish the user-approved long LinkedIn-Hiwi blog on myhiwi.de after casual-language and factual review. Then prepare a LinkedIn post based on its verified live URL.

## Constraints
Denis explicitly authorized publishing after the review on 7 September. Preserve unrelated work in the original checkout. Worktree based on origin/main. Keep planned data isolation distinct from verified capabilities. No blanket GDPR claims. Use the approved Higgsfield illustration and two accurate diagrams. No LinkedIn post publication authorized yet.

## Acceptance
Production build and lint pass. Article, cover, author/date, canonical, structured data, listing, sitemap and RSS resolve correctly. Production URL verified after release.

## Decisions
- Existing brand tokens, isolated article CSS, server-rendered content.
- Publication source: content/blog/linkedin-hiwi.json, reused by discovery pages.
- Local image asset avoids a third-party media request from readers.

## Failed approaches
- Old README names master; repository default branch is main.
- A browser attempt to open the earlier local HTML file was blocked by URL policy. Do not bypass that block.

## Next
Build, lint and generated-page checks passed. Publish the isolated change, then verify production article, image, metadata and discovery routes.

## Evidence
Production build passed for 52 routes. Lint passed with two existing image warnings in unrelated components. Generated-page check passed: one H1, three figures, valid anchors, author/date/canonical/BlogPosting, listing/RSS/sitemap and no internal paths or remote media URLs.
