import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type {
  CaseImage,
  CaseMetric,
  CaseStudy,
} from "@/content/case-studies/types";
import { caseDate, caseSchema, jsonLd } from "./metadata";
import styles from "./Cases.module.css";

function Marker({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <p className={styles.marker}>
      <span>{number}</span>
      <span aria-hidden="true" />
      {children}
    </p>
  );
}

function ProjectImage({
  image,
  full = false,
  priority = false,
  gallery = false,
}: {
  image: CaseImage;
  full?: boolean;
  priority?: boolean;
  gallery?: boolean;
}) {
  const mobile = image.src.endsWith("/mobile.webp");
  return (
    <figure className={styles.figure}>
      <div
        className={
          mobile ? styles.mobileImage : full ? styles.fullImage : styles.image
        }
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes={
            gallery
              ? mobile
                ? "(max-width: 430px) calc(100vw - 40px), (max-width: 700px) 390px, (max-width: 1320px) calc(29.58vw - 33.13px), 358px"
                : "(max-width: 700px) calc(100vw - 40px), (max-width: 1320px) calc(70.42vw - 78.87px), 851px"
              : priority
                ? "(max-width: 700px) calc(100vw - 40px), (max-width: 1320px) calc(100vw - 80px), 1240px"
                : "(max-width: 700px) calc(100vw - 40px), (max-width: 1320px) calc((100vw - 104px) / 2), 608px"
          }
        />
      </div>
      <figcaption>{image.caption}</figcaption>
    </figure>
  );
}

function MetricGrid({ metrics }: { metrics: CaseMetric[] }) {
  return (
    <div className={styles.metrics}>
      {metrics.map((metric) => (
        <div key={metric.label} className={styles.metric}>
          <p className={styles.value}>{metric.value}</p>
          <h3>{metric.label}</h3>
          <p>{metric.period}</p>
          <p className={styles.source}>Quelle: {metric.source}</p>
          {metric.note && <p className={styles.source}>{metric.note}</p>}
        </div>
      ))}
    </div>
  );
}

