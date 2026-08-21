import { fourOptions, nonzero, polyLatex } from "../format";
import type { Rng } from "../rng";
import type { Template } from "../types";

const id = (skill: string, rng: Rng) => `gen-u1-${skill}-${rng.int(1, 1e9)}`;

const endBehavior: Template = (rng) => {
  const n = rng.pick([2, 3, 4, 5, 6]);
  const a = nonzero(rng, -5, 5);
  const even = n % 2 === 0;
  const pos = a > 0;
  const correct = even
    ? pos
      ? "Left $+\\infty$, right $+\\infty$"
      : "Left $-\\infty$, right $-\\infty$"
    : pos
      ? "Left $-\\infty$, right $+\\infty$"
      : "Left $+\\infty$, right $-\\infty$";
  const wrong = [
    "Left $+\\infty$, right $+\\infty$",
    "Left $-\\infty$, right $-\\infty$",
    "Left $-\\infty$, right $+\\infty$",
    "Left $+\\infty$, right $-\\infty$",
  ];
  const { options, correctAnswer } = fourOptions(correct, wrong, rng);
  return {
    id: id("1.6", rng),
    skill: "1.6",
    calculator: false,
    kind: "mcq",
    question: `What is the end behavior of $f(x)=${a}x^{${n}}$?`,
    options,
    correctAnswer,
    explanation: `Degree $${n}$ is ${even ? "even" : "odd"} and the leading coefficient $${a}$ is ${pos ? "positive" : "negative"}. Even degree: both ends match the sign of $a$. Odd degree: left is opposite the sign of $a$, right matches $a$.`,
  };
};

const averageRate: Template = (rng) => {
  const a = nonzero(rng, -4, 4);
  const b = rng.int(-5, 5);
  const c = rng.int(-8, 8);
  const x1 = rng.int(-3, 1);
  let x2 = rng.int(2, 5);
  if (x2 === x1) x2 = x1 + 2;
  const f = (x: number) => a * x * x + b * x + c;
  const val = (f(x2) - f(x1)) / (x2 - x1);
  const correct = `$${val}$`;
  const { options, correctAnswer } = fourOptions(correct, [`$${val + a}$`, `$${f(x2) - f(x1)}$`, `$${2 * a}$`, `$${val - 1}$`], rng);
  return {
    id: id("1.2", rng),
    skill: "1.2",
    calculator: false,
    kind: "mcq",
    question: `Find the average rate of change of $f(x)=${polyLatex([a, b, c])}$ on $[${x1},${x2}]$.`,
    options,
    correctAnswer,
    explanation: `$\\dfrac{f(${x2})-f(${x1})}{${x2}-${x1}}=\\dfrac{${f(x2)}-(${f(x1)})}{${x2 - x1}}=${val}$.`,
  };
};

const remainderTheorem: Template = (rng) => {
  const a = nonzero(rng, -3, 3);
  const b = rng.int(-5, 5);
  const c = rng.int(-6, 6);
  const k = rng.int(-4, 4);
  const rem = a * k * k + b * k + c;
  const { options, correctAnswer } = fourOptions(`$${rem}$`, [`$${k}$`, `$${a + b + c}$`, `$${rem + a}$`, `$0$`], rng);
  return {
    id: id("1.5", rng),
    skill: "1.5",
    calculator: false,
    kind: "mcq",
    question: `When $p(x)=${polyLatex([a, b, c])}$ is divided by $x-(${k})$, the remainder is`,
    options,
    correctAnswer,
    explanation: `Remainder Theorem: remainder $=p(${k})=${a}(${k})^2+(${b})(${k})+(${c})=${rem}$.`,
  };
};

