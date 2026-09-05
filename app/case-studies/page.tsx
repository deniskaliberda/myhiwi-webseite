import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CASE_STUDIES } from "@/content/case-studies";
import { caseUrl, jsonLd } from "@/components/myhiwi/cases/metadata";
import styles from "@/components/myhiwi/cases/Cases.module.css";

export const metadata: Metadata = {
  title: "Referenzen — Webseiten, Google-Sichtbarkeit & digitale Abläufe",
  description:
    "Aktuelle MyHiwi-Projekte: echte Website-Vergleiche, konkrete Verbesserungen und nachvollziehbare Ergebnisse aus Hotellerie, Physiotherapie, Fahrschule, Architektur und Tanzstudio.",
  alternates: { canonical: "https://myhiwi.de/case-studies" },
  openGraph: {
    type: "website",
    url: "https://myhiwi.de/case-studies",
    title: "MyHiwi Referenzen — Einblicke in aktuelle Projekte",
    images: CASE_STUDIES[0]
      ? [
          {
            url: `https://myhiwi.de${CASE_STUDIES[0].cover.src}`,
            alt: CASE_STUDIES[0].cover.alt,
          },
        ]
      : [],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
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
      ],
    },
    {
      "@type": "ItemList",
      name: "MyHiwi Referenzen",
      itemListElement: [
        ...CASE_STUDIES.map((study, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: study.name,
          url: caseUrl(study.slug),
        })),
        {
          "@type": "ListItem",
          position: CASE_STUDIES.length + 1,
          name: "Villa Gloria",
          url: caseUrl("villa-gloria"),
        },
      ],
    },
  ],
};

export default function CaseStudiesOverviewPage() {
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
      />
      <div className={styles.wrap}>
        <nav className={styles.breadcrumb} aria-label="Brotkrumennavigation">
          <Link href="/">Start</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Referenzen</span>
        </nav>
        <header className={styles.hero}>
          <p className={styles.marker}>
            <span>00</span>
            <span aria-hidden="true" />
            Referenzen · aus der Zusammenarbeit
          </p>
          <h1>Echte Betriebe. Konkrete Veränderungen.</h1>
          <p className={styles.standfirst}>
            Neue Webseiten, bessere Auffindbarkeit und einfachere Abläufe: Hier
            sehen Sie, was in der Zusammenarbeit entstanden ist — mit echten
            Einblicken, Ausgangslage und nachvollziehbarem Projektstand.
          </p>
        </header>
        <section
          className={styles.caseList}
          aria-label="Aktuelle Kundenprojekte"
        >
          {CASE_STUDIES.map((study, index) => (
            <article key={study.slug} className={styles.caseCard}>
              <Link
                className={styles.cardVisual}
                href={`/case-studies/${study.slug}`}
                aria-label={`${study.name}: Referenz ansehen`}
              >
                <Image
                  src={study.cover.src}
                  alt={study.cover.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1320px) calc((100vw - 128px) / 2), 596px"
                />
              </Link>
              <div className={styles.cardContent}>
                <p className={styles.marker}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span aria-hidden="true" />
                  {study.industry} · {study.location}
                </p>
                <h2>
                  <Link href={`/case-studies/${study.slug}`}>{study.name}</Link>
                </h2>
                <h3>{study.title}</h3>
                <p className={styles.sectionLead}>{study.summary}</p>
                {study.metrics[0] && (
                  <div className={styles.cardMetric}>
                    <p>
                      <strong>{study.metrics[0].value}</strong>{" "}
                      {study.metrics[0].label}
                    </p>
                    <p className={styles.cardMetricContext}>
                      {study.metrics[0].period}
                    </p>
                    <p className={styles.cardMetricContext}>
                      Quelle: {study.metrics[0].source}
                    </p>
                    {study.metrics[0].note && (
                      <p className={styles.cardMetricContext}>
                        {study.metrics[0].note}
                      </p>
                    )}
                  </div>
                )}
                <Link
                  className={styles.textLink}
                  href={`/case-studies/${study.slug}`}
                >
                  Projekt im Detail
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
          <aside className={styles.supplement}>
            <div>
              <p className={styles.marker}>
                Weitere Referenz · Ferienunterkunft
              </p>
              <h2>Villa Gloria</h2>
              <p>
                Ein zusätzlicher Einblick in die Direktbuchung für eine
                Ferienunterkunft in Istrien.
              </p>
            </div>
            <Link className={styles.textLink} href="/case-studies/villa-gloria">
              Referenz ansehen
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </aside>
        </section>
      </div>
      <section className={styles.cta} aria-labelledby="overview-cta">
        <div className={styles.wrap}>
          <p className={styles.marker}>
            <span>06</span>
            <span aria-hidden="true" />
            Ihr Projekt
          </p>
          <h2 id="overview-cta">Was soll sich bei Ihnen verbessern?</h2>
          <p>
            Wir schauen auf Ihre Website, Ihre Sichtbarkeit und darauf, wo sich
            ein sinnvoller nächster Schritt anbietet.
          </p>
          <div className={styles.actions}>
            <Link className={styles.button} href="/kontakt">
              Sichtbarkeit prüfen lassen
              <ArrowRight size={19} aria-hidden="true" />
            </Link>
            <Link className={styles.textLink} href="/leistungen">
              Leistungen ansehen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
