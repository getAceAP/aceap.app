import { useParams, useNavigate, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { units } from "@/data/content";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Clock, MapPin, Info, Download } from "lucide-react";
import { motion } from "framer-motion";

const StudyGuide = () => {
  const { unitId } = useParams();
  const navigate = useNavigate();
  const unit = units.find((u) => u.id === Number(unitId));

  if (!unit) return null;

  const isUnit1 = unit.id === 1;
  const isUnit2 = unit.id === 2;
  const isUnit3 = unit.id === 3;

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
            <>
              {/* Unit 1 Content */}
              <div className="space-y-6">
                <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex gap-4 items-start not-prose">
                  <Info className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-bold text-primary mb-1">Big Picture Overview</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Unit 1 (1200-1450) examines how states across the globe established and maintained power through religious legitimization, bureaucratic innovations, and trade expansion.
                    </p>
                  </div>
                </div>
                {/* ... rest of unit 1 content ... */}
              </div>
            </>
          ) : isUnit2 ? (
            <>
              {/* Unit 2 Content */}
              <div className="space-y-6">
                <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex gap-4 items-start not-prose">
                  <Info className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-bold text-primary mb-1">Big Picture Overview</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Unit 2 (1200-1450) focuses on the intensification of existing trade networks and the creation of new ones.
                    </p>
                  </div>
                </div>
                {/* ... rest of unit 2 content ... */}
              </div>
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

                  <div className="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/20 p-6 rounded-r-xl">
                    <h3 className="text-xl font-bold mb-2">Monumental Architecture</h3>
                    <p className="text-sm">Rulers built massive structures to display power and wealth:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm mt-2">
                      <li>Versailles (France)</li>
                      <li>Taj Mahal (Mughal India)</li>
                      <li>Forbidden City (Ming/Qing China)</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-bold border-b-2 border-primary/20 pb-2 pt-4">3.3 Belief Systems</h2>
                <p>The period saw significant changes and continuities in religious traditions.</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl border border-border bg-card">
                    <h3 className="font-bold text-lg mb-3">Protestant Reformation</h3>
                    <p className="text-sm leading-relaxed">
                      Martin Luther's 95 Theses (1517) challenged Catholic corruption. Led to permanent split in Western Christianity and decades of religious wars (e.g., Thirty Years War).
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl border border-border bg-card">
                    <h3 className="font-bold text-lg mb-3">Sikhism</h3>
                    <p className="text-sm leading-relaxed">
                      Emerging in South Asia, Sikhism blended elements of Hinduism and Islam, emphasizing equality and devotion to one God.
                    </p>
                  </div>
                </div>
              </section>

              <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 mt-8 not-prose">
                <h3 className="text-xl font-bold mb-3 text-primary">Unit 3 Summary Table</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-primary/20">
                        <th className="py-2 text-left">Empire</th>
                        <th className="py-2 text-left">Legitimization</th>
                        <th className="py-2 text-left">Military</th>
                        <th className="py-2 text-left">Conflict</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="py-2 font-medium text-foreground">Ottoman</td>
                        <td className="py-2">Islam, Architecture</td>
                        <td className="py-2">Janissaries</td>
                        <td className="py-2">vs. Safavids</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2 font-medium text-foreground">Mughal</td>
                        <td className="py-2">Tolerance, Taj Mahal</td>
                        <td className="py-2">Gunpowder</td>
                        <td className="py-2">Internal revolts</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2 font-medium text-foreground">France</td>
                        <td className="py-2">Divine Right, Versailles</td>
                        <td className="py-2">Professional Army</td>
                        <td className="py-2">Religious Wars</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
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