const factorTheorem: Template = (rng) => {
  const r = rng.int(-5, 5);
  const s = nonzero(rng, -4, 4);
  const t = rng.int(-5, 5);
  if (t === r) {
    /* keep two distinct roots */
  }
  const leading = nonzero(rng, 1, 3);
  // p(x) = leading (x-r)(x-s) = leading (x^2 - (r+s)x + rs)
  const b = -leading * (r + s);
  const c = leading * r * s;
  const test = rng.chance(0.5) ? r : t === r ? r + 1 : t;
  const isFactor = test === r || test === s;
  const correct = isFactor ? "Yes" : "No";
  const { options, correctAnswer } = fourOptions(correct, ["Yes", "No", "Only if the leading coefficient is $1$", "Cannot be determined"], rng);
  return {
    id: id("1.5", rng),
    skill: "1.5",
    calculator: false,
    kind: "mcq",
    question: `Is $x-(${test})$ a factor of $p(x)=${polyLatex([leading, b, c])}$?`,
    options,
    correctAnswer,
    explanation: `Factor Theorem: check $p(${test})$. Here $p(${test})=${leading * test * test + b * test + c}$, so the answer is ${correct.toLowerCase()}.`,
  };
};

const polyFromZeros: Template = (rng) => {
  const r = rng.int(-4, -1);
  const s = rng.int(1, 4);
  const correct = `$x^2-(${r + s})x+(${r * s})$`;
  const { options, correctAnswer } = fourOptions(
    correct,
    [`$x^2+(${r + s})x+(${r * s})$`, `$x^2-(${r * s})x+(${r + s})$`, `$(x-${r})+(x-${s})$`, `$x^2-${r * s}$`],
    rng
  );
  return {
    id: id("1.5", rng),
    skill: "1.5",
    calculator: false,
    kind: "mcq",
    question: `A monic quadratic has zeros $x=${r}$ and $x=${s}$. Which polynomial is it?`,
    options,
    correctAnswer,
    explanation: `$(x-(${r}))(x-(${s}))=x^2-(${r}+${s})x+(${r}\\cdot${s})=${correct.slice(1, -1)}$.`,
  };
};

const possibleRationalZeros: Template = (rng) => {
  const lead = rng.pick([2, 3, 4]);
  const constant = rng.pick([6, 8, 12]);
  const factors = (n: number) => {
    const out: number[] = [];
    for (let i = 1; i <= Math.abs(n); i++) if (n % i === 0) out.push(i);
    return out;
  };
  const poss = new Set<string>();
  for (const p of factors(constant)) {
    for (const q of factors(lead)) {
      if (p % q === 0 || q === 1) {
        const val = p / q;
        if (Number.isInteger(val)) {
          poss.add(String(val));
          poss.add(String(-val));
        }
      }
    }
  }
  const list = [...poss].map(Number).sort((a, b) => a - b);
  const correct = `$${list.join(",\\ ")}`;
  const { options, correctAnswer } = fourOptions(
    correct,
    [`$${factors(constant).join(",\\ ")}$`, `$\\pm 1$ only`, `$${list.filter((n) => n > 0).join(",\\ ")}$`, `$\\pm ${lead}$`],
    rng
  );
  return {
    id: id("1.5", rng),
    skill: "1.5",
    calculator: false,
    kind: "mcq",
    question: `Possible rational zeros of $f(x)=${lead}x^3+x^2-x+${constant}$ by the Rational Root Theorem include which complete $\\pm$ integer list (reduced)?`,
    options,
    correctAnswer,
    explanation: `Possible zeros are $\\pm$ (factors of $${constant}$) / (factors of $${lead}$). After reducing, the integer possibilities are ${correct}.`,
  };
};

