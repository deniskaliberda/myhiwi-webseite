import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

const leistungen = [
  { label: "Sichtbarkeit · Website + SEO", href: "/#kompetenzen" },
  { label: "Automatisierung · Buchung + Zahlung", href: "/#kompetenzen" },
  { label: "KI-Lösungen · Agents + Workflow", href: "/#kompetenzen" },
  { label: "Preise", href: "/#preise" },
];

const caseStudies = [
  { label: "Sonnenhof Herrsching", href: "/case-studies/sonnenhof-herrsching" },
  { label: "Mr. Sherman Tanzstudio", href: "/case-studies/mr-sherman" },
  { label: "Formazin · KI-Agent", href: "/case-studies/formazin" },
  { label: "Alle Case Studies", href: "/case-studies" },
];

const unternehmen = [
  { label: "Über mich", href: "/ueber-mich" },
  { label: "Blog", href: "/blog" },
  { label: "Kontakt", href: "/kontakt" },
];

const rechtliches = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-slate-300">
      <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />
      <div
        className="absolute top-[-200px] right-[-100px] h-[500px] w-[500px] rounded-full blur-3xl opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.25), transparent 60%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 py-16 md:py-20">
        {/* Tagline block */}
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.5fr,1fr] md:items-center">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label="MyHiwi Startseite"
            >
              <Image
                src="/brand/myhiwi-h-icon-white.svg"
                alt=""
                width={44}
                height={44}
                className="h-11 w-11"
              />
              <span className="font-heading text-2xl leading-none">
                <span className="font-light opacity-70">My</span>
                <span className="font-bold text-white">Hiwi</span>
              </span>
            </Link>
            <h2 className="mt-6 font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              Dein digitaler <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Hiwi.</span>
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">
              Digitaler Partner für lokale Unternehmen: Website, Local SEO,
              Buchung und Zahlung, Workflow-Automation und KI-Agents — aus
              einer Hand.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <a
              href="mailto:kontakt@myhiwi.de"
              className="group inline-flex items-center gap-2 text-white transition-colors hover:text-blue-300"
            >
              <Mail className="h-4 w-4" />
              <span className="text-base">kontakt@myhiwi.de</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <div className="inline-flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="h-4 w-4 flex-shrink-0" />
              <span>Ahrensfelde · Berlin · Bayern (Ammersee)</span>
            </div>
            <Link
              href="/kontakt"
              className="mt-2 inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-blue-500/40"
            >
              Kostenloses Erstgespräch
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid gap-10 py-12 md:grid-cols-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500">
              Leistungen
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {leistungen.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500">
              Case Studies
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {caseStudies.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500">
              Unternehmen
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {unternehmen.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500">
              Rechtliches
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {rechtliches.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-xs text-slate-500 md:flex-row">
          <p>
            © {currentYear} MyHiwi UG (haftungsbeschränkt) i.G. · Denis Kaliberda
          </p>
          <p className="font-mono uppercase tracking-[0.14em]">
            Handgemacht in Berlin + Bayern
          </p>
        </div>
      </div>
    </footer>
  );
}
