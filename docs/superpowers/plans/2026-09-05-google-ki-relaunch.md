# MyHiwi Google- und KI-Sichtbarkeit: Umsetzung

> **For agentic workers:** Use superpowers:subagent-driven-development for independent service/contact tasks; root integrates homepage and verifies the full result.

**Goal:** A reviewable website relaunch positioning MyHiwi for local businesses seeking websites, Google and AI search visibility.
**Architecture:** Next.js server-rendered homepage and three explicit service routes; shared existing header/footer; contact form retains existing API contract. Scoped CSS modules for new editorial layouts.
**Tech Stack:** Next.js 14, React 18, TypeScript, Tailwind, CSS Modules, Playwright. No new runtime dependencies.
**Spec:** ../../research/2026-09-05-myhiwi-seo-audit.md, approved by user.

## Global Constraints
- Preserve every existing public URL and existing KI-Schulung/Fahrschule workflows.
- German Sie voice, blue #2563EB / ink #0F172A / white brand, existing fonts and actual project images.
- No invented rankings, testimonials, outcome metrics or client prices; distinguish inquiries from bookings.
- Google/AI eligibility never implies recommendation guarantee. Primary sources on AI page.
- Canonical URLs point to https://myhiwi.de. Unique titles/descriptions and crawlable service links.
- Only simulated email submission in tests. Consent behavior retained. Do not alter account access.
- Original checkout untouched; baseline is main plus copied performance changes.

## Tasks
- [x] 1. Build three complete service pages at /leistungen/webseiten, /leistungen/google-sichtbarkeit, /leistungen/ki-sichtbarkeit, with shared ServiceLanding component and scoped CSS. Each: one H1, local buyer-specific content, concrete deliverables/process, honest limits, appropriate case link, FAQs, cross-service links and /kontakt CTA; per-page Metadata and Service/Breadcrumb JSON-LD. Agent owns components/myhiwi/services, those three route files and tests/services-seo.spec.ts.
- [x] 2. Refine contact flow copy for Sichtbarkeitscheck; expose region as optional field folded into existing message contract; required/accessible inputs; preserve input on errors and show success only after server confirms actual delivery acceptance. Test validation, provider-rejected failure, client failure/retry and success using mocked network, never real email. Agent owns app/kontakt, app/api/contact and tests/contact*.
- [x] 3. Root builds homepage: clear service proposition, editorial hero with actual project preview, client logo strip, three service rows, evidenced Sonnenhof/project examples, founder, region, FAQ and final check CTA. Update shared navigation/footer/header, root metadata/JSON-LD/OG image, sitemap; clean duplicate nested title suffixes and unsupported Handwerk 90% statement. Preserve previous URLs and markers used externally where feasible.
- [x] 4. Integrate and review; npm run build, npm run lint, relevant Playwright tests including inherited mobile performance, all new sitemap routes and existing critical routes. Visually inspect desktop/mobile, test navigation and keyboard, capture previews; document any remaining unverified production delivery or GSC dependency.

## Acceptance
Production build passes; new routes return 200 and self-canonical; page content is visible without JS; menu/service/contact paths work at 390px and desktop; no horizontal overflow. Confirmation is not shown on failed delivery. Preview accessible in Codex, TASK.md updated with outcome and next step.

## Verification outcome
2026-09-05: production build passed; full Playwright suite 50/50; all 37 sitemap URLs HTTP 200 locally; independent review found no important issue. Vercel preview built successfully. Known minor: old #pakete anchor has no equivalent on new homepage; no internal references found. No full real-mail test, GSC or GBP changes.
