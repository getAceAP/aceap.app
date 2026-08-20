import { Users, UserRound, Flame, Smile, Scale } from "lucide-react";

const PsychUnit4Content = () => {
  return (
    <div className="space-y-20">
      <section className="space-y-6">
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex gap-4 items-start not-prose">
          <Users className="text-primary shrink-0 mt-1" size={20} />
          <div className="space-y-3">
            <h3 className="font-bold text-primary mb-0">Unit 4: Social Psychology and Personality</h3>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">
              How we explain behavior, how groups move us, how personality is described, and what energizes action and emotion. Classic studies — Asch, Milgram, Festinger, Zimbardo — show up as stimulus items. Personality items ask you to match a theory (psychodynamic, humanistic, trait, social-cognitive) to a description, not to pick a favorite.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">
              A useful split: social psychology is the power of the situation and other people. Personality is relatively stable patterns in the person. Motivation and emotion sit in between: they are internal states that still respond to context.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6 space-y-2">
          <h2 className="text-3xl font-bold m-0">Social Thinking and Influence</h2>
          <p className="text-muted-foreground mt-0">Attributions, attitudes, conformity, obedience, and groups.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 not-prose items-stretch">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg m-0">Attribution</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Dispositional</strong> = the person (traits, attitudes). <strong>Situational</strong> = the context.</li>
              <li><strong>Fundamental attribution error:</strong> we overuse personality for others, especially strangers. Less so for ourselves.</li>
              <li><strong>Actor-observer bias:</strong> I did it because of the situation; they did it because that’s who they are.</li>
              <li><strong>Self-serving bias:</strong> credit successes to the self, blame failures on the world. Protects self-esteem.</li>
              <li><strong>Cognitive dissonance</strong> (Festinger): discomfort from inconsistent attitudes and behavior. People often change the attitude. The $1/$20 study: people paid $1 to lie later rated the boring task as more enjoyable — insufficient justification.</li>
              <li>Just-world belief: people get what they deserve, which can fuel victim-blaming.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg m-0">Persuasion and compliance</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Elaboration likelihood model: <strong>central route</strong> (argument quality, lasting change) vs <strong>peripheral route</strong> (cues: attractiveness, confidence, number of arguments).</li>
              <li><strong>Foot-in-the-door:</strong> small yes, then larger request. <strong>Door-in-the-face:</strong> huge no, then moderate request looks reasonable.</li>
              <li>Halo effect: one good trait spills onto unrelated judgments.</li>
              <li>Attitudes predict behavior best when they are specific, strong, and when other influences are weak.</li>
            </ul>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 not-prose items-stretch">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg m-0">Conformity and obedience</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Normative influence:</strong> fit in, avoid rejection (Asch line study — many people conformed to a clearly wrong majority). One ally sharply reduces conformity.</li>
              <li><strong>Informational influence:</strong> others seem to know the answer, especially when the task is ambiguous (Sherif’s autokinetic effect).</li>
              <li><strong>Obedience</strong> (Milgram): most participants went to high shock levels when an authority in a lab coat insisted. Obedience dropped when the authority was distant, the victim was close, or peers rebelled.</li>
              <li>Zimbardo’s Stanford prison study is used to illustrate situation and role power; treat methods and ethics as part of the story, not just “people became evil.”</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg m-0">Groups, helping, and prejudice</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Social facilitation:</strong> audience strengthens dominant responses (easy task better, hard task worse). <strong>Social loafing:</strong> less effort in a group when individual output is hidden.</li>
              <li><strong>Deindividuation:</strong> arousal plus anonymity, less self-awareness (mobs, some online behavior).</li>
              <li><strong>Group polarization:</strong> discussion with like-minded people makes views more extreme. <strong>Groupthink:</strong> harmony-seeking that shuts down realistic critique (illusion of invulnerability, self-censorship).</li>
              <li>Bystander effect: helping drops with a crowd because of <strong>diffusion of responsibility</strong> and pluralistic ignorance. Superordinate goals (Sherif’s Robbers Cave) can reduce intergroup conflict.</li>
              <li>Prejudice is an attitude; stereotypes are beliefs; discrimination is behavior. In-group bias, scapegoating, and implicit associations all appear. Ethnocentrism judges other cultures by one’s own.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6 space-y-2">
          <h2 className="text-3xl font-bold m-0">Personality</h2>
          <p className="text-muted-foreground mt-0">Unconscious conflict, growth, traits, and person–situation interaction.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 not-prose items-stretch">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2 m-0"><UserRound className="text-primary" size={18} /> Perspectives</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Psychodynamic:</strong> unconscious motives, early experience, conflict among id (pleasure), ego (reality), and superego (morals). Defense mechanisms: repression, denial, projection, displacement, sublimation, reaction formation, rationalization, regression. Projective tests (Rorschach, TAT) use ambiguous stimuli; reliability and validity are often weak.</li>
              <li><strong>Humanistic:</strong> growth, self-actualization (Maslow’s hierarchy as a related idea), Rogers’s unconditional positive regard, empathy, and congruence. Self-concept vs actual experience.</li>
              <li><strong>Trait:</strong> Big Five / OCEAN — openness, conscientiousness, extraversion, agreeableness, neuroticism. Factor analysis. Inventories (questionnaires) are more reliable than projectives. Traits predict averages better than single acts.</li>
              <li><strong>Social-cognitive:</strong> Bandura’s reciprocal determinism among person, behavior, and environment. Self-efficacy (can I do this task?) is not the same as self-esteem (am I worthy?). Rotter’s locus of control: internal vs external.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg m-0">Self and culture</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Self-concept, self-esteem, and self-efficacy are related but not identical. Spotlight effect: overestimating how much others notice us.</li>
              <li>Individualism (independent self) vs collectivism (interdependent self) changes attribution and motivation items.</li>
              <li>Optimism vs pessimism and explanatory style (stable/global/internal for bad events) show up near Seligman and health.</li>
              <li>Personality inventories vs projective tests: know which is which and the usual reliability critique.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6 space-y-2">
          <h2 className="text-3xl font-bold m-0">Motivation and Emotion</h2>
          <p className="text-muted-foreground mt-0">What starts behavior, and how feeling, body, and expression fit together.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 not-prose items-stretch">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2 m-0"><Flame className="text-primary" size={18} /> Motivation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Instinct theory is mostly historical. Drive-reduction: a need creates a drive; behavior restores homeostasis.</li>
              <li>Arousal theory: we seek an optimal level, not zero arousal. <strong>Yerkes-Dodson:</strong> moderate arousal is best for most tasks; simple tasks tolerate higher arousal, complex tasks need lower.</li>
              <li><strong>Intrinsic</strong> vs <strong>extrinsic</strong>. Overjustification: extra reward can undermine intrinsic interest. Self-determination: autonomy, competence, relatedness.</li>
              <li>Conflicts: approach-approach (two goods), avoidance-avoidance (two bads), approach-avoidance (one thing with both).</li>
              <li>Hunger: lateral hypothalamus (start eating, historically), ventromedial (stop). Ghrelin signals hunger; leptin from fat cells signals satiety. Set point and external cues (portion size, palatability) both matter. Affiliation and achievement motives appear as social motives.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2 m-0"><Smile className="text-primary" size={18} /> Emotion</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Emotion = subjective feeling + physiology + expression. James-Lange: body first, then feeling. Cannon-Bard: both at once. Schachter-Singer two-factor: arousal plus a cognitive label. Know the order, not just the names.</li>
              <li>Facial feedback: expressions can shape feeling. Display rules are cultural (who may show anger, and when).</li>
              <li>Six widely recognized faces: happiness, sadness, anger, fear, surprise, disgust (Ekman). Universal recognition does not mean identical display rules.</li>
              <li>Broaden-and-build: positive emotion widens attention and builds resources. The amygdala is fast at threat; the cortex can reinterpret.</li>
            </ul>
          </div>
        </div>
        <div className="not-prose p-6 rounded-2xl border border-primary/20 bg-primary/5 space-y-3">
          <h3 className="font-bold flex items-center gap-2 m-0"><Scale className="text-primary" size={18} /> Exam traps for Unit 4</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>FAE is about others. Self-serving is about the self. Do not swap them.</li>
            <li>Normative = wanting to belong. Informational = thinking the group is correct.</li>
            <li>Self-efficacy is task-specific confidence. Locus of control is who you think holds the outcomes.</li>
            <li>Negative reinforcement is not punishment. If behavior goes up after something aversive is removed, it is reinforcement.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PsychUnit4Content;
