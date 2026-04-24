import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  Bot,
  Camera,
  FileText,
  Clock,
  RefreshCw,
  MessageCircle,
  Hammer,
  Sparkles,
  Target,
  Check,
} from "lucide-react";
import SectionReveal from "@/components/shared/SectionReveal";
import Glossary from "@/components/Glossary";

export const metadata: Metadata = {
  title:
    "Formazin Architekturbüro — KI-Agent als digitaler Partner | MyHiwi Case Study",
  description:
    "Nicht eine einmalige Webseite — sondern digitaler Partner, der Prozesse im Architekturbüro automatisiert. Erste Baustelle: KI-Agent für Bauprotokolle, Pilot Mai 2026.",
  alternates: {
    canonical: "https://myhiwi.de/case-studies/formazin",
  },
};

const principles = [
  {
    icon: Target,
    title: "Engpässe finden.",
    text: "Jeden Monat der gleiche Prozess-Review: wo gehen Stunden verloren? Wo ist der nächste Hebel? Nicht raten — messen.",
  },
  {
    icon: Hammer,
    title: "Bauen.",
    text: "Kein Standard-Tool einkaufen, das 70 % tut. Einen passenden KI-Agent oder eine kleine App bauen, die genau zu dem Workflow passt.",
  },
  {
    icon: RefreshCw,
    title: "Integrieren.",
    text: "Der Agent landet nicht in einer SaaS-Insel. Er liest vorhandene Systeme, schreibt ins bestehende Archiv, nutzt vorhandene Vorlagen.",
  },
  {
    icon: MessageCircle,
    title: "Weiterentwickeln.",
    text: "Jede Woche Feedback. Jede zweite Woche ein neues Feature oder Fix. Das Büro wächst digital mit, ohne dass jemand ein SaaS erlernt.",
  },
];

const agentFlow = [
  {
    icon: Camera,
    title: "Foto + Sprachnotiz",
    text: "Nach der Baustelle schickt der Architekt Fotos und eine kurze Sprachnotiz — per WhatsApp oder App.",
  },
  {
    icon: Bot,
    title: "KI-Agent strukturiert",
    text: "Der Agent ordnet Fotos Gewerken zu, transkribiert die Notiz, erkennt Mängel, Fristen und Zuständigkeiten.",
  },
  {
    icon: FileText,
    title: "Protokoll generiert",
    text: "Ausgabe: ein strukturiertes Bauprotokoll im Büro-Layout — PDF + Editor-Version, bereit für Freigabe.",
  },
  {
    icon: Clock,
    title: "Minuten statt Stunden",
    text: "Was vorher 2–3 Stunden abendliches Tippen gekostet hat, dauert jetzt ein paar Minuten Review.",
  },
];

const pipeline = [
  "Angebots-Erstellung · KI-unterstützte Texte aus Projekt-Briefing",
  "Rechnungs-Entwurf · pro Gewerk und Bauabschnitt, inkl. Anhängen",
  "Bauherren-Kommunikation · strukturierte Statusberichte automatisch",
  "Ausschreibungs-Vergleich · Mengen-Auszüge aus PDFs",
  "Archiv-Suche · semantische Suche über alte Projekte",
  "Website & Local SEO · wenn Bedarf entsteht, separater Baustein",
];

