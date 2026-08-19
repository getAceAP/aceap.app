import { Flashcard, Question, Unit } from "./content";
import { psychologyUnit1Vocabulary } from "./psychology-unit1";
import { psychologyUnit2Vocabulary } from "./psychology-unit2";
import { psychologyUnit3Vocabulary } from "./psychology-unit3";
import { psychologyUnit4Vocabulary } from "./psychology-unit4";
import { psychologyUnit5Vocabulary } from "./psychology-unit5";
import { psychologyUnit1Questions } from "./psychology-questions-unit1";
import { psychologyUnit2Questions } from "./psychology-questions-unit2";
import { psychologyUnit3Questions } from "./psychology-questions-unit3";
import { psychologyUnit4Questions } from "./psychology-questions-unit4";
import { psychologyUnit5Questions } from "./psychology-questions-unit5";
import { psychologyExamStimulusSets } from "./psychology-exam-stimuli";

type VocabPair = readonly [string, string];

const toFlashcards = (unitId: number, vocab: readonly VocabPair[]): Flashcard[] =>
  vocab.map(([prompt, answer], index) => ({
    id: `psych-u${unitId}-f${index + 1}`,
    prompt,
    answer,
  }));

const unitMeta: Array<{
  id: number;
  title: string;
  period: string;
  description: string;
  vocab: readonly VocabPair[];
  questions: Question[];
}> = [
  {
    id: 1,
    title: "Biological Bases of Behavior",
    period: "15–25%",
    description: "Neurons, the nervous and endocrine systems, the brain, and genetic influences on behavior.",
    vocab: psychologyUnit1Vocabulary,
    questions: psychologyUnit1Questions,
  },
  {
    id: 2,
    title: "Cognition",
    period: "15–25%",
    description: "Perception, memory, thinking, and intelligence.",
    vocab: psychologyUnit2Vocabulary,
    questions: psychologyUnit2Questions,
  },
  {
    id: 3,
    title: "Development and Learning",
    period: "15–25%",
    description: "Lifespan development, language, attachment, and classical, operant, and observational learning.",
    vocab: psychologyUnit3Vocabulary,
    questions: psychologyUnit3Questions,
  },
  {
    id: 4,
    title: "Social Psychology and Personality",
    period: "15–25%",
    description: "Social influence, attribution, personality theories, motivation, and emotion.",
    vocab: psychologyUnit4Vocabulary,
    questions: psychologyUnit4Questions,
  },
  {
    id: 5,
    title: "Mental and Physical Health",
    period: "15–25%",
    description: "Stress, psychological disorders, and approaches to treatment.",
    vocab: psychologyUnit5Vocabulary,
    questions: psychologyUnit5Questions,
  },
];

export const psychologyUnits: Unit[] = unitMeta.map((unit) => ({
  id: unit.id,
  title: unit.title,
  period: unit.period,
  description: unit.description,
  questions: unit.questions,
  flashcards: toFlashcards(unit.id, unit.vocab),
}));

export const PSYCH_REVIEW_SLUG = "all";

export const psychologyReviewUnit: Unit = {
  id: 0,
  title: "Full Course Review",
  period: "All Units",
  description: "All five units in one place: combined vocabulary, a mixed practice exam, and a full study guide.",
  questions: psychologyUnits.flatMap((unit) => unit.questions),
  flashcards: psychologyUnits.flatMap((unit) => unit.flashcards),
};

export const getPsychologyUnit = (unitId?: string) => {
  if (unitId === PSYCH_REVIEW_SLUG) return psychologyReviewUnit;
  return psychologyUnits.find((unit) => unit.id === Number(unitId));
};

export const isPsychologyReview = (unit?: Unit | null) => unit?.id === psychologyReviewUnit.id;

const shuffle = <T,>(items: T[]): T[] => [...items].sort(() => 0.5 - Math.random());

export const buildPsychologyPracticeExam = (countPerUnit = 10): Question[] => {
  const standalone = psychologyUnits.flatMap((unit) =>
    shuffle(unit.questions).slice(0, countPerUnit)
  );

  const stimulusBlocks = shuffle(psychologyExamStimulusSets).slice(0, 10);
  const blocks: Question[][] = [
    ...standalone.map((question) => [question]),
    ...stimulusBlocks.map((set) => set.questions),
  ];

  return shuffle(blocks).flat();
};