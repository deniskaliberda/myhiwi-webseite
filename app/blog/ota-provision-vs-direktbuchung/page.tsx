import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingDown } from "lucide-react";
import SectionReveal from "@/components/shared/SectionReveal";
import { BlogArticleShell } from "@/components/myhiwi/blog/BlogArticleShell";

export const metadata: Metadata = {
  title: "OTA-Provision vs. Direktbuchung — die ehrliche Rechnung | MyHiwi Blog",
  description:
    "Booking.com und FeWo-Direkt behalten 15–18 % jeder Buchung. Wann sich eine eigene Direktbuchungs-Infrastruktur rechnet — konkret, mit Zahlen am Ammersee-Beispiel.",
  keywords: [
    "Booking.com Provision",
    "Direktbuchung Hotel",
    "OTA Alternative",
    "Ferienwohnung Direktbuchung",
    "Buchungssystem KMU",
  ],
  alternates: {
    canonical: "https://myhiwi.de/blog/ota-provision-vs-direktbuchung",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "OTA-Provision vs. Direktbuchung — die ehrliche Rechnung",
  datePublished: "2026-04-24",
  author: { "@type": "Person", name: "Denis Kaliberda" },
  publisher: {
    "@type": "Organization",
    name: "Kaliberda Digital Intelligence UG (haftungsbeschränkt)",
    logo: { "@type": "ImageObject", url: "https://myhiwi.de/brand/myhiwi-h-logo.svg" },
  },
  mainEntityOfPage: "https://myhiwi.de/blog/ota-provision-vs-direktbuchung",
};

export default function OtaPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <BlogArticleShell
        category="Hotellerie & FeWo"
        date="24. April 2026"
        readTime="6 Min."
        title={
          <>
            Was Booking.com Sie wirklich kostet —{" "}
            <em className="mh-italic-accent">und ab wann Direktbuchung rechnet</em>.
          </>
        }
        lead={
          <>
            OTAs (Online Travel Agencies) wie Booking.com, Expedia, FeWo-Direkt und Airbnb
            behalten pro Buchung 15–18 % Provision. Am Anfang ist das okay — sie bringen
            Sichtbarkeit, die man selbst nicht hätte. Irgendwann ab einer bestimmten
            Auslastung frisst es aber die komplette Marge. Hier die Rechnung.
          </>
        }
        ctaTitle={
          <>
            Welche Provisionen zahlen{" "}
            <em className="mh-italic-accent text-mh-glow">Sie</em>?
          </>
        }
        ctaLead="In 15 Minuten rechnen wir durch, was eine eigene Buchungs-Infrastruktur für Ihr Haus konkret bedeutet — und ob es sich heute schon rechnet."
      >
        <SectionReveal>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Die echten Provisionssätze (Stand 2026).
          </h2>
          <ul className="mt-4 space-y-2">
            {[
              ["Booking.com", "15 % Standard, bis 18 % im „Preferred Partner“-Programm."],
              ["FeWo-Direkt / Vrbo", "8 % Service-Fee für Gäste + 5 % Kommission für Hosts = effektiv ~13 %."],
              ["Airbnb", "3 % vom Host + 14 % vom Gast = ~17 % des Gesamtvolumens."],
              ["Expedia", "15–25 % je nach Programm, oft höher als Booking.com."],
            ].map(([k, v]) => (
              <li key={k} className="flex flex-col rounded-lg border border-slate-200 bg-slate-50 p-4 md:flex-row md:items-center md:gap-4">
                <span className="w-40 flex-shrink-0 font-heading font-bold text-slate-900">{k}</span>
                <span className="text-sm text-slate-700">{v}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-slate-500">
            Dazu kommen: Bewertungs-Druck, Rate-Parity-Klauseln und die Tatsache, dass
            die OTA Ihre Gäste-Daten behält, nicht Sie.
          </p>
        </SectionReveal>

        <SectionReveal>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Rechenbeispiel Sonnenhof-Skala.
          </h2>
          <p className="mt-3">
            Nehmen wir ein Haus mit 30 Zimmern, durchschnittlicher Übernachtungspreis
            120 €, 65 % Jahres-Auslastung. Über 12 Monate sind das grob:
          </p>
          <div className="mt-4 overflow-x-auto overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-3 text-left font-mono text-[10px] uppercase tracking-[0.12em] text-slate-500">Kennzahl</th>
                  <th className="p-3 text-right font-mono text-[10px] uppercase tracking-[0.12em] text-slate-500">Wert</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Übernachtungen / Jahr", "≈ 7.100"],
                  ["Brutto-Umsatz Übernachtungen", "852.000 €"],
                  ["Davon über OTA (angenommen 70 %)", "596.400 €"],
                  ["Provisions-Kosten bei 15 %", "89.460 €"],
                  ["Provisions-Kosten bei 17 %", "101.388 €"],
                ].map(([k, v]) => (
                  <tr key={k} className="border-t border-slate-100">
                    <td className="p-3 text-slate-700">{k}</td>
                    <td className="p-3 text-right font-heading font-bold text-slate-900">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            Das sind bei mittelgroßen Häusern schnell{" "}
            <strong>50.000 bis 100.000 € im Jahr</strong>, die an OTAs fließen. Jede
            Prozent-Verschiebung hin zu Direktbuchung ist bares Geld.
          </p>
        </SectionReveal>

        <SectionReveal>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Was Direktbuchung tatsächlich kostet.
          </h2>
          <p className="mt-3">
            Der Mythos ist: „Eigenes Buchungssystem ist teuer.“ Die Rechnung sieht so aus:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Einmalige Entwicklung (Next.js + Supabase + Stripe): 3.000–5.000 €.",
              "Laufende Kosten: Hosting 20 €/Mo, Stripe-Fee 1,4 % + 0,25 € pro Transaktion.",
              "Kein monatliches SaaS-Abo wie Smoobu, Hostaway oder Cloudbeds (50–150 €/Mo).",
              "Keine Provisions-Abhängigkeit — die Gäste kommen zu Ihnen, nicht zu OTA.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <TrendingDown className="mt-1 h-4 w-4 flex-shrink-0 text-emerald-500" strokeWidth={3} />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4">
            Bei den oben genannten 100.000 € OTA-Provision/Jahr: selbst bei nur 20 %
            Anteil-Verschiebung zu Direktbuchung sparen Sie 20.000 € — eine Amortisation
            in wenigen Monaten.
          </p>
        </SectionReveal>

        <SectionReveal>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Wann OTAs weiter Sinn machen.
          </h2>
          <p className="mt-3">
            OTAs ganz abschaffen ist nicht die Empfehlung — sie bleiben eine gute
            Akquise-Quelle für Neukunden, die Ihr Haus nie gegoogelt hätten. Die
            Aufgabe ist, Stammgäste und Wiederkehr-Buchungen <strong>direkt</strong> zu
            bekommen:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Bestellungs-Bestätigung per Mail verweist auf die direkte Buchungs-URL.",
              "Im Zimmer eine gedruckte Karte: „Nächstes Mal direkt buchen — 5 % Rabatt + Frühstück inklusive.“",
              "Google Ads auf den eigenen Namen + Variationen — damit niemand erst über Booking.com landet.",
              "SEO auf lokale Suchen („Hotel Ammersee“, „Ferienwohnung mit Hund Bayern“) — das ist Direktakquise kostenlos.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-mh-accent" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </SectionReveal>

        <SectionReveal>
          <div className="my-8 rounded-mh-lg border border-mh-divider bg-blue-50 p-6 md:p-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-blue-700">
              Praxis-Beispiel
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-800">
              Sonnenhof Herrsching bekam in 100 Tagen 108 direkte Gäste-Anfragen — bis
              zu 80 pro Monat, die jetzt ohne OTA-Provision ins Haus kommen:
            </p>
            <Link
              href="/case-studies/sonnenhof-herrsching"
              className="mt-4 inline-flex items-center gap-1.5 font-semibold"
            >
              Sonnenhof Case Study
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </SectionReveal>
      </BlogArticleShell>
    </>
  );
}
