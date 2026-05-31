"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

/* =========================================================================
   MyHiwi · Sonnenhof Case Study · Variante B (Evidence Wall · Data-Editorial)
   Handoff: design_handoff_sonnenhof_B / README.md (2026-05-25)
   ========================================================================= */

const tokenStyles: CSSProperties & Record<`--${string}`, string> = {
  // Atlantik scheme
  "--ink-950": "#0F172A",
  "--ink-800": "#1E293B",
  "--ink-700": "#334155",
  "--blue-600": "#1E40AF",
  "--blue-500": "#2563EB",
  "--blue-400": "#3B82F6",
  "--cyan-500": "#06B6D4",
  "--paper": "#FFFFFF",
  "--subtle": "#F8FAFC",
  "--muted": "#475569",
  "--border-soft": "rgba(15, 23, 42, 0.10)",
  "--border-strong": "rgba(15, 23, 42, 0.18)",
  "--danger": "#DC2626",
  "--warn": "#F59E0B",
  // Fonts (mapped from layout.tsx variables)
  "--font-display": "var(--font-bricolage), system-ui, sans-serif",
  "--font-body": "var(--font-inter-tight), system-ui, sans-serif",
  "--font-mono": "var(--font-jetbrains-mono), ui-monospace, monospace",
  "--font-serif": "var(--font-instrument-serif), Georgia, serif",
  // Shadows
  "--shadow-card": "0 1px 0 rgba(15, 23, 42, 0.04)",
  "--shadow-cta": "0 14px 30px -14px rgba(37, 99, 235, 0.66)",
  "--shadow-hero": "0 30px 80px -30px rgba(15, 23, 42, 0.30)",
  fontFamily: "var(--font-body)",
  color: "var(--ink-950)",
  background: "var(--paper)",
};

/* ===================== DATA ===================== */

/* SE Ranking trajectory — flat 2021–2025, MyHiwi takeover Jan 2026 */
const SEO_POINTS: { y: number; v: number }[] = [
  { y: 2021.0, v: 8 },
  { y: 2021.5, v: 9 },
  { y: 2022.0, v: 10 },
  { y: 2022.5, v: 12 },
  { y: 2023.0, v: 14 },
  { y: 2023.5, v: 13 },
  { y: 2024.0, v: 15 },
  { y: 2024.5, v: 18 },
  { y: 2025.0, v: 20 },
  { y: 2025.5, v: 22 },
  { y: 2025.92, v: 24 },
  { y: 2026.08, v: 36 },
  { y: 2026.17, v: 48 },
  { y: 2026.25, v: 62 },
  { y: 2026.33, v: 78 },
  { y: 2026.42, v: 99 },
];

const ANFRAGEN: { month: string; v: number }[] = [
  { month: "Jan", v: 1 },
  { month: "Feb", v: 11 },
  { month: "Mär", v: 45 },
  { month: "Apr", v: 57 },
  { month: "Mai", v: 85 },
];

const PYRAMID: { label: string; v: number; w: number }[] = [
  { label: "Top 1–5", v: 41, w: 30 },
  { label: "Top 6–10", v: 58, w: 42 },
  { label: "Top 11–20", v: 51, w: 55 },
  { label: "Top 21–50", v: 132, w: 78 },
  { label: "Top 51–100", v: 134, w: 100 },
];

const SEARCH_TERMS: {
  term: string;
  brand: boolean;
  pos: string;
  clicks: number;
}[] = [
  { term: "sonnenhof herrsching", brand: true, pos: "1,08", clicks: 125 },
  { term: "ammersee mit hund", brand: false, pos: "2,79", clicks: 46 },
  { term: "sonnenhof herrsching am ammersee", brand: true, pos: "1", clicks: 38 },
  { term: "ammersee mit kindern", brand: false, pos: "5,36", clicks: 18 },
  { term: "sonnenhof ammersee", brand: true, pos: "1,06", clicks: 17 },
  { term: "urlaub am ammersee", brand: false, pos: "8,12", clicks: 15 },
  { term: "ammersee sehenswürdigkeiten pähler schlucht", brand: false, pos: "6,34", clicks: 8 },
  { term: "ammersee hundestrand", brand: false, pos: "4,22", clicks: 7 },
];

const SYSTEM_STEPS = [
  {
    n: "01",
    h: "Finden",
    b: "Technische SEO, strukturierte Seiten, regionale Inhalte — relevante Suchanfragen werden erreichbar.",
  },
  {
    n: "02",
    h: "Verstehen",
    b: "Lage, Angebot, Zielgruppen und Vorteile so erklärt, dass Gäste schneller prüfen: passt das zu meiner Reise?",
  },
  {
    n: "03",
    h: "Anfragen",
    b: "Klare Wege zur direkten Anfrage machen aus Aufmerksamkeit einen messbaren Kontakt im eigenen Postfach.",
  },
  {
    n: "04",
    h: "Nachschärfen",
    b: "SEO-, Anfrage- und Ads-Signale zeigen, welche Themen ausgebaut oder präzisiert werden sollten.",
  },
];

const BUILD_LOG = [
  {
    date: "Feb 2026",
    tag: "A · Web",
    h: "Neue Website live auf Next.js",
    b: "Mobile-first, technisch sauber, strukturierte Seitenarchitektur.",
  },
  {
    date: "Feb 2026",
    tag: "B · SEO",
    h: "Technische SEO-Basis",
    b: "Duplicate Titles, fehlende Canonicals, doppelte H1s und Kannibalisierungen bereinigt.",
  },
  {
    date: "Feb–Apr 2026",
    tag: "C · Content",
    h: "Regionale Content-Cluster",
    b: "Ammersee, Familie, Hund, Radfahren, Ausflüge — mit interner Verlinkung.",
  },
  {
    date: "Mär 2026",
    tag: "D · Ads",
    h: "Google Ads flankiert",
    b: "Performance-Max/Search als Ergänzung zur organischen Sichtbarkeit.",
  },
  {
    date: "Mär 2026",
    tag: "E · i18n",
    h: "Englische Version live",
    b: "Zweite Sprache für internationale Ammersee-Gäste, gleiche Infrastruktur.",
  },
  {
    date: "Apr 2026",
    tag: "F · Refine",
    h: "Kannibalisierung gefixt",
    b: "Content-Hierarchie geschärft und priorisiert. Top-10-Keywords stiegen weiter.",
  },
];

