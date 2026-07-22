# MyHiwi AI-Startklar Training Materials Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and verify the complete 180-minute trainer and participant package for MyHiwi AI-Startklar.

**Architecture:** Maintain curriculum and exercise copy as reviewable Markdown, create the 40-slide deck and print-ready participant assets from that source, and keep trainer-only answers separate from participant files. A Node verifier enforces slide/source counts, required topics, output presence, and forbidden claims; visual rendering verifies actual usability.

**Tech Stack:** Markdown, JSON, Node.js 20, PPTX, DOCX, PDF, bundled workspace document/presentation/PDF runtimes, `presentations:Presentations`, `documents:documents`, and `pdf:pdf` skills.

## Global Constraints

- Approved specification: `docs/superpowers/specs/2026-07-22-myhiwi-ai-startklar-design.md`.
- Exactly 180 minutes including a 10-minute break.
- Exactly 40 core slides; optional backup slides do not change timing.
- Fixed core plus one selected industry practice focus.
- Use synthetic, robustly anonymised, or explicitly approved material only.
- Red-zone data is never entered in a live exercise.
- Yellow-zone data is replaced with synthetic content by default.
- Every output is checked by a human before use; high-impact decisions stay with responsible people.
- The training is not legal advice, privacy review, security audit, tool approval, competence certificate, or compliance guarantee.
- Participant confirmation is part of the sales/operations plan, not this plan.
- Before creating Office/PDF files, call `codex_app__load_workspace_dependencies` and read the complete SKILL.md for every format used.
- Render every page/slide to images and visually inspect it before acceptance.
- Preserve unrelated worktree changes and commit only named files.

## File Map

- `content/ai-startklar/training/06-folienmanuskript.md` — 40-slide content and speaker intent.
- `content/ai-startklar/training/07-trainerleitfaden.md` — minute-by-minute facilitation, wording, exercises, fallback, and escalation.
- `content/ai-startklar/training/08-teilnehmerheft.md` — participant learning and transfer workbook.
- `content/ai-startklar/training/09-promptvorlage.md` — six-part prompt template.
- `content/ai-startklar/training/10-datenampel.md` — green/yellow/red decision support.
- `content/ai-startklar/training/11-pruefcheckliste.md` — seven-step output review.
- `content/ai-startklar/training/12-lerncheck.md` — participant questions.
- `content/ai-startklar/training/12-loesungsschluessel.md` — trainer-only answer key.
- `content/ai-startklar/training/praxisfaelle/*.md` — six synthetic industry modules.
- `deliverables/ai-startklar/schulung/*` — PPTX, DOCX, and PDF outputs.
- `scripts/ai-startklar/verify-training-kit.mjs` — content and artifact acceptance.

---

### Task 1: Curriculum Sources and Training Verifier

**Files:**
- Create: `content/ai-startklar/training/06-folienmanuskript.md`
- Create: `content/ai-startklar/training/07-trainerleitfaden.md`
- Create: `scripts/ai-startklar/verify-training-kit.mjs`

**Interfaces:**
- Consumes: specification sections 9–11.
- Produces: exactly 40 headings matching `## Folie NN`, eight timed guide modules totaling 180 minutes, and CLI verification.

- [ ] **Step 1: Write the failing verifier**

Create `scripts/ai-startklar/verify-training-kit.mjs`:

