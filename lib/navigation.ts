export type NavItem = { label: string; href: string };
export type NavGroup = { label: string; items: NavItem[] };

export const PRIMARY_CTA = {
  label: "Sichtbarkeit prüfen lassen",
  shortLabel: "Sichtbarkeitscheck",
  href: "/kontakt",
} as const;

export const NAV_PRIMARY: NavItem[] = [
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Projekte", href: "/case-studies" },
  { label: "Wissen", href: "/wissen" },
  { label: "Über mich", href: "/ueber-mich" },
];

const SERVICES: NavGroup = {
  label: "Leistungen",
  items: [
    { label: "Webseiten", href: "/leistungen/webseiten" },
    { label: "Google-Sichtbarkeit", href: "/leistungen/google-sichtbarkeit" },
    { label: "KI-Sichtbarkeit", href: "/leistungen/ki-sichtbarkeit" },
    { label: "KI-Schulung für Unternehmen", href: "/ki-schulung" },
  ],
};
const COMPANY: NavGroup = {
  label: "MyHiwi",
  items: [
    { label: "Projekte & Ergebnisse", href: "/case-studies" },
    { label: "Über Denis", href: "/ueber-mich" },
    { label: "Wissen", href: "/wissen" },
    { label: "Blog", href: "/blog" },
    { label: "Kontakt", href: "/kontakt" },
  ],
};
const INDUSTRIES: NavGroup = {
  label: "Für Ihren Betrieb",
  items: [
    { label: "Handwerk", href: "/loesungen/handwerk" },
    { label: "Fahrschulen", href: "/fahrschule" },
    { label: "Friseure", href: "/loesungen/friseur" },
    { label: "Praxis & Physio", href: "/loesungen/praxis-physio" },
    { label: "FeWo & Hotels", href: "/fewo-direktbuchung" },
    { label: "Berlin-Ost & Barnim", href: "/region/berlin-ost-barnim" },
  ],
};
export const DRAWER_GROUPS: NavGroup[] = [SERVICES, COMPANY, INDUSTRIES];
export const FOOTER_COLUMNS: NavGroup[] = [SERVICES, COMPANY, INDUSTRIES];
export const LEGAL_LINKS: NavItem[] = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];
export const STATUS_LINE = "Ahrensfelde · Berlin-Ost · Barnim";
export const CONTACT_EMAIL = "denis@myhiwi.de";
