# MyHiwi Website Redesign — Übergabe an Claude Design

Stand: 2026-05-13
Ziel-Empfänger: Claude als Design-Partner (Claude.ai, Artifacts oder via frontend-design Skill in Claude Code)

---

## So nutzt du dieses Dokument

Kopiere den **gesamten Inhalt unten** in eine frische Claude-Session. Erste Anweisung an Claude:

> Lies diesen Brief vollständig. Baue auf Basis der Inhalte ein vollständiges Website-Design für MyHiwi — Homepage zuerst, dann FeWo-LP und Fahrschul-LP. Nutze HTML + Tailwind als Output (das matched unseren Tech-Stack: Next.js 14 + Tailwind). Halte dich exakt an die Copy-Blöcke unten und an die Brand-Identität. Beginne mit der Homepage als Single-Page-HTML-Artifact, danach die zwei Sub-Landingpages als separate Artifacts.

---

## 1. Projekt-Steckbrief

- **Marke:** MyHiwi (Brand der Kaliberda Digital Intelligence UG)
- **Domain:** myhiwi.de
- **Tech-Stack:** Next.js 14 App Router, Tailwind, Framer Motion, Lucide-Icons, Vercel
- **Sprache:** Deutsch (echte Umlaute ä/ö/ü/ß, niemals ae/oe/ue)
- **Standorte:** Ahrensfelde bei Berlin + Ammersee/Starnberg (Bayern)
- **Status:** Komplett-Redesign der bestehenden Webseite. Positionierung wurde 2026-05-13 geschärft.

---

## 2. Neue Positionierung — die eine Botschaft

> **MyHiwi baut digitale Wachstumssysteme für lokale Unternehmen. Website, Google-Sichtbarkeit, Werbung, Anfrage- und Buchungsflows greifen ineinander — damit aus Sichtbarkeit echte Kunden, Buchungen und Zahlungen werden.**

### Verkauft wird

- Mehr planbare Anfragen, nicht nur mehr Klicks.
- Weniger Plattformabhängigkeit (Booking.com & Co.).
- Schnellere Reaktion auf Interessenten.
- Mehr verbindliche Buchungen / Anzahlungen / Termine.
- Bessere Google-/Review-/Trust-Signale.
- AI-ready Struktur als Qualitätsmerkmal — nicht als Hauptprodukt.

### Verkauft wird NICHT

- „AI-Agentur" / „wir bauen AI-Agenten".
- „AI Employee ersetzt Personal".
- „Webdesign Agentur" / „Google Ads Betreuung" als isolierte Dienstleistung.
- „GEO/LLMO/AI Search Consulting" als abstraktes Produkt.
- Generische „Wir revolutionieren mit KI"-Sprache.

---

## 3. Zielgruppen (in Priorität)

1. **Ferienwohnungen / Pensionen / Hotels** — stärkster Hebel (OTA-Provisionen).
2. **Fahrschulen** — WhatsApp-/Telefonchaos, schwache mobile CTAs.
3. **Lokale Dienstleister mit hohem Auftragswert** — Energieberatung, Handwerk, Premium-Services.
4. **Vereine / Sport / Tanz / Kursanbieter** — Mitgliedschaften, Buchungen, Zahlungen.
5. **Lokale Praxen / Kanzleien** — wo Compliance es zulässt.

---

## 4. Brand Identity

### Farben (Tailwind-Variablen, aus aktueller Codebase)

| Token | Hex | Verwendung |
|---|---|---|
| navy-950 | `#0a0f1a` | Headlines auf Dunkel, höchste Hierarchie |
| navy-900 | `#0f172a` | Primary Dunkel, Footer, Hero-Background-Akzent |
| navy-800 | `#1e293b` | Dunkle Karten, Sektion-Trenner |
| blue-600 | `#2563eb` | CTA-Button hover, Akzent stark |
| blue-500 | `#3b82f6` | CTA-Button, Links, Akzent |
| blue-400 | `#60a5fa` | Subtile Highlights |
| cyan-500 | `#06b6d4` | Highlight, Check-Marks, Gradient-Endpunkt |
| slate-50 bis slate-900 | Tailwind | Body-Text, Borders, Backgrounds |
| Background base | weiß + slate-50 | Hauptflächen |

