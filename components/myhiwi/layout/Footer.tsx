import Link from "next/link";
import { MyHiwiMark } from "@/components/myhiwi/brand/MyHiwiMark";
import { Container } from "@/components/myhiwi/layout/Container";
import {
  CONTACT_EMAIL,
  FOOTER_COLUMNS,
  LEGAL_LINKS,
  type NavGroup,
  type NavItem,
} from "@/lib/navigation";

export type FooterColumn = NavGroup;

type FooterProps = {
  /** Tagline unter dem Brand-Block. */
  tagline?: string;
  /** Standort-Caption — wandert in den Legal-Strip. */
  location?: string;
  /** Link-Spalten. */
  columns?: NavGroup[];
  /** Footer-Strip-Links unten. */
  legalLinks?: NavItem[];
  /** Copyright-Jahr. Default: aktuelles Jahr. */
  copyrightYear?: number;
};

/**
 * MyHiwi Mobile-Revamp 2026 — Footer
 * Akzent-Strip als Top-Border (DESIGN.md §2) trennt die Final-CTA-Sektion
 * sichtbar vom Footer — sonst verschmelzen zwei ink-950-Flächen mobil.
 * Link-Spalten auf Mobile als 2-Spalten-Grid (statt einer langen Liste).
 * Standort wandert in den Legal-Strip, kein Duplikat zur Drawer-Statuszeile.
 */
export function Footer({
  tagline = "Anfrage- & Buchungssysteme für lokale Betriebe.",
  location = "Ahrensfelde + Ammersee",
  columns = FOOTER_COLUMNS,
  legalLinks = LEGAL_LINKS,
  copyrightYear = new Date().getFullYear(),
}: FooterProps) {
  return (
    <footer className="bg-mh-ink-950 text-mh-text-on-dark">
      {/* Akzent-Strip — Signatur-Trenner zwischen Final-CTA und Footer. */}
      <div aria-hidden="true" className="mh-accent-strip h-[3px] w-full" />
      <Container>
        <div className="grid gap-mh-7 py-mh-section-lg-m md:py-mh-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-mh-8">
          {/* Brand block */}
          <div className="flex flex-col gap-mh-4">
            <MyHiwiMark variant="mono-on-dark" size={34} href="/" />
            <p className="mh-body-medium text-mh-text-on-dark/85 max-w-mh-text">
              {tagline}
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mh-body-small font-semibold text-mh-text-on-dark border-b border-mh-glow/60 self-start pb-1 transition-colors duration-mh-fast ease-mh-default hover:border-mh-glow"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          {/* Link columns — 2-Spalten-Grid auf Mobile, 3 Spalten ab lg. */}
          <div className="grid grid-cols-2 gap-mh-6 sm:gap-mh-7 lg:contents">
            {columns.map((column) => (
              <div key={column.label} className="flex flex-col gap-mh-4">
                <span className="mh-label-mono text-mh-glow/70">
                  {column.label}
                </span>
                <ul className="flex flex-col gap-mh-3">
                  {column.items.map((item) => (
                    <li key={`${column.label}-${item.label}-${item.href}`}>
                      <Link
                        href={item.href}
                        className="mh-body-small text-mh-text-on-dark/90 transition-colors duration-mh-fast ease-mh-default hover:text-mh-glow"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Mono footer strip */}
        <div className="border-t border-mh-text-on-dark/10">
          <div className="flex flex-col gap-mh-3 py-mh-5 mh-label-mono text-mh-text-on-dark/60 md:flex-row md:items-center md:justify-between">
            <span>
              © {copyrightYear} Kaliberda Digital Intelligence UG · MyHiwi · {location}
            </span>
            <ul className="flex flex-wrap gap-mh-5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-mh-fast ease-mh-default hover:text-mh-glow"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
