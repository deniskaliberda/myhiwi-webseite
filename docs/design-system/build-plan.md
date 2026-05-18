# MyHiwi · Build-Plan (Redesign-Rollout)

**Stand: 2026-05-17 · Draft v1**

Dieser Plan übersetzt [`HANDOVER.md`](./HANDOVER.md) und [`implementation.md`](./implementation.md) in **konkrete Dateipfade** im aktuellen Repo. Reihenfolge wie in `HANDOVER.md` §Bau-Reihenfolge.

> Annahme: das alte CRA-artige UI unter `app/` und `components/` bleibt während der Umsetzung lauffähig. Neue Seiten und Komponenten werden parallel angelegt; das alte Routing wird **am Ende** in einem Schwung ersetzt — siehe „Cutover" unten. Bis dahin keine Live-Site-Änderungen.

---

## 0. Repo-Konvention

| Konzept | Pfad | Notiz |
|---|---|---|
| Repo-Root | `./` | enthält `DESIGN.md` als Token-Backbone |
| Deep source | `docs/design-system/` | inkl. `HANDOVER.md`, `tokens.json`, etc. |
| App Router | `app/` | Next 14 App Router |
| Marketing-Layout | `app/(marketing)/layout.tsx` | trägt globalen Header + Footer |
| Digital-Check | `app/digital-check/layout.tsx` | eigener Step-Header statt Standard-Nav |
| Komponenten | `components/` | unten in Sub-Ordner gegliedert |
| Globale Styles | `app/globals.css` | CSS-Variablen für Themes |
| Tailwind | `tailwind.config.ts` | Theme-Extension aus Tokens |
| Content (statisch) | `content/` | Cases, Pricing, FAQ als TS- oder MDX-Module |

**Import-Alias:** `@/*` zeigt auf Repo-Root (z. B. `import { Section } from "@/components/layout/Section"`).

---

## 1 · Tokens + globals (Phase 1)

**Ziel:** `tokens.json` wird Single-Source. Tailwind und globals.css lesen daraus.

| Datei | Aktion | Inhalt |
|---|---|---|
| `tailwind.config.ts` | **Refactor** | `theme.extend`-Block ersetzen: `colors`, `fontFamily`, `fontSize`, `spacing`, `borderRadius`, `boxShadow` aus `docs/design-system/tokens.json`. Calm-Theme als `colors.calm.*`. |
| `app/globals.css` | **Refactor** | CSS-Variablen für semantische Rollen (`--color-background`, `--color-accent`, `--color-text-primary`, etc.). `[data-theme="calm"] { … }`-Block für Calm-Voicing. Reset-Layer minimal halten. |
| `app/layout.tsx` | **Update** | Bricolage Grotesque · Inter Tight · JetBrains Mono · Instrument Serif via `next/font/google` laden, je als CSS-Variable (`--font-bricolage`, `--font-inter-tight`, `--font-mono`, `--font-serif-accent`). `<html lang="de">` bleibt. Header/Footer hier rausnehmen — die kommen ins Marketing-Layout. |
| `lib/tokens.ts` *(neu)* | **Add** | Optionaler Re-Export ausgewählter Tokens als TS-Konstanten für Komponenten, die nicht über Tailwind gehen (z. B. Framer-Motion-Werte). |
| `next.config.js` | **Check** | `optimizePackageImports: ["lucide-react"]` falls noch nicht da. |

**Done-Kriterium:** `npm run build` grün; Tailwind kennt `bg-ink-950`, `text-blue-500`, `font-display`, `shadow-cta`, `rounded-pill`.

---

## 2 · Base Components (Phase 2)

**Ziel:** Layout-Atomics + Brand-Marks + Reveal stehen wiederverwendbar.

| Datei | Aktion | Inhalt |
|---|---|---|
| `components/layout/Container.tsx` | **Refactor** | max-width 1240px, Padding `px-5 md:px-16` (20px / 64px), `mx-auto`. |
| `components/layout/Section.tsx` | **Refactor** | vertikales Padding via Prop (`compact` / `default` / `large` / `finalCta`) → mapped auf Spacing-9/10/11. Background-Prop (`paper` / `subtle` / `ink` / `calm-paper` / `calm-subtle`). |
| `components/layout/SectionMark.tsx` *(neu)* | **Add** | Eyebrow mit Mono-Nummer + 28px-Hairline + Mono-Label uppercase. Props: `index`, `label`, `tone` (`muted` / `accent`). |
| `components/brand/MyHiwiMark.tsx` *(neu)* | **Add** | Logo (H-Icon + Wordmark). Varianten: `default`, `mono-on-dark`, `mono-on-light`. Prop: `size` (22 / 28 / 34). |
| `components/brand/MyHiwiH.tsx` *(neu)* | **Add** | Nur H-Mark, für Watermarks und Avatare. |
| `components/motion/Reveal.tsx` *(neu, ersetzt `components/shared/SectionReveal.tsx`)* | **Add** | IntersectionObserver, `threshold: 0.15`, Default `rise`. Varianten: `rise`, `fade`, `strike`, `rise-strong`. Respektiert `prefers-reduced-motion`. |
| `components/shared/SectionReveal.tsx` | **Deprecate** | bleibt während Übergang, später entfernen. |

