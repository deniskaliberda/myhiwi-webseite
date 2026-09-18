import { readFileSync } from "node:fs";
import { join } from "node:path";
import { expect, test, type Page } from "@playwright/test";

/**
 * Wording test for /fahrschule on the v6 offer
 * (denis-workspace: dokumente/fahrschule/PLAN_Kaltakquise_Fahrschule_2026-09-08.md, W8 / AK8.1).
 *
 * The sentences below are an intentional, independent copy of the WORTGLEICH
 * block in dokumente/MyHiwi_Fahrschul_Offer_v6_2026-09.md §13 (2026-09-08).
 * If v6 changes, update the page AND this file. DOWNSELL is not expected on
 * the page (v6 §9: the Reform-Fahrplan is never offered proactively).
 */
const V6 = {
  T1_NAME: "Das Einstiegspaket heißt Reform-Start.",
  T1_PREIS: "Reform-Start kostet 399 Euro im Monat zuzüglich Mehrwertsteuer.",
  T1_LAUFZEIT: "Reform-Start läuft sechs Monate, danach monatlich kündbar.",
  T1_WEBSITE:
    "Bei Reform-Start kommt einmalig der Start-Sprint für Ihre Website dazu: 490 Euro, wenn Ihre bestehende Seite als Fundament taugt, 1.490 Euro für den standardisierten Umzug auf ein sauberes Fundament, ein kompletter Neubau wird separat angeboten.",
  T2_NAME: "Das Partnerpaket heißt Reform-Partner.",
  T2_PREIS: "Reform-Partner kostet 599 Euro im Monat zuzüglich Mehrwertsteuer.",
  T2_LAUFZEIT: "Reform-Partner läuft 12 Monate, danach monatlich kündbar.",
  T2_WEBSITE:
    "Bei Reform-Partner ist der Start-Sprint für Ihre Website im Paket enthalten, bis zum Wert des standardisierten Umzugs von 1.490 Euro, ein kompletter Neubau wird separat angeboten, und wer vor dem zwölften Monat aussteigt, zahlt den noch nicht abgedeckten Anteil nach.",
  CALLER_PREISSATZ:
    "Der Einstieg liegt bei 399 Euro im Monat zuzüglich Mehrwertsteuer plus einem einmaligen Betrag für die Website, das größere Paket bei 599 Euro im Monat mit der Website im Paket, die Details besprechen Sie im Termin mit Herrn Kaliberda.",
} as const;

const REGION = "Berlin und Brandenburg sowie München und Oberbayern";

/** Strings that must not appear anywhere on /fahrschule (old v4 wording). */
const BANNED: Array<{ label: string; re: RegExp }> = [
  { label: "Garantie", re: /garantie/i },
  { label: "vereinbarte Anfragen-Zahl", re: /vereinbarte Anfragen-Zahl/ },
  { label: "349 €", re: /349(\s|&nbsp;| )*€/ },
  { label: "12 Monate", re: /12 Monate/ },
];

/** "12 Monate" is allowed only inside the exact T2_LAUFZEIT sentence. */
function withoutT2Laufzeit(text: string): string {
  return text.split(V6.T2_LAUFZEIT).join("");
}

function expectClean(text: string, where: string) {
  const stripped = withoutT2Laufzeit(text);
  for (const { label, re } of BANNED) {
    expect(stripped, `${where} must not contain "${label}"`).not.toMatch(re);
  }
}

/** Visible text, head metadata, JSON-LD and attribute texts of the page. */
async function collectTexts(page: Page): Promise<Array<[string, string]>> {
  return page.evaluate(() => {
    const out: Array<[string, string]> = [];
    out.push(["body text", document.body.innerText]);
    out.push(["title", document.title]);
    document.querySelectorAll("meta[name], meta[property]").forEach((m) => {
      const key = m.getAttribute("name") ?? m.getAttribute("property") ?? "";
      out.push([`meta ${key}`, m.getAttribute("content") ?? ""]);
    });
    document
      .querySelectorAll('script[type="application/ld+json"]')
      .forEach((s, i) => out.push([`json-ld #${i}`, s.textContent ?? ""]));
    document.querySelectorAll("[alt], [aria-label], [title]").forEach((el) => {
      for (const attr of ["alt", "aria-label", "title"]) {
        const value = el.getAttribute(attr);
        if (value) out.push([`${el.tagName.toLowerCase()}[${attr}]`, value]);
      }
    });
    return out;
  });
}

