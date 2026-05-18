# MyHiwi · Component Inventory

> Verbindliche Komponenten-Liste. Neue Komponenten dürfen nur nach Eintrag in dieser Datei gebaut werden.

Jede Komponente trägt:
- **Zweck** — wofür sie da ist
- **Varianten** — welche Modi existieren
- **Tokens** — welche Design-Tokens verbraucht werden
- **Mobile** — wie sie unter `tablet`-Breakpoint umbricht
- **Verwenden / Nicht verwenden**

---

## 1. Navigation

### Header · Desktop
**Zweck:** Globale Top-Navigation auf allen Seiten.
**Varianten:** `default`, `mega-menu` (Hover auf "Leistungen" öffnet Drawer).
**Aufbau:** zweizeilig — oben dünner Mono-Strip (Ausgabe-Zeile + Live-Status), unten Hauptbar mit Logo links, Pill-Nav Mitte, Primary-Button-Sm rechts.
**Tokens:** `font.mono`, `font.body`, `radius.pill`, `border`, `spacing.6`, `spacing.4`.
**Mobile:** Headers reduzieren sich auf 1 Zeile — Logo + Burger-Icon. Mega-Menü wird Tap-Accordion.
**Verwenden:** alle öffentlichen Seiten.
**Nicht verwenden:** Digital-Check Flow (hat eigene Step-Header, siehe dort).

### Header · Mobile
**Zweck:** Top-Bar auf < 768px.
**Aufbau:** thin top strip mit Ausgabe + Live-Status (kann auf < 480px weggekürzt werden), darunter Logo + Burger-Icon.
**Tokens:** `font.mono`, `font.body`, `border`, `spacing.5`, `spacing.4`, `spacing.2`.

### Mobile Menu (Drawer)
**Zweck:** Burger-Menü Overlay.
**Aufbau:** Vollbild-Overlay auf paper, links MyHiwiMark + Close-Icon, dann Mono-Eyebrows pro Kategorie mit darunterliegenden Links (16–18px). Footer-Zeile mit Status + Kontakt.
**Tokens:** `paper`, `divider`, `spacing.7`, `font.mono`, `font.body`.
**Verwenden:** auf Mobile statt Header-Pill-Nav.

### Footer
**Zweck:** globaler Footer auf allen Seiten.
**Aufbau:** 4-Spalten-Grid Desktop (1.4fr / 1fr / 1fr / 1fr) — Brand-Block mit MyHiwiMark + Tagline + Standort, dann 3 Link-Spalten (Leistungen / Branchen / MyHiwi). Footer-Strip darunter mit Impressum + Datenschutz + Copyright in Mono.
**Tokens:** `ink-950` Hintergrund, `font.mono`, `font.body`, `spacing.6`, `spacing.7`.
**Mobile:** stapelt 1-spaltig, Brand oben, dann Spalten untereinander.

---

## 2. Hero

### Homepage Hero
**Zweck:** primärer Einstieg auf `/`.
**Aufbau:** 2-Spalter `1.15fr 0.85fr`. Links: SectionMark "00 · Eine Botschaft", H1 (Display-1 mit Italic-Highlight), Body-Large Subline, CtaRow (3-stufig). Rechts: `InteractiveHeroSchema` (Pipeline Besucher → 4 Bausteine → Umsatz) + 1 Floating-Stat-Card oben rechts (`108 Anfragen / 100 Tage · Sonnenhof · belegter Case 2026`).
**Tokens:** `font.display.display1`, `bodyLarge`, `spacing.10`, `radius.xl`, `shadow.hero`.
**Mobile:** stapelt 1-spaltig. Schema schrumpft auf 2×2-Grid-Variante.
**Verwenden:** nur Homepage.

### Subpage Hero (Cases-Übersicht, Leistungen-Übersicht)
**Zweck:** Einstieg für sekundäre Hauptseiten.
**Aufbau:** Crumb-Strip oben, dann 1-Spalter: SectionMark + H1 (Display-2) + Body-Large + optionale Pills-Row.
**Tokens:** `display2`, `border`, `font.mono`.
**Mobile:** identisch, Crumb auf 1 Zeile gekürzt.

