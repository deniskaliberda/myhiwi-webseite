import { expect, test } from "@playwright/test";
import { NextRequest } from "next/server";
import { POST } from "../app/api/contact/route";

const valid = { name: "Mara Muster", email: "mara@example.test", website: "Muster GmbH", message: "Website prüfen", phone: "", consent: true };
let originalFetch: typeof fetch;
let originalEnv: NodeJS.ProcessEnv;
let sent: { url: string; body: Record<string, any> }[];
let providerStatus: number;
let providerBody: object;

test.beforeEach(() => {
  originalFetch = globalThis.fetch;
  originalEnv = { ...process.env };
  process.env.RESEND_API_KEY = "re_test_placeholder";
  process.env.CONTACT_EMAIL = "recipient@example.test";
  process.env.META_PIXEL_ID = "test-pixel";
  process.env.META_CAPI_ACCESS_TOKEN = "test-token";
  sent = [];
  providerStatus = 200;
  providerBody = { id: "test-email-id" };
  // All outbound traffic is intercepted. These tests never call a provider.
  globalThis.fetch = async (input, init) => {
    const url = String(input);
    sent.push({ url, body: JSON.parse(String(init?.body)) });
    if (url.startsWith("https://api.resend.com/emails")) {
      return Response.json(providerBody, { status: providerStatus });
    }
    if (url.startsWith("https://graph.facebook.com/")) {
      return Response.json({ events_received: 1 });
    }
    throw new Error("Unexpected outbound request blocked by contact test");
  };
});

test.afterEach(() => {
  globalThis.fetch = originalFetch;
  process.env = originalEnv;
});

function submit(body: unknown) {
  return POST(new NextRequest("http://localhost/api/contact", { method: "POST", body: JSON.stringify(body) }));
}

test("@api rejects a provider error and does not record a lead", async () => {
  providerStatus = 422;
  providerBody = { statusCode: 422, name: "validation_error", message: "Provider rejected sender" };
  const response = await submit({ ...valid, adConsent: true, event_id: "test-event" });
  expect(response.status).toBe(502);
  expect(await response.json()).toEqual({ error: "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut." });
  expect(sent).toHaveLength(1);
});

test("@api does not confirm delivery without a provider message id", async () => {
  providerBody = {};
  const response = await submit(valid);
  expect(response.status).toBe(502);
  expect((await response.json()).success).toBeUndefined();
});

test("@api preserves FeWo routing and consented lead tracking after accepted email", async () => {
  const response = await submit({ ...valid, source: "fewo-direktbuchung", message: "", adConsent: true, event_id: "test-event", page: "https://myhiwi.de/fewo-direktbuchung" });
  expect(response.status).toBe(200);
  expect(await response.json()).toEqual({ success: true });
  expect(sent).toHaveLength(2);
  expect(sent[0].body.subject).toBe("Direktbuchungs-Check: Muster GmbH — Mara Muster");
  expect(sent[0].body.to).toEqual(["recipient@example.test"]);
  expect(sent[1].body.data[0]).toMatchObject({ event_id: "test-event", event_source_url: "https://myhiwi.de/fewo-direktbuchung" });
});

test("@api sends a visibility inquiry with escaped content and no unconsented tracking", async () => {
  const response = await submit({ ...valid, website: "Muster & Partner", message: "<script>demo</script>", event_id: "unconsented" });
  expect(response.status).toBe(200);
  expect(sent).toHaveLength(1);
  expect(sent[0].body.html).toContain("&lt;script&gt;demo&lt;/script&gt;");
  expect(sent[0].body.html).not.toContain("<script>");
});

for (const [label, changes] of Object.entries({ whitespace: { name: "  " }, wrongType: { website: {} }, email: { email: "bad-address" }, consent: { consent: "true" } })) {
  test(`@api rejects invalid ${label} before email`, async () => {
    const response = await submit({ ...valid, ...changes });
    expect(response.status).toBe(400);
    expect(sent).toHaveLength(0);
  });
}

test("@api treats malformed JSON as an invalid request", async () => {
  const response = await POST(new NextRequest("http://localhost/api/contact", { method: "POST", body: "{" }));
  expect(response.status).toBe(400);
  expect(sent).toHaveLength(0);
});