```js
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourceDir = path.join(root, "content/ai-startklar/training");
const outputDir = path.join(root, "deliverables/ai-startklar/schulung");
const requiredSources = [
  "06-folienmanuskript.md",
  "07-trainerleitfaden.md",
];
const requiredOutputs = [];
const forbidden = [/AI[- ]?Act[- ]?zertifiziert/i, /garantiert compliant/i, /100\s*%\s*DSGVO/i];
let failed = false;

function fail(message) {
  failed = true;
  console.error(`FAIL: ${message}`);
}

for (const file of requiredSources) {
  const target = path.join(sourceDir, file);
  if (!fs.existsSync(target)) {
    fail(`missing source ${file}`);
    continue;
  }
  const text = fs.readFileSync(target, "utf8");
  for (const pattern of forbidden) if (pattern.test(text)) fail(`${file}: forbidden ${pattern}`);
}

const slidesPath = path.join(sourceDir, "06-folienmanuskript.md");
if (fs.existsSync(slidesPath)) {
  const slides = fs.readFileSync(slidesPath, "utf8").match(/^## Folie \d{2}\b/gm) ?? [];
  if (slides.length !== 40) fail(`expected 40 core slides, found ${slides.length}`);
}

const guidePath = path.join(sourceDir, "07-trainerleitfaden.md");
if (fs.existsSync(guidePath)) {
  const guide = fs.readFileSync(guidePath, "utf8");
  const durations = [...guide.matchAll(/Dauer:\s*(\d+)\s*Minuten/g)].map((m) => Number(m[1]));
  const total = durations.reduce((sum, value) => sum + value, 0);
  if (total !== 180) fail(`expected 180 guide minutes, found ${total}`);
}

for (const file of requiredOutputs) {
  const target = path.join(outputDir, file);
  if (!fs.existsSync(target) || fs.statSync(target).size === 0) fail(`missing output ${file}`);
}

if (failed) process.exitCode = 1;
else console.log("PASS: AI-Startklar training kit is consistent");
```

- [ ] **Step 2: Run and confirm the missing-source failure**

Run: `node scripts/ai-startklar/verify-training-kit.mjs`  
Expected: missing source failures for 06 and 07.

- [ ] **Step 3: Author the 40-slide manuscript**

Create headings `## Folie 01` through `## Folie 40` in the exact order defined in specification section 11.9. Every slide entry contains `Ziel`, `Kernaussage`, `Bildidee`, `On-slide-Text`, and `Sprechhinweis`. Keep on-slide copy concise; put nuance and boundaries in the speaking note.

- [ ] **Step 4: Author the 180-minute trainer guide**

Create eight modules with these exact duration markers so the verifier totals 180:

```text
Dauer: 15 Minuten
Dauer: 20 Minuten
Dauer: 25 Minuten
Dauer: 25 Minuten
Dauer: 10 Minuten
Dauer: 30 Minuten
Dauer: 30 Minuten
Dauer: 15 Minuten
Dauer: 10 Minuten
```

The nine markers represent eight teaching modules plus the break. For each teaching module include learning objective, slide range, trainer wording, interaction, expected response, time warning, common misconception, safety boundary, and offline fallback. Use the approved opening, prompt framework, data traffic light, review routine, five rules, and closing from specification sections 11–15.

- [ ] **Step 5: Verify and commit curriculum sources**

Run: `node scripts/ai-startklar/verify-training-kit.mjs`  
Expected: PASS with 40 slides and 180 minutes.

```bash
git add content/ai-startklar/training/06-folienmanuskript.md content/ai-startklar/training/07-trainerleitfaden.md scripts/ai-startklar/verify-training-kit.mjs
git commit -m "feat: add AI-Startklar curriculum sources"
```

---

### Task 2: Trainer Slide Deck

**Files:**
- Create: `deliverables/ai-startklar/schulung/06-trainerfolien.pptx`
- Create: `deliverables/ai-startklar/schulung/06-trainerfolien.pdf`
- Modify: `scripts/ai-startklar/verify-training-kit.mjs`

**Interfaces:**
- Consumes: `06-folienmanuskript.md` and MyHiwi design guidance.
- Produces: exactly 40 core slides in editable PPTX and presentation PDF.

- [ ] **Step 1: Add both deck outputs to `requiredOutputs` and confirm failure**

Set `requiredOutputs` initially to:

```js
[
  "06-trainerfolien.pptx",
  "06-trainerfolien.pdf",
]
```

Run and expect both missing-output failures.

- [ ] **Step 2: Build the deck with the presentation skill**

Use the current MyHiwi editorial design system: paper/subtle/ink section rhythm, Bricolage-style display hierarchy, readable body typography, restrained accent, large margins, no invented statistic, no stock-photo dependence, and no blanket compliance badge. Use diagrams only for the model flow, prompt structure, data traffic light, and seven-step review. Keep all legal nuance in notes or boundary slides.

- [ ] **Step 3: Export and structurally verify the deck**

