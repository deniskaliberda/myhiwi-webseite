"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { MyHiwiMark } from "@/components/myhiwi/brand/MyHiwiMark";
import { BtnPrimary } from "@/components/myhiwi/cta/BtnPrimary";
import { Container } from "@/components/myhiwi/layout/Container";
import {
  CONTACT_EMAIL,
  DRAWER_GROUPS,
  NAV_PRIMARY,
  PRIMARY_CTA,
  STATUS_LINE,
  type NavGroup,
  type NavItem,
} from "@/lib/navigation";
import { cn } from "@/lib/utils";

export type HeaderNavItem = NavItem;
export type HeaderNavGroup = NavGroup;

type HeaderProps = {
  /** Pill-Nav auf Desktop. */
  navItems?: NavItem[];
  /** Mobile-Drawer-Gruppen. */
  drawerGroups?: NavGroup[];
  /** Top-Strip rechts: Status-Zeile. */
  status?: string;
  /** Top-Strip links: Mono-Caption. */
  caption?: string;
  /** Primary-CTA. `shortLabel` erscheint in der Mobile-Headerzeile. */
  cta?: {
    label: string;
    shortLabel?: string;
    href: string;
  };
};

/**
 * Scroll-Progress-Strip — die Akzent-Gradient-Signatur (DESIGN.md §2
 * "Akzent-Strip") als 2px-Lesefortschritt unter dem Sticky-Header.
 * Macht lange Mobile-Seiten mental navigierbar, ohne Platz zu kosten.
 */
