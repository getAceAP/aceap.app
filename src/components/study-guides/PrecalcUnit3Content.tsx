import MathText from "@/components/MathText";
import { ArrowLeftRight, Waves, AlertTriangle, BookOpen } from "lucide-react";

const PrecalcUnit3Content = () => (
  <div className="space-y-16">
    <section className="space-y-6">
      <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex gap-4 items-start not-prose">
        <Waves className="text-primary shrink-0 mt-1" size={20} />
        <div className="space-y-3">
          <h3 className="font-bold text-primary mb-0">Unit 3: Trigonometric and Polar Functions</h3>
          <p className="text-sm text-muted-foreground leading-relaxed m-0">
            About <strong>30–35%</strong> of the exam. Unit circle fluency, sinusoid parameters, inverse ranges, and polar conversions. Calculator-active items use degree/radian mode carefully — check the mode every time.
          </p>
        </div>
      </div>
    </section>

    <section className="space-y-8">
      <div className="border-l-4 border-primary pl-6">
        <h2 className="text-3xl font-bold m-0">3.1–3.2 Angles</h2>
        <p className="text-muted-foreground mt-2">Degrees ↔ radians; coterminal angles.</p>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <MathText text="Degrees to radians: multiply by $\\dfrac{\\pi}{180}$. Radians to degrees: multiply by $\\dfrac{180}{\\pi}$." />
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          Memorize: <MathText text="$0,\\tfrac{\\pi}{6},\\tfrac{\\pi}{4},\\tfrac{\\pi}{3},\\tfrac{\\pi}{2},\\pi$" /> and the degree twins $0^\\circ,30^\\circ,45^\\circ,60^\\circ,90^\\circ,180^\\circ$.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Worked:</strong> <MathText text="$180^\\circ=\\pi$. $90^\\circ=\\tfrac{\\pi}{2}$. $75^\\circ\\approx 1.31$ rad on a calculator." />
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          Coterminal: add/subtract full turns (<MathText text="$\\pm 360^\\circ$" /> or <MathText text="$\\pm 2\\pi$" />).
        </p>
      </div>
    </section>

    <section className="space-y-8">
      <div className="border-l-4 border-primary pl-6">
        <h2 className="text-3xl font-bold m-0">3.3–3.4 Unit circle and definitions</h2>
        <p className="text-muted-foreground mt-2">Coordinates are cosine and sine.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 not-prose items-stretch">
        <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <h3 className="font-bold text-lg m-0">Coordinates</h3>
          <p className="text-sm text-muted-foreground leading-relaxed m-0">
            <MathText text="On the unit circle: $\\cos\\theta=x$, $\\sin\\theta=y$, $\\tan\\theta=\\dfrac{\\sin\\theta}{\\cos\\theta}$. Undefined when $\\cos=0$." />
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed m-0">
            <MathText text="$\\sin\\tfrac{\\pi}{6}=\\tfrac12$, $\\cos\\tfrac{\\pi}{3}=\\tfrac12$, $\\sin\\tfrac{\\pi}{4}=\\cos\\tfrac{\\pi}{4}=\\tfrac{\\sqrt{2}}{2}$." />
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <h3 className="font-bold text-lg m-0">Reciprocals</h3>
          <p className="text-sm text-muted-foreground leading-relaxed m-0">
            <MathText text="$\\csc=1/\\sin$, $\\sec=1/\\cos$, $\\cot=\\cos/\\sin$. Pythagorean: $\\sin^2\\theta+\\cos^2\\theta=1$." />
          </p>
        </div>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
        <h3 className="font-bold text-lg m-0">Even / odd</h3>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <MathText text="Sine and tangent are odd; cosine is even: $\\sin(-\\theta)=-\\sin\\theta$, $\\cos(-\\theta)=\\cos\\theta$." />
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          QII reference angle (radians): <MathText text="$\\pi-\\theta$" />. Signs follow the quadrant (ASTC / “all students take calculus”).
        </p>
      </div>
    </section>

    <section className="space-y-8">
      <div className="border-l-4 border-primary pl-6">
        <h2 className="text-3xl font-bold m-0">3.5 Sinusoids</h2>
        <p className="text-muted-foreground mt-2">Amplitude, period, midline, phase.</p>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <MathText text="For $y=a\\sin\\big(b(x-h)\\big)+d$ (same idea with $\\cos$):" />
        </p>
        <ul className="text-sm text-muted-foreground space-y-2 m-0 list-disc list-inside">
          <li><MathText text="Amplitude $=|a|$" /></li>
          <li><MathText text="Period $=\\dfrac{2\\pi}{|b|}$" /></li>
          <li><MathText text="Phase shift $=h$ (right if written $x-h$)" /></li>
          <li><MathText text="Midline $y=d$" /></li>
        </ul>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Worked:</strong> <MathText text="$y=-3\\cos x$ has amplitude $3$. $y=2\\sin x+5$ has midline $y=5$. $y=\\sin(4x)$ has period $\\tfrac{\\pi}{2}$." />
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Form</strong> <MathText text="$\\sin(bx-c)$" />: rewrite as <MathText text="$\\sin\\big(b(x-\\tfrac{c}{b})\\big)$" /> so the phase shift is <MathText text="$h=c/b$" />.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          Cycles on <MathText text="$[0,2\\pi]$" />: the number of cycles equals <MathText text="$|b|$" /> for <MathText text="$\\sin(bx)$" />.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          Max of <MathText text="$a\\sin(bx)+d$" /> is <MathText text="$|a|+d$" /> when $a&gt;0$ (more carefully: $d+|a|$).
        </p>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-destructive/5 border border-destructive/20 flex gap-3">
        <AlertTriangle className="text-destructive shrink-0 mt-0.5" size={18} />
        <p className="text-sm text-muted-foreground m-0">
          Period depends on <MathText text="$|b|$" />, not amplitude. Amplitude ignores the sign of $a$. Mixing these is the #1 sinusoid trap.
        </p>
      </div>
    </section>

    <section className="space-y-8">
      <div className="border-l-4 border-primary pl-6">
        <h2 className="text-3xl font-bold m-0">3.7 Inverse trig & equations</h2>
        <p className="text-muted-foreground mt-2">Restricted ranges; solutions on an interval.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 not-prose items-stretch">
        <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <h3 className="font-bold text-lg m-0">Ranges to memorize</h3>
          <p className="text-sm text-muted-foreground leading-relaxed m-0">
            <MathText text="$\\arcsin$: $\\left[-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}\\right]$. $\\arccos$: $[0,\\pi]$. These show up as pure MCQ facts." />
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <h3 className="font-bold text-lg m-0">Solving</h3>
          <p className="text-sm text-muted-foreground leading-relaxed m-0">
            <MathText text="$\\sin\\theta=\\tfrac12$ on $[0,2\\pi)$ → $\\tfrac{\\pi}{6}$ and $\\tfrac{5\\pi}{6}$. Calculator: $\\arcsin(0.3)$ gives the principal value; add the second solution using symmetry." />
          </p>
        </div>
      </div>
    </section>

    <section className="space-y-8">
      <div className="border-l-4 border-primary pl-6">
        <h2 className="text-3xl font-bold m-0">3.13 Polar</h2>
        <p className="text-muted-foreground mt-2">Bridge to rectangular coordinates.</p>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <MathText text="$x=r\\cos\\theta$, $y=r\\sin\\theta$, $r=\\sqrt{x^2+y^2}$. Keep quadrant signs when recovering $\\theta$." />
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Worked:</strong> <MathText text="$(r,\\theta)=(2,\\pi/3)$ → $x=2\\cdot\\tfrac12=1$, $y=2\\cdot\\tfrac{\\sqrt{3}}{2}=\\sqrt{3}$. Point $(3,4)$ → $r=5$." />
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          Calculator: for messy $(x,y)$, compute <MathText text="$r$" /> with a hypotenuse; do not add $x+y$.
        </p>
      </div>
      <div className="not-prose p-6 rounded-2xl border border-primary/20 bg-primary/5 flex gap-3">
        <ArrowLeftRight className="text-primary shrink-0 mt-0.5" size={18} />
        <div className="space-y-2 text-sm text-muted-foreground">
          <p className="m-0"><strong>Exam tip:</strong> Special angles — no calculator. Non-special degrees/radians — calculator, and confirm DEG vs RAD mode.</p>
          <p className="m-0 flex items-start gap-2"><BookOpen size={16} className="shrink-0 mt-0.5 text-primary" /><span>Phase shift: always rewrite to <MathText text="$b(x-h)$" /> before reading $h$. Period formula never uses $a$ or $d$.</span></p>
        </div>
      </div>
    </section>

    <section className="space-y-8">
      <div className="border-l-4 border-primary pl-6">
        <h2 className="text-3xl font-bold m-0">Deep dive: unit circle & reference angles</h2>
        <p className="text-muted-foreground mt-2">Special angles stay no-calculator; everything else needs DEG/RAD discipline.</p>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          Memorize sine/cosine for $0$, $30^\\circ$, $45^\\circ$, $60^\\circ$, $90^\\circ$ and the matching radians. ASTC (all / sine / tangent / cosine positive by quadrant) fixes signs.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          Reference angle: acute angle to the $x$-axis. Example: $150^\\circ$ → reference $30^\\circ$, QII → <MathText text="$\\sin$ positive, $\\cos$ negative" />.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          Coterminal angles differ by $360^\\circ$ or $2\\pi$. Reducing modulo a full turn is the first move on “find all solutions” items.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 not-prose items-stretch">
        <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <h3 className="font-bold text-lg m-0">Radians intuition</h3>
          <p className="text-sm text-muted-foreground m-0">
            One radian ≈ $57.3^\\circ$. Arc length <MathText text="$s=r\\theta$" /> uses radians. If a formula looks wrong numerically, check mode first.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <h3 className="font-bold text-lg m-0">Pythagorean identity</h3>
          <p className="text-sm text-muted-foreground m-0">
            <MathText text="$\\sin^2\\theta+\\cos^2\\theta=1$" /> unlocks many algebra steps. From one value and a quadrant, recover the other.
          </p>
        </div>
      </div>
    </section>

    <section className="space-y-8">
      <div className="border-l-4 border-primary pl-6">
        <h2 className="text-3xl font-bold m-0">Deep dive: transformations of sine & cosine</h2>
        <p className="text-muted-foreground mt-2">Read <MathText text="$y=a\\sin(b(x-h))+d$" /> left to right: stretch, period, shift, midline.</p>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
        <ul className="text-sm text-muted-foreground space-y-2 m-0 list-disc list-inside">
          <li><MathText text="$|a|$" /> = amplitude; negative $a$ reflects over the midline.</li>
          <li>Period <MathText text="$=\\dfrac{{2\\pi}}{{|b|}}$" /> for sin/cos (not for tan — tan period is <MathText text="$\\pi/|b|$" />).</li>
          <li>Phase: factor $b$ out so the inside is <MathText text="$b(x-h)$" />. Then $h$ is the horizontal shift.</li>
          <li><MathText text="$d$" /> = midline (vertical shift).</li>
        </ul>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Worked:</strong> <MathText text="$y=-2\\cos\\!\\left(3x-\\dfrac{{\\pi}}{{2}}\\right)+1$" />. Rewrite: <MathText text="$3\\left(x-\\dfrac{{\\pi}}{{6}}\\right)$" />. Amplitude $2$, period <MathText text="$2\\pi/3$" />, phase <MathText text="$\\pi/6$" /> right, midline $y=1$, reflection because of the leading minus.
        </p>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-destructive/5 border border-destructive/20 flex gap-3">
        <AlertTriangle className="text-destructive shrink-0 mt-0.5" size={18} />
        <p className="text-sm text-muted-foreground m-0">
          <strong>Trap:</strong> calling the phase shift <MathText text="$c$" /> from <MathText text="$a\\sin(bx-c)$" /> without dividing by $b$. Always compute <MathText text="$h=c/b$" />.
        </p>
      </div>
    </section>

    <section className="space-y-8">
      <div className="border-l-4 border-primary pl-6">
        <h2 className="text-3xl font-bold m-0">Deep dive: inverse trig & solving equations</h2>
        <p className="text-muted-foreground mt-2">Calculator gives one value; the circle gives the rest.</p>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          Ranges: <MathText text="$\\arcsin$" /> → <MathText text="$[-\\pi/2,\\pi/2]$" />; <MathText text="$\\arccos$" /> → <MathText text="$[0,\\pi]$" />; <MathText text="$\\arctan$" /> → <MathText text="$(-\\pi/2,\\pi/2)$" />.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          Solve <MathText text="$\\sin\\theta=1/2$" /> on <MathText text="$[0,2\\pi)$" />: <MathText text="$\\theta=\\pi/6$" /> and <MathText text="$5\\pi/6$" />. General solution adds <MathText text="$2\\pi k$" />.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          Calculator item: <MathText text="$\\sin\\theta=0.35$" /> → one solution <MathText text="$\\arcsin(0.35)$" />; second is <MathText text="$\\pi-\\arcsin(0.35)$" /> in radians on a full period.
        </p>
      </div>
    </section>

    <section className="space-y-8">
      <div className="border-l-4 border-primary pl-6">
        <h2 className="text-3xl font-bold m-0">Polar ↔ rectangular</h2>
        <p className="text-muted-foreground mt-2">Light treatment for Precalc Unit 3.</p>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <MathText text="$x=r\\cos\\theta$, $y=r\\sin\\theta$, $r=\\sqrt{{x^2+y^2}}$, $\\tan\\theta=y/x$" /> (watch quadrant when recovering $\\theta$).
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Worked:</strong> $(3,4)$ → $r=5$, <MathText text="$\\theta=\\arctan(4/3)$" /> in QI. Calculator for non-special $\\theta$; leave exact when $r$ is a clean Pythagorean triple.
        </p>
      </div>
    </section>

    <section className="space-y-8">
      <div className="border-l-4 border-primary pl-6">
        <h2 className="text-3xl font-bold m-0">Graph reading & modeling</h2>
        <p className="text-muted-foreground mt-2">From a sketch to an equation.</p>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          Given a sine-looking wave: midline = average of max and min; amplitude = distance from midline to max; period = horizontal distance between consecutive peaks; phase = how far the “standard” sine is shifted to match a key point.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          <strong>Worked skeleton:</strong> max $7$, min $1$ → midline $4$, amplitude $3$. Peaks every $2$ units → period $2$ → <MathText text="$b=\\pi$" /> because <MathText text="$2\\pi/|b|=2$" />.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed m-0">
          Polar graphs in Precalc stay light: focus on converting points and recognizing $r$ as distance from the origin, not on full rose-curve taxonomy unless your teacher added it.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 not-prose items-stretch">
        <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <h3 className="font-bold text-lg m-0">Degree mode checklist</h3>
          <p className="text-sm text-muted-foreground m-0">
            Word problems with “degrees” → DEG. Pure <MathText text="$\\sin(1.2)$" /> in a calc item without the degree symbol → RAD.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <h3 className="font-bold text-lg m-0">Two solutions habit</h3>
          <p className="text-sm text-muted-foreground m-0">
            For sine/cosine equations, the calculator gives one angle; the unit circle almost always supplies a second on a full period.
          </p>
        </div>
      </div>
      <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
        <h3 className="font-bold text-lg m-0">Quick self-check</h3>
        <ul className="text-sm text-muted-foreground space-y-2 m-0 list-disc list-inside">
          <li>Convert $120^\\circ$ and <MathText text="$\\tfrac{2\\pi}{3}$" /> both ways?</li>
          <li>Amplitude / period / midline / phase for a transformed sine?</li>
          <li>Ranges of arcsin and arccos?</li>
          <li><MathText text="$\\sin\\theta=1/2$" /> both solutions on <MathText text="$[0,2\\pi)$" />?</li>
          <li>Polar ↔ rectangular formulas?</li>
        </ul>
      </div>
    </section>
  </div>
);

export default PrecalcUnit3Content;
