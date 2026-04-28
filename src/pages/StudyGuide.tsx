import { useParams, useNavigate, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { units } from "@/data/content";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Clock, MapPin, Info, Download, Globe, Ship, Users, ShieldAlert, Zap, Factory, Landmark, Scale, Anchor, Swords, TrendingUp, HeartPulse, Landmark as Government, ScrollText, Map } from "lucide-react";
import { motion } from "framer-motion";

const StudyGuide = () => {
  const { unitId } = useParams();
  const navigate = useNavigate();
  const unit = units.find((u) => u.id === Number(unitId));

  if (!unit) return null;

  const isUnit1 = unit.id === 1;
  const isUnit2 = unit.id === 2;
  const isUnit3 = unit.id === 3;
  const isUnit4 = unit.id === 4;
  const isUnit5 = unit.id === 5;

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="space-y-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate("/units/ap-world")} 
              className="text-muted-foreground -ml-2"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Units
            </Button>
            <Button variant="outline" size="sm" className="rounded-lg">
              <Download className="mr-2 h-4 w-4" />
              Export PDF
            </Button>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
              <div className="bg-primary/10 p-1 rounded">
                <BookOpen size={14} className="text-primary" />
              </div>
              Comprehensive Study Guide
            </div>
            <h1 className="text-4xl font-bold tracking-tight">Unit {unit.id}: {unit.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Clock size={14} />
                {unit.period}
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin size={14} />
                Global Context
              </div>
            </div>
          </div>
        </header>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-slate dark:prose-invert max-w-none bg-card border border-border rounded-3xl p-8 sm:p-12 shadow-sm space-y-16"
        >
          {isUnit1 ? (
            <>
              {/* Unit 1 Content: The Global Tapestry */}
              <div className="space-y-6">
                <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex gap-4 items-start not-prose">
                  <Globe className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-bold text-primary mb-1">Unit 1: The Global Tapestry (1200-1450)</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      This unit explores how states formed, expanded, and declined in various parts of the world. It focuses on the internal developments of civilizations before they were deeply interconnected by global trade.
                    </p>
                  </div>
                </div>
              </div>

              <section className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <h2 className="text-3xl font-bold m-0">1.1 East Asia</h2>
                  <p className="text-muted-foreground mt-2">The dominance of the Song Dynasty.</p>
                </div>
                <p>The <strong>Song Dynasty</strong> (960-1279) utilized traditional methods of Confucianism and an imperial bureaucracy to maintain and justify its rule.</p>
                <div className="grid sm:grid-cols-2 gap-6 not-prose">
                  <div className="p-6 rounded-2xl bg-muted/30 border border-border">
                    <h3 className="font-bold text-primary flex items-center gap-2 mb-3"><Government size={18} /> Governance</h3>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Bureaucracy:</strong> A vast organization in which appointed officials carried out the empire's policies.</li>
                      <li><strong>Meritocracy:</strong> Officials obtained positions by demonstrating their merit on civil service exams based on Confucian texts.</li>
                    </ul>
                  </div>
                  <div className="p-6 rounded-2xl bg-muted/30 border border-border">
                    <h3 className="font-bold text-primary flex items-center gap-2 mb-3"><Users size={18} /> Social Structure</h3>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Filial Piety:</strong> The duty of family members to subordinate their needs to those of the male head of the family.</li>
                      <li><strong>Neo-Confucianism:</strong> A syncretic system, combining rational thought with the more abstract ideas of Daoism and Buddhism.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <h2 className="text-3xl font-bold m-0">1.2 Dar al-Islam</h2>
                  <p className="text-muted-foreground mt-2">Fragmentation and Innovation.</p>
                </div>
                <p>As the Abbasid Caliphate fragmented, new Islamic political entities emerged, most of which were dominated by Turkic peoples.</p>
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl border border-border bg-card">
                    <h3 className="font-bold text-lg mb-3">New Political Entities</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li><strong>Seljuk Empire:</strong> Turkic Muslims who captured Baghdad and limited the Caliph's power to religious matters.</li>
                      <li><strong>Mamluk Sultanate:</strong> Established by former enslaved soldiers in Egypt who defeated the Mongols.</li>
                      <li><strong>Delhi Sultanate:</strong> Islamic state in northern India that introduced Islam to a Hindu-majority region.</li>
                    </ul>
                  </div>
                  <div className="p-6 rounded-2xl border border-border bg-card">
                    <h3 className="font-bold text-lg mb-3">Cultural Innovations</h3>
                    <p className="text-sm leading-relaxed">Islamic scholars made significant advances in mathematics (Nasir al-Din al-Tusi), medicine, and philosophy. The <strong>House of Wisdom</strong> in Baghdad served as a major center for learning and preservation of Greek texts.</p>
                  </div>
                </div>
              </section>

              <section className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <h2 className="text-3xl font-bold m-0">1.4 & 1.5 Americas and Africa</h2>
                  <p className="text-muted-foreground mt-2">State building in isolation.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 not-prose">
                  <div className="p-6 rounded-2xl bg-muted/30 border border-border">
                    <h3 className="font-bold text-primary mb-3">The Americas</h3>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Maya:</strong> City-states ruled by king-priests; advanced math and astronomy.</li>
                      <li><strong>Aztec (Mexica):</strong> Powerful empire in central Mexico; used a <strong>tribute system</strong> to maintain control.</li>
                      <li><strong>Inca:</strong> Centralized empire in the Andes; used the <strong>Mita system</strong> (mandatory public service).</li>
                    </ul>
                  </div>
                  <div className="p-6 rounded-2xl bg-muted/30 border border-border">
                    <h3 className="font-bold text-primary mb-3">Africa</h3>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Mali:</strong> Wealthy West African kingdom; controlled the gold-salt trade.</li>
                      <li><strong>Great Zimbabwe:</strong> Powerful state in SE Africa known for its massive stone architecture.</li>
                      <li><strong>Ethiopia:</strong> A Christian kingdom in East Africa that remained independent.</li>
                    </ul>
                  </div>
                </div>
              </section>
            </>
          ) : isUnit2 ? (
            <>
              {/* Unit 2 Content: Networks of Exchange */}
              <div className="space-y-6">
                <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex gap-4 items-start not-prose">
                  <Map className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-bold text-primary mb-1">Unit 2: Networks of Exchange (1200-1450)</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      This unit focuses on the intensification of trade routes across Afro-Eurasia and the cultural, technological, and biological consequences of these connections.
                    </p>
                  </div>
                </div>
              </div>

              <section className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <h2 className="text-3xl font-bold m-0">2.1 The Silk Roads</h2>
                  <p className="text-muted-foreground mt-2">The revival of land-based trade.</p>
                </div>
                <p>The Silk Roads connected East Asia to the Mediterranean. Trade flourished under the protection of large empires like the Mongols.</p>
                <div className="grid sm:grid-cols-2 gap-6 not-prose">
                  <div className="p-6 rounded-2xl bg-muted/30 border border-border">
                    <h3 className="font-bold text-primary flex items-center gap-2 mb-3"><Landmark size={18} /> Commercial Innovations</h3>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Caravanserai:</strong> Inns along trade routes where travelers could rest and trade.</li>
                      <li><strong>Flying Cash:</strong> A system of credit that allowed merchants to deposit money in one location and withdraw it in another.</li>
                      <li><strong>Banking Houses:</strong> Established in Europe to facilitate large-scale trade.</li>
                    </ul>
                  </div>
                  <div className="p-6 rounded-2xl bg-muted/30 border border-border">
                    <h3 className="font-bold text-primary flex items-center gap-2 mb-3"><TrendingUp size={18} /> Impact</h3>
                    <p className="text-xs leading-relaxed">Increased demand for luxury goods (silk, porcelain) led to expanded production in China and Persia. Cities like <strong>Kashgar</strong> and <strong>Samarkand</strong> became major centers of trade and culture.</p>
                  </div>
                </div>
              </section>

              <section className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <h2 className="text-3xl font-bold m-0">2.2 The Mongol Empire</h2>
                  <p className="text-muted-foreground mt-2">The largest contiguous land empire.</p>
                </div>
                <p>Under <strong>Genghis Khan</strong>, the Mongols united nomadic tribes and conquered vast territories, creating a period of stability known as the <strong>Pax Mongolica</strong>.</p>
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl border border-border bg-card">
                    <h3 className="font-bold text-lg mb-3">Governance and Trade</h3>
                    <p className="text-sm leading-relaxed">The Mongols facilitated Afro-Eurasian trade and communication as new peoples were drawn into their conquerors' economies and trade networks. They were religiously tolerant and often adopted the cultures of the people they conquered (e.g., the Il-khanate adopting Islam).</p>
                  </div>
                  <div className="p-6 rounded-2xl border border-border bg-card">
                    <h3 className="font-bold text-lg mb-3">The Four Khanates</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li><strong>Golden Horde:</strong> Ruled over Russia.</li>
                      <li><strong>Il-khanate:</strong> Ruled over Persia and the Middle East.</li>
                      <li><strong>Chagatai Khanate:</strong> Central Asia.</li>
                      <li><strong>Yuan Dynasty:</strong> Ruled over China (established by Kublai Khan).</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <h2 className="text-3xl font-bold m-0">2.3 Indian Ocean Trade</h2>
                  <p className="text-muted-foreground mt-2">The maritime Silk Road.</p>
                </div>
                <p>The Indian Ocean trade network connected East Africa, the Middle East, South Asia, and Southeast Asia. It relied on an understanding of environmental patterns.</p>
                <div className="grid md:grid-cols-2 gap-6 not-prose">
                  <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20">
                    <h3 className="font-bold text-blue-600 flex items-center gap-2 mb-3"><Zap size={18} /> Technology</h3>
                    <ul className="space-y-2 text-xs">
                      <li><strong>Monsoon Winds:</strong> Seasonal winds that dictated the timing of voyages.</li>
                      <li><strong>Lateen Sails:</strong> Triangular sails that allowed ships to sail against the wind.</li>
                      <li><strong>Astrolabe & Compass:</strong> Improved navigation and direction-finding.</li>
                    </ul>
                  </div>
                  <div className="p-6 rounded-2xl bg-green-500/5 border border-green-500/20">
                    <h3 className="font-bold text-green-600 flex items-center gap-2 mb-3"><Globe size={18} /> Cultural Exchange</h3>
                    <p className="text-xs leading-relaxed">The spread of Islam led to the rise of <strong>Swahili City-States</strong> in East Africa and the <strong>Sultanate of Malacca</strong> in SE Asia. <strong>Diasporic communities</strong> of merchants introduced their own cultures into other indigenous cultures.</p>
                  </div>
                </div>
              </section>

              <section className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <h2 className="text-3xl font-bold m-0">2.6 Environmental Consequences</h2>
                  <p className="text-muted-foreground mt-2">The spread of disease and crops.</p>
                </div>
                <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6 not-prose">
                  <h3 className="font-bold text-destructive flex items-center gap-2 mb-3"><ShieldAlert size={18} /> The Black Death</h3>
                  <p className="text-sm leading-relaxed">The <strong>Bubonic Plague</strong> spread along trade routes from East Asia to Europe, killing an estimated 1/3 of the European population. This led to labor shortages and the eventual decline of the manorial system in Europe.</p>
                </div>
              </section>
            </>
          ) : isUnit3 ? (
            <>
              {/* Unit 3 Content: Land-Based Empires */}
              <div className="space-y-6">
                <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex gap-4 items-start not-prose">
                  <Info className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-bold text-primary mb-1">Big Picture Overview</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Unit 3 (1450-1750) explores the rise and consolidation of massive land-based empires. These states used gunpowder, religious legitimization, and bureaucratic centralization to expand their borders and maintain control over diverse populations.
                    </p>
                  </div>
                </div>
              </div>

              <section className="space-y-6">
                <h2 className="text-3xl font-bold border-b-2 border-primary/20 pb-2 pt-4">3.1 Empire Expansion</h2>
                <p>The use of gunpowder and armed trade allowed for the rapid expansion of empires across Afro-Eurasia.</p>
                <div className="grid md:grid-cols-2 gap-6 not-prose">
                  <div className="bg-muted/50 rounded-xl p-6 border border-border">
                    <h3 className="text-xl font-bold mb-4 text-primary">The Gunpowder Empires</h3>
                    <ul className="space-y-3 text-sm">
                      <li><strong>Ottoman Empire:</strong> Sunni Muslim state. Conquered Constantinople (1453). Used Janissaries and heavy artillery.</li>
                      <li><strong>Safavid Empire:</strong> Shi'a Muslim state in Persia. Constant conflict with Ottomans.</li>
                      <li><strong>Mughal Empire:</strong> Muslim rulers over Hindu majority in India. Known for religious tolerance under Akbar.</li>
                    </ul>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-6 border border-border">
                    <h3 className="text-xl font-bold mb-4 text-primary">East Asian Expansion</h3>
                    <ul className="space-y-3 text-sm">
                      <li><strong>Manchu (Qing) Dynasty:</strong> Overthrew Ming. Expanded into Taiwan, Tibet, and Mongolia.</li>
                      <li><strong>Russian Empire:</strong> Expanded eastward into Siberia. Peter the Great westernized the military.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-bold border-b-2 border-primary/20 pb-2 pt-4">3.2 Administration & Legitimization</h2>
                <p>Rulers used a variety of methods to legitimize and consolidate their power.</p>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-r-xl">
                    <h3 className="text-xl font-bold mb-2">Bureaucratic Elites</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li><strong>Ottoman Devshirme:</strong> Christian boys taken, converted, and trained as administrators or Janissaries.</li>
                      <li><strong>Japanese Samurai:</strong> Salaried military elite under the Tokugawa Shogunate.</li>
                      <li><strong>Mughal Zamindars:</strong> Local officials who collected taxes for the central government.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-bold border-b-2 border-primary/20 pb-2 pt-4">3.4 Comparison in Land-Based Empires</h2>
                <div className="bg-accent/30 rounded-2xl p-6 not-prose border border-primary/10">
                  <h3 className="font-bold text-lg mb-4">Common Themes of Consolidation</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h4 className="font-bold text-primary flex items-center gap-2"><Users size={18} /> Centralization</h4>
                      <p className="text-sm text-muted-foreground">Shifting power away from local nobles to a central monarch or bureaucracy.</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-primary flex items-center gap-2"><Globe size={18} /> Diversity</h4>
                      <p className="text-sm text-muted-foreground">Managing multi-ethnic and multi-religious populations.</p>
                    </div>
                  </div>
                </div>
              </section>
            </>
          ) : isUnit4 ? (
            <>
              {/* Unit 4 Content: Transoceanic Interconnections */}
              <div className="space-y-6">
                <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex gap-4 items-start not-prose">
                  <Ship className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-bold text-primary mb-1">Unit 4: Transoceanic Interconnections (1450-1750)</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      This era marks the first time in history that the Eastern and Western Hemispheres were permanently linked. This global connection led to the Columbian Exchange, the rise of maritime empires, and a fundamental shift in global economic power from land-based routes to oceanic trade.
                    </p>
                  </div>
                </div>
              </div>

              <section className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <h2 className="text-3xl font-bold m-0">4.1 Technological Innovations</h2>
                  <p className="text-muted-foreground mt-2">The foundation of global exploration.</p>
                </div>
                <p>Knowledge from the Classical, Islamic, and Asian worlds spread to Europe, facilitating new developments in cartography and navigation. Rulers and merchants sought more efficient ways to reach Asian markets, leading to the adoption of several key technologies:</p>
                <div className="grid sm:grid-cols-2 gap-6 not-prose">
                  <div className="p-6 rounded-2xl bg-muted/30 border border-border">
                    <h3 className="font-bold text-primary flex items-center gap-2 mb-3"><Anchor size={18} /> Navigation Tools</h3>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Astrolabe:</strong> Used to determine latitude by measuring the position of the stars.</li>
                      <li><strong>Magnetic Compass:</strong> Originally Chinese; allowed sailors to determine direction even in cloudy weather.</li>
                      <li><strong>Astronomical Charts:</strong> Improved maps of the stars allowed for more precise navigation over open water.</li>
                    </ul>
                  </div>
                  <div className="p-6 rounded-2xl bg-muted/30 border border-border">
                    <h3 className="font-bold text-primary flex items-center gap-2 mb-3"><Ship size={18} /> Ship Designs</h3>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Caravel:</strong> Small, highly maneuverable Portuguese ship with lateen sails.</li>
                      <li><strong>Carrack:</strong> Large, multi-masted ship used for heavy trade (Portuguese).</li>
                      <li><strong>Fluyt:</strong> Dutch cargo ship designed to maximize space and minimize crew size, giving the Dutch a competitive edge in trade.</li>
                    </ul>
                  </div>
                </div>
                <p className="italic text-sm text-muted-foreground">Key Concept: The understanding of global wind and current patterns (like the "volta do mar") was just as critical as the physical tools themselves.</p>
              </section>

              <section className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <h2 className="text-3xl font-bold m-0">4.2 Exploration: Causes and Events</h2>
                  <p className="text-muted-foreground mt-2">The race for global dominance.</p>
                </div>
                <p>State-sponsored transoceanic maritime exploration was driven by the "Three G's": Gold (wealth), Glory (prestige), and God (religious conversion). The fall of Constantinople in 1453 forced Europeans to find new routes to the East.</p>
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl border border-border bg-card">
                    <h3 className="font-bold text-lg mb-3">Portuguese & Spanish Pioneers</h3>
                    <p className="text-sm leading-relaxed">Portugal, led by <strong>Prince Henry the Navigator</strong>, focused on the African coast. <strong>Vasco da Gama</strong> reached India in 1498, establishing a "trading post empire." Spain, seeking a westward route, sponsored <strong>Christopher Columbus</strong> in 1492, leading to the accidental discovery of the Americas.</p>
                  </div>
                  <div className="p-6 rounded-2xl border border-border bg-card">
                    <h3 className="font-bold text-lg mb-3">Northern Atlantic Exploration</h3>
                    <p className="text-sm leading-relaxed">The English, French, and Dutch searched for a <strong>Northwest Passage</strong> to Asia. While they failed to find it, they established lucrative colonies in North America (e.g., Quebec, Jamestown, New Amsterdam) and tapped into the fur trade.</p>
                  </div>
                </div>
              </section>

              <section className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <h2 className="text-3xl font-bold m-0">4.3 The Columbian Exchange</h2>
                  <p className="text-muted-foreground mt-2">The biological collision of two worlds.</p>
                </div>
                <p>The Columbian Exchange was the massive transfer of plants, animals, and diseases between the Eastern and Western Hemispheres. It had profound demographic and environmental consequences.</p>
                <div className="grid md:grid-cols-3 gap-6 not-prose">
                  <div className="p-6 rounded-2xl bg-destructive/5 border border-destructive/20">
                    <h3 className="font-bold text-destructive flex items-center gap-2 mb-3"><HeartPulse size={18} /> Disease</h3>
                    <p className="text-xs leading-relaxed">Smallpox, measles, and influenza decimated indigenous populations (the <strong>Great Dying</strong>), with mortality rates reaching 90% in some areas.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-green-500/5 border border-green-500/20">
                    <h3 className="font-bold text-green-600 flex items-center gap-2 mb-3"><Users size={18} /> Population</h3>
                    <p className="text-xs leading-relaxed">American crops like <strong>potatoes, maize, and manioc</strong> led to massive population growth in Afro-Eurasia due to their high caloric value.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20">
                    <h3 className="font-bold text-blue-600 flex items-center gap-2 mb-3"><TrendingUp size={18} /> Environment</h3>
                    <p className="text-xs leading-relaxed">Deforestation and soil depletion occurred as Europeans introduced plantation agriculture and domesticated animals like cattle and pigs.</p>
                  </div>
                </div>
              </section>

              <section className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <h2 className="text-3xl font-bold m-0">4.4 & 4.5 Maritime Empires Established & Maintained</h2>
                  <p className="text-muted-foreground mt-2">Mercantilism and the global economy.</p>
                </div>
                <p>Europeans established maritime empires through a combination of military force and economic innovation. <strong>Mercantilism</strong> became the dominant economic theory, emphasizing the accumulation of gold and silver through a favorable balance of trade.</p>
                <div className="space-y-6">
                  <div className="bg-muted/30 p-8 rounded-3xl border border-border">
                    <h3 className="font-bold text-xl mb-4">Labor Systems in the Americas</h3>
                    <div className="grid sm:grid-cols-2 gap-6 text-sm">
                      <div className="space-y-2">
                        <p><strong>Encomienda:</strong> Spanish crown granted land and native labor to settlers in exchange for "protection" and Christianization.</p>
                        <p><strong>Hacienda:</strong> Large self-sufficient estates producing for local markets.</p>
                      </div>
                      <div className="space-y-2">
                        <p><strong>Mita System:</strong> Adapted from the Inca; forced labor in silver mines (like Potosi).</p>
                        <p><strong>Chattel Slavery:</strong> People treated as property; became the backbone of the plantation economy (sugar, tobacco).</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded-2xl border border-border bg-card">
                    <h3 className="font-bold text-lg mb-3">Joint-Stock Companies</h3>
                    <p className="text-sm leading-relaxed">The <strong>Dutch East India Company (VOC)</strong> and the <strong>British East India Company</strong> allowed private investors to pool capital for global trade, sharing both risk and profit. These companies often acted as quasi-governments, raising armies and minting money.</p>
                  </div>
                </div>
              </section>

              <section className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <h2 className="text-3xl font-bold m-0">4.6 Challenges to State Power</h2>
                  <p className="text-muted-foreground mt-2">Resistance from within and without.</p>
                </div>
                <p>Imperial expansion was met with significant resistance from indigenous groups and enslaved people:</p>
                <ul className="space-y-4 text-sm">
                  <li><strong>Ana Nzinga:</strong> Queen of Ndongo and Matamba who resisted Portuguese expansion in Africa through diplomacy and warfare.</li>
                  <li><strong>Pueblo Revolt (1680):</strong> Indigenous uprising in modern-day New Mexico that successfully expelled the Spanish for over a decade.</li>
                  <li><strong>Maroon Societies:</strong> Communities of escaped enslaved people in the Caribbean and Brazil who maintained their independence and culture.</li>
                  <li><strong>Metacom's War:</strong> A final major effort by Native Americans in New England to drive out English settlers.</li>
                </ul>
              </section>

              <section className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <h2 className="text-3xl font-bold m-0">4.7 Changing Social Hierarchies</h2>
                  <p className="text-muted-foreground mt-2">The birth of the Casta System.</p>
                </div>
                <p>The meeting of diverse peoples led to the creation of new, rigid social hierarchies, particularly in Latin America:</p>
                <div className="max-w-lg mx-auto bg-muted/30 border border-border rounded-3xl p-8 text-center not-prose">
                  <div className="space-y-4">
                    <div className="p-3 bg-primary text-primary-foreground rounded-xl font-bold">Peninsulares (Born in Spain)</div>
                    <div className="p-3 bg-primary/80 text-primary-foreground rounded-xl font-bold">Creoles (Spanish descent, born in Americas)</div>
                    <div className="p-3 bg-primary/60 text-primary-foreground rounded-xl font-bold">Mestizos (Mixed Spanish/Indigenous)</div>
                    <div className="p-3 bg-primary/40 text-primary-foreground rounded-xl font-bold">Mulattoes (Mixed Spanish/African)</div>
                    <div className="p-3 bg-muted text-muted-foreground rounded-xl font-bold">Indigenous & Enslaved Africans</div>
                  </div>
                </div>
              </section>

              <section className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <h2 className="text-3xl font-bold m-0">4.8 Continuity and Change</h2>
                  <p className="text-muted-foreground mt-2">Synthesizing the era.</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-6 not-prose">
                  <div className="p-6 rounded-2xl border border-border bg-card">
                    <h3 className="font-bold text-primary mb-3">Continuities</h3>
                    <ul className="text-xs space-y-2">
                      <li>Regional trade patterns in the Indian Ocean persisted.</li>
                      <li>Traditional religious beliefs remained strong despite missionary efforts.</li>
                      <li>Land-based empires (Ottoman, Qing) remained powerful players.</li>
                    </ul>
                  </div>
                  <div className="p-6 rounded-2xl border border-border bg-card">
                    <h3 className="font-bold text-primary mb-3">Changes</h3>
                    <ul className="text-xs space-y-2">
                      <li>Global circulation of silver (Potosi to China).</li>
                      <li>Rise of syncretic religions (Santeria, Vodun).</li>
                      <li>Shift of economic power to maritime nations.</li>
                    </ul>
                  </div>
                </div>
              </section>
            </>
          ) : isUnit5 ? (
            <>
              {/* Unit 5 Content: Revolutions */}
              <div className="space-y-6">
                <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex gap-4 items-start not-prose">
                  <Scale className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-bold text-primary mb-1">Unit 5: Revolutions (1750-1900)</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      This era is defined by two seismic shifts: the Enlightenment-led political revolutions that challenged monarchies, and the Industrial Revolution that fundamentally altered how humans produced goods and lived their lives.
                    </p>
                  </div>
                </div>
              </div>

              <section className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <h2 className="text-3xl font-bold m-0">5.1 The Enlightenment</h2>
                  <p className="text-muted-foreground mt-2">The age of reason.</p>
                </div>
                <p>The Enlightenment applied new ways of understanding and empiricism to human relationships and politics. It challenged traditional authority and promoted individual rights.</p>
                <div className="grid sm:grid-cols-2 gap-6 not-prose">
                  <div className="p-6 rounded-2xl bg-muted/30 border border-border">
                    <h3 className="font-bold text-primary mb-3">Core Concepts</h3>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Natural Rights:</strong> Locke's idea of life, liberty, and property.</li>
                      <li><strong>Social Contract:</strong> The agreement between the governed and the government.</li>
                      <li><strong>Separation of Powers:</strong> Montesquieu's 3-branch system.</li>
                    </ul>
                  </div>
                  <div className="p-6 rounded-2xl bg-muted/30 border border-border">
                    <h3 className="font-bold text-primary mb-3">Social Impact</h3>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Abolitionism:</strong> Movement to end slavery and serfdom.</li>
                      <li><strong>Feminism:</strong> Wollstonecraft and de Gouges argued for women's rights.</li>
                      <li><strong>Secularism:</strong> Questioning the role of religion in public life.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <h2 className="text-3xl font-bold m-0">5.2 Nationalism and Revolutions</h2>
                  <p className="text-muted-foreground mt-2">The fall of monarchies.</p>
                </div>
                <p>Enlightenment ideas sparked a wave of revolutions across the Atlantic world, leading to the creation of new nation-states.</p>
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div className="p-6 rounded-2xl border border-border bg-card">
                      <h3 className="font-bold mb-2">American Revolution (1776)</h3>
                      <p>Colonists revolted against British rule, citing "no taxation without representation." Resulted in the first modern republic.</p>
                    </div>
                    <div className="p-6 rounded-2xl border border-border bg-card">
                      <h3 className="font-bold mb-2">French Revolution (1789)</h3>
                      <p>The Third Estate revolted against the monarchy and nobility. Led to the <strong>Declaration of the Rights of Man</strong> and the Reign of Terror.</p>
                    </div>
                    <div className="p-6 rounded-2xl border border-border bg-card">
                      <h3 className="font-bold mb-2">Haitian Revolution (1791)</h3>
                      <p>Led by <strong>Toussaint L'Ouverture</strong>, it was the only successful slave revolt in history, resulting in an independent black republic.</p>
                    </div>
                    <div className="p-6 rounded-2xl border border-border bg-card">
                      <h3 className="font-bold mb-2">Latin American Revolutions</h3>
                      <p><strong>Simon Bolivar</strong> led movements to liberate South America from Spanish rule, as detailed in his <strong>Jamaica Letter</strong>.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <h2 className="text-3xl font-bold m-0">5.3 & 5.4 Industrial Revolution Begins & Spreads</h2>
                  <p className="text-muted-foreground mt-2">The birth of the factory system.</p>
                </div>
                <p>The Industrial Revolution began in Great Britain due to a unique combination of factors: access to coal/iron, proximity to waterways, urbanization, and legal protection of private property.</p>
                <div className="bg-muted/30 p-8 rounded-3xl border border-border not-prose">
                  <h3 className="font-bold text-xl mb-4 flex items-center gap-2"><Factory size={20} /> Global Spread</h3>
                  <div className="grid sm:grid-cols-3 gap-6 text-sm">
                    <div className="space-y-2">
                      <h4 className="font-bold text-primary">United States</h4>
                      <p>Rapid industrialization in the North, fueled by textile mills and massive railroad expansion.</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-primary">Russia</h4>
                      <p>State-sponsored industrialization focused on heavy industry and the <strong>Trans-Siberian Railroad</strong>.</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-primary">Japan</h4>
                      <p>The <strong>Meiji Restoration</strong> saw Japan rapidly modernize to avoid Western colonization.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <h2 className="text-3xl font-bold m-0">5.5 & 5.6 Technology & Government's Role</h2>
                  <p className="text-muted-foreground mt-2">Steam, steel, and state power.</p>
                </div>
                <p>The <strong>Steam Engine</strong> (James Watt) was the defining technology of the first phase, while the <strong>Second Industrial Revolution</strong> focused on steel, chemicals, and electricity.</p>
                <div className="p-6 rounded-2xl border border-border bg-card">
                  <h3 className="font-bold text-lg mb-3">State-Sponsored Industrialization</h3>
                  <p className="text-sm leading-relaxed">In Egypt, <strong>Muhammad Ali</strong> attempted to industrialize the textile industry to compete with Europe. In Japan, the government built factories and then sold them to private investors (zaibatsu) to jumpstart the economy.</p>
                </div>
              </section>

              <section className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <h2 className="text-3xl font-bold m-0">5.7 & 5.8 Economic Innovations & Reactions</h2>
                  <p className="text-muted-foreground mt-2">Capitalism vs. Socialism.</p>
                </div>
                <p>The rise of industrial capitalism led to new business structures and intense social criticism.</p>
                <div className="grid sm:grid-cols-2 gap-6 not-prose">
                  <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20">
                    <h3 className="font-bold text-blue-600 mb-3 flex items-center gap-2"><Landmark size={18} /> Innovations</h3>
                    <ul className="text-xs space-y-2">
                      <li><strong>Transnational Businesses:</strong> HSBC, Unilever.</li>
                      <li><strong>Limited Liability:</strong> Protected investors from personal debt.</li>
                      <li><strong>Stock Markets:</strong> Allowed for massive capital accumulation.</li>
                    </ul>
                  </div>
                  <div className="p-6 rounded-2xl bg-orange-500/5 border border-orange-500/20">
                    <h3 className="font-bold text-orange-600 mb-3 flex items-center gap-2"><Swords size={18} /> Reactions</h3>
                    <ul className="text-xs space-y-2">
                      <li><strong>Labor Unions:</strong> Fought for better wages and 8-hour days.</li>
                      <li><strong>Marxism:</strong> Karl Marx argued for a workers' revolution to end class struggle.</li>
                      <li><strong>Tanzimat Reforms:</strong> Ottoman attempt to modernize and secularize.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <h2 className="text-3xl font-bold m-0">5.9 Society and the Industrial Age</h2>
                  <p className="text-muted-foreground mt-2">Urbanization and new classes.</p>
                </div>
                <p>Industrialization fundamentally changed the social fabric of the world:</p>
                <div className="grid sm:grid-cols-3 gap-4 text-sm">
                  <div className="p-4 rounded-xl border border-border bg-muted/30">
                    <h4 className="font-bold text-primary">Urbanization</h4>
                    <p className="text-xs mt-1">Mass migration to cities led to overcrowding, pollution, and disease in tenements.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-border bg-muted/30">
                    <h4 className="font-bold text-primary">New Classes</h4>
                    <p className="text-xs mt-1">Rise of the <strong>Middle Class</strong> (white collar) and the <strong>Working Class</strong> (proletariat).</p>
                  </div>
                  <div className="p-4 rounded-xl border border-border bg-muted/30">
                    <h4 className="font-bold text-primary">Gender Roles</h4>
                    <p className="text-xs mt-1">The <strong>Cult of Domesticity</strong> for middle-class women; working-class women in factories.</p>
                  </div>
                </div>
              </section>

              <section className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <h2 className="text-3xl font-bold m-0">5.10 Continuity and Change</h2>
                  <p className="text-muted-foreground mt-2">Synthesizing the era.</p>
                </div>
                <div className="bg-accent/30 rounded-2xl p-6 border border-primary/10">
                  <ul className="space-y-3 text-sm">
                    <li>✅ <strong>Change:</strong> Shift from human/animal power to fossil fuels (coal, oil).</li>
                    <li>✅ <strong>Change:</strong> Global integration through steamships and telegraphs.</li>
                    <li>🔄 <strong>Continuity:</strong> Persistence of patriarchy and social hierarchies, though the basis shifted from land to capital.</li>
                  </ul>
                </div>
              </section>
            </>
          ) : (
            <div className="text-center py-12 space-y-4">
              <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Clock className="text-primary" size={32} />
              </div>
              <h2 className="text-2xl font-bold">Coming Soon</h2>
              <p className="text-muted-foreground">The study guide for Unit {unit.id} is currently being drafted. Check back soon!</p>
              <Button asChild variant="outline" className="rounded-xl">
                <Link to="/units/ap-world">Back to Units</Link>
              </Button>
            </div>
          )}
        </motion.div>

        <footer className="flex justify-between items-center pt-8">
          <div className="text-sm text-muted-foreground">
            Ready to test your knowledge?
          </div>
          <div className="flex gap-3">
            <Button asChild variant="outline" className="rounded-xl">
              <Link to={`/units/ap-world/flashcards/${unit.id}`}>Practice Cards</Link>
            </Button>
            <Button asChild className="rounded-xl">
              <Link to={`/units/ap-world/quiz/${unit.id}`}>Take Quiz</Link>
            </Button>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default StudyGuide;