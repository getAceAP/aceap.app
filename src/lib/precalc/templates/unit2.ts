import { fourOptions, nonzero } from "../format";
import type { Rng } from "../rng";
import type { Template } from "../types";

const id = (skill: string, rng: Rng) => `gen-u2-${skill}-${rng.int(1, 1e9)}`;

const identifyGrowth: Template = (rng) => {
  const a = rng.int(2, 9);
  const grow = rng.chance(0.5);
  const b = grow ? rng.pick([1.5, 2, 3, 4]) : rng.pick([0.25, 0.5, 0.75]);
  const correct = grow ? "Growth, because $b>1$" : "Decay, because $0<b<1$";
  const { options, correctAnswer } = fourOptions(correct, [
    "Growth, because $b>1$",
    "Decay, because $0<b<1$",
    "Growth, because $a>0$",
    "Decay, because $a>0$",
  ], rng);
  return {
    id: id("2.3", rng),
    skill: "2.3",
    calculator: false,
    kind: "mcq",
    question: `$f(x)=${a}\\cdot ${b}^{x}$ represents`,
    options,
    correctAnswer,
    explanation: `The base $b=${b}$ determines growth ($b>1$) or decay ($0<b<1$). The positive $a$ is the initial value, not the growth/decay type.`,
  };
};

const logProduct: Template = (rng) => {
  const p = rng.int(2, 8);
  const q = rng.int(2, 8);
  const correct = `$\\log ${p}+\\log ${q}$`;
  const { options, correctAnswer } = fourOptions(correct, [
    `$\\log ${p}-\\log ${q}$`,
    `$\\log(${p + q})$`,
    `$\\log ${p}\\cdot\\log ${q}$`,
    `$\\log ${p * q * q}$`,
  ], rng);
  return {
    id: id("2.9", rng),
    skill: "2.9",
    calculator: false,
    kind: "mcq",
    question: `$\\log(${p}\\cdot${q})$ equals`,
    options,
    correctAnswer,
    explanation: `Product rule: $\\log(MN)=\\log M+\\log N$.`,
  };
};

const logQuotient: Template = (rng) => {
  const m = rng.int(6, 12);
  const n = rng.int(2, 5);
  const correct = `$\\log ${m}-\\log ${n}$`;
  const { options, correctAnswer } = fourOptions(correct, [
    `$\\log ${m}+\\log ${n}$`,
    `$\\dfrac{\\log ${m}}{\\log ${n}}$`,
    `$\\log(${m - n})$`,
    `$\\log ${m}\\cdot\\log ${n}$`,
  ], rng);
  return {
    id: id("2.9", rng),
    skill: "2.9",
    calculator: false,
    kind: "mcq",
    question: `$\\log\\!\\left(\\dfrac{${m}}{${n}}\\right)$ equals`,
    options,
    correctAnswer,
    explanation: `Quotient rule: $\\log(M/N)=\\log M-\\log N$.`,
  };
};

const logPower: Template = (rng) => {
  const k = rng.int(2, 6);
  const p = rng.int(2, 5);
  const correct = `$${p}\\log ${k}$`;
  const { options, correctAnswer } = fourOptions(correct, [
    `$\\log ${k}^{${p}}$ is already simplest as a single log`,
    `$\\log ${k * p}$`,
    `$(\\log ${k})^{${p}}$`,
    `$\\log ${p}+\\log ${k}$`,
  ], rng);
  return {
    id: id("2.9", rng),
    skill: "2.9",
    calculator: false,
    kind: "mcq",
    question: `$\\log\\!\\left(${k}^{${p}}\\right)$ equals`,
    options,
    correctAnswer,
    explanation: `Power rule: $\\log(M^p)=p\\log M$.`,
  };
};

