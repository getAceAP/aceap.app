import { Brain, Zap, Activity, Scan, Dna, ArrowLeftRight } from "lucide-react";

const PsychUnit1Content = () => {
  return (
    <div className="space-y-16">
      <section className="space-y-6">
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex gap-4 items-start not-prose">
          <Brain className="text-primary shrink-0 mt-1" size={20} />
          <div>
            <h3 className="font-bold text-primary mb-1">Unit 1: Biological Bases of Behavior</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Behavior and mental processes rest on neurons, neurotransmitters, the nervous and endocrine systems, brain structures, and genetics. Know how a signal travels, what major chemicals do, how the brain is organized, and how we study it.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">Neural Communication</h2>
          <p className="text-muted-foreground mt-2">How a message moves through a neuron and across a synapse.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 not-prose">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold text-lg flex items-center gap-2"><Zap className="text-primary" size={18} /> The Neuron</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Dendrites</strong> receive incoming signals.</li>
              <li>The <strong>axon</strong> carries an <strong>action potential</strong> away from the cell body.</li>
              <li><strong>Myelin</strong> speeds the impulse by letting it hop between nodes.</li>
              <li>If stimulation hits <strong>threshold</strong>, the neuron fires at full strength (<strong>all-or-none</strong>).</li>
              <li>A brief <strong>refractory period</strong> follows before it can fire again.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold text-lg flex items-center gap-2"><Activity className="text-primary" size={18} /> The Synapse</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Neurotransmitters</strong> cross the synaptic junction to receptor sites.</li>
              <li><strong>Reuptake</strong> is reabsorption by the sending neuron.</li>
              <li><strong>Agonists</strong> mimic or boost a transmitter; <strong>antagonists</strong> block it.</li>
              <li><strong>GABA</strong> is the main inhibitory messenger; <strong>glutamate</strong> is the main excitatory one.</li>
              <li>Also know ACh (muscle/memory), dopamine (movement/reward), serotonin (mood), norepinephrine (arousal), and endorphins (pain/pleasure).</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">Nervous and Endocrine Systems</h2>
          <p className="text-muted-foreground mt-2">Fast electrochemical signals versus slower hormones in the blood.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 not-prose">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold">CNS and PNS</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">The <strong>CNS</strong> is brain and spinal cord. The <strong>PNS</strong> links the CNS to the body. <strong>Sensory/afferent</strong> neurons go in; <strong>motor/efferent</strong> neurons go out; <strong>interneurons</strong> process in between.</p>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold">Autonomic Divisions</h3>
            <p className="text-sm text-muted-foreground leading-relaxed"><strong>Somatic</strong> = voluntary muscle. <strong>Sympathetic</strong> = fight or flight. <strong>Parasympathetic</strong> = rest and digest. A <strong>reflex</strong> can loop through the spinal cord without waiting on the brain.</p>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold">Endocrine</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">The <strong>hypothalamus</strong> directs the <strong>pituitary</strong> (master gland). <strong>Adrenal glands</strong> release epinephrine and cortisol in stress. Hormones travel in the bloodstream and act more slowly than neural spikes.</p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">The Brain and How We Study It</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 not-prose">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold text-lg flex items-center gap-2"><Scan className="text-primary" size={18} /> Structures</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Medulla:</strong> heartbeat and breathing. <strong>Pons:</strong> sleep and relay. <strong>Reticular formation:</strong> arousal.</li>
              <li><strong>Thalamus:</strong> sensory relay except smell. <strong>Cerebellum:</strong> balance and coordination.</li>
              <li><strong>Amygdala:</strong> fear and emotional significance. <strong>Hippocampus:</strong> new explicit memories. <strong>Hypothalamus:</strong> homeostasis.</li>
              <li>Lobes: frontal (planning, movement), parietal (touch), occipital (vision), temporal (hearing/language).</li>
              <li>The <strong>corpus callosum</strong> links hemispheres. Split-brain work (Sperry) shows language is usually left-lateralized.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold text-lg flex items-center gap-2"><Dna className="text-primary" size={18} /> Imaging and Genetics</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>EEG:</strong> electrical activity. <strong>CT:</strong> X-ray structure. <strong>PET:</strong> glucose/activity. <strong>MRI:</strong> detailed structure. <strong>fMRI:</strong> activity via blood oxygen.</li>
              <li><strong>Plasticity</strong> is reorganization; <strong>neurogenesis</strong> is new neurons.</li>
              <li><strong>Heritability</strong> is variation in a <em>population</em> due to genes, not “how genetic one person is.”</li>
              <li><strong>Gene–environment interaction:</strong> the effect of genes depends on the environment, and vice versa.</li>
            </ul>
          </div>
        </div>
        <div className="not-prose p-5 rounded-2xl border border-primary/20 bg-primary/5 flex gap-3">
          <ArrowLeftRight className="text-primary shrink-0 mt-0.5" size={18} />
          <p className="text-sm text-muted-foreground leading-relaxed m-0"><strong>Exam tip:</strong> Match tools to questions. Structure → MRI/CT. Function/activity → fMRI, PET, EEG. Don’t mix agonist (boosts) with antagonist (blocks).</p>
        </div>
      </section>
    </div>
  );
};

export default PsychUnit1Content;
