"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, HelpCircle } from "lucide-react";
import { glossary } from "@/lib/glossary";

type Props = {
  term: keyof typeof glossary;
  children: React.ReactNode;
};

/**
 * Inline glossary tooltip.
 *
 * Usage:
 *   <Glossary term="next-js">Next.js-Website</Glossary>
 *
 * Renders a subtly underlined span that reveals a 1–2 sentence
 * definition on hover / focus / tap, plus a link to the
 * deep-dive blog post if one exists.
 */
export default function Glossary({ term, children }: Props) {
  const entry = glossary[term];
  const tooltipId = useId();
  const [open, setOpen] = useState(false);

  if (!entry) {
    // Fall back to plain text if the term is not defined — avoids breaking
    // the page when a new term is added but not yet in the glossary.
    return <span>{children}</span>;
  }

  return (
    <span
      className="relative inline-block align-baseline"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-describedby={tooltipId}
        aria-expanded={open}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onClick={() => setOpen((v) => !v)}
        className="group inline-flex items-baseline gap-[2px] rounded-sm border-b border-dotted border-blue-500 bg-transparent font-medium text-blue-700 underline-offset-4 outline-none transition-colors hover:text-blue-900 focus-visible:ring-2 focus-visible:ring-blue-300"
      >
        {children}
        <HelpCircle
          className="ml-0.5 h-3 w-3 flex-shrink-0 self-center text-blue-400 opacity-60 transition-opacity group-hover:opacity-100"
          aria-hidden
        />
      </button>

      {open && (
        <span
          id={tooltipId}
          role="tooltip"
          className="absolute left-1/2 top-full z-30 mt-2 w-72 -translate-x-1/2 rounded-xl border border-slate-200 bg-white p-4 text-left shadow-xl"
        >
          <span className="block text-xs font-mono uppercase tracking-[0.14em] text-slate-400">
            {String(term).replace(/-/g, " ")}
          </span>
          <span className="mt-2 block text-sm leading-relaxed text-slate-700">
            {entry.definition}
          </span>
          {entry.href && (
            <Link
              href={entry.href}
              className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-blue-600 transition-colors hover:text-blue-700"
            >
              Mehr erfahren
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          )}
        </span>
      )}
    </span>
  );
}