const changeOfBase: Template = (rng) => {
  const b = rng.pick([2, 3, 5, 8]);
  const a = rng.pick([4, 9, 16, 27, 32]);
  const correct = `$\\dfrac{\\ln ${a}}{\\ln ${b}}$`;
  const { options, correctAnswer } = fourOptions(correct, [
    `$\\dfrac{\\ln ${b}}{\\ln ${a}}$`,
    `$\\ln ${a}-\\ln ${b}$`,
    `$\\ln(${a - b})$`,
    `$${a / b}$`,
  ], rng);
  return {
    id: id("2.9", rng),
    skill: "2.9",
    calculator: true,
    kind: "mcq",
    question: `$\\log_{${b}} ${a}$ is equal to`,
    options,
    correctAnswer,
    explanation: `Change of base: $\\log_b a=\\dfrac{\\ln a}{\\ln b}$.`,
  };
};

const inverseExp: Template = (rng) => {
  const b = rng.pick([2, 3, 4, 5, 10]);
  const correct = `$\\log_{${b}} x$`;
  const { options, correctAnswer } = fourOptions(correct, [
    `$${b}^{x}$`,
    `$\\log_x ${b}$`,
    `$\\dfrac{1}{${b}^{x}}$`,
    `$x^{${b}}$`,
  ], rng);
  return {
    id: id("2.8", rng),
    skill: "2.8",
    calculator: false,
    kind: "mcq",
    question: `The inverse of $f(x)=${b}^{x}$ is`,
    options,
    correctAnswer,
    explanation: `Exponential and log with the same base are inverses: $f^{-1}(x)=\\log_{${b}}x$.`,
  };
};

const solveExpSameBase: Template = (rng) => {
  const b = rng.pick([2, 3, 5]);
  const k = rng.int(2, 6);
  const correct = `$${k}$`;
  const { options, correctAnswer } = fourOptions(correct, [`$${k + 1}$`, `$${b}$`, `$0$`, `$${k * b}$`], rng);
  return {
    id: id("2.13", rng),
    skill: "2.13",
    calculator: false,
    kind: "mcq",
    question: `Solve $${b}^{x}=${b}^{${k}}$.`,
    options,
    correctAnswer,
    explanation: `If the bases match and $b>0,b\\neq 1$, then exponents are equal: $x=${k}$.`,
  };
};

const solveLog: Template = (rng) => {
  const b = rng.pick([2, 3, 10]);
  const k = rng.int(2, 4);
  const val = b ** k;
  const correct = `$${val}$`;
  const { options, correctAnswer } = fourOptions(correct, [`$${k}$`, `$${b}$`, `$1$`, `$${val + 1}$`], rng);
  return {
    id: id("2.13", rng),
    skill: "2.13",
    calculator: false,
    kind: "mcq",
    question: `Solve $\\log_{${b}} x=${k}$.`,
    options,
    correctAnswer,
    explanation: `$\\log_b x=k$ means $x=b^k=${b}^{${k}}=${val}$.`,
  };
};

const domainLog: Template = (rng) => {
  const c = rng.int(1, 6);
  const correct = `$x>${c}$`;
  const { options, correctAnswer } = fourOptions(correct, [`$x\\ge ${c}$`, `$x>${-c}$`, `$x\\neq ${c}$`, "All real $x$"], rng);
  return {
    id: id("2.11", rng),
    skill: "2.11",
    calculator: false,
    kind: "mcq",
    question: `Domain of $y=\\ln(x-${c})$ is`,
    options,
    correctAnswer,
    explanation: `Need $x-${c}>0$, so $x>${c}$. The argument of a log must be strictly positive.`,
  };
};

const composition: Template = (rng) => {
  const a = rng.int(2, 5);
  const b = rng.int(1, 6);
  const x = rng.int(1, 4);
  const inner = a * x + b;
  const out = inner * inner;
  const correct = `$${out}$`;
  const { options, correctAnswer } = fourOptions(correct, [`$${a * x * x + b}$`, `$${inner}$`, `$${(a + b) * x}$`, `$${a * inner}$`], rng);
  return {
    id: id("2.7", rng),
    skill: "2.7",
    calculator: false,
    kind: "mcq",
    question: `If $f(x)=x^2$ and $g(x)=${a}x+${b}$, then $(f\\circ g)(${x})=$`,
    options,
    correctAnswer,
    explanation: `$g(${x})=${inner}$, then $f(${inner})=${out}$.`,
  };
};

