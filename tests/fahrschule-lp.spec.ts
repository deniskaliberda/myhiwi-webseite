import { expect, test } from "@playwright/test";

/**
 * Fahrschule shell v2: landing page + appointment prep page.
 * Guards the facts and promises that must never drift (app/fahrschule/DESIGN.md §4, §5).
 */

const VERBOTEN = [/garantie/i, /platz 1 garantiert/i, /volle-kurse-system/i, /\bSEO\b/, /\bLeads?\b/];

test("Landingpage: Fakten, Preise, keine verbotenen Zusagen", async ({ page }) => {
  await page.goto("/fahrschule");
  await expect(page.locator("h1")).toHaveText(
    "Ihre Fahrschule ist gut. Im Internet sieht man das noch nicht.",
  );
  const text = (await page.locator("main").innerText()).replace(/\s+/g, " ");
  for (const soll of ["349 € / Monat", "599 € / Monat", "490 €", "1.490 €", "ab 2.990 €", "6 Monate, dann monatlich", "12 Monate"]) {
    expect(text).toContain(soll);
  }
  for (const muster of VERBOTEN) {
    expect(text).not.toMatch(muster);
  }
  // Reform: only the EU directive is decided, everything German is planned.
  await expect(page.locator(".fsp-chip--done")).toHaveCount(1);
  await expect(page.locator(".fsp-chip")).toHaveCount(5);
  await expect(page.locator('a[href^="tel:+4915114993066"]').first()).toBeVisible();
  await expect(page.locator('a[href^="https://wa.me/4915114993066"]').first()).toBeVisible();
});

test("Landingpage: kein Überlauf am Handy, alle Bilder laden", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/fahrschule");
  const breite = await page.evaluate(() => document.documentElement.scrollWidth);
  expect(breite).toBeLessThanOrEqual(391);
  await page.evaluate(async () => {
    for (const img of Array.from(document.images)) {
      img.loading = "eager";
      img.scrollIntoView();
      if (!img.complete) await new Promise((r) => { img.onload = r; img.onerror = r; });
    }
  });
  const kaputt = await page.evaluate(() => Array.from(document.images).filter((i) => i.naturalWidth === 0).map((i) => i.src));
  expect(kaputt).toEqual([]);
});

test("Termin-Vorbereitung: noindex, nicht in der Sitemap, kein Buchungs-CTA", async ({ page, request }) => {
  await page.goto("/fahrschule/termin");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
  await expect(page.locator("h1")).toContainText("Vorbereiten müssen Sie nichts");
  const text = (await page.locator("main").innerText()).replace(/\s+/g, " ");
  expect(text).not.toMatch(/Gespräch vereinbaren/i);
  expect(text).toContain("So laufen die 30 Minuten");
  for (const muster of VERBOTEN) {
    expect(text).not.toMatch(muster);
  }
  await expect(page.locator('a[href^="https://wa.me/"]')).toHaveCount(0);
  const xml = await (await request.get("/sitemap.xml")).text();
  expect(xml).not.toContain("/fahrschule/termin");
});
