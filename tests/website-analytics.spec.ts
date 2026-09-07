import { expect, test, type Page } from "@playwright/test";

// Serve the local build under the production origin inside this isolated browser.
// Every request is intercepted; neither analytics nor contact mail reaches production.
test.beforeEach(async ({ page, baseURL }) => {
  await page.route("https://myhiwi.de/**", async route => {
    const url = new URL(route.request().url());
    if (url.pathname.startsWith("/_vercel/")) {
      return route.fulfill({ contentType: "application/javascript", body: "" });
    }
    if (url.pathname.startsWith("/api/")) {
      return route.fulfill({ status: 503, json: { success: false } });
    }
    const response = await route.fetch({ url: `${baseURL}${url.pathname}${url.search}` });
    await route.fulfill({ response });
  });
  await page.addInitScript(() => {
    const state = window as typeof window & {
      measured: unknown[];
      analyticsFilter?: (event: { type: "pageview" | "event"; url: string }) => unknown;
    };
    state.measured = [];
    window.va = (command, payload) => {
      if (command === "beforeSend") {
        state.analyticsFilter = payload as typeof state.analyticsFilter;
        return;
      }
      const event = state.analyticsFilter?.({ type: command === "event" ? "event" : "pageview", url: location.href });
      if (event) state.measured.push({ ...event, payload });
    };
  });
});

async function measured(page: Page) {
  return page.evaluate(() => (window as typeof window & { measured: unknown[] }).measured);
}
async function submitInquiry(page: Page) {
  await page.locator("#name").fill("Mara Muster");
  await page.locator("#email").fill("mara@example.test");
  await page.locator("#website").fill("Muster GmbH");
  await page.locator("#message").fill("Vertrauliche Nachricht");
  await page.getByRole("checkbox", { name: /Ich bin einverstanden/ }).check();
  await page.locator('button[type="submit"]').click();
}

test("requires a fresh opt-in, strips URL details, and stops after withdrawal", async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem("mh-consent-v1", "granted"));
  await page.goto("https://myhiwi.de/datenschutz?email=private%40example.test#private");
  await expect(page.getByRole("dialog")).toBeVisible();
  expect(await measured(page)).toEqual([]);
  await expect(page.locator('script[src*="/_vercel/"]')).toHaveCount(0);
  await page.getByRole("button", { name: "Akzeptieren", exact: true }).click();
  await expect.poll(() => measured(page)).toEqual([
    expect.objectContaining({ type: "pageview", url: "https://myhiwi.de/datenschutz" }),
  ]);
  await expect(page.locator('script[src*="/_vercel/"]')).toHaveCount(1);
  await page.getByRole("button", { name: "Einwilligung widerrufen", exact: true }).click();
  await expect(page.getByRole("status")).toContainText("nicht zugestimmt");
  await expect(page.locator('script[src*="/_vercel/"]')).toHaveCount(0);
  expect(await measured(page)).toEqual([]);
});

test("records only confirmed contact success without form data", async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem("mh-consent-v2", "granted"));
  let attempts = 0;
  await page.route("https://myhiwi.de/api/contact", route => route.fulfill({
    json: { success: ++attempts > 1 },
  }));
  await page.goto("https://myhiwi.de/kontakt?email=private%40example.test");
  await submitInquiry(page);
  await expect(page.getByRole("alert").filter({ hasText: /erneut/ })).toBeVisible();
  expect((await measured(page)).filter((event: any) => event.type === "event")).toEqual([]);
  await page.locator('button[type="submit"]').click();
  await expect(page.getByRole("status")).toContainText("angekommen");
  const events = (await measured(page)).filter((event: any) => event.type === "event");
  expect(events).toEqual([{ type: "event", url: "https://myhiwi.de/kontakt", payload: { name: "contact_submitted", data: { form: "kontakt" } } }]);
  expect(JSON.stringify(events)).not.toMatch(/Mara|example|Vertrauliche|Muster/);
});

test("denied consent keeps successful inquiries unmeasured", async ({ page }) => {
  await page.route("https://myhiwi.de/api/contact", route => route.fulfill({ json: { success: true } }));
  await page.goto("https://myhiwi.de/kontakt");
  await page.getByRole("button", { name: "Nur notwendige", exact: true }).click();
  await submitInquiry(page);
  await expect(page.getByRole("status")).toContainText("angekommen");
  expect(await measured(page)).toEqual([]);
});

test("QA opt-out and localhost do not load analytics even with consent", async ({ page, baseURL }) => {
  await page.addInitScript(() => localStorage.setItem("mh-consent-v2", "granted"));
  for (const url of ["https://myhiwi.de/kontakt?analytics=off", `${baseURL}/kontakt`]) {
    await page.goto(url);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.locator('script[src*="/_vercel/"]')).toHaveCount(0);
    expect(await measured(page)).toEqual([]);
  }
});

test("contact links are separate from submitted inquiries", async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem("mh-consent-v2", "granted"));
  await page.goto("https://myhiwi.de/kontakt");
  // Prevent opening the user's mail client while exercising the delegated click handler.
  await page.locator('footer a[href="mailto:denis@myhiwi.de"]').evaluate(link => link.addEventListener("click", event => event.preventDefault()));
  await page.locator('footer a[href="mailto:denis@myhiwi.de"]').click();
  expect((await measured(page)).filter((event: any) => event.type === "event")).toEqual([
    { type: "event", url: "https://myhiwi.de/kontakt", payload: { name: "contact_link_clicked", data: { channel: "email" } } },
  ]);
});


test("FeWo requires confirmed success before recording its own form category", async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem("mh-consent-v2", "granted"));
  let attempts = 0;
  await page.route("https://myhiwi.de/api/contact", route => route.fulfill({ json: { success: ++attempts > 1 } }));
  await page.goto("https://myhiwi.de/fewo-direktbuchung");
  await page.locator("#fewo-name").fill("Mara Muster");
  await page.locator("#fewo-email").fill("mara@example.test");
  await page.locator("#fewo-website").fill("Testunterkunft");
  await page.getByRole("checkbox", { name: /Ich bin einverstanden/ }).check();
  await page.getByRole("button", { name: "Check anfragen", exact: true }).click();
  await expect(page.getByText("Anfrage konnte nicht gesendet werden.", { exact: true })).toBeVisible();
  expect((await measured(page)).filter((event: any) => event.type === "event")).toEqual([]);
  await page.getByRole("button", { name: "Check anfragen", exact: true }).click();
  await expect(page.getByRole("heading", { name: /Danke.*angekommen/ })).toBeVisible();
  expect((await measured(page)).filter((event: any) => event.type === "event")).toEqual([
    { type: "event", url: "https://myhiwi.de/fewo-direktbuchung", payload: { name: "contact_submitted", data: { form: "fewo" } } },
  ]);
});
