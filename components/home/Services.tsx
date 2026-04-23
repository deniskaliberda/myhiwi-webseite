import { Globe, Search, Zap, Shield } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionReveal from "@/components/shared/SectionReveal";

export default function Services() {
  return (
    <section className="py-24 md:py-32 bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 noise" />

      <Container className="relative">
        <SectionReveal>
          <p className="text-blue-500 font-medium text-xs tracking-widest uppercase mb-4">
            Leistungen
          </p>
          <h2 className="text-white max-w-lg mb-16">
            Alles aus einer Hand.
          </h2>
        </SectionReveal>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-3 gap-3">
          {/* Website — large */}
          <SectionReveal>
            <div className="md:col-span-2 bg-navy-800/40 border border-white/5 rounded-2xl p-8 md:p-10 group hover:border-blue-500/20 transition-colors h-full">
              <Globe className="w-8 h-8 text-blue-500 mb-6" />
              <h3 className="text-white text-2xl font-heading font-bold mb-3">
                Website
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
                Professionelle Websites, die schnell laden, auf jedem Gerät funktionieren
                und Besucher in Kunden verwandeln. Gebaut mit Next.js — nicht WordPress.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Mobile-First", "SEO-optimiert", "Kontaktformular", "Google Maps"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-slate-400 border border-white/10 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Speed metric — small */}
          <SectionReveal delay={100}>
            <div className="bg-navy-800/40 border border-white/5 rounded-2xl p-8 flex flex-col justify-center items-center text-center group hover:border-cyan-500/20 transition-colors h-full">
              <Zap className="w-6 h-6 text-cyan-500 mb-4" />
              <p className="text-5xl font-heading font-bold text-white mb-2">
                &lt;1<span className="text-cyan-500">s</span>
              </p>
              <p className="text-sm text-slate-400">Ladezeit</p>
              <p className="text-xs text-slate-500 mt-1">statt 3–5s bei WordPress</p>
            </div>
          </SectionReveal>

          {/* DSGVO — small */}
          <SectionReveal delay={150}>
            <div className="bg-navy-800/40 border border-white/5 rounded-2xl p-8 flex flex-col justify-center items-center text-center group hover:border-green-500/20 transition-colors h-full">
              <Shield className="w-6 h-6 text-green-500 mb-4" />
              <p className="text-lg font-heading font-bold text-white mb-1">
                DSGVO-konform
              </p>
              <p className="text-sm text-slate-400">SSL & Datenschutz</p>
              <p className="text-xs text-slate-500 mt-1">von Anfang an</p>
            </div>
          </SectionReveal>

          {/* SEO — large */}
          <SectionReveal delay={200}>
            <div className="md:col-span-2 bg-navy-800/40 border border-white/5 rounded-2xl p-8 md:p-10 group hover:border-blue-500/20 transition-colors h-full">
              <Search className="w-8 h-8 text-blue-500 mb-6" />
              <h3 className="text-white text-2xl font-heading font-bold mb-3">
                Local SEO
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
                Gefunden werden, wo es zählt. Google Business Profil, lokale Keywords,
                Content und technische Optimierung — alles mit monatlichem Reporting.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Google Business Profil", "Top-3 Rankings", "Content", "Monatliche Reports"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-slate-400 border border-white/10 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </Container>
    </section>
  );
}
