import { fourOptions, nonzero } from "../format";
import type { Rng } from "../rng";
import type { Template } from "../types";

const id = (skill: string, rng: Rng) => `gen-u3-${skill}-${rng.int(1, 1e9)}`;

const specialSin: Template = (rng) => {
  const items = [
    { deg: 0, rad: "0", sin: "0", cos: "1" },
    { deg: 30, rad: "\\pi/6", sin: "1/2", cos: "\\sqrt{3}/2" },
    { deg: 45, rad: "\\pi/4", sin: "\\sqrt{2}/2", cos: "\\sqrt{2}/2" },
    { deg: 60, rad: "\\pi/3", sin: "\\sqrt{3}/2", cos: "1/2" },
    { deg: 90, rad: "\\pi/2", sin: "1", cos: "0" },
  ] as const;
  const item = rng.pick(items);
  const useSin = rng.chance(0.5);
  const correct = `$${useSin ? item.sin : item.cos}$`;
  const { options, correctAnswer } = fourOptions(correct, ["$0$", "$1$", "$\\tfrac12$", "$\\sqrt{2}/2$", "$\\sqrt{3}/2$"], rng);
  const fn = useSin ? "\\sin" : "\\cos";
  return {
    id: id("3.3", rng),
    skill: "3.3",
    calculator: false,
    kind: "mcq",
    question: `$${fn}\\!\\left(${item.rad}\\right)=$`,
    options,
    correctAnswer,
    explanation: `Unit-circle value at $${item.deg}^\\circ=${item.rad}$.`,
  };
};

const degToRad: Template = (rng) => {
  const deg = rng.pick([30, 45, 60, 90, 120, 135, 150, 180]);
  const map: Record<number, string> = {
    30: "\\pi/6",
    45: "\\pi/4",
    60: "\\pi/3",
    90: "\\pi/2",
    120: "2\\pi/3",
    135: "3\\pi/4",
    150: "5\\pi/6",
    180: "\\pi",
  };
  const correct = `$${map[deg]}$`;
  const { options, correctAnswer } = fourOptions(correct, ["$\\pi$", "$\\pi/2$", `$${deg}\\pi$`, `$\\dfrac{${deg}}{\\pi}$`], rng);
  return {
    id: id("3.2", rng),
    skill: "3.2",
    calculator: false,
    kind: "mcq",
    question: `Convert $${deg}^\\circ$ to radians.`,
    options,
    correctAnswer,
    explanation: `Multiply by $\\pi/180$: $${deg}\\cdot\\pi/180=${map[deg]}$.`,
  };
};

const periodSin: Template = (rng) => {
  const b = rng.pick([2, 3, 4, 5, 6]);
  const correct = `$\\dfrac{2\\pi}{${b}}$`;
  const { options, correctAnswer } = fourOptions(correct, [`$${b}$`, `$2\\pi ${b}$`, `$\\dfrac{\\pi}{${b}}$`, `$\\dfrac{${b}}{2\\pi}$`], rng);
  return {
    id: id("3.5", rng),
    skill: "3.5",
    calculator: false,
    kind: "mcq",
    question: `The period of $y=\\sin(${b}x)$ is`,
    options,
    correctAnswer,
    explanation: `Period of $\\sin(bx)$ is $\\dfrac{2\\pi}{|b|}=\\dfrac{2\\pi}{${b}}$.`,
  };
};

const amplitude: Template = (rng) => {
  const a = nonzero(rng, -6, 6);
  const correct = `$${Math.abs(a)}$`;
  const { options, correctAnswer } = fourOptions(correct, [`$${a}$`, `$${2 * Math.abs(a)}$`, `$1$`, `$2\\pi$`], rng);
  return {
    id: id("3.5", rng),
    skill: "3.5",
    calculator: false,
    kind: "mcq",
    question: `The amplitude of $y=${a}\\cos(x)$ is`,
    options,
    correctAnswer,
    explanation: `Amplitude is $|a|=${Math.abs(a)}$. The sign reflects over the midline; it does not change amplitude.`,
  };
};

const midline: Template = (rng) => {
  const d = rng.int(-5, 6);
  const a = nonzero(rng, 1, 4);
  const correct = `$y=${d}$`;
  const { options, correctAnswer } = fourOptions(correct, [`$y=${a}$`, `$y=${a + d}$`, `$y=0$`, `$x=${d}$`], rng);
  return {
    id: id("3.6", rng),
    skill: "3.6",
    calculator: false,
    kind: "mcq",
    question: `The midline of $y=${a}\\sin x+${d}$ is`,
    options,
    correctAnswer,
    explanation: `The constant term $d$ is the midline: $y=${d}$.`,
  };
};

