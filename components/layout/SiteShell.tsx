"use client";

import { usePathname } from "next/navigation";
import { Header as MyHiwiHeader } from "@/components/myhiwi/layout/Header";
import { Footer as MyHiwiFooter } from "@/components/myhiwi/layout/Footer";

/**
 * MyHiwi Mobile-Revamp 2026 — SiteShell
 * Header + Footer lesen ihre Navigation jetzt zentral aus `lib/navigation.ts`.
 * Proposal-Seiten (`/p/*`) rendern ohne Shell.
 */
export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isProposal = pathname?.startsWith("/p/");
  // /fahrschule bringt eine eigene Shell mit (app/fahrschule/layout.tsx) —
  // Beweis-Schicht ohne Site-Navigation, siehe app/fahrschule/DESIGN.md.
  const isFahrschule = pathname?.startsWith("/fahrschule");

  if (isProposal || isFahrschule) {
    return <>{children}</>;
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:p-4 focus:text-mh-ink-950"
      >
        Zum Inhalt
      </a>
      <MyHiwiHeader />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <MyHiwiFooter />
    </>
  );
}
