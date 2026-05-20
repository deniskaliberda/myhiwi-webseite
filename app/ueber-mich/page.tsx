import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ExternalLink,
  Target,
  Wrench,
  RefreshCw,
  MessageCircle,
  Award,
  MapPin,
  Mail,
} from "lucide-react";
import SectionReveal from "@/components/shared/SectionReveal";

export const metadata: Metadata = {
  title: "Über mich — Denis Kaliberda, Gründer von MyHiwi",
  description:
    "Ex-Volleyball-Nationalspieler, Olympia-Teilnehmer 2012, WM-Bronze 2014 — und heute digitaler Partner für lokale Unternehmen. Meine Geschichte und wie ich heute arbeite.",
  alternates: {
    canonical: "https://myhiwi.de/ueber-mich",
  },
};

const achievements = [
  { label: "Länderspiele", value: "200+" },
  { label: "Olympia Teilnehmer", value: "London 2012" },
  { label: "WM · Bronze", value: "Polen 2014" },
  { label: "EM · Silber", value: "Polen/Slowenien 2017" },
];

const pressLinks = [
  { name: "Wikipedia", url: "https://de.wikipedia.org/wiki/Denis_Kaliberda" },
  {
    name: "Volleyball-Verband",
    url: "https://www.volleyball-verband.de/de/kader/spieler--amp--trainer/denis-kaliberda/",
  },
  {
    name: "Tagesspiegel",
    url: "https://www.tagesspiegel.de/sport/vieles-fehlt-um-gut-volleyball-spielen-zu-konnen-denis-kaliberda-ist-der-hoffnungstrager-der-netzhoppers-13148944.html",
  },
  {
    name: "Süddeutsche Zeitung",
    url: "https://www.sueddeutsche.de/sport/kaliberda-herrsching-volleyball-nationalmannschaft-li.3330428",
  },
];

const principles = [
  {
    icon: Target,
    title: "Probleme analysieren, nicht Produkte anbieten.",
    text: "Im Volleyball fing jede Saison mit Gegner-Analyse an — nie mit dem Angriff. Genauso in der digitalen Arbeit: erst verstehe ich Ihr Geschäft und die echten Engpässe, dann bauen wir.",
  },
  {
    icon: Wrench,
    title: "Selber bauen, nicht weiter-verkaufen.",
    text: "Ich liefere Code, nicht Lizenzen. Was ich für Sie baue, gehört Ihnen — kein SaaS-Dauer-Abo, kein Drittanbieter zwischen uns.",
  },
  {
    icon: RefreshCw,
    title: "Dranbleiben, nicht abliefern und weg.",
    text: "Eine Saison besteht aus täglichem Training, nicht einem einzigen Spiel. Digitale Projekte sind genauso — der Wert entsteht erst durch monatliche, kontinuierliche Arbeit.",
  },
  {
    icon: MessageCircle,
    title: "Ehrlich bleiben, auch wenn's unbequem ist.",
    text: "Wenn ich nicht der richtige Partner bin, sage ich das im Erstgespräch. 15 Minuten Klarheit sind mehr wert als drei Monate mit falscher Richtung.",
  },
];

