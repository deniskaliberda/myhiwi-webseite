import type { Metadata } from "next";
import type { CaseStudy } from "@/content/case-studies/types";

export const caseUrl = (slug: string) =>
  `https://myhiwi.de/case-studies/${slug}`;
export const caseDate = (date: string) =>
  new Intl.DateTimeFormat("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
export const jsonLd = (value: unknown) =>
  JSON.stringify(value).replace(/</g, "\\u003c");

export function caseMetadata(study: CaseStudy): Metadata {
  const title = `${study.name} — ${study.title}`;
  const url = caseUrl(study.slug);
  return {
    title,
    description: study.summary,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      locale: "de_DE",
      title,
      description: study.summary,
      url,
      modifiedTime: study.updated,
      authors: ["https://myhiwi.de/ueber-mich"],
      images: [
        { url: `https://myhiwi.de${study.cover.src}`, alt: study.cover.alt },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: study.summary,
      images: [`https://myhiwi.de${study.cover.src}`],
    },
  };
}

export function caseSchema(study: CaseStudy) {
  const url = caseUrl(study.slug);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: study.title,
        description: study.summary,
        url,
        mainEntityOfPage: url,
        image: `https://myhiwi.de${study.cover.src}`,
        dateModified: study.updated,
        inLanguage: "de-DE",
        author: {
          "@type": "Person",
          name: "Denis Kaliberda",
          url: "https://myhiwi.de/ueber-mich",
        },
        publisher: {
          "@type": "Organization",
          name: "MyHiwi",
          url: "https://myhiwi.de",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Start",
            item: "https://myhiwi.de",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Referenzen",
            item: "https://myhiwi.de/case-studies",
          },
          { "@type": "ListItem", position: 3, name: study.name, item: url },
        ],
      },
    ],
  };
}
