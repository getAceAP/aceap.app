import { HeartPulse, ShieldAlert, Stethoscope, Scale, Brain } from "lucide-react";

const PsychUnit5Content = () => {
  return (
    <div className="space-y-20">
      <section className="space-y-6">
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex gap-4 items-start not-prose">
          <HeartPulse className="text-primary shrink-0 mt-1" size={20} />
          <div className="space-y-3">
            <h3 className="font-bold text-primary mb-0">Unit 5: Mental and Physical Health</h3>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">
              Stress, psychological disorders, and treatment. Use the biopsychosocial model (body, mind, and social world) and diathesis-stress (vulnerability plus a trigger). The DSM-5-TR classifies disorders so clinicians share a language; it does not by itself explain causes. Lithium is a mood stabilizer for bipolar disorder, not an antipsychotic.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">
              AP will not ask you to diagnose a friend. It will give a vignette and ask which category, which symptom type, which therapy school, or which drug class fits. Match labels carefully: OCPD is a personality style of control and perfection; OCD is obsessions and/or compulsions that the person often experiences as unwanted.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6 space-y-2">
          <h2 className="text-3xl font-bold m-0">Stress and Health</h2>
          <p className="text-muted-foreground mt-0">Appraisal, the body’s three-stage response, and ways of coping.</p>
        </div>
        <p className="text-muted-foreground leading-relaxed not-prose">
          Stress is the process of appraising and responding to threats and challenges, not just “bad events.” The same exam can be eustress for one student and distress for another. Health psychology studies how biology, behavior, and social context jointly predict illness and recovery.
        </p>
        <div className="grid md:grid-cols-3 gap-6 not-prose items-stretch">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold text-lg m-0">Appraisal</h3>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">Primary appraisal: is this irrelevant, challenging, or threatening? Secondary: can I cope? <strong>Eustress</strong> can focus energy. <strong>Distress</strong> harms mood and health. Adverse childhood experiences (ACEs) raise later risk for both medical and psychological problems. Type A competitiveness and hostility have been linked to heart risk more than “being busy.”</p>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold text-lg m-0">GAS (Selye)</h3>
            <p className="text-sm text-muted-foreground leading-relaxed m-0"><strong>Alarm</strong> is fight-or-flight (sympathetic + adrenals). <strong>Resistance</strong> is coping while arousal stays high. <strong>Exhaustion</strong> is when resources run out. Chronic stress can suppress immunity, worsen hypertension, and slow healing. The HPA axis (hypothalamus–pituitary–adrenal) and cortisol are the slow path; adrenaline is the fast path.</p>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold text-lg m-0">Coping</h3>
            <p className="text-sm text-muted-foreground leading-relaxed m-0"><strong>Problem-focused</strong> changes the stressor (study plan, leave the job). <strong>Emotion-focused</strong> manages feelings when the stressor cannot be fixed (venting, reappraisal, exercise). Tend-and-befriend is a social stress response more often described in women. Social support, aerobic exercise, relaxation, and perceived control all buffer stress. Resilience is recovering, not never bending.</p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6 space-y-2">
          <h2 className="text-3xl font-bold m-0">Psychological Disorders</h2>
          <p className="text-muted-foreground mt-0">Patterns of thought, feeling, or behavior that cause distress or impair functioning.</p>
        </div>
        <p className="text-muted-foreground leading-relaxed not-prose">
          Definitions often combine statistical rarity, violation of social norms, personal distress, and maladaptive functioning. Culture matters: a behavior can be disordered in one context and expected in another. The DSM-5-TR (APA) is the U.S. classification; the ICD (WHO) is the international system. Labeling can help treatment access and also create stigma (Rosenhan’s study is the usual cautionary tale).
        </p>
        <div className="grid md:grid-cols-2 gap-6 not-prose items-stretch">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2 m-0"><ShieldAlert className="text-primary" size={18} /> Mood, anxiety, trauma, OCD</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>MDD:</strong> prolonged sadness and anhedonia, plus sleep, appetite, energy, concentration, or suicidal thinking. Persistent depressive disorder is longer and often milder.</li>
              <li><strong>Bipolar I:</strong> at least one manic episode (depression is common but not required for the I label). <strong>Bipolar II:</strong> hypomania plus depression. Mania is not “really happy”; it is elevated, irritable, risky, and impairing.</li>
              <li>Anxiety: specific phobia, social anxiety, panic disorder (recurrent panic plus fear of more attacks), GAD (excessive worry most days for 6+ months), agoraphobia (fear of situations that are hard to escape).</li>
              <li><strong>PTSD:</strong> intrusion (flashbacks, nightmares), avoidance, negative mood/cognition, and arousal lasting over a month after trauma. Acute stress disorder is the shorter window.</li>
              <li>OCD: obsessions (intrusive thoughts) and/or compulsions (rituals aimed at reducing anxiety). Related: hoarding, body dysmorphic disorder. Do not confuse with OCPD.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg m-0">Psychosis, dissociation, personality, others</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Schizophrenia spectrum: <strong>positive</strong> symptoms add something (delusions, hallucinations, disorganized speech or behavior). <strong>Negative</strong> symptoms take something away (flat affect, avolition, alogia). Dopamine dysregulation is linked, along with glutamate, genetics, and prenatal factors. It is not “split personality.”</li>
              <li>Dissociative amnesia ± fugue (travel/identity confusion); DID involves distinct identity states and memory gaps. Controversial but still in the DSM language AP uses.</li>
              <li>Somatic symptom and related disorders: distress about physical symptoms or health anxiety without a fully explanatory medical finding (know the idea, not every subtype name).</li>
              <li>Personality clusters: A odd/eccentric (paranoid, schizoid, schizotypal), B dramatic (antisocial, borderline, histrionic, narcissistic), C anxious (avoidant, dependent, OCPD). Antisocial PD is a pattern of violating others’ rights, not “doesn’t like parties.”</li>
              <li>Neurodevelopmental items may mention ADHD or autism as patterns beginning in development. Substance-use disorders combine loss of control, craving, and continued use despite harm.</li>
            </ul>
          </div>
        </div>
        <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
          <h3 className="font-bold text-lg flex items-center gap-2 m-0"><Brain className="text-primary" size={18} /> Perspectives on cause</h3>
          <p className="text-sm text-muted-foreground leading-relaxed m-0">
            Behavioral: maladaptive learning (phobias via classical, maintained via operant avoidance). Cognitive: distorted thoughts, Beck’s triad (self, world, future), learned helplessness. Humanistic: blocked growth, conditions of worth. Biological: genes, neurotransmitters, brain structure, prenatal virus exposure. Psychodynamic: unconscious conflict. Sociocultural: poverty, stigma, cultural display of symptoms. Evolutionary: some anxiety as misfiring protection. AP loves matching a vignette’s implied cause to one of these lenses.
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6 space-y-2">
          <h2 className="text-3xl font-bold m-0">Treatment and Ethics</h2>
          <p className="text-muted-foreground mt-0">Talk therapies, biomedical tools, and how clinicians are supposed to practice.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 not-prose items-stretch">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2 m-0"><Stethoscope className="text-primary" size={18} /> Therapies</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Psychodynamic: free association, dream interpretation, insight into unconscious patterns. Modern versions are briefer.</li>
              <li>Humanistic / person-centered: empathy, genuineness, unconditional positive regard. The client leads.</li>
              <li>Behavioral: exposure, systematic desensitization (relaxation plus a fear hierarchy), flooding, aversion, token economies, ABA. Counterconditioning replaces a CR.</li>
              <li>Cognitive / CBT: catch and change thoughts. Beck’s cognitive therapy. Ellis’s REBT (dispute irrational beliefs). DBT (Linehan) for borderline PD adds mindfulness and distress tolerance.</li>
              <li>Group, family, and community approaches treat the system, not only the individual. Eclectic / integrative therapy mixes tools.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2 m-0"><Scale className="text-primary" size={18} /> Biomedical and practice issues</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Antidepressants (SSRIs commonly). Antianxiety meds (often GABA-related; dependence risk). <strong>Antipsychotics</strong> reduce positive symptoms; tardive dyskinesia is a movement side effect. <strong>Lithium</strong> and other mood stabilizers for bipolar — not antipsychotics. TMS stimulates cortex; ECT is still used for severe treatment-resistant depression. Lobotomy is historical.</li>
              <li>Ethics: beneficence and nonmaleficence, fidelity, integrity, justice, respect for rights and dignity. Informed consent, confidentiality (with duty-to-warn limits), competence, and avoiding dual relationships.</li>
              <li>Deinstitutionalization moved care toward community services; without resources, some people cycle through ER and jail. Cultural humility matters in diagnosis: what looks like a delusion in one culture may be a shared belief in another.</li>
              <li>Evidence: randomized trials, meta-analyses, and the idea of common factors (alliance, hope) plus specific techniques. Placebo and regression to the mean can fake improvement if you ignore controls.</li>
            </ul>
          </div>
        </div>
        <div className="not-prose p-6 rounded-2xl border border-primary/20 bg-primary/5 space-y-3">
          <h3 className="font-bold m-0">Exam traps for Unit 5</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Lithium → bipolar / mood stabilizer. Antipsychotic → schizophrenia / dopamine, tardive dyskinesia. Do not cross them.</li>
            <li>Positive symptoms add. Negative symptoms subtract. Hallucinations are perceptions without stimuli; delusions are false beliefs.</li>
            <li>OCD ≠ OCPD. PTSD lasts over a month. GAD is chronic worry, not a single panic attack.</li>
            <li>Systematic desensitization is behavioral (exposure + relaxation), not “just talking about childhood.”</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PsychUnit5Content;
