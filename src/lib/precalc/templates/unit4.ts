import { fourOptions, nonzero } from "../format";
import type { Rng } from "../rng";
import type { Template } from "../types";

const id = (skill: string, rng: Rng) => `gen-u4-${skill}-${rng.int(1, 1e9)}`;

const elimLinear: Template = (rng) => {
  const a = nonzero(rng, 1, 5);
  const b = nonzero(rng, 1, 5);
  const c = rng.int(-4, 5);
  // x = a t, y = b t + c  => y = (b/a)x + c
  const correct = `$y=\\dfrac{${b}}{${a}}x${c >= 0 ? `+${c}` : c}$`;
  const { options, correctAnswer } = fourOptions(correct, [
    `$y=\\dfrac{${a}}{${b}}x${c >= 0 ? `+${c}` : c}$`,
    `$y=${b}x+${c}$`,
    `$x=\\dfrac{${b}}{${a}}y$`,
    `$y=${a}x+${b}$`,
  ], rng);
  return {
    id: id("4.1", rng),
    skill: "4.1",
    calculator: false,
    kind: "mcq",
    question: `Eliminate the parameter: $x=${a}t$, $y=${b}t${c >= 0 ? `+${c}` : c}$.`,
    options,
    correctAnswer,
    explanation: `$t=x/${a}$, so $y=${b}(x/${a})${c >= 0 ? `+${c}` : c}$.`,
  };
};

const paramPoint: Template = (rng) => {
  const t = rng.int(1, 5);
  const m = nonzero(rng, 1, 4);
  const k = rng.int(-3, 4);
  const x = m * t + k;
  const y = t * t;
  return {
    id: id("4.1", rng),
    skill: "4.1",
    calculator: false,
    kind: "numeric",
    question: `For $x=${m}t${k >= 0 ? `+${k}` : k}$, $y=t^2$, enter the $x$-coordinate when $t=${t}$.`,
    correctAnswer: String(x),
    numericAnswer: x,
    tolerance: 0.01,
    explanation: `$x=${m}(${t})${k >= 0 ? `+${k}` : k}=${x}$. (Also $y=${y}$.)`,
  };
};

const circleRadius: Template = (rng) => {
  const r = rng.int(2, 8);
  const correct = `$${r}$`;
  const { options, correctAnswer } = fourOptions(correct, [`$${r * r}$`, `$${2 * r}$`, `$1$`, `$${r + 1}$`], rng);
  return {
    id: id("4.4", rng),
    skill: "4.4",
    calculator: false,
    kind: "mcq",
    question: `$x=${r}\\cos t$, $y=${r}\\sin t$ is a circle of radius`,
    options,
    correctAnswer,
    explanation: `$x^2+y^2=${r}^2$.`,
  };
};

const lineParam: Template = (rng) => {
  const x0 = rng.int(-3, 4);
  const y0 = rng.int(-3, 4);
  const a = nonzero(rng, 1, 4);
  const b = nonzero(rng, -4, 4);
  const correct = `$x=${x0}+${a}t$,\\ $y=${y0}${b >= 0 ? `+${b}` : b}t$`;
  // Keep options as readable strings
  const alt1 = `$x=${a}t$,\\ $y=${b}t$`;
  const alt2 = `$x=${x0}\\cos t$,\\ $y=${y0}\\sin t$`;
  const alt3 = `$x=${x0}t$,\\ $y=${y0}t$`;
  const { options, correctAnswer } = fourOptions(correct, [alt1, alt2, alt3], rng);
  return {
    id: id("4.4", rng),
    skill: "4.4",
    calculator: false,
    kind: "mcq",
    question: `A parametric form for the line through $(${x0},${y0})$ with direction $\\langle ${a},${b}\\rangle$ is`,
    options,
    correctAnswer,
    explanation: `$\\mathbf{r}(t)=\\langle ${x0},${y0}\\rangle+t\\langle ${a},${b}\\rangle$.`,
  };
};

const vectorMag: Template = (rng) => {
  const triples = [
    [3, 4, 5],
    [5, 12, 13],
    [6, 8, 10],
    [8, 15, 17],
    [7, 24, 25],
  ] as const;
  const [a, b, mag] = rng.pick(triples);
  return {
    id: id("4.8", rng),
    skill: "4.8",
    calculator: false,
    kind: "numeric",
    question: `Enter $\\|\\langle ${a},${b}\\rangle\\|$.`,
    correctAnswer: String(mag),
    numericAnswer: mag,
    tolerance: 0.01,
    explanation: `$\\sqrt{${a}^2+${b}^2}=${mag}$.`,
  };
};

