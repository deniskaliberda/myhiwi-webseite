import { createHash } from "node:crypto";

/**
 * Server-side Meta Conversions API (CAPI) `Lead` call.
 *
 * This is the part Vitalis does NOT have — it is the reliable backbone of the
 * "optimise on real enquiries" setup: the lead arrives server-to-server, so it
 * survives ad-blockers and iOS tracking limits where the browser pixel fails.
 *
 * Only call this when the user accepted ad tracking (adConsent === true). The
 * shared `eventId` deduplicates this against the browser pixel `Lead`.
 */

const GRAPH_VERSION = "v21.0";

const sha256 = (v: string) =>
  createHash("sha256").update(v.trim().toLowerCase()).digest("hex");

// DE phone normalisation: strip non-digits, replace a leading 0 with country code 49.
const normPhone = (p: string) => sha256(p.replace(/[^\d]/g, "").replace(/^0/, "49"));

export type MetaLeadCapiInput = {
  eventId: string;
  email?: string;
  phone?: string;
  name?: string;
  eventSourceUrl: string;
  clientIp?: string;
  userAgent?: string;
  fbp?: string;
  fbc?: string;
  /** Internal bid signal in EUR — never shown to customers. */
  value?: number;
};

export async function sendMetaLeadCapi(i: MetaLeadCapiInput) {
  const PIXEL = process.env.META_PIXEL_ID?.trim();
  const TOKEN = process.env.META_CAPI_ACCESS_TOKEN?.trim();
  const TEST_CODE = process.env.META_CAPI_TEST_CODE?.trim();

  if (!PIXEL || !TOKEN || !i.eventId) {
    return;
  }

  const user_data: Record<string, unknown> = {};
  if (i.clientIp) user_data.client_ip_address = i.clientIp;
  if (i.userAgent) user_data.client_user_agent = i.userAgent;
  if (i.email) user_data.em = [sha256(i.email)];
  if (i.phone) user_data.ph = [normPhone(i.phone)];
  if (i.name) user_data.fn = [sha256(i.name.split(" ")[0])];
  if (i.fbp) user_data.fbp = i.fbp; // NOT hashed
  if (i.fbc) user_data.fbc = i.fbc; // NOT hashed

  const payload: Record<string, unknown> = {
    data: [
      {
        event_name: "Lead",
        event_time: Math.floor(Date.now() / 1000),
        event_id: i.eventId, // == browser eventID → dedup
        action_source: "website",
        event_source_url: i.eventSourceUrl,
        user_data,
        custom_data: {
          content_name: "Direktbuchungs-Check angefragt",
          content_category: "fewo",
          value: i.value ?? 80,
          currency: "EUR",
        },
      },
    ],
  };

  // Only present while verifying in the Meta Test Events tool — remove from
  // Vercel env afterwards, otherwise real events are counted as tests.
  if (TEST_CODE) {
    payload.test_event_code = TEST_CODE;
  }

  const res = await fetch(
    `https://graph.facebook.com/${GRAPH_VERSION}/${PIXEL}/events?access_token=${TOKEN}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      // Cap the call so a slow/hanging Meta API never blocks the form response.
      signal: AbortSignal.timeout(6000),
    },
  );

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Meta CAPI ${res.status}: ${detail.slice(0, 500)}`);
  }
}
