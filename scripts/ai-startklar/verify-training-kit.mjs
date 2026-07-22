import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const root = process.cwd();
const sourceDir = path.join(root, "content/ai-startklar/training");
const outputDir = path.join(root, "deliverables/ai-startklar/schulung");
const requiredOutputs = [
  "06-trainerfolien.pptx",
  "06-trainerfolien.pdf",
  "07-trainerleitfaden.docx",
  "07-trainerleitfaden.pdf",
  "08-teilnehmerheft.docx",
  "08-teilnehmerheft.pdf",
];
const requiredSources = [
  "06-folienmanuskript.md",
  "07-trainerleitfaden.md",
  "08-teilnehmerheft.md",
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
const expectedDeckTitleOverrides = new Map([
  [1, "AI-Startklar"],
  [4, "Sicher arbeiten: keine sensiblen Live-Daten"],
  [5, "Wie oft nutzen Sie generative KI?"],
  [7, "Drei Werkzeugarten unterscheiden"],
  [8, "So erzeugt ein Sprachmodell Antworten"],
  [9, "Modell, Anwendung, Konto und Einstellungen"],
  [11, "Aufgaben nach Risiko einordnen"],
  [13, "Eine überzeugende Antwort kann falsch sein"],
  [18, "Klare Prompts schaffen bessere Arbeitsgrundlagen"],
  [22, "Ausgabe kritisieren und gezielt überarbeiten"],
  [23, "Pause"],
  [30, "Folgenreiche Anwendungsfälle früh stoppen"],
  [40, "Ansprechpartner und nächste Schritte"],
]);
const officialAiActSources = [
  "https://eur-lex.europa.eu/eli/reg/2024/1689/",
  "https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers",
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
const expectedWorkbookHeadings = [
  "1. Meine Lernziele",
  "2. Ein vereinfachtes Modell generativer KI",
  "3. Welche Aufgaben eignen sich?",
  "4. Die sechs Bausteine eines guten Prompts",
  "5. Basisübung: einen schwachen Prompt verbessern",
  "6. Datenampel: vor jeder Eingabe",
  "7. Unser ausgewählter Unternehmensfall",
  "8. Die siebenstufige Prüfroutine",
  "9. Unsere fünf betrieblichen Grundregeln",
  "10. Interne Ansprechpartner und Freigabewege",
  "11. Mein nächster sicherer Anwendungsfall",
  "12. Mein 30-Tage-Transfer",
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
const workbookText = sourceTexts.get("08-teilnehmerheft.md");

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

function wordXmlText(xml) {
  return xml
    .replace(/<w:tab\b[^>]*\/>/g, " ")
    .replace(/<\/w:p>/g, " ")
    .replace(/<[^>]+>/g, "")
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'")
    .replace(/\s+/g, " ")
    .trim();
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
      if (!text.includes(`Thema: ${expectedSlideTopics[index]}`)) {
        fail(`slide ${index + 1}: speaker note is not mapped to manuscript topic "${expectedSlideTopics[index]}"`);
      }
    });

    slideTexts.forEach((text, index) => {
      const number = index + 1;
      const expectedTitle = expectedDeckTitleOverrides.get(number) ?? expectedSlideTopics[index];
      if (!text.includes(expectedTitle)) {
        fail(`slide ${number}: expected deck title "${expectedTitle}"`);
      }
    });

    for (const [kind, texts] of [["slide", slideTexts], ["speaker notes", noteTexts]]) {
      texts.forEach((text, index) => {
        for (const pattern of forbiddenClaims) {
          if (pattern.test(text)) fail(`${kind} ${index + 1}: forbidden claim ${pattern}`);
        }
      });
    }

    for (const slideNumber of [24, 25, 30, 32]) {
      for (const source of officialAiActSources) {
        if (!noteTexts[slideNumber - 1].includes(source)) {
          fail(`slide ${slideNumber}: speaker notes missing official source ${source}`);
        }
      }
    }

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

const guideDocxPath = path.join(outputDir, "07-trainerleitfaden.docx");
const workbookDocxPath = path.join(outputDir, "08-teilnehmerheft.docx");
for (const [label, archive, requiredSignals, forbiddenSignals] of [
  [
    "trainer guide DOCX",
    guideDocxPath,
    [
      "Preflight – 20 Minuten vor Beginn",
      "Ablauf auf einen Blick",
      ...expectedGuideSections.map(([heading]) => heading),
      "Trainerwortlaut",
      "Interaktion",
      "Typisches Missverständnis",
      "Safety Stop",
      "Technik-Fallback",
      "Fall 01 · Büro und Verwaltung",
      "Fall 06 · Dienstleistung und Kundenanfragen",
      "Nachdokumentation – direkt nach der Schulung",
    ],
    [],
  ],
  [
    "participant workbook DOCX",
    workbookDocxPath,
    [
      ...expectedWorkbookHeadings,
      ...promptParts,
      ...reviewSteps,
      "Büro und Verwaltung",
      "Dienstleistung und Kundenanfragen",
      "Keine realen sensiblen",
    ],
    ["Trainerwortlaut", "Kurzlösung", "Trainerantwort", "Rechtsberatung"],
  ],
]) {
  if (!fs.existsSync(archive)) continue;
  try {
    const entries = new Set(listZipEntries(archive));
    for (const entry of ["word/document.xml", "word/styles.xml", "word/numbering.xml"]) {
      if (!entries.has(entry)) fail(`${label}: missing ${entry}`);
    }
    const text = wordXmlText(readZipEntry(archive, "word/document.xml"));
    for (const signal of requiredSignals) {
      if (!text.includes(signal)) fail(`${label}: missing key text "${signal}"`);
    }
    for (const signal of forbiddenSignals) {
      if (text.includes(signal)) fail(`${label}: forbidden participant-only text "${signal}"`);
    }
    for (const pattern of forbiddenClaims) {
      if (pattern.test(text)) fail(`${label}: forbidden claim ${pattern}`);
    }
  } catch (error) {
    fail(`${label}: structural inspection failed (${error.message})`);
  }
}

for (const [label, file, expectedPages] of [
  ["trainer guide PDF", "07-trainerleitfaden.pdf", 21],
  ["participant workbook PDF", "08-teilnehmerheft.pdf", 12],
]) {
  const target = path.join(outputDir, file);
  if (!fs.existsSync(target)) continue;
  try {
    const info = execFileSync("pdfinfo", [target], { encoding: "utf8" });
    const pages = Number(info.match(/^Pages:\s+(\d+)$/m)?.[1]);
    if (pages !== expectedPages) fail(`${label}: expected ${expectedPages} pages, found ${pages || "unknown"}`);
    if (!/^Page size:\s+612 x 792 pts \(letter\)$/m.test(info)) {
      fail(`${label}: expected US Letter page size`);
    }
  } catch (error) {
    fail(`${label}: page inspection failed (${error.message})`);
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

if (workbookText !== null) {
  const headings = [...workbookText.matchAll(/^## (.+)$/gm)].map((match) => match[1].trim());
  if (JSON.stringify(headings) !== JSON.stringify(expectedWorkbookHeadings)) {
    fail(`participant workbook: expected ordered sections ${expectedWorkbookHeadings.join(" | ")}, found ${headings.join(" | ") || "none"}`);
  }
  for (const part of promptParts) {
    if (!new RegExp(`\\*\\*${part}:\\*\\*`, "m").test(workbookText)) {
      fail(`participant workbook: missing prompt part ${part}`);
    }
  }
  for (const [index, step] of reviewSteps.entries()) {
    if (!new RegExp(`^${index + 1}\\. \\*\\*${step}:\\*\\*`, "m").test(workbookText)) {
      fail(`participant workbook: missing review step ${index + 1} ${step}`);
    }
  }
  const practiceOptions = [
    "Büro und Verwaltung",
    "Vertrieb und Kundenkommunikation",
    "Marketing und Content",
    "Führung und Entscheidungsvorbereitung",
    "Handwerk und Dokumentation",
    "Dienstleistung und Kundenanfragen",
  ];
  for (const option of practiceOptions) {
    if (!workbookText.includes(`- [ ] ${option}`)) fail(`participant workbook: missing practice option ${option}`);
  }
  const sensitiveReminders = workbookText.toLowerCase().match(/keine realen sensiblen/g)?.length ?? 0;
  if (sensitiveReminders < 3) {
    fail(`participant workbook: expected at least 3 repeated no-real-sensitive-data reminders, found ${sensitiveReminders}`);
  }
  if (!/synthetisch/i.test(workbookText)) fail("participant workbook: missing synthetic-data boundary");
  for (const pattern of [/Kurzlösung/i, /Trainerantwort/i, /Rechtsberatung/i]) {
    if (pattern.test(workbookText)) fail(`participant workbook: forbidden answer or legal commentary ${pattern}`);
  }
}

if (failed) process.exitCode = 1;
else console.log("PASS: AI-Startklar training kit is consistent (40 slides, 180 minutes)");
