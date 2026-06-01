import type { Metadata } from "next";
import KontaktClient from "./KontaktClient";

export const metadata: Metadata = {
  title: "Kontakt — kostenlosen Digital-Check anfragen",
  description:
    "Schicken Sie MyHiwi Ihre Webseite oder Firma — Sie bekommen in 1–3 Werktagen eine ehrliche Ersteinschätzung. Kein Sales-Funnel, Antwort direkt von Denis.",
  alternates: {
    canonical: "https://myhiwi.de/kontakt",
  },
};

export default function KontaktPage() {
  return <KontaktClient />;
}
