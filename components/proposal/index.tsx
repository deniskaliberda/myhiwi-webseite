/**
 * MyHiwi Proposal Visual System
 *
 * Story-Architektur:
 * 1. Cover                                    → ProposalCover
 * 2. Wir haben Sie verstanden                 → ProposalUnderstanding
 * 3. Was wir bauen                            → ProposalBuildList
 * 4. Wie es im Alltag funktioniert            → ProposalScenarios
 * 5. Was wir bedacht haben                    → ProposalConsiderations
 * 6. Wann + was kostet                        → ProposalTimeline + ProposalPricing
 * 7. Antwort                                  → ProposalAnswer
 *
 * Anti-Patterns: Card-Stacking, Eyebrow-Pills überall, Cyan-Confetti, 3-Spalten-Grids
 */

import type { ReactNode } from "react";

// ───────────────── Wrapper ─────────────────

export function ProposalPage({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white text-slate-900 antialiased">
      <article className="mx-auto max-w-[1180px] px-6 sm:px-10">
        {children}
      </article>
    </div>
  );
}

// ───────────────── Section Wrapper ─────────────────

export function ProposalSection({
  children,
  className = "",
  topPad = "py-32 md:py-44",
}: {
  children: ReactNode;
  className?: string;
  topPad?: string;
}) {
  return <section className={`${topPad} ${className}`}>{children}</section>;
}

// ───────────────── Cover ─────────────────

