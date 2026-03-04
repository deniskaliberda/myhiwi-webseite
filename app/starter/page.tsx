import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  Globe,
  Search,
  HeartHandshake,
  Clock,
  EyeOff,
  BadgeDollarSign,
  CalendarClock,
  TrendingUp,
  Server,
  UserCheck,
  Sparkles,
  ArrowDown,
} from "lucide-react";
import StarterFaq from "@/components/StarterFaq";

export const metadata: Metadata = {
  title: "Starter-Paket – Neue Website in 3 Monaten | MyHiwi",
  description:
    "3 Monate, 399 EUR/Monat, neue Website garantiert. Geld-zurück-Garantie. Kein Risiko, keine Bindung. Jetzt Starter-Paket sichern.",
  alternates: {
    canonical: "https://myhiwi.de/starter",
  },
  keywords: [
    "Starter-Paket",
    "Website erstellen lassen",
    "Website für kleine Unternehmen",
    "Local SEO Paket",
    "Webdesign günstig",
    "Website Geld-zurück-Garantie",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Ist das wirklich ohne Risiko?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Wenn die Website Ihnen nach 3 Monaten nicht gefällt, bekommen Sie Ihr Geld zurück. Sie können nach den 3 Monaten jederzeit aufhören — ohne Kündigung, ohne Frist.",
      },
    },
    {
      "@type": "Question",
      name: "Was muss ich dafür tun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nicht viel. Ein kurzes Gespräch am Anfang, ein paar Infos zu Ihrem Unternehmen (wir schicken Ihnen einen einfachen Fragebogen), und Feedback zum Website-Entwurf. Texte erstellen wir für Sie.",
      },
    },
    {
      "@type": "Question",
      name: "Wie schnell ist die Website fertig?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In der Regel ist der Entwurf nach 2–3 Wochen fertig. Nach Ihrem Feedback geht die Seite im zweiten Monat online.",
      },
    },
    {
      "@type": "Question",
      name: "Brauche ich SEO überhaupt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wie finden Ihre Kunden Sie gerade? Wenn die Antwort nicht \u201E\u00DCber Google\u201C ist, lassen Sie wahrscheinlich Auftr\u00E4ge liegen. Wir zeigen Ihnen in 3 Monaten, was m\u00F6glich ist.",
      },
    },
    {
      "@type": "Question",
      name: "Was passiert mit meiner Website nach den 3 Monaten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die Website gehört Ihnen. Sie können sie mitnehmen, bei uns weiter hosten lassen, oder in eines unserer SEO-Pakete übergehen. Die Entscheidung liegt zu 100 % bei Ihnen.",
      },
    },
    {
      "@type": "Question",
      name: "Gibt es versteckte Kosten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nein. 399 EUR/Monat, 3 Monate, fertig. Domain-Kosten (ca. 15 EUR/Jahr) fallen nur an, wenn Sie eine neue Domain brauchen. Alles andere ist inklusive.",
      },
    },
    {
      "@type": "Question",
      name: "Für wen ist das Starter-Paket gedacht?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Für kleine lokale Unternehmen, die entweder keine Website haben oder deren aktuelle Seite veraltet ist. Handwerker, Restaurants, Praxen, Fahrschulen, Pensionen — wenn Sie lokal gefunden werden wollen, ist das Ihr Einstieg.",
      },
    },
  ],
};

const problems = [
  {
    icon: Clock,
    title: "Veraltete Website",
    description:
      "Ihre aktuelle Seite sieht aus wie 2015. Potenzielle Kunden klicken weg, bevor sie anrufen.",
  },
  {
    icon: EyeOff,
    title: "Unsichtbar bei Google",
    description:
      "Wenn jemand nach Ihrem Service sucht, finden sie Ihre Konkurrenz. Nicht Sie.",
  },
  {
    icon: BadgeDollarSign,
    title: "Schlechte Erfahrungen",
    description:
      "Sie haben schon mal für eine Website bezahlt. Es hat ewig gedauert, war teuer, und das Ergebnis war mittelmäßig.",
  },
  {
    icon: CalendarClock,
    title: "Keine Zeit für Marketing",
    description:
      "Sie haben genug damit zu tun, Ihre Kunden zu bedienen. Online-Marketing bleibt liegen.",
  },
];

