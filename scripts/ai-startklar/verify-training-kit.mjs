import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const root = process.cwd();
const sourceDir = path.join(root, "content/ai-startklar/training");
const outputDir = path.join(root, "deliverables/ai-startklar/schulung");
const requiredOutputs = [
  "06-trainerfolien.pptx",
  "06-trainerfolien.pdf",
];
const requiredSources = [
  "06-folienmanuskript.md",
  "07-trainerleitfaden.md",
  "praxisfaelle/01-buero-verwaltung.md",
  "praxisfaelle/02-vertrieb-kundenkommunikation.md",
  "praxisfaelle/03-marketing-content.md",
  "praxisfaelle/04-fuehrung-entscheidungsvorbereitung.md",
  "praxisfaelle/05-handwerk-dokumentation.md",
  "praxisfaelle/06-dienstleistung-kundenanfragen.md",
];
const practiceSources = requiredSources.filter((file) => file.startsWith("praxisfaelle/"));
const practiceSections = [
  "Sichere synthetische Ausgangslage",
  "Rolle und gewünschtes Ergebnis",
  "Datenampel",
  "Absichtlich schwacher Startprompt",
  "Verbesserter Prompt mit sechs Bausteinen",
  "Plausible, aber unvollkommene Modellausgabe",
  "Siebenstufige Prüfung",
  "Verbesserte Ausgabe",
  "Menschlicher Prüf- und Freigabeweg",
  "Basis- und Fortgeschrittenenvariante",
  "Trainerwarnung",
];
const promptParts = [
  "Aufgabe",
  "Kontext",
  "Material",
  "Anforderungen",
  "Ausgabeformat",
  "Prüfkriterien",
];
const reviewSteps = [
  "Fakten",
  "Quellen",
  "Vollständigkeit",
  "Verzerrung",
  "Rechte und Daten",
  "Ton und Wirkung",
  "Verantwortung",
];
const expectedPracticeSignals = new Map([
  ["praxisfaelle/01-buero-verwaltung.md", /unsortierte[^\n]*Notizen[^\n]*Aufgabenliste/i],
  ["praxisfaelle/02-vertrieb-kundenkommunikation.md", /synthetische[^\n]*Kundenanfrage/i],
  ["praxisfaelle/03-marketing-content.md", /freigegebene[^\n]*Leistungsbeschreibung/i],
  ["praxisfaelle/04-fuehrung-entscheidungsvorbereitung.md", /nicht personenbezogene[^\n]*Entscheidung/i],
  ["praxisfaelle/05-handwerk-dokumentation.md", /synthetische[^\n]*Baustellennotizen/i],
  ["praxisfaelle/06-dienstleistung-kundenanfragen.md", /unklare[^\n]*Anfrage[^\n]*Rückfragen/i],
]);
const practiceSafetySignals = new Map([
  ["praxisfaelle/04-fuehrung-entscheidungsvorbereitung.md", /KI erhält keine Entscheidungs- oder Freigabekompetenz/i],
  ["praxisfaelle/05-handwerk-dokumentation.md", /keine Freigabe für sicherheitskritische/i],
]);
const expectedSlideTopics = [
  "Titel, Kunde, Datum und Trainer",
  "Ergebnisversprechen der drei Stunden",
  "Agenda und Pausenzeit",
  "Sicherer Arbeitsrahmen: keine sensiblen Live-Daten",
  "Kurze Handzeichen-Abfrage zur bisherigen Nutzung",
  "Was mit „KI“ in dieser Schulung gemeint ist",
  "Generative KI, Suchmaschine und klassische Software",
  "Vereinfachtes Funktionsmodell eines Sprachmodells",
  "Modell, Anwendung, Kontotyp und Einstellungen unterscheiden",
  "Sechs typische Aufgabenarten im Arbeitsalltag",
  "Geeignete, kontrollbedürftige und ungeeignete Aufgaben",
  "Überblick über typische Grenzen und Risiken",
  "Demonstration einer überzeugenden falschen Antwort",
  "Aktualität, Quellen und erfundene Belege",
  "Verzerrungen, Stereotype und fehlender Kontext",
  "Rechte an Eingaben und Ausgaben",
  "Miniübung zur Einordnung von drei Aufgaben",
  "Warum klare Prompts bessere Arbeitsgrundlagen schaffen",
  "Vorher-Nachher-Beispiel eines Prompts",
  "Die sechs Bausteine der MyHiwi-Promptvorlage",
  "Basisübung: schlechten Prompt verbessern",
  "Fortgeschritten: Ausgabe kritisieren und überarbeiten",
  "Pause und Wiedereinstiegszeit",
  "Verantwortung bleibt beim Menschen",
  "Nur freigegebene Werkzeuge und Konten",
  "Die Datenampel im Überblick",
  "Grün: geeignete Beispieldaten",
  "Gelb: erst intern prüfen und freigeben",
  "Rot: im Basistraining niemals eingeben",
  "Besonders folgenreiche Anwendungsfälle erkennen",
  "Menschliche Kontrolle und Freigabewege",
  "Fünf betriebliche Grundregeln",
  "Unternehmensbezogener Praxisfall und Ziel",
  "Schritt 1: Aufgabe und gewünschtes Ergebnis",
  "Schritt 2: Daten einordnen",
  "Schritt 3: Prompt formulieren",
  "Schritt 4: Beispielausgabe analysieren",
  "Siebenstufige Prüfroutine und Verbesserung",
  "Zehnteiliger Lern- und Transfercheck",
  "Ansprechpartner, nächste Schritte und Abschluss",
];
const slideFields = [
  "Thema",
  "Ziel",
  "Kernaussage",
  "Bildidee",
  "On-slide-Text",
  "Sprechhinweis",
];
const expectedDurations = [15, 20, 25, 25, 10, 30, 30, 15, 10];
const expectedGuideSections = [
  ["Modul 1 – Einstieg, Ziele und Werkzeugrahmen", "01–05"],
  ["Modul 2 – KI-Grundlagen", "06–09"],
  ["Modul 3 – Möglichkeiten und Grenzen", "10–17"],
  ["Modul 4 – Gute Prompts", "18–22"],
  ["Pause", null],
  ["Modul 5 – Sicherer und verantwortungsvoller Einsatz", "24–32"],
  ["Modul 6 – Unternehmensbezogene Praxisübung", "33–37"],
  ["Modul 7 – Prüfen, verbessern und freigeben", "38"],
  ["Modul 8 – Lerncheck und nächste Schritte", "39–40"],
];
const guideFields = [
  "Lernziel",
  "Folien",
  "Trainerwortlaut",
  "Interaktion",
  "Erwartete Reaktion",
  "Zeitwarnung",
  "Typisches Missverständnis",
  "Sicherheitsgrenze",
  "Offline-Fallback",
];
const forbiddenClaims = [
  /AI[- ]?Act[- ]?zertifiziert/i,
  /garantiert(?:e|er|es|en|em)?\s+(?:vollständig\s+)?(?:compliant|Compliance|Konformität)/i,
  /100\s*%\s*(?:DSGVO|compliant|konform)/i,
  /rechtssicher(?:e|er|es|en|em)?\s+(?:Freigabe|Garantie|Nutzung)/i,
  /garantiert(?:e|er|es|en|em)?\s+Kompetenzniveau/i,
];
let failed = false;