async function faqJsonLd(page: Page) {
  const graphs = (
    await page.locator('script[type="application/ld+json"]').allTextContents()
  ).map((raw) => JSON.parse(raw) as Record<string, unknown>);
  const faq = graphs.find((g) => g["@type"] === "FAQPage");
  expect(faq, "FAQPage JSON-LD is present").toBeTruthy();
  return {
    graphs,
    questions: (faq!.mainEntity as Array<{
      name: string;
      acceptedAnswer: { text: string };
    }>),
  };
}

test.describe("/fahrschule wording v6", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/fahrschule");
  });

  test("(a) WORTGLEICH-Sätze aus v6 stehen wortgleich im DOM", async ({
    page,
  }) => {
    const main = page.locator("main");
    for (const sentence of Object.values(V6)) {
      await expect(main, sentence).toContainText(sentence);
    }
    await expect(main).toContainText(REGION);
    await expect(main).toContainText("Reform-Start");
    await expect(main).toContainText("Reform-Partner");
  });

  test("(b) keine alten Aussagen: Garantie, vereinbarte Anfragen-Zahl, 349 €, 12 Monate außerhalb des Tür-2-Satzes", async ({
    page,
  }) => {
    const texts = await collectTexts(page);
    expect(texts.length).toBeGreaterThan(5);
    for (const [where, text] of texts) expectClean(text, where);

    // The T2 sentence itself must be present, otherwise the stripping above is meaningless.
    const bodyText = texts.find(([where]) => where === "body text")![1];
    expect(bodyText.split(V6.T2_LAUFZEIT).length - 1).toBeGreaterThanOrEqual(1);

    // Belt and braces: the whole served HTML, including the RSC payload.
    const html = await page.content();
    expectClean(html, "served HTML");
  });

  test("(c) FAQ-JSON-LD: fünf Fragen, Laufzeiten aus v6, keine alten Aussagen", async ({
    page,
  }) => {
    const { graphs, questions } = await faqJsonLd(page);
    expect(questions).toHaveLength(5);
    for (const q of questions) {
      expectClean(q.name, `FAQ question "${q.name}"`);
      expectClean(q.acceptedAnswer.text, `FAQ answer "${q.name}"`);
    }
    const laufzeit = questions.find((q) => q.name === "Wie lange bin ich gebunden?");
    expect(laufzeit).toBeTruthy();
    expect(laufzeit!.acceptedAnswer.text).toContain(V6.T1_LAUFZEIT);
    expect(laufzeit!.acceptedAnswer.text).toContain(V6.T2_LAUFZEIT);
    const klappt = questions.find((q) => q.name === "Was ist, wenn es nicht klappt?");
    expect(klappt).toBeTruthy();
    expect(klappt!.acceptedAnswer.text).toContain("Wir dokumentieren Ihren Startpunkt");

    // The FAQ on the page mirrors the JSON-LD (same source array).
    for (const q of questions) {
      await expect(page.locator("main")).toContainText(q.name);
    }

    // Service area: Berlin, Brandenburg and Bayern.
    const service = graphs.find((g) => g["@type"] === "Service");
    expect(service).toBeTruthy();
    const areas = (service!.areaServed as Array<{ name: string }>).map((a) => a.name);
    expect(areas).toEqual(expect.arrayContaining(["Berlin", "Brandenburg", "Bayern"]));
  });

  test("(d) OG-Bild: Route liefert 200 und die Quelle trägt den v6-Preissatz", async ({
    page,
    request,
  }) => {
    const og = await page.locator('meta[property="og:image"]').first().getAttribute("content");
    expect(og, "og:image meta tag").toBeTruthy();
    const url = new URL(og!);
    expect(url.pathname).toContain("/fahrschule/opengraph-image");
    const image = await request.get(url.pathname + url.search);
    expect(image.status()).toBe(200);
    expect(image.headers()["content-type"]).toContain("image/png");

    // Unit check on the source file: the rendered bitmap is not OCR-checked.
    const source = readFileSync(
      join(process.cwd(), "app", "fahrschule", "opengraph-image.tsx"),
      "utf8",
    );
    expect(source).toContain(V6.T1_PREIS);
    expectClean(source, "opengraph-image.tsx");
    expect(source).not.toContain("349");
  });

  test("(e) Referenzbereich ohne Mannis: DOM-Text, alt-Attribute, Links", async ({
    page,
  }) => {
    const texts = await collectTexts(page);
    for (const [where, text] of texts) {
      expect(text, `${where} must not mention Mannis`).not.toMatch(/mannis/i);
    }
    const hrefs = await page.locator("a[href]").evaluateAll((links) =>
      links.map((a) => a.getAttribute("href") ?? ""),
    );
    expect(hrefs.some((h) => h.includes("mannis"))).toBe(false);
    // The replacement teaser (published case study) renders with its own link.
    await expect(
      page.locator('main a[href="/case-studies/sonnenhof-herrsching"]').first(),
    ).toBeVisible();
    const html = await page.content();
    expect(html).not.toMatch(/mannis/i);
  });
});

