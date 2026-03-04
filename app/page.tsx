import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "Local SEO & Webdesign für KMU — MyHiwi | Dein digitaler HiWi",
  description:
    "Mehr Kunden aus Ihrer Region mit professioneller Website & Local SEO. Spezialisiert auf kleine, lokale Unternehmen. Messbare Ergebnisse, faire Preise.",
  alternates: {
    canonical: "https://myhiwi.de",
  },
};
import TrustSection from "@/components/TrustSection";
import CaseStudySection from "@/components/CaseStudySection";
import StarterBannerSection from "@/components/StarterBannerSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TrustSection />
      <CaseStudySection />
      <StarterBannerSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}
