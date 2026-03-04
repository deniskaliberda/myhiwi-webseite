import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function StarterBannerSection() {
  return (
    <section className="relative py-14 md:py-20 overflow-hidden">
      <div className="absolute inset-0 gradient-bg-animated" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
        }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-white/15 rounded-full border border-white/25">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold text-white">
              NEU &middot; Limitiertes Angebot
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter font-bold text-white mb-4">
            Starter-Paket: Neue Website{" "}
            <span className="text-cyan-300">in 3 Monaten</span>
          </h2>

          <p className="text-lg md:text-xl text-white/80 mb-8">
            399&nbsp;EUR/Monat &middot; Geld-zur&uuml;ck-Garantie &middot;
            Keine Bindung danach
          </p>

          <Link
            href="/starter"
            className="btn bg-white text-primary hover:bg-white/90 btn-shimmer group text-base md:text-lg px-6 py-3 md:px-8 md:py-4"
          >
            <span className="relative z-10 flex items-center gap-2">
              Mehr erfahren
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
