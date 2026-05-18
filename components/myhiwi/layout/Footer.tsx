import Link from "next/link";
import { MyHiwiMark } from "@/components/myhiwi/brand/MyHiwiMark";
import { Container } from "@/components/myhiwi/layout/Container";

export type FooterColumn = {
  label: string;
  items: { label: string; href: string }[];
};

type FooterProps = {
  /** Tagline unter dem Brand-Block. */
  tagline?: string;
  /** Standort-Caption unter der Tagline. */
  location?: string;
  /** 3 Link-Spalten rechts. */
  columns?: FooterColumn[];
  /** Footer-Strip-Links unten. */
  legalLinks?: { label: string; href: string }[];
  /** Copyright-Jahr. Default: aktuelles Jahr. */
  copyrightYear?: number;
};

const DEFAULT_COLUMNS: FooterColumn[] = [
  {
    label: "System",
    items: [
      { label: "Sichtbarkeit", href: "/#system" },
      { label: "Nachfrage", href: "/#system" },
      { label: "Anfrage & Buchung", href: "/#system" },
      { label: "Zahlung", href: "/#system" },
      { label: "AI & Automation", href: "/#system" },
    ],
  },
  {
    label: "Cases",
    items: [
      { label: "Alle Case Studies", href: "/case-studies" },
      { label: "Sonnenhof Herrsching", href: "/case-studies/sonnenhof-herrsching" },
      { label: "Mr. Sherman Tanzstudio", href: "/case-studies/mr-sherman" },
      { label: "Formazin", href: "/case-studies/formazin" },
    ],
  },
  {
    label: "MyHiwi",
    items: [
      { label: "Über MyHiwi", href: "/ueber-mich" },
      { label: "Blog", href: "/blog" },
      { label: "Festpreis", href: "/festpreis" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
];

const DEFAULT_LEGAL: { label: string; href: string }[] = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

/**
 * MyHiwi Redesign 2026 — Footer
 * components.md §1: 4-Spalten-Grid Desktop (1.4fr / 1fr / 1fr / 1fr),
 * Brand-Block + 3 Link-Spalten. Mono-Footer-Strip mit Impressum +
 * Datenschutz + Copyright. ink-Hintergrund. Stapelt 1-spaltig auf Mobile.
 *
 * Ersetzt NICHT die alte `components/Footer.tsx` — wird gezielt in neuen
 * Marketing-Layouts eingebunden.
 */
export function Footer({
  tagline = "Digitale Wachstumssysteme für lokale Unternehmen.",
  location = "Ahrensfelde bei Berlin · Ammersee, Bayern",
  columns = DEFAULT_COLUMNS,
  legalLinks = DEFAULT_LEGAL,
  copyrightYear = new Date().getFullYear(),
}: FooterProps) {
  return (
    <footer className="bg-mh-ink-950 text-mh-text-on-dark">
      <Container>
        <div className="grid gap-mh-7 py-mh-9 md:py-mh-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-mh-8">
          {/* Brand block */}
          <div className="flex flex-col gap-mh-4">
            <MyHiwiMark variant="mono-on-dark" size={34} href="/" />
            <p className="mh-body-medium text-mh-text-on-dark/85 max-w-mh-text">
              {tagline}
            </p>
            <span className="mh-label-mono text-mh-text-on-dark/60">
              {location}
            </span>
            <a
              href="mailto:denis@myhiwi.de"
              className="mh-body-small font-semibold text-mh-text-on-dark border-b border-mh-glow/60 self-start pb-1 transition-colors duration-mh-fast ease-mh-default hover:border-mh-glow"
            >
              denis@myhiwi.de
            </a>
          </div>

          {/* Link columns */}
          {columns.map((column) => (
            <div key={column.label} className="flex flex-col gap-mh-4">
              <span className="mh-label-mono text-mh-text-on-dark/60">
                {column.label}
              </span>
              <ul className="flex flex-col gap-mh-3">
                {column.items.map((item) => (
                  <li key={item.href}>
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

        {/* Mono footer strip */}
        <div className="border-t border-mh-text-on-dark/10">
          <div className="flex flex-col gap-mh-3 py-mh-5 mh-label-mono text-mh-text-on-dark/60 md:flex-row md:items-center md:justify-between">
            <span>
              © {copyrightYear} Kaliberda Digital Intelligence UG · MyHiwi
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