**Gradient-Signaturen:**
- Primary-CTA: `bg-gradient-to-br from-blue-600 to-blue-500`
- Accent-Strip: `bg-gradient-to-r from-blue-500 to-cyan-500`
- Hero-Glow: subtile Radial-Glows in blau + cyan auf hellem Hintergrund

### Typografie

- **Body / Sans:** Inter (via `next/font/google`, CSS-Variable `--font-inter`)
- **Heading:** Poppins (via CSS-Variable `--font-poppins`) — extrabold + tight tracking
- **Mono / Eyebrows:** System-Mono in `font-mono`, 10–12 px, `tracking-[0.14em]`, uppercase
- **Hero H1:** 4xl auf Mobile, bis 68 px auf Desktop, extrabold, leading-[1.02]

### Visuelle Stilrichtung

- Modern minimal, leicht techy, kein Agentur-Glanz, kein Stockfoto-Glamour.
- Subtile Grid-Pattern + Radial-Glow im Hintergrund.
- Floating Cards mit dezenten Schatten und Mikro-Animationen (`animate-float-y`).
- Glasmorphismus sparsam.
- Mobile-first. Viel Whitespace.
- Browser-Frame-Mockups für Case-Visualisierungen (drei farbige Punkte oben links).
- Logo-Assets liegen in `Website/MyHiwi/Brand/` (SVGs: primary, mono, dark, white, stacked).

---

## 5. Homepage — komplette Section-Spec mit Copy

### Section 5.1 — Hero

**Eyebrow:**
> Für lokale Unternehmen, die online mehr aus ihrer Nachfrage machen wollen.

**H1:**
> Digitale Wachstumssysteme für lokale Unternehmen

**Subline:**
> MyHiwi sorgt dafür, dass Ihre Website, Google-Präsenz, Werbung und Anfragen zusammenarbeiten — damit aus Sichtbarkeit echte Kunden, Buchungen oder Zahlungen werden.

**Kurz-Erklärung (optional, unter Subline):**
> Wir bauen nicht nur Webseiten. Wir verbinden Website, Local SEO, Google Ads, Anfrageflow, Buchung und Zahlung zu einem System, das im Alltag funktioniert.

**Primary CTA:** `Kostenlosen Digital-Check anfragen` → `/kontakt`
**Secondary CTA:** `Angebote ansehen` → `#pakete`

**Trust-Strip unter CTA (mit Check-Marks):**
- Direkt zu mir · kein Funnel
- Custom gebaut · kein SaaS-Weiterverkauf
- DSGVO · Made in Deutschland

**Eyebrow-Tag rechts (Status-Pill):**
> Digitaler Partner für KMU · Berlin + Bayern

**Hero-Visual (rechts, leicht rotiert -1.5°):**
- Browser-Frame mit drei farbigen Punkten oben links
- Domain im Frame: `sonnenhof-herrsching.de`
- Screenshot: Sonnenhof-Website (liegt in `public/case-studies/sonnenhof/sonnenhof-neu.png`)
- **Floating-Card oben links:** „108 Anfragen / 100 Tage · direkt · ohne Provision"
- **Floating-Card unten rechts:** „3h / Tag gespart · KI-Agent"

---

### Section 5.2 — Das Problem

**Headline:**
> Ihre digitale Kundengewinnung besteht aus zu vielen Einzelteilen?

**Copy:**
> Viele lokale Unternehmen haben eine Website, ein Google-Profil, vielleicht Werbung, WhatsApp, Telefon, E-Mail und ein paar Bewertungen — aber nichts davon arbeitet wirklich zusammen.

**Das Ergebnis (Bullet-Liste mit roten/orangenen Akzent-Icons):**
- Besucher schauen kurz vorbei und melden sich nicht.
- Google Ads bringen Klicks, aber keine klar messbaren Anfragen.
- Buchungen oder Termine laufen über Umwege.
- Bewertungen und Vertrauen werden nicht systematisch genutzt.
- Anfragen gehen im Alltag unter oder werden zu spät beantwortet.

**Übergangs-Satz (groß, zentriert):**
> MyHiwi verbindet diese Einzelteile zu einem digitalen System, das zu Ihrem Betrieb passt.

---

### Section 5.3 — Die vier Kernbausteine

**Eyebrow:** „Ein System statt einzelner Maßnahmen"
**Headline:** „Vier Bausteine. Ein Wachstumssystem."

