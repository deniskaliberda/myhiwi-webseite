import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ExternalLink,
  Globe,
  Zap,
  Bot,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Search,
  LineChart,
  Wrench,
  MessageSquare,
  Workflow,
  CalendarClock,
  CreditCard,
} from "lucide-react";
import BeforeAfterSlider from "@/components/home/BeforeAfterSlider";
import SectionReveal from "@/components/shared/SectionReveal";

export const metadata: Metadata = {
  title: "Dein digitaler Hiwi für KMU — Website, SEO, Automation & KI | MyHiwi",
  description:
    "Digitaler Partner für lokale Unternehmen: Website + Local SEO, Buchungs- und Zahlungssysteme, Workflow-Automation und KI-Agents — aus einer Hand. Berlin + Bayern.",
  keywords: [
    "digitaler Partner",
    "Webdesign Agentur KMU",
    "Local SEO",
    "Google Business Profil",
    "Buchungssystem erstellen lassen",
    "Direktbuchung FeWo Hotel",
    "Zahlungssystem Stripe",
    "KI-Agent fuer Unternehmen",
    "Workflow Automation KMU",
    "Google Ads Betreuung",
    "Next.js Website",
    "Ahrensfelde Berlin Bayern",
  ],
  alternates: {
    canonical: "https://myhiwi.de",
  },
};

/* ---------- Problem → Lösung vignettes (real ongoing projects) ---------- */

const vignettes = [
  {
    field: "Sichtbarkeit",
    client: "Sonnenhof Herrsching",
    problem:
      "Hotel am Ammersee — Website seit 23 Jahren nicht erneuert, Top-10-Keywords auf 6-Jahres-Tiefpunkt (24), Hauptumsatz über 15–18 % Booking.com-Provision.",
    solution:
      "100-Tage-Relaunch: Next.js-Website (DE + EN), Local-SEO-Fundament, 10 Content-Posts, Google Business Profil, Performance-Max-Ads (Ø CPC 0,30 €).",
    result: "108 Anfragen in 100 Tagen · +304 % Top-10-Keywords (24 → 97) · 6-Jahres-Peak laut SE Ranking API",
    accent: "from-blue-500 to-blue-600",
    icon: Globe,
  },
  {
    field: "Custom Brand-App",
    client: "Mr. Sherman · Tanzstudio Berlin",
    problem:
      "Memberships, monatliche Abbuchungen, Schüler-Login, Trainer-Portal, Admin-CRM — keine Standard-Software (Mindbody, Eversports) konnte das so abbilden, dass das Studio-Branding trägt.",
    solution:
      "Eigene Brand-Applikation, gebaut speziell für Sherman: Memberships mit Stripe-Subscriptions, Schüler-App, Trainer-Portal, Admin-CRM. Alles miteinander verbunden, alles automatisiert, alles digital mit der Webseite verschmolzen.",
    result: "205 Leads / Monat · 7,28 € CPL (75 % unter Branchen-Benchmark) · 4 Membership-Tiers vollständig automatisiert",
    accent: "from-cyan-500 to-blue-500",
    icon: Workflow,
  },
  {
    field: "KI-Lösungen",
    client: "Formazin · Architekturbüro",
    problem:
      "Nach jeder Baustelle 2–3 Stunden händisch Bauprotokoll aus Fotos + Notizen. Jeden Tag.",
    solution:
      "KI-Agent, der Fotos und Sprachnotizen entgegennimmt, strukturiertes Bauprotokoll generiert und ins Büro-System schreibt.",
    result: "Protokoll in Minuten statt Stunden · Pilot-Launch Mai 2026",
    accent: "from-blue-600 to-cyan-500",
    icon: Bot,
  },
];

/* ---------- Three competency fields (not products) ---------- */

const competencies = [
  {
    n: "01",
    icon: Globe,
    title: "Sichtbarkeit",
    subline: "Gefunden werden — technisch sauber, inhaltlich stark.",
    description:
      "Von der Website über Google Business Profil bis zu bezahlten Anzeigen — ich baue die Infrastruktur, die Ihr Betrieb braucht, um bei den richtigen Suchanfragen aufzutauchen.",
    examples: [
      "Webdesign mit Next.js + Vercel · mobile-first",
      "Local SEO · Google Business Profil · technisches SEO",
      "Google Ads Management · S/M/L Budget",
      "Content & Blog · Fachartikel regional",
    ],
    keywords: "Webdesign · Local SEO · Google Ads",
  },
  {
    n: "02",
    icon: Zap,
    title: "Automatisierung",
    subline: "Zeit zurückgewinnen — durch Software, die für Sie arbeitet.",
    description:
      "Buchungen, Zahlungen, Rechnungen, Wiedervorlagen — wenn Sie es jede Woche manuell tun, baue ich das System, das es für Sie tut. Custom, nicht SaaS.",
    examples: [
      "Direktbuchungs-System · Next.js + Supabase + Stripe",
      "Zahlungsintegration · Stripe · Mollie · SEPA · Klarna",
      "CRM- und E-Mail-Automation",
      "Interne Admin-Tools · Dashboards · Reports",
    ],
    keywords: "Buchungssystem · Zahlungssystem · Workflow-Automation",
  },
  {
    n: "03",
    icon: Bot,
    title: "KI-Lösungen",
    subline: "Arbeit automatisieren, nicht nur verwalten.",
    description:
      "KI-Agents und Assistenten, die echte Arbeit abnehmen — von Dokumenten-Verarbeitung über Kunden-Antworten bis zur Protokoll-Erstellung. Maßgeschneidert pro Branche.",
    examples: [
      "KI-Agents für repetitive Fach-Aufgaben",
      "Dokumenten- & E-Mail-Automation",
      "Intelligente Antwort-Systeme",
      "Workflow-Integration (Claude · OpenAI · Gemini)",
    ],
    keywords: "KI-Agent KMU · Workflow-AI · Dokumenten-Automation",
  },
];

