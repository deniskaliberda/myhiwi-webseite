# MyHiwi · DESIGN.md

> Verbindliche Designspezifikation. Coding-Agents bauen neue Seiten **nach** diesem Dokument, nicht freischwebend.

---

## 1. Brand Overview

**MyHiwi** baut digitale Wachstumssysteme für lokale Unternehmen. Website, Google-Sichtbarkeit, Werbung, Anfrage-/Buchungsflows und Zahlungen werden zu einem zusammenhängenden System verbunden — damit aus Sichtbarkeit echte Kunden, Buchungen und Zahlungen werden.

- **Marke:** MyHiwi (Brand der Kaliberda Digital Intelligence UG)
- **Domain:** myhiwi.de
- **Sprache:** Deutsch (echte Umlaute: ä/ö/ü/ß, niemals ae/oe/ue)
- **Standorte:** Ahrensfelde bei Berlin · Ammersee/Starnberg (Bayern)
- **Tech-Stack-Ziel:** Next.js 14 App Router · Tailwind · Framer Motion · Lucide-Icons · Vercel
- **Operator:** Denis Kaliberda (Gründer, einziger Ansprechpartner)

### Was wir verkaufen
- Mehr planbare Anfragen, Buchungen, Termine.
- Weniger Plattformabhängigkeit (Booking.com & Co.).
- Schnellere Reaktion auf Interessenten.
- Bessere Google-/Review-/Trust-Signale.
- AI-ready Strukturen als Qualitätsmerkmal — nicht als Hauptprodukt.

### Was wir NICHT verkaufen
- „AI-Agentur", „AI Employee".
- „Webdesign Agentur" als isolierte Dienstleistung.
- „GEO/LLMO/AI Search Consulting" als abstraktes Produkt.
- Generische „Wir revolutionieren mit KI"-Sprache.

---

## 2. Designprinzipien

Diese fünf Prinzipien gehen jeder Designentscheidung voraus. Wenn ein Modul gegen eines davon verstößt, ist das Modul falsch — nicht das Prinzip.

1. **System statt Einzelteile.** Jede Komponente zeigt, wie sie ins Ganze passt (Sichtbarkeit → Nachfrage → Anfrage → Zahlung → AI).
2. **Persönlich, nicht skaliert.** „Sie reden mit mir." Keine Agentur-Distanz, keine Account-Manager-Sprache.
3. **Vorsichtig mit Zahlen.** Belegte Werte stehen als Zahl. Beobachtete Effekte stehen als Satz. Nichts dazwischen.
4. **Editorial, nicht Funnel.** Mono-Eyebrows mit Hairlines, große Bricolage-Headlines mit Italic-Akzenten, Inhalt liest sich wie ein Magazin — nicht wie eine Sales-Page.
5. **Ruhig.** Wenig Farbe, viel Weißraum, eine starke Akzentfarbe. Kein Neon, kein Glanz, keine Stockfoto-Welt.

---

## 3. Farbpalette

### Brand-Farben (Atlantik-Scheme — Default)

| Token | Hex | Verwendung |
|---|---|---|
| `ink-950` | `#0F172A` | Headlines, dunkle Sektionen, primärer Button-Hintergrund |
| `ink-900` | `#0F172A` | identisch ink-950 (Konsistenz-Alias) |
| `ink-800` | `#1E293B` | dunkle Karten-Hintergründe |
| `ink-700` | `#334155` | reserviert |
| `blue-600` | `#1E40AF` | Akzent-Hover, Logo-Gradient unten |
| `blue-500` | `#2563EB` | **Akzent-Primary** — Logo, Links, Italic-Highlights |
| `blue-400` | `#3B82F6` | subtile Highlights |
| `cyan-500` | `#06B6D4` | **Glow** — sekundärer Akzent, Erfolg-Status, Check-Marks auf Dunkel |
| `paper` | `#FFFFFF` | Hauptflächen (Helldark) |
| `subtle` | `#F8FAFC` | Sektion-Trenner, Card-Backs auf Papier |
| `muted` | `#475569` | sekundärer Text, Captions |
| `border` | `rgba(15,23,42,0.10)` | 1-Pixel-Hairlines, Card-Borders |
| `danger` | `#DC2626` | Form-Errors, kritische Audit-Tags |
| `warn` | `#F59E0B` | mittlere Audit-Tags |
| `success` | `#10B981` | optionaler grüner Glow auf hellem Hintergrund |