const verticalAsymptotes: Template = (rng) => {
  const p = rng.int(-4, -1);
  const q = rng.int(1, 4);
  const num = rng.int(-5, 5);
  const correct = `$x=${p}$ and $x=${q}$`;
  const { options, correctAnswer } = fourOptions(
    correct,
    [`$x=${num}$`, `$x=${-p}$ and $x=${-q}$`, `$y=${p}$ and $y=${q}$`, `$x=${p + q}$`],
    rng
  );
  return {
    id: id("1.8", rng),
    skill: "1.8",
    calculator: false,
    kind: "mcq",
    question: `Find the vertical asymptotes of $f(x)=\\dfrac{x-(${num})}{(x-(${p}))(x-(${q}))}$. Assume the numerator does not cancel a factor.`,
    options,
    correctAnswer,
    explanation: `After confirming no cancellation, set the denominator to $0$: $x=${p}$ and $x=${q}$.`,
  };
};

const holeVsVA: Template = (rng) => {
  const h = rng.int(-4, 4);
  const v = h === 0 ? 2 : -h;
  const correct = `Hole at $x=${h}$; vertical asymptote $x=${v}$`;
  const { options, correctAnswer } = fourOptions(
    correct,
    [
      `Vertical asymptotes $x=${h}$ and $x=${v}$`,
      `Hole at $x=${v}$; vertical asymptote $x=${h}$`,
      `Holes at both $x=${h}$ and $x=${v}$`,
      `No discontinuities`,
    ],
    rng
  );
  return {
    id: id("1.8", rng),
    skill: "1.8",
    calculator: false,
    kind: "mcq",
    question: `Identify the discontinuities of $f(x)=\\dfrac{(x-(${h}))(x+3)}{(x-(${h}))(x-(${v}))}$.`,
    options,
    correctAnswer,
    explanation: `The factor $x-(${h})$ cancels, leaving a hole at $x=${h}$. The remaining denominator factor gives a vertical asymptote at $x=${v}$.`,
  };
};

const haRational: Template = (rng) => {
  const a = nonzero(rng, -6, 6);
  const b = nonzero(rng, 1, 6);
  const mode = rng.pick(["less", "equal", "greater"] as const);
  if (mode === "less") {
    const { options, correctAnswer } = fourOptions("$y=0$", [`$y=\\dfrac{${a}}{${b}}$`, `$y=${a}$`, "No HA", `$x=0$`], rng);
    return {
      id: id("1.7", rng),
      skill: "1.7",
      calculator: false,
      kind: "mcq",
      question: `End behavior: $f(x)=\\dfrac{${a}x+1}{${b}x^2-4}$. The horizontal asymptote is`,
      options,
      correctAnswer,
      explanation: `Degree of numerator ($1$) is less than degree of denominator ($2$), so $y=0$.`,
    };
  }
  if (mode === "equal") {
    const { options, correctAnswer } = fourOptions(`$y=\\dfrac{${a}}{${b}}$`, ["$y=0$", `$y=${a}$`, "Slant asymptote", `$y=${b}$`], rng);
    return {
      id: id("1.7", rng),
      skill: "1.7",
      calculator: false,
      kind: "mcq",
      question: `The horizontal asymptote of $f(x)=\\dfrac{${a}x^2+3}{${b}x^2-1}$ is`,
      options,
      correctAnswer,
      explanation: `Equal degrees: HA is the ratio of leading coefficients $y=\\dfrac{${a}}{${b}}$.`,
    };
  }
  const { options, correctAnswer } = fourOptions("No horizontal asymptote (slant)", ["$y=0$", `$y=\\dfrac{${a}}{${b}}$`, `$y=${a}$`, `$x=0$`], rng);
  return {
    id: id("1.7", rng),
    skill: "1.7",
    calculator: false,
    kind: "mcq",
    question: `For $f(x)=\\dfrac{${a}x^2+x}{${b}x-1}$, which best describes the end behavior asymptote?`,
    options,
    correctAnswer,
    explanation: `Numerator degree is one more than denominator, so there is a slant (oblique) asymptote and no horizontal asymptote.`,
  };
};

