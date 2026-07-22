import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";

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
  "13-teilnahmeliste.md",
  "14-teilnahmebestaetigung.md",
  "15-ki-nutzungsregel.md",
  "16-management-massnahmenblatt.md",
  "17-nachbesprechungsprotokoll.md",
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
  "13-teilnahmeliste.xlsx",
  "13-teilnahmeliste.docx",
  "13-teilnahmeliste.pdf",
  "14-teilnahmebestaetigung.docx",
  "14-teilnahmebestaetigung.pdf",
  "15-ki-nutzungsregel.docx",
  "15-ki-nutzungsregel.pdf",
  "16-management-massnahmenblatt.docx",
  "16-management-massnahmenblatt.pdf",
  "17-nachbesprechungsprotokoll.docx",
  "17-nachbesprechungsprotokoll.pdf",
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

function readZipEntries(file) {
  const archive = fs.readFileSync(file);
  const minimumEocdSize = 22;
  const maximumCommentSize = 0xffff;
  let eocdOffset = -1;
  for (
    let offset = archive.length - minimumEocdSize;
    offset >= Math.max(0, archive.length - minimumEocdSize - maximumCommentSize);
    offset -= 1
  ) {
    if (archive.readUInt32LE(offset) === 0x06054b50) {
      eocdOffset = offset;
      break;
    }
  }
  if (eocdOffset < 0) throw new Error("ZIP end-of-central-directory record not found");

  const entryCount = archive.readUInt16LE(eocdOffset + 10);
  let centralOffset = archive.readUInt32LE(eocdOffset + 16);
  const entries = new Map();
  for (let index = 0; index < entryCount; index += 1) {
    if (archive.readUInt32LE(centralOffset) !== 0x02014b50) {
      throw new Error(`invalid ZIP central-directory entry ${index + 1}`);
    }
    const compressionMethod = archive.readUInt16LE(centralOffset + 10);
    const compressedSize = archive.readUInt32LE(centralOffset + 20);
    const fileNameLength = archive.readUInt16LE(centralOffset + 28);
    const extraLength = archive.readUInt16LE(centralOffset + 30);
    const commentLength = archive.readUInt16LE(centralOffset + 32);
    const localOffset = archive.readUInt32LE(centralOffset + 42);
    const fileName = archive
      .subarray(centralOffset + 46, centralOffset + 46 + fileNameLength)
      .toString("utf8");

    if (archive.readUInt32LE(localOffset) !== 0x04034b50) {
      throw new Error(`invalid ZIP local header for ${fileName}`);
    }
    const localNameLength = archive.readUInt16LE(localOffset + 26);
    const localExtraLength = archive.readUInt16LE(localOffset + 28);
    const dataStart = localOffset + 30 + localNameLength + localExtraLength;
    const compressed = archive.subarray(dataStart, dataStart + compressedSize);
    let data;
    if (compressionMethod === 0) data = compressed;
    else if (compressionMethod === 8) data = zlib.inflateRawSync(compressed);
    else throw new Error(`unsupported ZIP compression method ${compressionMethod} for ${fileName}`);
    entries.set(fileName, data);
    centralOffset += 46 + fileNameLength + extraLength + commentLength;
  }
  return entries;
}

function decodeXml(value) {
  return value
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&amp;", "&");
}

function xmlAttribute(attributes, name) {
  const match = attributes.match(new RegExp(`\\b${name}=(?:"([^"]*)"|'([^']*)')`));
  return match ? decodeXml(match[1] ?? match[2]) : undefined;
}

function columnNumber(reference) {
  const letters = reference.match(/^[A-Z]+/)?.[0];
  if (!letters) return 0;
  return [...letters].reduce((value, letter) => value * 26 + letter.charCodeAt(0) - 64, 0);
}