const EVIDENCE_TILES: {
  label: string;
  sub: string;
  big: string;
  unit?: string;
  delta?: string;
  tag?: string;
  hero?: boolean;
}[] = [
  {
    hero: true,
    label: "direkte Anfragen",
    sub: "Formspree · 28. Jan – 25. Mai 2026",
    big: "199",
    tag: "Plattform-frei",
  },
  { label: "Google-Klicks", sub: "Search Console · 90 Tage", big: "1.158" },
  {
    label: "Top-10-Keywords",
    sub: "SE Ranking · Mai 2026",
    big: "99",
    delta: "+63 ggü. Jan",
  },
  { label: "Folgevertrag", sub: "unterschrieben Mai 2026", big: "24", unit: "Monate" },
  { label: "Ø CPC · Ads", sub: "Google Ads · 90 Tage", big: "0,28", unit: "€" },
];

const STATS_ROW: { num: string; unit?: string; label: string; sub: string }[] = [
  { num: "24", unit: "Mon.", label: "Folgevertrag", sub: "Mai 2026 verlängert" },
  { num: "4,5", unit: "★", label: "Google-Reviews", sub: "39 Reviews · Mai 2026" },
  { num: "4.105", label: "Ads-Klicks", sub: "Google Ads · 90 Tage" },
  { num: "90,5", unit: "%", label: "Ads-Score", sub: "Konto-Optimierung" },
];

const BANNER_STATS: { num: string; unit?: string; label: string; sub: string }[] = [
  { num: "80", unit: "%", label: "Belegung über die eigene Website", sub: "O-Ton Conny · Mai 2026" },
  { num: "199", label: "direkte Anfragen", sub: "Formspree · 28. Jan – 25. Mai" },
  { num: "jede 3.", label: "Anfrage wird zur Buchung", sub: "~700 € Ø · Schätzung" },
];

/* ===================== HOOKS ===================== */

function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setSeen(true);
            io.disconnect();
          }
        });
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, seen };
}

function useEasedProgress(active: boolean, durationMs = 1400) {
  const [t, setT] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
      setT(eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, durationMs]);
  return t;
}

/* ===================== ATOMS ===================== */

function Reveal({
  delay = 0,
  children,
  className = "",
  style,
}: {
  delay?: number;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  const { ref, seen } = useInView<HTMLDivElement>(0.15);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: seen ? 1 : 0,
        transform: seen ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) ${delay}ms, transform 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function SectionMark({
  num,
  label,
  accent = false,
  onDark = false,
}: {
  num: string;
  label: string;
  accent?: boolean;
  onDark?: boolean;
}) {
  const numColor = onDark ? "var(--cyan-500)" : accent ? "var(--blue-500)" : "var(--ink-950)";
  const labelColor = onDark ? "rgba(255,255,255,0.7)" : "var(--muted)";
  const hairBg = onDark ? "var(--cyan-500)" : "var(--ink-950)";
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: labelColor,
      }}
    >
      <span style={{ color: numColor, fontWeight: 700 }}>{num}</span>
      <span
        style={{
          width: 28,
          height: 1,
          background: hairBg,
          opacity: onDark ? 1 : 0.7,
        }}
      />
      <span>{label}</span>
    </div>
  );
}

function Pill({ children, active = false }: { children: ReactNode; active?: boolean }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "5px 10px",
        borderRadius: 999,
        fontFamily: "var(--font-mono)",
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        border: active ? "1px solid rgba(37, 99, 235, 0.30)" : "1px solid var(--border-strong)",
        color: active ? "var(--blue-500)" : "var(--ink-950)",
        background: active ? "rgba(37, 99, 235, 0.10)" : "transparent",
      }}
    >
      {children}
    </span>
  );
}

const ItalicAccent = ({
  children,
  glow = false,
}: {
  children: ReactNode;
  glow?: boolean;
}) => (
  <span
    style={{
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontVariationSettings: "'opsz' 96, 'wght' 400",
      color: glow ? "var(--cyan-500)" : "var(--blue-500)",
    }}
  >
    {children}
  </span>
);

/* ===================== CHART · SEO ===================== */