**Block 1 · Sichtbarkeit**
- **Untertitel:** „Website, Local SEO und Google Business"
- **Outcome-Satz:** „Damit Kunden Sie finden, verstehen und Ihnen vertrauen."
- **Bullets:**
  - moderne Website
  - Local SEO
  - Google Business Profile
  - strukturierte Daten / AI-ready Inhalte
  - Standort-, Leistungs- und Angebotsseiten
- **Icon-Vorschlag:** Lucide `Globe` oder `Search`

**Block 2 · Nachfrage**
- **Untertitel:** „Google Ads und Kampagnen, die zur Website passen"
- **Outcome-Satz:** „Damit nicht nur gehofft wird, sondern planbar Nachfrage entsteht."
- **Bullets:**
  - Google Ads Setup
  - lokale Kampagnen
  - Landingpages
  - Conversion Tracking
  - Auswertung & Optimierung
- **Zusatz-Satz (kursiv, klein):** „Google Ads sind bei uns kein isolierter Klick-Einkauf, sondern Teil eines messbaren Umsatzsystems."
- **Icon-Vorschlag:** Lucide `TrendingUp` oder `LineChart`

**Block 3 · Anfrage & Buchung**
- **Untertitel:** „Klare Wege vom Interesse zur Anfrage"
- **Outcome-Satz:** „Damit Besucher nicht nur lesen, sondern den nächsten Schritt machen."
- **Bullets:**
  - Kontakt- und Anfrageflows
  - Terminbuchung
  - Direktbuchung / Reservierung
  - WhatsApp- oder Telefon-CTA mit Struktur
  - Formularlogik und automatische Zusammenfassungen
- **Icon-Vorschlag:** Lucide `MessageSquare` oder `CalendarClock`

**Block 4 · Zahlung & Verbindlichkeit**
- **Untertitel:** „Anzahlungen, Buchungen und Zahlungslinks"
- **Outcome-Satz:** „Damit aus Interesse schneller Verbindlichkeit wird."
- **Bullets:**
  - Stripe/Mollie Zahlungslinks
  - Anzahlungen
  - Kurszahlungen
  - Reservierungszahlungen
  - Buchungsbestätigungen
- **Icon-Vorschlag:** Lucide `CreditCard`

**Layout-Vorschlag:** 4-Spalten-Grid auf Desktop, 2×2 auf Tablet, gestapelt auf Mobile. Jede Karte mit dezentem Hover-Lift.

---

### Section 5.4 — AI & Automationen als Verstärker

**Headline:**
> AI da, wo sie Ihrem Betrieb wirklich hilft

**Copy:**
> Wir verkaufen keine abstrakte KI-Spielerei. Wir nutzen AI und Automationen dort, wo sie lokale Unternehmen konkret entlasten:

**Bullet-Liste (2-Spalten auf Desktop):**
- Anfragen zusammenfassen
- fehlende Informationen erkennen
- Antwortentwürfe vorbereiten
- Bewertungen und Kundenfeedback besser nutzen
- Anzeigen und Landingpages auswerten
- Reports verständlicher machen
- Website-Inhalte so strukturieren, dass Google und KI-Systeme sie besser verstehen

**Eingerahmtes Sub-Modul: „Digitaler Anfrage-Assistent"**
> Der digitale Anfrage-Assistent hilft dabei, eingehende Anfragen zu sortieren, Rückfragen vorzubereiten und schneller zu reagieren — mit menschlicher Kontrolle statt Blackbox-Automatisierung.

CTA innerhalb der Box: `Wie der Assistent funktioniert` → `/anfrage-assistent`

**Designhinweis:** Diese Sektion bekommt einen leicht dunkleren Hintergrund (`bg-slate-50` oder Navy-Tinte) — sie markiert die „moderne Schicht", die über den 4 Bausteinen liegt.

---

### Section 5.5 — Verticals (Für wen?)

**Headline:**
> Gemacht für lokale Betriebe, bei denen jede Anfrage zählt

**4 Karten (2×2-Grid auf Desktop, gestapelt auf Mobile):**

1. **Ferienwohnungen & Pensionen**
   - Copy: „Mehr Direktbuchungen, weniger Plattformabhängigkeit und ein klarer Anfrage- oder Buchungsflow."
   - CTA: `Direktbuchungs-Leak prüfen` → `/fewo-direktbuchung`

2. **Fahrschulen**
   - Copy: „Mehr Fahrschüler-Anfragen, klarere Kursinformationen und weniger WhatsApp-/Telefonchaos."
   - CTA: `Anfrageflow prüfen` → `/fahrschul-anfrageflow`

