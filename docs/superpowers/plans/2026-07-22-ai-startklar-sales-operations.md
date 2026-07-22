# MyHiwi AI-Startklar Sales & Operations Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the editable sales and delivery-operations kit needed to qualify, offer, book, document, and follow up a MyHiwi AI-Startklar engagement.

**Architecture:** Keep exact commercial facts in one JSON file, author each asset from focused Markdown source, and export customer-facing DOCX/PDF/XLSX files into a versioned deliverables folder. A dependency-free Node verifier enforces required files, prices, duration, capacity, and forbidden compliance claims.

**Tech Stack:** Markdown, JSON, Node.js 20, bundled workspace document/PDF/spreadsheet runtimes, `documents:documents`, `pdf:pdf`, and `spreadsheets:Spreadsheets` skills.

## Global Constraints

- Approved specification: `docs/superpowers/specs/2026-07-22-myhiwi-ai-startklar-design.md`.
- Product name: `MyHiwi AI-Startklar`.
- Format: 3 hours live, plus 30-minute management preparation and 30-minute management follow-up.
- Capacity: maximum 15 participants in the standard package.
- Online price: `1.490 € netto`.
- On-site price: `1.790 € netto`; travel and possible accommodation are shown separately before commissioning.
- Standard payment logic: 50 percent at commissioning and 50 percent after delivery.
- Never claim legal advice, privacy approval, AI Act certification, guaranteed compliance, or a guaranteed individual competence level.
- Participation confirmations document attendance only.
- No real personal, confidential, security-relevant, or red-zone data may appear in examples.
- Before creating Office/PDF files, call `codex_app__load_workspace_dependencies` and read the complete SKILL.md for every office format used.
- Render and visually inspect outputs; successful generation alone is insufficient verification.
- Preserve unrelated worktree changes and commit only files named in the current task.

## File Map

- `content/ai-startklar/product-facts.json` — source of truth for name, duration, capacity, prices, CTA, and boundaries.
- `content/ai-startklar/README.md` — package index and editing/versioning rules.
- `content/ai-startklar/sales/*.md` — canonical source for eleven sales and operations assets.
- `deliverables/ai-startklar/vertrieb/*` — customer- and trainer-ready DOCX, PDF, and XLSX exports.
- `scripts/ai-startklar/verify-sales-kit.mjs` — source/output completeness and invariant checks.

---

### Task 1: Canonical Product Facts and Verification Harness

**Files:**
- Create: `content/ai-startklar/product-facts.json`
- Create: `content/ai-startklar/README.md`
- Create: `scripts/ai-startklar/verify-sales-kit.mjs`

**Interfaces:**
- Produces: `product-facts.json` with `name`, `durationMinutes`, `capacity`, `pricing`, `preparationMinutes`, `followupMinutes`, `cta`, and `boundaries`.
- Produces: CLI `node scripts/ai-startklar/verify-sales-kit.mjs` with exit code 0 on success and 1 on failure.

- [ ] **Step 1: Write the failing verifier**

Create `scripts/ai-startklar/verify-sales-kit.mjs`:

```js
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const factsPath = path.join(root, "content/ai-startklar/product-facts.json");
const salesDir = path.join(root, "content/ai-startklar/sales");
const outputDir = path.join(root, "deliverables/ai-startklar/vertrieb");
const requiredSources = [];
const requiredOutputs = [];
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
for (const file of requiredOutputs) {
  const target = path.join(outputDir, file);
  if (!fs.existsSync(target) || fs.statSync(target).size === 0) {
    fail(`missing or empty output ${file}`);
  }
}
if (!process.exitCode) console.log("PASS: AI-Startklar sales kit is consistent");
```

- [ ] **Step 2: Run the verifier and confirm failure**

Run: `node scripts/ai-startklar/verify-sales-kit.mjs`  
Expected: exit code 1 and `FAIL: missing content/ai-startklar/product-facts.json`.

- [ ] **Step 3: Create canonical facts and package README**

Create `content/ai-startklar/product-facts.json`:

