/**
 * Central glossary used by the <Glossary /> component.
 * Each entry gets a short 1–2 sentence definition and an optional
 * href to a deeper blog post.
 */

export type GlossaryEntry = {
  definition: string;
  href?: string;
};

export const glossary: Record<string, GlossaryEntry> = {
  "next-js": {
    definition:
      "Modernes Web-Framework auf Basis von React. Erzeugt extrem schnelle Websites mit server-seitigem Rendering und SEO-freundlicher HTML-Ausgabe — im Gegensatz zu klassischen Baukästen.",
    href: "/blog/next-js-fuer-lokale-websites",
  },
  "local-seo": {
    definition:
      "Die Disziplin, bei lokalen Google-Suchen (Friseur in meiner Nähe) ganz oben zu erscheinen. Kombination aus Google-Business-Profil, lokaler Website-Struktur und Orts-spezifischem Content.",
    href: "/blog/google-business-profil",
  },
  "google-business": {
    definition:
      "Kostenloser Google-Eintrag, über den Unternehmen in Maps und im Map Pack der Suchergebnisse erscheinen. Wichtigster einzelner Hebel für lokale Sichtbarkeit.",
    href: "/blog/google-business-profil",
  },
  "schema-org": {
    definition:
      "Standardisierte strukturierte Daten, die Google erlauben, eine Website korrekt zu interpretieren (Hotel, Restaurant, Produkt, FAQ …). Voraussetzung für Rich Results in den Suchergebnissen.",
    href: "/blog/schema-org-fuer-hotels-und-kmu",
  },
  "core-web-vitals": {
    definition:
      "Drei von Google gemessene Performance-Kennzahlen (LCP, INP, CLS), die direkt in die Ranking-Faktoren einfließen. Unter 2,5 s Ladezeit ist Standard-Ziel.",
  },
  "kannibalisierung": {
    definition:
      "Wenn mehrere Seiten auf derselben Website auf dasselbe Keyword ranken und sich gegenseitig die Ranking-Kraft klauen. Meist eine versteckte Bremse für Top-10-Platzierungen.",
    href: "/blog/keyword-kannibalisierung",
  },
  "keyword-kannibalisierung": {
    definition:
      "Wenn mehrere Seiten auf derselben Website auf dasselbe Keyword ranken und sich gegenseitig die Ranking-Kraft klauen. Meist eine versteckte Bremse für Top-10-Platzierungen.",
    href: "/blog/keyword-kannibalisierung",
  },
  "performance-max": {
    definition:
      "Google-Ads-Kampagnentyp, der Search, Display, YouTube, Gmail und Maps gleichzeitig bespielt. KI-gesteuerte Budget-Verteilung — ideal für KMU mit wenig Zeit für manuelle Optimierung.",
    href: "/blog/google-ads-pmax-fuer-kmu",
  },
  "ota-provision": {
    definition:
      "Online Travel Agencies wie Booking.com und FeWo-Direkt behalten 15–18 % jeder Buchung ein. Direktbuchungen über die eigene Website sparen diesen Anteil komplett.",
    href: "/blog/ota-provision-vs-direktbuchung",
  },
  "sichtbarkeitsindex": {
    definition:
      "Verdichtete Zahl, die SE Ranking oder Sistrix aus allen Keyword-Positionen einer Domain berechnen. Zeigt den Trend der Google-Sichtbarkeit über Zeit, nicht eine einzelne Position.",
    href: "/blog/sichtbarkeitsindex-lesen",
  },
  "top-10-keywords": {
    definition:
      "Suchbegriffe, bei denen eine Website auf Seite 1 der Google-Ergebnisse steht. Nur diese bringen nennenswerten Traffic — alles ab Seite 2 bekommt weniger als 1 % der Klicks.",
    href: "/blog/sichtbarkeitsindex-lesen",
  },
  "canonical": {
    definition:
      "HTML-Tag, das Google sagt, welche Version einer Seite die Hauptversion ist. Wichtig bei Duplikaten wie http/https, mit/ohne Slash, Parameter-URLs.",
  },
  "internal-linking": {
    definition:
      "Wie Seiten innerhalb der eigenen Website miteinander verlinkt sind. Google nutzt die Linkstruktur, um Wichtigkeit und Thema jeder Seite zu verstehen.",
  },
  "supabase": {
    definition:
      "Open-Source-Alternative zu Firebase auf Postgres-Basis. Liefert Datenbank, Auth, Realtime und Storage in einem — das Rückgrat für MyHiwi-Buchungs- und Mitgliedersysteme.",
  },
  "stripe": {
    definition:
      "Der Standard für digitale Zahlungen in Europa. Unterstützt Kreditkarte, SEPA, Klarna, Apple/Google Pay — alles über eine API, DSGVO-konform.",
    href: "/blog/stripe-subscriptions-fuer-kmu",
  },
  "stripe-subscriptions": {
    definition:
      "Stripes Modul für wiederkehrende Zahlungen. Behandelt Pro-rata-Abrechnung bei Tier-Wechseln, Steuer, Rechnungs-PDF und Dunning automatisch.",
    href: "/blog/stripe-subscriptions-fuer-kmu",
  },
  "meta-capi": {
    definition:
      "Meta Conversions API — Server-zu-Server-Tracking, das iOS-Tracking-Blockade und Ad-Blocker umgeht. 2026 nahezu Pflicht, damit Meta-Ads optimieren können.",
  },
  "ki-agent": {
    definition:
      "Ein LLM-gesteuertes Programm, das eine konkrete Aufgabe eigenständig ausführt — nicht nur chattet. Beispiel: aus Foto + Sprachnotiz ein fertiges Bauprotokoll erzeugen.",
  },
  "cpc": {
    definition:
      "Cost per Click — was Sie pro Klick in Google Ads zahlen. Branchenschnitt für Hotels/FeWo liegt bei 1–3 €. Unter 0,50 € gilt als hocheffizient.",
  },
  "cpl": {
    definition:
      "Cost per Lead — Werbekosten geteilt durch Anzahl qualifizierter Anfragen. Deutlich aussagekräftiger als CPC, weil nur zahlende Leads zählen.",
  },
};
