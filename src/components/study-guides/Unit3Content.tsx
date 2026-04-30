import { Landmark, Swords, ScrollText, Users, Globe, ShieldCheck, BookOpen, Coins } from "lucide-react";

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
              This era is defined by the rise of powerful centralized states that utilized gunpowder technology, complex bureaucracies, and religious legitimization to expand and maintain control over vast, diverse territories. The "Gunpowder Empires" (Ottoman, Safavid, Mughal) and the expansion of Russia and the Qing Dynasty are central to this period.
            </p>
          </div>
        </div>
      </section>

      {/* 3.1 Expansion */}
      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">3.1 Empire Expansion</h2>
          <p className="text-muted-foreground mt-2">The role of gunpowder, armed trade, and military innovation.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 not-prose">
          <div className="space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2"><Swords className="text-primary" size={18} /> The Gunpowder Empires</h3>
            <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-6">
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider text-primary">Ottoman Empire (Sunni)</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Conquered Constantinople in 1453 under <strong>Mehmed II</strong>, ending the Byzantine Empire. Utilized heavy artillery and the <strong>Janissary</strong> corps (elite infantry). Reached its peak under <strong>Suleiman the Magnificent</strong>, who expanded into SE Europe (siege of Vienna) and North Africa. The empire was a major hub for trade between Europe and Asia.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider text-primary">Safavid Empire (Shi'a)</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Established in Persia by <strong>Ismail I</strong>. Declared Shi'a Islam the state religion, creating a permanent ideological rift with the Sunni Ottomans. This led to frequent conflicts, such as the <strong>Battle of Chaldiran</strong>. Known for the magnificent capital at <strong>Isfahan</strong> and the promotion of Persian culture and arts.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider text-primary">Mughal Empire (Sunni)</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Founded by <strong>Babur</strong> in India. <strong>Akbar the Great</strong> centralized the state, promoted religious tolerance (<strong>Sulh-i-kul</strong>), and abolished the jizya tax. Later, <strong>Aurangzeb's</strong> religious intolerance and expansionist wars contributed to the empire's eventual decline and vulnerability to European influence.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2"><Landmark className="text-primary" size={18} /> East Asian & Russian Expansion</h3>
            <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-6">
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider text-primary">Manchu (Qing) Dynasty</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The Manchus overthrew the Ming in 1644. Expanded borders into Taiwan, Tibet, and Central Asia. They maintained the <strong>Civil Service Exam</strong> to gain the support of the Han elite but enforced Manchu cultural dominance, most notably the <strong>queue</strong> hairstyle for men as a sign of submission.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider text-primary">Russian Empire</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>Ivan IV (The Terrible)</strong> expanded into Siberia, utilizing <strong>Cossacks</strong> (peasant warriors). <strong>Peter the Great</strong> westernized the military, forced boyars to shave their beards, and built <strong>St. Petersburg</strong> as a 'window to the West' on the Baltic. Russia became a major European power during this era.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider text-primary">Tokugawa Shogunate (Japan)</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Unified Japan after the <strong>Sengoku</strong> period. Established a centralized feudal system. The <strong>Sankin-kotai</strong> (alternate attendance) system required daimyo to live in Edo every other year, keeping them under the Shogun's control. Japan eventually adopted an isolationist policy (<strong>Sakoku</strong>).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.2 Administration */}
      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">3.2 Administration & Legitimization</h2>
          <p className="text-muted-foreground mt-2">How rulers consolidated and maintained power through bureaucracy and art.</p>
        </div>

        <div className="space-y-6">
          <div className="p-8 rounded-3xl border border-border bg-card shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Users className="text-primary" size={20} /> Bureaucratic Elites & Military Professionals</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="font-bold text-primary">Devshirme</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">Ottoman system of taking Christian boys from the Balkans, converting them to Islam, and training them as elite administrators or <strong>Janissaries</strong> loyal only to the Sultan. This bypassed the power of traditional Turkish nobility.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-primary">Samurai</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">In Japan, the Tokugawa Shogunate turned the samurai from warriors into salaried bureaucratic elites. This prevented civil war and ensured the stability of the Shogunate's administration.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-primary">Zamindars</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">Mughal tax collectors who were granted land in exchange for collecting revenue for the central government. Over time, they became a powerful local elite that sometimes challenged imperial authority.</p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl border border-border bg-card shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><ScrollText className="text-primary" size={20} /> Legitimizing Rule</h3>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-widest text-primary flex items-center gap-2"><BookOpen size={16} /> Religious Legitimization</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-3">
                  <li><strong>Divine Right:</strong> European monarchs (e.g., Louis XIV of France) claimed their authority came directly from God, making them unaccountable to their subjects.</li>
                  <li><strong>Caliphate:</strong> Ottoman Sultans claimed the title of Caliph to assert leadership over the entire Muslim world and defend the faith.</li>
                  <li><strong>Human Sacrifice:</strong> The Aztecs used public ritual sacrifice to demonstrate state power and appease the gods, reinforcing the social and political order.</li>
                  <li><strong>Songhai Islam:</strong> Rulers in West Africa used Islam to unify their diverse empire and connect with global trade networks.</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-widest text-primary flex items-center gap-2"><Landmark size={16} /> Monumental Architecture & Art</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-3">
                  <li><strong>Versailles:</strong> Louis XIV built this massive palace to project his absolute power and force the nobility to live under his watchful eye.</li>
                  <li><strong>Taj Mahal:</strong> Shah Jahan built this magnificent tomb for his wife, projecting Mughal wealth, piety, and architectural sophistication.</li>
                  <li><strong>Forbidden City:</strong> The Ming and Qing emperors used this massive, isolated complex to elevate themselves above commoners and project imperial majesty.</li>
                  <li><strong>St. Basil's Cathedral:</strong> Built by Ivan IV in Moscow to commemorate military victories and project the power of the Russian Orthodox state.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl border border-border bg-card shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Coins className="text-primary" size={20} /> Tax Collection Systems</h3>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <h4 className="font-bold text-primary">Tax Farming</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Used by the Ottomans and French. The government auctioned off the right to collect taxes to private individuals (tax farmers), who often overcharged the peasantry to make a profit.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-primary">Tribute Systems</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">The Aztecs and Chinese (Ming/Qing) required conquered peoples or neighboring states to pay tribute in the form of goods, labor, or precious metals to acknowledge their dominance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.3 Belief Systems */}
      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">3.3 Belief Systems</h2>
          <p className="text-muted-foreground mt-2">Religious schisms, syncretism, and the spread of ideas.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 not-prose">
          <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20 space-y-4">
            <h3 className="font-bold text-blue-600 flex items-center gap-2 mb-2"><ShieldCheck size={18} /> The Protestant Reformation</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong>Martin Luther's</strong> 95 Theses (1517) challenged Catholic corruption, specifically the sale of <strong>indulgences</strong>. He argued for <strong>Sola Fide</strong> (faith alone) and the authority of the Bible over the Pope. The resulting schism led to:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
              <li>Creation of Protestant denominations (Lutheran, Calvinist, Anglican).</li>
              <li>Decades of religious warfare, culminating in the <strong>Thirty Years' War</strong>.</li>
              <li>The <strong>Peace of Westphalia (1648)</strong>, which established state sovereignty and religious self-determination.</li>
              <li>The <strong>Counter-Reformation</strong>: The Catholic Church's response, including the Council of Trent and the founding of the <strong>Jesuits</strong>.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-orange-500/5 border border-orange-500/20 space-y-4">
            <h3 className="font-bold text-orange-600 flex items-center gap-2 mb-2"><Globe size={18} /> Global Religious Developments</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <strong>Sunni-Shi'a Split:</strong> Intensified by the political and military rivalry between the Ottoman (Sunni) and Safavid (Shi'a) empires.
              </li>
              <li>
                <strong>Sikhism:</strong> Emerged in South Asia as a syncretic blend of Hindu and Islamic influences, founded by <strong>Guru Nanak</strong>. It emphasized equality and devotion to one God.
              </li>
              <li>
                <strong>Neo-Confucianism:</strong> Continued to be the dominant ideology in China, emphasizing social order, filial piety, and the authority of the state.
              </li>
              <li>
                <strong>Spread of Islam:</strong> Continued through trade and Sufi missionaries in Southeast Asia and West Africa.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Unit3Content;