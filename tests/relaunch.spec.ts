import { expect, test } from "@playwright/test";

const services = [
  "/leistungen/webseiten",
  "/leistungen/google-sichtbarkeit",
  "/leistungen/ki-sichtbarkeit",
];

test("Startseite führt ohne JavaScript zu allen drei Leistungen und zum Check", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(
    "http://127.0.0.1:" + (process.env.PLAYWRIGHT_PORT ?? "3000"),
  );
  await expect(page.locator("h1")).toHaveCount(1);
  await expect(page.locator("main")).toContainText("KI-Suche");
  for (const href of services)
    await expect(page.locator(`main a[href="${href}"]`).first()).toBeVisible();
  await page
    .getByRole("link", { name: "Sichtbarkeit prüfen lassen", exact: true })
    .first()
    .click();
  await expect(page).toHaveURL(/\/kontakt$/);
  await context.close();
});

test("Mobile Navigation führt zur KI-Leistung; Seiten passen auf schmale Displays", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Menü öffnen" }).click();
  await page
    .getByRole("navigation", { name: "Mobile Navigation", exact: true })
    .getByRole("link", { name: "KI-Sichtbarkeit", exact: true })
    .click();
  await expect(page).toHaveURL(/\/leistungen\/ki-sichtbarkeit$/);
  await expect(
    page.getByRole("button", { name: "Menü öffnen" }),
  ).toHaveAttribute("aria-expanded", "false");
  for (const path of ["/", ...services, "/kontakt"]) {
    await page.goto(path);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
  }
});

test("Sitemap behält vorhandene Angebote und enthält neue Leistungen", async ({
  request,
}) => {
  const response = await request.get("/sitemap.xml");
  expect(response.ok()).toBe(true);
  const xml = await response.text();
  for (const path of [
    ...services,
    "/ki-schulung",
    "/fahrschule",
    "/fewo-direktbuchung",
  ]) {
    expect(xml).toContain(`<loc>https://myhiwi.de${path}</loc>`);
  }
});

test("Bestehende Leistungs-Links leiten direkt zum passenden Angebot", async ({
  request,
}) => {
  for (const [oldPath, destination] of [
    ["/seo", "/leistungen/google-sichtbarkeit"],
    ["/webdesign", "/leistungen/webseiten"],
  ]) {
    const response = await request.get(oldPath, { maxRedirects: 0 });
    expect(response.status()).toBe(308);
    expect(response.headers().location).toBe(destination);
  }
});

test("Startseiten-Metadaten und OG-Bild passen zum Relaunch", async ({
  page,
  request,
}) => {
  await page.goto("/");
  await expect(page).toHaveTitle(
    "Webseiten, Google- & KI-Sichtbarkeit | MyHiwi Ahrensfelde",
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://myhiwi.de",
  );
  const response = await request.get("/opengraph-image");
  expect(response.ok()).toBe(true);
  expect(response.headers()["content-type"]).toContain("image/png");
});
