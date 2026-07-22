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

test("@form zeigt alle Qualifizierungsfelder und den Sensitivitätshinweis", async ({ page }) => {
  await page.goto("/ki-schulung#erstgespraech");

  await expect(page.getByLabel("Unternehmen")).toBeVisible();
  await expect(page.getByLabel("Vor- und Nachname")).toBeVisible();
  await expect(page.getByLabel("Geschäftliche E-Mail-Adresse")).toBeVisible();
  await expect(page.getByLabel("Ungefähre Teilnehmerzahl")).toBeVisible();
  await expect(page.getByLabel("Gewünschtes Format")).toBeVisible();
  await expect(page.getByLabel("Gewünschter Zeitraum")).toBeVisible();
  await expect(
    page.getByLabel("Aktuell genutzte oder geplante KI-Werkzeuge"),
  ).toBeVisible();
  await expect(page.getByLabel("Gewünschter Schulungsfokus")).toBeVisible();
  await expect(page.getByLabel(/Telefon/)).toBeVisible();
  await expect(page.getByLabel(/Kurze Ergänzung/)).toBeVisible();
  await expect(page.getByLabel(/Ich bin einverstanden/)).toBeVisible();
  await expect(
    page.locator("form").getByRole("link", { name: "Datenschutz" }),
  ).toBeVisible();
  await expect(
    page.getByText(
      /keine personenbezogenen, vertraulichen oder sicherheitsrelevanten Inhalte/i,
    ),
  ).toHaveCount(2);

  const participants = page.getByLabel("Ungefähre Teilnehmerzahl");
  await expect(participants).toHaveAttribute(
    "aria-describedby",
    "ai-startklar-participants-help",
  );
  await expect(page.locator("#ai-startklar-participants-help")).toContainText(
    "bis zu 15 Personen",
  );

  const sensitiveWarning =
    "Bitte übermitteln Sie keine personenbezogenen, vertraulichen oder sicherheitsrelevanten Inhalte.";
  const tools = page.getByLabel(
    "Aktuell genutzte oder geplante KI-Werkzeuge",
  );
  await expect(tools).toHaveAttribute(
    "aria-describedby",
    "ai-startklar-tools-help",
  );
  await expect(page.locator("#ai-startklar-tools-help")).toHaveText(
    sensitiveWarning,
  );

  const message = page.getByLabel(/Kurze Ergänzung/);
  await expect(message).toHaveAttribute(
    "aria-describedby",
    "ai-startklar-message-help",
  );
  await expect(page.locator("#ai-startklar-message-help")).toHaveText(
    sensitiveWarning,
  );
});

test("@form begrenzt Texteingaben analog zur Servervalidierung", async ({ page }) => {
  await page.goto("/ki-schulung#erstgespraech");

  await expect(page.getByLabel("Unternehmen")).toHaveAttribute(
    "maxlength",
    "160",
  );
  await expect(page.getByLabel("Vor- und Nachname")).toHaveAttribute(
    "maxlength",
    "120",
  );
  await expect(
    page.getByLabel("Geschäftliche E-Mail-Adresse"),
  ).toHaveAttribute("maxlength", "240");
  await expect(page.getByLabel("Gewünschter Zeitraum")).toHaveAttribute(
    "maxlength",
    "120",
  );
  await expect(
    page.getByLabel("Aktuell genutzte oder geplante KI-Werkzeuge"),
  ).toHaveAttribute("maxlength", "500");
  await expect(page.getByLabel(/Telefon/)).toHaveAttribute("maxlength", "80");
  await expect(page.getByLabel(/Kurze Ergänzung/)).toHaveAttribute(
    "maxlength",
    "1600",
  );
});

