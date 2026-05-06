import Link from "next/link";
import { ArrowRight, Home, Search, BookOpen, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-white text-slate-900">
      <section className="relative overflow-hidden pt-28 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 grid-pattern-light mask-radial pointer-events-none" />
        <div
          className="absolute top-[-140px] right-[-100px] h-[500px] w-[500px] rounded-full blur-3xl opacity-50 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.2), transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-[-160px] left-[-120px] h-[420px] w-[420px] rounded-full blur-3xl opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.15), transparent 60%)",
          }}
        />

        <div className="relative mx-auto w-full max-w-3xl px-4 sm:px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">
            <Sparkles className="h-3 w-3 text-blue-600" />
            Fehler 404
          </span>

          <h1 className="mt-6 font-heading text-6xl font-extrabold leading-none tracking-tight text-slate-900 sm:text-7xl md:text-[96px]">
            <span className="gradient-text">404</span>
          </h1>

          <h2 className="mt-6 font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            Diese Seite gibt's nicht (mehr).
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
            Wahrscheinlich ein veralteter Link oder ein Tippfehler in der URL.
            Drei Vorschläge, wo Sie jetzt weiter lesen sollten:
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              {
                icon: Home,
                title: "Startseite",
                desc: "Hiwi-Positionierung & Case Studies",
                href: "/",
              },
              {
                icon: Search,
                title: "Case Studies",
                desc: "Sonnenhof, Sherman, Formazin",
                href: "/case-studies",
              },
              {
                icon: BookOpen,
                title: "Blog",
                desc: "SEO, Ads, KI-Automation",
                href: "/blog",
              },
            ].map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group flex flex-col items-start gap-3 rounded-xl border border-slate-200 bg-white p-5 text-left transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600">
                  <c.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-heading text-base font-bold text-slate-900">
                    {c.title}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{c.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/kontakt"
              className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition-all hover:from-blue-700 hover:to-blue-600"
            >
              Direkt Quick-Check anfragen
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
