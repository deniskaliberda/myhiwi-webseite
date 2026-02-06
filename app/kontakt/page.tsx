import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Kontakt - Kostenlose SEO-Beratung | MyHiwi",
  description: "Buchen Sie Ihr kostenloses SEO-Erstgespräch. Keine Verpflichtung, nur echte Einblicke in Ihr Potenzial. Kontaktieren Sie Denis Kaliberda.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      <ContactSection />
    </main>
  );
}
