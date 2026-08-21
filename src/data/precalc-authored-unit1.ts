import { mcq, numeric } from "./precalc-q";
import type { PrecalcQuestion } from "./precalc";

export const precalcAuthoredUnit1: PrecalcQuestion[] = [
  mcq(
    "pc1-a1",
    "1.2",
    false,
    "The average rate of change of $f$ on $[2,5]$ is $4$. If $f(2)=1$, what is $f(5)$?",
    ["$13$", "$12$", "$9$", "$5$"],
    "$13$",
    "$\\dfrac{f(5)-1}{3}=4\\Rightarrow f(5)-1=12\\Rightarrow f(5)=13$."
  ),
  mcq(
    "pc1-a2",
    "1.6",
    false,
    "As $x\\to\\pm\\infty$, $f(x)=-2x^4+x$ behaves like",
    ["Both ends $\\to -\\infty$", "Both ends $\\to +\\infty$", "Left $+\\infty$, right $-\\infty$", "Left $-\\infty$, right $+\\infty$"],
    "Both ends $\\to -\\infty$",
    "Even degree with negative leading coefficient: both ends go to $-\\infty$."
  ),
  mcq(
    "pc1-a3",
    "1.5",
    false,
    "If $p(x)=x^3-4x^2+x+6$ and $p(2)=0$, then a factor of $p$ is",
    ["$x-2$", "$x+2$", "$x-6$", "$x-1$"],
    "$x-2$",
    "Factor Theorem: $p(c)=0\\Rightarrow (x-c)$ is a factor."
  ),
  mcq(
    "pc1-a4",
    "1.8",
    false,
    "After simplifying $f(x)=\\dfrac{(x-1)(x+4)}{(x-1)(x-3)}$, which is true?",
    [
      "Hole at $x=1$; VA at $x=3$",
      "VA at $x=1$ and $x=3$",
      "Hole at $x=3$; VA at $x=1$",
      "No discontinuities",
    ],
    "Hole at $x=1$; VA at $x=3$",
    "Cancel $x-1$ (hole). Remaining denominator zero at $x=3$ is a vertical asymptote."
  ),
  mcq(
    "pc1-a5",
    "1.7",
    false,
    "The horizontal asymptote of $g(x)=\\dfrac{6x^2-1}{2x^2+5}$ is",
    ["$y=3$", "$y=0$", "$y=6$", "None"],
    "$y=3$",
    "Equal degrees: ratio of leading coefficients $6/2=3$."
  ),
  mcq(
    "pc1-a6",
    "1.5",
    false,
    "A polynomial with real coefficients has a zero at $2+3i$. Another zero must be",
    ["$2-3i$", "$-2+3i$", "$3+2i$", "$2$"],
    "$2-3i$",
    "Nonreal zeros come in conjugate pairs."
  ),
  mcq(
    "pc1-a7",
    "1.4",
    false,
    "A degree-$5$ polynomial has at most how many turning points?",
    ["$4$", "$5$", "$6$", "$10$"],
    "$4$",
    "At most $n-1$ turning points for degree $n$."
  ),
  mcq(
    "pc1-a8",
    "1.5",
    false,
    "Near $x=-2$, $f$ has factor $(x+2)^4$. The graph",
    [
      "Touches the $x$-axis and turns around",
      "Crosses the $x$-axis",
      "Has a vertical asymptote",
      "Is undefined",
    ],
    "Touches the $x$-axis and turns around",
    "Even multiplicity → touch and turn."
  ),
  mcq(
    "pc1-a9",
    "1.3",
    false,
    "For equally spaced $x$, outputs $3,5,7,9$ best match a",
    ["Linear model", "Quadratic model", "Exponential model", "Cubic model"],
    "Linear model",
    "Constant first differences of $2$."
  ),
  mcq(
    "pc1-a10",
    "1.9",
    false,
    "Which expression is equivalent to $\\dfrac{x^2-9}{x-3}$ for $x\\neq 3$?",
    ["$x+3$", "$x-3$", "$x^2-3$", "$9$"],
    "$x+3$",
    "Factor: $\\dfrac{(x-3)(x+3)}{x-3}=x+3$."
  ),
  mcq(
    "pc1-a11",
    "1.10",
    false,
    "$g(x)=f(x-2)+5$ is $f$ shifted",
    ["$2$ right and $5$ up", "$2$ left and $5$ up", "$2$ right and $5$ down", "$5$ right and $2$ up"],
    "$2$ right and $5$ up",
    "$f(x-h)$ shifts right $h$; add $k$ shifts up $k$."
  ),
  mcq(
    "pc1-a12",
    "1.5",
    false,
    "Possible rational zeros of $2x^3-x+6$ include",
    ["$\\pm 1,\\pm 2,\\pm 3,\\pm 6,\\pm\\tfrac12,\\pm\\tfrac32$", "$\\pm 2$ only", "$\\pm 6$ only", "$0$ only"],
    "$\\pm 1,\\pm 2,\\pm 3,\\pm 6,\\pm\\tfrac12,\\pm\\tfrac32$",
    "Rational Root Theorem: $\\pm$ factors of $6$ over factors of $2$."
  ),
  mcq(
    "pc1-a13",
    "1.7",
    false,
    "For $f(x)=\\dfrac{x+1}{x^2+4}$, the horizontal asymptote is",
    ["$y=0$", "$y=1$", "$y=4$", "None"],
    "$y=0$",
    "Degree of numerator less than denominator."
  ),
  mcq(
    "pc1-a14",
    "1.4",
    false,
    "The $y$-intercept of $p(x)=4x^3-2x+7$ is",
    ["$7$", "$4$", "$-2$", "$0$"],
    "$7$",
    "$p(0)$ is the constant term."
  ),
  mcq(
    "pc1-a15",
    "1.2",
    true,
    "On a calculator-active item, $f(x)=x^2-3x$ on $[1,4]$. Average rate of change is",
    ["$2$", "$1$", "$4$", "$5$"],
    "$2$",
    "$\\dfrac{f(4)-f(1)}{3}=\\dfrac{(16-12)-(1-3)}{3}=\\dfrac{4-(-2)}{3}=2$."
  ),
  numeric(
    "pc1-a16",
    "1.5",
    false,
    "When $p(x)=x^2-5x+6$ is divided by $x-1$, enter the remainder.",
    2,
    "$p(1)=1-5+6=2$."
  ),
  numeric(
    "pc1-a17",
    "1.2",
    false,
    "If $f(x)=2x+1$, enter the average rate of change on $[0,5]$.",
    2,
    "Linear slope is constantly $2$."
  ),
  mcq(
    "pc1-a18",
    "1.6",
    false,
    "Which best matches the end behavior of $f(x)=5x^3-x$?",
    [
      "Left $-\\infty$, right $+\\infty$",
      "Both ends $+\\infty$",
      "Both ends $-\\infty$",
      "Left $+\\infty$, right $-\\infty$",
    ],
    "Left $-\\infty$, right $+\\infty$",
    "Odd degree, positive leading coefficient."
  ),
  mcq(
    "pc1-a19",
    "1.8",
    false,
    "Vertical asymptotes of $f(x)=\\dfrac{x}{(x+2)(x-5)}$ are",
    ["$x=-2$ and $x=5$", "$x=0$", "$y=-2$ and $y=5$", "$x=2$ and $x=-5$"],
    "$x=-2$ and $x=5$",
    "Denominator zeros with no cancellation."
  ),
  mcq(
    "pc1-a20",
    "1.4",
    false,
    "Classify $f(x)=x^4-2x^2$.",
    ["Even", "Odd", "Neither", "Both"],
    "Even",
    "Only even powers."
  ),
  mcq(
    "pc1-a21",
    "1.2",
    true,
    "Average rate of change of $f(x)=2x^3-x$ on $[0,2]$ is",
    ["$7$", "$14$", "$8$", "$3$"],
    "$7$",
    "$\\dfrac{f(2)-f(0)}{2}=\\dfrac{(16-2)-0}{2}=7$."
  ),
  numeric(
    "pc1-a22",
    "1.5",
    true,
    "Enter $p(1.5)$ if $p(x)=2x^2-4x+1$ (exact or two decimals).",
    -0.5,
    "$p(1.5)=2(2.25)-4(1.5)+1=4.5-6+1=-0.5$."
  ),
  mcq(
    "pc1-a23",
    "1.8",
    true,
    "Evaluate $\\dfrac{3(4)+1}{4+2}$.",
    ["$\\dfrac{13}{6}$", "$2$", "$3$", "$\\dfrac{12}{6}$"],
    "$\\dfrac{13}{6}$",
    "$\\dfrac{12+1}{6}=\\dfrac{13}{6}$."
  ),
  numeric(
    "pc1-a24",
    "1.4",
    true,
    "Enter $f(2.5)$ for $f(x)=x^2-3x$ rounded to two decimals.",
    -1.25,
    "$f(2.5)=6.25-7.5=-1.25$."
  ),
  mcq(
    "pc1-a25",
    "1.3",
    true,
    "Outputs $4,7,10,13$ at $x=0,1,2,3$. AROC from $0$ to $3$ is",
    ["$3$", "$9$", "$4$", "$1$"],
    "$3$",
    "$\\dfrac{13-4}{3}=3$."
  ),
  numeric(
    "pc1-a26",
    "1.2",
    true,
    "Enter AROC of $f(x)=x^3-2x$ on $[1,2]$ (exact).",
    5,
    "$\\dfrac{f(2)-f(1)}{1}=\\dfrac{(8-4)-(1-2)}{1}=5$."
  ),
  mcq(
    "pc1-a27",
    "1.5",
    true,
    "Remainder when $p(x)=x^3-4x+1$ is divided by $x-2$ is",
    ["$1$", "$-1$", "$2$", "$0$"],
    "$1$",
    "$p(2)=8-8+1=1$."
  ),
  numeric(
    "pc1-a28",
    "1.8",
    true,
    "Enter $f(3)$ for $f(x)=\\dfrac{2x+1}{x-1}$.",
    3.5,
    "$\\dfrac{7}{2}=3.5$."
  ),
  mcq(
    "pc1-a29",
    "1.2",
    true,
    "Which interval has the larger AROC for $f(x)=x^2$?",
    ["$[3,5]$", "$[0,2]$", "Same on both", "$[1,2]$ equals $[3,5]$"],
    "$[3,5]$",
    "$\\dfrac{25-9}{2}=8$ vs $\\dfrac{4-0}{2}=2$."
  ),
  numeric(
    "pc1-a30",
    "1.4",
    true,
    "Enter $p(-1.5)$ for $p(x)=x^2+x-2$ (two decimals OK).",
    -1.25,
    "$(2.25)+(-1.5)-2=-1.25$."
  ),
  mcq(
    "pc1-a31",
    "1.7",
    true,
    "Hole $y$-value of $f(x)=\\dfrac{(x-1)(x+4)}{(x-1)(x+2)}$ at $x=1$ is",
    ["$\\dfrac{5}{3}$", "$0$", "$1$", "Undefined (VA)"],
    "$\\dfrac{5}{3}$",
    "Reduced $\\dfrac{x+4}{x+2}$; at $1$: $\\dfrac{5}{3}$."
  ),
  numeric(
    "pc1-a32",
    "1.2",
    true,
    "Table: $f(2)=5$, $f(6)=17$. Enter AROC on $[2,6]$.",
    3,
    "$\\dfrac{17-5}{4}=3$."
  ),
  mcq(
    "pc1-a33",
    "1.6",
    true,
    "For large positive $x$, $f(x)=-3x^4+100x$ is closest to",
    ["A large negative number", "A large positive number", "Near $0$", "Near $100$"],
    "A large negative number",
    "Leading term $-3x^4$ dominates."
  ),
  numeric(
    "pc1-a34",
    "1.5",
    true,
    "Enter $p(0.25)$ if $p(x)=8x^2-2$ (exact or decimal).",
    -1.5,
    "$8(0.0625)-2=0.5-2=-1.5$."
  ),
  mcq(
    "pc1-a35",
    "1.8",
    true,
    "As $x\\to\\infty$, $\\dfrac{5x^2+1}{x^2-9}$ approaches",
    ["$5$", "$0$", "$\\infty$", "$-9$"],
    "$5$",
    "Equal degrees; ratio of lead coeffs is $5$."
  ),
];
