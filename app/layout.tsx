import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


// Font Configuration - Based on Brand Guidelines
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// SEO Metadata
export const metadata: Metadata = {
  title: {
    default: "MyHiwi - Local SEO & Webdesign für KMU",
    template: "%s",
  },
  description: "Spezialisierte SEO- und Webdesign-Agentur für kleine, lokale Unternehmen. Messbare Sichtbarkeit durch Local SEO und professionelle, mobile-optimierte Webseiten.",
  keywords: ["Local SEO", "Webdesign", "KMU", "kleine Unternehmen", "lokale Sichtbarkeit"],
  authors: [{ name: "Denis Kaliberda" }],
  metadataBase: new URL("https://myhiwi.de"),
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://myhiwi.de",
    siteName: "MyHiwi",
    title: "MyHiwi - Local SEO & Webdesign für KMU",
    description: "Spezialisierte SEO- und Webdesign-Agentur für kleine, lokale Unternehmen.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MyHiwi - Local SEO & Webdesign für KMU",
    description: "Spezialisierte SEO- und Webdesign-Agentur für kleine, lokale Unternehmen.",
  },
};

// JSON-LD Structured Data
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MyHiwi UG",
  description: "Spezialisierte SEO- und Webdesign-Agentur für kleine, lokale Unternehmen.",
  url: "https://myhiwi.de",
  logo: "https://myhiwi.de/myhiwi-logo.png",
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
  serviceType: ["Local SEO", "Webdesign", "Google Business Profil Optimierung"],
  priceRange: "€€",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={cn("font-sans", geist.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="font-inter">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
