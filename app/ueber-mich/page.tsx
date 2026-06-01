import type { Metadata } from "next";
import Image from "next/image";
import {
  ExternalLink,
  Target,
  Wrench,
  RefreshCw,
  MessageCircle,
  MapPin,
  Mail,
} from "lucide-react";
import { BtnGhost } from "@/components/myhiwi/cta/BtnGhost";
import { BtnPrimary } from "@/components/myhiwi/cta/BtnPrimary";
import { Card } from "@/components/myhiwi/card/Card";
import { Container } from "@/components/myhiwi/layout/Container";
import { CtaRow } from "@/components/myhiwi/cta/CtaRow";
import { Section } from "@/components/myhiwi/layout/Section";
import { SectionMark } from "@/components/myhiwi/layout/SectionMark";

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

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Denis Kaliberda",
  jobTitle: "Gründer & Geschäftsführer, MyHiwi",
  description:
    "Ehemaliger Volleyball-Nationalspieler (Olympia 2012, WM-Bronze 2014), heute digitaler Partner für lokale Unternehmen.",
  url: "https://myhiwi.de/ueber-mich",
  image: "https://myhiwi.de/ueber-mich/portrait.jpg",
  worksFor: {
    "@type": "Organization",
    name: "Kaliberda Digital Intelligence UG (haftungsbeschränkt)",
    url: "https://myhiwi.de",
  },
  homeLocation: { "@type": "Place", name: "Ahrensfelde bei Berlin" },
  // Only true identity profiles belong in sameAs (not press articles).
  sameAs: pressLinks
    .filter((l) => l.name === "Wikipedia" || l.name === "Volleyball-Verband")
    .map((l) => l.url),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Start", item: "https://myhiwi.de" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Über mich",
      item: "https://myhiwi.de/ueber-mich",
    },
  ],
};

