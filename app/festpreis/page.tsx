import type { Metadata } from "next";
import FestpreisClient from "./FestpreisClient";

export const metadata: Metadata = {
  title: "Website & System zum Festpreis anfragen",
  description:
    "Beschreiben Sie in eigenen Worten, was Sie brauchen — Website, Buchungs- oder Zahlungssystem, eigenes KI-Tool. Antwort in 24 Stunden mit konkretem Festpreis, kein Verkaufs-Telefonat.",
  alternates: {
    canonical: "https://myhiwi.de/festpreis",
  },
};

export default function FestpreisPage() {
  return <FestpreisClient />;
}
