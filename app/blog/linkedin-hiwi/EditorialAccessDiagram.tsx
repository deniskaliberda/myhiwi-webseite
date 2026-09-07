"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, Check, FileText, FolderLock, LockKeyhole, Play, UserRound } from "lucide-react";
import styles from "./editorial-access.module.css";

export function EditorialAccessDiagram() {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setTimeout(() => setPlaying(false), 4800);
    return () => window.clearTimeout(timer);
  }, [playing]);

  return (
    <figure className={styles.figure} aria-labelledby="data-title" data-playing={playing}>
      <div className={styles.heading}>
        <div>
          <p className={styles.eyebrow}>Geplanter Aufbau</p>
          <h3 id="data-title">Nur das Briefing geht an den Hiwi.</h3>
        </div>
        <button className={styles.play} onClick={() => setPlaying(true)} disabled={playing} aria-label="Geplanten Ablauf einmal hervorheben">
          <Play size={14} aria-hidden="true" />{playing ? "Ablauf läuft" : "Ablauf abspielen"}
        </button>
      </div>

      <div className={styles.internal}>
        <p className={styles.zoneLabel}><FolderLock size={16} aria-hidden="true" /> Geschützter Projektbereich</p>
        <div className={styles.pair}>
          <div className={`${styles.card} ${styles.archive}`}>
            <span className={styles.step}>01 · Intern</span>
            <h4>Kundenablage</h4>
            <ul><li>Verträge</li><li>Kontaktdaten</li><li>Rohdaten</li></ul>
            <p>Bleibt im geschützten Bereich.</p>
          </div>
          <ArrowRight className={styles.connector} aria-hidden="true" />
          <div className={`${styles.card} ${styles.selection}`}>
            <span className={styles.step}>02 · Denis</span>
            <h4>Auswählen &amp; prüfen</h4>
            <p>Was braucht dieser Artikel?<br />Was ist belegt und freigegeben?</p>
            <span className={styles.person}><UserRound size={14} aria-hidden="true" /> Menschliche Entscheidung</span>
          </div>
        </div>
      </div>

      <div className={styles.transfer}>
        <ArrowDown size={22} aria-hidden="true" />
        <p>Nur die freigegebene Auswahl<br /><strong>wird separat als Briefing abgelegt.</strong></p>
      </div>

      <div className={styles.boundary}>
        <LockKeyhole size={20} aria-hidden="true" />
        <p><strong>Geplante Zugriffsgrenze</strong>Der Text-Hiwi soll keinen direkten Zugriff auf die Kundenablage haben.</p>
      </div>

      <div className={styles.editorial}>
        <p className={styles.zoneLabel}><FileText size={16} aria-hidden="true" /> Separater Redaktionsbereich</p>
        <div className={styles.pair}>
          <div className={`${styles.card} ${styles.briefing}`}>
            <span className={styles.step}>03 · Freigegebene Grundlage</span>
            <h4>Redaktionsbriefing</h4>
            <ul><li>Thema &amp; Maßnahmen</li><li>Geprüfte, freigegebene Kennzahlen</li><li>Zeitraum &amp; Aussagegrenzen</li></ul>
          </div>
          <ArrowRight className={styles.connector} aria-hidden="true" />
          <div className={`${styles.card} ${styles.draft}`}>
            <span className={styles.step}>04 · Text-Hiwi</span>
            <h4>Textentwurf</h4>
            <p>Arbeitet mit dem Briefing.<br />Fragt nach, wenn etwas fehlt.</p>
            <span className={styles.access}>Zugriff nur auf die freigegebene Redaktionsablage vorgesehen</span>
          </div>
        </div>
        <ArrowDown className={styles.reviewArrow} size={22} aria-hidden="true" />
        <div className={`${styles.review} ${styles.finalStep}`}>
          <span className={styles.reviewIcon}><Check size={22} aria-hidden="true" /></span>
          <div><span className={styles.step}>05 · Denis</span><h4>Prüfen, dann veröffentlichen</h4><p>Aussagen, Sprache und Freigabe bleiben meine Entscheidung.</p></div>
        </div>
      </div>

      <figcaption><strong>Das ist der geplante Ablauf.</strong> Die technische Zugriffstrennung müssen wir noch einrichten und prüfen.<span>Schematische Webgrafik · MyHiwi</span></figcaption>
    </figure>
  );
}
