import { Users, UserRound, Flame, Smile } from "lucide-react";

const PsychUnit4Content = () => {
  return (
    <div className="space-y-16">
      <section className="space-y-6">
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex gap-4 items-start not-prose">
          <Users className="text-primary shrink-0 mt-1" size={20} />
          <div>
            <h3 className="font-bold text-primary mb-1">Unit 4: Social Psychology and Personality</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              How we explain behavior, how groups move us, how personality is described, and what energizes action and emotion. Classic studies (Asch, Milgram, Bandura, Festinger) show up as stimulus items.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">Social Thinking and Influence</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 not-prose">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold">Attribution</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Dispositional</strong> = the person; <strong>situational</strong> = the context.</li>
              <li><strong>Fundamental attribution error:</strong> overusing personality for others.</li>
              <li><strong>Actor-observer bias</strong> and <strong>self-serving bias</strong> protect the self.</li>
              <li><strong>Cognitive dissonance:</strong> discomfort from inconsistent attitudes/behavior (Festinger’s $1/$20 study).</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold">Persuasion and Conformity</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>ELM: <strong>central</strong> route (arguments) vs <strong>peripheral</strong> (cues).</li>
              <li>Foot-in-the-door vs door-in-the-face.</li>
              <li><strong>Normative</strong> influence = fit in; <strong>informational</strong> = others seem right (Asch).</li>
              <li><strong>Obedience:</strong> Milgram. Falls when authority is distant or illegitimate.</li>
            </ul>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 not-prose">
          <div className="p-5 rounded-2xl bg-muted/30 border border-border text-sm text-muted-foreground"><strong>Group polarization</strong> makes shared views more extreme after discussion.</div>
          <div className="p-5 rounded-2xl bg-muted/30 border border-border text-sm text-muted-foreground"><strong>Groupthink</strong> is harmony-seeking that shuts down realistic critique.</div>
          <div className="p-5 rounded-2xl bg-muted/30 border border-border text-sm text-muted-foreground"><strong>Social loafing</strong> vs <strong>social facilitation</strong> (dominant responses get stronger with an audience).</div>
        </div>
        <p className="text-sm text-muted-foreground not-prose leading-relaxed">
          Helping drops with a crowd because of <strong>diffusion of responsibility</strong> (bystander effect). Prejudice is an attitude; discrimination is behavior. Superordinate goals can reduce conflict between groups.
        </p>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">Personality</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 not-prose">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold text-lg flex items-center gap-2"><UserRound className="text-primary" size={18} /> Perspectives</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Psychodynamic:</strong> unconscious conflict; defense mechanisms (repression, projection, displacement, sublimation, reaction formation, rationalization, regression, denial).</li>
              <li><strong>Humanistic:</strong> growth, self-actualization, unconditional positive regard (Rogers).</li>
              <li><strong>Trait:</strong> Big Five (OCEAN). Inventories and factor analysis.</li>
              <li><strong>Social-cognitive:</strong> reciprocal determinism among person, behavior, and environment; self-efficacy.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold">Self and Culture</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Internal</strong> vs <strong>external locus of control</strong>.</li>
              <li>Self-concept, self-esteem, self-efficacy are related but not identical.</li>
              <li>Individualism vs collectivism. Ethnocentrism judges other cultures by one’s own.</li>
              <li>Projective tests (ambiguous stimuli) vs inventories (questionnaires).</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">Motivation and Emotion</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 not-prose">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold flex items-center gap-2"><Flame className="text-primary" size={18} /> Motivation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Drive-reduction and homeostasis; arousal theory and the <strong>Yerkes-Dodson</strong> law.</li>
              <li><strong>Intrinsic</strong> vs <strong>extrinsic</strong>. Self-determination: autonomy, competence, relatedness.</li>
              <li>Conflicts: approach-approach, avoidance-avoidance, approach-avoidance.</li>
              <li>Hunger: hypothalamus, ghrelin (up), leptin (down), plus external cues.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold flex items-center gap-2"><Smile className="text-primary" size={18} /> Emotion</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Emotion = subjective feeling + physiology + expression.</li>
              <li>Facial feedback: expressions can shape feeling. Display rules are cultural.</li>
              <li>Six widely recognized faces: happiness, sadness, anger, fear, surprise, disgust.</li>
              <li>Broaden-and-build: positive emotion widens attention and builds resources.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PsychUnit4Content;
