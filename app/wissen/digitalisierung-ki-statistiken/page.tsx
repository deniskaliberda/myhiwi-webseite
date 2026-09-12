import type { Metadata } from "next";
import Link from "next/link";
import data from "@/content/research/digitalisierung-ki.json";
import { Container } from "@/components/myhiwi/layout/Container";
import { Section } from "@/components/myhiwi/layout/Section";
import { SectionMark } from "@/components/myhiwi/layout/SectionMark";
import { BtnPrimary } from "@/components/myhiwi/cta/BtnPrimary";
import styles from "./statistics.module.css";

const url = `https://myhiwi.de/wissen/${data.slug}`;
const description = "25 Statistiken zu KI und Digitalisierung in deutschen Unternehmen: mit Originalquellen, Datenzeiträumen, Größenklassen, Grafiken und CSV-Download.";
const format = (value: number) => new Intl.NumberFormat("de-DE").format(value);
const date = (value: string) => new Intl.DateTimeFormat("de-DE", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(value));

export const metadata: Metadata = {
  title: "KI & Digitalisierung: 25 Statistiken für kleine Unternehmen",
  description,
  alternates: { canonical: url },
  openGraph: { title: data.title, description, url, type: "article", publishedTime: data.published, modifiedTime: data.checked, locale: "de_DE", images: [{ url: "/wissen/digitalisierung-ki/ki-groessenklassen.png", width: 1400, height: 900, alt: "KI-Nutzung nach Unternehmensgröße, Destatis 2025" }] },
  twitter: { card: "summary_large_image", title: data.title, description, images: ["/wissen/digitalisierung-ki/ki-groessenklassen.png"] },
};

function Chart({ title, ids, caption, file }: { title: string; ids: string[]; caption: string; file: string }) {
  const rows = ids.map((id) => data.statistics.find((row) => row.id === id)!);
  return <figure className={styles.chart}>
    <figcaption><h3 className="mh-display-5">{title}</h3><p className={styles.small}>{caption}</p></figcaption>
    <p className={styles.small}>Anteile in Prozent · gemeinsame Skala von 0 bis 100</p>
    <ul className={styles.bars}>
      {rows.map((row) => <li key={row.id}>
        <div className={styles.barLabel}><a href={`#${row.id}`}>{row.label}</a><strong>{format(row.value)} %</strong></div>
        <div className={styles.track} aria-hidden="true"><div style={{ width: `${row.value}%` }} /></div>
      </li>)}
    </ul>
    <a className={styles.download} href={`/wissen/digitalisierung-ki/${file}.svg`} download>Grafik herunterladen (SVG)</a>
  </figure>;
}

