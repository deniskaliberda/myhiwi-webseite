import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}
