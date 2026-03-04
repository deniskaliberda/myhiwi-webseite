import type { Metadata } from "next";
import Link from "next/link";
import { Search, TrendingUp, CheckCircle, ArrowRight, Zap, MapPin, BarChart3, FileText, Star, Eye, EyeOff, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Local SEO für kleine Unternehmen — Mehr Kunden aus Ihrer Region | MyHiwi",
  description: "Mehr Kunden aus Ihrer Region durch professionelles Local SEO. Google Business Profil Optimierung, Keyword-Strategie und monatliches Reporting für lokale Unternehmen.",
  keywords: ["Local SEO", "Google Business Profil", "lokale Sichtbarkeit", "SEO für KMU", "Google Maps Ranking"],
  alternates: {
    canonical: "https://myhiwi.de/seo",
  },
};

export default function SeoPage() {
  const seoServices = [
    {
      icon: MapPin,
      title: "Google Business Profil",
      description: "Ihr wichtigstes Werkzeug f\u00fcr lokale Sichtbarkeit \u2013 vollst\u00e4ndig optimiert.",
      gradient: "from-accent to-blue-700",
      features: [
        "Vollst\u00e4ndige Profil-Optimierung (Kategorien, Beschreibung, Attribute)",
        "Keyword-Optimierung f\u00fcr lokale Suchanfragen",
        "Foto- und Video-Upload (sofern vorhanden)",
        "Bewertungsmanagement und Antwort-Strategien",
        "Regelm\u00e4\u00dfige Posts und Updates",
        "Google Maps Ranking-Tracking",
      ],
    },
    {
      icon: TrendingUp,
      title: "On-Page & Technisches SEO",
      description: "Die technische Basis, damit Google Ihre Seite liebt.",
      gradient: "from-cyan to-accent",
      features: [
        "Keyword-Recherche und Konkurrenzanalyse",
        "Meta-Tags, \u00dcberschriften und interne Verlinkung",
        "Ladezeit-Optimierung und Mobile-Optimierung",
        "Schema Markup f\u00fcr lokale Unternehmen",
        "Technisches Audit und Fehlerbehebung",
      ],
    },
    {
      icon: FileText,
      title: "Content & Citations",
      description: "Relevante Inhalte und Branchenverzeichnisse, die Ihre Autorit\u00e4t st\u00e4rken.",
      gradient: "from-primary to-accent",
      features: [
        "SEO-optimierte Blogbeitr\u00e4ge",
        "Lokale Service-Seiten f\u00fcr Ihre Leistungen",
        "Branchenverzeichnis-Eintr\u00e4ge (Local Citations)",
        "Monatliches Reporting und Strategie-Calls",
      ],
    },
  ];

  const timeline = [
    { month: "Monat 1-2", title: "Grundlagen", desc: "Technische Optimierung, Keyword-Recherche, erste Inhalte", icon: BarChart3 },
    { month: "Monat 3-4", title: "Erste Erfolge", desc: "Ranking-Verbesserungen, mehr Besucher, erste Anfragen", icon: TrendingUp },
    { month: "Monat 5-6", title: "Durchbruch", desc: "Top-10 Rankings, deutlich mehr Traffic, regelm\u00e4\u00dfige Anfragen", icon: Zap },
    { month: "Monat 6+", title: "Volle Kraft", desc: "Dominanz in Ihrer Region, nachhaltiger Kundenfluss", icon: Star },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-12 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-cyan-50/30" />
        <div className="absolute top-20 right-[10%] w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-[5%] w-80 h-80 bg-cyan/5 rounded-full blur-3xl animate-float-delay" />

        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              {/* Left: Text */}
              <div>
                <div className="animate-fade-in-up stagger-1 inline-flex items-center gap-2 mb-4 md:mb-6 px-3 md:px-4 py-1.5 md:py-2 bg-accent/10 rounded-full border border-accent/20">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <span className="text-sm md:text-base font-semibold text-accent">
                    Local SEO
                  </span>
                </div>

                <h1 className="animate-fade-in-up stagger-2 mb-4 md:mb-6 text-primary">
                  Nur die{" "}
                  <span className="gradient-text">Top 3</span>{" "}
                  z&auml;hlen
                </h1>

                <p className="animate-fade-in-up stagger-3 text-base md:text-xl text-slate-600 mb-4 leading-relaxed">
                  Wenn jemand &bdquo;Friseur in meiner N&auml;he&ldquo; googelt, klicken die meisten
                  nur auf die <strong>ersten drei Ergebnisse</strong>. Platz 4, 5 oder 6?
                  Wird praktisch nie angeklickt.
                </p>

                <p className="animate-fade-in-up stagger-3 text-base md:text-xl text-slate-600 mb-6 md:mb-8 leading-relaxed">
                  Das hei&szlig;t: Wenn Ihr Unternehmen nicht in den Top 3 steht,
                  gehen Ihre potenziellen Kunden zur Konkurrenz &ndash; ohne jemals
                  zu wissen, dass es Sie gibt.
                </p>

                <div className="animate-fade-in-up stagger-4">
                  <Link
                    href="/kontakt"
                    className="btn btn-cta btn-shimmer group relative overflow-hidden text-base md:text-lg px-6 py-3 md:px-8 md:py-4"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Kostenlose SEO-Analyse anfragen
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </div>
              </div>

              {/* Right: Google Search Results Visual */}
              <div className="animate-fade-in-up stagger-3">
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
                  {/* Google Search Bar */}
                  <div className="bg-white px-4 md:px-6 pt-4 md:pt-6 pb-3">
                    <div className="flex items-center gap-3 bg-white border-2 border-slate-200 rounded-full px-4 py-2.5 shadow-sm">
                      <Search className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-sm text-slate-700 font-medium">Friseur in meiner N&auml;he</span>
                    </div>
                    <div className="mt-2.5 flex items-center gap-1.5 text-[10px] text-slate-400">
                      <span>Ungef&auml;hr 1.240.000 Ergebnisse</span>
                    </div>
                  </div>

                  {/* Map Pack Header */}
                  <div className="px-4 md:px-6 pb-2">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-3.5 h-3.5 text-accent" />
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Orte in der N&auml;he</span>
                    </div>

                    {/* Mini Map */}
                    <div className="bg-slate-100 rounded-lg h-20 md:h-24 mb-3 relative overflow-hidden border border-slate-200">
                      <div className="absolute inset-0 opacity-30" style={{
                        backgroundImage: `linear-gradient(rgba(148,163,184,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.3) 1px, transparent 1px)`,
                        backgroundSize: `20px 20px`,
                      }} />
                      {/* Map pins */}
                      <div className="absolute top-4 left-[25%] w-5 h-5 bg-red-500 rounded-full border-2 border-white shadow-md flex items-center justify-center">
                        <span className="text-white text-[7px] font-bold">A</span>
                      </div>
                      <div className="absolute top-10 left-[50%] w-5 h-5 bg-red-500 rounded-full border-2 border-white shadow-md flex items-center justify-center">
                        <span className="text-white text-[7px] font-bold">B</span>
                      </div>
                      <div className="absolute top-6 right-[25%] w-5 h-5 bg-red-500 rounded-full border-2 border-white shadow-md flex items-center justify-center">
                        <span className="text-white text-[7px] font-bold">C</span>
                      </div>
                    </div>
                  </div>

                  {/* Search Results */}
                  <div className="px-4 md:px-6 pb-4 md:pb-6 space-y-0">
                    {/* Result 1 - TOP */}
                    <div className="relative p-3 rounded-xl bg-green-50/70 border border-green-200/60 mb-2">
                      <div className="absolute -left-0.5 top-2 bottom-2 w-1 bg-green-500 rounded-full" />
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="text-[11px] text-green-700 font-semibold mb-0.5">A &middot; Salon Elegance</div>
                          <div className="flex items-center gap-1 mb-1">
                            <span className="text-[10px] font-bold text-slate-700">4.9</span>
                            <div className="flex">
                              {[1,2,3,4,5].map(s => <Star key={s} className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400" />)}
                            </div>
                            <span className="text-[10px] text-slate-400">(127)</span>
                          </div>
                          <div className="text-[10px] text-slate-500">Hauptstra&szlig;e 12 &middot; Ge&ouml;ffnet bis 19:00</div>
                        </div>
                        <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded-full flex-shrink-0">
                          <Eye className="w-3 h-3 text-green-600" />
                          <span className="text-[9px] font-bold text-green-700">92% Klicks</span>
                        </div>
                      </div>
                    </div>

                    {/* Result 2 - TOP */}
                    <div className="relative p-3 rounded-xl bg-green-50/50 border border-green-200/40 mb-2">
                      <div className="absolute -left-0.5 top-2 bottom-2 w-1 bg-green-400 rounded-full" />
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="text-[11px] text-green-700 font-semibold mb-0.5">B &middot; Hair Studio Mitte</div>
                          <div className="flex items-center gap-1 mb-1">
                            <span className="text-[10px] font-bold text-slate-700">4.7</span>
                            <div className="flex">
                              {[1,2,3,4,5].map(s => <Star key={s} className={`w-2.5 h-2.5 ${s <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-400/40 fill-yellow-400/40'}`} />)}
                            </div>
                            <span className="text-[10px] text-slate-400">(89)</span>
                          </div>
                          <div className="text-[10px] text-slate-500">Marktplatz 5 &middot; Ge&ouml;ffnet bis 18:00</div>
                        </div>
                      </div>
                    </div>

                    {/* Result 3 - TOP */}
                    <div className="relative p-3 rounded-xl bg-green-50/30 border border-green-200/20 mb-3">
                      <div className="absolute -left-0.5 top-2 bottom-2 w-1 bg-green-300 rounded-full" />
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="text-[11px] text-green-700/80 font-semibold mb-0.5">C &middot; Friseursalon am Park</div>
                          <div className="flex items-center gap-1 mb-1">
                            <span className="text-[10px] font-bold text-slate-700">4.5</span>
                            <div className="flex">
                              {[1,2,3,4,5].map(s => <Star key={s} className={`w-2.5 h-2.5 ${s <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`} />)}
                            </div>
                            <span className="text-[10px] text-slate-400">(54)</span>
                          </div>
                          <div className="text-[10px] text-slate-500">Parkstra&szlig;e 8 &middot; Ge&ouml;ffnet bis 17:30</div>
                        </div>
                      </div>
                    </div>

                    {/* Divider - "below the fold" */}
                    <div className="flex items-center gap-2 mb-2.5">
                      <div className="flex-1 h-px bg-red-200" />
                      <div className="flex items-center gap-1.5 px-3 py-1 bg-red-50 rounded-full border border-red-200">
                        <EyeOff className="w-3 h-3 text-red-400" />
                        <span className="text-[9px] font-bold text-red-500">Wird kaum noch geklickt</span>
                      </div>
                      <div className="flex-1 h-px bg-red-200" />
                    </div>

                    {/* Results 4-6 - faded out */}
                    <div className="space-y-1.5 opacity-35">
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                        <div className="w-24 h-2 bg-slate-200 rounded mb-1" />
                        <div className="w-32 h-1.5 bg-slate-100 rounded" />
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                        <div className="w-28 h-2 bg-slate-200 rounded mb-1" />
                        <div className="w-20 h-1.5 bg-slate-100 rounded" />
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                        <div className="w-20 h-2 bg-slate-200 rounded mb-1" />
                        <div className="w-28 h-1.5 bg-slate-100 rounded" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="flex justify-center mt-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg border border-slate-200">
                    <Users className="w-4 h-4 text-accent" />
                    <span className="text-xs font-semibold text-slate-700">
                      <span className="text-accent font-bold">92%</span> aller Klicks gehen an die Top 3
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Local SEO Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-primary mb-4">
                Was ist SEO &ndash; und warum funktioniert es?
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                SEO steht f&uuml;r <strong>Suchmaschinenoptimierung</strong>. Einfach gesagt:
                Wir verbessern, wie gut Ihr Unternehmen bei Google gefunden wird &ndash;
                damit Kunden, die nach Ihren Leistungen suchen, <strong>Sie</strong> finden.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-12 md:mb-20">
              {/* Left: Explanation */}
              <div>
                <h3 className="text-2xl md:text-3xl font-inter font-bold text-primary mb-4">
                  Messbar mehr Kunden &ndash; <span className="gradient-text">Monat f&uuml;r Monat</span>
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Das Besondere an Local SEO: <strong>Alles ist messbar</strong>. Sie sehen
                  genau, wie viele Menschen Ihr Unternehmen bei Google finden, wie viele
                  auf Ihr Profil klicken und wie sich Ihre Sichtbarkeit entwickelt.
                </p>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Wichtig dabei: Kunden suchen nicht nur &uuml;ber die Google-Websuche &ndash;
                  <strong> Google Maps ist genauso wichtig</strong>. Viele Menschen &ouml;ffnen
                  direkt Google Maps, um Dienstleister in der N&auml;he zu finden. Und was dort
                  angezeigt wird, steuert Ihr <strong>Google Business Profil</strong> &ndash;
                  das wichtigste Werkzeug f&uuml;r lokale Sichtbarkeit heute.
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Im Gegensatz zu Anzeigen, die stoppen sobald das Budget leer ist,
                  <strong> baut sich SEO &uuml;ber die Zeit auf</strong>. Ihre Sichtbarkeit w&auml;chst
                  kontinuierlich &ndash; und bleibt bestehen.
                </p>

                {/* Google Search + Google Maps Channels */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {/* Google Suche */}
                  <div className="relative p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm group/card hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Search className="w-4 h-4 text-accent" />
                      </div>
                      <div className="text-sm font-bold text-primary">Google Suche</div>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      Ihre Website erscheint bei lokalen Suchanfragen auf Seite 1
                    </p>
                    <div className="mt-2.5 flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span className="text-[10px] font-semibold text-green-600">Organische Ergebnisse</span>
                    </div>
                  </div>
                  {/* Google Maps */}
                  <div className="relative p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm group/card hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className="w-8 h-8 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 text-cyan" />
                      </div>
                      <div className="text-sm font-bold text-primary">Google Maps</div>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      Ihr Unternehmen wird direkt auf der Karte gefunden
                    </p>
                    <div className="mt-2.5 flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span className="text-[10px] font-semibold text-green-600">Maps-Eintr&auml;ge</span>
                    </div>
                  </div>
                </div>

                {/* Google Business Profile connector */}
                <Link href="/blog/google-business-profil" className="group relative flex items-center gap-3 p-3 bg-gradient-to-r from-accent/5 via-cyan/5 to-accent/5 rounded-xl border border-accent/15 hover:border-accent/30 hover:shadow-md transition-all">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent to-cyan flex items-center justify-center flex-shrink-0 shadow-md">
                    <Star className="w-4.5 h-4.5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-primary">Google Business Profil</div>
                    <div className="text-[11px] text-slate-500">Steuert beides &ndash; Ihr Auftritt in der Suche <strong>und</strong> auf Maps</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-accent/50 group-hover:text-accent group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                </Link>
              </div>

              {/* Right: Analytics Dashboard Visual */}
              <div>
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
                  {/* Dashboard Header */}
                  <div className="bg-gradient-to-r from-primary to-accent px-4 md:px-6 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-white" />
                      <span className="text-white text-sm font-semibold">SEO Dashboard</span>
                    </div>
                    <div className="text-white/70 text-[10px]">Letzte 6 Monate</div>
                  </div>

                  <div className="p-4 md:p-6">
                    {/* KPI Cards */}
                    <div className="grid grid-cols-3 gap-2 md:gap-3 mb-5">
                      <div className="bg-green-50 rounded-xl p-2.5 md:p-3 border border-green-100">
                        <div className="text-[10px] text-green-600 font-semibold uppercase mb-1">Klicks</div>
                        <div className="text-lg md:text-xl font-inter font-bold text-primary">1.847</div>
                        <div className="flex items-center gap-1 mt-0.5">
                          <TrendingUp className="w-3 h-3 text-green-500" />
                          <span className="text-[10px] font-bold text-green-600">+312%</span>
                        </div>
                      </div>
                      <div className="bg-accent/5 rounded-xl p-2.5 md:p-3 border border-accent/10">
                        <div className="text-[10px] text-accent font-semibold uppercase mb-1">Impressionen</div>
                        <div className="text-lg md:text-xl font-inter font-bold text-primary">14.2K</div>
                        <div className="flex items-center gap-1 mt-0.5">
                          <TrendingUp className="w-3 h-3 text-green-500" />
                          <span className="text-[10px] font-bold text-green-600">+189%</span>
                        </div>
                      </div>
                      <div className="bg-cyan/5 rounded-xl p-2.5 md:p-3 border border-cyan/10">
                        <div className="text-[10px] text-cyan font-semibold uppercase mb-1">Anfragen</div>
                        <div className="text-lg md:text-xl font-inter font-bold text-primary">38</div>
                        <div className="flex items-center gap-1 mt-0.5">
                          <TrendingUp className="w-3 h-3 text-green-500" />
                          <span className="text-[10px] font-bold text-green-600">+420%</span>
                        </div>
                      </div>
                    </div>

                    {/* Growth Chart - CSS only */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-slate-500">Sichtbarkeit &uuml;ber Zeit</span>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-accent" />
                            <span className="text-[10px] text-slate-400">Klicks</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-cyan" />
                            <span className="text-[10px] text-slate-400">Impressionen</span>
                          </div>
                        </div>
                      </div>
                      {/* Bar Chart */}
                      <div className="flex items-end gap-1.5 h-28 md:h-32">
                        {[
                          { month: "Okt", clicks: 8, impressions: 15 },
                          { month: "Nov", clicks: 14, impressions: 25 },
                          { month: "Dez", clicks: 22, impressions: 38 },
                          { month: "Jan", clicks: 35, impressions: 52 },
                          { month: "Feb", clicks: 55, impressions: 72 },
                          { month: "Mrz", clicks: 80, impressions: 95 },
                        ].map((bar, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                            <div className="w-full flex gap-0.5 items-end" style={{ height: '100%' }}>
                              <div
                                className="flex-1 bg-gradient-to-t from-cyan/60 to-cyan/30 rounded-t-sm transition-all duration-500"
                                style={{ height: `${bar.impressions}%` }}
                              />
                              <div
                                className="flex-1 bg-gradient-to-t from-accent to-accent/60 rounded-t-sm transition-all duration-500"
                                style={{ height: `${bar.clicks}%` }}
                              />
                            </div>
                            <span className="text-[9px] text-slate-400 mt-1">{bar.month}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Top Keywords */}
                    <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                      <div className="text-[10px] font-bold text-slate-500 uppercase mb-2">Top Suchbegriffe</div>
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold text-green-600 bg-green-50 w-5 h-5 rounded flex items-center justify-center">#1</span>
                            <span className="text-[11px] text-slate-700">&bdquo;friseur [stadt]&ldquo;</span>
                          </div>
                          <span className="text-[10px] font-bold text-accent">Platz 1</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold text-green-600 bg-green-50 w-5 h-5 rounded flex items-center justify-center">#2</span>
                            <span className="text-[11px] text-slate-700">&bdquo;hairstylist in der n&auml;he&ldquo;</span>
                          </div>
                          <span className="text-[10px] font-bold text-accent">Platz 2</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold text-green-600 bg-green-50 w-5 h-5 rounded flex items-center justify-center">#3</span>
                            <span className="text-[11px] text-slate-700">&bdquo;bester friseur [stadtteil]&ldquo;</span>
                          </div>
                          <span className="text-[10px] font-bold text-accent">Platz 3</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating note */}
                <div className="flex justify-center mt-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 rounded-full border border-green-200 text-[11px] text-green-700 font-semibold">
                    <TrendingUp className="w-3 h-3" />
                    Echte Daten, die Sie jeden Monat sehen
                  </div>
                </div>
              </div>
            </div>

            {/* SEO vs Ads comparison */}
            <div className="max-w-4xl mx-auto">
              <div className="relative card-gradient-border glow-accent overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/3 via-transparent to-cyan/3 rounded-2xl" />
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Ads */}
                  <div className="p-4 md:p-5 bg-red-50/50 rounded-xl border border-red-100/50">
                    <div className="text-xs font-bold text-red-500 uppercase tracking-wider mb-3">Google Anzeigen</div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-red-500 text-[10px] font-bold">&times;</span>
                        </div>
                        <span className="text-sm text-slate-600">Stoppt sofort, wenn Budget leer</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-red-500 text-[10px] font-bold">&times;</span>
                        </div>
                        <span className="text-sm text-slate-600">Kosten pro Klick steigen</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-red-500 text-[10px] font-bold">&times;</span>
                        </div>
                        <span className="text-sm text-slate-600">Kein nachhaltiger Effekt</span>
                      </div>
                    </div>
                  </div>
                  {/* SEO */}
                  <div className="p-4 md:p-5 bg-green-50/50 rounded-xl border border-green-100/50">
                    <div className="text-xs font-bold text-green-600 uppercase tracking-wider mb-3">Local SEO</div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-sm text-slate-600">Rankings bleiben bestehen</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-sm text-slate-600">Wert steigt &uuml;ber die Zeit</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-sm text-slate-600">Nachhaltig mehr Kunden</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 md:mb-16 animate-fade-in-up">
              <h2 className="text-primary mb-4 md:mb-6">Was wir f&uuml;r Ihre Sichtbarkeit tun</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Jede SEO-Strategie wird individuell auf Ihr Unternehmen, Ihre Region und Ihre Ziele zugeschnitten.
              </p>
            </div>

            <div className="space-y-5 md:space-y-8">
              {seoServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="card-gradient-border glow-accent group">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
                      <div>
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-inter font-bold text-primary mb-3">
                          {service.title}
                        </h3>
                        <p className="text-slate-600">{service.description}</p>
                      </div>
                      <div className="md:col-span-2">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-accent to-cyan flex items-center justify-center flex-shrink-0 mt-0.5">
                                <CheckCircle className="w-3 h-3 text-white" />
                              </div>
                              <span className="text-sm text-slate-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-primary text-center mb-4 animate-fade-in-up">Ihre SEO-Erfolgs-Timeline</h2>
            <p className="text-slate-600 text-center mb-8 md:mb-12 max-w-2xl mx-auto">
              SEO ist ein Marathon, kein Sprint. So entwickelt sich Ihre Sichtbarkeit typischerweise:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {timeline.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="card-gradient-border text-center group glow-accent">
                    <div className="relative">
                      <div className="w-14 h-14 gradient-bg-animated rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      {index < timeline.length - 1 && (
                        <div className="hidden md:block absolute top-7 left-[calc(50%+2rem)] w-[calc(100%-2rem)] h-0.5 bg-gradient-to-r from-accent/40 to-accent/10" />
                      )}
                    </div>
                    <div className="text-sm font-semibold text-accent uppercase mb-2">{step.month}</div>
                    <h4 className="font-inter font-bold text-primary mb-2">{step.title}</h4>
                    <p className="text-sm text-slate-600">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-bg-animated" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
        }} />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-4 md:mb-6 animate-fade-in-up">
              Wie sichtbar ist Ihr Unternehmen bei Google?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8">
              In einem kostenlosen Erstgespr&auml;ch analysieren wir Ihre aktuelle
              Online-Sichtbarkeit und zeigen Ihnen konkret, wo Potenzial liegt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="btn bg-white text-primary hover:bg-white/90 btn-shimmer group text-base md:text-lg px-6 py-3 md:px-8 md:py-4"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Kostenlose SEO-Analyse anfragen
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/webdesign"
                className="btn bg-white/10 text-white border border-white/30 hover:bg-white/20 px-6 py-3 md:px-8 md:py-4"
              >
                Webdesign ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
