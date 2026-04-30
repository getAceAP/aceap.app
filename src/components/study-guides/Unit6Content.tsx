import { Target, Globe, Users, TrendingUp, ShieldAlert, Zap, Landmark, AlertTriangle, BookOpen, HeartPulse, MapPin } from "lucide-react";

const Unit6Content = () => {
  return (
    <div className="space-y-16">
      {/* Overview */}
      <section className="space-y-6">
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex gap-4 items-start not-prose">
          <Target className="text-primary shrink-0 mt-1" size={20} />
          <div>
            <h3 className="font-bold text-primary mb-1">Unit 6: Consequences of Industrialization (1750-1900)</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This unit examines how industrialization fueled a new wave of <strong>Imperialism</strong>. Western powers and Japan used their technological superiority to establish vast empires, leading to global resistance, the creation of export economies, and massive waves of human migration.
            </p>
          </div>
        </div>
      </section>

      {/* 6.1 Rationales for Imperialism */}
      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">6.1 Rationales for Imperialism</h2>
          <p className="text-muted-foreground mt-2">Justifying global dominance through ideology and economics.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 not-prose">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2"><Users className="text-primary" size={18} /> Ideological Rationales</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><strong>Social Darwinism:</strong> Misapplied 'survival of the fittest' to justify racial hierarchy and the conquest of 'weaker' nations.</li>
              <li><strong>Civilizing Mission:</strong> The belief that Europeans had a moral duty to 'uplift' non-Western peoples through Christianity and technology (e.g., <i>The White Man's Burden</i>).</li>
              <li><strong>Nationalism:</strong> Empires were seen as essential for national prestige; the 'Scramble for Africa' was driven by competition between European powers.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2"><TrendingUp className="text-primary" size={18} /> Economic Rationales</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Industrial nations needed <strong>raw materials</strong> (rubber from the Congo, cotton from Egypt/India, copper from Chile) and <strong>new markets</strong> to sell their manufactured goods. This led to the creation of <strong>export economies</strong> that relied on a single crop (monoculture).
            </p>
          </div>
        </div>
      </section>

      {/* 6.2 State Expansion */}
      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">6.2 State Expansion</h2>
          <p className="text-muted-foreground mt-2">The Scramble for Africa, Asia, and the Pacific.</p>
        </div>

        <div className="space-y-6">
          <div className="p-8 rounded-3xl border border-border bg-card shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Landmark className="text-primary" size={20} /> Key Imperial Developments</h3>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="font-bold text-primary">The Berlin Conference (1884-1885)</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">European powers divided Africa without any African representation. They established the 'effective occupation' rule, leading to artificial borders that split ethnic groups and caused long-term instability.</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-primary">Belgian Congo</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">King Leopold II's personal colony. Horrific atrocities were committed against the Congolese people to meet rubber production quotas, leading to millions of deaths.</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-primary">British Raj in India</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">After the 1857 rebellion, the British Crown took direct control of India from the East India Company. India became the 'Jewel in the Crown,' providing cotton and a massive market.</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-primary">US & Japanese Expansion</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">The US acquired the Philippines, Guam, and Puerto Rico after the Spanish-American War. Japan industrialized and conquered Korea and Taiwan, becoming a major imperial power.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.3 Indigenous Responses */}
      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">6.3 Indigenous Responses</h2>
          <p className="text-muted-foreground mt-2">Resistance, Rebellion, and Millenarian Movements.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 not-prose">
          <div className="p-6 rounded-2xl bg-destructive/5 border border-destructive/20 space-y-3">
            <h3 className="font-bold text-destructive flex items-center gap-2 mb-1"><AlertTriangle size={18} /> Sepoy Mutiny (1857)</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">Indian soldiers revolted against the British East India Company over religious insensitivity (greased cartridges). It led to the end of the EIC and the start of direct British rule.</p>
          </div>
          <div className="p-6 rounded-2xl bg-destructive/5 border border-destructive/20 space-y-3">
            <h3 className="font-bold text-destructive flex items-center gap-2 mb-1"><AlertTriangle size={18} /> Xhosa Cattle-Killing</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">A millenarian movement in South Africa where the Xhosa killed their cattle based on a prophecy to drive out the British. It resulted in mass famine and the loss of their land.</p>
          </div>
          <div className="p-6 rounded-2xl bg-destructive/5 border border-destructive/20 space-y-3">
            <h3 className="font-bold text-destructive flex items-center gap-2 mb-1"><AlertTriangle size={18} /> Ghost Dance</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">A Native American spiritual movement intended to restore traditional ways and remove white settlers. It ended tragically with the Wounded Knee Massacre in 1890.</p>
          </div>
        </div>
      </section>

      {/* 6.6 - 6.8 Global Migration */}
      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">6.6 - 6.8 Global Migration</h2>
          <p className="text-muted-foreground mt-2">Causes and effects of the massive movement of people.</p>
        </div>

        <div className="p-8 rounded-3xl border border-border bg-card shadow-sm">
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-primary flex items-center gap-2"><MapPin size={16} /> Causes of Migration</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-3">
                <li><strong>Indentured Servitude:</strong> Millions of Indians and Chinese replaced enslaved labor on plantations and in mines.</li>
                <li><strong>Famine:</strong> The Irish Potato Famine (1840s) led to mass migration to the US and Australia.</li>
                <li><strong>Settler Colonies:</strong> Europeans moved to Australia, New Zealand, and South Africa to establish new lives.</li>
                <li><strong>Economic Opportunity:</strong> Migrants moved to industrial centers and 'Gold Rush' regions (California, Australia).</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-primary flex items-center gap-2"><Users size={16} /> Effects of Migration</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-3">
                <li><strong>Ethnic Enclaves:</strong> Migrants created communities (Chinatowns, Little Italys) that preserved their culture and provided support.</li>
                <li><strong>Exclusion Acts:</strong> Nativist reactions led to laws like the <strong>Chinese Exclusion Act (US)</strong> and the <strong>White Australia Policy</strong>.</li>
                <li><strong>Gender Roles:</strong> Migrants were often men, leaving women to take on new roles in their home societies.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Unit6Content;