const phaseShift: Template = (rng) => {
  const h = rng.int(1, 4);
  const right = rng.chance(0.5);
  const inner = right ? `x-${h}` : `x+${h}`;
  const correct = right ? `$${h}$ units right` : `$${h}$ units left`;
  const { options, correctAnswer } = fourOptions(correct, [
    `$${h}$ units right`,
    `$${h}$ units left`,
    `$${h}$ units up`,
    `Period $${h}$`,
  ], rng);
  return {
    id: id("3.6", rng),
    skill: "3.6",
    calculator: false,
    kind: "mcq",
    question: `The phase shift of $y=\\sin(${inner})$ is`,
    options,
    correctAnswer,
    explanation: `$\\sin(x-h)$ shifts right $h$; $\\sin(x+h)$ shifts left $h$.`,
  };
};

const tanSpecial: Template = (rng) => {
  const items = [
    { rad: "0", tan: "0" },
    { rad: "\\pi/4", tan: "1" },
    { rad: "\\pi/6", tan: "1/\\sqrt{3}" },
    { rad: "\\pi/3", tan: "\\sqrt{3}" },
  ] as const;
  const item = rng.pick(items);
  const correct = `$${item.tan}$`;
  const { options, correctAnswer } = fourOptions(correct, ["$0$", "$1$", "$\\sqrt{3}$", "undefined"], rng);
  return {
    id: id("3.8", rng),
    skill: "3.8",
    calculator: false,
    kind: "mcq",
    question: `$\\tan\\!\\left(${item.rad}\\right)=$`,
    options,
    correctAnswer,
    explanation: `$\\tan\\theta=\\sin\\theta/\\cos\\theta$ at the standard angle ${item.rad}.`,
  };
};

const cscIdentity: Template = (rng) => {
  const { options, correctAnswer } = fourOptions("$1/\\sin\\theta$", ["$1/\\cos\\theta$", "$\\cos\\theta/\\sin\\theta$", "$\\sin\\theta$", "$1/\\tan\\theta$"], rng);
  return {
    id: id("3.11", rng),
    skill: "3.11",
    calculator: false,
    kind: "mcq",
    question: `$\\csc\\theta$ is equal to`,
    options,
    correctAnswer,
    explanation: `Cosecant is the reciprocal of sine.`,
  };
};

const pythagorean: Template = (rng) => {
  const s = rng.pick(["3/5", "5/13", "8/17"]);
  const map: Record<string, string> = { "3/5": "4/5", "5/13": "12/13", "8/17": "15/17" };
  const correct = `$${map[s]}$`;
  const { options, correctAnswer } = fourOptions(correct, [`$${s}$`, "$1$", "$0$", "$\\sqrt{2}/2$"], rng);
  return {
    id: id("3.12", rng),
    skill: "3.12",
    calculator: false,
    kind: "mcq",
    question: `If $\\sin\\theta=${s}$ and $\\theta$ is in QII, $\\cos\\theta$ has absolute value`,
    options,
    correctAnswer,
    explanation: `$\\sin^2+\\cos^2=1$ so $|\\cos\\theta|=${map[s]}$. (Sign would be negative in QII; this item asks the absolute value.)`,
  };
};

const arcsinRange: Template = (rng) => {
  const { options, correctAnswer } = fourOptions(
    "$[-\\pi/2,\\pi/2]$",
    ["$[0,\\pi]$", "$[0,2\\pi)$", "$(-\\infty,\\infty)$", "$[0,\\pi/2]$"],
    rng
  );
  return {
    id: id("3.9", rng),
    skill: "3.9",
    calculator: false,
    kind: "mcq",
    question: `The range of $y=\\arcsin x$ is`,
    options,
    correctAnswer,
    explanation: `Principal sine inverse outputs angles in $[-\\pi/2,\\pi/2]$.`,
  };
};

const polarToRect: Template = (rng) => {
  const items = [
    { r: 2, th: "0", x: "2", y: "0" },
    { r: 4, th: "\\pi/2", x: "0", y: "4" },
    { r: 2, th: "\\pi", x: "-2", y: "0" },
    { r: 6, th: "3\\pi/2", x: "0", y: "-6" },
  ] as const;
  const item = rng.pick(items);
  const correct = `$(${item.x},${item.y})$`;
  const { options, correctAnswer } = fourOptions(correct, [`$(${item.y},${item.x})$`, `$(${item.r},0)$`, "$(0,0)$", `$(-${item.x},-${item.y})$`], rng);
  return {
    id: id("3.13", rng),
    skill: "3.13",
    calculator: false,
    kind: "mcq",
    question: `The polar point $(r,\\theta)=(${item.r},${item.th})$ in rectangular coordinates is`,
    options,
    correctAnswer,
    explanation: `$x=r\\cos\\theta$, $y=r\\sin\\theta$ at a quadrantal angle.`,
  };
};

