import { expect, test } from "@playwright/test";

const services = [
  { slug: "webseiten", heading: "Webseiten", name: "Webseiten für lokale Betriebe" },
  { slug: "google-sichtbarkeit", heading: "Google", name: "Google-Sichtbarkeit für lokale Betriebe" },
  { slug: "ki-sichtbarkeit", heading: "KI", name: "KI-Sichtbarkeit für lokale Betriebe" },
];

for (const service of services) {
  test(`${service.slug}: crawlable content and self-canonical metadata without JavaScript`, async ({ browser, request }) => {
    const path = `/leistungen/${service.slug}`;
    const response = await request.get(path);
    expect(response.status()).toBe(200);
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    await page.goto(path);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("h1")).toContainText(service.heading);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `https://myhiwi.de${path}`);
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute("content", `https://myhiwi.de${path}`);
    await expect(page).toHaveTitle(new RegExp(service.heading));
    expect((await page.title()).match(/MyHiwi/g)).toHaveLength(1);
    const description = await page.locator('meta[name="description"]').getAttribute("content");
    expect(description?.length).toBeGreaterThan(60);
    const schemas = await page.locator('script[type="application/ld+json"]').allTextContents();
    const nodes = schemas.flatMap((raw) => {
      const value = JSON.parse(raw);
      return value["@graph"] || [value];
    });
    expect(nodes).toEqual(expect.arrayContaining([
      expect.objectContaining({ "@type": "Service", name: service.name, url: `https://myhiwi.de${path}` }),
      expect.objectContaining({ "@type": "BreadcrumbList" }),
    ]));
    for (const related of services.filter((other) => other.slug !== service.slug)) {
      await expect(page.locator(`main a[href="/leistungen/${related.slug}"]`)).toBeVisible();
    }
    await page.locator("main details summary").first().click();
    await expect(page.locator("main details").first()).toHaveAttribute("open", "");
    const cta = page.getByRole("link", { name: "Sichtbarkeit prüfen lassen", exact: true }).first();
    await expect(cta).toHaveAttribute("href", "/kontakt");
    await cta.click();
    await expect(page).toHaveURL(/\/kontakt$/);
    await context.close();
  });

  test(`${service.slug}: mobile layout stays readable without custom font downloads`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`/leistungen/${service.slug}`, { waitUntil: "networkidle" });
    await expect(page.locator("h1")).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    expect(await page.locator("h1").evaluate((el) => getComputedStyle(el).fontFamily)).not.toMatch(/Bricolage/);
    expect(await page.evaluate(() => performance.getEntriesByType("resource").map((entry) => entry.name).filter((url) => /\.woff2(?:\?|$)/.test(url)))).toEqual([]);
  });
}

test("KI page provides primary references for search eligibility", async ({ page }) => {
  await page.goto("/leistungen/ki-sichtbarkeit");
  await expect(page.locator('main a[href="https://developers.google.com/search/docs/appearance/ai-features"]')).toBeVisible();
  await expect(page.locator('main a[href="https://developers.openai.com/api/docs/bots"]')).toBeVisible();
});
