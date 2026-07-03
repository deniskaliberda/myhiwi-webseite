import { NextRequest, NextResponse } from "next/server";
import { deviceClass, logWebEvent } from "@/lib/webEvents";

/**
 * Klartext-Kurz-URLs für Print (Leave-Behind, Konzept §3):
 * myhiwi.de/fs/anja · /fs/malte · /fs/denis → /fahrschule mit UTM.
 *
 * Diese URLs stehen gedruckt auf Papier und ändern sich NIE.
 * Das Redirect-Ziel darf sich weiterentwickeln (z. B. Phase 1:
 * personalisierte Check-Seiten) — die gedruckte URL bleibt stabil.
 *
 * Der Pageview wird hier server-seitig geloggt (einziger Ort, an dem
 * pageviews gezählt werden — kein Client-Beacon auf der LP selbst).
 * Optionaler Query-Parameter `c` = Druck-Charge (QR-Charge pro
 * Rep/Gebiet, Mapping-Tabelle `qr_charges` in Supabase).
 */

const REP_GEBIET: Record<string, string> = {
  anja: "anja-prenzlberg",
  malte: "malte-adlershof",
  denis: "denis-berlin-ost",
};

export const dynamic = "force-dynamic";

export async function GET(
  request: NextRequest,
  { params }: { params: { rep: string } }
) {
  const rep = params.rep.toLowerCase();
  const gebiet = REP_GEBIET[rep];

  if (!gebiet) {
    return NextResponse.redirect(new URL("/fahrschule", request.url), 302);
  }

  const charge = request.nextUrl.searchParams.get("c");

  const target = new URL("/fahrschule", request.url);
  target.searchParams.set("utm_source", "leavebehind");
  target.searchParams.set("utm_medium", "print");
  target.searchParams.set("utm_campaign", "fahrschule-tuer");
  if (charge) target.searchParams.set("utm_content", charge);
  target.searchParams.set("utm_term", gebiet);

  // Fire-and-forget: Redirect nie am Tracking scheitern lassen.
  await logWebEvent({
    event_kind: "pageview",
    path: `/fs/${rep}`,
    rep,
    charge: charge ? charge.slice(0, 24) : null,
    utm_source: "leavebehind",
    utm_medium: "print",
    utm_campaign: "fahrschule-tuer",
    utm_content: charge ? charge.slice(0, 24) : null,
    utm_term: gebiet,
    device: deviceClass(request.headers.get("user-agent")),
  });

  return NextResponse.redirect(target, 302);
}
