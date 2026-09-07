"use client";

import { useCallback, useEffect } from "react";
import { Analytics, type BeforeSendEvent } from "@vercel/analytics/next";
import { useConsent } from "@/components/analytics/ConsentProvider";
import { analyticsAllowed, filterAnalyticsEvent, trackContactAction } from "@/lib/websiteAnalytics";

export function WebsiteAnalytics() {
  const { decision, analyticsEnabled } = useConsent();
  const beforeSend = useCallback(
    (event: BeforeSendEvent) => filterAnalyticsEvent(event, analyticsEnabled),
    [analyticsEnabled],
  );

  useEffect(() => {
    if (decision !== "granted" || !analyticsAllowed(analyticsEnabled)) return;
    const onClick = (event: MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest("a[href]") : null;
      const href = link?.getAttribute("href");
      if (href?.startsWith("tel:")) trackContactAction(analyticsEnabled, { channel: "phone" });
      if (href?.startsWith("mailto:")) trackContactAction(analyticsEnabled, { channel: "email" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [decision, analyticsEnabled]);

  if (decision !== "granted" || !analyticsAllowed(analyticsEnabled)) return null;
  return <Analytics mode="production" beforeSend={beforeSend} />;
}