const turningPoints: Template = (rng) => {
  const n = rng.pick([3, 4, 5, 6]);
  const correct = `$${n - 1}$`;
  const { options, correctAnswer } = fourOptions(correct, [`$${n}$`, `$${n + 1}$`, `$${2 * n}$`, `$1$`], rng);
  return {
    id: id("1.4", rng),
    skill: "1.4",
    calculator: false,
    kind: "mcq",
    question: `A polynomial of degree $${n}$ has at most how many turning points?`,
    options,
    correctAnswer,
    explanation: `A degree-$n$ polynomial has at most $n-1$ turning points.`,
  };
};

const yIntercept: Template = (rng) => {
  const a = nonzero(rng, -3, 3);
  const b = rng.int(-5, 5);
  const c = rng.int(-8, 8);
  const d = rng.int(-6, 6);
  const { options, correctAnswer } = fourOptions(`$${d}$`, [`$${c}$`, `$${a}$`, `$0$`, `$${a + b + c + d}$`], rng);
  return {
    id: id("1.4", rng),
    skill: "1.4",
    calculator: false,
    kind: "mcq",
    question: `The $y$-intercept of $p(x)=${polyLatex([a, b, c, d])}$ is`,
    options,
    correctAnswer,
    explanation: `$p(0)$ is the constant term: $${d}$.`,
  };
};

const multiplicity: Template = (rng) => {
  const even = rng.chance(0.5);
  const k = even ? rng.pick([2, 4]) : rng.pick([1, 3, 5]);
  const r = rng.int(-3, 3);
  const correct = even ? "Touches the $x$-axis and turns around" : "Crosses the $x$-axis";
  const { options, correctAnswer } = fourOptions(
    correct,
    [
      "Touches the $x$-axis and turns around",
      "Crosses the $x$-axis",
      "Has a vertical asymptote",
      "Is undefined at the zero",
    ],
    rng
  );
  return {
    id: id("1.5", rng),
    skill: "1.5",
    calculator: false,
    kind: "mcq",
    question: `Near $x=${r}$, $f$ has a factor $(x-(${r}))^{${k}}$. The graph`,
    options,
    correctAnswer,
    explanation: `Multiplicity $${k}$ is ${even ? "even → touch and turn" : "odd → cross"}.`,
  };
};

const evenOddPoly: Template = (rng) => {
  const kind = rng.pick(["even", "odd", "neither"] as const);
  const question =
    kind === "even"
      ? "$f(x)=x^4-3x^2+1$"
      : kind === "odd"
        ? "$f(x)=x^5-2x^3+x$"
        : "$f(x)=x^3+x^2$";
  const correct = kind === "even" ? "Even" : kind === "odd" ? "Odd" : "Neither";
  const { options, correctAnswer } = fourOptions(correct, ["Even", "Odd", "Neither", "Both even and odd"], rng);
  return {
    id: id("1.4", rng),
    skill: "1.4",
    calculator: false,
    kind: "mcq",
    question: `Classify ${question} as even, odd, or neither.`,
    options,
    correctAnswer,
    explanation:
      kind === "even"
        ? "Only even powers (including the constant) → even function."
        : kind === "odd"
          ? "Only odd powers → odd function."
          : "Both even and odd powers → neither.",
  };
};

const equivalentRational: Template = (rng) => {
  const a = rng.int(2, 6);
  const b = a + rng.int(1, 4);
  const correct = `$\\dfrac{x+${a}}{x+${b}}$`;
  const { options, correctAnswer } = fourOptions(
    correct,
    [`$\\dfrac{x-${a}}{x-${b}}$`, `$1$`, `$\\dfrac{${a}}{${b}}$`, `$x+${a-b}$`],
    rng
  );
  return {
    id: id("1.9", rng),
    skill: "1.9",
    calculator: false,
    kind: "mcq",
    question: `Simplify $\\dfrac{(x+${a})(x-2)}{(x+${b})(x-2)}$ for $x\\neq 2$.`,
    options,
    correctAnswer,
    explanation: `Cancel the common factor $x-2$ (hole at $x=2$). The equivalent expression is $\\dfrac{x+${a}}{x+${b}}$.`,
  };
};