export function ProposalCover({
  client,
  title,
  intro,
  meta,
  date,
}: {
  client: string;
  title: string;
  intro: string;
  meta: { label: string; value: string }[];
  date: string;
}) {
  return (
    <section className="min-h-screen flex flex-col justify-between pt-20 pb-12 md:pt-24 md:pb-16">
      {/* Top: small brand + date */}
      <div className="flex items-center justify-between">
        <div className="text-base font-semibold tracking-tight text-slate-900">
          MyHiwi<span className="text-cyan-500">.</span>
        </div>
        <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
          {date}
        </div>
      </div>

      {/* Middle: massive title */}
      <div className="max-w-[920px] py-20 md:py-32">
        <p className="text-sm uppercase tracking-[0.22em] text-slate-500 mb-8">
          Für {client}
        </p>
        <h1 className="font-bold tracking-[-0.035em] leading-[0.98] text-slate-900"
            style={{ fontSize: "clamp(3.4rem, 8vw, 6.4rem)" }}>
          {title}
        </h1>
        <p className="mt-10 text-xl md:text-2xl leading-relaxed text-slate-600 max-w-[680px] font-light">
          {intro}
        </p>
      </div>

      {/* Bottom: meta */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10 border-t border-slate-200">
        {meta.map((m) => (
          <div key={m.label}>
            <div className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-2">
              {m.label}
            </div>
            <div className="text-sm text-slate-700 leading-snug">{m.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ───────────────── Section-Intro (Eyebrow + Headline + Lead) ─────────────────

export function ProposalIntro({
  step,
  headline,
  lead,
  align = "left",
}: {
  step: string;
  headline: ReactNode;
  lead?: ReactNode;
  align?: "left" | "right";
}) {
  return (
    <div
      className={`max-w-[820px] ${
        align === "right" ? "ml-auto text-right" : ""
      }`}
    >
      <p className="text-xs uppercase tracking-[0.22em] text-cyan-600 mb-6 font-semibold">
        {step}
      </p>
      <h2
        className="font-bold tracking-[-0.025em] leading-[1.04] text-slate-900"
        style={{ fontSize: "clamp(2.2rem, 5.4vw, 3.8rem)" }}
      >
        {headline}
      </h2>
      {lead && (
        <p className="mt-8 text-lg md:text-xl leading-relaxed text-slate-600 font-light max-w-[640px]">
          {lead}
        </p>
      )}
    </div>
  );
}

// ───────────────── Understanding (Was Sie wollen) ─────────────────
// Editorial: keine Cards. Wunschpunkte als nummerierte Editorial-Liste.

export function ProposalUnderstanding({
  step,
  headline,
  lead,
  wishes,
  quote,
}: {
  step: string;
  headline: ReactNode;
  lead?: ReactNode;
  wishes: { title: string; from?: string }[];
  quote?: { text: string; from: string };
}) {
  return (
    <ProposalSection>
      <ProposalIntro step={step} headline={headline} lead={lead} />

      {quote ? (
        <div className="mt-20 grid md:grid-cols-[1fr,1px,1fr] gap-12 md:gap-16">
          <ol className="space-y-5">
            {wishes.map((w, i) => (
              <li key={i} className="flex gap-5 items-baseline">
                <span className="text-sm font-mono text-slate-400 tabular-nums w-7 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="flex-1 text-base md:text-lg text-slate-800 leading-relaxed">
                  {w.title}
                </p>
              </li>
            ))}
          </ol>
          <div className="hidden md:block bg-slate-200" />
          <figure className="md:pt-2">
            <blockquote className="text-xl md:text-2xl leading-relaxed text-slate-700 font-light italic border-l-2 border-cyan-500 pl-6">
              „{quote.text}"
            </blockquote>
            <figcaption className="mt-4 pl-6 text-sm text-slate-500">
              — {quote.from}
            </figcaption>
          </figure>
        </div>
      ) : (
        <ol className="mt-16 grid sm:grid-cols-2 gap-x-12 gap-y-5">
          {wishes.map((w, i) => (
            <li key={i} className="flex gap-5 items-baseline">
              <span className="text-sm font-mono text-slate-400 tabular-nums w-7 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="flex-1 text-base md:text-[17px] text-slate-800 leading-relaxed">
                {w.title}
              </p>
            </li>
          ))}
        </ol>
      )}
    </ProposalSection>
  );
}

// ───────────────── BuildList (Was wir bauen) ─────────────────
// Editorial: nummerierte Liste mit großen Nummern + ausführliche Beschreibung.
// KEINE Cards. Nur Trennlinien zwischen Items.

export function ProposalBuildList({
  step,
  headline,
  lead,
  items,
}: {
  step: string;
  headline: ReactNode;
  lead?: ReactNode;
  items: {
    title: string;
    summary: string;
    detail?: string;
    technical?: string;
  }[];
}) {
  return (
    <ProposalSection className="bg-slate-50/40 -mx-6 sm:-mx-10 px-6 sm:px-10">
      <div className="mx-auto max-w-[1100px]">
        <ProposalIntro step={step} headline={headline} lead={lead} />

        <ol className="mt-24 divide-y divide-slate-200">
          {items.map((item, i) => (
            <li key={i} className="py-12 md:py-16 grid md:grid-cols-[120px,1fr] gap-6 md:gap-12">
              <div>
                <span
                  className="font-bold tracking-tight text-slate-900 leading-none block"
                  style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="max-w-[680px]">
                <h3 className="text-2xl md:text-[28px] font-bold text-slate-900 tracking-tight leading-tight">
                  {item.title}
                </h3>
                <p className="mt-4 text-base md:text-lg text-slate-700 leading-relaxed">
                  {item.summary}
                </p>
                {item.detail && (
                  <p className="mt-4 text-base text-slate-600 leading-relaxed">
                    {item.detail}
                  </p>
                )}
                {item.technical && (
                  <p className="mt-6 text-sm text-slate-500 leading-relaxed border-l-2 border-slate-200 pl-4 italic">
                    {item.technical}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </ProposalSection>
  );
}

// ───────────────── Scenarios (Wie es im Alltag funktioniert) ─────────────────
// Editorial: gestapelt, je Szenario eine breite Sektion mit nummerierten Schritten.

export function ProposalScenarios({
  step,
  headline,
  lead,
  scenarios,
}: {
  step: string;
  headline: ReactNode;
  lead?: ReactNode;
  scenarios: { trigger: string; title: string; steps: string[] }[];
}) {
  return (
    <ProposalSection>
      <ProposalIntro step={step} headline={headline} lead={lead} />

      <div className="mt-20 space-y-24">
        {scenarios.map((s, i) => (
          <div key={i} className="grid md:grid-cols-[180px,1fr] gap-8 md:gap-16">
            <div className="md:pt-2">
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-600 font-semibold">
                Szenario {i + 1}
              </p>
              <p className="mt-2 text-sm text-slate-500 italic leading-relaxed">
                {s.trigger}
              </p>
            </div>
            <div className="max-w-[760px]">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
                {s.title}
              </h3>
              <ol className="mt-8 space-y-4">
                {s.steps.map((step, j) => (
                  <li key={j} className="flex gap-5 items-baseline">
                    <span className="text-xs font-mono text-slate-400 tabular-nums w-6 shrink-0">
                      {j + 1}
                    </span>
                    <span className="text-base md:text-[17px] text-slate-700 leading-relaxed">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </ProposalSection>
  );
}

// ───────────────── Pricing (Wert vs. Preis) ─────────────────

export function ProposalPricing({
  step,
  headline,
  lead,
  primary,
  alternative,
  included,
}: {
  step: string;
  headline: ReactNode;
  lead?: ReactNode;
  primary: {
    label: string;
    strike?: string;
    strikeNote?: string;
    price: string;
    unit: string;
    monthly?: string;
    note?: string;
    badge?: string;
  };
  alternative?: {
    label: string;
    price: string;
    unit: string;
    monthly?: string;
    note: string;
  };
  included?: string[];
}) {
  return (
    <ProposalSection>
      <ProposalIntro step={step} headline={headline} lead={lead} />

      <div className="mt-20 grid md:grid-cols-[1.3fr,1fr] gap-12 md:gap-20 items-start">
        {/* Primary price - large */}
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-slate-400 mb-4">
            {primary.label}
          </p>
          {primary.strike && (
            <p className="text-base text-slate-500 mb-4">
              <span className="line-through decoration-slate-400 decoration-1">
                {primary.strike}
              </span>
              {primary.strikeNote && (
                <span className="ml-3 text-xs text-slate-400">
                  {primary.strikeNote}
                </span>
              )}
            </p>
          )}
          <div
            className="font-bold tracking-[-0.04em] leading-none text-slate-900"
            style={{ fontSize: "clamp(4rem, 10vw, 7rem)" }}
          >
            {primary.price}
          </div>
          <p className="mt-4 text-lg text-slate-600">{primary.unit}</p>
          {primary.monthly && (
            <p className="mt-6 text-base text-slate-700">
              <span className="text-cyan-600 font-semibold">+ {primary.monthly}</span>
            </p>
          )}
          {primary.note && (
            <p className="mt-8 text-sm text-slate-500 leading-relaxed max-w-[420px]">
              {primary.note}
            </p>
          )}
          {primary.badge && (
            <div className="mt-6 inline-block text-xs uppercase tracking-[0.16em] text-cyan-700 bg-cyan-50 px-3 py-1.5 rounded-full font-semibold">
              {primary.badge}
            </div>
          )}
        </div>

        {/* Included list */}
        {included && included.length > 0 && (
          <div className="md:pt-12">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-6 font-semibold">
              Im Preis enthalten
            </p>
            <ul className="space-y-3">
              {included.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm md:text-base text-slate-700 leading-relaxed">
                  <span className="text-cyan-500 mt-1">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Alternative as understated mention */}
      {alternative && (
        <div className="mt-20 pt-10 border-t border-slate-200 max-w-[820px]">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-3">
            {alternative.label}
          </p>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
            <span className="font-bold text-slate-900">{alternative.price}</span>
            <span className="text-slate-500"> {alternative.unit}</span>
            {alternative.monthly && (
              <>
                <span className="text-slate-400"> · </span>
                <span>{alternative.monthly}</span>
              </>
            )}
          </p>
          <p className="mt-3 text-sm text-slate-500 leading-relaxed">
            {alternative.note}
          </p>
        </div>
      )}
    </ProposalSection>
  );
}

// ───────────────── Timeline ─────────────────
// Vertikal, mit Wochen links, Inhalt rechts. Keine Cards.

export function ProposalTimeline({
  step,
  headline,
  lead,
  weeks,
  facts,
}: {
  step: string;
  headline: ReactNode;
  lead?: ReactNode;
  weeks: { label: string; title: string; tasks: string[] }[];
  facts?: { label: string; value: string }[];
}) {
  return (
    <ProposalSection className="bg-slate-50/40 -mx-6 sm:-mx-10 px-6 sm:px-10">
      <div className="mx-auto max-w-[1100px]">
        <ProposalIntro step={step} headline={headline} lead={lead} />

        <ol className="mt-20 divide-y divide-slate-200">
          {weeks.map((w, i) => (
            <li key={i} className="py-10 md:py-12 grid md:grid-cols-[180px,1fr] gap-6 md:gap-12">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-cyan-600 font-semibold">
                  {w.label}
                </p>
              </div>
              <div className="max-w-[760px]">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  {w.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {w.tasks.map((t, j) => (
                    <li key={j} className="text-base text-slate-600 leading-relaxed">
                      · {t}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        {facts && facts.length > 0 && (
          <div className="mt-16 grid md:grid-cols-3 gap-8 pt-10 border-t border-slate-200">
            {facts.map((f) => (
              <div key={f.label}>
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400 mb-2 font-semibold">
                  {f.label}
                </p>
                <p className="text-base text-slate-800 font-medium leading-snug">
                  {f.value}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </ProposalSection>
  );
}

// ───────────────── Answer (CTA) ─────────────────

export function ProposalAnswer({
  step,
  headline,
  body,
  signature,
}: {
  step: string;
  headline: ReactNode;
  body: ReactNode;
  signature: { name: string; role: string; contact: string };
}) {
  return (
    <ProposalSection topPad="py-32 md:py-48">
      <div className="max-w-[820px]">
        <p className="text-xs uppercase tracking-[0.22em] text-cyan-600 mb-6 font-semibold">
          {step}
        </p>
        <h2
          className="font-bold tracking-[-0.03em] leading-[1.02] text-slate-900"
          style={{ fontSize: "clamp(2.6rem, 6vw, 4.4rem)" }}
        >
          {headline}
        </h2>
        <div className="mt-10 text-lg md:text-xl leading-relaxed text-slate-600 font-light max-w-[640px] space-y-4">
          {body}
        </div>

        <div className="mt-20 pt-10 border-t border-slate-200">
          <p className="text-base font-bold text-slate-900">
            {signature.name}
          </p>
          <p className="mt-1 text-sm text-slate-500">{signature.role}</p>
          <p className="mt-3 text-sm text-slate-500">{signature.contact}</p>
        </div>
      </div>
    </ProposalSection>
  );
}
