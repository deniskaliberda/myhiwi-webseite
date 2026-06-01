import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function sanitize(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();

    const { name, email, website, message, phone, consent } = body;

    if (!name || !email || !website || !message) {
      return NextResponse.json(
        { error: "Name, E-Mail, Webseite/Firma und Anliegen sind Pflichtfelder." },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { error: "Ohne Einwilligung kann die Anfrage nicht verarbeitet werden." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." },
        { status: 400 }
      );
    }

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e3a5f;">
        <h2 style="color: #1e3a5f; border-bottom: 2px solid #3b82f6; padding-bottom: 12px;">
          Neue Quick-Check-Anfrage über MyHiwi
        </h2>

        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; width: 40%; border-bottom: 1px solid #e2e8f0;">Name</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0;">${sanitize(name)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #e2e8f0;">E-Mail</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${sanitize(email)}">${sanitize(email)}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Webseite / Firma</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0;">${sanitize(website)}</td>
          </tr>
          ${
            phone
              ? `
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Telefon</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0;">${sanitize(phone)}</td>
          </tr>`
              : ""
          }
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Einwilligung</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0;">Ja — Kontaktaufnahme per E-Mail/Telefon zugestimmt</td>
          </tr>
        </table>

        <h3 style="color: #3b82f6; margin-top: 24px;">Anliegen</h3>
        <p style="background: #f1f5f9; padding: 16px; border-radius: 8px; line-height: 1.6; white-space: pre-wrap;">${sanitize(message)}</p>

        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
        <p style="color: #94a3b8; font-size: 12px;">
          Gesendet am ${new Date().toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" })} über myhiwi.de
        </p>
      </div>
    `;

    await resend.emails.send({
      from: "MyHiwi Kontakt <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL || "kontakt@myhiwi.de"],
      replyTo: email,
      subject: `Quick-Check: ${sanitize(website)} — ${sanitize(name)}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut." },
      { status: 500 }
    );
  }
}
