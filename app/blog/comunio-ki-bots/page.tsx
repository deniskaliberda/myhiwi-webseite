import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import article from '@/content/blog/comunio-ki-bots.json';
import { BlogArticleShell } from '@/components/myhiwi/blog/BlogArticleShell';
import styles from './article.module.css';

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  robots: { index: false, follow: false },
};

function InlineLinks({text}: {text: string}) {
  return <>{text.split(/(\[[^\]]+\]\(https:\/\/[^)]+\))/g).map((part,i) => {
    const match=part.match(/^\[([^\]]+)\]\((https:\/\/[^)]+)\)$/);
    return match ? <a key={i} href={match[2]}>{match[1]}</a> : part;
  })}</>;
}

export default function ComunioArticle() {
  return <BlogArticleShell category="Mein KI-Experiment · Entwurf" date="9. September 2026" readTime={article.readTime}
    title={<>Fünf KI-Bots, mein Comunio-Team und die <em className="mh-italic-accent">ersten zwei Spieltage</em></>}
    lead="Sport, Freunde und die Frage, wie viel Arbeit ein Bot-Team wirklich übernehmen kann. Ein Blick auf meinen Aufbau, die ersten Ergebnisse und die Dinge, die noch nicht rund laufen."
    ctaTitle="Was ich sonst mit KI mache"
    ctaLead="Mit MyHiwi unterstütze ich Unternehmen bei ihrer Website, ihrer digitalen Sichtbarkeit und passenden Arbeitsabläufen. Hier im Blog zeige ich auch, wie ich selbst dazulerne.">
    <div className={styles.draft}>Vorschau · noch nicht veröffentlicht · Quellenstand 8. September 2026</div>
    <nav aria-label="Inhalt" className={styles.contents}>
      <strong>In diesem Artikel</strong>
      {article.body.filter(b=>b.type==='heading').map(b=><a key={b.id} href={`#${b.id}`}>{b.text}</a>)}
    </nav>
    {article.body.map((block,i)=>{
      if(block.type==='heading') return <h2 className={styles.heading} id={block.id} key={i}>{block.text}</h2>;
      if(block.type==='image') return <figure className={styles.figure} key={i}>
        <picture>{block.mobile && <source media="(max-width: 600px)" srcSet={block.mobile} />}
        <Image unoptimized src={block.src!} alt={block.alt!} width={block.width!} height={block.height!} priority={block.src!.endsWith('linkedin-screenshot.png')} /></picture>
        <figcaption>{block.alt} {block.imageKind === 'diagram' ? 'Eigene schematische Darstellung mit KI-Unterstützung.' : 'Quelle: Comunio. Originalansicht zugeschnitten; private Bildränder entfernt.'}</figcaption>
        {block.imageKind === 'screenshot' && <a className={styles.enlarge} href={block.src} target="_blank" rel="noopener noreferrer">Screenshot in voller Größe öffnen</a>}
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
      <p>Grundlagen des Spiels: <a href="https://www.comunio.de/">Comunio</a>. Für diesen Rückblick wurden die Projektberichte, der geprüfte Spieltagsbeleg vom 7. September und die dokumentierte Aufstellungsansicht vom 8. September ausgewertet. Die Screenshots zeigen ausgewählte Ausschnitte der Plattform. Private Kontokennungen, Ligaangaben und Sitzungsdaten bleiben außerhalb der veröffentlichten Bildausschnitte.</p>
      <p>Die übrigen Mannschaften im Spieltagsvergleich sind anonymisiert. Die erste Woche ist nur als Berichtsstand aufgenommen. Ein Gesamtplatz, Spieler-Einzelpunkte und eine Wirkung der Bot-Entscheidungen werden daraus nicht abgeleitet.</p>
      <Link href="/blog/linkedin-hiwi">So entsteht ein Text mit meinem LinkedIn-Hiwi</Link>
    </aside>
  </BlogArticleShell>;
}
