import { expect, test } from "@playwright/test";

test.describe("Startseiten-Performance", () => {
  test("priorisiert vor dem mobilen Hero keine Custom-Fonts", async ({
    page,
  }) => {
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

    const fontFamily = await page
      .locator("h1.mh-hero-title")
      .evaluate((hero) => getComputedStyle(hero).fontFamily);

    expect(fontFamily).not.toContain("Bricolage");
  });

  test("liefert echte Projektansichten responsiv über den Bildoptimierer aus", async ({
    page,
  }) => {
    await page.goto("/");
    const images = page.locator('main img[src*="%2Fcase-studies%2F"]');
    expect(await images.count()).toBeGreaterThanOrEqual(5);
    for (const image of await images.all()) {
      await expect(image).toHaveAttribute("srcset", /(?:640|750|828)w/);
      await expect(image).toHaveAttribute("sizes", /vw/);
    }
  });

  test("verwendet für den Body nur die aktive Design-Schrift", async ({
    page,
  }) => {
    await page.goto("/");

    const fontFamily = await page
      .locator("body")
      .evaluate((body) => getComputedStyle(body).fontFamily);

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