const rFromRect: Template = (rng) => {
  const x = rng.pick([3, 5, 8, 6]);
  const y = rng.pick([4, 12, 15, 8]);
  const r = Math.hypot(x, y);
  const nice = Number.isInteger(r) ? String(r) : `\\sqrt{${x * x + y * y}}`;
  const correct = `$${nice}$`;
  const { options, correctAnswer } = fourOptions(correct, [`$${x + y}$`, `$${x}$`, `$${y}$`, `$${x * y}$`], rng);
  return {
    id: id("3.13", rng),
    skill: "3.13",
    calculator: true,
    kind: "mcq",
    question: `For the point $(${x},${y})$, $r=\\sqrt{x^2+y^2}$ equals`,
    options,
    correctAnswer,
    explanation: `$r=\\sqrt{${x}^2+${y}^2}=\\sqrt{${x * x + y * y}}=${nice}$.`,
  };
};

const evenOddTrig: Template = (rng) => {
  const sin = rng.chance(0.5);
  const correct = sin ? "Odd" : "Even";
  const { options, correctAnswer } = fourOptions(correct, ["Even", "Odd", "Neither", "Periodic only"], rng);
  return {
    id: id("3.2", rng),
    skill: "3.2",
    calculator: false,
    kind: "mcq",
    question: `$f(\\theta)=${sin ? "\\sin" : "\\cos"}\\theta$ is`,
    options,
    correctAnswer,
    explanation: sin ? "$\\sin(-\\theta)=-\\sin\\theta$ (odd)." : "$\\cos(-\\theta)=\\cos\\theta$ (even).",
  };
};

const coterminal: Template = (rng) => {
  const deg = rng.pick([30, 45, 60, 90]);
  const correct = `$${deg + 360}^\\circ$`;
  const { options, correctAnswer } = fourOptions(correct, [`$${deg + 180}^\\circ$`, `$${360 - deg}^\\circ$`, `$${deg / 2}^\\circ$`, `$${2 * deg}^\\circ$`], rng);
  return {
    id: id("3.2", rng),
    skill: "3.2",
    calculator: false,
    kind: "mcq",
    question: `An angle coterminal with $${deg}^\\circ$ is`,
    options,
    correctAnswer,
    explanation: `Add a full rotation: $${deg}+360=${deg + 360}$.`,
  };
};

const tanUndefined: Template = (rng) => {
  const { options, correctAnswer } = fourOptions(
    "$\\cos\\theta=0$",
    ["$\\sin\\theta=0$", "$\\tan\\theta=1$", "$\\theta=0$", "$\\sin\\theta=1$"],
    rng
  );
  return {
    id: id("3.8", rng),
    skill: "3.8",
    calculator: false,
    kind: "mcq",
    question: `$\\tan\\theta$ is undefined when`,
    options,
    correctAnswer,
    explanation: `$\\tan=\\sin/\\cos$ is undefined when the denominator $\\cos\\theta=0$.`,
  };
};

const solveSin: Template = (rng) => {
  const { options, correctAnswer } = fourOptions(
    "$\\pi/6$ and $5\\pi/6$",
    ["$\\pi/6$ only", "$\\pi/3$ and $2\\pi/3$", "$0$ and $\\pi$", "$\\pi/2$"],
    rng
  );
  return {
    id: id("3.10", rng),
    skill: "3.10",
    calculator: false,
    kind: "mcq",
    question: `Solutions of $\\sin\\theta=\\tfrac12$ on $[0,2\\pi)$ are`,
    options,
    correctAnswer,
    explanation: `Sine is $1/2$ at $\\pi/6$ (QI) and $5\\pi/6$ (QII).`,
  };
};

const frequency: Template = (rng) => {
  const b = rng.pick([2, 4, 6]);
  const correct = `$${b / (2)}$`; // wait frequency = |b|/(2π) in radians... AP often uses period 2π/|b| and "number of cycles in 2π" = |b|
  const cycles = b;
  const { options, correctAnswer } = fourOptions(`$${cycles}$ cycles in $2\\pi$ radians`, [`$1$ cycle`, `$${2 * b}$ cycles`, `Period $${b}$`, `$\\pi$ cycles`], rng);
  return {
    id: id("3.5", rng),
    skill: "3.5",
    calculator: false,
    kind: "mcq",
    question: `$y=\\sin(${b}x)$ completes how many cycles on $[0,2\\pi]$?`,
    options,
    correctAnswer,
    explanation: `The coefficient $b=${b}$ is the number of cycles in $2\\pi$ radians.`,
  };
};

