import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Instrument_Serif,
  Inter,
  Inter_Tight,
  JetBrains_Mono,
  Poppins,
} from "next/font/google";
import "./globals.css";
import SiteShell from "@/components/layout/SiteShell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

// MyHiwi Redesign 2026 — DESIGN.md typography
const bricolage = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const interTight = Inter_Tight({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter-tight",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  variable: "--font-instrument-serif",
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Digitale Wachstumssysteme für lokale Unternehmen | MyHiwi",
    template: "%s | MyHiwi",
  },
  description:
    "MyHiwi verbindet Website, Google-Sichtbarkeit, Anfragewege, Buchung, Zahlung und AI zu digitalen Wachstumssystemen für lokale Unternehmen.",
  keywords: [
    "digitale Wachstumssysteme",
    "lokale Unternehmen digitalisieren",
    "Website KMU",
    "Local SEO",
    "Google Business Profil",
    "Google Ads KMU",
    "Buchungssystem erstellen lassen",
    "Direktbuchung ohne OTA",
    "Zahlungssystem Stripe",
    "AI Automation KMU",
    "Workflow Automation",
    "Next.js Website",
    "Ahrensfelde Berlin Bayern",
  ],
  authors: [{ name: "Denis Kaliberda" }],
  metadataBase: new URL("https://myhiwi.de"),
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://myhiwi.de",
    siteName: "MyHiwi",
    title:
      "Digitale Wachstumssysteme für lokale Unternehmen | MyHiwi",
    description:
      "Website, Google-Sichtbarkeit, Anfragewege, Buchung, Zahlung und AI als zusammenhängendes System für lokale Unternehmen.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digitale Wachstumssysteme für lokale Unternehmen | MyHiwi",
    description:
      "MyHiwi verbindet Sichtbarkeit, Website, Anfrageweg und passende Automatisierung für lokale Unternehmen.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MyHiwi UG",
  description:
    "Digitale Wachstumssysteme für lokale Unternehmen — Website, Sichtbarkeit, Anfragewege und passende Automatisierung.",
  url: "https://myhiwi.de",
  logo: "https://myhiwi.de/brand/myhiwi-h-logo.svg",
  email: "kontakt@myhiwi.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dorfstraße 1a",
    addressLocality: "Ahrensfelde",
    postalCode: "16356",
    addressCountry: "DE",
  },
  founder: {
    "@type": "Person",
    name: "Denis Kaliberda",
    url: "https://myhiwi.de/ueber-mich",
  },
  areaServed: {
    "@type": "Country",
    name: "Deutschland",
  },
  serviceType: [
    "Local SEO",
    "Webdesign",
    "Google Ads Management",
    "Google Business Profil Optimierung",
    "Workflow Automation",
  ],
  priceRange: "€€",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${poppins.variable} ${bricolage.variable} ${interTight.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable}`}
    >
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="MyHiwi Blog"
          href="/feed.xml"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className="font-sans">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
