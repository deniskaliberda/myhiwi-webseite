import type { Metadata } from "next";
import AboutStoryPage from "@/components/about/AboutStoryPage";

export const metadata: Metadata = {
  title: "Über mich - Denis Kaliberda | MyHiwi",
  description: "Olympia-Teilnehmer, WM-Bronze 2014, 200+ Länderspiele für Deutschland – und jetzt SEO-Experte für lokale Unternehmen. Meine Geschichte.",
  alternates: {
    canonical: "https://myhiwi.de/ueber-mich",
  },
};

export default function AboutMePage() {
  return <AboutStoryPage />;
}
