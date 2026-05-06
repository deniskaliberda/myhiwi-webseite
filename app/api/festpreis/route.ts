import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const tagLabels: Record<string, string> = {
  website: "Website",
  buchung: "Buchungssystem",
  zahlung: "Zahlungssystem",
  "ki-tool": "Eigenes KI-Tool",
  app: "Brand-App",
  anders: "Etwas anderes",
};

const timelineLabels: Record<string, string> = {
  asap: "So schnell wie möglich",
  quartal: "In 1–3 Monaten",
  informieren: "Erst mal sondieren",
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/\n/g, "<br>");
}

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email-Service nicht konfiguriert." },
        { status: 500 }
      );
    }
    const resend = new Resend(apiKey);
    const body = await request.json();
    const {
      name,
      contact,
      message,
      tags,
      timeline,
    }: {
      name?: string;
      contact?: string;
      message?: string;
      tags?: string[];
      timeline?: string;
    } = body;

    if (!name?.trim() || !contact?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, Kontakt und Beschreibung sind Pflicht." },
        { status: 400 }
      );
    }

    const tagsLine =
      Array.isArray(tags) && tags.length
        ? tags.map((t) => tagLabels[t] || t).join(" · ")
        : "—";
    const timelineLine = timeline
      ? timelineLabels[timeline] || timeline
      : "—";

    const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8"><style>
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#1e293b;line-height:1.6;max-width:600px;margin:0 auto;padding:32px 24px}
h1{font-size:20px;color:#0f172a;margin:0 0 24px;border-bottom:2px solid #06b6d4;padding-bottom:12px}
.label{font-size:11px;text-transform:uppercase;letter-spacing:0.12em;color:#64748b;font-weight:600;margin-top:20px;margin-bottom:6px}
.value{font-size:15px;color:#1e293b}
.message-box{background:#f8fafc;border-left:3px solid #06b6d4;padding:16px 20px;margin-top:6px;border-radius:6px;white-space:pre-wrap}
.contact{margin-top:32px;padding-top:20px;border-top:1px solid #e2e8f0;font-size:14px;color:#64748b}
</style></head><body>
<h1>Neue Festpreis-Anfrage</h1>
<div class="label">Name</div>
<div class="value">${escapeHtml(name)}</div>
<div class="label">Kontakt</div>
<div class="value">${escapeHtml(contact)}</div>
<div class="label">Was sie brauchen</div>
<div class="message-box">${escapeHtml(message)}</div>
<div class="label">Bereiche (Tags)</div>
<div class="value">${escapeHtml(tagsLine)}</div>
<div class="label">Timeline</div>
<div class="value">${escapeHtml(timelineLine)}</div>
<div class="contact">Eingegangen über myhiwi.de/festpreis · ${new Date().toLocaleString("de-DE", { dateStyle: "long", timeStyle: "short" })}</div>
</body></html>`;

    const text = `Neue Festpreis-Anfrage

Name: ${name}
Kontakt: ${contact}

Was sie brauchen:
${message}

Bereiche: ${tagsLine}
Timeline: ${timelineLine}

Eingegangen über myhiwi.de/festpreis am ${new Date().toLocaleString("de-DE")}`;

    await resend.emails.send({
      from: "MyHiwi Festpreis <festpreis@myhiwi.de>",
      to: [process.env.CONTACT_EMAIL || "kontakt@myhiwi.de"],
      replyTo: contact.includes("@") ? contact : undefined,
      subject: `Festpreis-Anfrage: ${name}`,
      html,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Festpreis API error:", err);
    return NextResponse.json(
      { error: "Anfrage konnte nicht gesendet werden." },
      { status: 500 }
    );
  }
}