/**
 * F23 (Codex inspection, 2026-09-08): the page must not promise services beyond
 * the v6 scope matrix (§5). A photo shoot is "separat scopen"; the inquiry
 * report (Anfragen-Zettel / Anfrage-Bericht) exists only in Tür 2 (Reform-Partner).
 */
const PHOTO_ALLOWED_SENTENCE =
  "Vorhandene Fotos bauen wir ein, ein Fotoshooting vor Ort besprechen wir separat.";
const PHOTO_PROMISES: Array<{ label: string; re: RegExp }> = [
  { label: "Fotos machen wir", re: /Fotos machen wir/i },
  { label: "machen wir ... Fotos", re: /machen wir (die |dabei |auch )*Fotos/i },
  { label: "Fotos ... vor Ort (Zusage)", re: /Fotos[^.]*vor Ort/i },
  { label: "Fotoshooting außerhalb des Scope-Satzes", re: /Fotoshooting/i },
];
const REPORT_TERMS = /Anfragen-Zettel|Anfrage-Bericht|Anfragen-Bericht|Anfragen-Messung/;

function withoutPhotoSentence(text: string): string {
  return text.split(PHOTO_ALLOWED_SENTENCE).join("");
}

function expectNoPhotoPromise(text: string, where: string) {
  const stripped = withoutPhotoSentence(text);
  for (const { label, re } of PHOTO_PROMISES) {
    expect(stripped, `${where} must not promise photography: "${label}"`).not.toMatch(re);
  }
}