test("@form sendet nur die freigegebene Anfrage und bestätigt den Eingang", async ({ page }) => {
  let payload: Record<string, unknown> | undefined;
  await page.route("**/api/ai-startklar", async (route) => {
    payload = route.request().postDataJSON() as Record<string, unknown>;
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: '{"success":true}',
    });
  });
  await page.goto("/ki-schulung#erstgespraech");
  await page.getByLabel("Unternehmen").fill("Muster GmbH");
  await page.getByLabel("Vor- und Nachname").fill("Mara Muster");
  await page
    .getByLabel("Geschäftliche E-Mail-Adresse")
    .fill("mara@example.de");
  await page.getByLabel("Ungefähre Teilnehmerzahl").fill("12");
  await page.getByLabel("Gewünschtes Format").selectOption("online");
  await page.getByLabel("Gewünschter Zeitraum").fill("September 2026");
  await page
    .getByLabel("Aktuell genutzte oder geplante KI-Werkzeuge")
    .fill("Microsoft Copilot");
  await page
    .getByLabel("Gewünschter Schulungsfokus")
    .selectOption("buero-verwaltung");
  await page.getByLabel(/Telefon/).fill("030 123456");
  await page.getByLabel(/Kurze Ergänzung/).fill("Einsteigergruppe");
  await page.getByLabel(/Ich bin einverstanden/).check();
  await page
    .getByRole("button", { name: "Erstgespräch anfragen" })
    .click();

  const acknowledgement = page.getByRole("status");
  await expect(acknowledgement).toHaveAttribute("aria-live", "polite");
  await expect(
    acknowledgement.getByRole("heading", {
      name: "Danke – Ihre Anfrage ist angekommen.",
    }),
  ).toBeVisible();
  expect(payload).toBeDefined();
  expect(Object.keys(payload ?? {}).sort()).toEqual(
    [
      "company",
      "name",
      "email",
      "participants",
      "format",
      "timeframe",
      "tools",
      "focus",
      "phone",
      "message",
      "consent",
      "page",
    ].sort(),
  );
  expect(payload).toEqual({
    company: "Muster GmbH",
    name: "Mara Muster",
    email: "mara@example.de",
    participants: 12,
    format: "online",
    timeframe: "September 2026",
    tools: "Microsoft Copilot",
    focus: "buero-verwaltung",
    phone: "030 123456",
    message: "Einsteigergruppe",
    consent: true,
    page: "http://127.0.0.1:3000/ki-schulung#erstgespraech",
  });
  expect(typeof payload?.participants).toBe("number");
  expect(typeof payload?.consent).toBe("boolean");
  for (const key of [
    "company",
    "name",
    "email",
    "format",
    "timeframe",
    "tools",
    "focus",
    "phone",
    "message",
    "page",
  ]) {
    expect(typeof payload?.[key]).toBe("string");
  }
});

test("@form kündigt eine 400-Antwort an und bleibt ausfüllbar", async ({ page }) => {
  await page.route("**/api/ai-startklar", async (route) => {
    await route.fulfill({
      status: 400,
      contentType: "application/json",
      body: '{"error":"Bitte prüfen Sie Ihre Angaben."}',
    });
  });
  await page.goto("/ki-schulung#erstgespraech");
  await page.getByLabel("Unternehmen").fill("Muster GmbH");
  await page.getByLabel("Vor- und Nachname").fill("Mara Muster");
  await page
    .getByLabel("Geschäftliche E-Mail-Adresse")
    .fill("mara@example.de");
  await page.getByLabel("Ungefähre Teilnehmerzahl").fill("12");
  await page.getByLabel("Gewünschtes Format").selectOption("online");
  await page.getByLabel("Gewünschter Zeitraum").fill("September 2026");
  await page
    .getByLabel("Aktuell genutzte oder geplante KI-Werkzeuge")
    .fill("Microsoft Copilot");
  await page
    .getByLabel("Gewünschter Schulungsfokus")
    .selectOption("buero-verwaltung");
  await page.getByLabel(/Ich bin einverstanden/).check();
  await page
    .getByRole("button", { name: "Erstgespräch anfragen" })
    .click();

  const alert = page
    .getByRole("alert")
    .filter({ hasText: "Bitte prüfen Sie Ihre Angaben." });
  await expect(alert).toBeVisible();
  await expect(alert).toHaveAttribute("aria-live", "polite");
  await expect(alert).toHaveText("Bitte prüfen Sie Ihre Angaben.");
  await expect(page.getByLabel("Unternehmen")).toHaveValue("Muster GmbH");
  await page.getByLabel("Unternehmen").fill("Muster & Partner GmbH");
  await expect(page.getByLabel("Unternehmen")).toHaveValue(
    "Muster & Partner GmbH",
  );
  await expect(
    page.getByRole("heading", {
      name: "Danke – Ihre Anfrage ist angekommen.",
    }),
  ).toHaveCount(0);
});

test("@form bleibt bei mobilem 200-Prozent-Zoom ohne horizontalen Overflow", async ({ page }) => {
  await page.setViewportSize({ width: 195, height: 422 });
  await page.goto("/ki-schulung#erstgespraech");

  const dimensions = await page.locator("#erstgespraech").evaluate((section) => ({
    clientWidth: section.clientWidth,
    scrollWidth: section.scrollWidth,
  }));
  expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth);
});

