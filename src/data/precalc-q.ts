import type { PrecalcQuestion } from "./precalc";

export const mcq = (
  id: string,
  skill: string,
  calculator: boolean,
  question: string,
  options: string[],
  correctAnswer: string,
  explanation: string
): PrecalcQuestion => ({
  id,
  skill,
  calculator,
  kind: "mcq",
  question,
  options,
  correctAnswer,
  explanation,
});

export const numeric = (
  id: string,
  skill: string,
  calculator: boolean,
  question: string,
  numericAnswer: number,
  explanation: string,
  tolerance = 0.01
): PrecalcQuestion => ({
  id,
  skill,
  calculator,
  kind: "numeric",
  question,
  correctAnswer: String(numericAnswer),
  numericAnswer,
  tolerance,
  explanation,
});
