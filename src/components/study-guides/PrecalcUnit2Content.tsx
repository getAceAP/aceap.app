import MathText from "@/components/MathText";
import { ArrowLeftRight, TrendingUp, AlertTriangle, BookOpen } from "lucide-react";

const PrecalcUnit2Content = () => (
  <div className="space-y-16">
    <section className="space-y-6">
      <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex gap-4 items-start not-prose">
        <TrendingUp className="text-primary shrink-0 mt-1" size={20} />
        <div className="space-y-3">
          <h3 className="font-bold text-primary mb-0">Unit 2: Exponential and Logarithmic Functions</h3>
          <p className="text-sm text-muted-foreground leading-relaxed m-0">
            About <strong>20–27%</strong> of the exam. Growth, decay, inverses, log laws, and models (interest, half-life, doubling). Calculator-active items use <MathText text="$\\ln$" /> and change of base — Desmos is fair game when marked Calculator OK.
          </p>
        </div>
      </div>
    </section>

    <section className="space-y-8">
      <div className="border-l-4 border-primary pl-6">
        <h2 className="text-3xl font-bold m-0">2.1–2.5 Exponential models</h2>
        <p className="text-muted-foreground mt-2">Form <MathText text="$f(x)=ab^{x}$ with $a>0$, $b>0$, $b\\neq 1$" />.</p>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <MathText text="$b>1$ → growth; $0<b<1$ → decay. Initial value $f(0)=a$. A percent increase of $p\\%$ means $b=1+\\dfrac{p}{100}$ (e.g. $8\\%$ → $b=1.08$)." />
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Worked:</strong> <MathText text="$f(x)=3\\cdot(1.2)^x$ grows; $g(x)=8\\cdot(0.5)^x$ decays (halving each step)." />
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Worked:</strong> <MathText text="$f(x)=5\\cdot 2^x$ → $f(3)=5\\cdot 8=40$." />
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 not-prose items-stretch">
        <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <h3 className="font-bold text-lg m-0">Tables: linear vs exponential</h3>
          <p className="text-sm text-muted-foreground leading-relaxed m-0">
            Equal $x$-steps: constant first differences → linear. Constant ratios of outputs → exponential. Do not call a table “exponential” just because it increases.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <h3 className="font-bold text-lg m-0">Half-life & doubling</h3>
          <p className="text-sm text-muted-foreground leading-relaxed m-0">
            After $n$ half-lives, fraction left is <MathText text="$\\left(\\tfrac12\\right)^n$" />. Doubling time for <MathText text="$b^t$" /> solves <MathText text="$b^t=2$" /> → <MathText text="$t=\\dfrac{\\ln 2}{\\ln b}$" />.
          </p>
        </div>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
        <h3 className="font-bold text-lg m-0">Compound interest</h3>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <MathText text="Annual: $A=P(1+r)^t$. Simple interest $P(1+rt)$ is a common distractor — compound grows faster for $t>1$." />
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Worked:</strong> <MathText text="$P=1000$, $r=0.05$, $t=2$ → $A=1000(1.05)^2=1102.50$." />
        </p>
      </div>
    </section>

    <section className="space-y-8">
      <div className="border-l-4 border-primary pl-6">
        <h2 className="text-3xl font-bold m-0">Inverses and composition</h2>
        <p className="text-muted-foreground mt-2">Exp and log undo each other.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 not-prose items-stretch">
        <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <h3 className="font-bold text-lg m-0">Inverses</h3>
          <p className="text-sm text-muted-foreground leading-relaxed m-0">
            <MathText text="Inverse of $a^x$ is $\\log_a x$. Inverse of $\\log_a x$ is $a^x$. Domain of $\\log_a x$: $x>0$. Range: all reals." />
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <h3 className="font-bold text-lg m-0">Composition</h3>
          <p className="text-sm text-muted-foreground leading-relaxed m-0">
            <MathText text="$(f\\circ g)(x)=f(g(x))$ — apply $g$ first. $\\log_b(b^k)=k$ and $b^{\\log_b k}=k$ ($k>0$)." />
          </p>
        </div>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          Domain trap: <MathText text="$y=\\log_3(x-1)$ needs $x-1>0$ so $x>1$, not just $x>0$." />
        </p>
      </div>
    </section>

    <section className="space-y-8">
      <div className="border-l-4 border-primary pl-6">
        <h2 className="text-3xl font-bold m-0">2.8–2.12 Log laws</h2>
        <p className="text-muted-foreground mt-2">Expand, condense, change base.</p>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
        <ul className="text-sm text-muted-foreground space-y-3 m-0 list-disc list-inside">
          <li><MathText text="Product: $\\log(MN)=\\log M+\\log N$" /></li>
          <li><MathText text="Quotient: $\\log(M/N)=\\log M-\\log N$" /></li>
          <li><MathText text="Power: $\\log(M^p)=p\\log M$" /></li>
          <li><MathText text="Change of base: $\\log_b a=\\dfrac{\\ln a}{\\ln b}=\\dfrac{\\log_k a}{\\log_k b}$" /></li>
        </ul>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Worked:</strong> <MathText text="$\\log 12=\\log(3\\cdot 4)=\\log 3+\\log 4$. Condensing: $\\log 5+\\log 2=\\log 10$." />
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Worked:</strong> <MathText text="$\\log(5^3)=3\\log 5$. $\\log_2 8=3$ because $2^3=8$." />
        </p>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-destructive/5 border border-destructive/20 flex gap-3">
        <AlertTriangle className="text-destructive shrink-0 mt-0.5" size={18} />
        <p className="text-sm text-muted-foreground m-0">
          <strong>Do not confuse</strong> <MathText text="$\\log(M/N)$" /> (quotient rule) with <MathText text="$\\dfrac{\\log M}{\\log N}$" /> (change of base / ratio of logs). They are different.
        </p>
      </div>
    </section>

    <section className="space-y-8">
      <div className="border-l-4 border-primary pl-6">
        <h2 className="text-3xl font-bold m-0">2.13 Solving equations</h2>
        <p className="text-muted-foreground mt-2">Same base, or take logs.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 not-prose items-stretch">
        <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <h3 className="font-bold text-lg m-0">Same base</h3>
          <p className="text-sm text-muted-foreground leading-relaxed m-0">
            <MathText text="$5^x=5^7\\Rightarrow x=7$. $2^{x-1}=2^4\\Rightarrow x-1=4\\Rightarrow x=5$." />
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <h3 className="font-bold text-lg m-0">Need a calculator</h3>
          <p className="text-sm text-muted-foreground leading-relaxed m-0">
            <MathText text="$2^x=10\\Rightarrow x=\\dfrac{\\ln 10}{\\ln 2}\\approx 3.32$. $e^x=7\\Rightarrow x=\\ln 7\\approx 1.95$. $\\log_2 x=5\\Rightarrow x=32$." />
          </p>
        </div>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
        <h3 className="font-bold text-lg m-0 flex items-center gap-2"><BookOpen size={18} className="text-primary" /> Convert to base $e$</h3>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <MathText text="$a^x=e^{x\\ln a}$. Useful when comparing growth rates or rewriting models." />
        </p>
      </div>
    </section>

    <section className="space-y-8">
      <div className="border-l-4 border-primary pl-6">
        <h2 className="text-3xl font-bold m-0">Semi-log and modeling lens</h2>
        <p className="text-muted-foreground mt-2">How the exam asks “is it exponential?”</p>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          Plot <MathText text="$\\log y$" /> against $x$. If the points are linear, $y$ is exponential in $x$: <MathText text="$\\log y = mx+b\\Rightarrow y=10^{mx+b}$" /> (or base $e$).
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          Context checklist: identify $a$ (start), $b$ (growth factor), $t$ (time units), then solve for the unknown with logs when needed.
        </p>
      </div>
      <div className="not-prose p-6 rounded-2xl border border-primary/20 bg-primary/5 flex gap-3">
        <ArrowLeftRight className="text-primary shrink-0 mt-0.5" size={18} />
        <div className="space-y-2 text-sm text-muted-foreground">
          <p className="m-0"><strong>Exam tip:</strong> Growth vs decay is about $b$, not about whether $a$ is positive. Percent → add one: $12\\%\\Rightarrow 1.12$.</p>
          <p className="m-0">On calculator items, round only as directed; keep exact <MathText text="$\\dfrac{\\ln c}{\\ln b}$" /> when the choices are exact.</p>
        </div>
      </div>
    </section>

    <section className="space-y-8">
      <div className="border-l-4 border-primary pl-6">
        <h2 className="text-3xl font-bold m-0">Deep dive: solving exponential equations</h2>
        <p className="text-muted-foreground mt-2">Same base → equate exponents. Otherwise take logs.</p>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Same base:</strong> <MathText text="$2^{x+1}=2^{5}\\Rightarrow x+1=5\\Rightarrow x=4$" />. Rewrite using laws of exponents until bases match when possible.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Log both sides:</strong> <MathText text="$3^{x}=40\\Rightarrow x=\\dfrac{\\ln 40}{\\ln 3}$" />. Calculator evaluates the decimal; keep exact form if choices are exact.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Quadratic in disguise:</strong> <MathText text="$e^{2x}-5e^{x}+6=0$" />. Let <MathText text="$u=e^{x}$" />, solve <MathText text="$u^2-5u+6=0$" />, then <MathText text="$u=e^{x}$" />.
        </p>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-destructive/5 border border-destructive/20 flex gap-3">
        <AlertTriangle className="text-destructive shrink-0 mt-0.5" size={18} />
        <p className="text-sm text-muted-foreground m-0">
          <strong>Trap:</strong> writing <MathText text="$\\log(a+b)=\\log a+\\log b$" />. Logs turn products into sums, not sums into sums.
        </p>
      </div>
    </section>

    <section className="space-y-8">
      <div className="border-l-4 border-primary pl-6">
        <h2 className="text-3xl font-bold m-0">Deep dive: logarithmic equations & domain</h2>
        <p className="text-muted-foreground mt-2">Always check that every log argument stays positive.</p>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          Condense to one log when possible, then exponentiate. Example: <MathText text="$\\log_2(x-1)+\\log_2(x+1)=3\\Rightarrow\\log_2((x-1)(x+1))=3\\Rightarrow x^2-1=8$" />. Solutions candidates $\\pm 3$; discard $x=-3$ if it fails domain.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          Domain of <MathText text="$\\log_b(g(x))$" />: <MathText text="$g(x)>0$" /> (and $b>0$, $b\\neq 1$). For a sum of logs, every argument must be positive.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          Change of base is your calculator friend: <MathText text="$\\log_b a=\\dfrac{\\ln a}{\\ln b}=\\dfrac{\\log a}{\\log b}$" />.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 not-prose items-stretch">
        <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <h3 className="font-bold text-lg m-0">Inverse view</h3>
          <p className="text-sm text-muted-foreground m-0">
            <MathText text="$y=\\log_b x\\Leftrightarrow x=b^{y}$" />. Reading a log equation as an exponential often clears confusion faster than memorizing steps.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <h3 className="font-bold text-lg m-0">Natural log on the exam</h3>
          <p className="text-sm text-muted-foreground m-0">
            <MathText text="$\\ln$" /> is log base $e$. Derivatives are Calculus, but Precalc still uses <MathText text="$\\ln$" /> heavily for solving continuous models.
          </p>
        </div>
      </div>
    </section>

    <section className="space-y-8">
      <div className="border-l-4 border-primary pl-6">
        <h2 className="text-3xl font-bold m-0">Deep dive: finance & half-life templates</h2>
        <p className="text-muted-foreground mt-2">Memorize the skeletons; plug carefully.</p>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Compound (annual):</strong> <MathText text="$A=P(1+r)^t$" />. <strong>n times/year:</strong> <MathText text="$A=P\\left(1+\\dfrac{{r}}{{n}}\\right)^{{nt}}$" />. Continuous: <MathText text="$A=Pe^{{rt}}$" />.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Simple interest</strong> (distractor): <MathText text="$A=P(1+rt)$" /> — linear in $t$, not exponential.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Half-life:</strong> <MathText text="$A=A_0\\left(\\tfrac12\\right)^{t/h}$" /> or <MathText text="$A=A_0 e^{{-kt}}$" /> with <MathText text="$k=\\dfrac{{\\ln 2}}{{h}}$" />. Counting half-lives is fastest when $t$ is a multiple of $h$.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Doubling time:</strong> solve <MathText text="$b^{t}=2$" /> → <MathText text="$t=\\dfrac{{\\ln 2}}{{\\ln b}}$" />. Rule of 72 is an approximation, not an AP requirement.
        </p>
      </div>
    </section>

    <section className="space-y-8">
      <div className="border-l-4 border-primary pl-6">
        <h2 className="text-3xl font-bold m-0">Semi-log & residual ideas</h2>
        <p className="text-muted-foreground mt-2">How Precalc talks about “which model fits.”</p>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          On a semi-log plot (log $y$ vs $x$), an exponential <MathText text="$y=ab^{x}$" /> becomes linear. If points look linear there, an exponential model is appropriate.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          Residual plots that fan or curve suggest the wrong model family. For Unit 2, focus on recognizing exponential vs linear from ratios vs differences in a table.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 not-prose items-stretch">
        <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <h3 className="font-bold text-lg m-0">Constant ratios</h3>
          <p className="text-sm text-muted-foreground m-0">
            Equal $x$-steps and roughly constant <MathText text="$y_{{n+1}}/y_n$" /> → exponential. Constant first differences → linear (Unit 1).
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <h3 className="font-bold text-lg m-0">Percent → base</h3>
          <p className="text-sm text-muted-foreground m-0">
            Growth $r$ → base $1+r$. Decay $r$ → base $1-r$. Example: $8\\%$ decay → $0.92$.
          </p>
        </div>
      </div>
    </section>

    <section className="space-y-8">
      <div className="border-l-4 border-primary pl-6">
        <h2 className="text-3xl font-bold m-0">More worked models</h2>
        <p className="text-muted-foreground mt-2">Word-problem skeletons.</p>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Population:</strong> <MathText text="$P(t)=1200(1.03)^t$" />. Find $P(10)$ with a calculator. Find when $P=2000$: <MathText text="$1.03^t=2000/1200\\Rightarrow t=\\ln(5/3)/\\ln 1.03$" />.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Cooling / decay:</strong> <MathText text="$A(t)=A_0(1/2)^{t/h}$" /> with half-life $h$. If $h=8$ hours and you want $1/8$ left, that is $3$ half-lives → $24$ hours.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Investment compare:</strong> always compute compound vs simple side by side when both appear in choices; the distractor is usually simple interest.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 not-prose items-stretch">
        <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <h3 className="font-bold text-lg m-0">Expanding checklist</h3>
          <p className="text-sm text-muted-foreground m-0">
            Write every log as a sum/difference/power before simplifying numerically. Check arguments stay positive after you solve.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <h3 className="font-bold text-lg m-0">Condensing checklist</h3>
          <p className="text-sm text-muted-foreground m-0">
            Coefficients become exponents first, then combine sums into products. One log on each side makes the exponential step clean.
          </p>
        </div>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
        <h3 className="font-bold text-lg m-0">Quick self-check</h3>
        <ul className="text-sm text-muted-foreground space-y-2 m-0 list-disc list-inside">
          <li>Growth vs decay from $b$?</li>
          <li>Three log laws + change of base?</li>
          <li>Domain of <MathText text="$\\log(2x-5)$" />?</li>
          <li>Half-life count vs formula with <MathText text="$\\ln$" />?</li>
          <li>Semi-log linear ⇒ exponential?</li>
        </ul>
      </div>
    </section>
  </div>
);

export default PrecalcUnit2Content;