const halfLife: Template = (rng) => {
  const a0 = rng.pick([80, 100, 160, 200]);
  const n = rng.int(1, 4);
  const left = a0 / 2 ** n;
  const correct = `$${left}$`;
  const { options, correctAnswer } = fourOptions(correct, [`$${a0 / 2}$`, `$${a0 - n}$`, `$${a0 / n}$`, `$${a0 / 2 ** (n + 1)}$`], rng);
  return {
    id: id("2.5", rng),
    skill: "2.5",
    calculator: false,
    kind: "mcq",
    question: `A quantity starts at $${a0}$ and halves each half-life. After $${n}$ half-lives it is`,
    options,
    correctAnswer,
    explanation: `$A=A_0\\left(\\tfrac12\\right)^{n}=${a0}\\cdot\\left(\\tfrac12\\right)^{${n}}=${left}$.`,
  };
};

const tableLinearVsExp: Template = (rng) => {
  const exp = rng.chance(0.5);
  const question = exp
    ? "Outputs $3,6,12,24$ at $x=0,1,2,3$"
    : "Outputs $3,7,11,15$ at $x=0,1,2,3$";
  const correct = exp ? "Exponential (constant ratios)" : "Linear (constant first differences)";
  const { options, correctAnswer } = fourOptions(correct, [
    "Exponential (constant ratios)",
    "Linear (constant first differences)",
    "Quadratic",
    "Neither linear nor exponential",
  ], rng);
  return {
    id: id("2.1", rng),
    skill: "2.1",
    calculator: false,
    kind: "mcq",
    question: `${question}. The best model is`,
    options,
    correctAnswer,
    explanation: exp
      ? "Each output is multiplied by $2$ (constant ratio) → exponential."
      : "First differences are constantly $4$ → linear.",
  };
};

const logOfBase: Template = (rng) => {
  const b = rng.pick([2, 3, 5, 10]);
  const k = rng.int(1, 5);
  const correct = `$${k}$`;
  const { options, correctAnswer } = fourOptions(correct, [`$${b}$`, `$0$`, `$1$`, `$${b * k}$`], rng);
  return {
    id: id("2.9", rng),
    skill: "2.9",
    calculator: false,
    kind: "mcq",
    question: `$\\log_{${b}}\\!\\left(${b}^{${k}}\\right)=$`,
    options,
    correctAnswer,
    explanation: `$\\log_b(b^k)=k$ by inverse relationship.`,
  };
};

const convertToE: Template = (rng) => {
  const a = rng.pick([2, 3, 4, 10]);
  const correct = `$e^{x\\ln ${a}}$`;
  const { options, correctAnswer } = fourOptions(correct, [
    `$e^{${a}x}$`,
    `$\\ln(${a}^{x})$`,
    `$x^{\\ln ${a}}$`,
    `$e^{x/${a}}$`,
  ], rng);
  return {
    id: id("2.4", rng),
    skill: "2.4",
    calculator: false,
    kind: "mcq",
    question: `$${a}^{x}$ can be rewritten as`,
    options,
    correctAnswer,
    explanation: `$a^x=e^{x\\ln a}$.`,
  };
};

const rangeLog: Template = (rng) => {
  const b = rng.pick([2, 10]);
  const { options, correctAnswer } = fourOptions("All real numbers", ["$x>0$", `$[0,\\infty)$`, `$(0,1]$`, `$y>${b}$`], rng);
  return {
    id: id("2.11", rng),
    skill: "2.11",
    calculator: false,
    kind: "mcq",
    question: `The range of $y=\\log_{${b}} x$ is`,
    options,
    correctAnswer,
    explanation: `A log with base $>1$ is defined for $x>0$ and hits every real output.`,
  };
};

