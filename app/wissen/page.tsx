import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/myhiwi/card/Card";
import { Container } from "@/components/myhiwi/layout/Container";
import { Section } from "@/components/myhiwi/layout/Section";
import { SectionMark } from "@/components/myhiwi/layout/SectionMark";

export const metadata: Metadata = {
  title: "Wissen — ehrliche Antworten für lokale Betriebe",
  description:
    "Kurze, ehrliche Antworten auf die Fragen, die lokale Betriebe vor dem nächsten digitalen Schritt stellen: Kosten, Google Ads, Website vs. Profil, Direktbuchung.",
  alternates: { canonical: "https://myhiwi.de/wissen" },
};

const articles = [
  {
    href: "/wissen/was-kostet-website-handwerker",
    title: "Was kostet eine Website für Handwerker?",
    teaser: "Ehrliche Preisspannen 2026 — und warum der günstigste Preis selten der beste ist.",
    tag: "Kosten",
  },
  {
    href: "/wissen/lohnt-sich-google-ads-kleine-unternehmen",
    title: "Lohnt sich Google Ads für kleine Unternehmen?",
    teaser: "Ab welchem Budget es sich rechnet, was eine Anfrage kostet — und wann nicht.",
    tag: "Werbung",
  },
  {
    href: "/wissen/brauche-ich-website-oder-google-profil",
    title: "Brauche ich eine Website oder reicht das Google-Profil?",
    teaser: "Was beides kann, was nur die Website kann — und die ideale Kombination.",
    tag: "Sichtbarkeit",
  },
  {
    href: "/wissen/was-kostet-seo-monatlich",
    title: "Was kostet SEO monatlich?",
    teaser: "Branchen-Richtwerte 2026 — und warum Anfragen zählen, nicht Rankings.",
    tag: "Kosten",
  },
  {
    href: "/wissen/was-kostet-booking-com",
    title: "Was kostet Booking.com wirklich?",
    teaser: "Provision 2026 (effektiv bis 22–25 %) — und wie man Direktbuchungen zurückholt.",
    tag: "Ferienwohnung",
  },
];

export default function WissenIndexPage() {
  return (
    <>
      <Section background="paper" padding="large">
        <Container className="max-w-[900px]">
          <SectionMark index="00" label="Wissen" tone="accent" />
          <h1 className="mt-mh-4 mh-display-2">
            Ehrliche Antworten für lokale{" "}
            <em className="mh-italic-accent">Betriebe</em>.
          </h1>
          <p className="mt-mh-4 max-w-mh-text mh-body-large text-mh-text-secondary">
            Kurze, klare Antworten auf die Fragen, die vor dem nächsten digitalen Schritt
            wirklich wichtig sind — ohne Funnel-Sprache, mit konkreten Zahlen.
          </p>
        </Container>
      </Section>

      <Section background="subtle" padding="large">
        <Container className="max-w-[900px]">
          <div className="grid gap-mh-4 sm:grid-cols-2">
            {articles.map((a) => (
              <Card key={a.href} as="article" padded="none" interactive className="overflow-hidden">
                <Link href={a.href} className="group flex h-full flex-col gap-mh-3 p-mh-6">
                  <span className="mh-label-mono-sm text-mh-accent">{a.tag}</span>
                  <h2 className="mh-display-5">{a.title}</h2>
                  <p className="mh-body-small text-mh-text-secondary">{a.teaser}</p>
                  <span className="mt-auto inline-flex items-center gap-mh-2 mh-body-small font-semibold text-mh-text-primary transition-colors group-hover:text-mh-accent">
                    Antwort lesen
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.7} aria-hidden="true" />
                  </span>
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