function verifyAttendanceWorkbook(file) {
  const entries = readZipEntries(file);
  const sheetBuffer = entries.get("xl/worksheets/sheet1.xml");
  if (!sheetBuffer) throw new Error("xl/worksheets/sheet1.xml is missing");
  const workbookBuffer = entries.get("xl/workbook.xml");
  if (!workbookBuffer) throw new Error("xl/workbook.xml is missing");
  const sheet = sheetBuffer.toString("utf8");
  const workbookXml = workbookBuffer.toString("utf8");
  const cells = new Map();
  const cellPattern = /<(?:[\w-]+:)?c\b([^>]*?)\/>|<(?:[\w-]+:)?c\b([^>]*)>([\s\S]*?)<\/(?:[\w-]+:)?c>/g;
  for (const match of sheet.matchAll(cellPattern)) {
    const reference = xmlAttribute(match[1] ?? match[2], "r");
    if (!reference) continue;
    const valueMatch = match[3]?.match(/<(?:[\w-]+:)?v\b[^>]*>([\s\S]*?)<\/(?:[\w-]+:)?v>/);
    cells.set(reference, valueMatch ? decodeXml(valueMatch[1]) : "");
  }

  const expectedHeaders = ["Nr.", "Name der teilnehmenden Person", "Team / Rolle", "Status", "Unterschrift"];
  expectedHeaders.forEach((value, index) => {
    const reference = `${String.fromCharCode(65 + index)}7`;
    if (cells.get(reference) !== value) {
      fail(`13-teilnahmeliste.xlsx must have header ${JSON.stringify(value)} in ${reference}`);
    }
  });

  const participantRows = [];
  for (const [reference, value] of cells) {
    const row = Number(reference.match(/\d+$/)?.[0]);
    if (columnNumber(reference) === 1 && row >= 8 && /^\d+$/.test(value)) participantRows.push([row, Number(value)]);
  }
  participantRows.sort((left, right) => left[0] - right[0]);
  const expectedParticipantRows = Array.from({ length: 15 }, (_, index) => [index + 8, index + 1]);
  if (JSON.stringify(participantRows) !== JSON.stringify(expectedParticipantRows)) {
    fail("13-teilnahmeliste.xlsx must have exactly 15 participant input rows in rows 8 through 22");
  }
  for (let row = 8; row <= 22; row += 1) {
    for (const column of ["B", "C", "D", "E"]) {
      if (!cells.has(`${column}${row}`)) {
        fail(`13-teilnahmeliste.xlsx participant input cell ${column}${row} is missing`);
      }
    }
  }

  const validations = [...sheet.matchAll(/<(?:[\w-]+:)?dataValidation\b([^>]*)>([\s\S]*?)<\/(?:[\w-]+:)?dataValidation>/g)];
  const validation = validations[0];
  const formula = validation?.[2].match(/<(?:[\w-]+:)?formula1\b[^>]*>([\s\S]*?)<\/(?:[\w-]+:)?formula1>/)?.[1];
  const statusValues = formula ? decodeXml(formula).replace(/^"|"$/g, "").split(",") : [];
  if (
    validations.length !== 1 ||
    xmlAttribute(validation?.[1] ?? "", "type") !== "list" ||
    xmlAttribute(validation?.[1] ?? "", "sqref") !== "D8:D22" ||
    JSON.stringify(statusValues) !== JSON.stringify(["anwesend", "teilweise", "nicht anwesend"])
  ) {
    fail('13-teilnahmeliste.xlsx must validate D8:D22 with exactly "anwesend", "teilweise", "nicht anwesend"');
  }

  const pane = sheet.match(/<(?:[\w-]+:)?pane\b([^>]*)\/>/)?.[1] ?? "";
  if (
    xmlAttribute(pane, "state") !== "frozen" ||
    xmlAttribute(pane, "ySplit") !== "7" ||
    xmlAttribute(pane, "topLeftCell") !== "A8"
  ) {
    fail("13-teilnahmeliste.xlsx must freeze the header through row 7 with A8 as the first scrolling cell");
  }

  const columnDefinitions = [];
  for (const match of sheet.matchAll(/<(?:[\w-]+:)?col\b([^>]*)\/>/g)) {
    const minimum = Number(xmlAttribute(match[1], "min"));
    const maximum = Number(xmlAttribute(match[1], "max"));
    const width = Number(xmlAttribute(match[1], "width"));
    const hidden = xmlAttribute(match[1], "hidden");
    for (let column = minimum; column <= maximum; column += 1) {
      columnDefinitions.push({ column, width, hidden });
    }
  }
  if (
    JSON.stringify(columnDefinitions.map(({ column }) => column)) !== JSON.stringify([1, 2, 3, 4, 5]) ||
    columnDefinitions.some(({ width }) => !Number.isFinite(width) || width < 5 || width > 40) ||
    columnDefinitions.some(({ hidden }) => hidden === "1" || hidden === "true")
  ) {
    fail("13-teilnahmeliste.xlsx must define visible, sensibly sized columns A:E only");
  }

  const usedReferences = [...cells.keys()];
  const usedColumns = usedReferences.map(columnNumber);
  const usedRows = usedReferences.map((reference) => Number(reference.match(/\d+$/)?.[0]));
  if (
    Math.min(...usedColumns) !== 1 ||
    Math.max(...usedColumns) !== 5 ||
    Math.min(...usedRows) !== 1 ||
    Math.max(...usedRows) !== 25 ||
    !/<(?:[\w-]+:)?pageMargins\b[^>]*\/>/.test(sheet)
  ) {
    fail("13-teilnahmeliste.xlsx must use the printable A1:E25 area with page margins");
  }
  const printAreas = [...workbookXml.matchAll(/<(?:[\w-]+:)?definedName\b([^>]*)>([\s\S]*?)<\/(?:[\w-]+:)?definedName>/g)]
    .filter((match) => xmlAttribute(match[1], "name") === "_xlnm.Print_Area");
  if (
    printAreas.length !== 1 ||
    xmlAttribute(printAreas[0]?.[1] ?? "", "localSheetId") !== "0" ||
    decodeXml(printAreas[0]?.[2] ?? "") !== "'Teilnahmeliste'!$A$1:$E$25"
  ) {
    fail("13-teilnahmeliste.xlsx must define local sheet 0 print area exactly as 'Teilnahmeliste'!$A$1:$E$25");
  }
  if ([...cells.keys()].some((reference) => columnNumber(reference) > 5) || cells.has("F7")) {
    fail("13-teilnahmeliste.xlsx must not contain an additional or hidden tracking column");
  }
}

