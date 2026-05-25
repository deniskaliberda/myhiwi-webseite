import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
 ArrowLeft,
 ArrowRight,
 BookOpen,
 Check,
 Code,
 ExternalLink,
 FileText,
 Globe,
 Languages,
 Megaphone,
 MousePointer,
 Quote,
 Repeat,
 Search,
 Sparkles,
 Star,
 Target,
 TrendingUp,
 Wrench,
} from "lucide-react";

import Glossary from "@/components/Glossary";
import { Card } from "@/components/myhiwi/card/Card";
import { BtnGhost } from "@/components/myhiwi/cta/BtnGhost";
import { BtnPrimary } from "@/components/myhiwi/cta/BtnPrimary";
import { Container } from "@/components/myhiwi/layout/Container";
import { Section } from "@/components/myhiwi/layout/Section";
import { SectionMark } from "@/components/myhiwi/layout/SectionMark";
import { BrowserMockup } from "@/components/myhiwi/mockup/BrowserMockup";

export const metadata: Metadata = {
 title:
   "Sonnenhof Herrsching — 199 direkte Gäste-Anfragen in 4 Monaten | MyHiwi Case Study",
 description:
   "Case Study: Wie MyHiwi für Sonnenhof Herrsching in 4 Monaten 199 direkte Anfragen, 1.158 organische Google-Klicks und einen 24-Monats-Folgevertrag aufgebaut hat.",
 alternates: {
   canonical: "https://myhiwi.de/case-studies/sonnenhof-herrsching",
 },
};

/* SE Ranking API data (2026-04-23) — 6-year history
  Tuple: [year, month, top10_keywords, traffic_estimate] */
const HISTORY: number[][] = [
 [2020, 2, 1, 1],
 [2020, 3, 1, 2],
 [2020, 4, 1, 2],
 [2020, 5, 1, 2],
 [2020, 6, 1, 1],
 [2020, 7, 1, 1],
 [2020, 8, 2, 1],
 [2020, 9, 2, 2],
 [2020, 10, 1, 5],
 [2020, 11, 1, 8],
 [2020, 12, 1, 9],
 [2021, 1, 1, 9],
 [2021, 2, 1, 9],
 [2021, 3, 2, 11],
 [2021, 4, 1, 10],
 [2021, 5, 1, 6],
 [2021, 6, 1, 3],
 [2021, 7, 2, 5],
 [2021, 8, 1, 5],
 [2021, 9, 1, 5],
 [2021, 10, 2, 5],
 [2021, 11, 2, 5],
 [2021, 12, 2, 4],
 [2022, 1, 2, 5],
 [2022, 2, 3, 8],
 [2022, 3, 4, 12],
 [2022, 4, 4, 11],
 [2022, 6, 5, 10],
 [2022, 7, 5, 9],
 [2022, 8, 5, 58],
 [2022, 9, 5, 48],
 [2022, 10, 6, 26],
 [2022, 11, 7, 6],
 [2022, 12, 7, 6],
 [2023, 1, 6, 7],
 [2023, 2, 5, 6],
 [2023, 3, 7, 9],
 [2023, 4, 7, 9],
 [2023, 5, 6, 28],
 [2023, 6, 5, 22],
 [2023, 7, 5, 19],
 [2023, 8, 5, 14],
 [2023, 9, 8, 68],
 [2023, 10, 9, 101],
 [2023, 11, 11, 122],
 [2023, 12, 10, 124],
 [2024, 1, 12, 128],
 [2024, 2, 14, 127],
 [2024, 3, 13, 131],
 [2024, 4, 13, 330],
 [2024, 5, 15, 311],
 [2024, 6, 15, 292],
 [2024, 7, 13, 258],
 [2024, 8, 18, 235],
 [2024, 9, 28, 226],
 [2024, 10, 31, 234],
 [2024, 11, 32, 230],
 [2024, 12, 31, 211],
 [2025, 1, 40, 226],
 [2025, 2, 45, 344],
 [2025, 3, 45, 200],
 [2025, 4, 45, 194],
 [2025, 5, 41, 106],
 [2025, 6, 42, 105],
 [2025, 7, 39, 113],
 [2025, 8, 35, 115],
 [2025, 9, 35, 191],
 [2025, 10, 25, 100],
 [2025, 11, 24, 110],
 [2025, 12, 24, 115],
 [2026, 1, 36, 146],
 [2026, 2, 47, 174],
 [2026, 3, 46, 136],
 [2026, 4, 97, 315],
 [2026, 5, 99, 340],
];

const heroMetrics = [
 {
   value: "199",
   label: "direkte Gäste-Anfragen",
   sub: "Formular-Anfragen · 28. Jan – 25. Mai 2026",
 },
 {
   value: "1.158",
   label: "organische Google-Klicks",
   sub: "Search Console · letzte 90 Tage, gemessen",
 },
 {
   value: "99",
   label: "Top-10-Keywords",
   sub: "SE Ranking · Mai 2026 (Start Januar: 36)",
 },
];