function fail(message) {
  failed = true;
  console.error(`FAIL: ${message}`);
}

function readIfPresent(file) {
  const target = path.join(sourceDir, file);
  if (!fs.existsSync(target)) {
    fail(`missing source ${file}`);
    return null;
  }
  const text = fs.readFileSync(target, "utf8");
  for (const pattern of forbiddenClaims) {
    if (pattern.test(text)) fail(`${file}: forbidden claim ${pattern}`);
  }
  return text;
}

const sourceTexts = new Map(requiredSources.map((file) => [file, readIfPresent(file)]));
const slidesText = sourceTexts.get("06-folienmanuskript.md");
const guideText = sourceTexts.get("07-trainerleitfaden.md");

for (const file of practiceSources) {
  const text = sourceTexts.get(file);
  if (text === null) continue;

  for (const [index, heading] of practiceSections.entries()) {
    const number = index + 1;
    if (!new RegExp(`^## ${number}\\. ${heading}$`, "m").test(text)) {
      fail(`${file}: missing section ${number} "${heading}"`);
    }
  }
  for (const part of promptParts) {
    if (!new RegExp(`^\\*\\*${part}:\\*\\*\\s*\\S`, "m").test(text)) {
      fail(`${file}: missing or empty prompt part ${part}`);
    }
  }
  for (const [index, step] of reviewSteps.entries()) {
    if (!new RegExp(`^${index + 1}\\. \\*\\*${step}:\\*\\*\\s*\\S`, "m").test(text)) {
      fail(`${file}: missing or empty review step ${index + 1} ${step}`);
    }
  }
  for (const zone of ["Grün", "Gelb", "Rot"]) {
    if (!new RegExp(`^### ${zone}$`, "m").test(text)) {
      fail(`${file}: missing data zone ${zone}`);
    }
  }
  for (const variant of ["Basis", "Fortgeschritten"]) {
    if (!new RegExp(`^### ${variant}$`, "m").test(text)) {
      fail(`${file}: missing variant ${variant}`);
    }
  }
  if (!expectedPracticeSignals.get(file)?.test(text)) {
    fail(`${file}: missing approved industry scenario`);
  }
  if (!/ausschließlich synthetisch/i.test(text)) {
    fail(`${file}: missing explicit synthetic-only boundary`);
  }
  if (!/menschlich[^\n]*(?:prüf|freig)/i.test(text)) {
    fail(`${file}: missing human review or approval path`);
  }
  const safetySignal = practiceSafetySignals.get(file);
  if (safetySignal && !safetySignal.test(text)) {
    fail(`${file}: missing industry-specific safety boundary`);
  }
  if (/\b[A-Z0-9._%+\-]+@[A-Z0-9.\-]+\.[A-Z]{2,}\b/i.test(text)) {
    fail(`${file}: email-like identifier found in synthetic practice source`);
  }
}

