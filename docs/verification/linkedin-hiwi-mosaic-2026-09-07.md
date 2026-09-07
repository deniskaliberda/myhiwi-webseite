# Approved LinkedIn-Hiwi mosaic release — 2026-09-07

The previously approved image update remained in PR 6. Current production at 55443cd includes Formazin PRs 7 and 8. Merging it into the illustration branch conflicted only in TASK.md; the application changes combined cleanly.

## Scope

- Approved six-scene mosaic as article hero and blog-listing image.
- Article OpenGraph, Twitter and BlogPosting metadata use the same asset.
- Selected briefing illustration remains below the planned-access heading, with planned-state wording.
- Both illustrations retain Higgsfield attribution. Hero has six accessible steps and a full-size link.
- No image generation, LinkedIn publication or Formazin application changes.

## Verification before release

- `npm run build`: passed including TypeScript and lint; only existing unrelated image warnings.
- Static generated HTML: exactly one H1 on each route, correct hero/listing asset, correct article OG/Twitter dimensions and URL, planned label and attribution present.
- Browser at 1440x1000 and 390x844: hero and listing image load uncropped at natural 3:2 ratio, no horizontal overflow, mobile steps and enlargement link readable.
- Browser inspection of the briefing section: loaded illustration, planned label and attribution visible.
- Formazin application files have no diff against production main 55443cd.
- `git diff --check`: passed.

Public deployment verification follows after PR merge.
