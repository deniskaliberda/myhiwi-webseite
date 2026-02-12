import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Font Configuration - Based on Brand Guidelines
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// SEO Metadata
export const metadata: Metadata = {
  title: "MyHiwi - Local SEO & Webdesign für KMU",
  description: "Spezialisierte SEO- und Webdesign-Agentur für kleine, lokale Unternehmen. Messbare Sichtbarkeit durch Local SEO und professionelle, mobile-optimierte Webseiten.",
  keywords: ["Local SEO", "Webdesign", "KMU", "kleine Unternehmen", "lokale Sichtbarkeit"],
  authors: [{ name: "Denis Kaliberda" }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://myhiwi.de",
    siteName: "MyHiwi",
    title: "MyHiwi - Local SEO & Webdesign für KMU",
    description: "Spezialisierte SEO- und Webdesign-Agentur für kleine, lokale Unternehmen.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="font-inter">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