for (const file of requiredOutputs) {
  const target = path.join(outputDir, file);
  if (!fs.existsSync(target)) fail(`missing output ${file}`);
}

function readZipEntry(archive, entry) {
  return execFileSync("unzip", ["-p", archive, entry], {
    encoding: "utf8",
    maxBuffer: 10 * 1024 * 1024,
  });
}

function listZipEntries(archive) {
  return execFileSync("unzip", ["-Z1", archive], {
    encoding: "utf8",
    maxBuffer: 10 * 1024 * 1024,
  }).trim().split("\n").filter(Boolean);
}

function xmlText(xml) {
  return [...xml.matchAll(/<a:t>([\s\S]*?)<\/a:t>/g)]
    .map((match) => match[1]
      .replaceAll("&amp;", "&")
      .replaceAll("&lt;", "<")
      .replaceAll("&gt;", ">")
      .replaceAll("&quot;", '"')
      .replaceAll("&apos;", "'"))
    .join(" ");
}

const pptxPath = path.join(outputDir, "06-trainerfolien.pptx");
if (fs.existsSync(pptxPath)) {
  try {
    const entries = listZipEntries(pptxPath);
    const slideEntries = entries.filter((entry) => /^ppt\/slides\/slide\d+\.xml$/.test(entry));
    const noteEntries = entries.filter((entry) => /^ppt\/notesSlides\/notesSlide\d+\.xml$/.test(entry));
    if (slideEntries.length !== 40) fail(`trainer deck: expected 40 slides, found ${slideEntries.length}`);
    if (noteEntries.length !== 40) fail(`trainer deck: expected 40 speaker-note pages, found ${noteEntries.length}`);

    const slideTexts = Array.from({ length: 40 }, (_, index) =>
      xmlText(readZipEntry(pptxPath, `ppt/slides/slide${index + 1}.xml`))
    );
    const noteTexts = Array.from({ length: 40 }, (_, index) =>
      xmlText(readZipEntry(pptxPath, `ppt/notesSlides/notesSlide${index + 1}.xml`))
    );
    noteTexts.forEach((text, index) => {
      if (!text.includes("Sprechhinweis:")) fail(`slide ${index + 1}: speaker note missing Sprechhinweis`);
      if (!text.includes("Moderation:")) fail(`slide ${index + 1}: speaker note missing facilitation note`);
    });

    const requiredSlideStrings = new Map([
      [23, ["Pause", "Daten einordnen", "praktisch anwenden"]],
      [32, ["Nur freigegebene Werkzeuge und Unternehmenskonten nutzen", "Vor jeder Eingabe die Datenampel anwenden", "KI-Ausgaben vor Verwendung", "Verantwortung und folgenreiche Entscheidungen bleiben beim Menschen", "Unsichere, sensible oder ungewöhnliche Fälle stoppen"]],
      [38, ["Fakten", "Quellen", "Vollständigkeit", "Verzerrung", "Rechte & Daten", "Ton & Wirkung", "Verantwortung"]],
      [40, ["Nächster sicherer Anwendungsfall", "Fachliche Prüfung", "Toolfreigabe", "Datenschutz", "Informationssicherheit", "Eskalationsstelle"]],
    ]);
    for (const [slideNumber, strings] of requiredSlideStrings) {
      for (const required of strings) {
        if (!slideTexts[slideNumber - 1].includes(required)) {
          fail(`slide ${slideNumber}: missing key text "${required}"`);
        }
      }
    }
  } catch (error) {
    fail(`trainer deck: structural inspection failed (${error.message})`);
  }
}

