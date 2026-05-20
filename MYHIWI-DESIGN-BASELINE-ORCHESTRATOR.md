# MyHiwi Design Baseline · Orchestrator-Handoff

**Stand:** 2026-05-20  
**Status:** neue MyHiwi-Designrichtung ist live im Next.js-Repo umgesetzt und ist die verbindliche Baseline.  
**Zielgruppe:** Orchestrator-/Design-/Marketing-Agenten, die nicht auf Denis’ lokale Claude-Design-Dateien zugreifen können.

> Kurzregel: **Nicht alte MyHiwi-Seiten, alte Guidelines oder alte Komponenten als Stilquelle verwenden.** Die neue Designrichtung ist das Atlantik/MyHiwi-B-System aus `DESIGN.md`, `docs/design-system/` und der aktuellen Homepage-Implementierung.

---

## 1. Wo liegt die Wahrheit?

Wenn du Repo-Zugriff hast, lies in genau dieser Reihenfolge:

1. `DESIGN.md` — kompaktes, kanonisches Token-/Style-Backbone im Repo-Root.
2. `docs/design-system/ORCHESTRATOR-HANDOFF.md` — diese operative Zusammenfassung.
3. `docs/design-system/components.md` — Komponenten-Inventar.
4. `docs/design-system/page-archetypes.md` — Seitenaufbau pro Seitentyp.
5. `docs/design-system/compliance.md` — Claim-/DSGVO-/Sprachregeln.
6. Aktuelle Implementierung:
   - `app/page.tsx`
   - `app/globals.css`
   - `tailwind.config.ts`
   - `components/myhiwi/**`

Wenn du **nur Webzugriff** hast, nutze als sichtbare Referenz:

- Homepage: `https://myhiwi.de/`
- Cases: `https://myhiwi.de/case-studies`
- Sonnenhof Detail: `https://myhiwi.de/case-studies/sonnenhof-herrsching`
- Über MyHiwi: `https://myhiwi.de/ueber-mich`
- Kontakt: `https://myhiwi.de/kontakt`

Live-Assets, die du referenzieren darfst:

- Logo dunkel/hell:
  - `https://myhiwi.de/brand/myhiwi-h-logo.svg`
  - `https://myhiwi.de/brand/myhiwi-h-logo-white.svg`
  - `https://myhiwi.de/brand/myhiwi-h-icon.svg`
- Portrait:
  - `https://myhiwi.de/ueber-mich/portrait.jpg`
- Case-Visuals:
  - `https://myhiwi.de/case-studies/sonnenhof/sonnenhof-neu.png`
  - `https://myhiwi.de/case-studies/mr-sherman/cover.png`
  - `https://myhiwi.de/case-studies/formazin/cover.png`

---

## 2. Positionierung in einem Satz

**MyHiwi baut digitale Wachstumssysteme für lokale Unternehmen — Website, Google-Sichtbarkeit, Anfragewege, Buchung, Zahlung und AI als ein zusammenhängendes System.**

Nicht als „Webdesign-Agentur“ verkaufen. Nicht als „AI-Agentur“ verkaufen. Nicht als abstraktes SEO/GEO-Consulting verkaufen.  
Die Sprache muss immer auf konkrete lokale KMU-Wirkung zurückführen:

- besser gefunden werden
- bessere Anfragen bekommen
- Buchungen/Termine sauberer führen
- Zahlungen/Verbindlichkeit ermöglichen
- AI nur dort einsetzen, wo ein echter Ablauf existiert

---

## 3. Strategische Designrichtung

**Name intern:** Atlantik / MyHiwi B-System  
**Gefühl:** ruhig, editorial, klar, persönlich, hochwertig ohne Luxus-Overkill.

Referenzanker:

- Stripe: Klarheit, Weißraum, technische Seriosität
- Linear: Mono-Eyebrows, Hairlines, Systemlogik
- Vercel: starke Headlines, dunkle Final-CTA, technische Ruhe
- Apple Newsroom: Editorial-Splits, keine aggressive Salespage

Anti-Richtung:

- keine generischen AI-Agentur-Landingpages
- keine Neon-/Purple-Blue-Gradient-Klischees
- keine Stockfoto-Welten
- keine Webflow-/SaaS-Template-Optik
- keine lauten Funnel-Elemente, Popups, Auto-Carousels, Lottie-Loops

---

## 4. Designprinzipien

1. **System statt Einzelteile**  
   Jede Seite zeigt, wie Website, Sichtbarkeit, Anfrage/Buchung, Zahlung und AI zusammenarbeiten.

