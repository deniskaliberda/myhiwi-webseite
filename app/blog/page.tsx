import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, MapPin, TrendingUp, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Local SEO Blog — Tipps für lokale Sichtbarkeit | MyHiwi",
  description: "Praxisnahe Tipps zu Local SEO, Google Business Profil und Webdesign für kleine Unternehmen. Lernen Sie, wie Sie online besser gefunden werden.",
  keywords: ["SEO Blog", "Local SEO Tipps", "Google Business Profil", "Webdesign Tipps", "Online Marketing KMU"],
  alternates: {
    canonical: "https://myhiwi.de/blog",
  },
};

const blogPosts = [
  {
    slug: "sonnenhof-case-study",
    title: "Case Study: Von 0% auf 34,6% Sichtbarkeit in 4 Wochen – Sonnenhof Herrsching",
    excerpt: "Wie eine familiengeführte Pension am Ammersee durch eine neue Website und gezielte SEO-Optimierung 14 Keywords in die Top 3 brachte und den Health Score auf 100/100 steigerte.",
    date: "3. März 2026",
    readTime: "10 Min. Lesezeit",
    category: "Case Study",
    icon: Award,
    gradient: "from-green-500 to-emerald-700",
  },
  {
    slug: "google-business-profil",
    title: "Google Business Profil: Warum es für lokale Unternehmen unverzichtbar ist",
    excerpt: "Erfahren Sie, warum Ihr Google Business Profil das wichtigste Werkzeug für lokale Sichtbarkeit ist – und wie Sie es optimal nutzen, um mehr Kunden zu gewinnen.",
    date: "11. Februar 2026",
    readTime: "6 Min. Lesezeit",
    category: "Local SEO",
    icon: MapPin,
    gradient: "from-accent to-blue-700",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-cyan-50/30" />
        <div className="absolute top-20 right-[10%] w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="animate-fade-in-up stagger-1 inline-flex items-center gap-2 mb-4 md:mb-6 px-3 md:px-4 py-1.5 md:py-2 bg-accent/10 rounded-full border border-accent/20">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm md:text-base font-semibold text-accent">Blog</span>
            </div>

            <h1 className="animate-fade-in-up stagger-2 text-primary mb-4 md:mb-6">
              Wissen f&uuml;r mehr{" "}
              <span className="gradient-text">Sichtbarkeit</span>
            </h1>

            <p className="animate-fade-in-up stagger-3 text-base md:text-xl text-slate-600 max-w-2xl mx-auto">
              Praxisnahe Tipps und Erkl&auml;rungen rund um Local SEO, Google Business Profil
              und Webdesign &ndash; speziell f&uuml;r kleine, lokale Unternehmen.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {blogPosts.map((post) => {
                const Icon = post.icon;
                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block"
                  >
                    <article className="card-gradient-border glow-accent hover:shadow-xl transition-all duration-300">
                      <div className="flex flex-col md:flex-row gap-5 md:gap-8 items-start">
                        {/* Icon / Category */}
                        <div className="flex-shrink-0">
                          <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${post.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <span className="text-xs font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                              {post.category}
                            </span>
                            <div className="flex items-center gap-1.5 text-xs text-slate-400">
                              <Calendar className="w-3 h-3" />
                              {post.date}
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-slate-400">
                              <Clock className="w-3 h-3" />
                              {post.readTime}
                            </div>
                          </div>

                          <h2 className="text-xl md:text-2xl font-inter font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                            {post.title}
                          </h2>

                          <p className="text-slate-600 mb-4 leading-relaxed">
                            {post.excerpt}
                          </p>

                          <div className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
                            Weiterlesen
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>

            {/* More coming soon */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 px-5 py-3 bg-slate-50 rounded-full border border-slate-200 text-sm text-slate-500">
                <TrendingUp className="w-4 h-4 text-accent" />
                Weitere Beitr&auml;ge folgen &ndash; bleiben Sie dran!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 gradient-bg-animated" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-4">
              Fragen zu einem Thema?
            </h2>
            <p className="text-lg text-white/90 mb-6">
              In einem kostenlosen Erstgespr&auml;ch besprechen wir, wie wir Ihre Sichtbarkeit verbessern k&ouml;nnen.
            </p>
            <Link
              href="/kontakt"
              className="btn bg-white text-primary hover:bg-white/90 btn-shimmer group text-base md:text-lg px-6 py-3 md:px-8 md:py-4"
            >
              <span className="relative z-10 flex items-center gap-2">
                Kostenlose Beratung anfragen
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
