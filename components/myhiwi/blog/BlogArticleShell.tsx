import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { BtnPrimary } from "@/components/myhiwi/cta/BtnPrimary";
import { Container } from "@/components/myhiwi/layout/Container";
import { CtaRow } from "@/components/myhiwi/cta/CtaRow";
import { Section } from "@/components/myhiwi/layout/Section";

type BlogArticleShellProps = {
  /** Mono-Kategorie-Tag, z. B. „Technisches SEO". */
  category: string;
  /** Anzeigedatum, z. B. „24. April 2026". */
  date: string;
  /** Lesezeit, z. B. „7 Min.". */
  readTime: string;
  /** H1 — als ReactNode, damit ein Italic-Accent gesetzt werden kann. */
  title: ReactNode;
  /** Lead-Absatz unter der H1. */
  lead: ReactNode;
  /** Artikel-Body (wird in `.blog-prose` gerahmt → mh-Typografie). */
  children: ReactNode;
  /** Final-CTA-Headline (mit Italic-Accent als ReactNode). */
  ctaTitle: ReactNode;
  /** Final-CTA-Lead. */
  ctaLead: ReactNode;
};

/**
 * MyHiwi Mobile-Revamp 2026 — BlogArticleShell
 * Eine Hülle für alle Blog-Artikel: Hero (Back-Link + Mono-Meta + H1 + Lead),
 * Prose-Body im mh-Design-System und das ritualisierte dunkle Final-CTA —
 * identisch zum Flow der übrigen Seiten.
 */
export function BlogArticleShell({
  category,
  date,
  readTime,
  title,
  lead,
  children,
  ctaTitle,
  ctaLead,
}: BlogArticleShellProps) {
  return (
    <>
      {/* HERO */}
      <Section background="paper" padding="large">
        <Container className="max-w-[760px]">
          <Link
            href="/blog"
            className="inline-flex items-center gap-mh-2 mh-label-mono text-mh-text-secondary transition-colors duration-mh-fast ease-mh-default hover:text-mh-accent"
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" />
            Blog
          </Link>

          <div className="mt-mh-5 flex flex-wrap items-center gap-x-mh-3 gap-y-mh-2">
            <span className="mh-label-mono-sm rounded-mh-pill bg-mh-accent-soft px-mh-3 py-1 text-mh-accent">
              {category}
            </span>
            <span className="mh-label-mono-sm text-mh-text-secondary">
              {date} · {readTime}
            </span>
          </div>

          <h1 className="mt-mh-4 mh-display-3">{title}</h1>
          <p className="mt-mh-5 mh-body-large text-mh-text-secondary">{lead}</p>
        </Container>
      </Section>

      {/* BODY */}
      <Section background="paper" padding="none" className="pb-mh-9 md:pb-mh-10">
        <Container className="max-w-[760px]">
          <div className="blog-prose space-y-mh-6">{children}</div>
        </Container>
      </Section>

      {/* FINAL CTA */}
      <Section background="ink" padding="finalCta" finalCta>
        <Container>
          <div className="max-w-4xl">
            <p className="mh-label-mono text-mh-glow">Nächster Schritt</p>
            <h2 className="mt-mh-4 mh-display-3">{ctaTitle}</h2>
            <p className="mt-mh-5 max-w-mh-text mh-body-large text-mh-text-on-dark/80">
              {ctaLead}
            </p>
            <CtaRow
              className="mt-mh-7"
              microcopy={
                <span className="text-mh-text-on-dark/70">
                  kostenlos · unverbindlich · Sie reden direkt mit Denis
                </span>
              }
            >
              <BtnPrimary
                href="/kontakt"
                pill
                fullWidthOnMobile
                className="bg-mh-text-on-dark text-mh-ink-950 hover:bg-mh-glow"
              >
                Kostenlosen Digital-Check anfragen
              </BtnPrimary>
            </CtaRow>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default BlogArticleShell;