3. **Lokale Dienstleister**
   - Copy: „Mehr qualifizierte Anfragen für regionale Leistungen mit hohem Auftragswert."
   - CTA: `Lead-Strecke prüfen` → `/kontakt`

4. **Vereine, Sport & Kurse**
   - Copy: „Bessere Anmeldungen, Mitgliedschaften, Kursbuchungen und Zahlungsprozesse."
   - CTA: `Buchungsprozess prüfen` → `/kontakt`

---

### Section 5.6 — Proof / Warum MyHiwi?

**Headline:**
> Nicht nur schöner. Messbarer.

**Copy:**
> MyHiwi denkt Website, Google, Werbung und digitale Prozesse zusammen. Dadurch entstehen keine isolierten Maßnahmen, sondern Systeme, die im Alltag funktionieren und messbar verbessert werden können.

**3 Case-Vignetten (bestehend, 3-Spalten-Grid):**

| Feld | Kunde | Problem | Lösung | Ergebnis |
|---|---|---|---|---|
| Sichtbarkeit + Direktbuchung | Sonnenhof Herrsching | Hotel am Ammersee — Website seit 23 Jahren nicht erneuert, Top-10-Keywords auf 6-Jahres-Tiefpunkt (24), Hauptumsatz über 15–18 % Booking.com-Provision. | 100-Tage-Relaunch: Next.js-Website (DE + EN), Local-SEO-Fundament, 10 Content-Posts, Google Business Profil, Performance-Max-Ads. | 108 Anfragen in 100 Tagen · +304 % Top-10-Keywords (24 → 97) · 6-Jahres-Peak. |
| Brand-App + Buchung | Mr. Sherman · Tanzstudio Berlin | Memberships, Schüler-Login, Trainer-Portal, Admin-CRM — keine Standard-Software konnte das mit Studio-Branding abbilden. | Eigene Brand-Applikation: Stripe-Subscriptions, Schüler-App, Trainer-Portal, Admin-CRM, voll mit Website verschmolzen. | 205 Leads/Monat · 7,28 € CPL · 4 Membership-Tiers automatisiert. |
| Anfrage-Assistent | Formazin · Architekturbüro | Nach jeder Baustelle 2–3 Stunden händisches Bauprotokoll aus Fotos und Notizen. | KI-Agent nimmt Fotos und Sprachnotizen entgegen, generiert Protokoll, schreibt ins Büro-System. | Protokoll in Minuten statt Stunden · Pilot-Launch Mai 2026. |

**Hinweis (kleingedruckt):** Exakte Zahlen sind aus laufenden Projekten, Stand 2026-05.

---

### Section 5.7 — Pakete (Abschnitt #pakete)

**Headline:**
> Starten Sie dort, wo der größte Hebel liegt

**3 Konzept-Pakete (3-Spalten-Grid, mittleres Paket leicht hervorgehoben):**

**Paket 1 · Digital-Check**
- Für Unternehmen, die wissen wollen, wo online Anfragen verloren gehen.
- Enthält:
  - Website-/Google-Check
  - Anfrageflow-Check
  - Ads-/Tracking-Einschätzung, falls vorhanden
  - konkrete 5-Punkte-Empfehlung
- CTA: `Digital-Check anfragen`

**Paket 2 · Sichtbarkeit & Anfrageflow** (HIGHLIGHT)
- Für lokale Unternehmen, die mehr qualifizierte Anfragen bekommen wollen.
- Enthält:
  - Website-/Landingpage-Optimierung
  - Local SEO / Google Business
  - Anfrageflow
  - Tracking
  - Review-/Trust-Bausteine
- CTA: `Projekt besprechen`

**Paket 3 · Wachstumssystem**
- Für Betriebe, die Website, Google Ads, Buchung und Zahlung zusammenbringen wollen.
- Enthält:
  - Website / Landingpage
  - Local SEO
  - Google Ads Setup oder Optimierung
  - Conversion Tracking
  - Anfrage-/Buchungsflow
  - Zahlungs-/Anzahlungsoptionen
  - monatliche Auswertung
- CTA: `Wachstumssystem planen`

**Unter den Paketen (Verweis-Zeile):**
> Konkrete Preise und das passende Monats-Modell besprechen wir im Erstgespräch.
CTA-Link: `Pricing-Details ansehen` → `/preise` (oder `/festpreis`)

