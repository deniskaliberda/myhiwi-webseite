# Cloud Design Brief — Tierling Fahrschul-Assistent Frontend

Stand: 2026-05-17  
Ziel: Diesen Brief in Cloud Design / Claude Design geben, um den Fahrschul-Assistenten visuell als kundenspezifischen Begleiter / Mini-Produkt zu konzipieren — nicht als generischen Chatbot und nicht als rohes Dashboard.

---

## Auftrag

Entwirf eine visuelle Produkt-/UI-Konzeption für den **Fahrschul-Assistenten** von MyHiwi am Beispiel Fahrschule Tierling.

Wichtig: Der Assistent soll nicht wie ein generischer Chatbot aussehen und nicht wie ein nüchternes Baukasten-Dashboard. Er soll wie ein **kundenspezifischer digitaler Begleiter für den Anfrageprozess** wirken — eingebettet in die Marke und Arbeitsweise der Fahrschule.

Kundenseitige Bezeichnung:

# Fahrschul-Assistent

Interne MyHiwi-Produktlogik:

> MyHiwi richtet pro Kunde einen individuellen Assistenten ein, der Anfragen sortiert, fehlende Infos erkennt, Antwortentwürfe vorbereitet und klare nächste Schritte vorschlägt.

---

## Strategische Einordnung für Tierling

Tierling hat bereits eine Schüler-App mit Messenger. Deshalb darf dieser Assistent **nicht** wie ein zweites Schülerportal oder eine zweite App wirken.

Der Assistent ist für:

- Interessenten vor der Anmeldung;
- Website-/E-Mail-/Formular-Anfragen;
- Preis-/Klassen-/BKF-/Boot-/Motorrad-/LKW-Routing;
- Büro-Entlastung;
- Antwortvorbereitung;
- Anfrageauswertung.

Der Assistent ist nicht für:

- aktive Schülerkommunikation;
- Terminbuchung in Konkurrenz zur App;
- Schülerverwaltung;
- verbindliche Preis-/Verfügbarkeitszusagen;
- offenen Autopilot.

---

## Visuelles Leitbild

Nicht:

- Chatbot-Blase als Hauptprodukt;
- Roboter;
- generisches SaaS-Dashboard;
- AI-Hype;
- Glassmorphism / Neon;
- „alles automatisiert“.

Sondern:

> Aus einer unklaren Anfrage wird eine klare Vorgangskarte für das Fahrschulbüro.

Der Assistent soll wirken wie:

- ein ruhiger Büro-Begleiter;
- ein intelligentes Anfrage-Postfach;
- ein digitales Klemmbrett;
- eine Entscheidungskarte;
- ein eingebetteter Mitarbeiter-Helfer, aber mit menschlicher Freigabe.

---

## Branding / Kundenspezifik

Der Assistent soll je Kunde gebrandet und angepasst wirken.

Bei Tierling:

- Tierling-Rot als Akzent, aber sparsam;
- ruhige helle Flächen;
- erwachsen, klar, nicht verspielt;
- Familienbetrieb / seit 1990 / AZAV / DEKRA als Trust-Kontext;
- Klassenlogik der Fahrschule im Interface sichtbar.

Generisch MyHiwi bleibt im Hintergrund:

- kleines „powered/managed by MyHiwi“ optional;
- Hauptgefühl: „Das ist unser Tierling-Anfrageassistent“, nicht „fremdes Tool“.

---

## Produkt-Metapher

Bitte das Interface als **Assistenten-Cockpit für Anfragen** denken.

Kernobjekt ist nicht „Chat“, sondern:

# Anfragekarte

Eine Anfragekarte enthält:

- Name / Kontakt;
- erkannte Führerscheinklasse oder Sparte;
- Anliegen;
- fehlende Informationen;
- Lead-Status;
- empfohlener nächster Schritt;
- Antwortentwurf;
- Freigabe-Aktion.

---

## Hauptscreen: Anfrage-Cockpit

Layout-Idee:

### Linke Spalte — Eingang

Liste neuer Anfragen:

- „BF17 Preis & Start“
- „BKF Bildungsgutschein“
- „Motorrad A2 Training“
- „Boot Binnen + See“
- „LKW C/CE Arbeitgeber“

Jede Anfrage mit kleinen Tags:

- PKW
- BKF
- Motorrad
- Boot
- Rückfrage nötig
- Warm
- Dringend

### Mitte — Assistentenkarte

Ausgewählte Anfrage als strukturierte Karte:

**Erkannt:** BF17 / Klasse B  
**Status:** Warm  
**Fehlende Infos:** Telefonnummer, Wohnort, gewünschter Start  
**Empfehlung:** Preis-/Infoblatt senden + Rückruf anbieten  
**Zuständig:** Büro / Denise

### Rechte Spalte — Antwortentwurf & Freigabe

Antwortvorschlag:

> Hallo Frau Müller, danke für Ihre Anfrage. Für begleitetes Fahren ab 17 kann Ihr Sohn grundsätzlich einige Monate vor dem 17. Geburtstag starten ...

Buttons:

- Entwurf kopieren
- Als E-Mail vorbereiten
- Rückfrage markieren
- An Mensch übergeben

Wichtig: Nicht „automatisch senden“ als primärer Button. Primär ist menschliche Freigabe.

---

## Drei Darstellungsmodi

### 1. Shadow Mode

Zustand: Der Assistent analysiert nur.

Visual:

- dezenter Hinweis: „Testmodus — es wird nichts automatisch versendet“
- Fokus auf Lernen und Qualität
- Beispiele statt Live-Automation

### 2. Assist Mode

Zustand: Büro nutzt Entwürfe und Karten.

Visual:

- Freigabe-Buttons
- Statuswechsel
- Team-Handoff
- Antwortentwurf prominent

### 3. Controlled Auto Mode

Zustand: Nur sichere Standards.

Visual:

- kleine Automations-Regeln
- z.B. „Eingangsbestätigung automatisch“, „Preis-PDF nur nach Klassenauswahl“
- Sicherheitsgrenzen sichtbar

---

## Chatbot-Frage

Der Chatbot kann Teil des Pakets sein, aber nicht als Hauptprodukt.

Empfohlene Darstellung:

- **Website-Mini-Assistent** als optionaler Eingangskanal;
- klein und kontextuell, z.B. auf `/anmelden` oder `/preise-anfragen`;
- kein globaler blinkender Chatbot unten rechts;
- eher als geführter Frageblock:

> Welche Führerscheinklasse interessiert dich?
> PKW · Motorrad · LKW · BKF · Boot

Dann 2–3 strukturierte Rückfragen und Übergabe an Formular/E-Mail.

Wichtig:

> Chat ist nur eine Tür. Das eigentliche Produkt ist die strukturierte Anfrageverarbeitung dahinter.

---

## Paket-Visualisierung

Bitte drei Paketkarten / Reifegrade entwerfen:

### Starter — Anfrage vorbereiten

- Formular + E-Mail
- Klasse erkennen
- fehlende Infos markieren
- Antwortentwurf
- einfache Übersicht

### Pro — Anfrage steuern

- mehrere Anfragequellen
- Scoring
- Zuständigkeiten
- Wochenreport
- BKF/Boot/LKW-Speziallogik

### Betrieb — Anfrageprozess verbessern

- Ads-/Landingpage-Auswertung
- Follow-ups
- CRM/Sheet/Calendar optional
- wiederkehrende Optimierung

Bei Tierling wahrscheinlich Starter/Pro zeigen, Betrieb nur als Zukunft.

---

## Demo-Szenario für das Design

Nutze dieses Beispiel als Hauptdemo:

### Eingehende Anfrage

> Hallo, mein Sohn wird im September 17 und möchte begleitetes Fahren machen. Können Sie mir sagen, wann er anfangen kann und was es ungefähr kostet?

### Assistent erkennt

- Klasse: BF17 / B
- Person: Elternteil fragt für Sohn
- Status: warm
- Fehlende Infos: Telefonnummer, Wohnort, gewünschter Start, B197/Schaltung?
- Nächster Schritt: Preis-/Infoblatt senden + Rückruf anbieten
- Antwortentwurf: bereit zur Freigabe

---

## Designkomponenten

Bitte diese Komponenten als Designsystem-Bausteine denken:

1. **Assistant Card** — strukturierte Anfragekarte
2. **Lead Inbox** — Liste neuer Anfragen
3. **Missing Info Chips** — fehlende Angaben als Chips
4. **Next Step Panel** — empfohlene Aktion
5. **Draft Reply Panel** — Antwortentwurf mit Freigabe
6. **Safety Banner** — „nichts wird automatisch gesendet“
7. **Mode Switch** — Shadow / Assist / Controlled Auto
8. **Vertical Tags** — PKW, Motorrad, LKW, BKF, Boot
9. **Monthly Insight Card** — häufige Fragen / Anfragearten
10. **Website Entry Widget** — optionaler geführter Mini-Assistent

---

## Copy-Ton

Nicht technisch:

- keine „LLM“, „Prompt“, „Agent Workflow“, „Token“;
- keine „AI Employee“-Sprache.

Besser:

- Anfrage vorbereiten
- fehlende Infos erkennen
- Antwort vorschlagen
- Büro entlasten
- Mensch gibt frei
- aus Fragen werden klare Vorgänge

Hauptclaim:

> Aus unklaren Anfragen werden klare Vorgänge fürs Büro.

Alternative:

> Der Fahrschul-Assistent sortiert Anfragen, bevor sie im Postfach liegen bleiben.

---

## Website-Sektion für Tierling-Angebot

Eine Angebots-/Präsentationssektion könnte so aussehen:

**Headline:**  
Optional: Fahrschul-Assistent für Anfragen

**Subline:**  
Nicht als Ersatz für eure App, sondern als Vorbereiter für neue Interessenten: Der Assistent erkennt Klasse und Anliegen, markiert fehlende Infos und bereitet Antwortentwürfe vor.

**Visual:**  
Vorher: unklare Anfrage  
Nachher: strukturierte Assistentenkarte

**CTA / Gesprächssatz:**  
Nach Website-Livegang mit 10–20 echten Anfragen testen.

---

## Wichtigste Designentscheidung

Das Produkt soll nicht aussehen wie „wir haben ein Dashboard gebaut“.

Es soll aussehen wie:

> MyHiwi hat für diesen Betrieb einen eigenen kleinen Anfrage-Begleiter gebaut, der die Sprache, Angebote und Arbeitsweise des Kunden kennt.

Daher:

- Kundenspezifische Labels;
- Kundenspezifische Kategorien;
- Kundenspezifische Tonalität;
- Kundenspezifische Statuslogik;
- MyHiwi nur als Betreiber/Setup-Partner im Hintergrund.
