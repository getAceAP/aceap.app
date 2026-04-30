import { Landmark, Swords, ScrollText, Users, Globe, ShieldCheck } from "lucide-react";

const Unit3Content = () => {
  return (
    <div className="space-y-16">
      {/* Overview */}
      <section className="space-y-6">
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex gap-4 items-start not-prose">
          <Globe className="text-primary shrink-0 mt-1" size={20} />
          <div>
            <h3 className="font-bold text-primary mb-1">Unit 3: Land-Based Empires (1450-1750)</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This era is defined by the rise of powerful centralized states that utilized gunpowder technology, complex bureaucracies, and religious legitimization to expand and maintain control over vast, diverse territories.
            </p>
          </div>
        </div>
      </section>

      {/* 3.1 Expansion */}
      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">3.1 Empire Expansion</h2>
          <p className="text-muted-foreground mt-2">The role of gunpowder and armed trade.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 not-prose">
          <div className="space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2"><Swords className="text-primary" size={18} /> The Gunpowder Empires</h3>
            <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider text-primary">Ottoman Empire</h4>
                <p className="text-sm text-muted-foreground">Conquered Constantinople in 1453 under Mehmed II. Utilized heavy artillery and the <strong>Janissary</strong> corps. Reached its peak under Suleiman the Magnificent, expanding into SE Europe and North Africa.</p>
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider text-primary">Safavid Empire</h4>
                <p className="text-sm text-muted-foreground">Established in Persia by Ismail I. Declared Shi'a Islam the state religion, creating a permanent ideological rift with the Sunni Ottomans. Known for the magnificent capital at Isfahan.</p>
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider text-primary">Mughal Empire</h4>
                <p className="text-sm text-muted-foreground">Founded by Babur in India. Akbar the Great centralized the state and promoted religious tolerance (Sulh-i-kul). Later, Aurangzeb's intolerance contributed to the empire's decline.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2"><Landmark className="text-primary" size={18} /> East Asian & Russian Expansion</h3>
            <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider text-primary">Manchu (Qing) Dynasty</h4>
                <p className="text-sm text-muted-foreground">The Manchus overthrew the Ming in 1644. Expanded borders into Taiwan, Tibet, and Central Asia. Maintained the Civil Service Exam but enforced Manchu cultural dominance (the queue).</p>
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider text-primary">Russian Empire</h4>
                <p className="text-sm text-muted-foreground">Ivan IV (The Terrible) expanded into Siberia. Peter the Great westernized the military and built St. Petersburg as a 'window to the West' on the Baltic.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.2 Administration */}
      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">3.2 Administration & Legitimization</h2>
          <p className="text-muted-foreground mt-2">How rulers consolidated power.</p>
        </div>

        <div className="space-y-6">
          <div className="p-8 rounded-3xl border border-border bg-card shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Users className="text-primary" size={20} /> Bureaucratic Elites & Military Professionals</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="font-bold text-primary">Devshirme</h4>
                <p className="text-xs text-muted-foreground">Ottoman system of taking Christian boys, converting them, and training them as elite administrators or Janissaries loyal only to the Sultan.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-primary">Samurai</h4>
                <p className="text-xs text-muted-foreground">In Japan, the Tokugawa Shogunate turned the samurai into salaried bureaucratic elites to prevent civil war.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-primary">Zamindars</h4>
                <p className="text-xs text-muted-foreground">Mughal tax collectors who were granted land in exchange for collecting revenue for the central government.</p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl border border-border bg-card shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><ScrollText className="text-primary" size={20} /> Legitimizing Rule</h3>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="font-bold text-sm uppercase tracking-widest text-primary">Religious Legitimization</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                  <li><strong>Divine Right:</strong> European monarchs (e.g., Louis XIV) claimed authority from God.</li>
                  <li><strong>Caliphate:</strong> Ottoman Sultans claimed the title of Caliph to lead the Muslim world.</li>
                  <li><strong>Human Sacrifice:</strong> Aztecs used public ritual to demonstrate state power.</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-sm uppercase tracking-widest text-primary">Monumental Architecture</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                  <li><strong>Versailles:</strong> Louis XIV used his palace to distract and control the nobility.</li>
                  <li><strong>Taj Mahal:</strong> Shah Jahan built this tomb to project Mughal wealth and piety.</li>
                  <li><strong>Forbidden City:</strong> Qing emperors used the massive complex to isolate and elevate themselves.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.3 Belief Systems */}
      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">3.3 Belief Systems</h2>
          <p className="text-muted-foreground mt-2">Religious schisms and syncretism.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 not-prose">
          <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20">
            <h3 className="font-bold text-blue-600 flex items-center gap-2 mb-4"><ShieldCheck size={18} /> The Protestant Reformation</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Martin Luther's 95 Theses (1517) challenged Catholic corruption (indulgences). The resulting schism led to the creation of Protestant denominations and decades of religious warfare, culminating in the <strong>Thirty Years' War</strong> and the <strong>Peace of Westphalia (1648)</strong>.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-orange-500/5 border border-orange-500/20">
            <h3 className="font-bold text-orange-600 flex items-center gap-2 mb-4"><Globe size={18} /> Global Developments</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><strong>Sunni-Shi'a Split:</strong> Intensified by the Ottoman-Safavid conflict.</li>
              <li><strong>Sikhism:</strong> Emerged in South Asia as a syncretic blend of Hindu and Islamic influences.</li>
              <li><strong>Counter-Reformation:</strong> The Catholic Church's response, including the Council of Trent and the founding of the Jesuits.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Unit3Content;