function SeoChart({
  width = 1100,
  height = 380,
  dark = false,
}: {
  width?: number;
  height?: number;
  dark?: boolean;
}) {
  const { ref, seen } = useInView<HTMLDivElement>(0.3);
  const t = useEasedProgress(seen, 1800);

  const padL = 50;
  const padR = 80;
  const padT = 30;
  const padB = 38;
  const innerW = width - padL - padR;
  const innerH = height - padT - padB;
  const xMin = 2021;
  const xMax = 2026.45;
  const yMax = 100;
  const xToPx = (x: number) => padL + ((x - xMin) / (xMax - xMin)) * innerW;
  const yToPx = (v: number) => padT + (1 - v / yMax) * innerH;

  const visibleEnd = SEO_POINTS.length * t;
  const visiblePoints = SEO_POINTS.slice(0, Math.ceil(visibleEnd));
  let pathD = "";
  visiblePoints.forEach((p, i) => {
    pathD += (i === 0 ? "M " : " L ") + xToPx(p.y) + " " + yToPx(p.v);
  });

  const yTicks = [0, 25, 50, 75, 100];
  const xTicks = [2021, 2022, 2023, 2024, 2025, 2026];
  const fg = dark ? "#fff" : "#0F172A";
  const subFg = dark ? "rgba(255,255,255,0.65)" : "#475569";
  const gridStroke = dark ? "rgba(255,255,255,0.10)" : "rgba(15,23,42,0.08)";
  const jan26X = xToPx(2026.08);
  const may26X = xToPx(2026.42);

  return (
    <div ref={ref} style={{ width: "100%" }}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        style={{ width: "100%", height: "auto", display: "block" }}
        role="img"
        aria-label="SEO-Trajektorie 2021 bis Mai 2026 — Top-10-Keywords des Sonnenhof Herrsching"
      >
        {yTicks.map((v) => (
          <g key={v}>
            <line
              x1={padL}
              x2={width - padR}
              y1={yToPx(v)}
              y2={yToPx(v)}
              stroke={gridStroke}
              strokeWidth="1"
            />
            <text
              x={padL - 10}
              y={yToPx(v) + 4}
              textAnchor="end"
              fontSize="11"
              fontFamily="var(--font-mono)"
              fill={subFg}
            >
              {v}
            </text>
          </g>
        ))}
        {xTicks.map((yr) => (
          <text
            key={yr}
            x={xToPx(yr)}
            y={height - padB + 22}
            textAnchor="middle"
            fontSize="11"
            fontFamily="var(--font-mono)"
            fill={subFg}
          >
            {yr}
          </text>
        ))}
        <rect
          x={jan26X}
          y={padT}
          width={may26X - jan26X}
          height={innerH}
          fill={dark ? "rgba(6,182,212,0.10)" : "rgba(37,99,235,0.06)"}
        />
        <line
          x1={jan26X}
          x2={jan26X}
          y1={padT}
          y2={height - padB}
          stroke={dark ? "#06B6D4" : "#2563EB"}
          strokeWidth="1"
          strokeDasharray="3 3"
        />
        <text
          x={jan26X + 6}
          y={padT + 14}
          fontSize="10"
          fontFamily="var(--font-mono)"
          fill={dark ? "#06B6D4" : "#2563EB"}
          letterSpacing="0.14em"
        >
          JAN 2026 · MYHIWI ÜBERNIMMT
        </text>
        <path
          d={pathD}
          fill="none"
          stroke={dark ? "#06B6D4" : "#2563EB"}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {t >= 0.5 && (
          <g>
            <circle cx={xToPx(2025.92)} cy={yToPx(24)} r="4" fill={fg} />
            <text
              x={xToPx(2025.92) - 6}
              y={yToPx(24) - 12}
              textAnchor="end"
              fontSize="12"
              fontFamily="var(--font-display)"
              fontWeight="700"
              fill={fg}
            >
              24
            </text>
            <text
              x={xToPx(2025.92) - 6}
              y={yToPx(24) + 2}
              textAnchor="end"
              fontSize="10"
              fontFamily="var(--font-mono)"
              fill={subFg}
            >
              Ende 2025
            </text>
          </g>
        )}
        {t >= 1 && (
          <g>
            <circle cx={xToPx(2026.42)} cy={yToPx(99)} r="6" fill={dark ? "#06B6D4" : "#2563EB"} />
            <circle
              cx={xToPx(2026.42)}
              cy={yToPx(99)}
              r="11"
              fill="none"
              stroke={dark ? "#06B6D4" : "#2563EB"}
              strokeWidth="1"
              opacity="0.4"
            />
            <text
              x={xToPx(2026.42) + 12}
              y={yToPx(99) - 8}
              fontSize="26"
              fontFamily="var(--font-display)"
              fontWeight="800"
              fill={fg}
              letterSpacing="-0.04em"
            >
              99
            </text>
            <text
              x={xToPx(2026.42) + 12}
              y={yToPx(99) + 8}
              fontSize="10"
              fontFamily="var(--font-mono)"
              fill={subFg}
            >
              MAI 2026
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}

/* ===================== CHART · ANFRAGEN ===================== */

function AnfragenBars({ dark = false, height = 320 }: { dark?: boolean; height?: number }) {
  const { ref, seen } = useInView<HTMLDivElement>(0.3);
  const t = useEasedProgress(seen, 1400);

  const max = 100;
  const fg = dark ? "#fff" : "#0F172A";
  const subFg = dark ? "rgba(255,255,255,0.6)" : "#475569";
  return (
    <div ref={ref} style={{ width: "100%" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 16,
          alignItems: "end",
          height,
        }}
      >
        {ANFRAGEN.map((d, i) => {
          const delay = i * 0.08;
          const localT = Math.max(0, Math.min(1, (t - delay) / (1 - delay)));
          const hPct = (d.v / max) * localT;
          const animatedV = Math.round(d.v * localT);
          const isMai = d.month === "Mai";
          return (
            <div
              key={d.month}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                height: "100%",
                justifyContent: "flex-end",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: 36,
                  color: fg,
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  marginBottom: 8,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {animatedV}
              </div>
              <div
                style={{
                  background: isMai
                    ? dark
                      ? "#06B6D4"
                      : "linear-gradient(180deg, #2563EB, #06B6D4)"
                    : dark
                      ? "rgba(255,255,255,0.18)"
                      : "#0F172A",
                  height: `${hPct * 70}%`,
                  minHeight: 4,
                  borderRadius: "4px 4px 0 0",
                  transition: "height 0.05s linear",
                }}
              />
              <div
                style={{
                  marginTop: 10,
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: subFg,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                {d.month}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ===================== CHART · KEYWORD PYRAMID ===================== */

function KeywordPyramid({ dark = false }: { dark?: boolean }) {
  const { ref, seen } = useInView<HTMLDivElement>(0.3);
  const t = useEasedProgress(seen, 1400);
  const fg = dark ? "#fff" : "#0F172A";
  const subFg = dark ? "rgba(255,255,255,0.6)" : "#475569";
  const border = dark ? "rgba(255,255,255,0.18)" : "rgba(15,23,42,0.10)";

  return (
    <div ref={ref} style={{ width: "100%" }}>
      {PYRAMID.map((row, i) => {
        const delay = i * 0.1;
        const localT = Math.max(0, Math.min(1, (t - delay) / (1 - delay)));
        const activeRow = i < 2;
        return (
          <div
            key={row.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "14px 0",
              borderTop: i === 0 ? `1px solid ${border}` : "none",
              borderBottom: `1px solid ${border}`,
            }}
          >
            <div style={{ minWidth: 110, flexShrink: 0 }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: activeRow ? (dark ? "#06B6D4" : "#2563EB") : subFg,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                {row.label}
              </div>
            </div>
            <div style={{ flex: 1, position: "relative", height: 28 }}>
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  height: "100%",
                  width: `${row.w * localT}%`,
                  background: activeRow
                    ? dark
                      ? "linear-gradient(90deg, #06B6D4, #2563EB)"
                      : "linear-gradient(90deg, #2563EB, #06B6D4)"
                    : dark
                      ? "rgba(255,255,255,0.12)"
                      : "#F1F5F9",
                  borderRight: activeRow ? "none" : `1px solid ${border}`,
                  borderRadius: "0 4px 4px 0",
                }}
              />
            </div>
            <div
              style={{
                width: 70,
                textAlign: "right",
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: 28,
                color: fg,
                letterSpacing: "-0.03em",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {Math.round(row.v * localT)}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ===================== TABLE · SEARCH TERMS ===================== */

function SearchTermsTable({ dark = false }: { dark?: boolean }) {
  const fg = dark ? "#fff" : "#0F172A";
  const subFg = dark ? "rgba(255,255,255,0.65)" : "#475569";
  const border = dark ? "rgba(255,255,255,0.12)" : "rgba(15,23,42,0.08)";
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 90px 70px",
          padding: "12px 0",
          borderBottom: `1px solid ${border}`,
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          color: subFg,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          fontWeight: 600,
        }}
      >
        <div>Suchbegriff</div>
        <div style={{ textAlign: "right" }}>Pos.</div>
        <div style={{ textAlign: "right" }}>Klicks</div>
      </div>
      {SEARCH_TERMS.map((row, i) => (
        <Reveal key={row.term} delay={i * 40}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 90px 70px",
              padding: "14px 0",
              borderBottom: `1px solid ${border}`,
              alignItems: "center",
              gap: 16,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0, flexWrap: "wrap" }}>
              <span style={{ color: fg, fontSize: 15, fontWeight: 500 }}>{row.term}</span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  padding: "3px 7px",
                  borderRadius: 999,
                  background: row.brand
                    ? dark
                      ? "rgba(255,255,255,0.10)"
                      : "rgba(15,23,42,0.08)"
                    : dark
                      ? "rgba(6,182,212,0.18)"
                      : "rgba(37,99,235,0.12)",
                  color: row.brand ? subFg : dark ? "#06B6D4" : "#2563EB",
                  flexShrink: 0,
                }}
              >
                {row.brand ? "Brand" : "Non-Brand"}
              </span>
            </div>
            <div
              style={{
                textAlign: "right",
                fontFamily: "var(--font-mono)",
                fontSize: 14,
                color: fg,
              }}
            >
              {row.pos}
            </div>
            <div
              style={{
                textAlign: "right",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 20,
                color: fg,
                letterSpacing: "-0.02em",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {row.clicks}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ===================== CROSSFADE BROWSER MOCK ===================== */

function BrowserMock({
  crossfade = false,
}: {
  crossfade?: boolean;
}) {
  return (
    <div
      style={{
        borderRadius: 14,
        overflow: "hidden",
        background: "#fff",
        border: "1px solid var(--border-strong)",
        boxShadow: "var(--shadow-hero)",
      }}
    >
      {/* chrome */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          padding: "12px 16px",
          borderBottom: "1px solid var(--border-soft)",
          background: "var(--subtle)",
        }}
      >
        <div style={{ display: "flex", gap: 6 }}>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#E0E2E7",
              }}
            />
          ))}
        </div>
        <div
          style={{
            flex: 1,
            textAlign: "center",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--muted)",
            letterSpacing: "0.04em",
          }}
        >
          🔒 sonnenhof-herrsching.de
        </div>
        <div style={{ width: 60 }} />
      </div>
      {/* stage with images */}
      <div style={{ position: "relative", aspectRatio: "4/3", background: "#0F172A" }}>
        {crossfade ? (
          <>
            <style>{`
              @keyframes xfadeOld {
                0%, 30% { opacity: 1; }
                42%, 70% { opacity: 0; }
                82%, 100% { opacity: 1; }
              }
              @keyframes xfadeNew {
                0%, 30% { opacity: 0; }
                42%, 70% { opacity: 1; }
                82%, 100% { opacity: 0; }
              }
              @keyframes badgeOld {
                0%, 30% { opacity: 1; transform: translateY(0); }
                42%, 70% { opacity: 0; transform: translateY(-4px); }
                82%, 100% { opacity: 1; transform: translateY(0); }
              }
              @keyframes badgeNew {
                0%, 35% { opacity: 0; transform: translateY(-4px); }
                45%, 70% { opacity: 1; transform: translateY(0); }
                80%, 100% { opacity: 0; transform: translateY(-4px); }
              }
              .xfade-old { animation: xfadeOld 6.5s ease-in-out infinite; }
              .xfade-new { animation: xfadeNew 6.5s ease-in-out infinite; }
              .xfade-badge-old { animation: badgeOld 6.5s ease-in-out infinite; }
              .xfade-badge-new { animation: badgeNew 6.5s ease-in-out infinite; }
              @media (prefers-reduced-motion: reduce) {
                .xfade-old, .xfade-badge-old { opacity: 0; animation: none; }
                .xfade-new, .xfade-badge-new { opacity: 1; animation: none; }
              }
            `}</style>
            <Image
              src="/case-studies/sonnenhof/sonnenhof-alt.jpg"
              alt="Sonnenhof-Website vor dem Relaunch"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="xfade-old"
              style={{ objectFit: "cover", objectPosition: "top" }}
            />
            <Image
              src="/case-studies/sonnenhof/sonnenhof-neu.png"
              alt="Sonnenhof-Website nach dem Relaunch"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="xfade-new"
              style={{ objectFit: "cover", objectPosition: "top" }}
            />
            <div
              className="xfade-badge-old"
              style={{
                position: "absolute",
                top: 14,
                left: 14,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 12px",
                borderRadius: 999,
                background: "rgba(15,23,42,0.85)",
                color: "#fff",
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--warn)",
                }}
              />
              Vorher · alte Site
            </div>
            <div
              className="xfade-badge-new"
              style={{
                position: "absolute",
                top: 14,
                left: 14,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 12px",
                borderRadius: 999,
                background: "var(--blue-500)",
                color: "#fff",
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--cyan-500)",
                }}
              />
              Nachher · MyHiwi-Relaunch
            </div>
          </>
        ) : (
          <Image
            src="/case-studies/sonnenhof/sonnenhof-neu.png"
            alt="Sonnenhof Herrsching — neue Website"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
        )}
      </div>
    </div>
  );
}

/* ===================== VIDEO STATEMENT ===================== */

function VideoStatement({ aspect = "9/16" }: { aspect?: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const start = () => {
    const v = videoRef.current;
    if (!v) return;
    void v.play();
    setPlaying(true);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: aspect,
        borderRadius: 14,
        overflow: "hidden",
        background: "#0F172A",
        border: "1px solid var(--border-strong)",
        boxShadow: "var(--shadow-hero)",
      }}
    >
      <video
        ref={videoRef}
        src="/case-studies/sonnenhof/conny-statement.mp4"
        poster="/case-studies/sonnenhof/conny-poster.jpg"
        controls={playing}
        playsInline
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          background: "#0F172A",
        }}
      />
      {!playing && (
        <button
          type="button"
          onClick={start}
          aria-label="Video-Statement von Conny Römmelt abspielen"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            margin: 0,
            padding: 0,
            border: "none",
            cursor: "pointer",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.66), rgba(0,0,0,0.06) 46%, rgba(0,0,0,0.12))",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: 16,
              left: 16,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 11px",
              background: "rgba(15,23,42,0.78)",
              color: "#fff",
              borderRadius: 999,
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--cyan-500)" }} />
            Video · Gastgeberin
          </span>
          <span
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: 84,
              height: 84,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.95)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 12px 40px rgba(0,0,0,0.45)",
            }}
          >
            <svg width="26" height="30" viewBox="0 0 28 32" fill="none" aria-hidden="true">
              <path d="M4 3 L26 16 L4 29 Z" fill="#0F172A" />
            </svg>
          </span>
          <span
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              padding: "22px 24px 20px",
              display: "block",
              textAlign: "left",
            }}
          >
            <span
              style={{
                display: "block",
                marginTop: 0,
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.75)",
              }}
            >
              Conny Römmelt · Sonnenhof Herrsching · ~2 Min
            </span>
          </span>
        </button>
      )}
    </div>
  );
}

