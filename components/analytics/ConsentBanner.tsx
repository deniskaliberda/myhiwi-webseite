"use client";

import { useConsent } from "@/components/analytics/ConsentProvider";

// Only show the banner once at least one ad/analytics tool is actually
// configured. Until Denis sets a tracking ID in Vercel, the site behaves
// exactly as before — no banner for tools that do not load.
const TRACKING_ENABLED = !!(
  process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim() ||
  process.env.NEXT_PUBLIC_GA4_ID?.trim() ||
  process.env.NEXT_PUBLIC_GOOGLE_ADS_ID?.trim()
);

/**
 * Minimal TTDSG/DSGVO cookie banner. Shown only while no decision exists.
 * "Akzeptieren" enables Meta Pixel + CAPI and Google Ads/GA4 (Consent Mode v2
 * update → granted); "Nur notwendige" keeps everything off (default = denied).
 */
export function ConsentBanner() {
  const { decision, setDecision } = useConsent();

  if (!TRACKING_ENABLED || decision !== null) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Hinweis zu Cookies und Reichweitenmessung"
      className="fixed inset-x-0 bottom-0 z-[9999] border-t border-mh-text-on-dark/10 bg-mh-ink-950/97 px-mh-4 py-mh-4 text-mh-text-on-dark shadow-[0_-8px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-[1080px] flex-col gap-mh-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[64ch] mh-body-small text-mh-text-on-dark/85">
          Wir setzen Cookies und Tools von Meta (Pixel &amp; Conversions API) und
          Google (Ads, Analytics) ein, um die Nutzung zu messen und den
          Werbeerfolg auszuwerten. Diese laden erst nach Ihrer Zustimmung; dabei
          werden Daten auch in die USA übermittelt. Mehr in der{" "}
          <a
            href="/datenschutz"
            className="font-semibold text-mh-glow underline underline-offset-2 hover:text-mh-text-on-dark"
          >
            Datenschutzerklärung
          </a>
          . Widerruf jederzeit möglich.
        </p>
        <div className="flex shrink-0 gap-mh-3">
          <button
            type="button"
            onClick={() => setDecision("denied")}
            className="min-h-[44px] rounded-mh-pill border border-mh-text-on-dark/35 bg-transparent px-mh-5 font-mh-body text-[15px] font-semibold text-mh-text-on-dark transition-colors hover:bg-mh-text-on-dark/10"
          >
            Nur notwendige
          </button>
          <button
            type="button"
            onClick={() => setDecision("granted")}
            className="min-h-[44px] rounded-mh-pill border-none bg-mh-glow px-mh-6 font-mh-body text-[15px] font-bold text-mh-ink-950 transition-colors hover:bg-mh-text-on-dark"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