Export to PDF. Confirm PPTX slide count is exactly 40 and speaker notes align with the manuscript. Verify that slide 23 is the break, slide 32 shows the five rules, slide 38 shows the review routine, and slide 40 closes with internal contacts/next step.

- [ ] **Step 4: Render and visually inspect all 40 slides**

Create a montage plus individual slide renders. Inspect title wrapping, contrast, diagram labels, footer/version consistency, table density, safe-area margins, and projector readability. Correct the PPTX source, re-export, and repeat until no defect remains.

- [ ] **Step 5: Verify and commit**

Run: `node scripts/ai-startklar/verify-training-kit.mjs`  
Expected: PASS.

```bash
git add deliverables/ai-startklar/schulung/06-trainerfolien.pptx deliverables/ai-startklar/schulung/06-trainerfolien.pdf scripts/ai-startklar/verify-training-kit.mjs
git commit -m "feat: add AI-Startklar trainer deck"
```

---

### Task 3: Synthetic Industry Practice Modules

**Files:**
- Create: `content/ai-startklar/training/praxisfaelle/01-buero-verwaltung.md`
- Create: `content/ai-startklar/training/praxisfaelle/02-vertrieb-kundenkommunikation.md`
- Create: `content/ai-startklar/training/praxisfaelle/03-marketing-content.md`
- Create: `content/ai-startklar/training/praxisfaelle/04-fuehrung-entscheidungsvorbereitung.md`
- Create: `content/ai-startklar/training/praxisfaelle/05-handwerk-dokumentation.md`
- Create: `content/ai-startklar/training/praxisfaelle/06-dienstleistung-kundenanfragen.md`
- Modify: `scripts/ai-startklar/verify-training-kit.mjs`

**Interfaces:**
- Consumes: specification section 12 and the shared six-part prompt/review routines.
- Produces: interchangeable 30-minute practice modules with identical facilitation interface.

- [ ] **Step 1: Add all six case sources to the verifier and confirm failure**

Extend `requiredSources` with the six `praxisfaelle/...` relative paths. Change source resolution to `path.join(sourceDir, file)`. Run and expect six missing-source failures.

- [ ] **Step 2: Author every case to the same contract**

Each file contains:

1. safe synthetic Ausgangslage,
2. participant role and desired outcome,
3. clearly labelled green/yellow/red information,
4. deliberately weak starting prompt,
5. expected six-part improved prompt,
6. plausible but imperfect model output,
7. seven-step review findings,
8. improved output,
9. human approval path,
10. basis and advanced variants,
11. trainer warning identifying what must not be inferred as approved use.

Use the concrete scenarios from specification 12.1–12.6. The leadership case structures options but never makes a personnel or other consequential decision. The craft case excludes safety-critical approval.

- [ ] **Step 3: Run verification and perform red-data review**

Run the verifier and manually search the six cases for real names, email addresses, credentials, health information, employee assessment, financial scoring, and legal cases. Expected: PASS and no real or red-zone data.

- [ ] **Step 4: Commit the practice library**

```bash
git add content/ai-startklar/training/praxisfaelle scripts/ai-startklar/verify-training-kit.mjs
git commit -m "feat: add AI-Startklar practice modules"
```

---

### Task 4: Trainer Guide and Participant Workbook

**Files:**
- Create: `content/ai-startklar/training/08-teilnehmerheft.md`
- Create: `deliverables/ai-startklar/schulung/07-trainerleitfaden.docx`
- Create: `deliverables/ai-startklar/schulung/07-trainerleitfaden.pdf`
- Create: `deliverables/ai-startklar/schulung/08-teilnehmerheft.docx`
- Create: `deliverables/ai-startklar/schulung/08-teilnehmerheft.pdf`
- Modify: `scripts/ai-startklar/verify-training-kit.mjs`

**Interfaces:**
- Consumes: trainer guide source, slide manuscript, practice library, and shared learning tools.
- Produces: delivery-ready facilitator guide and participant workbook with note/transfer space.

- [ ] **Step 1: Add workbook source and four outputs to the verifier**

Run before creation and expect one source plus four output failures.

- [ ] **Step 2: Author the participant workbook**

