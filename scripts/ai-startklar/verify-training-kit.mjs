import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
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
  "09-promptvorlage.docx",
  "09-promptvorlage.pdf",
  "10-datenampel.docx",
  "10-datenampel.pdf",
  "11-pruefcheckliste.docx",
  "11-pruefcheckliste.pdf",
  "12-lerncheck.docx",
  "12-lerncheck.pdf",
  "12-loesungsschluessel.docx",
  "12-loesungsschluessel.pdf",
];
const requiredSources = [
  "06-folienmanuskript.md",
  "07-trainerleitfaden.md",
  "08-teilnehmerheft.md",
  "09-promptvorlage.md",
  "10-datenampel.md",
  "11-pruefcheckliste.md",
  "12-lerncheck.md",
  "12-loesungsschluessel.md",
  "praxisfaelle/01-buero-verwaltung.md",
  "praxisfaelle/02-vertrieb-kundenkommunikation.md",
  "praxisfaelle/03-marketing-content.md",
  "praxisfaelle/04-fuehrung-entscheidungsvorbereitung.md",
  "praxisfaelle/05-handwerk-dokumentation.md",
  "praxisfaelle/06-dienstleistung-kundenanfragen.md",
];
const packageVersionSource = "**Version:** 1.0";
const packageStandSource = "**Stand:** 22. Juli 2026";
const packageVersionVisible = "Version 1.0";
const packageStandVisible = "Stand 22. Juli 2026";
const expectedDeckFooterImageInventoryHash = "8661ce4ccd6be22ba4b938c0805e3c71d4a6752e33ff89f07a335ff304c11cd4";
const versionedDocumentFiles = [
  "07-trainerleitfaden",
  "08-teilnehmerheft",
  "09-promptvorlage",
  "10-datenampel",
  "11-pruefcheckliste",
  "12-lerncheck",
  "12-loesungsschluessel",
];
const documentationFields = [
  "Kunde / Kontakt",
  "Datum / Format / Trainer / tatsächliche Dauer",
  "Zielgruppe / Rollen",
  "Werkzeug / Konto / Offline",
  "Behandelte Module",
  "Praxisfall / synthetisch",
  "Ausgegebene Unterlagen",
  "Offene Punkte / Folgemaßnahmen",
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
const approvedPrompt = "Erstelle [Ergebnis] für [Zielgruppe/Zweck]. Nutze ausschließlich [freigegebenes Material]. Beachte [Anforderungen und Grenzen]. Gib das Ergebnis als [Format] aus. Kennzeichne Unsicherheiten und nenne, welche Punkte vor der Verwendung geprüft werden müssen.";
const approvedReviewSteps = [
  ["Fakten", "Stimmen Namen, Zahlen, Termine und Aussagen?"],
  ["Quelle", "Sind Quellen vorhanden, echt, aktuell und passend?"],
  ["Vollständigkeit", "Fehlt relevanter Kontext oder eine Einschränkung?"],
  ["Verzerrung", "Ist die Ausgabe einseitig, diskriminierend oder unangemessen?"],
  ["Rechte und Daten", "Enthält sie sensible, vertrauliche oder möglicherweise geschützte Inhalte?"],
  ["Ton und Wirkung", "Passt die Ausgabe zur Zielgruppe und Unternehmenskommunikation?"],
  ["Verantwortung", "Wer prüft, entscheidet und gibt frei?"],
];
const approvedLearningQuestions = [
  "Warum kann eine sprachlich überzeugende KI-Antwort trotzdem falsch sein?",
  "Welche sechs Bestandteile hat ein guter Prompt in dieser Schulung?",
  "Nennen Sie zwei typische Risiken generativer KI.",
  "Welche Informationen gehören im Basistraining in die rote Ampelzone?",
  "Was bedeutet die gelbe Ampelzone?",
  "Wer trägt die Verantwortung für die Verwendung einer KI-Ausgabe?",
  "Welche Punkte prüfen Sie bei Zahlen und Quellen?",
  "Was tun Sie, wenn ein Ergebnis eine Person erheblich betreffen könnte?",
  "Warum reicht ein privater kostenloser Toolzugang nicht automatisch für Unternehmensdaten?",
  "An wen eskalieren Sie im Unternehmen einen unklaren Fall?",
];
const approvedLearningAnswers = [
  "Generative KI erzeugt sprachlich wahrscheinliche Ausgaben und prüft nicht automatisch, ob jede Aussage wahr, aktuell oder vollständig ist.",
  "Aufgabe, Kontext, Material, Anforderungen, Ausgabeformat und Prüfkriterien.",
  "Zwei passende Beispiele aus: erfundene Fakten, veraltete Informationen, falsche Quellen, Verzerrungen, Datenabfluss, Rechteprobleme oder unangemessene Ausgaben.",
  "Insbesondere Zugangsdaten, Geschäftsgeheimnisse, Beschäftigten-, Bewerber-, Kunden-, Patienten-, Gesundheits- und andere besonders sensible Daten sowie sicherheitskritische Informationen.",
  "Nicht eingeben, sondern Werkzeug, Zweck, Daten und interne Freigabe zuerst mit der zuständigen Stelle klären.",
  "Der verantwortliche Mensch beziehungsweise die vom Unternehmen festgelegte freigabeberechtigte Stelle.",
  "Zahlen mit einer belastbaren Originalquelle abgleichen; Quelle auf Existenz, Aussage, Aktualität und Kontext prüfen.",
  "Einsatz stoppen, nicht automatisch entscheiden lassen und den Fall an die zuständige Fach-, Rechts-, Datenschutz- oder Sicherheitsstelle geben.",
  "Weil Vertrag, Kontotyp, Einstellungen, Datenverwendung, Speicherort, Zugriffe und Unternehmensfreigabe entscheidend sind.",
  "Die im Management-Vorgespräch benannte interne Stelle; ohne benannte Stelle wird der Fall an die verantwortliche Führungskraft zurückgegeben.",
];
const approvedDataZones = new Map([
  ["Grün – im freigegebenen Werkzeug grundsätzlich nutzbar", [
    "selbst erstellte synthetische Beispieldaten",
    "bereits rechtmäßig veröffentlichte Informationen",
    "ausdrücklich für diesen Zweck freigegebene Unternehmensinformationen",
    "robuste, tatsächlich nicht rückführbare anonymisierte Inhalte",
    "allgemeine Ideen und Aufgaben ohne Personen- oder Geheimnisbezug",
  ]],
  ["Gelb – erst nach interner Prüfung und Freigabe", [
    "interne, nicht öffentliche Informationen mit geringer Sensibilität",
    "Vertrags- oder Projektdaten ohne offensichtliche Personendaten",
    "pseudonymisierte Daten",
    "umfangreiche fremde oder lizenzierte Inhalte",
    "Informationen, deren Vertraulichkeit oder Rechtslage unklar ist",
    "Daten, die nur in bestimmten Unternehmenskonten oder technischen Umgebungen zulässig sein könnten",
  ]],
  ["Rot – im Basistraining niemals eingeben", [
    "Passwörter, Zugangsdaten, Schlüssel und Sicherheitsinformationen",
    "Geschäftsgeheimnisse und hochvertrauliche Strategien",
    "nicht veröffentlichte Finanz-, Transaktions- oder Preisinformationen",
    "Beschäftigten-, Bewerber-, Kunden- oder Patientendaten",
    "Gesundheitsdaten und andere besonders geschützte personenbezogene Daten",
    "Rechtsfälle, Berufsgeheimnisse oder vertrauliche Beratungssachverhalte",
    "sicherheitskritische technische Informationen",
    "Inhalte, für deren Verwendung keine Rechte oder Freigaben bestehen",
  ]],
]);
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
const promptTemplateText = sourceTexts.get("09-promptvorlage.md");
const dataTrafficLightText = sourceTexts.get("10-datenampel.md");
const reviewChecklistText = sourceTexts.get("11-pruefcheckliste.md");
const learningCheckText = sourceTexts.get("12-lerncheck.md");
const answerKeyText = sourceTexts.get("12-loesungsschluessel.md");
const packageReadmePath = path.join(root, "content/ai-startklar/README.md");
if (!fs.existsSync(packageReadmePath)) {
  fail("missing content/ai-startklar/README.md");
} else {
  const readmeText = fs.readFileSync(packageReadmePath, "utf8");
  const packageIndexPosition = readmeText.indexOf("## Paketindex");
  const trainingIndexPosition = readmeText.indexOf("## Trainings- und Delivery-Index");
  if (trainingIndexPosition <= packageIndexPosition) {
    fail("README: training index must be a separate section after Paketindex");
  }
  for (const signal of [
    "training/06-folienmanuskript.md",
    "training/07-trainerleitfaden.md",
    "training/08-teilnehmerheft.md",
    "training/09-promptvorlage.md",
    "training/10-datenampel.md",
    "training/11-pruefcheckliste.md",
    "training/12-lerncheck.md",
    "training/12-loesungsschluessel.md",
    "training/praxisfaelle/01-buero-verwaltung.md",
    "training/praxisfaelle/06-dienstleistung-kundenanfragen.md",
    "deliverables/ai-startklar/schulung/",
    "scripts/ai-startklar/verify-training-kit.mjs",
    "/ki-schulung",
  ]) {
    if (!readmeText.includes(signal)) fail(`README: missing training package signal "${signal}"`);
  }
}

for (const [file, text] of sourceTexts) {
  if (text === null) continue;
  const opening = text.split("\n").slice(0, 12).join("\n");
  if (!opening.includes(packageVersionSource)) fail(`${file}: missing visible source version 1.0`);
  if (!opening.includes(packageStandSource)) fail(`${file}: missing visible source stand 22. Juli 2026`);
}

function plainMarkdown(text) {
  return text
    .replaceAll("**", "")
    .replace(/^>\s?/gm, "")
    .replace(/\s+/g, " ")
    .trim();
}

if (promptTemplateText !== null) {
  for (const [index, part] of promptParts.entries()) {
    if (!promptTemplateText.includes(`## ${index + 1}. ${part}`)) {
      fail(`prompt template: missing section ${index + 1} ${part}`);
    }
  }
  if (!plainMarkdown(promptTemplateText).includes(approvedPrompt)) {
    fail("prompt template: approved complete prompt sentence is missing or changed");
  }
  if (!/Datenampel/i.test(promptTemplateText) || !/freigegeben/i.test(promptTemplateText)) {
    fail("prompt template: missing safe-input reminder");
  }
}

if (dataTrafficLightText !== null) {
  if (!/Lern- und Entscheidungsstütze/i.test(dataTrafficLightText)
      || !/ersetzt keine Tool-, Vertrags- oder Datenschutzprüfung/i.test(dataTrafficLightText)) {
    fail("data traffic light: missing scope boundary");
  }
  for (const [heading, examples] of approvedDataZones) {
    if (!dataTrafficLightText.includes(`## ${heading}`)) {
      fail(`data traffic light: missing zone heading ${heading}`);
    }
    for (const example of examples) {
      if (!dataTrafficLightText.includes(example)) {
        fail(`data traffic light: missing approved example "${example}"`);
      }
    }
  }
  if (!dataTrafficLightText.includes("Gelb bedeutet nicht „vorsichtig eingeben“, sondern „vorher zuständige Person und zulässiges Werkzeug klären“.")) {
    fail("data traffic light: yellow must explicitly mean stop and clarify first");
  }
  if (!dataTrafficLightText.includes("Auch grüne Inhalte dürfen nur in genehmigten Werkzeugen und für legitime Zwecke verwendet werden.")) {
    fail("data traffic light: missing green tool-and-purpose boundary");
  }
  if (!dataTrafficLightText.includes("Diese Prüfung ist nicht Teil des Basisprodukts.")) {
    fail("data traffic light: missing red specialized-system boundary");
  }
}

if (reviewChecklistText !== null) {
  for (const [index, [label, question]] of approvedReviewSteps.entries()) {
    const expected = `${index + 1}. **${label}:** ${question}`;
    if (!reviewChecklistText.includes(expected)) {
      fail(`review checklist: missing approved step ${index + 1} ${label}`);
    }
  }
  if (!plainMarkdown(reviewChecklistText).includes("Je größer die mögliche Wirkung eines Fehlers, desto stärker muss die menschliche Prüfung sein – bis hin zum vollständigen Verzicht auf den KI-Einsatz.")) {
    fail("review checklist: approved reminder is missing or changed");
  }
}

if (learningCheckText !== null) {
  const actualQuestions = [...learningCheckText.matchAll(/^(\d+)\. (.+)\s*$/gm)]
    .map((match) => match[2]);
  if (JSON.stringify(actualQuestions) !== JSON.stringify(approvedLearningQuestions)) {
    fail(`learning check: expected exactly the ten approved questions, found ${actualQuestions.length}`);
  }
  if (!/keine formale Prüfung/i.test(learningCheckText)) {
    fail("learning check: missing non-exam boundary");
  }
  for (const answer of approvedLearningAnswers) {
    if (plainMarkdown(learningCheckText).includes(answer)) {
      fail("learning check: approved answer leaked into participant source");
    }
  }
  for (const pattern of [/Musterantwort/i, /Korrekturhinweis/i, /Nur für Trainer/i, /\bbestanden\b/i, /Prüfungsergebnis/i, /Kompetenzzertifikat/i]) {
    if (pattern.test(learningCheckText)) fail(`learning check: forbidden participant wording ${pattern}`);
  }
}

if (answerKeyText !== null) {
  if (!/Nur für Trainer/i.test(answerKeyText)) fail("answer key: missing trainer-only marking");
  for (const [index, answer] of approvedLearningAnswers.entries()) {
    if (!plainMarkdown(answerKeyText).includes(answer)) {
      fail(`answer key: approved answer ${index + 1} is missing or changed`);
    }
  }
  const corrections = answerKeyText.match(/^\*\*Korrekturhinweis:\*\*\s*\S.+$/gm) ?? [];
  if (corrections.length !== 10) {
    fail(`answer key: expected 10 correction notes, found ${corrections.length}`);
  }
}

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

function readZipBuffer(archive, entry) {
  return execFileSync("unzip", ["-p", archive, entry], {
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

    const coreXml = readZipEntry(pptxPath, "docProps/core.xml");
    for (const signal of [
      "MyHiwi",
      "AI-Startklar",
      "Trainerfolien",
      "Version 1.0",
      "Stand 22. Juli 2026",
      "2026-07-22T00:00:00Z",
    ]) {
      if (!coreXml.includes(signal)) fail(`trainer deck: core properties missing "${signal}"`);
    }
    if (coreXml.includes("<dc:title>Presentation</dc:title>")) {
      fail("trainer deck: generic PPTX title must be replaced");
    }

    const slideXmls = Array.from({ length: 40 }, (_, index) =>
      readZipEntry(pptxPath, `ppt/slides/slide${index + 1}.xml`)
    );
    const slideTexts = slideXmls.map((xml) => xmlText(xml));
    const noteTexts = Array.from({ length: 40 }, (_, index) =>
      xmlText(readZipEntry(pptxPath, `ppt/notesSlides/notesSlide${index + 1}.xml`))
    );

    if (!slideTexts[0].includes("v1.0") || !slideTexts[0].includes("Stand 22.07.2026")) {
      fail("trainer deck: title slide missing visible version/stand metadata");
    }
    if (!slideTexts[22].includes("v1.0") || !slideTexts[22].includes("Stand 22.07.2026")) {
      fail("trainer deck: pause slide missing visible version/stand metadata");
    }

    const footerImageInventory = [];
    slideXmls.forEach((xml, index) => {
      const slideNumber = index + 1;
      if (slideNumber === 1 || slideNumber === 23) return;

      const footerPicture = [...xml.matchAll(/<p:pic>[\s\S]*?<\/p:pic>/g)]
        .map((match) => match[0])
        .find((picture) => picture.includes('y="6324600"') && picture.includes('cy="533400"'));
      const relationshipId = footerPicture?.match(/<a:blip\b[^>]*\br:embed="([^"]+)"/)?.[1];
      if (!footerPicture || !relationshipId) {
        fail(`slide ${slideNumber}: missing the visible versioned footer image`);
        return;
      }

      const relationships = readZipEntry(pptxPath, `ppt/slides/_rels/slide${slideNumber}.xml.rels`);
      const relationshipTag = [...relationships.matchAll(/<Relationship\b[^>]*\/>/g)]
        .map((match) => match[0])
        .find((tag) => tag.includes(`Id="${relationshipId}"`));
      const target = relationshipTag?.match(/\bTarget="([^"]+)"/)?.[1]?.replace(/^\//, "");
      if (!target?.startsWith("ppt/media/")) {
        fail(`slide ${slideNumber}: footer image relationship is missing or invalid`);
        return;
      }

      const imageHash = crypto.createHash("sha256").update(readZipBuffer(pptxPath, target)).digest("hex");
      footerImageInventory.push(`${slideNumber}:${imageHash}`);
    });
    const footerInventoryHash = crypto.createHash("sha256").update(footerImageInventory.join("\n")).digest("hex");
    if (footerInventoryHash !== expectedDeckFooterImageInventoryHash) {
      fail("trainer deck: versioned footer image inventory changed; render and visually re-approve all affected slides");
    }
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
      "Kurzfall A",
      "Hauptfall B",
      ...documentationFields,
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
      "Kurzfall A",
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

for (const stem of versionedDocumentFiles) {
  const archive = path.join(outputDir, `${stem}.docx`);
  if (!fs.existsSync(archive)) continue;
  try {
    const entries = new Set(listZipEntries(archive));
    if (!entries.has("docProps/core.xml")) fail(`${stem}.docx: missing core properties`);
    const footerEntries = [...entries].filter((entry) => /^word\/footer\d+\.xml$/.test(entry));
    if (footerEntries.length === 0) fail(`${stem}.docx: missing visible footer metadata`);
    const footerText = footerEntries.map((entry) => wordXmlText(readZipEntry(archive, entry))).join(" ");
    if (!footerText.includes(packageVersionVisible)) fail(`${stem}.docx: footer missing Version 1.0`);
    if (!footerText.includes(packageStandVisible)) fail(`${stem}.docx: footer missing Stand 22. Juli 2026`);

    const coreXml = readZipEntry(archive, "docProps/core.xml");
    if (!coreXml.includes("2026-07-22T00:00:00Z")) fail(`${stem}.docx: core properties missing 2026-07-22 timestamp`);
    if (coreXml.includes("2013-12-23")) fail(`${stem}.docx: stale python-docx 2013 timestamp`);
    if (!coreXml.includes("MyHiwi") || !coreXml.includes("Version 1.0")) {
      fail(`${stem}.docx: incomplete core properties`);
    }
  } catch (error) {
    fail(`${stem}.docx: metadata inspection failed (${error.message})`);
  }
}

const jobAidDocxChecks = [
  ["prompt template DOCX", "09-promptvorlage.docx", [...promptParts, approvedPrompt], []],
  [
    "data traffic light DOCX",
    "10-datenampel.docx",
    [
      ...approvedDataZones.keys(),
      "Gelb bedeutet nicht „vorsichtig eingeben“",
      "vorher zuständige Person und zulässiges Werkzeug klären",
    ],
    [],
  ],
  ["review checklist DOCX", "11-pruefcheckliste.docx", approvedReviewSteps.flat(), []],
  ["learning check DOCX", "12-lerncheck.docx", approvedLearningQuestions, approvedLearningAnswers],
  ["answer key DOCX", "12-loesungsschluessel.docx", ["Nur für Trainer", ...approvedLearningAnswers, "Korrekturhinweis"], []],
];
const participantAnswerLeakSignals = [
  "Musterantwort",
  "Korrekturhinweis",
  "Nur für Trainer",
  approvedLearningAnswers[0],
  approvedLearningAnswers[5],
  approvedLearningAnswers[9],
];

for (const [label, file, requiredSignals, forbiddenSignals] of jobAidDocxChecks) {
  const archive = path.join(outputDir, file);
  if (!fs.existsSync(archive)) continue;
  try {
    const entries = new Set(listZipEntries(archive));
    for (const entry of ["word/document.xml", "word/styles.xml", "word/numbering.xml"]) {
      if (!entries.has(entry)) fail(`${label}: missing ${entry}`);
    }
    const documentXml = readZipEntry(archive, "word/document.xml");
    const headerEntries = [...entries].filter((entry) => /^word\/header\d+\.xml$/.test(entry));
    const text = [
      wordXmlText(documentXml),
      ...headerEntries.map((entry) => wordXmlText(readZipEntry(archive, entry))),
    ].join(" ");
    for (const signal of requiredSignals) {
      if (!text.includes(signal)) fail(`${label}: missing key text "${signal}"`);
    }
    for (const signal of forbiddenSignals) {
      if (text.includes(signal)) fail(`${label}: answer leaked into participant output`);
    }
    for (const pattern of forbiddenClaims) {
      if (pattern.test(text)) fail(`${label}: forbidden claim ${pattern}`);
    }
    for (const pattern of [/\bbestanden\b/i, /Prüfungsergebnis/i, /Kompetenzzertifikat/i, /\bzertifiziert\b/i]) {
      if (pattern.test(text)) fail(`${label}: forbidden formal-assessment wording ${pattern}`);
    }
    if (file !== "12-loesungsschluessel.docx") {
      for (const signal of participantAnswerLeakSignals) {
        if (text.includes(signal)) fail(`${label}: trainer-only answer signal leaked into participant output`);
      }
    }
    if (file === "10-datenampel.docx") {
      for (const altText of ["Kreis – GRÜN", "Dreieck – GELB", "Achteck – ROT"]) {
        if (!documentXml.includes(`descr="${altText}"`)) {
          fail(`${label}: missing grayscale-safe shape marker ${altText}`);
        }
      }
    }
    if (file === "12-loesungsschluessel.docx") {
      if (headerEntries.length === 0) fail(`${label}: missing running trainer-only header`);
      for (const header of headerEntries) {
        if (!wordXmlText(readZipEntry(archive, header)).includes("Nur für Trainer")) {
          fail(`${label}: ${header} is missing trainer-only marking`);
        }
      }
    }
  } catch (error) {
    fail(`${label}: structural inspection failed (${error.message})`);
  }
}

for (const [label, file, expectedPages] of [
  ["trainer guide PDF", "07-trainerleitfaden.pdf", 22],
  ["participant workbook PDF", "08-teilnehmerheft.pdf", 12],
  ["prompt template PDF", "09-promptvorlage.pdf", 1],
  ["data traffic light PDF", "10-datenampel.pdf", 1],
  ["review checklist PDF", "11-pruefcheckliste.pdf", 1],
  ["learning check PDF", "12-lerncheck.pdf", 2],
  ["answer key PDF", "12-loesungsschluessel.pdf", 5],
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

for (const stem of versionedDocumentFiles) {
  const target = path.join(outputDir, `${stem}.pdf`);
  if (!fs.existsSync(target)) continue;
  try {
    const info = execFileSync("pdfinfo", [target], { encoding: "utf8" });
    const pages = Number(info.match(/^Pages:\s+(\d+)$/m)?.[1]);
    for (let page = 1; page <= pages; page += 1) {
      const pageText = execFileSync("pdftotext", ["-f", String(page), "-l", String(page), target, "-"], { encoding: "utf8" });
      if (!pageText.includes(packageVersionVisible) || !pageText.includes(packageStandVisible)) {
        fail(`${stem}.pdf: page ${page} missing visible Version/Stand metadata`);
      }
    }
  } catch (error) {
    fail(`${stem}.pdf: visible metadata inspection failed (${error.message})`);
  }
}

const participantPdfFiles = [
  "09-promptvorlage.pdf",
  "10-datenampel.pdf",
  "11-pruefcheckliste.pdf",
  "12-lerncheck.pdf",
];
for (const file of participantPdfFiles) {
  const target = path.join(outputDir, file);
  if (!fs.existsSync(target)) continue;
  try {
    const text = execFileSync("pdftotext", [target, "-"], { encoding: "utf8" });
    for (const signal of participantAnswerLeakSignals) {
      if (text.includes(signal)) fail(`${file}: trainer-only answer signal leaked into participant PDF`);
    }
  } catch (error) {
    fail(`${file}: text inspection failed (${error.message})`);
  }
}

const answerKeyPdfPath = path.join(outputDir, "12-loesungsschluessel.pdf");
if (fs.existsSync(answerKeyPdfPath)) {
  try {
    const info = execFileSync("pdfinfo", [answerKeyPdfPath], { encoding: "utf8" });
    const pages = Number(info.match(/^Pages:\s+(\d+)$/m)?.[1]);
    for (let page = 1; page <= pages; page += 1) {
      const pageText = execFileSync("pdftotext", ["-f", String(page), "-l", String(page), answerKeyPdfPath, "-"], { encoding: "utf8" });
      if (!pageText.includes("Nur für Trainer")) {
        fail(`answer key PDF: page ${page} missing trainer-only marking`);
      }
    }
  } catch (error) {
    fail(`answer key PDF: trainer-only page inspection failed (${error.message})`);
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
  if (!/Kurzfall A.*Modul 4.*Folien 21[–-]22/i.test(guideText)) {
    fail("trainer guide: Kurzfall A must be assigned to module 4, slides 21–22");
  }
  if (!/Hauptfall B.*Modul 6[–-]7/i.test(guideText)) {
    fail("trainer guide: Hauptfall B must be assigned to modules 6–7");
  }
  for (const field of documentationFields) {
    if (!guideText.includes(field)) fail(`trainer guide: documentation source missing field "${field}"`);
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
  if (!/vorbereiteten synthetischen Kurzfall A/i.test(workbookText)) {
    fail("participant workbook: basis exercise must reference the prepared synthetic Kurzfall A");
  }
}

if (failed) process.exitCode = 1;
else console.log("PASS: AI-Startklar training kit is consistent (40 slides, 180 minutes)");
