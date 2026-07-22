# MyHiwi AI-Startklar Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Launch a production-ready `/ki-schulung` page and qualified inquiry flow for MyHiwi AI-Startklar.

**Architecture:** A typed product-content module supplies one source for page copy and tests. The page is a server component using existing MyHiwi primitives; only the inquiry form is client-side. A dedicated validation module and API route whitelist submitted data, send the internal lead plus acknowledgement through Resend, and keep this product independent from the generic Digital-Check form.

**Tech Stack:** Next.js 14 App Router, React 18, TypeScript 5, existing MyHiwi Tailwind tokens/components, Resend, Playwright.

## Global Constraints

- Approved specification: `docs/superpowers/specs/2026-07-22-myhiwi-ai-startklar-design.md`.
- Route: `/ki-schulung`; canonical URL: `https://myhiwi.de/ki-schulung`.
- H1: `KI sinnvoll nutzen. Risiken erkennen. Sicherer entscheiden.`
- Primary CTA: `Unverbindliches Erstgespräch anfragen`.
- Online: `1.490 € netto`; on-site: `1.790 € netto`; up to 15 participants.
- Never claim legal advice, privacy approval, AI Act certification, guaranteed compliance, legal certainty, or guaranteed individual competence.
- Explain that the workshop supports structured and documentable AI competence development.
- Ask for no sensitive data and display that warning next to free-text fields.
- Reuse existing design tokens and components; do not modify `app/globals.css` for this route.
- Do not invent testimonials, logos, metrics, or customer outcomes.
- Keep the page server-rendered except for the form.
- Preserve unrelated worktree changes and commit only files named in each task.

## File Map

- `lib/ai-startklar/product.ts` — typed page copy, facts, options, agenda, FAQ.
- `lib/ai-startklar/inquiry.ts` — whitelist parsing and validation.
- `app/ki-schulung/page.tsx` — metadata, structured data, and page composition.
- `components/myhiwi/ai-startklar/AiStartklarForm.tsx` — accessible client inquiry form.
- `app/api/ai-startklar/route.ts` — validation, internal lead email, customer acknowledgement.
- `app/ki-schulung/opengraph-image.tsx` — social image.
- `lib/navigation.ts` — mobile drawer/footer discovery.
- `app/sitemap.ts` — sitemap discovery.
- `tests/ai-startklar.spec.ts` — data, validation, rendering, form, accessibility, and sitemap tests.

---

### Task 1: Typed Product Content Contract

**Files:**
- Create: `lib/ai-startklar/product.ts`
- Create: `tests/ai-startklar.spec.ts`

**Interfaces:**
- Produces: `AI_STARTKLAR`, `AI_STARTKLAR_FAQ`, `AI_STARTKLAR_FOCUS_OPTIONS`, and `formatEuro(value: number): string`.
- Consumes: exact approved product and landing-page copy.

- [ ] **Step 1: Write the failing data-contract test**

Create `tests/ai-startklar.spec.ts`:

```ts
import { expect, test } from "@playwright/test";
import {
  AI_STARTKLAR,
  AI_STARTKLAR_FAQ,
  AI_STARTKLAR_FOCUS_OPTIONS,
  formatEuro,
} from "../lib/ai-startklar/product";

test("@data hält die freigegebenen Produktfakten stabil", () => {
  expect(AI_STARTKLAR.name).toBe("MyHiwi AI-Startklar");
  expect(AI_STARTKLAR.durationMinutes).toBe(180);
  expect(AI_STARTKLAR.capacity).toBe(15);
  expect(AI_STARTKLAR.prices).toEqual({ online: 1490, onsite: 1790 });
  expect(AI_STARTKLAR.outcomes).toHaveLength(6);
  expect(AI_STARTKLAR.agenda).toHaveLength(7);
  expect(AI_STARTKLAR.boundaries).toHaveLength(6);
  expect(AI_STARTKLAR_FAQ).toHaveLength(6);
  expect(AI_STARTKLAR_FOCUS_OPTIONS).toHaveLength(6);
  expect(formatEuro(1490)).toBe("1.490 €");
});
```

- [ ] **Step 2: Run build and confirm the missing-module failure**

Run: `npm run build`  
Expected: TypeScript module-not-found error for `lib/ai-startklar/product`.

- [ ] **Step 3: Implement the product content module**

Create `lib/ai-startklar/product.ts`:

```ts
export const AI_STARTKLAR_FOCUS_OPTIONS = [
  { value: "buero-verwaltung", label: "Büro und Verwaltung" },
  { value: "vertrieb-kundenkommunikation", label: "Vertrieb und Kundenkommunikation" },
  { value: "marketing-content", label: "Marketing und Content" },
  { value: "fuehrung-entscheidungsvorbereitung", label: "Führung und Entscheidungsvorbereitung" },
  { value: "handwerk-dokumentation", label: "Handwerk und Dokumentation" },
  { value: "dienstleistung-kundenanfragen", label: "Dienstleistung und Kundenanfragen" },
] as const;

export const AI_STARTKLAR = {
  name: "MyHiwi AI-Startklar",
  subtitle: "Die praxisnahe KI-Grundlagenschulung für Unternehmen",
  title: "KI sinnvoll nutzen. Risiken erkennen. Sicherer entscheiden.",
  summary:
    "Die praxisnahe dreistündige KI-Grundlagenschulung für Unternehmen – live, verständlich und auf Ihren Arbeitsalltag zugeschnitten.",
  cta: "Unverbindliches Erstgespräch anfragen",
  durationMinutes: 180,
  capacity: 15,
  prices: { online: 1490, onsite: 1790 },
  travel:
    "Reise- und gegebenenfalls Übernachtungsaufwand wird vor Beauftragung separat ausgewiesen.",
  outcomes: [
    "geeignete KI-Aufgaben auswählen",
    "klare Prompts formulieren",
    "sensible Daten richtig einordnen",
    "typische Fehler und Grenzen erkennen",
    "Ergebnisse systematisch prüfen",
    "gemeinsame Grundregeln anwenden",
  ],
  agenda: [
    "Grundlagen generativer KI",
    "Möglichkeiten und Grenzen",
    "Gute Prompts mit sechs Bausteinen",
    "Datenampel und verantwortungsvolle Nutzung",
    "Praxisfall aus Ihrem Unternehmen",
    "Prüfung und menschliche Freigabe",
    "Fünf Regeln und nächste Schritte",
  ],
  included: [
    "30 Minuten Management-Vorgespräch",
    "Branchen-, Rollen-, Kenntnis- und Nutzungscheck",
    "Zwei sichere Praxisbeispiele aus Ihrem Arbeitsalltag",
    "Drei Stunden Live-Schulung für bis zu 15 Personen",
    "Teilnehmerheft, Promptvorlage, Datenampel und Prüfcheckliste",
    "Lerncheck, Teilnahmedokumentation und persönliche Teilnahmebestätigungen",
    "Einseitige KI-Nutzungsregel und Management-Maßnahmenblatt",
    "30 Minuten Management-Nachbesprechung",
  ],
  process: [
    "Unverbindliches Erstgespräch",
    "Vorbereitung und zwei Praxisfälle",
    "Dreistündige Live-Schulung",
    "Unterlagen und Teilnahmebestätigungen",
    "Management-Nachbesprechung",
  ],
  boundaries: [
    "keine Rechtsberatung",
    "keine Datenschutzprüfung",
    "kein Informationssicherheitsaudit",
    "keine Prüfung oder Freigabe konkreter KI-Anbieter",
    "keine Garantie eines bestimmten individuellen Kompetenzniveaus",
    "keine Compliance-Zertifizierung",
  ],
} as const;

export const AI_STARTKLAR_FAQ = [
  {
    question: "Ist die Schulung für Einsteiger geeignet?",
    answer:
      "Ja. Der gemeinsame Kern beginnt bei den Grundlagen. Erfahrenere Teilnehmende erhalten zusätzliche Prüf- und Verbesserungsaufgaben.",
  },
  {
    question: "Benötigen wir ein freigegebenes KI-Werkzeug?",
    answer:
      "Für praktische Arbeit am eigenen Gerät ja. Ohne freigegebenes Werkzeug kann die Schulung mit Trainerdemonstrationen und vorbereiteten Beispielausgaben stattfinden.",
  },
  {
    question: "Können wir eigene Dokumente verwenden?",
    answer:
      "Nur wenn sie für diesen Zweck freigegeben und für das verwendete Werkzeug geeignet sind. Standardmäßig arbeiten wir mit synthetischen oder ausreichend anonymisierten Beispielen.",
  },
  {
    question: "Hilft die Schulung beim KI-Kompetenzaufbau im Sinne des AI Acts?",
    answer:
      "Die Schulung behandelt KI-Verständnis, Nutzungskontext, Chancen, Risiken, menschliche Kontrolle und betriebliche Regeln. Sie kann den organisationsbezogenen Kompetenzaufbau unterstützen und dokumentieren. Ob Maßnahmen im Einzelfall ausreichen, hängt von Systemen, Rollen und Risiken ab und wird nicht rechtlich garantiert.",
  },
  {
    question: "Erhalten Teilnehmende ein Zertifikat?",
    answer:
      "Sie erhalten eine persönliche Teilnahmebestätigung mit Datum, Dauer und Inhalten. Sie ist keine rechtliche Zertifizierung oder Compliance-Bestätigung.",
  },
  {
    question: "Was ist bei sensiblen Branchen oder Einsatzfällen?",
    answer:
      "Grundlagen können häufig im Standardformat vermittelt werden. Gesundheits-, Personal-, Finanz-, Scoring-, biometrische oder besonders folgenreiche Anwendungen werden nicht im Basistraining freigegeben und können eine gesonderte Prüfung benötigen.",
  },
] as const;

export function formatEuro(value: number): string {
  return `${new Intl.NumberFormat("de-DE", { maximumFractionDigits: 0 }).format(value)} €`;
}
```

- [ ] **Step 4: Build, run the data test, and commit**

Run `npm run build`, then `npx playwright test tests/ai-startklar.spec.ts --grep "@data"`.  
Expected: build succeeds and one test passes.

```bash
git add lib/ai-startklar/product.ts tests/ai-startklar.spec.ts
git commit -m "feat: add AI-Startklar web content model"
```

---

### Task 2: Inquiry Validation and API Route

**Files:**
- Create: `lib/ai-startklar/inquiry.ts`
- Create: `app/api/ai-startklar/route.ts`
- Modify: `tests/ai-startklar.spec.ts`

**Interfaces:**
- Produces: `parseAiStartklarInquiry(input: unknown): InquiryParseResult`.
- Produces: `POST /api/ai-startklar` returning `{ success: true }`, `{ error: string }` with 400, or generic 500.
- Consumes: whitelisted fields `company`, `name`, `email`, `participants`, `format`, `timeframe`, `tools`, `focus`, `phone`, `message`, `consent`, `page`.

- [ ] **Step 1: Write failing parser tests**

Append to `tests/ai-startklar.spec.ts`:

```ts
import { parseAiStartklarInquiry } from "../lib/ai-startklar/inquiry";

test("@validation lehnt unvollständige und sensible Freitext-Überlängen ab", () => {
  expect(parseAiStartklarInquiry({})).toEqual({
    ok: false,
    error: "Bitte füllen Sie alle Pflichtfelder aus.",
  });
  expect(
    parseAiStartklarInquiry({
      company: "Muster GmbH",
      name: "Mara Muster",
      email: "mara@example.de",
      participants: 12,
      format: "online",
      timeframe: "September 2026",
      tools: "Microsoft Copilot",
      focus: "buero-verwaltung",
      message: "x".repeat(1601),
      consent: true,
    }),
  ).toEqual({ ok: false, error: "Die Nachricht ist zu lang." });
});

test("@validation normalisiert eine gültige Anfrage", () => {
  const result = parseAiStartklarInquiry({
    company: "  Muster GmbH ",
    name: " Mara Muster ",
    email: " mara@example.de ",
    participants: "12",
    format: "online",
    timeframe: "September 2026",
    tools: "Microsoft Copilot",
    focus: "buero-verwaltung",
    phone: "",
    message: "Erster gemeinsamer Wissensstand",
    consent: true,
    page: "https://myhiwi.de/ki-schulung?utm_source=partner",
  });
  expect(result.ok).toBe(true);
  if (result.ok) {
    expect(result.data.company).toBe("Muster GmbH");
    expect(result.data.participants).toBe(12);
    expect(result.data.phone).toBeNull();
  }
});
```

- [ ] **Step 2: Run and confirm missing-module failure**

Run: `npm run build`  
Expected: module-not-found error for `lib/ai-startklar/inquiry`.

- [ ] **Step 3: Implement whitelist parsing**

