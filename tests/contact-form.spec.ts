import { expect, test, type Page } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem("mh-consent-v2", "denied"));
});

async function fillInquiry(page: Page) {
  await page.locator("#name").fill("Mara Muster");
  await page.locator("#email").fill("mara@example.test");
  await page.locator("#website").fill("Muster GmbH");
  await page.locator("#message").fill("Bitte meine Sichtbarkeit prüfen.");
  await page.getByRole("checkbox", { name: /Ich bin einverstanden/ }).check();
}

test("@form requires labelled inputs and consent before submitting", async ({ page }) => {
  let submitted = false;
  await page.route("**/api/contact", route => { submitted = true; return route.fulfill({ json: { success: true } }); });
  await page.goto("/kontakt");
  for (const id of ["name", "email", "website", "message"]) {
    await expect(page.locator(`#${id}`)).toHaveAttribute("required", "");
    await expect(page.locator(`label[for="${id}"]`)).toBeVisible();
  }
  await page.locator('button[type="submit"]').click();
  await expect(page.locator("#name")).toBeFocused();
  expect(submitted).toBe(false);
  await fillInquiry(page);
  await page.getByRole("checkbox", { name: /Ich bin einverstanden/ }).uncheck();
  await page.locator('button[type="submit"]').click();
  expect(submitted).toBe(false);
});

test("@form retains input on delivery failure and supports a keyboard retry", async ({ page }) => {
  let attempts = 0;
  let payload: Record<string, unknown> = {};
  await page.route("**/api/contact", async route => {
    attempts++;
    payload = route.request().postDataJSON();
    await route.fulfill(attempts === 1
      ? { status: 502, json: { error: "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut." } }
      : { status: 200, json: { success: true } });
  });
  await page.goto("/kontakt");
  await fillInquiry(page);
  await page.locator('button[type="submit"]').click();
  await expect(page.getByRole("alert").filter({ hasText: /erneut/ })).toContainText("erneut");
  await expect(page.getByRole("alert").filter({ hasText: /erneut/ })).toBeFocused();
  await expect(page.locator("#name")).toHaveValue("Mara Muster");
  await expect(page.locator("#message")).toHaveValue("Bitte meine Sichtbarkeit prüfen.");
  await expect(page.getByRole("checkbox", { name: /Ich bin einverstanden/ })).toBeChecked();
  await page.getByLabel(/Ort oder Region/).fill("Münsterland");
  await page.locator('button[type="submit"]').focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("status")).toContainText("1–3 Werktagen");
  await expect(page.getByRole("heading", { level: 1 })).toBeFocused();
  expect(attempts).toBe(2);
  expect(payload.message).toBe("Bitte meine Sichtbarkeit prüfen.\n\nOrt / Region: Münsterland");
  expect(payload.consent).toBe(true);
});

test("@form never confirms success from a 200 response without success true", async ({ page }) => {
  await page.route("**/api/contact", route => route.fulfill({ json: { success: false } }));
  await page.goto("/kontakt");
  await fillInquiry(page);
  await page.locator('button[type="submit"]').click();
  await expect(page.getByRole("alert").filter({ hasText: /erneut/ })).toBeVisible();
  await expect(page.locator("#email")).toHaveValue("mara@example.test");
});

test("@form recovers from a network failure without losing the inquiry", async ({ page }) => {
  await page.route("**/api/contact", route => route.abort("failed"));
  await page.goto("/kontakt");
  await fillInquiry(page);
  await page.locator('button[type="submit"]').click();
  await expect(page.getByRole("alert").filter({ hasText: /erneut/ })).toContainText("erneut");
  await expect(page.locator("#website")).toHaveValue("Muster GmbH");
  await expect(page.locator('button[type="submit"]')).toBeEnabled();
});
