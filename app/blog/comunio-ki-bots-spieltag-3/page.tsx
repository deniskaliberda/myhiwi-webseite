import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import article from '@/content/blog/comunio-ki-bots-spieltag-3.json';
import { BlogArticleShell } from '@/components/myhiwi/blog/BlogArticleShell';
import { EpisodeHero } from './EpisodeHero';
import styles from '../comunio-ki-bots/article.module.css';
import layout from '@/components/myhiwi/blog/SeriesArticle.module.css';

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  robots: { index: false, follow: false },
};

export default function ComunioEpisodeTwo() {
  return <div className={layout.article}><BlogArticleShell hero={<EpisodeHero />} category="Comunio-Experiment · Folge 02 · Vorschau" date="15. September 2026" readTime={article.readTime}
    title={<>Erster Spieltagssieg. <em className="mh-italic-accent">Komplett eskaliert.</em></>}
    lead="47 Punkte am dritten Spieltag. Insgesamt noch Dritter. Zeit, genauer hinzuschauen: auf meine Elf, die Entscheidungen der Bots und das, was wir noch besser machen müssen."
    ctaTitle="Was ich aus solchen Experimenten mitnehme"
    ctaLead="Ich probiere KI an konkreten Aufgaben aus. Bei MyHiwi nutze ich diese Erfahrung für Websites, digitale Sichtbarkeit und Arbeitsabläufe in Unternehmen.">
    <p className={layout.notice}>Unveröffentlichte Vorschau · Datenstand: 14. September 2026</p>
    <Link className={layout.introLink} href="/blog/comunio-ki-bots">Neu dabei? Hier beginnt das Experiment mit Folge 1 →</Link>
    <details className={styles.contents}>
      <summary>Die Themen in Folge 2</summary>
      <nav aria-label="Artikelinhalt">{article.body.filter(b=>b.type==='heading').map(b=><a key={b.id} href={`#${b.id}`}>{b.text}</a>)}</nav>
    </details>
    <section className={layout.overview} aria-labelledby="kurzueberblick">
      <h2 id="kurzueberblick">Wenig Zeit? Das ist passiert.</h2>
      <p>Woche drei lief komplett autonom: Nach dem Einrichten habe ich nicht mehr eingegriffen. Mein Bot-Team hat am Wochenende mit 47 Punkten den Spieltag gewonnen – ich habe nichts gemacht. Ob das schon gute Entscheidungen waren oder auch eine Portion Glück, zeigt ein einzelner Sieg noch nicht. Inzwischen habe ich ein paar Abläufe nachgebessert und neue Ideen aufgenommen. Jetzt bin ich gespannt, ob das Team daraus lernt und die nächsten Wochen genauso gut laufen.</p>
      <p>Der Sieg ist aber nur die halbe Geschichte: Zwei Spieler kamen gar nicht zum Einsatz. Wer trotzdem die Punkte geholt hat, welche Entscheidungen die Bots getroffen haben und was ich für die nächste Runde ändere, zeige ich euch hier.</p>
    </section>
    {article.body.filter(block => block.type !== 'image' || !block.src?.endsWith('meme-v2.png')).map((block,i)=>{
      if(block.type==='heading') return <h2 className={styles.heading} id={block.id} key={i}>{block.text}</h2>;
      if(block.type==='image') return <figure className={`${styles.figure} ${styles.heroFigure}`} key={i}>
        <Image unoptimized src={block.src!} alt={block.alt!} width={block.width!} height={block.height!} priority={i===0} />
        <figcaption>{block.alt} {i===0 ? '' : 'Eigene Darstellung; Datenquellen und Einordnung unten im Artikel.'}</figcaption>
        <a className={styles.enlarge} href={block.src} target="_blank" rel="noopener noreferrer">Bild in voller Größe öffnen →</a>
      </figure>;
      if(block.type==='table' && block.headers?.[0]==='Spieltag') return <section className={layout.stats} key={i} aria-label="Spieltage und Gesamtstand">
        <div className={layout.matchdays}>{block.rows?.map(r=><div key={r[0]}><span>Spieltag {r[0]}</span><strong>{r[1]} <small>Punkte</small></strong><div className={layout.track}><span style={{width:`${Number(r[1])/47*100}%`}}/></div><span>Platz {r[2]}</span></div>)}</div>
        <h3>Gesamttabelle · die ersten drei Plätze</h3>
        <ol className={layout.ranking}><li><span>1. Team A</span><strong>126 Punkte</strong></li><li><span>2. Team B</span><strong>123 Punkte</strong></li><li className={layout.ourTeam}><span>3. Mein Bot-Team</span><strong>118 Punkte</strong></li></ol>
        <p className={layout.statNote}>8 Punkte bis zur Spitze · Andere Teams anonymisiert.</p>
      </section>;
      if(block.type==='table') return <section className={layout.players} key={i} aria-label="Startelf und Einzelpunkte">
        {block.rows?.map(r=><div className={layout.position} key={r[0]}><h3>{r[0]}</h3>{r[1].split(' · ').map(entry=>{const [name,points]=entry.split(': ');const value=Number(points.replace('−','-'));return <div className={layout.player} key={name}><span>{name}{['Badé','Pimpong'].includes(name)&&<small>Ohne Einsatz</small>}</span><div className={layout.playerTrack}><span style={{width:`${Math.abs(value)/13*100}%`,background:value<0?'#b94848':undefined}}/></div><strong>{points}</strong></div>})}</div>)}
        <div className={layout.total}><span>Gesamt · 4-4-2-Aufstellung</span><strong>47 Punkte</strong></div>
      </section>;
      return <p key={i}>{block.text}</p>;
    })}
    <aside className={layout.sourceBox} id="quellen" aria-labelledby="quellen-title">
      <h2 id="quellen-title">Woher die Zahlen kommen</h2>
      <ul className={layout.sourceList}>
        <li><strong>Punkte und Tabelle</strong><p>Spieltag 2 wurde direkt mit der Comunio-Ansicht abgeglichen. Die Werte für Spieltag 1 und 3 sowie der Gesamtstand stammen aus den gespeicherten Bot-Berichten. Die Originalabrechnung von Spieltag 3 ist noch nicht unabhängig geprüft.</p></li>
        <li><strong>Aufstellung und Einsätze</strong><p>Die Elf stammt aus den gespeicherten Kontodaten, die Einzelpunkte aus dem Abschlussbericht. Vereine und Einsätze wurden zusätzlich abgeglichen. Die Grafik zeigt schematische Vereinsfarben.</p><a className={layout.sourceLink} href="https://www.bundesliga.com/en/bundesliga/news/team-news-line-ups-2026-27-bayern-dortmund-fantasy-20707">Bundesliga-Nachlese zu Spieltag 3 <span aria-hidden="true">↗</span></a></li>
        <li><strong>Was noch offen ist</strong><p>Eine vollständige Transferliste und die Herkunft aller Spielgeldbuchungen fehlen noch. Dass ich in Woche 3 nicht eingegriffen habe, ist meine persönliche Erfahrung – noch kein Beleg für dauerhaft fehlerfreie Automatisierung. Der automatische Import von LinkedIn-Kommentaren ist nicht eingerichtet.</p></li>
        <li><strong>Darstellung und KI-Unterstützung</strong><p>Andere Teams sind anonymisiert. Die Grafiken sind eigene Darstellungen, keine Comunio-Screenshots. Text und Illustrationen entstanden mit KI-Unterstützung.</p><Link className={layout.sourceLink} href="/blog/linkedin-hiwi">So arbeite ich mit meinem LinkedIn-Hiwi <span aria-hidden="true">→</span></Link></li>
      </ul>
    </aside>
  </BlogArticleShell></div>;
}
