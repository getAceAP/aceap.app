import { Swords, AlertTriangle, TrendingUp, Zap, Landmark, Globe, ShieldAlert, HeartPulse, Users, BookOpen, ArrowLeftRight } from "lucide-react";

const Unit7Content = () => {
  return (
    <div className="space-y-16">
      {/* Overview */}
      <section className="space-y-6">
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex gap-4 items-start not-prose">
          <Swords className="text-primary shrink-0 mt-1" size={20} />
          <div>
            <h3 className="font-bold text-primary mb-1">Unit 7: Global Conflict (1900-present)</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This unit covers the era of "Total War." It examines the causes and consequences of World War I and World War II, the interwar period marked by the Great Depression and the rise of totalitarianism, and the horrific genocides that occurred during this time.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mt-3">
              Total war means the home front is a battlefield of labor, food, and propaganda. Colonial troops fought in both world wars, then returned with new claims on independence. The Great Depression did not cause fascism by itself, but it made democratic capitalism look weak. Mass killing is a CED topic: industrial genocide (Holocaust) is not the same as famine-as-policy (Holodomor) or wartime massacre (Nanjing), but all are state or military violence against civilians.
            </p>
          </div>
        </div>
      </section>

      {/* 7.1 - 7.3 World War I */}
      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">7.1 - 7.3 World War I</h2>
          <p className="text-muted-foreground mt-2">The Great War: Causes, Course, and Consequences.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 not-prose">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2"><AlertTriangle className="text-primary" size={18} /> Causes (MAIN)</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><strong>Militarism:</strong> Buildup of large standing armies and glorification of war.</li>
              <li><strong>Alliances:</strong> Secret treaties (Triple Entente vs. Triple Alliance) that dragged nations into conflict.</li>
              <li><strong>Imperialism:</strong> Competition for colonies and resources in Africa and Asia.</li>
              <li><strong>Nationalism:</strong> Intense pride and the desire for self-determination (especially in the Balkans).</li>
              <li><strong>The Spark:</strong> Assassination of <strong>Archduke Franz Ferdinand</strong> in Sarajevo (1914).</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2"><Zap className="text-primary" size={18} /> Conduct of the War</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><strong>Trench Warfare:</strong> Led to a brutal stalemate on the Western Front.</li>
              <li><strong>New Technology:</strong> Poison gas, machine guns, tanks, airplanes, and submarines (U-boats).</li>
              <li><strong>Total War:</strong> Nations mobilized all resources and populations; women entered the workforce in record numbers.</li>
              <li><strong>Propaganda:</strong> Used to demonize the enemy and maintain home front support.</li>
            </ul>
          </div>
        </div>

        <div className="p-8 rounded-3xl border border-border bg-card shadow-sm">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Landmark className="text-primary" size={20} /> Consequences of WWI</h3>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="font-bold text-primary">Treaty of Versailles (1919)</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">Germany was forced to accept the <strong>War Guilt Clause</strong>, pay massive reparations, and lose territory. This created deep resentment that fueled the rise of the Nazis.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-primary">Political Shifts</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">Collapse of the Ottoman, Austro-Hungarian, and Russian empires. The <strong>League of Nations</strong> was created but failed to prevent future conflict. The <strong>Mandate System</strong> established disguised colonialism in the Middle East.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7.4 - 7.6 Interwar Period */}
      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">7.4 - 7.6 The Interwar Period</h2>
          <p className="text-muted-foreground mt-2">Economic collapse and the rise of totalitarianism.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 not-prose">
          <div className="p-6 rounded-2xl bg-destructive/5 border border-destructive/20 space-y-4">
            <h3 className="font-bold text-destructive flex items-center gap-2 mb-2"><TrendingUp size={18} /> The Great Depression</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The 1929 stock market crash led to a global economic collapse. Governments responded with protectionist tariffs, worsening the crisis. This led to widespread loss of faith in democracy and capitalism.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-accent/30 border border-primary/10 space-y-4">
            <h3 className="font-bold text-primary flex items-center gap-2 mb-2"><ShieldAlert size={18} /> Rise of Totalitarianism</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><strong>Fascism (Italy/Germany):</strong> Extreme nationalism, glorification of the leader, and suppression of dissent. <strong>Mussolini</strong> and <strong>Hitler</strong> promised order and national rebirth.</li>
              <li><strong>Communism (USSR):</strong> <strong>Stalin</strong> established a totalitarian state, implemented <strong>Five-Year Plans</strong> for rapid industrialization, and <strong>collectivized agriculture</strong>, leading to mass famine.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7.7 - 7.9 World War II & Genocide */}
      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">7.7 - 7.9 World War II & Genocide</h2>
          <p className="text-muted-foreground mt-2">Global conflict and the depths of human depravity.</p>
        </div>

        <div className="space-y-6">
          <div className="p-8 rounded-3xl border border-border bg-card shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Globe className="text-primary" size={20} /> World War II (1939-1945)</h3>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="font-bold text-primary">Causes & Alliances</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Driven by Axis aggression (Germany, Italy, Japan) and the failure of <strong>Appeasement</strong>. The Allies (USA, UK, USSR, China) fought to stop them.</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-primary">Conduct of War</h4>
                <p className="text-sm text-muted-foreground leading-relaxed"><strong>Blitzkrieg</strong> (lightning war), strategic bombing of cities, and the use of the <strong>Atomic Bomb</strong> on Hiroshima and Nagasaki. WWII was the deadliest conflict in history.</p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl border border-border bg-card shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><HeartPulse className="text-destructive" size={20} /> Mass Atrocities & Genocide</h3>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="font-bold text-destructive">The Holocaust</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">The systematic, state-sponsored murder of 6 million Jews and millions of others (Roma, disabled, LGBTQ+) by the Nazi regime. An extreme example of industrialized genocide.</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-destructive">Other Genocides</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                  <li><strong>Armenian Genocide:</strong> During WWI, the Ottoman government killed over 1 million Armenians.</li>
                  <li><strong>Rape of Nanjing:</strong> Japanese atrocities against Chinese civilians in 1937.</li>
                  <li><strong>Ukrainian Famine (Holodomor):</strong> Stalin's policies led to millions of deaths in the 1930s.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">Methods, empires, and the global South</h2>
          <p className="text-muted-foreground mt-2">What AP still asks after you know MAIN and D-Day.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 not-prose items-stretch">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold text-lg m-0">States try to manage the crash</h3>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">
              The US New Deal, Soviet Five-Year Plans, and fascist corporatism are three answers to 1930s collapse. <strong>Keynesian</strong> spending vs. autarky vs. forced collectivization is a comparison, not a morality play. Japan’s militarists chose empire in China as an economic and nationalist fix. The League of Nations failed Manchuria, Ethiopia, and the Rhineland — appeasement is a policy, not a personality defect.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold text-lg m-0">Colonies and the world wars</h3>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">
              Indian, African, and ANZAC soldiers fought for empires that still denied them self-rule. Wilson’s Fourteen Points and self-determination were applied to Europe, not to British India or French Indochina. The mandate system in the Middle East recycled Ottoman lands under British and French control. WWII’s Pacific and North African fronts make this a global, not just European, story.
            </p>
          </div>
        </div>
        <div className="not-prose p-6 rounded-2xl border border-primary/20 bg-primary/5 flex gap-3">
          <ArrowLeftRight className="text-primary shrink-0 mt-0.5" size={18} />
          <p className="text-sm text-muted-foreground m-0"><strong>Exam tip:</strong> MAIN explains WWI’s structure; the assassination is the spark. Versailles explains German grievance, not every later war. Total war = civilian targeting, rationing, and women’s factory labor. Name a specific genocide with perpetrator and victim group — do not use “atrocities” as a catch-all.</p>
        </div>
      </section>
    </div>
  );
};

export default Unit7Content;