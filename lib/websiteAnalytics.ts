import { track } from "@vercel/analytics";
import type { BeforeSendEvent } from "@vercel/analytics/next";
import { CONSENT_STORAGE_KEY } from "@/components/analytics/ConsentProvider";

/** Recheck persisted consent on every event, including after withdrawal. */
export function analyticsAllowed(production: boolean): boolean {
  if (!production || typeof window === "undefined") return false;
  try {
    return window.location.hostname === "myhiwi.de"
      && window.localStorage.getItem(CONSENT_STORAGE_KEY) === "granted"
      && window.localStorage.getItem("mh-analytics-off") !== "1"
      && new URLSearchParams(window.location.search).get("analytics") !== "off";
  } catch {
    return false;
  }
}

export function filterAnalyticsEvent(event: BeforeSendEvent, production: boolean): BeforeSendEvent | null {
  if (!analyticsAllowed(production)) return null;
  try {
    const url = new URL(event.url);
    if (url.hostname !== "myhiwi.de") return null;
    url.search = "";
    url.hash = "";
    return { ...event, url: url.toString() };
  } catch {
    return null;
  }
}

export function trackContactAction(
  production: boolean,
  action: { form: "kontakt" | "fewo" } | { channel: "phone" | "email" },
) {
  if (!analyticsAllowed(production)) return;
  try {
    // Only fixed categories: never names, addresses, messages or form values.
    if ("form" in action) track("contact_submitted", { form: action.form });
    else track("contact_link_clicked", { channel: action.channel });
  } catch {
    // A blocked measurement tool must never prevent a successful inquiry.
  }
}
