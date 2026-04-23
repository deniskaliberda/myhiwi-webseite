import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionReveal from "@/components/shared/SectionReveal";

const phases = [
  {
    number: "01",
    title: "Proof",
    period: "Monat 1–3",
    price: "500 €/Mo",
    description: "Website + SEO + Tracking. Ich beweise den Wert — Sie zahlen erst mehr, wenn Sie Ergebnisse sehen.",
    active: false,
  },
  {
    number: "02",
    title: "Value",
    period: "Ab Monat 4",
    price: "800–1.200 €/Mo",
    description: "Preis basiert auf nachgewiesenem ROI. Fair für beide Seiten. Sie wachsen, ich wachse mit.",
    active: true,
  },
  {
    number: "03",
    title: "Neukunden",
    period: "Direkteinstieg",
    price: "800–1.200 €/Mo",
    description: "Neue Kunden starten direkt mit bewährter Strategie und Case-Study-Referenz.",
    active: false,
  },
];

export default function PricingPhases() {
  return (
    <section className="py-24 md:py-32 bg-navy-900 relative">
      <Container>
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="text-blue-500 font-medium text-xs tracking-widest uppercase mb-4">
              Preismodell
            </p>
            <h2 className="text-white mb-4">
              3 Phasen. Null Risiko.
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto">
              Sie zahlen erst mehr, wenn wir Ergebnisse liefern. Transparentes Pricing, keine versteckten Kosten.
            </p>
          </div>
        </SectionReveal>

        {/* Timeline flow */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-6 md:gap-4">
            {phases.map((phase, i) => (
              <SectionReveal key={phase.number} delay={i * 100}>
                <div
                  className={`relative rounded-2xl p-8 transition-all h-full ${
                    phase.active
                      ? "bg-blue-500/10 border-2 border-blue-500/30 md:-translate-y-4"
                      : "bg-navy-800/30 border border-white/5"
                  }`}
                >
                  {/* Phase number */}
                  <div className="flex items-center gap-3 mb-6">
                    <span
                      className={`text-xs font-mono tracking-wider ${
                        phase.active ? "text-blue-400" : "text-slate-500"
                      }`}
                    >
                      {phase.number}
                    </span>
                    <span className="text-xs text-slate-500">{phase.period}</span>
                    {phase.active && (
                      <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full">
                        Empfohlen
                      </span>
                    )}
                  </div>

                  <h3 className="text-white text-xl font-heading font-bold mb-2">
                    {phase.title}
                  </h3>

                  <p className="text-2xl font-heading font-bold text-white mb-4">
                    {phase.price}
                  </p>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>

        <SectionReveal>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
            <span className="text-slate-500">
              Website standalone: <span className="text-slate-300">2.990 €</span>
            </span>
            <span className="hidden sm:inline text-slate-700">·</span>
            <span className="text-slate-500">
              Google Ads: <span className="text-slate-300">299–499 €/Mo</span>
            </span>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Jetzt anfragen
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
