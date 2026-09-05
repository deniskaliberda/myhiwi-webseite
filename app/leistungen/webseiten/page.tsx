import type { Metadata } from "next";
import ServiceLanding, {
  type ServiceContent,
} from "@/components/myhiwi/services/ServiceLanding";

export const metadata: Metadata = {
  title: "Webseiten für lokale Betriebe",
  description:
    "Eine verständliche, schnelle Website für Ihren lokalen Betrieb: klare Leistungen, echte Referenzen und ein einfacher Kontaktweg. Mit MyHiwi aus Ahrensfelde.",
  alternates: { canonical: "https://myhiwi.de/leistungen/webseiten" },
  openGraph: {
    title: "Webseiten für lokale Betriebe | MyHiwi",
    description:
      "Ihr Angebot verständlich machen. Vertrauen aufbauen. Passende Anfragen ermöglichen.",
    url: "https://myhiwi.de/leistungen/webseiten",
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webseiten für lokale Betriebe | MyHiwi",
    description:
      "Klare Leistungen, echte Referenzen und ein einfacher Kontaktweg.",
  },
};

const content: ServiceContent = {
  slug: "webseiten",
  number: "01",
  name: "Webseiten für lokale Betriebe",
  eyebrow: "Webseiten",
  title: "Webseiten, die Ihren Betrieb",
  accent: "verständlich machen.",
  introduction:
    "Ihre Website soll zeigen, was Sie anbieten, für wen Sie arbeiten und warum man Ihnen vertrauen kann. MyHiwi entwickelt dafür einen klaren Auftritt mit kurzen Wegen zur Anfrage. Für Handwerk, Dienstleistungen und Gastgeber.",
  visual: {
    label: "Der Weg zur Anfrage",
    title: "Verstehen. Vertrauen. Kontakt aufnehmen.",
    items: [
      "Leistungen und Einsatzgebiet erkennen",
      "Echte Arbeiten und Menschen kennenlernen",
      "Mit dem richtigen Anliegen anfragen",
    ],
    footnote: "Auf dem Smartphone genauso klar wie am Schreibtisch.",
  },
  challenge: {
    title: "Gute Arbeit verdient einen passenden Auftritt.",
    text: "Empfehlungen bringen Menschen auf Ihre Website. Dort fehlen aber aktuelle Leistungen, aussagekräftige Bilder oder eine schnelle Antwort auf die Frage: Passt dieser Betrieb zu meinem Vorhaben? Gemeinsam ordnen wir Ihr Angebot aus Kundensicht. Bestehende Inhalte und funktionierende Seiten nehmen wir dabei mit.",
  },
  deliverables: [
    {
      title: "Struktur & Inhalte",
      text: "Wir planen die Seiten entlang Ihrer Leistungen und typischer Kundenfragen. Sie liefern Fachwissen, Bilder und Beispiele; wir machen daraus verständliche Texte, eine nachvollziehbare Navigation und passende Kontaktwege. Leistungsumfang und Freigaben stimmen wir vorher ab.",
    },
    {
      title: "Gestaltung & Umsetzung",
      text: "Sie erhalten eine auf Ihren Betrieb abgestimmte Website mit gut lesbarer Typografie, klaren Kontrasten und mobilen Ansichten. Bilder, Bedienbarkeit und Ladeverhalten prüfen wir an echten Seiten. Ihr Auftritt bleibt auch auf kleinen Bildschirmen nutzbar.",
    },
    {
      title: "Anfragen & Suchgrundlage",
      text: "Wir richten den vereinbarten Kontaktweg ein und prüfen Formular, Rückmeldung und Zustellung. Aussagekräftige Seitentitel, interne Links und technisch zugängliche Inhalte schaffen die Grundlage für Suchmaschinen. Buchungen oder weitere Integrationen planen wir bei Bedarf als eigene Bausteine.",
    },
  ],
  process: [
    {
      title: "Verstehen & eingrenzen",
      text: "Wir klären Zielgruppe, Region, wichtigste Leistungen und den Zustand Ihrer bestehenden Website. Daraus entstehen Seitenplan, benötigte Inhalte und ein verbindlich beschriebenes Angebot.",
    },
    {
      title: "Entwerfen & abstimmen",
      text: "Sie sehen Gestaltung und Texte in einer Vorschau. Wir sammeln Ihre Rückmeldung und prüfen gemeinsam, ob Leistungen, Ansprechpartner und Anfragewege fachlich richtig dargestellt sind.",
    },
    {
      title: "Prüfen & übergeben",
      text: "Vor dem Start testen wir mobile Ansichten, Links und Kontaktwege. Bei einem Wechsel berücksichtigen wir bestehende Adressen. Anschließend klären wir Zugänge, Pflege und Verantwortlichkeiten.",
    },
  ],
  evidence: [
    { slug: "physio-antje-foerster", context: "Von der alten Jimdo-Seite zum eigenen Praxisauftritt: verständliche Therapieseiten, mobile Kontaktwege und ein dokumentierter Vorher-nachher-Vergleich. Der August ist der erste vollständige Messmonat." },
    { slug: "formazin", context: "Energieberatung wird zu einem klaren Angebot: fachliche Leistungen, regionale Einstiege und passende Anfragewege für private und gewerbliche Vorhaben. Der neue Gestaltungsstand ist seit 4. September online." },
  ],
  measurement: {
    title: "Eine Website ist fertig, wenn der Weg funktioniert.",
    text: "Wir prüfen, ob Besucher Ihr Angebot verstehen und Sie zuverlässig erreichen können. Für die weitere Entwicklung vereinbaren wir sinnvolle Kennzahlen: erfolgreiche Anfragen, deren Qualität und nach Möglichkeit ihre Herkunft. Ein Button-Klick allein zählt dabei noch nicht als Anfrage. Mehr Besucher oder Aufträge lassen sich durch eine neue Website nicht garantieren.",
  },
  faqs: [
    {
      question: "Brauche ich einen kompletten Neubau?",
      answer:
        "Nicht automatisch. Wenn Struktur und Technik tragfähig sind, können bessere Leistungsseiten, aktuelle Inhalte oder ein klarerer Kontaktweg ausreichen. Der erste Check hilft, den passenden Umfang festzulegen.",
    },
    {
      question: "Was kostet meine Website?",
      answer:
        "Das hängt von Seitenumfang, vorhandenen Texten und Bildern sowie Funktionen ab. Sie erhalten ein Angebot mit klar beschriebenen Leistungen. Laufende Kosten für Betrieb und vereinbarte Pflege weisen wir getrennt aus.",
    },
    {
      question: "Wer kümmert sich nach dem Start darum?",
      answer:
        "Das legen wir vorab fest: welche Inhalte Sie selbst ändern möchten, welche Unterstützung Sie benötigen und wer technische Aktualisierungen übernimmt. Betreuung und Reaktionswege werden passend zum Umfang vereinbart.",
    },
    {
      question: "Wie lange dauert die Umsetzung?",
      answer:
        "Nach Sichtung der Inhalte vereinbaren wir einen realistischen Zeitplan. Umfang, Freigaben und zusätzliche Funktionen beeinflussen den Starttermin. Fehlende Fotos oder Fachtexte benennen wir früh, damit Sie planen können.",
    },
  ],
};

export default function WebsitesPage() {
  return <ServiceLanding content={content} />;
}
