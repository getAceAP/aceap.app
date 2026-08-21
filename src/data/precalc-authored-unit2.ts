import { mcq, numeric } from "./precalc-q";
import type { PrecalcQuestion } from "./precalc";

export const precalcAuthoredUnit2: PrecalcQuestion[] = [
  mcq(
    "pc2-a1",
    "2.3",
    false,
    "$f(x)=3\\cdot(1.2)^x$ represents",
    ["Exponential growth", "Exponential decay", "Linear growth", "Quadratic growth"],
    "Exponential growth",
    "Base $1.2>1$."
  ),
  mcq(
    "pc2-a2",
    "2.9",
    false,
    "$\\log(12)$ equals",
    ["$\\log 3+\\log 4$", "$\\log 3-\\log 4$", "$\\log 3\\cdot\\log 4$", "$\\dfrac{\\log 3}{\\log 4}$"],
    "$\\log 3+\\log 4$",
    "Product rule."
  ),
  mcq(
    "pc2-a3",
    "2.9",
    false,
    "$\\log\\!\\left(\\dfrac{8}{2}\\right)$ equals",
    ["$\\log 8-\\log 2$", "$\\log 8+\\log 2$", "$\\log 6$", "$\\dfrac{\\log 8}{\\log 2}$ is the only form"],
    "$\\log 8-\\log 2$",
    "Quotient rule."
  ),
  mcq(
    "pc2-a4",
    "2.9",
    false,
    "$\\log(5^3)$ equals",
    ["$3\\log 5$", "$\\log 15$", "$\\log 5+3$", "$(\\log 5)^3$"],
    "$3\\log 5$",
    "Power rule."
  ),
  mcq(
    "pc2-a5",
    "2.8",
    false,
    "The inverse of $f(x)=2^x$ is",
    ["$f^{-1}(x)=\\log_2 x$", "$f^{-1}(x)=2x$", "$f^{-1}(x)=x^2$", "$f^{-1}(x)=\\dfrac{1}{2^x}$"],
    "$f^{-1}(x)=\\log_2 x$",
    "Exponential and log with the same base are inverses."
  ),
  mcq(
    "pc2-a6",
    "2.10",
    false,
    "Domain of $y=\\log_3(x-1)$ is",
    ["$x>1$", "$x\\ge 1$", "$x>0$", "All reals"],
    "$x>1$",
    "Argument must be positive: $x-1>0$."
  ),
  mcq(
    "pc2-a7",
    "2.12",
    false,
    "Solve $5^x=5^7$.",
    ["$x=7$", "$x=5$", "$x=35$", "$x=\\log 5$"],
    "$x=7$",
    "Matching bases ⇒ exponents equal."
  ),
  mcq(
    "pc2-a8",
    "2.13",
    true,
    "Solve $2^x=10$. Which is exact?",
    ["$x=\\dfrac{\\ln 10}{\\ln 2}$", "$x=5$", "$x=\\ln 5$", "$x=10/2$"],
    "$x=\\dfrac{\\ln 10}{\\ln 2}$",
    "Take ln both sides: $x\\ln 2=\\ln 10$."
  ),
  mcq(
    "pc2-a9",
    "2.4",
    false,
    "Table with constant ratios of successive $y$-values (equal $x$-spacing) suggests",
    ["Exponential", "Linear", "Quadratic", "Constant"],
    "Exponential",
    "Constant percent change / ratios → exponential."
  ),
  mcq(
    "pc2-a10",
    "2.14",
    false,
    "A semi-log plot of an exponential $y=ab^x$ (plot $\\log y$ vs $x$) looks",
    ["Linear", "Exponential", "Parabolic", "Periodic"],
    "Linear",
    "$\\log y=\\log a+x\\log b$ is linear in $x$."
  ),
  mcq(
    "pc2-a11",
    "2.5",
    false,
    "After $3$ half-lives, the remaining fraction of a sample is",
    ["$\\dfrac{1}{8}$", "$\\dfrac{1}{3}$", "$\\dfrac{1}{6}$", "$\\dfrac{1}{2}$"],
    "$\\dfrac{1}{8}$",
    "$(1/2)^3=1/8$."
  ),
  mcq(
    "pc2-a12",
    "2.9",
    false,
    "$\\log_b(b^4)=$",
    ["$4$", "$b^4$", "$\\log_b 4$", "$1$"],
    "$4$",
    "Log and exponential with same base cancel."
  ),
  mcq(
    "pc2-a13",
    "2.11",
    false,
    "$(f\\circ g)(x)$ means",
    ["$f(g(x))$", "$f(x)g(x)$", "$f(x)+g(x)$", "$g(f(x))$ always"],
    "$f(g(x))$",
    "Composition applies $g$ first, then $f$."
  ),
  mcq(
    "pc2-a14",
    "2.3",
    false,
    "$f(x)=8\\cdot(0.5)^x$ represents",
    ["Exponential decay", "Exponential growth", "Linear decay", "No change"],
    "Exponential decay",
    "$0<b<1$."
  ),
  mcq(
    "pc2-a15",
    "2.15",
    true,
    "Compound interest $A=P(1+r)^t$ with $P=1000$, $r=0.05$, $t=2$ gives $A=$",
    ["$1102.50$", "$1050$", "$2000$", "$1005$"],
    "$1102.50$",
    "$1000(1.05)^2=1102.5$."
  ),
  numeric(
    "pc2-a16",
    "2.12",
    false,
    "Enter $x$ if $3^{x}=3^{5}$.",
    5,
    "Matching bases."
  ),
  numeric(
    "pc2-a17",
    "2.9",
    false,
    "Enter the value of $\\log_2(8)$.",
    3,
    "$2^3=8$."
  ),
  mcq(
    "pc2-a18",
    "2.8",
    false,
    "Range of $y=\\log_2 x$ is",
    ["All real numbers", "$x>0$", "$y>0$", "$[0,\\infty)$"],
    "All real numbers",
    "Log outputs all reals; domain is $x>0$."
  ),
  mcq(
    "pc2-a19",
    "2.9",
    false,
    "Change of base: $\\log_5 20=$",
    ["$\\dfrac{\\ln 20}{\\ln 5}$", "$\\ln 20-\\ln 5$", "$\\dfrac{20}{5}$", "$\\ln(20/5)$"],
    "$\\dfrac{\\ln 20}{\\ln 5}$",
    "Change-of-base formula."
  ),
  mcq(
    "pc2-a20",
    "2.13",
    false,
    "Solve $\\log_2(x)=5$.",
    ["$x=32$", "$x=10$", "$x=7$", "$x=25$"],
    "$x=32$",
    "$x=2^5=32$."
  ),
  numeric(
    "pc2-a21",
    "2.13",
    true,
    "Solve $2^{x}=20$. Enter $\\dfrac{\\ln 20}{\\ln 2}$ rounded to two decimals.",
    4.32,
    "$x\\approx 4.32$."
  ),
  mcq(
    "pc2-a22",
    "2.5",
    true,
    "$P=500$, $r=0.08$, $t=3$ years annual compound. $A=P(1+r)^t$ is closest to",
    ["$629.86$", "$620$", "$500$", "$540$"],
    "$629.86$",
    "$500(1.08)^3\\approx 629.86$."
  ),
  numeric(
    "pc2-a23",
    "2.9",
    true,
    "Enter $\\log_{2}(50)$ using change of base, rounded to two decimals.",
    5.64,
    "$\\dfrac{\\ln 50}{\\ln 2}\\approx 5.64$."
  ),
  mcq(
    "pc2-a24",
    "2.3",
    true,
    "Doubling time for $y=1.05^{t}$ is closest to",
    ["$14.21$ years", "$5$ years", "$2$ years", "$20$ years"],
    "$14.21$ years",
    "$t=\\ln 2/\\ln 1.05\\approx 14.21$."
  ),
  numeric(
    "pc2-a25",
    "2.13",
    true,
    "Solve $e^{x}=7$. Enter $\\ln 7$ rounded to two decimals.",
    1.95,
    "$x\\approx 1.95$."
  ),
  numeric(
    "pc2-a26",
    "2.13",
    true,
    "Solve $3^{x}=40$. Enter $\\dfrac{\\ln 40}{\\ln 3}$ rounded to two decimals.",
    3.36,
    "$x\\approx 3.36$."
  ),
  mcq(
    "pc2-a27",
    "2.5",
    true,
    "Half-life $6$ hours, start $200$ mg. Amount after $18$ hours is",
    ["$25$ mg", "$50$ mg", "$100$ mg", "$12.5$ mg"],
    "$25$ mg",
    "Three half-lives: $200\\to 100\\to 50\\to 25$."
  ),
  numeric(
    "pc2-a28",
    "2.9",
    true,
    "Enter $\\log_{5}(80)$ rounded to two decimals.",
    2.72,
    "$\\ln 80/\\ln 5\\approx 2.72$."
  ),
  mcq(
    "pc2-a29",
    "2.5",
    true,
    "$P=800$ at $6\\%$ compounded annually for $4$ years. Closest balance:",
    ["$1010.00$", "$992$", "$848$", "$1200$"],
    "$1010.00$",
    "$800(1.06)^4\\approx 1010$."
  ),
  numeric(
    "pc2-a30",
    "2.3",
    true,
    "Doubling time for $1.08^{t}$: enter years rounded to two decimals.",
    9.01,
    "$\\ln 2/\\ln 1.08\\approx 9.01$."
  ),
  mcq(
    "pc2-a31",
    "2.13",
    true,
    "Solve $\\ln x=1.5$. $x$ is closest to",
    ["$4.48$", "$1.5$", "$e$", "$0.405$"],
    "$4.48$",
    "$x=e^{1.5}\\approx 4.48$."
  ),
  numeric(
    "pc2-a32",
    "2.9",
    true,
    "Enter $\\ln(12)$ rounded to two decimals.",
    2.48,
    "$\\ln 12\\approx 2.48$."
  ),
  mcq(
    "pc2-a33",
    "2.3",
    true,
    "$12\\%$ annual growth as a base $b$ in $ab^{t}$ is",
    ["$1.12$", "$0.12$", "$12$", "$1.012$"],
    "$1.12$",
    "Percent growth → $1+$ rate."
  ),
  numeric(
    "pc2-a34",
    "2.5",
    true,
    "Simple interest $I=Prt$ with $P=1200$, $r=0.05$, $t=3$. Enter $I$.",
    180,
    "$1200\\cdot 0.05\\cdot 3=180$."
  ),
  mcq(
    "pc2-a35",
    "2.13",
    true,
    "Solve $5^{x}=100$. Closest $x$:",
    ["$2.86$", "$20$", "$5$", "$2$"],
    "$2.86$",
    "$\\ln 100/\\ln 5\\approx 2.86$."
  ),
];
