import { expect, test } from "@playwright/test";

const projects = [
  { slug: "sonnenhof-herrsching", name: "Sonnenhof Herrsching", result: "607" },
  {
    slug: "physio-antje-foerster",
    name: "Physiotherapie Antje Förster",
    result: "133",
  },
  { slug: "mannis-fahrschule", name: "Mannis Fahrschule", result: "21" },
  { slug: "formazin", name: "Formazin & Partner", result: "16" },
  { slug: "mr-sherman", name: "Mr. Sherman", result: "4" },
];

for (const project of projects) {
  test(`${project.slug}: reference, method and contact path work without JavaScript`, async ({
    browser,
    request,
  }) => {
    const path = `/case-studies/${project.slug}`;
    const updated = "2026-09-06";
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    await page.goto(path);
    await expect(page.locator("main h1")).toHaveCount(1);
    await expect(page.locator("main")).toContainText(project.name);
    await expect(page.locator("main")).toContainText(project.result);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      `https://myhiwi.de${path}`,
    );
    await expect(page.locator(`time[datetime="${updated}"]`)).toBeVisible();
    const graphs = (
      await page.locator('script[type="application/ld+json"]').allTextContents()
    ).flatMap((raw) => {
      const parsed = JSON.parse(raw);
      return parsed["@graph"] ?? [parsed];
    });
    expect(graphs).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          "@type": "Article",
          dateModified: updated,
          url: `https://myhiwi.de${path}`,
        }),
      ]),
    );
    await page.locator('a[href="#messmethode"]').click({ noWaitAfter: true });
    await expect(page).toHaveURL(/#messmethode$/);
    await expect(page.locator("#messmethode")).toBeVisible();
    await expect(page.locator("#messmethode")).toHaveAttribute("open", "");
    const og = await page
      .locator('meta[property="og:image"]')
      .getAttribute("content");
    expect(og).toContain(`/case-studies/${project.slug}/cover.webp`);
    const image = await request.get(new URL(og!).pathname);
    expect(image.ok()).toBe(true);
    expect(image.headers()["content-type"]).toContain("image/webp");
    await page
      .locator(`main a[href="/kontakt?projekt=${project.slug}"]`)
      .click();
    await expect(page.locator("main")).toContainText(
      `Ihr Einstieg: ${project.name}`,
    );
    await context.close();
  });
}

test("new references connect homepage, services, sitemap and narrow layouts", async ({
  page,
  request,
}) => {
  await page.goto("/");
  for (const project of projects)
    await expect(
      page.locator(`main a[href="/case-studies/${project.slug}"]`).first(),
    ).toBeVisible();
  await expect(page.locator("main")).not.toContainText("in vier Monaten");
  const xml = await (await request.get("/sitemap.xml")).text();
  for (const project of projects)
    expect(xml).toContain(`https://myhiwi.de/case-studies/${project.slug}`);
  for (const service of [
    "webseiten",
    "google-sichtbarkeit",
    "ki-sichtbarkeit",
  ]) {
    await page.goto(`/leistungen/${service}`);
    await expect(page.locator('main a[href^="/case-studies/"]')).toHaveCount(2);
  }
  await page.setViewportSize({ width: 360, height: 800 });
  for (const path of [
    "/",
    "/case-studies",
    ...projects.map((p) => `/case-studies/${p.slug}`),
  ]) {
    await page.goto(path);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      path,
    ).toBe(true);
    await page.locator("main").evaluate(async (element) => {
      for (const image of Array.from(element.querySelectorAll("img"))) {
        image.loading = "eager";
        await image.decode();
      }
    });
    expect(
      await page
        .locator("main img")
        .evaluateAll((images) =>
          images.every((image) => (image as HTMLImageElement).naturalWidth > 0),
        ),
      path,
    ).toBe(true);
  }
});