const firstDifferences: Template = (rng) => {
  const d = nonzero(rng, -5, 5);
  const start = rng.int(-4, 8);
  const seq = [start, start + d, start + 2 * d, start + 3 * d];
  const correct = "Linear";
  const { options, correctAnswer } = fourOptions(correct, ["Quadratic", "Exponential", "Linear", "Cubic"], rng);
  return {
    id: id("1.3", rng),
    skill: "1.3",
    calculator: false,
    kind: "mcq",
    question: `A function $f$ has equally spaced $x$-values and outputs $${seq.join(",\\ ")}$. The model is best described as`,
    options,
    correctAnswer,
    explanation: `First differences are constantly $${d}$, which is the signature of a linear function.`,
  };
};

const quadraticSecondDiff: Template = (rng) => {
  const a = rng.pick([1, 2, 3]);
  // f(x)=a x^2 at x=0,1,2,3 → 0, a, 4a, 9a; second diffs 2a
  const vals = [0, a, 4 * a, 9 * a];
  const correct = "Quadratic";
  const { options, correctAnswer } = fourOptions(correct, ["Linear", "Quadratic", "Exponential", "Constant"], rng);
  return {
    id: id("1.3", rng),
    skill: "1.3",
    calculator: false,
    kind: "mcq",
    question: `Outputs $${vals.join(",\\ ")}$ at $x=0,1,2,3$. First differences are not constant but second differences are. The degree is`,
    options,
    correctAnswer,
    explanation: `Constant second differences of $${2 * a}$ indicate a quadratic (degree $2$).`,
  };
};

const complexPairs: Template = (rng) => {
  const n = rng.pick([4, 5, 6]);
  const imag = rng.int(1, 4);
  const re = rng.int(-3, 3);
  const { options, correctAnswer } = fourOptions(
    `$${re}-${imag}i$ must also be a zero`,
    [`$${re}+${imag}$ must be a zero`, `Only real zeros remain`, `$i$ must be a zero`, `No other zeros are forced`],
    rng
  );
  return {
    id: id("1.5", rng),
    skill: "1.5",
    calculator: false,
    kind: "mcq",
    question: `A degree-$${n}$ polynomial with real coefficients has a zero at $${re}+${imag}i$. Which must also be a zero?`,
    options,
    correctAnswer,
    explanation: `Nonreal zeros of real polynomials come in conjugate pairs, so $${re}-${imag}i$ is also a zero.`,
  };
};

const transformation: Template = (rng) => {
  const h = rng.int(1, 5);
  const k = rng.int(1, 6);
  const left = rng.chance(0.5);
  const up = rng.chance(0.5);
  const hx = left ? h : -h;
  const ky = up ? k : -k;
  const correct = `$$f(x${left ? "+" : "-"}${h})${up ? "+" : "-"}${k}$$`;
  const { options, correctAnswer } = fourOptions(
    `$g(x)=f(x${left ? "+" : "-"}${h})${up ? "+" : "-"}${k}$`,
    [
      `$g(x)=f(x${left ? "-" : "+"}${h})${up ? "+" : "-"}${k}$`,
      `$g(x)=f(x${left ? "+" : "-"}${h})${up ? "-" : "+"}${k}$`,
      `$g(x)=f(x)+${h}+${k}$`,
      `$g(x)=${h}f(x)+${k}$`,
    ],
    rng
  );
  return {
    id: id("1.10", rng),
    skill: "1.10",
    calculator: false,
    kind: "mcq",
    question: `$g$ is $f$ shifted ${left ? `${h} left` : `${h} right`} and ${up ? `${k} up` : `${k} down`}. Which is $g$?`,
    options,
    correctAnswer,
    explanation: `Horizontal: $f(x-h)$ shifts right $h$. Left $h$ is $f(x+h)$. Vertical: add $k$ to shift up.`,
  };
};

