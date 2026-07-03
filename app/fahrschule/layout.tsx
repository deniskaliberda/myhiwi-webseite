import Link from "next/link";
import Image from "next/image";
import { FsHeaderPhone } from "./FsCta";

/**
 * Eigene Design-Shell für /fahrschule (app/fahrschule/DESIGN.md, status review).
 * Beweis-Schicht für Tür/Telefon: ein Job, keine Ausstiege in die Agentur-Site —
 * deshalb ohne Site-Navigation. SiteShell lässt /fahrschule durch (bare children).
 */

export default function FahrschuleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-theme="fahrschule" className="bg-mh-paper text-mh-text-primary">
      <header className="border-b border-mh-divider">
        <div className="mx-auto flex max-w-mh-container items-center justify-between px-5 py-mh-4 md:px-16">
          <div className="flex items-center gap-mh-4">
            <Link href="/fahrschule" aria-label="MyHiwi — Fahrschulen">
              <Image
                src="/brand/myhiwi-h-logo.svg"
                alt="MyHiwi"
                width={104}
                height={28}
                priority
              />
            </Link>
            <span className="hidden border-l border-mh-divider pl-mh-4 font-mh-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-mh-text-secondary md:inline">
              Lokale Wachstumssysteme · Berlin-Ost
            </span>
          </div>
          <FsHeaderPhone />
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-mh-divider bg-mh-subtle">
        <div className="mx-auto flex max-w-mh-container flex-col gap-mh-4 px-5 py-mh-6 md:flex-row md:items-center md:justify-between md:px-16">
          <div>
            <p className="font-mh-body text-[15px] font-semibold text-mh-text-primary">
              Kaliberda Digital Intelligence UG (haftungsbeschränkt)
            </p>
            <p className="mt-1 font-mh-mono text-[11px] uppercase tracking-[0.14em] text-mh-text-secondary">
              Lokale Wachstumssysteme · Ahrensfelde bei Berlin
            </p>
          </div>
          <nav className="flex gap-mh-5 font-mh-body text-[14px] text-mh-text-secondary">
            <Link href="/impressum" className="hover:text-mh-text-primary">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-mh-text-primary">
              Datenschutz
            </Link>
            <Link href="/" className="hover:text-mh-text-primary">
              myhiwi.de
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
