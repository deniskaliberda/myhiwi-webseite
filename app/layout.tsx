import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Instrument_Serif,
  Inter,
  Inter_Tight,
  JetBrains_Mono,
  Poppins,
} from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SiteShell from "@/components/layout/SiteShell";
import { ConsentProvider } from "@/components/analytics/ConsentProvider";
import { ConsentBanner } from "@/components/analytics/ConsentBanner";
import { MetaPixel } from "@/components/analytics/MetaPixel";

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID?.trim() || "";
const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID?.trim() || "";
const GTAG_PRIMARY = GA4_ID || GOOGLE_ADS_ID;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: false,
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  preload: false,
  weight: ["500", "600", "700", "800"],
});

// MyHiwi Redesign 2026 — DESIGN.md typography
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "optional",
  preload: false,
  weight: ["400", "600", "700", "800"],
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
  preload: false,
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  preload: false,
  weight: ["500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "optional",
  preload: false,
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Webseiten, Google- & KI-Sichtbarkeit | MyHiwi Ahrensfelde",
    template: "%s | MyHiwi",
  },
  description:
    "Webseiten, Local SEO und KI-Sichtbarkeit für lokale Betriebe. MyHiwi aus Ahrensfelde: persönlich mit Denis, von der ersten Suche bis zur Anfrage.",
  authors: [{ name: "Denis Kaliberda", url: "https://myhiwi.de/ueber-mich" }],
  metadataBase: new URL("https://myhiwi.de"),
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "MyHiwi",
    title: "Webseiten, Google- & KI-Sichtbarkeit | MyHiwi",
    description:
      "Für Betriebe, die vor Ort überzeugen. Persönlich aus Ahrensfelde.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webseiten, Google- & KI-Sichtbarkeit | MyHiwi",
    description:
      "Für Betriebe, die vor Ort überzeugen. Persönlich aus Ahrensfelde.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://myhiwi.de/#organization",
  name: "MyHiwi",
  legalName: "Kaliberda Digital Intelligence UG (haftungsbeschränkt)",
  description:
    "Webseiten, Google-Sichtbarkeit und KI-Sichtbarkeit für lokale Betriebe aus Ahrensfelde, Berlin-Ost und Barnim.",
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
  areaServed: [
    { "@type": "AdministrativeArea", name: "Berlin" },
    { "@type": "AdministrativeArea", name: "Brandenburg" },
    { "@type": "AdministrativeArea", name: "Landkreis Starnberg" },
    { "@type": "Place", name: "Ammersee-Region" },
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.5719,
    longitude: 13.5733,
  },
  telephone: "+49 1511 4993066",
  // TODO(Denis): sameAs (Social-Profile) ergaenzen, sobald vorhanden.
  serviceType: [
    "KI-Sichtbarkeit",
    "Webseiten für lokale Betriebe",
    "Local SEO",
    "Webdesign",
    "Google Ads Management",
    "Google Business Profil Optimierung",
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
      <body className="font-mh-body">
        {GTAG_PRIMARY ? (
          <>
            {/* Consent Mode v2 default = denied (EU). Set BEFORE the gtag loader. */}
            <Script id="gtag-consent-default" strategy="beforeInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('consent','default',{ad_storage:'denied',analytics_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});gtag('js',new Date());${GA4_ID ? `gtag('config','${GA4_ID}');` : ""}${GOOGLE_ADS_ID ? `gtag('config','${GOOGLE_ADS_ID}');` : ""}`}
            </Script>
            <Script
              id="gtag-src"
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_PRIMARY}`}
            />
          </>
        ) : null}
        <ConsentProvider>
          <SiteShell>{children}</SiteShell>
          <MetaPixel />
          <ConsentBanner />
        </ConsentProvider>
      </body>
    </html>
  );
}
