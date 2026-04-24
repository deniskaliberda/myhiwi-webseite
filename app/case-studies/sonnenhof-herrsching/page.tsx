import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowLeft,
  Globe,
  Search,
  TrendingUp,
  Target,
  MousePointer,
  ExternalLink,
  Check,
  FileText,
  Code,
  BookOpen,
  Megaphone,
  Languages,
  Wrench,
  Bot,
  Sparkles,
} from "lucide-react";
import BeforeAfterSlider from "@/components/home/BeforeAfterSlider";
import SectionReveal from "@/components/shared/SectionReveal";
import Glossary from "@/components/Glossary";

export const metadata: Metadata = {
  title:
    "Sonnenhof Herrsching — 108 Anfragen in 100 Tagen | MyHiwi Case Study",
  description:
    "Wie ein Hotel am Ammersee nach 23 Jahren Website-Stillstand in 100 Tagen auf 97 Top-10-Keywords, 108 direkte Gästeanfragen und 315 monatliche Besucher kam. Mit SE-Ranking-API-Daten und Google-Ads-Zahlen.",
  alternates: {
    canonical: "https://myhiwi.de/case-studies/sonnenhof-herrsching",
  },
};

/* ======================================================
   SE Ranking API data (2026-04-23) — 6-year history
   Tuple: [year, month, top10_keywords, traffic_estimate]
   ====================================================== */
const HISTORY: number[][] = [
  [2020,2,1,1],[2020,3,1,2],[2020,4,1,2],[2020,5,1,2],[2020,6,1,1],
  [2020,7,1,1],[2020,8,2,1],[2020,9,2,2],[2020,10,1,5],[2020,11,1,8],
  [2020,12,1,9],[2021,1,1,9],[2021,2,1,9],[2021,3,2,11],[2021,4,1,10],
  [2021,5,1,6],[2021,6,1,3],[2021,7,2,5],[2021,8,1,5],[2021,9,1,5],
  [2021,10,2,5],[2021,11,2,5],[2021,12,2,4],[2022,1,2,5],[2022,2,3,8],
  [2022,3,4,12],[2022,4,4,11],[2022,6,5,10],[2022,7,5,9],[2022,8,5,58],
  [2022,9,5,48],[2022,10,6,26],[2022,11,7,6],[2022,12,7,6],[2023,1,6,7],
  [2023,2,5,6],[2023,3,7,9],[2023,4,7,9],[2023,5,6,28],[2023,6,5,22],
  [2023,7,5,19],[2023,8,5,14],[2023,9,8,68],[2023,10,9,101],[2023,11,11,122],
  [2023,12,10,124],[2024,1,12,128],[2024,2,14,127],[2024,3,13,131],[2024,4,13,330],
  [2024,5,15,311],[2024,6,15,292],[2024,7,13,258],[2024,8,18,235],[2024,9,28,226],
  [2024,10,31,234],[2024,11,32,230],[2024,12,31,211],[2025,1,40,226],[2025,2,45,344],
  [2025,3,45,200],[2025,4,45,194],[2025,5,41,106],[2025,6,42,105],[2025,7,39,113],
  [2025,8,35,115],[2025,9,35,191],[2025,10,25,100],[2025,11,24,110],[2025,12,24,115],
  [2026,1,36,146],[2026,2,47,174],[2026,3,46,136],[2026,4,97,315],
];

const heroMetrics = [
  {
    value: "108",
    label: "Direkte Gäste-Anfragen",
    sub: "28. Jan – 23. Apr 2026",
  },
  {
    value: "+304 %",
    label: "Top-10 Keywords",
    sub: "24 (Dez 2025) → 97 (Apr 2026)",
  },
  {
    value: "315",
    label: "Besucher / Monat organisch",
    sub: "Vorher-Tiefpunkt: 100 (Okt 2025)",
  },
];

const keywordBuckets = [
  { label: "Top 1–5", count: 37, width: 37, color: "from-blue-500 to-cyan-500" },
  { label: "Top 6–10", count: 60, width: 60, color: "from-blue-500 to-blue-600" },
  { label: "Top 11–20", count: 33, width: 33, color: "from-blue-400 to-blue-500" },
  { label: "Top 21–50", count: 93, width: 93, color: "from-slate-300 to-slate-400" },
  { label: "Top 51–100", count: 123, width: 123, color: "from-slate-200 to-slate-300" },
];