const timeline100Tage = [
 {
   icon: Code,
   title: "Neue Website live auf Next.js",
   when: "Februar 2026",
   text: "Relaunch nach jahrelang unveränderter Alt-Site: mobile-first, technisch sauber, mit strukturierter Seitenarchitektur.",
 },
 {
   icon: Wrench,
   title: "Technische SEO-Basis + On-Page-Cleanup",
   when: "Februar 2026",
   text: "Duplicate Titles, fehlende Canonicals, doppelte H1s und Kannibalisierungen wurden bereinigt, damit Google die Seiten sauber einordnen kann.",
 },
 {
   icon: BookOpen,
   title: "Regionale Content-Cluster",
   when: "Februar – April 2026",
   text: "Inhalte rund um Ammersee, Familie, Hund, Radfahren und Ausflüge — jeweils mit regionalem Kontext und interner Verlinkung.",
 },
 {
   icon: Megaphone,
   title: "Google Ads flankiert den Aufbau",
   when: "März 2026",
   text: "Performance-Max/Search als Ergänzung zur organischen Sichtbarkeit — nicht als Ersatz für die eigene Website-Basis.",
 },
 {
   icon: Languages,
   title: "Englische Version live",
   when: "März 2026",
   text: "Zweite Sprache für internationale Ammersee-Gäste, auf derselben Infrastruktur und mit gleicher Inhaltslogik.",
 },
 {
   icon: Target,
   title: "Kannibalisierung erkannt & gefixt",
   when: "April 2026",
   text: "Mehrere Seiten konkurrierten auf ähnliche Suchbegriffe. Die Content-Hierarchie wurde geschärft und priorisiert.",
 },
];

const capabilities = [
 "Next.js-Website DE + EN",
 "Core-Web-Vitals-orientierter mobile-first Stack",
 "Schema.org Hotel + LocalBusiness + BreadcrumbList",
 "Google Business Profil optimiert und verknüpft",
 "Google Ads Konto mit Conversion-Tracking",
 "Content-Cluster: Ammersee, Familie, Hund, Radfahren, Ausflüge",
 "Regionale Blog-Posts mit interner Verlinkung",
 "Kannibalisierungs-Analyse und Re-Strukturierung",
 "Interne Links und Navigationslogik strukturiert aufgebaut",
 "Monatliches Reporting aus SEO- und Anfrage-Daten",
];

const keywordBuckets = [
 { label: "Top 1–5", count: 41, width: 41 },
 { label: "Top 6–10", count: 58, width: 58 },
 { label: "Top 11–20", count: 51, width: 51 },
 { label: "Top 21–50", count: 132, width: 132 },
 { label: "Top 51–100", count: 134, width: 134 },
];

/* GSC top queries · 24. Feb – 25. Mai 2026 (90 days) */
const gscTopQueries: {
 query: string;
 clicks: number;
 position: number;
 tag: "Brand" | "Non-Brand";
}[] = [
 { query: "sonnenhof herrsching", clicks: 125, position: 1.08, tag: "Brand" },
 { query: "ammersee mit hund", clicks: 46, position: 2.79, tag: "Non-Brand" },
 { query: "sonnenhof herrsching am ammersee", clicks: 38, position: 1.0, tag: "Brand" },
 { query: "ammersee mit kindern", clicks: 18, position: 5.36, tag: "Non-Brand" },
 { query: "sonnenhof ammersee", clicks: 17, position: 1.06, tag: "Brand" },
 { query: "urlaub am ammersee", clicks: 15, position: 8.12, tag: "Non-Brand" },
 { query: "ammersee sehenswürdigkeiten pähler schlucht", clicks: 8, position: 6.34, tag: "Non-Brand" },
 { query: "ammersee hundestrand", clicks: 7, position: 4.22, tag: "Non-Brand" },
];

const startingPoints = [
 {
   icon: Globe,
   title: "Website als Broschüre statt Anfrageweg",
   text: "Die alte Seite erklärte das Haus, führte Gäste aber nicht klar von Suche zu Vertrauen und Anfrage.",
 },
 {
   icon: Search,
   title: "Sichtbarkeit ohne klare Cluster",
   text: "Regionale Themen wie Ammersee, Familienurlaub oder Hund waren nicht als zusammenhängende Suchlogik aufgebaut.",
 },
 {
   icon: MousePointer,
   title: "Zu viel Abhängigkeit von Portalen",
   text: "Wenn Gäste zuerst über OTAs kommen, bleibt weniger Marge und weniger Kontrolle über die Beziehung zum Gast.",
 },
];

const systemLayers = [
 {
   label: "01",
   title: "Finden",
   text: "Technische SEO, strukturierte Seiten und regionale Inhalte sorgen dafür, dass relevante Suchanfragen überhaupt erreichbar werden.",
 },
 {
   label: "02",
   title: "Verstehen",
   text: "Die Website erklärt Lage, Angebot, Zielgruppen und Vorteile so, dass Gäste schneller prüfen können: passt das zu meiner Reise?",
 },
 {
   label: "03",
   title: "Anfragen",
   text: "Klare Wege zur direkten Anfrage machen aus Aufmerksamkeit einen messbaren Kontakt im eigenen Postfach.",
 },
 {
   label: "04",
   title: "Nachschärfen",
   text: "SEO-Daten, Anfrage-Daten und Ads-Signale zeigen, welche Themen weiter ausgebaut oder präzisiert werden sollten.",
 },
];

