"use client";

import { Phone, MessageCircle } from "lucide-react";

/**
 * Anruf- + WhatsApp-CTAs der Fahrschul-Shell (DESIGN.md §3 der Shell).
 * Klicks werden per sendBeacon an /api/e gemeldet — ohne Cookies,
 * ohne Identifier; UTM-Kontext wird zum Klickzeitpunkt aus der URL
 * gelesen, nicht gespeichert.
 */

export const PHONE_E164 = "+4915114993066";
export const PHONE_DISPLAY = "01511 4993066";
const WA_TEXT = encodeURIComponent(
  "Hallo, ich komme von myhiwi.de/fahrschule — bitte melden Sie sich bei mir."
);
export const WA_HREF = `https://wa.me/4915114993066?text=${WA_TEXT}`;

function beacon(event: "call_click" | "whatsapp_click") {
  try {
    const params = new URLSearchParams(window.location.search);
    const payload = JSON.stringify({
      event,
      path: window.location.pathname,
      utm_source: params.get("utm_source"),
      utm_medium: params.get("utm_medium"),
      utm_campaign: params.get("utm_campaign"),
      utm_content: params.get("utm_content"),
      utm_term: params.get("utm_term"),
      charge: params.get("utm_content"),
    });
    if (navigator.sendBeacon) {
      navigator.sendBeacon("/api/e", new Blob([payload], { type: "application/json" }));
    }
  } catch {
    // Tracking darf den Anruf nie verhindern.
  }
}

export function FsCallButton({ fullWidth = false }: { fullWidth?: boolean }) {
  return (
    <a
      href={`tel:${PHONE_E164}`}
      onClick={() => beacon("call_click")}
      className={`fs-btn fs-btn-primary ${fullWidth ? "w-full md:w-auto" : ""}`}
    >
      <Phone size={22} strokeWidth={1.8} aria-hidden />
      <span>Jetzt anrufen: {PHONE_DISPLAY}</span>
    </a>
  );
}

export function FsWhatsAppButton({
  fullWidth = false,
  onDark = false,
}: {
  fullWidth?: boolean;
  onDark?: boolean;
}) {
  // Auf dunklem Grund (Schluss-CTA) reicht der Amber-Outline-Kontrast
  // nicht — dort weiß umranden (DESIGN.md-Shell §1: sehr hoher Kontrast).
  const outline = onDark
    ? "border-2 border-white/45 text-white hover:bg-white/10 hover:border-white"
    : "fs-btn-outline";
  return (
    <a
      href={WA_HREF}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => beacon("whatsapp_click")}
      className={`fs-btn ${outline} ${fullWidth ? "w-full md:w-auto" : ""}`}
    >
      <MessageCircle size={22} strokeWidth={1.8} aria-hidden />
      <span>Per WhatsApp schreiben</span>
    </a>
  );
}

export function FsCtaRow({
  microcopy,
  onDark = false,
}: {
  microcopy?: string;
  onDark?: boolean;
}) {
  return (
    <div>
      <div className="flex flex-col gap-[14px] md:flex-row md:items-center">
        <FsCallButton fullWidth />
        <FsWhatsAppButton fullWidth onDark={onDark} />
      </div>
      {microcopy ? (
        <p className="mt-mh-4 text-[15px] leading-relaxed text-mh-text-secondary">
          {microcopy}
        </p>
      ) : null}
    </div>
  );
}

export function FsHeaderPhone() {
  return (
    <a
      href={`tel:${PHONE_E164}`}
      onClick={() => beacon("call_click")}
      className="inline-flex min-h-[44px] items-center gap-2 rounded-mh-sm border border-mh-divider px-mh-4 py-2 font-mh-body text-[15px] font-semibold text-mh-text-primary transition-colors hover:border-[#B45309] hover:text-[#92400E]"
    >
      <Phone size={16} strokeWidth={1.8} aria-hidden />
      <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
      <span className="sm:hidden">Anrufen</span>
    </a>
  );
}
