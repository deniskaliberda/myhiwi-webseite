import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./ServiceLanding.module.css";

export type ServiceContent = {
  slug: string;
  number: string;
  name: string;
  eyebrow: string;
  title: string;
  accent: string;
  introduction: string;
  visual: { label: string; title: string; items: string[]; footnote: string };
  challenge: { title: string; text: string };
  deliverables: { title: string; text: string }[];
  process: { title: string; text: string }[];
  evidence: {
    eyebrow: string;
    title: string;
    text: string;
    href: string;
    link: string;
    image?: string;
    imageAlt?: string;
  };
  measurement: { title: string; text: string };
  faqs: { question: string; answer: string }[];
  sources?: ReactNode;
};

const services = [
  {
    slug: "webseiten",
    name: "Webseiten",
    detail: "Ein Auftritt, der Ihr Angebot verständlich macht.",
  },
  {
    slug: "google-sichtbarkeit",
    name: "Google-Sichtbarkeit",
    detail: "Website und Unternehmensprofil zusammen denken.",
  },
  {
    slug: "ki-sichtbarkeit",
    name: "KI-Sichtbarkeit",
    detail: "Ihre Expertise für neue Suchwege zugänglich machen.",
  },
];

export default function ServiceLanding({
  content,
}: {
  content: ServiceContent;
}) {
  const url = `https://myhiwi.de/leistungen/${content.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: content.name,
        serviceType: content.name,
        description: content.introduction,
        url,
        provider: {
          "@id": "https://myhiwi.de/#organization",
          "@type": "Organization",
          name: "MyHiwi",
          url: "https://myhiwi.de",
        },
        areaServed: { "@type": "Country", name: "Deutschland" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Startseite",
            item: "https://myhiwi.de",
          },
          { "@type": "ListItem", position: 2, name: content.name, item: url },
        ],
      },
    ],
  };
  return (
    <article className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <div className={styles.container}>
        <nav aria-label="Brotkrumennavigation" className={styles.breadcrumb}>
          <Link href="/">Startseite</Link>
          <span aria-hidden="true">/</span>
          <span>{content.eyebrow}</span>
        </nav>
        <section className={styles.hero} aria-labelledby="service-title">
          <div>
            <p className={styles.kicker}>
              Leistung {content.number} / Für lokale Betriebe
            </p>
            <h1 id="service-title">
              {content.title} <span>{content.accent}</span>
            </h1>
            <p className={styles.introduction}>{content.introduction}</p>
            <Link className={styles.button} href="/kontakt">
              Sichtbarkeit prüfen lassen <span aria-hidden="true">↗</span>
            </Link>
            <p className={styles.location}>
              MyHiwi · Ahrensfelde, Berlin-Ost & darüber hinaus
            </p>
          </div>
          <aside className={styles.visual} aria-label={content.visual.label}>
            <p className={styles.kicker}>{content.visual.label}</p>
            <p className={styles.visualTitle}>{content.visual.title}</p>
            <ol>
              {content.visual.items.map((item, index) => (
                <li key={item}>
                  <span>0{index + 1}</span>
                  {item}
                </li>
              ))}
            </ol>
            <p className={styles.visualNote}>{content.visual.footnote}</p>
          </aside>
        </section>
        <section className={styles.challenge}>
          <p className={styles.kicker}>Der Ausgangspunkt</p>
          <h2>{content.challenge.title}</h2>
          <p>{content.challenge.text}</p>
        </section>
        <section
          className={styles.section}
          aria-labelledby="deliverables-title"
        >
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>01 / Leistungsumfang</p>
            <h2 id="deliverables-title">Was wir für Sie umsetzen.</h2>
          </div>
          <div className={styles.rows}>
            {content.deliverables.map((item, index) => (
              <div className={styles.row} key={item.title}>
                <span className={styles.index}>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>
        <section
          className={styles.processSection}
          aria-labelledby="process-title"
        >
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>02 / Zusammenarbeit</p>
            <h2 id="process-title">Ein klarer nächster Schritt.</h2>
          </div>
          <ol className={styles.process}>
            {content.process.map((step, index) => (
              <li key={step.title}>
                <span className={styles.stepNumber}>0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </section>
        <section className={styles.evidence} aria-labelledby="evidence-title">
          {content.evidence.image ? (
            <div className={styles.projectImage}>
              <Image
                src={content.evidence.image}
                alt={content.evidence.imageAlt || ""}
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
              />
            </div>
          ) : (
            <div className={styles.caseMark} aria-hidden="true">
              <span>
                Aus der
                <br />
                Praxis.
              </span>
              <span>MYHIWI / PROJEKTE</span>
            </div>
          )}
          <div className={styles.evidenceText}>
            <p className={styles.kicker}>{content.evidence.eyebrow}</p>
            <h2 id="evidence-title">{content.evidence.title}</h2>
            <p>{content.evidence.text}</p>
            <Link className={styles.textLink} href={content.evidence.href}>
              {content.evidence.link} <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
        <section className={styles.measurement}>
          <p className={styles.kicker}>03 / Erfolg einordnen</p>
          <h2>{content.measurement.title}</h2>
          <p>{content.measurement.text}</p>
          {content.sources && (
            <div className={styles.sources}>{content.sources}</div>
          )}
        </section>
        <section className={styles.faqSection} aria-labelledby="faq-title">
          <div>
            <p className={styles.kicker}>Vor der Entscheidung</p>
            <h2 id="faq-title">
              Ihre Fragen.
              <br />
              Klare Antworten.
            </h2>
          </div>
          <div className={styles.faqs}>
            {content.faqs.map((faq) => (
              <details key={faq.question}>
                <summary>
                  {faq.question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
        <nav className={styles.related} aria-label="Weitere Leistungen">
          <p className={styles.kicker}>Das passt dazu</p>
          {services
            .filter((service) => service.slug !== content.slug)
            .map((service) => (
              <Link key={service.slug} href={`/leistungen/${service.slug}`}>
                <span>
                  <strong>{service.name}</strong>
                  <span>{service.detail}</span>
                </span>
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
        </nav>
      </div>
      <section className={styles.finalCta}>
        <div className={styles.container}>
          <p className={styles.kicker}>Ihr Betrieb. Ihr nächster Schritt.</p>
          <h2>Wo stehen Sie heute?</h2>
          <p>
            Schicken Sie uns Ihre Website, Ihren Ort und Ihr Ziel. Wir schauen
            gemeinsam, welche Verbesserungen für Ihren Betrieb sinnvoll sind.
          </p>
          <Link className={styles.button} href="/kontakt">
            Sichtbarkeit prüfen lassen <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </article>
  );
}