---

### Section 5.8 — Final CTA

**Headline:**
> Wo verlieren Sie heute digitale Anfragen?

**Copy:**
> Lassen Sie uns gemeinsam prüfen, ob Ihre Website, Google-Präsenz, Werbung und Anfragewege wirklich zusammenarbeiten — und welcher Hebel zuerst Umsatz bringen kann.

**CTA:** `Kostenlosen Digital-Check anfragen` → `/kontakt`

**Designhinweis:** Dunkler Hintergrund (navy-900 oder Gradient zu blue-600), Text weiß, sehr klarer Call-to-Action, optional mit Floating-Glow.

---

## 6. Sub-Landingpage: /fewo-direktbuchung

**Zielgruppe:** FeWo/Pension/Hotel-Betreiber mit OTA-Abhängigkeit.

**Sektionen:**
1. **Hero** — „Direktbuchungen statt 15–18 % an Booking.com." Visual: Stripe-Anzahlungs-Bestätigung + Kalender.
2. **Direktbuchungs-Rechner** — interaktiver Slider: 30k / 50k / 80k € Buchungsumsatz · Anzeige der Provisions-Differenz OTA (15 %) vs. Stripe (1,5 %). Disclaimer: „Beispielrechnung, OTA-Provisionen variieren."
3. **Drei Bausteine eines Direktbuchungs-Systems** — Website-Booking-Modul · Anzahlung via Stripe · Trust-Signale (Reviews, FAQ, GBP).
4. **Sonnenhof-Case in 5 Zeilen** — 108 Anfragen in 100 Tagen, Verweis auf vollständige Case-Study.
5. **5-Minuten-Audit-Hook** — „Lassen Sie mich Ihr aktuelles Setup prüfen — was Google, Kunden und KI-Assistenten heute sehen."
6. **Pricing-Anker** — „FeWo-Pilot ab 990 € einmalig oder Subscribe ab 1.299 €/Monat (1.290 € Setup)."
7. **FAQ** — OTA-Wechsel, Stornofälle, Verfügbarkeitskalender-Sync, Domain-Frage.
8. **CTA:** `Direktbuchungs-Check anfragen` → `/kontakt`

---

## 7. Sub-Landingpage: /fahrschul-anfrageflow

**Zielgruppe:** Fahrschulen mit unklarem Kursflow, WhatsApp-Chaos.

**Sektionen:**
1. **Hero** — „Mehr Fahrschüler-Anfragen — mit weniger Rückfragen."
2. **Problem-Block** — Anrufe nach Klassenpreisen, WhatsApp ohne Kontext, keine nächsten Schritte.
3. **Anfrageflow-Demo** — Mock-Up: Klasse → Standort → Theorie-Kursstart → Kontakt.
4. **Was bauen wir in 7 Tagen?** — Klassen-Seiten · Standort-Seiten · Kursanfrage · WhatsApp-CTA mit Kontext · Tracking · Reviews.
5. **Mannis/Tierling-Hinweis** — „Bei Mannis Fahrschule in Berlin-Ost steht das System seit 2026."
6. **Pricing-Anker** — „Build 3.990 € + 89 €/Monat. Oder Subscribe 749 €/Monat + 990 € Setup."
7. **FAQ** — Datenschutz Schüler-Daten, CRM-Anbindung, Theorie-Plattform-Integration.
8. **CTA:** `Anfrageflow-Check anfragen` → `/kontakt`

---

## 8. Tone of Voice — Do / Don't

### Tun
- Klar, direkt, deutsch — echte Umlaute.
- Outcome-orientiert: „mehr Direktanfragen", „weniger Plattformprovision".
- Konkret: Zahlen, Beispiele, Zeitangaben.
- Persönlich: „Sie reden direkt mit mir" — nicht „unser Team".
- Bescheiden bei Versprechen, hart bei Mechanik.

