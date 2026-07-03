/**
 * Server-side web event log for the /fahrschule funnel.
 *
 * Privacy model (EDPB 2/2023-aligned): events are written exclusively
 * server-side, carry no client identifiers, no cookies, no IP, no
 * fingerprint. Payload is the event kind plus campaign context
 * (rep/charge/utm) and a coarse device class derived from the UA.
 *
 * Storage: `web_events` table in the shared MyHiwi Supabase project
 * (see myhiwi-sales-crm supabase/migrations/0029_web_events.sql).
 * Writes use the service-role key via PostgREST; the table has RLS
 * enabled with no public policies. When the env vars are missing
 * (e.g. local dev), events fall back to console logging so the
 * funnel never breaks on tracking.
 */

export type WebEventKind =
  | "pageview"
  | "call_click"
  | "whatsapp_click";

export type WebEvent = {
  event_kind: WebEventKind;
  path: string;
  rep?: string | null;
  charge?: string | null;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_content?: string | null;
  utm_term?: string | null;
  device?: "mobile" | "desktop" | null;
};

export function deviceClass(userAgent: string | null): "mobile" | "desktop" {
  if (!userAgent) return "desktop";
  return /Mobi|Android|iPhone|iPad/i.test(userAgent) ? "mobile" : "desktop";
}

export async function logWebEvent(event: WebEvent): Promise<void> {
  const url = process.env.WEB_EVENTS_SUPABASE_URL;
  const key = process.env.WEB_EVENTS_SUPABASE_SERVICE_KEY;

  if (!url || !key) {
    console.log("[web_events:fallback]", JSON.stringify(event));
    return;
  }

  try {
    const res = await fetch(`${url}/rest/v1/web_events`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(event),
      // Tracking must never block or break the funnel.
      signal: AbortSignal.timeout(2500),
    });
    if (!res.ok) {
      console.error("[web_events] insert failed", res.status, await res.text());
    }
  } catch (err) {
    console.error("[web_events] insert error", err);
  }
}