const timeline100Tage = [
  {
    icon: Code,
    title: "Neue Website live auf Next.js",
    when: "Februar 2026",
    text: "Relaunch nach 23 Jahren unveränderter Alt-Site. Mobile-first, Core Web Vitals grün, 278 sauber strukturierte interne Links, Schema.org Hotel + LocalBusiness + Breadcrumbs.",
  },
  {
    icon: Wrench,
    title: "Technische SEO-Basis + On-Page-Cleanup",
    when: "Februar 2026",
    text: "23 technische Fehler (Duplicate Titles, fehlende Canonicals, doppelte H1s, Kannibalisierungen) komplett eliminiert. Optimierungsscore auf 86 % gehoben.",
  },
  {
    icon: BookOpen,
    title: "Content-Cluster live — 10 Blog-Posts",
    when: "Februar – April 2026",
    text: "Regionale Cluster rund um Ammersee, Familien, Hund, Radfahren, Spielplätze. Jeder Post mit Zielsuche, interner Verlinkung und regionalem Kontext.",
  },
  {
    icon: Megaphone,
    title: "Google Ads Performance Max gestartet",
    when: "10. März 2026",
    text: "2.242 Klicks, 88.713 Impressionen, Ø CPC 0,30 € (Branche 1–3 €), Optimierungsscore 86 %. Ziel: Direkt-Anfragen flankieren, nicht organisch ersetzen.",
  },
  {
    icon: Languages,
    title: "Englische Version live via next-intl",
    when: "26. März 2026",
    text: "~600 Übersetzungskeys, vollständige zweite Sprache für internationale Ammersee-Gäste. DE und EN teilen dieselbe Infrastruktur.",
  },
  {
    icon: Target,
    title: "Kannibalisierung erkannt & gefixt",
    when: "April 2026",
    text: "Mehrere Seiten rankten auf gleiche Keywords gegeneinander. Saubere Content-Hierarchie → Top-10 Keywords von 46 (März) auf 97 (April) verdoppelt.",
  },
];

const capabilities = [
  "Next.js-Website DE + EN mit next-intl (~600 Übersetzungs-Keys)",
  "Core-Web-Vitals-optimierter mobile-first Stack",
  "Schema.org Hotel + LocalBusiness + BreadcrumbList",
  "Google Business Profil vollständig optimiert + verknüpft",
  "Google Ads Konto (Performance Max + Search) mit Conversion-Tracking",
  "Content-Cluster: Ammersee, Familien, Hund, Radfahren, Ausflüge",
  "10 Blog-Posts mit regionalem Kontext",
  "Kannibalisierungs-Analyse + Re-Strukturierung",
  "278 interne Links strukturiert aufgebaut",
  "23 technische Fehler → 0",
  "Monatliches Reporting (SE Ranking API + Google-Daten)",
];

/* ======================================================
   Components — inline SVG charts
   ====================================================== */

