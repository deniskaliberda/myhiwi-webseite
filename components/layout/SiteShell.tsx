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

  if (isProposal) {
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
