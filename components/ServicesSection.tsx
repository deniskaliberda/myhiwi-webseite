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
        <div className="relative max-w-6xl mx-auto mb-10 md:mb-20 rounded-3xl overflow-hidden">
          {/* Dark background with gradient */}
          <div className="absolute inset-0 bg-primary" />
          <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-cyan/15" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan/10 rounded-full blur-3xl" />

          <div className="relative px-6 py-10 md:px-12 md:py-16">
            {/* Header */}
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-white/10 rounded-full border border-white/15">
                <Plus className="w-4 h-4 text-cyan" />
                <span className="text-sm font-semibold text-white/90">
                  Warum beides zusammengeh&ouml;rt
                </span>
              </div>
              <h3 className="text-2xl md:text-4xl font-inter font-bold text-white mb-3">
                Die perfekte Kombination
              </h3>
              <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg">
                Eine gute Website allein bringt keine Kunden. Und SEO ohne solide Website-Basis bringt keine Rankings. Erst zusammen entfalten sie ihre volle Wirkung.
              </p>
            </div>

            {/* Two pillars side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
              {/* Webdesign Pillar */}
              <div className="bg-white/[0.07] backdrop-blur-sm rounded-2xl border border-white/10 p-5 md:p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent to-blue-700 flex items-center justify-center shadow-lg">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-inter font-bold text-white text-lg">
                      Moderne Website
                    </h4>
                    <p className="text-xs text-white/50">Ihre digitale Basis</p>
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {[
                    "Schnelle Ladezeiten & mobile Optimierung",
                    "Professionelles Design, das Vertrauen schafft",
                    "Sicherheit durch SSL & DSGVO-Konformit\u00e4t",
                    "Klare Struktur, die Google versteht",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-accent text-xs">&#10003;</span>
                      </div>
                      <span className="text-sm text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5">
                  <Link
                    href="/webdesign"
                    className="inline-flex items-center gap-2 text-sm text-accent font-semibold hover:text-white transition-colors"
                  >
                    Mehr erfahren
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Local SEO Pillar */}
              <div className="bg-white/[0.07] backdrop-blur-sm rounded-2xl border border-white/10 p-5 md:p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan to-accent flex items-center justify-center shadow-lg">
                    <Search className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-inter font-bold text-white text-lg">
                      Local SEO
                    </h4>
                    <p className="text-xs text-white/50">Ihre Sichtbarkeit bei Google</p>
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {[
                    "Google Business Profil optimieren",
                    "Lokale Keywords & Content-Strategie",
                    "Technische SEO-Optimierung",
                    "Backlink-Aufbau & lokale Verzeichnisse",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-cyan/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-cyan text-xs">&#10003;</span>
                      </div>
                      <span className="text-sm text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5">
                  <Link
                    href="/seo"
                    className="inline-flex items-center gap-2 text-sm text-cyan font-semibold hover:text-white transition-colors"
                  >
                    Mehr erfahren
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Result bar */}
            <div className="bg-gradient-to-r from-accent/20 via-white/10 to-cyan/20 rounded-xl border border-white/10 p-4 md:p-5">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-bg-animated flex items-center justify-center shadow-lg flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">
                      Zusammen ergibt das: Mehr Sichtbarkeit, mehr Kunden
                    </div>
                    <div className="text-xs text-white/50">
                      Wie beim Sonnenhof: Von 0% auf 34,6% Sichtbarkeit in nur 4 Wochen
                    </div>
                  </div>
                </div>
                <Link
                  href="/blog/sonnenhof-case-study"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 px-4 py-2 rounded-full transition-colors flex-shrink-0"
                >
                  Case Study lesen
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Blog post links */}
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/blog/google-business-profil"
                className="inline-flex items-center gap-2 text-xs text-white/60 hover:text-white/90 transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full border border-white/10"
              >
                <MapPin className="w-3 h-3" />
                Google Business Profil Guide
              </Link>
            </div>
          </div>
        </div>

        {/* Process Steps - Compact */}
        <div className="max-w-5xl mx-auto mb-10 md:mb-16">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl font-inter font-bold text-primary mb-3">
              So l&auml;uft die Zusammenarbeit
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Von der ersten Idee bis zum Ergebnis &ndash; transparent und pers&ouml;nlich.
            </p>
          </div>

          {/* Horizontal steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {[
              {
                num: "01",
                icon: MessageCircle,
                title: "Erstgespr\u00e4ch",
                desc: "Kostenloses 15-Minuten-Gespr\u00e4ch \u2013 Sie erz\u00e4hlen von Ihrem Unternehmen und Ihren Zielen.",
                gradient: "from-accent to-blue-700",
                tag: "Kostenlos",
                tagColor: "text-green-600 bg-green-50",
              },
              {
                num: "02",
                icon: Target,
                title: "Analyse",
                desc: "Ich pr\u00fcfe Ihre Online-Pr\u00e4senz, Konkurrenz und Region \u2013 wo liegt das gr\u00f6\u00dfte Potenzial?",
                gradient: "from-cyan to-accent",
                tag: null,
                tagColor: "",
              },
              {
                num: "03",
                icon: Puzzle,
                title: "Angebot",
                desc: "Ma\u00dfgeschneidertes Angebot f\u00fcr Ihr Unternehmen \u2013 transparent und ohne versteckte Kosten.",
                gradient: "from-green-500 to-emerald-700",
                tag: "Individuell",
                tagColor: "text-accent bg-accent/10",
              },
              {
                num: "04",
                icon: TrendingUp,
                title: "Umsetzung",
                desc: "Ich setze um, halte Sie auf dem Laufenden und hole Ihr Feedback ein. Sie sehen, wie Ihr Projekt w\u00e4chst.",
                gradient: "from-primary to-accent",
                tag: null,
                tagColor: "",
              },
            ].map((step) => (
              <div
                key={step.num}
                className="relative bg-white rounded-2xl border border-slate-200 p-5 md:p-6 hover:shadow-md transition-all duration-300 group"
              >
                {/* Step number */}
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                  <span className="text-white font-bold text-xs">{step.num}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <step.icon className="w-4 h-4 text-slate-400" />
                  <h4 className="font-inter font-bold text-primary">{step.title}</h4>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
                {step.tag && (
                  <div className={`mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold ${step.tagColor} px-2.5 py-1 rounded-full`}>
                    <span className="w-1.5 h-1.5 bg-current rounded-full opacity-60" />
                    {step.tag}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
