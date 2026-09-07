# Task

| Field | Value |
|---|---|
| status | active |
| phase | release |
| updated | 2026-09-07 |
| agent | Codex |
| accepted_commit | 3259d318220a3ce016a0bbe9bca13cf739276209 |

## Objective
Replace the rejected briefing illustration and redundant data diagram with one clear responsive web graphic explaining planned editorial access. Preserve the approved six-scene hero mosaic and publish the correction after coordinating screenshot review.

## Constraints
Explicitly authorized correction and release. Show internal customer files, Denis selecting and checking, separate approved briefing, text draft and final human review. No direct Text-Hiwi access to customer files; actual permissions still need implementation and verification. No legal compliance promise. Correct provenance, static/reduced-motion support, preserve other tasks and Formazin.

## Decisions
New branch from current production main in existing isolated blog worktree. Default static HTML graphic with optional short animation. One illustration in this section; remove redundant data diagram and obsolete Higgsfield wording. Source task 01a07580-82b1-7bb2-adfa-839f306d1118 reviews screenshot before merge.

## Failed approaches
The generated image with a hand, folder and monitor did not explain selection or access boundaries and was rejected.

## Next
Desktop screenshot reviewed by coordinating task: ready, no corrections. Production build and mobile/animation checks passed. Push PR, wait checks, merge authorized correction, verify public graphic and preserved mosaic.
