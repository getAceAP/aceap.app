import MathText from "@/components/MathText";
import { Boxes, AlertTriangle, BookOpen } from "lucide-react";

const PrecalcUnit4Content = () => (
  <div className="space-y-16">
    <section className="space-y-6">
      <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex gap-4 items-start not-prose">
        <Boxes className="text-primary shrink-0 mt-1" size={20} />
        <div className="space-y-3">
          <h3 className="font-bold text-primary mb-0">Unit 4: Parameters, Vectors, and Matrices</h3>
          <p className="text-sm text-muted-foreground leading-relaxed m-0">
            <strong>Not assessed on the AP Precalculus exam</strong>, but still in the College Board CED for courses that teach it. Parametric motion, conics, vectors in the plane, and 2×2 matrices as linear maps.
          </p>
        </div>
      </div>
    </section>

    <section className="space-y-8">
      <div className="border-l-4 border-primary pl-6">
        <h2 className="text-3xl font-bold m-0">4.1–4.4 Parametric equations</h2>
        <p className="text-muted-foreground mt-2">$x$ and $y$ as functions of a parameter $t$.</p>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <MathText text="Write $x=f(t)$, $y=g(t)$. To eliminate $t$, solve one equation for $t$ (when possible) and substitute." />
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Worked:</strong> <MathText text="$x=2t$, $y=3t+1$ $\\Rightarrow$ $t=x/2$, so $y=\\tfrac{3}{2}x+1$ (a line)." />
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <MathText text="Circle: $x=h+r\\cos t$, $y=k+r\\sin t$. Line through $(x_0,y_0)$ with direction $\\langle a,b\\rangle$: $x=x_0+at$, $y=y_0+bt$." />
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          Average change of $y$ with respect to $x$ between times $t_1$ and $t_2$:{" "}
          <MathText text="$\\dfrac{y(t_2)-y(t_1)}{x(t_2)-x(t_1)}$" /> when the denominator is not zero.
        </p>
      </div>
    </section>

    <section className="space-y-8">
      <div className="border-l-4 border-primary pl-6">
        <h2 className="text-3xl font-bold m-0">4.5–4.6 Implicit curves and conics</h2>
        <p className="text-muted-foreground mt-2">Relations that are not necessarily $y=$ a function of $x$.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 not-prose items-stretch">
        <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <h3 className="font-bold text-lg m-0">Circle and ellipse</h3>
          <p className="text-sm text-muted-foreground leading-relaxed m-0">
            <MathText text="$(x-h)^2+(y-k)^2=r^2$. Ellipse: $\\dfrac{(x-h)^2}{a^2}+\\dfrac{(y-k)^2}{b^2}=1$." />
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <h3 className="font-bold text-lg m-0">Hyperbola and parabola</h3>
          <p className="text-sm text-muted-foreground leading-relaxed m-0">
            <MathText text="Hyperbola (horizontal): $\\dfrac{(x-h)^2}{a^2}-\\dfrac{(y-k)^2}{b^2}=1$. Parabola: $(x-h)^2=4p(y-k)$." />
          </p>
        </div>
      </div>
    </section>

    <section className="space-y-8">
      <div className="border-l-4 border-primary pl-6">
        <h2 className="text-3xl font-bold m-0">4.8–4.9 Vectors</h2>
        <p className="text-muted-foreground mt-2">Components, magnitude, dot product.</p>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <MathText text="$\\mathbf{v}=\\langle a,b\\rangle$. Magnitude $\\|\\mathbf{v}\\|=\\sqrt{a^2+b^2}$. Unit vector $\\mathbf{v}/\\|\\mathbf{v}\\|$." />
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <MathText text="Add/subtract componentwise. Scalar $k\\langle a,b\\rangle=\\langle ka,kb\\rangle$. Dot product $ac+bd$; zero means perpendicular." />
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Worked:</strong> <MathText text="$\\langle 3,4\\rangle$ has length $5$. $\\langle 1,2\\rangle\\cdot\\langle -2,1\\rangle=0$." />
        </p>
      </div>
    </section>

    <section className="space-y-8">
      <div className="border-l-4 border-primary pl-6">
        <h2 className="text-3xl font-bold m-0">4.10–4.13 Matrices</h2>
        <p className="text-muted-foreground mt-2">$2\\times 2$ maps of the plane and linear systems.</p>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <MathText text="$\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}\\begin{bmatrix}x\\\\y\\end{bmatrix}=\\begin{bmatrix}ax+by\\\\cx+dy\\end{bmatrix}$. Determinant $ad-bc$." />
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          Identity <MathText text="$I=\\begin{bmatrix}1&0\\\\0&1\\end{bmatrix}$" /> leaves every vector alone. If $\\det A=0$, the system $A\\mathbf{x}=\\mathbf{b}$ has no unique solution.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Worked:</strong>{" "}
          <MathText text="$\\begin{bmatrix}1&2\\\\0&3\\end{bmatrix}\\begin{bmatrix}4\\\\1\\end{bmatrix}=\\begin{bmatrix}6\\\\3\\end{bmatrix}$. Det$\\begin{bmatrix}2&1\\\\4&3\\end{bmatrix}=2$." />
        </p>
      </div>
    </section>

    <section className="space-y-6 not-prose">
      <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
        <AlertTriangle size={14} />
        Common errors
      </div>
      <ul className="space-y-3 text-sm text-muted-foreground list-disc pl-5">
        <li>Forgetting that parametric speed uses both $dx/dt$ and $dy/dt$, not just slope $dy/dx$.</li>
        <li>Mixing up ellipse $a,b$ with the squared denominators $a^2,b^2$.</li>
        <li>Computing matrix–vector as componentwise multiply instead of row·column.</li>
        <li>Thinking $\\det A=0$ always means infinitely many solutions (it can also mean none).</li>
      </ul>
    </section>

    <section className="space-y-4 not-prose">
      <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
        <BookOpen size={14} />
        Study tip
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed m-0">
        If you are only targeting the AP exam score, prioritize Units 1–3. Use Unit 4 for college readiness, dual-enrollment courses, or when your teacher includes it in the grade.
      </p>
    </section>
  </div>
);

export default PrecalcUnit4Content;
