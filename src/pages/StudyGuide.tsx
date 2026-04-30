import { useParams, useNavigate, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { units } from "@/data/content";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Clock, MapPin, Info, Download, Globe, Ship, Users, ShieldAlert, Zap, Factory, Landmark, Scale, Anchor, Swords, TrendingUp, HeartPulse, Landmark as Government, ScrollText, Map, Target, AlertTriangle } from "lucide-react";
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
  const isUnit6 = unit.id === 6;

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
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <h2 className="text-3xl font-bold m-0">5.3 & 5.4 Industrial Revolution</h2>
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
            </>
          ) : isUnit6 ? (
            <>
              {/* Unit 6 Content: Consequences of Industrialization */}
              <div className="space-y-6">
                <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex gap-4 items-start not-prose">
                  <Target className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-bold text-primary mb-1">Unit 6: Consequences of Industrialization (1750-1900)</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      This unit examines how industrialization fueled a new wave of imperialism. Western powers and Japan used their technological superiority to establish vast empires, leading to global resistance and significant environmental and social changes.
                    </p>
                  </div>
                </div>
              </div>

              <section className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <h2 className="text-3xl font-bold m-0">6.1 Rationales for Imperialism</h2>
                  <p className="text-muted-foreground mt-2">Justifying global dominance.</p>
                </div>
                <p>Imperialist powers used a variety of cultural, religious, and racial ideologies to justify their expansion:</p>
                <div className="grid sm:grid-cols-2 gap-6 not-prose">
                  <div className="p-6 rounded-2xl bg-muted/30 border border-border">
                    <h3 className="font-bold text-primary flex items-center gap-2 mb-3"><Users size={18} /> Social Darwinism</h3>
                    <p className="text-sm leading-relaxed">The application of "survival of the fittest" to human societies, suggesting that Western nations were naturally superior and destined to rule others.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-muted/30 border border-border">
                    <h3 className="font-bold text-primary flex items-center gap-2 mb-3"><Globe size={18} /> Civilizing Mission</h3>
                    <p className="text-sm leading-relaxed">The belief that it was the duty of Europeans to bring "civilization" (Christianity, education, and technology) to the "uncivilized" world.</p>
                  </div>
                </div>
              </section>

              <section className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <h2 className="text-3xl font-bold m-0">6.2 State Expansion</h2>
                  <p className="text-muted-foreground mt-2">The Scramble for Africa and Asia.</p>
                </div>
                <p>The <strong>Berlin Conference (1884-1885)</strong> formalized the "Scramble for Africa," where European powers divided the continent without regard for indigenous borders.</p>
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl border border-border bg-card">
                    <h3 className="font-bold text-lg mb-3">Key Imperial Powers</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li><strong>Great Britain:</strong> Established the "British Raj" in India and controlled vast territories in Africa and Southeast Asia.</li>
                      <li><strong>Belgium:</strong> King Leopold II established the <strong>Congo Free State</strong> as a private, brutal rubber-extracting colony.</li>
                      <li><strong>Japan:</strong> Modernized during the Meiji era and expanded into Korea and Taiwan.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <h2 className="text-3xl font-bold m-0">6.3 Indigenous Responses</h2>
                  <p className="text-muted-foreground mt-2">Resistance and Rebellion.</p>
                </div>
                <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6 not-prose">
                  <h3 className="font-bold text-destructive flex items-center gap-2 mb-3"><AlertTriangle size={18} /> Major Rebellions</h3>
                  <ul className="space-y-3 text-sm">
                    <li><strong>Sepoy Mutiny (1857):</strong> Indian soldiers revolted against British rule, leading to direct control by the British Crown.</li>
                    <li><strong>Xhosa Cattle-Killing Movement:</strong> A spiritual movement in South Africa that aimed to drive out the British but resulted in famine.</li>
                    <li><strong>Ghost Dance:</strong> A Native American movement in the US intended to restore traditional ways and remove white settlers.</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <h2 className="text-3xl font-bold m-0">6.4 Global Economic Development</h2>
                  <p className="text-muted-foreground mt-2">The rise of export economies.</p>
                </div>
                <p>Imperialism turned colonies into <strong>export economies</strong>, focused on providing raw materials for industrial nations:</p>
                <div className="grid md:grid-cols-3 gap-4 text-sm not-prose">
                  <div className="p-4 rounded-xl border border-border bg-muted/30">
                    <h4 className="font-bold text-primary">Cotton</h4>
                    <p className="text-xs mt-1">Produced in Egypt and India to fuel British textile mills.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-border bg-muted/30">
                    <h4 className="font-bold text-primary">Rubber</h4>
                    <p className="text-xs mt-1">Extracted from the Congo and Amazon for tires and machinery.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-border bg-muted/30">
                    <h4 className="font-bold text-primary">Guano</h4>
                    <p className="text-xs mt-1">Bird droppings from Peru used as fertilizer for industrial agriculture.</p>
                  </div>
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