import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Calendar,
  MapPin,
  TrendingUp,
  BookOpen,
} from "lucide-react";
import SectionReveal from "@/components/shared/SectionReveal";

export const metadata: Metadata = {
  title: "Blog — Tipps zu Local SEO, Webdesign & KI für KMU | MyHiwi",
  description:
    "Praxisnahe Beiträge rund um Local SEO, Google Business Profil, Webdesign und digitale Automation — für lokale Unternehmen, die online besser gefunden werden wollen.",
  keywords: [
    "SEO Blog",
    "Local SEO Tipps",
    "Google Business Profil",
    "Webdesign KMU",
    "KI-Automation",
  ],
  alternates: {
    canonical: "https://myhiwi.de/blog",
  },
};

const blogPosts = [
  {
    slug: "google-business-profil",
    title:
      "Google Business Profil: Warum es für lokale Unternehmen unverzichtbar ist",
    excerpt:
      "Warum Ihr Google Business Profil das wichtigste Werkzeug für lokale Sichtbarkeit ist — und wie Sie es optimal nutzen, um mehr Kunden über Google Maps zu gewinnen.",
    date: "11. Februar 2026",
    readTime: "6 Min. Lesezeit",
    category: "Local SEO",
    icon: MapPin,
  },
];

export default function BlogPage() {
  return (
    <div className="bg-white text-slate-900">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="absolute inset-0 grid-pattern-light mask-radial pointer-events-none" />
        <div
          className="absolute top-[-120px] right-[-80px] h-[420px] w-[420px] rounded-full blur-3xl opacity-55 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.18), transparent 60%)",
          }}
        />

        <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6">
          <SectionReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-mono uppercase tracking-[0.14em] text-blue-700">
              <BookOpen className="h-3 w-3" />
              Blog · Praxis-Notizen
            </span>

            <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-[56px]">
              Wissen für mehr{" "}
              <span className="gradient-text">Sichtbarkeit.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
              Praxisnahe Beiträge zu Local SEO, Google Business Profil, Webdesign
              und digitaler Automation — alles, was lokale Unternehmen online
              weiterbringt.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ================= POSTS ================= */}
      <section className="relative bg-slate-50 py-16 md:py-24">
        <div className="absolute inset-0 grid-pattern-light opacity-40 pointer-events-none" />
        <div className="relative mx-auto w-full max-w-4xl px-4 sm:px-6">
          <div className="space-y-5">
            {blogPosts.map((post, i) => {
              const Icon = post.icon;
              return (
                <SectionReveal key={post.slug} delay={i * 100}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10"
                  >
                    <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-start sm:gap-8 sm:p-8">
                      <div className="flex-shrink-0">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg transition-transform duration-300 group-hover:scale-105">
                          <Icon className="h-8 w-8" />
                        </div>
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="rounded-full bg-blue-50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-blue-700">
                            {post.category}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                            <Calendar className="h-3 w-3" />
                            {post.date}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </span>
                        </div>

                        <h2 className="mt-3 font-heading text-xl font-bold leading-snug tracking-tight text-slate-900 transition-colors group-hover:text-blue-700 sm:text-2xl">
                          {post.title}
                        </h2>

                        <p className="mt-3 text-base leading-relaxed text-slate-600">
                          {post.excerpt}
                        </p>

                        <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition-all group-hover:gap-3">
                          Weiterlesen
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </SectionReveal>
              );
            })}
          </div>

          <SectionReveal>
            <div className="mt-12 rounded-2xl border border-dashed border-slate-300 bg-white/60 p-8 text-center backdrop-blur">
              <TrendingUp className="mx-auto h-6 w-6 text-blue-600" />
              <p className="mt-4 font-heading text-xl font-bold tracking-tight text-slate-900">
                Die spannenden Fälle liegen unter{" "}
                <Link
                  href="/case-studies"
                  className="gradient-text underline-offset-4 hover:underline"
                >
                  Case Studies
                </Link>
                .
              </p>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-600">
                Weitere Blog-Artikel folgen. Wenn Sie direkt sehen wollen, wie
                ich arbeite — werfen Sie einen Blick auf Sonnenhof, Mr. Sherman
                und Formazin.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 text-center">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Fragen zu einem{" "}
              <span className="gradient-text">konkreten Thema?</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Wenn Ihnen ein Artikel zu einem spezifischen Problem fehlt — oder
              wenn Sie direkt Lösungen statt Theorie wollen — lassen Sie uns
              sprechen.
            </p>
            <Link
              href="/kontakt"
              className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition-all hover:from-blue-700 hover:to-blue-600"
            >
              Kostenloses Erstgespräch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
