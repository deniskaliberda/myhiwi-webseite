"use client";

import { usePathname } from "next/navigation";
import { Header as MyHiwiHeader } from "@/components/myhiwi/layout/Header";
import { Footer as MyHiwiFooter } from "@/components/myhiwi/layout/Footer";

/**
 * MyHiwi Mobile-Revamp 2026 — SiteShell
 * Header + Footer lesen ihre Navigation jetzt zentral aus `lib/navigation.ts`.
 * Proposal-Seiten (`/p/*`) rendern ohne Shell.
 */
export default function SiteShell({
  children,
}: {
  children: React.ReactNode;
}) {
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
      <MyHiwiHeader />
      <main>{children}</main>
      <MyHiwiFooter />
    </>
  );
}
