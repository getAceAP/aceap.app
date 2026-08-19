import { Eye, Brain, Lightbulb, GraduationCap } from "lucide-react";

const PsychUnit2Content = () => {
  return (
    <div className="space-y-16">
      <section className="space-y-6">
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex gap-4 items-start not-prose">
          <Brain className="text-primary shrink-0 mt-1" size={20} />
          <div>
            <h3 className="font-bold text-primary mb-1">Unit 2: Cognition</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Cognition covers how we organize sensation into perception, store and retrieve information, solve problems, and measure intelligence. AP items often give a scenario and ask which process, bias, or test concept it shows.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">Perception</h2>
          <p className="text-muted-foreground mt-2">Organizing sensory input into meaningful objects and depth.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 not-prose">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold text-lg flex items-center gap-2"><Eye className="text-primary" size={18} /> Attention and Gestalt</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Selective attention</strong> focuses awareness; <strong>inattentional</strong> and <strong>change blindness</strong> are the costs.</li>
              <li>Gestalt grouping: proximity, similarity, continuity, connectedness, closure, figure-ground.</li>
              <li>A <strong>perceptual set</strong> (expectations, context, emotion, motivation) biases what we see.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold">Depth and Constancy</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Binocular:</strong> retinal disparity. <strong>Monocular:</strong> relative size/height, interposition, linear perspective, relative motion, light and shadow.</li>
              <li>The <strong>visual cliff</strong> tests infant depth perception.</li>
              <li><strong>Perceptual constancy</strong> keeps objects stable as images on the retina change. Phi phenomenon = apparent motion from blinking lights.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">Memory</h2>
        </div>
        <div className="space-y-6 not-prose">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-2">
              <h3 className="font-bold">Encoding</h3>
              <p className="text-sm text-muted-foreground">Getting information in. <strong>Deep/semantic</strong> processing beats shallow. Effortful vs automatic. Chunking, mnemonics, hierarchies, spacing, and the serial-position effect (primacy + recency) all matter.</p>
            </div>
            <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-2">
              <h3 className="font-bold">Storage</h3>
              <p className="text-sm text-muted-foreground"><strong>Sensory</strong> (iconic/echoic) is brief. <strong>Working memory</strong> holds and manipulates a few items. <strong>Long-term</strong> is relatively lasting. <strong>LTP</strong> is a neural basis of learning. Explicit (semantic/episodic) vs implicit (procedural, priming).</p>
            </div>
            <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-2">
              <h3 className="font-bold">Retrieval</h3>
              <p className="text-sm text-muted-foreground">Recall vs recognition vs relearning. Cues, context, state, and mood help. <strong>Proactive</strong> = old blocks new; <strong>retroactive</strong> = new blocks old. <strong>Anterograde</strong> amnesia: cannot form new memories. <strong>Retrograde</strong>: lose old ones.</p>
            </div>
          </div>
          <div className="p-5 rounded-2xl border border-destructive/20 bg-destructive/5 text-sm text-muted-foreground">
            <strong>Loftus:</strong> the misinformation effect shows memory is reconstructive. Source amnesia is attributing a memory to the wrong origin. Don’t swap anterograde and retrograde on exam day.
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">Thinking and Intelligence</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 not-prose">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold text-lg flex items-center gap-2"><Lightbulb className="text-primary" size={18} /> Problem Solving</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Algorithms</strong> guarantee a solution; <strong>heuristics</strong> are shortcuts.</li>
              <li><strong>Availability</strong> = ease of examples. <strong>Representativeness</strong> = match to a prototype.</li>
              <li>Watch <strong>confirmation bias</strong>, <strong>belief perseverance</strong>, <strong>framing</strong>, <strong>fixation</strong>, and <strong>functional fixedness</strong>.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold text-lg flex items-center gap-2"><GraduationCap className="text-primary" size={18} /> Intelligence</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Spearman’s g</strong> vs Gardner’s multiple intelligences vs Sternberg’s triarchic (analytical, creative, practical).</li>
              <li><strong>Fluid</strong> reasoning vs <strong>crystallized</strong> knowledge. WAIS/WISC are the main Wechsler tests.</li>
              <li><strong>Reliability</strong> = consistency. <strong>Validity</strong> = measuring/predicting the right thing. <strong>Criterion validity</strong> = correlation with an outcome.</li>
              <li><strong>Flynn effect:</strong> scores have risen over generations. <strong>Stereotype threat</strong> can depress performance.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PsychUnit2Content;