/* ---------- Working principles (partner vs. agency) ---------- */

const principles = [
  {
    icon: Wrench,
    title: "Custom gebaut, kein Baukasten.",
    text: "Jedes System wird auf Ihren Betrieb zugeschnitten — Sie besitzen Code und Daten, nie Lizenz-Abhängigkeit.",
  },
  {
    icon: MessageSquare,
    title: "Persönlich, kein Funnel.",
    text: "Wenn Sie schreiben, landet das bei mir — nicht bei einem Account-Manager. Ich kümmere mich selbst um Ihr Problem, von der ersten Diagnose bis zur Lösung.",
  },
  {
    icon: LineChart,
    title: "Ergebnisse, nicht Stunden.",
    text: "Sie zahlen für das was funktioniert — Leads, Buchungen, Zeitersparnis. Nicht für Timesheets.",
  },
  {
    icon: Sparkles,
    title: "Fortlaufend, nicht liefern-und-weg.",
    text: "Ich bleibe dran — Monat für Monat. Digitalisierung ist Prozess, kein einmaliges Projekt.",
  },
];

/* ---------- Tier data (4-Tier model · ab 2026-07-01 · CLAUDE.md) ---------- */

const tiers = [
  {
    id: "sichtbar",
    name: "Sichtbar",
    tagline: "Einstieg ohne Festlegung.",
    price: "349",
    unit: "€ / Monat",
    setup: "798 € einmalige Einrichtung",
    term: "3 Monate Mindestlaufzeit",
    audience: "Handwerker & kleine Betriebe in der Proof-Phase",
    features: [
      "Individuelle Website · 5–8 Seiten",
      "Mobile-first · handgemacht, kein Baukasten",
      "Google Business Profil · Grundlagen-SEO",
      "Monatliches Reporting auf Deutsch",
      "E-Mail-Support",
    ],
    highlight: false,
    cta: "Starten",
  },
  {
    id: "wachstum",
    name: "Wachstum",
    tagline: "Unser Standard für wachsende Betriebe.",
    price: "699",
    unit: "€ / Monat",
    setup: "798 € einmalige Einrichtung",
    term: "12 Monate Mindestlaufzeit",
    audience: "Ferienwohnungen, Fahrschulen, Friseure, Praxen",
    features: [
      "Alles aus Sichtbar",
      "Laufende SEO — Content + Technik + Backlinks",
      "Google Ads inklusive · bis 1.000 € Werbebudget",
      "1 Workflow-Automation (Lead-Routing, Onboarding oder Reporting)",
      "1 Blog-Artikel pro Monat",
      "Monatlicher Strategie-Call",
    ],
    highlight: true,
    cta: "Wachstum starten",
  },
  {
    id: "dominanz",
    name: "Dominanz",
    tagline: "Für alle, die Marktführer werden wollen.",
    price: "1.199",
    unit: "€ / Monat",
    setup: "1.339 € einmalige Einrichtung",
    term: "12 Monate Mindestlaufzeit",
    audience: "Hotels, Zahnarztpraxen, Kanzleien, regionale Ketten",
    features: [
      "Alles aus Wachstum",
      "Google Ads erweitert · 1.000–3.000 € Budget",
      "Personal-Email-Agent für Ihre Branche",
      "Custom Zahlungssystem inklusive",
      "Wettbewerber-Monitoring · A/B-Tests",
      "Quartals-Workshop vor Ort oder via Zoom",
    ],
    highlight: false,
    cta: "Dominieren",
  },
  {
    id: "dominanz-plus",
    name: "Dominanz Plus",
    tagline: "Done-for-you Premium.",
    price: "2.499",
    unit: "€ / Monat",
    setup: "1.999 € einmalige Einrichtung",
    term: "12 Monate Mindestlaufzeit",
    audience: "Mehr-Standort-Betriebe & Brands mit Vertriebs-Engpass",
    features: [
      "Alles aus Dominanz",
      "Google Ads Premium · bis 5.000 € Budget",
      "Custom Buchungssystem inklusive",
      "Voice-zu-Dokument-Agent (Bauprotokoll, Calls, Notizen)",
      "Lead-Generation-Modul aktiv",
      "WhatsApp-Bulk-Kampagnen (2/Quartal inkl.)",
    ],
    highlight: false,
    cta: "Anfragen",
  },
];

const addons = [
  {
    icon: CalendarClock,
    name: "Buchungssystem",
    price: "ab 2.990 € · 49 €/Mo",
    keyword: "Direktbuchung ohne OTA-Provision · Hotels · FeWo · Tanzschule",
  },
  {
    icon: CreditCard,
    name: "Zahlungssystem",
    price: "ab 1.490 € · 29 €/Mo",
    keyword: "Stripe · Mollie · SEPA · Klarna",
  },
  {
    icon: Bot,
    name: "Personal-Email-Agent",
    price: "299 €/Mo · Custom 999 + 399 €/Mo",
    keyword: "Antwortet im Stil Ihrer Branche · Inbox-Triage",
  },
  {
    icon: Workflow,
    name: "Voice-zu-Dokument-Agent",
    price: "1.490 € · 199 €/Mo",
    keyword: "Bauprotokoll · Call-Notes · Übergabe-Dokumente",
  },
  {
    icon: Sparkles,
    name: "Lead-Generation-Service",
    price: "690 € · 299 €/Mo",
    keyword: "Recherche · Qualifizierung · CRM-Übergabe",
  },
  {
    icon: Sparkles,
    name: "Marketing-Kampagne",
    price: "ab 290 € pro Kampagne",
    keyword: "Email · WhatsApp · Anzeigen · Re-Aktivierung",
  },
  {
    icon: Bot,
    name: "Custom KI-Agent",
    price: "ab 1.490 € · ab 99 €/Mo",
    keyword: "Leistungs-Vergleich · Kundendaten-Markt · Branchen-Tool",
  },
  {
    icon: Globe,
    name: "Zusatz-Sprache · Blog-Extra · Relaunch",
    price: "490 € · 149 €/Stk · 990 €",
    keyword: "Nach Bedarf modular einkaufen",
  },
];