export default function UeberMichPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* HERO */}
      <Section background="paper" padding="large" className="overflow-hidden">
        <Container>
          <div className="grid gap-mh-8 lg:grid-cols-[1fr_minmax(360px,420px)] lg:items-center lg:gap-mh-10">
            <div className="min-w-0 max-w-[680px]">
              <SectionMark index="00" label="Über mich · persönlich" tone="accent" />
              <h1 className="mt-mh-4 mh-display-1 mh-hero-title">
                Denis <em className="mh-italic-accent">Kaliberda</em>.
              </h1>
              <p className="mt-mh-3 mh-body-large font-semibold text-mh-text-secondary">
                Gründer MyHiwi · Ex-Volleyball-Nationalspieler
              </p>
              <p className="mt-mh-5 max-w-mh-text mh-body-large text-mh-text-secondary">
                Zehn Jahre Profi-Volleyball. Olympia, WM-Bronze, über 200
                Länderspiele. Heute arbeite ich mit Hotels, Handwerkern,
                Fahrschulen und Architekturbüros an etwas anderem — digitalen
                Systemen, die ihre Arbeit einfacher machen.
              </p>
              <div className="mt-mh-6 flex flex-wrap items-center gap-x-mh-4 gap-y-mh-2 mh-body-small text-mh-text-secondary">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
                  Ahrensfelde · Berlin
                </span>
                <span className="hidden text-mh-divider sm:inline">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
                  Starnberg · Ammersee
                </span>
                <span className="hidden text-mh-divider sm:inline">·</span>
                <a
                  href="mailto:kontakt@myhiwi.de"
                  className="inline-flex items-center gap-1.5 font-semibold text-mh-accent transition-colors hover:text-mh-accent-hover"
                >
                  <Mail className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
                  kontakt@myhiwi.de
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-mh-xl border border-mh-divider bg-mh-subtle shadow-mh-card">
                <Image
                  src="/ueber-mich/portrait.jpg"
                  alt="Denis Kaliberda mit Volleyball vor dem Märkische-Allgemeine-Gebäude"
                  fill
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-x-4 bottom-4 rounded-mh-md border border-mh-divider bg-mh-paper/95 px-mh-4 py-mh-3 backdrop-blur">
                  <p className="mh-label-mono-sm text-mh-text-secondary">Seit</p>
                  <p className="mt-0.5 mh-display-5 text-mh-text-primary">
                    2024 digital · 1999 Sport
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* STORY */}
      <Section background="subtle" padding="large">
        <Container className="max-w-[900px]">
          <SectionMark index="01" label="Die Geschichte · vom Sport ins Digitale" />
          <h2 className="mt-mh-4 mh-display-3">
            Zehn Jahre auf Punkte. <em className="mh-italic-accent">Jetzt auf Systeme.</em>
          </h2>
          <div className="mt-mh-6 space-y-mh-4 mh-body-medium text-mh-text-secondary">
            <p>
              Ich habe mit acht angefangen, Volleyball zu spielen, und mit
              neunzehn den ersten Profi-Vertrag unterschrieben. Zehn Jahre in der
              Ersten Liga, dazu über zweihundert Spiele für Deutschland. London
              2012, Polen 2014, Slowenien 2017 — das sind nicht nur Stationen in
              einer Biografie, das sind hunderte Trainings-Tage mit klaren Zielen
              und messbaren Ergebnissen.
            </p>
            <p>
              Was der Leistungssport einem einbleut, steht in keinem
              Marketing-Buch: Sie lernen, Probleme in ihre Einzelteile zu
              zerlegen. Sie lernen, jeden Tag zu liefern, auch wenn es nicht
              läuft. Und Sie lernen vor allem eines — dass Technik und Disziplin
              zusammen mehr bewegen als Talent.
            </p>
            <p>
              MyHiwi ist der logische zweite Akt. Seit 2024 baue ich Websites,
              SEO-Strukturen, Buchungs- und Zahlungssysteme und inzwischen
              KI-Agents für lokale Unternehmen. Nicht als klassische Agentur,
              sondern als digitaler Partner, der im Kopf Ihres Betriebs mitdenkt
              und die passende Lösung selbst entwickelt.
            </p>
            <p>
              Mein Versprechen ist einfach: Wenn Sie mir schreiben, lesen das
              nicht zehn Vertriebs-Mitarbeiter, sondern ich. Wenn Sie ein Problem
              haben, höre ich mir das selbst an und überlege selbst, ob ich helfen
              kann. Mein Ziel ist nicht, einen weiteren Account zu schließen —
              sondern dass Ihr Betrieb digital gefunden wird und mehr Anfragen
              reinkommen. Wenn ich der falsche Partner für Sie bin, sage ich das
              im ersten Gespräch.
            </p>
          </div>
        </Container>
      </Section>

      {/* ACHIEVEMENTS */}
      <Section background="paper" padding="large">
        <Container>
          <SectionMark index="02" label="Sportlicher Hintergrund" />
          <h2 className="mt-mh-4 mh-display-3">
            Zahlen, die heute{" "}
            <em className="mh-italic-accent">nichts mehr beweisen müssen.</em>
          </h2>
          <p className="mt-mh-4 max-w-mh-text mh-body-medium text-mh-text-secondary">
            Der Sport ist vorbei, aber die Arbeitsweise bleibt. Die wichtigsten
            Stationen — wenn Sie ein bisschen googeln wollen, bevor wir sprechen.
          </p>

          <div className="mt-mh-7 grid gap-mh-4 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((a) => (
              <Card key={a.label} className="flex flex-col gap-mh-2">
                <span className="mh-label-mono-sm text-mh-text-secondary">
                  {a.label}
                </span>
                <span className="mh-display-4 text-mh-text-primary">{a.value}</span>
              </Card>
            ))}
          </div>

          <div className="mt-mh-7 flex flex-wrap items-center gap-mh-3 border-t border-mh-divider pt-mh-6">
            <p className="mh-label-mono-sm text-mh-text-secondary">Presse &amp; Quellen:</p>
            {pressLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-mh-pill border border-mh-divider bg-mh-subtle px-mh-3 py-1.5 mh-body-xs font-semibold text-mh-text-secondary transition-colors hover:border-mh-accent hover:text-mh-text-primary"
              >
                {link.name}
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
              </a>
            ))}
          </div>
        </Container>
      </Section>

      {/* PRINCIPLES */}
      <Section background="subtle" padding="large">
        <Container>
          <SectionMark index="03" label="Arbeitsweise" />
          <h2 className="mt-mh-4 mh-display-3">
            Vier Prinzipien,{" "}
            <em className="mh-italic-accent">die ich aus dem Sport mitnehme.</em>
          </h2>
          <p className="mt-mh-4 max-w-mh-text mh-body-medium text-mh-text-secondary">
            Die konkreten Dinge, die den Unterschied zwischen „Projekt geliefert"
            und „echte Veränderung im Betrieb" machen.
          </p>

          <div className="mt-mh-7 grid gap-mh-4 md:grid-cols-2">
            {principles.map((p) => (
              <Card key={p.title} as="article" interactive className="flex h-full flex-col gap-mh-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-mh-md bg-mh-accent-soft text-mh-accent">
                  <p.icon className="h-[22px] w-[22px]" strokeWidth={1.7} aria-hidden="true" />
                </span>
                <h3 className="mh-display-5">{p.title}</h3>
                <p className="mh-body-small text-mh-text-secondary">{p.text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* COMPANY FACTS + PROMISE */}
      <Section background="paper" padding="large">
        <Container className="max-w-[1000px]">
          <SectionMark index="04" label="Hinter den Kulissen" />
          <h2 className="mt-mh-4 mh-display-3">
            Wie MyHiwi <em className="mh-italic-accent">organisiert ist.</em>
          </h2>

          <Card tone="ink" className="mt-mh-6 flex flex-col gap-mh-3">
            <p className="mh-label-mono text-mh-glow">Mein Versprechen</p>
            <p className="mh-display-4 text-mh-text-on-dark">
              Sie reden direkt mit mir — nicht mit einem Account-Manager.
            </p>
            <p className="max-w-mh-text mh-body-medium text-mh-text-on-dark/85">
              Wenn Sie schreiben, lese ich. Wenn Sie ein Problem schildern,
              überlege ich selbst, ob und wie ich helfen kann. Mein Ziel ist nicht
              der nächste Vertragsabschluss — sondern dass Ihr Betrieb digital
              gefunden wird und mehr Anfragen bekommt.
            </p>
          </Card>

          <div className="mt-mh-6 grid gap-mh-5 md:grid-cols-3">
            <div>
              <p className="mh-label-mono-sm text-mh-text-secondary">Unternehmen</p>
              <p className="mt-mh-2 mh-body-medium font-semibold text-mh-text-primary">
                Kaliberda Digital Intelligence UG (haftungsbeschränkt)
              </p>
              <p className="mt-1 mh-body-small text-mh-text-secondary">
                HRB 22263 FF · Marke MyHiwi
              </p>
            </div>
            <div>
              <p className="mh-label-mono-sm text-mh-text-secondary">Standorte</p>
              <p className="mt-mh-2 mh-body-medium font-semibold text-mh-text-primary">
                Ahrensfelde bei Berlin
              </p>
              <p className="mt-0.5 mh-body-medium font-semibold text-mh-text-primary">
                Starnberg / Ammersee
              </p>
            </div>
            <div>
              <p className="mh-label-mono-sm text-mh-text-secondary">Tech-Stack</p>
              <p className="mt-mh-2 mh-body-medium font-semibold text-mh-text-primary">
                Next.js · Supabase · Stripe · Vercel
              </p>
              <p className="mt-1 mh-body-small text-mh-text-secondary">
                Plus Claude / OpenAI für KI-Workflows
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* FINAL CTA */}
      <Section background="ink" padding="finalCta" finalCta>
        <Container>
          <div className="max-w-4xl">
            <SectionMark index="05" label="Kennenlernen" tone="accent" onDark />
            <h2 className="mt-mh-4 mh-display-2">
              Sprechen wir{" "}
              <em className="mh-italic-accent text-mh-glow">persönlich?</em>
            </h2>
            <p className="mt-mh-5 max-w-mh-text mh-body-large text-mh-text-on-dark/80">
              15 Minuten, keine Präsentation. Ich schaue mir Ihre Situation an,
              wir prüfen ob es passt — und wenn nicht, empfehle ich Ihnen jemanden,
              bei dem es besser passt.
            </p>
            <CtaRow className="mt-mh-7">
              <BtnPrimary
                href="/kontakt"
                pill
                fullWidthOnMobile
                className="bg-mh-text-on-dark text-mh-ink-950 hover:bg-mh-glow"
              >
                Kostenlosen Digital-Check anfragen
              </BtnPrimary>
              <BtnGhost
                href="/case-studies"
                fullWidthOnMobile
                className="border-mh-text-on-dark/35 text-mh-text-on-dark hover:bg-mh-text-on-dark hover:text-mh-ink-950"
              >
                Meine Projekte ansehen
              </BtnGhost>
            </CtaRow>
          </div>
        </Container>
      </Section>
    </>
  );
}
