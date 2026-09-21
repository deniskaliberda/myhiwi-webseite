import Link from "next/link";
import Image from "next/image";
import { Bricolage_Grotesque, Caveat } from "next/font/google";
import { FsHeaderPhone } from "./FsCta";
import "./fahrschule.css";

/**
 * Eigene Design-Shell für /fahrschule (app/fahrschule/DESIGN.md v2, status review).
 * Papier-Look, ein Job je Seite, keine Ausstiege in die Agentur-Site — deshalb ohne
 * Site-Navigation. SiteShell lässt /fahrschule durch (bare children).
 * Caveat ist die einzige shell-eigene Schrift (Randnotizen), nur hier geladen.
 */

// The root layout loads Bricolage with display "optional" (often skipped on first view).
// In this shell it carries all text, so it is loaded here reliably under its own variable.
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-fsp",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-caveat",
  display: "swap",
});

export default function FahrschuleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-theme="fahrschule" className={`fsp ${display.variable} ${caveat.variable}`}>
      <header className="fsp-header">
        <Link href="/fahrschule" aria-label="MyHiwi für Fahrschulen">
          <Image src="/brand/myhiwi-h-logo.svg" alt="MyHiwi" width={116} height={32} priority />
        </Link>
        <FsHeaderPhone />
      </header>

      <main>{children}</main>

      <footer className="fsp-footer">
        Kaliberda Digital Intelligence UG (haftungsbeschränkt) · Dorfstraße 1a · 16356 Ahrensfelde
        {" · "}
        <Link href="/impressum">Impressum</Link>
        {" · "}
        <Link href="/datenschutz">Datenschutz</Link>
        {" · "}
        <Link href="/">myhiwi.de</Link>
      </footer>
    </div>
  );
}