### Calm-Voicing (für FeWo-/Unterkunft-Subdomain)

Wärmeres Pendant — gleiches System, anderer Materialcharakter. Im Code als zweite Scheme-Variante.

| Token | Hex |
|---|---|
| `paper` | `#F6F2EA` (warmes Creme) |
| `subtle` | `#EDE7DA` (Sand) |
| `ink` | `#1F2A2A` (tiefes Schiefer-Grün) |
| `muted` | `#5A5E55` |
| `border` | `rgba(31,42,42,0.12)` |
| `accent` | `shade(blue-500, -10%)` — leicht runtergetont |

### Semantische Rollen

Diese Rollen sind das einzige Vokabular, das Components nutzen dürfen. **Nicht** direkt Hex-Werte oder Farbnamen.

```
--color-background     → paper
--color-surface        → subtle (Sektion-Trenner)
--color-card           → paper auf subtle-Sektion, subtle auf paper-Sektion
--color-text-primary   → ink
--color-text-secondary → muted
--color-text-on-dark   → #FFFFFF
--color-accent         → blue-500
--color-accent-hover   → blue-600
--color-accent-soft    → blue-500 @ 10–20% Alpha (Hover-Backgrounds, Tag-Pills)
--color-glow           → cyan-500
--color-border         → border
--color-divider        → border
--color-danger         → danger
--color-warn           → warn
```

### Gradient-Signaturen

- **Final-CTA-Sektionen:** `linear-gradient(135deg, ink, shade(accent, -35%))` mit `radial-gradient(60% 100% at 50% 100%, glow @ 55% alpha, transparent 70%)` als Overlay.
- **Akzent-Strip:** `linear-gradient(90deg, accent, glow)` — für Progress-Bars, dünne Banner.
- **Schema-Background:** `linear-gradient(180deg, paper, subtle)` — Hero-Schema, Cards mit etwas Tiefe.

---

## 4. Typografie

### Fonts