function useScrollProgress() {
  const barRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`;
      }
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return barRef;
}

/**
 * MyHiwi Mobile-Revamp 2026 — Header
 * Desktop: Mono-Strip + Pill-Nav + voller CTA (unverändertes Ritual).
 * Mobile: Logo + kompakte CTA-Pill + Burger in EINER 44px-Zeile;
 * Drawer auf ink-950 als visueller Zwilling des Footers, mit
 * full-width Pill-CTA als festem Abschluss — der Conversion-Einstieg
 * ist damit mobil immer einen Tap entfernt.
 */
export function Header({
  navItems = NAV_PRIMARY,
  drawerGroups = DRAWER_GROUPS,
  status = STATUS_LINE,
  caption = "MyHiwi · Anfrage- & Buchungssysteme",
  cta = PRIMARY_CTA,
}: HeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const progressRef = useScrollProgress();

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Drawer schließt bei Routenwechsel (Link-Tap).
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname?.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-mh-divider bg-mh-paper/95 backdrop-blur supports-[backdrop-filter]:bg-mh-paper/80">
      {/* Top mono strip (Desktop only) */}
      <div className="hidden border-b border-mh-divider md:block">
        <Container>
          <div className="flex items-center justify-between gap-mh-4 py-mh-2 mh-label-mono text-mh-text-secondary">
            <span>{caption}</span>
            <span className="inline-flex items-center gap-mh-2">
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rounded-mh-pill bg-mh-success"
              />
              {status}
            </span>
          </div>
        </Container>
      </div>

      {/* Main bar */}
      <Container>
        <div className="flex items-center justify-between gap-mh-3 py-mh-3 md:py-mh-4">
          <MyHiwiMark size={26} className="md:hidden" />
          <MyHiwiMark size={28} className="hidden md:inline-flex" />

          <nav
            aria-label="Hauptnavigation"
            className="hidden lg:flex items-center gap-mh-2 rounded-mh-pill border border-mh-divider px-mh-2 py-1"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "mh-body-small rounded-mh-pill px-mh-4 py-mh-2 font-semibold transition-colors duration-mh-fast ease-mh-default hover:bg-mh-accent-soft hover:text-mh-accent",
                  isActive(item.href)
                    ? "bg-mh-accent-soft text-mh-accent"
                    : "text-mh-text-primary",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-mh-2 md:gap-mh-3">
            {/* Mobile: kompakte CTA-Pill — der Digital-Check ist immer sichtbar. */}
            <BtnPrimary
              href={cta.href}
              pill
              hideArrow
              className="md:hidden min-h-[44px] px-mh-4 py-[12px] text-[14px]"
            >
              {cta.shortLabel ?? cta.label}
            </BtnPrimary>
            {/* Desktop: voller CTA. */}
            <BtnPrimary
              href={cta.href}
              className="hidden md:inline-flex px-mh-5 py-mh-3 text-[14px]"
              hideArrow
            >
              {cta.label}
            </BtnPrimary>
            <button
              type="button"
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={open}
              aria-controls="mh-mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-mh-sm border border-mh-divider text-mh-text-primary transition-colors duration-mh-fast ease-mh-default hover:border-mh-accent hover:text-mh-accent lg:hidden"
            >
              {open ? (
                <X className="h-5 w-5" strokeWidth={1.8} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={1.8} />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Scroll-Progress — Akzent-Strip-Signatur, 2px, unaufdringlich. */}
      <span
        ref={progressRef}
        aria-hidden="true"
        className="mh-accent-strip absolute inset-x-0 bottom-[-1px] block h-[2px] origin-left"
        style={{ transform: "scaleX(0)" }}
      />

      {/* Mobile drawer — ink-950, visueller Zwilling des Footers. */}
      <div
        id="mh-mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Hauptmenü"
        hidden={!open}
        className={cn(
          "absolute inset-x-0 top-full z-50 h-[calc(100dvh-100%)] overflow-hidden",
          "bg-mh-ink-950 text-mh-text-on-dark",
          "lg:hidden",
        )}
      >
        <div className="flex h-full flex-col">
          <Container className="flex-1 overflow-y-auto py-mh-6">
            <nav aria-label="Mobile Navigation" className="flex flex-col gap-mh-6">
              {drawerGroups.map((group) => (
                <div key={group.label} className="flex flex-col gap-mh-3">
                  <span className="mh-label-mono text-mh-glow/80">
                    {group.label}
                  </span>
                  <ul className="flex flex-col">
                    {group.items.map((item) => {
                      const active = isActive(item.href);
                      return (
                        <li
                          key={`${group.label}-${item.label}-${item.href}`}
                          className="border-t border-mh-text-on-dark/10 first:border-t-0"
                        >
                          <Link
                            href={item.href}
                            onClick={() => setOpen(false)}
                            aria-current={active ? "page" : undefined}
                            className={cn(
                              "flex items-center justify-between gap-mh-3 py-mh-4 mh-display-5",
                              active
                                ? "text-mh-glow"
                                : "text-mh-text-on-dark",
                            )}
                          >
                            {item.label}
                            {active ? (
                              <span
                                aria-hidden="true"
                                className="inline-block h-1.5 w-1.5 shrink-0 rounded-mh-pill bg-mh-glow"
                              />
                            ) : (
                              <ArrowRight
                                className="h-4 w-4 shrink-0 text-mh-text-on-dark/40"
                                strokeWidth={1.6}
                                aria-hidden="true"
                              />
                            )}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </nav>
          </Container>

          {/* Fester Abschluss: CTA + Status — der Conversion-Anker des Drawers. */}
          <div className="border-t border-mh-text-on-dark/10 bg-mh-ink-800/60">
            <Container>
              <div className="flex flex-col gap-mh-4 py-mh-5">
                <BtnPrimary
                  href={cta.href}
                  pill
                  fullWidthOnMobile
                  className="bg-mh-text-on-dark text-mh-ink-950 hover:bg-mh-glow"
                  onClick={() => setOpen(false)}
                >
                  {cta.label}
                </BtnPrimary>
                <div className="flex items-center justify-between gap-mh-4 mh-label-mono text-mh-text-on-dark/60">
                  <span className="inline-flex items-center gap-mh-2">
                    <span
                      aria-hidden="true"
                      className="inline-block h-1.5 w-1.5 rounded-mh-pill bg-mh-success"
                    />
                    {status}
                  </span>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-mh-text-on-dark">
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