Use this order: learning objectives; simplified AI model; suitable task triage; prompt framework; basis prompt exercise; data traffic light exercise; chosen company case; seven-step review; five rules; internal contacts; personal next use case; 30-day transfer note. Exclude trainer answers and legal commentary.

- [ ] **Step 3: Generate the trainer guide**

Use `07-trainerleitfaden.md` as source and embed slide thumbnails or exact slide numbers, timings, speaking text, expected interactions, misconceptions, safety stops, technology fallback, and the six practice-module selection instructions. Include a one-page preflight checklist and a one-page post-session documentation checklist.

- [ ] **Step 4: Generate the participant workbook**

Use the document/PDF skills. Provide writable fields, generous note space, readable tables, and repeated reminders not to enter real sensitive data. Keep the trainer answer key out of the participant file.

- [ ] **Step 5: Render, inspect, verify, and commit**

Inspect every page at 100 percent zoom and as a printed-page preview. Run the verifier; expected PASS.

```bash
git add content/ai-startklar/training/08-teilnehmerheft.md deliverables/ai-startklar/schulung/07-trainerleitfaden.docx deliverables/ai-startklar/schulung/07-trainerleitfaden.pdf deliverables/ai-startklar/schulung/08-teilnehmerheft.docx deliverables/ai-startklar/schulung/08-teilnehmerheft.pdf scripts/ai-startklar/verify-training-kit.mjs
git commit -m "feat: add AI-Startklar workshop guides"
```

---

### Task 5: Participant Job Aids and Learning Check

**Files:**
- Create: `content/ai-startklar/training/09-promptvorlage.md`
- Create: `content/ai-startklar/training/10-datenampel.md`
- Create: `content/ai-startklar/training/11-pruefcheckliste.md`
- Create: `content/ai-startklar/training/12-lerncheck.md`
- Create: `content/ai-startklar/training/12-loesungsschluessel.md`
- Create: `deliverables/ai-startklar/schulung/09-promptvorlage.docx`
- Create: `deliverables/ai-startklar/schulung/09-promptvorlage.pdf`
- Create: `deliverables/ai-startklar/schulung/10-datenampel.docx`
- Create: `deliverables/ai-startklar/schulung/10-datenampel.pdf`
- Create: `deliverables/ai-startklar/schulung/11-pruefcheckliste.docx`
- Create: `deliverables/ai-startklar/schulung/11-pruefcheckliste.pdf`
- Create: `deliverables/ai-startklar/schulung/12-lerncheck.docx`
- Create: `deliverables/ai-startklar/schulung/12-lerncheck.pdf`
- Create: `deliverables/ai-startklar/schulung/12-loesungsschluessel.docx`
- Create: `deliverables/ai-startklar/schulung/12-loesungsschluessel.pdf` (trainer-only)
- Modify: `scripts/ai-startklar/verify-training-kit.mjs`

**Interfaces:**
- Consumes: specification sections 11.4, 11.7, and 13–15.
- Produces: four participant job aids plus separate trainer answer key.

- [ ] **Step 1: Add five sources and ten outputs to the verifier**

Output pairs:

```text
09-promptvorlage.docx / 09-promptvorlage.pdf
10-datenampel.docx / 10-datenampel.pdf
11-pruefcheckliste.docx / 11-pruefcheckliste.pdf
12-lerncheck.docx / 12-lerncheck.pdf
12-loesungsschluessel.docx / 12-loesungsschluessel.pdf
```

Run and expect all newly added entries to fail as missing.

- [ ] **Step 2: Author exact source content**

- Prompt template: Aufgabe, Kontext, Material, Anforderungen, Ausgabeformat, Prüfkriterien plus the approved complete prompt sentence.
- Data traffic light: complete green/yellow/red definitions and examples; yellow explicitly means stop and clarify first.
- Review checklist: facts, sources, completeness, bias, rights/data, tone/effect, responsibility.
- Learning check: the ten approved questions only, without answers.
- Answer key: all ten approved answers from specification 15.2 plus correction notes for common mistakes.

- [ ] **Step 3: Generate one-page job aids and learning files**

Use document/PDF skills. Prompt, traffic light, and review checklist must each fit on one page and remain readable in grayscale. The learning check may use two pages. Mark the answer key `Nur für Trainer` on every page.

