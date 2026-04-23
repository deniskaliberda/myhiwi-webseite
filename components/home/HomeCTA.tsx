import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionReveal from "@/components/shared/SectionReveal";

export default function HomeCTA() {
  return (
    <section className="relative py-24 md:py-32 bg-navy-900 overflow-hidden">
      {/* Subtle gradient */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-10 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #3b82f6, transparent 70%)",
        }}
      />

      <Container className="relative">
        <SectionReveal>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-white mb-6">
              Lassen Sie uns sprechen.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              In einem kostenlosen 15-Minuten-Gespräch zeige ich Ihnen,
              wie viel Potenzial in Ihrer Online-Präsenz steckt.
              Keine Verpflichtung, kein Verkaufsdruck.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/kontakt"
                className="group inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-4 rounded-lg transition-all text-lg"
              >
                Erstgespräch buchen
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <p className="mt-6 text-sm text-slate-500">
              oder schreiben Sie mir:{" "}
              <a
                href="mailto:kontakt@myhiwi.de"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                kontakt@myhiwi.de
              </a>
            </p>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
