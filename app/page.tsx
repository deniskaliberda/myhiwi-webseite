import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Globe2,
  MapPin,
  MessageSquare,
  Search,
} from "lucide-react";
import styles from "./relaunch.module.css";

export const metadata: Metadata = {
  title: {
    absolute: "Webseiten, Google- & KI-Sichtbarkeit | MyHiwi Ahrensfelde",
  },
  description:
    "MyHiwi unterstützt lokale Betriebe mit modernen Webseiten, Local SEO und Sichtbarkeit in der KI-Suche. Persönlich mit Denis aus Ahrensfelde. Sichtbarkeit prüfen lassen.",
  alternates: { canonical: "https://myhiwi.de" },
  openGraph: {
    title: "Gute Arbeit verdient Sichtbarkeit. | MyHiwi",
    description:
      "Webseiten, Google und KI-Suche für lokale Betriebe. Persönlich aus Ahrensfelde.",
    url: "https://myhiwi.de",
  },
};

const services = [
  {
    number: "01",
    name: "Webseiten",
    icon: Globe2,
    headline: "Ein Auftritt, der Ihrem Betrieb gerecht wird.",
    description:
      "Ihre Leistungen verständlich erklärt. Ihre Arbeit sichtbar gemacht. Und ein einfacher Weg, Sie zu erreichen – auf dem Handy genauso wie am Schreibtisch.",
    details: "Konzept & Texte · Gestaltung · Technische Umsetzung",
    href: "/leistungen/webseiten",
    link: "Webseiten für lokale Betriebe",
  },
  {
    number: "02",
    name: "Google-Sichtbarkeit",
    icon: Search,
    headline: "Dort auftauchen, wo Ihre Kunden suchen.",
    description:
      "Wir bringen Website, Google-Unternehmensprofil und lokale Inhalte zusammen. Damit Menschen aus Ihrer Region verstehen, was Sie anbieten und warum Sie zu ihrer Suche passen.",
    details: "Local SEO · Google Maps · Messbare Entwicklung",
    href: "/leistungen/google-sichtbarkeit",
    link: "Mehr über Google-Sichtbarkeit",
  },
  {
    number: "03",
    name: "KI-Sichtbarkeit",
    icon: MessageSquare,
    headline: "Auch die neue Suche mitdenken.",
    description:
      "Menschen fragen ChatGPT, Google-KI und Perplexity nach passenden Anbietern. Wir machen Ihre Leistungen, Erfahrung und Referenzen für diese Suche klarer zugänglich – und prüfen, ob Ihr Betrieb genannt wird.",
    details:
      "Klare Unternehmensinfos · Belegbare Inhalte · Quellen & Erwähnungen",
    href: "/leistungen/ki-sichtbarkeit",
    link: "So funktioniert KI-Sichtbarkeit",
  },
];
const faqs = [
  {
    question: "Für welche Betriebe ist MyHiwi da?",
    answer:
      "Für lokale Unternehmen, die mit ihrer Arbeit überzeugen und online mehr passende Anfragen gewinnen möchten: zum Beispiel Handwerksbetriebe, Fahrschulen, Praxen, Salons und Unterkünfte. Mein Ausgangspunkt ist Ahrensfelde, mit Schwerpunkt Berlin-Ost und Barnim. Zusammenarbeit ist auch überregional möglich.",
  },
  {
    question: "Brauche ich dafür eine komplett neue Webseite?",
    answer:
      "Das klären wir beim ersten Check. Manchmal reichen verständlichere Angebotsseiten, technische Korrekturen und ein besser gepflegtes Google-Profil. Ein Relaunch ist sinnvoll, wenn die bisherige Website Ihren Betrieb nicht mehr richtig zeigt oder wichtige Funktionen fehlen.",
  },
  {
    question: "Was bedeutet Sichtbarkeit in der KI-Suche?",
    answer:
      "Es geht darum, ob Ihr Betrieb in Antworten von Suchdiensten wie ChatGPT, Google AI Overviews oder Perplexity auftaucht. Dazu brauchen diese Dienste zugängliche, eindeutige und nachvollziehbare Informationen. Wir prüfen technische Voraussetzungen, verbessern Inhalte und beobachten Erwähnungen und Quellenlinks. Eine Empfehlung lässt sich nicht garantieren.",
  },
  {
    question: "Wie schnell sehe ich Ergebnisse?",
    answer:
      "Eine neue Seite oder ein korrigiertes Profil kann schnell online sein. Bis Suchdienste Änderungen aufnehmen und relevante Anfragen entstehen, vergeht unterschiedlich viel Zeit. Wir legen zuerst den Ausgangsstand fest und beurteilen danach die Entwicklung. Einen festen Rankingtermin kann ich nicht seriös versprechen.",
  },
  {
    question: "Was kostet die Zusammenarbeit?",
    answer:
      "Der erste Sichtbarkeitscheck ist kostenlos und unverbindlich. Für die Umsetzung erhalten Sie ein Angebot mit klar beschriebenem Umfang. Einmalige Arbeiten, laufende Betreuung und gegebenenfalls Werbebudget werden getrennt ausgewiesen. So sehen Sie vor Beginn, was enthalten ist.",
  },
  {
    question: "Wie läuft der Sichtbarkeitscheck ab?",
    answer:
      "Sie schicken Ihre Website oder Ihren Firmennamen, Ihren Ort und kurz Ihr Anliegen. Ich schaue auf Ihren öffentlichen Auftritt und melde mich in 1–3 Werktagen mit einer ersten Einschätzung. Wenn es passt, besprechen wir die nächsten Schritte persönlich.",
  },
];

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.label}>
      <span>{number}</span>
      <span className={styles.rule} />
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }),
        }}
      />
      <section
        className={`${styles.wrap} ${styles.hero}`}
        aria-labelledby="hero-title"
      >
        <div className={styles.heroCopy}>
          <SectionLabel number="MYHIWI">
            Ihr Betrieb. Online sichtbar.
          </SectionLabel>
          <h1 id="hero-title" className={`mh-hero-title ${styles.heroTitle}`}>
            Gute Arbeit.
            <br />
            Endlich <span>gefunden.</span>
          </h1>
          <p className={styles.heroLead}>
            Webseiten, Google und KI-Suche.
            <br />
            <strong>Für Betriebe, die vor Ort überzeugen.</strong>
          </p>
          <p className={styles.heroText}>
            Ich helfe Ihnen, auch online die passenden Menschen zu erreichen.
            Mit einem klaren Auftritt, lokaler Sichtbarkeit und einem einfachen
            Weg zur Anfrage.
          </p>
          <div className={styles.actions}>
            <Link href="/kontakt" className={styles.primary}>
              Sichtbarkeit prüfen lassen{" "}
              <ArrowUpRight size={20} aria-hidden="true" />
            </Link>
            <Link href="#projekte" className={styles.textLink}>
              Arbeiten ansehen <ArrowDown size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className={styles.heroNote}>
            <Image
              src="/ueber-mich/portrait.jpg"
              alt=""
              width={38}
              height={38}
              sizes="38px"
            />
            <span>Direkt mit Denis · kostenlos & unverbindlich</span>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.visualTop}>
            <span>Aus der Zusammenarbeit</span>
            <ArrowUpRight size={19} aria-hidden="true" />
          </div>
          <div className={styles.projectWindow}>
            <div className={styles.browserBar}>
              <span className={styles.browserDots} aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span>sonnenhof-herrsching.de</span>
              <Globe2 size={12} aria-hidden="true" />
            </div>
            <Image
              src="/case-studies/sonnenhof/sonnenhof-neu.png"
              alt="Die von MyHiwi gestaltete Sonnenhof-Website mit direktem Anfrageweg"
              width={1420}
              height={810}
              priority
              sizes="(max-width: 767px) 90vw, (max-width: 1100px) 48vw, 570px"
              className={styles.projectImage}
            />
          </div>
          <div className={styles.projectResult}>
            <div>
              <span className={styles.resultNumber}>
                199<span>↗</span>
              </span>
              <p>
                direkte Gäste-Anfragen
                <br />
                <span>in vier Monaten</span>
              </p>
            </div>
            <Link
              href="/case-studies/sonnenhof-herrsching"
              aria-label="Sonnenhof: Ergebnis und Messmethode ansehen"
            >
              <ArrowUpRight size={25} aria-hidden="true" />
            </Link>
          </div>
          <div className={styles.visualBottom}>
            <span>Sonnenhof Herrsching</span>
            <span>Website · SEO · Anzeigen</span>
          </div>
          <p className={styles.resultNote}>
            Formularanfragen aus mehreren Kanälen. Zeitraum und Quellen im{" "}
            <Link href="/case-studies/sonnenhof-herrsching">
              Projektbericht
            </Link>
            .
          </p>
        </div>
      </section>

      <section
        className={styles.clients}
        aria-label="Ausgewählte Kundenprojekte"
      >
        <div className={`${styles.wrap} ${styles.clientRow}`}>
          <p>
            Gute Zusammenarbeit.
            <br />
            <strong>Echte Betriebe.</strong>
          </p>
          <div className={styles.clientLogos}>
            {[
              {
                name: "Sonnenhof",
                image: "sonnenhof",
                slug: "sonnenhof-herrsching",
              },
              { name: "Mr. Sherman", image: "mr-sherman", slug: "mr-sherman" },
              { name: "Formazin", image: "formazin", slug: "formazin" },
              {
                name: "Villa Gloria",
                image: "villa-gloria",
                slug: "villa-gloria",
              },
            ].map((c) => (
              <Link
                key={c.slug}
                href={`/case-studies/${c.slug}`}
                aria-label={`${c.name}: Projekt ansehen`}
              >
                <Image
                  src={`/clients/${c.image}.png`}
                  alt={c.name}
                  width={150}
                  height={48}
                  sizes="150px"
                  className={styles.clientLogo}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="leistungen"
        className={`${styles.wrap} ${styles.section}`}
        aria-labelledby="services-title"
      >
        <span id="system" className={styles.anchor} />
        <span id="kompetenzen" className={styles.anchor} />
        <SectionLabel number="01">Was ich für Sie tue</SectionLabel>
        <div className={styles.sectionHeading}>
          <h2 id="services-title">
            Ihr Können ist da.
            <br />
            Jetzt darf man es <span>finden.</span>
          </h2>
          <p>
            Von der ersten Suche bis zum Kontakt: Wir setzen dort an, wo Ihr
            Betrieb heute Möglichkeiten liegen lässt.
          </p>
        </div>
        <div className={styles.serviceList}>
          {services.map((s) => (
            <article key={s.href} className={styles.serviceRow}>
              <div className={styles.serviceName}>
                <s.icon size={27} strokeWidth={1.5} aria-hidden="true" />
                <h3>{s.name}</h3>
                <span>{s.number}</span>
              </div>
              <div className={styles.serviceBody}>
                <h4>{s.headline}</h4>
                <p>{s.description}</p>
                <span className={styles.serviceDetails}>{s.details}</span>
              </div>
              <Link
                href={s.href}
                className={styles.serviceArrow}
                aria-label={s.link}
              >
                <ArrowUpRight size={25} aria-hidden="true" />
                <span>{s.link}</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section
        id="projekte"
        className={styles.workSection}
        aria-labelledby="work-title"
      >
        <div className={styles.wrap}>
          <SectionLabel number="02">Einblick in die Arbeit</SectionLabel>
          <div className={styles.sectionHeading}>
            <h2 id="work-title">
              Keine Beispiele von der Stange.
              <br />
              <span>Echte Zusammenarbeit.</span>
            </h2>
            <Link href="/case-studies" className={styles.textLink}>
              Alle Projekte ansehen{" "}
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className={styles.projectGrid}>
            <Link
              className={styles.workCard}
              href="/case-studies/sonnenhof-herrsching"
            >
              <div className={styles.workImage}>
                <Image
                  src="/case-studies/sonnenhof/sonnenhof-neu.png"
                  alt="Sonnenhof Herrsching: neuer Webauftritt"
                  width={1420}
                  height={810}
                  sizes="(max-width: 767px) 90vw, 48vw"
                />
              </div>
              <div className={styles.workCaption}>
                <div>
                  <span>Unterkunft · Herrsching am Ammersee</span>
                  <h3>Sonnenhof Herrsching</h3>
                  <p>
                    Ein neuer Auftritt. Lokale Suchsichtbarkeit. Ein direkter
                    Weg zur Gäste-Anfrage.
                  </p>
                </div>
                <ArrowUpRight size={25} aria-hidden="true" />
              </div>
            </Link>
            <Link className={styles.workCard} href="/case-studies/mr-sherman">
              <div className={`${styles.workImage} ${styles.shermanImage}`}>
                <Image
                  src="/case-studies/mr-sherman/cover.png"
                  alt="Mr. Sherman Tanzstudio: Website und Buchungsplattform"
                  width={1420}
                  height={810}
                  sizes="(max-width: 767px) 90vw, 48vw"
                />
              </div>
              <div className={styles.workCaption}>
                <div>
                  <span>Tanzstudio · Berlin</span>
                  <h3>Mr. Sherman</h3>
                  <p>
                    Von der Website bis zur Kursbuchung: ein zusammenhängender
                    Auftritt für das Studio.
                  </p>
                </div>
                <ArrowUpRight size={25} aria-hidden="true" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section
        className={`${styles.wrap} ${styles.section}`}
        aria-labelledby="process-title"
      >
        <SectionLabel number="03">So kommen wir weiter</SectionLabel>
        <div className={styles.sectionHeading}>
          <h2 id="process-title">
            Erst verstehen.
            <br />
            Dann richtig <span>anfangen.</span>
          </h2>
          <p>
            Sie müssen vorher keine Fachbegriffe lernen. Wir klären gemeinsam,
            was Ihrem Betrieb tatsächlich hilft.
          </p>
        </div>
        <ol className={styles.steps}>
          {[
            [
              "Hinschauen",
              "Ich prüfe Ihre Website, Ihren öffentlichen Google-Auftritt und die Fragen Ihrer Kunden. Sie bekommen eine erste Einschätzung.",
            ],
            [
              "Klar entscheiden",
              "Wir legen Ziel, Umfang und Kosten fest. Sie wissen, welche Arbeiten nötig sind und wie wir Fortschritt beurteilen.",
            ],
            [
              "Umsetzen & begleiten",
              "Ich setze die vereinbarten Schritte um. Wir prüfen den Anfrageweg und schauen anschließend auf die Entwicklung.",
            ],
          ].map(([title, text], i) => (
            <li key={title}>
              <span className={styles.stepNumber}>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section
        className={styles.founderSection}
        aria-labelledby="founder-title"
      >
        <div className={`${styles.wrap} ${styles.founderGrid}`}>
          <div className={styles.founderPhoto}>
            <Image
              src="/ueber-mich/portrait.jpg"
              alt="Denis Kaliberda, Gründer von MyHiwi aus Ahrensfelde"
              width={768}
              height={1024}
              sizes="(max-width: 767px) 90vw, 420px"
            />
            <span>Denis Kaliberda · Gründer von MyHiwi</span>
          </div>
          <div className={styles.founderCopy}>
            <SectionLabel number="04">Persönlich aus Ahrensfelde</SectionLabel>
            <h2 id="founder-title">
              Ihr Ansprechpartner?
              <br />
              <span>Bin ich.</span>
            </h2>
            <p>
              Ich bin Denis. Früher stand ich als Volleyball-Nationalspieler auf
              dem Feld. Heute unterstütze ich lokale Unternehmen dabei, digital
              besser aufgestellt zu sein.
            </p>
            <p>
              Vom ersten Gespräch bis zur Umsetzung arbeiten Sie direkt mit mir.
              Ich möchte Ihren Betrieb verstehen, verständlich beraten und Dinge
              bauen, die im Alltag funktionieren.
            </p>
            <Link href="/ueber-mich" className={styles.textLink}>
              Mehr über mich <ArrowUpRight size={19} aria-hidden="true" />
            </Link>
            <div className={styles.localNote}>
              <MapPin size={19} aria-hidden="true" />
              <span>
                Ahrensfelde · Berlin-Ost · Barnim
                <br />
                <Link href="/region/berlin-ost-barnim">
                  In der Region zuhause. Auch überregional für Sie da.
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${styles.wrap} ${styles.faqSection}`}
        aria-labelledby="faq-title"
      >
        <div>
          <SectionLabel number="05">Noch eine Frage?</SectionLabel>
          <h2 id="faq-title">
            Gut zu <span>wissen.</span>
          </h2>
          <p>Die wichtigsten Antworten vor unserem ersten Gespräch.</p>
        </div>
        <div className={styles.faqList}>
          {faqs.map((f) => (
            <details key={f.question}>
              <summary>
                {f.question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{f.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.finalSection} aria-labelledby="final-title">
        <div className={styles.wrap}>
          <SectionLabel number="LOS GEHT’S">
            Ein erster Blick auf Ihren Betrieb
          </SectionLabel>
          <div className={styles.finalGrid}>
            <h2 id="final-title">
              Wie sichtbar
              <br />
              sind <span>Sie schon?</span>
            </h2>
            <div>
              <p>
                Schicken Sie mir Ihre Website oder Ihren Firmennamen. Ich schaue
                hin und sage Ihnen, wo sich ein nächster Schritt lohnt.
              </p>
              <Link href="/kontakt" className={styles.primary}>
                Sichtbarkeit prüfen lassen{" "}
                <ArrowUpRight size={20} aria-hidden="true" />
              </Link>
              <span className={styles.finalNote}>
                <Check size={15} aria-hidden="true" /> Kostenlos · unverbindlich
                · Antwort in 1–3 Werktagen
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
