# Task

| Field | Value |
|---|---|
| status | active |
| phase | preview |
| updated | 2026-09-07 |
| agent | Codex |
| accepted_commit | 21cd79276ddb7e439009b8c45c7467a289b68669 (base) |

## Objective
Replace the rejected hero with a six-scene mosaic showing the entire editorial process ending in a reviewed LinkedIn post. Retain the approved briefing illustration later in the article. Inspect actual images and the article layout.

## Constraints
Denis explicitly requested the new images and contextual placement; preserve the Higgsfield attribution. No invented likeness, customer details or apparent real product screens. Data isolation remains explicitly planned. Preserve the long article, existing precise diagrams and unrelated checkout changes. No LinkedIn publication.

## Decisions
Denis likes the newly generated pair visually but wants a multi-scene process mosaic as the main image and one section illustration later. Six steps: tell, clarify, select evidence, draft, review, finished post. The briefing image is retained. Additional mosaic batch capped at eight credits. The prior pair cost four credits total. Layout labels remain accessible real text.

## Failed approaches
The original two-human conversation illustration was rejected as semantically unclear. Microphone/still-life alternatives were superseded before generation.

## Next
Final mosaic and briefing figure integrated. Build including lint/typecheck passed; generated article assertions passed. Verify deployed preview desktop/mobile, then update the authorized public article.

## Evidence
Two section candidates cost four credits; final mosaic cost 2.5 credits. Only mosaic plus briefing selected. Both selected assets inspected directly. Build and embedded lint/typecheck passed (two existing unrelated image warnings). Generated output: one H1, four figures, correct new image metadata, accessible six-step list, original attribution and planned-isolation label.