/* ===================== MOUNTAIN STRIP WATERMARK ===================== */

function MountainStrip({ color = "rgba(6,182,212,0.10)" }: { color?: string }) {
  return (
    <svg
      viewBox="0 0 1240 80"
      preserveAspectRatio="none"
      style={{ width: "100%", height: "100%", display: "block" }}
      aria-hidden="true"
    >
      <path
        d="M0 80 L80 30 L150 50 L220 18 L300 42 L380 22 L470 48 L560 28 L640 52 L740 26 L840 48 L930 30 L1020 50 L1110 24 L1240 46 L1240 80 Z"
        fill={color}
      />
    </svg>
  );
}

/* ===================== EVIDENCE TILE ===================== */

function EvidenceTile({
  label,
  sub,
  big,
  unit,
  delta,
  tag,
  hero = false,
}: {
  label: string;
  sub: string;
  big: string;
  unit?: string;
  delta?: string;
  tag?: string;
  hero?: boolean;
}) {
  return (
    <div
      style={{
        background: hero ? "rgba(6,182,212,0.10)" : "var(--ink-950)",
        color: "#fff",
        padding: hero ? "32px 28px" : "28px 22px",
        borderRight: "1px solid rgba(255,255,255,0.12)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: hero ? "var(--cyan-500)" : "rgba(255,255,255,0.55)",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: hero ? 88 : 46,
          lineHeight: 0.95,
          letterSpacing: "-0.045em",
          marginTop: hero ? 20 : 14,
          color: "#fff",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {big}
        {unit && (
          <span
            style={{
              fontSize: hero ? 30 : 20,
              color: "rgba(255,255,255,0.6)",
              marginLeft: 6,
            }}
          >
            {unit}
          </span>
        )}
      </div>
      {delta && (
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--cyan-500)",
            marginTop: 8,
            letterSpacing: "0.06em",
          }}
        >
          ↑ {delta}
        </div>
      )}
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          color: "rgba(255,255,255,0.45)",
          marginTop: hero ? 18 : 12,
          letterSpacing: "0.08em",
        }}
      >
        {sub}
      </div>
      {tag && (
        <div
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            fontFamily: "var(--font-mono)",
            fontSize: 9,
            fontWeight: 700,
            padding: "4px 8px",
            borderRadius: 999,
            background: "rgba(6,182,212,0.20)",
            color: "var(--cyan-500)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          {tag}
        </div>
      )}
    </div>
  );
}