**Done-Kriterium:** `<Section background="subtle"><Container><SectionMark index={1} label="Diagnose" /><Reveal>…</Reveal></Container></Section>` rendert sauber in Storybook-artigem Sandbox-Route (`app/_sandbox/page.tsx`, nur dev).

---

## 3 · Globale Komponenten (Phase 3)

**Ziel:** Header, Footer, CTA-System, FinalCTASection einmal sauber.

| Datei | Aktion | Inhalt |
|---|---|---|
| `components/cta/BtnPrimary.tsx` *(neu)* | **Add** | ink-Background, Pfeil rechts, `shadow-cta`. Prop `pill` für Final-CTA-Variante. |
| `components/cta/BtnGhost.tsx` *(neu)* | **Add** | transparent + ink-Border. |
| `components/cta/BtnTertiary.tsx` *(neu)* | **Add** | Text-Link mit `border-bottom: 1px solid accent`. |
| `components/cta/CtaRow.tsx` *(neu)* | **Add** | flex-Komposition mit gap 14, flex-wrap. |
| `components/cta/FinalCTASection.tsx` *(neu)* | **Add** | Gradient-Sektion, Prop-driven Headline + Microcopy + Primary-Pill. |
| `components/system/SystemPill.tsx` *(neu)* | **Add** | Mono-Pill für die 5 Bausteine. Varianten `default` / `active`. |
| `components/layout/Header.tsx` *(neu)* | **Add** | Desktop: 2-zeiliger Mono-Strip + Pill-Nav. Mobile: 1-zeilig + Burger-Drawer. Burger-Drawer als eigenes Client-Component-Modul. |
| `components/layout/MobileMenu.tsx` *(neu)* | **Add** | Vollbild-Overlay mit Mono-Eyebrows pro Kategorie. |
| `components/layout/Footer.tsx` | **Refactor** | 4-Spalten-Grid wie in `components.md` §1. Brand-Block links, 3 Link-Spalten rechts, Mono-Footer-Strip. |
| `components/layout/SiteShell.tsx` | **Deprecate** | wird durch `app/(marketing)/layout.tsx` ersetzt. |
| `app/(marketing)/layout.tsx` *(neu)* | **Add** | wraps Header + `{children}` + Footer für alle öffentlichen Seiten. |

**Done-Kriterium:** `app/(marketing)/_sandbox/page.tsx` zeigt Header + 3 CTA-Varianten + FinalCTASection und passt Mobile/Desktop sauber.

---

## 4 · Homepage (Phase 4)

**Ziel:** `/` als Pilotseite mit allen kritischen Komponenten.