const pdfPath = path.join(outputDir, "06-trainerfolien.pdf");
if (fs.existsSync(pdfPath)) {
  try {
    const info = execFileSync("pdfinfo", [pdfPath], { encoding: "utf8" });
    const pages = Number(info.match(/^Pages:\s+(\d+)$/m)?.[1]);
    if (pages !== 40) fail(`trainer deck PDF: expected 40 pages, found ${pages || "unknown"}`);
  } catch (error) {
    fail(`trainer deck PDF: page inspection failed (${error.message})`);
  }
}

if (slidesText !== null) {
  const headings = [...slidesText.matchAll(/^## Folie (\d{2})\s*$/gm)];
  const numbers = headings.map((match) => Number(match[1]));
  const expectedNumbers = Array.from({ length: 40 }, (_, index) => index + 1);
  if (JSON.stringify(numbers) !== JSON.stringify(expectedNumbers)) {
    fail(`expected sequential slides 01–40, found ${numbers.map(String).join(", ") || "none"}`);
  }

  const sections = slidesText.split(/^## Folie \d{2}\s*$/gm).slice(1);
  sections.forEach((section, index) => {
    const label = `slide ${String(index + 1).padStart(2, "0")}`;
    for (const field of slideFields) {
      if (!new RegExp(`^\\*\\*${field}:\\*\\*\\s*\\S`, "m").test(section)) {
        fail(`${label}: missing or empty ${field}`);
      }
    }
    const topic = section.match(/^\*\*Thema:\*\*\s*(.+)$/m)?.[1]?.trim();
    if (topic !== expectedSlideTopics[index]) {
      fail(`${label}: expected topic "${expectedSlideTopics[index]}", found "${topic ?? "missing"}"`);
    }
    const onSlide = section.match(/^\*\*On-slide-Text:\*\*\s*([\s\S]*?)(?=^\*\*Sprechhinweis:\*\*)/m)?.[1] ?? "";
    if (/\b(?:Minute|min\.|Timing|Zeitwarnung)\b/i.test(onSlide)) {
      fail(`${label}: internal timing note found in on-slide copy`);
    }
  });
}

if (guideText !== null) {
  const durations = [...guideText.matchAll(/^Dauer:\s*(\d+)\s*Minuten\s*$/gm)].map((match) => Number(match[1]));
  if (JSON.stringify(durations) !== JSON.stringify(expectedDurations)) {
    fail(`expected guide durations ${expectedDurations.join(", ")}, found ${durations.join(", ") || "none"}`);
  }
  const total = durations.reduce((sum, value) => sum + value, 0);
  if (total !== 180) fail(`expected 180 guide minutes, found ${total}`);

  const guideHeadingMatches = [...guideText.matchAll(/^## (.+)$/gm)];
  const guideHeadings = guideHeadingMatches.map((match) => match[1].trim());
  const expectedHeadings = ["Einsatzrahmen", ...expectedGuideSections.map(([heading]) => heading)];
  if (JSON.stringify(guideHeadings) !== JSON.stringify(expectedHeadings)) {
    fail(`expected guide sections ${expectedHeadings.join(" | ")}, found ${guideHeadings.join(" | ") || "none"}`);
  }
  for (const [heading, expectedRange] of expectedGuideSections) {
    if (expectedRange === null) continue;
    const headingIndex = guideHeadings.indexOf(heading);
    const start = guideHeadingMatches[headingIndex]?.index ?? -1;
    const bodyStart = start < 0 ? -1 : start + guideHeadingMatches[headingIndex][0].length;
    const bodyEnd = guideHeadingMatches[headingIndex + 1]?.index ?? guideText.length;
    const section = bodyStart < 0 ? "" : guideText.slice(bodyStart, bodyEnd);
    const actualRange = section.match(/^\*\*Folien:\*\*\s*(\S+)\s*$/m)?.[1];
    if (actualRange !== expectedRange) {
      fail(`${heading}: expected slide range ${expectedRange}, found ${actualRange ?? "missing"}`);
    }
  }

  const modules = guideText.split(/^## Modul \d+\b.*$/gm).slice(1);
  if (modules.length !== 8) fail(`expected 8 teaching modules, found ${modules.length}`);
  modules.forEach((module, index) => {
    const label = `module ${index + 1}`;
    for (const field of guideFields) {
      if (!new RegExp(`^\\*\\*${field}:\\*\\*\\s*\\S`, "m").test(module)) {
        fail(`${label}: missing or empty ${field}`);
      }
    }
  });

  const requiredSafetyLanguage = [
    /synthetisch/i,
    /rote Daten[^\n]*nicht/i,
    /gelbe Daten[^\n]*synthetisch/i,
    /menschliche(?:n|r)? (?:Prüfung|Verantwortung)/i,
    /folgenreich[^\n]*(?:Mensch|verantwort)/i,
    /keine Rechtsberatung/i,
    /keine Datenschutz(?:prüfung|-Folgenabschätzung)/i,
    /kein Informationssicherheitsaudit/i,
    /keine (?:Prüfung oder )?Freigabe konkreter KI-Anbieter/i,
    /keine Garantie[^\n]*Kompetenzniveau/i,
    /keine Zertifizierung/i,
    /keine[^\n]*(?:AI Act|AI-Act)[^\n]*(?:Konformität|Compliance)/i,
  ];
  for (const pattern of requiredSafetyLanguage) {
    if (!pattern.test(guideText)) fail(`trainer guide: missing safety boundary ${pattern}`);
  }
}

if (failed) process.exitCode = 1;
else console.log("PASS: AI-Startklar training kit is consistent (40 slides, 180 minutes)");
