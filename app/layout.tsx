import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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

export const metadata: Metadata = {
  title: {
    default:
      "Dein digitaler Hiwi für KMU — Website, SEO, Automation & KI | MyHiwi",
    template: "%s | MyHiwi",
  },
  description:
    "Digitaler Partner für lokale Unternehmen: Website + Local SEO, Buchungs- und Zahlungssysteme, Workflow-Automation und KI-Agents — aus einer Hand. Berlin + Bayern.",
  keywords: [
    "digitaler Partner",
    "digitaler Hiwi",
    "Webdesign KMU",
    "Local SEO",
    "Google Business Profil",
    "Google Ads KMU",
    "Buchungssystem erstellen lassen",
    "Direktbuchung ohne OTA",
    "Zahlungssystem Stripe",
    "KI-Agent fuer Unternehmen",
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
      "Dein digitaler Hiwi für KMU — Website, SEO, Automation & KI | MyHiwi",
    description:
      "Digitaler Partner, der Probleme erkennt und Lösungen baut: Website + Local SEO, Buchung + Zahlung, Workflow-Automation und KI-Agents.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dein digitaler Hiwi für KMU | MyHiwi",
    description:
      "Website, Local SEO, Buchungssystem, Automation und KI-Agents — aus einer Hand. Digitaler Partner statt Agentur.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MyHiwi UG",
  description:
    "Digitale Kundengewinnung für lokale Unternehmen — Website, SEO und messbare Ergebnisse.",
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
  ],
  priceRange: "€€",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${poppins.variable}`}>
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
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
