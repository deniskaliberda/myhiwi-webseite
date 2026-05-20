---
name: MyHiwi
display-name: MyHiwi — Digitale Wachstumssysteme für lokale Unternehmen
version: 1.0.0
status: canonical
spec: https://stitch.withgoogle.com/docs/design-md/format/
owner: Denis Kaliberda (Kaliberda Digital Intelligence UG)
last-updated: 2026-05-17

source-of-truth-for:
  - Next.js 14 App-Router build of myhiwi.de
  - Claude Code / Codex agent runs in this repo
  - Tailwind config + globals.css
  - OG-Image / opengraph-image.tsx
  - Ad creative + slide-deck composings derived from the brand

derived-from:
  - docs/design-system/DESIGN.md
  - docs/design-system/tokens.json
  - docs/design-system/components.md
  - docs/design-system/page-archetypes.md
  - docs/design-system/implementation.md
  - docs/design-system/compliance.md
  - docs/design-system/HANDOVER.md

deep-source: docs/design-system/

tokens:
  color:
    ink:
      "950": "#0F172A"
      "900": "#0F172A"
      "800": "#1E293B"
      "700": "#334155"
    blue:
      "400": "#3B82F6"
      "500": "#2563EB"
      "600": "#1E40AF"
    cyan:
      "500": "#06B6D4"
    paper: "#FFFFFF"
    subtle: "#F8FAFC"
    muted: "#475569"
    border: "rgba(15,23,42,0.10)"
    danger: "#DC2626"
    warn: "#F59E0B"
    success: "#10B981"
    calm:
      paper: "#F6F2EA"
      subtle: "#EDE7DA"
      ink: "#1F2A2A"
      muted: "#5A5E55"
      border: "rgba(31,42,42,0.12)"
      portraitWarm1: "#F5EDE0"
      portraitWarm2: "#D4B896"
    semantic:
      background: "{color.paper}"
      surface: "{color.subtle}"
      card: "{color.paper}"
      textPrimary: "{color.ink.950}"
      textSecondary: "{color.muted}"
      textOnDark: "#FFFFFF"
      accent: "{color.blue.500}"
      accentHover: "{color.blue.600}"
      accentSoft: "rgba(37,99,235,0.10)"
      glow: "{color.cyan.500}"
      divider: "{color.border}"
      danger: "{color.danger}"

  typography:
    fontFamily:
      display: "'Bricolage Grotesque', system-ui, sans-serif"
      body: "'Inter Tight', system-ui, sans-serif"
      mono: "'JetBrains Mono', ui-monospace, monospace"
      serifAccent: "'Instrument Serif', Georgia, serif"
    scale:
      display1: "96px"
      display1Mobile: "52px"
      display2: "72px"
      display2Mobile: "44px"
      display3: "58px"
      display3Mobile: "36px"
      display4: "40px"
      display4Mobile: "28px"
      display5: "24px"
      display5Mobile: "22px"
      bodyLarge: "21px"
      bodyLargeMobile: "18px"
      bodyMedium: "17px"
      bodyMediumMobile: "16px"
      bodySmall: "14.5px"
      bodySmallMobile: "14px"
      bodyXs: "13px"
      labelMono: "11px"
      labelMonoSm: "10px"
      button: "16px"
      buttonSm: "14px"
    weight:
      regular: 400
      medium: 500
      semibold: 600
      bold: 700
      extrabold: 800
    line-height:
      display: 1.04
      displayTight: 0.98
      body: 1.6
      bodyTight: 1.5
      label: 1.0
    letter-spacing:
      displayTight: "-0.035em"
      display: "-0.025em"
      body: "0"
      labelMono: "0.18em"

  dimension:
    radius:
      sm: "4px"
      md: "8px"
      lg: "12px"
      xl: "16px"
      pill: "999px"
    spacing:
      "1": "4px"
      "2": "8px"
      "3": "12px"
      "4": "16px"
      "5": "22px"
      "6": "32px"
      "7": "48px"
      "8": "64px"
      "9": "100px"
      "10": "120px"
      "11": "140px"
    spacingMobile:
      sectionVerticalSmall: "56px"
      sectionVerticalLarge: "64px"
      containerHorizontal: "20px"
    container:
      maxWidth: "1240px"
      paddingDesktop: "64px"
      paddingMobile: "20px"
      narrowText: "64ch"
    breakpoint:
      mobile: "0px"
      tabletMin: "768px"
      desktopMin: "1024px"
      wideMin: "1440px"

  shadow:
    card: "0 1px 0 rgba(15,23,42,0.04)"
    hover: "0 12px 28px -10px rgba(37,99,235,0.30)"
    cta: "0 14px 30px -14px rgba(37,99,235,0.66)"
    hero: "0 30px 80px -30px rgba(15,23,42,0.30)"

  motion:
    duration:
      fast: "0.2s"
      medium: "0.35s"
      slow: "0.9s"
    easing:
      default: "cubic-bezier(0.2, 0.7, 0.2, 1)"
    stagger: "80ms"
    revealRise:
      from: "translateY(28px)"
      to: "translateY(0)"
      fadeFrom: 0
      fadeTo: 1