2. **Persönlich, nicht skaliert**  
   Denis ist sichtbar. Copy darf sagen: „Sie reden direkt mit Denis.“ Keine Account-Manager-Agentursprache.

3. **Editorial statt Funnel**  
   Große Headlines, Mono-Section-Marker, Hairlines, ruhige Flächen. Keine überdrehten Conversion-Hacks.

4. **Vorsichtig mit Zahlen**  
   Harte Zahlen nur, wenn belegt. Beobachtungen als vorsichtige Sätze formulieren.

5. **Ruhig und reduziert**  
   Eine Akzentfarbe, viel Weißraum, wenige Schatten, klare Karten.

---

## 5. Tokens / Look

### Farben

- `ink-950`: `#0F172A` — Text, dunkle Flächen, Primary Button
- `paper`: `#FFFFFF` — Hauptflächen
- `subtle`: `#F8FAFC` — Sektionstrenner / ruhige Hintergrundflächen
- `muted`: `#475569` — sekundäre Texte
- `accent`: `#2563EB` — Links, Italic-Highlights, aktive Tags
- `accent-hover`: `#1E40AF`
- `accent-soft`: `rgba(37,99,235,0.10)` — Hover-/Tag-Hintergründe
- `glow`: `#06B6D4` — dunkle CTA-Aura, Checkmarks auf Dunkel
- `divider`: `rgba(15,23,42,0.10)` — Hairlines, Card-Borders

**Regel:** Eine Haupt-Akzentfarbe. Keine zusätzlichen Kampagnenfarben ohne neue Designentscheidung.

### Typografie

- Display: `Bricolage Grotesque`
- Body/UI: `Inter Tight`
- Mono Labels: `JetBrains Mono`
- Calm/FeWo Akzent optional: `Instrument Serif`

Headlines:

- groß, eng, editorial
- max. **ein** kursives Akzentwort pro Headline
- Akzentwort in `accent` oder auf dunklem CTA in `glow`

Beispiel:

```tsx
<h2>
  Vier Bausteine. Ein <em className="mh-italic-accent">Wachstumssystem</em>.
</h2>
```

### Formen / Spacing

- Container: max. `1240px`
- Desktop-Padding: `64px`
- Mobile-Padding: `20px`
- Kartenradius: meistens `12px`
- größere Plates: `16px`
- Pills: `999px`
- Schatten sparsam: Cards minimal, Hover leicht, Hero/Mockup stärker

---

## 6. Aktuelle Homepage-Struktur

Die Homepage ist die beste Produktionsreferenz. Reihenfolge:

1. Header
2. Hero / Positionierung
3. Ausgewählte Projekte / TrustStrip
4. Diagnose — 4 Problemkarten + dunkles Antwortmodul
5. Vier Bausteine — Sichtbarkeit, Nachfrage, Anfrage & Buchung, Zahlung & Verbindlichkeit
6. AI-Verstärker-Schicht
7. Über MyHiwi — echtes Denis-Portrait
8. Proof — Sonnenhof groß, Mr. Sherman + Formazin sekundär mit Bildern
9. Wo starten? — 3 Einstiege
10. FAQ
11. Final CTA
12. Footer

Wichtig: Die Homepage ist **nicht** mehr Branchen-Galerie, Blog-Teaser oder generische Agentur-Startseite. Sie erklärt das System.

---

## 7. Komponenten-Baseline

Aktuelle Produktionskomponenten liegen unter:

```text
components/myhiwi/
  brand/MyHiwiMark.tsx
  card/Card.tsx
  card/FeatureCard.tsx
  card/OfferCard.tsx
  card/ProofCard.tsx
  cta/BtnPrimary.tsx
  cta/BtnGhost.tsx
  cta/BtnTertiary.tsx
  cta/CtaRow.tsx
  faq/FAQAccordion.tsx
  hero/FloatingMetricCard.tsx
  layout/Container.tsx
  layout/Header.tsx
  layout/Footer.tsx
  layout/Section.tsx
  layout/SectionMark.tsx
  mockup/BrowserMockup.tsx
  trust/ComplianceNote.tsx
  trust/TrustStrip.tsx
```

### Header

- Desktop: Top-Mono-Strip + Hauptbar
- Logo links, Pill-Navigation Mitte, Primary-CTA rechts
- Mobile: Logo + Burger Drawer
- CTA: `Kostenlosen Digital-Check anfragen`

### SectionMark

Jede Hauptsektion beginnt mit:

```text
[NN] — LABEL
```

Mono, uppercase, Hairline-Charakter. Beispiele: `00 POSITIONIERUNG`, `01 DIAGNOSE`, `05 PROOF`.

### Cards

