# MyHiwi · Implementation Notes (für Claude Code / Codex)

> Konkrete Reihenfolge und Konventionen für die Next.js-Umsetzung. Folge dieser Notiz beim Bau. Sie nimmt Entscheidungen ab, die sonst neu getroffen werden müssten.

---

## 1. Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + CSS-Variablen für Tokens
- **Komponenten-Library:** keine externe (kein shadcn/ui) — wir bauen direkt mit Tailwind + Headless-Patterns. shadcn-Komponenten dürfen importiert werden, wenn sie 1:1 zu unseren Design-Tokens passen (Button, Input, Accordion).
- **Icons:** `lucide-react` (Stroke-only).
- **Fonts:** `next/font/google` für Bricolage Grotesque, Inter Tight, JetBrains Mono, Instrument Serif.
- **Motion:** Framer Motion **nur** für die `Reveal`-Komponente. Keine weiteren Page-Animationen.
- **Forms:** React Hook Form + Zod für den Digital-Check, einfache State-Hooks reichen für statische Forms.

---

## 2. Reihenfolge der Umsetzung

### Phase 1 — Tokens & Layout-Atomics (ein Tag)
1. `tokens.json` in `tailwind.config.ts` und `globals.css` übersetzen.
2. CSS-Variablen für semantische Rollen (`--color-text-primary` etc.) in `globals.css`.
3. Tailwind-Theme-Extension: `colors`, `fontFamily`, `fontSize`, `spacing`, `borderRadius`, `boxShadow`.
4. Layout-Atomics: `<Container>`, `<Section>`, `<SectionMark>`, `<MyHiwiMark>`, `<MyHiwiH>`, `<Reveal>`.

### Phase 2 — Globale Komponenten (1–2 Tage)
1. `<Header>` (Desktop + Mobile mit Burger-Drawer)
2. `<Footer>`
3. `<CtaRow>` mit `BtnPrimary`, `BtnGhost`, `BtnTertiary`
4. `<SystemPill>`
5. `<FinalCTASection>` (wiederverwendbar mit prop-driven Headline)