const nextMoves = [
 {
   icon: TrendingUp,
   title: "Seite-2-Keywords priorisieren",
   text: "Keywords auf Position 11–20 werden nicht neu erfunden, sondern gezielt über interne Links, Seitenstruktur und Content-Schärfung angehoben.",
 },
 {
   icon: BookOpen,
   title: "Familien- und Ausflugscluster erweitern",
   text: "Die vorhandenen Themen rund um Ammersee, Kinder, Hund und Aktivitäten werden dort ausgebaut, wo Suchnachfrage und Gästeinteresse zusammenfallen.",
 },
 {
   icon: FileText,
   title: "Direktanfragen sauberer auswerten",
   text: "Nicht nur Anzahl der Anfragen zählt, sondern welche Themen, Aufenthalte und Zielgruppen besonders häufig zu echten Gesprächen führen.",
 },
];

function HistoryChart() {
 const W = 1200;
 const H = 360;
 const PAD_L = 44;
 const PAD_R = 24;
 const PAD_T = 24;
 const PAD_B = 52;
 const n = HISTORY.length;
 const maxTop10 = Math.max(...HISTORY.map((d) => d[2]));
 const xOf = (i: number) => PAD_L + (i * (W - PAD_L - PAD_R)) / (n - 1);
 const yOf = (v: number) => PAD_T + (1 - v / maxTop10) * (H - PAD_T - PAD_B);
 const path = HISTORY.map((d, i) =>
   i === 0 ? `M ${xOf(i)} ${yOf(d[2])}` : `L ${xOf(i)} ${yOf(d[2])}`,
 ).join(" ");
 const area = `${path} L ${xOf(n - 1)} ${H - PAD_B} L ${xOf(0)} ${H - PAD_B} Z`;
 const startIdx = HISTORY.findIndex((d) => d[0] === 2026 && d[1] === 1);
 const aprilIdx = n - 1;
 const yearTicks: number[] = [];

 HISTORY.forEach((d, i) => {
   if (d[1] === 1) yearTicks.push(i);
 });

 return (
   <svg
     viewBox={`0 0 ${W} ${H}`}
     className="h-auto w-full"
     role="img"
     aria-label="Sechs-Jahres-Entwicklung der Top-10-Keywords des Sonnenhof Herrsching bis April 2026"
   >
     <defs>
       <linearGradient id="mhHistArea" x1="0" x2="0" y1="0" y2="1">
         <stop offset="0%" stopColor="var(--mh-glow)" stopOpacity="0.28" />
         <stop offset="100%" stopColor="var(--mh-glow)" stopOpacity="0" />
       </linearGradient>
       <linearGradient id="mhHistLine" x1="0" x2="1">
         <stop offset="0%" stopColor="var(--mh-text-secondary)" />
         <stop offset="82%" stopColor="var(--mh-accent)" />
         <stop offset="100%" stopColor="var(--mh-glow)" />
       </linearGradient>
     </defs>

     {[0, 25, 50, 75, 100].map((v) => (
       <g key={v}>
         <line
           x1={PAD_L}
           x2={W - PAD_R}
           y1={yOf(v)}
           y2={yOf(v)}
           stroke="var(--mh-divider)"
           strokeWidth="1"
           strokeDasharray={v === 0 ? "0" : "3 3"}
         />
         <text
           x={PAD_L - 8}
           y={yOf(v) + 4}
           textAnchor="end"
           fontSize="11"
           fill="var(--mh-text-secondary)"
           fontFamily="JetBrains Mono, ui-monospace, monospace"
         >
           {v}
         </text>
       </g>
     ))}

     {yearTicks.map((i) => (
       <text
         key={i}
         x={xOf(i)}
         y={H - PAD_B + 24}
         textAnchor="middle"
         fontSize="11"
         fill="var(--mh-text-secondary)"
         fontFamily="JetBrains Mono, ui-monospace, monospace"
       >
         {HISTORY[i][0]}
       </text>
     ))}

     {startIdx >= 0 ? (
       <g>
         <line
           x1={xOf(startIdx)}
           x2={xOf(startIdx)}
           y1={PAD_T}
           y2={H - PAD_B}
           stroke="var(--mh-accent)"
           strokeWidth="1.5"
           strokeDasharray="4 4"
         />
         <rect x={xOf(startIdx) + 8} y={PAD_T + 8} width="168" height="40" rx="10" fill="var(--mh-text-primary)" />
         <text x={xOf(startIdx) + 20} y={PAD_T + 25} fontSize="11" fontWeight="700" fill="var(--mh-text-on-dark)">
           Januar 2026
         </text>
         <text x={xOf(startIdx) + 20} y={PAD_T + 40} fontSize="10" fill="var(--mh-glow)">
           MyHiwi übernimmt
         </text>
       </g>
     ) : null}

     <path d={area} fill="url(#mhHistArea)" />
     <path
       d={path}
       fill="none"
       stroke="url(#mhHistLine)"
       strokeWidth="3"
       strokeLinecap="round"
       strokeLinejoin="round"
     />

     <g>
       <circle
         cx={xOf(aprilIdx)}
         cy={yOf(HISTORY[aprilIdx][2])}
         r="8"
         fill="var(--mh-glow)"
         stroke="var(--mh-text-primary)"
         strokeWidth="3"
       />
       <text
         x={xOf(aprilIdx) - 10}
         y={yOf(HISTORY[aprilIdx][2]) - 16}
         textAnchor="end"
         fontSize="14"
         fontWeight="800"
         fill="var(--mh-text-primary)"
       >
         99
       </text>
       <text
         x={xOf(aprilIdx) - 10}
         y={yOf(HISTORY[aprilIdx][2]) - 1}
         textAnchor="end"
         fontSize="10"
         fill="var(--mh-text-secondary)"
       >
         Mai 2026
       </text>
     </g>
   </svg>
 );
}

