import { Ship, Anchor, Zap, Users, TrendingUp, HeartPulse, ShieldAlert, Globe, Coins, AlertTriangle, BookOpen } from "lucide-react";

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
              This era marks the first time in history that the Eastern and Western Hemispheres were permanently linked. This "Global Collision" led to the Columbian Exchange, the rise of maritime empires, the development of mercantilism, and a fundamental shift in global economic power from land-based to sea-based trade.
            </p>
          </div>
        </div>
      </section>

      {/* 4.1 & 4.2 Tech and Exploration */}
      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">4.1 & 4.2 Technology and Exploration</h2>
          <p className="text-muted-foreground mt-2">The foundation of global connectivity and state-sponsored voyages.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 not-prose">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2"><Zap className="text-primary" size={18} /> Technological Innovations</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Cross-cultural interactions led to the diffusion of technology from the Islamic and Chinese worlds to Europe, enabling long-distance travel.</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><strong>Caravel:</strong> Small, maneuverable Portuguese ship with lateen sails for coastal exploration and sailing against the wind.</li>
              <li><strong>Carrack:</strong> Large, multi-masted ship for heavy trade (Portuguese).</li>
              <li><strong>Fluyt:</strong> Dutch cargo ship designed for maximum space and minimum crew, giving them a competitive edge in trade.</li>
              <li><strong>Astrolabe & Compass:</strong> Improved navigation tools for determining latitude and direction.</li>
              <li><strong>Astronomical Charts:</strong> Maps of the stars used by sailors to navigate the open ocean.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2"><Anchor className="text-primary" size={18} /> State-Sponsored Exploration</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <strong>Portugal:</strong> Prince Henry the Navigator funded voyages down the African coast. <strong>Vasco da Gama</strong> reached India (1498), establishing a <strong>Trading Post Empire</strong>.
              </li>
              <li>
                <strong>Spain:</strong> Sponsored <strong>Columbus</strong> (1492), who reached the Americas. <strong>Magellan's</strong> crew was the first to circumnavigate the globe. Spain established a massive land-based empire in the Americas.
              </li>
              <li>
                <strong>Northern Europe:</strong> The English, French, and Dutch sought the 'Northwest Passage' to Asia. They established colonies in North America and the Caribbean.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4.3 Columbian Exchange */}
      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">4.3 The Columbian Exchange</h2>
          <p className="text-muted-foreground mt-2">The biological collision of two worlds and its global impact.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 not-prose">
          <div className="p-6 rounded-2xl bg-destructive/5 border border-destructive/20 space-y-3">
            <h3 className="font-bold text-destructive flex items-center gap-2 mb-1"><HeartPulse size={18} /> Disease</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">Smallpox, measles, and influenza decimated indigenous populations (the <strong>Great Dying</strong>), with mortality rates reaching 90% in some areas. This created a massive labor shortage.</p>
          </div>
          <div className="p-6 rounded-2xl bg-green-500/5 border border-green-500/20 space-y-3">
            <h3 className="font-bold text-green-600 flex items-center gap-2 mb-1"><Users size={18} /> Food & Population</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">American crops like <strong>potatoes, maize, and manioc</strong> led to massive population growth in Afro-Eurasia. European crops like <strong>wheat and sugar</strong> were introduced to the Americas.</p>
          </div>
          <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20 space-y-3">
            <h3 className="font-bold text-blue-600 flex items-center gap-2 mb-1"><TrendingUp size={18} /> Animals & Environment</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">Europeans introduced <strong>horses, cattle, and pigs</strong> to the Americas, fundamentally changing indigenous cultures and the landscape. Deforestation and soil depletion followed.</p>
          </div>
        </div>
      </section>

      {/* 4.4 & 4.5 Maritime Empires & Labor */}
      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">4.4 & 4.5 Maritime Empires & Labor</h2>
          <p className="text-muted-foreground mt-2">The economic engine of global trade and coercive labor.</p>
        </div>

        <div className="space-y-6">
          <div className="p-8 rounded-3xl border border-border bg-card shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Coins className="text-primary" size={20} /> Mercantilism & Global Trade</h3>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="font-bold text-primary">Mercantilism</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">An economic policy where states sought to accumulate gold and silver by maintaining a favorable balance of trade (exporting more than importing). Colonies were essential as sources of raw materials and markets for manufactured goods.</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-primary">Joint-Stock Companies</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Private investors pooled capital to fund global trade ventures, sharing risks and profits. Examples include the <strong>British East India Company</strong> and the <strong>Dutch VOC</strong>, which often had their own armies and laws.</p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl border border-border bg-card shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Users className="text-primary" size={20} /> Coercive Labor Systems</h3>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-widest text-primary">Colonial Labor in the Americas</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                  <li><strong>Encomienda:</strong> Spanish settlers granted land and indigenous labor in exchange for 'protection' and conversion.</li>
                  <li><strong>Hacienda:</strong> Large rural estates producing agricultural goods for local markets.</li>
                  <li><strong>Mita:</strong> Spanish adaptation of the Inca labor tax, used primarily for dangerous silver mining in <strong>Potosí</strong>.</li>
                  <li><strong>Indentured Servitude:</strong> Laborers (often European) worked for a set period (4-7 years) in exchange for passage to the Americas.</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-widest text-primary">Trans-Atlantic Slave Trade</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">The <strong>Middle Passage</strong> transported millions of Africans to the Americas to work on sugar and tobacco plantations. This <strong>Chattel Slavery</strong> treated humans as property. It led to the <strong>African Diaspora</strong> and the creation of syncretic cultures (e.g., Santeria, Vodun).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.6 Resistance & Social Hierarchies */}
      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">4.6 & 4.7 Resistance and Social Hierarchies</h2>
          <p className="text-muted-foreground mt-2">Internal challenges and the new racial order.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 not-prose">
          <div className="p-6 rounded-2xl bg-destructive/5 border border-destructive/20 space-y-4">
            <h3 className="font-bold text-destructive flex items-center gap-2 mb-2"><AlertTriangle size={18} /> Resistance to Imperialism</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><strong>Pueblo Revolt (1680):</strong> Indigenous people in New Mexico successfully expelled the Spanish for 12 years.</li>
              <li><strong>Metacom's War:</strong> A major conflict in New England between English colonists and Native Americans.</li>
              <li><strong>Maroon Societies:</strong> Communities of escaped enslaved people in the Caribbean and Brazil (e.g., Palmares).</li>
              <li><strong>Queen Ana Nzinga:</strong> Led the kingdoms of Ndongo and Matamba in resistance against Portuguese colonization in Africa.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-accent/30 border border-primary/10 space-y-4">
            <h3 className="font-bold text-primary flex items-center gap-2 mb-2"><BookOpen size={18} /> The Casta System</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">A rigid social hierarchy in the Spanish Americas based on racial purity and place of birth:</p>
            <div className="space-y-2">
              <div className="flex justify-between text-xs border-b border-border pb-1">
                <span className="font-bold">Peninsulares</span>
                <span>Born in Spain (Top)</span>
              </div>
              <div className="flex justify-between text-xs border-b border-border pb-1">
                <span className="font-bold">Creoles</span>
                <span>Spanish born in Americas</span>
              </div>
              <div className="flex justify-between text-xs border-b border-border pb-1">
                <span className="font-bold">Mestizos</span>
                <span>Spanish + Indigenous</span>
              </div>
              <div className="flex justify-between text-xs border-b border-border pb-1">
                <span className="font-bold">Mulattoes</span>
                <span>Spanish + African</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="font-bold">Indigenous/Enslaved</span>
                <span>Bottom of hierarchy</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Unit4Content;