---

# MyHiwi — DESIGN.md

> Verbindliche Designspezifikation. Coding-Agents bauen neue Seiten **nach** diesem Dokument, nicht freischwebend. Dieses File ist das Repo-Root-Token-Backbone. Die ausführliche Quelle liegt unter [`docs/design-system/`](./docs/design-system/) — Einstieg dort: [`HANDOVER.md`](./docs/design-system/HANDOVER.md).

## 1. Overview

**Brand essence in 1 sentence:** MyHiwi baut digitale Wachstumssysteme für lokale Unternehmen — Website, Google-Sichtbarkeit, Werbung, Anfrage-/Buchungsflows und Zahlungen als ein zusammenhängendes System, damit aus Sichtbarkeit echte Kunden, Buchungen und Zahlungen werden.

**Positioning anchors:** Stripe (klar, ruhig, editorial), Linear (Mono-Eyebrows, Hairline-Strukturen), Vercel (Bricolage-Italic-Highlights, dunkle Final-CTAs), Cal.com (Trust durch Reduktion), Apple Newsroom (Editorial-Splits statt Funnel-Sales).

**Anti-positioning:** Generische „AI-Agency"-Sites mit Lottie-Loops, Tailwind-Indigo + Trust-Gradient-Klischees, Webflow-Default-Templates, „Wir revolutionieren mit KI"-Funnel-Pages, Stockfoto-Welten, Carousel-Hero mit Auto-Rotate.