function RequestsChart() {
 const data = [
   { label: "Jan", value: 1 },
   { label: "Feb", value: 11 },
   { label: "Mär", value: 45 },
   { label: "Apr", value: 57 },
   { label: "Mai", value: 85 },
 ];
 const max = 100;

 return (
   <div className="flex h-72 items-end gap-mh-3 border-b border-mh-divider pb-mh-4">
     {data.map((item) => (
       <div key={item.label} className="flex flex-1 flex-col items-center gap-mh-2">
         <span className="mh-label-mono-sm text-mh-text-primary">{item.value}</span>
         <div className="flex h-48 w-full items-end rounded-mh-sm bg-mh-subtle">
           <div
             className="w-full rounded-mh-sm bg-gradient-to-t from-mh-accent to-mh-glow"
             style={{ height: `${Math.max((item.value / max) * 100, 4)}%` }}
           />
         </div>
         <span className="mh-label-mono-sm text-mh-text-secondary">{item.label}</span>
       </div>
     ))}
   </div>
 );
}

function MetricCard({ value, label, sub }: { value: string; label: string; sub: string }) {
 return (
   <Card padded="compact" className="h-full">
     <p className="mh-label-mono text-mh-text-secondary">{label}</p>
     <p className="mt-mh-2 font-mh-display text-[44px] font-semibold leading-none tracking-mh-display text-mh-accent md:text-[56px]">
       {value}
     </p>
     <p className="mt-mh-2 mh-body-xs text-mh-text-secondary">{sub}</p>
   </Card>
 );
}

