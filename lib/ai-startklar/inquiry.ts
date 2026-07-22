import { AI_STARTKLAR_FOCUS_OPTIONS } from "./product";

export type InquiryFormat = "online" | "vor-ort" | "offen";
export type InquiryFocus = (typeof AI_STARTKLAR_FOCUS_OPTIONS)[number]["value"];

export type AiStartklarInquiry = {
  company: string;
  name: string;
  email: string;
  participants: number;
  format: InquiryFormat;
  timeframe: string;
  tools: string;
  focus: InquiryFocus;
  phone: string | null;
  message: string | null;
  page: string | null;
};

export type InquiryParseResult =
  | { ok: true; data: AiStartklarInquiry }
  | { ok: false; error: string };

const formats: InquiryFormat[] = ["online", "vor-ort", "offen"];
const focuses = new Set<string>(
  AI_STARTKLAR_FOCUS_OPTIONS.map((item) => item.value),
);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const integerPattern = /^\d+$/;

function clean(value: unknown, max: number): string | null {
  if (typeof value !== "string") return null;
  const result = value.trim();
  if (!result || result.length > max) return null;
  return result;
}

function parseParticipants(value: unknown): number | null {
  if (typeof value === "number") {
    return Number.isInteger(value) ? value : null;
  }
  if (typeof value !== "string") return null;

  const normalized = value.trim();
  if (!integerPattern.test(normalized)) return null;

  const participants = Number(normalized);
  return Number.isSafeInteger(participants) ? participants : null;
}

export function parseAiStartklarInquiry(input: unknown): InquiryParseResult {
  if (typeof input !== "object" || input === null || Array.isArray(input)) {
    return { ok: false, error: "Bitte füllen Sie alle Pflichtfelder aus." };
  }

  const body = input as Record<string, unknown>;
  if (typeof body.message === "string" && body.message.trim().length > 1600) {
    return { ok: false, error: "Die Nachricht ist zu lang." };
  }

  const company = clean(body.company, 160);
  const name = clean(body.name, 120);
  const email = clean(body.email, 240);
  const timeframe = clean(body.timeframe, 120);
  const tools = clean(body.tools, 500);
  const format = clean(body.format, 20) as InquiryFormat | null;
  const focus = clean(body.focus, 80) as InquiryFocus | null;
  const hasParticipants =
    typeof body.participants === "number" ||
    (typeof body.participants === "string" && body.participants.trim() !== "");
  const participants = parseParticipants(body.participants);

  if (
    !company ||
    !name ||
    !email ||
    !timeframe ||
    !tools ||
    !format ||
    !focus ||
    !hasParticipants ||
    body.consent !== true
  ) {
    return { ok: false, error: "Bitte füllen Sie alle Pflichtfelder aus." };
  }
  if (!emailPattern.test(email)) {
    return {
      ok: false,
      error: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    };
  }
  if (participants === null || participants < 1 || participants > 500) {
    return {
      ok: false,
      error: "Bitte geben Sie eine gültige Teilnehmerzahl ein.",
    };
  }
  if (!formats.includes(format)) {
    return { ok: false, error: "Bitte wählen Sie ein gültiges Format." };
  }
  if (!focuses.has(focus)) {
    return {
      ok: false,
      error: "Bitte wählen Sie einen gültigen Schwerpunkt.",
    };
  }

  return {
    ok: true,
    data: {
      company,
      name,
      email,
      participants,
      format,
      timeframe,
      tools,
      focus,
      phone: clean(body.phone, 80),
      message: clean(body.message, 1600),
      page: clean(body.page, 500),
    },
  };
}
