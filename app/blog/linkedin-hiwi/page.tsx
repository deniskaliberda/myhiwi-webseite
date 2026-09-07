import type { Metadata } from "next";
import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowDown, ArrowRight } from "lucide-react";
import article from "@/content/blog/linkedin-hiwi.json";
import { BtnPrimary } from "@/components/myhiwi/cta/BtnPrimary";
import styles from "./article.module.css";

const canonical = `https://myhiwi.de/blog/${article.slug}`;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical },
  openGraph: {
    type: "article",
    locale: "de_DE",
    url: canonical,
    title: article.title,
    description: article.description,
    publishedTime: article.date,
    modifiedTime: article.date,
    authors: [article.author],
    images: [{ url: article.image, width: article.imageWidth, height: article.imageHeight, alt: article.imageAlt }],
  },
  twitter: { card: "summary_large_image", title: article.title, description: article.description, images: [article.image] },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline: article.title,
      description: article.description,
      datePublished: article.date,
      dateModified: article.date,
      inLanguage: "de-DE",
      mainEntityOfPage: canonical,
      image: `https://myhiwi.de${article.image}`,
      author: { "@type": "Person", name: article.author, url: "https://myhiwi.de/ueber-mich" },
      publisher: { "@type": "Organization", name: "MyHiwi", url: "https://myhiwi.de" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "MyHiwi", item: "https://myhiwi.de" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://myhiwi.de/blog" },
        { "@type": "ListItem", position: 3, name: article.title, item: canonical },
      ],
    },
  ],
};

function Down() {
  return <ArrowDown className={styles.down} strokeWidth={1.6} aria-hidden="true" />;
}

function WorkflowDiagram() {
  return (
    <figure className={styles.diagram} aria-labelledby="workflow-title">
      <p className={styles.label}>So hängen die Bausteine zusammen</p>
      <h3 id="workflow-title">Vom Gespräch zum geprüften Text</h3>
      <div className={styles.inputs}>
        <div className={styles.node}><strong>Mein Gespräch</strong><span>Erfahrungen, Gedanken und offene Fragen</span></div>
        <div className={styles.node}><strong>Informationen</strong><span>Passende Fakten und ausgewählte Belege</span></div>
        <div className={styles.node}><strong>Anleitungen</strong><span>Auftrag, Prüfabläufe und Stilregeln</span></div>
      </div>
      <Down />
      <div className={styles.core}><strong>LinkedIn-Hiwi</strong><span>Nachfragen · Zusammenhänge klären · Text ausarbeiten</span></div>
      <Down />
      <div className={styles.process}>
        <div className={styles.node}><strong>Entwurf</strong><span>Gedanken und Belege verständlich verbinden</span></div>
        <ArrowRight className={styles.right} strokeWidth={1.6} aria-hidden="true" />
        <div className={styles.node}><strong>Meine Prüfung</strong><span>Aussagen, Sprache und Veröffentlichung entscheiden</span></div>
      </div>
      <p className={styles.diagramNote}><strong>Werkzeuge unterstützen die Arbeit:</strong> Dateien bearbeiten, Zahlen prüfen, Browser bedienen. MCP kann solche Werkzeuge anbinden. Es ist selbst weder das gespeicherte Wissen noch ein Skill.</p>
      <figcaption>Schematische Darstellung. Rückfragen und Überarbeitung können sich wiederholen. Was der Assistent lesen und ausführen darf, bestimmen seine tatsächlichen Zugriffsrechte.</figcaption>
    </figure>
  );
}

function DataDiagram() {
  return (
    <figure className={styles.diagram} aria-labelledby="data-title">
      <p className={styles.label}>Geplanter Ausbau</p>
      <h3 id="data-title">Die Auswahl kommt vor dem Schreiben</h3>
      <div className={`${styles.node} ${styles.private}`}><strong>Geschützter Projektbereich</strong><span>Interne Unterlagen und Auswertung. Ausgangspunkt ist eine konkrete Frage für den Artikel.</span></div>
      <Down />
      <p className={styles.filter}><strong>Prüfen und gezielt auswählen</strong>Nur benötigte, geeignete Informationen übernehmen.<br />Bereits vor der Übergabe an den Blog-Assistenten.</p>
      <Down />
      <div className={`${styles.node} ${styles.allowed}`}><strong>Reduziertes Redaktionsbriefing</strong><span>Ausgangsproblem · Maßnahmen · geprüfte Ergebnisse<br />Zeitraum und Bedeutung der Zahlen · Grenzen der Aussage</span></div>
      <Down />
      <div className={styles.core}><strong>Blog-Assistent</strong><span>Zugriff auf die freigegebene Redaktionsablage</span></div>
      <Down />
      <div className={styles.node}><strong>Entwurf und redaktionelle Prüfung</strong><span>Ein Medienhelfer erhält ein eigenes, zum Bild passendes Briefing. Vor der Veröffentlichung werden Text und Medien geprüft.</span></div>
      <figcaption>Geplanter Ablauf, keine Bestätigung einer bereits eingerichteten Zugriffstrennung. Diese muss technisch umgesetzt und geprüft werden.</figcaption>
    </figure>
  );
}

