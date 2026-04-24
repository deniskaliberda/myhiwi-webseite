import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock, Code, Check, Zap } from "lucide-react";
import SectionReveal from "@/components/shared/SectionReveal";

export const metadata: Metadata = {
  title: "Warum Next.js für lokale KMU-Websites die beste Wahl ist | MyHiwi Blog",
  description:
    "Warum ich keine WordPress-Sites mehr baue — und was Next.js für KMU konkret besser macht: Ladezeit, SEO, Wartung, Sicherheit. Mit realen Zahlen aus dem Sonnenhof-Relaunch.",
  keywords: [
    "Next.js",
    "Webdesign KMU",
    "WordPress Alternative",
    "Core Web Vitals",
    "Ladezeit",
    "Local SEO",
  ],
  alternates: {
    canonical: "https://myhiwi.de/blog/next-js-fuer-lokale-websites",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Warum Next.js für lokale KMU-Websites die beste Wahl ist",
  datePublished: "2026-04-24",
  author: { "@type": "Person", name: "Denis Kaliberda" },
  publisher: {
    "@type": "Organization",
    name: "MyHiwi UG",
    logo: { "@type": "ImageObject", url: "https://myhiwi.de/brand/myhiwi-h-logo.svg" },
  },
  mainEntityOfPage: "https://myhiwi.de/blog/next-js-fuer-lokale-websites",
};

export default function NextJsPost() {
  return (
    <div className="bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative overflow-hidden pt-28 pb-12 md:pt-36">
        <div className="absolute inset-0 grid-pattern-light mask-radial pointer-events-none" />
        <div className="relative mx-auto w-full max-w-3xl px-4 sm:px-6">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-blue-600">
            <ArrowLeft className="h-3.5 w-3.5" /> Zurück zum Blog
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-blue-700">
              <Code className="h-3 w-3" /> Webdesign
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
              <Calendar className="h-3 w-3" /> 24. April 2026
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
              <Clock className="h-3 w-3" /> 8 Min. Lesezeit
            </span>
          </div>

          <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl">
            Warum ich für KMU{" "}
            <span className="gradient-text">kein WordPress mehr baue.</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Wenn Sie heute „Hotel Website bauen lassen“ googeln, landen Sie bei Agenturen,
            die 2015er WordPress-Templates verkaufen. Das geht für KMU in drei Punkten
            nach hinten los — und lässt sich mit einem modernen Stack komplett vermeiden.
          </p>
        </div>
      </section>

      <article className="relative bg-white pb-20">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 space-y-8 text-base leading-relaxed text-slate-700 md:text-lg">
          <SectionReveal>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Was Next.js überhaupt ist.
            </h2>
            <p className="mt-3">
              Next.js ist ein Web-Framework, das auf React basiert und von Vercel
              entwickelt wird. Statt eine Seite erst im Browser zu bauen (wie klassisches
              React) rendert Next.js die fertige HTML auf dem Server — und liefert sie
              an Google und den Nutzer als eine statische, extrem schnelle Seite aus.
            </p>
            <p>
              Für KMU heißt das konkret: keine Datenbank, die angegriffen werden kann,
              keine Plugins, die sich in die Quere kommen, kein Admin-Panel, das gehackt
              wird. Stattdessen eine Website, die in unter einer Sekunde lädt und bei
              Google sauber indexierbar ist.
            </p>
          </SectionReveal>

          <SectionReveal>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Drei WordPress-Probleme, die Next.js einfach nicht hat.
            </h2>

            <h3 className="mt-6 font-heading text-lg font-bold text-slate-900">
              1. Ladezeit = Ranking-Faktor.
            </h3>
            <p className="mt-2">
              Google misst seit 2021 die{" "}
              <strong>Core Web Vitals</strong> und nutzt sie direkt als Ranking-Faktor.
              Eine durchschnittliche WordPress-Seite mit Elementor und 12 Plugins schafft
              3–5 Sekunden Ladezeit auf Mobile. Der Sonnenhof in der alten Version: 4,2 s.
              Die Next.js-Version seit Februar 2026: 0,8 s. Google sieht den Unterschied.
            </p>

            <h3 className="mt-6 font-heading text-lg font-bold text-slate-900">
              2. Wartungsaufwand = laufende Kosten.
            </h3>
            <p className="mt-2">
              WordPress braucht permanente Updates — Core, Theme, Plugins. Vergisst man
              ein Update, ist die Seite angreifbar. Vergisst man ein Plugin-Update, kracht
              beim nächsten Core-Update der halbe Seiten-Aufbau. Für 5-Personen-Betriebe
              realistisch: 2–4 Stunden Wartung pro Monat oder ein Agentur-Wartungsvertrag
              ab 49 € / Monat.
            </p>
            <p>
              Next.js-Seiten haben keine Plugins, keine Datenbank-Updates, keinen
              Admin-Login. Die Seite wird einmal gebaut und deployed — und läuft. Updates
              betreffen nur den Code-Stand, den ich kontrolliere.
            </p>

            <h3 className="mt-6 font-heading text-lg font-bold text-slate-900">
              3. Sicherheit = Reputation.
            </h3>
            <p className="mt-2">
              Etwa 40 % aller WordPress-Sites weltweit sind in irgendeiner Form infiziert
              oder enthalten veraltete verwundbare Versionen (Sucuri Report 2025). Ein
              gehacktes Kontaktformular oder ein eingeschleustes Ads-Skript kann in
              wenigen Stunden das Google-Ranking ruinieren.
            </p>
            <p>
              Eine Next.js-Seite auf Vercel hat keine solche Angriffsfläche. Kein
              Login, keine Datenbank, keine Plugins. Das einzige Eindringtor wäre der
              GitHub-Account meiner Firma — der mit 2FA + Hardware-Key gesichert ist.
            </p>
          </SectionReveal>

          <SectionReveal>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Was Next.js besser macht — technisch.
            </h2>
            <ul className="mt-4 space-y-2">
              {[
                "Statisches HTML: Google liest alles direkt aus, kein JavaScript-Rendering nötig.",
                "Server-Komponenten: Datenbank-Abfragen laufen auf dem Server, Browser sieht nur fertige Inhalte.",
                "Automatische Bildoptimierung: WebP, AVIF, responsive — für alle Viewport-Größen.",
                "Schema.org-Markup wird direkt in JSX geschrieben und typisiert — keine Plugins.",
                "SEO-Tags über next/metadata — typsicher und zentral verwaltet.",
                "Deployment in 15 Sekunden via Git-Push. Rollback in 10 Sekunden.",
                "next-intl für mehrere Sprachen — beim Sonnenhof DE + EN mit ~600 Übersetzungs-Keys.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-cyan-500" strokeWidth={3} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </SectionReveal>

          <SectionReveal>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              „Aber ich will selbst Inhalte ändern können.“
            </h2>
            <p className="mt-3">
              Der berechtigteste Einwand. Next.js-Seiten haben standardmäßig kein CMS.
              Für KMU mit wöchentlichen Content-Änderungen ist das ein Problem — für die
              meisten Dienstleister-Websites eher nicht: Inhalte ändern sich alle 3–6
              Monate und das macht der Dienstleister ohnehin besser als der Inhaber.
            </p>
            <p>
              Wenn es doch ein redaktionelles CMS braucht, kombinieren wir Next.js mit
              Headless-Lösungen wie Sanity oder Payload — bleiben aber beim modernen Stack.
            </p>
          </SectionReveal>

          <SectionReveal>
            <div className="my-8 rounded-2xl border border-blue-200 bg-blue-50 p-6 md:p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-blue-700">
                Praxis-Beispiel
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-800">
                Der Sonnenhof-Herrsching-Relaunch ist auf Next.js gebaut — inkl. DE + EN,
                Schema.org und allen SEO-Basics. Die vollständigen Zahlen:
              </p>
              <Link
                href="/case-studies/sonnenhof-herrsching"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 transition-colors hover:text-blue-800"
              >
                Case Study Sonnenhof
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </SectionReveal>

          <SectionReveal>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Kurz: wann Next.js — und wann nicht.
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
                <Zap className="h-5 w-5 text-emerald-600" />
                <p className="mt-2 font-heading font-bold text-slate-900">Passt</p>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>Hotels, Pensionen, Ferienwohnungen</li>
                  <li>Handwerker, Praxen, Kanzleien</li>
                  <li>KMU mit seltenen Inhalts-Änderungen</li>
                  <li>Alle mit Priorität auf Google-Sichtbarkeit</li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <p className="font-heading font-bold text-slate-900">Eher WordPress / Shopify</p>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>Redaktionelle Websites mit täglichem Content</li>
                  <li>E-Commerce mit 500+ Produkten + komplexen Varianten</li>
                  <li>Bestehende Teams, die WordPress eh beherrschen</li>
                </ul>
              </div>
            </div>
          </SectionReveal>
        </div>
      </article>

      <section className="relative bg-slate-50 py-20">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            Ihre Website zu langsam?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Ich schaue mir im Erstgespräch Ihre Core Web Vitals an und sage Ihnen ehrlich,
            ob sich ein Umbau auf Next.js rechnet — oder ob ein Performance-Fix am
            bestehenden Stack reicht.
          </p>
          <Link
            href="/kontakt"
            className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition-all hover:from-blue-700 hover:to-blue-600"
          >
            Kostenloses Erstgespräch
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
