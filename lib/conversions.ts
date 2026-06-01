import { trackMetaLead } from "@/lib/metaPixel";

/**
 * Client-side lead conversion events, fired once a form POST returns HTTP 200.
 *
 * All three share one id (`eventId`):
 *  - Meta `Lead`        → eventID    (dedup vs. server-side CAPI Lead)
 *  - GA4  `generate_lead` → transaction_id
 *  - Google Ads `conversion` → transaction_id (dedup on reload/back-button)
 *
 * Only call this when ad-tracking consent was granted. The lead itself is
 * delivered server-side via /api/contact regardless of consent — this only
 * handles ad-platform attribution.
 */

const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID?.trim() || "";
const LEAD_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL?.trim() || "";

const LEAD_VALUE = 80; // internal bid signal in EUR — never shown to customers
const CURRENCY = "EUR";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function fireLeadConversions(eventId: string) {
  if (typeof window === "undefined" || !eventId) {
    return;
  }

  // Meta Pixel browser Lead (dedup partner of the CAPI Lead)
  trackMetaLead(eventId, {
    content_name: "Direktbuchungs-Check angefragt",
    content_category: "fewo",
    value: LEAD_VALUE,
    currency: CURRENCY,
  });

  if (typeof window.gtag !== "function") {
    return;
  }

  // GA4 recommended event
  window.gtag("event", "generate_lead", {
    value: LEAD_VALUE,
    currency: CURRENCY,
    transaction_id: eventId,
  });

  // Google Ads primary conversion
  if (ADS_ID && LEAD_LABEL) {
    window.gtag("event", "conversion", {
      send_to: `${ADS_ID}/${LEAD_LABEL}`,
      value: LEAD_VALUE,
      currency: CURRENCY,
      transaction_id: eventId,
    });
  }
}
