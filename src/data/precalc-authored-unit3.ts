import { mcq, numeric } from "./precalc-q";
import type { PrecalcQuestion } from "./precalc";

export const precalcAuthoredUnit3: PrecalcQuestion[] = [
  mcq(
    "pc3-a1",
    "3.3",
    false,
    "$\\sin\\!\\left(\\dfrac{\\pi}{6}\\right)=$",
    ["$\\dfrac{1}{2}$", "$\\dfrac{\\sqrt{3}}{2}$", "$\\dfrac{\\sqrt{2}}{2}$", "$1$"],
    "$\\dfrac{1}{2}$",
    "Standard unit-circle value."
  ),
  mcq(
    "pc3-a2",
    "3.2",
    false,
    "Convert $180^\\circ$ to radians.",
    ["$\\pi$", "$\\dfrac{\\pi}{2}$", "$2\\pi$", "$\\dfrac{\\pi}{4}$"],
    "$\\pi$",
    "Multiply by $\\pi/180$."
  ),
  mcq(
    "pc3-a3",
    "3.5",
    false,
    "Period of $y=\\sin(4x)$ is",
    ["$\\dfrac{\\pi}{2}$", "$4$", "$2\\pi$", "$\\dfrac{\\pi}{4}$"],
    "$\\dfrac{\\pi}{2}$",
    "$2\\pi/|b|=2\\pi/4=\\pi/2$."
  ),
  mcq(
    "pc3-a4",
    "3.5",
    false,
    "Amplitude of $y=-3\\cos(x)$ is",
    ["$3$", "$-3$", "$1$", "$6$"],
    "$3$",
    "Amplitude is $|a|$."
  ),
  mcq(
    "pc3-a5",
    "3.5",
    false,
    "Midline of $y=2\\sin x+5$ is",
    ["$y=5$", "$y=2$", "$y=0$", "$y=7$"],
    "$y=5$",
    "Vertical shift $d$ is the midline."
  ),
  mcq(
    "pc3-a6",
    "3.1",
    false,
    "$\\sin^2\\theta+\\cos^2\\theta=$",
    ["$1$", "$0$", "$\\tan\\theta$", "$2$"],
    "$1$",
    "Pythagorean identity."
  ),
  mcq(
    "pc3-a7",
    "3.7",
    false,
    "Range of $y=\\arcsin x$ is",
    [
      "$\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]$",
      "$[0,\\pi]$",
      "$[0,2\\pi]$",
      "All reals",
    ],
    "$\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]$",
    "Standard range of arcsine."
  ),
  mcq(
    "pc3-a8",
    "3.13",
    false,
    "Polar $(r,\\theta)=(2,\\pi/3)$. Then $x=$",
    ["$1$", "$2$", "$\\sqrt{3}$", "$0$"],
    "$1$",
    "$x=r\\cos\\theta=2\\cdot\\tfrac12=1$."
  ),
  mcq(
    "pc3-a9",
    "3.4",
    false,
    "$\\tan\\theta$ is undefined when",
    ["$\\cos\\theta=0$", "$\\sin\\theta=0$", "$\\theta=0$", "$\\tan\\theta=1$"],
    "$\\cos\\theta=0$",
    "$\\tan=\\sin/\\cos$."
  ),
  mcq(
    "pc3-a10",
    "3.3",
    false,
    "$\\cos\\!\\left(\\dfrac{\\pi}{3}\\right)=$",
    ["$\\dfrac{1}{2}$", "$\\dfrac{\\sqrt{3}}{2}$", "$0$", "$1$"],
    "$\\dfrac{1}{2}$",
    "Unit circle."
  ),
  mcq(
    "pc3-a11",
    "3.5",
    false,
    "$y=\\sin\\!\\big(2(x-\\pi/4)\\big)$ has phase shift",
    ["$\\dfrac{\\pi}{4}$ right", "$\\dfrac{\\pi}{4}$ left", "$2$ right", "$\\pi/2$ right"],
    "$\\dfrac{\\pi}{4}$ right",
    "Form $\\sin(b(x-h))$ shifts right $h$."
  ),
  mcq(
    "pc3-a12",
    "3.4",
    false,
    "$\\csc\\theta=$",
    ["$\\dfrac{1}{\\sin\\theta}$", "$\\dfrac{1}{\\cos\\theta}$", "$\\dfrac{\\cos\\theta}{\\sin\\theta}$", "$\\sin\\theta$"],
    "$\\dfrac{1}{\\sin\\theta}$",
    "Reciprocal identity."
  ),
  mcq(
    "pc3-a13",
    "3.6",
    false,
    "Sine is an",
    ["Odd function", "Even function", "Neither", "Constant"],
    "Odd function",
    "$\\sin(-\\theta)=-\\sin\\theta$."
  ),
  mcq(
    "pc3-a14",
    "3.7",
    false,
    "Range of $y=\\arccos x$ is",
    ["$[0,\\pi]$", "$\\left[-\\pi/2,\\pi/2\\right]$", "$[0,2\\pi]$", "All reals"],
    "$[0,\\pi]$",
    "Standard arccos range."
  ),
  mcq(
    "pc3-a15",
    "3.13",
    false,
    "If $x=3$ and $y=4$, then $r=$",
    ["$5$", "$7$", "$12$", "$1$"],
    "$5$",
    "$r=\\sqrt{x^2+y^2}=5$."
  ),
  numeric(
    "pc3-a16",
    "3.3",
    false,
    "Enter $\\sin(0)$ as a number.",
    0,
    "Unit circle."
  ),
  numeric(
    "pc3-a17",
    "3.5",
    false,
    "Enter the amplitude of $y=7\\sin(3x)$.",
    7,
    "$|a|=7$."
  ),
  mcq(
    "pc3-a18",
    "3.2",
    false,
    "$\\dfrac{\\pi}{2}$ radians in degrees is",
    ["$90^\\circ$", "$45^\\circ$", "$180^\\circ$", "$60^\\circ$"],
    "$90^\\circ$",
    "Multiply by $180/\\pi$."
  ),
  mcq(
    "pc3-a19",
    "3.5",
    false,
    "Compared with $y=\\sin x$, $y=\\sin(2x)$ has",
    ["Half the period", "Double the period", "Double the amplitude", "Same graph"],
    "Half the period",
    "Larger $|b|$ compresses horizontally."
  ),
  mcq(
    "pc3-a20",
    "3.3",
    false,
    "On the unit circle, $\\cos\\theta$ is the",
    ["$x$-coordinate", "$y$-coordinate", "Radius", "Arc length only"],
    "$x$-coordinate",
    "Definition on the unit circle."
  ),
  numeric(
    "pc3-a21",
    "3.3",
    true,
    "Enter $\\sin(40^\\circ)$ rounded to two decimals.",
    0.64,
    "Degree mode: $\\sin 40^\\circ\\approx 0.64$."
  ),
  mcq(
    "pc3-a22",
    "3.5",
    true,
    "Period of $y=\\sin(1.5x)$ is closest to",
    ["$4.19$", "$1.5$", "$2\\pi$", "$3$"],
    "$4.19$",
    "$2\\pi/1.5\\approx 4.19$."
  ),
  numeric(
    "pc3-a23",
    "3.13",
    true,
    "For $(5,12)$, enter $r$ (exact integer).",
    13,
    "$\\sqrt{25+144}=13$."
  ),
  numeric(
    "pc3-a24",
    "3.10",
    true,
    "Enter $\\arcsin(0.5)$ in radians (exact as decimal $0.52$ OK, or $\\pi/6\\approx 0.52$).",
    0.52,
    "$\\arcsin(0.5)=\\pi/6\\approx 0.5236$."
  ),
  mcq(
    "pc3-a25",
    "3.2",
    true,
    "$75^\\circ$ in radians is closest to",
    ["$1.31$", "$75$", "$\\pi$", "$0.75$"],
    "$1.31$",
    "$75\\pi/180\\approx 1.31$."
  ),
  numeric(
    "pc3-a26",
    "3.3",
    true,
    "Enter $\\cos(25^\\circ)$ rounded to two decimals.",
    0.91,
    "DEG mode: $\\cos 25^\\circ\\approx 0.91$."
  ),
  mcq(
    "pc3-a27",
    "3.3",
    true,
    "$\\tan(1.2)$ (radians) is closest to",
    ["$2.57$", "$1.2$", "$0.93$", "$-1.2$"],
    "$2.57$",
    "RAD mode: $\\tan 1.2\\approx 2.57$."
  ),
  numeric(
    "pc3-a28",
    "3.5",
    true,
    "Period of $y=\\cos(0.8x)$: enter rounded to two decimals.",
    7.85,
    "$2\\pi/0.8\\approx 7.85$."
  ),
  mcq(
    "pc3-a29",
    "3.5",
    true,
    "Amplitude of $y=-4\\sin(x)+1$ is",
    ["$4$", "$-4$", "$1$", "$5$"],
    "$4$",
    "Amplitude is $|a|=4$."
  ),
  numeric(
    "pc3-a30",
    "3.10",
    true,
    "Enter $\\arccos(0.3)$ in radians rounded to two decimals.",
    1.27,
    "$\\arccos(0.3)\\approx 1.27$."
  ),
  mcq(
    "pc3-a31",
    "3.2",
    true,
    "$2.5$ radians in degrees is closest to",
    ["$143.2^\\circ$", "$2.5^\\circ$", "$90^\\circ$", "$250^\\circ$"],
    "$143.2^\\circ$",
    "$2.5\\cdot 180/\\pi\\approx 143.2$."
  ),
  numeric(
    "pc3-a32",
    "3.13",
    true,
    "Point $(8,15)$: enter $r$.",
    17,
    "$\\sqrt{64+225}=17$."
  ),
  mcq(
    "pc3-a33",
    "3.5",
    true,
    "For $y=3\\sin\\!\\big(2(x-\\pi/4)\\big)$, phase shift is",
    ["$\\pi/4$ right", "$\\pi/4$ left", "$2$ right", "$3$ up"],
    "$\\pi/4$ right",
    "Form $\\sin(b(x-h))$ with $h=\\pi/4$."
  ),
  numeric(
    "pc3-a34",
    "3.3",
    true,
    "Enter $\\sin(1)$ (radians) rounded to two decimals.",
    0.84,
    "RAD: $\\sin 1\\approx 0.84$."
  ),
  mcq(
    "pc3-a35",
    "3.5",
    true,
    "Max value of $y=2\\cos(x)-5$ is",
    ["$-3$", "$2$", "$-5$", "$7$"],
    "$-3$",
    "Max of cos is $1$: $2(1)-5=-3$."
  ),
];
