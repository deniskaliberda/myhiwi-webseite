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
      "Hotel am Ammersee — bei Google kaum sichtbar, rund 5 Online-Anfragen pro Monat trotz voller Saison-Auslastung offline.",
    solution:
      "Next.js-Website (DE + EN), Local-SEO-Fundament, Google Business Profil optimiert, Google Ads Betreuung.",
    result: "5 → 41 Anfragen / Monat · 28 Keywords in Top-10, davon 8 auf Platz 1",
    accent: "from-blue-500 to-blue-600",
    icon: Globe,
  },
  {
    field: "Automatisierung",
    client: "Mr. Sherman · Tanzstudio Berlin",
    problem:
      "Vier Mitgliedschafts-Tiers, monatliche Abbuchungen, Schüler-Portal, Trainer-Dashboard — keine Standard-Software konnte das abbilden.",
    solution:
      "Komplette Buchungs- und Zahlungs-Plattform auf Next.js + Supabase + Stripe: 4 Membership-Tiers, Trainer-Portal, Admin-CRM, Meta-Ads mit Server-Side CAPI-Tracking.",
    result: "205 Leads / Monat · 7,28 € CPL (75 % unter Branchen-Benchmark) · Tiers 49 € – 1.020 € vollständig automatisiert",
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
    title: "Wenige Kunden, intensiv.",
    text: "Ich nehme maximal 12 aktive Kunden. Damit ich weiß wie Ihr Betrieb atmet, nicht nur einen Slack-Channel habe.",
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

/* ---------- Tier data (public 3-tier model from CLAUDE.md) ---------- */

const tiers = [
  {
    id: "sichtbar",
    name: "Sichtbar",
    tagline: "Einstieg ohne Festlegung.",
    price: "299",
    unit: "€ / Monat",
    setup: "648 € einmalige Einrichtung",
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
    tagline: "Unser Standard-Budget für wachsende Betriebe.",
    price: "599",
    unit: "€ / Monat",
    setup: "648 € einmalige Einrichtung",
    term: "12 Monate Mindestlaufzeit",
    audience: "Ferienwohnungen, Fahrschulen, Friseure, Praxen",
    features: [
      "Alles aus Sichtbar",
      "Laufende SEO — Content + Technik + Backlinks",
      "Google Ads inklusive · bis 1.000 € Werbebudget",
      "1 Blog-Artikel pro Monat",
      "Monatlicher Strategie-Call",
      "Priorisierter Support",
    ],
    highlight: true,
    cta: "Wachstum starten",
  },
  {
    id: "dominanz",
    name: "Dominanz",
    tagline: "Für alle, die Marktführer werden wollen.",
    price: "999",
    unit: "€ / Monat",
    setup: "1.139 € einmalige Einrichtung",
    term: "12 Monate Mindestlaufzeit",
    audience: "Hotels, Zahnarztpraxen, Kanzleien, regionale Ketten",
    features: [
      "Alles aus Wachstum",
      "Google Ads erweitert · 1.000–3.000 € Budget",
      "Wettbewerber-Monitoring · A/B-Tests",
      "Conversion-Optimierung auf der Website",
      "Quartals-Workshop vor Ort oder via Zoom",
      "Branchen-Spezialisierung (Medizin, Recht, Premium)",
    ],
    highlight: false,
    cta: "Dominieren",
  },
];

const addons = [
  {
    icon: CalendarClock,
    name: "Buchungssystem",
    price: "ab 2.990 € · 49 €/Mo",
    keyword: "Direktbuchung ohne OTA-Provision",
  },
  {
    icon: CreditCard,
    name: "Zahlungssystem",
    price: "ab 1.490 € · 29 €/Mo",
    keyword: "Stripe · Mollie · SEPA",
  },
  {
    icon: Bot,
    name: "KI-Agent",
    price: "ab 49 € / Mo pro Use-Case",
    keyword: "Dokumente · Antworten · Protokolle",
  },
  {
    icon: Workflow,
    name: "Workflow-Automation",
    price: "individuell",
    keyword: "CRM · E-Mail · interne Tools",
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
    a: "Ich arbeite mit maximal 12 Kunden parallel, persönlich und fortlaufend. Sie bekommen keinen Account-Manager, sondern einen digitalen Partner, der Probleme erkennt und die passende Lösung selbst baut — von der Website bis zum KI-Agenten. Keine Zwischenschichten, keine Timesheets, kein Agentur-Theater.",
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
    a: "Die Website ist Teil der drei Tiers (Sichtbar · Wachstum · Dominanz) ab 299 € / Monat inklusive Hosting, Pflege und SEO. Einmalige Einrichtung 648–1.139 €. Standalone-Websites ohne Betreuung baue ich nicht — der laufende Erfolg interessiert mich mehr als der einmalige Verkauf.",
  },
  {
    q: "Bauen Sie auch KI-Lösungen für mein Unternehmen?",
    a: "Ja. Typische Use-Cases sind Dokumenten-Automation (Protokolle, Angebote, Rechnungen), intelligente Antwort-Systeme für Kunden-Kommunikation und fach-spezifische Agents. Aktuell läuft der Pilot eines Bauprotokoll-KI-Agents für ein Architekturbüro. Der Einstieg liegt bei 49 € / Monat pro Use-Case, individuell bewertet.",
  },
  {
    q: "Wie lange dauert ein Projekt?",
    a: "Ein Erstgespräch dauert 15 Minuten. Ein Audit 1–2 Wochen. Eine neue Website geht nach 3–4 Wochen live. Größere Systeme (Buchung, Zahlung, KI-Agent) brauchen 4–8 Wochen vom Kick-off bis zum produktiven Einsatz. Die laufende Betreuung hat keinen Endpunkt — sie wächst mit dem Unternehmen.",
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
                  Kostenloses Erstgespräch
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
                  "Max. 12 Kunden · persönlich",
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
                    Anfragen / Monat
                  </p>
                  <p className="mt-0.5 font-heading text-xl font-bold text-slate-900">
                    5 <span className="text-slate-400">→</span>{" "}
                    <span className="gradient-text">41</span>
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
            <div className="grid gap-8 md:grid-cols-[1.3fr,1fr] md:items-end">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
                  <Sparkles className="h-3 w-3 text-blue-600" />
                  Was ich baue · 3 Kompetenzfelder
                </span>
                <h2 className="mt-4 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl">
                  Sichtbarkeit. Automatisierung.{" "}
                  <span className="gradient-text">KI.</span>
                </h2>
              </div>
              <p className="max-w-md text-base leading-relaxed text-slate-600">
                Keine fertigen Produkte — drei Felder, in denen ich tief genug
                bin, um echte Probleme zu lösen. Was Sie am Ende bekommen, hängt
                von Ihrem konkreten Engpass ab.
              </p>
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
                Der Sonnenhof Herrsching bekam vor dem Relaunch rund 5 Online-Anfragen
                pro Monat. Drei Monate später laufen 41 rein — 28 Keywords stehen
                in den Top-10, 8 davon auf Platz 1. Ziehen Sie den Slider.
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
                  label="Anfragen · Monat"
                  value="8"
                  unit="×"
                  description="Von rund 5 auf 41 Online-Anfragen pro Monat — über organische Suche und Google Ads."
                />
                <MetricCard
                  label="Top-10 Keywords"
                  value="28"
                  unit="Ø"
                  description="Lokale Suchbegriffe auf Google-Seite 1 — 8 davon auf Platz 1."
                />
                <MetricCard
                  label="Google Ads · CPC"
                  value="0,30"
                  unit="€"
                  description="Cost-per-Click bei 2.242 Klicks pro Monat · Optimierungsscore 86 %."
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
            <div className="mt-10 text-center">
              <Link
                href="/blog/sonnenhof-case-study"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
              >
                Vollständige Case Study lesen
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
          <SectionReveal>
            <div className="grid gap-8 md:grid-cols-[1fr,1fr] md:items-end">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
                  <ShieldCheck className="h-3 w-3 text-blue-600" />
                  Einstiegsbudgets · modular erweiterbar
                </span>
                <h2 className="mt-4 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl">
                  Drei Budget-Stufen.
                  <br />
                  Wachsen mit Ihrem{" "}
                  <span className="gradient-text">Bedarf.</span>
                </h2>
              </div>
              <p className="max-w-md text-base leading-relaxed text-slate-600 md:ml-auto">
                Die Tiers sind Einstiegs-Budgets für die Säule Sichtbarkeit.
                Buchungssystem, Zahlungsabwicklung, KI-Agents und
                Workflow-Automation kommen als Module nach Bedarf dazu.
              </p>
            </div>
          </SectionReveal>

          <div className="mt-14 grid items-stretch gap-5 md:grid-cols-3">
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

          {/* Add-Ons */}
          <SectionReveal>
            <div className="mt-14 rounded-2xl border border-slate-200 bg-white p-8">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">
                    Module · modular oben drauf
                  </p>
                  <h3 className="mt-2 font-heading text-2xl font-bold tracking-tight text-slate-900">
                    Erweiterungen je nach Engpass.
                  </h3>
                </div>
                <p className="max-w-md text-sm text-slate-600">
                  Die meisten Kunden starten mit der Sichtbarkeits-Säule und
                  ergänzen ein Modul, sobald das Problem sichtbar wird.
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
                    ["Kunden-Limit", "Max. 12"],
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
                    Erstgespräch · Kostenlos
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