const inverseLog: Template = (rng) => {
  const b = rng.pick([2, 3, 5, 10]);
  const correct = `$${b}^{x}$`;
  const { options, correctAnswer } = fourOptions(correct, [`$\\log_{${b}} x$`, `$\\dfrac{1}{${b}^{x}}$`, `$x^{${b}}$`, `$\\ln x$`], rng);
  return {
    id: id("2.8", rng),
    skill: "2.8",
    calculator: false,
    kind: "mcq",
    question: `The inverse of $f(x)=\\log_{${b}} x$ is`,
    options,
    correctAnswer,
    explanation: `The inverse of $\\log_b$ is the exponential $b^x$.`,
  };
};

const semiLog: Template = (rng) => {
  const { options, correctAnswer } = fourOptions(
    "$y$ is exponential in $x$",
    ["$y$ is linear in $x$", "$y$ is quadratic in $x$", "$x$ is exponential in $y$", "$y$ is periodic"],
    rng
  );
  return {
    id: id("2.15", rng),
    skill: "2.15",
    calculator: false,
    kind: "mcq",
    question: `On a semi-log plot ($\\log y$ vs $x$), the data fall on a straight line. This means`,
    options,
    correctAnswer,
    explanation: `If $\\log y = mx+b$, then $y=10^{mx+b}$ (or $e^{\\cdots}$), which is exponential in $x$.`,
  };
};

const compoundInterest: Template = (rng) => {
  const p = rng.pick([1000, 2000, 500]);
  const r = rng.pick([0.05, 0.1, 0.02]);
  const t = rng.int(1, 3);
  const a = p * (1 + r) ** t;
  const correct = `$${a}$`;
  const { options, correctAnswer } = fourOptions(correct, [`$${p * (1 + r * t)}$`, `$${p + r * t}$`, `$${p * r * t}$`, `$${p * (1 + r)}$`], rng);
  return {
    id: id("2.5", rng),
    skill: "2.5",
    calculator: true,
    kind: "mcq",
    question: `$${p}$ is invested at annual rate $${r}$ compounded once per year for $${t}$ years. The balance is $A=P(1+r)^t$. Find $A$.`,
    options,
    correctAnswer,
    explanation: `$A=${p}(1+${r})^{${t}}=${a}$. Linear interest $P(1+rt)$ is a common distractor.`,
  };
};

const expEquationMove: Template = (rng) => {
  const b = rng.pick([2, 3]);
  const k = rng.int(1, 4);
  const correct = `$${k + 1}$`;
  const { options, correctAnswer } = fourOptions(correct, [`$${k}$`, `$${k - 1}$`, `$${b}$`, `$0$`], rng);
  return {
    id: id("2.13", rng),
    skill: "2.13",
    calculator: false,
    kind: "mcq",
    question: `Solve $${b}^{x-1}=${b}^{${k}}$.`,
    options,
    correctAnswer,
    explanation: `Exponents equal: $x-1=${k}$, so $x=${k + 1}$.`,
  };
};

const condensing: Template = (rng) => {
  const a = rng.int(2, 5);
  const b = rng.int(2, 5);
  const correct = `$\\log(${a * b})$`;
  const { options, correctAnswer } = fourOptions(correct, [`$\\log(${a + b})$`, `$\\log ${a}\\log ${b}$`, `$\\log\\dfrac{${a}}{${b}}$`, `$\\log(${a})^{${b}}$`], rng);
  return {
    id: id("2.12", rng),
    skill: "2.12",
    calculator: false,
    kind: "mcq",
    question: `$\\log ${a}+\\log ${b}$ condenses to`,
    options,
    correctAnswer,
    explanation: `Sum of logs is the log of the product: $\\log(${a}\\cdot${b})=\\log(${a * b})$.`,
  };
};