const secIdentity: Template = (rng) => {
  const { options, correctAnswer } = fourOptions("$1/\\cos\\theta$", ["$1/\\sin\\theta$", "$\\cos\\theta$", "$\\sin/\\cos$", "$1/\\tan\\theta$"], rng);
  return {
    id: id("3.11", rng),
    skill: "3.11",
    calculator: false,
    kind: "mcq",
    question: `$\\sec\\theta=$`,
    options,
    correctAnswer,
    explanation: `Secant is the reciprocal of cosine.`,
  };
};

const referenceQII: Template = (rng) => {
  const { options, correctAnswer } = fourOptions("$\\pi-\\theta$", ["$\\theta-\\pi$", "$\\theta+\\pi$", "$2\\pi-\\theta$", "$\\theta$"], rng);
  return {
    id: id("3.3", rng),
    skill: "3.3",
    calculator: false,
    kind: "mcq",
    question: `If $\\theta$ is in QII, the reference angle is`,
    options,
    correctAnswer,
    explanation: `In radians, QII reference angle is $\\pi-\\theta$.`,
  };
};

const numericPeriod: Template = (rng) => {
  const b = rng.pick([2, 4, 5]);
  const val = 2 * Math.PI / b;
  return {
    id: id("3.5n", rng),
    skill: "3.5",
    calculator: true,
    kind: "numeric",
    question: `Enter the period of $y=\\cos(${b}x)$ as a decimal rounded to two places (use $3.14$ for $\\pi$ if needed: $2\\pi/b$).`,
    correctAnswer: val.toFixed(2),
    numericAnswer: val,
    tolerance: 0.05,
    explanation: `Period $=2\\pi/|b|=2\\pi/${b}\\approx ${val.toFixed(2)}$.`,
  };
};

const calcSinDecimal: Template = (rng) => {
  const deg = rng.pick([20, 35, 50, 70]);
  const rad = (deg * Math.PI) / 180;
  const val = Math.sin(rad);
  const rounded = Math.round(val * 100) / 100;
  return {
    id: id("3.3c", rng),
    skill: "3.3",
    calculator: true,
    kind: "numeric",
    question: `Enter $\\sin(${deg}^\\circ)$ rounded to two decimals (calculator in degree mode).`,
    correctAnswer: String(rounded),
    numericAnswer: rounded,
    tolerance: 0.02,
    explanation: `$\\sin(${deg}^\\circ)\\approx ${rounded}$.`,
  };
};

const calcDegToRadNum: Template = (rng) => {
  const deg = rng.pick([40, 75, 100, 210]);
  const rad = (deg * Math.PI) / 180;
  const rounded = Math.round(rad * 100) / 100;
  return {
    id: id("3.2c", rng),
    skill: "3.2",
    calculator: true,
    kind: "numeric",
    question: `Convert $${deg}^\\circ$ to radians; enter the decimal rounded to two places.`,
    correctAnswer: String(rounded),
    numericAnswer: rounded,
    tolerance: 0.03,
    explanation: `$${deg}\\cdot\\pi/180\\approx ${rounded}$.`,
  };
};

const calcPeriodNum: Template = (rng) => {
  const b = rng.pick([1.5, 2.5, 3.5]);
  const period = (2 * Math.PI) / b;
  const rounded = Math.round(period * 100) / 100;
  const { options, correctAnswer } = fourOptions(
    `$${rounded}$`,
    [`$${b}$`, `$${2 * b}$`, `$\\pi$`, `$2$`],
    rng
  );
  return {
    id: id("3.5p", rng),
    skill: "3.5",
    calculator: true,
    kind: "mcq",
    question: `Period of $y=\\sin(${b}x)$ (decimal) is closest to`,
    options,
    correctAnswer,
    explanation: `$2\\pi/${b}\\approx ${rounded}$.`,
  };
};

const calcPolarR: Template = (rng) => {
  const x = rng.pick([5, 7, 9]);
  const y = rng.pick([12, 24, 40]);
  // pick pairs that aren't always nice - use calculator
  const r = Math.hypot(x, y);
  const rounded = Math.round(r * 100) / 100;
  return {
    id: id("3.13c", rng),
    skill: "3.13",
    calculator: true,
    kind: "numeric",
    question: `Point $(${x},${y})$. Enter $r=\\sqrt{x^2+y^2}$ rounded to two decimals.`,
    correctAnswer: String(rounded),
    numericAnswer: rounded,
    tolerance: 0.05,
    explanation: `$r=\\sqrt{${x}^2+${y}^2}\\approx ${rounded}$.`,
  };
};