| Datei | Aktion | Inhalt |
|---|---|---|
| `app/(marketing)/page.tsx` *(neu)* | **Add** | Komposition der Sektionen unten. Ersetzt am Cutover-Punkt `app/page.tsx`. |
| `components/home/HomepageHero.tsx` *(neu)* | **Add** | 2-Spalter `1.15fr 0.85fr` + SectionMark „00 · Eine Botschaft" + Display-1 Headline mit Italic-Highlight + Body-Large Lead + CtaRow. |
| `components/home/InteractiveHeroSchema.tsx` *(neu)* | **Add** | Card mit Pipeline Besucher → 4 Bausteine → Umsatz, `shadow-hero`. |
| `components/home/TrustStrip.tsx` *(neu)* | **Add** | 5 Wordmarks in Bricolage (vor Logos-Erlaubnis). |
| `components/home/ProblemSection.tsx` *(neu)* | **Add** | 4 Pains + dunkles Antwort-Modul. |
| `components/home/FourBlocksSection.tsx` *(neu)* | **Add** | 4-Spalter (Sichtbarkeit / Nachfrage / Anfrage / Zahlung) mit FeatureCards. |
| `components/home/AiAssistSection.tsx` *(neu)* | **Add** | „AI da, wo sie wirklich hilft" — Verstärker-Schicht. |
| `components/home/FounderTrustSection.tsx` *(neu)* | **Add** | Founder-Block mit Portrait-Platzhalter + Werte. |
| `components/home/CaseTeaser.tsx` *(neu)* | **Add** | Lead-Spread Sonnenhof + 2 Sekundär-ProofCards. |
| `components/home/WhereToStartCards.tsx` *(neu)* | **Add** | 3-Karten-Block: Klein anfangen / Gezielt loslegen (Empfehlung) / Komplettes System. |
| `components/system/FeatureCard.tsx` *(neu)* | **Add** | Card mit big-Number + Icon-Row + Display-5 Titel + Bullet-Liste. |
| `components/system/OfferCard.tsx` *(neu)* | **Add** | Paket-Card. Varianten `default` / `highlight`. |
| `components/system/ProofCard.tsx` *(neu)* | **Add** | Case-Eintrag. Varianten `lead-spread` / `regular`. |
| `components/system/FAQAccordion.tsx` *(neu)* | **Add** | Sticky-Headline + Akkordeon (Plus-/Minus-Rotate). |
| `content/home/faq.ts` *(neu)* | **Add** | 6 Q/A-Paare für Homepage. |
| `content/home/cases.ts` *(neu)* | **Add** | Case-Teaser-Daten (Sonnenhof + 2 weitere). |
| `content/home/pakete.ts` *(neu)* | **Add** | 3 Einstiege („Wo starten?"). |
| `app/(marketing)/opengraph-image.tsx` *(neu)* | **Add** | OG-Image für Homepage. Ersetzt später `app/opengraph-image.tsx`. |

**Done-Kriterium:** Homepage rendert auf `/` via `(marketing)`-Layout, Mobile + Desktop sauber, Lighthouse > 95.

---

## 5 · Cases (Phase 5a)

**Ziel:** `/cases` Übersicht + `/cases/sonnenhof-herrsching` als wichtigster Proof.

| Datei | Aktion | Inhalt |
|---|---|---|
| `app/(marketing)/cases/page.tsx` *(neu)* | **Add** | Subpage-Hero + Lead-Spread Sonnenhof + Grid 2×3 ProofCards + FinalCTASection. |
| `app/(marketing)/cases/[slug]/page.tsx` *(neu)* | **Add** | Dynamisch, Slug-Param. Initial nur `sonnenhof-herrsching`-Datensatz vorhanden. `generateStaticParams` aus `content/cases/index.ts`. |
| `content/cases/index.ts` *(neu)* | **Add** | Registriert alle Cases. Schema in `content/cases/types.ts`. |
| `content/cases/sonnenhof-herrsching.ts` *(neu)* | **Add** | Headline „108 Direktanfragen", Ausgangslage, Was gebaut, Ergebnisse (3 CaseResultBlocks), Mitnehmpunkte, Stand 2026-05. |
| `components/cases/CaseHero.tsx` *(neu)* | **Add** | Crumb + SectionMark + Display-2 Headline mit Italic-Highlight + Bausteine-Pills + CTA + 4:5-Plate mit Domain-Pill. |
| `components/cases/CaseLeadSpread.tsx` *(neu)* | **Add** | Editorial-Spread auf Halbseite für Cases-Übersicht. |
| `components/cases/EditorialSplit.tsx` *(neu)* | **Add** | 2-Spalter Display-4 + Body für „Ausgangslage". |
| `components/cases/CaseResultBlock.tsx` *(neu)* | **Add** | Big-Number + Mono-Label glow + Body-Small + Disclaimer. |
| `components/cases/HairlineList.tsx` *(neu)* | **Add** | 1-Spalter mit Top-Border-Items für Mitnehmpunkte. |
| `app/case-studies/` | **Deprecate** | alte Route, am Cutover entfernen oder per `redirects` auf `/cases` umleiten. |

**Done-Kriterium:** `/cases/sonnenhof-herrsching` rendert vollständig, Disclaimer-Zeile „Zahlen aus dem laufenden Projekt, Stand 2026-05" sichtbar, Lighthouse > 95.

---

## 6 · Leistungen (Phase 5b)

**Ziel:** `/leistungen` Systemlandkarte + `/leistungen/anfrage-buchung` als Template.

| Datei | Aktion | Inhalt |
|---|---|---|
| `app/(marketing)/leistungen/page.tsx` *(neu)* | **Add** | Subpage-Hero + 5 SystemPillarCards (A–E) + WhereToStartCards + FinalCTASection. |
| `app/(marketing)/leistungen/[slug]/page.tsx` *(neu)* | **Add** | Dynamisch. Slugs: `sichtbarkeit`, `nachfrage`, `anfrage-buchung`, `zahlung`, `ai-automation`. Initial nur `anfrage-buchung` befüllt. |
| `content/leistungen/index.ts` *(neu)* | **Add** | Registry der 5 Bausteine + Pillar-Inhalte. |
| `content/leistungen/anfrage-buchung.ts` *(neu)* | **Add** | Für-wen / Typische-Probleme / Was-wir-machen (6 Items) / FAQ / Cases. |
| `components/system/SystemPillarCard.tsx` *(neu)* | **Add** | 4-Spalter `100px / 1fr / 2fr / auto` mit Buchstabe + H2 + Item-Liste 2-spaltig + Details-Link. |
| `components/system/SystemMap.tsx` *(neu)* | **Add** | 5-Spalter mit aktivem Baustein (accent-border + accent-soft-bg + „Diese Seite"-Tag). |
| `components/system/VerticalFitCard.tsx` *(neu)* | **Add** | Mini-Card 4-spaltig: Display-5 Branchen-Name + Body-Small Begründung. |
| `components/system/PipelineMockCard.tsx` *(neu)* | **Add** | 4-Step-Wizard-Mock auf Leistung-Detail-Hero. |
| `components/system/VerticalHero.tsx` *(neu)* | **Add** | wird auch von `/fewo` und `/fahrschule` genutzt. |
| `app/leistungen/` | **Deprecate** | alte Route, am Cutover entfernen. |

**Done-Kriterium:** `/leistungen` zeigt alle 5 Bausteine + Pakete-Block; `/leistungen/anfrage-buchung` hat SystemMap mit aktivem Baustein, 2 ProofCards, FAQ mit DSGVO-Antwort.

---

## 7 · Digital-Check (Phase 6)

**Ziel:** `/digital-check` als primärer Conversion-Flow. **Ersetzt** den alten Quiz unter `app/kontakt/`.

| Datei | Aktion | Inhalt |
|---|---|---|
| `app/digital-check/layout.tsx` *(neu)* | **Add** | Sticky Step-Header (Logo + Progress + Step-Counter + „Digital-Check · kostenlos") + Step-Footer-Bar mit ←-Zurück + Helper-Italic + Primary. **Kein** Standard-Header/Footer. |
| `app/digital-check/page.tsx` *(neu)* | **Add** | Multi-Step-Flow mit `useReducer`. 7 Screens. |
| `components/digital-check/StepHeader.tsx` *(neu)* | **Add** | Logo + Progress-Bar + Counter. |
| `components/digital-check/ProgressIndicator.tsx` *(neu)* | **Add** | Mono „Schritt 3 / 6" + 3px-Bar (accent → glow Gradient). |
| `components/digital-check/CheckFrame.tsx` *(neu)* | **Add** | Wrapper für jeden Step. Varianten `desktop` (Browser-artig) / `mobile` (Phone-Frame). |
| `components/digital-check/ChoiceCard.tsx` *(neu)* | **Add** | Click-Auswahl mit Radio/Checkbox. Varianten `single-select` / `multi-select` / `full-width`. |
| `components/digital-check/FormField.tsx` *(neu)* | **Add** | Mono-Label-Sm + Input mit Token-Padding. Varianten `text` / `email` / `tel` / `url` / `textarea`. |
| `components/digital-check/RadioChips.tsx` *(neu)* | **Add** | für „Mail / Rückruf / WhatsApp". |
| `components/digital-check/HumanHandoffNote.tsx` *(neu)* | **Add** | Italic-Trust-Note. |
| `components/digital-check/SuccessState.tsx` *(neu)* | **Add** | Glow-Pill + Headline + 3-Karten-Grid „Was als Nächstes passiert". |
| `components/digital-check/state.ts` *(neu)* | **Add** | Reducer + Zod-Schema für die 7 Steps. |
| `app/api/contact/route.ts` | **Refactor** | Zod-validierter POST-Handler. Resend-Mail-Versand wie in `implementation.md` §10. Kein Auto-Reply. Validation-Errors als Helper-Text. |
| `app/kontakt/` | **Deprecate** | alte Quiz-Route. Beim Cutover entweder löschen oder per `next.config.js` `redirects` auf `/digital-check` umleiten. |
| `components/quiz/` | **Deprecate** | bleibt als Referenz für Felder/Validation, später entfernen. |

**Done-Kriterium:** `/digital-check` mobile-first; alle 7 Screens spielbar; Submit landet im Postfach laut `CONTACT_EMAIL`; keine Score-Anzeige, keine Pflichtfeld-Sterne.

---

## 8 · FeWo Calm-Voicing (Phase 7, optional vor Cutover)

**Ziel:** `/fewo` als zweite Theme-Variante über `data-theme="calm"`.

| Datei | Aktion | Inhalt |
|---|---|---|
| `app/(marketing)/fewo/page.tsx` *(neu)* | **Add** | Aktiviert Calm-Theme über Root-Element (`<div data-theme="calm">…`). Section-Reihenfolge aus `page-archetypes.md` §B. |
| `components/fewo/BenefitsRow.tsx` *(neu)* | **Add** | 3 Hairline-Spalten. |
| `components/fewo/QuoteCarousel.tsx` *(neu)* | **Add** | Stellvertretende Sätze mit Mono-Note („Stellvertretend für Gespräche mit echten Gastgebern…"). |
| `components/fewo/ProcessSteps.tsx` *(neu)* | **Add** | 4 Schritte: Kurzcheck · Klarheit · Webseite stärken · Anfrageweg verbessern. |
| `components/fewo/LeakExample.tsx` *(neu)* | **Add** | Ruhige Beispielrechnung mit Disclaimer, **keine** Slider. |
| `components/fewo/InclusionList.tsx` *(neu)* | **Add** | 3-Spalten-Liste mit Häkchen. |
| `components/fewo/ClosingSignoff.tsx` *(neu)* | **Add** | Persönlicher Abschluss mit Italic-Signatur „Denis". |

**Done-Kriterium:** `/fewo` läuft mit Calm-Farben, Instrument-Serif-Akzent aktiv, Stellvertreter-Note über QuoteCarousel sichtbar.

---

## Cutover-Plan

Nach Abschluss von §4–§7 (oder §4–§8 wenn `/fewo` direkt mitkommt):

1. **Redirects** in `next.config.js` ergänzen: `/case-studies/:slug → /cases/:slug`, `/kontakt → /digital-check`, `/seo → /leistungen/sichtbarkeit`, `/webdesign → /leistungen/anfrage-buchung` (oder eigener Slug).
2. Alte Routen löschen: `app/case-studies/`, `app/kontakt/`, `app/seo/` *(falls vorhanden)*, `app/festpreis/`, `app/p/`, `app/ueber-mich/`, `app/blog/`, `app/feed.xml/`. **Vor Löschung** prüfen, ob extern verlinkt — sonst Redirect.
3. Alte Komponenten löschen: `components/Navigation.tsx`, `components/Footer.tsx` (alt), `components/Glossary.tsx`, `components/home/BeforeAfterSlider.tsx`, `components/proposal/`, `components/quiz/`, `components/shared/SectionReveal.tsx`, `components/layout/SiteShell.tsx`. **Erst** wenn keine Importe mehr.
4. `app/layout.tsx` aufräumen — Header/Footer-Imports entfernen, nur HTML-Frame + Fonts.
5. `app/page.tsx` löschen, durch `(marketing)/page.tsx` ersetzen (Routing übernimmt automatisch).
6. `app/opengraph-image.tsx` durch `app/(marketing)/opengraph-image.tsx` ersetzen.
7. `sitemap.ts` + `robots.ts` an neue Routen anpassen.
8. Compliance-Pre-Launch-Checkliste aus [`compliance.md`](./compliance.md) §9 abarbeiten.

---

## Was während des Builds **nicht** geändert wird

- `tasks.md` — bleibt als Notiz, gehört nicht in den Redesign-Pfad.
- `Brand/` — alte Brand-Assets, dürfen leben bleiben bis Cutover.
- `website-guidelines/` + `website-sections/` — **Legacy-Doku, divergiert von Implementierung.** Beim Cutover entscheiden: löschen oder in `docs/legacy/` verschieben.
- `components.json` (shadcn-Config) — bleibt, falls einzelne shadcn-Imports passen (Button, Input, Accordion können adaptiert werden, sonst eigene Komponenten).
- `app/datenschutz/`, `app/impressum/` — Inhalt bleibt, ggf. nur Styling-Refactor auf neue Tokens.

---

## Token-/Lint-Hygiene während des Builds

Nach jedem Phase-Abschluss:

```bash
node node_modules/@google/design.md/dist/index.js lint DESIGN.md
npm run lint
npm run build
```

Erst wenn alle drei grün sind, gilt eine Phase als abgeschlossen.

---

**Ende build-plan.md.**
