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
    default: "Digitale Kundengewinnung für lokale Unternehmen | MyHiwi",
    template: "%s | MyHiwi",
  },
  description:
    "Website + SEO + messbare Ergebnisse ab 500 EUR/Monat. Von 0% auf 34,6% Sichtbarkeit in 4 Wochen. Kostenloses Erstgespräch.",
  keywords: [
    "Local SEO",
    "Webdesign",
    "KMU",
    "lokale Sichtbarkeit",
    "Kundengewinnung",
    "SEO Agentur",
  ],
  authors: [{ name: "Denis Kaliberda" }],
  metadataBase: new URL("https://myhiwi.de"),
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://myhiwi.de",
    siteName: "MyHiwi",
    title: "Digitale Kundengewinnung für lokale Unternehmen | MyHiwi",
    description:
      "Website + SEO + messbare Ergebnisse ab 500 EUR/Monat. Sonnenhof: 0% auf 34,6% Sichtbarkeit in 4 Wochen.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digitale Kundengewinnung für lokale Unternehmen | MyHiwi",
    description:
      "Website + SEO + messbare Ergebnisse ab 500 EUR/Monat.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MyHiwi UG",
  description:
    "Digitale Kundengewinnung für lokale Unternehmen — Website, SEO und messbare Ergebnisse.",
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
