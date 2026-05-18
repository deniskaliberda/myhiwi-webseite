"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { MyHiwiMark } from "@/components/myhiwi/brand/MyHiwiMark";
import { BtnPrimary } from "@/components/myhiwi/cta/BtnPrimary";
import { Container } from "@/components/myhiwi/layout/Container";
import { cn } from "@/lib/utils";

export type HeaderNavItem = {
  label: string;
  href: string;
};

export type HeaderNavGroup = {
  /** Mono-Eyebrow oben im Mobile-Drawer, z. B. „Leistungen". */
  label: string;
  items: HeaderNavItem[];
};

type HeaderProps = {
  /** Pill-Nav auf Desktop. */
  navItems?: HeaderNavItem[];
  /** Mobile-Drawer-Gruppen. */
  drawerGroups?: HeaderNavGroup[];
  /** Top-Strip rechts: Status-Zeile, z. B. „verfügbar · Ahrensfelde + Ammersee". */
  status?: string;
  /** Top-Strip links: Mono-Caption. */
  caption?: string;
  /** Primary-CTA rechts. */
  cta?: {
    label: string;
    href: string;
  };
};

const DEFAULT_NAV: HeaderNavItem[] = [
  { label: "System", href: "/#system" },
  { label: "Cases", href: "/case-studies" },
  { label: "Pakete", href: "/#pakete" },
  { label: "Über MyHiwi", href: "/ueber-mich" },
];

const DEFAULT_DRAWER: HeaderNavGroup[] = [
  {
    label: "System",
    items: [
      { label: "Sichtbarkeit", href: "/#system" },
      { label: "Nachfrage", href: "/#system" },
      { label: "Anfrage & Buchung", href: "/#system" },
      { label: "Zahlung & Verbindlichkeit", href: "/#system" },
      { label: "AI & Automation", href: "/#system" },
    ],
  },
  {
    label: "Cases",
    items: [
      { label: "Alle Cases", href: "/case-studies" },
      { label: "Sonnenhof Herrsching", href: "/case-studies/sonnenhof-herrsching" },
    ],
  },
  {
    label: "MyHiwi",
    items: [
      { label: "Über MyHiwi", href: "/ueber-mich" },
      { label: "Pakete", href: "/#pakete" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
];

const DEFAULT_CTA = {
  label: "Kostenlosen Digital-Check anfragen",
  href: "/kontakt",
};

/**
 * MyHiwi Redesign 2026 — Header
 * components.md §1: Desktop 2-zeilig (Mono-Strip + Pill-Nav), Mobile 1-zeilig +
 * Burger-Drawer. Footer-Zeile im Drawer mit Status + Kontakt.
 *
 * Diese Komponente ersetzt NICHT die alte `Navigation.tsx` — sie wird gezielt
 * in neuen Marketing-Layouts (z. B. `app/(marketing)/layout.tsx`) eingebunden.
 */
export function Header({
  navItems = DEFAULT_NAV,
  drawerGroups = DEFAULT_DRAWER,
  status = "verfügbar · Ahrensfelde + Ammersee",
  caption = "MyHiwi · Digitale Wachstumssysteme",
  cta = DEFAULT_CTA,
}: HeaderProps) {
  const [open, setOpen] = useState(false);

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
        <div className="flex items-center justify-between gap-mh-4 py-mh-4">
          <MyHiwiMark size={28} />

          <nav
            aria-label="Hauptnavigation"
            className="hidden lg:flex items-center gap-mh-2 rounded-mh-pill border border-mh-divider px-mh-2 py-1"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="mh-body-small rounded-mh-pill px-mh-4 py-mh-2 font-semibold text-mh-text-primary transition-colors duration-mh-fast ease-mh-default hover:bg-mh-accent-soft hover:text-mh-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-mh-3">
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
              className="inline-flex h-10 w-10 items-center justify-center rounded-mh-sm border border-mh-divider text-mh-text-primary transition-colors duration-mh-fast ease-mh-default hover:border-mh-accent hover:text-mh-accent lg:hidden"
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

      {/* Mobile drawer */}
      <div
        id="mh-mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Hauptmenü"
        hidden={!open}
        className={cn(
          "fixed inset-x-0 bottom-0 top-[var(--mh-header-h,128px)] z-50",
          "bg-mh-paper text-mh-text-primary",
          "lg:hidden",
        )}
      >
        <div className="flex h-full flex-col">
          <Container className="flex-1 overflow-y-auto py-mh-6">
            <div className="flex flex-col gap-mh-7">
              {drawerGroups.map((group) => (
                <div key={group.label} className="flex flex-col gap-mh-3">
                  <span className="mh-label-mono text-mh-text-secondary">
                    {group.label}
                  </span>
                  <ul className="flex flex-col">
                    {group.items.map((item) => (
                      <li
                        key={item.href}
                        className="border-t border-mh-divider first:border-t-0"
                      >
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="block py-mh-4 mh-display-5"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Container>
          <div className="border-t border-mh-divider bg-mh-subtle">
            <Container>
              <div className="flex items-center justify-between gap-mh-4 py-mh-4 mh-label-mono text-mh-text-secondary">
                <span className="inline-flex items-center gap-mh-2">
                  <span
                    aria-hidden="true"
                    className="inline-block h-1.5 w-1.5 rounded-mh-pill bg-mh-success"
                  />
                  {status}
                </span>
                <a
                  href="mailto:denis@myhiwi.de"
                  className="text-mh-text-primary"
                >
                  denis@myhiwi.de
                </a>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
