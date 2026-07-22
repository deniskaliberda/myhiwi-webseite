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