const services = [
  {
    icon: Globe,
    title: "Professionelle Website (5–8 Seiten)",
    gradient: "from-accent to-blue-700",
    features: [
      "Modernes, responsives Design (Desktop, Tablet, Mobil)",
      "SEO-optimierte Struktur und Ladezeiten",
      "DSGVO-konform (Impressum, Datenschutz, Cookie-Banner)",
      "Texte werden für Sie erstellt — Sie liefern nur die Stichpunkte",
      "2 Revisionsrunden inklusive",
    ],
  },
  {
    icon: Search,
    title: "Sichtbarkeit bei Google",
    gradient: "from-cyan to-accent",
    features: [
      "Google Business Profil: Prüfung und Basis-Optimierung",
      "Keyword-Recherche: 10–15 relevante Suchbegriffe",
      "5 Keywords im laufenden Monitoring",
      "Abschluss-Report: Sichtbarkeit vorher vs. nachher",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Ihr persönlicher Ansprechpartner",
    gradient: "from-primary to-accent",
    features: [
      "Direkter Kontakt zu Denis — kein Callcenter, kein Ticket-System",
      "E-Mail-Support während der gesamten Laufzeit",
      "Hosting inklusive (deutscher Server, SSL, Backups)",
      "Abschlussgespräch mit Ergebnispräsentation und Empfehlung",
    ],
  },
];

const timeline = [
  {
    month: "Monat 1",
    title: "Ihre neue Website entsteht",
    items: [
      "Kurzes Kickoff-Gespräch (15–20 Minuten)",
      "Sie beantworten ein paar Fragen zu Ihrem Unternehmen",
      "Wir erstellen den Entwurf und stimmen ihn mit Ihnen ab",
      "Nach 1–2 Feedbackrunden steht Ihre Website",
    ],
  },
  {
    month: "Monat 2",
    title: "Sichtbar werden",
    items: [
      "Website geht live",
      "Google Business Profil wird optimiert",
      "Keyword-Tracking startet",
    ],
  },
  {
    month: "Monat 3",
    title: "Ergebnisse sehen",
    items: [
      "Erste Rankings werden sichtbar",
      "Abschluss-Report: Was hat sich verändert?",
      "Beratungsgespräch: So könnte es weitergehen (ohne Verpflichtung)",
    ],
  },
];

const pricingFeatures = [
  "Neue Website (5–8 Seiten)",
  "SEO-Grundpaket",
  "Google Business Profil Optimierung",
  "Persönlicher Ansprechpartner",
  "Hosting inklusive",
  "Geld-zurück-Garantie",
  "Keine Bindung nach 3 Monaten",
];

const afterOptions = [
  {
    icon: TrendingUp,
    title: "Weiter wachsen",
    description:
      "Übergehen Sie in eines unserer SEO-Pakete und bauen Sie Ihre Sichtbarkeit weiter aus.",
    price: "Ab 299\u00A0EUR/Monat",
    highlight: true,
  },
  {
    icon: Server,
    title: "Nur Hosting",
    description:
      "Ihre Website bleibt online, wir kümmern uns um Technik und Updates.",
    price: "Ab 99\u00A0EUR/Monat",
    highlight: false,
  },
  {
    icon: UserCheck,
    title: "Eigenständig weitermachen",
    description:
      "Sie nehmen Ihre Website mit und machen alleine weiter. Kein Problem, keine Kosten.",
    price: "0\u00A0EUR",
    highlight: false,
  },
];

export default function StarterPage() {
  return (
    <main className="min-h-screen pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero Section */}
      <section className="relative py-12 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-cyan-50/30" />
        <div className="absolute top-20 right-[10%] w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-[5%] w-80 h-80 bg-cyan/5 rounded-full blur-3xl animate-float-delay" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up stagger-1 inline-flex items-center gap-2 mb-6 px-4 py-2 bg-amber-500/10 rounded-full border border-amber-500/20">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-semibold text-amber-700">
                Limitiertes Pilotangebot
              </span>
            </div>

            <h1 className="animate-fade-in-up stagger-2 text-primary mb-6">
              Neue Website. Mehr Sichtbarkeit.{" "}
              <span className="gradient-text">Null Risiko.</span>
            </h1>

            <div className="animate-fade-in-up stagger-3 flex flex-wrap justify-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full border border-slate-200 text-sm font-medium text-slate-700 shadow-sm">
                3 Monate
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full border border-slate-200 text-sm font-medium text-slate-700 shadow-sm">
                399&nbsp;EUR/Monat
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full border border-slate-200 text-sm font-medium text-slate-700 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                Geld-zur&uuml;ck-Garantie
              </span>
            </div>

            <p className="animate-fade-in-up stagger-3 text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Sie bekommen eine professionelle, moderne Website — inklusive
              SEO-Grundpaket. Gef&auml;llt Ihnen das Ergebnis nicht? Geld
              zur&uuml;ck. Ohne Wenn und Aber.
            </p>

            <div className="animate-fade-in-up stagger-4 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="btn btn-cta btn-shimmer group relative overflow-hidden text-base md:text-lg px-6 py-3 md:px-8 md:py-4"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Jetzt Starter-Paket anfragen
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <a
                href="#leistungen"
                className="btn bg-white text-primary border border-slate-200 hover:bg-slate-50 px-6 py-3 md:px-8 md:py-4 group"
              >
                <span className="flex items-center gap-2">
                  Mehr erfahren
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="text-primary mb-4">
                Kommt Ihnen das bekannt vor?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              {problems.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <div key={index} className="card group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-red-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-inter font-bold text-primary mb-2">
                          {problem.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          {problem.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Bridge */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 bg-accent/10 rounded-full border border-accent/20">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-accent">
                Die L&ouml;sung
              </span>
            </div>
            <h2 className="text-primary mb-6">
              Das Starter-Paket:{" "}
              <span className="gradient-text">Testen statt hoffen</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Keine 12-Monats-Vertr&auml;ge. Kein Risiko. In 3 Monaten haben
              Sie eine neue Website, sind bei Google sichtbar — und entscheiden
              dann frei, wie es weitergeht.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="leistungen" className="py-12 md:py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="text-primary mb-4">
                Alles, was Sie f&uuml;r den Start brauchen
              </h2>
            </div>

            <div className="space-y-5 md:space-y-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="card-gradient-border glow-accent group"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
                      <div>
                        <div
                          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-inter font-bold text-primary mb-3">
                          {service.title}
                        </h3>
                      </div>
                      <div className="md:col-span-2">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-accent to-cyan flex items-center justify-center flex-shrink-0 mt-0.5">
                                <CheckCircle className="w-3 h-3 text-white" />
                              </div>
                              <span className="text-sm text-slate-700">
                                {feature}
                              </span>
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
            <div className="text-center mb-10 md:mb-14">
              <h2 className="text-primary mb-4">
                Ihr Fahrplan:{" "}
                <span className="gradient-text">
                  Von null auf online in 3 Monaten
                </span>
              </h2>
            </div>

            <div className="relative">
              {/* Vertical connecting line */}
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-cyan to-accent/20" />

              <div className="space-y-8 md:space-y-12">
                {timeline.map((step, index) => (
                  <div key={index} className="relative flex gap-5 md:gap-8">
                    {/* Number circle */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-12 h-12 md:w-16 md:h-16 gradient-bg-animated rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white text-lg md:text-xl font-bold">
                          {index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pt-1 md:pt-3 pb-2">
                      <div className="text-sm font-semibold text-accent uppercase mb-1">
                        {step.month}
                      </div>
                      <h3 className="text-xl md:text-2xl font-inter font-bold text-primary mb-3">
                        {step.title}
                      </h3>
                      <ul className="space-y-2">
                        {step.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm md:text-base text-slate-600"
                          >
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="card-gradient-border glow-accent text-center">
              <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-primary mb-4">
                Nicht zufrieden? Geld zur&uuml;ck.
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Wenn wir es in 3 Monaten nicht schaffen, eine professionelle
                Website zu liefern, die Ihnen gef&auml;llt — bekommen Sie Ihr
                Geld zur&uuml;ck. Komplett. Ohne Diskussion.
              </p>
              <p className="text-slate-500 leading-relaxed">
                Warum wir das anbieten? Weil wir wissen, dass Sie begeistert
                sein werden. Das ist unser Vertrauen in unsere Arbeit.
              </p>

              <div className="flex flex-wrap justify-center gap-3 mt-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 rounded-full border border-green-200 text-sm font-medium text-green-700">
                  <ShieldCheck className="w-4 h-4" />
                  Kein Risiko
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 rounded-full border border-green-200 text-sm font-medium text-green-700">
                  <CheckCircle className="w-4 h-4" />
                  Keine versteckten Kosten
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="text-primary mb-4">Transparent und fair</h2>
            </div>

            <div className="max-w-md mx-auto">
              <div className="card-gradient-border glow-accent text-center">
                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 bg-accent/10 rounded-full border border-accent/20">
                  <span className="text-sm font-bold text-accent uppercase tracking-wider">
                    Starter-Paket
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-5xl md:text-6xl font-inter font-bold text-primary">
                    399&nbsp;&euro;
                  </span>
                  <span className="text-xl text-slate-500 font-medium">
                    &thinsp;/&thinsp;Monat
                  </span>
                </div>
                <p className="text-slate-500 mb-8">
                  3 Monate &middot; 1.197&nbsp;EUR gesamt
                </p>

                <ul className="space-y-3 text-left mb-8">
                  {pricingFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-accent to-cyan flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/kontakt"
                  className="btn btn-cta btn-shimmer group relative overflow-hidden w-full text-lg px-8 py-4"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Jetzt anfragen
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>

              <p className="text-center text-sm text-slate-500 mt-6 leading-relaxed">
                Zum Vergleich: Eine vergleichbare Website kostet bei anderen
                Anbietern 3.000–5.000&nbsp;EUR. Bei uns:{" "}
                <strong>1.197&nbsp;EUR</strong> — inklusive SEO-Grundpaket on
                top.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* After 3 Months Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-primary rounded-3xl overflow-hidden px-6 py-12 md:px-12 md:py-16">
              {/* Decorative overlays */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-cyan/15" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="text-center mb-10 md:mb-12">
                  <h2 className="text-white mb-4">Und danach?</h2>
                  <p className="text-lg text-white/80 max-w-2xl mx-auto">
                    Nach 3 Monaten entscheiden Sie frei. Die Website
                    geh&ouml;rt Ihnen — egal was passiert.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                  {afterOptions.map((option, index) => {
                    const Icon = option.icon;
                    return (
                      <div
                        key={index}
                        className={`relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                          option.highlight
                            ? "bg-white/[0.12] backdrop-blur-sm border border-white/30"
                            : "bg-white/[0.07] backdrop-blur-sm border border-white/20"
                        }`}
                      >
                        {option.highlight && (
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                            <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-accent to-cyan text-white text-xs font-bold rounded-full shadow-lg">
                              Beliebt
                            </span>
                          </div>
                        )}
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                            option.highlight
                              ? "bg-gradient-to-br from-accent to-cyan shadow-lg"
                              : "bg-white/10"
                          }`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-inter font-bold text-white mb-2">
                          {option.title}
                        </h3>
                        <p className="text-white/70 mb-4 leading-relaxed">
                          {option.description}
                        </p>
                        <p className="text-sm font-semibold text-cyan-300">
                          {option.price}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="text-primary mb-4">H&auml;ufige Fragen</h2>
            </div>
            <StarterFaq />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-bg-animated" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
          }}
        />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-4 md:mb-6">
              Bereit f&uuml;r Ihren neuen Online-Auftritt?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8">
              Schreiben Sie uns oder rufen Sie an. Wir besprechen in
              15&nbsp;Minuten, ob das Starter-Paket zu Ihnen passt —
              unverbindlich und ehrlich.
            </p>
            <Link
              href="/kontakt"
              className="btn bg-white text-primary hover:bg-white/90 btn-shimmer group text-base md:text-lg px-6 py-3 md:px-8 md:py-4"
            >
              <span className="relative z-10 flex items-center gap-2">
                Jetzt kostenloses Erstgespr&auml;ch vereinbaren
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {[
                "Geld-zurück-Garantie",
                "Keine Bindung nach 3 Monaten",
                "100% DSGVO-konform",
                "Hosting auf deutschen Servern",
              ].map((item, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-full border border-white/20 text-sm text-white/90"
                >
                  <CheckCircle className="w-3.5 h-3.5" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
