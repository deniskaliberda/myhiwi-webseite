# Task

## Objective
Build and verify MyHiwi's first citation-hub pilot: 20–30 sourced statistics on digitalisation and AI in German small businesses, readable charts, source data download, methodology, internal discovery and measurement plan.

## Constraints
Separate worktree from origin/main; preserve other tasks. Existing MyHiwi design and contact/consent behaviour. Public primary sources only; no fabricated search volumes, original-study claims, or forecast links/leads. Distinguish data periods, populations and publication dates. No outreach or paid purchases.

## Decisions
- Stable route: /wissen/digitalisierung-ki-statistiken. Focus on understanding incompatible study populations, especially microbusinesses.
- Static server-rendered content and shared JSON for page, downloads and charts. Research checked 2026-09-12.
- Existing canonical DESIGN.md and completed design handover govern the extension; document statistics components before building.

## accepted_commit
904dd8f

## Failed approaches
X direct fetch and web-tool Destatis fetch blocked; public mirror exposed original article, direct HTTP fetched Destatis successfully. Do not claim that search-result snippets alone verified values.

## Next
Implementation and local checks complete. Publish via PR, verify production URL/downloads/sitemap, then record deployment and close task-owned browser/server.

## Evidence
Build + TypeScript/lint pass; DESIGN.md lint clean; 3 responsive widths, no-JS rendering, all records and actual downloads verified. See docs/research/2026-09-12-citation-hub-pilot.md and adjacent JSON evidence.