- Paper- oder subtle-Flächen
- 1px Border
- kleiner Schatten
- Hover: minimal Lift + Accent-Border
- Diagnose-Karten: gleiche Höhe, Nummerierung, ruhiger Rhythmus

### ProofCard

ProofCards können und sollen jetzt echte Visuals tragen:

- Sonnenhof: Website-Screenshot / Hero-Bild
- Mr. Sherman: Coverbild
- Formazin: Coverbild

Immer mit dunklem Overlay, damit Text lesbar bleibt. Keine erfundenen Stats.

### Founder / Über MyHiwi

Nutze echtes Portrait aus `/ueber-mich/portrait.jpg`, 4:5-artige Card, dunkler Verlauf unten, Caption „Gründer / Denis“.

---

## 8. Copy- und Sprachregeln

Sprache: Deutsch, Sie-Ansprache, echte Umlaute.

Guter Ton:

- „Ich prüfe Website, Sichtbarkeit und Anfrageweg.“
- „Sie reden direkt mit Denis.“
- „DSGVO-bewusst, mit AVV und Anbieterübersicht projektbezogen.“
- „Aus Sichtbarkeit bessere Anfragen, Buchungen und verbindliche nächste Schritte.“

Vermeiden:

- „Wir revolutionieren Ihr Business mit KI“
- „100 % DSGVO-konform“
- „AI Employee / autonome Agenten“ als Kundensprache
- „Wir sind Ihre Full-Service-Webdesign-Agentur“
- erfundene Testimonials
- aggressive Knappheit / Fake Scarcity

---

## 9. Claims / Proof

### Belegter Case

**Sonnenhof Herrsching** ist aktuell der stärkste harte Proof.

Zulässig, wenn mit Quelle/Zeitraum verbunden:

- `108 Anfragen / 100 Tage`
- im Case-Kontext zusätzlich vorsichtig: Keyword-/Sichtbarkeitsentwicklung nur mit Quelle/Stand

### Weitere Cases

- Mr. Sherman Tanzstudio: Projekt / Plattform / Mitgliederlogik / Buchung/Zahlung, ohne harte Zahl als Marketingclaim, sofern nicht verifiziert.
- Formazin: Pilot / Architektur / Dokumentation / AI-gestützte interne Übergaben, ohne harte Zahlen.
- Villa Gloria / FeWo Taubenhaus / Mannis können erwähnt werden, aber vorsichtig und visuell/projektbezogen.

**Regel:** Wenn eine Zahl nicht belegt ist, schreibe lieber „sichtbar verbessert“, „sauberer strukturiert“, „als Pilot aufgebaut“, nicht „+X %“.

---

## 10. CTA-System

Hauptseiten:

- Primary: `Kostenlosen Digital-Check anfragen`
- Secondary: `Cases ansehen`
- Tertiary: `Angebote ansehen`
- Microcopy: `kostenlos · unverbindlich · Sie reden direkt mit Denis`

Branchen-LPs:

- FeWo/Pension: `Kostenlosen Direktanfragen-Check anfragen`
- Fahrschule/andere: `Anfrageflow-Check anfragen`
- Microcopy: `kostenlos · unverbindlich · 20 Minuten · speziell für [Branche]`

Final CTA:

- dunkler Gradient
- nur ein Primary-Pill
- persönliche Frage als Headline, z. B. `Soll ich Ihren digitalen Anfrageweg kurz prüfen?`

---

## 11. Seiten-Archetypen für neue Arbeit

### Homepage

Nicht neu erfinden. Bestehende Reihenfolge beibehalten und nur verbessern.

### `/leistungen`

Soll als Systemlandkarte funktionieren:

1. Hero
2. fünf Bausteine:
   - Sichtbarkeit
   - Nachfrage
   - Anfrage & Buchung
   - Zahlung & Verbindlichkeit
   - AI & Automation
3. Wo starten? 3 Einstiege
4. Final CTA

### Branchen-LP: Auto-Werkstatt

Für den aktuellen Werkstatt-Use-Case die MyHiwi-Systemlogik anwenden:

- Sichtbarkeit: Werkstatt + Region + Leistungen sauber auffindbar
- Nachfrage: konkrete Leistungsseiten statt generische Startseite
- Anfrage: klare Wege für Termin, Problem, Fahrzeugdaten, Rückruf
- Buchung: Termin-/Rückruf-/Diagnoseflow
- Zahlung: optional später für Anzahlung, Reifenwechsel, feste Servicepakete
- AI: nur als Assistenz für Anfrage-Sortierung, Antwortvorbereitung, interne Übergabe

Seitenstruktur:

1. Hero: „Mehr passende Werkstatt-Anfragen aus Ihrer Region.“
2. Diagnose: typische Probleme lokaler Werkstätten
3. System: Website + Google + Anfrageflow
4. Beispiel-Flow: Besucher → Leistung → Anfrage mit Fahrzeugdaten → Rückruf/Termin
5. Proof/Referenz: vorsichtig, wenn noch kein harter Werkstatt-Case vorhanden
6. Einstieg: Digital-Check / Anfrageflow-Check

### Case-Seiten

Immer:

1. Hero Claim
2. Ausgangslage
3. Was gebaut wurde
4. Ergebnis / belegte Signale
5. Was andere daraus lernen können
6. Final CTA

---

## 12. Alte Dateien / Legacy-Gefahr

Der Agent kann alte Seiten und alte Guidelines finden. Diese sind **nicht** die neue Richtung.

Ignorieren bzw. nur als Content-Archiv behandeln:

- `website-guidelines/`
- `website-sections/`
- alte `components/Navigation.tsx`, `components/Footer.tsx`
- alte Blog-/SEO-Seiten als Designreferenz
- alte Case-Layouts, wenn sie nicht im neuen `components/myhiwi`-System aufgebaut sind

Die aktuelle Designbaseline kommt aus:

- `DESIGN.md`
- `docs/design-system/**`
- `components/myhiwi/**`
- `app/page.tsx`
- Live-Seite `https://myhiwi.de/`

---

## 13. Konkreter Prompt für den Design-/Marketing-Agenten

Kopiere diesen Block in den Orchestrator-Agenten:

```text
Du bist Design-/Marketing-Agent für MyHiwi. Verwende ausschließlich die neue MyHiwi-Designbaseline.

Primäre Referenz:
- DESIGN.md im Repo-Root
- docs/design-system/ORCHESTRATOR-HANDOFF.md
- docs/design-system/components.md
- docs/design-system/page-archetypes.md
- aktuelle Live-Seite https://myhiwi.de/

Ignoriere alte Website-Guidelines, alte Seitenlayouts und generische Agentur-/AI-Agency-Designs.

MyHiwi-Positionierung:
MyHiwi baut digitale Wachstumssysteme für lokale Unternehmen: Website, Google-Sichtbarkeit, Anfragewege, Buchung, Zahlung und AI als ein zusammenhängendes System.

Designrichtung:
ruhig, editorial, persönlich, technisch klar. Atlantik-Farbsystem: #0F172A, #FFFFFF, #F8FAFC, #2563EB, #06B6D4. Fonts: Bricolage Grotesque, Inter Tight, JetBrains Mono. Max. ein kursives Akzentwort pro Headline. Mono-Section-Marker. Hairlines. Große Weißräume. Keine Stockfotos, keine Neon-Verläufe, keine aggressiven Funnel-Elemente.

Copy:
Deutsch, Sie-Ansprache, echte Umlaute. Persönlich: „Sie reden direkt mit Denis.“ Claims vorsichtig. Harte Zahlen nur mit Beleg/Zeitraum. DSGVO-Wording: „DSGVO-bewusst, mit AVV und Anbieterübersicht projektbezogen.“

CTA-System:
Primary: „Kostenlosen Digital-Check anfragen“.
Secondary: „Cases ansehen“.
Tertiary: „Angebote ansehen“.

Assets:
Logo: /brand/myhiwi-h-logo.svg, /brand/myhiwi-h-logo-white.svg.
Portrait: /ueber-mich/portrait.jpg.
Cases: /case-studies/sonnenhof/sonnenhof-neu.png, /case-studies/mr-sherman/cover.png, /case-studies/formazin/cover.png.

Wenn du neue Seiten oder Marketingmaterial erstellst, starte mit dem Seiten-Archetyp und baue aus den bestehenden MyHiwi-Komponenten. Erfinde keine neuen Farben, keine neuen Komponenten und keine neuen Claims ohne Beleg.
```

---

## 14. QA-Checkliste für Agenten

Vor Abgabe prüfen:

- Ein klares MyHiwi-Systemverständnis sichtbar?
- Nicht wie generische Webdesign-/AI-Agentur?
- Max. ein Italic-Highlight pro Headline?
- Richtige CTA-Texte?
- Keine erfundenen Zahlen/Testimonials?
- Keine pauschale DSGVO-Garantie?
- Mobile Layout mitgedacht?
- Echte Umlaute?
- Logo/Portrait/Case-Bilder aus aktuellen Assets?
- Keine alten Komponenten/Guidelines als visuelle Quelle?

---

**Ende.**