const vectorAdd: Template = (rng) => {
  const a = rng.int(-5, 6);
  const b = rng.int(-5, 6);
  const c = rng.int(-5, 6);
  const d = rng.int(-5, 6);
  const correct = `$\\langle ${a + c},${b + d}\\rangle$`;
  const { options, correctAnswer } = fourOptions(correct, [
    `$\\langle ${a - c},${b - d}\\rangle$`,
    `$\\langle ${a + b},${c + d}\\rangle$`,
    `$\\langle ${a * c},${b * d}\\rangle$`,
    `$\\langle ${c},${d}\\rangle$`,
  ], rng);
  return {
    id: id("4.8", rng),
    skill: "4.8",
    calculator: false,
    kind: "mcq",
    question: `$\\langle ${a},${b}\\rangle+\\langle ${c},${d}\\rangle=$`,
    options,
    correctAnswer,
    explanation: "Add corresponding components.",
  };
};

const dotProduct: Template = (rng) => {
  const a = rng.int(-4, 5);
  const b = rng.int(-4, 5);
  const c = rng.int(-4, 5);
  const d = rng.int(-4, 5);
  const ans = a * c + b * d;
  return {
    id: id("4.8", rng),
    skill: "4.8",
    calculator: false,
    kind: "numeric",
    question: `Enter $\\langle ${a},${b}\\rangle\\cdot\\langle ${c},${d}\\rangle$.`,
    correctAnswer: String(ans),
    numericAnswer: ans,
    tolerance: 0.01,
    explanation: `${a}(${c})+${b}(${d})=${ans}.`,
  };
};

const scalarMult: Template = (rng) => {
  const k = nonzero(rng, 2, 5);
  const a = rng.int(-4, 5);
  const b = rng.int(-4, 5);
  const correct = `$\\langle ${k * a},${k * b}\\rangle$`;
  const { options, correctAnswer } = fourOptions(correct, [
    `$\\langle ${k + a},${k + b}\\rangle$`,
    `$\\langle ${a},${b}\\rangle$`,
    `$\\langle ${k * b},${k * a}\\rangle$`,
    `$\\langle ${-k * a},${-k * b}\\rangle$`,
  ], rng);
  return {
    id: id("4.8", rng),
    skill: "4.8",
    calculator: false,
    kind: "mcq",
    question: `$${k}\\langle ${a},${b}\\rangle=$`,
    options,
    correctAnswer,
    explanation: "Multiply each component by the scalar.",
  };
};

const matrixVector: Template = (rng) => {
  const a = rng.int(-3, 4);
  const b = rng.int(-3, 4);
  const c = rng.int(-3, 4);
  const d = rng.int(-3, 4);
  const x = rng.int(-3, 4);
  const y = rng.int(-3, 4);
  const r1 = a * x + b * y;
  const r2 = c * x + d * y;
  const correct = `$\\begin{bmatrix}${r1}\\\\${r2}\\end{bmatrix}$`;
  const { options, correctAnswer } = fourOptions(correct, [
    `$\\begin{bmatrix}${a * x}\\\\${d * y}\\end{bmatrix}$`,
    `$\\begin{bmatrix}${r2}\\\\${r1}\\end{bmatrix}$`,
    `$\\begin{bmatrix}${x}\\\\${y}\\end{bmatrix}$`,
    `$\\begin{bmatrix}${a + x}\\\\${d + y}\\end{bmatrix}$`,
  ], rng);
  return {
    id: id("4.10", rng),
    skill: "4.10",
    calculator: false,
    kind: "mcq",
    question: `$\\begin{bmatrix}${a}&${b}\\\\${c}&${d}\\end{bmatrix}\\begin{bmatrix}${x}\\\\${y}\\end{bmatrix}=$`,
    options,
    correctAnswer,
    explanation: `Rows times vector: $(${a})(${x})+(${b})(${y})=${r1}$, $(${c})(${x})+(${d})(${y})=${r2}$.`,
  };
};

