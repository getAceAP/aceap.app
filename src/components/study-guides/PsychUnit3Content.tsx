import { Baby, GraduationCap, Link2, Gamepad2, Clock, Languages } from "lucide-react";

const PsychUnit3Content = () => {
  return (
    <div className="space-y-20">
      <section className="space-y-6">
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex gap-4 items-start not-prose">
          <Baby className="text-primary shrink-0 mt-1" size={20} />
          <div className="space-y-3">
            <h3 className="font-bold text-primary mb-0">Unit 3: Development and Learning</h3>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">
              This unit joins lifespan development with how associations, consequences, and models change behavior. Expect a short story: a toddler who will not share, a teen trying on identities, a dog that salivates to a bell, a student who studies only when a quiz is announced. Your job is to name the stage, style, schedule, or type of learning.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">
              Development questions are chronological (age stages) or thematic (attachment, identity, parenting across the lifespan). Learning questions are classical, operant, or observational. Keep those buckets separate: Piaget is cognition in childhood; Skinner is consequences; Bandura is models.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6 space-y-2">
          <h2 className="text-3xl font-bold m-0">Development Across the Lifespan</h2>
          <p className="text-muted-foreground mt-0">Stages, relationships, and research designs that follow people as they grow.</p>
        </div>
        <p className="text-muted-foreground leading-relaxed not-prose">
          Continuous views see development as gradual accumulation. Discontinuous views see qualitatively different stages. AP wants you to use both: Piaget and Erikson are stage theories; many skills still grow smoothly. Longitudinal studies follow the same people (slow, attrition, no cohort mix-up). Cross-sectional compares ages at once (fast, but cohort effects: 70-year-olds differ from 20-year-olds in more than age).
        </p>
        <div className="grid md:grid-cols-2 gap-6 not-prose items-stretch">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2 m-0"><GraduationCap className="text-primary" size={18} /> Piaget</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Sensorimotor (0–2):</strong> world through senses and actions. Object permanence develops: things exist when hidden. Stranger anxiety often appears here.</li>
              <li><strong>Preoperational (2–7):</strong> language and pretend play. Egocentrism, weak conservation, centration (focus on one feature). Animism and irreversibility show up in items.</li>
              <li><strong>Concrete operational (7–11):</strong> logical operations on real objects. Conservation, classification, seriation.</li>
              <li><strong>Formal operational (12+):</strong> abstract and hypothetical thought, systematic science-style reasoning. Not everyone uses this equally in every domain.</li>
              <li>Schemas grow by assimilation (fit new into old) and accommodation (change the schema). Theory of mind — knowing others have different beliefs — is a major social-cognitive milestone.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg m-0">Vygotsky and Erikson</h3>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">Vygotsky: learning is social and cultural. The <strong>zone of proximal development</strong> is what a child can do with help but not yet alone. Scaffolding is the help. Language is a tool of thought, not just a label for it.</p>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">Erikson’s psychosocial crises (know the pairing, not just the number):</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Trust vs mistrust (infant) → autonomy vs shame (toddler) → initiative vs guilt (preschool) → industry vs inferiority (school) → <strong>identity vs role confusion</strong> (adolescence) → intimacy vs isolation (young adult) → generativity vs stagnation (midlife) → integrity vs despair (late life).</li>
              <li>Marcia’s identity statuses: <strong>diffusion</strong> (no explore, no commit), <strong>foreclosure</strong> (commit without exploring), <strong>moratorium</strong> (exploring), <strong>achievement</strong> (explored and committed).</li>
            </ul>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 not-prose items-stretch">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2 m-0"><Link2 className="text-primary" size={18} /> Attachment and parenting</h3>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">Harlow’s monkeys preferred the cloth “mother” for contact comfort, not just food. Ainsworth’s Strange Situation sorts infants:</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Secure:</strong> explores, distressed at leave, comforted at return.</li>
              <li><strong>Avoidant:</strong> little distress, ignores caregiver (often linked to unavailable care).</li>
              <li><strong>Anxious/ambivalent:</strong> clingy, hard to soothe, mixed anger and contact-seeking.</li>
              <li><strong>Disorganized:</strong> confused or fearful; often linked to frightening or inconsistent care.</li>
              <li>Parenting (Baumrind): authoritarian (strict, low warmth), permissive (warm, few rules), negligent/uninvolved (absent), <strong>authoritative</strong> (warm and firm) — usually the best academic and social outcomes in the research AP cites.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2 m-0"><Languages className="text-primary" size={18} /> Prenatal, infancy, language</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Teratogens</strong> (alcohol, some viruses, some drugs) harm the embryo or fetus. Timing matters: embryonic period is especially sensitive.</li>
              <li>Infant reflexes: rooting, sucking, grasping (palmar), Babinski, Moro. They support survival and are used as neurological checks.</li>
              <li>Language: cooing → babbling → one-word → two-word telegraphic speech. <strong>Overgeneralization</strong> (“goed,” “foots”) shows children extract rules, not only copy.</li>
              <li>Critical/sensitive periods: some skills (including aspects of language) are easier in early windows. Bronfenbrenner’s systems (micro, meso, exo, macro, chrono) place the child in nested contexts.</li>
              <li>Kohlberg’s moral reasoning (preconventional, conventional, postconventional) still appears; Gilligan criticized the male-biased sample and the justice-only frame.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6 space-y-2">
          <h2 className="text-3xl font-bold m-0">Learning</h2>
          <p className="text-muted-foreground mt-0">Classical associations, operant consequences, and observational models.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 not-prose items-stretch">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold text-lg m-0">Classical conditioning</h3>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">Pavlov: a <strong>neutral stimulus</strong> paired with an <strong>unconditioned stimulus</strong> that already elicits an <strong>unconditioned response</strong> becomes a <strong>conditioned stimulus</strong> eliciting a <strong>conditioned response</strong>. Extinction is presenting the CS without the US until the CR fades. Spontaneous recovery is the CR returning after a rest. Generalization is responding to similar stimuli; discrimination is telling them apart. Higher-order (second-order) conditioning pairs a new NS with an established CS. Watson’s Little Albert showed fear can be conditioned. Taste aversion (Garcia) can occur after one pairing and with a delay — biologically prepared learning.</p>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold text-lg m-0">Operant conditioning</h3>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">Thorndike’s law of effect: rewarded behavior is stamped in. Skinner: consequences shape voluntary behavior. <strong>Positive</strong> means add; <strong>negative</strong> means remove. Reinforcement increases behavior; punishment decreases it. Shaping rewards successive approximations. Primary reinforcers are biological; secondary/conditioned ones (money, grades) are learned. Premack principle: a preferred activity can reinforce a less preferred one. Continuous reinforcement is fast learning and fast extinction. Partial schedules: FR (piecework), VR (slot machines — very resistant to extinction), FI (paycheck every two weeks, scalloped responding), VI (checking email).</p>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold text-lg flex items-center gap-2 m-0"><Gamepad2 className="text-primary" size={18} /> Observational and cognitive</h3>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">Bandura’s Bobo doll: children imitate aggressive models, especially if the model is rewarded. Attention, retention, reproduction, and motivation are the steps. Vicarious reinforcement and punishment change whether we copy. Latent learning (Tolman) and cognitive maps show learning without immediate reward. Insight is a sudden solution. Learned helplessness (Seligman) is giving up after uncontrollable aversives — later linked to depression models.</p>
          </div>
        </div>
        <div className="not-prose p-6 rounded-2xl border border-primary/20 bg-primary/5 space-y-3">
          <h3 className="font-bold flex items-center gap-2 m-0"><Clock className="text-primary" size={18} /> Exam traps for Unit 3</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>“Taking the phone away after curfew” is negative punishment (remove something liked to decrease a behavior). “Buckling up to stop the beep” is negative reinforcement (remove something aversive to increase a behavior).</li>
            <li>Conservation is Piaget concrete operational, not “being conservative.” Object permanence is sensorimotor, not preoperational.</li>
            <li>Ainsworth avoidant is not the same as disorganized. Authoritative is not authoritarian.</li>
            <li>Classical is pairing stimuli. Operant is consequences after a response. If the organism must do something to get the outcome, think operant.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PsychUnit3Content;
