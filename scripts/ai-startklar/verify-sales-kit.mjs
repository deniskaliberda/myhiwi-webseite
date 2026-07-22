import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const factsPath = path.join(root, "content/ai-startklar/product-facts.json");
const salesDir = path.join(root, "content/ai-startklar/sales");
const outputDir = path.join(root, "deliverables/ai-startklar/vertrieb");
const requiredSources = [
  "01-produkt-one-pager.md",
  "02-erstgespraechsleitfaden.md",
  "03-fit-risikocheck.md",
  "04-angebotsvorlage.md",
  "05-vorbereitungsfragebogen.md",
  "19-anfragebestaetigung.md",
];
const requiredOutputs = [
  "01-produkt-one-pager.docx",
  "01-produkt-one-pager.pdf",
  "02-erstgespraechsleitfaden.docx",
  "02-erstgespraechsleitfaden.pdf",
  "03-fit-risikocheck.docx",
  "03-fit-risikocheck.pdf",
  "04-angebotsvorlage.docx",
  "04-angebotsvorlage.pdf",
  "05-vorbereitungsfragebogen.docx",
  "05-vorbereitungsfragebogen.pdf",
  "19-anfragebestaetigung.docx",
  "19-anfragebestaetigung.pdf",
];
const forbidden = [
  /AI[- ]?Act[- ]?zertifiziert/i,
  /garantiert compliant/i,
  /100\s*%\s*DSGVO/i,
];

function fail(message) {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
}

if (!fs.existsSync(factsPath)) {
  fail("missing content/ai-startklar/product-facts.json");
} else {
  const facts = JSON.parse(fs.readFileSync(factsPath, "utf8"));
  const expected = {
    name: "MyHiwi AI-Startklar",
    durationMinutes: 180,
    capacity: 15,
    preparationMinutes: 30,
    followupMinutes: 30,
  };
  for (const [key, value] of Object.entries(expected)) {
    if (facts[key] !== value) fail(`${key} must equal ${JSON.stringify(value)}`);
  }
  const expectedMetadata = {
    version: "1.0",
    date: "2026-07-22",
    documentType: "Produktdaten",
  };
  for (const [key, value] of Object.entries(expectedMetadata)) {
    if (facts.metadata?.[key] !== value) {
      fail(`metadata.${key} must equal ${JSON.stringify(value)}`);
    }
  }
  if (facts.pricing?.onlineNet !== 1490) fail("onlineNet must equal 1490");
  if (facts.pricing?.onsiteNet !== 1790) fail("onsiteNet must equal 1790");
}

for (const file of requiredSources) {
  const target = path.join(salesDir, file);
  if (!fs.existsSync(target)) {
    fail(`missing sales source ${file}`);
    continue;
  }
  const text = fs.readFileSync(target, "utf8");
  for (const pattern of forbidden) {
    if (pattern.test(text)) fail(`${file} contains forbidden claim ${pattern}`);
  }
}

function requireText(file, values) {
  const target = path.join(salesDir, file);
  if (!fs.existsSync(target)) return;
  const text = fs.readFileSync(target, "utf8");
  for (const value of values) {
    if (!text.includes(value)) fail(`${file} must contain ${JSON.stringify(value)}`);
  }
}

requireText("04-angebotsvorlage.md", [
  "[Kunde]",
  "[Angebotsnummer]",
  "[Datum]",
  "[Gültig bis]",
  "[Termin]",
  "[Format]",
  "[Praxisfokus]",
  "1.490 € netto",
  "1.790 € netto",
  "Reise- und gegebenenfalls Übernachtungsaufwand wird vor Beauftragung separat ausgewiesen",
  "50 Prozent bei verbindlicher Beauftragung",
  "50 Prozent nach Durchführung",
  "keine Rechtsberatung",
  "keine Datenschutzprüfung",
  "kein Informationssicherheitsaudit",
  "keine Toolfreigabe",
  "keine Compliance-Zertifizierung",
  "keine Garantie eines bestimmten individuellen Kompetenzniveaus",
  "aktuellen MyHiwi-Vertragsunterlagen",
  "ausschließlich synthetische oder robust anonymisierte, sichere Übungsinhalte.",
  "reale personenbezogene, vertrauliche, sicherheitsrelevante oder rote Daten werden nie in Live-Übungen eingegeben.",
]);

const offerPath = path.join(salesDir, "04-angebotsvorlage.md");
if (fs.existsSync(offerPath)) {
  const text = fs.readFileSync(offerPath, "utf8");
  if (/ausdrücklich freigegeben(?:e|en)? Übungsinhalte/i.test(text)) {
    fail("04-angebotsvorlage.md must not allow explicitly approved exercise content as an exception");
  }
}

