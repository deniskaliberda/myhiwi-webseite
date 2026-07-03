import { NextRequest, NextResponse } from "next/server";
import { deviceClass, logWebEvent, type WebEventKind } from "@/lib/webEvents";

/**
 * First-party click-event endpoint for /fahrschule
 * (call_click / whatsapp_click via navigator.sendBeacon).
 *
 * Accepts no identifiers: the handler whitelists every field it stores
 * and drops everything else. No cookies are read, no IP is stored.
 * Pageviews are NOT accepted here — they are counted exclusively
 * server-side in the /fs/[rep] redirect handler.
 */

const ALLOWED_KINDS: WebEventKind[] = ["call_click", "whatsapp_click"];

const str = (v: unknown, max = 80): string | null =>
  typeof v === "string" && v.length > 0 ? v.slice(0, max) : null;

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return new NextResponse(null, { status: 400 });
  }
  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return new NextResponse(null, { status: 400 });
  }

  const kind = body.event as WebEventKind;
  if (!ALLOWED_KINDS.includes(kind)) {
    return new NextResponse(null, { status: 400 });
  }

  const path = str(body.path, 120) ?? "/fahrschule";
  if (!path.startsWith("/fahrschule") && !path.startsWith("/fs/")) {
    return new NextResponse(null, { status: 400 });
  }

  await logWebEvent({
    event_kind: kind,
    path,
    rep: str(body.rep, 24),
    charge: str(body.charge, 24),
    utm_source: str(body.utm_source),
    utm_medium: str(body.utm_medium),
    utm_campaign: str(body.utm_campaign),
    utm_content: str(body.utm_content),
    utm_term: str(body.utm_term),
    device: deviceClass(request.headers.get("user-agent")),
  });

  return new NextResponse(null, { status: 204 });
}
