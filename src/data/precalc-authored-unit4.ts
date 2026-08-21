import { mcq, numeric } from "./precalc-q";
import type { PrecalcQuestion } from "./precalc";

export const precalcAuthoredUnit4: PrecalcQuestion[] = [
  mcq(
    "pc4-a1",
    "4.1",
    false,
    "The parametric equations $x=2t$, $y=3t+1$ describe",
    ["A line", "A circle", "A parabola opening sideways", "A horizontal asymptote only"],
    "A line",
    "Eliminating $t$: $y=\\tfrac{3}{2}x+1$ is linear."
  ),
  mcq(
    "pc4-a2",
    "4.4",
    false,
    "$x=3\\cos t$, $y=3\\sin t$ traces",
    ["A circle of radius $3$ centered at the origin", "A line through $(3,0)$", "An ellipse with $a=3$, $b=1$", "A point $(3,3)$"],
    "A circle of radius $3$ centered at the origin",
    "$x^2+y^2=9$."
  ),
  mcq(
    "pc4-a3",
    "4.8",
    false,
    "The magnitude of $\\langle 3,4\\rangle$ is",
    ["$5$", "$7$", "$12$", "$1$"],
    "$5$",
    "$\\sqrt{9+16}=5$."
  ),
  mcq(
    "pc4-a4",
    "4.8",
    false,
    "$\\langle 2,-1\\rangle+\\langle -3,5\\rangle=$",
    ["$\\langle -1,4\\rangle$", "$\\langle 5,-6\\rangle$", "$\\langle -1,-4\\rangle$", "$\\langle 2,5\\rangle$"],
    "$\\langle -1,4\\rangle$",
    "Add components."
  ),
  mcq(
    "pc4-a5",
    "4.8",
    false,
    "$\\langle 1,2\\rangle\\cdot\\langle -2,1\\rangle=$",
    ["$0$", "$1$", "$-1$", "$2$"],
    "$0$",
    "$1(-2)+2(1)=0$ — perpendicular."
  ),
  mcq(
    "pc4-a6",
    "4.10",
    false,
    "$\\begin{bmatrix}1&2\\\\0&3\\end{bmatrix}\\begin{bmatrix}4\\\\1\\end{bmatrix}=$",
    ["$\\begin{bmatrix}6\\\\3\\end{bmatrix}$", "$\\begin{bmatrix}4\\\\3\\end{bmatrix}$", "$\\begin{bmatrix}5\\\\3\\end{bmatrix}$", "$\\begin{bmatrix}6\\\\1\\end{bmatrix}$"],
    "$\\begin{bmatrix}6\\\\3\\end{bmatrix}$",
    "$1\\cdot 4+2\\cdot 1=6$, $0\\cdot 4+3\\cdot 1=3$."
  ),
  mcq(
    "pc4-a7",
    "4.10",
    false,
    "Det$\\begin{bmatrix}2&1\\\\4&3\\end{bmatrix}=$",
    ["$2$", "$6$", "$8$", "$-2$"],
    "$2$",
    "$2\\cdot 3-1\\cdot 4=2$."
  ),
  mcq(
    "pc4-a8",
    "4.6",
    false,
    "$(x-1)^2+(y+2)^2=9$ is a circle with center and radius",
    ["$(1,-2)$, $r=3$", "$(-1,2)$, $r=9$", "$(1,2)$, $r=3$", "$(0,0)$, $r=3$"],
    "$(1,-2)$, $r=3$",
    "Standard form $(x-h)^2+(y-k)^2=r^2$."
  ),
  mcq(
    "pc4-a9",
    "4.1",
    false,
    "For $x=t^2$, $y=t$, eliminating $t$ gives",
    ["$x=y^2$", "$y=x^2$", "$x+y=1$", "$xy=1$"],
    "$x=y^2$",
    "$t=y$ so $x=y^2$."
  ),
  mcq(
    "pc4-a10",
    "4.8",
    false,
    "A unit vector in the direction of $\\langle 0,5\\rangle$ is",
    ["$\\langle 0,1\\rangle$", "$\\langle 0,5\\rangle$", "$\\langle 1,0\\rangle$", "$\\langle 5,0\\rangle$"],
    "$\\langle 0,1\\rangle$",
    "Divide by magnitude $5$."
  ),
  numeric(
    "pc4-a11",
    "4.8",
    false,
    "Enter $\\|\\langle 6,8\\rangle\\|$.",
    10,
    "$\\sqrt{36+64}=10$."
  ),
  numeric(
    "pc4-a12",
    "4.10",
    false,
    "Enter det$\\begin{bmatrix}5&2\\\\1&1\\end{bmatrix}$.",
    3,
    "$5-2=3$."
  ),
  mcq(
    "pc4-a13",
    "4.4",
    false,
    "$x=1+2t$, $y=3-t$ is a parametric",
    ["Line", "Circle", "Ellipse", "Hyperbola"],
    "Line",
    "Linear in $t$."
  ),
  mcq(
    "pc4-a14",
    "4.5",
    false,
    "The graph of $x^2-y^2=1$ is a",
    ["Hyperbola", "Ellipse", "Circle", "Parabola"],
    "Hyperbola",
    "Difference of squares = constant (standard hyperbola)."
  ),
  mcq(
    "pc4-a15",
    "4.10",
    false,
    "The $2\\times 2$ identity matrix is",
    ["$\\begin{bmatrix}1&0\\\\0&1\\end{bmatrix}$", "$\\begin{bmatrix}0&1\\\\1&0\\end{bmatrix}$", "$\\begin{bmatrix}1&1\\\\1&1\\end{bmatrix}$", "$\\begin{bmatrix}1&0\\\\0&0\\end{bmatrix}$"],
    "$\\begin{bmatrix}1&0\\\\0&1\\end{bmatrix}$",
    "Leaves vectors unchanged."
  ),
  numeric(
    "pc4-a16",
    "4.3",
    true,
    "Parametric: $x(t)=t$, $y(t)=t^2$. Average rate of change of $y$ with respect to $x$ on $t\\in[1,3]$ (exact).",
    4,
    "$\\dfrac{y(3)-y(1)}{x(3)-x(1)}=\\dfrac{9-1}{2}=4$."
  ),
  mcq(
    "pc4-a17",
    "4.8",
    true,
    "$\\|\\langle 5,12\\rangle\\|$ is",
    ["$13$", "$17$", "$60$", "$7$"],
    "$13$",
    "$\\sqrt{25+144}=13$."
  ),
  numeric(
    "pc4-a18",
    "4.10",
    true,
    "Enter the first component of $\\begin{bmatrix}2&1\\\\0&4\\end{bmatrix}\\begin{bmatrix}3\\\\2\\end{bmatrix}$.",
    8,
    "$2\\cdot 3+1\\cdot 2=8$."
  ),
  mcq(
    "pc4-a19",
    "4.1",
    true,
    "At $t=2$, $x=3t-1$, $y=t^2$ gives the point",
    ["$(5,4)$", "$(6,4)$", "$(5,2)$", "$(2,4)$"],
    "$(5,4)$",
    "$x=5$, $y=4$."
  ),
  numeric(
    "pc4-a20",
    "4.8",
    true,
    "Enter $\\langle 2,3\\rangle\\cdot\\langle 4,-1\\rangle$.",
    5,
    "$8-3=5$."
  ),
  mcq(
    "pc4-a21",
    "4.6",
    false,
    "$\\dfrac{x^2}{9}+\\dfrac{y^2}{4}=1$ is an ellipse with",
    ["$a=3$, $b=2$", "$a=9$, $b=4$", "$a=2$, $b=3$", "Radius $3$"],
    "$a=3$, $b=2$",
    "$a^2=9$, $b^2=4$."
  ),
  mcq(
    "pc4-a22",
    "4.11",
    false,
    "If $\\det A=0$ for a $2\\times 2$ matrix $A$, then $A\\mathbf{x}=\\mathbf{b}$",
    ["May have no unique solution", "Always has exactly one solution", "Always has infinitely many solutions", "Cannot be written"],
    "May have no unique solution",
    "Singular matrix: zero or infinitely many solutions depending on $\\mathbf{b}$."
  ),
  numeric(
    "pc4-a23",
    "4.4",
    true,
    "For $x=4\\cos t$, $y=4\\sin t$, enter the radius.",
    4,
    "$x^2+y^2=16$."
  ),
  mcq(
    "pc4-a24",
    "4.8",
    false,
    "$3\\langle 2,-1\\rangle=$",
    ["$\\langle 6,-3\\rangle$", "$\\langle 5,2\\rangle$", "$\\langle 6,-1\\rangle$", "$\\langle 2,-3\\rangle$"],
    "$\\langle 6,-3\\rangle$",
    "Scale each component."
  ),
  mcq(
    "pc4-a25",
    "4.1",
    false,
    "Which is a valid reason Unit 4 is labeled optional on many AceAP screens?",
    ["It is not assessed on the AP Precalculus exam", "It has no math content", "College Board banned vectors", "It replaces Units 1–3"],
    "It is not assessed on the AP Precalculus exam",
    "CED Unit 4 is still taught in some courses but is not on the AP exam."
  ),
];
