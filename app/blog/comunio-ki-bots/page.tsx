import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import article from '@/content/blog/comunio-ki-bots.json';
import { BlogArticleShell } from '@/components/myhiwi/blog/BlogArticleShell';
import styles from './article.module.css';

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: 'https://myhiwi.de/blog/comunio-ki-bots' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'article', url: 'https://myhiwi.de/blog/comunio-ki-bots',
    title: article.title, description: article.description,
    publishedTime: article.date, authors: [article.author], locale: 'de_DE',
    images: [{ url: 'https://myhiwi.de/blog/comunio-ki-bots/comunio-folge-01-robot-team-v3.png', width: 2048, height: 2048, alt: 'Fünf KI-Bots gegen meine Freunde – mein Comunio-Team mit Grok Bot' }],
  },
  twitter: { card: 'summary_large_image', title: article.title, description: article.description, images: ['https://myhiwi.de/blog/comunio-ki-bots/comunio-folge-01-robot-team-v3.png'] },
};

function InlineLinks({text}: {text: string}) {
  return <>{text.split(/(\[[^\]]+\]\(https:\/\/[^)]+\))/g).map((part,i) => {
    const match=part.match(/^\[([^\]]+)\]\((https:\/\/[^)]+)\)$/);
    return match ? <a key={i} href={match[2]}>{match[1]}</a> : part;
  })}</>;
}

export default function ComunioArticle() {
  return <BlogArticleShell category="Comunio-Experiment · Folge 01" date="9. September 2026" readTime={article.readTime}
    title={<>Fünf KI-Bots <em className="mh-italic-accent">gegen meine Freunde.</em></>}
    lead="Zu spät bei Comunio eingestiegen, fünf Helfer mit Grok Bot gebaut. Folge 1: mein Start, die Rollen und die ersten zwei Spieltage. Mit echten Einblicken ins Spiel und ins Bot-Team."
    ctaTitle="Was ich sonst mit KI mache"
    ctaLead="Mit MyHiwi unterstütze ich Unternehmen bei ihrer Website, ihrer digitalen Sichtbarkeit und passenden Arbeitsabläufen. Hier im Blog zeige ich auch, wie ich selbst dazulerne.">
    <Link className={styles.quickRead} href="/blog/comunio-ki-bots/kurz">Keine Zeit? Die Kurzfassung in 60 Sekunden →</Link>
    <div className={styles.draft}>Folge 01 · Woche drei des Experiments · Rückblick auf Spieltag 1 und 2</div>
    {article.body.map((block,i)=>{
      if(block.type==='contents') return <details className={styles.contents} key={i}>
        <summary>Die Themen in Folge 1</summary>
        <nav aria-label="Inhalt">{article.body.filter(b=>b.type==='heading').map(b=><a key={b.id} href={`#${b.id}`}>{b.text}</a>)}</nav>
      </details>;
      if(block.type==='heading') return <h2 className={styles.heading} id={block.id} key={i}>{block.text}</h2>;
      if(block.type==='image') return <figure className={`${styles.figure} ${block.src?.endsWith('grok-rollen-original.png') ? styles.roleShot : ''}`} key={i}>
        <picture>{block.mobile && <source media="(max-width: 600px)" srcSet={block.mobile} />}
        <Image unoptimized src={block.src!} alt={block.alt!} width={block.width!} height={block.height!} priority={block.imageKind === 'cover'} /></picture>
        <figcaption>{block.alt} {block.imageKind === 'diagram' ? 'Eigene schematische Darstellung mit KI-Unterstützung.' : block.imageKind === 'cover' ? 'Illustration: GPT Image 2.5 über Higgsfield. Spielansicht: Original-Screenshot aus Comunio.' : block.imageKind === 'grok' ? 'Quelle: eigene Aufnahme aus Grok Bot; Ausschnitt der unveränderten Oberfläche.' : 'Quelle: Comunio. Originalansicht zugeschnitten; private Bildränder entfernt.'}</figcaption>
        {['screenshot','grok','cover'].includes(block.imageKind || '') && <a className={styles.enlarge} href={block.src} target="_blank" rel="noopener noreferrer">Bild in voller Größe öffnen</a>}
      </figure>;
      if(block.type==='results') return <div className={styles.tableWrap} key={i}><table>
        <caption>Erste Spieltage und jeweiliger Nachweisstand</caption>
        <thead><tr><th scope="col">Spieltag</th><th scope="col">Punkte</th><th scope="col">Spieltagsplatz</th><th scope="col">Grundlage</th></tr></thead>
        <tbody><tr><th scope="row">1</th><td>32 laut Bericht</td><td>4 von 5 laut Bericht</td><td>Botbericht; Ergebnisabgleich offen</td></tr>
        <tr><th scope="row">2</th><td>39</td><td>3 von 5</td><td>Comunio-Spieltagsansicht geprüft</td></tr></tbody>
      </table></div>;
      return <p key={i}><InlineLinks text={block.text!}/></p>;
    })}
    <aside className={styles.sources}>
      <h2>Was hinter den Angaben steckt</h2>
      <p>Grundlagen des Spiels: <a href="https://www.comunio.de/">Comunio</a>. Für diesen Rückblick wurden die Projektberichte, der geprüfte Spieltagsbeleg vom 7. September und die dokumentierte Aufstellungsansicht vom 8. September ausgewertet. Die Screenshots zeigen ausgewählte Ausschnitte aus Comunio und Grok Bot. Die Grok-Aufnahmen vom 9. September belegen die Oberfläche und den sichtbaren Austausch, keine ausgeführten Kontoaktionen. Private Kontokennungen, Ligaangaben und Sitzungsdaten bleiben außerhalb der veröffentlichten Bildausschnitte.</p>
      <p>Die übrigen Mannschaften im Spieltagsvergleich sind anonymisiert. Die erste Woche ist nur als Berichtsstand aufgenommen. Ein Gesamtplatz, Spieler-Einzelpunkte und eine Wirkung der Bot-Entscheidungen werden daraus nicht abgeleitet.</p>
      <Link href="/blog/linkedin-hiwi">So entsteht ein Text mit meinem LinkedIn-Hiwi</Link>
    </aside>
  </BlogArticleShell>;
}
