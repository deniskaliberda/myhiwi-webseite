import { cn } from "@/lib/utils";

type TrustStripItem = {
  /** Sichtbares Wordmark, z. B. „Sonnenhof". */
  label: string;
  /** Optionaler Sub-Tag in Mono, z. B. „Pension · Herrsching". */
  caption?: string;
};

type TrustStripProps = {
  items: TrustStripItem[];
  /** Optionaler Kicker links/oben, z. B. „Genannt von". */
  kicker?: string;
  className?: string;
};

/**
 * MyHiwi Redesign 2026 — TrustStrip
 * page-archetypes.md §A: 5 Kunden-Wordmarks in Bricolage.
 * `implementation.md` §7 erlaubt Wordmark-Stil statt Logos bis Erlaubnis vorliegt.
 */
export function TrustStrip({
  items,
  kicker = "Bei uns gearbeitet mit",
  className,
}: TrustStripProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-mh-5 lg:flex-row lg:items-center lg:gap-mh-7",
        className,
      )}
    >
      <span className="mh-label-mono text-mh-text-secondary lg:max-w-[160px]">
        {kicker}
      </span>
      <ul
        className={cn(
          "grid grid-cols-2 gap-x-mh-6 gap-y-mh-4",
          "sm:grid-cols-3 lg:grid-cols-5 lg:flex-1",
        )}
      >
        {items.map((item) => (
          <li
            key={item.label}
            className="flex flex-col gap-1 border-t border-mh-divider pt-mh-3 lg:border-t-0 lg:border-l lg:pl-mh-4 lg:pt-0"
          >
            <span className="font-mh-display text-[20px] font-semibold tracking-mh-display text-mh-text-primary">
              {item.label}
            </span>
            {item.caption ? (
              <span className="mh-label-mono-sm text-mh-text-secondary">
                {item.caption}
              </span>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrustStrip;
