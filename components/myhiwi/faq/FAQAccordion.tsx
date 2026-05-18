"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export type FAQItem = {
  question: string;
  answer: React.ReactNode;
};

type FAQAccordionProps = {
  /** Sticky Headline links, z. B. „Häufige Fragen". */
  title?: string;
  /** Optionaler Lead-Paragraph unter der Headline. */
  lead?: string;
  items: FAQItem[];
  /** Index des initial offenen Items (default: keiner). */
  defaultOpenIndex?: number;
  className?: string;
};

/**
 * MyHiwi Redesign 2026 — FAQAccordion
 * components.md §4: Sticky Headline (0.85fr) + Akkordeon (1.15fr).
 * Plus-Icon rotiert auf 45° beim Öffnen (DESIGN.md §11).
 */
export function FAQAccordion({
  title = "Häufige Fragen",
  lead,
  items,
  defaultOpenIndex,
  className,
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(
    defaultOpenIndex ?? null,
  );

  return (
    <div
      className={cn(
        "grid gap-mh-7 lg:grid-cols-[0.85fr_1.15fr] lg:gap-mh-8",
        className,
      )}
    >
      <div className="lg:sticky lg:top-mh-7 lg:self-start">
        <h2 className="mh-display-3">{title}</h2>
        {lead ? (
          <p className="mt-mh-4 mh-body-medium text-mh-text-secondary max-w-mh-text">
            {lead}
          </p>
        ) : null}
      </div>

      <ul className="flex flex-col">
        {items.map((item, i) => {
          const isOpen = openIndex === i;
          const panelId = `mh-faq-panel-${i}`;
          const buttonId = `mh-faq-button-${i}`;
          return (
            <li
              key={item.question}
              className="border-t border-mh-divider first:border-t-0"
            >
              <h3>
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-mh-4 py-mh-5 text-left transition-colors duration-mh-fast ease-mh-default hover:text-mh-accent"
                >
                  <span className="mh-display-5">{item.question}</span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-mh-pill border border-mh-divider transition-transform duration-mh-medium ease-mh-default",
                      isOpen && "rotate-45 border-mh-accent text-mh-accent",
                    )}
                  >
                    <Plus className="h-4 w-4" strokeWidth={1.8} />
                  </span>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
                className="pb-mh-5"
              >
                <div className="mh-body-medium text-mh-text-secondary max-w-mh-text">
                  {item.answer}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FAQAccordion;