Create `lib/ai-startklar/inquiry.ts`:

```ts
import { AI_STARTKLAR_FOCUS_OPTIONS } from "./product";

export type InquiryFormat = "online" | "vor-ort" | "offen";
export type InquiryFocus = (typeof AI_STARTKLAR_FOCUS_OPTIONS)[number]["value"];

export type AiStartklarInquiry = {
  company: string;
  name: string;
  email: string;
  participants: number;
  format: InquiryFormat;
  timeframe: string;
  tools: string;
  focus: InquiryFocus;
  phone: string | null;
  message: string | null;
  page: string | null;
};

export type InquiryParseResult =
  | { ok: true; data: AiStartklarInquiry }
  | { ok: false; error: string };

const formats: InquiryFormat[] = ["online", "vor-ort", "offen"];
const focuses = new Set<string>(AI_STARTKLAR_FOCUS_OPTIONS.map((item) => item.value));
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, max: number): string | null {
  if (typeof value !== "string") return null;
  const result = value.trim();
  if (!result || result.length > max) return null;
  return result;
}

export function parseAiStartklarInquiry(input: unknown): InquiryParseResult {
  if (typeof input !== "object" || input === null || Array.isArray(input)) {
    return { ok: false, error: "Bitte füllen Sie alle Pflichtfelder aus." };
  }
  const body = input as Record<string, unknown>;
  if (typeof body.message === "string" && body.message.trim().length > 1600) {
    return { ok: false, error: "Die Nachricht ist zu lang." };
  }
  const company = clean(body.company, 160);
  const name = clean(body.name, 120);
  const email = clean(body.email, 240);
  const timeframe = clean(body.timeframe, 120);
  const tools = clean(body.tools, 500);
  const format = clean(body.format, 20) as InquiryFormat | null;
  const focus = clean(body.focus, 80) as InquiryFocus | null;
  const participants = Number.parseInt(String(body.participants ?? ""), 10);

  if (
    !company || !name || !email || !timeframe || !tools || !format || !focus ||
    !Number.isInteger(participants) || body.consent !== true
  ) {
    return { ok: false, error: "Bitte füllen Sie alle Pflichtfelder aus." };
  }
  if (!emailPattern.test(email)) return { ok: false, error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." };
  if (participants < 1 || participants > 500) return { ok: false, error: "Bitte geben Sie eine gültige Teilnehmerzahl ein." };
  if (!formats.includes(format)) return { ok: false, error: "Bitte wählen Sie ein gültiges Format." };
  if (!focuses.has(focus)) return { ok: false, error: "Bitte wählen Sie einen gültigen Schwerpunkt." };

  return {
    ok: true,
    data: {
      company,
      name,
      email,
      participants,
      format,
      timeframe,
      tools,
      focus,
      phone: clean(body.phone, 80),
      message: clean(body.message, 1600),
      page: clean(body.page, 500),
    },
  };
}
```

- [ ] **Step 4: Run parser tests**

Run `npm run build`, then `npx playwright test tests/ai-startklar.spec.ts --grep "@validation"`.  
Expected: two tests pass.

- [ ] **Step 5: Write a failing invalid-request API test**

Append:

```ts
test("@api weist eine unvollständige Anfrage vor dem Mailversand ab", async ({ request }) => {
  const response = await request.post("/api/ai-startklar", { data: {} });
  expect(response.status()).toBe(400);
  expect(await response.json()).toEqual({ error: "Bitte füllen Sie alle Pflichtfelder aus." });
});
```

Run the targeted test. Expected: 404 before the route exists.

- [ ] **Step 6: Implement the dedicated API route**

Create `app/api/ai-startklar/route.ts`:

```ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { AI_STARTKLAR_FOCUS_OPTIONS } from "@/lib/ai-startklar/product";
import { parseAiStartklarInquiry } from "@/lib/ai-startklar/inquiry";

export const runtime = "nodejs";
export const maxDuration = 30;

const focusLabels = new Map<string, string>(
  AI_STARTKLAR_FOCUS_OPTIONS.map((item) => [item.value, item.label]),
);
const formatLabels: Record<string, string> = {
  online: "Online",
  "vor-ort": "Vor Ort",
  offen: "Noch offen",
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;");
}

function subjectPart(value: string): string {
  return value.replace(/[\r\n]+/g, " ");
}

export async function POST(request: NextRequest) {
  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Bitte füllen Sie alle Pflichtfelder aus." },
        { status: 400 },
      );
    }
    const parsed = parseAiStartklarInquiry(body);
    if (!parsed.ok) return NextResponse.json({ error: parsed.error }, { status: 400 });

    const data = parsed.data;
    const resend = new Resend(process.env.RESEND_API_KEY);
    const recipients = (process.env.CONTACT_EMAIL || "denis@myhiwi.de")
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean);
    const row = (label: string, value: string | number | null) => `
      <tr>
        <td style="padding:8px 12px;font-weight:700;border-bottom:1px solid #e2e8f0">${escapeHtml(label)}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #e2e8f0">${escapeHtml(String(value ?? "—"))}</td>
      </tr>`;
    const html = `
      <div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;color:#0f172a">
        <h2>Neue Anfrage: MyHiwi AI-Startklar</h2>
        <table style="width:100%;border-collapse:collapse">
          ${row("Unternehmen", data.company)}
          ${row("Name", data.name)}
          ${row("E-Mail", data.email)}
          ${row("Telefon", data.phone)}
          ${row("Teilnehmende", data.participants)}
          ${row("Format", formatLabels[data.format])}
          ${row("Zeitraum", data.timeframe)}
          ${row("Werkzeuge", data.tools)}
          ${row("Fokus", focusLabels.get(data.focus) ?? data.focus)}
          ${row("Nachricht", data.message)}
          ${row("Seite", data.page)}
        </table>
        <p style="margin-top:20px;font-size:12px;color:#64748b">Einwilligung zur Kontaktaufnahme: Ja</p>
      </div>`;

    const internal = await resend.emails.send({
      from: "MyHiwi Formular <formular@myhiwi.de>",
      to: recipients,
      replyTo: data.email,
      subject: `AI-Startklar: ${subjectPart(data.company)} — ${subjectPart(data.name)}`,
      html,
    });
    if (internal.error) throw new Error(internal.error.message);

    try {
      const firstName = escapeHtml(data.name.split(/\s+/)[0] || data.name);
      const acknowledgement = await resend.emails.send({
        from: "MyHiwi <kontakt@myhiwi.de>",
        to: data.email,
        replyTo: "kontakt@myhiwi.de",
        subject: "Ihre Anfrage zu MyHiwi AI-Startklar",
        html: `<div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;color:#0f172a">
          <p>Hallo ${firstName},</p>
          <p>vielen Dank für Ihre Anfrage zu MyHiwi AI-Startklar. Wir prüfen Teilnehmerzahl, Format, Zeitraum, Werkzeuge und gewünschten Schwerpunkt und melden uns persönlich mit dem passenden nächsten Schritt.</p>
          <p>Bitte senden Sie uns bis dahin keine personenbezogenen, vertraulichen oder sicherheitsrelevanten Inhalte.</p>
          <p>Viele Grüße<br>MyHiwi</p>
        </div>`,
      });
      if (acknowledgement.error) {
        console.error("AI-Startklar acknowledgement failed", acknowledgement.error);
      }
    } catch (error) {
      console.error("AI-Startklar acknowledgement failed", error);
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("AI-Startklar inquiry failed", error);
    return NextResponse.json(
      { error: "Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut." },
      { status: 500 },
    );
  }
}
```