const calcSolveSin: Template = (rng) => {
  const k = rng.pick([0.3, 0.4, 0.6, 0.7]);
  const theta = Math.asin(k); // radians primary
  const rounded = Math.round(theta * 100) / 100;
  return {
    id: id("3.10c", rng),
    skill: "3.10",
    calculator: true,
    kind: "numeric",
    question: `Enter the principal solution of $\\sin\\theta=${k}$ in radians (two decimals), $\\theta=\\arcsin(${k})$.`,
    correctAnswer: String(rounded),
    numericAnswer: rounded,
    tolerance: 0.03,
    explanation: `$\\theta=\\arcsin(${k})\\approx ${rounded}$ radians.`,
  };
};

const calcCosEval: Template = (rng) => {
  const x = rng.pick([1.2, 0.8, 2.1]);
  const val = Math.cos(x);
  const rounded = Math.round(val * 100) / 100;
  const { options, correctAnswer } = fourOptions(
    `$${rounded}$`,
    [`$${Math.round(Math.sin(x) * 100) / 100}$`, `$1$`, `$0$`, `$${-rounded}$`],
    rng
  );
  return {
    id: id("3.3e", rng),
    skill: "3.3",
    calculator: true,
    kind: "mcq",
    question: `$\\cos(${x})$ (radians) is closest to`,
    options,
    correctAnswer,
    explanation: `Calculator in radian mode: $\\cos(${x})\\approx ${rounded}$.`,
  };
};

const calcAmplitudeCheck: Template = (rng) => {
  const a = rng.int(2, 6);
  const b = rng.int(2, 5);
  const mid = rng.int(1, 4);
  // max of a sin + mid is a+mid
  const max = a + mid;
  return {
    id: id("3.5m", rng),
    skill: "3.5",
    calculator: true,
    kind: "numeric",
    question: `Maximum value of $y=${a}\\sin(${b}x)+${mid}$ is`,
    correctAnswer: String(max),
    numericAnswer: max,
    tolerance: 0,
    explanation: `Max of sine is $1$, so max $=${a}+${mid}=${max}$.`,
  };
};

const calcPhaseFromForm: Template = (rng) => {
  const b = rng.pick([2, 3, 4]);
  const c = rng.pick([Math.PI / 2, Math.PI / 3, Math.PI]);
  const h = c / b;
  const rounded = Math.round(h * 100) / 100;
  return {
    id: id("3.5ph", rng),
    skill: "3.5",
    calculator: true,
    kind: "numeric",
    question: `Rewrite $\\sin(${b}x-${Number(c.toFixed(2))})$ as $\\sin\\big(${b}(x-h)\\big)$. Enter $h$ (two decimals).`,
    correctAnswer: String(rounded),
    numericAnswer: rounded,
    tolerance: 0.05,
    explanation: `$h=c/b=${Number(c.toFixed(2))}/${b}\\approx ${rounded}$.`,
  };
};

const calcTanDecimal: Template = (rng) => {
  const deg = rng.pick([25, 40, 55]);
  const val = Math.tan((deg * Math.PI) / 180);
  const rounded = Math.round(val * 100) / 100;
  return {
    id: id("3.8c", rng),
    skill: "3.8",
    calculator: true,
    kind: "numeric",
    question: `Enter $\\tan(${deg}^\\circ)$ rounded to two decimals.`,
    correctAnswer: String(rounded),
    numericAnswer: rounded,
    tolerance: 0.03,
    explanation: `$\\tan(${deg}^\\circ)\\approx ${rounded}$.`,
  };
};

export const unit3Templates: Template[] = [
  specialSin,
  degToRad,
  periodSin,
  amplitude,
  midline,
  phaseShift,
  tanSpecial,
  cscIdentity,
  pythagorean,
  arcsinRange,
  polarToRect,
  rFromRect,
  evenOddTrig,
  coterminal,
  tanUndefined,
  solveSin,
  frequency,
  secIdentity,
  referenceQII,
  numericPeriod,
  calcSinDecimal,
  calcDegToRadNum,
  calcPeriodNum,
  calcPolarR,
  calcSolveSin,
  calcCosEval,
  calcAmplitudeCheck,
  calcPhaseFromForm,
  calcTanDecimal,
];