export default function FormazinCaseStudy() {
  return (
    <div className="bg-white text-slate-900">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="absolute inset-0 grid-pattern-light mask-radial pointer-events-none" />
        <div
          className="absolute top-[-140px] right-[-100px] h-[500px] w-[500px] rounded-full blur-3xl opacity-60 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.18), transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-[-140px] left-[-100px] h-[400px] w-[400px] rounded-full blur-3xl opacity-50 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.15), transparent 60%)",
          }}
        />

        <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-blue-600"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Alle Case Studies
          </Link>

          <div className="mt-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-mono uppercase tracking-[0.14em] text-blue-700">
              <Bot className="h-3 w-3" />
              Case №03 · KI-Lösungen · Partnerschaft
            </span>

            <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.02] tracking-tight text-slate-900 sm:text-5xl lg:text-[60px]">
              <span className="gradient-text">Formazin.</span>
              <br />
              Digitaler Partner, <br />
              nicht einmalige Webseite.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Formazin ist ein Architekturbüro. Was hier entstanden ist, ist
              kein klassisches Website-Projekt — sondern eine laufende
              Partnerschaft, die Prozesse im Büro mit{" "}
              <Glossary term="ki-agent">KI-Agents</Glossary>{" "}
              nach und nach automatisiert. Erste Baustelle: Bauprotokolle, die
              sich selber schreiben.
            </p>

            <p className="mt-4 max-w-2xl text-base font-mono uppercase tracking-[0.12em] text-slate-500">
              Pilot-Start · Mai 2026 · Pauschal ab 49 € / Monat pro Use-Case
            </p>
          </div>
        </div>
      </section>

      {/* ================= 4 PRINCIPLES ================= */}
      <section className="relative bg-slate-50 py-20 md:py-24">
        <div className="absolute inset-0 grid-pattern-light opacity-50 pointer-events-none" />
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
          <SectionReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
              <Sparkles className="h-3 w-3 text-blue-600" />
              Arbeitsweise · vier Prinzipien
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              So sieht{" "}
              <span className="gradient-text">digitale Partnerschaft</span> aus.
            </h2>
          </SectionReveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <SectionReveal key={p.title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold tracking-tight text-slate-900">
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

      {/* ================= AUSGANGSLAGE ================= */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
          <SectionReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
              <Target className="h-3 w-3 text-blue-600" />
              Erste Baustelle · Bauprotokoll
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Zwei bis drei Stunden.{" "}
              <span className="gradient-text">Jeden Abend.</span>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                Nach jedem Baustellen-Tag sitzt die Architektin abends im Büro
                und schreibt Bauprotokolle: aus dem Gedächtnis, aus
                Handy-Fotos, aus handschriftlichen Notizen. Strukturiert nach
                Gewerken, Mängeln, Fristen, Nachträgen. Korrekt formuliert,
                weil juristisch relevant.
              </p>
              <p>
                Zwei bis drei Stunden pro Abend. Jeden Abend. Das ist die
                Arbeit, nach der eigentlich Feierabend wäre — und das ist die
                Arbeit, die Fehler produziert, wenn man müde ist.
              </p>
              <p>
                Kein Standard-Tool hilft wirklich. Die bestehenden
                Bauprotokoll-Apps sind entweder zu starr oder zu generisch.
                Was fehlt: ein Agent, der das Büro-Format kennt, den
                Projekt-Kontext mitbringt und aus Foto + Stimme fertigen
                Bericht macht.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ================= AGENT FLOW ================= */}
      <section className="relative bg-slate-50 py-20 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <SectionReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
              <Bot className="h-3 w-3 text-blue-600" />
              Agent · So funktioniert er
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Von der Baustelle zum{" "}
              <span className="gradient-text">fertigen Protokoll.</span>
            </h2>
          </SectionReveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {agentFlow.map((step, i) => (
              <SectionReveal key={step.title} delay={i * 100}>
                <div className="relative h-full rounded-2xl border border-slate-200 bg-white p-6">
                  {i < agentFlow.length - 1 && (
                    <ArrowRight className="absolute right-[-16px] top-10 hidden h-5 w-5 text-blue-400 lg:block" />
                  )}
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow">
                    <step.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold tracking-tight text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {step.text}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PIPELINE ================= */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <SectionReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
              <RefreshCw className="h-3 w-3 text-blue-600" />
              Pipeline · was als nächstes kommt
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Der Agent ist nur der Anfang.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              Sobald ein Prozess automatisiert ist, wird der nächste Engpass
              sichtbar. Das ist der Unterschied zwischen einmaliger Lieferung
              und digitaler Partnerschaft.
            </p>
          </SectionReveal>

          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {pipeline.map((p, i) => (
              <SectionReveal key={p} delay={i * 60}>
                <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-cyan-500 text-[10px] font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-slate-700">{p}</span>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MODEL ================= */}
      <section className="relative bg-slate-50 py-20 md:py-24">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
          <SectionReveal>
            <div className="rounded-2xl border border-slate-200 bg-white p-8 md:p-12">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-blue-700">
                Modell · Wie wir abrechnen
              </span>
              <h2 className="mt-5 font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                Pauschale pro Use-Case.{" "}
                <span className="gradient-text">Monatlich. Flexibel.</span>
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
                <p>
                  Jeder KI-Use-Case läuft als eigener Flat-Rate-Baustein —
                  transparent im Preis, monatlich kündbar, nach Büro-Größe
                  skaliert. Einstieg ab 49 € / Monat pro Agent.
                </p>
                <p>
                  Ab dem ersten Tag kein SaaS-Abhängigkeits-Vertrag,
                  sondern eine klare Einheit: „Bauprotokoll ab jetzt
                  automatisch." Funktioniert der Agent nicht — stellt man ihn
                  ab. So einfach.
                </p>
                <p>
                  Sobald mehrere Agents laufen, greift ein Paket-Rabatt. Und
                  aus der Pauschal-Miete wird echte Partnerschaft:
                  Priorisierung im Backlog, Preview-Zugang zu neuen
                  Funktionen, monatlicher Prozess-Review.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 text-center">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Wo verlieren Sie{" "}
              <span className="gradient-text">Stunden pro Woche?</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Wenn Sie einen wiederkehrenden Prozess haben, der jede Woche
              Zeit frisst — erzählen Sie mir davon. Ich schaue mir an, ob ein
              Agent das automatisieren kann, und wenn ja: was er kosten würde.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/kontakt"
                className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition-all hover:from-blue-700 hover:to-blue-600"
              >
                Kostenloses Erstgespräch
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-medium text-slate-700 transition-all hover:border-slate-400"
              >
                Weitere Case Studies
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