const numericLog: Template = (rng) => {
  const k = rng.int(1, 4);
  return {
    id: id("2.13n", rng),
    skill: "2.13",
    calculator: false,
    kind: "numeric",
    question: `Enter the value of $x$ that solves $2^{x}=2^{${k}}$.`,
    correctAnswer: String(k),
    numericAnswer: k,
    tolerance: 0,
    explanation: `Matching bases implies $x=${k}$.`,
  };
};

const calcSolveExp: Template = (rng) => {
  const b = rng.pick([2, 3, 5]);
  const c = rng.pick([10, 20, 50, 100]);
  const x = Math.log(c) / Math.log(b);
  const rounded = Math.round(x * 100) / 100;
  return {
    id: id("2.13c", rng),
    skill: "2.13",
    calculator: true,
    kind: "numeric",
    question: `Solve $${b}^{x}=${c}$. Enter $x=\\dfrac{\\ln ${c}}{\\ln ${b}}$ rounded to two decimals.`,
    correctAnswer: String(rounded),
    numericAnswer: rounded,
    tolerance: 0.03,
    explanation: `$x=\\log_{${b}}(${c})=\\dfrac{\\ln ${c}}{\\ln ${b}}\\approx ${rounded}$.`,
  };
};

const calcHalfLifeTime: Template = (rng) => {
  const half = rng.pick([2, 5, 10]);
  const n = rng.int(2, 4);
  const years = half * n;
  const { options, correctAnswer } = fourOptions(
    `$${years}$`,
    [`$${half}$`, `$${n}$`, `$${half + n}$`, `$${half * n * 2}$`],
    rng
  );
  return {
    id: id("2.5h", rng),
    skill: "2.5",
    calculator: true,
    kind: "mcq",
    question: `A substance has half-life $${half}$ years. How many years until only $\\left(\\tfrac12\\right)^{${n}}$ remains?`,
    options,
    correctAnswer,
    explanation: `$n=${n}$ half-lives × $${half}$ years = $${years}$ years.`,
  };
};

const calcChangeBase: Template = (rng) => {
  const a = rng.pick([10, 20, 50]);
  const b = rng.pick([2, 3, 5]);
  const val = Math.log(a) / Math.log(b);
  const rounded = Math.round(val * 100) / 100;
  const { options, correctAnswer } = fourOptions(
    `$${rounded}$`,
    [`$${a / b}$`, `$${Math.log10(a)}$`, `$${b}$`, `$1$`],
    rng
  );
  return {
    id: id("2.9c", rng),
    skill: "2.9",
    calculator: true,
    kind: "mcq",
    question: `$\\log_{${b}}(${a})=\\dfrac{\\ln ${a}}{\\ln ${b}}$ is closest to`,
    options,
    correctAnswer,
    explanation: `Change of base ≈ $${rounded}$.`,
  };
};

const calcCompoundCompare: Template = (rng) => {
  const p = 1000;
  const r = 0.06;
  const t = 2;
  const compound = p * (1 + r) ** t;
  const simple = p * (1 + r * t);
  const { options, correctAnswer } = fourOptions(
    `Compound $${compound.toFixed(2)}$ > simple $${simple.toFixed(2)}$`,
    [
      `Simple $${simple.toFixed(2)}$ > compound $${compound.toFixed(2)}$`,
      "Equal balances",
      `Both equal $${p}$`,
      "Cannot tell",
    ],
    rng
  );
  return {
    id: id("2.5c", rng),
    skill: "2.5",
    calculator: true,
    kind: "mcq",
    question: `$${p}$ for $${t}$ years at rate $${r}$: compare annual compound $P(1+r)^t$ vs simple $P(1+rt)$.`,
    options,
    correctAnswer,
    explanation: `Compound $${compound.toFixed(2)}$ beats simple $${simple.toFixed(2)}$.`,
  };
};