export default function CaseStudyPage({ study }: { study: CaseStudy }) {
  return (
    <article className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(caseSchema(study)) }}
      />
      <div className={styles.wrap}>
        <nav className={styles.breadcrumb} aria-label="Brotkrumennavigation">
          <Link href="/">Start</Link>
          <span aria-hidden="true">/</span>
          <Link href="/case-studies">Referenzen</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{study.name}</span>
        </nav>
        <header className={styles.hero}>
          <Marker number="00">
            {study.industry} · {study.location}
          </Marker>
          <p className={styles.client}>{study.name}</p>
          <h1>{study.title}</h1>
          <p className={styles.standfirst}>{study.standfirst}</p>
          <div className={styles.byline}>
            <span>
              Von <Link href="/ueber-mich">Denis Kaliberda</Link>
            </span>
            <span>
              Aktualisiert am{" "}
              <time dateTime={study.updated}>{caseDate(study.updated)}</time>
            </span>
            <a href={study.website} target="_blank" rel="noopener noreferrer">
              Website besuchen ↗
            </a>
          </div>
        </header>
        <ProjectImage image={study.cover} priority />
      </div>

      <section className={styles.results} aria-labelledby="results-heading">
        <div className={styles.wrap}>
          <Marker number="01">Projektstand</Marker>
          <h2 id="results-heading">Was sich verändert hat.</h2>
          <MetricGrid metrics={study.metrics} />
          {study.searchHistory && (
            <div className={styles.searchHistory}>
              <h3>
                {study.searchHistory.length > 1
                  ? "Google-Suche im Monatsvergleich"
                  : "Google-Suche im dokumentierten Monat"}
              </h3>
              <table>
                <caption>
                  {study.searchHistory.length > 1
                    ? "Vollständige Kalendermonate"
                    : "Vollständiger Kalendermonat"}{" "}
                  · Google Search Console, Websuche · Abruf 05.09.2026
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Zeitraum</th>
                    <th scope="col">Klicks</th>
                    <th scope="col">Impressionen</th>
                  </tr>
                </thead>
                <tbody>
                  {study.searchHistory.map((row) => (
                    <tr key={row.month}>
                      <th scope="row">{row.month}</th>
                      <td>{row.clicks.toLocaleString("de-DE")}</td>
                      <td>{row.impressions.toLocaleString("de-DE")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p>
                Suchklicks sind keine Anfragen oder Buchungen. Der Vergleich
                zeigt die Entwicklung, nicht die isolierte Wirkung einzelner
                Maßnahmen.
              </p>
            </div>
          )}
          {study.inquiryHistory && (
            <section
              className={styles.evidenceBlock}
              aria-labelledby="inquiry-history-heading"
            >
              <h3 id="inquiry-history-heading">
                Website-Anfragen im Zeitverlauf
              </h3>
              <p>{study.inquiryHistory.period}</p>
              <ol className={styles.historyBars}>
                {study.inquiryHistory.rows.map((row) => (
                  <li key={row.label}>
                    <span>{row.label}</span>
                    <span className={styles.barTrack} aria-hidden="true">
                      <span
                        style={{
                          width: `${(row.value / Math.max(...study.inquiryHistory!.rows.map((r) => r.value), 1)) * 100}%`,
                        }}
                      />
                    </span>
                    <strong>
                      {row.value}
                      <span className="sr-only"> Anfragen</span>
                    </strong>
                  </li>
                ))}
              </ol>
              <p className={styles.evidenceNote}>
                Quelle: {study.inquiryHistory.source}.{" "}
                {study.inquiryHistory.note}
              </p>
            </section>
          )}
          {study.technicalComparison && (
            <section
              className={`${styles.evidenceBlock} ${styles.searchHistory}`}
              aria-labelledby="technical-heading"
            >
              <h3 id="technical-heading">
                Technik im Vorher-Nachher-Vergleich
              </h3>
              <table>
                <caption>
                  {study.technicalComparison.period} ·{" "}
                  {study.technicalComparison.source}
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Messwert</th>
                    <th scope="col">Vorher</th>
                    <th scope="col">Nachher</th>
                  </tr>
                </thead>
                <tbody>
                  {study.technicalComparison.rows.map((row) => (
                    <tr key={row.label}>
                      <th scope="row">{row.label}</th>
                      <td>{row.before}</td>
                      <td>{row.after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p>{study.technicalComparison.note}</p>
            </section>
          )}
          {study.metricGroups?.map((group, index) => (
            <section
              key={group.title}
              className={styles.evidenceBlock}
              aria-labelledby={`evidence-heading-${index}`}
            >
              <h3 id={`evidence-heading-${index}`}>{group.title}</h3>
              <p>{group.description}</p>
              <MetricGrid metrics={group.metrics} />
            </section>
          ))}
          <a className={styles.textLink} href="#messmethode">
            Daten &amp; Messmethode <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>

      <div className={styles.wrap}>
        {study.comparison && (
          <section
            className={styles.section}
            aria-labelledby="comparison-heading"
          >
            <Marker number="02">{study.comparison.eyebrow ?? "Vorher & heute"}</Marker>
            <h2 id="comparison-heading">
              {study.comparison.title ?? "Der Unterschied im direkten Vergleich."}
            </h2>
            <p className={styles.sectionLead}>{study.comparison.note}</p>
            <div className={styles.pair}>
              <div>
                <h3 className={styles.imageLabel}>{study.comparison.beforeLabel ?? "Vorher"}</h3>
                <ProjectImage image={study.comparison.before} full />
              </div>
              <div>
                <h3 className={styles.imageLabel}>{study.comparison.afterLabel ?? "Heute"}</h3>
                <ProjectImage image={study.comparison.after} full />
              </div>
            </div>
          </section>
        )}

        <section
          className={`${styles.section} ${styles.editorial}`}
          aria-labelledby="challenge-heading"
        >
          <div>
            <Marker number="03">Ausgangslage</Marker>
            <h2 id="challenge-heading">{study.challenge.title}</h2>
          </div>
          <p className={styles.bodyLead}>{study.challenge.body}</p>
        </section>
        <section
          className={styles.section}
          aria-labelledby="improvements-heading"
        >
          <Marker number="04">Umsetzung</Marker>
          <h2 id="improvements-heading">Was wir konkret verbessert haben.</h2>
          <ol className={styles.improvements}>
            {study.improvements.map((item, index) => (
              <li key={item.title}>
                <span className={styles.stepNumber} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ol>
        </section>
        {study.gallery.length > 0 && (
          <section className={styles.section} aria-labelledby="gallery-heading">
            <Marker number="05">Einblicke</Marker>
            <h2 id="gallery-heading">So sieht die Umsetzung aus.</h2>
            <div className={styles.gallery}>
              {study.gallery.map((image) => (
                <ProjectImage key={image.src} image={image} full gallery />
              ))}
            </div>
          </section>
        )}
        {study.roleViews && (
          <section className={styles.section} aria-labelledby="roles-heading">
            <Marker number="PLATTFORM">
              Vier Aufgaben, vier Arbeitsbereiche
            </Marker>
            <h2 id="roles-heading">Ein System für Gäste und Team.</h2>
            <p className={styles.sectionLead}>
              Die Demoansichten zeigen die Aufteilung der Plattform im
              Entwicklungsstand Juli 2026. Sie enthalten Testdaten; die
              angezeigten Konten und Werte sind keine echten Kunden- oder
              Betriebszahlen.
            </p>
            <div className={styles.pair}>
              {study.roleViews.map((image) => (
                <ProjectImage key={image.src} image={image} full />
              ))}
            </div>
          </section>
        )}
        {study.video && (
          <figure className={styles.video}>
            <video
              controls
              preload="none"
              poster={study.video.poster}
              aria-label={study.video.caption}
            >
              <source src={study.video.src} type="video/mp4" />
              Ihr Browser unterstützt dieses Video nicht.{" "}
              <a href={study.video.src}>Video öffnen</a>
            </video>
            <figcaption>{study.video.caption}</figcaption>
          </figure>
        )}
        <section
          className={`${styles.section} ${styles.editorial}`}
          aria-labelledby="timeline-heading"
        >
          <div>
            <Marker number="06">Zusammenarbeit</Marker>
            <h2 id="timeline-heading">Schritt für Schritt weiterentwickelt.</h2>
          </div>
          <ol className={styles.timeline}>
            {study.timeline.map((item) => (
              <li key={`${item.date}-${item.title}`}>
                <p className={styles.date}>{item.date}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ol>
        </section>
        <section className={styles.section} aria-labelledby="method-heading">
          <Marker number="07">Einordnung</Marker>
          <h2 id="method-heading">Was die Daten zeigen.</h2>
          <details id="messmethode" className={styles.method} open>
            <summary>Datenquellen, Zeiträume &amp; Messmethode</summary>
            <div>
              {study.methodology.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </details>
        </section>
        <section
          className={`${styles.section} ${styles.editorial}`}
          aria-labelledby="outlook-heading"
        >
          <div>
            <Marker number="08">Ausblick</Marker>
            <h2 id="outlook-heading">Wie es weitergeht.</h2>
          </div>
          <div>
            <p className={styles.bodyLead}>{study.outlook}</p>
            <h3 className={styles.relatedHeading}>Passende Leistungen</h3>
            <ul className={styles.services}>
              {study.services.map((service) => (
                <li key={service.href}>
                  <Link className={styles.textLink} href={service.href}>
                    {service.label}
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
      <section className={styles.cta} aria-labelledby="cta-heading">
        <div className={styles.wrap}>
          <Marker number="09">Ihr Projekt</Marker>
          <h2 id="cta-heading">Was könnte sich bei Ihnen verändern?</h2>
          <p>
            Wir schauen gemeinsam auf Ihre Website, Ihre Sichtbarkeit und den
            nächsten sinnvollen Schritt.
          </p>
          <div className={styles.actions}>
            <Link
              className={styles.button}
              href={`/kontakt?projekt=${study.slug}`}
            >
              Sichtbarkeit prüfen lassen
              <ArrowRight size={19} aria-hidden="true" />
            </Link>
            <Link className={styles.textLink} href="/case-studies">
              Alle Referenzen ansehen
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
