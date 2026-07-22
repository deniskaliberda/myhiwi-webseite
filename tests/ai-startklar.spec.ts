import { expect, test } from "@playwright/test";
import {
  AI_STARTKLAR,
  AI_STARTKLAR_FAQ,
  AI_STARTKLAR_FOCUS_OPTIONS,
  formatEuro,
} from "../lib/ai-startklar/product";
import { parseAiStartklarInquiry } from "../lib/ai-startklar/inquiry";

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

test("@validation lehnt teilweise numerische Teilnehmerzahlen ab", () => {
  expect(
    parseAiStartklarInquiry({
      company: "Muster GmbH",
      name: "Mara Muster",
      email: "mara@example.de",
      participants: "12abc",
      format: "online",
      timeframe: "September 2026",
      tools: "Microsoft Copilot",
      focus: "buero-verwaltung",
      consent: true,
    }),
  ).toEqual({
    ok: false,
    error: "Bitte geben Sie eine gültige Teilnehmerzahl ein.",
  });
});

test("@api weist eine unvollständige Anfrage vor dem Mailversand ab", async ({
  request,
}) => {
  const response = await request.post("/api/ai-startklar", { data: {} });
  expect(response.status()).toBe(400);
  expect(await response.json()).toEqual({
    error: "Bitte füllen Sie alle Pflichtfelder aus.",
  });
});

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

test("@page strukturiert Überschriften, Abläufe und Leistungslisten semantisch", async ({ page }) => {
  await page.goto("/ki-schulung");

  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://myhiwi.de/ki-schulung",
  );
  await expect(
    page.getByRole("link", { name: AI_STARTKLAR.cta, exact: true }),
  ).toHaveAttribute("href", "#erstgespraech");

  for (const heading of [
    "Das ist in Ihrer Schulung enthalten.",
    "Zwei Formate, klar kalkuliert.",
    "Von der Anfrage bis zur Nachbesprechung.",
    "Klare Leistungsgrenzen.",
  ]) {
    await expect(
      page.getByRole("heading", { level: 2, name: heading, exact: true }),
    ).toBeVisible();
  }

  const outcomes = page.locator("section").filter({
    has: page.getByRole("heading", {
      level: 2,
      name: "Nach der Schulung kann Ihr Team",
      exact: true,
    }),
  });
  await expect(outcomes.getByRole("list")).toHaveCount(1);
  await expect(outcomes.getByRole("listitem")).toHaveCount(
    AI_STARTKLAR.outcomes.length,
  );

  const agenda = page.locator("section").filter({
    has: page.getByRole("heading", {
      level: 2,
      name: "Theorie, sichere Anwendung und Ihr Arbeitsalltag.",
      exact: true,
    }),
  });
  await expect(agenda.getByRole("listitem")).toHaveCount(
    AI_STARTKLAR.agenda.length,
  );
  for (const item of AI_STARTKLAR.agenda) {
    await expect(agenda.getByText(item, { exact: true })).toBeVisible();
  }

  const included = page.locator("section").filter({
    has: page.getByRole("heading", {
      level: 2,
      name: "Das ist in Ihrer Schulung enthalten.",
      exact: true,
    }),
  });
  await expect(included.getByRole("list")).toHaveCount(1);
  await expect(included.getByRole("listitem")).toHaveCount(
    AI_STARTKLAR.included.length,
  );

  const packages = page.locator("section").filter({
    has: page.getByRole("heading", {
      level: 2,
      name: "Zwei Formate, klar kalkuliert.",
      exact: true,
    }),
  });
  await expect(
    packages.getByText(AI_STARTKLAR.travel, { exact: true }),
  ).toBeVisible();

  const process = page.locator("section").filter({
    has: page.getByRole("heading", {
      level: 2,
      name: "Von der Anfrage bis zur Nachbesprechung.",
      exact: true,
    }),
  });
  await expect(process.getByRole("listitem")).toHaveCount(
    AI_STARTKLAR.process.length,
  );

  await expect(
    page.getByText(
      "Wir arbeiten ausschließlich mit synthetischen oder robust anonymisierten sicheren Praxisbeispielen. Reale personenbezogene, vertrauliche, sicherheitsrelevante oder rote Daten werden nie live eingegeben.",
      { exact: true },
    ),
  ).toBeVisible();
});