export default function StatisticsPage() {
  const schema = [
    { "@context": "https://schema.org", "@type": "Article", headline: data.title, description, datePublished: data.published, dateModified: data.checked, inLanguage: "de-DE", mainEntityOfPage: url, author: { "@type": "Person", name: "Denis Kaliberda", url: "https://myhiwi.de/ueber-mich" }, publisher: { "@type": "Organization", name: "MyHiwi", url: "https://myhiwi.de" }, image: "https://myhiwi.de/wissen/digitalisierung-ki/ki-groessenklassen.png", citation: data.sources.map((source) => source.url) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Start", item: "https://myhiwi.de" }, { "@type": "ListItem", position: 2, name: "Wissen", item: "https://myhiwi.de/wissen" }, { "@type": "ListItem", position: 3, name: "Digitalisierung & KI: Statistiken", item: url }] },
  ];
  return <article className={styles.article}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <Section padding="large">
      <Container>
        <Link href="/wissen" className={styles.back}>Wissen / Zahlen & Quellen</Link>
        <div className={styles.hero}>
          <div>
            <SectionMark index="25" label="Statistiken · Deutschland" tone="accent" />
            <h1 className="mt-mh-4 mh-display-2">Digitalisierung & KI in kleinen Unternehmen: <em className="mh-italic-accent">die Zahlen.</em></h1>
            <p className="mt-mh-5 mh-body-large text-mh-text-secondary">Wie viele Betriebe nutzen KI? Wer hat einen Plan? Und welche Zahlen passen überhaupt zu Ihrem Unternehmen? 25 Kennzahlen aus fünf Veröffentlichungen – mit Originalquellen und klaren Grenzen.</p>
            <p className={styles.byline}>Redaktion: <Link href="/ueber-mich">Denis Kaliberda</Link> · Quellen geprüft am <time dateTime={data.checked}>{date(data.checked)}</time></p>
          </div>
          <aside className={styles.heroNote} aria-label="Hinweis zur Einordnung">
            <span className="mh-label-mono text-mh-accent">Vor dem Zitieren</span>
            <h2 className="mt-mh-4 mh-display-4">Klein ist nicht immer gleich klein.</h2>
            <p>Unter fünf, ab zehn oder ab zwanzig Beschäftigten: Je nach Studie steht hinter „Unternehmen“ eine andere Gruppe. Wir zeigen sie direkt neben jeder Zahl.</p>
            <a href="#vergleich">Studien richtig vergleichen →</a>
          </aside>
        </div>
        <nav aria-label="Inhalt dieser Statistikseite" className={styles.toc}>
          <a href="#kurzfassung">Drei Zahlen zum Einstieg</a><a href="#vergleich">Studienvergleich</a><a href="#kennzahlen">Alle 25 Kennzahlen</a><a href="#grafiken">Grafiken</a><a href="#quellen">Quellen & Download</a>
        </nav>
      </Container>
    </Section>

    <Section id="kurzfassung" background="subtle" padding="compact">
      <Container>
        <SectionMark index="01" label="Auf einen Blick" />
        <h2 className="mt-mh-4 mh-display-4">Drei Zahlen. Drei verschiedene Perspektiven.</h2>
        <div className={styles.highlights}>
          {[{ id: "ki-unter-5", text: "KI-Einsatz bei Mittelständlern unter fünf Beschäftigten", source: "KfW · 2022–2024" }, { id: "ki-10-49", text: "KI-Nutzung bei Unternehmen mit 10–49 Beschäftigten", source: "Destatis · 2025" }, { id: "strategie-fehlt", text: "Ohne Digitalstrategie: Unternehmen mit 20–99 Beschäftigten", source: "Bitkom · Befragung 2026" }].map((item) => <a key={item.id} href={`#${item.id}`} className={styles.highlight}>
            <strong>{format(data.statistics.find((row) => row.id === item.id)!.value)} %</strong><span>{item.text}</span><small>{item.source} · Zur Quelle →</small>
          </a>)}
        </div>
        <p className={styles.small}>Diese Werte bilden keine Zeitreihe. Sie beschreiben unterschiedliche Gruppen und teilweise unterschiedliche Fragen.</p>
      </Container>
    </Section>

    <Section id="vergleich" padding="compact">
      <Container>
        <SectionMark index="02" label="Einordnung" />
        <h2 className="mt-mh-4 mh-display-4">Warum widersprechen sich die KI-Quoten scheinbar?</h2>
        <p className={styles.lead}>Eine belastbare Gegenüberstellung braucht denselben Zeitraum, dieselbe Unternehmensgruppe und dieselbe Frage. Diese Voraussetzungen erfüllen die hier versammelten Studien nicht.</p>
        <div className={styles.tableWrap} role="region" aria-label="Vergleich der fünf Veröffentlichungen" tabIndex={0}>
          <table><caption>Welche Veröffentlichung beantwortet welche Frage?</caption><thead><tr><th scope="col">Quelle</th><th scope="col">Datenzeitraum</th><th scope="col">Bezugsgruppe / Zweck</th></tr></thead><tbody>
            {data.sources.map((source) => <tr key={source.id}><th scope="row"><a href={`#quelle-${source.id}`}>{source.publisher}</a></th><td>{source.period}</td><td>{source.population}</td></tr>)}
          </tbody></table>
        </div>
        <div className={styles.reading}>
          <h3 className="mh-display-5">Was heißt das für einen kleinen lokalen Betrieb?</h3>
          <p>Bei einem Betrieb mit drei Beschäftigten ist die KfW-Auswertung zu Kleinstunternehmen die passendere Ausgangsfrage. Die Destatis-Zeile für 10–49 Beschäftigte oder die Bitkom-Gruppe ab 20 Beschäftigten ersetzt sie nicht. Keine dieser Bundeszahlen misst speziell Betriebe in Barnim oder Berlin-Ost.</p>
          <p>Auch eine hohe KI-Nutzungsquote beweist weder mehr Umsatz noch Zeitersparnis. Für die eigene Entscheidung zählt ein konkreter Ablauf: etwa Anfragen bearbeiten, Wissen finden oder Dokumentation vorbereiten – und ob sich dabei Aufwand und Qualität messbar verbessern.</p>
        </div>
      </Container>
    </Section>

    <Section id="kennzahlen" background="subtle" padding="compact">
      <Container>
        <SectionMark index="03" label="Die Datensammlung" />
        <h2 className="mt-mh-4 mh-display-4">25 Kennzahlen mit ihrem Kontext</h2>
        <p className={styles.lead}>Jede Kennzahl hat einen eigenen Direktlink. Datenjahr und Veröffentlichungsdatum sind getrennt: Eine 2026 veröffentlichte Studie kann frühere Jahre untersuchen.</p>
        {data.sources.map((source) => <section key={source.id} className={styles.statGroup} aria-labelledby={`gruppe-${source.id}`}>
          <h3 id={`gruppe-${source.id}`} className="mh-display-5">{source.section}</h3>
          <p>{source.intro}</p>
          <p className={styles.small}>Quelle: <a href={source.url}>{source.publisher}</a> · veröffentlicht / Tabellenstand {date(source.date)}</p>
          <dl className={styles.stats}>
            {data.statistics.filter((row) => row.source === source.id).map((row) => <div key={row.id} id={row.id} className={styles.stat}>
              <dt><a href={`#${row.id}`}>{row.label}<span className="sr-only"> – Direktlink</span></a></dt>
              <dd className={styles.value}>{format(row.value)} <span>{row.unit}</span></dd>
              <dd className={styles.context}><strong>Daten: {row.period}.</strong> {row.basis}. <a href={row.location.startsWith("KfW-Dossier") && source.companion ? source.companion : source.url}>Originalquelle ↗</a></dd>
            </div>)}
          </dl>
        </section>)}
      </Container>
    </Section>

    <Section id="grafiken" padding="compact">
      <Container>
        <SectionMark index="04" label="Grafiken zum Weiterverwenden" />
        <h2 className="mt-mh-4 mh-display-4">Vergleiche innerhalb derselben Erhebung</h2>
        <p className={styles.lead}>Die Balken beginnen bei null und verwenden dieselbe Prozentskala. Wir mischen keine Studien in einem Größenvergleich.</p>
        <div className={styles.charts}>
          <Chart title="KI-Nutzung nach Unternehmensgröße" ids={["ki-10-49", "ki-50-249", "ki-gross"]} caption="Quelle: Destatis · Daten 2025 · oberste Größenklasse wie in der Originaltabelle beschriftet." file="ki-groessenklassen" />
          <Chart title="Digitalstrategie in kleineren Unternehmen" ids={["strategie-fehlt", "strategie-bereiche", "strategie-zentral"]} caption="Quelle: Bitkom Research · KW 2–6, 2026 · Unternehmen mit 20–99 Beschäftigten." file="digitalstrategie" />
        </div>
        <p className={styles.small}>Eigene Darstellung auf Basis der genannten Studien. Die MyHiwi-Grafiken dürfen mit Quellenangabe und unveränderter Einordnung verwendet werden. Rechte an den Originalpublikationen bleiben bei den Herausgebern.</p>
      </Container>
    </Section>

    <Section id="quellen" background="subtle" padding="compact">
      <Container>
        <SectionMark index="05" label="Methodik & Originalquellen" />
        <h2 className="mt-mh-4 mh-display-4">Nachprüfen, herunterladen, richtig zitieren</h2>
        <div className={styles.reading}>
          <p>MyHiwi hat diese Zahlen recherchiert und eingeordnet, nicht selbst erhoben. Aufgenommen wurden öffentlich zugängliche Veröffentlichungen der datenerhebenden Institutionen. Geprüft wurden Zahl, Bezugsgruppe, Zeitraum und Fundstelle. Die Auswahl ist redaktionell und keine vollständige Marktübersicht.</p>
          <p>Die Stichproben sind nicht identisch. Wir bilden deshalb keinen Mittelwert aus ihren KI-Quoten. Prozentwerte werden mit der veröffentlichten Genauigkeit wiedergegeben. Geprüft am {date(data.checked)} bedeutet Quellenprüfung an diesem Tag, nicht Datenerhebung an diesem Tag.</p>
          <p>Die Quellen sollen vierteljährlich und bei neuen Veröffentlichungen überprüft werden. Historische Werte bleiben mit ihrem Datenzeitraum erkennbar. Fehlerhinweise erreichen mich über die <Link href="/kontakt">Kontaktseite</Link>.</p>
        </div>
        <a className={styles.download} href={`/wissen/${data.slug}/daten.csv`} download>Alle 25 Kennzahlen mit Quellen als CSV herunterladen ↓</a>
        <ol className={styles.sources}>
          {data.sources.map((source) => <li key={source.id} id={`quelle-${source.id}`}>
            <h3 className="mh-display-5"><a href={source.url}>{source.publisher}: {source.title} ↗</a></h3>
            <p className={styles.small}>Veröffentlicht / Tabellenstand: {date(source.date)} · Daten: {source.period}</p>
            <p>{source.method}</p>
            {source.companion && <p><a href={source.companion}>Ergänzende Einordnung und Kennzahlen im KfW-Dossier ↗</a></p>}
          </li>)}
        </ol>
        <div className={styles.citation}>
          <h3 className="mh-display-5">So bleibt das Zitat nachvollziehbar</h3>
          <p>Nennen Sie bei einer Zahl die ursprüngliche Institution, die Bezugsgruppe und das Datenjahr. Wenn Sie unsere Zusammenstellung oder Grafik verwenden, nennen Sie zusätzlich MyHiwi und verlinken Sie diese Seite oder den Direktlink der Kennzahl.</p>
          <p className={styles.small}>MyHiwi / Denis Kaliberda: „{data.title}“. Redaktioneller Stand: {date(data.checked)}. <a href={url}>{url}</a></p>
        </div>
      </Container>
    </Section>

    <Section padding="compact">
      <Container>
        <SectionMark index="06" label="Vom Überblick zur Praxis" />
        <h2 className="mt-mh-4 mh-display-4">Welcher nächste Schritt hilft Ihrem Betrieb?</h2>
        <p className={styles.lead}>Die Zahlen liefern Orientierung. Den eigenen Bedarf klärt ein Blick auf Ihre Abläufe und den Weg Ihrer Kunden zur Anfrage.</p>
        <div className={styles.related}><Link href="/ki-schulung">KI-Schulung für Unternehmen →</Link><Link href="/leistungen/webseiten">Eine Website mit klarem Anfrageweg →</Link><Link href="/leistungen/ki-sichtbarkeit">Sichtbarkeit in der KI-Suche verstehen →</Link></div>
        <BtnPrimary href="/kontakt" className="mt-mh-6">Sichtbarkeit prüfen lassen</BtnPrimary>
      </Container>
    </Section>
  </article>;
}