const determinant: Template = (rng) => {
  const a = rng.int(-5, 6);
  const b = rng.int(-5, 6);
  const c = rng.int(-5, 6);
  const d = rng.int(-5, 6);
  const ans = a * d - b * c;
  return {
    id: id("4.10", rng),
    skill: "4.10",
    calculator: false,
    kind: "numeric",
    question: `Enter $\\det\\begin{bmatrix}${a}&${b}\\\\${c}&${d}\\end{bmatrix}$.`,
    correctAnswer: String(ans),
    numericAnswer: ans,
    tolerance: 0.01,
    explanation: `${a}(${d})-(${b})(${c})=${ans}.`,
  };
};

const circleCenter: Template = (rng) => {
  const h = rng.int(-4, 5);
  const k = rng.int(-4, 5);
  const r = rng.int(2, 6);
  const correct = `$(${h},${k})$, $r=${r}$`;
  const { options, correctAnswer } = fourOptions(correct, [
    `$(${-h},${-k})$, $r=${r}$`,
    `$(${h},${k})$, $r=${r * r}$`,
    `$(0,0)$, $r=${r}$`,
    `$(${k},${h})$, $r=${r}$`,
  ], rng);
  return {
    id: id("4.6", rng),
    skill: "4.6",
    calculator: false,
    kind: "mcq",
    question: `Center and radius of $(x${h >= 0 ? `-${h}` : `+${-h}`})^2+(y${k >= 0 ? `-${k}` : `+${-k}`})^2=${r * r}$:`,
    options,
    correctAnswer,
    explanation: `$(x-h)^2+(y-k)^2=r^2$ with $h=${h}$, $k=${k}$, $r=${r}$.`,
  };
};

const elimQuadratic: Template = (rng) => {
  // x = t, y = t^2 + c  => y = x^2 + c
  const c = rng.int(-3, 4);
  const correct = `$y=x^2${c >= 0 ? `+${c}` : c}$`;
  const { options, correctAnswer } = fourOptions(correct, [
    `$y=x${c >= 0 ? `+${c}` : c}$`,
    `$x=y^2${c >= 0 ? `+${c}` : c}$`,
    `$y=-x^2${c >= 0 ? `+${c}` : c}$`,
    `$xy=${c}$`,
  ], rng);
  return {
    id: id("4.1", rng),
    skill: "4.1",
    calculator: false,
    kind: "mcq",
    question: `Eliminate $t$: $x=t$, $y=t^2${c >= 0 ? `+${c}` : c}$.`,
    options,
    correctAnswer,
    explanation: `Replace $t$ with $x$.`,
  };
};

const perpendicular: Template = (rng) => {
  const a = nonzero(rng, 1, 5);
  const b = nonzero(rng, 1, 5);
  // perpendicular to <a,b> is <-b,a> or <b,-a>
  const correct = `$\\langle ${-b},${a}\\rangle$`;
  const { options, correctAnswer } = fourOptions(correct, [
    `$\\langle ${a},${b}\\rangle$`,
    `$\\langle ${b},${a}\\rangle$`,
    `$\\langle ${-a},${-b}\\rangle$`,
    `$\\langle ${a},${-b}\\rangle$`,
  ], rng);
  return {
    id: id("4.8", rng),
    skill: "4.8",
    calculator: false,
    kind: "mcq",
    question: `Which vector is perpendicular to $\\langle ${a},${b}\\rangle$?`,
    options,
    correctAnswer,
    explanation: `Dot product ${a}(${-b})+${b}(${a})=0.`,
  };
};

const arocParam: Template = (rng) => {
  const t1 = rng.int(0, 2);
  const t2 = t1 + rng.int(1, 3);
  // x=t, y=t^2
  const dy = t2 * t2 - t1 * t1;
  const dx = t2 - t1;
  const ans = dy / dx;
  return {
    id: id("4.3", rng),
    skill: "4.3",
    calculator: true,
    kind: "numeric",
    question: `Parametric $x=t$, $y=t^2$. Enter the average rate of change of $y$ with respect to $x$ on $t\\in[${t1},${t2}]$.`,
    correctAnswer: String(ans),
    numericAnswer: ans,
    tolerance: 0.01,
    explanation: `$\\dfrac{y(${t2})-y(${t1})}{x(${t2})-x(${t1})}=\\dfrac{${t2 * t2}-${t1 * t1}}{${dx}}=${ans}$.`,
  };
};