export default function LinkedInHiwiArticle() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <article className={styles.article}>
        <header className={styles.hero}>
          <Link className={styles.back} href="/blog"><ArrowLeft size={16} strokeWidth={1.6} aria-hidden="true" />Alle Blogartikel</Link>
          <p className={styles.label}>{article.category}</p>
          <h1>Vom Erzählen zum <em>Schreiben</em>: Wie ich meinen LinkedIn-Hiwi aufbaue</h1>
          <p className={styles.lead}>{article.lead}</p>
          <div className={styles.byline}><Link href="/ueber-mich">{article.author}</Link><time dateTime={article.date}>{article.displayDate}</time><span>{article.readTime} Lesezeit</span></div>
          <figure className={`${styles.illustration} ${styles.heroIllustration}`}>
            <a href={article.image} target="_blank" rel="noopener noreferrer" aria-label="Prozessmosaik in voller Größe öffnen">
              <Image src={article.image} width={article.imageWidth} height={article.imageHeight} alt={article.imageAlt} priority sizes="(max-width: 768px) calc(100vw - 40px), 760px" />
            </a>
            <ol className={styles.steps}>{article.processSteps.map(step => <li key={step}>{step}</li>)}</ol>
            <figcaption>Vom Gespräch zum geprüften LinkedIn-Post. Das Mosaik zeigt den redaktionellen Ablauf schematisch; die Veröffentlichung bleibt meine Entscheidung.<span>Mit Higgsfield erstellte Illustration. <a href={article.image} target="_blank" rel="noopener noreferrer">Bild vergrößern</a></span></figcaption>
          </figure>

        </header>
        <nav className={styles.contents} aria-label="In diesem Artikel">
          <p className={styles.label}>In diesem Artikel</p>
          <ol>{article.body.filter(block => block.type === "heading").map(block => <li key={block.id}><a href={`#${block.id}`}>{block.text}</a></li>)}</ol>
        </nav>
        <div className={styles.prose}>
          {article.body.map((block, index) => {
            if (block.type === "heading") {
              const illustration = article.illustrations.find(item => item.afterHeading === block.id);
              return <Fragment key={block.id}>
                <h2 id={block.id}>{block.text}</h2>
                {illustration && <figure className={styles.illustration}>
                  <p className={styles.label}>{illustration.label}</p>
                  <Image src={illustration.src} width={illustration.width} height={illustration.height} alt={illustration.alt} sizes="(max-width: 768px) calc(100vw - 40px), 760px" />
                  <figcaption>{illustration.caption}<span>Mit Higgsfield erstellte Illustration.</span></figcaption>
                </figure>}
              </Fragment>;
            }
            if (block.type === "diagram") return block.diagram === "workflow" ? <WorkflowDiagram key="workflow" /> : <DataDiagram key="data" />;
            return <p key={index}>{block.parts.map((part, partIndex) => part.href ? <a key={partIndex} href={part.href} target="_blank" rel="noopener noreferrer">{part.text}</a> : part.text)}</p>;
          })}
        </div>
      </article>
      <aside className={styles.contact}>
        <div>
          <p className={styles.label}>MyHiwi</p>
          <h2>Was beschäftigt Sie bei Ihrem <em>Internetauftritt</em>?</h2>
          <p>Ich helfe Unternehmen mit Websites, Google-Sichtbarkeit und KI-Sichtbarkeit. Wenn Sie wissen möchten, wo Ihr Auftritt noch Fragen offenlässt, schauen wir gemeinsam darauf.</p>
          <BtnPrimary href="/kontakt" fullWidthOnMobile>Sichtbarkeit prüfen lassen</BtnPrimary>
        </div>
      </aside>
    </>
  );
}
