import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Smartphone, Shield, Zap, Puzzle, TrendingUp } from "lucide-react";
import ScrollProcess from "@/components/ScrollProcess";

export const metadata: Metadata = {
  title: "Webdesign für KMU — Professionell, schnell & SEO-optimiert | MyHiwi",
  description: "Professionelle, mobile-optimierte Websites für lokale Unternehmen. Modern, schnell und SEO-optimiert – Ihr digitaler Kundenmagnet.",
  keywords: ["Webdesign KMU", "Website erstellen", "mobile-optimierte Website", "Webdesign für kleine Unternehmen"],
  alternates: {
    canonical: "https://myhiwi.de/webdesign",
  },
};

export default function WebdesignPage() {
  const features = [
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "\u00dcber 60% Ihrer Kunden kommen \u00fcber das Handy. Ihre Website sieht auf jedem Ger\u00e4t perfekt aus.",
      gradient: "from-accent to-blue-700",
    },
    {
      icon: Zap,
      title: "Blitzschnelle Ladezeiten",
      description: "Schnelle Seiten ranken besser bei Google und halten Besucher auf der Seite.",
      gradient: "from-cyan to-accent",
    },
    {
      icon: Shield,
      title: "DSGVO-konform & Sicher",
      description: "SSL-Zertifikat, Impressum, Datenschutz und Cookie-Banner \u2013 alles rechtssicher eingerichtet.",
      gradient: "from-green-500 to-emerald-700",
    },
    {
      icon: TrendingUp,
      title: "SEO-Grundoptimierung",
      description: "Titel, Beschreibungen, Struktur und Ladezeiten \u2013 Ihre Seite ist von Anfang an f\u00fcr Google optimiert.",
      gradient: "from-primary to-accent",
    },
  ];

  const websiteIncludes = [
    "5\u20138 Seiten nach Bedarf (Startseite, \u00dcber uns, Leistungen, Kontakt, etc.)",
    "Responsives Design (Handy, Tablet, Desktop)",
    "SEO-Grundoptimierung (Titel, Beschreibungen, Ladezeit)",
    "DSGVO-konform (Impressum, Datenschutz, Cookie-Banner)",
    "SSL-Zertifikat inklusive",
    "Kontaktformular",
    "Google Maps Integration",
    "Hosting-Setup und Domain-Einrichtung",
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section - Showcase Quality */}
      <section className="relative py-16 md:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-cyan-50/30" />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231e3a5f' fill-opacity='1'%3E%3Cpath d='M0 0h1v40H0zM39 0h1v40h-1zM0 0h40v1H0zM0 39h40v1H0z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        {/* Floating decorative elements */}
        <div className="absolute top-20 right-[10%] w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-[5%] w-96 h-96 bg-cyan/5 rounded-full blur-3xl animate-float-delay" />
        <div className="absolute top-1/3 left-[15%] w-3 h-3 bg-accent/30 rounded-full animate-float-slow" />
        <div className="absolute bottom-1/4 right-[25%] w-2 h-2 bg-cyan/40 rounded-full animate-float" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            {/* Left - Text */}
            <div>
              <div className="animate-fade-in-up stagger-1 inline-flex items-center gap-2 mb-4 md:mb-6 px-3 md:px-4 py-1.5 md:py-2 bg-accent/10 rounded-full border border-accent/20">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-sm md:text-base font-semibold text-accent">
                  Webdesign
                </span>
              </div>

              <h1 className="animate-fade-in-up stagger-2 mb-4 md:mb-6 text-primary">
                Ihre Website &ndash;{" "}
                <span className="gradient-text">Ihr digitaler Kundenmagnet</span>
              </h1>

              <p className="animate-fade-in-up stagger-3 text-lg md:text-2xl text-slate-600 mb-6 md:mb-8 leading-relaxed">
                Wir bauen nicht nur Webseiten, wir bauen <strong>digitale Kundenmagneten</strong>.
                Modern, schnell und optimiert &ndash; damit Ihre Kunden Sie online finden und kontaktieren.
              </p>

              <div className="animate-fade-in-up stagger-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/kontakt"
                  className="btn btn-cta btn-shimmer group relative overflow-hidden text-base md:text-lg px-6 py-3 md:px-8 md:py-4"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Kostenloses Erstgespr&auml;ch
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Right - Browser Mockup */}
            <div className="animate-fade-in-right">
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-br from-accent/10 via-cyan/10 to-accent/5 rounded-3xl blur-2xl" />

                {/* Browser Window */}
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden glow-accent">
                  {/* Browser Chrome */}
                  <div className="bg-slate-100 px-4 py-3 flex items-center gap-3 border-b border-slate-200">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 bg-white rounded-lg px-3 py-1 text-xs text-slate-400 border border-slate-200">
                      www.ihr-unternehmen.de
                    </div>
                  </div>

                  {/* Website Preview Content */}
                  <div className="p-6">
                    {/* Mini Nav */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg gradient-bg-animated" />
                        <div className="w-20 h-2 bg-slate-200 rounded-full" />
                      </div>
                      <div className="hidden sm:flex gap-3">
                        <div className="w-12 h-2 bg-slate-200 rounded-full" />
                        <div className="w-12 h-2 bg-slate-200 rounded-full" />
                        <div className="w-12 h-2 bg-slate-200 rounded-full" />
                        <div className="w-16 h-6 bg-accent rounded-md" />
                      </div>
                    </div>

                    {/* Mini Hero */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="space-y-3">
                        <div className="w-3/4 h-4 bg-primary/80 rounded-full" />
                        <div className="w-full h-3 bg-primary/60 rounded-full" />
                        <div className="w-5/6 h-2 bg-slate-200 rounded-full" />
                        <div className="w-2/3 h-2 bg-slate-200 rounded-full" />
                        <div className="mt-4 w-24 h-7 bg-accent rounded-md" />
                      </div>
                      <div className="bg-gradient-to-br from-accent/20 to-cyan/20 rounded-xl aspect-square" />
                    </div>

                    {/* Mini Cards */}
                    <div className="grid grid-cols-3 gap-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-slate-50 rounded-lg p-3 border border-slate-100">
                          <div className="w-6 h-6 rounded-md bg-accent/20 mb-2" />
                          <div className="w-full h-2 bg-slate-200 rounded-full mb-1" />
                          <div className="w-2/3 h-2 bg-slate-100 rounded-full" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Labels */}
                <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-float-slow">
                  Mobile-First
                </div>
                <div className="absolute -bottom-3 -left-3 bg-white rounded-xl shadow-lg p-3 border border-slate-100 animate-float-slow glow-accent">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 font-semibold">Ladezeit</div>
                      <div className="text-sm font-bold text-green-600">&lt; 2 Sek.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 md:mb-16 animate-fade-in-up">
              <h2 className="text-primary mb-4 md:mb-6">Was eine gute Website ausmacht</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Eine Website ist mehr als ein paar Seiten im Internet.
                Sie ist Ihr wichtigster Vertriebskanal &ndash; rund um die Uhr, 7 Tage die Woche.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="card-gradient-border group glow-accent">
                    <div className="flex gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-inter font-bold text-primary mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-slate-600">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Before/After Showcase */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg-animated opacity-[0.03]" />
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 md:mb-16 animate-fade-in-up">
              <h2 className="text-primary mb-4 md:mb-6">Der Unterschied, den gutes Design macht</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Ihre Website ist der erste Eindruck, den Kunden von Ihrem Unternehmen bekommen.
                Machen Sie ihn unvergesslich.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
              {/* Without Card */}
              <div className="relative">
                <div className="absolute -top-3 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                  Ohne professionelle Website
                </div>
                <div className="bg-slate-100 rounded-2xl p-6 border-2 border-slate-200 h-full">
                  <div className="space-y-4 opacity-60">
                    {/* Ugly Nav */}
                    <div className="bg-gray-300 p-3 flex justify-between">
                      <div className="w-16 h-3 bg-gray-400 rounded" />
                      <div className="flex gap-4">
                        <div className="w-10 h-2 bg-gray-400 rounded" />
                        <div className="w-10 h-2 bg-gray-400 rounded" />
                      </div>
                    </div>
                    {/* Ugly Content */}
                    <div className="p-4 space-y-3">
                      <div className="w-full h-4 bg-gray-300 rounded" />
                      <div className="w-3/4 h-3 bg-gray-200 rounded" />
                      <div className="w-5/6 h-3 bg-gray-200 rounded" />
                      <div className="w-full h-20 bg-gray-200 rounded mt-4" />
                    </div>
                  </div>
                  <ul className="mt-6 space-y-2">
                    <li className="flex items-center gap-2 text-sm text-red-600">
                      <span>&#10007;</span> Kunden springen ab
                    </li>
                    <li className="flex items-center gap-2 text-sm text-red-600">
                      <span>&#10007;</span> Schlecht auf Google
                    </li>
                    <li className="flex items-center gap-2 text-sm text-red-600">
                      <span>&#10007;</span> Kein Vertrauen
                    </li>
                  </ul>
                </div>
              </div>

              {/* With Card */}
              <div className="relative">
                <div className="absolute -top-3 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                  Mit MyHiwi Website
                </div>
                <div className="card-gradient-border glow-accent h-full">
                  <div className="space-y-4">
                    {/* Nice Nav */}
                    <div className="bg-white border border-slate-100 rounded-lg p-3 flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-md gradient-bg-animated" />
                        <div className="w-16 h-2 bg-primary/30 rounded-full" />
                      </div>
                      <div className="flex gap-3 items-center">
                        <div className="w-8 h-1.5 bg-slate-200 rounded-full" />
                        <div className="w-8 h-1.5 bg-slate-200 rounded-full" />
                        <div className="w-12 h-5 bg-accent rounded text-[6px] text-white flex items-center justify-center font-bold">CTA</div>
                      </div>
                    </div>
                    {/* Nice Content */}
                    <div className="p-4 space-y-3">
                      <div className="w-full h-4 bg-primary/70 rounded-full" />
                      <div className="w-3/4 h-3 bg-accent/40 rounded-full" />
                      <div className="w-5/6 h-2 bg-slate-200 rounded-full" />
                      <div className="grid grid-cols-3 gap-2 mt-4">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="bg-gradient-to-br from-accent/10 to-cyan/10 rounded-lg p-2 border border-accent/10">
                            <div className="w-4 h-4 rounded bg-accent/20 mb-1" />
                            <div className="w-full h-1.5 bg-slate-200 rounded-full" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-2">
                    <li className="flex items-center gap-2 text-sm text-green-600 font-semibold">
                      <span>&#10003;</span> Kunden bleiben l&auml;nger
                    </li>
                    <li className="flex items-center gap-2 text-sm text-green-600 font-semibold">
                      <span>&#10003;</span> Besser auf Google
                    </li>
                    <li className="flex items-center gap-2 text-sm text-green-600 font-semibold">
                      <span>&#10003;</span> Vertrauen auf den ersten Blick
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
              <h2 className="text-primary mb-4 md:mb-6">Was Sie bekommen</h2>
              <p className="text-lg text-slate-600">
                Jede Website wird individuell f\u00fcr Ihr Unternehmen erstellt.
                Diese Bausteine sind in jeder Website enthalten:
              </p>
            </div>

            <div className="card-gradient-border glow-accent">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {websiteIncludes.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent to-cyan flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 card-gradient-border text-center glow-accent">
              <div className="w-12 h-12 rounded-full gradient-bg-animated flex items-center justify-center mx-auto mb-4">
                <Puzzle className="w-6 h-6 text-white" />
              </div>
              <p className="text-slate-700">
                <strong className="text-primary">Brauchen Sie mehr?</strong>{" "}
                Online-Shop, Buchungssystem, mehrsprachige Seite &ndash; im Erstgespr&auml;ch
                besprechen wir, was Ihr Unternehmen wirklich braucht.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps - Scroll Experience */}
      <ScrollProcess />

      {/* CTA Section */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-bg-animated" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
        }} />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-4 md:mb-6 animate-fade-in-up">
              Bereit f&uuml;r Ihre neue Website?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8">
              Erz&auml;hlen Sie mir von Ihrem Unternehmen &ndash; ich erstelle Ihnen
              ein individuelles Angebot, das zu Ihnen passt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="btn bg-white text-primary hover:bg-white/90 btn-shimmer group text-base md:text-lg px-6 py-3 md:px-8 md:py-4"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Jetzt Anfrage starten
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/seo"
                className="btn bg-white/10 text-white border border-white/30 hover:bg-white/20 px-6 py-3 md:px-8 md:py-4"
              >
                Local SEO ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
