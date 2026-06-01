"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type ConsentValue = "granted" | "denied";

const STORAGE_KEY = "mh-consent-v1";

type ConsentState = {
  /** null = no decision yet (banner shown). */
  decision: ConsentValue | null;
  setDecision: (value: ConsentValue) => void;
};

const ConsentContext = createContext<ConsentState>({
  decision: null,
  setDecision: () => {},
});

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function applyGtagConsent(value: ConsentValue) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }
  window.gtag("consent", "update", {
    ad_storage: value,
    analytics_storage: value,
    ad_user_data: value,
    ad_personalization: value,
  });
}

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [decision, setDecisionState] = useState<ConsentValue | null>(null);

  // Restore a previous choice on load.
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "granted" || stored === "denied") {
        setDecisionState(stored);
      }
    } catch {
      // ignore storage access errors
    }
  }, []);

  // Propagate any decision (restored or fresh) to Google Consent Mode v2.
  useEffect(() => {
    if (decision) {
      applyGtagConsent(decision);
    }
  }, [decision]);

  const setDecision = useCallback((value: ConsentValue) => {
    setDecisionState(value);
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore storage access errors
    }
  }, []);

  return (
    <ConsentContext.Provider value={{ decision, setDecision }}>
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  return useContext(ConsentContext);
}