/* ---------- Stats (kept — proof of results) ---------- */

const stats = [
  {
    value: "4",
    suffix: " / 5",
    label:
      "Konsumenten nutzen Suchmaschinen, um lokale Informationen zu finden.",
    source: "Google Consumer Insights",
  },
  {
    value: "78",
    suffix: "%",
    label:
      "lokaler Smartphone-Suchen führen innerhalb 24 Std. zu einem Geschäftsbesuch.",
    source: "Google / Ipsos",
  },
  {
    value: "12",
    suffix: "×",
    label:
      "durchschnittlicher ROI von Local SEO nach 12 Monaten vs. bezahlte Anzeigen.",
    source: "BrightLocal Benchmark 2025",
  },
];

/* ---------- FAQ (keyword coverage + FAQPage schema) ---------- */

const faqs = [
  {
    q: "Was unterscheidet MyHiwi von einer klassischen Agentur?",
    a: "Sie reden direkt mit mir — keine Account-Manager-Schicht, keine Slack-Channel-Stille. Ich höre mir das Problem an, baue die Lösung selbst (Website, Buchung, KI-Agent) und bleibe danach dran. Keine Timesheets, kein Agentur-Theater. Mein Ziel ist nicht der nächste Vertragsabschluss, sondern dass Ihr Betrieb digital gefunden wird.",
  },
  {
    q: "Baut ihr auch Buchungssysteme und Zahlungsintegrationen?",
    a: "Ja. Direktbuchungs-Systeme auf Basis von Next.js, Supabase und Stripe sind einer unserer Schwerpunkte. Gerade Ferienwohnungen, Hotels und Fahrschulen sparen damit Provisionen an OTA-Plattformen wie Booking.com. Zahlungen via Stripe, Mollie, SEPA und Klarna — DSGVO-konform aus Deutschland.",
  },
  {
    q: "Für welche Branchen arbeitet MyHiwi?",
    a: "Schwerpunkt sind lokale KMU — Hotels, Ferienwohnungen, Fahrschulen, Friseure, Praxen, Handwerker und Kanzleien in Berlin, Brandenburg und Bayern. Branche ist aber zweitrangig: wichtiger ist, dass das Unternehmen wiederkehrende digitale Engpässe hat, die sich mit Website, Automation oder KI sinnvoll lösen lassen.",
  },
  {
    q: "Was kostet eine neue Website bei MyHiwi?",
    a: "Zwei Wege: monatliche Begleitung in einem der vier Tiers (Sichtbar 349 € / Wachstum 699 € / Dominanz 1.199 € / Plus 2.499 € pro Monat, jeweils inkl. Hosting, Pflege und SEO) — oder Festpreis-Projekt, wenn Sie nicht monatlich binden möchten. Beim Festpreis übernehmen wir Konzept, Bau und Übergabe gegen einmalige Vergütung; nur ein kleiner Maintenance-Beitrag fällt monatlich an. Welcher Weg passt, hängt davon ab, ob Sie laufende Optimierung wollen oder einmalig investieren möchten.",
  },
  {
    q: "Kann ich auch ohne monatlichen Vertrag arbeiten lassen?",
    a: "Ja. Buchungssystem, Zahlungssystem, eine eigene KI-Lösung oder eine reine Website können auch als Festpreis-Projekt umgesetzt werden — Sie zahlen einmalig für Konzept und Bau, und nur einen kleinen Betrag für Maintenance und Support. Beispiel Buchungssystem: ab 2.990 € einmalig + 49 € / Monat. Beispiel Zahlungssystem: ab 1.490 € + 29 € / Monat. Custom KI-Agent ab 1.490 € + 99 € / Monat. Wir empfehlen die monatliche Begleitung für Betriebe, die langfristig auf Lead-Wachstum optimieren wollen — und Festpreis für klar abgegrenzte Projekte.",
  },
  {
    q: "Bauen Sie auch KI-Lösungen für mein Unternehmen?",
    a: "Ja. Typische Use-Cases sind Dokumenten-Automation (Protokolle, Angebote, Rechnungen), intelligente Antwort-Systeme für Kunden-Kommunikation und fach-spezifische Agents. Aktuell läuft der Pilot eines Bauprotokoll-KI-Agents für ein Architekturbüro. Der Einstieg liegt bei 49 € / Monat pro Use-Case, individuell bewertet.",
  },
  {
    q: "Wie lange dauert ein Projekt?",
    a: "Ein Quick-Check dauert 15 Minuten. Ein Audit 1–2 Wochen. Eine neue Website geht nach 3–4 Wochen live. Größere Systeme (Buchung, Zahlung, KI-Agent) brauchen 4–8 Wochen vom Kick-off bis zum produktiven Einsatz. Die laufende Betreuung hat keinen Endpunkt — sie wächst mit dem Unternehmen.",
  },
  {
    q: "Wo sitzt MyHiwi?",
    a: "Ahrensfelde bei Berlin (Hauptsitz) und Ammersee / Starnberg in Bayern. Remote-Arbeit ist Standard, Vor-Ort-Termine in Berlin-Brandenburg und Oberbayern möglich. MyHiwi UG ist in Gründung, Eintragung beim HRB 2026 läuft.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

/* =========================================================
   PAGE
   ========================================================= */

export default function HomePage() {
  return (
    <div className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="absolute inset-0 grid-pattern-light mask-radial pointer-events-none" />
        <div
          className="absolute top-[-160px] right-[-140px] h-[620px] w-[620px] rounded-full blur-3xl opacity-60 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.18), transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-[-160px] left-[-120px] h-[480px] w-[480px] rounded-full blur-3xl opacity-60 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.14), transparent 60%)",
          }}
        />

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[1.1fr,540px] lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-mono uppercase tracking-[0.14em] text-blue-700">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-600" />
                </span>
                Digitaler Partner für KMU · Berlin + Bayern
              </span>

              <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.02] tracking-tight text-slate-900 sm:text-5xl lg:text-[68px]">
                Dein{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">digitaler Hiwi.</span>
                  <span className="absolute inset-x-0 bottom-1 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-80 -z-0" />
                </span>
                <br />
                <span className="text-slate-400">Erkennt Probleme,</span>
                <br />
                <span className="text-slate-400">baut Lösungen.</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-600">
                Website, Local SEO, Buchungssystem, Workflow-Automation, KI-Agent —
                ich baue was Ihr Unternehmen gerade braucht, damit Zeit und
                Umsatz für Sie arbeiten. Website ist nur das Tor. Ich werde zum
                digitalen Teil Ihres Teams.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/kontakt"
                  className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition-all hover:from-blue-700 hover:to-blue-600 hover:shadow-blue-500/40"
                >
                  Quick-Check anfragen
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="#loesungen"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white/80 px-5 py-3 text-sm font-medium text-slate-700 backdrop-blur transition-all hover:border-slate-400 hover:bg-white"
                >
                  Lösungen ansehen
                </Link>
                <span className="text-xs font-mono uppercase tracking-[0.1em] text-slate-400">
                  15 Min · unverbindlich
                </span>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-slate-200 pt-6">
                {[
                  "Direkt zu mir · kein Funnel",
                  "Custom gebaut · kein SaaS-Weiterverkauf",
                  "DSGVO · Made in Deutschland",
                ].map((t) => (
                  <div
                    key={t}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <Check className="h-4 w-4 text-cyan-500" strokeWidth={3} />
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — screenshot + floating cards */}
            <div className="relative hidden lg:block">
              <div className="relative -rotate-[1.5deg] transition-transform duration-500 hover:rotate-0">
                <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl screenshot-glow-light">
                  <div className="mb-2 flex items-center justify-between px-2">
                    <div className="flex gap-1.5">
                      <i className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                      <i className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                      <i className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    </div>
                    <span className="font-mono text-[10px] tracking-wider text-slate-400">
                      sonnenhof-herrsching.de
                    </span>
                    <span className="w-10" />
                  </div>
                  <div className="overflow-hidden rounded-lg border border-slate-200">
                    <Image
                      src="/case-studies/sonnenhof/sonnenhof-neu.png"
                      alt="Sonnenhof Herrsching — Website-Redesign von MyHiwi"
                      width={520}
                      height={360}
                      priority
                      className="h-auto w-full object-cover object-top"
                    />
                  </div>
                </div>

                <div className="absolute -left-8 -top-6 rounded-xl border border-slate-200 bg-white/95 px-4 py-3 shadow-xl backdrop-blur animate-float-y">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
                    Anfragen · 100 Tage
                  </p>
                  <p className="mt-0.5 font-heading text-xl font-bold text-slate-900">
                    <span className="gradient-text">108</span>{" "}
                    <span className="text-xs font-mono text-cyan-600">direkt · ohne Provision</span>
                  </p>
                </div>

                <div
                  className="absolute -right-6 -bottom-6 rounded-xl border border-slate-200 bg-white/95 px-4 py-3 shadow-xl backdrop-blur animate-float-y"
                  style={{ animationDelay: "1.2s" }}
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
                    Zeitersparnis · KI-Agent
                  </p>
                  <p className="mt-0.5 font-heading text-xl font-bold text-slate-900">
                    <span className="gradient-text">3h</span>
                    <span className="text-slate-400"> / Tag</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Credential bar */}
          <div className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-slate-200 pt-6 text-sm">
            <span className="text-slate-500">
              Gegründet von{" "}
              <span className="font-medium text-slate-800">Denis Kaliberda</span>
            </span>
            <a
              href="https://de.wikipedia.org/wiki/Denis_Kaliberda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-500 transition-colors hover:text-blue-600"
            >
              Wikipedia <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </section>

      {/* ===================== PROBLEM → LÖSUNG VIGNETTES ===================== */}
      <section id="loesungen" className="relative bg-slate-50 py-24 md:py-28">
        <div className="absolute inset-0 grid-pattern-light opacity-60 pointer-events-none" />
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
          <SectionReveal>
            <div className="grid gap-8 md:grid-cols-[1.3fr,1fr] md:items-end">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
                  <Wrench className="h-3 w-3 text-blue-600" />
                  Aus dem Alltag · reale Projekte
                </span>
                <h2 className="mt-4 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl">
                  Drei Probleme.{" "}
                  <span className="gradient-text">Drei Lösungen.</span>
                </h2>
              </div>
              <p className="max-w-md text-base leading-relaxed text-slate-600 md:ml-auto">
                So sieht Partnerarbeit in der Praxis aus — jeder Kunde hat ein
                anderes Engpass, jede Lösung ist auf ihn zugeschnitten. Keine
                Standard-Pakete.
              </p>
            </div>
          </SectionReveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {vignettes.map((v, i) => (
              <SectionReveal key={v.client} delay={i * 120}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10">
                  <div className={`h-1 w-full bg-gradient-to-r ${v.accent}`} />
                  <div className="flex flex-1 flex-col gap-5 p-6">
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
                        {v.field}
                      </span>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600">
                        <v.icon className="h-5 w-5" />
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-bold leading-tight tracking-tight text-slate-900">
                      {v.client}
                    </h3>

                    <div className="space-y-3 text-sm leading-relaxed">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-rose-500">
                          Problem
                        </p>
                        <p className="mt-1 text-slate-700">{v.problem}</p>
                      </div>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-blue-600">
                          Lösung
                        </p>
                        <p className="mt-1 text-slate-700">{v.solution}</p>
                      </div>
                    </div>

                    <div className="mt-auto rounded-lg border border-slate-100 bg-slate-50 p-3">
                      <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-cyan-600">
                        Ergebnis
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-slate-900">
                        {v.result}
                      </p>
                    </div>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== 3 COMPETENCY FIELDS ===================== */}
      <section id="kompetenzen" className="relative py-24 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <SectionReveal>
            <div className="grid gap-12 lg:grid-cols-[1.05fr,1fr] lg:items-center lg:gap-16">
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-slate-50">
                <Image
                  src="/home/automatisierung.png"
                  alt="Abstrakte Visualisierung von Workflow-Automation — geometrische Glaskarten, die einen vernetzten Prozess andeuten"
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover"
                  priority={false}
                />
              </div>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
                  <Sparkles className="h-3 w-3 text-blue-600" />
                  Was ich baue · 3 Kompetenzfelder
                </span>
                <h2 className="mt-4 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl">
                  Sichtbarkeit. Automatisierung.{" "}
                  <span className="gradient-text">KI.</span>
                </h2>
                <p className="mt-6 max-w-md text-base leading-relaxed text-slate-600">
                  Keine fertigen Produkte — drei Felder, in denen ich tief genug
                  bin, um echte Probleme zu lösen. Was Sie am Ende bekommen, hängt
                  von Ihrem konkreten Engpass ab.
                </p>
              </div>
            </div>
          </SectionReveal>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {competencies.map((c, i) => (
              <SectionReveal key={c.n} delay={i * 120}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10">
                  <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                  <div className="flex items-start justify-between">
                    <span className="font-mono text-xs tracking-[0.14em] text-slate-400">
                      — {c.n}
                    </span>
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600">
                      <c.icon className="h-6 w-6" />
                    </span>
                  </div>

                  <h3 className="mt-5 font-heading text-2xl font-bold tracking-tight text-slate-900">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-blue-600">
                    {c.subline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {c.description}
                  </p>

                  <ul className="mt-6 space-y-2 border-t border-slate-100 pt-5">
                    {c.examples.map((ex) => (
                      <li
                        key={ex}
                        className="flex items-start gap-2 text-sm text-slate-700"
                      >
                        <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-cyan-500" />
                        {ex}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-5 border-t border-slate-100 pt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-400">
                    {c.keywords}
                  </p>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CASE STUDY ===================== */}
      <section id="case" className="relative bg-slate-50 py-24 md:py-32">
        <div className="absolute inset-0 grid-pattern-light opacity-60 pointer-events-none" />
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
          <SectionReveal>
            <div className="grid gap-8 md:grid-cols-[1fr,1fr] md:items-end">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
                  <TrendingUp className="h-3 w-3 text-blue-600" />
                  Case №01 · Gastronomie
                </span>
                <h2 className="mt-4 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl">
                  Vom unsichtbaren Betrieb zum{" "}
                  <span className="gradient-text">ausgebuchten Freitag.</span>
                </h2>
              </div>
              <p className="max-w-md text-base leading-relaxed text-slate-600 md:ml-auto">
                Sonnenhof-Website seit 23 Jahren unverändert, Top-10-Keywords auf
                Dezember-Tiefpunkt. 100 Tage später: 108 direkte Gäste-Anfragen,
                Top-10-Keywords auf 97 vervierfacht — ein 6-Jahres-Peak laut SE
                Ranking API. Ziehen Sie den Slider.
              </p>
            </div>
          </SectionReveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.6fr,1fr]">
            <SectionReveal>
              <BeforeAfterSlider
                beforeSrc="/case-studies/sonnenhof/sonnenhof-alt.png"
                afterSrc="/case-studies/sonnenhof/sonnenhof-neu.png"
                beforeAlt="Sonnenhof Herrsching — alte Website (vor dem Redesign)"
                afterAlt="Sonnenhof Herrsching — neue Website nach dem Redesign durch MyHiwi"
                beforeLabel="Vorher · März"
                afterLabel="Nachher · April"
              />
            </SectionReveal>

            <SectionReveal delay={150}>
              <div className="flex flex-col gap-3">
                <MetricCard
                  label="Anfragen · 100 Tage"
                  value="108"
                  unit="direkt"
                  description="28. Jan – 23. Apr 2026 · ohne Booking-Provision · April-Pace ~80 / Monat."
                />
                <MetricCard
                  label="Top-10 Keywords"
                  value="+304"
                  unit="%"
                  description="24 (Dez 2025) → 97 (Apr 2026) · 37 Top-5 + 60 Top 6–10 · 6-Jahres-Peak."
                />
                <MetricCard
                  label="Google Ads · CPC"
                  value="0,30"
                  unit="€"
                  description="Branchenschnitt 1–3 €. 2.242 Klicks, 88,7 K Impressionen, Optimierungsscore 86 %."
                />
                <figure className="rounded-xl border border-slate-200 bg-white p-5">
                  <blockquote className="text-sm leading-relaxed text-slate-700">
                    „Denis hat nicht nur die Website neu gemacht — er hat
                    verstanden, warum Gäste zu uns kommen. Das ist jetzt bei
                    Google zu sehen."
                  </blockquote>
                  <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-400">
                    M. Bauer · Inhaber Sonnenhof Herrsching
                  </figcaption>
                </figure>
              </div>
            </SectionReveal>
          </div>

          <SectionReveal>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/case-studies/sonnenhof-herrsching"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition-all hover:border-slate-400"
              >
                Sonnenhof-Case im Detail
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
              >
                Alle Case Studies ansehen
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ===================== HOW I WORK — PARTNER MINDSET ===================== */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <SectionReveal>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
                <LineChart className="h-3 w-3 text-blue-600" />
                Wie ich arbeite · Partner, nicht Agentur
              </span>
              <h2 className="mt-4 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl">
                Vier Prinzipien, nach denen{" "}
                <span className="gradient-text">MyHiwi funktioniert.</span>
              </h2>
            </div>
          </SectionReveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <SectionReveal key={p.title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold leading-tight tracking-tight text-slate-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {p.text}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PRICING ===================== */}
      <section
        id="preise"
        className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-24 md:py-32"
      >
        <div className="absolute inset-0 grid-pattern-light mask-radial pointer-events-none" />
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">

          {/* Philosophie-Intro — kommt VOR den Preisen */}
          <SectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-mono uppercase tracking-[0.14em] text-blue-700">
                <Sparkles className="h-3 w-3" />
                So arbeite ich
              </span>
              <h2 className="mt-5 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-[52px]">
                Zuerst der Engpass.
                <br />
                Dann der <span className="gradient-text">Preis.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
                Ich bin am liebsten <strong>länger an Bord</strong>. Wir setzen uns
                hin, schauen wo Ihr Engpass wirklich liegt — Sichtbarkeit, Zeit
                oder Marketing — und packen das gemeinsam Stück für Stück an.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                Deshalb ist die <strong>Einstiegshürde am Anfang gering</strong>.
                Der echte Wert entsteht über Monate, nicht in der ersten Rechnung.
                Sie wachsen — wir wachsen mit.
              </p>
            </div>
          </SectionReveal>

          {/* Drei-Engpass-Zeile als Bridge */}
          <SectionReveal>
            <div className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-3">
              {[
                { icon: Search, label: "Sichtbarkeit", text: "gefunden werden, wenn jemand sucht" },
                { icon: Zap, label: "Zeitersparnis", text: "Workflows + KI nehmen Routine ab" },
                { icon: TrendingUp, label: "Marketing", text: "passende Anfragen, statt Streuung" },
              ].map((p) => (
                <div key={p.label} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5">
                  <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-blue-600">
                    <p.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-heading text-sm font-bold text-slate-900">{p.label}</p>
                    <p className="text-xs leading-snug text-slate-500">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>

          {/* Übergang zu konkreten Tiers */}
          <SectionReveal>
            <div className="mt-20 grid gap-8 md:grid-cols-[1fr,1fr] md:items-end">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
                  <ShieldCheck className="h-3 w-3 text-blue-600" />
                  Vier Begleitungs-Tiers · monatlich
                </span>
                <h3 className="mt-4 font-heading text-3xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-4xl">
                  Konkret —
                  <br />
                  was kostet die laufende{" "}
                  <span className="gradient-text">Begleitung?</span>
                </h3>
              </div>
              <p className="max-w-md text-base leading-relaxed text-slate-600 md:ml-auto">
                Vier Stufen, modular erweiterbar. Module kommen nach Bedarf dazu —
                oder als <strong>Festpreis-Projekt</strong> drunter, falls Sie
                nicht monatlich binden möchten.
              </p>
            </div>
          </SectionReveal>

          <div className="mt-14 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-4">
            {tiers.map((tier, i) => (
              <SectionReveal key={tier.id} delay={i * 120}>
                <article
                  className={[
                    "relative flex h-full flex-col overflow-hidden rounded-2xl p-7 transition-all",
                    tier.highlight
                      ? "border-0 bg-gradient-to-br from-blue-600 via-blue-600 to-cyan-600 text-white shadow-2xl shadow-blue-500/30 md:-translate-y-3 md:scale-[1.02]"
                      : "border border-slate-200 bg-white text-slate-900 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl",
                  ].join(" ")}
                >
                  {tier.highlight && (
                    <>
                      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-400/25 blur-3xl" />
                      <span className="absolute right-5 top-5 rounded-md bg-white/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white backdrop-blur">
                        ★ Empfohlen
                      </span>
                    </>
                  )}

                  <div className="relative">
                    <h3
                      className={[
                        "font-heading text-2xl font-bold tracking-tight",
                        tier.highlight ? "text-white" : "text-slate-900",
                      ].join(" ")}
                    >
                      {tier.name}
                    </h3>
                    <p
                      className={[
                        "mt-1 text-sm",
                        tier.highlight ? "text-white/80" : "text-slate-500",
                      ].join(" ")}
                    >
                      {tier.tagline}
                    </p>

                    <div className="mt-6 flex items-baseline gap-1.5">
                      <span
                        className={[
                          "font-heading text-5xl font-extrabold leading-none tracking-tight",
                          tier.highlight ? "text-white" : "text-slate-900",
                        ].join(" ")}
                      >
                        {tier.price}
                      </span>
                      <span
                        className={[
                          "font-mono text-xs uppercase tracking-[0.08em]",
                          tier.highlight ? "text-white/80" : "text-slate-500",
                        ].join(" ")}
                      >
                        {tier.unit}
                      </span>
                    </div>

                    <div
                      className={[
                        "mt-3 space-y-0.5 text-xs",
                        tier.highlight ? "text-white/80" : "text-slate-500",
                      ].join(" ")}
                    >
                      <p>{tier.setup}</p>
                      <p>{tier.term}</p>
                    </div>

                    <ul
                      className={[
                        "mt-6 space-y-2.5 border-t pt-5 text-sm",
                        tier.highlight
                          ? "border-white/20 text-white"
                          : "border-slate-100 text-slate-700",
                      ].join(" ")}
                    >
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <Check
                            className={[
                              "mt-0.5 h-4 w-4 flex-shrink-0",
                              tier.highlight ? "text-cyan-300" : "text-cyan-500",
                            ].join(" ")}
                            strokeWidth={3}
                          />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <p
                      className={[
                        "mt-6 text-xs italic",
                        tier.highlight ? "text-white/70" : "text-slate-500",
                      ].join(" ")}
                    >
                      {tier.audience}
                    </p>

                    <Link
                      href="/kontakt"
                      className={[
                        "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-all",
                        tier.highlight
                          ? "bg-white text-blue-700 hover:bg-slate-100"
                          : "border border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50",
                      ].join(" ")}
                    >
                      {tier.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>

          {/* Festpreis-Alternative */}
          <SectionReveal>
            <div className="mt-10 overflow-hidden rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-7 md:p-9">
              <div className="grid gap-6 md:grid-cols-[1.4fr,1fr] md:items-center">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-blue-700">
                    Lieber einmal zahlen statt monatlich?
                  </p>
                  <h3 className="mt-2 font-heading text-2xl font-bold tracking-tight text-slate-900 sm:text-[28px]">
                    Festpreis-Projekt — kein Retainer.
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Wenn Sie ein klar abgegrenztes Vorhaben haben — Buchungssystem,
                    Zahlung, Website oder ein eigenes KI-Tool — bauen wir das gegen
                    Festpreis. Sie zahlen einmalig für Konzept und Umsetzung, plus
                    einen kleinen Maintenance-Beitrag. Kein Lock-in, kein Mo-Mo-Mo.
                  </p>
                </div>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-500" strokeWidth={3} />
                    <span><strong>Zahlungssystem</strong> ab 490 € + 19 €/Mo<br/><span className="text-xs text-slate-500">z.B. Tennisplatz-Miete, Kurs-Buchung, einzelne Produkte</span></span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-500" strokeWidth={3} />
                    <span><strong>Buchungssystem</strong> ab 990 € + 29 €/Mo<br/><span className="text-xs text-slate-500">FeWo, Praxis, Kurs-Slots — bis zu großen Plattformen</span></span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-500" strokeWidth={3} />
                    <span><strong>Custom KI-Tool</strong> ab 999 € + 49 €/Mo<br/><span className="text-xs text-slate-500">Branchen-Agent, Dokumenten-Workflow, Antwort-Bot</span></span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-500" strokeWidth={3} />
                    <span><strong>Standalone Website</strong> auf Anfrage<br/><span className="text-xs text-slate-500">Preis nach Komplexität — 8 Seiten Friseur ≠ 50 Seiten Fahrschule</span></span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-blue-100 pt-5">
                <Link
                  href="/festpreis"
                  className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-blue-700"
                >
                  Festpreis anfragen
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <span className="text-xs text-slate-500">
                  Sie schreiben in eigenen Worten, ich melde mich mit konkretem Vorschlag.
                </span>
              </div>
            </div>
          </SectionReveal>

          {/* Add-Ons */}
          <SectionReveal>
            <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">
                    Module · modular oben drauf oder einzeln buchen
                  </p>
                  <h3 className="mt-2 font-heading text-2xl font-bold tracking-tight text-slate-900">
                    Erweiterungen je nach Engpass.
                  </h3>
                </div>
                <p className="max-w-md text-sm text-slate-600">
                  Inklusive in höheren Tiers — oder einzeln buchbar als
                  Add-On zu Festpreis oder Wachstum.
                </p>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {addons.map((a) => (
                  <div
                    key={a.name}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-5 transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:shadow-md"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-blue-100 bg-white text-blue-600">
                      <a.icon className="h-5 w-5" />
                    </span>
                    <p className="mt-4 font-heading text-base font-bold text-slate-900">
                      {a.name}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">{a.keyword}</p>
                    <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.1em] text-blue-600">
                      {a.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ===================== ABOUT (short) ===================== */}
      <section id="about" className="relative py-24 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr,1.2fr] lg:gap-16 lg:items-center">
            <SectionReveal>
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-100 via-white to-blue-50 aspect-[4/5] shadow-xl">
                <div className="absolute inset-0 grid-pattern-light opacity-70" />
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 25%, rgba(59,130,246,0.25), transparent 60%)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center font-mono text-xs uppercase tracking-[0.12em] text-slate-400">
                    [ Porträt ]
                    <br />
                    <span className="text-slate-500">Denis Kaliberda</span>
                  </div>
                </div>
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-xl border border-slate-200 bg-white/95 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em] backdrop-blur">
                  <span className="text-slate-700">
                    Denis Kaliberda · Gründer
                  </span>
                  <span className="text-cyan-600">Einzelhand</span>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={150}>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                  Über mich
                </span>
                <h2 className="mt-4 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl">
                  Ein Partner,{" "}
                  <span className="gradient-text">der selber baut.</span>
                </h2>

                <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
                  <p>
                    Ich komme nicht aus der Agentur-Welt — ich habe 10 Jahre
                    Profi-Volleyball gespielt und dort gelernt, was tägliche
                    Disziplin, präzise Analyse und gemeinsames Besserwerden in
                    echten Ergebnissen bedeutet. Diese Arbeitsweise wende ich
                    heute auf digitale Probleme an.
                  </p>
                  <p>
                    Ich nehme wenige Kunden, arbeite persönlich und baue alles
                    selber — kein Account-Manager zwischen uns, keine
                    Zwischenlieferanten. Wenn Sie mich engagieren, engagieren
                    Sie einen Partner, der Code schreibt und mit Ihnen über das
                    Problem redet, bis es gelöst ist.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[
                    ["Erreichbar", "Direkt zu mir"],
                    ["Aktive Projekte", "7 KMU"],
                    ["Standort", "Berlin + Bayern"],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="rounded-xl border border-slate-200 bg-white px-4 py-3"
                    >
                      <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-slate-400">
                        {k}
                      </p>
                      <p className="mt-1 font-heading text-lg font-bold text-slate-900">
                        {v}
                      </p>
                    </div>
                  ))}
                </div>

                <Link
                  href="/ueber-mich"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
                >
                  Meine Geschichte im Detail
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <section className="relative bg-slate-50 py-24 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <SectionReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
              <Search className="h-3 w-3 text-blue-600" />
              Warum Sichtbarkeit · Fakten
            </span>
            <h2 className="mt-4 max-w-3xl font-heading text-3xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-4xl">
              Local SEO ist kein Kostenfaktor. Es ist ein{" "}
              <span className="gradient-text">Investment,</span> das Monat für
              Monat neue Kunden bringt.
            </h2>
          </SectionReveal>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {stats.map((s, i) => (
              <SectionReveal key={s.label} delay={i * 120}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                  <p className="font-heading text-6xl font-extrabold leading-none tracking-tight text-slate-900">
                    <span className="gradient-text">{s.value}</span>
                    <span className="text-slate-400">{s.suffix}</span>
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {s.label}
                  </p>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-400">
                    Quelle: {s.source}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section id="faq" className="relative py-24 md:py-28">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
          <SectionReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
              <MessageSquare className="h-3 w-3 text-blue-600" />
              Häufige Fragen
            </span>
            <h2 className="mt-4 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl">
              Was Kunden{" "}
              <span className="gradient-text">zuerst fragen.</span>
            </h2>
          </SectionReveal>

          <div className="mt-12 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {faqs.map((f, i) => (
              <SectionReveal key={f.q} delay={i * 60}>
                <details className="group px-6 py-5 open:bg-slate-50">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 list-none [&::-webkit-details-marker]:hidden">
                    <h3 className="font-heading text-base font-semibold text-slate-900 md:text-lg">
                      {f.q}
                    </h3>
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-slate-300 text-slate-500 transition-all group-open:rotate-45 group-open:border-blue-500 group-open:bg-blue-500 group-open:text-white">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className="h-4 w-4"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                    {f.a}
                  </p>
                </details>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="relative pb-24 md:pb-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <SectionReveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 via-navy-900 to-[#0b1a3a] px-8 py-14 text-white shadow-2xl sm:px-14 sm:py-20">
              <div className="absolute inset-0 grid-pattern opacity-70" />
              <div
                className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(59,130,246,0.35), transparent 60%)",
                }}
              />
              <div
                className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(6,182,212,0.28), transparent 60%)",
                }}
              />

              <div className="relative grid gap-10 md:grid-cols-[1.2fr,1fr] md:items-end">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-300 backdrop-blur">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </span>
                    Quick-Check · Kostenlos
                  </span>

                  <h2 className="mt-5 font-heading text-4xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
                    Welches Problem{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      darf ich
                    </span>{" "}
                    lösen?
                  </h2>

                  <p className="mt-5 max-w-md text-base leading-relaxed text-slate-300">
                    15 Minuten, keine Präsentation, keine Verkaufs-Tricks. Ich
                    schaue mir Ihre Situation an und sage ehrlich, ob ich der
                    richtige Partner bin — oder nicht.
                  </p>

                  <p className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-slate-400">
                    <span className="h-2 w-2 animate-pulse-ring rounded-full bg-emerald-400" />
                    Freie Plätze Mai · 2 von 4
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center justify-between rounded-lg bg-white px-5 py-4 text-sm font-semibold text-navy-900 shadow-lg transition-all hover:bg-slate-100"
                  >
                    Termin buchen
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center justify-between rounded-lg border border-white/20 bg-white/5 px-5 py-4 text-sm font-medium text-white backdrop-blur transition-all hover:bg-white/10"
                  >
                    Fragebogen ausfüllen
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <ul className="mt-4 space-y-1.5 border-t border-white/10 pt-4 text-xs text-slate-400">
                    {[
                      "15 Minuten · unverbindlich",
                      "Keine Standard-Präsentation",
                      "Ehrliche Einschätzung — auch wenn's Nein heißt",
                    ].map((t) => (
                      <li key={t} className="flex items-center gap-2">
                        <span className="text-cyan-400">—</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}

/* ---------- small inline helper ---------- */

function MetricCard({
  label,
  value,
  unit,
  description,
}: {
  label: string;
  value: string;
  unit: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
        {label}
      </p>
      <p className="mt-2 font-heading text-4xl font-extrabold leading-none tracking-tight text-slate-900">
        <span className="gradient-text">{value}</span>
        <span className="ml-1 text-lg font-semibold text-slate-400">
          {unit}
        </span>
      </p>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        {description}
      </p>
    </div>
  );
}
