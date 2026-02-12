import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const serviceLabels: Record<string, string> = {
  webdesign: 'Webdesign',
  seo: 'Local SEO',
  beides: 'Webdesign & Local SEO',
};

const websiteLabels: Record<string, string> = {
  ja: 'Ja',
  nein: 'Nein',
};

const businessLabels: Record<string, string> = {
  gastronomie: 'Gastronomie',
  handwerk: 'Handwerk',
  arztpraxis: 'Arztpraxis / Gesundheit',
  einzelhandel: 'Einzelhandel',
  dienstleister: 'Dienstleister',
  sonstiges: 'Sonstiges',
};

const challengeLabels: Record<string, string> = {
  sichtbarkeit: 'Keine Sichtbarkeit bei Google',
  'veraltete-website': 'Veraltete Website',
  'wenig-anfragen': 'Wenig Kundenanfragen',
  'schlechte-bewertungen': 'Schlechte Google-Bewertungen',
  anderes: 'Anderes',
};

const timelineLabels: Record<string, string> = {
  sofort: 'Sofort',
  '1-3-monate': 'In 1–3 Monaten',
  informieren: 'Erst mal informieren',
};

function sanitize(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { service, hasWebsite, business, businessCustom, challenge, challengeCustom, timeline, name, email, phone, website, message } = body;

    if (!name || !email || !service) {
      return NextResponse.json(
        { error: 'Name, Email und Service sind Pflichtfelder.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' },
        { status: 400 }
      );
    }

    const businessDisplay = business === 'sonstiges' && businessCustom
      ? sanitize(businessCustom)
      : businessLabels[business] || '–';

    const challengeDisplay = challenge === 'anderes' && challengeCustom
      ? sanitize(challengeCustom)
      : challengeLabels[challenge] || '–';

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e3a5f;">
        <h2 style="color: #1e3a5f; border-bottom: 2px solid #3b82f6; padding-bottom: 12px;">
          Neue Kontaktanfrage über MyHiwi
        </h2>

        <h3 style="color: #3b82f6; margin-top: 24px;">Kontaktdaten</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; width: 40%; border-bottom: 1px solid #e2e8f0;">Name</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0;">${sanitize(name)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #e2e8f0;">E-Mail</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${sanitize(email)}">${sanitize(email)}</a></td>
          </tr>
          ${phone ? `
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Telefon</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0;">${sanitize(phone)}</td>
          </tr>` : ''}
          ${website ? `
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Website / Firma</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0;">${sanitize(website)}</td>
          </tr>` : ''}
        </table>

        <h3 style="color: #3b82f6; margin-top: 24px;">Quiz-Antworten</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; width: 40%; border-bottom: 1px solid #e2e8f0;">Interesse</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0;">${serviceLabels[service] || '–'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Bestehende Website</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0;">${websiteLabels[hasWebsite] || '–'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Branche</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0;">${businessDisplay}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Herausforderung</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0;">${challengeDisplay}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Zeitplan</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0;">${timelineLabels[timeline] || '–'}</td>
          </tr>
        </table>

        ${message ? `
        <h3 style="color: #3b82f6; margin-top: 24px;">Nachricht</h3>
        <p style="background: #f1f5f9; padding: 16px; border-radius: 8px; line-height: 1.6;">${sanitize(message)}</p>
        ` : ''}

        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
        <p style="color: #94a3b8; font-size: 12px;">
          Gesendet am ${new Date().toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })} über myhiwi.de
        </p>
      </div>
    `;

    await resend.emails.send({
      from: 'MyHiwi Kontakt <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL || 'kontakt@myhiwe.de'],
      replyTo: email,
      subject: `Neue Anfrage: ${serviceLabels[service] || 'Allgemein'} – ${sanitize(name)}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.' },
      { status: 500 }
    );
  }
}
