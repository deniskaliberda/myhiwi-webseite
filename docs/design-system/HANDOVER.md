# MyHiwi · Handover für Claude Code

**Stand: 2026-05-17 · Final**

> Du bist ein Coding-Agent. Du baust die MyHiwi-Website nach dem Design-System in diesem Verzeichnis. Diese Datei ist dein Einstiegspunkt.

---

## Was du tun sollst

Baue die MyHiwi-Website als Next.js-14-App-Router-Projekt nach den Regeln, Tokens und Komponenten in `design-system/`. Visuelle Referenz ist `MyHiwi Redesign.html` (mit `app/` JSX-Quelldateien).

## Was du NICHT tun sollst

- Keine neuen Designvarianten erfinden.
- Keine neuen Farben, Fonts oder Komponenten ohne Eintrag in `design-system/components.md`.
- Keine harten Claims ohne Beleg (siehe `design-system/compliance.md`).
- Keine Stockfotos.
- Keine alternativen Stilrichtungen.

---

## Lies in dieser Reihenfolge

1. **`design-system/SUMMARY.md`** — was ist fix, was ist kritisch, was kommt zuerst.
2. **`design-system/DESIGN.md`** — Stil-Regeln, Farben, Typo, Spacing, Motion, CTAs, Sprache.
3. **`design-system/tokens.json`** — Tokens für Tailwind-Config + CSS-Variablen.
4. **`design-system/components.md`** — Komponenten-Inventar mit Varianten und Verwendungsmatrix.
5. **`design-system/page-archetypes.md`** — Section-Reihenfolge pro Seitentyp.
6. **`design-system/implementation.md`** — Stack, Reihenfolge, Konventionen.
7. **`design-system/compliance.md`** — Claim-, DSGVO-, Sprachregeln.

## Bau-Reihenfolge

| Phase | Inhalt | Dauer |
|---|---|---|
| 1 | Tokens → Tailwind-Theme + globals.css | 1 Tag |
| 2 | Layout-Atomics (Container, Section, SectionMark, MyHiwiMark, Reveal) | 1 Tag |
| 3 | Globale Komponenten (Header, Footer, CtaRow, SystemPill, FinalCTASection) | 1–2 Tage |
| 4 | Homepage (`/`) als Pilotseite | 2 Tage |
| 5 | `/cases`, `/cases/sonnenhof-herrsching`, `/leistungen`, `/leistungen/anfrage-buchung` | 3–4 Tage |
| 6 | `/fewo` (Calm-Voicing via `data-theme`) | 2 Tage |
| 7 | `/digital-check` Multi-Step-Flow | 2 Tage |
| 8 | SEO, OG-Images, Sitemap, Lighthouse-Pass | 1 Tag |

**Gesamtschätzung: 11–13 Tage** für einen Solo-Developer.

---

## Tech-Stack (verbindlich)

- Next.js 14 App Router
- TypeScript
- Tailwind CSS + CSS-Variablen
- `lucide-react` für Icons (Stroke-only)
- `next/font/google` für Bricolage Grotesque, Inter Tight, JetBrains Mono, Instrument Serif
- Framer Motion **nur** für die `Reveal`-Komponente
- React Hook Form + Zod für den Digital-Check
- Resend für Form-Submit-E-Mails
- Vercel als Hosting

---

## Critical-Path Components (MVP)

In dieser Reihenfolge bauen — sie reichen für die Homepage:

1. `<Container>` · `<Section>` · `<SectionMark>`
2. `<Header>` · `<Footer>`
3. `<CtaRow>` mit `<BtnPrimary>` · `<BtnGhost>` · `<BtnTertiary>`
4. `<MyHiwiMark>` · `<MyHiwiH>` · `<Reveal>`
5. `<HomepageHero>` mit `<InteractiveHeroSchema>`
6. `<FeatureCard>` (Vier-Bausteine)
7. `<ProofCard>` (Lead-Spread + Regular)
8. `<OfferCard>` (Default + Highlight)
9. `<FAQAccordion>`
10. `<FinalCTASection>`

---

## CTA-System (verbindlich)

**Hauptseiten:**
- Primär: `Kostenlosen Digital-Check anfragen`
- Sekundär: `Cases ansehen`
- Tertiär: `Angebote ansehen`

**Branchen-LPs:**
- Primär: `Kostenlosen Direktanfragen-Check anfragen` (FeWo) / `Anfrageflow-Check anfragen` (Fahrschule)
- Sekundär: `Wie wir arbeiten`
- Microcopy: `kostenlos · unverbindlich · 20 Minuten · speziell für [Branche]`

**Nicht improvisieren.**

---

## Identität

- **Gründer:** Denis Kaliberda
- **Mail:** denis@myhiwi.de
- **Standorte:** Ahrensfelde bei Berlin + Ammersee, Bayern
- **Brand:** Kaliberda Digital Intelligence UG
- **Domain:** myhiwi.de

---

## Vor Go-Live (siehe `design-system/compliance.md` für volle Liste)

- Sonnenhof-Foto + Screenshot der neuen Website
- Founder-Portrait (Denis, 4:5)
- Schriftliche Quote-Erlaubnis (Klaus Lukoschek)
- AVV-PDF als Vorlage
- Telefonnummer-Entscheidung (echt oder nur E-Mail)
- Cookie-Banner-Strategie
- Datenschutzerklärung + Impressum aktualisiert

---

## Visuelle Referenz

`MyHiwi Redesign.html` öffnet die komplette Designvorlage. Schau dir an:

- **Surface 01 · Homepage Desktop** — alle Komponenten einmal durch
- **Surface 02 · Homepage Mobile** — 390px-Stack
- **Surface 03 · FeWo Calm** — Calm-Voicing als zweites Theme
- **Surface 04 · Digital-Check** — Mobile + Desktop Flow + Fehlerzustände
- **Surface 05–08 · Cases + Leistungen** — Seitentypen
- **Surface 09 · Component Board** — Token-Übersicht

Die Vorlage ist **visuelle Referenz**, nicht Production-Code. Halte dich an `design-system/` für die finale Implementierung.

---

**Designphase abgeschlossen. Viel Erfolg beim Bauen.**
