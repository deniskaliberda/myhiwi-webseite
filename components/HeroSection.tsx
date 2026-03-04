import Link from "next/link";
import { ArrowRight, MessageCircle, Sparkles, Star, TrendingUp, TrendingDown, X, Check, Wifi, Search, Globe, Smartphone, Monitor } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-cyan-50/30" />

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231e3a5f' fill-opacity='1'%3E%3Cpath d='M0 0h1v40H0zM39 0h1v40h-1zM0 0h40v1H0zM0 39h40v1H0z'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Floating Decorative Elements */}
      <div className="absolute top-32 right-[15%] w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-[10%] w-96 h-96 bg-cyan/5 rounded-full blur-3xl animate-float-delay" />
      <div className="absolute top-1/2 right-[5%] w-4 h-4 bg-accent/30 rounded-full animate-float-slow" />
      <div className="absolute top-1/3 left-[8%] w-3 h-3 bg-cyan/40 rounded-full animate-float" />
      <div className="absolute bottom-1/3 right-[20%] w-2 h-2 bg-accent/20 rounded-full animate-float-delay" />

      <div className="container-custom py-8 md:py-20 relative z-10">
        {/* Starter-Paket Announcement */}
        <div className="flex justify-center mb-8 md:mb-12 animate-fade-in-up">
          <Link
            href="/starter"
            className="group inline-flex items-center gap-3 px-4 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-accent via-blue-600 to-cyan rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all border border-white/20"
          >
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-white/20 rounded-full text-[11px] md:text-xs font-bold text-white uppercase tracking-wider">
              <Sparkles className="w-3 h-3" />
              Neu
            </span>
            <span className="text-sm md:text-base font-medium text-white">
              Starter-Paket: Website + SEO ab 399&nbsp;&euro;/Mo
            </span>
            <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1">
            {/* Kicker */}
            <div className="animate-fade-in-up stagger-1 inline-flex items-center gap-2 mb-4 md:mb-6 px-3 md:px-4 py-1.5 md:py-2 bg-accent/10 rounded-full border border-accent/20">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm md:text-base font-semibold text-accent">
                Professionell. Pers&ouml;nlich. Lokal.
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="animate-fade-in-up stagger-2 mb-4 md:mb-6 text-primary">
              Mehr Kunden aus Ihrer Region{" "}
              <span className="gradient-text">
                mit professioneller Website &amp; Local SEO
              </span>
            </h1>

            {/* Sub-Headline */}
            <p className="animate-fade-in-up stagger-3 text-base md:text-xl text-slate-600 mb-5 md:mb-8 leading-relaxed">
              Ich helfe kleinen Unternehmen, online gefunden zu werden &ndash;
              mit <strong>individueller Beratung</strong> und L&ouml;sungen,
              die zu Ihrem Budget passen.
            </p>

            {/* Value Proposition */}
            <div className="animate-fade-in-up stagger-4 mb-5 md:mb-8 p-3 md:p-4 bg-white rounded-xl border border-slate-200 shadow-sm glow-accent">
              <p className="text-slate-700">
                <span className="font-semibold text-primary">Keine Standard-Pakete.</span>{" "}
                Ich nehme mir Zeit, Ihr Unternehmen zu verstehen und erstelle ein
                Angebot, das wirklich zu Ihnen passt.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up stagger-4 flex flex-col sm:flex-row gap-4">
              {/* Primary CTA */}
              <Link
                href="/kontakt"
                className="btn btn-cta btn-shimmer group relative overflow-hidden text-base md:text-lg px-6 py-3 md:px-8 md:py-4"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Kostenloses Erstgespr&auml;ch
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              {/* Starter-Paket CTA */}
              <Link
                href="/starter"
                className="btn bg-white text-primary border-2 border-amber-500/30 hover:border-amber-500 hover:bg-amber-50 flex items-center gap-2 px-6 py-3 md:px-8 md:py-4"
              >
                <Sparkles className="w-5 h-5 text-amber-600" />
                Starter-Paket
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-6 md:mt-12 flex flex-wrap gap-4 md:gap-6">
              <div className="flex items-center gap-2 animate-fade-in-up stagger-1">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-lg">&#10003;</span>
                </div>
                <span className="text-sm text-slate-600">Kostenlose Erstberatung</span>
              </div>
              <div className="flex items-center gap-2 animate-fade-in-up stagger-2">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-lg">&#10003;</span>
                </div>
                <span className="text-sm text-slate-600">Individuelle Angebote</span>
              </div>
              <div className="flex items-center gap-2 animate-fade-in-up stagger-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-lg">&#10003;</span>
                </div>
                <span className="text-sm text-slate-600">Faire Preise</span>
              </div>
            </div>
          </div>

          {/* Right Column - Before/After Comparison */}
          <div className="order-1 lg:order-2 animate-fade-in-right">
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute -inset-8 bg-gradient-to-br from-accent/10 via-cyan/10 to-accent/5 rounded-3xl blur-2xl" />

              <div className="relative grid grid-cols-2 gap-3 md:gap-4">

                {/* === VORHER Card === */}
                <div className="relative rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-300 p-3 md:p-5 opacity-75 hover:opacity-90 transition-opacity duration-500">
                  {/* Label */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-red-100 rounded-full mb-3 md:mb-4">
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                    <span className="text-[10px] md:text-xs font-bold text-red-500 uppercase tracking-wider">Vorher</span>
                  </div>

                  {/* Old-Fashioned Website Mockup */}
                  <div className="bg-white rounded-lg border border-slate-300 overflow-hidden mb-3 md:mb-4 shadow-sm">
                    {/* Browser Bar - old style */}
                    <div className="bg-slate-200 px-2 py-1.5 flex items-center gap-1.5">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-slate-400" />
                        <div className="w-2 h-2 rounded-full bg-slate-400" />
                        <div className="w-2 h-2 rounded-full bg-slate-400" />
                      </div>
                      <div className="flex-1 bg-slate-300 rounded h-3 ml-1 flex items-center px-1.5">
                        <div className="w-12 h-1.5 bg-slate-400 rounded" />
                      </div>
                    </div>
                    {/* Old-Fashioned Page Content - table layout, outdated feel */}
                    <div className="p-2 md:p-3">
                      {/* Outdated header banner */}
                      <div className="w-full h-3 bg-amber-200/60 rounded-sm mb-1.5" />
                      {/* Table-like 2-column layout (old school) */}
                      <div className="flex gap-1.5">
                        {/* Sidebar */}
                        <div className="w-1/4 space-y-1">
                          <div className="w-full h-2 bg-slate-300 rounded-sm" />
                          <div className="w-full h-2 bg-slate-300 rounded-sm" />
                          <div className="w-full h-2 bg-slate-300 rounded-sm" />
                          <div className="w-full h-2 bg-slate-300 rounded-sm" />
                        </div>
                        {/* Main content */}
                        <div className="flex-1 space-y-1.5">
                          <div className="w-2/3 h-2 bg-slate-200 rounded-sm" />
                          <div className="w-full h-10 md:h-14 bg-slate-100 rounded-sm border border-dashed border-slate-300 flex items-center justify-center">
                            <Monitor className="w-3 h-3 text-slate-300" />
                          </div>
                          <div className="w-full h-1.5 bg-slate-200 rounded-sm" />
                          <div className="w-4/5 h-1.5 bg-slate-200 rounded-sm" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Google Rating - Good but FEW reviews */}
                  <div className="bg-white rounded-lg border border-slate-300 p-2 md:p-3 mb-3 md:mb-4">
                    <div className="flex items-center gap-1 mb-1">
                      <Search className="w-3 h-3 text-slate-400" />
                      <span className="text-[10px] md:text-xs text-slate-400 font-medium">Google Business</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm md:text-base font-bold text-slate-500">4.2</span>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} className={`w-3 h-3 ${s <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`} />
                        ))}
                      </div>
                    </div>
                    <div className="text-[9px] md:text-[10px] text-slate-400 mt-0.5">nur 3 Bewertungen</div>
                  </div>

                  {/* Problem Metrics */}
                  <div className="space-y-1.5 md:space-y-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                        <X className="w-2.5 h-2.5 text-red-400" />
                      </div>
                      <span className="text-[10px] md:text-xs text-slate-500">GBP unvollst&auml;ndig</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                        <Smartphone className="w-2.5 h-2.5 text-red-400" />
                      </div>
                      <span className="text-[10px] md:text-xs text-slate-500">Nicht mobiloptimiert</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                        <TrendingDown className="w-2.5 h-2.5 text-red-400" />
                      </div>
                      <span className="text-[10px] md:text-xs text-slate-500">Kunden gehen zur Konkurrenz</span>
                    </div>
                  </div>
                </div>

                {/* === NACHHER Card === */}
                <div className="relative rounded-2xl bg-white border-2 border-accent/30 p-3 md:p-5 shadow-lg shadow-accent/10 hover:shadow-xl hover:shadow-accent/15 transition-all duration-500">
                  {/* Label */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-100 rounded-full mb-3 md:mb-4">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] md:text-xs font-bold text-green-600 uppercase tracking-wider">Nachher</span>
                  </div>

                  {/* Modern Website Mockup */}
                  <div className="bg-white rounded-lg border border-accent/20 overflow-hidden mb-3 md:mb-4 shadow-sm shadow-accent/10">
                    {/* Browser Bar */}
                    <div className="bg-slate-50 px-2 py-1.5 flex items-center gap-1.5">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-400" />
                        <div className="w-2 h-2 rounded-full bg-yellow-400" />
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                      </div>
                      <div className="flex-1 bg-white rounded h-3 ml-1 border border-slate-200 flex items-center px-1.5">
                        <Wifi className="w-2 h-2 text-green-500" />
                        <div className="ml-1 w-12 h-1.5 bg-accent/30 rounded" />
                      </div>
                    </div>
                    {/* Modern Page Content */}
                    <div className="p-2 md:p-3 space-y-2">
                      <div className="w-3/4 h-2.5 bg-gradient-to-r from-accent to-cyan rounded" />
                      <div className="w-full h-2 bg-slate-100 rounded" />
                      <div className="w-5/6 h-2 bg-slate-100 rounded" />
                      <div className="w-full h-12 md:h-16 bg-gradient-to-br from-accent/10 to-cyan/10 rounded mt-2 flex items-center justify-center border border-accent/10">
                        <Globe className="w-4 h-4 text-accent" />
                      </div>
                      <div className="flex gap-1">
                        <div className="w-1/3 h-5 bg-gradient-to-r from-accent to-cyan rounded flex items-center justify-center">
                          <span className="text-[8px] text-white font-bold">CTA</span>
                        </div>
                        <div className="w-1/3 h-2 bg-slate-100 rounded self-center" />
                      </div>
                    </div>
                  </div>

                  {/* Good Google Rating */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200 p-2 md:p-3 mb-3 md:mb-4">
                    <div className="flex items-center gap-1 mb-1">
                      <Search className="w-3 h-3 text-green-600" />
                      <span className="text-[10px] md:text-xs text-green-600 font-medium">Google</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm md:text-base font-bold text-green-700">4.9</span>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <div className="text-[9px] md:text-[10px] text-green-600 mt-0.5">47 Bewertungen</div>
                  </div>

                  {/* Success Metrics */}
                  <div className="space-y-1.5 md:space-y-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 text-green-600" />
                      </div>
                      <span className="text-[10px] md:text-xs text-slate-700 font-medium">Top 3 bei Google</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-2.5 h-2.5 text-green-600" />
                      </div>
                      <span className="text-[10px] md:text-xs text-slate-700 font-medium">Mehr Besucher</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Star className="w-2.5 h-2.5 text-green-600" />
                      </div>
                      <span className="text-[10px] md:text-xs text-slate-700 font-medium">Mehr Bewertungen</span>
                    </div>
                  </div>

                  {/* Subtle glow */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-accent/5 to-cyan/5 rounded-2xl -z-10 blur-sm" />
                </div>

                {/* Center Arrow Divider */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full gradient-bg-animated flex items-center justify-center shadow-lg shadow-accent/30">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                </div>

                {/* Floating MyHiwi Badge */}
                <div className="hidden md:block absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-lg p-3 border border-slate-100 animate-float-slow glow-accent z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full gradient-bg-animated flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs font-bold text-primary">MyHiwi macht den Unterschied</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-slate-400 uppercase tracking-wider">Scroll</span>
        <svg
          className="w-6 h-6 text-slate-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
