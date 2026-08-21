import MathText from "@/components/MathText";
import { ArrowLeftRight, Calculator, AlertTriangle, BookOpen } from "lucide-react";

const PrecalcUnit1Content = () => (
  <div className="space-y-16">
    <section className="space-y-6">
      <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex gap-4 items-start not-prose">
        <Calculator className="text-primary shrink-0 mt-1" size={20} />
        <div className="space-y-3">
          <h3 className="font-bold text-primary mb-0">Unit 1: Polynomial and Rational Functions</h3>
          <p className="text-sm text-muted-foreground leading-relaxed m-0">
            About <strong>30–40%</strong> of the AP Precalculus exam. This unit is the language of rates, zeros, and asymptotes. Calculator-active items ask you to evaluate, compare average rates of change, and check end behavior numerically — use Desmos when the badge says Calculator OK.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed m-0">
            Goal: given a function or table, name the model type, locate discontinuities, and predict long-run behavior without guessing.
          </p>
        </div>
      </div>
    </section>

    <section className="space-y-8">
      <div className="border-l-4 border-primary pl-6">
        <h2 className="text-3xl font-bold m-0">1.1–1.3 Rates of change</h2>
        <p className="text-muted-foreground mt-2">Average rate of change is the slope of a secant line.</p>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <MathText text="On an interval $[a,b]$, the average rate of change (AROC) of $f$ is $\dfrac{f(b)-f(a)}{b-a}$. Units are “output per input” (e.g., meters per second)." />
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Worked 1:</strong> <MathText text="$f(x)=x^2$ on $[1,3]$ → $\dfrac{9-1}{2}=4$. The secant from $(1,1)$ to $(3,9)$ has slope $4$." />
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Worked 2:</strong> <MathText text="$f(x)=2x^3-x$ on $[0,2]$ → $\dfrac{f(2)-f(0)}{2}=\dfrac{(16-2)-0}{2}=7$." />
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Worked 3:</strong> Table $f(0)=4$, $f(1)=7$, $f(2)=10$, $f(3)=13$. AROC from $0$ to $3$ is <MathText text="$\dfrac{13-4}{3}=3$" />. First differences are constantly $3$ → linear.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 not-prose items-stretch">
        <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <h3 className="font-bold text-lg m-0">Linear</h3>
          <p className="text-sm text-muted-foreground leading-relaxed m-0">
            Constant first differences when $x$-spacing is equal. AROC on any interval equals the slope $m$.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <h3 className="font-bold text-lg m-0">Quadratic</h3>
          <p className="text-sm text-muted-foreground leading-relaxed m-0">
            First differences change linearly; second differences are constant. AROC itself changes with the interval.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <h3 className="font-bold text-lg m-0">Exponential</h3>
          <p className="text-sm text-muted-foreground leading-relaxed m-0">
            Constant ratios of successive outputs (equal $x$-steps), not constant differences. That comparison also appears in Unit 2.
          </p>
        </div>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-destructive/5 border border-destructive/20 flex gap-3">
        <AlertTriangle className="text-destructive shrink-0 mt-0.5" size={18} />
        <p className="text-sm text-muted-foreground m-0">
          <strong>Common errors:</strong> computing only <MathText text="$f(b)-f(a)$" /> and forgetting to divide; using <MathText text="$b-a$" /> in the numerator; mixing up order so the sign flips.
        </p>
      </div>
    </section>

    <section className="space-y-8">
      <div className="border-l-4 border-primary pl-6">
        <h2 className="text-3xl font-bold m-0">1.4 Polynomial features</h2>
        <p className="text-muted-foreground mt-2">Degree, intercepts, symmetry, turning points.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 not-prose items-stretch">
        <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <h3 className="font-bold text-lg m-0">Degree and shape</h3>
          <p className="text-sm text-muted-foreground leading-relaxed m-0">
            Degree $n$ = highest power. At most $n$ real zeros (counting multiplicity) and at most $n-1$ turning points. The $y$-intercept is always $p(0)$, the constant term.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed m-0">
            <strong>Worked:</strong> <MathText text="$p(x)=4x^3-2x+7$ has $y$-intercept $7$, degree $3$, at most $2$ turning points." />
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <h3 className="font-bold text-lg m-0">Even / odd / neither</h3>
          <p className="text-sm text-muted-foreground leading-relaxed m-0">
            Even: only even powers (including constant) → symmetric about $y$-axis. Odd: only odd powers → rotational symmetry $180^\circ$. Mix of both → neither.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed m-0">
            <MathText text="$x^4-2x^2$ even; $x^5-2x^3+x$ odd; $x^3+x^2$ neither." />
          </p>
        </div>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
        <h3 className="font-bold text-lg m-0 flex items-center gap-2"><BookOpen size={18} className="text-primary" /> Product of polynomials</h3>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          Degrees add under multiplication: deg$(pq)=$ deg $p$ + deg $q$ (unless a leading term cancels, which does not happen for nonzero polynomials over the reals in standard form).
        </p>
      </div>
    </section>

    <section className="space-y-8">
      <div className="border-l-4 border-primary pl-6">
        <h2 className="text-3xl font-bold m-0">1.5 Zeros and theorems</h2>
        <p className="text-muted-foreground mt-2">Factor, Remainder, Rational Root, conjugates, multiplicity.</p>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Remainder Theorem:</strong> remainder when dividing by <MathText text="$x-c$" /> is <MathText text="$p(c)$" />.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Factor Theorem:</strong> <MathText text="$x-c$" /> is a factor iff <MathText text="$p(c)=0$" />.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Worked:</strong> <MathText text="$p(x)=x^2-5x+6$, divide by $x-1$: remainder $p(1)=2$. Since $p(2)=0$, $x-2$ is a factor." />
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Rational Root Theorem:</strong> any rational zero (in lowest terms $p/q$) has $p$ dividing the constant and $q$ dividing the leading coefficient. List candidates, then test.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Conjugate pairs:</strong> real-coefficient polynomials — if <MathText text="$a+bi$" /> is a zero, so is <MathText text="$a-bi$" />.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 not-prose items-stretch">
        <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <h3 className="font-bold text-lg m-0">Multiplicity even</h3>
          <p className="text-sm text-muted-foreground leading-relaxed m-0">
            Graph touches the $x$-axis and turns around (bounce). Example: factor <MathText text="$(x+2)^4$" />.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <h3 className="font-bold text-lg m-0">Multiplicity odd</h3>
          <p className="text-sm text-muted-foreground leading-relaxed m-0">
            Graph crosses the $x$-axis. Multiplicity $1$ crosses “straight”; higher odd multiplicities flatten while crossing.
          </p>
        </div>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Building from zeros:</strong> monic quadratic with zeros $-3$ and $2$ is <MathText text="$(x+3)(x-2)=x^2+x-6$" />. Sign chart: between the zeros the product is negative if the leading coefficient is positive.
        </p>
      </div>
    </section>

    <section className="space-y-8">
      <div className="border-l-4 border-primary pl-6">
        <h2 className="text-3xl font-bold m-0">1.6 End behavior</h2>
        <p className="text-muted-foreground mt-2">Only the leading term matters as <MathText text="$|x|\\to\\infty$" />.</p>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          For <MathText text="$f(x)=ax^n+\\cdots$" />: even $n$ → both ends match the sign of $a$. Odd $n$ → left opposite $a$, right matches $a$.
        </p>
        <ul className="text-sm text-muted-foreground space-y-2 m-0 list-disc list-inside">
          <li><MathText text="$-2x^4$: both ends $\\to -\\infty$" /></li>
          <li><MathText text="$5x^3$: left $-\\infty$, right $+\\infty$" /></li>
          <li><MathText text="$-x^5$: left $+\\infty$, right $-\\infty$" /></li>
          <li><MathText text="$x^6$: both ends $\\to +\\infty$" /></li>
        </ul>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Calculator check:</strong> evaluate at a large $x$ (like $10$) to confirm the right-hand sign of <MathText text="$ax^n$" />.
        </p>
      </div>
    </section>

    <section className="space-y-8">
      <div className="border-l-4 border-primary pl-6">
        <h2 className="text-3xl font-bold m-0">1.7–1.10 Rational functions</h2>
        <p className="text-muted-foreground mt-2">Holes, asymptotes, equivalent forms, shifts.</p>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Always reduce first.</strong> A factor that cancels leaves a <strong>hole</strong> (removable discontinuity). Remaining denominator zeros are <strong>vertical asymptotes</strong>.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Worked:</strong> <MathText text="$\\dfrac{(x-2)(x+1)}{(x-2)(x-5)}$ → hole at $x=2$, VA at $x=5$. Reduced: $\\dfrac{x+1}{x-5}$. Hole $y$-value: plug $x=2$ → $\\dfrac{3}{-3}=-1$." />
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 not-prose items-stretch">
        <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <h3 className="font-bold text-lg m-0">HA: deg N &lt; deg D</h3>
          <p className="text-sm text-muted-foreground m-0"><MathText text="$y=0$" />. Example: <MathText text="$\\dfrac{x+1}{x^2+4}$" />.</p>
        </div>
        <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <h3 className="font-bold text-lg m-0">HA: equal degrees</h3>
          <p className="text-sm text-muted-foreground m-0">Ratio of leading coefficients. <MathText text="$\\dfrac{6x^2-1}{2x^2+5}\\to y=3$" />.</p>
        </div>
        <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <h3 className="font-bold text-lg m-0">Slant / oblique</h3>
          <p className="text-sm text-muted-foreground m-0">When deg N = deg D + 1: divide polynomials; no horizontal asymptote.</p>
        </div>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Equivalent forms:</strong> <MathText text="$\\dfrac{x^2-9}{x-3}=x+3$ for $x\\neq 3$" /> (hole at $3$ on the rational, line elsewhere).
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Transformations:</strong> <MathText text="$g(x)=f(x-h)+k$" /> shifts right $h$ and up $k$. Left $h$ is <MathText text="$f(x+h)$" />. Do not swap horizontal direction.
        </p>
      </div>
      <div className="not-prose p-6 rounded-2xl border border-primary/20 bg-primary/5 flex gap-3">
        <ArrowLeftRight className="text-primary shrink-0 mt-0.5" size={18} />
        <div className="space-y-2 text-sm text-muted-foreground">
          <p className="m-0"><strong>Exam tip:</strong> Name the feature before computing — hole vs VA vs HA. End behavior needs only degree parity and sign of $a$. On calculator items, evaluate AROC and $p(c)$ carefully; round only when asked.</p>
          <p className="m-0">If two features compete in a multiple choice, cancel first — many “two VAs” distractors are actually one hole + one VA.</p>
        </div>
      </div>
    </section>

    <section className="space-y-8">
      <div className="border-l-4 border-primary pl-6">
        <h2 className="text-3xl font-bold m-0">1.11 Function composition & inverses (prep)</h2>
        <p className="text-muted-foreground mt-2">Composition shows up when models chain; inverses swap input/output roles.</p>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <MathText text="$(f\\circ g)(x)=f(g(x))$. Order matters: apply $g$ first. Domain of $f\\circ g$ is values where $g(x)$ is in the domain of $f$." />
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Worked:</strong> <MathText text="$f(x)=x^2$, $g(x)=x-3$ → $(f\\circ g)(x)=(x-3)^2$, $(g\\circ f)(x)=x^2-3$." />
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          A linear function <MathText text="$f(x)=mx+b$" /> ($m\\neq 0$) has inverse <MathText text="$f^{-1}(x)=\\dfrac{x-b}{m}$" />. Graphically, inverses reflect over <MathText text="$y=x$" />.
        </p>
      </div>
    </section>

    <section className="space-y-8">
      <div className="border-l-4 border-primary pl-6">
        <h2 className="text-3xl font-bold m-0">Deep dive: average rate from tables & graphs</h2>
        <p className="text-muted-foreground mt-2">Most calculator items hide the formula and give data.</p>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          From a table, pick the two endpoints of the requested interval. You do not need every intermediate value unless the question asks about consecutive rates or first differences.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Worked table:</strong> $t=0,2,4,6$ with $h=12,18,28,42$. AROC on $[2,6]$ is <MathText text="$\\dfrac{42-18}{4}=6$" />. Consecutive AROCs $3$, $5$, $7$ are increasing → not linear.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          From a graph, estimate coordinates carefully. Secant slope ≈ rise/run between the marked points. If the curve is concave up, AROCs increase as you slide the interval right.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 not-prose items-stretch">
        <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <h3 className="font-bold text-lg m-0">Comparing two AROCs</h3>
          <p className="text-sm text-muted-foreground m-0">
            Compute both numerically. For <MathText text="$f(x)=x^2$" />, AROC on $[3,5]$ beats $[0,2]$ because the graph steepens.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <h3 className="font-bold text-lg m-0">Units matter</h3>
          <p className="text-sm text-muted-foreground m-0">
            If $C$ is cost in dollars and $q$ is quantity, AROC of $C$ vs $q$ is dollars per unit — average marginal cost on that interval.
          </p>
        </div>
      </div>
    </section>

    <section className="space-y-8">
      <div className="border-l-4 border-primary pl-6">
        <h2 className="text-3xl font-bold m-0">Deep dive: building polynomials from conditions</h2>
        <p className="text-muted-foreground mt-2">Zeros, multiplicity, and a point pin down a unique monic (or scaled) polynomial.</p>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          Zeros at $-2$ (mult. $2$) and $5$ (mult. $1$), and <MathText text="$p(0)=20$" />: start with <MathText text="$p(x)=a(x+2)^2(x-5)$" />. Then <MathText text="$p(0)=a\\cdot 4\\cdot(-5)=-20a=20\\Rightarrow a=-1$" />.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          Degree $4$ with only two real zeros listed often means the other zeros are a conjugate pair — or a repeated real zero. Read the prompt: “exactly two real zeros” vs “two distinct real zeros.”
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Sign charts:</strong> mark zeros on a number line, test one sample point per interval. For inequalities like <MathText text="$p(x)\\ge 0$" />, include zeros where $p=0$ when the inequality is non-strict; even multiplicity means the sign does not change across that zero.
        </p>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-destructive/5 border border-destructive/20 flex gap-3">
        <AlertTriangle className="text-destructive shrink-0 mt-0.5" size={18} />
        <p className="text-sm text-muted-foreground m-0">
          <strong>Trap:</strong> writing <MathText text="$(x-2)$" /> when the zero is $-2$. Zero $c$ means factor <MathText text="$(x-c)$" /> — so zero $-2$ → <MathText text="$(x+2)$" />.
        </p>
      </div>
    </section>

    <section className="space-y-8">
      <div className="border-l-4 border-primary pl-6">
        <h2 className="text-3xl font-bold m-0">Deep dive: rational asymptotes & holes checklist</h2>
        <p className="text-muted-foreground mt-2">A repeatable procedure that survives calculator and no-calculator sections.</p>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
        <ol className="text-sm text-muted-foreground space-y-2 m-0 list-decimal list-inside">
          <li>Factor numerator and denominator completely.</li>
          <li>Cancel common factors → those $x$-values are holes (find $y$ from the reduced form).</li>
          <li>Remaining denominator zeros → vertical asymptotes.</li>
          <li>Compare degrees for HA / slant; if equal degrees, HA = lead coeff ratio.</li>
          <li>Intercepts: $x$-intercepts from reduced numerator; $y$-intercept from $f(0)$ if defined.</li>
        </ol>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Worked full pass:</strong> <MathText text="$f(x)=\\dfrac{x^2-x-6}{x^2-9}=\\dfrac{(x-3)(x+2)}{(x-3)(x+3)}$" />. Hole at $x=3$, $y=\\dfrac{5}{6}$. VA $x=-3$. HA $y=1$. $x$-intercept $-2$. $y$-intercept <MathText text="$f(0)=\\dfrac{-6}{-9}=\\tfrac{2}{3}$" />.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          Calculator check: graph the original and zoom near $x=3$ — you should see a gap, not a vertical wall. Near $x=-3$, values blow up.
        </p>
      </div>
    </section>

    <section className="space-y-8">
      <div className="border-l-4 border-primary pl-6">
        <h2 className="text-3xl font-bold m-0">Modeling language (Unit 1)</h2>
        <p className="text-muted-foreground mt-2">How AP Precalc phrases polynomial / rational contexts.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 not-prose items-stretch">
        <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <h3 className="font-bold text-lg m-0">“Overestimates / underestimates”</h3>
          <p className="text-sm text-muted-foreground m-0">
            Often about whether a secant (AROC) sits above or below the curve — linked to concavity. If the graph is concave up on an interval, the secant lies above the graph.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <h3 className="font-bold text-lg m-0">“In the long run”</h3>
          <p className="text-sm text-muted-foreground m-0">
            End behavior or horizontal asymptote language. A rational with HA $y=L$ approaches $L$ as $x\\to\\pm\\infty$ (unless a slant case).
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <h3 className="font-bold text-lg m-0">“Average rate of change of … with respect to …”</h3>
          <p className="text-sm text-muted-foreground m-0">
            First quantity is the output function; second is the input variable. Set up <MathText text="$\\Delta y/\\Delta x$" /> with matching units.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <h3 className="font-bold text-lg m-0">“Equivalent expression”</h3>
          <p className="text-sm text-muted-foreground m-0">
            Polynomial division or canceling may produce an expression equal except at a hole. Domain restrictions stay even when the simplified algebra looks defined.
          </p>
        </div>
      </div>
    </section>

    <section className="space-y-8">
      <div className="border-l-4 border-primary pl-6">
        <h2 className="text-3xl font-bold m-0">Putting it together</h2>
        <p className="text-muted-foreground mt-2">Mini scenarios the way FRQ-style prompts feel.</p>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Scenario A — rates:</strong> A position function <MathText text="$s(t)=t^3-4t$" /> meters, $t$ in seconds. Average velocity on $[1,3]$ is AROC of $s$. Compute <MathText text="$\\dfrac{s(3)-s(1)}{2}$" />. That is not instantaneous velocity — that is Unit 1’s secant idea.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Scenario B — zeros:</strong> You are told a cubic with real coefficients has zeros $2$ and $1+i$. You must also have $1-i$, and you can write a real cubic as <MathText text="$(x-2)(x-(1+i))(x-(1-i))=(x-2)((x-1)^2+1)$" />.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Scenario C — rational graph:</strong> Given <MathText text="$f(x)=\\dfrac{(x+3)(x-1)}{(x+3)(x-4)}$" />, list: hole at $x=-3$; VA $x=4$; HA $y=1$ (equal degree, lead coeff ratio $1$). Then sketch intercepts from the reduced form.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 not-prose items-stretch">
        <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <h3 className="font-bold text-lg m-0">No-calculator habits</h3>
          <p className="text-sm text-muted-foreground leading-relaxed m-0">
            End behavior, multiplicity, HA rules, and Factor/Remainder with small integers — do these by hand. Show the reduced rational before naming asymptotes.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <h3 className="font-bold text-lg m-0">Calculator habits</h3>
          <p className="text-sm text-muted-foreground leading-relaxed m-0">
            Use Desmos to evaluate messy AROCs, check $p(c)$ for non-integer $c$, and compare two rates. Still write the setup <MathText text="$\\dfrac{f(b)-f(a)}{b-a}$" /> so you do not punch the wrong keys.
          </p>
        </div>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
        <h3 className="font-bold text-lg m-0">Quick self-check</h3>
        <ul className="text-sm text-muted-foreground space-y-2 m-0 list-disc list-inside">
          <li>Can you state AROC without looking?</li>
          <li>Even vs odd multiplicity — touch or cross?</li>
          <li>Three HA cases by comparing degrees?</li>
          <li>Hole vs VA after canceling?</li>
          <li>Why nonreal zeros come in pairs for real coefficients?</li>
        </ul>
      </div>
    </section>
  </div>
);

export default PrecalcUnit1Content;