const calcDoubling: Template = (rng) => {
  const b = rng.pick([1.05, 1.1, 1.2]);
  // 2 = b^t => t = ln2/ln b
  const t = Math.log(2) / Math.log(b);
  const rounded = Math.round(t * 100) / 100;
  return {
    id: id("2.3d", rng),
    skill: "2.3",
    calculator: true,
    kind: "numeric",
    question: `If $f(t)=${b}^{t}$, enter the doubling time $t$ where $f(t)=2f(0)$ (two decimals).`,
    correctAnswer: String(rounded),
    numericAnswer: rounded,
    tolerance: 0.05,
    explanation: `$2=${b}^{t}\\Rightarrow t=\\dfrac{\\ln 2}{\\ln ${b}}\\approx ${rounded}$.`,
  };
};

const calcLogEval: Template = (rng) => {
  const pairs = [
    { b: 10, x: 1000, v: 3 },
    { b: 2, x: 32, v: 5 },
    { b: 5, x: 125, v: 3 },
    { b: 3, x: 81, v: 4 },
  ] as const;
  const p = rng.pick(pairs);
  return {
    id: id("2.9e", rng),
    skill: "2.9",
    calculator: true,
    kind: "numeric",
    question: `Enter $\\log_{${p.b}}(${p.x})$.`,
    correctAnswer: String(p.v),
    numericAnswer: p.v,
    tolerance: 0,
    explanation: `$${p.b}^{${p.v}}=${p.x}$.`,
  };
};

const calcExpTable: Template = (rng) => {
  const a = rng.int(2, 5);
  const b = rng.pick([2, 3]);
  const x = rng.int(2, 4);
  const y = a * b ** x;
  const { options, correctAnswer } = fourOptions(`$${y}$`, [`$${a * b * x}$`, `$${a + b ** x}$`, `$${a * x}$`, `$${b ** x}$`], rng);
  return {
    id: id("2.3t", rng),
    skill: "2.3",
    calculator: true,
    kind: "mcq",
    question: `If $f(x)=${a}\\cdot${b}^{x}$, then $f(${x})=$`,
    options,
    correctAnswer,
    explanation: `$f(${x})=${a}\\cdot${b}^{${x}}=${y}$.`,
  };
};

const calcLnSolve: Template = (rng) => {
  const k = rng.pick([2, 3, 5, 8]);
  const x = Math.log(k);
  const rounded = Math.round(x * 100) / 100;
  return {
    id: id("2.13ln", rng),
    skill: "2.13",
    calculator: true,
    kind: "numeric",
    question: `Solve $e^{x}=${k}$. Enter $x=\\ln ${k}$ rounded to two decimals.`,
    correctAnswer: String(rounded),
    numericAnswer: rounded,
    tolerance: 0.03,
    explanation: `$x=\\ln ${k}\\approx ${rounded}$.`,
  };
};

const calcPercentGrowth: Template = (rng) => {
  const p = rng.pick([5, 8, 12, 15]);
  const b = 1 + p / 100;
  const { options, correctAnswer } = fourOptions(
    `$b=${b}$`,
    [`$b=${p}$`, `$b=${p / 100}$`, `$b=${1 - p / 100}$`, `$b=${100 + p}$`],
    rng
  );
  return {
    id: id("2.3p", rng),
    skill: "2.3",
    calculator: true,
    kind: "mcq",
    question: `Annual growth of $${p}\\%$ means the exponential base $b$ in $ab^{t}$ is`,
    options,
    correctAnswer,
    explanation: `$b=1+\\dfrac{${p}}{100}=${b}$.`,
  };
};

export const unit2Templates: Template[] = [
  identifyGrowth,
  logProduct,
  logQuotient,
  logPower,
  changeOfBase,
  inverseExp,
  solveExpSameBase,
  solveLog,
  domainLog,
  composition,
  halfLife,
  tableLinearVsExp,
  logOfBase,
  convertToE,
  rangeLog,
  inverseLog,
  semiLog,
  compoundInterest,
  expEquationMove,
  condensing,
  numericLog,
  calcSolveExp,
  calcHalfLifeTime,
  calcChangeBase,
  calcCompoundCompare,
  calcDoubling,
  calcLogEval,
  calcExpTable,
  calcLnSolve,
  calcPercentGrowth,
];
