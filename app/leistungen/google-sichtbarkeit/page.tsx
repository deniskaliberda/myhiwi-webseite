import type { Metadata } from "next";
import ServiceLanding, {
  type ServiceContent,
} from "@/components/myhiwi/services/ServiceLanding";

export const metadata: Metadata = {
  title: "Google-Sichtbarkeit für lokale Betriebe",
  description:
    "Local SEO mit klaren Prioritäten: Website, Google-Unternehmensprofil und lokale Inhalte verbessern. MyHiwi hilft Betrieben in Ahrensfelde, Berlin und darüber hinaus.",
  alternates: { canonical: "https://myhiwi.de/leistungen/google-sichtbarkeit" },
  openGraph: {
    title: "Google-Sichtbarkeit für lokale Betriebe | MyHiwi",
    description:
      "Website, Unternehmensprofil und lokale Suchanfragen zusammen verbessern. Mit nachvollziehbarer Messung.",
    url: "https://myhiwi.de/leistungen/google-sichtbarkeit",
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google-Sichtbarkeit für lokale Betriebe | MyHiwi",
    description:
      "Local SEO für Website und Unternehmensprofil. Mit klaren Prioritäten.",
  },
};

const content: ServiceContent = {
  slug: "google-sichtbarkeit",
  number: "02",
  name: "Google-Sichtbarkeit für lokale Betriebe",
  eyebrow: "Google-Sichtbarkeit",
  title: "Bei Google gefunden werden.",
  accent: "In Ihrer Region.",
  introduction:
    "Wenn Menschen in Ihrer Nähe nach Ihrer Leistung suchen, sollte Ihr Betrieb verständlich und aktuell auftreten. MyHiwi verbindet lokale Suchmaschinenoptimierung mit Ihrer Website und Ihrem Google-Unternehmensprofil. Damit aus einer passenden Suche ein klarer Weg zu Ihnen wird.",
  visual: {
    label: "Drei Bausteine / Ein Auftritt",
    title: "Ihre Leistung. Ihr Ort. Ihr Betrieb.",
    items: [
      "Website: Leistungen konkret erklären",
      "Google-Profil: Angaben aktuell halten",
      "Messung: Suchanfragen und Kontakte prüfen",
    ],
    footnote: "Die Prioritäten ergeben sich aus Ihrer Ausgangslage.",
  },
  challenge: {
    title: "Ihr Firmenname ist erst der Anfang.",
    text: "Wer Sie bereits kennt, findet häufig auch Ihren Eintrag. Spannender ist, ob neue Kunden bei einer Suche nach Leistung und Ort auf Ihren Betrieb stoßen. Wir prüfen deshalb unterschiedliche Suchabsichten und betrachten Website und Unternehmensprofil gemeinsam. Eine einzelne Positionsabfrage erklärt noch nicht, warum Anfragen ausbleiben.",
  },
  deliverables: [
    {
      title: "Bestandsaufnahme & Prioritäten",
      text: "Wir prüfen Erreichbarkeit, Indexierungssteuerung, Seitenstruktur und lokale Suchbegriffe. Mit freigegebenem Zugang zur Search Console betrachten wir vorhandene Impressionen und Klicks. Sie erhalten eine priorisierte Maßnahmenliste mit konkreten Seiten und Aufgaben.",
    },
    {
      title: "Unternehmensprofil & Region",
      text: "Wir prüfen die Eignung und den Zustand Ihres Google-Unternehmensprofils: Kategorien, Kontaktdaten, Öffnungszeiten, Leistungen und Fotos. Gemeinsam korrigieren wir Unstimmigkeiten. Für Bewertungen entwickeln wir einen ehrlichen Ablauf, der echte Kundenerfahrungen sichtbar macht.",
    },
    {
      title: "Leistungsseiten & Verknüpfungen",
      text: "Wir schärfen relevante Seiten mit Ihrem tatsächlichen Angebot, Einsatzgebiet und hilfreichen Antworten. Echte Projekte und regionale Bezüge ergänzen die Inhalte. Bestehende Seiten verknüpfen wir sinnvoll, statt austauschbare Texte für möglichst viele Ortsnamen anzulegen.",
    },
  ],
  process: [
    {
      title: "Ausgangslage festhalten",
      text: "Wir klären Standort, Zielkunden und Leistungen. Sie geben die benötigten Konten frei; wir dokumentieren vorhandene Daten und trennen Marken-Suchen von Suchanfragen potenzieller Neukunden.",
    },
    {
      title: "Wichtiges verbessern",
      text: "Zuerst bearbeiten wir relevante technische Hindernisse und unklare Angebote. Danach folgen die vereinbarten Profil- und Inhaltsänderungen. Fachliche Aussagen und Unternehmensangaben geben Sie frei.",
    },
    {
      title: "Entwicklung besprechen",
      text: "Wir vergleichen geeignete Zeiträume und erklären, welche Seiten und Suchanfragen sich verändern. Daraus leiten wir die nächsten Aufgaben ab. Saison, Standort und Wettbewerb gehören zur Einordnung.",
    },
  ],
  evidence: {
    eyebrow: "Projekt / Sonnenhof Herrsching",
    title: "Suchdaten und Anfragen gemeinsam betrachten.",
    text: "Der Sonnenhof-Projektbericht zeigt organische Google-Klicks und direkte Gäste-Anfragen mit ihren jeweiligen Messzeiträumen. Diese Kennzahlen bleiben getrennt: Eine direkte Anfrage ist nicht automatisch eine Google-Anfrage und noch keine Buchung. So lässt sich ein Projekt nachvollziehbar beurteilen.",
    href: "/case-studies/sonnenhof-herrsching",
    link: "Projekt und Messung ansehen",
    image: "/case-studies/sonnenhof/sonnenhof-neu.png",
    imageAlt:
      "Website des Sonnenhofs Herrsching als Beispiel eines lokalen Kundenprojekts",
  },
  measurement: {
    title: "Sichtbarkeit messen. Geschäftswert verstehen.",
    text: "Wir betrachten relevante Suchanfragen, Impressionen, Klicks und passende Zielseiten in der Search Console. Bei verfügbaren Profildaten ergänzen wir Interaktionen. Gemeinsam halten wir fest, welche qualifizierten Anfragen entstehen. Positionen schwanken je nach Suche und Standort; ein fester Google-Platz oder eine bestimmte Anzahl neuer Kunden ist nicht garantiert.",
  },
  faqs: [
    {
      question: "Reicht mein Google-Unternehmensprofil allein?",
      answer:
        "Es kann wichtige Basisinformationen liefern. Ihre Website bietet mehr Raum für Leistungen, Projektbeispiele und Antworten. Welche Ergänzungen sich lohnen, hängt davon ab, wie Ihre Kunden suchen und was sie vor einer Anfrage wissen müssen.",
    },
    {
      question: "Wann sehe ich Ergebnisse?",
      answer:
        "Das hängt unter anderem von Ausgangslage, Wettbewerb und der Verarbeitung durch Google ab. Umgesetzte Änderungen dokumentieren wir direkt; Suchentwicklungen bewerten wir über vergleichbare Zeiträume. Einen festen Termin für bessere Rankings können wir nicht versprechen.",
    },
    {
      question: "Welche Zugänge benötigen Sie?",
      answer:
        "Je nach Umfang benötigen wir passende Berechtigungen für Website, Search Console und Unternehmensprofil. Sie behalten Ihre Konten. Fehlende Verifizierung oder Zugänge klären wir vor den davon abhängigen Arbeiten.",
    },
    {
      question: "Ist Google Ads enthalten?",
      answer:
        "Diese Leistung betrifft die organische und lokale Sichtbarkeit. Anzeigen sind bei Bedarf ein gesonderter Auftrag mit eigenem Budget und eigener Erfolgsmessung. Maßnahmenumfang und laufende Betreuung vereinbaren wir transparent im Angebot.",
    },
  ],
};

export default function GoogleVisibilityPage() {
  return <ServiceLanding content={content} />;
}