test("case context is visible and included in a mocked inquiry, arbitrary context is ignored", async ({
  page,
}) => {
  let message = "";
  await page.route("**/api/contact", async (route) => {
    message = route.request().postDataJSON().message;
    await route.fulfill({ json: { success: true } });
  });
  await page.goto("/kontakt?projekt=mannis-fahrschule");
  await page.locator("#name").fill("Mara Muster");
  await page.locator("#email").fill("mara@example.test");
  await page.locator("#website").fill("Musterbetrieb");
  await page.locator("#message").fill("Ich möchte einen ähnlichen Anmeldeweg.");
  await page.getByRole("checkbox", { name: /Ich bin einverstanden/ }).check();
  await page.locator('button[type="submit"]').click();
  await expect(page.getByRole("status")).toBeVisible();
  expect(message).toBe(
    "Ich möchte einen ähnlichen Anmeldeweg.\n\nProjektbezug: Mannis Fahrschule",
  );
  await page.goto("/kontakt?projekt=untrusted-free-text");
  await expect(page.locator("main")).not.toContainText("untrusted-free-text");
  await expect(page.locator("main")).not.toContainText("Ihr Einstieg:");
});

test("overview presents dated evidence and Sherman distinguishes demo role views", async ({
  page,
}) => {
  await page.goto("/case-studies");
  const cards = page.locator(
    'section[aria-label="Aktuelle Kundenprojekte"] article',
  );
  await expect(cards).toHaveCount(5);
  for (const card of await cards.all()) {
    await expect(card.locator("dl > div")).toHaveCount(4);
    await expect(card).toContainText("2026");
    await expect(card).toContainText("Quelle:");
  }
  await cards.first().locator("summary").click();
  await expect(cards.first().locator("details ul")).toBeVisible();
  await page.goto("/case-studies/mr-sherman");
  const roles = page.locator('section[aria-labelledby="roles-heading"]');
  await expect(roles).toContainText("Entwicklungsstand Juli 2026");
  await expect(roles.locator("img")).toHaveCount(4);
  await expect(roles).toContainText("Testdaten");
});

test("Sonnenhof shows the complete inquiry series and distinct attribution totals", async ({
  page,
}) => {
  await page.goto("/case-studies/sonnenhof-herrsching");
  const history = page.locator(
    'section[aria-labelledby="inquiry-history-heading"]',
  );
  await expect(history.locator("li")).toHaveCount(8);
  const values = await history.locator("li strong").allTextContents();
  expect(values.map((value) => parseInt(value, 10))).toEqual([
    1, 11, 45, 57, 96, 125, 158, 114,
  ]);
  expect(values.reduce((sum, value) => sum + parseInt(value, 10), 0)).toBe(607);
  await expect(history).toContainText("August endet am 30.08.");
  await expect(
    page.locator('section[aria-labelledby="evidence-heading-0"]'),
  ).toContainText("568");
  await expect(
    page.locator('section[aria-labelledby="evidence-heading-1"]'),
  ).toContainText("überschneiden");
  await expect(
    page.locator('section[aria-labelledby="comparison-heading"] img').first(),
  ).toHaveAttribute("src", /sonnenhof-alt.jpg/);
});

test("technical lab comparisons and paid campaign figures retain their source scope", async ({
  page,
}) => {
  await page.goto("/case-studies/physio-antje-foerster");
  const technical = page.locator(
    'section[aria-labelledby="technical-heading"]',
  );
  await expect(technical.locator("tbody tr")).toHaveCount(4);
  await expect(technical).toContainText("4,9 s");
  await expect(technical).toContainText("2,6 s");
  await expect(technical).toContainText("keine Felddaten");
  await page.goto("/case-studies/mr-sherman");
  const ads = page.locator('section[aria-labelledby="evidence-heading-0"]');
  await expect(ads).toContainText("38");
  await expect(ads).toContainText("447");
  await expect(ads).toContainText("24.839");
  await expect(ads).toContainText("11,77 €");
  await expect(ads).toContainText("7 Tage Klick / 1 Tag Ansicht");
  await expect(ads).toContainText("keine abgeschlossenen Mitgliedschaften");
});
