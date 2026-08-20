import { Eye, Brain, Lightbulb, GraduationCap, Layers, AlertTriangle } from "lucide-react";

const PsychUnit2Content = () => {
  return (
    <div className="space-y-20">
      <section className="space-y-6">
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex gap-4 items-start not-prose">
          <Brain className="text-primary shrink-0 mt-1" size={20} />
          <div className="space-y-3">
            <h3 className="font-bold text-primary mb-0">Unit 2: Cognition</h3>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">
              Cognition is how the mind organizes sensation into perception, stores and retrieves information, solves problems, and measures intelligence. AP items rarely ask you to define a term in isolation. They give a scenario — a student who remembers only the last items on a list, a witness who later “recalls” a stop sign that was never there — and ask which process, bias, or test concept it shows.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">
              Treat this unit as three linked systems. Perception builds a stable world from incomplete sensory data. Memory encodes, stores, and reconstructs that world. Thinking and intelligence use what is stored to decide, solve, and predict. If you can name the process in a vignette, you can usually eliminate three options.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6 space-y-2">
          <h2 className="text-3xl font-bold m-0">Perception</h2>
          <p className="text-muted-foreground mt-0">Sensation gives you raw input. Perception organizes it into objects, depth, and meaning.</p>
        </div>
        <p className="text-muted-foreground leading-relaxed not-prose">
          We do not see the retina’s image. We see a construction. Attention chooses what enters awareness, Gestalt principles glue fragments into wholes, and experience (a perceptual set) biases what those wholes become. Depth cues and constancies keep the world from collapsing every time you turn your head.
        </p>
        <div className="grid md:grid-cols-2 gap-6 not-prose items-stretch">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2 m-0"><Eye className="text-primary" size={18} /> Attention</h3>
            <p className="text-sm text-muted-foreground leading-relaxed m-0"><strong>Selective attention</strong> is focusing conscious awareness on one stimulus. The cost is missing other things that are plainly there.</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Inattentional blindness:</strong> failing to see a visible object because attention is elsewhere (gorilla in the basketball video).</li>
              <li><strong>Change blindness:</strong> failing to notice a change in the environment, even a person swap during a conversation.</li>
              <li>Attention is limited. If a question says someone “didn’t notice,” pick an attention failure before a memory failure unless encoding is clearly mentioned.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg m-0">Gestalt grouping</h3>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">Gestalt psychologists argued that the whole is different from the sum of its parts. We impose organization.</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Figure-ground:</strong> objects stand out from surroundings (vase vs faces).</li>
              <li><strong>Proximity:</strong> nearby items cluster. <strong>Similarity:</strong> similar items cluster.</li>
              <li><strong>Continuity:</strong> we prefer smooth paths. <strong>Connectedness:</strong> linked items become a unit. <strong>Closure:</strong> we fill gaps.</li>
              <li><strong>Visual capture:</strong> vision often dominates competing senses (ventriloquism).</li>
            </ul>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 not-prose items-stretch">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg m-0">Perceptual set and context</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>A <strong>schema</strong> is an organized knowledge structure. It speeds recognition and can also distort it.</li>
              <li>A <strong>perceptual set</strong> is a mental predisposition to perceive one thing and not another — expectations, culture, and recent experience all contribute.</li>
              <li><strong>Context effects:</strong> the same sound or image is read differently depending on surroundings (“eel is on the wagon” vs “eel is on the orange”).</li>
              <li><strong>Motivation and emotion</strong> bias ambiguous stimuli. A thirsty person sees water-related words faster. An angry face looks closer.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg m-0">Depth, motion, and constancy</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Binocular cue:</strong> retinal disparity. The brain compares the two slightly different retinal images. Convergence is related but disparity is the AP favorite.</li>
              <li><strong>Monocular cues:</strong> relative size, relative height, interposition (overlap), linear perspective, relative motion (motion parallax), light and shadow.</li>
              <li>The <strong>visual cliff</strong> (Gibson and Walk) tests whether infants perceive depth. Most crawling infants refuse the “drop.”</li>
              <li><strong>Phi phenomenon:</strong> adjacent lights blinking create apparent motion. <strong>Autokinetic effect:</strong> a stationary point of light in the dark seems to drift.</li>
              <li><strong>Perceptual constancy</strong> (size, shape, color, brightness) keeps objects stable as retinal images change. Color constancy depends on comparing an object with its surround.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6 space-y-2">
          <h2 className="text-3xl font-bold m-0">Memory</h2>
          <p className="text-muted-foreground mt-0">Encoding gets information in. Storage holds it. Retrieval gets it out — and often rebuilds it.</p>
        </div>
        <p className="text-muted-foreground leading-relaxed not-prose">
          Atkinson and Shiffrin’s classic model still organizes AP questions: sensory memory is fleeting, short-term/working memory is limited, long-term memory is relatively lasting. Modern questions also distinguish explicit vs implicit memory and emphasize that retrieval is reconstructive, not a video playback.
        </p>
        <div className="grid md:grid-cols-3 gap-6 not-prose items-stretch">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3 flex flex-col">
            <h3 className="font-bold text-lg m-0">Encoding</h3>
            <p className="text-sm text-muted-foreground leading-relaxed m-0 flex-1">Getting information into the system. <strong>Automatic processing</strong> encodes space, time, and frequency without effort. <strong>Effortful processing</strong> needs attention. <strong>Shallow</strong> (looks/sounds) loses to <strong>deep/semantic</strong> processing (meaning). Self-referent encoding is especially sticky. Chunking, hierarchies, imagery, and mnemonics (method of loci, peg-word, acronyms, link method) all help. The <strong>spacing effect</strong> beats massed practice. The <strong>serial-position effect</strong> is primacy (start of the list, more rehearsal) plus recency (still in working memory).</p>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3 flex flex-col">
            <h3 className="font-bold text-lg m-0">Storage</h3>
            <p className="text-sm text-muted-foreground leading-relaxed m-0 flex-1"><strong>Iconic</strong> memory is visual and lasts a fraction of a second. <strong>Echoic</strong> is auditory and lasts a few seconds. Working memory holds and manipulates a few items (often cited as about 7±2, now often 4 chunks). <strong>LTP</strong> is a lasting increase in synaptic firing potential — a neural basis of learning. Explicit long-term memory is semantic (facts) and episodic (events). Implicit includes procedural skill, priming, and classically conditioned associations. The hippocampus is critical for forming new explicit memories; the cerebellum and basal ganglia support implicit ones. The amygdala tags emotional events (flashbulb memories feel vivid but are not immune to error).</p>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3 flex flex-col">
            <h3 className="font-bold text-lg m-0">Retrieval</h3>
            <p className="text-sm text-muted-foreground leading-relaxed m-0 flex-1"><strong>Recall</strong> is producing information (fill-in). <strong>Recognition</strong> is identifying it (multiple choice). <strong>Relearning</strong> is faster the second time. Cues, context, state, and mood help. Priming activates associations without awareness. Déjà vu is often explained as familiar cues misfiring. Tip-of-the-tongue is blocking: the memory is stored but temporarily inaccessible.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 not-prose items-stretch">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold text-lg m-0">Forgetting and interference</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Encoding failure</strong> (absent-mindedness): it never got in. Transience is storage decay over time (Ebbinghaus forgetting curve).</li>
              <li><strong>Proactive interference:</strong> old learning blocks new (old password ruins the new one).</li>
              <li><strong>Retroactive interference:</strong> new learning blocks old (this year’s Spanish wrecks last year’s French).</li>
              <li><strong>Anterograde amnesia:</strong> cannot form new long-term memories after injury (H.M.). <strong>Retrograde amnesia:</strong> lose memories from before the injury. Do not swap these.</li>
              <li>Infantile amnesia: few episodic memories from the first years of life. Alzheimer’s and dementia involve progressive decline, not a single forgotten password.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl border border-destructive/20 bg-destructive/5 space-y-3">
            <h3 className="font-bold text-lg flex items-center gap-2 m-0"><AlertTriangle className="text-destructive" size={18} /> Reconstructive memory</h3>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">
              Elizabeth Loftus showed the <strong>misinformation effect</strong>: wording (“How fast were the cars going when they smashed?”) changes later reports. <strong>Source amnesia / misattribution</strong> is remembering the content but not where it came from — a major path to false memories. Suggestibility and bias color reconstruction. Repression as a complete burying of trauma is controversial; AP still expects you to know the proposed definition. Cortisol can impair forming memories under extreme stress. Eyewitness confidence is not the same as accuracy.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6 space-y-2">
          <h2 className="text-3xl font-bold m-0">Thinking and Problem Solving</h2>
          <p className="text-muted-foreground mt-0">Concepts, shortcuts, and the predictable ways those shortcuts fail.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 not-prose items-stretch">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2 m-0"><Lightbulb className="text-primary" size={18} /> How we solve problems</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Concepts</strong> group similar items. Prototypes are the best examples of a category.</li>
              <li><strong>Metacognition</strong> is thinking about your own thinking — planning, monitoring, and evaluating.</li>
              <li><strong>Algorithms</strong> are step-by-step and guarantee a solution if followed. Slow. <strong>Heuristics</strong> are fast shortcuts that can err.</li>
              <li><strong>Insight</strong> is a sudden realization (the “aha”). Trial and error and means-end analysis (subgoals) are other strategies.</li>
              <li><strong>Fixation</strong> is being stuck. A <strong>mental set</strong> is using yesterday’s strategy. <strong>Functional fixedness</strong> is seeing an object only in its usual use (matches, tacks, candle box).</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg m-0">Heuristics and biases</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Availability:</strong> if examples come to mind easily, we judge the event as common (plane crashes after news coverage).</li>
              <li><strong>Representativeness:</strong> we judge likelihood by match to a prototype and ignore base rates (quiet poetry-lover as librarian vs farmer).</li>
              <li><strong>Anchoring:</strong> first numbers pull later estimates. <strong>Framing:</strong> 90% survival vs 10% mortality changes choices.</li>
              <li><strong>Confirmation bias:</strong> hunt for supporting evidence. <strong>Belief perseverance:</strong> keep the belief after the evidence is gone.</li>
              <li><strong>Hindsight bias:</strong> “I knew it all along.” Overconfidence: more sure than correct. Exaggerated fear of rare dangers.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6 space-y-2">
          <h2 className="text-3xl font-bold m-0">Intelligence</h2>
          <p className="text-muted-foreground mt-0">Theories of what intelligence is, how we measure it, and what scores can and cannot mean.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 not-prose items-stretch">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2 m-0"><GraduationCap className="text-primary" size={18} /> Theories</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Spearman’s g:</strong> a general factor underlying specific abilities. Thurstone argued for several primary mental abilities instead of a single g.</li>
              <li><strong>Gardner:</strong> multiple, relatively independent intelligences (linguistic, logical-mathematical, spatial, musical, bodily-kinesthetic, interpersonal, intrapersonal, naturalistic). Savant syndrome is often cited as support.</li>
              <li><strong>Sternberg’s triarchic:</strong> analytical (school problems), creative (novel ideas), practical (street smarts / everyday tasks).</li>
              <li><strong>Fluid intelligence</strong> is abstract reasoning and tends to decline with age. <strong>Crystallized</strong> is accumulated knowledge and tends to hold or grow.</li>
              <li>Emotional intelligence is perceiving, understanding, managing, and using emotions. Intrinsic motivation (for its own sake) vs extrinsic (for a reward) shows up in this cluster of items too.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2 m-0"><Layers className="text-primary" size={18} /> Testing</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Binet built a test to identify children who needed school support. Terman revised it into the Stanford-Binet. IQ was originally (mental age / chronological age) × 100.</li>
              <li>Wechsler: <strong>WAIS</strong> (adults) and <strong>WISC</strong> (children) are the most used individual tests. They include verbal and performance subtests.</li>
              <li><strong>Aptitude</strong> predicts future learning. <strong>Achievement</strong> measures what you already learned. Standardization uses a pretested group and a normal curve.</li>
              <li><strong>Reliability</strong> = consistency (test-retest, split-half). <strong>Validity</strong> = measuring/predicting the right thing. Criterion validity is correlation with an outcome.</li>
              <li><strong>Flynn effect:</strong> scores have risen across generations, so norms must be updated. <strong>Stereotype threat</strong> can depress performance when a negative stereotype is activated.</li>
              <li>Heritability of intelligence is about variation in a population due to genes, not a percent of “your IQ that is genetic.” Environment (nutrition, schooling, Head Start) still matters. Terman’s longitudinal “Termites” studied high-IQ children; a self-fulfilling prophecy can make labels shape outcomes.</li>
            </ul>
          </div>
        </div>
        <div className="not-prose p-6 rounded-2xl border border-primary/20 bg-primary/5 space-y-3">
          <h3 className="font-bold m-0">Exam traps for Unit 2</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Proactive vs retroactive: remember “pro = old blocks new” (the old stuff is proactive). Anterograde vs retrograde: “antero = after the injury, no new memories.”</li>
            <li>Availability is ease of examples. Representativeness is match to a stereotype/prototype. They are not interchangeable.</li>
            <li>Reliability without validity is a consistent wrong target. A scale that is always 5 pounds heavy is reliable but not valid.</li>
            <li>Loftus items are almost always misinformation, wording, or source amnesia — not storage decay.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PsychUnit2Content;