- [ ] **Step 4: Render, inspect, verify, and commit**

Check that green/yellow/red remain distinguishable by labels and shape without colour, answer pages never appear in participant outputs, and no wording suggests a formal exam or certificate. Run the verifier; expected PASS.

```bash
git add content/ai-startklar/training/09-promptvorlage.md content/ai-startklar/training/10-datenampel.md content/ai-startklar/training/11-pruefcheckliste.md content/ai-startklar/training/12-lerncheck.md content/ai-startklar/training/12-loesungsschluessel.md deliverables/ai-startklar/schulung scripts/ai-startklar/verify-training-kit.mjs
git commit -m "feat: add AI-Startklar participant job aids"
```

---

### Task 6: Timed Rehearsal and Final Training Acceptance

**Files:**
- Create: `deliverables/ai-startklar/schulung/PROBELAUF-PROTOKOLL.md`
- Modify: `content/ai-startklar/training/06-folienmanuskript.md` if timing/content defects are found.
- Modify: `content/ai-startklar/training/07-trainerleitfaden.md` if facilitation defects are found.
- Modify: `deliverables/ai-startklar/schulung/06-trainerfolien.pptx` if a deck defect is found.
- Modify: `deliverables/ai-startklar/schulung/06-trainerfolien.pdf` if a deck defect is found.
- Modify: `deliverables/ai-startklar/schulung/07-trainerleitfaden.docx` if a guide defect is found.
- Modify: `deliverables/ai-startklar/schulung/07-trainerleitfaden.pdf` if a guide defect is found.
- Modify: `deliverables/ai-startklar/schulung/08-teilnehmerheft.docx` if a workbook defect is found.
- Modify: `deliverables/ai-startklar/schulung/08-teilnehmerheft.pdf` if a workbook defect is found.
- Modify: `deliverables/ai-startklar/schulung/09-promptvorlage.docx` and `deliverables/ai-startklar/schulung/09-promptvorlage.pdf` if a prompt-aid defect is found.
- Modify: `deliverables/ai-startklar/schulung/10-datenampel.docx` and `deliverables/ai-startklar/schulung/10-datenampel.pdf` if a traffic-light defect is found.
- Modify: `deliverables/ai-startklar/schulung/11-pruefcheckliste.docx` and `deliverables/ai-startklar/schulung/11-pruefcheckliste.pdf` if a review-aid defect is found.
- Modify: `deliverables/ai-startklar/schulung/12-lerncheck.docx`, `deliverables/ai-startklar/schulung/12-lerncheck.pdf`, `deliverables/ai-startklar/schulung/12-loesungsschluessel.docx`, and `deliverables/ai-startklar/schulung/12-loesungsschluessel.pdf` if a learning-check defect is found.

**Interfaces:**
- Consumes: all training sources and outputs.
- Produces: evidence of one complete 180-minute rehearsal plus final acceptance status.

- [ ] **Step 1: Run a complete rehearsal with the office/administration case**

Record actual start/end per module, questions that caused delay, unclear transitions, unsafe participant prompts, technology fallback result, and final total. Do not shorten the 30-minute safety or 30-minute practice modules to recover time.

- [ ] **Step 2: Record defects and acceptance in the rehearsal protocol**

The protocol contains planned vs actual timing, every defect, exact correction, retest result, deck version, guide version, tool used, and reviewer name/date. Acceptance requires 175–185 actual minutes including the break, with all learning objectives delivered.

- [ ] **Step 3: Run all machine and visual checks**

Run: `node scripts/ai-startklar/verify-training-kit.mjs`  
Expected: PASS with 40 core slides, 180 guide minutes, all sources, and all outputs.

Re-render the final deck and all PDFs. Inspect no clipping, no red-zone real data, no forbidden claim, no participant answer leakage, and usable offline fallback.

- [ ] **Step 4: Commit rehearsal evidence and corrections**

```bash
git add content/ai-startklar/training deliverables/ai-startklar/schulung scripts/ai-startklar/verify-training-kit.mjs
git commit -m "test: rehearse AI-Startklar training kit"
```
