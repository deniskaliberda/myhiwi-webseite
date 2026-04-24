import { NextResponse } from "next/server";

const SITE = "https://myhiwi.de";

const posts = [
  {
    slug: "keyword-kannibalisierung",
    title:
      "Keyword-Kannibalisierung: der stille Killer Ihrer Top-10-Platzierungen",
    description:
      "Wenn mehrere Seiten auf dasselbe Keyword ranken, klauen sie sich gegenseitig die Ranking-Kraft. Wie wir das beim Sonnenhof gefixt haben — und Top-10-Keywords in einem Monat verdoppelt.",
    date: "2026-04-24",
    category: "Technisches SEO",
  },
  {
    slug: "next-js-fuer-lokale-websites",
    title: "Warum ich für KMU kein WordPress mehr baue",
    description:
      "Ladezeit, Wartung, Sicherheit — drei Argumente, warum Next.js für Hotel- und Handwerker-Websites 2026 die bessere Wahl ist.",
    date: "2026-04-24",
    category: "Webdesign",
  },
  {
    slug: "schema-org-fuer-hotels-und-kmu",
    title:
      "Schema.org — die unsichtbare Sprache, mit der Google Ihre Seite liest",
    description:
      "Strukturierte Daten bringen Rich Results in den Suchergebnissen — Sterne, Preise, Öffnungszeiten direkt in der Liste. Welche 4 Schema-Typen jeder KMU braucht.",
    date: "2026-04-24",
    category: "Technisches SEO",
  },
  {
    slug: "google-ads-pmax-fuer-kmu",
    title: "Google Ads Performance Max — was 2026 für KMU funktioniert",
    description:
      "Richtig eingerichtet hat Performance Max beim Sonnenhof zu 0,30 € CPC geführt. Die Setup-Reihenfolge, die drei häufigsten Pannen und wann sich PMax rechnet.",
    date: "2026-04-24",
    category: "Google Ads",
  },
  {
    slug: "ota-provision-vs-direktbuchung",
    title:
      "Was Booking.com Sie wirklich kostet — und ab wann Direktbuchung rechnet",
    description:
      "OTAs behalten 15–18 % jeder Buchung. Ein Rechenbeispiel für ein 30-Zimmer-Haus: 50.000 bis 100.000 € pro Jahr gehen an die Portale.",
    date: "2026-04-24",
    category: "Hotellerie & FeWo",
  },
  {
    slug: "sichtbarkeitsindex-lesen",
    title: "Sichtbarkeitsindex — und warum nur Top-10 Geld bringt",
    description:
      "Wie man einen SEO-Monatsreport wirklich liest. Die 1 %-Regel ab Seite 2, was ein guter Bericht enthalten muss und welche zwei Fragen der Inhaber jedem Agentur-Bericht stellen sollte.",
    date: "2026-04-24",
    category: "SEO Reporting",
  },
  {
    slug: "google-business-profil",
    title:
      "Google Business Profil: Warum es für lokale Unternehmen unverzichtbar ist",
    description:
      "Warum Ihr Google Business Profil das wichtigste Werkzeug für lokale Sichtbarkeit ist — und wie Sie es optimal nutzen.",
    date: "2026-02-11",
    category: "Local SEO",
  },
];

function escapeXml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const items = posts
    .map(
      (p) => `
    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${SITE}/blog/${p.slug}</link>
      <guid isPermaLink="true">${SITE}/blog/${p.slug}</guid>
      <description>${escapeXml(p.description)}</description>
      <category>${escapeXml(p.category)}</category>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <author>kontakt@myhiwi.de (Denis Kaliberda)</author>
    </item>`,
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>MyHiwi — Blog</title>
    <link>${SITE}/blog</link>
    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml"/>
    <description>Praxisnahe Beiträge zu Local SEO, Webdesign, Google Ads und KI-Automation für KMU. Von Denis Kaliberda, MyHiwi UG.</description>
    <language>de-DE</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
