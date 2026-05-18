# MyHiwi · Final Design-System Summary

**Stand: 2026-05-17**

---

## Ist das Design-System jetzt umsetzungsbereit?

**Ja.**

Die Designphase ist abgeschlossen. Folgende Artefakte liegen vor:

- **HTML-Designvorlage** mit allen Surfaces (`MyHiwi Redesign.html` + `app/` JSX-Dateien)
- **`design-system/DESIGN.md`** — Brand, Prinzipien, Farben, Typografie, Spacing, Motion, CTAs, Sprache
- **`design-system/tokens.json`** — Tokens direkt übersetzbar in Tailwind / CSS-Variablen
- **`design-system/components.md`** — Komponenten-Inventar mit Varianten, Tokens, Mobile-Verhalten, Verwendungsmatrix
- **`design-system/page-archetypes.md`** — 7 Seitentypen mit Section-Reihenfolge, Content- und CTA-Regeln
- **`design-system/implementation.md`** — Stack, Reihenfolge, Konventionen für Claude Code / Codex
- **`design-system/compliance.md`** — Claim-, DSGVO-, Sprachregeln

Damit hat ein Coding-Agent alles, um die Website zu bauen, **ohne weitere Designentscheidungen zu treffen.**

---

## Welche 5–10 Komponenten sind kritisch für MVP?

In Reihenfolge bauen:

1. **`<Container>` + `<Section>` + `<SectionMark>`** — Grid + Sektion-Eyebrow
2. **`<Header>` + `<Footer>`** — auf jeder Route
3. **`<CtaRow>`** mit `BtnPrimary` / `BtnGhost` / `BtnTertiary` — CTA-System
4. **`<MyHiwiMark>` + `<MyHiwiH>` + `<Reveal>`** — Brand + Scroll-Animation
5. **`<HomepageHero>`** mit `<InteractiveHeroSchema>` — erster Screen
6. **`<FeatureCard>`** — Vier-Bausteine + Service-Group
7. **`<ProofCard>`** mit `lead-spread` und `regular` Varianten
8. **`<OfferCard>`** mit `default` und `highlight` — Pakete und „Wo starten?"
9. **`<FAQAccordion>`** — Trust-Element auf 3 Seiten
10. **`<FinalCTASection>`** — letzte Sektion auf jeder Seite

Mit diesen 10 Komponenten + Layout-Wrapper kann die Homepage komplett gebaut werden.

---

## Welche Seiten sollten zuerst gebaut werden?

1. **Homepage `/`** — Pilotseite, alle Komponenten kommen einmal durch.
2. **`/cases/sonnenhof-herrsching`** — wichtigster Proof. Brauchen wir für Sales.
3. **`/leistungen`** — Systemlandkarte.
4. **`/digital-check`** — primärer Conversion-Flow.
5. **`/fewo`** — erste Vertical-LP, Calm-Voicing.
6. **`/cases`** + **`/leistungen/anfrage-buchung`** — sekundäre Seiten.

Erst danach: weitere Vertical-LPs (Fahrschule, Hotels), Blog, Über-uns-Detail.

---

## Welche Designentscheidungen sind jetzt fix?

