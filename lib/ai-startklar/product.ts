export const AI_STARTKLAR_FOCUS_OPTIONS = [
  { value: "buero-verwaltung", label: "Büro und Verwaltung" },
  { value: "vertrieb-kundenkommunikation", label: "Vertrieb und Kundenkommunikation" },
  { value: "marketing-content", label: "Marketing und Content" },
  { value: "fuehrung-entscheidungsvorbereitung", label: "Führung und Entscheidungsvorbereitung" },
  { value: "handwerk-dokumentation", label: "Handwerk und Dokumentation" },
  { value: "dienstleistung-kundenanfragen", label: "Dienstleistung und Kundenanfragen" },
] as const;

export const AI_STARTKLAR = {
  name: "MyHiwi AI-Startklar",
  subtitle: "Die praxisnahe KI-Grundlagenschulung für Unternehmen",
  title: "KI sinnvoll nutzen. Risiken erkennen. Sicherer entscheiden.",
  summary:
    "Die praxisnahe dreistündige KI-Grundlagenschulung für Unternehmen – live, verständlich und auf Ihren Arbeitsalltag zugeschnitten.",
  cta: "Unverbindliches Erstgespräch anfragen",
  durationMinutes: 180,
  capacity: 15,
  prices: { online: 1490, onsite: 1790 },
  travel:
    "Reise- und gegebenenfalls Übernachtungsaufwand wird vor Beauftragung separat ausgewiesen.",
  outcomes: [
    "geeignete KI-Aufgaben auswählen",
    "klare Prompts formulieren",
    "sensible Daten richtig einordnen",
    "typische Fehler und Grenzen erkennen",
    "Ergebnisse systematisch prüfen",
    "gemeinsame Grundregeln anwenden",
  ],
  agenda: [
    "Grundlagen generativer KI",
    "Möglichkeiten und Grenzen",
    "Gute Prompts mit sechs Bausteinen",
    "Datenampel und verantwortungsvolle Nutzung",
    "Praxisfall aus Ihrem Unternehmen",
    "Prüfung und menschliche Freigabe",
    "Fünf Regeln und nächste Schritte",
  ],
  included: [
    "30 Minuten Management-Vorgespräch",
    "Branchen-, Rollen-, Kenntnis- und Nutzungscheck",
    "Zwei sichere Praxisbeispiele aus Ihrem Arbeitsalltag",
    "Drei Stunden Live-Schulung für bis zu 15 Personen",
    "Teilnehmerheft, Promptvorlage, Datenampel und Prüfcheckliste",
    "Lerncheck, Teilnahmedokumentation und persönliche Teilnahmebestätigungen",
    "Einseitige KI-Nutzungsregel und Management-Maßnahmenblatt",
    "30 Minuten Management-Nachbesprechung",
  ],
  process: [
    "Unverbindliches Erstgespräch",
    "Vorbereitung und zwei Praxisfälle",
    "Dreistündige Live-Schulung",
    "Unterlagen und Teilnahmebestätigungen",
    "Management-Nachbesprechung",
  ],
  boundaries: [
    "keine Rechtsberatung",
    "keine Datenschutzprüfung",
    "kein Informationssicherheitsaudit",
    "keine Prüfung oder Freigabe konkreter KI-Anbieter",
    "keine Garantie eines bestimmten individuellen Kompetenzniveaus",
    "keine Compliance-Zertifizierung",
  ],
} as const;

export const AI_STARTKLAR_FAQ = [
  {
    question: "Ist die Schulung für Einsteiger geeignet?",
    answer:
      "Ja. Der gemeinsame Kern beginnt bei den Grundlagen. Erfahrenere Teilnehmende erhalten zusätzliche Prüf- und Verbesserungsaufgaben.",
  },
  {
    question: "Benötigen wir ein freigegebenes KI-Werkzeug?",
    answer:
      "Für praktische Arbeit am eigenen Gerät ja. Ohne freigegebenes Werkzeug kann die Schulung mit Trainerdemonstrationen und vorbereiteten Beispielausgaben stattfinden.",
  },
  {
    question: "Können wir eigene Dokumente verwenden?",
    answer:
      "Nur wenn sie für diesen Zweck freigegeben und für das verwendete Werkzeug geeignet sind. Standardmäßig arbeiten wir mit synthetischen oder ausreichend anonymisierten Beispielen.",
  },
  {
    question: "Hilft die Schulung beim KI-Kompetenzaufbau im Sinne des AI Acts?",
    answer:
      "Die Schulung behandelt KI-Verständnis, Nutzungskontext, Chancen, Risiken, menschliche Kontrolle und betriebliche Regeln. Sie kann den organisationsbezogenen Kompetenzaufbau unterstützen und dokumentieren. Ob Maßnahmen im Einzelfall ausreichen, hängt von Systemen, Rollen und Risiken ab und wird nicht rechtlich garantiert.",
  },
  {
    question: "Erhalten Teilnehmende ein Zertifikat?",
    answer:
      "Sie erhalten eine persönliche Teilnahmebestätigung mit Datum, Dauer und Inhalten. Sie ist keine rechtliche Zertifizierung oder Compliance-Bestätigung.",
  },
  {
    question: "Was ist bei sensiblen Branchen oder Einsatzfällen?",
    answer:
      "Grundlagen können häufig im Standardformat vermittelt werden. Gesundheits-, Personal-, Finanz-, Scoring-, biometrische oder besonders folgenreiche Anwendungen werden nicht im Basistraining freigegeben und können eine gesonderte Prüfung benötigen.",
  },
] as const;

export function formatEuro(value: number): string {
  return `${new Intl.NumberFormat("de-DE", { maximumFractionDigits: 0 }).format(value)} €`;
}
