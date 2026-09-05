# Relaunch verification — 2026-09-05

Implemented approved direction: local businesses, websites, Google and AI search visibility. Homepage and three dedicated service pages, shared navigation, metadata/schema/social image, contact UX and delivery acceptance, old service redirects. Existing AI training and vertical routes retained. Original checkout unchanged; copied performance work preserved on codex/google-ki-relaunch based on origin/main 3f22346.

- `npm run build`: passed (Next.js 14.2.35, static homepage/services).
- `npm run lint`: no errors; two pre-existing img warnings in MyHiwiMark and ProofCard, plus outdated browserslist dataset notice during build.
- `PLAYWRIGHT_PORT=3107 npx playwright test`: 50 passed, 25.1 seconds, production server. Includes existing AI training, mobile fonts/images, server rendering/canonicals/JSON-LD, redirects, social image, contact provider rejection/consent/failure/retry/success.
- Sitemap: all 37 URLs HTTP 200 locally, including 3 new services. Original captured sitemap contained 34 URLs (initial written audit count corrected).
- Desktop 1440px and mobile 390px visually inspected. Browser page errors: none. Homepage/service mobile layouts tested for overflow, fonts do not download on mobile homepage/services.
- Mail traffic mocked in tests. Real provider delivery not tested. A Resend error or missing acceptance id returns 502 and does not fire Meta lead reporting.
- Independent code review and scoped follow-up: no important issues. Minor known compatibility note: old #pakete homepage anchor removed; no internal references. No ranking/traffic improvement claimed from code changes alone.
- Vercel preview: https://myhiwi-webseite-jvabolm3g-denis24.vercel.app (deployment dpl_J3ZUSgiZ4wbitZR9tUquUntzZAb6, READY). Existing deployment protection retained.
- Local review: http://127.0.0.1:3107/ while this worktree's server is running.
- Search Console and Google Business Profile remain access/setup follow-ups. No production domain promotion performed.