/* ===================== BIG STAT ===================== */

function BigStat({
  num,
  unit,
  label,
  sub,
}: {
  num: string;
  unit?: string;
  label: string;
  sub: string;
}) {
  return (
    <div
      style={{
        background: "var(--subtle)",
        border: "1px solid var(--border-soft)",
        borderRadius: 12,
        padding: "28px 22px",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--blue-500)",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: 48,
          lineHeight: 0.95,
          letterSpacing: "-0.04em",
          marginTop: 12,
          color: "var(--ink-950)",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {num}
        {unit && (
          <span style={{ fontSize: 22, color: "var(--muted)", marginLeft: 4 }}>{unit}</span>
        )}
      </div>
      <div
        style={{
          marginTop: 10,
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          letterSpacing: "0.06em",
          color: "var(--muted)",
        }}
      >
        {sub}
      </div>
    </div>
  );
}

/* ===================== CTA BUTTONS ===================== */

function CtaPrimary({
  href,
  children,
  pill = false,
  light = false,
}: {
  href: string;
  children: ReactNode;
  pill?: boolean;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        background: light ? "#fff" : "var(--ink-950)",
        color: light ? "var(--ink-950)" : "#fff",
        textDecoration: "none",
        fontFamily: "var(--font-body)",
        fontSize: 16,
        fontWeight: 700,
        letterSpacing: "-0.005em",
        padding: "18px 26px",
        borderRadius: pill ? 999 : 4,
        boxShadow: "var(--shadow-cta)",
      }}
    >
      {children}
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 8h12M9 3l5 5-5 5" />
      </svg>
    </Link>
  );
}

/* ===================== MAIN ===================== */