const questionnairePath = path.join(salesDir, "05-vorbereitungsfragebogen.md");
if (fs.existsSync(questionnairePath)) {
  const text = fs.readFileSync(questionnairePath, "utf8");
  const questionHeadings = [
    "## 1. Unternehmen und Branche",
    "## 2. Teilnehmerzahl und Rollen",
    "## 3. Wissensstand auf einer Skala von 1 bis 5",
    "## 4. Aktuell genutzte oder geplante KI-Werkzeuge",
    "## 5. Freigabestatus der Werkzeuge",
    "## 6. Drei typische Aufgaben",
    "## 7. Zwei gewünschte Praxisfälle",
    "## 8. Verarbeitete Datenkategorien",
    "## 9. Bestehende Regeln oder Richtlinien",
    "## 10. Interne Verantwortliche",
    "## 11. Gewünschte Lernergebnisse",
    "## 12. Technische und organisatorische Rahmenbedingungen",
  ];
  for (const heading of questionHeadings) {
    if (!text.includes(heading)) fail(`05-vorbereitungsfragebogen.md must contain ${JSON.stringify(heading)}`);
  }
  const warning = "Bitte tragen Sie keine personenbezogenen, vertraulichen oder sicherheitsrelevanten Inhalte ein und laden Sie keine entsprechenden Dokumente hoch.";
  const warningCount = text.split(warning).length - 1;
  if (warningCount !== 10) fail(`05-vorbereitungsfragebogen.md must repeat the free-text warning 10 times, found ${warningCount}`);
  const freeTextMarkers = [
    "`[Unternehmen und Branche]`",
    "`[Ungefähre Teilnehmerzahl und Rollen/Funktionsbereiche, keine Namen]`",
    "`[Werkzeugnamen und geplanter Nutzungszweck; keine Zugangsdaten oder Kontoinformationen]`",
    "`[Drei wiederkehrende Aufgaben nur abstrakt beschreiben; keine echten Inhalte einfügen]`",
    "`[Praxisfall 1 und Praxisfall 2 abstrakt beschreiben; keine realen Dokumente oder Falldaten]`",
    "`[Nur Kategorien und abstrakte Beispiele; keine konkreten Daten]`",
    "`[Vorhandene Regeln kurz zusammenfassen; keine internen Dokumente hochladen oder einfügen]`",
    "`[Nur Funktionen/Rollen für KI-Werkzeugfreigabe, Datenschutz und IT-Sicherheit; keine Namen]`",
    "`[Zwei bis drei gewünschte Lernergebnisse]`",
    "`[Online oder vor Ort, gewünschtes Zeitfenster, Raum, Bildschirm, Internet, Laptops/Zugänge, Barrieren oder Sprache]`",
  ];
  const warningBlock = `**${warning}**`;
  for (const marker of freeTextMarkers) {
    const markerIndex = text.indexOf(marker);
    if (markerIndex < 0) {
      fail(`05-vorbereitungsfragebogen.md must contain free-text marker ${JSON.stringify(marker)}`);
    } else if (!text.slice(0, markerIndex).trimEnd().endsWith(warningBlock)) {
      fail(`05-vorbereitungsfragebogen.md warning must appear immediately before ${JSON.stringify(marker)}`);
    }
  }
  requireText("05-vorbereitungsfragebogen.md", [
    "1 – keine Erfahrung",
    "5 – routinierte Nutzung",
    "Büro und Verwaltung",
    "Vertrieb und Kundenkommunikation",
    "Marketing und Content",
    "Führung und Entscheidungsvorbereitung",
    "Handwerk und Dokumentation",
    "Dienstleistung und Kundenanfragen",
  ]);
}

const acknowledgementPath = path.join(salesDir, "19-anfragebestaetigung.md");
if (fs.existsSync(acknowledgementPath)) {
  const text = fs.readFileSync(acknowledgementPath, "utf8");
  const formHeading = "## Variante A – Bestätigung auf dem Formularbildschirm";
  const emailHeading = "## Variante B – Bestätigung per E-Mail";
  const formStart = text.indexOf(formHeading);
  const emailStart = text.indexOf(emailHeading);
  if (formStart < 0 || emailStart < 0 || emailStart <= formStart) {
    fail("19-anfragebestaetigung.md must contain ordered form-screen and email variants");
  } else {
    const formVariant = text.slice(formStart, emailStart);
    const emailVariant = text.slice(emailStart);
    const sharedVariantRequirements = [
      "[Online / vor Ort]",
      "[Teilnehmerzahl]",
      "[Zeitraum]",
      "Nächster Schritt",
      "kein automatisches Angebot",
      "keine rechtliche, datenschutzrechtliche oder sicherheitstechnische Prüfung",
      "keine personenbezogenen, vertraulichen oder sicherheitsrelevanten Inhalte",
      "keine entsprechenden Dokumente hoch",
    ];
    for (const value of ["Ihre Anfrage ist eingegangen", "Wir haben Ihre Anfrage", "MyHiwi prüft zunächst", "Erst danach", ...sharedVariantRequirements]) {
      if (!formVariant.includes(value)) fail(`form-screen acknowledgement must contain ${JSON.stringify(value)}`);
    }
    for (const value of ["Ihre Anfrage zu MyHiwi AI-Startklar ist eingegangen", "Wir bestätigen den Eingang", "Wir prüfen zunächst", "Erst nach dieser Fit-Prüfung", ...sharedVariantRequirements]) {
      if (!emailVariant.includes(value)) fail(`email acknowledgement must contain ${JSON.stringify(value)}`);
    }
  }
}

for (const file of requiredOutputs) {
  const target = path.join(outputDir, file);
  if (!fs.existsSync(target) || fs.statSync(target).size === 0) {
    fail(`missing or empty output ${file}`);
  }
}
if (!process.exitCode) console.log("PASS: AI-Startklar sales kit is consistent");