function verifyAttendanceSource(file) {
  const text = fs.readFileSync(file, "utf8");
  const rows = [...text.matchAll(/^\|\s*(\d+)\s*\|/gm)].map((match) => Number(match[1]));
  const expectedRows = Array.from({ length: 15 }, (_, index) => index + 1);
  if (JSON.stringify(rows) !== JSON.stringify(expectedRows)) {
    fail("13-teilnahmeliste.md must contain exactly 15 numbered Markdown table rows");
  }
  const statusSentence = text.match(/Zulässige Statuswerte sind exakt ([^\n]+)\./)?.[1] ?? "";
  const statusValues = [...statusSentence.matchAll(/`([^`]+)`/g)].map((match) => match[1]);
  if (JSON.stringify(statusValues) !== JSON.stringify(["anwesend", "teilweise", "nicht anwesend"])) {
    fail('13-teilnahmeliste.md must name exactly the status values "anwesend", "teilweise", "nicht anwesend"');
  }
}

function verifyUseRuleSource(file) {
  const text = fs.readFileSync(file, "utf8");
  const fields = text.match(/## Unternehmensspezifische Festlegung\n([\s\S]*?)(?:\n## |$)/)?.[1] ?? "";
  if (!fields.includes("- **Version:**")) {
    fail("15-ki-nutzungsregel.md must contain a Version field in the company-specific section");
  }
  const safeRule = "ausschließlich synthetische oder robust anonymisierte, sichere Beispiele";
  const prohibitedRule = "Reale personenbezogene, vertrauliche, sicherheitsrelevante oder rote Daten werden nie live in ein KI-Werkzeug eingegeben.";
  if (!text.includes(safeRule) || !text.includes(prohibitedRule)) {
    fail("15-ki-nutzungsregel.md must allow only synthetic or robustly anonymized safe data and prohibit real personal, confidential, security-relevant, or red data as live input");
  }
}

function verifyActionSource(file) {
  const text = fs.readFileSync(file, "utf8");
  const section = text.match(/## Maßnahmen für die nächsten 30 Tage\n([\s\S]*?)(?:\n## |$)/)?.[1] ?? "";
  const rows = section
    .split("\n")
    .filter((line) => /^\|\s*\d+\s*\|/.test(line))
    .map((line) => line.split("|").slice(1, -1).map((value) => value.trim()));
  const expectedMeasures = [
    "freigegebene Werkzeuge und Kontotypen dokumentieren",
    "interne Ansprech- und Freigabestellen benennen",
    "einseitige KI-Nutzungsregel finalisieren",
    "zwei risikoarme Anwendungsfälle kontrolliert testen",
    "Vorfälle und Unsicherheiten erfassbar machen",
    "Auffrischung oder Vertiefung nach sechs bis zwölf Monaten prüfen",
  ];
  if (
    rows.length !== 6 ||
    rows.some((row, index) => row.length !== 5 || row[0] !== String(index + 1) || row[1] !== expectedMeasures[index])
  ) {
    fail("16-management-massnahmenblatt.md must contain exactly the six required numbered measures");
  }
  rows.forEach((row, index) => {
    if (row[2] !== "`[Owner]`" || row[3] !== "`[TT.MM.JJJJ]`") {
      fail(`16-management-massnahmenblatt.md measure ${index + 1} must have an Owner and due date in the same row`);
    }
  });
}

requireText("13-teilnahmeliste.md", [
  "Kunde",
  "Datum",
  "Format",
  "Trainer/in",
  "Name der teilnehmenden Person",
  "Team / Rolle",
  "Unterschrift oder Status",
  "maximal 15",
  "Aufbewahrung",
]);

requireText("14-teilnahmebestaetigung.md", [
  "**[Name]** hat am **[Datum]** an der dreistündigen Live-Schulung „MyHiwi AI-Startklar“ teilgenommen. Behandelt wurden Grundlagen generativer KI, geeignete Anwendungsfälle, Promptgestaltung, Daten- und Risikoeinordnung, Prüfung von KI-Ausgaben, menschliche Kontrolle und betriebliche Nutzungsregeln. Diese Bestätigung dokumentiert die Teilnahme. Sie ist keine rechtliche Zertifizierung und bestätigt keine vollständige Compliance einer Person oder Organisation.",
]);

requireText("15-ki-nutzungsregel.md", [
  "Nur freigegebene Werkzeuge und Unternehmenskonten nutzen.",
  "Vor jeder Eingabe die Datenampel anwenden; rote Daten im Basisgebrauch nicht eingeben.",
  "KI-Ausgaben vor Verwendung auf Fakten, Quellen, Rechte, Ton und Wirkung prüfen.",
  "Verantwortung und folgenreiche Entscheidungen bleiben beim Menschen.",
  "Unsichere, sensible oder ungewöhnliche Fälle stoppen und an die benannte interne Stelle eskalieren.",
  "Freigegebene Werkzeuge / Kontotypen",
  "Eingeschränkte Nutzungen",
  "KI-/Tool-Verantwortung",
  "Datenschutzkontakt",
  "Sicherheitskontakt",
  "Freigabeweg",
  "Gültig ab",
  "Management-Unterschrift",
]);

requireText("16-management-massnahmenblatt.md", [
  "freigegebene Werkzeuge und Kontotypen dokumentieren",
  "interne Ansprech- und Freigabestellen benennen",
  "einseitige KI-Nutzungsregel finalisieren",
  "zwei risikoarme Anwendungsfälle kontrolliert testen",
  "Vorfälle und Unsicherheiten erfassbar machen",
  "Auffrischung oder Vertiefung nach sechs bis zwölf Monaten prüfen",
  "Owner",
  "Fälligkeit",
]);

requireText("17-nachbesprechungsprotokoll.md", [
  "Welche Anwendungsfälle waren sinnvoll und akzeptiert?",
  "Wo bestanden Unsicherheiten oder Regelungslücken?",
  "Welche Werkzeuge müssen geklärt oder freigegeben werden?",
  "Wer übernimmt Verantwortung für Regeln, Fragen und Aktualisierung?",
  "Welche drei Maßnahmen werden innerhalb von 30 Tagen umgesetzt?",
  "Offene Punkte",
  "Spezialistenverweise",
  "Nächster Review-Termin",
  "Optionales Follow-up",
  "kein automatisches Folgeangebot",
]);

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

const attendanceSourcePath = path.join(salesDir, "13-teilnahmeliste.md");
if (fs.existsSync(attendanceSourcePath)) verifyAttendanceSource(attendanceSourcePath);
const useRuleSourcePath = path.join(salesDir, "15-ki-nutzungsregel.md");
if (fs.existsSync(useRuleSourcePath)) verifyUseRuleSource(useRuleSourcePath);
const actionSourcePath = path.join(salesDir, "16-management-massnahmenblatt.md");
if (fs.existsSync(actionSourcePath)) verifyActionSource(actionSourcePath);

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
const attendanceWorkbookPath = path.join(outputDir, "13-teilnahmeliste.xlsx");
if (fs.existsSync(attendanceWorkbookPath) && fs.statSync(attendanceWorkbookPath).size > 0) {
  try {
    verifyAttendanceWorkbook(attendanceWorkbookPath);
  } catch (error) {
    fail(`13-teilnahmeliste.xlsx could not be structurally verified: ${error.message}`);
  }
}
if (!process.exitCode) console.log("PASS: AI-Startklar sales kit is consistent");
