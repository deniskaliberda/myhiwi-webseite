import type { Metadata } from "next";

import CaseStudyClient from "./client";

export const metadata: Metadata = {
  title:
    "Sonnenhof Herrsching — 199 direkte Gäste-Anfragen in 4 Monaten | MyHiwi Case Study",
  description:
    "Case Study: Wie MyHiwi für Sonnenhof Herrsching in 4 Monaten 199 direkte Anfragen, 1.158 organische Google-Klicks und einen 24-Monats-Folgevertrag aufgebaut hat.",
  alternates: {
    canonical: "https://myhiwi.de/case-studies/sonnenhof-herrsching",
  },
};

export default function SonnenhofCaseStudyPage() {
  return <CaseStudyClient />;
}
