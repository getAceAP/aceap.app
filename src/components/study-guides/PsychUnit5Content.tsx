import { HeartPulse, ShieldAlert, Stethoscope, Scale } from "lucide-react";

const PsychUnit5Content = () => {
  return (
    <div className="space-y-16">
      <section className="space-y-6">
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex gap-4 items-start not-prose">
          <HeartPulse className="text-primary shrink-0 mt-1" size={20} />
          <div>
            <h3 className="font-bold text-primary mb-1">Unit 5: Mental and Physical Health</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Stress, psychological disorders, and treatment. Use the biopsychosocial and diathesis-stress models. Know DSM-5-TR as a classification system, not a full explanation of causes. Lithium is a mood stabilizer, not an antipsychotic.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">Stress and Health</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 not-prose">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-2">
            <h3 className="font-bold">Appraisal</h3>
            <p className="text-sm text-muted-foreground">Stress depends on how we interpret events. <strong>Eustress</strong> can focus energy; <strong>distress</strong> harms health. ACEs raise later risk.</p>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-2">
            <h3 className="font-bold">GAS (Selye)</h3>
            <p className="text-sm text-muted-foreground"><strong>Alarm</strong> → <strong>resistance</strong> → <strong>exhaustion</strong>. Chronic stress can suppress immunity and worsen hypertension.</p>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-2">
            <h3 className="font-bold">Coping</h3>
            <p className="text-sm text-muted-foreground"><strong>Problem-focused</strong> changes the stressor. <strong>Emotion-focused</strong> manages feelings. Tend-and-befriend is a social stress response. Resilience is bouncing back.</p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">Psychological Disorders</h2>
          <p className="text-muted-foreground mt-2">Patterns of thought, feeling, or behavior that cause distress or impair functioning.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 not-prose">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold flex items-center gap-2"><ShieldAlert className="text-primary" size={18} /> Mood, Anxiety, Trauma</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>MDD:</strong> prolonged sadness and anhedonia. Persistent depressive disorder is longer and often milder.</li>
              <li><strong>Bipolar I:</strong> at least one manic episode (depression not required). <strong>Bipolar II:</strong> hypomania + depression.</li>
              <li>Anxiety: specific phobia, panic disorder, GAD (excessive worry most days for 6+ months), social anxiety, agoraphobia.</li>
              <li><strong>PTSD:</strong> intrusion, avoidance, negative mood, arousal lasting over a month.</li>
              <li>OCD: obsessions and/or compulsions. Related: hoarding.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold">Psychosis, Dissociation, Personality</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Schizophrenia spectrum: <strong>positive</strong> symptoms (delusions, hallucinations, disorganized speech/behavior) vs <strong>negative</strong> (flat affect, avolition).</li>
              <li>Dopamine dysregulation is linked to schizophrenia; it is not a complete “too much dopamine” story.</li>
              <li>Dissociative amnesia ± fugue; DID involves distinct identity states and memory gaps.</li>
              <li>Personality clusters: A odd, B dramatic, C anxious. Know paranoid, schizoid, schizotypal, antisocial, borderline, histrionic, narcissistic, avoidant, dependent, OCPD.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">Treatment and Ethics</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 not-prose">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold flex items-center gap-2"><Stethoscope className="text-primary" size={18} /> Therapies</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Psychodynamic: free association, dream interpretation.</li>
              <li>Humanistic: person-centered, empathy, unconditional positive regard.</li>
              <li>Behavioral: exposure, systematic desensitization, aversion, token economies, ABA.</li>
              <li>Cognitive/CBT: change thoughts. Beck’s triad (self, world, future). Ellis’s REBT. DBT for borderline PD.</li>
              <li>Biomedical: antidepressants, antianxiety meds, <strong>antipsychotics</strong> (tardive dyskinesia risk), <strong>lithium</strong> for bipolar, TMS. Lobotomy is historical.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold flex items-center gap-2"><Scale className="text-primary" size={18} /> Practice Issues</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>DSM-5-TR (APA)</strong> classifies disorders. <strong>ICD</strong> is the WHO system.</li>
              <li>Ethics: nonmaleficence, fidelity, integrity, respect for rights and dignity.</li>
              <li>Eclectic therapy mixes techniques. Cultural humility matters in diagnosis and care.</li>
              <li>Deinstitutionalization moved care toward community services.</li>
              <li>Perspectives (behavioral, cognitive, humanistic, biological, sociocultural, evolutionary) offer different causes and treatments—the exam loves matching them to a vignette.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PsychUnit5Content;
