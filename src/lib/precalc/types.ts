import type { PrecalcQuestion } from "@/data/precalc";
import type { Rng } from "./rng";

export type Template = (rng: Rng) => PrecalcQuestion;