```json
{
  "name": "MyHiwi AI-Startklar",
  "subtitle": "Die praxisnahe KI-Grundlagenschulung für Unternehmen",
  "promise": "KI sinnvoll nutzen. Risiken erkennen. Sicherer entscheiden.",
  "durationMinutes": 180,
  "capacity": 15,
  "preparationMinutes": 30,
  "followupMinutes": 30,
  "pricing": {
    "onlineNet": 1490,
    "onsiteNet": 1790,
    "currency": "EUR",
    "travel": "Reise- und gegebenenfalls Übernachtungsaufwand wird vor Beauftragung separat ausgewiesen."
  },
  "payment": { "atCommissioningPercent": 50, "afterDeliveryPercent": 50 },
  "cta": "Unverbindliches Erstgespräch anfragen",
  "boundaries": [
    "keine Rechtsberatung",
    "keine Datenschutzprüfung",
    "kein Informationssicherheitsaudit",
    "keine Toolfreigabe",
    "keine Compliance-Zertifizierung",
    "keine Garantie eines bestimmten individuellen Kompetenzniveaus"
  ]
}
```

Create `content/ai-startklar/README.md` with sections `Verbindliche Quellen`, `Änderungsregel`, `Versionierung`, and `Dateiindex`. State that facts change in JSON first, then sources and exports, and that every asset carries version, date, and document type.

- [ ] **Step 4: Verify and commit**

Run: `node scripts/ai-startklar/verify-sales-kit.mjs`  
Expected: `PASS: AI-Startklar sales kit is consistent`.

```bash
git add content/ai-startklar/product-facts.json content/ai-startklar/README.md scripts/ai-startklar/verify-sales-kit.mjs
git commit -m "feat: add AI-Startklar product facts"
```

---

### Task 2: Recommendation and First-Call Pack

**Files:**
- Create: `content/ai-startklar/sales/01-produkt-one-pager.md`
- Create: `content/ai-startklar/sales/02-erstgespraechsleitfaden.md`
- Create: `content/ai-startklar/sales/03-fit-risikocheck.md`
- Create: `deliverables/ai-startklar/vertrieb/01-produkt-one-pager.docx`
- Create: `deliverables/ai-startklar/vertrieb/01-produkt-one-pager.pdf`
- Create: `deliverables/ai-startklar/vertrieb/02-erstgespraechsleitfaden.docx`
- Create: `deliverables/ai-startklar/vertrieb/02-erstgespraechsleitfaden.pdf`
- Create: `deliverables/ai-startklar/vertrieb/03-fit-risikocheck.docx`
- Create: `deliverables/ai-startklar/vertrieb/03-fit-risikocheck.pdf`
- Modify: `scripts/ai-startklar/verify-sales-kit.mjs`

**Interfaces:**
- Consumes: `product-facts.json` and specification sections 3–6.
- Produces: recommendation-ready one-pager, 25–30 minute call script, and Standard/Custom/Stop decision sheet.

- [ ] **Step 1: Add three required sources and six outputs to the verifier**

Set:

```js
const requiredSources = [
  "01-produkt-one-pager.md",
  "02-erstgespraechsleitfaden.md",
  "03-fit-risikocheck.md",
];
const requiredOutputs = [
  "01-produkt-one-pager.docx", "01-produkt-one-pager.pdf",
  "02-erstgespraechsleitfaden.docx", "02-erstgespraechsleitfaden.pdf",
  "03-fit-risikocheck.docx", "03-fit-risikocheck.pdf",
];
```

Run the verifier. Expected: three missing-source and six missing-output failures.

- [ ] **Step 2: Author the three canonical sources**

`01-produkt-one-pager.md` order:

1. name, subtitle, promise;
2. target company and trigger;
3. six participant outcomes from specification 3.3;
4. complete standard scope from 5.1;
5. both prices and travel wording;
6. all product boundaries;
7. approved CTA.

`02-erstgespraechsleitfaden.md` contains the exact opening, eight timed blocks and all questions from specification 6.2–6.3, note fields, both closing scripts, and a final `Standardpaket / Individuelles Angebot / Spezialist zuerst` decision.

`03-fit-risikocheck.md` is a one-page three-column sheet:

- Standard: up to 15, basics/intermediate, everyday GenAI, approved tool or demo, safe examples, manager present.
- Individual: multiple groups, languages, regulated context, governance, custom tools, deeper department work.
- Stop/check: legal guarantee, live red data, HR/health/finance/scoring/biometrics/safety-critical decisions, unresolved incident.

- [ ] **Step 3: Generate and inspect outputs**

Use the document and PDF skills. Apply the current MyHiwi brand system, real umlauts, version/date, calm editorial layout, and no invented proof. Render all PDFs to images. The one-pager and Fit/Risk sheet must each remain one readable page.

- [ ] **Step 4: Verify and commit**

Run: `node scripts/ai-startklar/verify-sales-kit.mjs`  
Expected: PASS.

