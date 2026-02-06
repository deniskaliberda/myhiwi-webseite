import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preise & Pakete - Transparente SEO & Webdesign Preise | MyHiwi",
  description:
    "Faire und transparente Preise für Local SEO und Webdesign. Bundle-Pakete ab 890€/Jahr mit 10% Ersparnis. Keine versteckten Kosten.",
  keywords: [
    "SEO Preise",
    "Webdesign Kosten",
    "Local SEO Pakete",
    "transparente Preise",
  ],
};

export default function PreiseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