const magCalc: Template = (rng) => {
  const a = rng.int(2, 9);
  const b = rng.int(2, 9);
  const mag = Math.sqrt(a * a + b * b);
  return {
    id: id("4.8", rng),
    skill: "4.8",
    calculator: true,
    kind: "numeric",
    question: `Enter $\\|\\langle ${a},${b}\\rangle\\|$ rounded to two decimals.`,
    correctAnswer: mag.toFixed(2),
    numericAnswer: Number(mag.toFixed(2)),
    tolerance: 0.02,
    explanation: `$\\sqrt{${a * a}+${b * b}}\\approx ${mag.toFixed(2)}$.`,
  };
};

const matrixFirst: Template = (rng) => {
  const a = rng.int(1, 5);
  const b = rng.int(1, 5);
  const x = rng.int(1, 4);
  const y = rng.int(1, 4);
  const ans = a * x + b * y;
  return {
    id: id("4.10", rng),
    skill: "4.10",
    calculator: true,
    kind: "numeric",
    question: `Enter the top entry of $\\begin{bmatrix}${a}&${b}\\\\0&1\\end{bmatrix}\\begin{bmatrix}${x}\\\\${y}\\end{bmatrix}$.`,
    correctAnswer: String(ans),
    numericAnswer: ans,
    tolerance: 0.01,
    explanation: `${a}(${x})+${b}(${y})=${ans}.`,
  };
};

const identityRecognize: Template = (rng) => {
  const correct = `$\\begin{bmatrix}1&0\\\\0&1\\end{bmatrix}$`;
  const { options, correctAnswer } = fourOptions(correct, [
    `$\\begin{bmatrix}0&1\\\\1&0\\end{bmatrix}$`,
    `$\\begin{bmatrix}1&1\\\\0&1\\end{bmatrix}$`,
    `$\\begin{bmatrix}2&0\\\\0&2\\end{bmatrix}$`,
  ], rng);
  return {
    id: id("4.10", rng),
    skill: "4.10",
    calculator: false,
    kind: "mcq",
    question: "The $2\\times 2$ identity matrix is",
    options,
    correctAnswer,
    explanation: "Ones on the diagonal, zeros elsewhere.",
  };
};

const hyperbola: Template = (rng) => {
  const correct = "Hyperbola";
  const { options, correctAnswer } = fourOptions(correct, ["Ellipse", "Circle", "Parabola"], rng);
  return {
    id: id("4.6", rng),
    skill: "4.6",
    calculator: false,
    kind: "mcq",
    question: "The graph of $\\dfrac{x^2}{4}-\\dfrac{y^2}{9}=1$ is a",
    options,
    correctAnswer,
    explanation: "Difference of squared terms with $=1$ is a hyperbola.",
  };
};

const ellipse: Template = (rng) => {
  const a = rng.pick([2, 3, 4, 5]);
  const b = rng.pick([2, 3, 4, 5].filter((n) => n !== a));
  const correct = `$a=${a}$, $b=${b}$`;
  const { options, correctAnswer } = fourOptions(correct, [
    `$a=${a * a}$, $b=${b * b}$`,
    `$a=${b}$, $b=${a}$`,
    `$r=${a}$`,
  ], rng);
  return {
    id: id("4.6", rng),
    skill: "4.6",
    calculator: false,
    kind: "mcq",
    question: `For $\\dfrac{x^2}{${a * a}}+\\dfrac{y^2}{${b * b}}=1$, the semi-axes lengths are`,
    options,
    correctAnswer,
    explanation: `$a^2=${a * a}$, $b^2=${b * b}$.`,
  };
};

const unitVector: Template = (rng) => {
  const b = rng.int(2, 8);
  const correct = `$\\langle 0,1\\rangle$`;
  const { options, correctAnswer } = fourOptions(correct, [
    `$\\langle 0,${b}\\rangle$`,
    `$\\langle 1,0\\rangle$`,
    `$\\langle ${b},0\\rangle$`,
  ], rng);
  return {
    id: id("4.8", rng),
    skill: "4.8",
    calculator: false,
    kind: "mcq",
    question: `A unit vector in the direction of $\\langle 0,${b}\\rangle$ is`,
    options,
    correctAnswer,
    explanation: `Divide by ${b} to get $\\langle 0,1\\rangle$.`,
  };
};

export const unit4Templates: Template[] = [
  elimLinear,
  paramPoint,
  circleRadius,
  lineParam,
  vectorMag,
  vectorAdd,
  dotProduct,
  scalarMult,
  matrixVector,
  determinant,
  circleCenter,
  elimQuadratic,
  perpendicular,
  arocParam,
  magCalc,
  matrixFirst,
  identityRecognize,
  hyperbola,
  ellipse,
  unitVector,
];