```bash
git add content/ai-startklar/sales/01-produkt-one-pager.md content/ai-startklar/sales/02-erstgespraechsleitfaden.md content/ai-startklar/sales/03-fit-risikocheck.md deliverables/ai-startklar/vertrieb scripts/ai-startklar/verify-sales-kit.mjs
git commit -m "feat: add AI-Startklar first-call pack"
```

---

### Task 3: Offer and Customer Onboarding Pack

**Files:**
- Create: `content/ai-startklar/sales/04-angebotsvorlage.md`
- Create: `content/ai-startklar/sales/05-vorbereitungsfragebogen.md`
- Create: `content/ai-startklar/sales/19-anfragebestaetigung.md`
- Create: `deliverables/ai-startklar/vertrieb/04-angebotsvorlage.docx`
- Create: `deliverables/ai-startklar/vertrieb/04-angebotsvorlage.pdf`
- Create: `deliverables/ai-startklar/vertrieb/05-vorbereitungsfragebogen.docx`
- Create: `deliverables/ai-startklar/vertrieb/05-vorbereitungsfragebogen.pdf`
- Create: `deliverables/ai-startklar/vertrieb/19-anfragebestaetigung.docx`
- Create: `deliverables/ai-startklar/vertrieb/19-anfragebestaetigung.pdf`
- Modify: `scripts/ai-startklar/verify-sales-kit.mjs`

**Interfaces:**
- Consumes: qualified call result and `product-facts.json`.
- Produces: editable offer, data-minimised preparation questionnaire, and receipt/next-step message.

- [ ] **Step 1: Expand required source/output arrays and confirm failure**

Append sources 04, 05, and 19 and these outputs:

```js
"04-angebotsvorlage.docx", "04-angebotsvorlage.pdf",
"05-vorbereitungsfragebogen.docx", "05-vorbereitungsfragebogen.pdf",
"19-anfragebestaetigung.docx", "19-anfragebestaetigung.pdf",
```

Expected: three missing-source and six missing-output failures.

- [ ] **Step 2: Author the offer source**

Include editable fields `[Kunde]`, `[Angebotsnummer]`, `[Datum]`, `[Gültig bis]`, `[Termin]`, `[Format]`, and `[Praxisfokus]`; the exact scope from specification 5.1; customer prerequisites from 7.3; selected online/on-site price; separately displayed travel; 50/50 payment logic; and the six boundaries. State that due date, cancellation, travel, and contractual terms must match current MyHiwi terms before sending.

- [ ] **Step 3: Author questionnaire and acknowledgement sources**

The questionnaire contains all twelve questions from specification 8.1, a 1–5 knowledge scale, six focus choices, and this warning above every free-text area:

> Bitte tragen Sie keine personenbezogenen, vertraulichen oder sicherheitsrelevanten Inhalte ein und laden Sie keine entsprechenden Dokumente hoch.

The acknowledgement has form-screen and email variants. Both confirm receipt, summarize format/participant/timeframe, explain that MyHiwi checks fit before proposing the call, and repeat the no-sensitive-data instruction. Do not promise an automatic offer or legal assessment.

- [ ] **Step 4: Generate, render, and inspect outputs**

Use the document/PDF skills. Ensure the offer and questionnaire work digitally and in print, every editable marker is visible, and no internal trainer note appears in customer PDFs.

- [ ] **Step 5: Verify and commit**

Run: `node scripts/ai-startklar/verify-sales-kit.mjs`  
Expected: PASS.

```bash
git add content/ai-startklar/sales/04-angebotsvorlage.md content/ai-startklar/sales/05-vorbereitungsfragebogen.md content/ai-startklar/sales/19-anfragebestaetigung.md deliverables/ai-startklar/vertrieb scripts/ai-startklar/verify-sales-kit.mjs
git commit -m "feat: add AI-Startklar onboarding pack"
```

---

### Task 4: Attendance, Rules, and Management Follow-Up Pack