- [ ] **Step 7: Run API test and commit**

Run: `npx playwright test tests/ai-startklar.spec.ts --grep "@api"`  
Expected: one test passes without calling Resend.

```bash
git add lib/ai-startklar/inquiry.ts app/api/ai-startklar/route.ts tests/ai-startklar.spec.ts
git commit -m "feat: add AI-Startklar inquiry API"
```

---

### Task 3: Server-Rendered Landing Page

**Files:**
- Create: `app/ki-schulung/page.tsx`
- Modify: `tests/ai-startklar.spec.ts`

**Interfaces:**
- Consumes: `AI_STARTKLAR`, `AI_STARTKLAR_FAQ`, existing `Section`, `Container`, `SectionMark`, `Card`, `BtnPrimary`, `CtaRow`, and `FAQAccordion`.
- Produces: server-rendered `/ki-schulung` with approved hierarchy and `#erstgespraech` conversion target.

- [ ] **Step 1: Write the failing page-content test**

Append:

```ts
test("@page rendert Nutzen, Ablauf, Preis und Leistungsgrenze im Server-HTML", async ({ request }) => {
  const response = await request.get("/ki-schulung", { headers: { accept: "text/html" } });
  expect(response.status()).toBe(200);
  const html = await response.text();
  expect(html).toContain("KI sinnvoll nutzen. Risiken erkennen. Sicherer entscheiden.");
  expect(html).toContain("1.490");
  expect(html).toContain("1.790");
  expect(html).toContain("bis 15 Personen");
  expect(html).toContain("keine Rechtsberatung");
  expect(html).toContain('id="erstgespraech"');
  expect(html).not.toMatch(/AI[- ]?Act[- ]?zertifiziert|garantiert compliant|100\s*%\s*DSGVO/i);
});
```

Run the targeted test. Expected: 404.

- [ ] **Step 2: Implement the page composition**

Create `app/ki-schulung/page.tsx`:

```tsx
import type { Metadata } from "next";
import { Check, Clock3, ShieldCheck } from "lucide-react";
import { AI_STARTKLAR, AI_STARTKLAR_FAQ, formatEuro } from "@/lib/ai-startklar/product";
import { Card } from "@/components/myhiwi/card/Card";
import { BtnPrimary } from "@/components/myhiwi/cta/BtnPrimary";
import { CtaRow } from "@/components/myhiwi/cta/CtaRow";
import { FAQAccordion, type FAQItem } from "@/components/myhiwi/faq/FAQAccordion";
import { Container } from "@/components/myhiwi/layout/Container";
import { Section } from "@/components/myhiwi/layout/Section";
import { SectionMark } from "@/components/myhiwi/layout/SectionMark";

export const metadata: Metadata = {
  title: "KI-Schulung für Unternehmen",
  description:
    "Dreistündige KI-Grundlagenschulung für Unternehmen: sinnvolle Anwendungen, bessere Prompts, Datenampel, Ergebnisprüfung und klare Nutzungsregeln.",
  alternates: { canonical: "https://myhiwi.de/ki-schulung" },
};

const faqItems: FAQItem[] = AI_STARTKLAR_FAQ.map((item) => ({
  question: item.question,
  answer: <p>{item.answer}</p>,
}));

export default function KiSchulungPage() {
  return (
    <>
      <Section background="paper" padding="large">
        <Container>
          <div className="max-w-[820px]">
            <SectionMark index="00" label={AI_STARTKLAR.name} tone="accent" />
            <h1 className="mt-mh-4 mh-display-1 mh-hero-title">{AI_STARTKLAR.title}</h1>
            <p className="mt-mh-5 max-w-mh-text mh-body-large text-mh-text-secondary">
              {AI_STARTKLAR.summary}
            </p>
            <p className="mt-mh-4 mh-label-mono text-mh-text-secondary">
              3 Stunden live · bis 15 Personen · online ab {formatEuro(AI_STARTKLAR.prices.online)} netto
            </p>
            <CtaRow className="mt-mh-6" microcopy="unverbindlich · klare Fit-Prüfung · direkt mit MyHiwi">
              <BtnPrimary href="#erstgespraech" fullWidthOnMobile>
                {AI_STARTKLAR.cta}
              </BtnPrimary>
            </CtaRow>
          </div>
        </Container>
      </Section>

      <Section background="subtle" padding="large">
        <Container>
          <SectionMark index="01" label="Ergebnis" />
          <h2 className="mt-mh-4 max-w-[760px] mh-display-3">Nach der Schulung kann Ihr Team</h2>
          <div className="mt-mh-6 grid gap-mh-3 md:grid-cols-2 lg:grid-cols-3">
            {AI_STARTKLAR.outcomes.map((outcome) => (
              <Card key={outcome} padded="compact" className="flex gap-mh-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-mh-accent" aria-hidden="true" />
                <span className="mh-body-small text-mh-text-secondary">{outcome}</span>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="paper" padding="large">
        <Container>
          <div className="grid gap-mh-8 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionMark index="02" label="Für wen" />
              <h2 className="mt-mh-4 mh-display-3">Ein gemeinsamer Standard statt einzelner Experimente.</h2>
            </div>
            <div className="space-y-mh-4 mh-body-large text-mh-text-secondary">
              <p>Für Unternehmen, die generative KI bereits nutzen oder kontrolliert einführen möchten.</p>
              <p>Geeignet für Geschäftsführung, Verwaltung, Vertrieb, Marketing, Service und nicht sicherheitskritische Dokumentationsaufgaben.</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="ink" padding="large">
        <Container>
          <SectionMark index="03" label="Drei Stunden" tone="accent" onDark />
          <h2 className="mt-mh-4 max-w-[760px] mh-display-3 text-mh-text-on-dark">Theorie, sichere Anwendung und Ihr Arbeitsalltag.</h2>
          <ol className="mt-mh-7 grid gap-mh-3 md:grid-cols-2">
            {AI_STARTKLAR.agenda.map((item, index) => (
              <li key={item} className="flex gap-mh-4 rounded-mh-lg border border-mh-text-on-dark/10 p-mh-5">
                <span className="mh-label-mono text-mh-glow">{String(index + 1).padStart(2, "0")}</span>
                <span className="mh-body-medium text-mh-text-on-dark/85">{item}</span>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section background="paper" padding="large">
        <Container>
          <div className="grid gap-mh-6 lg:grid-cols-2">
            <Card>
              <Clock3 className="h-6 w-6 text-mh-accent" aria-hidden="true" />
              <h2 className="mt-mh-4 mh-display-4">Auf Ihr Unternehmen vorbereitet</h2>
              <p className="mt-mh-3 mh-body-medium text-mh-text-secondary">Vor dem Termin klären wir Werkzeuge, Rollen, Vorkenntnisse und typische Aufgaben. Daraus entstehen zwei sichere Praxisbeispiele.</p>
            </Card>
            <Card>
              <ShieldCheck className="h-6 w-6 text-mh-accent" aria-hidden="true" />
              <h2 className="mt-mh-4 mh-display-4">Keine sensiblen Originaldaten nötig</h2>
              <p className="mt-mh-3 mh-body-medium text-mh-text-secondary">Wir arbeiten standardmäßig mit synthetischen oder ausreichend anonymisierten Beispielen und einem freigegebenen Werkzeug oder Trainer-Demo.</p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section background="subtle" padding="large">
        <Container>
          <SectionMark index="04" label="Enthalten" />
          <div className="mt-mh-6 grid gap-mh-3 md:grid-cols-2">
            {AI_STARTKLAR.included.map((item) => (
              <div key={item} className="flex gap-mh-3 border-t border-mh-divider pt-mh-4">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-mh-accent" aria-hidden="true" />
                <span className="mh-body-small text-mh-text-secondary">{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="paper" padding="large">
        <Container>
          <SectionMark index="05" label="Pakete" />
          <div className="mt-mh-6 grid gap-mh-4 md:grid-cols-2">
            <Card>
              <span className="mh-label-mono text-mh-accent">Online</span>
              <p className="mt-mh-3 mh-display-2">{formatEuro(AI_STARTKLAR.prices.online)} <span className="mh-body-small">netto</span></p>
              <p className="mt-mh-2 mh-body-medium text-mh-text-secondary">3 Stunden live · bis 15 Personen</p>
            </Card>
            <Card>
              <span className="mh-label-mono text-mh-accent">Vor Ort</span>
              <p className="mt-mh-3 mh-display-2">{formatEuro(AI_STARTKLAR.prices.onsite)} <span className="mh-body-small">netto</span></p>
              <p className="mt-mh-2 mh-body-medium text-mh-text-secondary">3 Stunden live · bis 15 Personen</p>
              <p className="mt-mh-3 mh-body-xs text-mh-text-secondary">{AI_STARTKLAR.travel}</p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section background="subtle" padding="large">
        <Container>
          <SectionMark index="06" label="Zusammenarbeit" />
          <ol className="mt-mh-6 grid gap-mh-3 lg:grid-cols-5">
            {AI_STARTKLAR.process.map((item, index) => (
              <Card key={item} padded="compact">
                <span className="mh-label-mono text-mh-accent">{String(index + 1).padStart(2, "0")}</span>
                <p className="mt-mh-3 mh-body-small font-semibold">{item}</p>
              </Card>
            ))}
          </ol>
        </Container>
      </Section>

      <Section background="paper" padding="compact">
        <Container className="max-w-[900px]">
          <Card tone="ink">
            <span className="mh-label-mono text-mh-glow">Klare Leistungsgrenze</span>
            <p className="mt-mh-4 mh-body-large text-mh-text-on-dark/85">AI-Startklar unterstützt den strukturierten und dokumentierbaren Aufbau grundlegender KI-Kompetenz.</p>
            <ul className="mt-mh-4 grid gap-mh-2 md:grid-cols-2">
              {AI_STARTKLAR.boundaries.map((item) => <li key={item} className="mh-body-small text-mh-text-on-dark/70">· {item}</li>)}
            </ul>
          </Card>
        </Container>
      </Section>

      <Section background="subtle" padding="large">
        <Container className="max-w-[900px]">
          <SectionMark index="FAQ" label="Häufige Fragen" />
          <div className="mt-mh-5"><FAQAccordion title="AI-Startklar – häufige Fragen" items={faqItems} defaultOpenIndex={0} /></div>
        </Container>
      </Section>

      <Section id="erstgespraech" background="ink" padding="finalCta" finalCta>
        <Container>
          <div className="max-w-3xl">
            <SectionMark index="→" label="Erstgespräch" tone="accent" onDark />
            <h2 className="mt-mh-4 mh-display-2">Passt AI-Startklar zu Ihrem Team?</h2>
            <p className="mt-mh-5 mh-body-large text-mh-text-on-dark/80">Im unverbindlichen Erstgespräch klären wir Teilnehmer, Werkzeug, Praxisfokus und sensible Themen. Bitte senden Sie keine personenbezogenen, vertraulichen oder sicherheitsrelevanten Inhalte.</p>
            <a className="mt-mh-6 inline-flex font-semibold text-mh-glow" href="mailto:kontakt@myhiwi.de?subject=Anfrage%20AI-Startklar">kontakt@myhiwi.de</a>
          </div>
        </Container>
      </Section>
    </>
  );
}
```

- [ ] **Step 3: Run rendering test and inspect both viewports**

Run: `npx playwright test tests/ai-startklar.spec.ts --grep "@page"`  
Expected: one test passes.

Open the route at 1440×1000 and 390×844. Confirm no horizontal overflow, H1 fits without collision, CTAs are visible, price cards do not imply travel inclusion, and the boundary is readable without dominating the page.

