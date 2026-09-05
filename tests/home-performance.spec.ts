import { expect, test } from "@playwright/test";

test.describe("Startseiten-Performance", () => {
  test("priorisiert vor dem mobilen Hero keine Custom-Fonts", async ({ page }) => {
    await page.goto("/");

    const fontPreloads = page.locator('link[rel="preload"][as="font"]');

    await expect(fontPreloads).toHaveCount(0);
  });

  test("tauscht die Hero-Schriften auf langsamen Verbindungen nicht verspätet aus", async ({
    page,
  }) => {
    await page.goto("/");

    const heroFontDisplays = await page.evaluate(() =>
      Array.from(document.fonts)
        .filter(
          (font) =>
            (font.family.includes("Bricolage") ||
              font.family.includes("Instrument")) &&
            font.display !== "auto",
        )
        .map((font) => font.display),
    );

    expect(heroFontDisplays).not.toHaveLength(0);
    expect(new Set(heroFontDisplays)).toEqual(new Set(["optional"]));
  });

  test("hält die mobile Hero-Überschrift aus dem Font-Ladepfad heraus", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 412, height: 823 });
    await page.goto("/");

    const fontFamily = await page.locator("h1.mh-hero-title").evaluate((hero) =>
      getComputedStyle(hero).fontFamily,
    );

    expect(fontFamily).not.toContain("Bricolage");
  });

  test("liefert Kundenlogos responsiv über den Bildoptimierer aus", async ({
    page,
  }) => {
    await page.goto("/");

    const logoSources = await page
      .locator('img[alt="Sonnenhof"], img[alt="Mr. Sherman"], img[alt="Formazin"], img[alt="Villa Gloria"]')
      .evaluateAll((logos) => logos.map((logo) => (logo as HTMLImageElement).src));

    expect(logoSources).toHaveLength(4);
    expect(logoSources.every((source) => source.includes("/_next/image?url="))).toBe(
      true,
    );
  });

  test("verwendet für den Body nur die aktive Design-Schrift", async ({ page }) => {
    await page.goto("/");

    const fontFamily = await page.locator("body").evaluate((body) =>
      getComputedStyle(body).fontFamily,
    );

    expect(fontFamily).toContain("Inter_Tight");
  });

  test("lädt auf Mobile keine Custom-Font-Dateien", async ({ page }) => {
    await page.setViewportSize({ width: 412, height: 823 });
    await page.goto("/", { waitUntil: "networkidle" });

    const fontRequests = await page.evaluate(() =>
      performance
        .getEntriesByType("resource")
        .map((entry) => entry.name)
        .filter((url) => /\.woff2(?:\?|$)/.test(url)),
    );

    expect(fontRequests).toEqual([]);
  });
});