- **Hauptclaim:** „Digitale Wachstumssysteme für lokale Unternehmen"
- **Stilrichtung:** Variant B (editorial, hochwertig, navy + blau + cyan, Bricolage + Inter Tight + JetBrains Mono)
- **Calm-Voicing für FeWo:** warmer Creme-Hintergrund + Instrument Serif als Accent — als Theme-Variante des gleichen Systems, kein eigener Stil
- **CTA-System:** Primär „Kostenlosen Digital-Check anfragen", Sekundär „Cases ansehen", Tertiär „Angebote ansehen" — verbindlich
- **5 Bausteine als Systemgliederung:** Sichtbarkeit, Nachfrage, Anfrage & Buchung, Zahlung & Verbindlichkeit, AI & Automation
- **3 Einstiege:** Klein anfangen (Digital-Check) · Gezielt loslegen (Sichtbarkeit & Anfrageflow) · Komplettes System (Wachstumssystem)
- **Personenname:** Denis Kaliberda · denis@myhiwi.de
- **Keine konkreten Preise** auf /leistungen — Vereinbarung im Erstgespräch (Ausnahme: FeWo „ab 349 € / Monat")
- **DSGVO-Wortlaut:** „DSGVO-bewusst, mit AVV und Anbieterübersicht projektbezogen"
- **Vorsichtige Sprache** bei nicht-belegten Effekten („beobachteter Effekt", „im Projekt sichtbar", „Ziel des Systems")
- **Stellvertretende Quotes** auf FeWo immer mit „sinngemäß"-Attribution und Note

---

## Welche Entscheidungen bleiben bewusst offen?

Diese Punkte sind **nicht** ungelöst, sondern bewusst aufs Erstgespräch / Go-Live-Vorbereitung verschoben:

1. **Genaue Pricing-Stufen** der drei Einstiege („Sichtbarkeit & Anfrageflow", „Wachstumssystem") — kommen aus dem Erstgespräch je Branche.
2. **Echte Kunden-Logos** (Trust-Strip) vs. Wordmark-Stil — Entscheidung nach Erlaubnis-Abfrage.
3. **Konkrete OG-Image-Variante** pro Seite — Vorlage steht, Inhalt kommt mit Copy-Finalisierung.
4. **Cookie-Banner-Variante** (Eigenbau vs. Cookiebot vs. Klaro) — Tech-Entscheidung, kein Designthema.
5. **Blog / Notizen-Sektion** — als später-Modul vorgesehen, nicht im MVP.
6. **Mehrsprachigkeit** (DE / EN) — wenn überhaupt, nach MVP.
7. **CRM-Integration** des Digital-Checks — startet mit E-Mail-Forward, später optional Notion / HubSpot / Eigenbau.

---

## Wichtigste Risiken vor Go-Live

| Risiko | Maßnahme |
|---|---|
| Sonnenhof-Zahlen werden bezweifelt | Tool-Exports als Belege bereithalten (SE Ranking + Anfrageflow-Tracking) |
| DSGVO-Beanstandung | AVV-Vorlage greifbar, Anbieterübersicht projektbezogen, Cookie-Banner vor Live |
| Fake-Testimonial-Vorwurf | Stellvertreter-Note prominent über QuoteCarousel, vor Live: echte Quotes einholen |
| Mobile-Performance schwach | Lighthouse vor Live > 95, Fonts preloaded, keine schweren Animationen |
| „Klingt wie eine Agentur" | Founder-Block prominent, Microcopy persönlich, kein Stockfoto |

---

## Was Denis als Nächstes liefern muss

Wenn diese Punkte da sind, kann live gegangen werden:

1. **Sonnenhof-Foto / Screenshot** der neuen Website
2. **Eigenes Portrait** (Denis, 4:5-Format)
3. **Schriftliche Quote-Erlaubnis** von Sonnenhof (Klaus Lukoschek)
4. **AVV-PDF** als Vorlage
5. **Telefonnummer** (oder Entscheidung: nur E-Mail)
6. **Cookie-Banner-Strategie** (Selbstbau / Tool)
7. **Pricing-Entscheidung** ob konkrete Preise auf /leistungen oder nicht
8. **Datenschutzerklärung + Impressum** (existieren wahrscheinlich schon im alten Stack)

---

## Closing

Die Designphase ist abgeschlossen. Ab hier ist es eine **Umsetzungsfrage**, keine Designfrage mehr.

Coding-Agents (Claude Code / Codex) bauen direkt nach:

- `design-system/DESIGN.md` (Stil-Regeln)
- `design-system/tokens.json` (Tokens)
- `design-system/components.md` (Komponenten)
- `design-system/page-archetypes.md` (Seitenstruktur)
- `design-system/implementation.md` (Stack + Reihenfolge)
- `design-system/compliance.md` (Claims + Recht)

Die HTML-Designvorlage (`MyHiwi Redesign.html`) ist die visuelle Referenz — sie zeigt, wie die Komponenten zusammenwirken, aber die Spezifikation oben ist die verbindliche Quelle.

---

**Designphase abgeschlossen. Nächster Schritt: Code.**
