import { Target, Globe, Users, TrendingUp, ShieldAlert, Zap, Landmark, AlertTriangle } from "lucide-react";

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
              This unit examines how industrialization fueled a new wave of imperialism. Western powers and Japan used their technological superiority to establish vast empires, leading to global resistance and significant environmental and social changes.
            </p>
          </div>
        </div>
      </section>

      {/* 6.1 Rationales for Imperialism */}
      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">6.1 Rationales for Imperialism</h2>
          <p className="text-muted-foreground mt-2">Justifying global dominance.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 not-prose">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2"><Users className="text-primary" size={18} /> Ideological Rationales</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><strong>Social Darwinism:</strong> Applied 'survival of the fittest' to human societies to justify racial hierarchy.</li>
              <li><strong>Civilizing Mission:</strong> The belief that Europeans had a duty to bring Christianity and technology to the 'uncivilized' world.</li>
              <li><strong>Nationalism:</strong> Empires were seen as symbols of national prestige and power.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2"><TrendingUp className="text-primary" size={18} /> Economic Rationales</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Industrial nations needed <strong>raw materials</strong> (rubber, cotton, copper) and <strong>new markets</strong> to sell their manufactured goods. This led to the creation of <strong>export economies</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 6.2 State Expansion */}
      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">6.2 State Expansion</h2>
          <p className="text-muted-foreground mt-2">The Scramble for Africa and Asia.</p>
        </div>

        <div className="space-y-6">
          <div className="p-8 rounded-3xl border border-border bg-card shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Landmark className="text-primary" size={20} /> Key Imperial Developments</h3>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="font-bold text-primary">The Berlin Conference (1884)</h4>
                <p className="text-sm text-muted-foreground">European powers divided Africa without regard for indigenous borders. Only Ethiopia and Liberia remained independent.</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-primary">Belgian Congo</h4>
                <p className="text-sm text-muted-foreground">King Leopold II's private colony, known for horrific atrocities in the pursuit of rubber extraction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.3 Indigenous Responses */}
      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">6.3 Indigenous Responses</h2>
          <p className="text-muted-foreground mt-2">Resistance and Rebellion.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 not-prose">
          <div className="p-6 rounded-2xl bg-destructive/5 border border-destructive/20">
            <h3 className="font-bold text-destructive flex items-center gap-2 mb-3"><AlertTriangle size={18} /> Sepoy Mutiny</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">1857 rebellion in India against the British East India Company, leading to direct control by the British Crown (the Raj).</p>
          </div>
          <div className="p-6 rounded-2xl bg-destructive/5 border border-destructive/20">
            <h3 className="font-bold text-destructive flex items-center gap-2 mb-3"><AlertTriangle size={18} /> Xhosa Cattle-Killing</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">A spiritual movement in South Africa that aimed to drive out the British but resulted in mass famine.</p>
          </div>
          <div className="p-6 rounded-2xl bg-destructive/5 border border-destructive/20">
            <h3 className="font-bold text-destructive flex items-center gap-2 mb-3"><AlertTriangle size={18} /> Ghost Dance</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">A Native American movement in the US intended to restore traditional ways and remove white settlers.</p>
          </div>
        </div>
      </section>

      {/* 6.6 & 6.7 Migration */}
      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">6.6 & 6.7 Global Migration</h2>
          <p className="text-muted-foreground mt-2">Causes and effects of human movement.</p>
        </div>

        <div className="p-8 rounded-3xl border border-border bg-card shadow-sm">
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="font-bold text-primary">Causes of Migration</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                <li><strong>Indentured Servitude:</strong> Laborers from India and China replaced enslaved labor.</li>
                <li><strong>Famine:</strong> The Irish Potato Famine led to mass migration to the US.</li>
                <li><strong>Settler Colonies:</strong> Europeans moved to Australia, New Zealand, and South Africa.</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-primary">Effects of Migration</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                <li><strong>Ethnic Enclaves:</strong> Chinatowns and Little Italys preserved migrant cultures.</li>
                <li><strong>Exclusion Acts:</strong> The Chinese Exclusion Act (US) and White Australia Policy reflected nativist reactions.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Unit6Content;