- [ ] **Step 4: Commit the server-rendered page**

```bash
git add app/ki-schulung/page.tsx tests/ai-startklar.spec.ts
git commit -m "feat: add AI-Startklar landing page"
```

---

### Task 4: Accessible Qualified-Inquiry Form

**Files:**
- Create: `components/myhiwi/ai-startklar/AiStartklarForm.tsx`
- Modify: `app/ki-schulung/page.tsx`
- Modify: `tests/ai-startklar.spec.ts`

**Interfaces:**
- Consumes: `AI_STARTKLAR_FOCUS_OPTIONS` and `POST /api/ai-startklar`.
- Produces: accessible form with company, contact, participants, format, timeframe, tools, focus, optional phone/message, consent, status, and acknowledgement.

- [ ] **Step 1: Write failing form and success-flow tests**

Append:

```ts
test("@form zeigt alle Qualifizierungsfelder und den Sensitivitätshinweis", async ({ page }) => {
  await page.goto("/ki-schulung#erstgespraech");
  await expect(page.getByLabel("Unternehmen")).toBeVisible();
  await expect(page.getByLabel("Vor- und Nachname")).toBeVisible();
  await expect(page.getByLabel("Geschäftliche E-Mail-Adresse")).toBeVisible();
  await expect(page.getByLabel("Ungefähre Teilnehmerzahl")).toBeVisible();
  await expect(page.getByLabel("Gewünschtes Format")).toBeVisible();
  await expect(page.getByLabel("Gewünschter Zeitraum")).toBeVisible();
  await expect(page.getByLabel("Aktuell genutzte oder geplante KI-Werkzeuge")).toBeVisible();
  await expect(page.getByLabel("Gewünschter Schulungsfokus")).toBeVisible();
  await expect(page.getByText(/keine personenbezogenen, vertraulichen oder sicherheitsrelevanten Inhalte/i)).toBeVisible();
});

test("@form sendet nur die freigegebene Anfrage und bestätigt den Eingang", async ({ page }) => {
  let payload: Record<string, unknown> | undefined;
  await page.route("**/api/ai-startklar", async (route) => {
    payload = route.request().postDataJSON();
    await route.fulfill({ status: 200, contentType: "application/json", body: '{"success":true}' });
  });
  await page.goto("/ki-schulung#erstgespraech");
  await page.getByLabel("Unternehmen").fill("Muster GmbH");
  await page.getByLabel("Vor- und Nachname").fill("Mara Muster");
  await page.getByLabel("Geschäftliche E-Mail-Adresse").fill("mara@example.de");
  await page.getByLabel("Ungefähre Teilnehmerzahl").fill("12");
  await page.getByLabel("Gewünschtes Format").selectOption("online");
  await page.getByLabel("Gewünschter Zeitraum").fill("September 2026");
  await page.getByLabel("Aktuell genutzte oder geplante KI-Werkzeuge").fill("Microsoft Copilot");
  await page.getByLabel("Gewünschter Schulungsfokus").selectOption("buero-verwaltung");
  await page.getByLabel(/Ich bin einverstanden/).check();
  await page.getByRole("button", { name: "Erstgespräch anfragen" }).click();
  await expect(page.getByRole("heading", { name: "Danke – Ihre Anfrage ist angekommen." })).toBeVisible();
  expect(payload).toMatchObject({
    company: "Muster GmbH",
    name: "Mara Muster",
    email: "mara@example.de",
    participants: 12,
    format: "online",
    focus: "buero-verwaltung",
    consent: true,
  });
});
```

Run targeted tests. Expected: label/form failures because the component is absent.

- [ ] **Step 2: Implement the client form**

Create `components/myhiwi/ai-startklar/AiStartklarForm.tsx`:

```tsx
"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { AI_STARTKLAR_FOCUS_OPTIONS } from "@/lib/ai-startklar/product";
import { BtnPrimary } from "@/components/myhiwi/cta/BtnPrimary";
import { Card } from "@/components/myhiwi/card/Card";

const fieldClass =
  "mt-mh-2 w-full rounded-mh-sm border border-mh-divider bg-mh-paper px-mh-4 py-mh-3 font-mh-body text-[16px] text-mh-text-primary shadow-sm transition-colors placeholder:text-mh-text-secondary/60 focus:border-mh-accent focus:outline-none focus:ring-2 focus:ring-mh-accent/20";
const labelClass = "mh-body-small font-semibold text-mh-text-primary";

export function AiStartklarForm() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    const form = event.currentTarget;
    const values = new FormData(form);
    const payload = {
      company: values.get("company"),
      name: values.get("name"),
      email: values.get("email"),
      participants: Number(values.get("participants")),
      format: values.get("format"),
      timeframe: values.get("timeframe"),
      tools: values.get("tools"),
      focus: values.get("focus"),
      phone: values.get("phone"),
      message: values.get("message"),
      consent: values.get("consent") === "on",
      page: window.location.href,
    };

    setSubmitting(true);
    try {
      const response = await fetch("/api/ai-startklar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || "Anfrage konnte nicht gesendet werden.");
      setDone(true);
      form.reset();
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Anfrage konnte nicht gesendet werden.");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <Card className="flex flex-col gap-mh-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-mh-md bg-mh-accent-soft text-mh-accent">
          <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
        </span>
        <h3 className="mh-display-4">Danke – Ihre Anfrage ist angekommen.</h3>
        <p className="mh-body-medium text-mh-text-secondary">
          Wir prüfen, ob das Standardpaket zu Teilnehmerzahl, Format, Werkzeugen und Schwerpunkt passt, und melden uns persönlich mit dem passenden nächsten Schritt.
        </p>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card className="space-y-mh-5">
      <div>
        <h3 className="mh-display-4">Unverbindliches Erstgespräch anfragen</h3>
        <p className="mt-mh-2 mh-body-small text-mh-text-secondary">Die Angaben helfen uns, Standardpaket und Sonderbedarf vor dem Gespräch zu unterscheiden.</p>
      </div>

      <div>
        <label htmlFor="ai-startklar-company" className={labelClass}>Unternehmen</label>
        <input id="ai-startklar-company" name="company" required autoComplete="organization" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="ai-startklar-name" className={labelClass}>Vor- und Nachname</label>
        <input id="ai-startklar-name" name="name" required autoComplete="name" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="ai-startklar-email" className={labelClass}>Geschäftliche E-Mail-Adresse</label>
        <input id="ai-startklar-email" name="email" type="email" required autoComplete="email" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="ai-startklar-participants" className={labelClass}>Ungefähre Teilnehmerzahl</label>
        <input id="ai-startklar-participants" name="participants" type="number" required min={1} max={500} inputMode="numeric" className={fieldClass} />
        <p className="mt-mh-2 mh-body-xs text-mh-text-secondary">Das Standardpaket gilt für bis zu 15 Personen. Größere Gruppen kalkulieren wir individuell.</p>
      </div>
      <div>
        <label htmlFor="ai-startklar-format" className={labelClass}>Gewünschtes Format</label>
        <select id="ai-startklar-format" name="format" required defaultValue="" className={fieldClass}>
          <option value="" disabled>Bitte wählen</option>
          <option value="online">Online</option>
          <option value="vor-ort">Vor Ort</option>
          <option value="offen">Noch offen</option>
        </select>
      </div>
      <div>
        <label htmlFor="ai-startklar-timeframe" className={labelClass}>Gewünschter Zeitraum</label>
        <input id="ai-startklar-timeframe" name="timeframe" required placeholder="z. B. September 2026" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="ai-startklar-tools" className={labelClass}>Aktuell genutzte oder geplante KI-Werkzeuge</label>
        <textarea id="ai-startklar-tools" name="tools" required rows={2} placeholder="z. B. Microsoft Copilot, ChatGPT oder noch offen" className={`${fieldClass} resize-y`} />
      </div>
      <div>
        <label htmlFor="ai-startklar-focus" className={labelClass}>Gewünschter Schulungsfokus</label>
        <select id="ai-startklar-focus" name="focus" required defaultValue="" className={fieldClass}>
          <option value="" disabled>Bitte wählen</option>
          {AI_STARTKLAR_FOCUS_OPTIONS.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="ai-startklar-phone" className={labelClass}>Telefon <span className="font-normal text-mh-text-secondary">(optional)</span></label>
        <input id="ai-startklar-phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="ai-startklar-message" className={labelClass}>Kurze Ergänzung <span className="font-normal text-mh-text-secondary">(optional)</span></label>
        <textarea id="ai-startklar-message" name="message" maxLength={1600} rows={3} className={`${fieldClass} resize-y`} />
        <p className="mt-mh-2 mh-body-xs font-semibold text-mh-text-secondary">Bitte übermitteln Sie keine personenbezogenen, vertraulichen oder sicherheitsrelevanten Inhalte.</p>
      </div>

      {error ? <p role="alert" aria-live="polite" className="rounded-mh-sm border border-red-200 bg-red-50 px-mh-4 py-mh-3 mh-body-small text-red-700">{error}</p> : null}

      <label className="flex cursor-pointer items-start gap-mh-3">
        <input name="consent" type="checkbox" required className="mt-0.5 h-[18px] w-[18px] shrink-0 accent-[color:var(--mh-accent)]" />
        <span className="mh-body-xs text-mh-text-secondary">
          Ich bin einverstanden, dass MyHiwi sich zu meiner Anfrage bei mir meldet. <a href="/datenschutz" className="font-semibold text-mh-accent">Datenschutz</a>
        </span>
      </label>
        <BtnPrimary type="submit" disabled={submitting} fullWidthOnMobile>
          {submitting ? <><Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />Wird gesendet…</> : "Erstgespräch anfragen"}
        </BtnPrimary>
      </Card>
    </form>
  );
}
```

- [ ] **Step 3: Replace temporary email CTA with the form**

Add:

```tsx
import { AiStartklarForm } from "@/components/myhiwi/ai-startklar/AiStartklarForm";
```

Replace the temporary final-section inner content with:

```tsx
<Container>
  <div className="grid gap-mh-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
    <div>
      <SectionMark index="→" label="Erstgespräch" tone="accent" onDark />
      <h2 className="mt-mh-4 mh-display-2">Passt AI-Startklar zu Ihrem Team?</h2>
      <p className="mt-mh-5 mh-body-large text-mh-text-on-dark/80">
        In 25 bis 30 Minuten klären wir Teilnehmer, Wissensstand, Werkzeug, Praxisfokus und sensible Themen. Danach erhalten Sie eine klare Empfehlung: Standardpaket, individuelles Angebot oder zuerst eine fachliche Spezialprüfung.
      </p>
      <p className="mt-mh-4 mh-body-small text-mh-text-on-dark/65">
        Kein automatisches Angebot und keine pauschale rechtliche Freigabe.
      </p>
    </div>
    <AiStartklarForm />
  </div>
</Container>
```

- [ ] **Step 4: Run form tests, keyboard check, and commit**

Run: `npx playwright test tests/ai-startklar.spec.ts --grep "@form"`  
Expected: two tests pass.

Keyboard-tab through every field, checkbox, privacy link, and submit button; verify visible focus and that the error box is announced. Test at 390 px width and 200 percent browser zoom.

```bash
git add components/myhiwi/ai-startklar/AiStartklarForm.tsx app/ki-schulung/page.tsx tests/ai-startklar.spec.ts
git commit -m "feat: add AI-Startklar inquiry form"
```

---

### Task 5: Structured Data, Social Image, Sitemap, and Navigation

**Files:**
- Create: `app/ki-schulung/opengraph-image.tsx`
- Modify: `app/ki-schulung/page.tsx`
- Modify: `app/sitemap.ts`
- Modify: `lib/navigation.ts`
- Modify: `tests/ai-startklar.spec.ts`

**Interfaces:**
- Consumes: product content and FAQ.
- Produces: `Service`, `FAQPage`, and `BreadcrumbList` JSON-LD; Open Graph image; sitemap URL; drawer/footer links.

- [ ] **Step 1: Write failing discovery and structured-data tests**

Append:

```ts
test("@seo liefert kanonische Metadaten, Schema und Sitemap-Eintrag", async ({ request }) => {
  const pageResponse = await request.get("/ki-schulung");
  const html = await pageResponse.text();
  expect(html).toContain('<link rel="canonical" href="https://myhiwi.de/ki-schulung"');
  expect(html).toContain('"@type":"Service"');
  expect(html).toContain('"@type":"FAQPage"');
  expect(html).toContain('"@type":"BreadcrumbList"');
  expect(html).toContain("/ki-schulung/opengraph-image");

  const sitemap = await (await request.get("/sitemap.xml")).text();
  expect(sitemap).toContain("https://myhiwi.de/ki-schulung");
});

test("@seo macht die KI-Schulung in Drawer und Footer auffindbar", async ({ page }) => {
  await page.goto("/ki-schulung");
  const links = page.getByRole("link", { name: "KI-Schulung für Unternehmen" });
  await expect(links).toHaveCount(1);
});
```

