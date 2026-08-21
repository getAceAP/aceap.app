export type UpdatePost = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  body: string[];
  tags?: string[];
  /** When true, eligible for the “what’s new” popup until dismissed. */
  popup?: boolean;
};

/**
 * Site updates / changelog-style posts.
 * Add a new object at the top to publish. Set `popup: true` on posts you want
 * to auto-show once for returning visitors. Email newsletter can plug in later.
 */
export const updatePosts: UpdatePost[] = [
  {
    id: "2026-08-precalc-unit4",
    title: "AP Precalculus Unit 4 is live",
    date: "2026-08-20",
    excerpt:
      "Parameters, vectors, and matrices — formula cards, generated quizzes, and a teaching guide. Still optional / not on the AP exam.",
    body: [
      "Unit 4 of AP Precalculus is now available alongside Units 1–3: parametric equations, conics, vectors in the plane, and 2×2 matrices.",
      "Quizzes mix authored items with generated variants. Formula flashcards and a study guide sit next to the unit in the library and hubs.",
      "College Board does not assess Unit 4 on the AP Precalculus exam — use it for class credit, dual enrollment, or college readiness.",
    ],
    tags: ["Precalculus", "Unit 4"],
    popup: true,
  },
  {
    id: "2026-08-precalc-live",
    title: "AP Precalculus is live",
    date: "2026-08-20",
    excerpt:
      "Units 1–3 with generated practice, formula cards, Desmos on calculator items, and full study guides.",
    body: [
      "AceAP now includes AP Precalculus for the three exam units: polynomial and rational functions, exponential and logarithmic functions, and trigonometric and polar functions.",
      "Quizzes mix authored items with generated variants so you can drill fresh problems. Calculator-active questions open Desmos in the study tools panel. Formula flashcards and teaching guides sit next to each unit.",
      "Unit 4 (parameters, vectors, matrices) is optional and not on the AP exam — now available for courses that teach it.",
    ],
    tags: ["Precalculus", "New course"],
    popup: false,
  },
  {
    id: "2026-08-hubs",
    title: "Guides, practice tests, and flashcard hubs",
    date: "2026-08-20",
    excerpt:
      "Browse Study Guides, Practice Tests, and Flashcards by course from the Start here menu — same layout for World, Psych, and Precalc.",
    body: [
      "Instead of hunting through each library page, open Flashcards, Study Guides, or Practice Tests from the sidebar to pick a course, then a unit.",
      "Search (⌘K / Ctrl+K) also jumps straight to any guide, quiz, or deck.",
    ],
    tags: ["Product"],
    popup: false,
  },
];

export const latestPopupPost = () => updatePosts.find((post) => post.popup) ?? null;

export const updateDismissKey = (postId: string) => `aceap-update-dismissed:${postId}`;
