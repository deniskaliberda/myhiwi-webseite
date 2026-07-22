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
]);

const questionnairePath = path.join(salesDir, "05-vorbereitungsfragebogen.md");
if (fs.existsSync(questionnairePath)) {
  const text = fs.readFileSync(questionnairePath, "utf8");
  for (let number = 1; number <= 12; number += 1) {
    if (!text.includes(`## ${number}.`)) fail(`05-vorbereitungsfragebogen.md must contain question ${number}`);
  }
  const warning = "Bitte tragen Sie keine personenbezogenen, vertraulichen oder sicherheitsrelevanten Inhalte ein und laden Sie keine entsprechenden Dokumente hoch.";
  const warningCount = text.split(warning).length - 1;
  if (warningCount !== 10) fail(`05-vorbereitungsfragebogen.md must repeat the free-text warning 10 times, found ${warningCount}`);
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

requireText("19-anfragebestaetigung.md", [
  "Variante A – Bestätigung auf dem Formularbildschirm",
  "Variante B – Bestätigung per E-Mail",
  "[Online / vor Ort]",
  "[Teilnehmerzahl]",
  "[Zeitraum]",
  "Fit-Prüfung",
  "kein automatisches Angebot",
  "keine personenbezogenen, vertraulichen oder sicherheitsrelevanten Inhalte",
]);

for (const file of requiredOutputs) {
  const target = path.join(outputDir, file);
  if (!fs.existsSync(target) || fs.statSync(target).size === 0) {
    fail(`missing or empty output ${file}`);
  }
}
if (!process.exitCode) console.log("PASS: AI-Startklar sales kit is consistent");
