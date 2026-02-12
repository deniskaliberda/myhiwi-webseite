import Link from "next/link";
import {
  Globe,
  Search,
  ArrowRight,
  MessageCircle,
  Target,
  Puzzle,
  TrendingUp,
  ShieldAlert,
  Smartphone,
  Zap,
  MapPin,
  Star,
  BarChart3,
  Plus,
  Users,
} from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="py-12 md:py-24 bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-20 animate-fade-in-up">
          <h2 className="mb-6">
            Was Ihr Unternehmen online wirklich braucht
          </h2>
          <p className="text-lg md:text-xl text-slate-600">
            Eine starke digitale Pr&auml;senz besteht aus zwei Bausteinen, die sich
            perfekt erg&auml;nzen.
          </p>
        </div>

        {/* === WEBDESIGN Section === */}
        <div className="max-w-5xl mx-auto mb-10 md:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-accent/10 rounded-full border border-accent/20">
                <Globe className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-accent">
                  Webdesign
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-inter font-bold text-primary mb-4">
                Ihre Website ist Ihr digitales{" "}
                <span className="gradient-text">Schaufenster</span>
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Viele Websites von kleinen Unternehmen sind veraltet, nicht
                mobiloptimiert oder haben sogar{" "}
                <strong>Sicherheitsl&uuml;cken</strong>. Das kostet nicht nur
                Vertrauen bei Kunden, sondern auch Rankings bei Google.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Eine moderne, schnelle Website ist heute kein Luxus &ndash;
                sie ist{" "}
                <strong>die Grundlage f&uuml;r alles andere</strong>. Sie l&auml;dt
                schnell, sieht auf dem Handy genauso gut aus wie am PC und
                spricht die Sprache, die Google versteht.
              </p>
              <Link
                href="/webdesign"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-hover transition-colors animated-underline"
              >
                Mehr &uuml;ber Webdesign erfahren
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right: Visual Problem/Solution Cards */}
            <div className="space-y-4">
              {/* Problem Card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-4 md:p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-red-400" />
                <div className="pl-3">
                  <span className="text-xs font-bold text-red-400 uppercase tracking-wider mb-3 block">
                    Typische Probleme
                  </span>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <ShieldAlert className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-sm font-semibold text-slate-700">
                          Sicherheitsl&uuml;cken
                        </span>
                        <p className="text-xs text-slate-500">
                          Veraltete Software, kein SSL, offene Schwachstellen
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Smartphone className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-sm font-semibold text-slate-700">
                          Nicht mobilfreundlich
                        </span>
                        <p className="text-xs text-slate-500">
                          &Uuml;ber 60% der Besucher kommen &uuml;bers Handy
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-sm font-semibold text-slate-700">
                          Langsame Ladezeiten
                        </span>
                        <p className="text-xs text-slate-500">
                          Jede Sekunde Wartezeit kostet Besucher
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solution Card */}
              <div className="bg-white rounded-2xl border-2 border-accent/20 p-4 md:p-6 relative overflow-hidden shadow-sm shadow-accent/5">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-cyan" />
                <div className="pl-3">
                  <span className="text-xs font-bold text-accent uppercase tracking-wider mb-3 block">
                    Meine L&ouml;sung
                  </span>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-600 text-xs">&#10003;</span>
                      </div>
                      <span className="text-sm text-slate-700">
                        Modernes, <strong>sicheres</strong> Design mit SSL &amp; DSGVO
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-600 text-xs">&#10003;</span>
                      </div>
                      <span className="text-sm text-slate-700">
                        <strong>Mobile-First</strong> &ndash; perfekt auf jedem Ger&auml;t
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-600 text-xs">&#10003;</span>
                      </div>
                      <span className="text-sm text-slate-700">
                        <strong>Blitzschnell</strong> &ndash; optimiert f&uuml;r Google &amp; Besucher
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* === LOCAL SEO Section === */}
        <div className="max-w-5xl mx-auto mb-10 md:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Left: Visual - reversed on mobile */}
            <div className="order-2 md:order-1 space-y-4">
              {/* GBP Card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-4 md:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan to-accent flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary">
                      Google Business Profil
                    </div>
                    <div className="text-xs text-slate-500">
                      Ihr Eintrag bei Google Maps &amp; Suche
                    </div>
                  </div>
                </div>
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between bg-slate-50 rounded-lg p-2.5">
                    <span className="text-xs text-slate-600">
                      Profil vollst&auml;ndig?
                    </span>
                    <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">
                      Optimiert
                    </span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-50 rounded-lg p-2.5">
                    <span className="text-xs text-slate-600">Bewertungen</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      <span className="text-xs font-bold text-slate-700">
                        4.9
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-slate-50 rounded-lg p-2.5">
                    <span className="text-xs text-slate-600">
                      Sichtbarkeit
                    </span>
                    <span className="text-xs font-bold text-accent">
                      Top 3
                    </span>
                  </div>
                </div>
              </div>

              {/* SEO Signals Card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-4 md:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary">
                      SEO-Signale
                    </div>
                    <div className="text-xs text-slate-500">
                      Googles Sprache sprechen
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Meta-Tags",
                    "Strukturierte Daten",
                    "Ladegeschwindigkeit",
                    "Lokale Keywords",
                  ].map((signal, i) => (
                    <div
                      key={i}
                      className="text-xs text-slate-600 bg-accent/5 border border-accent/10 rounded-lg px-2.5 py-2 text-center"
                    >
                      {signal}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-cyan/10 rounded-full border border-cyan/20">
                <Search className="w-4 h-4 text-cyan" />
                <span className="text-sm font-semibold text-cyan">
                  Local SEO
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-inter font-bold text-primary mb-4">
                Gefunden werden, wenn Kunden{" "}
                <span className="gradient-text">Sie suchen</span>
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Wenn jemand &bdquo;Friseur in meiner N&auml;he&ldquo; googelt, entscheiden
                Ihr <strong>Google Business Profil</strong> und Ihre{" "}
                <strong>Website-Optimierung</strong>, ob Sie oder Ihre
                Konkurrenz angezeigt wird.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Viele Unternehmen haben ein Google-Profil, aber es ist{" "}
                <strong>unvollst&auml;ndig oder nicht optimiert</strong>. Und die
                Website spricht nicht die Sprache, die Google versteht. Beides
                l&auml;sst sich beheben &ndash; mit der richtigen Strategie.
              </p>
              <Link
                href="/seo"
                className="inline-flex items-center gap-2 text-cyan font-semibold hover:text-accent transition-colors animated-underline"
              >
                Mehr &uuml;ber Local SEO erfahren
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* === COMBO Section === */}
        <div className="max-w-4xl mx-auto mb-10 md:mb-20">
          <div className="relative card-gradient-border glow-accent overflow-hidden">
            {/* Subtle gradient bg */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/3 via-transparent to-cyan/3 rounded-2xl" />
            <div className="relative">
              <div className="text-center mb-6 md:mb-8">
                <h3 className="text-2xl md:text-3xl font-inter font-bold text-primary mb-3">
                  Die perfekte Kombination
                </h3>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  Webdesign und Local SEO verst&auml;rken sich gegenseitig.
                  Eine gut optimierte Website bringt die Grundlage &ndash; Local SEO
                  sorgt daf&uuml;r, dass sie auch gesehen wird.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-center">
                {/* Webdesign Pillar */}
                <div className="text-center p-4 md:p-6 bg-white/80 rounded-xl border border-accent/10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-blue-700 flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-inter font-bold text-primary mb-2">
                    Moderne Website
                  </h4>
                  <p className="text-xs text-slate-500">
                    Schnell, sicher, mobiloptimiert &ndash; Ihre digitale Basis
                  </p>
                </div>

                {/* Plus Icon */}
                <div className="flex justify-center">
                  <div className="w-12 h-12 rounded-full gradient-bg-animated flex items-center justify-center shadow-lg">
                    <Plus className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* SEO Pillar */}
                <div className="text-center p-4 md:p-6 bg-white/80 rounded-xl border border-cyan/10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan to-accent flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Search className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-inter font-bold text-primary mb-2">
                    Local SEO
                  </h4>
                  <p className="text-xs text-slate-500">
                    Vermarktet Ihre Website &amp; macht sie bei Google sichtbar
                  </p>
                </div>
              </div>

              {/* Result */}
              <div className="mt-6 md:mt-8 text-center">
                <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-accent/10 to-cyan/10 rounded-full border border-accent/20">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  <span className="text-sm md:text-base font-semibold text-primary">
                    Ergebnis: Mehr Sichtbarkeit, mehr Kunden, nachhaltiges Wachstum
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Steps - Visual Timeline */}
        <div className="max-w-5xl mx-auto mb-10 md:mb-16">
          <div className="text-center mb-8 md:mb-14">
            <h3 className="text-2xl md:text-3xl font-inter font-bold text-primary mb-3">
              So l&auml;uft die Zusammenarbeit
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Von der ersten Idee bis zum Ergebnis &ndash; transparent und pers&ouml;nlich.
            </p>
          </div>

          <div className="relative">
            {/* Vertical timeline line - mobile left, desktop center */}
            <div className="absolute left-[1.6rem] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-cyan to-accent/20 md:-translate-x-px" />

            {/* Step 1: Erstgespräch */}
            <div className="relative flex items-start mb-8 md:mb-14">
              {/* Timeline dot */}
              <div className="absolute left-[1.6rem] md:left-1/2 -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-accent to-blue-700 flex items-center justify-center z-10 shadow-lg shadow-accent/20">
                <span className="text-white font-bold text-xs md:text-sm">01</span>
              </div>

              {/* Card - left side on desktop */}
              <div className="ml-16 md:ml-0 md:w-[calc(50%-2.5rem)] md:mr-auto">
                <div className="bg-white rounded-2xl border border-slate-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Mini visual: Chat mockup */}
                    <div className="flex-shrink-0 w-full sm:w-36 bg-slate-50 rounded-xl p-3 border border-slate-100">
                      <div className="flex justify-center gap-3 mb-2.5">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-cyan flex items-center justify-center">
                          <Users className="w-4 h-4 text-white" />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                          <span className="text-white font-bold text-[9px]">DK</span>
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex justify-end">
                          <div className="bg-accent/10 text-[8px] text-accent px-2 py-1 rounded-lg rounded-tr-sm max-w-[85%]">Was macht Ihr Unternehmen?</div>
                        </div>
                        <div className="flex justify-start">
                          <div className="bg-slate-200/60 text-[8px] text-slate-600 px-2 py-1 rounded-lg rounded-tl-sm max-w-[85%]">Wir sind ein Salon in...</div>
                        </div>
                      </div>
                    </div>
                    {/* Text */}
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <MessageCircle className="w-4 h-4 text-accent" />
                        <h4 className="font-inter font-bold text-primary">Erstgespr&auml;ch</h4>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        In einem kostenlosen 15-Minuten-Gespr&auml;ch lernen wir uns kennen. Sie erz&auml;hlen mir von Ihrem Unternehmen, Ihren Zielen und Herausforderungen.
                      </p>
                      <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-semibold text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                        Kostenlos &amp; unverbindlich
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Analyse */}
            <div className="relative flex items-start mb-8 md:mb-14">
              <div className="absolute left-[1.6rem] md:left-1/2 -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-cyan to-accent flex items-center justify-center z-10 shadow-lg shadow-cyan/20">
                <span className="text-white font-bold text-xs md:text-sm">02</span>
              </div>

              {/* Card - right side on desktop */}
              <div className="ml-16 md:ml-auto md:w-[calc(50%-2.5rem)]">
                <div className="bg-white rounded-2xl border border-slate-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Mini visual: Analysis chart */}
                    <div className="flex-shrink-0 w-full sm:w-36 bg-slate-50 rounded-xl p-3 border border-slate-100">
                      <div className="flex items-center gap-1.5 mb-2.5">
                        <Search className="w-3 h-3 text-accent" />
                        <span className="text-[8px] font-bold text-slate-500 uppercase">Analyse</span>
                      </div>
                      <div className="space-y-1.5">
                        <div>
                          <div className="flex justify-between text-[8px] text-slate-500 mb-0.5">
                            <span>Konkurrenz</span>
                            <span className="font-bold">78%</span>
                          </div>
                          <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full w-[78%] bg-red-400 rounded-full" />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-[8px] text-primary font-bold mb-0.5">
                            <span>Ihr Potenzial</span>
                            <span>12%</span>
                          </div>
                          <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full w-[12%] bg-accent rounded-full" />
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 text-[8px] text-accent font-bold text-center bg-accent/10 rounded py-0.5">
                        Potenzial erkannt
                      </div>
                    </div>
                    {/* Text */}
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <Target className="w-4 h-4 text-cyan" />
                        <h4 className="font-inter font-bold text-primary">Analyse</h4>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Ich schaue mir Ihre aktuelle Online-Pr&auml;senz, Ihre Konkurrenz und Ihre Region genau an. Wo liegt das gr&ouml;&szlig;te Potenzial f&uuml;r neue Kunden?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Angebot */}
            <div className="relative flex items-start mb-8 md:mb-14">
              <div className="absolute left-[1.6rem] md:left-1/2 -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-700 flex items-center justify-center z-10 shadow-lg shadow-green-500/20">
                <span className="text-white font-bold text-xs md:text-sm">03</span>
              </div>

              {/* Card - left side on desktop */}
              <div className="ml-16 md:ml-0 md:w-[calc(50%-2.5rem)] md:mr-auto">
                <div className="bg-white rounded-2xl border border-slate-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Mini visual: Document with checkmarks */}
                    <div className="flex-shrink-0 w-full sm:w-36 bg-slate-50 rounded-xl p-3 border border-slate-100">
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="flex items-center gap-1.5">
                          <div className="w-4 h-4 rounded bg-gradient-to-br from-accent to-cyan" />
                          <span className="text-[8px] font-bold text-slate-500">Angebot</span>
                        </div>
                        <span className="text-[7px] font-bold text-accent bg-accent/10 px-1.5 py-0.5 rounded-full">Individuell</span>
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-1.5 bg-green-50 rounded p-1.5 border border-green-100">
                          <div className="w-3 h-3 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <span className="text-green-600 text-[7px]">&#10003;</span>
                          </div>
                          <span className="text-[8px] text-slate-600">Professionelle Website</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-green-50 rounded p-1.5 border border-green-100">
                          <div className="w-3 h-3 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <span className="text-green-600 text-[7px]">&#10003;</span>
                          </div>
                          <span className="text-[8px] text-slate-600">Google Business</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-green-50 rounded p-1.5 border border-green-100">
                          <div className="w-3 h-3 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <span className="text-green-600 text-[7px]">&#10003;</span>
                          </div>
                          <span className="text-[8px] text-slate-600">Laufende Betreuung</span>
                        </div>
                      </div>
                    </div>
                    {/* Text */}
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <Puzzle className="w-4 h-4 text-green-600" />
                        <h4 className="font-inter font-bold text-primary">Angebot</h4>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Basierend auf der Analyse erstelle ich ein ma&szlig;geschneidertes Angebot &ndash; genau auf Ihr Unternehmen, Ihre Ziele und Ihr Budget zugeschnitten.
                      </p>
                      <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                        Keine versteckten Kosten &ndash; transparent &amp; fair
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Umsetzung */}
            <div className="relative flex items-start">
              <div className="absolute left-[1.6rem] md:left-1/2 -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center z-10 shadow-lg shadow-primary/20">
                <span className="text-white font-bold text-xs md:text-sm">04</span>
              </div>

              {/* Card - right side on desktop */}
              <div className="ml-16 md:ml-auto md:w-[calc(50%-2.5rem)]">
                <div className="bg-white rounded-2xl border border-slate-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Mini visual: Browser with progress */}
                    <div className="flex-shrink-0 w-full sm:w-36 bg-slate-50 rounded-xl p-3 border border-slate-100">
                      <div className="bg-white rounded-lg border border-slate-200 overflow-hidden mb-2">
                        <div className="bg-slate-100 px-2 py-1 flex items-center gap-1 border-b border-slate-200">
                          <div className="flex gap-0.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-300" />
                            <div className="w-1.5 h-1.5 rounded-full bg-yellow-300" />
                            <div className="w-1.5 h-1.5 rounded-full bg-green-300" />
                          </div>
                          <div className="flex-1 bg-white rounded text-[6px] text-slate-400 px-1.5 py-0.5 border border-slate-100">ihre-firma.de</div>
                        </div>
                        <div className="p-1.5">
                          <div className="bg-gradient-to-r from-accent/10 to-cyan/10 rounded p-1.5 mb-1">
                            <div className="w-3/4 h-1.5 bg-primary/40 rounded-full mb-1" />
                            <div className="w-full h-1 bg-slate-200 rounded-full" />
                          </div>
                          <div className="grid grid-cols-3 gap-0.5">
                            <div className="bg-slate-50 rounded p-1 h-4 border border-slate-100" />
                            <div className="bg-slate-50 rounded p-1 h-4 border border-slate-100" />
                            <div className="bg-slate-50 rounded p-1 h-4 border border-slate-100" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between text-[8px] mb-0.5">
                        <span className="font-semibold text-accent">Fortschritt</span>
                        <span className="font-bold text-primary">85%</span>
                      </div>
                      <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full w-[85%] bg-gradient-to-r from-accent to-cyan rounded-full" />
                      </div>
                    </div>
                    {/* Text */}
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <TrendingUp className="w-4 h-4 text-accent" />
                        <h4 className="font-inter font-bold text-primary">Umsetzung</h4>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Ich setze Ihre Website und SEO-Strategie um, halte Sie regelm&auml;&szlig;ig auf dem Laufenden und hole Ihr Feedback ein. Sie sehen, wie Ihr Projekt w&auml;chst.
                      </p>
                      <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                        <TrendingUp className="w-3 h-3" />
                        Klare Meilensteine &amp; regelm&auml;&szlig;ige Updates
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-4 md:gap-6 p-5 md:p-8 card-gradient-border glow-accent">
            <div
              className="w-16 h-16 rounded-full gradient-bg-animated flex items-center justify-center"
              style={{ boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
            >
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-inter font-bold text-primary mb-2">
                Lassen Sie uns sprechen
              </h3>
              <p className="text-slate-600 mb-4">
                In 15 Minuten finden wir heraus, wie ich Ihnen am besten helfen
                kann.
              </p>
            </div>
            <Link
              href="/kontakt"
              className="btn btn-cta btn-shimmer flex items-center gap-2 text-base md:text-lg px-6 py-3 md:px-8 md:py-4"
            >
              <span className="relative z-10 flex items-center gap-2">
                Jetzt Anfrage starten
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
            <p className="text-sm text-slate-500">
              Kostenlos &amp; unverbindlich
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