const productDegree: Template = (rng) => {
  const m = rng.int(2, 5);
  const n = rng.int(2, 5);
  const correct = `$${m + n}$`;
  const { options, correctAnswer } = fourOptions(correct, [`$${m * n}$`, `$${Math.abs(m - n)}$`, `$${m}$`, `$${n}$`], rng);
  return {
    id: id("1.4", rng),
    skill: "1.4",
    calculator: false,
    kind: "mcq",
    question: `$p$ has degree $${m}$ and $q$ has degree $${n}$. The degree of $p(x)q(x)$ is`,
    options,
    correctAnswer,
    explanation: `Degrees add under multiplication: $${m}+${n}=${m + n}$.`,
  };
};

const signChart: Template = (rng) => {
  const r = rng.int(1, 4);
  const s = r + rng.int(2, 4);
  const correct = `Negative`;
  const { options, correctAnswer } = fourOptions(correct, ["Positive", "Negative", "Zero", "Undefined"], rng);
  const mid = (r + s) / 2;
  return {
    id: id("1.4", rng),
    skill: "1.4",
    calculator: false,
    kind: "mcq",
    question: `$f(x)=(x-${r})(x-${s})$ with $r=${r}<s=${s}$. On the open interval $(${r},${s})$, $f(x)$ is`,
    options,
    correctAnswer,
    explanation: `Test $x=${mid}$: $(${mid}-${r})(${mid}-${s})$ is positive times negative, so $f$ is negative between the zeros.`,
  };
};

const numericAroc: Template = (rng) => {
  const a = nonzero(rng, 1, 4);
  const b = rng.int(-3, 3);
  const x1 = 1;
  const x2 = 4;
  const f = (x: number) => a * x * x + b * x;
  const val = (f(x2) - f(x1)) / (x2 - x1);
  return {
    id: id("1.2n", rng),
    skill: "1.2",
    calculator: true,
    kind: "numeric",
    question: `If $f(x)=${polyLatex([a, b, 0])}$, enter the average rate of change on $[1,4]$ as a number.`,
    correctAnswer: String(val),
    numericAnswer: val,
    tolerance: 0.01,
    explanation: `$\\dfrac{f(4)-f(1)}{3}=\\dfrac{${f(4)}-${f(1)}}{3}=${val}$.`,
  };
};

const calcEvalPoly: Template = (rng) => {
  const a = nonzero(rng, 1, 3);
  const b = rng.int(-4, 4);
  const c = rng.int(-5, 5);
  const x = rng.pick([1.5, 2.5, -1.5, 0.5]);
  const val = a * x * x + b * x + c;
  const rounded = Math.round(val * 100) / 100;
  return {
    id: id("1.4c", rng),
    skill: "1.4",
    calculator: true,
    kind: "numeric",
    question: `Enter $f(${x})$ if $f(x)=${polyLatex([a, b, c])}$ (round to two decimals if needed).`,
    correctAnswer: String(rounded),
    numericAnswer: rounded,
    tolerance: 0.02,
    explanation: `$f(${x})=${a}(${x})^2+(${b})(${x})+(${c})=${rounded}$.`,
  };
};

const calcArocCubic: Template = (rng) => {
  const a = rng.pick([1, 2]);
  const b = rng.int(-2, 2);
  const x1 = 0;
  const x2 = rng.pick([2, 3]);
  const f = (x: number) => a * x * x * x + b * x;
  const val = (f(x2) - f(x1)) / (x2 - x1);
  const { options, correctAnswer } = fourOptions(
    `$${val}$`,
    [`$${f(x2)}$`, `$${3 * a}$`, `$${val + 1}$`, `$${a + b}$`],
    rng
  );
  return {
    id: id("1.2c", rng),
    skill: "1.2",
    calculator: true,
    kind: "mcq",
    question: `Average rate of change of $f(x)=${polyLatex([a, 0, b, 0])}$ on $[${x1},${x2}]$ is`,
    options,
    correctAnswer,
    explanation: `$\\dfrac{f(${x2})-f(${x1})}{${x2}}=${val}$.`,
  };
};