function HistoryChart() {
  const W = 1200;
  const H = 360;
  const PAD_L = 40;
  const PAD_R = 20;
  const PAD_T = 20;
  const PAD_B = 48;
  const n = HISTORY.length;
  const maxTop10 = Math.max(...HISTORY.map((d) => d[2]));
  const xOf = (i: number) =>
    PAD_L + (i * (W - PAD_L - PAD_R)) / (n - 1);
  const yOf = (v: number) =>
    PAD_T + (1 - v / maxTop10) * (H - PAD_T - PAD_B);

  const path = HISTORY.map((d, i) =>
    i === 0 ? `M ${xOf(i)} ${yOf(d[2])}` : `L ${xOf(i)} ${yOf(d[2])}`,
  ).join(" ");

  const area = `${path} L ${xOf(n - 1)} ${H - PAD_B} L ${xOf(0)} ${H - PAD_B} Z`;

  // index of 2026-01 (Denis starts)
  const startIdx = HISTORY.findIndex((d) => d[0] === 2026 && d[1] === 1);
  const aprilIdx = n - 1;

  const yearTicks: number[] = [];
  HISTORY.forEach((d, i) => {
    if (d[1] === 1) yearTicks.push(i);
  });

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full h-auto"
      role="img"
      aria-label="Sechs-Jahres-Entwicklung der Top-10-Keywords des Sonnenhof Herrsching: jahrelange Flatline zwischen 1 und 45, dann Sprung von 24 (Dez 2025) auf 97 (Apr 2026)"
    >
      <defs>
        <linearGradient id="histArea" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="histLine" x1="0" x2="1">
          <stop offset="0%" stopColor="#94a3b8" />
          <stop offset="85%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>

      {/* grid horizontal */}
      {[0, 25, 50, 75, 100].map((v) => (
        <g key={v}>
          <line
            x1={PAD_L}
            x2={W - PAD_R}
            y1={yOf(v)}
            y2={yOf(v)}
            stroke="#e2e8f0"
            strokeWidth="1"
            strokeDasharray={v === 0 ? "0" : "3 3"}
          />
          <text
            x={PAD_L - 6}
            y={yOf(v) + 4}
            textAnchor="end"
            fontSize="11"
            fill="#94a3b8"
            fontFamily="JetBrains Mono, ui-monospace, monospace"
          >
            {v}
          </text>
        </g>
      ))}

      {/* year ticks */}
      {yearTicks.map((i) => (
        <g key={i}>
          <line
            x1={xOf(i)}
            x2={xOf(i)}
            y1={H - PAD_B}
            y2={H - PAD_B + 5}
            stroke="#cbd5e1"
          />
          <text
            x={xOf(i)}
            y={H - PAD_B + 20}
            textAnchor="middle"
            fontSize="11"
            fill="#64748b"
            fontFamily="JetBrains Mono, ui-monospace, monospace"
          >
            {HISTORY[i][0]}
          </text>
        </g>
      ))}

      {/* "Denis start" vertical line */}
      {startIdx >= 0 && (
        <g>
          <line
            x1={xOf(startIdx)}
            x2={xOf(startIdx)}
            y1={PAD_T}
            y2={H - PAD_B}
            stroke="#06b6d4"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <rect
            x={xOf(startIdx) + 6}
            y={PAD_T + 6}
            width="168"
            height="38"
            rx="6"
            fill="#0f172a"
          />
          <text
            x={xOf(startIdx) + 14}
            y={PAD_T + 22}
            fontSize="11"
            fontWeight="600"
            fill="#ffffff"
            fontFamily="Inter, sans-serif"
          >
            28. Jan 2026
          </text>
          <text
            x={xOf(startIdx) + 14}
            y={PAD_T + 37}
            fontSize="10"
            fill="#94a3b8"
            fontFamily="Inter, sans-serif"
          >
            MyHiwi übernimmt
          </text>
        </g>
      )}

      {/* area under curve */}
      <path d={area} fill="url(#histArea)" />

      {/* main line */}
      <path
        d={path}
        fill="none"
        stroke="url(#histLine)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* April 2026 peak marker */}
      <g>
        <circle
          cx={xOf(aprilIdx)}
          cy={yOf(HISTORY[aprilIdx][2])}
          r="7"
          fill="#06b6d4"
          stroke="#ffffff"
          strokeWidth="3"
        />
        <circle
          cx={xOf(aprilIdx)}
          cy={yOf(HISTORY[aprilIdx][2])}
          r="14"
          fill="#06b6d4"
          opacity="0.18"
        >
          <animate
            attributeName="r"
            values="14;22;14"
            dur="2.2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.25;0;0.25"
            dur="2.2s"
            repeatCount="indefinite"
          />
        </circle>
        <text
          x={xOf(aprilIdx) - 4}
          y={yOf(HISTORY[aprilIdx][2]) - 16}
          textAnchor="end"
          fontSize="13"
          fontWeight="700"
          fill="#0f172a"
          fontFamily="Inter, sans-serif"
        >
          97
        </text>
        <text
          x={xOf(aprilIdx) - 4}
          y={yOf(HISTORY[aprilIdx][2]) - 2}
          textAnchor="end"
          fontSize="10"
          fill="#64748b"
          fontFamily="Inter, sans-serif"
        >
          Apr 2026
        </text>
      </g>
    </svg>
  );
}