### Lassen
- „Revolutionieren mit KI", „bahnbrechend", „next-level".
- „AI Employee ersetzt".
- Vollmundige ROI-Zahlen ohne Annahmen.
- Englische Buzzword-Cluster ohne Übersetzung.
- Generische Stockfoto-Sprache („Wir glauben an Innovation").

### Sprache, die NICHT führen soll (intern)
- „Webdesign Agentur"
- „AI-Agentur"
- „Google Ads Betreuung" als isolierte Dienstleistung
- „SEO Consulting" ohne Buchungs-/Anfragebezug
- „Automatisierung" ohne konkreten Nutzen

### Sprache, die führen soll
- digitales Wachstumssystem
- lokale Kundengewinnung
- Website + Google + Werbung + Anfrageflow
- aus Sichtbarkeit werden Anfragen / Buchungen / Zahlungen
- AI als Verstärker und Entlastung

---

## 9. Navigation

**Empfohlene Hauptnavigation (oben):**
- Leistungen (Mega-Menü mit 5 Kategorien: Website & Sichtbarkeit / Google Ads & Nachfrage / Anfrage, Buchung & Zahlung / AI-ready & Automationen / Reviews & Trust)
- Branchen (FeWo / Fahrschule / Lokale Dienstleister / Vereine)
- Cases
- Über MyHiwi
- Kontakt

**Mobile:** Burger-Menü, Hover-Sub-Menüs werden Tap-Accordions.

---

## 10. Akzeptanz-Kriterien

Das Design ist freigabereif, wenn:

- [ ] Hero-H1 lautet wortwörtlich „Digitale Wachstumssysteme für lokale Unternehmen".
- [ ] „KI-Lösungen" ist KEINE eigene Säule mehr — AI taucht als Verstärker-Sektion und als Add-on auf.
- [ ] Es gibt 4 Kernbausteine (Sichtbarkeit / Nachfrage / Anfrage & Buchung / Zahlung & Verbindlichkeit), nicht 3.
- [ ] „Google Ads / Nachfrage" ist eine eigenständige Säule, nicht in „Sichtbarkeit" versteckt.
- [ ] Reviews & Trust ist als 5. Leistungskategorie sichtbar (z. B. in der Nav oder als Add-on-Karte).
- [ ] Die 3 Konzept-Pakete (Digital-Check / Sichtbarkeit & Anfrageflow / Wachstumssystem) sind klar getrennt vom detaillierten 4-Tier-Pricing.
- [ ] Verticals haben jeweils eigene Karte mit eigener CTA.
- [ ] Sonnenhof / Sherman / Formazin sind die 3 Proof-Cases.
- [ ] DSGVO + Made in Deutschland sind im Hero-Trust-Strip.
- [ ] Tone of Voice ist eingehalten (kein „revolutionieren", kein „AI-Employee").
- [ ] Brand-Farben Navy / Blue / Cyan + Inter/Poppins werden konsequent genutzt.
- [ ] Mobile-first: Hero und Bausteine funktionieren ab 360 px Breite.

---

## 11. Referenzen aus der bestehenden Codebase

Falls Claude Kontext aus dem aktuellen Code braucht:

- **Aktuelle Homepage:** `MyHiwi/Website/MyHiwi/app/page.tsx`
- **Tailwind-Theme:** `MyHiwi/Website/MyHiwi/tailwind.config.ts`
- **Brand-Assets:** `MyHiwi/Website/MyHiwi/Brand/` (Logos als SVG)
- **Components:** `MyHiwi/Website/MyHiwi/components/` (Footer, Navigation, shared/SectionReveal)
- **Strategischer Hintergrund:** `MyHiwi/Vault/wiki/domains/business-intelligence/` (research-radar + roadmap)
- **Source dieser Übergabe:** `MyHiwi/Website/MyHiwi/docs/homepage-hero-leistungsstruktur-2026-05-13.md`

---

## 12. Was Claude liefern soll

**Output-Format:** HTML mit Tailwind-Klassen (kein Custom-CSS, keine externen Bibliotheken außer Lucide-Icons). Pro Seite ein vollständiges, in sich geschlossenes HTML-Dokument als Artifact.

**Reihenfolge der Lieferung:**
1. Homepage (Sections 5.1 bis 5.8).
2. /fewo-direktbuchung.
3. /fahrschul-anfrageflow.

**Pro Seite mit:**
- Hero
- alle in dieser Übergabe spezifizierten Sektionen
- Footer-Stub
- Korrekte Semantik (1 H1, korrekte H2/H3-Hierarchie)
- Mobile-Layout funktioniert ab 360 px

**Nicht liefern:**
- Backend-Logik
- Tracking-Code
- Komplette Next.js-Projektstruktur

Wenn Claude an irgendeiner Stelle eine inhaltliche Entscheidung treffen muss, soll es die Optionen kurz benennen und eine Empfehlung geben — nicht still und heimlich entscheiden.
