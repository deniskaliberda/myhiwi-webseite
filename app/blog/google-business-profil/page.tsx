import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Clock, Calendar, MapPin, Star, Search, Eye, EyeOff, CheckCircle, TrendingUp, BarChart3, Users, Smartphone, MessageCircle, Image as ImageIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Google Business Profil: Warum es für lokale Unternehmen unverzichtbar ist | MyHiwi Blog",
  description: "Erfahren Sie, warum Ihr Google Business Profil das wichtigste Werkzeug für lokale Sichtbarkeit ist. Tipps zur Optimierung und wie Sie mehr Kunden über Google Maps gewinnen.",
  keywords: ["Google Business Profil", "Google Maps SEO", "lokale Sichtbarkeit", "GBP Optimierung", "Local SEO"],
};

export default function GoogleBusinessProfilPost() {
  return (
    <main className="min-h-screen pt-20">
      {/* Article Header */}
      <section className="relative py-10 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-cyan-50/30" />
        <div className="absolute top-10 right-[10%] w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-accent transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Zur&uuml;ck zum Blog
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                Local SEO
              </span>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <Calendar className="w-3 h-3" />
                11. Februar 2026
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <Clock className="w-3 h-3" />
                6 Min. Lesezeit
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-inter font-bold text-primary mb-6 leading-tight">
              Google Business Profil: Warum es f&uuml;r lokale Unternehmen{" "}
              <span className="gradient-text">unverzichtbar</span> ist
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Wenn Menschen in Ihrer N&auml;he nach einer Dienstleistung suchen, ist Ihr
              Google Business Profil oft der <strong>erste Eindruck</strong>, den sie von
              Ihrem Unternehmen bekommen &ndash; noch bevor sie Ihre Website sehen.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Article body */}
            <article className="prose-custom">

              {/* Section 1: Was ist das GBP? */}
              <h2 className="text-2xl md:text-3xl font-inter font-bold text-primary mb-4 mt-0">
                Was ist das Google Business Profil?
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Das Google Business Profil (fr&uuml;her &bdquo;Google My Business&ldquo;) ist ein
                <strong> kostenloser Eintrag</strong> bei Google, mit dem Unternehmen steuern k&ouml;nnen,
                wie sie in der <strong>Google Suche</strong> und auf <strong>Google Maps</strong> angezeigt werden.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Denken Sie daran: Wenn jemand &bdquo;Friseur in meiner N&auml;he&ldquo; oder
                &bdquo;Steuerberater [Stadt]&ldquo; googelt, zeigt Google zwei Dinge: die normalen
                Suchergebnisse <strong>und</strong> eine Karte mit lokalen Unternehmen &ndash;
                das sogenannte <strong>Map Pack</strong>. Und genau hier entscheidet Ihr Google
                Business Profil, ob Kunden Sie finden oder Ihre Konkurrenz.
              </p>

              {/* === MAIN VISUAL: Google Maps Search Results === */}
              <div className="my-8 md:my-12">
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
                  {/* Google Maps Header */}
                  <div className="bg-white border-b border-slate-200 px-4 md:px-6 py-3 md:py-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-red-500" />
                        <span className="font-semibold text-primary text-sm md:text-base">Google Maps</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white border-2 border-slate-200 rounded-full px-4 py-2.5 shadow-sm">
                      <Search className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-sm text-slate-700 font-medium">Steuerberater in meiner N&auml;he</span>
                    </div>
                  </div>

                  {/* Map Area */}
                  <div className="relative bg-slate-100 h-36 md:h-48 overflow-hidden">
                    <div className="absolute inset-0 opacity-25" style={{
                      backgroundImage: `linear-gradient(rgba(148,163,184,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.3) 1px, transparent 1px)`,
                      backgroundSize: `24px 24px`,
                    }} />
                    {/* Roads */}
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-300/60 -translate-y-1/2" />
                    <div className="absolute top-0 bottom-0 left-1/3 w-1 bg-slate-300/60" />
                    <div className="absolute top-0 bottom-0 right-1/4 w-0.5 bg-slate-300/40" />
                    <div className="absolute top-1/3 left-0 right-0 h-0.5 bg-slate-300/40" />

                    {/* Map pins with labels */}
                    <div className="absolute top-6 md:top-8 left-[20%] flex flex-col items-center">
                      <div className="w-7 h-7 md:w-8 md:h-8 bg-red-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                        <span className="text-white text-[8px] md:text-[9px] font-bold">A</span>
                      </div>
                      <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-red-500 -mt-0.5" />
                    </div>
                    <div className="absolute top-12 md:top-16 left-[48%] flex flex-col items-center">
                      <div className="w-7 h-7 md:w-8 md:h-8 bg-red-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                        <span className="text-white text-[8px] md:text-[9px] font-bold">B</span>
                      </div>
                      <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-red-500 -mt-0.5" />
                    </div>
                    <div className="absolute top-8 md:top-10 right-[18%] flex flex-col items-center">
                      <div className="w-7 h-7 md:w-8 md:h-8 bg-red-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                        <span className="text-white text-[8px] md:text-[9px] font-bold">C</span>
                      </div>
                      <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-red-500 -mt-0.5" />
                    </div>
                    {/* Additional faded pins */}
                    <div className="absolute bottom-6 left-[35%] flex flex-col items-center opacity-30">
                      <div className="w-5 h-5 bg-red-400 rounded-full border-2 border-white shadow flex items-center justify-center">
                        <span className="text-white text-[7px] font-bold">D</span>
                      </div>
                    </div>
                    <div className="absolute bottom-10 right-[35%] flex flex-col items-center opacity-30">
                      <div className="w-5 h-5 bg-red-400 rounded-full border-2 border-white shadow flex items-center justify-center">
                        <span className="text-white text-[7px] font-bold">E</span>
                      </div>
                    </div>
                  </div>

                  {/* Search Results List */}
                  <div className="px-4 md:px-6 py-4 md:py-6 space-y-0">
                    {/* Result 1 - TOP, fully optimized */}
                    <div className="relative p-3 md:p-4 rounded-xl bg-green-50/70 border border-green-200/60 mb-2.5">
                      <div className="absolute -left-0.5 top-2 bottom-2 w-1 bg-green-500 rounded-full" />
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs md:text-sm text-green-700 font-bold">A</span>
                            <span className="text-[1px] text-slate-300">&bull;</span>
                            <span className="text-xs md:text-sm text-primary font-bold">Steuerb&uuml;ro Schmidt &amp; Partner</span>
                          </div>
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <span className="text-xs font-bold text-slate-700">4.9</span>
                            <div className="flex">
                              {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 text-yellow-400 fill-yellow-400" />)}
                            </div>
                            <span className="text-[11px] text-slate-400">(142 Bewertungen)</span>
                          </div>
                          <div className="text-[11px] md:text-xs text-slate-500 mb-1">Hauptstra&szlig;e 24 &middot; Ge&ouml;ffnet bis 18:00</div>
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            <span className="text-[9px] md:text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">Profil vollst&auml;ndig</span>
                            <span className="text-[9px] md:text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">Fotos aktuell</span>
                            <span className="text-[9px] md:text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">Antwortet auf Bewertungen</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                          <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded-full">
                            <Eye className="w-3 h-3 text-green-600" />
                            <span className="text-[9px] md:text-[10px] font-bold text-green-700">Meiste Klicks</span>
                          </div>
                          <div className="flex items-center gap-1 bg-accent/10 px-2 py-1 rounded-full">
                            <TrendingUp className="w-3 h-3 text-accent" />
                            <span className="text-[9px] md:text-[10px] font-bold text-accent">Top-optimiert</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Result 2 - Good */}
                    <div className="relative p-3 md:p-4 rounded-xl bg-green-50/40 border border-green-200/30 mb-2.5">
                      <div className="absolute -left-0.5 top-2 bottom-2 w-1 bg-green-400 rounded-full" />
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs md:text-sm text-green-600 font-bold">B</span>
                            <span className="text-[1px] text-slate-300">&bull;</span>
                            <span className="text-xs md:text-sm text-primary font-semibold">Kanzlei Weber Steuerberatung</span>
                          </div>
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <span className="text-xs font-bold text-slate-700">4.7</span>
                            <div className="flex">
                              {[1,2,3,4,5].map(s => <Star key={s} className={`w-3 h-3 ${s <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-400/40 fill-yellow-400/40'}`} />)}
                            </div>
                            <span className="text-[11px] text-slate-400">(87 Bewertungen)</span>
                          </div>
                          <div className="text-[11px] md:text-xs text-slate-500">Marktplatz 8 &middot; Ge&ouml;ffnet bis 17:00</div>
                        </div>
                      </div>
                    </div>

                    {/* Result 3 - Okay */}
                    <div className="relative p-3 md:p-4 rounded-xl bg-green-50/20 border border-green-200/15 mb-4">
                      <div className="absolute -left-0.5 top-2 bottom-2 w-1 bg-green-300 rounded-full" />
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs md:text-sm text-green-500/80 font-bold">C</span>
                            <span className="text-[1px] text-slate-300">&bull;</span>
                            <span className="text-xs md:text-sm text-primary/80 font-semibold">Steuerberatung M&uuml;ller</span>
                          </div>
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <span className="text-xs font-bold text-slate-700">4.5</span>
                            <div className="flex">
                              {[1,2,3,4,5].map(s => <Star key={s} className={`w-3 h-3 ${s <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`} />)}
                            </div>
                            <span className="text-[11px] text-slate-400">(31 Bewertungen)</span>
                          </div>
                          <div className="text-[11px] md:text-xs text-slate-500">Bahnhofstra&szlig;e 3 &middot; Ge&ouml;ffnet bis 16:30</div>
                        </div>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex-1 h-px bg-red-200" />
                      <div className="flex items-center gap-1.5 px-3 py-1 bg-red-50 rounded-full border border-red-200">
                        <EyeOff className="w-3 h-3 text-red-400" />
                        <span className="text-[9px] md:text-[10px] font-bold text-red-500">Kaum sichtbar &ndash; wenige Klicks</span>
                      </div>
                      <div className="flex-1 h-px bg-red-200" />
                    </div>

                    {/* Results 4-6 - Faded, bad profiles */}
                    <div className="space-y-2 opacity-40">
                      <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-[11px] text-slate-400 font-bold">D</span>
                              <div className="w-24 h-2.5 bg-slate-200 rounded" />
                            </div>
                            <div className="flex items-center gap-1 mb-1">
                              <span className="text-[10px] text-slate-400">4.8</span>
                              <div className="flex">
                                {[1,2,3,4,5].map(s => <Star key={s} className="w-2.5 h-2.5 text-yellow-300 fill-yellow-300" />)}
                              </div>
                              <span className="text-[10px] text-slate-300">(4)</span>
                            </div>
                            <div className="w-28 h-1.5 bg-slate-100 rounded" />
                          </div>
                          <div className="flex flex-col gap-1 items-end">
                            <span className="text-[8px] bg-red-50 text-red-400 px-1.5 py-0.5 rounded-full">Kein Foto</span>
                            <span className="text-[8px] bg-red-50 text-red-400 px-1.5 py-0.5 rounded-full">4 Bewertungen</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-[11px] text-slate-400 font-bold">E</span>
                              <div className="w-28 h-2.5 bg-slate-200 rounded" />
                            </div>
                            <div className="flex items-center gap-1 mb-1">
                              <span className="text-[10px] text-slate-400">5.0</span>
                              <div className="flex">
                                {[1,2,3,4,5].map(s => <Star key={s} className="w-2.5 h-2.5 text-yellow-300 fill-yellow-300" />)}
                              </div>
                              <span className="text-[10px] text-slate-300">(2)</span>
                            </div>
                            <div className="w-20 h-1.5 bg-slate-100 rounded" />
                          </div>
                          <div className="flex flex-col gap-1 items-end">
                            <span className="text-[8px] bg-red-50 text-red-400 px-1.5 py-0.5 rounded-full">Unvollst&auml;ndig</span>
                            <span className="text-[8px] bg-red-50 text-red-400 px-1.5 py-0.5 rounded-full">2 Bewertungen</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Caption below visual */}
                <div className="flex justify-center mt-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-slate-200">
                    <Users className="w-4 h-4 text-accent" />
                    <span className="text-xs font-semibold text-slate-700">
                      Ergebnis D hat <span className="text-accent font-bold">5.0 Sterne</span> &ndash; wird aber kaum gefunden, weil das Profil nicht optimiert ist.
                    </span>
                  </div>
                </div>
              </div>

              {/* Key Insight Box */}
              <div className="my-8 p-5 md:p-6 bg-accent/5 rounded-2xl border border-accent/15">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-cyan flex items-center justify-center flex-shrink-0 shadow-md">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary mb-1">Wichtig zu verstehen</div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Die Ergebnisse D und E haben sogar <strong>bessere Bewertungen</strong> (4.8 und 5.0 Sterne) als
                      einige der Top-3-Ergebnisse. Aber sie werden trotzdem kaum gefunden.
                      Der Grund: <strong>zu wenige Bewertungen, unvollst&auml;ndige Profile und fehlende Optimierung</strong>.
                      Die Anzahl und Qualit&auml;t der Bewertungen, zusammen mit einem vollst&auml;ndig ausgef&uuml;llten
                      Profil, entscheidet dar&uuml;ber, wo Google Sie platziert.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 2: Warum so wichtig? */}
              <h2 className="text-2xl md:text-3xl font-inter font-bold text-primary mb-4 mt-10">
                Warum ist das Google Business Profil so wichtig?
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Viele Unternehmer unterschätzen, wie viele Kunden &uuml;ber Google Maps suchen.
                Tats&auml;chlich nutzen viele Menschen <strong>direkt Google Maps</strong>, um lokale
                Dienstleister zu finden &ndash; ohne den Umweg &uuml;ber die Google-Websuche. Und selbst
                bei einer normalen Google-Suche zeigt Google das <strong>Map Pack</strong> prominent
                ganz oben an.
              </p>

              {/* Two channels visual */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Search className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-primary">Google Suche</div>
                      <div className="text-xs text-slate-400">google.com</div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    Bei lokalen Suchanfragen wie &bdquo;Friseur [Stadt]&ldquo; zeigt Google
                    Ihr Business Profil <strong>direkt auf der Ergebnisseite</strong> &ndash;
                    inklusive Bewertungen, Adresse und Fotos.
                  </p>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-accent">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Map Pack + organische Ergebnisse
                  </div>
                </div>
                <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-cyan" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-primary">Google Maps</div>
                      <div className="text-xs text-slate-400">maps.google.com / App</div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    Millionen Menschen suchen <strong>direkt in Google Maps</strong> nach
                    Unternehmen in der N&auml;he. Hier z&auml;hlt nur Ihr Google Business Profil &ndash;
                    Ihre Website spielt kaum eine Rolle.
                  </p>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan" />
                    Rein Business-Profil-basiert
                  </div>
                </div>
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed">
                Das bedeutet: Ihr Google Business Profil ist die <strong>Zentrale</strong> f&uuml;r
                Ihre lokale Sichtbarkeit. Es steuert, wie Sie sowohl in der Google Suche als auch
                auf Google Maps erscheinen. Ohne ein optimiertes Profil verpassen Sie potenziell
                Hunderte von Kundenanfragen pro Monat.
              </p>

              {/* Section 3: Was macht ein gutes Profil aus? */}
              <h2 className="text-2xl md:text-3xl font-inter font-bold text-primary mb-4 mt-10">
                Was macht ein gutes Google Business Profil aus?
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Google bewertet Unternehmensprofile nach drei Faktoren: <strong>Relevanz</strong> (passt
                Ihr Angebot zur Suche?), <strong>Entfernung</strong> (wie nah ist der Suchende?) und
                <strong> Bekanntheit</strong> (wie pr&auml;sent ist Ihr Unternehmen online?). Auf den
                letzten Punkt haben Sie den gr&ouml;&szlig;ten Einfluss.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    icon: CheckCircle,
                    title: "Vollständige Informationen",
                    desc: "Name, Adresse, Telefonnummer, Öffnungszeiten, Website, Beschreibung, Kategorien – alles muss korrekt und vollständig ausgefüllt sein. Google bevorzugt vollständige Profile.",
                  },
                  {
                    icon: Star,
                    title: "Bewertungen aktiv managen",
                    desc: "Bitten Sie zufriedene Kunden um eine Bewertung. Antworten Sie auf jede Bewertung – ob positiv oder negativ. Google sieht aktive Interaktion als positives Signal.",
                  },
                  {
                    icon: ImageIcon,
                    title: "Regelmäßig Fotos hochladen",
                    desc: "Unternehmen mit Fotos erhalten laut Google 42% mehr Anfragen für Wegbeschreibungen und 35% mehr Klicks auf ihre Website.",
                  },
                  {
                    icon: MessageCircle,
                    title: "Posts und Updates nutzen",
                    desc: "Google Business Profil bietet eine Post-Funktion. Teilen Sie Angebote, Neuigkeiten oder Tipps – das zeigt Google, dass Ihr Profil aktiv gepflegt wird.",
                  },
                  {
                    icon: Smartphone,
                    title: "Korrekte Kategorien wählen",
                    desc: "Die Haupt- und Nebenkategorien bestimmen, bei welchen Suchanfragen Google Ihr Unternehmen anzeigt. Wählen Sie so spezifisch wie möglich.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-cyan flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-primary mb-1">{item.title}</div>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Section 4: Impact on SEO */}
              <h2 className="text-2xl md:text-3xl font-inter font-bold text-primary mb-4 mt-10">
                Der Einfluss auf Ihr SEO
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Ihr Google Business Profil ist nicht nur ein Eintrag &ndash; es ist ein
                <strong> wichtiger Ranking-Faktor</strong> f&uuml;r lokale Suchergebnisse.
                Ein gut optimiertes Profil verbessert Ihre Sichtbarkeit in der gesamten
                Google-Suche, nicht nur auf Maps.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Zusammen mit einer <Link href="/webdesign" className="text-accent font-semibold hover:underline">professionellen Website</Link> und
                einer durchdachten <Link href="/seo" className="text-accent font-semibold hover:underline">Local SEO Strategie</Link> bildet
                Ihr Google Business Profil die Grundlage f&uuml;r nachhaltigen Erfolg in den
                lokalen Suchergebnissen.
              </p>

              {/* Impact metrics */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="text-center p-4 bg-accent/5 rounded-xl border border-accent/10">
                  <div className="text-2xl md:text-3xl font-inter font-bold text-accent">84%</div>
                  <div className="text-[10px] md:text-xs text-slate-500 mt-1">der Kunden vertrauen Online-Bewertungen</div>
                </div>
                <div className="text-center p-4 bg-cyan/5 rounded-xl border border-cyan/10">
                  <div className="text-2xl md:text-3xl font-inter font-bold text-cyan">+42%</div>
                  <div className="text-[10px] md:text-xs text-slate-500 mt-1">mehr Anfragen mit Fotos</div>
                </div>
                <div className="text-center p-4 bg-green-500/5 rounded-xl border border-green-500/10">
                  <div className="text-2xl md:text-3xl font-inter font-bold text-green-600">70%</div>
                  <div className="text-[10px] md:text-xs text-slate-500 mt-1">besuchen ein Gesch&auml;ft nach Maps-Suche</div>
                </div>
              </div>

              {/* Conclusion */}
              <h2 className="text-2xl md:text-3xl font-inter font-bold text-primary mb-4 mt-10">
                Fazit: Ihr Profil ist Ihre digitale Visitenkarte
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Ein optimiertes Google Business Profil ist kein &bdquo;Nice-to-have&ldquo; &ndash; es ist
                <strong> die Grundlage</strong> f&uuml;r lokale Online-Sichtbarkeit. Es ist der erste Ort,
                an dem potenzielle Kunden auf Ihr Unternehmen treffen, und oft der entscheidende Faktor,
                ob jemand Sie kontaktiert oder zur Konkurrenz geht.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Die gute Nachricht: Die Optimierung ist kein Hexenwerk &ndash; aber sie erfordert
                Strategie, Konsequenz und Know-how. Genau daf&uuml;r sind wir da.
              </p>
            </article>

            {/* CTA Box */}
            <div className="mt-10 md:mt-14 p-6 md:p-8 card-gradient-border glow-accent text-center">
              <h3 className="text-xl md:text-2xl font-inter font-bold text-primary mb-3">
                Wie gut ist Ihr Google Business Profil?
              </h3>
              <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                In einem kostenlosen Erstgespr&auml;ch pr&uuml;fen wir Ihr Profil und zeigen Ihnen
                konkret, wo Potenzial f&uuml;r mehr Sichtbarkeit liegt.
              </p>
              <Link
                href="/kontakt"
                className="btn btn-cta btn-shimmer group relative overflow-hidden text-base md:text-lg px-6 py-3 md:px-8 md:py-4"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Kostenlose Profil-Analyse anfragen
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>

            {/* Related Links */}
            <div className="mt-10 md:mt-14">
              <h3 className="text-lg font-inter font-bold text-primary mb-4">Weiterf&uuml;hrende Seiten</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/seo"
                  className="group flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-accent/30 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <TrendingUp className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary group-hover:text-accent transition-colors">Local SEO</div>
                    <div className="text-xs text-slate-500">Unsere SEO-Leistungen im Detail</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-accent ml-auto transition-colors" />
                </Link>
                <Link
                  href="/webdesign"
                  className="group flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-accent/30 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan/20 transition-colors">
                    <Smartphone className="w-5 h-5 text-cyan" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary group-hover:text-accent transition-colors">Webdesign</div>
                    <div className="text-xs text-slate-500">Professionelle Websites f&uuml;r KMU</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-accent ml-auto transition-colors" />
                </Link>
              </div>
            </div>

            {/* Back to blog */}
            <div className="mt-10 pt-8 border-t border-slate-200">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-accent transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Zur&uuml;ck zum Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
