import { Globe, Zap, Users, TrendingUp, ShieldAlert, Landmark, AlertTriangle, BookOpen, HeartPulse, MapPin, Scale, ArrowLeftRight } from "lucide-react";

const Unit8Content = () => {
  return (
    <div className="space-y-16">
      {/* Overview */}
      <section className="space-y-6">
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex gap-4 items-start not-prose">
          <Globe className="text-primary shrink-0 mt-1" size={20} />
          <div>
            <h3 className="font-bold text-primary mb-1">Unit 8: Cold War & Decolonization (1900-present)</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This unit explores the post-WWII world, dominated by the ideological struggle between the <strong>United States (Capitalism)</strong> and the <strong>Soviet Union (Communism)</strong>. Simultaneously, a massive wave of <strong>Decolonization</strong> saw dozens of new nations gain independence in Africa and Asia.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mt-3">
              The Cold War was rarely fought as US vs. USSR armies. Proxy wars, nuclear deterrence, and competing development models did the work. Decolonization could be negotiated (Ghana, India) or fought (Algeria, Vietnam). New states then chose alignment, non-alignment, or revolution. Mao’s China is both a Cold War player and a distinct communist path.
            </p>
          </div>
        </div>
      </section>

      {/* 8.1 - 8.4 The Cold War */}
      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">8.1 - 8.4 The Cold War</h2>
          <p className="text-muted-foreground mt-2">Ideological struggle, containment, and proxy wars.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 not-prose">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2"><ShieldAlert className="text-primary" size={18} /> Origins & Alliances</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><strong>Iron Curtain:</strong> Churchill's term for the division of Europe into East and West.</li>
              <li><strong>Containment:</strong> US policy to stop the spread of communism (<strong>Truman Doctrine</strong>).</li>
              <li><strong>Marshall Plan:</strong> US economic aid to rebuild Western Europe and prevent communist influence.</li>
              <li><strong>NATO vs. Warsaw Pact:</strong> Opposing military alliances that defined the Cold War blocs.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2"><Zap className="text-primary" size={18} /> Proxy Wars & Crises</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><strong>Korean War (1950-1953):</strong> The first major test of containment; ended in a stalemate.</li>
              <li><strong>Vietnam War:</strong> A long, divisive conflict driven by the <strong>Domino Theory</strong>.</li>
              <li><strong>Cuban Missile Crisis (1962):</strong> The closest the world came to nuclear war.</li>
              <li><strong>Space Race:</strong> Competition for technological superiority (Sputnik, Moon landing).</li>
            </ul>
          </div>
        </div>

        <div className="p-8 rounded-3xl border border-border bg-card shadow-sm">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><AlertTriangle className="text-primary" size={20} /> Nuclear Age</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The development of nuclear weapons led to a policy of <strong>Mutually Assured Destruction (MAD)</strong>, which prevented direct conflict between the superpowers but fueled a massive arms race and global anxiety.
          </p>
        </div>
      </section>

      {/* 8.5 - 8.7 Decolonization */}
      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">8.5 - 8.7 Decolonization</h2>
          <p className="text-muted-foreground mt-2">The end of empires and the birth of new nations.</p>
        </div>

        <div className="space-y-6">
          <div className="p-8 rounded-3xl border border-border bg-card shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Landmark className="text-primary" size={20} /> Independence Movements</h3>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="font-bold text-primary">South Asia (India/Pakistan)</h4>
                <p className="text-sm text-muted-foreground leading-relaxed"><strong>Gandhi</strong> led a non-violent movement against British rule. The 1947 <strong>Partition</strong> created Hindu-majority India and Muslim-majority Pakistan, leading to mass migration and violence.</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-primary">Africa (Ghana/Algeria/Kenya)</h4>
                <p className="text-sm text-muted-foreground leading-relaxed"><strong>Kwame Nkrumah</strong> led Ghana to independence. Algeria fought a bloody war against France. Kenya's Mau Mau rebellion challenged British land seizure.</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-primary">Southeast Asia (Vietnam/Indonesia)</h4>
                <p className="text-sm text-muted-foreground leading-relaxed"><strong>Ho Chi Minh</strong> led the fight for Vietnamese independence against France and later the US. Indonesia gained independence from the Dutch under Sukarno.</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-primary">Non-Aligned Movement</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Led by nations like India and Egypt, this movement sought to maintain independence from both Cold War blocs and focus on development.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8.8 - 8.9 End of the Cold War */}
      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">8.8 - 8.9 End of the Cold War</h2>
          <p className="text-muted-foreground mt-2">The collapse of the Soviet Union and the new world order.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 not-prose">
          <div className="p-6 rounded-2xl bg-green-500/5 border border-green-500/20 space-y-4">
            <h3 className="font-bold text-green-600 flex items-center gap-2 mb-2"><TrendingUp size={18} /> Gorbachev's Reforms</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><strong>Glasnost:</strong> Political openness and freedom of speech.</li>
              <li><strong>Perestroika:</strong> Economic restructuring and limited free-market reforms.</li>
              <li>These reforms unintendedly unleashed nationalist and democratic forces that the Soviet government could not control.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-accent/30 border border-primary/10 space-y-4">
            <h3 className="font-bold text-primary flex items-center gap-2 mb-2"><Scale size={18} /> The Collapse (1989-1991)</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><strong>Fall of the Berlin Wall (1989):</strong> Symbolized the end of Soviet dominance in Eastern Europe.</li>
              <li><strong>Solidarity in Poland:</strong> The first independent trade union in the Soviet bloc.</li>
              <li><strong>Dissolution of the USSR (1991):</strong> The Soviet Union fragmented into 15 independent republics, marking the official end of the Cold War.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">China, methods of independence, and the Third World</h2>
          <p className="text-muted-foreground mt-2">More than NATO vs. Warsaw Pact.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 not-prose items-stretch">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold text-lg m-0">Chinese communism</h3>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">
              1949 put the PRC in the communist camp, but Mao’s <strong>Great Leap Forward</strong> and Cultural Revolution were not copies of Stalin. Land reform and later the Sino-Soviet split matter. After Mao, Deng’s reforms belong more to Unit 9 economics, but they start from this political victory.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold text-lg m-0">How empires ended</h3>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">
              Compare Gandhi’s satyagraha with armed struggle (FLN, Viet Minh, Mau Mau). Partition, settler minorities, and Cold War aid shaped outcomes. Authoritarian development (Nasser, Sukarno) and metropole-backed coups (Chile, Congo) show independence was not automatically democratic. Apartheid in South Africa lasted until 1994 — a late decolonization of racial rule.
            </p>
          </div>
        </div>
        <div className="not-prose p-6 rounded-2xl border border-primary/20 bg-primary/5 flex gap-3">
          <ArrowLeftRight className="text-primary shrink-0 mt-0.5" size={18} />
          <p className="text-sm text-muted-foreground m-0"><strong>Exam tip:</strong> Containment is the US strategy; proxy war is the method; MAD is why the superpowers avoided a direct European fight. Non-alignment is a third option, not “neutral and quiet.” If the prompt is decolonization, name a negotiated case and a violent case.</p>
        </div>
      </section>
    </div>
  );
};

export default Unit8Content;