function RequestsChart() {
  // Monthly Anfragen — from the 100-Tage-Report
  // Jan: 0, Feb: ~6, Mar: 41, Apr (23 days): 61 → pace ~80
  const data = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 6 },
    { label: "Mär", value: 41 },
    { label: "Apr", value: 61, isPace: true },
  ];
  const max = 80;
  const W = 640;
  const H = 240;
  const PAD = 40;
  const barW = 80;
  const gap = (W - 2 * PAD - 4 * barW) / 3;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full h-auto"
      role="img"
      aria-label="Monatliche Anfragen über das Website-Formular: Januar 0, Februar 6, März 41, April bis 23. April 61"
    >
      <defs>
        <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="barGradMuted" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
      </defs>

      {/* grid */}
      {[0, 20, 40, 60, 80].map((v) => {
        const y = PAD + (1 - v / max) * (H - PAD - 40);
        return (
          <g key={v}>
            <line x1={PAD} x2={W - PAD} y1={y} y2={y} stroke="#e2e8f0" strokeDasharray={v === 0 ? "0" : "3 3"} />
            <text
              x={PAD - 6}
              y={y + 4}
              textAnchor="end"
              fontSize="11"
              fill="#94a3b8"
              fontFamily="JetBrains Mono, ui-monospace, monospace"
            >
              {v}
            </text>
          </g>
        );
      })}

      {data.map((d, i) => {
        const x = PAD + i * (barW + gap);
        const height = (d.value / max) * (H - PAD - 40);
        const y = H - 40 - height;
        const fill = d.value === 0 ? "#e2e8f0" : i === 3 ? "url(#barGradMuted)" : "url(#barGrad)";
        return (
          <g key={d.label}>
            <rect x={x} y={y} width={barW} height={Math.max(height, 2)} rx="6" fill={fill} />
            {d.value > 0 && (
              <text
                x={x + barW / 2}
                y={y - 8}
                textAnchor="middle"
                fontSize="13"
                fontWeight="700"
                fill="#0f172a"
                fontFamily="Inter, sans-serif"
              >
                {d.value}
              </text>
            )}
            <text
              x={x + barW / 2}
              y={H - 18}
              textAnchor="middle"
              fontSize="12"
              fontWeight="600"
              fill="#475569"
              fontFamily="Inter, sans-serif"
            >
              {d.label}
            </text>
            {d.isPace && (
              <text
                x={x + barW / 2}
                y={H - 4}
                textAnchor="middle"
                fontSize="9"
                fill="#94a3b8"
                fontFamily="JetBrains Mono, ui-monospace, monospace"
              >
                bis 23. Apr
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

/* =========================================================
   PAGE
   ========================================================= */

export default function SonnenhofCaseStudy() {
  return (
    <div className="bg-white text-slate-900">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="absolute inset-0 grid-pattern-light mask-radial pointer-events-none" />
        <div
          className="absolute top-[-140px] right-[-100px] h-[500px] w-[500px] rounded-full blur-3xl opacity-60 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.2), transparent 60%)",
          }}
        />

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-blue-600"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Alle Case Studies
          </Link>

          <div className="mt-6 grid gap-12 lg:grid-cols-[1fr,480px] lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-mono uppercase tracking-[0.14em] text-blue-700">
                <Globe className="h-3 w-3" />
                Case №01 · Sichtbarkeit · Hotel am Ammersee
              </span>

              <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.02] tracking-tight text-slate-900 sm:text-5xl lg:text-[60px]">
                108 Anfragen in{" "}
                <span className="gradient-text">100 Tagen</span> — nach 23 Jahren Stillstand.
              </h1>
              <p className="mt-4 text-lg font-medium text-slate-500">
                Sonnenhof Herrsching · Hotel & Ferienwohnungen direkt am Ammersee
              </p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                Die alte Sonnenhof-Website war seit 2003 faktisch unverändert. Gäste kamen
                über Booking.com —{" "}
                <Glossary term="ota-provision">15–18 % Provision</Glossary>{" "}
                pro Buchung. Zwischen Januar und April 2026 hat MyHiwi die Seite komplett
                neu gebaut, für Google strukturiert und mit{" "}
                <Glossary term="performance-max">Google Ads</Glossary>{" "}
                flankiert. Ergebnis: 108 direkte Gäste-Anfragen und ein Anstieg der{" "}
                <Glossary term="top-10-keywords">Top-10-Keywords</Glossary>{" "}
                auf einen 6-Jahres-Peak.
              </p>

              <a
                href="https://sonnenhof-herrsching.de"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
              >
                sonnenhof-herrsching.de
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="relative">
              <div className="relative rotate-[1.5deg] transition-transform duration-500 hover:rotate-0">
                <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl screenshot-glow-light">
                  <div className="mb-2 flex items-center justify-between px-2">
                    <div className="flex gap-1.5">
                      <i className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                      <i className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                      <i className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    </div>
                    <span className="font-mono text-[10px] tracking-wider text-slate-400">
                      sonnenhof-herrsching.de
                    </span>
                    <span className="w-10" />
                  </div>
                  <div className="overflow-hidden rounded-lg border border-slate-200">
                    <Image
                      src="/case-studies/sonnenhof/sonnenhof-neu.png"
                      alt="Sonnenhof Herrsching — Website nach dem Relaunch"
                      width={460}
                      height={300}
                      priority
                      className="h-auto w-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero metrics bar */}
          <div className="mt-14 grid gap-4 rounded-2xl border border-slate-200 bg-white/80 p-6 backdrop-blur md:grid-cols-3 md:divide-x md:divide-slate-200">
            {heroMetrics.map((m, i) => (
              <div key={m.label} className={i > 0 ? "md:pl-8" : ""}>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
                  {m.label}
                </p>
                <p className="mt-2 font-heading text-3xl font-extrabold leading-none tracking-tight text-slate-900 sm:text-4xl">
                  <span className="gradient-text">{m.value}</span>
                </p>
                <p className="mt-1.5 text-xs text-slate-500">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 6-YEAR HISTORY CHART — THE HERO VIZ ================= */}
      <section className="relative bg-slate-50 py-20 md:py-24">
        <div className="absolute inset-0 grid-pattern-light opacity-50 pointer-events-none" />
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
          <SectionReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
              <Sparkles className="h-3 w-3 text-blue-600" />
              Die wichtigste Zahl · 6 Jahre SE-Ranking-Historie
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Sechs Jahre Flatline.{" "}
              <span className="gradient-text">Dann dieser Sprung.</span>
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
              Die durchgezogene Linie zeigt, wie viele Keywords des Sonnenhofs bei
              Google unter den Top 10 auftauchen — Monat für Monat seit Februar
              2020. Zwischen 1 und maximal 45 Keywords, mit regelmäßigen
              Einbrüchen. Ende 2025 stand Sonnenhof wieder bei 24 Top-10-Keywords.
              Im April 2026 sind es 97 — viermal so viel wie drei Monate vorher,
              doppelt so viel wie je in sechs Jahren gemessen.
            </p>
          </SectionReveal>

          <SectionReveal>
            <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 md:p-8 shadow-sm">
              <HistoryChart />
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
                Quelle: SE Ranking API · Abruf 23.&nbsp;April&nbsp;2026 · Keywords in Top 10 (Google.de)
              </p>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                ["6 Jahre", "Durchschnittlich 12 Top-10-Keywords vor MyHiwi"],
                ["+304 %", "Top-10 Keywords von Dez 2025 bis Apr 2026"],
                ["1× Peak", "Höchster gemessener Wert in der 6-Jahres-Historie"],
              ].map(([v, l]) => (
                <div
                  key={l}
                  className="rounded-xl border border-slate-200 bg-white p-5"
                >
                  <p className="font-heading text-2xl font-extrabold leading-none tracking-tight">
                    <span className="gradient-text">{v}</span>
                  </p>
                  <p className="mt-2 text-sm text-slate-600">{l}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ================= AUSGANGSLAGE ================= */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
          <SectionReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
              <Target className="h-3 w-3 text-blue-600" />
              Ausgangslage · 28.&nbsp;Januar&nbsp;2026
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Ein volles Haus{" "}
              <span className="gradient-text">das Google nicht kannte.</span>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 md:text-lg">
              <p>
                Der Sonnenhof ist ein inhabergeführtes Hotel mit
                Ferienwohnungen direkt am Ammersee. Auslastung offline ist gut,
                aber jede Buchung kam bis Januar 2026 praktisch ausschließlich über
                Booking.com — 15–18&nbsp;% Provision pro Übernachtung.
              </p>
              <p>
                Die Website selbst war seit über 20 Jahren online, in der Struktur
                aber nie erneuert. Die letzte Aktualisierung im Internet Archive
                datiert auf den 14.&nbsp;Dezember 2025. Lange Ladezeiten,
                fehlende mobile Darstellung, keine{" "}
                <Glossary term="schema-org">strukturierten Daten</Glossary>, kein
                Kontaktformular, das Google versteht.
              </p>
              <p>
                Das Ziel der Zusammenarbeit: direkte Gästeanfragen über die eigene
                Seite so weit hochfahren, dass die Portal-Abhängigkeit sinkt und
                jede neue Anfrage dem Haus selbst gehört.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ================= BEFORE / AFTER ================= */}
      <section className="relative bg-slate-50 py-20 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <SectionReveal>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
                <TrendingUp className="h-3 w-3 text-blue-600" />
                Relaunch · Vorher / Nachher
              </span>
              <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                Die gleiche Marke.{" "}
                <span className="gradient-text">Eine komplett neue Bühne.</span>
              </h2>
            </div>
          </SectionReveal>

          <div className="mt-10">
            <SectionReveal>
              <BeforeAfterSlider
                beforeSrc="/case-studies/sonnenhof/sonnenhof-alt.png"
                afterSrc="/case-studies/sonnenhof/sonnenhof-neu.png"
                beforeAlt="Sonnenhof Herrsching — alte Website (Stand Dezember 2025)"
                afterAlt="Sonnenhof Herrsching — neue Next.js-Website nach Relaunch im Februar 2026"
                beforeLabel="Vorher · Dez 2025"
                afterLabel="Nachher · Apr 2026"
              />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ================= 100-TAGE TIMELINE ================= */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <SectionReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
              <ArrowRight className="h-3 w-3 text-blue-600" />
              Was in 100 Tagen passiert ist
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Sechs Bausteine —{" "}
              <span className="gradient-text">zwischen Januar und April 2026.</span>
            </h2>
          </SectionReveal>

          <div className="mt-12 space-y-4">
            {timeline100Tage.map((step, i) => (
              <SectionReveal key={step.title} delay={i * 80}>
                <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 md:grid-cols-[auto,1fr] md:items-start md:gap-8 md:p-8">
                  <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-2">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-md">
                      <step.icon className="h-5 w-5" />
                    </span>
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-slate-500">
                      {step.when}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold tracking-tight text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-slate-600">
                      {step.text}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= REQUESTS CHART ================= */}
      <section className="relative bg-slate-50 py-20 md:py-24">
        <div className="absolute inset-0 grid-pattern-light opacity-50 pointer-events-none" />
        <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6">
          <SectionReveal>
            <div className="grid gap-10 md:grid-cols-[1fr,1fr] md:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
                  <MousePointer className="h-3 w-3 text-blue-600" />
                  Das, wofür wir arbeiten
                </span>
                <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                  108 direkte{" "}
                  <span className="gradient-text">Gäste-Anfragen.</span>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  Jede dieser Anfragen landet direkt beim Sonnenhof — ohne Portal, ohne
                  Provision. Der Aufwärtstrend startet mit dem Relaunch und dem
                  Content-Cluster im Februar, beschleunigt im März nach dem Ads-Launch,
                  und läuft im April auf eine Pace von 80+ Anfragen pro Monat.
                </p>
                <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-400">
                  Quelle: Sonnenhof-Inbox · Jan – 23.&nbsp;Apr&nbsp;2026
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7">
                <RequestsChart />
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ================= KEYWORD PYRAMID ================= */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <SectionReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
              <Search className="h-3 w-3 text-blue-600" />
              Keyword-Pyramide · 243 Keywords · Stand April 2026
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Nicht nur „ranken“.{" "}
              <span className="gradient-text">Ranken, wo Gäste klicken.</span>
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
              Der Sonnenhof steht aktuell für 243 Keywords in den Google-Ergebnissen. Die
              oberen zwei Ränge (Top 10) sind die einzigen, die Besuche bringen — und
              genau dort haben wir in 100 Tagen verdoppelt. Die Lower-Tier-Positionen
              (11–100) sind das Spielfeld der nächsten drei Monate: jedes davon ist ein
              Kandidat zum Hochziehen.
            </p>
          </SectionReveal>

          <SectionReveal>
            <div className="mt-10 space-y-3 rounded-2xl border border-slate-200 bg-white p-7">
              {keywordBuckets.map((k) => {
                const maxWidth = Math.max(...keywordBuckets.map((b) => b.width));
                return (
                  <div key={k.label} className="flex items-center gap-4">
                    <div className="w-24 flex-shrink-0 font-mono text-xs uppercase tracking-[0.1em] text-slate-500">
                      {k.label}
                    </div>
                    <div className="relative h-9 flex-1 overflow-hidden rounded-md bg-slate-100">
                      <div
                        className={`h-full rounded-md bg-gradient-to-r ${k.color} transition-all`}
                        style={{ width: `${(k.width / maxWidth) * 100}%` }}
                      />
                      <span className="absolute inset-y-0 left-3 flex items-center font-heading text-sm font-bold text-white mix-blend-plus-lighter">
                        {k.count}
                      </span>
                    </div>
                    <div className="w-16 flex-shrink-0 text-right font-heading text-xl font-extrabold text-slate-900">
                      {k.count}
                    </div>
                  </div>
                );
              })}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ================= ADS PERFORMANCE ================= */}
      <section className="relative bg-slate-50 py-20 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <SectionReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
              <Megaphone className="h-3 w-3 text-blue-600" />
              Google Ads · Performance Max · März 2026
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Bezahlter Traffic, der{" "}
              <span className="gradient-text">die Branche unterbietet.</span>
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
              Ziel war nicht, das Organische zu ersetzen — sondern die Lücke zu
              schließen, während die neuen Inhalte indexiert werden. Das Ergebnis
              ist eine Kampagne mit CPC-Werten weit unter Branchen-Benchmark.
            </p>
          </SectionReveal>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              ["2.242", "Klicks", "in 22 aktiven Ads-Tagen"],
              ["88.713", "Impressionen", "organisch gestärkt"],
              ["0,30 €", "Ø CPC", "Branche 1 – 3 €"],
              ["86 %", "Optimierungsscore", "Google-Empfehlung"],
            ].map(([v, l, s]) => (
              <SectionReveal key={l}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6">
                  <p className="font-heading text-4xl font-extrabold leading-none tracking-tight">
                    <span className="gradient-text">{v}</span>
                  </p>
                  <p className="mt-3 font-heading text-sm font-bold text-slate-900">
                    {l}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{s}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= QUOTE ================= */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
          <SectionReveal>
            <figure className="rounded-2xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm">
              <MousePointer className="h-8 w-8 text-cyan-500" />
              <blockquote className="mt-5 font-heading text-2xl leading-relaxed tracking-tight text-slate-900 sm:text-3xl">
                „Denis hat nicht nur die Website neu gemacht — er hat verstanden,{" "}
                <span className="gradient-text">
                  warum Gäste zu uns kommen.
                </span>{" "}
                Das ist jetzt bei Google zu sehen."
              </blockquote>
              <figcaption className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-400">
                Conny Bauer · Sonnenhof Herrsching
              </figcaption>
            </figure>
          </SectionReveal>
        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <section className="relative bg-slate-50 py-20 md:py-24">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Was konkret{" "}
              <span className="gradient-text">gebaut wurde.</span>
            </h2>
          </SectionReveal>

          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {capabilities.map((t) => (
              <SectionReveal key={t}>
                <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4">
                  <Check
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-500"
                    strokeWidth={3}
                  />
                  <span className="text-sm text-slate-700">{t}</span>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NEXT ACTIONS ================= */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <SectionReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
              <Bot className="h-3 w-3 text-blue-600" />
              Nächste 90 Tage
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Die Arbeit hört hier{" "}
              <span className="gradient-text">nicht auf.</span>
            </h2>
          </SectionReveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                icon: TrendingUp,
                title: "Quick-Wins: 12 Keywords heben",
                text: "12 Keywords stehen auf Seite 2 mit Suchvolumen ≥ 100. Gezielte On-Page-Schärfung bringt sie in Top-10.",
              },
              {
                icon: BookOpen,
                title: "Familien-Cluster ausbauen",
                text: "Der „Mit-Kindern“-Cluster bringt 16 % aller Anfragen — mit nur 4 Keywords. Drei neue Posts geplant.",
              },
              {
                icon: FileText,
                title: "Ads-Expansion NRW / HH",
                text: "Phase 3: PMax-Kampagnen in NRW, Berlin und Hamburg. Budget-Skalierung basierend auf Conversion-Rate.",
              },
            ].map((n) => (
              <SectionReveal key={n.title}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600">
                    <n.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-bold tracking-tight text-slate-900">
                    {n.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {n.text}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative pb-24 md:pb-32">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 text-center">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Gleiches Muster,{" "}
              <span className="gradient-text">Ihre Region?</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Wenn Sie ein Hotel, eine Ferienwohnung, eine Praxis oder einen
              Handwerksbetrieb führen und bei Google für Ihre Region sichtbar
              werden wollen — reden wir drüber.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/kontakt"
                className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition-all hover:from-blue-700 hover:to-blue-600"
              >
                Kostenloses Erstgespräch
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-medium text-slate-700 transition-all hover:border-slate-400"
              >
                Weitere Case Studies
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
