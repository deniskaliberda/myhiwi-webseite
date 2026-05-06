import {
  ProposalPage,
  ProposalCover,
  ProposalUnderstanding,
  ProposalBuildList,
  ProposalScenarios,
  ProposalPricing,
  ProposalTimeline,
  ProposalAnswer,
} from "@/components/proposal";

export const metadata = {
  title: "Webseite-Modernisierung — Fahrschule Tierling",
};

export default function TierlingDemoPage() {
  return (
    <ProposalPage>
      {/* ───── 1. Cover ───── */}
      <ProposalCover
        date="30. April 2026"
        client="Denise Barkow · Fahrschule Tierling"
        title="Eine Webseite, die für Sie arbeitet."
        intro="Komplementär zu Ihrer bestehenden Schüler-App, die unangetastet bleibt. Selbstpflege-Login, Termin-Synchronisation und ein übernommenes Google-Ads-Konto — gebaut auf eigenem Server, gehört Ihnen."
        meta={[
          { label: "Für", value: "Denise Barkow · Fahrschule Bernd Tierling · Dorfstr. 60, 16356 Ahrensfelde" },
          { label: "Von", value: "Denis Kaliberda · MyHiwi UG · denis.kaliberda@gmail.com" },
          { label: "Bezug", value: "Discovery-Termin am 29. April 2026" },
        ]}
      />

      {/* ───── 2. Was Sie gefragt haben — Verifikations-Liste, kompakt ───── */}
      <ProposalUnderstanding
        step="Was Sie gefragt haben"
        headline={<>Damit nichts an Ihren Wünschen vorbeigeht.</>}
        lead="Aus dem Discovery-Termin am 29. April. Wenn ein Punkt fehlt oder doch nicht zutrifft — eine kurze Mail, wir korrigieren."
        wishes={[
          { title: "Mobile-first Webseite, weniger Text, klare Call-to-Action" },
          { title: "Selbstpflege-Login (Termine, Kurse, News selbst aktualisieren)" },
          { title: "Theorie-Termine synchron mit Ihrer internen Software anzeigen — kein Doppel-Pflegen" },
          { title: "Anmelde-Formular vereinfachen (heute 10 Felder)" },
          { title: "DEKRA / AZAV / Bildungsurlaub-Siegel prominent platzieren" },
          { title: "Reduziertes, „erwachsenes“ Design — nicht zu bunt, nicht verspielt" },
          { title: "Google-Ads-Konto übernehmen und aktiv betreuen" },
          { title: "Reviews-Workflow — automatisch nach bestandener Prüfung" },
        ]}
      />

      {/* ───── 3. Was wir bauen ───── */}
      <ProposalBuildList
        step="Was wir bauen"
        headline="Acht Bausteine."
        lead="Jeder Baustein liefert ein konkretes Ergebnis. Keine Marketing-Pakete, keine Kategorien — die Bausteine selbst."
        items={[
          {
            title: "Mobile-first Webseite, 10 Seiten",
            summary:
              "Komplett neu auf modernem Stack (Next.js + Vercel). Inhalte: Startseite, je 1 Seite pro Klasse (B/BE, A1/A2/A, BKF), Team, FAQ, Kontakt, Datenschutz/Impressum. Texte aus Ihrer bestehenden Seite übernommen — Sie schreiben nichts neu.",
          },
          {
            title: "Selbstpflege-Login (Admin-Bereich)",
            summary:
              "Browser-Login für Sie und Frau Tierling. Termine, News und Sondertermine selbst pflegen — einloggen, anlegen, speichern, in 30 Sekunden sichtbar. Layout und Klassen-Beschreibungen pflegen wir.",
          },
          {
            title: "Theorie-Termine: Sync mit Ihrer internen Software",
            summary:
              "Ihre interne Termin-Verwaltung exportiert eine Kalender-Datei, wir lesen sie alle 30 Minuten. Sie pflegen nichts doppelt. Schüler sehen die Termine — Buchung läuft weiter über Ihre App.",
          },
          {
            title: "Anmelde-Formular auf 4 Felder reduziert",
            summary:
              "Heute fragt Ihr Formular 10 Felder ab — viele brechen ab. Vier Felder reichen für die Erst-Anfrage: Name · Telefon oder Email · Wunsch-Klasse · freie Nachricht. Den Rest holen Sie persönlich.",
          },
          {
            title: "Reviews-Auto-Email nach bestandener Prüfung",
            summary:
              "24 Stunden nach „bestanden“ geht automatisch eine Email mit Glückwunsch und direktem Google-Bewertungs-Link raus. Auslöser: ein Klick im Admin. Email-Text vorab mit Ihnen abgestimmt.",
          },
          {
            title: "DEKRA · AZAV · Bildungsurlaub-Siegel",
            summary:
              "Drei Siegel im Hero-Bereich und im Footer auf jeder Seite — Pflicht-Anzeige für zertifizierte Bildungsträger und Wettbewerbs-Vorteil. Klickbar, jedes Siegel öffnet eine kurze Erklär-Seite.",
          },
          {
            title: "Google Business Profil — Komplett-Aufräumen",
            summary:
              "NAP-Konsistenz prüfen, alle 7 Klassen einzeln als Service eintragen, Bilder hochladen, GBP-Q&A vorbefüllen. Die Basis, auf der Reviews und lokale Sichtbarkeit funktionieren.",
          },
          {
            title: "Google Ads — wir übernehmen es",
            summary:
              "Das Konto läuft im Hintergrund, niemand schaut drauf. Wir holen den Zugriff, prüfen was läuft, optimieren oder schalten ab. Danach: aktive Betreuung mit monatlichem Reporting — Sie wissen jederzeit was das Budget bringt.",
          },
        ]}
      />

      {/* ───── 4. Wie es im Alltag funktioniert — auf 2 Szenarien gekürzt ───── */}
      <ProposalScenarios
        step="Wie es sich anfühlt"
        headline="Zwei Beispiele."
        lead="Vom ersten Klick zur qualifizierten Anfrage — und vom bestandenen Schüler zur Bewertung."
        scenarios={[
          {
            trigger: "Neuer Interessent kommt",
            title: "Vom Google-Klick zur qualifizierten Anfrage",
            steps: [
              "Sucht „Fahrschule Ahrensfelde“ auf Google, klickt auf fahrschuletierling.de",
              "Sieht oben sofort: Klassen-Auswahl, DEKRA/AZAV-Trust, Theorie-Termine kommende Woche",
              "Klickt auf seine Wunsch-Klasse → liest, was eingeschlossen ist",
              "Klickt „Anfragen“ → 4 Felder ausfüllen → Anfrage geht an info@fahrschuletierling.de",
              "Sie sehen die Anfrage und rufen den Schüler persönlich an",
            ],
          },
          {
            trigger: "Schüler hat bestanden",
            title: "Eine Prüfung, eine Bewertung mehr",
            steps: [
              "Sie markieren den Schüler im Admin als „bestanden“ (1 Klick)",
              "24 Stunden später: Auto-Email mit Glückwunsch + Bewertungs-Link",
              "Schüler klickt, bewertet — landet im richtigen Google-Eintrag",
              "Bewertung erscheint auf Ihrer Webseite im Reviews-Widget innerhalb 24 Stunden",
            ],
          },
        ]}
      />

      {/* ───── 5. Was es kostet ───── */}
      <ProposalPricing
        step="Was es kostet"
        headline="Ein Preis. Klar."
        lead="Vergleichbare Pakete bei Agenturen liegen bei 6.500–9.000 €. Sie zahlen weniger, weil Tierling unser erster Fahrschul-Pilot ist."
        primary={{
          label: "Festpreis · ohne Vertragsbindung",
          strike: "6.990 €",
          strikeNote: "vergleichbares Paket bei Agentur",
          price: "4.490 €",
          unit: "einmalig — alle 8 Bausteine, gehört Ihnen",
          monthly: "89 €/Monat Hosting + Pflege (monatlich kündbar)",
          note: "Sie bezahlen einmal. Nach Go-Live gehört Ihnen die Webseite vollständig. Maintenance können Sie monatlich kündigen — die Seite bleibt online, wir übergeben die Zugänge.",
          badge: "Pilot-Konditionen",
        }}
        included={[
          "Webseite, 10 Seiten",
          "Selbstpflege-Login",
          "iCal-Sync Theorie-Termine",
          "Anmelde-Formular reduziert",
          "Reviews-Auto-Email",
          "DEKRA/AZAV-Trust-Bar",
          "GBP-Komplett-Aufräumen",
          "Google-Ads-Übernahme + Optimierung",
          "Domain-Migration weg von Wix",
          "30-Tage-Anpassungs-Garantie",
        ]}
        alternative={{
          label: "Falls Sie monatliches Modell mit Begleitung bevorzugen",
          price: "0 €",
          unit: "Setup",
          monthly: "+ 449 €/Monat über 12 Monate · Total Jahr 1: 5.388 €",
          note: "Zusätzlich enthalten: aktive Google-Ads-Betreuung, monatlicher Strategie-Call, monatliches Reporting. Kein Setup-Brocken vorne weg, dafür 12 Monate Bindung.",
        }}
      />

      {/* ───── 6. Wann ───── */}
      <ProposalTimeline
        step="Wann"
        headline="Vier Wochen, dann live."
        lead="Klares Wochen-Raster. Sie geben zweimal Inhalte frei, sonst läuft alles bei uns."
        weeks={[
          {
            label: "Woche 1",
            title: "Konzept & Klärung",
            tasks: [
              "Sitemap finalisieren",
              "Startseiten-Mockup",
              "Klären: welche interne Theorie-Software?",
              "Google-Ads-Konto-Zugriff einrichten",
            ],
          },
          {
            label: "Woche 2",
            title: "Design & Inhalte",
            tasks: [
              "Komplett-Design",
              "Texte aus Bestand einarbeiten",
              "Foto-Termin koordinieren",
              "Mockup-Freigabe durch Sie",
            ],
          },
          {
            label: "Woche 3",
            title: "Bau",
            tasks: [
              "Webseite implementieren",
              "Admin-Login einrichten",
              "iCal-Sync aktivieren",
              "Reviews-Auto-Email vorbereiten",
            ],
          },
          {
            label: "Woche 4",
            title: "Test, GBP, Ads",
            tasks: [
              "Sie testen alle Workflows",
              "GBP-Aufräumen",
              "Ads-Audit + Anpassungen",
              "Domain-Switch vorbereiten",
            ],
          },
          {
            label: "Go-Live",
            title: "Live-Schaltung",
            tasks: [
              "Domain umziehen (max. 1 Std offline)",
              "Wix-Seite abschalten",
              "Erstes Reporting nach 7 Tagen",
            ],
          },
        ]}
        facts={[
          { label: "Liefer-Zeit", value: "4 Wochen ab Vertragsunterschrift" },
          { label: "Aufwand für Sie", value: "2 Freigabe-Termine à 30 Minuten" },
          { label: "Anzahlung", value: "50 % bei Start, 50 % nach Go-Live" },
        ]}
      />

      {/* ───── 7. Antwort ───── */}
      <ProposalAnswer
        step="Antwort"
        headline={<>Ein „ja, los“<br />und wir starten in 7 Tagen.</>}
        body={
          <>
            <p>
              Wenn das Angebot passt, reicht eine kurze Mail-Antwort. Wenn etwas
              unklar ist, rufen Sie an oder schreiben Sie kurz — ich melde mich gleich.
            </p>
            <p>
              Innerhalb sieben Tagen nach Ihrer Zusage liefere ich zwei
              Startseiten-Mockup-Varianten, den Vertrag und einen Kick-off-Termin.
            </p>
          </>
        }
        signature={{
          name: "Denis Kaliberda",
          role: "Gründer · MyHiwi UG · Digitaler Hiwi für KMU",
          contact:
            "denis.kaliberda@gmail.com · myhiwi.de · Ahrensfelde + Ammersee",
        }}
      />
    </ProposalPage>
  );
}
