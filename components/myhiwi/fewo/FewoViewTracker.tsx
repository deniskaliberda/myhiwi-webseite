"use client";

import { useEffect, useRef } from "react";
import { useConsent } from "@/components/analytics/ConsentProvider";

/**
 * Top-of-funnel signal for the FeWo landing page. Fires once after tracking
 * consent: Meta `ViewContent` (audience/signal, not an optimisation goal) and
 * GA4 `view_check_lp`. Renders nothing.
 */
export function FewoViewTracker() {
  const { decision } = useConsent();
  const fired = useRef(false);

  useEffect(() => {
    if (decision !== "granted" || fired.current) {
      return;
    }
    fired.current = true;

    window.fbq?.("track", "ViewContent", {
      content_name: "FeWo Direktbuchungs-Check",
      content_category: "fewo-direktbuchung",
    });
    window.gtag?.("event", "view_check_lp", {
      content_category: "fewo-direktbuchung",
    });
  }, [decision]);

  return null;
}
