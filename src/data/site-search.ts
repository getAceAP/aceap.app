import { units } from "@/data/content";
import { psychologyUnits, PSYCH_REVIEW_SLUG } from "@/data/psychology";
import { precalcUnits } from "@/data/precalc";

export type SearchGroup =
  | "Pages"
  | "Courses"
  | "Study Guides"
  | "Practice Tests"
  | "Flashcards";

export type SiteSearchItem = {
  id: string;
  title: string;
  subtitle?: string;
  href: string;
  group: SearchGroup;
  keywords?: string[];
};

const pages: SiteSearchItem[] = [
  {
    id: "page-home",
    title: "Home",
    subtitle: "Your courses and library",
    href: "/home",
    group: "Pages",
    keywords: ["dashboard", "library"],
  },
  {
    id: "page-guides",
    title: "Study Guides",
    subtitle: "Browse all course guides",
    href: "/guides",
    group: "Pages",
    keywords: ["review", "notes", "ced"],
  },
  {
    id: "page-practice",
    title: "Practice Tests",
    subtitle: "Browse all quizzes",
    href: "/practice-tests",
    group: "Pages",
    keywords: ["quiz", "exam", "mcq"],
  },
  {
    id: "page-flashcards",
    title: "Flashcards",
    subtitle: "Browse all decks",
    href: "/flashcards",
    group: "Pages",
    keywords: ["cards", "vocab", "formulas"],
  },
  {
    id: "page-settings",
    title: "Settings",
    subtitle: "Account and preferences",
    href: "/settings",
    group: "Pages",
    keywords: ["profile", "account"],
  },
  {
    id: "page-updates",
    title: "Updates",
    subtitle: "What’s new on AceAP",
    href: "/updates",
    group: "Pages",
    keywords: ["blog", "changelog", "news", "newsletter"],
  },
];

const courses: SiteSearchItem[] = [
  {
    id: "course-world",
    title: "AP World History",
    subtitle: "Units, guides, quizzes, and cards",
    href: "/units/ap-world",
    group: "Courses",
    keywords: ["world", "history", "apwh"],
  },
  {
    id: "course-psych",
    title: "AP Psychology",
    subtitle: "Units, guides, quizzes, and cards",
    href: "/units/ap-psych",
    group: "Courses",
    keywords: ["psych", "psychology", "brain"],
  },
  {
    id: "course-precalc",
    title: "AP Precalculus",
    subtitle: "Units, guides, quizzes, and formulas",
    href: "/units/ap-precalc",
    group: "Courses",
    keywords: ["precalc", "precalculus", "math", "trig"],
  },
];

const worldItems: SiteSearchItem[] = units.flatMap((unit) => [
  {
    id: `world-guide-${unit.id}`,
    title: `World · Unit ${unit.id}: ${unit.title}`,
    subtitle: `Study guide · ${unit.period}`,
    href: `/units/ap-world/guide/${unit.id}`,
    group: "Study Guides" as const,
    keywords: ["world", "guide", unit.title, unit.period],
  },
  {
    id: `world-quiz-${unit.id}`,
    title: `World · Unit ${unit.id}: ${unit.title}`,
    subtitle: "Practice quiz",
    href: `/units/ap-world/quiz/${unit.id}`,
    group: "Practice Tests" as const,
    keywords: ["world", "quiz", unit.title],
  },
  {
    id: `world-cards-${unit.id}`,
    title: `World · Unit ${unit.id}: ${unit.title}`,
    subtitle: `${unit.flashcards.length} flashcards`,
    href: `/units/ap-world/flashcards/${unit.id}`,
    group: "Flashcards" as const,
    keywords: ["world", "flashcards", "vocab", unit.title],
  },
]);

const psychItems: SiteSearchItem[] = [
  ...psychologyUnits.flatMap((unit) => [
    {
      id: `psych-guide-${unit.id}`,
      title: `Psych · Unit ${unit.id}: ${unit.title}`,
      subtitle: `Study guide · ${unit.period} of the exam`,
      href: `/units/ap-psych/guide/${unit.id}`,
      group: "Study Guides" as const,
      keywords: ["psych", "psychology", "guide", unit.title],
    },
    {
      id: `psych-quiz-${unit.id}`,
      title: `Psych · Unit ${unit.id}: ${unit.title}`,
      subtitle: "Practice quiz",
      href: `/units/ap-psych/quiz/${unit.id}`,
      group: "Practice Tests" as const,
      keywords: ["psych", "quiz", unit.title],
    },
    {
      id: `psych-cards-${unit.id}`,
      title: `Psych · Unit ${unit.id}: ${unit.title}`,
      subtitle: `${unit.flashcards.length} flashcards`,
      href: `/units/ap-psych/flashcards/${unit.id}`,
      group: "Flashcards" as const,
      keywords: ["psych", "flashcards", "vocab", unit.title],
    },
  ]),
  {
    id: "psych-guide-all",
    title: "Psych · Full Course Review",
    subtitle: "Combined study guide",
    href: `/units/ap-psych/guide/${PSYCH_REVIEW_SLUG}`,
    group: "Study Guides",
    keywords: ["psych", "review", "all"],
  },
  {
    id: "psych-quiz-all",
    title: "Psych · Full Course Practice Exam",
    subtitle: "Mixed practice quiz",
    href: `/units/ap-psych/quiz/${PSYCH_REVIEW_SLUG}`,
    group: "Practice Tests",
    keywords: ["psych", "exam", "review", "all"],
  },
  {
    id: "psych-cards-all",
    title: "Psych · Full Course Review",
    subtitle: "Combined flashcard deck",
    href: `/units/ap-psych/flashcards/${PSYCH_REVIEW_SLUG}`,
    group: "Flashcards",
    keywords: ["psych", "flashcards", "review", "all"],
  },
];

const precalcItems: SiteSearchItem[] = precalcUnits.flatMap((unit) => [
  {
    id: `precalc-guide-${unit.id}`,
    title: `Precalc · Unit ${unit.id}: ${unit.title}`,
    subtitle: `Study guide · ${unit.period}`,
    href: `/units/ap-precalc/guide/${unit.id}`,
    group: "Study Guides" as const,
    keywords: ["precalc", "precalculus", "math", "guide", unit.title],
  },
  {
    id: `precalc-quiz-${unit.id}`,
    title: `Precalc · Unit ${unit.id}: ${unit.title}`,
    subtitle: "Generated practice quiz",
    href: `/units/ap-precalc/quiz/${unit.id}`,
    group: "Practice Tests" as const,
    keywords: ["precalc", "quiz", "math", unit.title],
  },
  {
    id: `precalc-cards-${unit.id}`,
    title: `Precalc · Unit ${unit.id}: ${unit.title}`,
    subtitle: `${unit.flashcards.length} formula cards`,
    href: `/units/ap-precalc/flashcards/${unit.id}`,
    group: "Flashcards" as const,
    keywords: ["precalc", "formulas", "flashcards", unit.title],
  },
]);

export const siteSearchItems: SiteSearchItem[] = [
  ...pages,
  ...courses,
  ...worldItems,
  ...psychItems,
  ...precalcItems,
];

export const searchGroups: SearchGroup[] = [
  "Pages",
  "Courses",
  "Study Guides",
  "Practice Tests",
  "Flashcards",
];