Run targeted tests. Expected: schema, OG image, sitemap, and navigation failures.

- [ ] **Step 2: Add JSON-LD and complete metadata**

Extend `metadata` with:

```ts
openGraph: {
  title: "KI-Schulung für Unternehmen | MyHiwi AI-Startklar",
  description: "Drei Stunden live: KI-Grundlagen, gute Prompts, Datenampel, Ergebnisprüfung und klare Nutzungsregeln.",
  url: "https://myhiwi.de/ki-schulung",
  type: "website",
  images: [{ url: "/ki-schulung/opengraph-image", width: 1200, height: 630 }],
},
```

Add above the page component:

```ts
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: AI_STARTKLAR.name,
    description: AI_STARTKLAR.summary,
    serviceType: "KI-Grundlagenschulung für Unternehmen",
    provider: { "@type": "Organization", name: "MyHiwi", url: "https://myhiwi.de" },
    areaServed: { "@type": "Country", name: "Deutschland" },
    url: "https://myhiwi.de/ki-schulung",
    offers: [
      { "@type": "Offer", name: "Online", price: "1490", priceCurrency: "EUR" },
      { "@type": "Offer", name: "Vor Ort", price: "1790", priceCurrency: "EUR" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: AI_STARTKLAR_FAQ.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Start", item: "https://myhiwi.de" },
      { "@type": "ListItem", position: 2, name: "KI-Schulung", item: "https://myhiwi.de/ki-schulung" },
    ],
  },
];
```

Render as the first children inside the fragment:

```tsx
{jsonLd.map((schema, index) => (
  <script
    key={index}
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
))}
```

Do not add `AggregateRating`, reviews, or unsupported claims.

- [ ] **Step 3: Create the social image**

Create `app/ki-schulung/opengraph-image.tsx`:

```tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MyHiwi AI-Startklar – KI sinnvoll nutzen. Risiken erkennen. Sicherer entscheiden.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0F172A", color: "#FFFFFF", padding: "72px 80px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 28, fontWeight: 800 }}>MyHiwi</span>
        <span style={{ fontSize: 20, letterSpacing: "0.16em", color: "#A7F3D0" }}>AI-STARTKLAR</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 980 }}>
        <span style={{ fontSize: 70, lineHeight: 1.04, fontWeight: 800, letterSpacing: "-0.04em" }}>KI sinnvoll nutzen. Risiken erkennen. Sicherer entscheiden.</span>
        <span style={{ fontSize: 30, lineHeight: 1.3, color: "#CBD5E1" }}>Die praxisnahe KI-Grundlagenschulung für Unternehmen.</span>
      </div>
      <span style={{ fontSize: 24, color: "#E2E8F0" }}>3 Stunden live · bis 15 Personen</span>
    </div>,
    size,
  );
}
```

- [ ] **Step 4: Add sitemap and navigation discovery**

Add to `app/sitemap.ts`:

```ts
{
  url: `${baseUrl}/ki-schulung`,
  lastModified: new Date("2026-07-22"),
  changeFrequency: "monthly",
  priority: 0.9,
},
```

Add `{ label: "KI-Schulung für Unternehmen", href: "/ki-schulung" }` to the `Lösungen` group in both `DRAWER_GROUPS` and `FOOTER_COLUMNS`. Do not change the global primary CTA.

- [ ] **Step 5: Run SEO/discovery tests and commit**

Run: `npx playwright test tests/ai-startklar.spec.ts --grep "@seo"`  
Expected: both tests pass.

```bash
git add app/ki-schulung/page.tsx app/ki-schulung/opengraph-image.tsx app/sitemap.ts lib/navigation.ts tests/ai-startklar.spec.ts
git commit -m "feat: publish AI-Startklar discovery metadata"
```

---

### Task 6: Full Landing-Page Verification

**Files:**
- Modify: only files from Tasks 1–5 when a verified defect requires correction.

**Interfaces:**
- Consumes: finished route, API, form, schema, navigation, and tests.
- Produces: production-ready acceptance evidence in command output and screenshots.

- [ ] **Step 1: Run static and production checks**

Run:

```bash
npm run lint
npm run build
npx playwright test tests/ai-startklar.spec.ts
```

Expected: all commands exit 0 and every `ai-startklar.spec.ts` test passes.

- [ ] **Step 2: Run full existing regression tests**

Run: `npm run test:e2e`  
Expected: all existing and new Playwright tests pass. If an unrelated pre-existing failure occurs, record its exact command/output and do not weaken the new tests.

- [ ] **Step 3: Perform desktop and mobile visual inspection**

Inspect at 1440×1000, 1024×768, and 390×844:

- header and CTA do not overlap content;
- exact H1 and prices are immediately understandable;
- section hierarchy follows Trust & Clarity;
- no horizontal overflow or clipped focus ring;
- form controls have labels, 44 px minimum practical touch size, and visible errors;
- FAQ keyboard interaction works;
- boundary copy is present but not fear-led;
- no invented proof, certification badge, or legal guarantee;
- social image renders without clipping.

- [ ] **Step 4: Verify API failure safety**

Submit invalid JSON and an incomplete payload; expect 400 without provider call. In a safe local environment with a test Resend key, submit one valid synthetic inquiry and confirm internal email, acknowledgement email, reply-to, escaped HTML, and no unexpected field. Never use a real customer address for this test.

- [ ] **Step 5: Verify the production environment contract**

Confirm deployment has `RESEND_API_KEY` and `CONTACT_EMAIL`; do not print their values. Confirm `formular@myhiwi.de` and `kontakt@myhiwi.de` are allowed sender identities. If a sender is not verified, change the route only to an already verified MyHiwi sender before deployment.

- [ ] **Step 6: Commit verified corrections**

If verification required changes:

```bash
git add app/ki-schulung app/api/ai-startklar components/myhiwi/ai-startklar lib/ai-startklar lib/navigation.ts app/sitemap.ts tests/ai-startklar.spec.ts
git commit -m "fix: close AI-Startklar launch verification gaps"
```

If no file changed, do not create an empty commit.