const calcRemainder: Template = (rng) => {
  const a = nonzero(rng, 1, 3);
  const b = rng.int(-6, 6);
  const c = rng.int(-8, 8);
  const d = rng.int(-5, 5);
  const k = rng.pick([1.5, -0.5, 2.5]);
  const rem = a * k ** 3 + b * k ** 2 + c * k + d;
  const rounded = Math.round(rem * 100) / 100;
  return {
    id: id("1.5c", rng),
    skill: "1.5",
    calculator: true,
    kind: "numeric",
    question: `Remainder when $p(x)=${polyLatex([a, b, c, d])}$ is divided by $x-(${k})$? Enter $p(${k})$ (two decimals OK).`,
    correctAnswer: String(rounded),
    numericAnswer: rounded,
    tolerance: 0.03,
    explanation: `Remainder Theorem: $p(${k})=${rounded}$.`,
  };
};

const calcRationalValue: Template = (rng) => {
  const a = rng.int(2, 5);
  const b = rng.int(1, 4);
  const x = rng.pick([2, 3, 4]);
  const val = (a * x + 1) / (x + b);
  const rounded = Math.round(val * 100) / 100;
  const { options, correctAnswer } = fourOptions(
    `$${rounded}$`,
    [`$${a}$`, `$${x + b}$`, `$${Math.round(((a * x) / (x + b)) * 100) / 100}$`, `$${a + b}$`],
    rng
  );
  return {
    id: id("1.8c", rng),
    skill: "1.8",
    calculator: true,
    kind: "mcq",
    question: `Evaluate $f(${x})$ if $f(x)=\\dfrac{${a}x+1}{x+${b}}$.`,
    options,
    correctAnswer,
    explanation: `$f(${x})=\\dfrac{${a * x}+1}{${x}+${b}}=${rounded}$.`,
  };
};

const calcCompareAroc: Template = (rng) => {
  const a = rng.int(2, 5);
  const fAroc = a; // f(x)=ax on [0,1]
  const gAroc = (4 - 1) / 1; // g(x)=x^2 on [1,2] = 3
  const bigger = fAroc > gAroc ? "f" : fAroc < gAroc ? "g" : "equal";
  const correct =
    bigger === "f"
      ? `$f$ (AROC $${fAroc}$ vs $${gAroc}$)`
      : bigger === "g"
        ? `$g$ (AROC $${gAroc}$ vs $${fAroc}$)`
        : "Equal AROCs";
  const { options, correctAnswer } = fourOptions(
    correct,
    [`$f$ (AROC $${fAroc}$ vs $${gAroc}$)`, `$g$ (AROC $${gAroc}$ vs $${fAroc}$)`, "Equal AROCs", "Cannot compare"],
    rng
  );
  return {
    id: id("1.2cmp", rng),
    skill: "1.2",
    calculator: true,
    kind: "mcq",
    question: `On $[0,1]$, $f(x)=${a}x$. On $[1,2]$, $g(x)=x^2$. Which has the larger average rate of change?`,
    options,
    correctAnswer,
    explanation: `$f$: slope $${a}$. $g$: $\\dfrac{4-1}{1}=3$. Compare $${a}$ and $3$.`,
  };
};

