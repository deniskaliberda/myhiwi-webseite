"use client";

import { useEffect, useRef } from "react";
import { useConsent } from "@/components/analytics/ConsentProvider";
import { getMetaPixelId } from "@/lib/metaPixel";

// IMPORTANT: read the env var via a LITERAL `process.env.NEXT_PUBLIC_…` access so
// Next.js inlines it into the client bundle. Accessing it through a variable/param
// alias (e.g. the default `env` arg of getMetaPixelId) is NOT inlined on the client
// and would leave the id empty in the browser.
const pixelId = getMetaPixelId({
  NEXT_PUBLIC_META_PIXEL_ID: process.env.NEXT_PUBLIC_META_PIXEL_ID,
});

/**
 * Loads the Meta Pixel only after tracking consent was granted (TTDSG/DSGVO).
 * Injects the fbevents bootstrap via useEffect so it fires reliably whether
 * consent is granted on first load (restored) or mid-session via the banner —
 * a conditionally-mounted next/script does not always inject on late mount.
 */
export function MetaPixel() {
  const { decision } = useConsent();
  const initialised = useRef(false);

  useEffect(() => {
    if (!pixelId || decision !== "granted" || initialised.current) {
      return;
    }
    initialised.current = true;

    const script = document.createElement("script");
    script.id = "meta-pixel";
    script.textContent = `
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${pixelId}');fbq('track','PageView');
    `;
    document.head.appendChild(script);
  }, [decision]);

  return null;
}
