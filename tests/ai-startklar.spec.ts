import { expect, test } from "@playwright/test";
import {
  AI_STARTKLAR,
  AI_STARTKLAR_FAQ,
  AI_STARTKLAR_FOCUS_OPTIONS,
  formatEuro,
} from "../lib/ai-startklar/product";

test("@data hält die freigegebenen Produktfakten stabil", () => {
  expect(AI_STARTKLAR.name).toBe("MyHiwi AI-Startklar");
  expect(AI_STARTKLAR.durationMinutes).toBe(180);
  expect(AI_STARTKLAR.capacity).toBe(15);
  expect(AI_STARTKLAR.prices).toEqual({ online: 1490, onsite: 1790 });
  expect(AI_STARTKLAR.outcomes).toHaveLength(6);
  expect(AI_STARTKLAR.agenda).toHaveLength(7);
  expect(AI_STARTKLAR.boundaries).toHaveLength(6);
  expect(AI_STARTKLAR_FAQ).toHaveLength(6);
  expect(AI_STARTKLAR_FOCUS_OPTIONS).toHaveLength(6);
  expect(formatEuro(1490)).toBe("1.490 €");
});
