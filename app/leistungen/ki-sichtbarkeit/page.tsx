import type { Metadata } from "next";
import ServiceLanding, {
  type ServiceContent,
} from "@/components/myhiwi/services/ServiceLanding";

export const metadata: Metadata = {
  title: "KI-Sichtbarkeit für lokale Betriebe",
  description:
    "In ChatGPT, Google-KI und anderen KI-Suchen auffindbar werden: zugängliche Inhalte, klare Unternehmensangaben und nachvollziehbare Tests. Ohne Empfehlungsgarantie.",
  alternates: { canonical: "https://myhiwi.de/leistungen/ki-sichtbarkeit" },
  openGraph: {
    title: "KI-Sichtbarkeit für lokale Betriebe | MyHiwi",
    description:
      "Ihre Leistungen für KI-Suchen verständlich und zugänglich machen. Mit klaren Grenzen und nachvollziehbaren Tests.",
    url: "https://myhiwi.de/leistungen/ki-sichtbarkeit",
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "KI-Sichtbarkeit für lokale Betriebe | MyHiwi",
    description:
      "Klare Inhalte, technische Zugänglichkeit und wiederholbare Suchtests.",
  },
};

const content: ServiceContent = {
  slug: "ki-sichtbarkeit",
  number: "03",
  name: "KI-Sichtbarkeit für lokale Betriebe",
  eyebrow: "KI-Sichtbarkeit",
  title: "Ihre Expertise.",
  accent: "Auch für die KI-Suche zugänglich.",
  introduction:
    "Menschen stellen Fragen in ChatGPT, Googles KI-Suche oder Perplexity. Wir helfen Ihnen, Ihren Betrieb und Ihre Leistungen dafür klar zu beschreiben, technische Hürden zu prüfen und sichtbare Erwähnungen nachvollziehbar zu beobachten. Ohne eine Empfehlung durch KI-Systeme zu versprechen.",
  visual: {
    label: "Drei getrennte Fragen",
    title: "Lesbar ist noch keine Empfehlung.",
    items: [
      "Können Suchsysteme Ihre Inhalte abrufen?",
      "Wird Ihr Betrieb erwähnt oder verlinkt?",
      "Entstehen daraus passende Anfragen?",
    ],
    footnote: "Zugang, Sichtbarkeit und Geschäftsergebnis messen wir getrennt.",
  },
  challenge: {
    title: "Kunden fragen konkreter. Ihre Inhalte sollten antworten.",
    text: "Eine Suche kann lauten: Welcher Betrieb in meiner Nähe übernimmt diese Arbeit und passt zu meinem Vorhaben? Dafür brauchen Menschen belastbare Angaben zu Leistungen, Region und Erfahrung. Wir machen diese Informationen auf Ihrer Website auffindbar und nachvollziehbar. Das hilft bei der Auswahl Ihres Betriebs, unabhängig davon, über welchen Suchweg jemand kommt.",
  },
  deliverables: [
    {
      title: "Technische Zugänglichkeit",
      text: "Wir prüfen, ob relevante Suchcrawler öffentliche Seiten erreichen können. Dazu gehören robots.txt, Indexierungssteuerung und mögliche Hosting-Sperren. Suchzugriff und Training behandeln wir getrennt. Sie erhalten dokumentierte Befunde und konkrete Korrekturen im vereinbarten Umfang.",
    },
    {
      title: "Klare, belegbare Inhalte",
      text: "Wir präzisieren Leistungen, Einsatzgebiet, Ansprechpartner und Kundenfragen. Echte Projekte belegen Ihre Erfahrung; widersprüchliche Unternehmensangaben werden bereinigt. Strukturierte Daten müssen zu den sichtbaren Inhalten passen. Wir erfinden weder Referenzen noch Behauptungen über Ihren Betrieb.",
    },
    {
      title: "Dokumentierte Suchtests",
      text: "Gemeinsam definieren wir typische Fragen Ihrer Zielkunden ohne Ihren Firmennamen. Wir testen sie wiederholt und halten System, Datum, Suchmodus und Quellen fest. Erwähnung, verlinkte Quelle und ausdrückliche Empfehlung erfassen wir als unterschiedliche Beobachtungen.",
    },
  ],
  process: [
    {
      title: "Relevante Fragen wählen",
      text: "Wir klären, bei welchen Leistungen und in welcher Region Sie gefunden werden möchten. Daraus entsteht eine begrenzte, nachvollziehbare Auswahl von Suchfragen als Ausgangspunkt.",
    },
    {
      title: "Grundlagen verbessern",
      text: "Wir priorisieren technische Hindernisse, fehlende Leistungsinformationen und belegbare Projektinhalte. Sie prüfen die fachliche Richtigkeit, bevor Änderungen veröffentlicht werden. Bestehende Google-Arbeit beziehen wir ein.",
    },
    {
      title: "Wiederholen & einordnen",
      text: "Nach den Änderungen wiederholen wir die Suchtests unter dokumentierten Bedingungen. Schwankungen bleiben sichtbar. Wir zeigen, welche Fragen noch keine passenden Hinweise auf Ihren Betrieb liefern.",
    },
  ],
  evidence: [
    { slug: "sonnenhof-herrsching", metricIndex: 2, context: "Im Formular-Export tragen Anfragen die Quellenmarkierung chatgpt.com. Das ist eine dokumentierte Zuordnung im Anfrageweg. Sie belegt weder einen bestimmten ChatGPT-Prompt noch bestätigte Buchungen oder eine vollständige Herkunftsmessung." },
    { slug: "formazin", context: "Die Energieberatung zeigt die inhaltliche Grundlage: konkrete Leistungen, fachliche Antworten und nachvollziehbare Projekte. Dieser Aufbau ist umgesetzt; eine erreichte Empfehlung durch KI-Systeme ist damit noch nicht nachgewiesen." },
  ],
  measurement: {
    title: "Eine Stichprobe bleibt eine Stichprobe.",
    text: "KI-Antworten verändern sich mit Frage, Zeitpunkt und System. Einzelne Treffer zeigen deshalb keinen Marktanteil. Wir vergleichen dokumentierte Beobachtungen und erfassen erkennbare Website-Besuche sowie qualifizierte Anfragen separat. Crawl-Freigabe schafft eine technische Voraussetzung; sie garantiert weder Aufnahme als Quelle noch Empfehlung. Die Auswahl treffen die jeweiligen Suchsysteme.",
  },
  sources: (
    <>
      <p>
        Google erklärt: Für AI Overviews und AI Mode gelten die SEO-Grundlagen.
        Eine Seite muss indexiert und für ein Such-Snippet zugelassen sein.
        Besondere KI-Dateien oder ein spezielles Schema sind nicht erforderlich.
        Die Ausspielung bleibt ungarantiert.{" "}
        <a href="https://developers.google.com/search/docs/appearance/ai-features">
          Google: KI-Funktionen und Ihre Website
        </a>
        .
      </p>
      <p>
        OpenAI trennt OAI-SearchBot für die Suche von GPTBot für mögliches
        Modelltraining. Die Freigaben lassen sich unabhängig steuern.{" "}
        <a href="https://developers.openai.com/api/docs/bots">
          OpenAI: Übersicht der Crawler
        </a>
        .
      </p>
    </>
  ),
  faqs: [
    {
      question: "Können Sie uns in ChatGPT empfehlen lassen?",
      answer:
        "Eine Empfehlung können wir nicht buchen oder garantieren. Wir verbessern zugängliche, nachvollziehbare Informationen und prüfen, ob Ihr Betrieb bei relevanten Fragen erwähnt oder als Quelle verlinkt wird.",
    },
    {
      question: "Ersetzt KI-Sichtbarkeit die Google-Optimierung?",
      answer:
        "Nein. Viele Grundlagen überschneiden sich: klare Inhalte, nachvollziehbare Unternehmensangaben und technisch erreichbare Seiten. Welche zusätzlichen Suchtests sinnvoll sind, entscheiden wir nach Zielgruppe und Ausgangslage.",
    },
    {
      question: "Muss ich meine Inhalte für KI-Training freigeben?",
      answer:
        "Für die Suchcrawler von OpenAI ist das eine getrennte Entscheidung. Wir prüfen die gewünschten Einstellungen mit Ihnen. Eine Trainingsfreigabe ist kein gekaufter Platz in einer Suchantwort.",
    },
    {
      question: "Was umfasst das Angebot?",
      answer:
        "Wir vereinbaren die zu prüfenden Seiten, die umzusetzenden Inhalte und den Umfang der Suchtests. Wiederholte Beobachtung und weitere Verbesserungen werden gesondert beschrieben. So bleibt nachvollziehbar, wofür Sie bezahlen.",
    },
  ],
};

export default function AiVisibilityPage() {
  return <ServiceLanding content={content} />;
}