### Vertical Hero (FeWo, Fahrschule, …)
**Zweck:** Branchen-Sub-LP Einstieg.
**Aufbau:** 2-Spalter `1.1fr 0.9fr`. Links: Mono-Branchen-Kicker, Display-2 H1, Lead, CtaRow mit Branchen-CTA + Microcopy, Status-Pill (z. B. „Sonnenhof · belegter Case 2026"). Rechts: Mockup-Plate passend zur Branche (BrowserMock + Floating Stripe-Receipt oder Phone-Frame + WhatsApp-Pill).
**Tokens:** wie Homepage Hero.
**Mobile:** stapelt, Mockup-Plate unter Text, max 480px Höhe.

### Case Hero
**Zweck:** /cases/[slug] Einstieg.
**Aufbau:** Crumb mit „belegter Case" oder „beobachteter Effekt", SectionMark mit Case-Name, Display-2 H1 (z. B. "108 *Direktanfragen* in 100 Tagen"), Lead, Bausteine-Pills, CtaRow. Rechts: 4:5-Plate mit Domain-Pill und Stat-Block.
**Tokens:** `display2`, `shadow.hero`, Bausteine-Pills.
**Mobile:** stapelt.

---

## 3. CTA-Komponenten

### Primary CTA Button
**Zweck:** Haupt-Conversion-Aktion.
**Aufbau:** ink-Hintergrund, weißer Text, accent-shadow (`shadow.cta`), Padding 18×26, font-size 16, font-weight 700, radius `sm`. Mit Pfeil-Icon rechts.
**Varianten:** `default`, `pill` (radius `pill`, für Final-CTA-Sektionen).
**Tokens:** `semantic.textPrimary`, `semantic.textOnDark`, `shadow.cta`, `radius.sm`/`radius.pill`.
**Mobile:** voll-breit (`width: 100%`).

### Secondary CTA Button (Ghost)
**Zweck:** alternative Aktion, geringere Hierarchie.
**Aufbau:** transparent, ink-Border 1px, ink-Text, Padding 16×22, font-size 14–15, font-weight 600, radius `sm`.
**Tokens:** `border`, `semantic.textPrimary`.
**Mobile:** voll-breit unter Primary.

### Text-Link CTA (Tertiär)
**Zweck:** dezenter Verweis.
**Aufbau:** ink-Text, `border-bottom: 1px solid accent`, padding-bottom 4px, font-weight 600, font-size 14.
**Tokens:** `semantic.accent`, `semantic.textPrimary`.

### CtaRow
**Zweck:** Komposition aus Primary + Secondary + optionaler Tertiärer in einer flex-Reihe.
**Aufbau:** flex, gap 14, flex-wrap, items-center.
**Mobile:** stack, Primary oben.

### CTA Band
**Zweck:** sektion-überspannender Aufruf mitten in einer Seite.
**Aufbau:** dunkler ink-Streifen, full-width, Padding 32×80, links Headline (Display-4 weiß), rechts Primary-CTA-Pill.
**Verwenden:** sparsam — maximal 1× pro Seite zwischen Sektionen.

### Final CTA Section
**Zweck:** letzter Sektion auf jeder Seite.
**Aufbau:** ink-Gradient (siehe DESIGN §3 Gradient-Signaturen), SectionMark in glow-Farbe, Display-1/-2 Headline mit Italic-Highlight in glow, Body-Large in white-78%, Primary-CTA-Pill.
**Tokens:** Hintergrund-Gradient, `semantic.glow`, `shadow.cta`.
**Mobile:** Padding reduziert, Headline Display-3.

---

## 4. Content

### SectionHeader
**Zweck:** Eyebrow + H2 + optionaler Lead-Absatz am Start jeder Sektion.
**Aufbau:** SectionMark („01 · Diagnose"), Display-3/4 H2 (max 24ch), optional Body-Medium Lead (max 64ch).
**Varianten:** `default`, `centered` (Final-CTA), `split` (mit Lead rechts in 2-Spalter).

### SystemPill
**Zweck:** Tag für einen der 5 Bausteine.
**Aufbau:** Mono-Label-Sm in Pill mit 5px×10px Padding, optional Dot links für active-State.
**Varianten:** `default` (border + muted), `active` (accent-soft-bg + accent-text + accent-border).
**Tokens:** `font.mono`, `radius.pill`, `semantic.accent`, `semantic.accentSoft`, `border`.

### FeatureCard (Block-Karte)
**Zweck:** ein Vier-Bausteine-Block oder Service-Group-Item.
**Aufbau:** Card mit big-Number (Display-2 Light, accent), Icon-Row, Display-5 Titel, Mono-Subtitel, Body-Small Outcome, Bullet-Liste mit Hairline-Trennern.
**Tokens:** `radius.lg`, `border`, `card`-padding 32×28.
**Mobile:** stapelt, Padding 24×22.

### System Pillar Card
**Zweck:** einer der 5 Bausteine auf /leistungen.
**Aufbau:** 4-Spalter `100px / 1fr / 2fr / auto` Desktop — Buchstabe (Display-2 Light, accent), H2 + Sub, Item-Liste 2-spaltig, Details-Link rechts.
**Mobile:** stapelt komplett 1-spaltig.

### Process Step (Step-Card)
**Zweck:** ein Schritt im Prozess-Streifen (FeWo-Calm) oder Digital-Check.
**Aufbau:** Card mit Mono-Kicker („Schritt 1"), Display-4 Titel, Body-Small Beschreibung, Footer-Zeile mit Dauer.
**Varianten:** `4-step` (FeWo-Calm), `5-step-dark` (Homepage Process, falls reaktiviert).

### Proof Card / Case Card
**Zweck:** ein Case-Eintrag in /cases.
**Aufbau:** Mockup-Plate (135deg-Gradient) oben mit Branchen-Caption, dann Mono-Kicker + Display-5 Kunde + Ausgangslage-Body + Gebaut-Body + Hairline-Trenner mit Bausteine-Pills und Stat-Zeile rechts.
**Varianten:** `lead-spread` (Sonnenhof groß, Halbseite), `regular` (in 2-Spalten-Grid).
**Tokens:** `radius.lg`, `border`, `font.mono`, `font.display`.
**Mobile:** stapelt, Mockup oben.

### Testimonial / Quote Card
**Zweck:** Original-Zitat eines Kunden.
**Aufbau:** Display-4 Italic-Serif (oder Bricolage 400-Italic) Quote in Anführungszeichen, Attribution darunter mit Mono.
**Verwenden:** **nur** wenn echte Quote mit schriftlicher Erlaubnis vorliegt.
**Nicht verwenden:** für „sinngemäße Sätze" — dafür: `QuoteCarousel` mit klarer Note.

### QuoteCarousel (Typische-Sätze-Block)
**Zweck:** Stellvertretende Sätze aus Erstgesprächen, klar als solche gekennzeichnet.
**Aufbau:** Mono-Kicker "Typische Sätze aus Erstgesprächen", darunter italic Note („Stellvertretend für Gespräche mit echten Gastgebern…"), dann 2 Italic-Serif-Quotes mit Attribution-Mono ("sinngemäß · Pension am Ammersee").
**Verwenden:** wenn keine echten Original-Zitate vorhanden sind.

### FAQ Accordion
**Zweck:** Frage-Antwort-Block, klickbar.
**Aufbau:** Sticky Headline links (0.85fr), Akkordeon rechts (1.15fr). Jede Frage Display-5, Antwort Body-Medium ausgeschrieben. Plus-Icon rotiert zum Minus beim Öffnen.
**Tokens:** `border`, `font.display`, `font.body`, `radius.pill` für Plus-Icon.
**Mobile:** stapelt, Headline oben, Akkordeon darunter.

### Comparison / Decision Block
**Zweck:** Entscheidungshilfe (z. B. „Wo starten?" mit drei Optionen).
**Aufbau:** 3-Karten-Grid, mittlere als Empfehlung-Highlight (ink-Hintergrund + glow-Pill „Empfehlung" oben mittig auf Border).
**Verwenden:** /leistungen-Übersicht, Homepage-Pakete-Sektion.

### „Where to start?" Block
**Zweck:** Spezialform von Comparison-Block für Einstiegs-Pakete.
**Aufbau:** 3 Cards: "Klein anfangen" (Digital-Check) / "Gezielt loslegen" (Sichtbarkeit & Anfrageflow, **mit Empfehlung**) / "Komplettes System" (Wachstumssystem). Jede Card: Mono-Kicker + Display-4 Name + Body + Footer-Mono-Pill + Details-Link.
**Wichtig:** mittlere Card-CTA muss wortgleich „Kostenlosen Digital-Check anfragen" lauten.

---

## 5. Forms / Digital Check

### Form Field
**Zweck:** Standard Text-Input.
**Aufbau:** Mono-Label-Sm darüber, Input mit Padding 14×16, font-size 15.5, border 1px, radius `md`. Value-State: border wechselt zu accent. Error-State: border + box-shadow rot, Helper-Zeile darunter mit Warn-Icon + Text.
**Varianten:** `text`, `email`, `tel`, `url`, `textarea`.
**Tokens:** `component.input.*` aus tokens.json.

### Select / Choice Card
**Zweck:** Click-Auswahl statt Dropdown im Digital-Check.
**Aufbau:** Card mit Label + optional Sub + Radio-Kreis rechts (oder Checkbox-Square für Multi). Hover: lift + accent-border + shadow.
**Varianten:** `single-select` (Radio), `multi-select` (Checkbox), `full-width` (für "Etwas anderes").

### Progress Indicator
**Zweck:** Schritt-Counter im Multi-Step-Form.
**Aufbau:** Mono-Label „Schritt 3 / 6" links, dünner 3px Progress-Bar rechts (accent → glow Gradient).
**Verwenden:** im Digital-Check-Header.

### Multi-step Form Layout (CheckFrame)
**Zweck:** umschließender Frame für Digital-Check-Screens.
**Aufbau:** Browser- oder Phone-Frame mit Sticky Header (Logo + Progress + Tag), Body, Footer-Bar mit ←-Zurück + Helper-Italic + Primary-CTA.
**Varianten:** `desktop` (Browser-artig), `mobile` (Phone-Frame mit Notch).

### Success State (Danke-Screen)
**Zweck:** Abschluss nach Form-Submit.
**Aufbau:** Glow-Pill mit Check-Icon, Mono "Eingegangen · Datum", Display-2 Headline mit Italic-Highlight, Body, 3-Karten-Grid „Was als Nächstes passiert".
**Verwenden:** Digital-Check Screen 7, Form-Confirmations generell.

### Human Handoff Note
**Zweck:** „Ihre Antworten landen direkt bei mir, nicht in einem Funnel."
**Aufbau:** italic Body-Small unter Form-Block, paper- oder subtle-Box mit Mono-Kicker.
**Verwenden:** im Digital-Check Screen 1 und Screen 5.

---

## 6. Commercial / System

### Offer Card (Paket-Card)
**Zweck:** ein Paket in der „Wo starten?"-Sektion oder /leistungen-Pakete.
**Aufbau:** Card mit Decision-Kicker („01 · ERST PRÜFEN") + Sub-Caption + Display-4 Paket-Name + Positioning-Text + Bullet-Liste mit Häkchen + Primary-CTA am Fuß.
**Varianten:** `default` (paper-bg), `highlight` (ink-bg, weiße Schrift, glow-CTA, Empfehlung-Pill auf Border).
**Tokens:** `card`, `radius.lg`, `shadow.cta` für Highlight.

### Service Group
**Zweck:** einer der 5 Bausteine als horizontale Zeile auf /leistungen.
**Aufbau:** siehe SystemPillarCard oben.

### System Map (Position-Indicator)
**Zweck:** zeigt auf /leistungen/[slug] wo die aktuelle Seite im System steht.
**Aufbau:** 5-Spalter mit allen Bausteinen, die aktive Seite mit accent-border + accent-soft-bg + "Diese Seite"-Tag, die anderen ausgegraut (opacity 0.6).
**Verwenden:** jedes Leistung-Detail.

### Vertical Fit Card
**Zweck:** „Für wen ist das?" Mini-Karte auf Leistung-Detail.
**Aufbau:** kleine Card 4-spaltig mit Display-5 Branchen-Name + Body-Small Begründung.

### Case Result Block (ResultStatGrid)
**Zweck:** Ergebnis-Karten auf /cases/[slug].
**Aufbau:** dunkle Sektion mit 3 Karten in transparent-white-Hintergrund, jede mit Big-Number (Display-2 Extrabold, weiß), Mono-Label in glow, Body-Small in white-75%, plus Disclaimer-Zeile darunter ("Zahlen aus dem laufenden Projekt, Stand …").
**Verwenden:** Case-Detailseiten.

### Trust / Compliance Note
**Zweck:** DSGVO-Erklärung in Forms und Footer.
**Aufbau:** subtle-Box mit accent-Mono-Kicker "Was passiert mit Ihren Daten" und Body-Small Erklärung. Wortlaut: „DSGVO-bewusst, mit AVV und Anbieterübersicht projektbezogen."
**Verwenden:** Digital-Check Screen 5, FAQ-DSGVO-Antwort, Footer-Bereich auf Bedarf.

---

## 7. Mocks & Visualisierungen

### BrowserMock
**Zweck:** stilisierter Browser-Frame für Hero-Visuals.
**Aufbau:** Window-Chrome (3 Punkte + Domain-Pill), darunter Page-Body mit Mini-Nav + Hero-Headline + Image-Strip + Form-Row.
**Verwenden:** FeWo, Sonnenhof-Case-Hero, Leistung-Detail-Hero.

### PhoneFrame
**Zweck:** Phone-Bezel-Mock für mobile Inhalte und Digital-Check Mobile-Stills.
**Aufbau:** 320–360px Breite, ink-Frame mit Padding 8, Notch oben mittig, Body in radius `xl`.

### InteractiveHeroSchema
**Zweck:** Pipeline Besucher → 4 Bausteine → Umsatz auf Homepage.
**Aufbau:** Card mit Header („So entsteht aus Besuchern Umsatz · live"), Input-Pin oben, 4 nummerierte Stage-Rows mit Verben, Connector-Pfeile, Output-Bar unten in ink mit glow-Check.
**Tokens:** `radius.xl`, `border`, `shadow.hero`.

### PipelineMockCard
**Zweck:** 4-Step-Wizard-Mock auf Leistung-Detail-Hero.
**Aufbau:** Quadrat-Plate, 4 gestapelte Step-Rows, mittlere aktiv hervorgehoben.

---

## 8. Library-Hilfen

### SectionMark
**Zweck:** Eyebrow mit Mono-Nummer + Hairline + Label.
**Verbindlich** am Start jeder Sektion.

### MyHiwiMark
**Zweck:** Logo (H-Icon + Wordmark).
**Varianten:** `default` (Brand-Gradient), `mono-on-dark` (weiß), `mono-on-light` (ink).
**Tokens:** size 22 (Mobile), 28 (Header), 34 (Footer), variabel.

### MyHiwiH
**Zweck:** nur das H-Mark.
**Verwenden:** als Watermark hinter dunklen Sektionen (Opacity 0.06–0.10), oder als Avatar.

### Reveal
**Zweck:** Scroll-basierter Fade-Up via IntersectionObserver.
**Varianten:** `rise`, `fade`, `strike`, `rise-strong`.
**Respektiert** `prefers-reduced-motion`.

---

## 9. Verwendungsmatrix

| Komponente | Homepage | Vertical-LP | Cases-Übersicht | Case-Detail | Leistungen-Übersicht | Leistung-Detail | Digital-Check |
|---|---|---|---|---|---|---|---|
| Header Desktop | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | sep. Step-Header |
| Footer | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | – |
| Homepage Hero | ✅ | – | – | – | – | – | – |
| Subpage Hero | – | – | ✅ | – | ✅ | – | – |
| Vertical Hero | – | ✅ | – | – | – | ✅ | – |
| Case Hero | – | – | – | ✅ | – | – | – |
| SectionMark | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| SystemPill | ✅ | – | ✅ | ✅ | ✅ | ✅ | – |
| FeatureCard | ✅ | – | – | ✅ | – | ✅ | – |
| System Pillar Card | – | – | – | – | ✅ | – | – |
| Process Step | – | ✅ | – | – | – | – | – |
| Proof Card | ✅ | – | ✅ | – | – | ✅ | – |
| QuoteCarousel | – | ✅ | – | – | – | – | – |
| FAQ Accordion | ✅ | ✅ | – | – | – | ✅ | – |
| „Where to start?" Block | ✅ | – | – | – | ✅ | – | – |
| Offer Card | ✅ | ✅ | – | – | ✅ | – | – |
| Final CTA Section | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | – |
| Form Field | – | – | – | – | – | – | ✅ |
| Choice Card | – | – | – | – | – | – | ✅ |
| Progress Indicator | – | – | – | – | – | – | ✅ |
| Success State | – | – | – | – | – | – | ✅ |
| System Map | – | – | – | – | – | ✅ | – |
| Case Result Block | – | – | – | ✅ | – | – | – |
| Trust/Compliance Note | – | – | – | – | – | – | ✅ |

---

**Ende components.md.**