test.describe("/fahrschule Leistungszuordnung v6 §5 (F23)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/fahrschule");
  });

  test("(f) kein Fotoshooting-Versprechen: DOM, Metadaten, JSON-LD, OG-Quelle", async ({
    page,
  }) => {
    const texts = await collectTexts(page);
    for (const [where, text] of texts) expectNoPhotoPromise(text, where);
    expectNoPhotoPromise(await page.content(), "served HTML");
    // The qualifying sentence itself must be on the page (otherwise the whitelist is dead).
    await expect(page.locator("main")).toContainText(PHOTO_ALLOWED_SENTENCE);
    const og = readFileSync(
      join(process.cwd(), "app", "fahrschule", "opengraph-image.tsx"),
      "utf8",
    );
    expectNoPhotoPromise(og, "opengraph-image.tsx");
  });

  test("(g) Anfragen-Zettel nur im Reform-Partner-Kontext: jeder DOM-Block, der ihn nennt, nennt Reform-Partner", async ({
    page,
  }) => {
    const blocks = await page.evaluate((pattern) => {
      const re = new RegExp(pattern);
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      const out: Array<{ block: string; hasPartner: boolean }> = [];
      let node: Node | null;
      while ((node = walker.nextNode())) {
        const value = node.textContent ?? "";
        if (!re.test(value)) continue;
        const parent = node.parentElement as HTMLElement | null;
        // script (JSON-LD, RSC payload), style and noscript are not visible copy;
        // JSON-LD is asserted separately below.
        if (parent?.closest("script, style, noscript, template")) continue;
        const el = parent?.closest(
          "li, figure, article, blockquote, section",
        );
        const block = (el?.textContent ?? "").replace(/\s+/g, " ").trim();
        out.push({ block, hasPartner: /Reform-Partner/.test(block) });
      }
      return out;
    }, REPORT_TERMS.source);
    expect(blocks.length, "the Anfragen-Zettel is still shown (as Tür-2 artefact)").toBeGreaterThan(0);
    for (const b of blocks) {
      expect(b.hasPartner, `block mentions the inquiry report without Reform-Partner: "${b.block.slice(0, 160)}"`).toBe(true);
    }

    // Head metadata (title, description, OG) must not sell the report unqualified.
    const texts = await collectTexts(page);
    for (const [where, text] of texts) {
      if (where === "body text" || where.startsWith("json-ld")) continue;
      expect(text, `${where} must not promise the inquiry report`).not.toMatch(REPORT_TERMS);
      expect(text, `${where} must not promise "jede Anfrage gezählt"`).not.toMatch(/jede Anfrage gezählt/i);
    }

    // JSON-LD: FAQ answers and the Service description only mention the report next to Reform-Partner.
    const { graphs, questions } = await faqJsonLd(page);
    for (const q of questions) {
      for (const text of [q.name, q.acceptedAnswer.text]) {
        if (REPORT_TERMS.test(text)) {
          expect(text, `FAQ "${q.name}" mentions the inquiry report`).toContain("Reform-Partner");
        }
      }
    }
    const service = graphs.find((g) => g["@type"] === "Service");
    expect(service).toBeTruthy();
    const serviceJson = JSON.stringify(service);
    expect(serviceJson, "Service JSON-LD must not list the Tür-2 report as generic service").not.toMatch(REPORT_TERMS);
    expect(serviceJson).toContain("Sichtbarkeits-Bericht");

    // OG image source: no unqualified counting/report claim.
    const og = readFileSync(
      join(process.cwd(), "app", "fahrschule", "opengraph-image.tsx"),
      "utf8",
    );
    expect(og).not.toMatch(REPORT_TERMS);
    expect(og).not.toMatch(/Anfrage gezählt/i);
  });

  test("(h) Tür-1-Leistungen stehen als Leistung, Tür-2-Zusatz ist zugeordnet", async ({
    page,
  }) => {
    const main = page.locator("main");
    await expect(main).toContainText("so standen Sie, so stehen Sie jetzt");
    await expect(main).toContainText("Sichtbarkeits-Bericht");
    await expect(main).toContainText("Anfrage und Anmeldung getrennt");
    // Kein Tür-1-Versprechen auf Zähldaten-Einsicht oder Anfragen-Zählung ab Tag 0.
    const body = await main.innerText();
    expect(body).not.toMatch(/Zähldaten/);
    expect(body).not.toMatch(/zählen (wir )?jede Anfrage[^.]*ab Tag 0/i);
  });
});

test("/datenschutz trägt die Hinweise für Interessenten (Telefonkontakt)", async ({
  page,
}) => {
  await page.goto("/datenschutz");
  const section = page.locator("#interessenten-telefonkontakt");
  await expect(section).toBeVisible();
  await expect(
    section.getByRole("heading", { name: /Hinweise für Interessenten \(Telefonkontakt\)/ }),
  ).toBeVisible();
  for (const needle of [
    "Kaliberda Digital Intelligence UG",
    "Art. 6 Abs. 1 lit. f DSGVO",
    "Google",
    "Impressum",
    "Telefon-Dienstleister",
    "180 Tage",
    "Sperrliste",
    "Widerspruch",
    "Version v1",
    "8. September 2026",
  ]) {
    await expect(section, needle).toContainText(needle);
  }
});
