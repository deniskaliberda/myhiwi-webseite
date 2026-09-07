# Task

| Field | Value |
|---|---|
| status | active |
| phase | release |
| updated | 2026-09-07 |
| agent | Codex |
| accepted_commit | 55443cd (current production base, including Formazin PRs 7 and 8) |

## Objective
Publish the approved six-scene LinkedIn-Hiwi mosaic consistently as article hero, blog-listing image and social metadata image. Retain the selected briefing illustration and Higgsfield attribution. Verify the public article and image after release.

## Constraints
Denis explicitly authorized this publication and requested completion of the missing image update. Preserve the long article, existing diagrams and planned-state wording. No new image generation or LinkedIn-post changes. Preserve all current Formazin work and unrelated local files.

## Decisions
Continue existing PR 6 and its dedicated worktree. Merge current main into this branch; only TASK.md conflicted. Keep the approved mosaic uncropped, with accessible step text and a full-size link. Use the shared article image for hero, listing, OpenGraph, Twitter and BlogPosting metadata. Formazin production work from PRs 7 and 8 remains unchanged; its evidence is in docs/verification/formazin-project-story-2026-09-07.md.

## Failed approaches
The approved image update remained in unmerged PR 6. Newer changes to the shared TASK.md caused a merge conflict; no blog or Formazin application files conflicted.

## Next
Push the existing PR, merge after checks, wait for production, then verify public image bytes and page metadata.

## Evidence
Approved mosaic 3504x2336; briefing 2688x1520. Combined production build passed. Desktop 1440px and mobile 390px browser verification passed for article and listing: no horizontal overflow, both illustrations load with natural aspect ratios, process text and attribution visible. Static HTML confirms article OG/Twitter/BlogPosting image consistency. Formazin implementation diff against current main is empty. See docs/verification/linkedin-hiwi-mosaic-2026-09-07.md.
