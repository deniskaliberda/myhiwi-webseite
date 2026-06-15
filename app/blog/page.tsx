import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BtnPrimary } from "@/components/myhiwi/cta/BtnPrimary";
import { Card } from "@/components/myhiwi/card/Card";
import { Container } from "@/components/myhiwi/layout/Container";
import { CtaRow } from "@/components/myhiwi/cta/CtaRow";
import { Section } from "@/components/myhiwi/layout/Section";
import { SectionMark } from "@/components/myhiwi/layout/SectionMark";

export const metadata: Metadata = {
  title: "Blog — Praxis-Notizen zu Local SEO, Webdesign & KI für KMU",
  description:
    "Praxisnahe Notizen zu Local SEO, Google Business Profil, Webdesign und Direktbuchung — aus echten Projekten für lokale Betriebe.",
  keywords: [
    "SEO Blog",
    "Local SEO Tipps",
    "Google Business Profil",
    "Webdesign KMU",
    "KI-Automation",
  ],
  alternates: {
    canonical: "https://myhiwi.de/blog",
  },
};

const blogPosts = [
  {
    slug: "keyword-kannibalisierung",
    title: "Keyword-Kannibalisierung: der stille Killer Ihrer Top-10-Platzierungen",
    excerpt:
      "Wenn mehrere Seiten auf dasselbe Keyword ranken, klauen sie sich gegenseitig die Kraft — so haben wir es beim Sonnenhof gefixt.",
    date: "24. April 2026",
    readTime: "7 Min.",
    category: "Technisches SEO",
  },
  {
    slug: "next-js-fuer-lokale-websites",
    title: "Warum ich für KMU kein WordPress mehr baue",
    excerpt:
      "Ladezeit, Wartung, Sicherheit — drei Gründe, warum Next.js für Hotel- und Handwerker-Websites 2026 die bessere Wahl ist.",
    date: "24. April 2026",
    readTime: "8 Min.",
    category: "Webdesign",
  },
  {
    slug: "schema-org-fuer-hotels-und-kmu",
    title: "Schema.org — die unsichtbare Sprache, mit der Google Ihre Seite liest",
    excerpt:
      "Strukturierte Daten bringen Sterne, Preise und Öffnungszeiten direkt in die Suchergebnisse. Welche 4 Typen jeder KMU braucht.",
    date: "24. April 2026",
    readTime: "6 Min.",
    category: "Technisches SEO",
  },
  {
    slug: "google-ads-pmax-fuer-kmu",
    title: "Google Ads Performance Max — was 2026 für KMU funktioniert",
    excerpt:
      "Beim Sonnenhof führte PMax zu 0,30 € CPC. Die Setup-Reihenfolge, die drei häufigsten Pannen und wann es sich rechnet.",
    date: "24. April 2026",
    readTime: "7 Min.",
    category: "Google Ads",
  },
  {
    slug: "ota-provision-vs-direktbuchung",
    title: "Was Booking.com Sie wirklich kostet — und ab wann Direktbuchung rechnet",
    excerpt:
      "OTAs behalten 15–18 % jeder Buchung. Ein Rechenbeispiel für ein 30-Zimmer-Haus — und wann sich die eigene Strecke lohnt.",
    date: "24. April 2026",
    readTime: "6 Min.",
    category: "Hotellerie & FeWo",
  },
  {
    slug: "sichtbarkeitsindex-lesen",
    title: "Sichtbarkeitsindex — und warum nur Top-10 Geld bringt",
    excerpt:
      "Wie man einen SEO-Monatsreport wirklich liest, die 1-%-Regel ab Seite 2 und welche zwei Fragen jeder Inhaber stellen sollte.",
    date: "24. April 2026",
    readTime: "6 Min.",
    category: "SEO Reporting",
  },
  {
    slug: "google-business-profil",
    title: "Google Business Profil: unverzichtbar für lokale Unternehmen",
    excerpt:
      "Warum das Profil das wichtigste Werkzeug für lokale Sichtbarkeit ist — und wie Sie über Google Maps mehr Kunden gewinnen.",
    date: "11. Februar 2026",
    readTime: "6 Min.",
    category: "Local SEO",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* HERO */}
      <Section background="paper" padding="large">
        <Container className="max-w-[900px]">
          <SectionMark index="00" label="Blog · Praxis-Notizen" tone="accent" />
          <h1 className="mt-mh-4 mh-display-2 mh-hero-title">
            Praxis-Notizen aus echten{" "}
            <em className="mh-italic-accent">Projekten</em>.
          </h1>
          <p className="mt-mh-5 max-w-mh-text mh-body-large text-mh-text-secondary">
            Kurze Beiträge zu Local SEO, Google Business Profil, Webdesign und
            Direktbuchung — alles aus laufenden Projekten für lokale Betriebe.
          </p>
        </Container>
      </Section>

      {/* POSTS */}
      <Section background="subtle" padding="large">
        <Container className="max-w-[900px]">
          <ul className="grid gap-mh-4">
            {blogPosts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <Card interactive className="flex flex-col gap-mh-3">
                  <div className="flex flex-wrap items-center gap-x-mh-3 gap-y-mh-2">
                    <span className="mh-label-mono-sm rounded-mh-pill bg-mh-accent-soft px-mh-3 py-1 text-mh-accent">
                      {post.category}
                    </span>
                    <span className="mh-label-mono-sm text-mh-text-secondary">
                      {post.date} · {post.readTime}
                    </span>
                  </div>
                  <h2 className="mh-display-5 text-mh-text-primary transition-colors duration-mh-fast ease-mh-default group-hover:text-mh-accent">
                    {post.title}
                  </h2>
                  <p className="mh-body-small text-mh-text-secondary">
                    {post.excerpt}
                  </p>
                  <span className="mt-mh-1 inline-flex items-center gap-mh-2 mh-body-small font-semibold text-mh-accent">
                    Weiterlesen
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-mh-fast ease-mh-default group-hover:translate-x-0.5"
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  </span>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-mh-7 mh-body-small text-mh-text-secondary">
            Die ausführlichen Fälle stehen in den{" "}
            <Link
              href="/case-studies"
              className="font-semibold text-mh-accent hover:text-mh-accent-hover"
            >
              Case Studies →
            </Link>
          </p>
        </Container>
      </Section>

      {/* FINAL CTA */}
      <Section background="ink" padding="finalCta" finalCta>
        <Container>
          <div className="max-w-4xl">
            <SectionMark index="→" label="Nächster Schritt" tone="accent" onDark />
            <h2 className="mt-mh-4 mh-display-2">
              Fehlt ein Thema?{" "}
              <em className="mh-italic-accent text-mh-glow">Schreiben Sie mir.</em>
            </h2>
            <p className="mt-mh-5 max-w-mh-text mh-body-large text-mh-text-on-dark/80">
              Wenn Ihnen ein Artikel zu Ihrem konkreten Problem fehlt, schreiben
              Sie mir kurz — ich antworte persönlich.
            </p>
            <CtaRow
              className="mt-mh-7"
              microcopy={
                <span className="text-mh-text-on-dark/70">
                  kostenlos · unverbindlich · Sie reden direkt mit Denis
                </span>
              }
            >
              <BtnPrimary
                href="/kontakt"
                pill
                fullWidthOnMobile
                className="bg-mh-text-on-dark text-mh-ink-950 hover:bg-mh-glow"
              >
                Kostenlosen Digital-Check anfragen
              </BtnPrimary>
            </CtaRow>
          </div>
        </Container>
      </Section>
    </>
  );
}