**Files:**
- Create: `content/ai-startklar/sales/13-teilnahmeliste.md`
- Create: `content/ai-startklar/sales/14-teilnahmebestaetigung.md`
- Create: `content/ai-startklar/sales/15-ki-nutzungsregel.md`
- Create: `content/ai-startklar/sales/16-management-massnahmenblatt.md`
- Create: `content/ai-startklar/sales/17-nachbesprechungsprotokoll.md`
- Create: `deliverables/ai-startklar/vertrieb/13-teilnahmeliste.xlsx`
- Create: `deliverables/ai-startklar/vertrieb/13-teilnahmeliste.docx`
- Create: `deliverables/ai-startklar/vertrieb/13-teilnahmeliste.pdf`
- Create: `deliverables/ai-startklar/vertrieb/14-teilnahmebestaetigung.docx`
- Create: `deliverables/ai-startklar/vertrieb/14-teilnahmebestaetigung.pdf`
- Create: `deliverables/ai-startklar/vertrieb/15-ki-nutzungsregel.docx`
- Create: `deliverables/ai-startklar/vertrieb/15-ki-nutzungsregel.pdf`
- Create: `deliverables/ai-startklar/vertrieb/16-management-massnahmenblatt.docx`
- Create: `deliverables/ai-startklar/vertrieb/16-management-massnahmenblatt.pdf`
- Create: `deliverables/ai-startklar/vertrieb/17-nachbesprechungsprotokoll.docx`
- Create: `deliverables/ai-startklar/vertrieb/17-nachbesprechungsprotokoll.pdf`
- Modify: `scripts/ai-startklar/verify-sales-kit.mjs`

**Interfaces:**
- Consumes: delivery date, customer, participant names, approved tools, internal contacts, open risks, and management decisions.
- Produces: attendance evidence, attendance-only confirmation, five-rule sheet, 30-day action sheet, and management debrief.

- [ ] **Step 1: Add five sources and eleven outputs to the verifier**

Append all filenames. Outputs are DOCX/PDF pairs for 14–17 plus `13-teilnahmeliste.xlsx`, `13-teilnahmeliste.docx`, and `13-teilnahmeliste.pdf`. Run and expect all newly added entries to fail as missing.

- [ ] **Step 2: Author attendance and confirmation sources**

Attendance fields: customer, date, format, trainer, participant name, team/role, signature or status, and retention note. The confirmation uses the exact wording from specification 15.4 and ends:

> Diese Bestätigung dokumentiert die Teilnahme. Sie ist keine rechtliche Zertifizierung und bestätigt keine vollständige Compliance einer Person oder Organisation.

- [ ] **Step 3: Author the one-page AI-use rule**

Use the five rules verbatim and add editable boxes for approved tools/account types, restricted uses, AI/tool owner, privacy contact, security contact, approval path, effective date, version, and management signature.

- [ ] **Step 4: Author management action and debrief sources**

The action sheet contains the six 30-day measures from specification 20, each with owner and due date. The debrief contains the five management questions, open issues, specialist referrals, next review date, and optional follow-up without automatic upsell language.

- [ ] **Step 5: Generate spreadsheet, documents, and PDFs**

Use the spreadsheet skill for the attendance workbook. Freeze its header, set printable columns, validate status as `anwesend`, `teilweise`, or `nicht anwesend`, and create no hidden tracking column. Use documents/PDF skills for all other assets. The use rule and action sheet each fit on one readable page.

- [ ] **Step 6: Verify and commit**

Run: `node scripts/ai-startklar/verify-sales-kit.mjs`  
Expected: PASS.

```bash
git add content/ai-startklar/sales deliverables/ai-startklar/vertrieb scripts/ai-startklar/verify-sales-kit.mjs
git commit -m "feat: add AI-Startklar delivery operations pack"
```

---

### Task 5: Final Sales-Kit Acceptance

**Files:**
- Modify: `content/ai-startklar/README.md`
- Modify: `scripts/ai-startklar/verify-sales-kit.mjs`

**Interfaces:**
- Consumes: eleven canonical sources and all generated outputs.
- Produces: deterministic acceptance command and package index.

- [ ] **Step 1: Prove the output checker detects a missing artifact**

Move one explicit generated PDF to a sibling filename, run the verifier, and expect `missing or empty output` for that exact file. Restore it immediately using the explicit path; do not use a glob.

- [ ] **Step 2: Complete the package index**

Add a table to `content/ai-startklar/README.md` mapping items 01–05, 13–17, and 19 to source/output filenames, audience, editability, and point in the customer journey.

- [ ] **Step 3: Run final machine and visual acceptance**

Run: `node scripts/ai-startklar/verify-sales-kit.mjs`  
Expected: PASS.

Inspect all final PDFs and the spreadsheet export at 100 percent zoom. Confirm exact prices, 180-minute duration, 15-person capacity, attendance-only disclaimer, no red-zone data, and no forbidden claim.

- [ ] **Step 4: Commit final acceptance changes**

```bash
git add content/ai-startklar/README.md scripts/ai-startklar/verify-sales-kit.mjs
git commit -m "test: verify AI-Startklar sales kit"
```
