import type { Metadata } from "next";
import Link from "next/link";
import {
  ExternalLink,
  Target,
  Zap,
  TrendingUp,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import SectionReveal from "@/components/shared/SectionReveal";

export const metadata: Metadata = {
  title: "Über mich — Denis Kaliberda",
  description:
    "Olympia-Teilnehmer, WM-Bronze, 200+ Länderspiele — und jetzt SEO-Experte für lokale Unternehmen. Meine Geschichte.",
  alternates: {
    canonical: "https://myhiwi.de/ueber-mich",
  },
};

const pressLinks = [
  {
    name: "Wikipedia",
    url: "https://de.wikipedia.org/wiki/Denis_Kaliberda",
  },
  {
    name: "Tagesspiegel",
    url: "https://www.tagesspiegel.de/sport/vieles-fehlt-um-gut-volleyball-spielen-zu-konnen-denis-kaliberda-ist-der-hoffnungstrager-der-netzhoppers-13148944.html",
  },
  {
    name: "Volleyball-Verband",
    url: "https://www.volleyball-verband.de/de/kader/spieler--amp--trainer/denis-kaliberda/",
  },
  {
    name: "Süddeutsche Zeitung",
    url: "https://www.sueddeutsche.de/sport/kaliberda-herrsching-volleyball-nationalmannschaft-li.3330428",
  },
];

const principles = [
  {
    icon: Target,
    title: "Analytisches Denken",
    description:
      "Jedes Spiel erfordert Gegner-Analyse. Bei Ihrem SEO analysiere ich Ihre Konkurrenz und finde die Schwachstellen.",
  },
  {
    icon: Zap,
    title: "Systematisch lösen",
    description:
      "Im Sport wie im Marketing: Ich erkenne Probleme, verstehe sie und gehe sie strukturiert an.",
  },
  {
    icon: TrendingUp,
    title: "Dranbleiben",
    description:
      "Erfolg kommt nicht über Nacht — weder im Sport noch bei SEO. Ich bleibe konsequent an Ihrem Projekt dran.",
  },
];

export default function AboutMePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 pt-32 pb-20 md:pt-40 md:pb-28">
        <Container>
          <div className="max-w-3xl">
            <SectionReveal>
              <p className="text-blue-500 font-medium text-sm tracking-wide mb-4">
                Meine Geschichte
              </p>
              <h1 className="text-white text-4xl md:text-5xl font-heading font-bold leading-[1.1] mb-6">
                Vom Leistungssport zu MyHiwi
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Seit 1999 im Volleyball, seit 2009 Profi. Über 200 Länderspiele
                für Deutschland, Olympia 2012, WM-Bronze 2014, EM-Silber 2017.
                Der Leistungssport hat mich gelehrt, analytisch zu denken und
                Probleme systematisch anzugehen.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 mb-8">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="text-white font-heading font-bold text-xl">200+</p>
                    <p className="text-slate-400 text-xs">Länderspiele</p>
                  </div>
                </div>
                <div>
                  <p className="text-white font-heading font-bold text-xl">WM-Bronze</p>
                  <p className="text-slate-400 text-xs">2014</p>
                </div>
                <div>
                  <p className="text-white font-heading font-bold text-xl">EM-Silber</p>
                  <p className="text-slate-400 text-xs">2017</p>
                </div>
              </div>

              {/* Press links */}
              <div className="flex flex-wrap gap-2">
                {pressLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-slate-400 hover:text-white hover:border-white/20 transition-colors text-xs"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </SectionReveal>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <Section variant="white">
        <div className="max-w-3xl mx-auto">
          <SectionReveal>
            <h2 className="text-navy-900 mb-6">Was MyHiwi für mich bedeutet</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              MyHiwi ist mehr als ein Business. Es ist die Überzeugung, dass
              bessere digitale Präsenz echten Unterschied macht — für
              Familienbetriebe, Handwerker und lokale Unternehmen, die
              großartige Arbeit leisten.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Kein Upselling, keine leeren Versprechen. Einfach ehrliche Arbeit
              mit echtem Interesse an Ihrem Erfolg.
            </p>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
              <p className="text-navy-900 text-xl font-heading font-semibold italic leading-relaxed">
                &ldquo;Jeder verdient es, gefunden zu werden. Das ist mein
                Antrieb — jeden Tag.&rdquo;
              </p>
              <p className="text-slate-500 text-sm mt-3">
                — Denis Kaliberda, Gründer von MyHiwi
              </p>
            </div>
          </SectionReveal>
        </div>
      </Section>

      {/* Principles */}
      <Section variant="light">
        <SectionReveal>
          <div className="text-center mb-12">
            <h2 className="text-navy-900 mb-4">Was das für Sie bedeutet</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Die Denkweise aus dem Sport bringe ich in jedes Projekt ein.
            </p>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {principles.map((principle, i) => (
            <SectionReveal key={principle.title} delay={i * 100}>
              <div className="bg-white rounded-xl p-6 border border-slate-200 text-center h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/10 mb-4">
                  <principle.icon className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-navy-900 text-lg font-heading font-bold mb-2">
                  {principle.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section variant="dark" className="py-16 md:py-24">
        <SectionReveal>
          <div className="text-center">
            <h2 className="text-white mb-4">
              Bereit, Ihre Sichtbarkeit zu steigern?
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-8">
              Lassen Sie uns in einem kostenlosen Erstgespräch herausfinden,
              wie ich Ihnen helfen kann.
            </p>
            <Link href="/kontakt">
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 h-12"
              >
                Jetzt Anfrage starten
              </Button>
            </Link>
          </div>
        </SectionReveal>
      </Section>
    </>
  );
}
