import { useParams, useNavigate, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { units } from "@/data/content";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Clock, MapPin, Info, Download, Globe, Ship, Users, ShieldAlert, Zap, Factory, Landmark, Scale } from "lucide-react";
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
          className="prose prose-slate dark:prose-invert max-w-none bg-card border border-border rounded-3xl p-8 sm:p-12 shadow-sm space-y-12"
        >
          {isUnit1 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold">Unit 1: The Global Tapestry</h2>
              <p className="text-muted-foreground">Content for Unit 1 is available in the previous version.</p>
            </div>
          ) : isUnit2 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold">Unit 2: Networks of Exchange</h2>
              <p className="text-muted-foreground">Content for Unit 2 is available in the previous version.</p>
            </div>
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

                <div className="grid md:grid-cols-3 gap-4 not-prose">
                  <div className="border border-border rounded-xl p-4 bg-muted/30">
                    <div className="text-2xl font-bold text-primary">1453</div>
                    <div className="text-xs text-muted-foreground">Fall of Constantinople</div>
                  </div>
                  <div className="border border-border rounded-xl p-4 bg-muted/30">
                    <div className="text-2xl font-bold">1644</div>
                    <div className="text-xs text-muted-foreground">Rise of Qing Dynasty</div>
                  </div>
                  <div className="border border-border rounded-xl p-4 bg-muted/30">
                    <div className="text-2xl font-bold text-primary">1750</div>
                    <div className="text-xs text-muted-foreground">Period End</div>
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
                      <li>
                        <span className="font-bold">Ottoman Empire:</span>
                        <p className="mt-1">Sunni Muslim state. Conquered Constantinople (1453). Used Janissaries (elite slave soldiers) and heavy artillery.</p>
                      </li>
                      <li>
                        <span className="font-bold">Safavid Empire:</span>
                        <p className="mt-1">Shi'a Muslim state in Persia. Constant conflict with Ottomans over religious and territorial disputes.</p>
                      </li>
                      <li>
                        <span className="font-bold">Mughal Empire:</span>
                        <p className="mt-1">Muslim rulers over Hindu majority in India. Known for religious tolerance under Akbar and architectural feats like the Taj Mahal.</p>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-6 border border-border">
                    <h3 className="text-xl font-bold mb-4 text-primary">East Asian Expansion</h3>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <span className="font-bold">Manchu (Qing) Dynasty:</span>
                        <p className="mt-1">Overthrew Ming. Expanded into Taiwan, Tibet, and Mongolia. Maintained distinct Manchu identity while using Chinese bureaucracy.</p>
                      </li>
                      <li>
                        <span className="font-bold">Russian Empire:</span>
                        <p className="mt-1">Expanded eastward into Siberia. Peter the Great westernized the military and administration to compete with Europe.</p>
                      </li>
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

                  <div className="border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/20 p-6 rounded-r-xl">
                    <h3 className="text-xl font-bold mb-2">Religious Legitimization</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li><strong>Divine Right:</strong> European monarchs (like Louis XIV) claimed authority directly from God.</li>
                      <li><strong>Songhai Islam:</strong> Rulers promoted Islam to unify the empire and facilitate trade.</li>
                      <li><strong>Aztec Sacrifice:</strong> Public rituals demonstrated the state's role in maintaining cosmic order.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-bold border-b-2 border-primary/20 pb-2 pt-4">3.4 Comparison in Land-Based Empires</h2>
                <p>While each empire was unique, they all faced the challenge of governing large, diverse territories.</p>
                
                <div className="bg-accent/30 rounded-2xl p-6 not-prose border border-primary/10">
                  <h3 className="font-bold text-lg mb-4">Common Themes of Consolidation</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h4 className="font-bold text-primary flex items-center gap-2">
                        <Users size={18} /> Centralization
                      </h4>
                      <p className="text-sm text-muted-foreground">Shifting power away from local nobles to a central monarch or bureaucracy.</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-primary flex items-center gap-2">
                        <Globe size={18} /> Diversity
                      </h4>
                      <p className="text-sm text-muted-foreground">Managing multi-ethnic and multi-religious populations (e.g., Ottoman Millet system vs. Mughal tolerance).</p>
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
                    <h3 className="font-bold text-primary mb-1">Big Picture Overview</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Unit 4 (1450-1750) marks the first time in history that the Eastern and Western Hemispheres were permanently linked. This led to the Columbian Exchange, the rise of maritime empires, and a global shift in economic power.
                    </p>
                  </div>
                </div>
              </div>

              <section className="space-y-6">
                <h2 className="text-3xl font-bold border-b-2 border-primary/20 pb-2 pt-4">4.1 Technological Innovations</h2>
                <p>Cross-cultural interactions resulted in the diffusion of technology and facilitated European exploration.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 not-prose">
                  {[
                    { name: "Lateen Sail", desc: "Triangular sail for windward sailing" },
                    { name: "Astrolabe", desc: "Determined latitude using stars" },
                    { name: "Caravel", desc: "Small, fast Portuguese ship" },
                    { name: "Fluyt", desc: "Dutch cargo ship (maximized space)" },
                    { name: "Compass", desc: "Directional navigation" },
                    { name: "Carrack", desc: "Large ocean-going vessel" }
                  ].map((tech) => (
                    <div key={tech.name} className="p-4 rounded-xl border border-border bg-muted/30">
                      <div className="font-bold text-primary text-sm">{tech.name}</div>
                      <div className="text-[10px] text-muted-foreground">{tech.desc}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-bold border-b-2 border-primary/20 pb-2 pt-4">4.2 & 4.3 Exploration & The Columbian Exchange</h2>
                <p>State-sponsored exploration led to the massive exchange of biological and cultural materials.</p>
                
                <div className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-6 not-prose">
                  <h3 className="font-bold text-blue-600 mb-4 flex items-center gap-2">
                    <Globe size={20} /> The Columbian Exchange
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <div className="text-xs font-bold uppercase text-blue-600/60">To the Americas</div>
                      <ul className="text-sm space-y-1">
                        <li>🦠 <strong>Disease:</strong> Smallpox, Measles (90% death rate)</li>
                        <li>🐎 <strong>Animals:</strong> Horses, Pigs, Cattle</li>
                        <li>🌾 <strong>Crops:</strong> Sugar, Wheat, Coffee</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <div className="text-xs font-bold uppercase text-blue-600/60">To Afro-Eurasia</div>
                      <ul className="text-sm space-y-1">
                        <li>🥔 <strong>Crops:</strong> Potatoes, Maize (Pop. growth)</li>
                        <li>🍅 <strong>Crops:</strong> Tomatoes, Chili peppers</li>
                        <li>🚬 <strong>Luxury:</strong> Tobacco, Cacao</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-bold border-b-2 border-primary/20 pb-2 pt-4">4.4 & 4.5 Maritime Empires Established & Maintained</h2>
                <p>Europeans established trading posts and colonies, utilizing mercantilism and joint-stock companies.</p>
                
                <div className="space-y-4">
                  <div className="p-6 rounded-xl border border-border bg-card">
                    <h3 className="font-bold text-lg mb-2">Labor Systems in the Americas</h3>
                    <ul className="list-disc list-inside text-sm space-y-2">
                      <li><strong>Encomienda:</strong> Spanish settlers granted land and native labor.</li>
                      <li><strong>Hacienda:</strong> Large estates producing for local markets.</li>
                      <li><strong>Mita:</strong> Adapted Incan labor tax for silver mining (Potosi).</li>
                      <li><strong>Chattel Slavery:</strong> People treated as property; basis of plantation economies.</li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-xl border border-border bg-card">
                    <h3 className="font-bold text-lg mb-2">Mercantilism & Trade</h3>
                    <p className="text-sm">Economic theory that trade generates wealth. States sought a <strong>favorable balance of trade</strong> (more exports than imports) and accumulated gold/silver.</p>
                    <div className="mt-4 p-4 bg-muted rounded-lg text-xs italic">
                      "Joint-stock companies (VOC, British East India Co.) allowed private investors to share the risk and profit of global trade."
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-bold border-b-2 border-primary/20 pb-2 pt-4">4.6 Challenges to State Power</h2>
                <p>Resistance to imperial expansion came from both internal and external sources.</p>
                <div className="grid sm:grid-cols-2 gap-4 not-prose">
                  <div className="p-4 rounded-xl border border-destructive/20 bg-destructive/5">
                    <h4 className="font-bold text-destructive flex items-center gap-2">
                      <ShieldAlert size={16} /> Pueblo Revolt (1680)
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">Indigenous uprising against Spanish religious and labor oppression in modern-day New Mexico.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-destructive/20 bg-destructive/5">
                    <h4 className="font-bold text-destructive flex items-center gap-2">
                      <ShieldAlert size={16} /> Metacom's War (1675)
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">Final major effort by Native Americans of southern New England to drive out English settlers.</p>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-bold border-b-2 border-primary/20 pb-2 pt-4">4.7 Changing Social Hierarchies</h2>
                <p>The Casta System in Latin America was a rigid hierarchy based on racial ancestry.</p>
                <div className="max-w-md mx-auto border border-border rounded-2xl overflow-hidden not-prose">
                  <div className="bg-primary/10 p-3 text-center font-bold text-primary border-b border-border">The Casta System</div>
                  <div className="p-4 space-y-2 text-sm text-center">
                    <div className="font-bold">Peninsulares</div>
                    <div className="text-muted-foreground text-xs">Born in Spain</div>
                    <div className="h-px bg-border w-1/2 mx-auto" />
                    <div className="font-bold">Creoles</div>
                    <div className="text-muted-foreground text-xs">Spanish descent, born in Americas</div>
                    <div className="h-px bg-border w-1/2 mx-auto" />
                    <div className="font-bold">Mestizos / Mulattoes</div>
                    <div className="text-muted-foreground text-xs">Mixed ancestry</div>
                    <div className="h-px bg-border w-1/2 mx-auto" />
                    <div className="font-bold text-muted-foreground">Indigenous / Enslaved Africans</div>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-bold border-b-2 border-primary/20 pb-2 pt-4">4.8 Continuity and Change</h2>
                <p>While global trade expanded, many regional trade patterns and cultural traditions persisted.</p>
                <div className="bg-muted/30 p-6 rounded-2xl border border-border">
                  <ul className="space-y-3 text-sm">
                    <li>✅ <strong>Change:</strong> Global circulation of silver (Potosi to China).</li>
                    <li>✅ <strong>Change:</strong> Syncretic religions (Santeria, Virgin of Guadalupe).</li>
                    <li>🔄 <strong>Continuity:</strong> Indian Ocean trade remained dominated by Asian merchants for much of the period.</li>
                  </ul>
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
                    <h3 className="font-bold text-primary mb-1">Big Picture Overview</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Unit 5 (1750-1900) is defined by two major shifts: the Enlightenment-led political revolutions and the Industrial Revolution. These forces fundamentally reshaped global politics, economics, and social structures.
                    </p>
                  </div>
                </div>
              </div>

              <section className="space-y-6">
                <h2 className="text-3xl font-bold border-b-2 border-primary/20 pb-2 pt-4">5.1 The Enlightenment</h2>
                <p>The Enlightenment applied new ways of understanding and empiricism to human relationships and politics.</p>
                <div className="grid sm:grid-cols-2 gap-4 not-prose">
                  <div className="p-4 rounded-xl border border-border bg-card">
                    <h4 className="font-bold text-primary">Natural Rights</h4>
                    <p className="text-xs text-muted-foreground mt-1">John Locke's idea that all humans are born with rights to life, liberty, and property.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-border bg-card">
                    <h4 className="font-bold text-primary">Social Contract</h4>
                    <p className="text-xs text-muted-foreground mt-1">The agreement between people and government; if government fails, people can overthrow it.</p>
                  </div>
                </div>
                <div className="bg-muted/30 p-6 rounded-2xl border border-border">
                  <h3 className="font-bold text-lg mb-3">Key Thinkers</h3>
                  <ul className="text-sm space-y-2">
                    <li><strong>Montesquieu:</strong> Separation of powers (3 branches).</li>
                    <li><strong>Voltaire:</strong> Religious tolerance and freedom of speech.</li>
                    <li><strong>Adam Smith:</strong> Laissez-faire economics (The Wealth of Nations).</li>
                    <li><strong>Mary Wollstonecraft:</strong> Early feminism; argued for women's education.</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-bold border-b-2 border-primary/20 pb-2 pt-4">5.2 Nationalism and Revolutions</h2>
                <p>Enlightenment ideas led to a wave of revolutions against monarchies and colonial rule.</p>
                <div className="space-y-4">
                  <div className="p-6 rounded-xl border border-border bg-card">
                    <h3 className="font-bold text-lg mb-2">Major Revolutions</h3>
                    <ul className="list-disc list-inside text-sm space-y-2">
                      <li><strong>American Revolution (1776):</strong> First successful use of Enlightenment ideas to gain independence.</li>
                      <li><strong>French Revolution (1789):</strong> Overthrew absolute monarchy; "Liberty, Equality, Fraternity."</li>
                      <li><strong>Haitian Revolution (1791):</strong> Only successful slave revolt in history; led by Toussaint L'Ouverture.</li>
                      <li><strong>Latin American Revolutions:</strong> Simon Bolivar led movements to liberate South America from Spain.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-bold border-b-2 border-primary/20 pb-2 pt-4">5.3 - 5.5 The Industrial Revolution</h2>
                <p>The transition to new manufacturing processes began in Great Britain and spread globally.</p>
                <div className="grid sm:grid-cols-2 gap-6 not-prose">
                  <div className="bg-muted/50 rounded-xl p-6 border border-border">
                    <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
                      <Factory size={20} /> Why Britain?
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>✅ Access to coal and iron</li>
                      <li>✅ Proximity to waterways</li>
                      <li>✅ Urbanization (Enclosure Movement)</li>
                      <li>✅ Legal protection of private property</li>
                    </ul>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-6 border border-border">
                    <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
                      <Zap size={20} /> Key Technologies
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>🔥 <strong>Steam Engine:</strong> James Watt (powered factories/ships)</li>
                      <li>🚂 <strong>Railroads:</strong> Mass transport of goods/people</li>
                      <li>⚡ <strong>Electricity:</strong> Second Industrial Revolution</li>
                      <li>🏗️ <strong>Bessemer Process:</strong> Mass production of steel</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-bold border-b-2 border-primary/20 pb-2 pt-4">5.6 - 5.8 Global Responses & Economics</h2>
                <p>States and individuals responded to industrialization in diverse ways.</p>
                <div className="space-y-4">
                  <div className="p-6 rounded-xl border border-border bg-card">
                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <Landmark size={20} /> State-Sponsored Industrialization
                    </h3>
                    <p className="text-sm">Some governments led industrialization to catch up with the West:</p>
                    <ul className="list-disc list-inside text-sm mt-2">
                      <li><strong>Meiji Restoration (Japan):</strong> Rapidly modernized to avoid colonization.</li>
                      <li><strong>Muhammad Ali (Egypt):</strong> Built textile factories and modernized the military.</li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-xl border border-border bg-card">
                    <h3 className="font-bold text-lg mb-2">Economic Ideologies</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="p-3 bg-muted rounded-lg">
                        <h4 className="font-bold text-sm">Capitalism</h4>
                        <p className="text-xs">Private ownership, free markets, profit motive (Adam Smith).</p>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <h4 className="font-bold text-sm">Communism</h4>
                        <p className="text-xs">State ownership, classless society, workers' revolt (Karl Marx).</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-bold border-b-2 border-primary/20 pb-2 pt-4">5.9 Society and the Industrial Age</h2>
                <p>Industrialization fundamentally changed how people lived and worked.</p>
                <div className="grid sm:grid-cols-3 gap-4 not-prose">
                  <div className="p-4 rounded-xl border border-border bg-muted/30">
                    <h4 className="font-bold text-primary text-sm">Urbanization</h4>
                    <p className="text-[10px] text-muted-foreground">Mass migration to cities; led to overcrowding and pollution.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-border bg-muted/30">
                    <h4 className="font-bold text-primary text-sm">New Classes</h4>
                    <p className="text-[10px] text-muted-foreground">Rise of the middle class (bourgeoisie) and working class (proletariat).</p>
                  </div>
                  <div className="p-4 rounded-xl border border-border bg-muted/30">
                    <h4 className="font-bold text-primary text-sm">Gender Roles</h4>
                    <p className="text-[10px] text-muted-foreground">Cult of Domesticity for middle class; working class women in factories.</p>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-bold border-b-2 border-primary/20 pb-2 pt-4">5.10 Continuity and Change</h2>
                <div className="bg-accent/30 rounded-2xl p-6 border border-primary/10">
                  <ul className="space-y-3 text-sm">
                    <li>✅ <strong>Change:</strong> Shift from human/animal power to fossil fuels.</li>
                    <li>✅ <strong>Change:</strong> Rise of global trade and transnational businesses (HSBC, Unilever).</li>
                    <li>🔄 <strong>Continuity:</strong> Persistence of social hierarchies, though the basis shifted from land to capital.</li>
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