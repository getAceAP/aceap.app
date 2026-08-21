import { Route, Ship, Bug, BookOpen, ArrowLeftRight, Coins } from "lucide-react";

const Unit2Content = () => {
  return (
    <div className="space-y-16">
      <section className="space-y-6">
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex gap-4 items-start not-prose">
          <Route className="text-primary shrink-0 mt-1" size={20} />
          <div className="space-y-3">
            <h3 className="font-bold text-primary mb-0">Unit 2: Networks of Exchange (c. 1200–1450)</h3>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">
              Same years as Unit 1, different lens: how goods, people, germs, and ideas moved. Silk Roads, the Indian Ocean, and trans-Saharan routes were not new, but Mongol peace, better saddles, and monsoon knowledge made them denser. The exam wants cause (why a route boomed) and consequence (what traveled besides silk).
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">
              Luxury goods dominate overland; bulk goods (timber, grain, slaves) show up more at sea. Caravanserai, bills of exchange, and diasporic merchant communities are the “infrastructure” answers. Travelers — Marco Polo, Ibn Battuta, later Zheng He — are evidence, not the whole story.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">2.1 Silk Roads</h2>
          <p className="text-muted-foreground mt-2">Oasis towns, credit, and luxury cargo.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 not-prose items-stretch">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2 m-0"><Coins className="text-primary" size={18} /> How the roads worked</h3>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">
              Relays of merchants, not one caravan from Chang’an to Venice. <strong>Caravanserai</strong> housed people and camels. Paper money and flying cash cut the cost of moving metal coin. Silk, porcelain, and spices went west; horses, glass, and gold went east. Cities like Kashgar and Samarkand grew as nodes. The Hanseatic League is the European analog: city leagues protecting bulk northern trade.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg m-0">What else moved</h3>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">
              Buddhism, Islam, and gunpowder technology rode the same tracks. So did disease. If a stimulus is Marco Polo at the Great Khan’s court, the economic point is usually <em>Pax Mongolica security</em> plus demand for Asian luxuries — which later pushed Europeans to find sea routes around Muslim middlemen.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">2.2 The Mongol Empire</h2>
          <p className="text-muted-foreground mt-2">The largest land empire and the costs of connectivity.</p>
        </div>
        <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed m-0">
            <strong>Genghis Khan</strong> united steppe clans. Horse archery and mobility beat slower infantry states. The empire later split into <strong>khanates</strong> (Yuan in China under Kublai, Ilkhanate, Golden Horde, Chagatai). Mongols were often <strong>religiously pragmatic</strong>: tax and order mattered more than conversion. The <strong>Yam</strong> relay system moved messages. They promoted merchants and sometimes resettled artisans.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed m-0">
            Consequences AP always wants: (1) revival of Silk Road volume, (2) transfer of Chinese tech westward, (3) the <strong>Bubonic Plague</strong> using the same roads, (4) demographic and labor shocks in Europe that weakened serfdom after 1348. Do not credit Mongols with “inventing” the Silk Road — they made it safer and thicker.
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">2.3 Indian Ocean</h2>
          <p className="text-muted-foreground mt-2">Monsoons, dhows, junks, and independent merchant towns.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 not-prose items-stretch">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2 m-0"><Ship className="text-primary" size={18} /> The network</h3>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">
              Predictable <strong>monsoon</strong> winds let sailors time crossings. Lateen sails, compass, and stern rudder (diffused tech) made bigger ships practical. Unlike the Silk Road, this network carried bulk: timber, ivory, gold, cotton, grain — plus luxury spices. Swahili cities, Gujarat, Calicut, Malacca, and southern Chinese ports were hubs. No single navy “owned” the ocean before the Portuguese.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg m-0">Zheng He and diaspora</h3>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">
              Ming <strong>Zheng He</strong> projected tribute and prestige, not settler colonies. Confucian officials later killed the voyages as waste. <strong>Diasporic communities</strong> (Arab, Chinese, Gujarati) settled in ports and kept their law and religion — classic cultural consequence. Swahili language itself is Bantu + Arabic loanwords.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">2.4 Trans-Saharan</h2>
          <p className="text-muted-foreground mt-2">Camels, gold, salt, and Islam in the Sahel.</p>
        </div>
        <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed m-0">
            The <strong>camel saddle</strong> and caravan organization made the Sahara crossable. West African gold moved north; salt and manufactured goods moved south. Mali (and later Songhai) taxed the traffic. Islam traveled with merchants and scholars; Timbuktu became a learning center after royal patronage (Mansa Musa). Ibn Battuta’s praise of Mali’s security is a document about <em>state capacity</em>, not just piety.
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">2.5–2.6 Culture and environment</h2>
          <p className="text-muted-foreground mt-2">Diffusion has a body count.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 not-prose items-stretch">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2 m-0"><BookOpen className="text-primary" size={18} /> Cultural transfers</h3>
            <ul className="space-y-2 text-sm text-muted-foreground m-0">
              <li>Gunpowder, paper, and the compass moved west.</li>
              <li>Greek and Islamic science recirculated through translation.</li>
              <li>Ibn Battuta, Marco Polo, and Margery Kempe are three different traveler types: qadi, merchant-courtier, pilgrim.</li>
              <li>Bananas in Africa and citrus in the Mediterranean are crop diffusion examples.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-destructive/5 border border-destructive/20 space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2 m-0"><Bug className="text-destructive" size={18} /> Environment</h3>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">
              The plague followed fleas on the same caravans and ships. Europe lost perhaps a third of its people; labor got more expensive; some peasants bargained. Overgrazing, deforestation, and soil erosion show up as local costs of supporting more trade and bigger cities. Connectivity is not automatically “progress.”
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="not-prose p-6 rounded-2xl border border-primary/20 bg-primary/5 flex gap-3">
          <ArrowLeftRight className="text-primary shrink-0 mt-0.5" size={18} />
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="m-0"><strong>Exam tip:</strong> Match the technology to the route: camel saddle → Sahara; monsoon knowledge and dhows → Indian Ocean; caravanserai and paper money → Silk Roads; Mongol Yam → communications across the steppe. If the question asks for a <em>negative</em> of Mongol connectivity, plague is the safest hit.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Unit2Content;
