import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "./Card";
import { cn } from "@/lib/utils";

type ProofCardProps = {
  /** Mono-Kicker, z. B. „01 · BELEGTER CASE". */
  kicker: string;
  /** Kundenname als Display-5, z. B. „Sonnenhof Herrsching". */
  client: string;
  /** Branchen-Caption auf der Mockup-Plate. */
  industry: string;
  /** Ausgangslage-Absatz. */
  ausgangslage: string;
  /** Was gebaut wurde. */
  gebaut: string;
  /** Beteiligte Bausteine (z. B. ["Sichtbarkeit", "Anfrage & Buchung"]). */
  pillars?: string[];
  /** Optionale Stat-Zeile rechts unten (Lead-Spread). */
  stat?: string;
  /** Detail-Link, z. B. „/cases/sonnenhof-herrsching". */
  href?: string;
  /** Lead-Spread (Halbseite, Editorial) vs. regular (im Grid). */
  variant?: "lead-spread" | "regular";
  className?: string;
};

/**
 * MyHiwi Redesign 2026 — ProofCard / Case Card
 * components.md §4 + page-archetypes.md §E/F.
 */
export function ProofCard({
  kicker,
  client,
  industry,
  ausgangslage,
  gebaut,
  pillars,
  stat,
  href,
  variant = "regular",
  className,
}: ProofCardProps) {
  const isLeadSpread = variant === "lead-spread";

  return (
    <Card
      padded="none"
      interactive={Boolean(href)}
      className={cn(
        "overflow-hidden flex flex-col",
        isLeadSpread && "lg:flex-row lg:items-stretch",
        className,
      )}
    >
      {/* Mockup-Plate */}
      <div
        className={cn(
          "relative mh-mockup-plate text-mh-text-on-dark",
          isLeadSpread ? "lg:w-[44%]" : "h-44",
        )}
      >
        <div className="absolute inset-0 mh-mockup-stripes" aria-hidden="true" />
        <div className="relative flex h-full min-h-44 flex-col justify-end gap-mh-2 p-mh-5">
          <span className="mh-label-mono-sm text-mh-text-on-dark/80">
            {industry}
          </span>
          <span className="mh-display-5 font-mh-display">{client}</span>
        </div>
      </div>

      {/* Body */}
      <div
        className={cn(
          "flex flex-1 flex-col gap-mh-4 p-mh-6",
          isLeadSpread && "lg:p-mh-7",
        )}
      >
        <span className="mh-label-mono text-mh-text-secondary">{kicker}</span>

        <div className="flex flex-col gap-mh-3">
          <p className="mh-body-medium">
            <span className="mh-label-mono-sm text-mh-text-secondary mr-mh-2">
              Ausgangslage
            </span>
            {ausgangslage}
          </p>
          <p className="mh-body-medium">
            <span className="mh-label-mono-sm text-mh-text-secondary mr-mh-2">
              Gebaut
            </span>
            {gebaut}
          </p>
        </div>

        {(pillars && pillars.length > 0) || stat ? (
          <div className="mt-auto flex flex-wrap items-end justify-between gap-mh-3 border-t border-mh-divider pt-mh-4">
            {pillars && pillars.length > 0 ? (
              <ul className="flex flex-wrap gap-mh-2">
                {pillars.map((pillar) => (
                  <li
                    key={pillar}
                    className="mh-label-mono-sm rounded-mh-pill border border-mh-divider px-mh-3 py-1 text-mh-text-secondary"
                  >
                    {pillar}
                  </li>
                ))}
              </ul>
            ) : (
              <span aria-hidden="true" />
            )}
            {stat ? (
              <span className="mh-label-mono text-mh-accent">{stat}</span>
            ) : null}
          </div>
        ) : null}

        {href ? (
          <Link
            href={href}
            className="mt-mh-3 inline-flex items-center gap-mh-1 mh-body-small font-semibold text-mh-text-primary border-b border-mh-accent self-start pb-1 transition-colors duration-mh-fast ease-mh-default hover:text-mh-accent-hover hover:border-mh-accent-hover"
          >
            Case ansehen
            <ArrowRight className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
          </Link>
        ) : null}
      </div>
    </Card>
  );
}

export default ProofCard;
