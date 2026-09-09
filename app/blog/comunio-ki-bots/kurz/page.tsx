import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/myhiwi/layout/Container';
import { Section } from '@/components/myhiwi/layout/Section';
import article from '@/content/blog/comunio-ki-bots.json';
import styles from './summary.module.css';

export const metadata: Metadata = {
  title: 'Mein Comunio-Experiment in 60 Sekunden · Folge 1',
  description: 'Fünf KI-Helfer, eine Comunio-Mannschaft und meine Freunde als Gegner. Die Idee, der Aufbau und der erste Zwischenstand auf einer Seite.',
  alternates: { canonical: 'https://myhiwi.de/blog/comunio-ki-bots/kurz' },
  robots: { index: false, follow: true },
  openGraph: { title: 'Mein Comunio-Experiment in 60 Sekunden', description: 'Fünf KI-Helfer, eine Mannschaft: die Idee, das Team und die ersten Ergebnisse.', url: 'https://myhiwi.de/blog/comunio-ki-bots/kurz', images: ['https://myhiwi.de/blog/comunio-ki-bots/comunio-folge-01-robot-team-v3.png'] },
};
const roles = [
  ['Scout', 'Prüft Spieler und mögliche Einsätze.'],
  ['Markt', 'Schaut auf Transfers und Budget.'],
  ['Elf', 'Bereitet die Aufstellung vor.'],
  ['Chief', 'Führt Vorschläge und Aktionen zusammen.'],
  ['Study', 'Dokumentiert Entscheidungen und Ergebnisse.'],
];
export default function ComunioSummary() {
  const cover = article.body.find(block => block.imageKind === 'cover')!;
  return <Section background="paper" padding="large"><Container className="max-w-[1060px]">
    <Link className={styles.back} href="/blog/comunio-ki-bots">← Zum ausführlichen Artikel</Link>
    <p className={styles.eyebrow}>Folge 01 · Kurzfassung · etwa 60 Sekunden</p>
    <h1 className={styles.title}>Fünf KI-Bots<br/><em className="mh-italic-accent">gegen meine Freunde.</em></h1>
    <div className={styles.intro}>
      <div>
        <h2>Die Idee</h2>
        <p>Ich bin zu spät in unsere Comunio-Runde eingestiegen. Viele interessante Spieler waren schon weg. Und täglich Transfers und Aufstellungen verfolgen? Dafür wollte ich nicht so viel Zeit aufbringen.</p>
        <p>Also habe ich mir mit Grok Bot fünf digitale Helfer gebaut. Ich will ausprobieren, ob sie mir Arbeit abnehmen und meine Mannschaft gegen meine Freunde mithalten kann.</p>

      </div>
      <figure className={styles.cover}>
        <Image unoptimized priority src={cover.src!} width={2048} height={2048} alt="Fünf Roboterrollen mit meiner echten Comunio-Aufstellung im gemeinsamen Bildschirm"/>
        <figcaption>Illustration: GPT Image 2.5 über Higgsfield. Spielansicht: Original-Screenshot aus Comunio, 8. September 2026.</figcaption>
      </figure>
    </div>
    <div className={styles.story}>
      <figure className={styles.scene}>
        <Image src="/blog/comunio-ki-bots/kurz-scout-v1.webp" width={1536} height={1024} alt="Scout und Markt als kleine Roboter: Spieler recherchieren, Karten vergleichen und das Budget prüfen"/>
        <figcaption>KI-Illustration: recherchieren und abwägen.</figcaption>
      </figure>
      <div className={styles.storyCopy}><p className={styles.step}>01 · Die Vorarbeit</p><h2>Wer passt in meine Mannschaft?</h2><p>Scout prüft Spieler und mögliche Einsätze. Markt schaut auf Transfers und Budget. Aus den Informationen sollen brauchbare Vorschläge werden.</p></div>
    </div>
    <div className={`${styles.story} ${styles.reverse}`}>
      <figure className={styles.scene}>
        <Image src="/blog/comunio-ki-bots/kurz-team-v1.webp" width={1536} height={1024} alt="Fünf Roboter stimmen sich an einem Fußball-Taktikbrett ab und geben Informationen weiter"/>
        <figcaption>KI-Illustration: So soll die Zusammenarbeit aussehen.</figcaption>
      </figure>
      <div className={styles.storyCopy}><p className={styles.step}>02 · Gemeinsam planen</p><h2>Fünf Rollen. Eine Mannschaft.</h2><p>Die Bots geben sich Aufgaben und Informationen weiter. Elf plant die Aufstellung, Chief führt die Vorschläge zusammen, Study hält den Verlauf fest. In Grok Bot sehe ich ihre Übergaben und Rückfragen.</p></div>
    </div>
    <ul className={styles.roles} aria-label="Die fünf Rollen">{roles.map(([name,job])=><li key={name}><strong>{name}</strong><span>{job}</span></li>)}</ul>
    <div className={styles.status}>
      <div><p className={styles.metric}>39 Punkte <span>· Platz 3 von 5</span></p><h2>Der bisherige Stand</h2><p>Das ist das geprüfte Ergebnis von Spieltag zwei. Wir sind in Woche drei des Experiments. Spieltag eins steht mit 32 Punkten bisher nur im Botbericht; der Ergebnisabgleich fehlt noch.</p></div>

    </div>
    <div className={styles.story}>
      <figure className={styles.scene}>
        <Image src="/blog/comunio-ki-bots/kurz-check-v1.webp" width={1536} height={1024} alt="Roboter vergleichen eine Warnmeldung mit ihren Notizen und prüfen gemeinsam den Ablauf"/>
        <figcaption>KI-Illustration: prüfen, korrigieren, dazulernen.</figcaption>
      </figure>
      <div className={styles.storyCopy}><p className={styles.step}>03 · Es hakt noch</p><h2>Guter Vorschlag heißt noch nicht erledigt.</h2><p>Login-Probleme, veraltete Daten und widersprüchliche Vorschläge: Noch läuft nicht alles von allein. Ich zeige deshalb auch, wann ich eingreifen muss – und was wir danach verbessern.</p></div>
    </div>
    <h2>Was als Nächstes kommt</h2>
    <p>Jede Woche ein Update mit Ergebnissen, Entscheidungen und Fehlern. Folge 1 erklärt den Aufbau und die ersten beiden Spieltage. Ob das Team langfristig besser spielt oder Zeit spart, muss sich erst zeigen.</p>
    <Link className={styles.readMore} href="/blog/comunio-ki-bots">Die ganze Geschichte mit Screenshots lesen →</Link>
    <p className={styles.note}>Text und drei Szenen mit KI-Unterstützung. Die Szenen veranschaulichen die Rollen und Abläufe; echte Oberflächen und Belege findest du im langen Artikel. Stand: 9. September 2026. Belege und Einordnung stehen im ausführlichen Artikel.</p>
  </Container></Section>;
}