**Voice & tone:** Editorial, persönlich, ruhig. Anrede: **Sie**. Sprache: **Deutsch** mit echten Umlauten (ä/ö/ü/ß — nie ae/oe/ue). Vorsichtig bei Versprechen, hart bei Mechanik. Persönlich („Sie reden direkt mit mir") statt Agentur-Distanz.

**Industry:** Marketing-/Service-Site einer Digital-Agentur für lokale KMU (FeWo, Fahrschule, Sport, Handwerk, Hotel, Anwalt, Medizin).

**Was wir verkaufen:** mehr planbare Anfragen, Buchungen und Termine; weniger Plattformabhängigkeit; schnellere Reaktion auf Interessenten; bessere Google-/Review-/Trust-Signale; AI-ready Strukturen als Qualitätsmerkmal — nicht als Hauptprodukt.

**Was wir NICHT verkaufen:** „AI-Agentur", „AI Employee", „Webdesign-Agentur" als isolierte Dienstleistung, „GEO/LLMO/AI Search Consulting" als abstraktes Produkt.

**Fünf Prinzipien** (gehen jeder Designentscheidung voraus):

1. **System statt Einzelteile.** Jede Komponente zeigt, wie sie ins Ganze passt (Sichtbarkeit → Nachfrage → Anfrage → Zahlung → AI).
2. **Persönlich, nicht skaliert.** „Sie reden mit mir." Keine Agentur-Distanz, keine Account-Manager-Sprache.
3. **Vorsichtig mit Zahlen.** Belegte Werte als Zahl. Beobachtete Effekte als Satz. Nichts dazwischen.
4. **Editorial, nicht Funnel.** Mono-Eyebrows mit Hairlines, große Bricolage-Headlines mit Italic-Akzenten, Inhalt liest sich wie ein Magazin — nicht wie eine Sales-Page.
5. **Ruhig.** Wenig Farbe, viel Weißraum, eine starke Akzentfarbe. Kein Neon, kein Glanz, keine Stockfoto-Welt.

## 2. Colors

**Atlantik-Scheme (Default).** Eine Akzentfarbe — sonst nichts.

| Role | Token | Hex | Usage |
|------|-------|-----|-------|
| Background | `{tokens.color.semantic.background}` | `#FFFFFF` | Page-Background, primäre Flächen |
| Surface | `{tokens.color.semantic.surface}` | `#F8FAFC` | Sektion-Trenner, Card-Backs auf Papier |
| Card | `{tokens.color.semantic.card}` | `#FFFFFF` | Cards auf Subtle-Sektionen |
| Text Primary | `{tokens.color.semantic.textPrimary}` | `#0F172A` | Headlines, Body, dunkle Buttons |
| Text Secondary | `{tokens.color.semantic.textSecondary}` | `#475569` | Captions, sekundärer Body |
| Text on Dark | `{tokens.color.semantic.textOnDark}` | `#FFFFFF` | Text in dunklen Sektionen / Final-CTA |
| Accent Primary | `{tokens.color.semantic.accent}` | `#2563EB` | Italic-Highlights, Links, Primary-Akzent |
| Accent Hover | `{tokens.color.semantic.accentHover}` | `#1E40AF` | Hover-State auf Akzent-Elementen |
| Accent Soft | `{tokens.color.semantic.accentSoft}` | `rgba(37,99,235,0.10)` | Hover-Backgrounds, Tag-Pills |
| Glow | `{tokens.color.semantic.glow}` | `#06B6D4` | Sekundärer Akzent, Check-Marks auf Dunkel, Final-CTA-Aura |
| Border / Divider | `{tokens.color.semantic.divider}` | `rgba(15,23,42,0.10)` | 1-Pixel-Hairlines, Card-Borders |
| Danger | `{tokens.color.semantic.danger}` | `#DC2626` | Form-Errors, kritische Audit-Tags |

**Ink-Skala (dunkle Flächen):** `{tokens.color.ink.950}` = `#0F172A` Headlines + dunkle Sektionen · `{tokens.color.ink.800}` = `#1E293B` dunkle Cards.

**Blue-Skala (Akzent):** `{tokens.color.blue.500}` = `#2563EB` ist der einzige chromatische Akzent · `{tokens.color.blue.600}` = `#1E40AF` Hover · `{tokens.color.blue.400}` = `#3B82F6` subtile Highlights.

**Calm-Voicing (FeWo / Unterkunft-Subdomain).** Wärmeres Pendant — gleiches System, anderer Materialcharakter. Aktivierung im Code via `data-theme="calm"`.

| Role | Token | Hex |
|------|-------|-----|
| Paper | `{tokens.color.calm.paper}` | `#F6F2EA` (warmes Creme) |
| Surface | `{tokens.color.calm.subtle}` | `#EDE7DA` (Sand) |
| Ink | `{tokens.color.calm.ink}` | `#1F2A2A` (tiefes Schiefer-Grün) |
| Muted | `{tokens.color.calm.muted}` | `#5A5E55` |
| Border | `{tokens.color.calm.border}` | `rgba(31,42,42,0.12)` |
| Portrait Warm 1 | `{tokens.color.calm.portraitWarm1}` | `#F5EDE0` |
| Portrait Warm 2 | `{tokens.color.calm.portraitWarm2}` | `#D4B896` |

**Gradient-Signaturen:**

- **Final-CTA-Sektion:** `linear-gradient(135deg, {color.ink.950}, shade({color.semantic.accent}, -35%))` mit `radial-gradient(60% 100% at 50% 100%, {color.semantic.glow} @ 55% alpha, transparent 70%)` als Overlay.
- **Akzent-Strip:** `linear-gradient(90deg, {color.semantic.accent}, {color.semantic.glow})` — für Progress-Bars, dünne Banner.
- **Schema-Background:** `linear-gradient(180deg, {color.paper}, {color.subtle})` — Hero-Schema, Cards mit etwas Tiefe.

**Forbidden colors:** Tailwind-Indigo (`#4F46E5`-Serie), generische Trust-Gradients (purple→blue), Neon-Akzente, mehr als **eine** chromatische Highlight-Farbe pro Headline. Nie zwei Italic-Highlights in unterschiedlichen Farben.

## 3. Typography

**Font stack:**

- **Display** — `{tokens.typography.fontFamily.display}` · Bricolage Grotesque (variable, opsz 12..96) für Headlines, Stats, Italic-Highlights.
- **Body** — `{tokens.typography.fontFamily.body}` · Inter Tight für Paragraphen, UI-Labels, Buttons.
- **Mono** — `{tokens.typography.fontFamily.mono}` · JetBrains Mono für Eyebrows, Tags, Status-Pills, Captions im SectionMark.
- **Serif Accent** — `{tokens.typography.fontFamily.serifAccent}` · Instrument Serif (Italic) **nur** im Calm-Theme (FeWo + ähnliche „ruhige" Surfaces).

Laden via `next/font/google` mit Subset `latin-ext`, `display: swap`, Preload für Bricolage + Inter Tight.

**Hierarchy:**

| Role | Size (Desktop / Mobile) | Weight | Letter-Spacing | Line-Height | Where |
|------|------|--------|----------------|-------------|-------|
| Display-1 | `{tokens.typography.scale.display1}` / `{tokens.typography.scale.display1Mobile}` | 800 | `-0.035em` | 1.02 | Hero H1 |
| Display-2 | `{tokens.typography.scale.display2}` / `{tokens.typography.scale.display2Mobile}` | 700 | `-0.035em` | 1.04 | Section H2 groß |
| Display-3 | `{tokens.typography.scale.display3}` / `{tokens.typography.scale.display3Mobile}` | 700 | `-0.03em` | 1.05 | Section H2 |
| Display-4 | `{tokens.typography.scale.display4}` / `{tokens.typography.scale.display4Mobile}` | 700 | `-0.025em` | 1.08 | Section H3 |
| Display-5 | `{tokens.typography.scale.display5}` / `{tokens.typography.scale.display5Mobile}` | 700 | `-0.02em` | 1.15 | Card-Headline, FAQ |
| Body Large | `{tokens.typography.scale.bodyLarge}` / `{tokens.typography.scale.bodyLargeMobile}` | 400 | 0 | 1.5 | Hero-Subline, Lead |
| Body Medium | `{tokens.typography.scale.bodyMedium}` / `{tokens.typography.scale.bodyMediumMobile}` | 400 | 0 | 1.6 | Standard-Paragraph |
| Body Small | `{tokens.typography.scale.bodySmall}` / `{tokens.typography.scale.bodySmallMobile}` | 500 | 0 | 1.55 | Cards, Karten-Body |
| Body XS | `{tokens.typography.scale.bodyXs}` | 400 | 0 | 1.5 | Captions, Footnoten |
| Label Mono | `{tokens.typography.scale.labelMono}` | 600 | `0.18em` UPPERCASE | 1.0 | Eyebrows, SectionMark |
| Label Mono Sm | `{tokens.typography.scale.labelMonoSm}` | 600 | `0.14em` UPPERCASE | 1.0 | Mini-Tags, Status-Pills |
| Button | `{tokens.typography.scale.button}` | 700 | `-0.005em` | 1.0 | Primary-CTA |
| Button Sm | `{tokens.typography.scale.buttonSm}` | 600 | 0 | 1.0 | Ghost / Tertiär |

**Italic-Highlight-Pattern.** In Headlines wird **ein Wort** mit Bricolage Italic + Accent-Color hervorgehoben:

```tsx
<h2>
  Vier Bausteine.{" "}
  <em style={{
    fontStyle: "italic",
    fontVariationSettings: '"opsz" 96, "wght" 400',
    color: "var(--color-accent)",
  }}>
    Ein
  </em>{" "}
  Wachstumssystem.
</h2>
```

**Regel:** max. **1 Italic-Highlight pro Headline**. Mehr macht Headlines unruhig.

**Mobile-Regeln:** Body ≥ 15px für Fließtext, ≥ 13px für Captions. Display-1 max. 52px auf 390px-Breite. Mono-Eyebrows ≥ 11px. Hit-Targets für interaktive Elemente ≥ 44px Höhe.

## 4. Layout

**Container.** `max-width: {tokens.dimension.container.maxWidth}` = 1240px. Horizontal-Padding: `{tokens.dimension.container.paddingDesktop}` (64px) Desktop / `{tokens.dimension.container.paddingMobile}` (20px) Mobile. Section-Header (Headline + Lead) und Body-Spalte für lange Texte: `max-width: {tokens.dimension.container.narrowText}` = 64ch.

**Spacing-Skala (8px-Basis).**

| Token | Wert | Verwendung |
|---|---|---|
| `{tokens.dimension.spacing.1}` | 4px | Icon-zu-Label-Gap |
| `{tokens.dimension.spacing.2}` | 8px | enge Stack-Lücken |
| `{tokens.dimension.spacing.3}` | 12px | Card-internes Spacing |
| `{tokens.dimension.spacing.4}` | 16px | Standard-Gap zwischen kleinen Elementen |
| `{tokens.dimension.spacing.5}` | 22px | Block-Spacing intern |
| `{tokens.dimension.spacing.6}` | 32px | Sektion-internes Spacing |
| `{tokens.dimension.spacing.7}` | 48px | Gap zwischen Sektionen klein |
| `{tokens.dimension.spacing.8}` | 64px | Horizontal-Container-Padding |
| `{tokens.dimension.spacing.9}` | 100px | Vertikales Sektion-Padding klein |
| `{tokens.dimension.spacing.10}` | 120px | Vertikales Sektion-Padding groß |
| `{tokens.dimension.spacing.11}` | 140px | Vertikales Sektion-Padding Final-CTA |

**Mobile.** Halbiere alle vertikalen Sektions-Spacings: `space-9` → 56px (`{tokens.dimension.spacingMobile.sectionVerticalSmall}`), `space-10` → 64px (`{tokens.dimension.spacingMobile.sectionVerticalLarge}`). Horizontal-Padding immer 20px.

**Grid-Patterns.**

- **2-Spalter mit Lead-Side:** `1.1fr 0.9fr` (Hero, Editorial-Splits)
- **4-Bausteine-Grid:** 4 Spalten Desktop, 2×2 Tablet, gestapelt Mobile
- **3er-Karten-Row:** 3 Spalten Desktop, gestapelt Mobile (Pakete, Cases-Sekundär, Blog)
- **Hairline-Listen:** 1-Spalter, jedes Item mit 1px Top-Border

**Breakpoints.**

| Token | Wert | Notiz |
|---|---|---|
| `{tokens.dimension.breakpoint.mobile}` | 0px | Stack-Layout, einzeilige Hero |
| `{tokens.dimension.breakpoint.tabletMin}` | 768px | 2×2-Grids, kompaktere Spacings |
| `{tokens.dimension.breakpoint.desktopMin}` | 1024px | Volle Layouts |
| `{tokens.dimension.breakpoint.wideMin}` | 1440px | Container bleibt 1240px, mehr Luft links/rechts |

## 5. Elevation & Depth

Sparsam einsetzen. **Drei Stufen, mehr nicht.**

| Token | Wert | Verwendung |
|---|---|---|
| `{tokens.shadow.card}` | `0 1px 0 rgba(15,23,42,0.04)` | 1px Sub-Shadow für Container auf Subtle |
| `{tokens.shadow.hover}` | `0 12px 28px -10px rgba(37,99,235,0.30)` | Card-Hover, Form-Focus |
| `{tokens.shadow.cta}` | `0 14px 30px -14px rgba(37,99,235,0.66)` | Primary-Button-Glow |
| `{tokens.shadow.hero}` | `0 30px 80px -30px rgba(15,23,42,0.30)` | Hero-Mockups, Browser-Plates |

**Regeln.**

- Keine Schatten auf Text.
- Keine Schatten auf Sektion-Backgrounds.
- Final-CTA-Button trägt `shadow.cta` mit Akzentfarbe — alle anderen Schatten sind neutral.
- Cards heben sich beim Hover um `translateY(-2px)` + `shadow.hover` + Border wechselt auf Accent.
- Form-Focus: Border accent + optional `box-shadow: 0 0 0 3px rgba(37,99,235,0.10)`.

**Motion-Stufen.** Verbindlich. Alles andere ist verboten.

| Token | Wert | Verwendung |
|---|---|---|
| `{tokens.motion.duration.fast}` | 0.2s | Button-/Link-Hover |
| `{tokens.motion.duration.medium}` | 0.35s | Card-Hover, Form-Focus |
| `{tokens.motion.duration.slow}` | 0.9s | Reveal (Scroll-Fade) |
| `{tokens.motion.easing.default}` | `cubic-bezier(0.2, 0.7, 0.2, 1)` | Default-Easing |
| `{tokens.motion.stagger}` | 80ms | Stagger zwischen Reveal-Children, max 320ms gesamt |

**Reveal-Animation.** IntersectionObserver, `threshold: 0.15`. Default `rise`: `translateY(28px) → 0`, `opacity 0 → 1`. `prefers-reduced-motion`: komplett deaktivieren.

**Verboten.** Keine Page-Load-Splash-Animationen. Keine Auto-Carousels. Keine Parallax. Keine Scroll-Snap-Effekte ohne expliziten Bedarf. Keine Lottie. Keine Custom-SVG-Hero-Illustrationen mit Loop.

## 6. Shapes

**Radius-Skala.**

| Token | Wert | Verwendung |
|---|---|---|
| `{tokens.dimension.radius.sm}` | 4px | Buttons (rectangular), Form-Inputs |
| `{tokens.dimension.radius.md}` | 8px | Cards, Form-Felder, kleine Module |
| `{tokens.dimension.radius.lg}` | 12px | Größere Cards, Browser-Mockup |
| `{tokens.dimension.radius.xl}` | 16px | Hero-Plates, Diagramm-Container |
| `{tokens.dimension.radius.pill}` | 999px | Pills, Status-Tags, Final-CTA-Button |

**Regeln.**

- Primärer CTA **ohne** Pill-Radius (`radius.sm`).
- Final-CTA-Button (Sektion-Ende) **mit** Pill-Radius — als rituelle Wiederholung.
- Status-Pills + Tags **immer** Pill-Radius.

**Icons.** `lucide-react`, Stroke-only, 1.6px Strichstärke. Größen 14 / 16 / 18 / 22 / 24px (Standard 18 Body, 22 Card-Header). Farbe `currentColor`. **Verboten:** Filled-Icons, Mix aus Stroke + Filled in einer Reihe, Emoji-Icons in Buttons/Headers.

**Häufige Icons (alle aus Lucide):** `Check` · `ArrowRight` · `Globe` · `TrendingUp` · `LineChart` · `MessageSquare` · `CalendarClock` · `CreditCard` · `Sparkles` · `Bot` (sparsam).

**Bildsprache.** Echte MyHiwi-/Kundenbilder sind erlaubt, wenn sie aus dem Projektbestand kommen und nicht wie Stockfoto-Material wirken:

- **Logo:** echte SVG-Assets aus `public/brand/` verwenden (`myhiwi-h-logo.svg`, `myhiwi-h-logo-white.svg`, Icons). Keine frühen H-Placeholder als finale Marke.
- **Founder-Portrait:** `/ueber-mich/portrait.jpg` als 4:5-Portrait-Card mit dunklem Verlauf und Caption-Struktur.
- **Case-Visuals:** echte Projekt-/Hero-Screenshots für ProofCards, z. B. `/case-studies/sonnenhof/sonnenhof-neu.png`, `/case-studies/mr-sherman/cover.png`, `/case-studies/formazin/cover.png`, jeweils mit dunklem Gradient-Overlay für Lesbarkeit.
- **Mockup-Plates** bleiben gültig, wenn kein echtes Projektvisual existiert: Gradient (`linear-gradient(135deg, {color.ink.950}, {color.semantic.accent} 55%, {color.semantic.glow})`) plus subtile horizontale Streifen-Textur.
- **Browser-Mockup** mit Domain-Pill und stilisiertem Page-Body.
- **Phone-Frame** mit Notch und Sticky-Header für Anfrageflow-Demos.
- **Portrait-Platzhalter** nur verwenden, wenn kein echtes Portrait verfügbar ist.

**Kein Stockfoto.** Keine generischen Menschen-/Laptop-Bilder. Echte Visuals müssen einen MyHiwi-/Kundenbezug haben.

## 7. Components

**Komponenten-Library lebt unter [`docs/design-system/components.md`](./docs/design-system/components.md)** mit Varianten, Tokens, Mobile-Verhalten und Verwendungsmatrix. Hier nur die kritischen MVP-Komponenten in Reihenfolge:

1. `<Container>` · `<Section>` · `<SectionMark>` — Basis jeder Seite. SectionMark = Mono-Nummer (z. B. „01") + Hairline 28px + Mono-Label uppercase mit 18%-tracking.
2. `<Header>` (Desktop + Mobile-Burger-Drawer) · `<Footer>`
3. `<CtaRow>` mit `<BtnPrimary>` · `<BtnGhost>` · `<BtnTertiary>`
4. `<MyHiwiMark>` · `<MyHiwiH>` · `<Reveal>` — Brand + Scroll-Animation
5. `<HomepageHero>` mit `<InteractiveHeroSchema>`
6. `<FeatureCard>` (Vier-Bausteine + Service-Group)
7. `<ProofCard>` (Lead-Spread + Regular)
8. `<OfferCard>` (Default + Highlight)
9. `<FAQAccordion>` (Sticky-Headline + Akkordeon)
10. `<FinalCTASection>` (Gradient-Sektion am Ende jeder Seite)

**CTA-System (verbindlich).** Texte nicht improvisieren.

| Stufe | Hauptseiten | Branchen-LP |
|---|---|---|
| Primär | „Kostenlosen Digital-Check anfragen" | „Kostenlosen Direktanfragen-Check anfragen" (FeWo) / „Anfrageflow-Check anfragen" (Fahrschule) |
| Sekundär | „Cases ansehen" | „Wie wir arbeiten" |
| Tertiär | „Angebote ansehen" | — |
| Microcopy | — | `kostenlos · unverbindlich · 20 Minuten · speziell für [Branche]` |

**Button-Varianten** (aus Tokens, siehe `docs/design-system/tokens.json` Component-Block):

- **Primary** — Background `{color.semantic.textPrimary}`, Color `{color.semantic.textOnDark}`, Padding 18×22 (× = `{spacing.5}`), Font Size `{typography.scale.button}`, Weight 700, Radius `{dimension.radius.sm}`, Shadow `{shadow.cta}`. Pfeil-Icon rechts.
- **Ghost** — transparent, ink-Border 1px, ink-Text, Padding 16×22, Font Size `{typography.scale.buttonSm}`, Weight 600.
- **Tertiary** — kein Hintergrund, ink-Text, `border-bottom: 1px solid {color.semantic.accent}`, Padding-Bottom 4px.
- **Pill CTA** (Final-CTA only) — Radius `{dimension.radius.pill}`, Padding 18×26.

**Pro Sektion max. 1 primärer CTA.** Mittelkarten in Pricing-Modulen müssen wortgleich den Primary-CTA-Text nutzen.

**SystemPill.** Mono-Label-Sm in Pill mit 5×10 Padding. Varianten: `default` (border + muted), `active` (accent-soft-bg + accent-text + accent-border). Verwendung: Tag für einen der 5 Bausteine (Sichtbarkeit / Nachfrage / Anfrage & Buchung / Zahlung & Verbindlichkeit / AI & Automation).

**Section-Marker-Pattern.** Jede Hauptsektion beginnt mit:

```
[NN]  ─────────  LABEL
 │       │           │
Mono   Hairline    Mono-uppercase
fett    24–28px    18%-tracking
```

Auf dunklem Hintergrund: Accent-Farbe + dünner Glow-Strich. Auf hellem Hintergrund: muted-Farbe (Akzent-Variante nur für Hero und Final-CTA).

**Seitenarchetypen** (Section-Reihenfolge pro Seitentyp) sind in [`docs/design-system/page-archetypes.md`](./docs/design-system/page-archetypes.md) verbindlich definiert: Homepage, Vertical-LP, Leistungen-Übersicht, Leistungsdetail, Cases-Übersicht, Case-Detail, Digital-Check.

## 8. Do's and Don'ts

### Do

- ✅ Tokens aus dem Frontmatter (oder `docs/design-system/tokens.json`) nutzen, **keine Magic Numbers**.
- ✅ Komponenten aus `docs/design-system/components.md` wiederverwenden — keine neuen ohne Eintrag dort.
- ✅ Pro Sektion **1 SectionMark** (Mono-Eyebrow mit Nummer + Hairline + Label).
- ✅ **Max. 1 Italic-Highlight** pro Headline.
- ✅ **Echte Umlaute** (ä/ö/ü/ß) in jeder Copy.
- ✅ **Vorsichtige Claims:** belegte Zahl mit Quelle/Zeitraum, beobachteter Effekt als Satz. Siehe [`docs/design-system/compliance.md`](./docs/design-system/compliance.md).
- ✅ **Mobile-first**: Layout direkt mitbauen, kein „später".
- ✅ FAQ-Antworten als ausgeschriebene Sätze, keine Stichpunkte.
- ✅ `prefers-reduced-motion` respektieren.
- ✅ DSGVO-Wortlaut: „DSGVO-bewusst, mit AVV und Anbieterübersicht projektbezogen."

### Don't

- ❌ Keine neuen Farben außerhalb der Palette.
- ❌ Keine neuen Fonts oder Font-Weights.
- ❌ Keine neuen Komponenten ohne Eintrag in `components.md`.
- ❌ Keine Stockfotos.
- ❌ Keine erfundenen Zahlen oder Testimonials.
- ❌ Keine pauschalen DSGVO-Garantien („100 % DSGVO-konform").
- ❌ Keine Score-Anzeigen oder Funnel-Sprache im Digital-Check.
- ❌ Keine animierten Hero-Loops, Parallax, Auto-Carousels.
- ❌ Keine bunten Highlight-Wörter — **nur ein** Accent (`{color.blue.500}`) für Italic-Highlights und Links.
- ❌ Keine 4-Tier-Pricing-Tabellen — das 3-Einstiege-Modell („Wo starten?") ist final.
- ❌ Keine Telefonnummer-Platzhalter. Wenn keine echte Nummer da ist, dann nur E-Mail.
- ❌ Keine isolierten Produktbegriffe wie „Webdesign-Agentur", „AI-Agentur", „SEO-Consulting" ohne Buchungs-/Anfragebezug.
- ❌ Keine Tracking-Pixel ohne Consent.

---

**Deep source:** [`docs/design-system/`](./docs/design-system/) · Einstieg [`HANDOVER.md`](./docs/design-system/HANDOVER.md).