| Rolle | Font | Variable |
|---|---|---|
| Display (Headlines, Stats) | **Bricolage Grotesque** (variable, opsz 12..96) | `--font-display` |
| Body | **Inter Tight** | `--font-body` |
| Mono / Eyebrows | **JetBrains Mono** | `--font-mono` |
| Calm-Editorial-Akzent | **Instrument Serif** (italic) | `--font-serif-accent` (nur FeWo-LP und ähnliche „ruhige" Surfaces) |

Laden via `next/font/google` mit Subset `latin-ext`.

### Typografie-Skala

| Token | Größe | Line-Height | Weight | Letter-Spacing | Wo? |
|---|---|---|---|---|---|
| `display-1` | 96px (Mobile 52px) | 1.02 | 800 | -0.035em | Hero H1 |
| `display-2` | 72px (Mobile 44px) | 1.04 | 700 | -0.035em | Section H2 groß |
| `display-3` | 58px (Mobile 36px) | 1.05 | 700 | -0.03em | Section H2 |
| `display-4` | 40px (Mobile 28px) | 1.08 | 700 | -0.025em | Section H3 |
| `display-5` | 24px (Mobile 22px) | 1.15 | 700 | -0.02em | Card-Headline |
| `body-large` | 21px (Mobile 18px) | 1.5 | 400 | — | Hero-Subline |
| `body-medium` | 17px (Mobile 16px) | 1.6 | 400 | — | Standard-Paragraph |
| `body-small` | 14.5px (Mobile 14px) | 1.55 | 500 | — | Cards, Karten-Body |
| `body-xs` | 13px (Mobile 13px) | 1.5 | 400 | — | Captions, Footnoten |
| `label-mono` | 11px (Mobile 11px) | 1.0 | 600 | 0.18em uppercase | Eyebrows, Section-Marker |
| `label-mono-sm` | 10px | 1.0 | 600 | 0.14em uppercase | Mini-Tags, Status-Pills |
| `button` | 15–16px | 1.0 | 700 | -0.005em | Primary-CTA |
| `button-sm` | 14px | 1.0 | 600 | — | Ghost / Tertiär |

### Italic-Highlight-Pattern

In Headlines wird **ein Wort** mit Bricolage Italic + Accent-Color hervorgehoben:

```jsx
<h2>
  Vier Bausteine. <em style={{ fontStyle: "italic", fontVariationSettings: '"opsz" 96, "wght" 400', color: accent }}>Ein</em> Wachstumssystem.
</h2>
```

Regel: **max. 1 Italic-Highlight pro Headline**. Mehr macht Headlines unruhig.

### Mobile-Regeln

- Body-Schrift **≥ 15px** für Fließtext, **≥ 13px** für Captions.
- Display-1 maximal **52px** auf 390px-Breite.
- Mono-Eyebrows **≥ 11px** (vorher waren 10px im Mobile-Stack, das war zu klein — korrigiert).
- Hit-Targets für interaktive Elemente **≥ 44px** Höhe.

---

## 5. Spacing-System

8px-Basis, halbe Schritte für feine Details.

| Token | Wert | Verwendung |
|---|---|---|
| `space-1` | 4px | Icon-zu-Label-Gap |
| `space-2` | 8px | enge Stack-Lücken |
| `space-3` | 12px | Card-internes Spacing |
| `space-4` | 16px | Standard-Gap zwischen kleinen Elementen |
| `space-5` | 22px | Block-Spacing intern |
| `space-6` | 32px | Sektion-internes Spacing |
| `space-7` | 48px | Gap zwischen Sektionen klein |
| `space-8` | 64px | horizontaler Container-Padding |
| `space-9` | 100px | vertikales Sektion-Padding klein |
| `space-10` | 120px | vertikales Sektion-Padding groß |
| `space-11` | 140px | vertikales Sektion-Padding Final-CTA |

**Mobile:** halbiere alle vertikalen Sektions-Spacings (`space-9` → 56px, `space-10` → 64px). Horizontal-Padding immer **20px** auf Mobile.

---

## 6. Grid & Layout

- **Container max-width:** `1240px`
- **Container padding:** 64px (Desktop) / 20px (Mobile)
- **Section-Header-Breite** (Headline + Lead): max-width 760px / 64ch
- **Body-Spalte-Breite:** max-width 64ch für lange Texte

### Grid-Patterns

- **2-Spalter mit Lead-Side:** `1.1fr 0.9fr` (Hero, Editorial-Splits)
- **4-Bausteine-Grid:** 4 Spalten Desktop, 2×2 Tablet, gestapelt Mobile
- **3er-Karten-Row:** 3 Spalten Desktop, gestapelt Mobile (Pakete, Cases-Sekundär, Blog)
- **Hairline-Listen:** 1-Spalter, jedes Item mit Top-Border 1px

### Breakpoints

| Token | Wert | Notiz |
|---|---|---|
| `mobile` | 0–768px | Stack-Layout, einzeilige Hero |
| `tablet` | 768–1024px | 2×2-Grids, kompaktere Spacings |
| `desktop` | ≥ 1024px | Volle Layouts |
| `wide` | ≥ 1440px | Container bleibt 1240px, mehr Luft links/rechts |

---

## 7. Border Radius

| Token | Wert | Verwendung |
|---|---|---|
| `radius-sm` | 4px | Buttons (rectangular), Form-Inputs |
| `radius-md` | 6–8px | Cards, Form-Felder, kleine Module |
| `radius-lg` | 10–14px | größere Cards, Browser-Mockup |
| `radius-xl` | 16–18px | Hero-Plates, Diagramm-Container |
| `radius-pill` | 999px | Pills, Status-Tags, Final-CTA-Button |

### Regel
- Primärer CTA **ohne** Pill-Radius (radius-sm).
- Final-CTA-Button (Sektion-Ende) **mit** Pill-Radius — als rituelle Wiederholung.
- Status-Pills + Tags **immer** Pill-Radius.

---

## 8. Shadows / Elevation

Sparsam einsetzen. Drei Stufen, mehr nicht.

| Token | Wert |
|---|---|
| `shadow-card` | `0 1px 0 rgba(15,23,42,0.04)` (1px Sub-Shadow für Container auf Subtle) |
| `shadow-hover` | `0 12px 28px -10px rgba(37,99,235,0.30)` (Card-Hover, Form-Focus) |
| `shadow-cta` | `0 14px 30px -14px rgba(37,99,235,0.66)` (Primary-Button Glow) |
| `shadow-hero` | `0 30px 80px -30px rgba(15,23,42,0.30)` (Hero-Mockups, Browser-Plates) |

### Regel
- Keine Schatten auf Text.
- Keine Schatten auf Sektion-Backgrounds.
- Final-CTA-Button trägt `shadow-cta` mit Akzentfarbe — alle anderen Schatten sind neutral.

---

## 9. Icons

- **Stil:** Single-weight Stroke (1.6px), `lucide-react` als Library.
- **Größen:** 14, 16, 18, 22, 24px (Standard 18 Body, 22 Card-Header).
- **Farbe:** `currentColor` (erbt vom Eltern-Element).
- **Verbot:** keine Filled-Icons, kein Mix aus Stroke + Filled in einer Reihe.

### Häufige Icons (alle aus Lucide)
- `Check` — Häkchen für Trust-Bullets, FAQ
- `ArrowRight` — Standard-CTA-Pfeil
- `Globe` — Sichtbarkeit-Baustein
- `TrendingUp` / `LineChart` — Nachfrage-Baustein
- `MessageSquare` / `CalendarClock` — Anfrage-Baustein
- `CreditCard` — Zahlung-Baustein
- `Sparkles` / `Bot` — AI-Baustein (sparsam)

---

## 10. Bildsprache

Wir haben momentan **keine echten Fotos**. Bis sie da sind:

- **Mockup-Plates** mit Gradient (`linear-gradient(135deg, ink, accent 55%, glow)`) plus subtile horizontale Streifen-Textur (1px alle 12px, 4% Opacity).
- **Browser-Mockup** mit Domain-Pill und stilisiertem Page-Body.
- **Phone-Frame** mit Notch und Sticky-Header für Anfrageflow-Demos.
- **Portrait-Platzhalter** für Founder-Module: warmer Creme-Gradient mit Brauntönen, freundliche Silhouette in SVG, Italic-Signatur „Denis" unten rechts.

**Regel:** Wenn ein echtes Foto da ist, ersetzt es den Platzhalter 1:1 (gleiche Aspect-Ratio, gleiche Caption-Struktur). Kein Stockfoto.

---

## 11. Motion / Interaction

### Reveal-Animationen
- **Trigger:** IntersectionObserver, `threshold: 0.15`.
- **Default:** `rise` — `translateY(28px) → 0`, `opacity 0 → 1`, `transition: opacity 0.9s + transform 0.9s cubic-bezier(0.2, 0.7, 0.2, 1)`.
- **Stagger:** `delay: index * 80ms` innerhalb einer Sektion, maximal 320ms gesamt.
- **`prefers-reduced-motion`:** komplett deaktivieren, alle Elemente sofort sichtbar.

### Hover-States
- **Cards:** `translateY(-2px)` + `shadow-hover` + Border wechselt auf `accent`.
- **Buttons:** keine Bewegung, nur Hintergrund-Shift (Primary: ink → blue-600).
- **Links:** unterstrichene Tertiär-Links bekommen `border-bottom-color: blue-600`.

### Form-Focus
- Border wechselt auf `accent`.
- Optional: Outline-Glow `box-shadow: 0 0 0 3px rgba(37,99,235,0.10)`.

### Verboten
- Keine Page-Load-Splash-Animationen.
- Keine Auto-Carousels.
- Keine Parallax.
- Keine Scroll-Snap-Effekte ohne expliziten Bedarf.

---

## 12. CTA-System

**Verbindlich für alle Seiten.** Texte nicht improvisieren.

### Hauptseiten (Homepage, /cases, /leistungen, /leistungen/[slug])
| Stufe | Text |
|---|---|
| Primär | **Kostenlosen Digital-Check anfragen** |
| Sekundär | **Cases ansehen** |
| Tertiär | **Angebote ansehen** |

### Branchen-LPs (FeWo, Fahrschule, etc.)
| Stufe | Text |
|---|---|
| Primär | **Kostenlosen Direktanfragen-Check anfragen** (FeWo) / **Anfrageflow-Check anfragen** (Fahrschule) |
| Sekundär | **Wie wir arbeiten** |
| Tertiär | — |
| Microcopy | `kostenlos · unverbindlich · 20 Minuten · speziell für [Branche]` |

### Visuelle Hierarchie
- **Primär:** ink-Hintergrund, weißer Text, `shadow-cta` mit accent-tint, Padding 18×26, font-weight 700, font-size 16.
- **Sekundär:** transparent, ink-Border, ink-Text, Padding 16–18×22, font-weight 600, font-size 14–15.
- **Tertiär:** kein Hintergrund, ink-Text, `border-bottom: 1px solid accent`, padding-bottom 4px.

### Pro Sektion
- **Max. 1 primärer CTA.**
- Sekundär + Tertiär nur zusätzlich, wenn die Seite mehrere Ausstiegspfade braucht (Homepage-Hero, Final-CTA).
- Mittelkarten in Pricing-Modulen (z. B. „Sichtbarkeit & Anfrageflow") **müssen** wortgleich den Primary-CTA-Text nutzen.

---

## 13. Tonalität / Sprache

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

### Führungswortschatz (positiv)
- digitales Wachstumssystem
- lokale Kundengewinnung
- Website + Google + Werbung + Anfrageflow
- aus Sichtbarkeit werden Anfragen / Buchungen / Zahlungen
- AI als Verstärker und Entlastung

### Verbotswortschatz
- „Webdesign-Agentur" (impliziert isoliertes Produkt)
- „AI-Agentur"
- „Google-Ads-Betreuung" als isolierte Dienstleistung
- „SEO-Consulting" ohne Buchungs-/Anfragebezug
- „Automatisierung" ohne konkreten Nutzen

---

## 14. Do's & Don'ts

### Do
- ✅ Tokens aus `tokens.json` nutzen, keine Magic Numbers.
- ✅ Components aus `components.md` wiederverwenden.
- ✅ Pro Sektion 1 SectionMark (Mono-Eyebrow mit Nummer + Hairline + Label).
- ✅ Italic-Highlight in jeder Headline maximal 1×.
- ✅ Echte Umlaute (ä/ö/ü/ß).
- ✅ Vorsichtige Claims (siehe `compliance.md`).
- ✅ Mobile-first denken, dann Desktop ergänzen.
- ✅ FAQ-Antworten als ausgeschriebene Sätze, keine Stichpunkte.

### Don't
- ❌ Keine neuen Farben außerhalb der Palette.
- ❌ Keine neuen Fonts oder Font-Weights.
- ❌ Keine neuen Komponenten ohne Eintrag in `components.md`.
- ❌ Keine Stockfotos.
- ❌ Keine erfundenen Zahlen oder Testimonials.
- ❌ Keine pauschalen DSGVO-Garantien.
- ❌ Keine Score-Anzeigen oder Funnel-Sprache im Digital-Check.
- ❌ Keine animierten Hero-Loops oder Parallax.
- ❌ Keine bunten Highlight-Wörter — nur **ein** Accent (`blue-500`) für Italic-Highlights und Links.

---

## 15. Section-Marker-Pattern

Jede Hauptsektion auf jeder Seite beginnt mit einem **SectionMark**:

```
[NN]  ─────────  LABEL
 │       │           │
Mono   Hairline    Mono-uppercase
fett    24–28px    18%-tracking
```

- Nummer ist sektion-spezifisch (Homepage 00–08, Cases 01, Leistungen A–E, etc.).
- Auf dunklem Hintergrund: Akzent-Farbe + dünner Glow-Strich.
- Auf hellem Hintergrund: muted-Farbe (Akzent-Variante nur für Hero und Final-CTA).

---

## 16. Anhang: Render-Reihenfolge für jede Sektion

Standard-Struktur, die ein Coding-Agent für jede neue Sektion einhalten soll:

1. **SectionMark** (Eyebrow)
2. **H2 Display-Headline** (mit ggf. einem Italic-Highlight)
3. **Lead-Paragraph** (optional, body-large oder body-medium, max-width 64ch)
4. **Hauptinhalt** (Liste, Grid, Karte — je nach Sektion-Typ)
5. **Bei Bedarf: Footer-Zeile** (Disclaimer, kleiner Link, Mono-Caption)

Diese Reihenfolge gilt auch in der mobilen Stapelung.

---

**Ende DESIGN.md.** Für Tokens siehe `tokens.json`, für Komponenten `components.md`, für Seitentypen `page-archetypes.md`, für Implementierung `implementation.md`, für Sprach-/Claim-Regeln `compliance.md`.
