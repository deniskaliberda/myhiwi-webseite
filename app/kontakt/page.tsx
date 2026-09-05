import type { Metadata } from "next";
import KontaktClient from "./KontaktClient";
import { CASE_STUDIES } from "@/content/case-studies";

export const metadata: Metadata = {
  title: "Kontakt — Sichtbarkeitscheck anfragen",
  description:
    "Lassen Sie Ihre Webseite und lokale Sichtbarkeit bei Google und in der KI-Suche prüfen. Persönliche Ersteinschätzung von MyHiwi in 1–3 Werktagen.",
  alternates: {
    canonical: "https://myhiwi.de/kontakt",
  },
};

export default function KontaktPage({
  searchParams,
}: {
  searchParams?: { projekt?: string | string[] };
}) {
  const project = CASE_STUDIES.find(
    (entry) => entry.slug === searchParams?.projekt,
  );
  return <KontaktClient projectName={project?.name} />;
}