### Phase 3 — Homepage als Pilot-Seite (2 Tage)
1. `app/page.tsx`
2. Hero, TrustStrip, ProblemSection, FourBlocksSection, AiAssistSection, FounderTrustSection, CaseTeaser, WhereToStartCards, FAQAccordion, FinalCTASection.
3. Mobile-Layout direkt mitbauen (kein „später").

### Phase 4 — Sub-Pages (3–4 Tage)
1. `/cases` (Cases-Übersicht) — teilt ProofCard, CaseLeadSpread mit Homepage.
2. `/cases/sonnenhof-herrsching` (Case-Detail).
3. `/leistungen` (Übersicht).
4. `/leistungen/anfrage-buchung` (erstes Detail als Template).

### Phase 5 — FeWo-Voicing (2 Tage)
1. `/fewo` mit Calm-Tokens (`colors.calm.*` aus `tokens.json`).
2. Calm-Variante von `Header`, `FAQAccordion` und `FinalCTASection`.
3. `LeakExample`, `BenefitsRow`, `QuoteCarousel`.

### Phase 6 — Digital-Check Flow (2 Tage)
1. `/digital-check` als eigene Route mit `useReducer`-State.
2. 7 Screens + Validation + Submit zur `/api/contact`.
3. Mobile-zuerst, Desktop als Layout-Erweiterung.

### Phase 7 — Polish (1 Tag)
1. SEO-Metadaten pro Seite.
2. Open Graph Bilder.
3. Sitemap + Robots.
4. Lighthouse-Pass.

**Geschätzter Gesamtaufwand: 11–13 Arbeitstage** für einen Solo-Developer (Denis oder Coding-Agent).

---

## 3. Welche Komponenten zuerst bauen?

**Kritisch für MVP** (in dieser Reihenfolge):
1. `<Container>` + `<Section>` + `<SectionMark>` — die Basis jeder Seite
2. `<Header>` + `<Footer>` — auf jeder Route
3. `<CtaRow>` mit den 3 Button-Varianten — CTA-System
4. `<MyHiwiMark>` + `<Reveal>` — Brand + Motion
5. `<HomepageHero>` mit `<InteractiveHeroSchema>` — der erste Screen, den alle sehen
6. `<FeatureCard>` (Vier-Bausteine-Variante) — wiederverwendet überall
7. `<ProofCard>` (Lead-Spread + Regular) — Cases-Logik
8. `<OfferCard>` (Default + Highlight) — Pakete + Wo starten
9. `<FAQAccordion>` — Trust-Element
10. `<FinalCTASection>` — auf jeder Seite

Alles Weitere ist Erweiterung auf bestehende Atoms.

---

## 4. Welche Tokens zuerst definieren?

**Reihenfolge bei Tailwind-Konfiguration:**

```ts
// tailwind.config.ts (Auszug)
theme: {
  extend: {
    colors: {
      ink: { 950: "#0F172A", 900: "#0F172A", 800: "#1E293B" },
      blue: { 400: "#3B82F6", 500: "#2563EB", 600: "#1E40AF" },
      cyan: { 500: "#06B6D4" },
      paper: "#FFFFFF",
      subtle: "#F8FAFC",
      muted: "#475569",
      danger: "#DC2626",
      // calm voicing
      calm: { paper: "#F6F2EA", subtle: "#EDE7DA", ink: "#1F2A2A", muted: "#5A5E55" },
    },
    fontFamily: {
      display: ["var(--font-bricolage)", "system-ui", "sans-serif"],
      body: ["var(--font-inter-tight)", "system-ui", "sans-serif"],
      mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      "serif-accent": ["var(--font-instrument-serif)", "Georgia", "serif"],
    },
    spacing: {
      // 1–11 Skala wie in tokens.json
    },
    borderRadius: { sm: "4px", md: "8px", lg: "12px", xl: "16px", full: "9999px" },
    boxShadow: {
      card: "0 1px 0 rgba(15,23,42,0.04)",
      hover: "0 12px 28px -10px rgba(37,99,235,0.30)",
      cta: "0 14px 30px -14px rgba(37,99,235,0.66)",
      hero: "0 30px 80px -30px rgba(15,23,42,0.30)",
    },
  },
}
```

**CSS-Variablen** in `globals.css` für semantische Rollen — so können Themes (Default vs. Calm) per `data-theme="calm"` umgeschaltet werden.

---

## 5. Welche Layout-Komponenten sind global?

In `components/layout/`:
- `Header.tsx` — auf `(default)/layout.tsx` und allen Subroute-Layouts.
- `Footer.tsx` — identisch.
- `Container.tsx` — max-width 1240, Padding responsive.
- `Section.tsx` — Wrapper mit vertikalem Padding, Hintergrundoption (`paper` / `subtle` / `ink`).

Layout-Tree:
```
app/
  layout.tsx                 → globaler Frame (HTML + body + fonts)
  (marketing)/
    layout.tsx               → Header + Footer
    page.tsx                 → Homepage
    cases/
      page.tsx               → /cases
      [slug]/page.tsx        → /cases/sonnenhof-herrsching
    leistungen/
      page.tsx               → /leistungen
      [slug]/page.tsx        → /leistungen/anfrage-buchung
    fewo/page.tsx            → /fewo (Calm-Layout via data-theme)
  digital-check/
    layout.tsx               → Step-Header statt Standard-Header
    page.tsx                 → Flow
  api/
    contact/route.ts         → POST handler
```

---

## 6. Welche Seiten zuerst umsetzen?

1. **Homepage** (`/`) — alle Komponenten einmal durchgespielt.
2. **/cases/sonnenhof-herrsching** — der wichtigste Proof, brauchen wir für jedes Sales-Gespräch.
3. **/leistungen** — Systemlandkarte als Sales-Argument.
4. **/digital-check** — der primäre Conversion-Flow.
5. **/fewo** — erste Vertical-LP, Vorlage für Fahrschule, Hotels, …
6. **/cases** + weitere Leistungen-Detail-Slugs.

---

## 7. Welche Inhalte dürfen Platzhalter bleiben?

| Inhalt | Status |
|---|---|
| Sonnenhof-Foto im Case-Hero | **Platzhalter (Gradient-Plate)** bis echtes Foto da ist |
| Founder-Portrait | **warmer Gradient-Platzhalter mit SVG-Silhouette** bis echtes Foto da ist |
| Cases-Mockup-Plates (Sherman, Mannis, Villa Gloria, FeWo Taubenhaus, Formazin) | **Gradient-Plates mit Branchen-Caption** dürfen bleiben |
| Trust-Strip-Wordmarks | **Wordmarks in Bricolage** statt echter Kunden-Logos OK |
| QuoteCarousel auf FeWo-LP | **„Stellvertretende Sätze"** OK, **bis echte Quotes mit Erlaubnis vorliegen** |
| Pricing-Zahlen | **„ab 349 € / Monat"** für FeWo OK, **keine konkreten Preise** auf /leistungen — bewusste Entscheidung |
| AVV-Dokument | **muss vor erstem Kunden vorliegen** — nicht in der Seite, aber als PDF auf Anfrage |

---

## 8. Welche Claims müssen vor Go-Live geprüft werden?

Siehe ausführlich `compliance.md`. Kurzfassung:

| Aussage | Aktion vor Go-Live |
|---|---|
| „108 Anfragen / 100 Tage" (Sonnenhof) | belegt — bleibt |
| „+304 % Top-10-Keywords" | Stand verifizieren (SE Ranking API Export, Datum) |
| Sherman-Lead-Zahlen | derzeit nicht öffentlich belegt → weiter weichformuliert lassen |
| Mannis Conversion-Effekt | „beobachteter Effekt" — quantifizieren falls möglich |
| Formazin Pilot-Status | klären: noch Pilot oder schon Regelbetrieb? |
| Villa Gloria + FeWo Taubenhaus | erste Saison abwarten |
| „DSGVO-bewusst, mit AVV…" | AVV-Vorlage muss greifbar sein |
| Floating-Card „3h / Tag entlastet" | jetzt „Beispiel" — ersetzen sobald Formazin-Werte belegbar |

---

## 9. Welche Stellen brauchen echte Daten / Fotos / Cases?

**Hohe Priorität** (sollten vor Live da sein):
- **Sonnenhof-Außenaufnahme** (4:3 oder 4:5) — für Case-Hero
- **Sonnenhof-Screenshot der neuen Website** (Mockup) — für Cases-Übersicht und Homepage-Lead-Card
- **Founder-Portrait Denis** — 4:5 — für Homepage Über-mich-Block und Vertical-LP-Closing-Block
- **Echte Sonnenhof-Quote** (Klaus Lukoschek, schriftliche Erlaubnis)
- **AVV-Vorlage** als PDF, verlinkt aus FAQ

**Mittlere Priorität** (für 2. Welle):
- **Mr. Sherman Tanzstudio-Foto / Studio-Aufnahme**
- **Mannis Fahrschule-Schul-/Auto-Foto**
- **Echte Stripe-Stats** für Pricing-Block

**Niedrige Priorität** (kann Platzhalter bleiben):
- Generische Branchenbilder
- Logo-Wall der Kunden (nutzen aktuell Wordmark-Style)

---

## 10. Form-Submit-Handling

```ts
// app/api/contact/route.ts (Skelett)
import { z } from "zod";
import { Resend } from "resend";

const ContactSchema = z.object({
  ziel: z.string(),
  branche: z.string(),
  ausgangslage: z.array(z.string()),
  website: z.string().url().optional(),
  mapsLink: z.string().optional(),
  notiz: z.string().max(500).optional(),
  engpass: z.string(),
  name: z.string().min(2),
  email: z.string().email(),
  telefon: z.string().optional(),
  kanal: z.enum(["mail", "rückruf", "whatsapp"]),
});

export async function POST(req: Request) {
  const data = ContactSchema.parse(await req.json());
  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: "MyHiwi Digital-Check <hello@myhiwi.de>",
    to: process.env.CONTACT_EMAIL!,
    subject: `Digital-Check: ${data.name} · ${data.branche}`,
    text: formatPlainText(data),
  });
  return Response.json({ ok: true });
}
```

- **Kein Auto-Reply** an den Absender ohne ausdrückliche Bestätigung im Form.
- **Validation-Errors** als Helper-Text unter dem Feld, nicht als Toast.
- **Submit-Loading-State** max. 1.5s, dann auf Success Screen.

---

## 11. Performance / Lighthouse-Ziele

| Metrik | Ziel |
|---|---|
| LCP | < 2.0s |
| INP | < 200ms |
| CLS | < 0.05 |
| Lighthouse Performance | > 95 |
| Lighthouse Accessibility | > 95 |
| Lighthouse SEO | > 95 |

- **Fonts:** `display: swap`, Preload für Bricolage + Inter Tight.
- **Images:** Next.js `<Image>` mit `priority` nur für Hero.
- **Reveal-Animationen:** `prefers-reduced-motion` respektieren.
- **Bundle-Size:** kein `framer-motion` für mehr als Reveal.

---

## 12. SEO-Konventionen

- **Title:** `<Seitenname> | MyHiwi — Digitale Wachstumssysteme für lokale Unternehmen`
- **Description:** 140–160 Zeichen, mit Hauptkeyword.
- **Canonical:** auf jeder Seite gesetzt.
- **OG-Image:** generiert via `app/opengraph-image.tsx` mit Bricolage + accent + Headline.
- **Strukturierte Daten:** Organization-Schema im Root-Layout, Service-Schema auf /leistungen/[slug], Article-Schema falls Blog jemals kommt.

---

## 13. Was Agents NICHT tun sollen

- ❌ Keine alternativen Designvarianten erfinden („oder wir könnten…").
- ❌ Keine neuen Farben außerhalb der Token-Palette.
- ❌ Keine neuen Fonts.
- ❌ Keine Lottie-Animationen, keine Custom-SVG-Hero-Illustrationen.
- ❌ Keine 4-Tier-Pricing-Tabellen (3 Einstiege-Modell aus „Wo starten?" ist final).
- ❌ Keine „as featured in"-Badges.
- ❌ Keine Stockfotos.
- ❌ Keine Score-Anzeigen im Digital-Check.
- ❌ Keine Tracking-Pixel ohne Consent.

---

**Ende implementation.md.**
