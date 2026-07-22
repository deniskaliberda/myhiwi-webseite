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