export default function CaseStudyClient() {
  return (
    <div style={tokenStyles}>
      {/* Terminal strip */}
      <div
        style={{
          background: "var(--ink-950)",
          color: "rgba(255,255,255,0.8)",
          padding: "12px clamp(20px, 5vw, 64px)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          flexWrap: "wrap",
        }}
      >
        <span>MyHiwi · Case Studies / sonnenhof-herrsching</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "var(--cyan-500)",
              boxShadow: "0 0 8px var(--cyan-500)",
            }}
          />
          live · belegter Case 2026
        </span>
      </div>

      {/* ============== 01 · HERO + EVIDENCE WALL ============== */}
      <section
        style={{
          padding: "clamp(48px, 7vw, 80px) clamp(20px, 5vw, 64px) 0",
          position: "relative",
        }}
      >
        <Reveal>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--blue-500)",
            }}
          >
            01 · Sonnenhof Herrsching · Hotel &amp; Ferienwohnungen
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 0.9fr)",
            gap: "clamp(32px, 5vw, 56px)",
            marginTop: 28,
            alignItems: "start",
          }}
          className="mh-hero-grid"
        >
          <div>
            <Reveal delay={80}>
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(44px, 7.5vw, 96px)",
                  lineHeight: 0.96,
                  letterSpacing: "-0.035em",
                  margin: 0,
                  maxWidth: "12ch",
                  color: "var(--ink-950)",
                }}
              >
                Sichtbarkeit, die in <ItalicAccent>Anfragen</ItalicAccent> kippt.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p
                style={{
                  marginTop: 28,
                  maxWidth: "48ch",
                  fontSize: 21,
                  lineHeight: 1.5,
                  color: "var(--muted)",
                }}
              >
                Vier Monate. Sechs Bausteine. Aus einer jahrelang unveränderten Website wurde ein
                messbares Direktanfrage-System direkt am Ammersee.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div style={{ display: "flex", gap: 14, marginTop: 32, flexWrap: "wrap" }}>
                <CtaPrimary href="/kontakt">Ähnlichen Hebel prüfen</CtaPrimary>
                <a
                  href="https://sonnenhof-herrsching.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    color: "var(--ink-950)",
                    textDecoration: "none",
                    fontFamily: "var(--font-body)",
                    fontSize: 15,
                    fontWeight: 600,
                    padding: "16px 22px",
                    borderRadius: 4,
                    border: "1px solid var(--ink-950)",
                  }}
                >
                  Live-Seite ansehen
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <BrowserMock crossfade />
          </Reveal>
        </div>

        {/* Evidence row · 5 tiles */}
        <Reveal delay={320}>
          <div
            className="mh-evidence-wall"
            style={{
              marginTop: "clamp(48px, 6vw, 80px)",
              display: "grid",
              gridTemplateColumns: "2fr repeat(4, minmax(0, 1fr))",
              gap: 0,
              border: "1px solid var(--ink-950)",
              background: "var(--ink-950)",
            }}
          >
            {EVIDENCE_TILES.map((tile, i) => (
              <EvidenceTile key={i} {...tile} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div
            style={{
              marginTop: 24,
              padding: "18px 22px",
              background: "rgba(37,99,235,0.06)",
              border: "1px solid rgba(37,99,235,0.18)",
              borderRadius: 6,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--blue-500)",
              }}
            >
              Stand 2026-05 · Zahlen aus dem laufenden Projekt
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "var(--muted)",
              }}
            >
              Wir formulieren vorsichtig — Zahlen werden mit Quelle und Zeitraum genannt.
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============== ERFOLGS-BANNER · Conny-Video ============== */}
      <section
        style={{
          padding: "clamp(40px, 6vw, 72px) clamp(20px, 5vw, 64px)",
          background: "var(--subtle)",
          borderTop: "1px solid var(--border-soft)",
          borderBottom: "1px solid var(--border-soft)",
        }}
      >
        <Reveal>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--blue-500)",
            }}
          >
            Was wir geschafft haben · im O-Ton der Gastgeberin
          </div>
        </Reveal>
        <div
          className="mh-banner-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "300px minmax(0, 1fr)",
            gap: "clamp(28px, 5vw, 56px)",
            marginTop: 28,
            alignItems: "center",
          }}
        >
          <Reveal>
            <div style={{ width: "100%", maxWidth: 320 }}>
              <VideoStatement aspect="9/16" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: "clamp(28px, 4vw, 52px)",
                  lineHeight: 1.14,
                  letterSpacing: "-0.015em",
                  margin: 0,
                  maxWidth: "20ch",
                  color: "var(--ink-950)",
                }}
              >
                „Jetzt werde ich wieder{" "}
                <span style={{ color: "var(--blue-500)" }}>gefunden</span>."
              </p>
              <p
                style={{
                  marginTop: 14,
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "var(--muted)",
                  maxWidth: "46ch",
                }}
              >
                Conny Römmelt, Sonnenhof Herrsching — nach vier Monaten, in ihrem eigenen Video.
              </p>
              <div
                className="mh-banner-stats"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                  gap: 14,
                  marginTop: 28,
                }}
              >
                {BANNER_STATS.map((s, i) => (
                  <BigStat key={i} {...s} />
                ))}
              </div>
              <p
                style={{
                  marginTop: 14,
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  lineHeight: 1.6,
                  color: "var(--muted)",
                  maxWidth: "70ch",
                }}
              >
                Schätzwerte der Gastgeberin (E-Mail/Video, Mai 2026), bewusst vorsichtig — kein
                automatisches Buchungs-Tracking, aktuell nur Ferienwohnungen buchbar.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============== 02 · SEO TRAJEKTORIE ============== */}
      <section style={{ padding: "clamp(72px, 12vw, 120px) clamp(20px, 5vw, 64px)", marginTop: 32 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            gap: "clamp(24px, 5vw, 64px)",
            flexWrap: "wrap",
          }}
        >
          <div style={{ maxWidth: "50%", minWidth: 280 }}>
            <Reveal>
              <SectionMark num="02" label="SEO-Trajektorie · 2021 → 2026" accent />
            </Reveal>
            <Reveal delay={80}>
              <h2
                style={{
                  marginTop: 24,
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "clamp(32px, 5vw, 64px)",
                  lineHeight: 1.04,
                  letterSpacing: "-0.035em",
                  maxWidth: "14ch",
                }}
              >
                Sechs Jahre Linie. Dann ein <ItalicAccent>Sprung.</ItalicAccent>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <div style={{ maxWidth: 380 }}>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.6,
                  color: "var(--muted)",
                }}
              >
                Top-10-Keywords im Zeitverlauf. Ende 2025:{" "}
                <strong style={{ color: "var(--ink-950)" }}>24</strong>. Mai 2026:{" "}
                <strong style={{ color: "var(--ink-950)" }}>99</strong> — fast eine Vervierfachung
                in fünf Monaten.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  letterSpacing: "0.06em",
                  marginTop: 14,
                  color: "var(--muted)",
                }}
              >
                SE Ranking API · Abruf 8. Mai 2026 · Google.de
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={240}>
          <div
            style={{
              marginTop: "clamp(40px, 5vw, 64px)",
              background: "var(--ink-950)",
              borderRadius: 16,
              padding: "clamp(28px, 4vw, 48px) clamp(20px, 4vw, 56px)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: 0.4,
                pointerEvents: "none",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <MountainStrip color="rgba(6,182,212,0.10)" />
            </div>
            <div style={{ position: "relative" }}>
              <SeoChart width={1100} height={360} dark />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============== 03 · DIAGNOSE + 4-STEP SYSTEM ============== */}
      <section
        style={{
          padding: "clamp(72px, 12vw, 120px) clamp(20px, 5vw, 64px)",
          background: "var(--subtle)",
          position: "relative",
        }}
      >
        <Reveal>
          <SectionMark num="03" label="Diagnose & System" accent />
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
            gap: "clamp(32px, 7vw, 80px)",
            marginTop: 32,
            position: "relative",
          }}
          className="mh-diag-grid"
        >
          <Reveal delay={80}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(28px, 4.5vw, 58px)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                maxWidth: "16ch",
              }}
            >
              Ein gutes Haus. Aber jeder Gast lief erst durch ein{" "}
              <ItalicAccent>Portal.</ItalicAccent>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "clamp(20px, 2.2vw, 26px)",
                lineHeight: 1.4,
                color: "var(--ink-950)",
                maxWidth: "38ch",
              }}
            >
              Die alte Seite erklärte das Haus. Sie führte aber niemanden von Suche zu Vertrauen zu
              Anfrage. Sichtbarkeit, Inhalte und Anfrageweg waren nicht miteinander verbunden.
            </p>
          </Reveal>
        </div>

        {/* 4-step system */}
        <div
          className="mh-steps-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: 0,
            marginTop: "clamp(48px, 7vw, 80px)",
            position: "relative",
          }}
        >
          {SYSTEM_STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div
                style={{
                  padding: "28px 24px 28px 0",
                  borderRight:
                    i < 3 ? "1px solid var(--border-strong)" : "none",
                  marginRight: i < 3 ? 24 : 0,
                  position: "relative",
                }}
                className="mh-step"
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: 52,
                    lineHeight: 1,
                    color: "var(--blue-500)",
                    letterSpacing: "-0.04em",
                  }}
                >
                  {s.n}
                </div>
                <h3
                  style={{
                    marginTop: 16,
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: 22,
                    color: "var(--ink-950)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {s.h}
                </h3>
                <p
                  style={{
                    marginTop: 12,
                    fontSize: 14.5,
                    lineHeight: 1.55,
                    color: "var(--muted)",
                  }}
                >
                  {s.b}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============== 04 · BUILD LOG ============== */}
      <section style={{ padding: "clamp(72px, 12vw, 120px) clamp(20px, 5vw, 64px)" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <Reveal>
            <SectionMark num="04" label="Build-Log · Feb–Apr 2026" accent />
          </Reveal>
          <Reveal delay={80}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--muted)",
              }}
            >
              6 bausteine · 4 monate · 1 system
            </span>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <h2
            style={{
              marginTop: 24,
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(32px, 5vw, 64px)",
              lineHeight: 1.04,
              letterSpacing: "-0.035em",
              maxWidth: "18ch",
            }}
          >
            Der Relaunch war die Oberfläche. Gebaut wurde der{" "}
            <ItalicAccent>Anfrageweg</ItalicAccent> darunter.
          </h2>
        </Reveal>

        <div
          className="mh-build-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 0,
            marginTop: "clamp(36px, 5vw, 56px)",
            border: "1px solid var(--border-soft)",
          }}
        >
          {BUILD_LOG.map((item, i) => (
            <Reveal key={i} delay={i * 60}>
              <div
                style={{
                  padding: "28px 24px",
                  borderRight:
                    (i + 1) % 3 !== 0 ? "1px solid var(--border-soft)" : "none",
                  borderBottom: i < 3 ? "1px solid var(--border-soft)" : "none",
                  minHeight: 220,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  background: "#fff",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                  <Pill active>{item.tag}</Pill>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      letterSpacing: "0.1em",
                      color: "var(--muted)",
                    }}
                  >
                    {item.date}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: 22,
                    color: "var(--ink-950)",
                    letterSpacing: "-0.02em",
                    marginTop: "auto",
                  }}
                >
                  {item.h}
                </h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--muted)" }}>
                  {item.b}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============== 05 · DARK — Anfragen + Pyramide + Search Terms ============== */}
      <section
        style={{
          padding: "clamp(72px, 12vw, 120px) clamp(20px, 5vw, 64px)",
          background: "var(--ink-950)",
          color: "#fff",
        }}
      >
        <Reveal>
          <SectionMark num="05" label="Anfragen & Sichtbarkeit · Mai 2026" onDark />
        </Reveal>
        <Reveal delay={80}>
          <h2
            style={{
              color: "#fff",
              marginTop: 24,
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(32px, 5vw, 64px)",
              lineHeight: 1.04,
              letterSpacing: "-0.035em",
              maxWidth: "20ch",
            }}
          >
            Aus 1 Anfrage im Januar wurden{" "}
            <ItalicAccent glow>85 im Mai.</ItalicAccent>
          </h2>
        </Reveal>

        <div
          className="mh-dark-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 0.9fr)",
            gap: "clamp(32px, 5vw, 64px)",
            marginTop: "clamp(40px, 6vw, 64px)",
            alignItems: "start",
          }}
        >
          {/* Anfragen */}
          <Reveal delay={160}>
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 14,
                padding: "clamp(24px, 3.5vw, 36px) clamp(24px, 4vw, 40px)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--cyan-500)",
                }}
              >
                199 Anfragen · Formspree · 28. Jan – 25. Mai
              </div>
              <div style={{ marginTop: 28 }}>
                <AnfragenBars dark height={280} />
              </div>
              <p
                style={{
                  marginTop: 28,
                  color: "rgba(255,255,255,0.7)",
                  fontSize: 14.5,
                  lineHeight: 1.55,
                  maxWidth: "46ch",
                }}
              >
                Jede Anfrage landet beim Sonnenhof selbst — nicht zuerst bei einem Portal.
                Provisionen für Portale entfallen für genau diese Buchungen.
              </p>
            </div>
          </Reveal>

          {/* Pyramid */}
          <Reveal delay={240}>
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 14,
                padding: "clamp(24px, 3.5vw, 36px) clamp(24px, 4vw, 40px)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--cyan-500)",
                }}
              >
                416 Keywords im Index · Top 100 · Stand Mai 2026
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 22,
                  color: "#fff",
                  marginTop: 14,
                  letterSpacing: "-0.02em",
                }}
              >
                Wo die Sichtbarkeit liegt.
              </h3>
              <div style={{ marginTop: 22 }}>
                <KeywordPyramid dark />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Search terms */}
        <Reveal delay={320}>
          <div
            style={{
              marginTop: 40,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 14,
              padding: "clamp(24px, 3.5vw, 36px) clamp(24px, 4vw, 40px)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                flexWrap: "wrap",
                gap: 16,
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--cyan-500)",
                  }}
                >
                  Search Console · 1.158 Klicks · 90 Tage
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: 22,
                    color: "#fff",
                    marginTop: 12,
                    letterSpacing: "-0.02em",
                    maxWidth: "32ch",
                  }}
                >
                  Drei Viertel der Suchen sind regionale Themen wie „Ammersee mit Hund".
                </h3>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "rgba(255,255,255,0.5)",
                  letterSpacing: "0.1em",
                }}
              >
                56.578 Impressionen · mobile dominant
              </span>
            </div>
            <div style={{ marginTop: 24 }}>
              <SearchTermsTable dark />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============== 06 · VERTRAUEN ============== */}
      <section style={{ padding: "clamp(72px, 12vw, 120px) clamp(20px, 5vw, 64px)" }}>
        <Reveal>
          <SectionMark num="06" label="Vertrauen, sichtbar gemacht" accent />
        </Reveal>

        <Reveal delay={80}>
          <p
            style={{
              marginTop: 40,
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(22px, 2.6vw, 30px)",
              lineHeight: 1.4,
              color: "var(--ink-950)",
              maxWidth: "46ch",
            }}
          >
            Im Mai 2026 hat Conny Römmelt nach vier Monaten für 24 weitere Monate verlängert — ohne
            Druck, ohne Rabatt-Bait, auf Basis der Zahlen und der Praxis-Erfahrung im
            Anfrage-Eingang.
          </p>
          <p
            style={{
              marginTop: 14,
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: "0.06em",
              color: "var(--muted)",
            }}
          >
            Conny Römmelt · Inhaberin Sonnenhof Herrsching
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div
            className="mh-stats-row"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: 14,
              marginTop: "clamp(40px, 5vw, 56px)",
            }}
          >
            {STATS_ROW.map((s, i) => (
              <BigStat key={i} {...s} />
            ))}
          </div>
        </Reveal>
      </section>

      {/* ============== 07 · FINAL CTA ============== */}
      <section
        style={{
          padding: "clamp(84px, 14vw, 140px) clamp(20px, 5vw, 64px)",
          background: "linear-gradient(135deg, #0F172A 0%, #1E40AF 100%)",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(50% 80% at 50% 100%, rgba(6,182,212,0.35), transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div
          style={{
            position: "relative",
            textAlign: "center",
            maxWidth: 920,
            margin: "0 auto",
          }}
        >
          <Reveal>
            <SectionMark num="07" label="Ihr Projekt" onDark />
          </Reveal>
          <Reveal delay={80}>
            <h2
              style={{
                color: "#fff",
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(40px, 7vw, 88px)",
                lineHeight: 1.02,
                letterSpacing: "-0.035em",
                marginTop: 32,
                textAlign: "center",
              }}
            >
              Gleiche <ItalicAccent glow>Mechanik.</ItalicAccent> Ihre Region.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p
              style={{
                color: "rgba(255,255,255,0.78)",
                fontSize: 21,
                lineHeight: 1.5,
                marginTop: 28,
                maxWidth: 640,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Website, Google, Inhalte, Anzeigen, Anfrageweg — wenn das bei Ihnen heute getrennt
              läuft, lohnt sich ein kurzer Blick auf das System dahinter.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div
              style={{
                display: "flex",
                gap: 16,
                marginTop: 40,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <CtaPrimary href="/kontakt" pill light>
                Kostenlosen Digital-Check anfragen
              </CtaPrimary>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                marginTop: 28,
                color: "rgba(255,255,255,0.55)",
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              kostenlos · 20 minuten · sie reden direkt mit denis
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mono footer strip */}
      <footer
        style={{
          padding: "20px clamp(20px, 5vw, 64px)",
          background: "#000",
          color: "rgba(255,255,255,0.5)",
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          display: "flex",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <span>© 2026 MyHiwi · Kaliberda Digital Intelligence UG</span>
        <span>denis@myhiwi.de · Ahrensfelde + Ammersee</span>
      </footer>

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 1023px) {
          .mh-hero-grid { grid-template-columns: 1fr !important; }
          .mh-evidence-wall {
            grid-template-columns: 1fr !important;
          }
          .mh-evidence-wall > * {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.12) !important;
          }
          .mh-evidence-wall > *:last-child { border-bottom: none !important; }
          .mh-diag-grid { grid-template-columns: 1fr !important; }
          .mh-steps-grid { grid-template-columns: 1fr 1fr !important; }
          .mh-steps-grid .mh-step { border-right: none !important; margin-right: 0 !important; padding-right: 0 !important; }
          .mh-build-grid { grid-template-columns: 1fr !important; }
          .mh-build-grid > * {
            border-right: none !important;
            border-bottom: 1px solid var(--border-soft) !important;
          }
          .mh-dark-grid { grid-template-columns: 1fr !important; }
          .mh-trust-grid { grid-template-columns: 1fr !important; }
          .mh-stats-row { grid-template-columns: 1fr 1fr !important; }
          .mh-econ-row { grid-template-columns: 1fr !important; }
          .mh-banner-grid { grid-template-columns: 1fr !important; }
          .mh-banner-stats { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 639px) {
          .mh-steps-grid { grid-template-columns: 1fr !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="transition"] { transition: none !important; }
        }
      `}</style>
    </div>
  );
}
