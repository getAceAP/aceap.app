import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataDir = path.join(root, "src", "data");

const TARGET = 150;

const parseVocab = (file) => {
  const text = fs.readFileSync(file, "utf8");
  const pairs = [];
  const re = /\["((?:\\.|[^"\\])*)",\s*"((?:\\.|[^"\\])*)"\]/g;
  let match;
  while ((match = re.exec(text))) {
    pairs.push([match[1], match[2]]);
  }
  return pairs;
};

const shuffle = (items) => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const pickDistractors = (pool, exclude, count) => {
  const options = shuffle(pool.filter((item) => item !== exclude));
  return options.slice(0, count);
};

const tsString = (value) => JSON.stringify(value);

const writeQuestions = (unitId, items) => {
  const lines = [
    `import { Question } from "./content";`,
    ``,
    `const makeQuestions = (unitId: number, items: Omit<Question, "id">[]): Question[] =>`,
    `  items.map((item, index) => ({`,
    `    ...item,`,
    `    id: \`psych-u\${unitId}-q\${index + 1}\`,`,
    `  }));`,
    ``,
    `export const psychologyUnit${unitId}Questions = makeQuestions(${unitId}, [`,
  ];

  items.forEach((item, index) => {
    lines.push(`  {`);
    lines.push(`    question: ${tsString(item.question)},`);
    lines.push(`    options: [${item.options.map(tsString).join(", ")}],`);
    lines.push(`    correctAnswer: ${tsString(item.correctAnswer)},`);
    lines.push(`    explanation: ${tsString(item.explanation)},`);
    lines.push(`  }${index === items.length - 1 ? "" : ","}`);
  });

  lines.push(`]);`);
  lines.push(``);

  const outPath = path.join(dataDir, `psychology-questions-unit${unitId}.ts`);
  fs.writeFileSync(outPath, lines.join("\n"));
  return outPath;
};

const existingFiles = {
  1: "psychology-questions-1-3.ts",
  2: "psychology-questions-1-3.ts",
  3: "psychology-questions-1-3.ts",
  4: "psychology-questions-4-5.ts",
  5: "psychology-questions-4-5.ts",
};

const parseExisting = (unitId) => {
  const text = fs.readFileSync(path.join(dataDir, existingFiles[unitId]), "utf8");
  const start = text.indexOf(`export const psychologyUnit${unitId}Questions`);
  if (start < 0) return [];
  const rest = text.slice(start);
  const nextExport = rest.indexOf("export const", 1);
  const block = nextExport > 0 ? rest.slice(0, nextExport) : rest;
  const items = [];
  const objectRe = /\{\s*question:\s*"((?:\\.|[^"\\])*)"[\s\S]*?options:\s*\[([\s\S]*?)\]\s*,\s*correctAnswer:\s*"((?:\\.|[^"\\])*)"\s*,\s*explanation:\s*"((?:\\.|[^"\\])*)"\s*\}/g;
  let match;
  while ((match = objectRe.exec(block))) {
    const options = [...match[2].matchAll(/"((?:\\.|[^"\\])*)"/g)].map((m) => m[1]);
    items.push({
      question: JSON.parse(`"${match[1]}"`),
      options,
      correctAnswer: JSON.parse(`"${match[3]}"`),
      explanation: JSON.parse(`"${match[4]}"`),
    });
  }
  return items;
};

const buildGenerated = (vocab, existingQuestions) => {
  const terms = vocab.map(([term]) => term);
  const definitions = vocab.map(([, definition]) => definition);
  const usedQuestions = new Set(existingQuestions.map((item) => item.question));
  const generated = [];

  const add = (item) => {
    if (usedQuestions.has(item.question) || generated.length + existingQuestions.length >= TARGET) return;
    usedQuestions.add(item.question);
    generated.push(item);
  };

  vocab.forEach(([term, definition], index) => {
    const distractorTerms = pickDistractors(terms, term, 3);
    if (distractorTerms.length === 3) {
      add({
        question: `Which term matches this definition: "${definition}"`,
        options: shuffle([term, ...distractorTerms]),
        correctAnswer: term,
        explanation: `${term} is defined as: ${definition}`,
      });
    }

    if (index % 2 === 0) {
      const distractorDefs = pickDistractors(definitions, definition, 3);
      if (distractorDefs.length === 3) {
        add({
          question: `${term} is best defined as`,
          options: shuffle([definition, ...distractorDefs]),
          correctAnswer: definition,
          explanation: `${term}: ${definition}`,
        });
      }
    }
  });

  vocab.forEach(([term, definition]) => {
    if (generated.length + existingQuestions.length >= TARGET) return;
    const distractorTerms = pickDistractors(terms, term, 3);
    if (distractorTerms.length < 3) return;
    add({
      question: `A student is asked to identify the concept described as "${definition.toLowerCase()}". The correct answer is`,
      options: shuffle([term, ...distractorTerms]),
      correctAnswer: term,
      explanation: `The description matches ${term}: ${definition}`,
    });
  });

  return generated.slice(0, Math.max(0, TARGET - existingQuestions.length));
};

for (const unitId of [1, 2, 3, 4, 5]) {
  const vocab = parseVocab(path.join(dataDir, `psychology-unit${unitId}.ts`));
  const existing = parseExisting(unitId);
  const generated = buildGenerated(vocab, existing);
  const all = [...existing, ...generated].slice(0, TARGET);
  const outPath = writeQuestions(unitId, all);
  console.log(`Unit ${unitId}: ${all.length} questions (${existing.length} scenario + ${generated.length} generated) -> ${path.basename(outPath)}`);
}