test("@seo liefert kanonische Social-Metadaten und valide strukturierte Daten", async ({ page }) => {
  await page.goto("/ki-schulung");

  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://myhiwi.de/ki-schulung",
  );
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
    "content",
    "KI-Schulung für Unternehmen | MyHiwi AI-Startklar",
  );
  await expect(
    page.locator('meta[property="og:description"]'),
  ).toHaveAttribute(
    "content",
    "Drei Stunden live: KI-Grundlagen, gute Prompts, Datenampel, Ergebnisprüfung und klare Nutzungsregeln.",
  );
  await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
    "content",
    "https://myhiwi.de/ki-schulung",
  );
  await expect(page.locator('meta[property="og:type"]')).toHaveAttribute(
    "content",
    "website",
  );
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    "content",
    "https://myhiwi.de/ki-schulung/opengraph-image",
  );
  await expect(
    page.locator('meta[property="og:image:width"]'),
  ).toHaveAttribute("content", "1200");
  await expect(
    page.locator('meta[property="og:image:height"]'),
  ).toHaveAttribute("content", "630");

  const scriptContents = await page
    .locator('script[type="application/ld+json"]')
    .allTextContents();
  const schemas = scriptContents.map(
    (source) => JSON.parse(source) as Record<string, unknown>,
  );
  const schemaByType = (type: string) =>
    schemas.find((schema) => schema["@type"] === type);

  expect(schemaByType("Service")).toMatchObject({
    "@context": "https://schema.org",
    "@type": "Service",
    name: AI_STARTKLAR.name,
    description: AI_STARTKLAR.summary,
    serviceType: "KI-Grundlagenschulung für Unternehmen",
    provider: {
      "@type": "Organization",
      name: "MyHiwi",
      url: "https://myhiwi.de",
    },
    url: "https://myhiwi.de/ki-schulung",
    offers: [
      {
        "@type": "Offer",
        name: "Online",
        price: "1490",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        name: "Vor Ort",
        price: "1790",
        priceCurrency: "EUR",
      },
    ],
  });

  const faqSchema = schemaByType("FAQPage") as
    | (Record<string, unknown> & { mainEntity: unknown[] })
    | undefined;
  expect(faqSchema?.mainEntity).toHaveLength(AI_STARTKLAR_FAQ.length);
  expect(faqSchema?.mainEntity).toEqual(
    AI_STARTKLAR_FAQ.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  );

  const breadcrumbSchema = schemaByType("BreadcrumbList") as
    | (Record<string, unknown> & { itemListElement: unknown[] })
    | undefined;
  expect(breadcrumbSchema?.itemListElement).toEqual([
    {
      "@type": "ListItem",
      position: 1,
      name: "Start",
      item: "https://myhiwi.de",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "KI-Schulung",
      item: "https://myhiwi.de/ki-schulung",
    },
  ]);
  expect(JSON.stringify(schemas)).not.toMatch(/AggregateRating|"review"/i);
});

test("@seo liefert das 1200-mal-630-Open-Graph-Bild als PNG", async ({ request }) => {
  const response = await request.get("/ki-schulung/opengraph-image");
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("image/png");

  const image = await response.body();
  expect(image.subarray(0, 8)).toEqual(
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
  );
  expect(image.readUInt32BE(16)).toBe(1200);
  expect(image.readUInt32BE(20)).toBe(630);
  expect(image.byteLength).toBeGreaterThan(10_000);
});

test("@seo veröffentlicht den stabilen Sitemap-Eintrag", async ({ request }) => {
  const response = await request.get("/sitemap.xml");
  expect(response.status()).toBe(200);
  const sitemap = await response.text();
  const entry = sitemap
    .split("<url>")
    .find((item) => item.includes("<loc>https://myhiwi.de/ki-schulung</loc>"));

  expect(entry).toBeDefined();
  expect(entry).toContain("<lastmod>2026-07-22T00:00:00.000Z</lastmod>");
  expect(entry).toContain("<changefreq>monthly</changefreq>");
  expect(entry).toContain("<priority>0.9</priority>");
});

test("@seo macht die KI-Schulung in Footer und geöffnetem Drawer auffindbar", async ({ page }) => {
  await page.setViewportSize({ width: 195, height: 422 });
  await page.goto("/ki-schulung");

  const footerLink = page
    .locator("footer")
    .getByRole("link", { name: "KI-Schulung für Unternehmen", exact: true });
  await expect(footerLink).toBeVisible();
  await expect(footerLink).toHaveAttribute("href", "/ki-schulung");

  const documentWidth = await page.evaluate(
    () => document.documentElement.scrollWidth,
  );
  expect(documentWidth).toBeLessThanOrEqual(337);

  await page.getByRole("button", { name: "Menü öffnen" }).click();
  const drawer = page.getByRole("dialog", { name: "Hauptmenü" });
  const drawerLink = drawer.getByRole("link", {
    name: "KI-Schulung für Unternehmen",
    exact: true,
  });
  await expect(drawerLink).toBeVisible();
  await expect(drawerLink).toHaveAttribute("href", "/ki-schulung");
  await expect(drawerLink).toHaveAttribute("aria-current", "page");
});