export default function UeberMichPage() {
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

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr,420px] lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-mono uppercase tracking-[0.14em] text-blue-700">
                Über mich · Persönlich
              </span>

              <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.02] tracking-tight text-slate-900 sm:text-5xl lg:text-[64px]">
                Denis{" "}
                <span className="gradient-text">Kaliberda.</span>
              </h1>
              <p className="mt-4 text-lg font-medium text-slate-500">
                Gründer MyHiwi UG · Ex-Volleyball-Nationalspieler
              </p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                Zehn Jahre Profi-Volleyball. Olympia, WM-Bronze, über 200
                Länderspiele. Heute arbeite ich mit Hotels, Handwerkern,
                Fahrschulen und Architekturbüros an etwas anderem — digitalen
                Systemen, die ihre Arbeit einfacher machen.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  Ahrensfelde · Berlin
                </span>
                <span className="hidden text-slate-300 sm:inline">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  Starnberg · Ammersee
                </span>
                <span className="hidden text-slate-300 sm:inline">·</span>
                <a
                  href="mailto:kontakt@myhiwi.de"
                  className="inline-flex items-center gap-1.5 text-blue-600 transition-colors hover:text-blue-700"
                >
                  <Mail className="h-3.5 w-3.5" />
                  kontakt@myhiwi.de
                </a>
              </div>
            </div>

            {/* Portrait card */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 aspect-[4/5] shadow-xl">
                <Image
                  src="/ueber-mich/portrait.jpg"
                  alt="Denis Kaliberda mit Volleyball vor dem Märkische-Allgemeine-Gebäude"
                  fill
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-x-4 bottom-4 rounded-xl border border-slate-200 bg-white/95 px-4 py-3 backdrop-blur">
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-slate-400">
                    Seit
                  </p>
                  <p className="mt-0.5 font-heading text-lg font-bold text-slate-900">
                    2024 digital · 1999 Sport
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="relative bg-slate-50 py-20 md:py-24">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
          <SectionReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
              Die Geschichte · vom Sport ins Digitale
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Zehn Jahre auf Punkte.{" "}
              <span className="gradient-text">Jetzt auf Systeme.</span>
            </h2>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-600 md:text-lg">
              <p>
                Ich habe mit acht angefangen, Volleyball zu spielen, und mit
                neunzehn den ersten Profi-Vertrag unterschrieben. Zehn Jahre in
                der Ersten Liga, dazu über zweihundert Spiele für Deutschland.
                London 2012, Polen 2014, Slowenien 2017 — das sind nicht nur
                Stationen in einer Biografie, das sind hunderte Trainings-Tage
                mit klaren Zielen und messbaren Ergebnissen.
              </p>
              <p>
                Was der Leistungssport einem einbleut, steht in keinem
                Marketing-Buch: Sie lernen, Probleme in ihre Einzelteile zu
                zerlegen. Sie lernen, jeden Tag zu liefern, auch wenn es nicht
                läuft. Und Sie lernen vor allem eines — dass Technik und
                Disziplin zusammen mehr bewegen als Talent.
              </p>
              <p>
                MyHiwi ist der logische zweite Akt. Seit 2024 baue ich
                Websites, SEO-Strukturen, Buchungs- und Zahlungssysteme und
                inzwischen KI-Agents für lokale Unternehmen. Nicht als
                klassische Agentur, sondern als digitaler Partner, der im Kopf
                Ihres Betriebs mitdenkt und die passende Lösung selbst
                entwickelt.
              </p>
              <p>
                Mein Versprechen ist einfach: Wenn Sie mir schreiben, lesen das
                nicht zehn Vertriebs-Mitarbeiter, sondern ich. Wenn Sie ein
                Problem haben, höre ich mir das selbst an und überlege selbst,
                ob ich helfen kann. Mein Ziel ist nicht, einen weiteren
                Account zu schließen — sondern dass Ihr Betrieb digital
                gefunden wird und mehr Anfragen reinkommen. Wenn ich der
                falsche Partner für Sie bin, sage ich das im ersten Gespräch.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ================= ACHIEVEMENTS ================= */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <SectionReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
              <Award className="h-3 w-3 text-blue-600" />
              Sportlicher Hintergrund
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Zahlen, die heute{" "}
              <span className="gradient-text">nichts mehr beweisen müssen.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              Der Sport ist vorbei, aber die Arbeitsweise bleibt. Die wichtigsten
              Stationen — wenn Sie ein bisschen googeln wollen, bevor wir
              sprechen.
            </p>
          </SectionReveal>

          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {achievements.map((a, i) => (
              <SectionReveal key={a.label} delay={i * 80}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
                    {a.label}
                  </p>
                  <p className="mt-3 font-heading text-2xl font-extrabold leading-tight tracking-tight text-slate-900">
                    <span className="gradient-text">{a.value}</span>
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal>
            <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-slate-200 pt-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500">
                Presse & Quellen:
              </p>
              {pressLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 transition-all hover:border-slate-300 hover:text-slate-900"
                >
                  {link.name}
                  <ExternalLink className="h-3 w-3" />
                </a>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ================= PRINCIPLES ================= */}
      <section className="relative bg-slate-50 py-20 md:py-24">
        <div className="absolute inset-0 grid-pattern-light opacity-50 pointer-events-none" />
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Vier Prinzipien,{" "}
              <span className="gradient-text">die ich aus dem Sport mitnehme.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              Die konkreten Dinge, die den Unterschied zwischen „Projekt
              geliefert" und „echte Veränderung im Betrieb" machen.
            </p>
          </SectionReveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {principles.map((p, i) => (
              <SectionReveal key={p.title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-7">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold leading-tight tracking-tight text-slate-900">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {p.text}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COMPANY FACTS ================= */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <SectionReveal>
            <div className="rounded-2xl border border-slate-200 bg-white p-8 md:p-12">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-blue-700">
                Hinter den Kulissen
              </span>
              <h2 className="mt-5 font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                Wie MyHiwi{" "}
                <span className="gradient-text">organisiert ist.</span>
              </h2>

              {/* Personal promise — prominent card */}
              <div className="mt-8 relative overflow-hidden rounded-2xl border border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-7 md:p-9">
                <div
                  className="absolute -top-16 -right-16 h-48 w-48 rounded-full blur-3xl opacity-60 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(6,182,212,0.18), transparent 65%)",
                  }}
                />
                <p className="relative font-mono text-[10px] uppercase tracking-[0.14em] text-cyan-700">
                  Mein Versprechen
                </p>
                <p className="relative mt-3 font-heading text-2xl font-bold leading-snug tracking-tight text-slate-900 sm:text-[26px]">
                  Sie reden direkt mit mir — nicht mit einem Account-Manager.
                </p>
                <p className="relative mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
                  Wenn Sie schreiben, lese ich. Wenn Sie ein Problem schildern,
                  überlege ich selbst, ob und wie ich helfen kann. Mein Ziel
                  ist nicht der nächste Vertragsabschluss — sondern dass Ihr
                  Betrieb digital gefunden wird und mehr Anfragen bekommt.
                </p>
              </div>

              {/* Operational facts */}
              <div className="mt-6 grid gap-6 md:grid-cols-3">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
                    Unternehmen
                  </p>
                  <p className="mt-2 text-base font-medium text-slate-900">
                    MyHiwi UG (haftungsbeschränkt)
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    HRB 22263 FF · gegründet 2026
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
                    Standorte
                  </p>
                  <p className="mt-2 text-base font-medium text-slate-900">
                    Ahrensfelde bei Berlin
                  </p>
                  <p className="mt-0.5 text-base font-medium text-slate-900">
                    Starnberg / Ammersee
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
                    Tech-Stack
                  </p>
                  <p className="mt-2 text-base font-medium text-slate-900">
                    Next.js · Supabase · Stripe · Vercel
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Plus Claude / OpenAI für KI-Workflows
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ================= CTA ================= */}
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

              <div className="relative grid gap-10 md:grid-cols-[1.2fr,1fr] md:items-end">
                <div>
                  <h2 className="font-heading text-4xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-5xl">
                    Sprechen wir{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      persönlich?
                    </span>
                  </h2>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-slate-300">
                    15 Minuten, keine Präsentation. Ich schaue mir Ihre
                    Situation an, wir prüfen ob es passt — und wenn nicht,
                    empfehle ich Ihnen jemanden, bei dem es besser passt.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center justify-between rounded-lg bg-white px-5 py-4 text-sm font-semibold text-navy-900 shadow-lg transition-all hover:bg-slate-100"
                  >
                    Quick-Check anfragen
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center justify-between rounded-lg border border-white/20 bg-white/5 px-5 py-4 text-sm font-medium text-white backdrop-blur transition-all hover:bg-white/10"
                  >
                    Meine Projekte ansehen
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
