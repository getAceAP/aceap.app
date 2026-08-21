import type { PrecalcQuestion } from "@/data/precalc";
import { getPrecalcUnit } from "@/data/precalc";
import { makeRng } from "./rng";
import { unit1Templates } from "./templates/unit1";
import { unit2Templates } from "./templates/unit2";
import { unit3Templates } from "./templates/unit3";
import type { Template } from "./types";

const templatesByUnit: Record<number, Template[]> = {
  1: unit1Templates,
  2: unit2Templates,
  3: unit3Templates,
};

export const STUDY_LENGTH = 15;
export const EXAM_LENGTH = 20;
export const EXAM_MINUTES = 40;

const shuffleOptions = (q: PrecalcQuestion, seed: number): PrecalcQuestion => {
  if (!q.options) return q;
  const rng = makeRng(seed);
  return { ...q, options: rng.shuffle(q.options) };
};

export function generateItem(unitId: number, skill?: string, seed?: number): PrecalcQuestion {
  const rng = makeRng(seed);
  const templates = templatesByUnit[unitId] ?? [];
  const pool = skill ? templates.filter((t) => t(makeRng(1)).skill.startsWith(skill)) : templates;
  const pickFrom = pool.length ? pool : templates;
  return pickFrom[rng.int(0, pickFrom.length - 1)](rng);
}

export function buildPrecalcSession(unitId: number, mode: "study" | "exam", seed?: number): PrecalcQuestion[] {
  const rng = makeRng(seed);
  const unit = getPrecalcUnit(unitId);
  const templates = templatesByUnit[unitId] ?? [];
  const count = mode === "exam" ? EXAM_LENGTH : STUDY_LENGTH;
  if (!unit || templates.length === 0) return [];

  const authoredTake = mode === "exam" ? Math.min(8, unit.authored.length) : Math.min(4, unit.authored.length);
  const authored = rng.shuffle(unit.authored).slice(0, authoredTake).map((q, i) => shuffleOptions(q, rng.int(1, 1e9) + i));

  const items: PrecalcQuestion[] = [...authored];
  const shuffledTemplates = rng.shuffle(templates);

  if (mode === "exam") {
    const calcNeeded = 12;
    const noCalcNeeded = 8;
    const calcAuth = items.filter((q) => q.calculator);
    const noCalcAuth = items.filter((q) => !q.calculator);
    const calc: PrecalcQuestion[] = [...calcAuth];
    const noCalc: PrecalcQuestion[] = [...noCalcAuth];

    let t = 0;
    while (calc.length + noCalc.length < count) {
      const q = shuffledTemplates[t % shuffledTemplates.length](makeRng(rng.int(1, 1e9) + t));
      t += 1;
      if (q.calculator && calc.length < calcNeeded) calc.push(q);
      else if (!q.calculator && noCalc.length < noCalcNeeded) noCalc.push(q);
      else if (calc.length + noCalc.length < count) {
        if (calc.length < calcNeeded) calc.push(q);
        else noCalc.push(q);
      }
      if (t > 80) break;
    }
    return rng.shuffle([...calc, ...noCalc]).slice(0, count);
  }

  let t = 0;
  while (items.length < count) {
    items.push(shuffledTemplates[t % shuffledTemplates.length](makeRng(rng.int(1, 1e9) + t)));
    t += 1;
  }
  return rng.shuffle(items).slice(0, count);
}

export function answersMatch(question: PrecalcQuestion, response: string): boolean {
  if (question.kind === "numeric") {
    const n = Number(String(response).trim());
    if (!Number.isFinite(n) || question.numericAnswer == null) return false;
    return Math.abs(n - question.numericAnswer) <= (question.tolerance ?? 0.01);
  }
  return response === question.correctAnswer;
}