export default function SonnenhofCaseStudy() {
 const maxKeywordWidth = Math.max(...keywordBuckets.map((bucket) => bucket.width));

 return (
   <>
     <Section background="paper" padding="large" className="overflow-hidden">
       <Container>
         <Link
           href="/case-studies"
           className="inline-flex items-center gap-mh-2 mh-body-small font-semibold text-mh-text-secondary transition-colors hover:text-mh-accent"
         >
           <ArrowLeft className="h-4 w-4" aria-hidden="true" />
           Alle Case Studies
         </Link>

         <div className="mt-mh-6 grid gap-mh-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
           <div>
             <SectionMark index="01" label="Case Study · Hotel am Ammersee" tone="accent" />
             <h1 className="mt-mh-4 mh-display-1 mh-hero-title">
               Sonnenhof: aus Sichtbarkeit werden direkte Gäste-Anfragen.
             </h1>
             <p className="mt-mh-4 mh-body-medium font-semibold text-mh-text-secondary">
               Sonnenhof Herrsching · Hotel & Ferienwohnungen direkt am Ammersee
             </p>
             <p className="mt-mh-5 max-w-mh-text mh-body-large text-mh-text-secondary">
              Die alte Website war jahrelang faktisch unverändert. Viele Gäste kamen über
              Portale/OTAs — je nach Plattform mit{" "}
              <Glossary term="ota-provision">spürbarer Provision</Glossary>{" "}
              pro Buchung. MyHiwi hat Website, technische SEO, regionale Inhalte und
              Google Ads zu einem messbaren Direktanfrage-System verbunden.
             </p>
             <div className="mt-mh-6 flex flex-col gap-mh-3 sm:flex-row">
               <BtnPrimary href="/kontakt" fullWidthOnMobile>
                 Ähnlichen Check anfragen
               </BtnPrimary>
               <BtnGhost href="https://sonnenhof-herrsching.de" external fullWidthOnMobile>
                 Live-Seite ansehen
                 <ExternalLink className="h-4 w-4" aria-hidden="true" />
               </BtnGhost>
             </div>
           </div>

           <BrowserMockup domain="sonnenhof-herrsching.de" className="mx-auto max-w-[560px]">
             <Image
               src="/case-studies/sonnenhof/sonnenhof-neu.png"
               alt="Sonnenhof Herrsching — Website nach dem Relaunch"
               width={760}
               height={520}
               priority
               className="h-auto w-full object-cover object-top"
             />
           </BrowserMockup>
         </div>

         <div className="mt-mh-8 grid gap-mh-4 md:grid-cols-3">
           {heroMetrics.map((metric) => (
             <MetricCard key={metric.label} {...metric} />
           ))}
         </div>
       </Container>
     </Section>

     <Section background="subtle" padding="large">
       <Container>
         <div className="grid gap-mh-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
           <div>
             <SectionMark index="02" label="SEO-Verlauf" />
             <h2 className="mt-mh-4 mh-display-3">
               Sechs Jahre Linie. Dann ein sichtbarer Sprung.
             </h2>
             <p className="mt-mh-4 mh-body-medium text-mh-text-secondary">
               Die Kurve zeigt, wie viele Keywords des Sonnenhofs bei Google in
               den Top 10 stehen. Ende 2025: 24 Top-10-Keywords. Mai 2026:
               99 Top-10-Keywords — fast eine Vervierfachung in fünf Monaten.
             </p>
             <p className="mt-mh-4 mh-label-mono text-mh-text-secondary">
               Quelle: SE Ranking API · Abruf 8. Mai 2026 · Google.de
             </p>
           </div>
           <Card padded="compact" className="overflow-hidden">
             <HistoryChart />
           </Card>
         </div>
       </Container>
     </Section>

     <Section background="paper" padding="large">
       <Container>
         <div className="grid gap-mh-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
           <div>
             <SectionMark index="03" label="Ausgangslage" />
             <h2 className="mt-mh-4 mh-display-3">
               Ein gutes Haus — aber zu abhängig von fremden Anfragewegen.
             </h2>
             <div className="mt-mh-5 space-y-mh-4 mh-body-medium text-mh-text-secondary">
               <p>
                 Der Sonnenhof ist ein inhabergeführtes Hotel mit Ferienwohnungen
                 direkt am Ammersee. Die Nachfrage war da, aber digitale
                 Sichtbarkeit, Website-Struktur und direkte Anfragewege waren nicht
                 sauber miteinander verbunden.
               </p>
               <p>
                 Das Ziel war nicht nur ein schöner Relaunch. Ziel war ein eigener
                 digitaler Weg: gefunden werden, Vertrauen aufbauen, Anfrage
                 auslösen — ohne jeden Interessenten zuerst an ein Portal zu
                 verlieren.
               </p>
             </div>
           </div>
           <div className="grid gap-mh-4">
             <Card padded="compact" className="overflow-hidden">
               <p className="mb-mh-3 mh-label-mono text-mh-text-secondary">Vorher · alte Website</p>
               <div className="overflow-hidden rounded-mh-md border border-mh-divider bg-mh-subtle">
                 {/* Plain img avoids a rendering issue seen with this legacy screenshot via next/image. */}
                <img
                  src="/case-studies/sonnenhof/sonnenhof-alt.jpg"
                  alt="Sonnenhof Herrsching — alte Website"
                  width={1063}
                  height={745}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full object-cover object-top"
                />
               </div>
             </Card>
             <Card padded="compact" className="overflow-hidden">
               <p className="mb-mh-3 mh-label-mono text-mh-accent">Nachher · neue Website</p>
               <div className="overflow-hidden rounded-mh-md border border-mh-divider bg-mh-subtle">
                 <Image
                   src="/case-studies/sonnenhof/sonnenhof-neu.png"
                   alt="Sonnenhof Herrsching — neue Website nach Relaunch"
                  width={760}
                  height={520}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-auto w-full object-cover object-top"
                 />
               </div>
             </Card>
           </div>
         </div>

         <div className="mt-mh-8 grid gap-mh-4 md:grid-cols-3">
           {startingPoints.map((point) => (
             <Card key={point.title} as="article" padded="compact" className="h-full">
               <span className="inline-flex h-10 w-10 items-center justify-center rounded-mh-sm bg-mh-subtle text-mh-accent">
                 <point.icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
               </span>
               <h3 className="mt-mh-4 mh-display-5">{point.title}</h3>
               <p className="mt-mh-2 mh-body-small text-mh-text-secondary">{point.text}</p>
             </Card>
           ))}
         </div>
       </Container>
     </Section>

     <Section background="ink" padding="large">
       <Container>
         <div className="grid gap-mh-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
           <div>
             <SectionMark index="04" label="Systemlogik" tone="accent" onDark />
             <h2 className="mt-mh-4 mh-display-3 text-mh-text-on-dark">
               Der Relaunch war nur die Oberfläche. Gebaut wurde der Anfrageweg darunter.
             </h2>
             <p className="mt-mh-4 mh-body-medium text-mh-text-on-dark/72">
               Für lokale Hotels reicht es nicht, eine hübsche Website online zu stellen.
               Gäste suchen nach Lage, Anlass, Ausstattung und Vertrauen. Deshalb musste
               die Seite wie ein System funktionieren: Suchanfrage aufnehmen, Kontext geben,
               Entscheidung erleichtern und direkte Kontaktaufnahme ermöglichen.
             </p>
           </div>
           <div className="grid gap-mh-3 md:grid-cols-2">
             {systemLayers.map((layer) => (
               <div
                 key={layer.title}
                 className="rounded-mh-lg border border-mh-text-on-dark/15 bg-mh-text-on-dark/[0.04] p-mh-5"
               >
                 <p className="mh-label-mono text-mh-glow">{layer.label}</p>
                 <h3 className="mt-mh-3 mh-display-5 text-mh-text-on-dark">{layer.title}</h3>
                 <p className="mt-mh-2 mh-body-small text-mh-text-on-dark/70">{layer.text}</p>
               </div>
             ))}
           </div>
         </div>
       </Container>
     </Section>

     <Section background="subtle" padding="large">
       <Container>
         <SectionMark index="05" label="Was gebaut wurde" />
         <div className="mt-mh-4 grid gap-mh-5 lg:grid-cols-[0.78fr_1.22fr]">
           <div>
             <h2 className="mh-display-3">Sechs Bausteine, ein System.</h2>
             <p className="mt-mh-4 mh-body-medium text-mh-text-secondary">
               Die Arbeit lag nicht in einem einzelnen Trick, sondern in der
               Verbindung aus Website, Suchlogik, regionalem Content,
               Anzeigen-Daten und Anfragefluss.
             </p>
           </div>
           <div className="grid gap-mh-4 md:grid-cols-2">
             {timeline100Tage.map((step) => (
               <Card key={step.title} as="article" interactive>
                 <span className="inline-flex h-11 w-11 items-center justify-center rounded-mh-sm bg-mh-accent text-mh-text-on-dark">
                   <step.icon className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
                 </span>
                 <p className="mt-mh-4 mh-label-mono text-mh-text-secondary">{step.when}</p>
                 <h3 className="mt-mh-2 mh-display-5">{step.title}</h3>
                 <p className="mt-mh-2 mh-body-small text-mh-text-secondary">{step.text}</p>
               </Card>
             ))}
           </div>
         </div>
       </Container>
     </Section>

     <Section background="paper" padding="large">
       <Container>
         <div className="grid gap-mh-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
           <div>
             <SectionMark index="06" label="Direktanfragen" tone="accent" />
             <h2 className="mt-mh-4 mh-display-3">
               199 direkte Gäste-Anfragen über das eigene Formular.
             </h2>
             <p className="mt-mh-4 mh-body-medium text-mh-text-secondary">
               Jede Anfrage landet beim Sonnenhof selbst — nicht zuerst bei einem
               Portal. Aus 1 Anfrage im Januar wurden bis 25. Mai 85 Anfragen
               allein im laufenden Monat. Provisionen für Portale entfallen
               für genau diese Buchungen.
             </p>
             <p className="mt-mh-4 mh-label-mono text-mh-text-secondary">
               Quelle: Sonnenhof-Inbox / Formspree-Export · 28. Jan – 25. Mai 2026
             </p>
           </div>
           <Card>
             <RequestsChart />
           </Card>
         </div>
       </Container>
     </Section>

     <Section background="subtle" padding="large">
       <Container>
         <div className="grid gap-mh-8 lg:grid-cols-[0.95fr_1.05fr]">
           <div>
             <SectionMark index="07" label="Keyword-Pyramide" />
             <h2 className="mt-mh-4 mh-display-3">
               Nicht nur ranken — an den Stellen sichtbar werden, wo Gäste klicken.
             </h2>
             <p className="mt-mh-4 mh-body-medium text-mh-text-secondary">
               Der obere Bereich der Suchergebnisse entscheidet. Die Top-10-
               Keywords sind der erste starke Beleg; die Positionen 11–100 zeigen,
               wo weitere Arbeit liegt.
             </p>
           </div>
           <Card className="space-y-mh-3">
             {keywordBuckets.map((bucket) => (
               <div key={bucket.label} className="grid grid-cols-[88px_1fr_48px] items-center gap-mh-3">
                 <span className="mh-label-mono-sm text-mh-text-secondary">{bucket.label}</span>
                 <div className="h-9 overflow-hidden rounded-mh-sm bg-mh-subtle">
                   <div
                     className="h-full rounded-mh-sm bg-gradient-to-r from-mh-accent to-mh-glow"
                     style={{ width: `${(bucket.width / maxKeywordWidth) * 100}%` }}
                   />
                 </div>
                 <span className="text-right font-mh-display text-[22px] font-semibold text-mh-text-primary">
                   {bucket.count}
                 </span>
               </div>
             ))}
             <p className="pt-mh-2 mh-label-mono text-mh-text-secondary">
               Stand Mai 2026 · 416 Keywords in den Top 100
             </p>
           </Card>
         </div>
       </Container>
     </Section>

     <Section background="paper" padding="large">
       <Container>
         <div className="grid gap-mh-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
           <div>
             <SectionMark index="08" label="Was Gäste wirklich gesucht haben" tone="accent" />
             <h2 className="mt-mh-4 mh-display-3">
               1.158 echte Google-Klicks. Und sie sagen, was Gäste suchen.
             </h2>
             <p className="mt-mh-4 mh-body-medium text-mh-text-secondary">
               Die Search Console zählt jeden Klick aus organischer Suche — kein
               Modell, keine Schätzung. In 90 Tagen kamen 1.158 Klicks bei
               56.578 Impressionen zusammen, mobile dominant. Spannender als
               die Summe sind aber die Suchbegriffe: drei Viertel sind regionale
               Themen wie „Ammersee mit Hund" oder „Ausflugsziele Herrsching".
               Genau dort soll der Sonnenhof gefunden werden.
             </p>
             <p className="mt-mh-4 mh-label-mono text-mh-text-secondary">
               Quelle: Google Search Console · 24. Feb – 25. Mai 2026
             </p>
           </div>
           <Card className="overflow-hidden">
             <div className="grid grid-cols-[1fr_auto_auto] items-center gap-mh-3 border-b border-mh-divider pb-mh-3">
               <span className="mh-label-mono-sm text-mh-text-secondary">Suchbegriff</span>
               <span className="mh-label-mono-sm text-mh-text-secondary">Pos.</span>
               <span className="mh-label-mono-sm text-mh-text-secondary text-right w-[64px]">Klicks</span>
             </div>
             <ul className="space-y-mh-3 pt-mh-3">
               {gscTopQueries.map((q) => (
                 <li
                   key={q.query}
                   className="grid grid-cols-[1fr_auto_auto] items-center gap-mh-3"
                 >
                   <div>
                     <span className="mh-body-small font-semibold text-mh-text-primary">
                       {q.query}
                     </span>
                     <span
                       className={`ml-mh-2 inline-block rounded-mh-sm px-mh-1 py-px text-[10px] font-semibold uppercase tracking-wider ${
                         q.tag === "Brand"
                           ? "bg-mh-subtle text-mh-text-secondary"
                           : "bg-mh-accent/10 text-mh-accent"
                       }`}
                     >
                       {q.tag === "Brand" ? "Brand" : "Non-Brand"}
                     </span>
                   </div>
                   <span className="mh-label-mono-sm text-mh-text-secondary tabular-nums">
                     {q.position.toLocaleString("de-DE", { minimumFractionDigits: q.position % 1 === 0 ? 0 : 2, maximumFractionDigits: 2 })}
                   </span>
                   <span className="text-right font-mh-display text-[20px] font-semibold text-mh-text-primary tabular-nums w-[64px]">
                     {q.clicks}
                   </span>
                 </li>
               ))}
             </ul>
             <p className="mt-mh-4 border-t border-mh-divider pt-mh-3 mh-label-mono text-mh-text-secondary">
               Non-Brand-Begriffe = Gäste, die den Sonnenhof vorher nicht kannten.
             </p>
           </Card>
         </div>
       </Container>
     </Section>

     <Section background="subtle" padding="large">
       <Container>
         <SectionMark index="09" label="Konkrete Leistungen" />
         <h2 className="mt-mh-4 max-w-[760px] mh-display-3">
           Was im Hintergrund zusammenarbeiten musste.
         </h2>
         <div className="mt-mh-6 grid gap-mh-3 md:grid-cols-2">
           {capabilities.map((item) => (
             <Card key={item} padded="compact" className="flex items-start gap-mh-3">
               <Check className="mt-1 h-4 w-4 shrink-0 text-mh-accent" strokeWidth={2.2} aria-hidden="true" />
               <span className="mh-body-small text-mh-text-secondary">{item}</span>
             </Card>
           ))}
         </div>
       </Container>
     </Section>

     <Section background="paper" padding="large">
       <Container>
         <div className="grid gap-mh-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
           <div>
             <SectionMark index="10" label="Google Ads" />
             <h2 className="mt-mh-4 mh-display-3">
               Bezahlter Traffic als Verstärker — nicht als Ersatz.
             </h2>
             <p className="mt-mh-4 mh-body-medium text-mh-text-secondary">
               Ads wurden nicht eingesetzt, um eine schwache Website zu überdecken.
               Sie flankierten den organischen Aufbau, lieferten zusätzliche Nachfrage-
               Signale und halfen, relevante Suchintentionen schneller zu erkennen.
               Drei Viertel der Klicks kamen mobil — passend zur Suchsituation am Ammersee.
             </p>
             <p className="mt-mh-4 mh-label-mono text-mh-text-secondary">
               Quelle: Google Ads Konto · 24. Feb – 25. Mai 2026 (90 Tage)
             </p>
           </div>
           <div className="grid gap-mh-4 sm:grid-cols-2">
             {[
               ["4.105", "Klicks", "Google Ads · 90 Tage"],
               ["142.931", "Impressionen", "Sichtbarkeit für Reise-Suchen"],
               ["0,28 €", "Ø CPC", "kontinuierlich unter 30 Cent gehalten"],
               ["90,5 %", "Optimierungsscore", "Google-Konto-Ebene"],
             ].map(([value, label, sub]) => (
               <MetricCard key={label} value={value} label={label} sub={sub} />
             ))}
           </div>
         </div>
       </Container>
     </Section>

     <Section background="ink" padding="large">
       <Container>
         <div className="grid gap-mh-8 lg:grid-cols-[1fr_1fr] lg:items-stretch">
           <div className="flex flex-col">
             <SectionMark index="11" label="Vertrauen, sichtbar gemacht" tone="accent" onDark />
             <h2 className="mt-mh-4 mh-display-3 text-mh-text-on-dark">
               „Mehr als verdoppelt — und komplett neue Gäste."
             </h2>
             <p className="mt-mh-5 mh-body-medium text-mh-text-on-dark/75">
               Aussage von Conny Römmelt im Mai 2026, nach vier Monaten Zusammenarbeit.
               Im selben Monat hat die Familie Römmelt für die nächsten 24 Monate
               verlängert — ohne Druck, ohne Rabatt-Bait, auf Basis der Zahlen
               und der Praxis-Erfahrung im Anfrage-Eingang.
             </p>
             <div className="mt-mh-6 grid gap-mh-3 sm:grid-cols-2 lg:mt-auto">
               <div className="rounded-mh-lg border border-mh-text-on-dark/15 bg-mh-text-on-dark/[0.04] p-mh-5">
                 <span className="inline-flex h-10 w-10 items-center justify-center rounded-mh-sm bg-mh-glow text-mh-ink-950">
                   <Repeat className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                 </span>
                 <p className="mt-mh-3 font-mh-display text-[40px] font-semibold leading-none text-mh-text-on-dark">
                   24
                 </p>
                 <p className="mt-mh-2 mh-label-mono text-mh-glow">
                   Monate Folgevertrag
                 </p>
                 <p className="mt-mh-1 mh-body-xs text-mh-text-on-dark/70">
                   unterschrieben Mai 2026
                 </p>
               </div>
               <div className="rounded-mh-lg border border-mh-text-on-dark/15 bg-mh-text-on-dark/[0.04] p-mh-5">
                 <span className="inline-flex h-10 w-10 items-center justify-center rounded-mh-sm bg-mh-glow text-mh-ink-950">
                   <Star className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                 </span>
                 <p className="mt-mh-3 font-mh-display text-[40px] font-semibold leading-none text-mh-text-on-dark">
                   4,5 ★
                 </p>
                 <p className="mt-mh-2 mh-label-mono text-mh-glow">
                   Google-Bewertungen
                 </p>
                 <p className="mt-mh-1 mh-body-xs text-mh-text-on-dark/70">
                   39 Reviews · Stand Mai 2026
                 </p>
               </div>
             </div>
           </div>
           <div className="flex h-full flex-col gap-mh-4">
             <figure className="flex flex-col rounded-mh-lg border border-mh-text-on-dark/15 bg-mh-text-on-dark/[0.04] p-mh-6">
               <Quote className="h-8 w-8 text-mh-glow" strokeWidth={1.5} aria-hidden="true" />
               <blockquote className="mt-mh-4 mh-body-large italic text-mh-text-on-dark/90">
                 „Es sind viel, viel mehr Anfragen geworden — locker mehr als
                 doppelt so viele. Und das Spannende: Es sind komplett neue
                 Gäste dabei, die uns vorher gar nicht kannten."
               </blockquote>
               <figcaption className="pt-mh-5">
                 <p className="mh-label-mono text-mh-text-on-dark">
                   Conny Römmelt · Sonnenhof Herrsching
                 </p>
                 <p className="mh-body-xs text-mh-text-on-dark/60">
                   Inhaberin · Statement Mai 2026, paraphrasiert
                 </p>
               </figcaption>
             </figure>
             <div className="overflow-hidden rounded-mh-lg border border-mh-text-on-dark/15 bg-mh-text-on-dark/[0.04]">
               <div className="relative aspect-video w-full bg-mh-ink-950">
                 <Image
                   src="/case-studies/sonnenhof/sonnenhof-neu.png"
                   alt="Sonnenhof Herrsching — Video-Statement Conny Römmelt (folgt)"
                   fill
                   sizes="(max-width: 1024px) 100vw, 50vw"
                   className="object-cover opacity-50"
                 />
                 <div className="absolute inset-0 flex flex-col items-center justify-center gap-mh-2 bg-mh-ink-950/50 text-center text-mh-text-on-dark">
                   <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-mh-glow text-mh-ink-950">
                     <svg viewBox="0 0 24 24" className="h-6 w-6 translate-x-px" fill="currentColor" aria-hidden="true">
                       <path d="M8 5v14l11-7z" />
                     </svg>
                   </span>
                   <p className="mh-label-mono">Video-Statement Conny</p>
                   <p className="mh-body-xs text-mh-text-on-dark/70">
                     folgt Juni 2026
                   </p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </Container>
     </Section>

     <Section background="paper" padding="large">
       <Container>
         <div className="grid gap-mh-8 lg:grid-cols-[0.82fr_1.18fr]">
           <div>
             <SectionMark index="12" label="Nächste Arbeit" tone="accent" />
             <h2 className="mt-mh-4 mh-display-3">
               Eine gute Case Study endet nicht beim Screenshot.
             </h2>
             <p className="mt-mh-4 mh-body-medium text-mh-text-secondary">
               Der wichtigste Unterschied: Das System bleibt auswertbar. Neue Inhalte,
               interne Links und Anfrage-Daten werden nicht nach Bauchgefühl geplant,
               sondern aus dem bisherigen Verlauf abgeleitet.
             </p>
           </div>
           <div className="grid gap-mh-4">
             {nextMoves.map((move) => (
               <Card key={move.title} as="article" padded="compact" className="flex gap-mh-4">
                 <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-mh-sm bg-mh-accent text-mh-text-on-dark">
                   <move.icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                 </span>
                 <div>
                   <h3 className="mh-display-5">{move.title}</h3>
                   <p className="mt-mh-2 mh-body-small text-mh-text-secondary">{move.text}</p>
                 </div>
               </Card>
             ))}
           </div>
         </div>
       </Container>
     </Section>

     <Section background="ink" padding="finalCta" finalCta>
       <Container>
         <div className="mx-auto max-w-[860px] text-center">
           <div className="mx-auto mb-mh-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-mh-glow text-mh-ink-950">
             <Sparkles className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
           </div>
           <SectionMark index="13" label="Ihr Projekt" tone="accent" onDark className="justify-center" />
           <h2 className="mt-mh-4 mh-display-2 text-mh-text-on-dark">
             Gleiche Logik für Ihre Region?
           </h2>
           <p className="mx-auto mt-mh-4 max-w-mh-text mh-body-large text-mh-text-on-dark/75">
             Wenn Website, Google, Inhalte, Anzeigen und Anfrageweg aktuell noch
             getrennt laufen, lohnt sich ein kurzer Blick auf das System dahinter.
           </p>
           <div className="mt-mh-6 flex flex-col justify-center gap-mh-3 sm:flex-row">
             <BtnPrimary href="/kontakt" pill fullWidthOnMobile className="bg-mh-glow text-mh-ink-950 hover:bg-mh-text-on-dark">
               Kostenlosen Digital-Check anfragen
             </BtnPrimary>
             <BtnGhost href="/case-studies" fullWidthOnMobile className="border-mh-text-on-dark text-mh-text-on-dark hover:bg-mh-text-on-dark hover:text-mh-ink-950">
               Weitere Cases ansehen
               <ArrowRight className="h-4 w-4" aria-hidden="true" />
             </BtnGhost>
           </div>
         </div>
       </Container>
     </Section>
   </>
 );
}
