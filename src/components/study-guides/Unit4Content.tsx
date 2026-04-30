import { Ship, Anchor, Zap, Users, TrendingUp, HeartPulse, ShieldAlert, Globe } from "lucide-react";

const Unit4Content = () => {
  return (
    <div className="space-y-16">
      {/* Overview */}
      <section className="space-y-6">
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex gap-4 items-start not-prose">
          <Ship className="text-primary shrink-0 mt-1" size={20} />
          <div>
            <h3 className="font-bold text-primary mb-1">Unit 4: Transoceanic Interconnections (1450-1750)</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This era marks the first time in history that the Eastern and Western Hemispheres were permanently linked, leading to the Columbian Exchange, the rise of maritime empires, and a fundamental shift in global economic power.
            </p>
          </div>
        </div>
      </section>

      {/* 4.1 & 4.2 Tech and Exploration */}
      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">4.1 & 4.2 Technology and Exploration</h2>
          <p className="text-muted-foreground mt-2">The foundation of global connectivity.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 not-prose">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2"><Zap className="text-primary" size={18} /> Technological Innovations</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><strong>Caravel:</strong> Small, maneuverable Portuguese ship with lateen sails for coastal exploration.</li>
              <li><strong>Carrack:</strong> Large, multi-masted ship for heavy trade (Portuguese).</li>
              <li><strong>Fluyt:</strong> Dutch cargo ship designed for maximum space and minimum crew.</li>
              <li><strong>Astrolabe & Compass:</strong> Improved navigation tools from the Islamic and Chinese worlds.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2"><Anchor className="text-primary" size={18} /> State-Sponsored Exploration</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><strong>Portugal:</strong> Prince Henry the Navigator funded voyages down the African coast. Vasco da Gama reached India (1498).</li>
              <li><strong>Spain:</strong> Columbus reached the Americas (1492). Magellan's crew circumnavigated the globe.</li>
              <li><strong>Northern Europe:</strong> English, French, and Dutch sought the 'Northwest Passage' to Asia.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4.3 Columbian Exchange */}
      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">4.3 The Columbian Exchange</h2>
          <p className="text-muted-foreground mt-2">The biological collision of two worlds.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 not-prose">
          <div className="p-6 rounded-2xl bg-destructive/5 border border-destructive/20">
            <h3 className="font-bold text-destructive flex items-center gap-2 mb-3"><HeartPulse size={18} /> Disease</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">Smallpox, measles, and influenza decimated indigenous populations (the <strong>Great Dying</strong>), with mortality rates reaching 90% in some areas.</p>
          </div>
          <div className="p-6 rounded-2xl bg-green-500/5 border border-green-500/20">
            <h3 className="font-bold text-green-600 flex items-center gap-2 mb-3"><Users size={18} /> Population</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">American crops like <strong>potatoes, maize, and manioc</strong> led to massive population growth in Afro-Eurasia due to their high caloric value.</p>
          </div>
          <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20">
            <h3 className="font-bold text-blue-600 flex items-center gap-2 mb-3"><TrendingUp size={18} /> Environment</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">Deforestation and soil depletion occurred as Europeans introduced plantation agriculture and domesticated animals like cattle and pigs.</p>
          </div>
        </div>
      </section>

      {/* 4.5 Labor Systems */}
      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">4.5 Coercive Labor Systems</h2>
          <p className="text-muted-foreground mt-2">The economic engine of maritime empires.</p>
        </div>

        <div className="space-y-4">
          <div className="p-8 rounded-3xl border border-border bg-card shadow-sm">
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="font-bold text-primary">Colonial Labor</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                  <li><strong>Encomienda:</strong> Spanish settlers granted land and indigenous labor in exchange for 'protection' and conversion.</li>
                  <li><strong>Hacienda:</strong> Large rural estates producing agricultural goods for local markets.</li>
                  <li><strong>Mita:</strong> Spanish adaptation of the Inca labor tax, used primarily for dangerous silver mining in Potosí.</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-primary">Trans-Atlantic Slave Trade</h4>
                <p className="text-sm text-muted-foreground">The <strong>Middle Passage</strong> transported millions of Africans to the Americas to work on sugar and tobacco plantations. This led to the <strong>African Diaspora</strong> and the creation of syncretic cultures.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.6 Social Hierarchies */}
      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">4.6 Social Hierarchies</h2>
          <p className="text-muted-foreground mt-2">The Casta System in the Americas.</p>
        </div>

        <div className="bg-accent/30 rounded-2xl p-8 not-prose border border-primary/10">
          <div className="grid sm:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-xl bg-background border border-border">
              <div className="font-bold text-primary">Peninsulares</div>
              <div className="text-[10px] text-muted-foreground uppercase">Born in Spain</div>
            </div>
            <div className="p-4 rounded-xl bg-background border border-border">
              <div className="font-bold text-primary">Creoles</div>
              <div className="text-[10px] text-muted-foreground uppercase">Spanish born in Americas</div>
            </div>
            <div className="p-4 rounded-xl bg-background border border-border">
              <div className="font-bold text-primary">Mestizos</div>
              <div className="text-[10px] text-muted-foreground uppercase">Spanish + Indigenous</div>
            </div>
            <div className="p-4 rounded-xl bg-background border border-border">
              <div className="font-bold text-primary">Mulattoes</div>
              <div className="text-[10px] text-muted-foreground uppercase">Spanish + African</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Unit4Content;