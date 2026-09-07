"use client";

import { useConsent } from "@/components/analytics/ConsentProvider";

export function ConsentSettings() {
  const { decision, setDecision } = useConsent();
  return (
    <div className="my-mh-4">
      <p role="status" className="mh-body-small">
        Optionale Messung: {decision === "granted" ? "zugestimmt" : "nicht zugestimmt"}.
      </p>
      <button
        type="button"
        className="mt-mh-2 min-h-[44px] rounded-mh-pill border border-mh-divider px-mh-5 py-mh-2 font-semibold text-mh-accent hover:bg-mh-subtle"
        onClick={() => {
          setDecision("denied");
          // Clear already loaded optional vendor scripts from this document.
          window.location.reload();
        }}
      >
        Einwilligung widerrufen
      </button>
      <button
        type="button"
        className="ml-mh-3 min-h-[44px] px-mh-3 py-mh-2 font-semibold text-mh-accent underline underline-offset-2"
        onClick={() => setDecision("granted")}
      >
        Optionaler Messung zustimmen
      </button>
    </div>
  );
}
