import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { AI_STARTKLAR_FOCUS_OPTIONS } from "@/lib/ai-startklar/product";
import { parseAiStartklarInquiry } from "@/lib/ai-startklar/inquiry";

export const runtime = "nodejs";
export const maxDuration = 30;

const focusLabels = new Map<string, string>(
  AI_STARTKLAR_FOCUS_OPTIONS.map((item) => [item.value, item.label]),
);
const formatLabels: Record<string, string> = {
  online: "Online",
  "vor-ort": "Vor Ort",
  offen: "Noch offen",
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;");
}

function subjectPart(value: string): string {
  return value.replace(/[\r\n]+/g, " ");
}

export async function POST(request: NextRequest) {
  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Bitte füllen Sie alle Pflichtfelder aus." },
        { status: 400 },
      );
    }

    const parsed = parseAiStartklarInquiry(body);
    if (!parsed.ok) {
      return NextResponse.json({ error: parsed.error }, { status: 400 });
    }

    const data = parsed.data;
    const resend = new Resend(process.env.RESEND_API_KEY);
    const recipients = (process.env.CONTACT_EMAIL || "denis@myhiwi.de")
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean);
    const row = (label: string, value: string | number | null) => `
      <tr>
        <td style="padding:8px 12px;font-weight:700;border-bottom:1px solid #e2e8f0">${escapeHtml(label)}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #e2e8f0">${escapeHtml(String(value ?? "—"))}</td>
      </tr>`;
    const html = `
      <div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;color:#0f172a">
        <h2>Neue Anfrage: MyHiwi AI-Startklar</h2>
        <table style="width:100%;border-collapse:collapse">
          ${row("Unternehmen", data.company)}
          ${row("Name", data.name)}
          ${row("E-Mail", data.email)}
          ${row("Telefon", data.phone)}
          ${row("Teilnehmende", data.participants)}
          ${row("Format", formatLabels[data.format])}
          ${row("Zeitraum", data.timeframe)}
          ${row("Werkzeuge", data.tools)}
          ${row("Fokus", focusLabels.get(data.focus) ?? data.focus)}
          ${row("Nachricht", data.message)}
          ${row("Seite", data.page)}
        </table>
        <p style="margin-top:20px;font-size:12px;color:#64748b">Einwilligung zur Kontaktaufnahme: Ja</p>
      </div>`;

    const internal = await resend.emails.send({
      from: "MyHiwi Formular <formular@myhiwi.de>",
      to: recipients,
      replyTo: data.email,
      subject: `AI-Startklar: ${subjectPart(data.company)} — ${subjectPart(data.name)}`,
      html,
    });
    if (internal.error) throw new Error(internal.error.message);

    try {
      const firstName = escapeHtml(data.name.split(/\s+/)[0] || data.name);
      const acknowledgement = await resend.emails.send({
        from: "MyHiwi <kontakt@myhiwi.de>",
        to: data.email,
        replyTo: "kontakt@myhiwi.de",
        subject: "Ihre Anfrage zu MyHiwi AI-Startklar",
        html: `<div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;color:#0f172a">
          <p>Hallo ${firstName},</p>
          <p>vielen Dank für Ihre Anfrage zu MyHiwi AI-Startklar. Wir prüfen Teilnehmerzahl, Format, Zeitraum, Werkzeuge und gewünschten Schwerpunkt und melden uns persönlich mit dem passenden nächsten Schritt.</p>
          <p>Bitte senden Sie uns bis dahin keine personenbezogenen, vertraulichen oder sicherheitsrelevanten Inhalte.</p>
          <p>Viele Grüße<br>MyHiwi</p>
        </div>`,
      });
      if (acknowledgement.error) {
        console.error(
          "AI-Startklar acknowledgement failed",
          acknowledgement.error,
        );
      }
    } catch (error) {
      console.error("AI-Startklar acknowledgement failed", error);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("AI-Startklar inquiry failed", error);
    return NextResponse.json(
      {
        error:
          "Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
      },
      { status: 500 },
    );
  }
}
