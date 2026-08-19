import { Baby, GraduationCap, Link2, Gamepad2 } from "lucide-react";

const PsychUnit3Content = () => {
  return (
    <div className="space-y-16">
      <section className="space-y-6">
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex gap-4 items-start not-prose">
          <Baby className="text-primary shrink-0 mt-1" size={20} />
          <div>
            <h3 className="font-bold text-primary mb-1">Unit 3: Development and Learning</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This unit joins lifespan development with how associations, consequences, and models change behavior. Expect questions that name a stage, parenting style, attachment pattern, or reinforcement schedule from a short story.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">Development Across the Lifespan</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 not-prose">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold text-lg flex items-center gap-2"><GraduationCap className="text-primary" size={18} /> Piaget and Vygotsky</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Sensorimotor</strong> (0–2): senses and actions; object permanence develops.</li>
              <li><strong>Preoperational</strong> (2–7): language and pretend play; weak conservation/logic.</li>
              <li><strong>Concrete operational</strong> (7–11): logical thought about concrete events.</li>
              <li><strong>Formal operational</strong> (12+): abstract and hypothetical reasoning.</li>
              <li>Vygotsky: learning is social. The <strong>ZPD</strong> is what a child can do with help. <strong>Theory of mind</strong> is knowing others have different beliefs.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold">Erikson and Identity</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Trust vs mistrust → autonomy vs shame → initiative vs guilt → industry vs inferiority → <strong>identity vs role confusion</strong> → intimacy vs isolation → generativity vs stagnation → integrity vs despair.</li>
              <li>Marcia: <strong>diffusion</strong> (no explore, no commit), <strong>foreclosure</strong> (commit without exploring), <strong>moratorium</strong> (exploring), <strong>achievement</strong> (explored and committed).</li>
            </ul>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 not-prose">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold flex items-center gap-2"><Link2 className="text-primary" size={18} /> Attachment and Parenting</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Secure:</strong> explores, distressed at leave, comforted at return.</li>
              <li><strong>Avoidant:</strong> little distress, ignores caregiver.</li>
              <li><strong>Anxious:</strong> clingy, hard to soothe.</li>
              <li><strong>Disorganized:</strong> confused; often linked to frightening care.</li>
              <li>Parenting: authoritarian (strict), permissive (few rules), negligent (absent), <strong>authoritative</strong> (warm + firm).</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold">Prenatal to Language</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Teratogens</strong> harm the embryo/fetus. Infant reflexes (rooting, grasping, Babinski) support survival.</li>
              <li>Language: cooing → babbling → one-word → telegraphic two-word. <strong>Overgeneralization</strong> (“goed”) shows rule learning.</li>
              <li>Bronfenbrenner: micro, meso, exo, macro, chrono systems.</li>
              <li>Longitudinal = same people over time. Cross-sectional = different ages at once (cohort effects).</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">Learning</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 not-prose">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold">Classical</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">NS + US → UR. After pairing, CS → CR. Know extinction, spontaneous recovery, generalization, and discrimination. Second-order conditioning pairs a new NS with an established CS.</p>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold">Operant</h3>
            <p className="text-sm text-muted-foreground leading-relaxed"><strong>+</strong> means add; <strong>−</strong> means remove. Reinforcement increases behavior; punishment decreases it. Schedules: FR, VR, FI, VI. Variable-ratio is very resistant to extinction (gambling).</p>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold flex items-center gap-2"><Gamepad2 className="text-primary" size={18} /> Observational</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Bandura: we learn from models. <strong>Vicarious reinforcement/punishment</strong> change imitation. <strong>Latent learning</strong> and <strong>cognitive maps</strong> show learning without immediate reward. Insight is a sudden solution.</p>
          </div>
        </div>
        <div className="not-prose p-5 rounded-2xl border border-primary/20 bg-primary/5 text-sm text-muted-foreground">
          <strong>Exam tip:</strong> “Taking the phone away after curfew” is negative punishment (remove something liked to decrease a behavior). “Turning off a loud alarm by buckling up” is negative reinforcement (remove something aversive to increase a behavior).
        </div>
      </section>
    </div>
  );
};

export default PsychUnit3Content;