const calcQuadraticRoot: Template = (rng) => {
  const r = rng.int(2, 6);
  const s = rng.int(1, 5);
  // (x-r)(x+s)=x^2+(s-r)x-rs
  const b = s - r;
  const c = -r * s;
  const { options, correctAnswer } = fourOptions(
    `$${r}$`,
    [`$${-s}$`, `$${r + s}$`, `$${Math.abs(c)}$`, `$0$`],
    rng
  );
  return {
    id: id("1.5q", rng),
    skill: "1.5",
    calculator: true,
    kind: "mcq",
    question: `A positive zero of $${polyLatex([1, b, c])}=0$ is`,
    options,
    correctAnswer,
    explanation: `Factors as $(x-${r})(x+${s})$. Positive zero $x=${r}$.`,
  };
};

const calcTableAroc: Template = (rng) => {
  const d = nonzero(rng, 2, 6);
  const y0 = rng.int(1, 10);
  const y1 = y0 + d;
  const y2 = y1 + d;
  const { options, correctAnswer } = fourOptions(
    `$${d}$`,
    [`$${y2}$`, `$${2 * d}$`, `$${y0}$`, `$0$`],
    rng
  );
  return {
    id: id("1.3c", rng),
    skill: "1.3",
    calculator: true,
    kind: "mcq",
    question: `A table gives $f(0)=${y0}$, $f(1)=${y1}$, $f(2)=${y2}$. The average rate of change from $x=0$ to $x=2$ is`,
    options,
    correctAnswer,
    explanation: `$\\dfrac{f(2)-f(0)}{2}=\\dfrac{${y2}-${y0}}{2}=${d}$.`,
  };
};

const calcEndBehaviorNum: Template = (rng) => {
  const a = nonzero(rng, -3, 3);
  const n = rng.pick([3, 4, 5]);
  const x = 10;
  const val = a * x ** n;
  const sign = val > 0 ? "positive" : "negative";
  const { options, correctAnswer } = fourOptions(
    `Large ${sign} (about $${val}$)`,
    ["Near $0$", "Undefined", `Exactly $${a}$`, "Oscillating"],
    rng
  );
  return {
    id: id("1.6c", rng),
    skill: "1.6",
    calculator: true,
    kind: "mcq",
    question: `Estimate $f(${x})$ for $f(x)=${a}x^{${n}}$ to check end behavior to the right.`,
    options,
    correctAnswer,
    explanation: `$f(${x})=${a}\\cdot${x}^{${n}}=${val}$, matching the sign of the leading term for large positive $x$.`,
  };
};

const calcHoleCheck: Template = (rng) => {
  const h = rng.int(1, 4);
  const v = h + rng.int(1, 3);
  // f(x)=((x-h)(x+1))/((x-h)(x-v)) at x = h+0.001 approx continuous extension (h+1)/(h-v)
  const ext = (h + 1) / (h - v);
  const rounded = Math.round(ext * 100) / 100;
  return {
    id: id("1.8h", rng),
    skill: "1.8",
    calculator: true,
    kind: "numeric",
    question: `After canceling, $f(x)=\\dfrac{x+1}{x-${v}}$ (hole at $x=${h}$). Enter the $y$-value of the hole (two decimals OK).`,
    correctAnswer: String(rounded),
    numericAnswer: rounded,
    tolerance: 0.03,
    explanation: `Plug $x=${h}$ into the reduced form: $\\dfrac{${h}+1}{${h}-${v}}=${rounded}$.`,
  };
};

export const unit1Templates: Template[] = [
  endBehavior,
  averageRate,
  remainderTheorem,
  factorTheorem,
  polyFromZeros,
  possibleRationalZeros,
  verticalAsymptotes,
  holeVsVA,
  haRational,
  turningPoints,
  yIntercept,
  multiplicity,
  evenOddPoly,
  equivalentRational,
  firstDifferences,
  quadraticSecondDiff,
  complexPairs,
  transformation,
  productDegree,
  signChart,
  numericAroc,
  calcEvalPoly,
  calcArocCubic,
  calcRemainder,
  calcRationalValue,
  calcCompareAroc,
  calcQuadraticRoot,
  calcTableAroc,
  calcEndBehaviorNum,
  calcHoleCheck,
];
