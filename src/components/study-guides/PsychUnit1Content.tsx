import { Brain, Zap, Activity, Scan, Dna, ArrowLeftRight, Moon } from "lucide-react";

const PsychUnit1Content = () => {
  return (
    <div className="space-y-20">
      <section className="space-y-6">
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex gap-4 items-start not-prose">
          <Brain className="text-primary shrink-0 mt-1" size={20} />
          <div className="space-y-3">
            <h3 className="font-bold text-primary mb-0">Unit 1: Biological Bases of Behavior</h3>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">
              Behavior and mental processes rest on neurons, chemicals, the nervous and endocrine systems, brain structures, and genes. AP items ask you to track a signal, name a structure from a function, match a scan to a research question, or tell agonist from antagonist in a drug vignette.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">
              Keep two maps in your head: (1) how one neuron talks to the next, and (2) how systems are organized from spinal reflex up to the cortex. If a question mentions “fast electrochemical” think neural; if it mentions “slow, through the blood,” think endocrine.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6 space-y-2">
          <h2 className="text-3xl font-bold m-0">Neural Communication</h2>
          <p className="text-muted-foreground mt-0">How a message moves through a neuron and across a synapse.</p>
        </div>
        <p className="text-muted-foreground leading-relaxed not-prose">
          A neuron is built for one job: receive, decide, and send. Dendrites collect incoming signals. If stimulation at the axon hillock hits threshold, the cell fires an action potential down the axon. Myelin lets the impulse jump between nodes and speeds conduction. After firing, a brief refractory period prevents immediate re-fire. The all-or-none rule means the spike does not get “bigger” with more stimulation — more intense stimuli recruit more neurons or fire them more often.
        </p>
        <div className="grid md:grid-cols-2 gap-6 not-prose items-stretch">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2 m-0"><Zap className="text-primary" size={18} /> The neuron</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Dendrites</strong> receive. The cell body (soma) integrates. The <strong>axon</strong> carries the impulse away.</li>
              <li><strong>Myelin sheath</strong> is fatty insulation. Damage (as in multiple sclerosis) slows or blocks signals.</li>
              <li><strong>Glial cells</strong> support, nourish, and protect neurons; they also form myelin.</li>
              <li>An <strong>action potential</strong> is a brief reversal of charge that travels down the axon. Sodium in, potassium out, in textbook sequence.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2 m-0"><Activity className="text-primary" size={18} /> The synapse</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Vesicles release <strong>neurotransmitters</strong> into the synaptic gap. Molecules bind <strong>receptor sites</strong> on the receiving neuron.</li>
              <li><strong>Reuptake</strong> is the sending neuron vacuuming unused transmitter back in. Many antidepressants slow serotonin reuptake.</li>
              <li>Leftover transmitter can also be broken down by enzymes. Either way, the signal must be cleared so the synapse can fire again.</li>
            </ul>
          </div>
        </div>
        <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
          <h3 className="font-bold text-lg m-0">Neurotransmitters you must know</h3>
          <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <p className="m-0"><strong>ACh:</strong> muscle action, learning, memory. Shortage is linked to Alzheimer’s.</p>
            <p className="m-0"><strong>Dopamine:</strong> movement, attention, reward. Too little — Parkinson’s. Dysregulation is linked to schizophrenia (not a complete “too much dopamine” story).</p>
            <p className="m-0"><strong>Serotonin:</strong> mood, sleep, appetite. Targeted by many antidepressants.</p>
            <p className="m-0"><strong>Norepinephrine:</strong> alertness and arousal.</p>
            <p className="m-0"><strong>GABA:</strong> main inhibitory messenger. Low GABA is linked to seizures and anxiety.</p>
            <p className="m-0"><strong>Glutamate:</strong> main excitatory messenger; involved in memory. Excess can overstimulate.</p>
            <p className="m-0 sm:col-span-2"><strong>Endorphins:</strong> natural opioids for pain and pleasure. Morphine mimics them (agonist). Naloxone blocks opioid receptors (antagonist).</p>
          </div>
          <p className="text-sm text-muted-foreground m-0"><strong>Agonists</strong> mimic or boost a transmitter. <strong>Antagonists</strong> block receptors or reduce action. If a drug “occupies the receptor and prevents dopamine from binding,” that is an antagonist.</p>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6 space-y-2">
          <h2 className="text-3xl font-bold m-0">Nervous and Endocrine Systems</h2>
          <p className="text-muted-foreground mt-0">Fast electrochemical signals versus slower hormones in the blood.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 not-prose items-stretch">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold text-lg m-0">CNS and PNS</h3>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">The <strong>CNS</strong> is brain and spinal cord. The <strong>PNS</strong> links the CNS to the body. <strong>Sensory/afferent</strong> neurons go in; <strong>motor/efferent</strong> neurons go out; <strong>interneurons</strong> process in between. Nerves are bundled axons. A spinal <strong>reflex</strong> can loop through the cord before the brain “knows,” which is why you pull your hand off a stove first and feel pain a beat later.</p>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold text-lg m-0">Autonomic divisions</h3>
            <p className="text-sm text-muted-foreground leading-relaxed m-0"><strong>Somatic</strong> = voluntary skeletal muscle. <strong>Autonomic</strong> = glands and organs. <strong>Sympathetic</strong> = fight or flight: dilates pupils, speeds heart, slows digestion. <strong>Parasympathetic</strong> = rest and digest: the opposite pattern. Questions love pairing a body change with the correct division.</p>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold text-lg m-0">Endocrine</h3>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">Glands release <strong>hormones</strong> into the bloodstream. Effects last longer than a neural spike. The <strong>hypothalamus</strong> directs the <strong>pituitary</strong> (master gland). <strong>Adrenal glands</strong> release epinephrine and cortisol in stress. Feedback loops keep the system from running away.</p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6 space-y-2">
          <h2 className="text-3xl font-bold m-0">The Brain</h2>
          <p className="text-muted-foreground mt-0">From brainstem survival functions up to cortical association areas.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 not-prose items-stretch">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2 m-0"><Scan className="text-primary" size={18} /> Older structures</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Medulla:</strong> heartbeat and breathing. Damage here is often fatal.</li>
              <li><strong>Pons:</strong> sleep, arousal, relay to the cerebellum.</li>
              <li><strong>Reticular formation:</strong> arousal and alertness. Stimulate it, an animal wakes; lesion it, coma risk.</li>
              <li><strong>Thalamus:</strong> sensory relay for all senses except smell.</li>
              <li><strong>Cerebellum:</strong> balance, coordination, nonverbal learning and skill memory.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg m-0">Limbic system</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Amygdala:</strong> fear, aggression, and tagging emotional significance.</li>
              <li><strong>Hippocampus:</strong> forming new explicit memories and spatial maps. H.M. lost this function after surgery.</li>
              <li><strong>Hypothalamus:</strong> homeostasis (hunger, thirst, temperature, sex) and the endocrine link. Also reward pathways.</li>
            </ul>
          </div>
        </div>
        <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
          <h3 className="font-bold text-lg m-0">Cortex and hemispheres</h3>
          <p className="text-sm text-muted-foreground leading-relaxed m-0">
            The cerebral cortex is the wrinkled outer layer. <strong>Frontal lobes</strong> handle planning, judgment, personality, and movement (motor cortex; prefrontal cortex for executive control). <strong>Parietal</strong> processes touch and body position (somatosensory cortex). <strong>Occipital</strong> is vision. <strong>Temporal</strong> is hearing, language, and some memory. Association areas do the higher work that is not strictly sensory or motor.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed m-0">
            The <strong>corpus callosum</strong> links hemispheres. Split-brain research (Roger Sperry) showed language is usually left-lateralized: an object in the left visual field (right hemisphere) may be selected by the left hand but not named. The right hemisphere is often stronger at spatial tasks, faces, and emotional tone. Dual processing: much information is handled on a conscious track and an unconscious track at once.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed m-0">
            <strong>Plasticity</strong> is reorganization after injury or practice. <strong>Neurogenesis</strong> is the birth of new neurons, especially in the hippocampus. Neither means the brain is infinitely rewirable, but both explain recovery and learning.
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6 space-y-2">
          <h2 className="text-3xl font-bold m-0">How We Study the Brain and Genes</h2>
          <p className="text-muted-foreground mt-0">Match the tool to the question: structure, activity, or heritability.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 not-prose items-stretch">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2 m-0"><Moon className="text-primary" size={18} /> Imaging and lesions</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>EEG:</strong> electrical activity; great timing, poor spatial detail. Sleep and seizure studies.</li>
              <li><strong>CT:</strong> X-ray slices of structure.</li>
              <li><strong>MRI:</strong> detailed structure with magnets, no radiation.</li>
              <li><strong>PET:</strong> radioactive glucose shows where the brain is working.</li>
              <li><strong>fMRI:</strong> blood-oxygen changes map activity onto structure. Current favorite for “which area lights up.”</li>
              <li>Lesions (natural or experimental) show what is lost when tissue is gone. Case studies like Phineas Gage (frontal damage, personality change) still appear as stimuli.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2 m-0"><Dna className="text-primary" size={18} /> Genetics</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Genes are DNA segments on chromosomes. The genome is the full instruction set.</li>
              <li>Identical (monozygotic) twins share nearly all genes; fraternal (dizygotic) share about half, like ordinary siblings. Twin and adoption studies separate genes from environment.</li>
              <li><strong>Heritability</strong> is the proportion of variation in a <em>population</em> due to genes — not “how genetic you are.” In a uniform environment, heritability estimates go up.</li>
              <li>Gene–environment interaction: the effect of genes depends on the setting, and vice versa. Evolutionary psychology asks which tendencies natural selection could have favored. Mutations add variation.</li>
            </ul>
          </div>
        </div>
        <div className="not-prose p-6 rounded-2xl border border-primary/20 bg-primary/5 flex gap-3">
          <ArrowLeftRight className="text-primary shrink-0 mt-0.5" size={18} />
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="m-0"><strong>Exam tip:</strong> Structure → MRI/CT. Function/activity → fMRI, PET, EEG. Don’t mix agonist (boosts) with antagonist (blocks). Afferent arrives; efferent exits. Hippocampus = new explicit memories, not “where all memories live forever.”</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PsychUnit1Content;
