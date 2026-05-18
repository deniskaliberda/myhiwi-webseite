import { Check } from "lucide-react";
import { Card } from "./Card";
import { BtnPrimary } from "@/components/myhiwi/cta/BtnPrimary";
import { cn } from "@/lib/utils";

type OfferCardProps = {
  /** Decision-Kicker, z. B. „01 · ERST PRÜFEN". */
  kicker: string;
  /** Sub-Caption unter dem Kicker. Optional. */
  subCaption?: string;
  /** Paket-Name als Display-4. */
  name: string;
  /** Kurzer Positioning-Text (Body-Medium). */
  positioning: string;
  /** Bullet-Liste der Inklusion. */
  bullets: string[];
  /** CTA-Label. Default in `default`-Variante: „Mehr erfahren". */
  ctaLabel: string;
  ctaHref: string;
  /** Footer-Mono-Pill, z. B. „kostenlos · 20 Minuten". Optional. */
  footerNote?: string;
  /** Variant. Highlight = Empfehlung (ink-bg). */
  variant?: "default" | "highlight";
  /** Pill-Label oben mittig auf dem Border (nur highlight). */
  recommendedLabel?: string;
  className?: string;
};

/**
 * MyHiwi Redesign 2026 — OfferCard
 * components.md §6: Decision-Kicker + Sub-Caption + Display-4 Paket-Name +
 * Positioning-Text + Bullet-Liste mit Häkchen + Primary-CTA am Fuß.
 *
 * Variante highlight: ink-Background, weiße Schrift, glow-CTA, Empfehlungs-Pill.
 */
export function OfferCard({
  kicker,
  subCaption,
  name,
  positioning,
  bullets,
  ctaLabel,
  ctaHref,
  footerNote,
  variant = "default",
  recommendedLabel,
  className,
}: OfferCardProps) {
  const isHighlight = variant === "highlight";

  return (
    <div className={cn("relative", className)}>
      {isHighlight && recommendedLabel ? (
        <span
          className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-10 mh-label-mono-sm rounded-mh-pill bg-mh-glow px-mh-3 py-1 text-mh-ink-950"
          aria-label={`Empfehlung: ${recommendedLabel}`}
        >
          {recommendedLabel}
        </span>
      ) : null}

      <Card
        tone={isHighlight ? "ink" : "paper"}
        padded="default"
        interactive={!isHighlight}
        className={cn(
          "flex h-full flex-col gap-mh-5",
          isHighlight && "shadow-mh-cta",
        )}
      >
        <div className="flex flex-col gap-mh-2">
          <span
            className={cn(
              "mh-label-mono",
              isHighlight ? "text-mh-glow" : "text-mh-text-secondary",
            )}
          >
            {kicker}
          </span>
          {subCaption ? (
            <span
              className={cn(
                "mh-body-xs",
                isHighlight
                  ? "text-mh-text-on-dark/80"
                  : "text-mh-text-secondary",
              )}
            >
              {subCaption}
            </span>
          ) : null}
        </div>

        <h3 className="mh-display-4">{name}</h3>

        <p
          className={cn(
            "mh-body-medium",
            isHighlight
              ? "text-mh-text-on-dark/85"
              : "text-mh-text-secondary",
          )}
        >
          {positioning}
        </p>

        <ul className="flex flex-col gap-mh-3">
          {bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-mh-3 mh-body-small"
            >
              <Check
                className={cn(
                  "mt-0.5 h-[18px] w-[18px] shrink-0",
                  isHighlight ? "text-mh-glow" : "text-mh-accent",
                )}
                strokeWidth={1.8}
                aria-hidden="true"
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col gap-mh-3">
          <BtnPrimary
            href={ctaHref}
            fullWidthOnMobile
            className={cn(
              "self-stretch md:self-start",
              isHighlight && "bg-mh-glow text-mh-ink-950 hover:bg-mh-cyan-500/90",
            )}
          >
            {ctaLabel}
          </BtnPrimary>
          {footerNote ? (
            <span
              className={cn(
                "mh-label-mono-sm",
                isHighlight ? "text-mh-text-on-dark/70" : "text-mh-text-secondary",
              )}
            >
              {footerNote}
            </span>
          ) : null}
        </div>
      </Card>
    </div>
  );
}

export default OfferCard;
