/**
 * MyHiwi Mobile-Revamp 2026 — zentrale Navigations-Konfiguration.
 * Header-Nav, Mobile-Drawer und Footer lesen ALLE aus dieser Datei,
 * damit Drawer und Footer dieselbe mentale Karte zeigen
 * (gleiche Gruppen-Labels, gleiche Reihenfolge, keine Duplikate).
 */

export type NavItem = { label: string; href: string };
export type NavGroup = { label: string; items: NavItem[] };

/** Primärer CTA — Wortlaut verbindlich aus DESIGN.md §7. */
export const PRIMARY_CTA = {
  label: "Kostenlosen Digital-Check anfragen",
  /** Kurzform für die schmale Mobile-Headerzeile. */
  shortLabel: "Digital-Check",
  href: "/kontakt",
} as const;

/** Desktop-Pill-Nav. */
export const NAV_PRIMARY: NavItem[] = [
  { label: "System", href: "/#system" },
  { label: "Lösungen", href: "/fewo-direktbuchung" },
  { label: "Cases", href: "/case-studies" },
  { label: "Wissen", href: "/wissen" },
  { label: "Über MyHiwi", href: "/ueber-mich" },
];

/**
 * Mobile-Drawer-Gruppen — wortgleich mit den Footer-Spalten
 * (Lösungen / Cases / MyHiwi), damit mobil EINE Site-Struktur erlernbar ist.
 */
export const DRAWER_GROUPS: NavGroup[] = [
  {
    label: "Lösungen",
    items: [
      { label: "FeWo & Hotels", href: "/fewo-direktbuchung" },
      { label: "Handwerk", href: "/loesungen/handwerk" },
      { label: "Fahrschulen", href: "/fahrschule" },
      { label: "Region Berlin-Ost & Barnim", href: "/region/berlin-ost-barnim" },
    ],
  },
  {
    label: "Cases",
    items: [
      { label: "Alle Case Studies", href: "/case-studies" },
      { label: "Sonnenhof Herrsching", href: "/case-studies/sonnenhof-herrsching" },
    ],
  },
  {
    label: "MyHiwi",
    items: [
      { label: "Über MyHiwi", href: "/ueber-mich" },
      { label: "Wissen", href: "/wissen" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
];

/** Footer-Spalten — gleiche Gruppen wie der Drawer, plus SEO-Tiefe. */
export const FOOTER_COLUMNS: NavGroup[] = [
  {
    label: "Lösungen",
    items: [
      { label: "FeWo & Hotels", href: "/fewo-direktbuchung" },
      { label: "Handwerk", href: "/loesungen/handwerk" },
      { label: "Fahrschulen", href: "/fahrschule" },
      { label: "Friseure", href: "/loesungen/friseur" },
      { label: "Praxis & Physio", href: "/loesungen/praxis-physio" },
      { label: "Region Berlin-Ost & Barnim", href: "/region/berlin-ost-barnim" },
    ],
  },
  {
    label: "Cases",
    items: [
      { label: "Alle Case Studies", href: "/case-studies" },
      { label: "Sonnenhof Herrsching", href: "/case-studies/sonnenhof-herrsching" },
      { label: "Mr. Sherman Tanzstudio", href: "/case-studies/mr-sherman" },
      { label: "Formazin", href: "/case-studies/formazin" },
    ],
  },
  {
    label: "MyHiwi",
    items: [
      { label: "Über MyHiwi", href: "/ueber-mich" },
      { label: "Wissen", href: "/wissen" },
      { label: "Blog", href: "/blog" },
      { label: "Festpreis", href: "/festpreis" },
    ],
  },
];

export const LEGAL_LINKS: NavItem[] = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

export const STATUS_LINE = "verfügbar · Ahrensfelde + Ammersee";
export const CONTACT_EMAIL = "denis@myhiwi.de";
