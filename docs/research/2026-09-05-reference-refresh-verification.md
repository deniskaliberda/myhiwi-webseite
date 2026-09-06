# Reference refresh verification

Verified 5 September 2026 against the final reference-refresh application tree, following the initial relaunch in `e0768a4`.

## Delivered

- Five reference pages share curated content, metric definitions, measurement periods, source labels, metadata and update dates. Antje and Mannis are new routes; Sonnenhof, Formazin and Sherman preserve their existing URLs. Villa Gloria remains available.
- The homepage, project overview, three services, relevant industry pages and contact entry use the same project data. Contact context accepts only known project identifiers.
- Twenty-three optimized WebP assets show actual websites and dated prior designs. Sherman's four role views explicitly show July development fixtures and test data.
- Fifteen legacy raw reports/exports were retained locally outside public serving paths. Private research and capture files are excluded from this public repository; `.vercelignore` also excludes documentation, local evidence and environment files from deployment uploads.

## Validation

| Check | Result |
|---|---|
| Local `npm run build` | Passed, including lint and TypeScript |
| Vercel build | Passed; preview READY |
| `PLAYWRIGHT_PORT=3107 npm run test:e2e` | 58 passed, no failures |
| Local sitemap crawl | 39/39 routes HTTP 200 |
| No-JavaScript reference navigation | Five cases, method links, canonical/schema and contact context passed |
| Narrow layouts | Homepage, overview and five cases: no horizontal overflow at 360px; all main images decoded |
| Contact submission | Mocked success/error/retry/consent and valid/unknown project context passed; no real test email sent |
| Existing behavior | AI training, service SEO, mobile font/image and contact API regression checks passed |
| Visual inspection | Desktop homepage and case presentation; mobile homepage; actual comparison and demo assets |
| Independent review | Overview evidence and Sherman role-view findings resolved; scoped re-review found no new critical issue |

Two existing Next.js `no-img-element` warnings and an outdated Browserslist database warning remain non-blocking. This is functional and visual verification, not a claim of measured postlaunch ranking or conversion improvement.

## Protected preview

[Preview](https://myhiwi-webseite-hi50jvpwu-denis24.vercel.app) · [Draft PR #4](https://github.com/deniskaliberda/myhiwi-webseite/pull/4)

Authenticated read-only checks with `vercel curl` returned HTTP 200 and expected content for the homepage, overview, all five reference pages, AI service, project-aware contact page and sitemap. All five case canonicals match their production URLs. The sitemap contains 39 entries. A Sherman role WebP also returned HTTP 200. The removed public query export and a private research URL returned HTTP 404.

Existing Vercel login protection is retained. The production domain has not been promoted. MyHiwi's own Search Console access and postlaunch measurement remain separate follow-up work; customer reference data does not establish MyHiwi's own search performance. Actual email delivery was not exercised.

## Production release — 6 September 2026

The user explicitly approved publication. PR #4 is merged as `00ad7dc3ba319e43e7be6034fd336d53a69905cd`. Vercel's production build completed successfully at `myhiwi-webseite-cymjn1he7-denis24.vercel.app`, with `myhiwi.de` and `www.myhiwi.de` attached. This supersedes the preview-only release status above.

Direct unauthenticated production checks passed: all 39 sitemap pages return HTTP 200, expected canonical URLs and no `noindex`; all 23 curated WebP images return HTTP 200 with the correct content type. The homepage shows the current 607-inquiry evidence, and the contact entry displays the selected project. Robots and sitemap are publicly available. The removed raw query export returns HTTP 404. The live homepage was also verified in the browser. No real contact message was submitted.
