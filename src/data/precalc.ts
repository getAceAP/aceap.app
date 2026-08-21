import { Flashcard } from "./content";
import { precalcAuthoredUnit1 } from "./precalc-authored-unit1";
import { precalcAuthoredUnit2 } from "./precalc-authored-unit2";
import { precalcAuthoredUnit3 } from "./precalc-authored-unit3";
import { precalcAuthoredUnit4 } from "./precalc-authored-unit4";
import {
  precalcFormulasUnit1,
  precalcFormulasUnit2,
  precalcFormulasUnit3,
  precalcFormulasUnit4,
} from "./precalc-formulas";

export type PrecalcQuestionKind = "mcq" | "numeric";

export interface PrecalcQuestion {
  id: string;
  question: string;
  options?: string[];
  correctAnswer: string;
  numericAnswer?: number;
  tolerance?: number;
  explanation: string;
  skill: string;
  calculator: boolean;
  kind: PrecalcQuestionKind;
}

export interface PrecalcUnit {
  id: number;
  title: string;
  period: string;
  description: string;
  flashcards: Flashcard[];
  authored: PrecalcQuestion[];
}

export const precalcUnits: PrecalcUnit[] = [
  {
    id: 1,
    title: "Polynomial and Rational Functions",
    period: "30–40%",
    description: "Rates of change, polynomial zeros and end behavior, and rational functions.",
    flashcards: precalcFormulasUnit1,
    authored: precalcAuthoredUnit1,
  },
  {
    id: 2,
    title: "Exponential and Logarithmic Functions",
    period: "20–27%",
    description: "Growth and decay, inverses, log laws, and modeling.",
    flashcards: precalcFormulasUnit2,
    authored: precalcAuthoredUnit2,
  },
  {
    id: 3,
    title: "Trigonometric and Polar Functions",
    period: "30–35%",
    description: "Periodic functions, sinusoids, identities, and polar coordinates.",
    flashcards: precalcFormulasUnit3,
    authored: precalcAuthoredUnit3,
  },
  {
    id: 4,
    title: "Functions Involving Parameters, Vectors, and Matrices",
    period: "Not on AP exam",
    description:
      "Parametric equations, conics, vectors, and matrices. Optional CED unit — not assessed on the AP Precalculus exam.",
    flashcards: precalcFormulasUnit4,
    authored: precalcAuthoredUnit4,
  },
];

export const getPrecalcUnit = (unitId: string | number | undefined) =>
  precalcUnits.find((unit) => unit.id === Number(unitId));
