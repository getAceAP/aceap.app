import { useParams, useNavigate, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { units } from "@/data/content";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Clock, MapPin, Info } from "lucide-react";
import { motion } from "framer-motion";

const StudyGuide = () => {
  const { unitId } = useParams();
  const navigate = useNavigate();
  const unit = units.find((u) => u.id === Number(unitId));

  if (!unit) return null;

  const isUnit1 = unit.id === 1;

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="space-y-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate("/units/ap-world")} 
            className="text-muted-foreground -ml-2"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Units
          </Button>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
              <BookOpen size={14} />
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
          className="prose prose-slate dark:prose-invert max-w-none bg-card border border-border rounded-3xl p-8 sm:p-12 shadow-sm"
        >
          {isUnit1 ? (
            <div className="space-y-12">
              <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex gap-4 items-start not-prose">
                <Info className="text-primary shrink-0 mt-1" size={20} />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>Big Picture:</strong> This unit focuses on how states established and maintained their power across the globe between 1200 and 1450. Look for patterns of <strong>continuity</strong> (traditions staying the same) and <strong>innovation</strong> (new technologies or systems).
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-bold border-b pb-2 text-primary">1.1 Developments in East Asia</h2>
                <p>The <strong>Song Dynasty</strong> (960-1279) utilized traditional methods of Confucianism and an imperial bureaucracy to maintain and justify its rule.</p>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Government & Social Structure</h3>
                    <ul>
                      <li><strong>Imperial Bureaucracy:</strong> A vast organization in which appointed officials carried out the empire's policies.</li>
                      <li><strong>Meritocracy:</strong> The <strong>Civil Service Exam</strong> allowed for upward mobility based on ability rather than just birth, though it favored the wealthy who could afford tutors.</li>
                      <li><strong>Filial Piety:</strong> The duty of family members to subordinate their needs to those of the male head of the family and the ruler.</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Economic Revolution</h3>
                    <ul>
                      <li><strong>Champa Rice:</strong> A fast-ripening, drought-resistant rice from Vietnam that allowed for two harvests a year, leading to massive population growth.</li>
                      <li><strong>Grand Canal:</strong> An internal waterway system that connected the agricultural south to the industrial north, making China the most populous trading area in the world.</li>
                      <li><strong>Proto-industrialization:</strong> A phase where people in rural areas made more goods than they could sell, focusing on home-based production of silk and porcelain.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold border-b pb-2 text-primary">1.2 Developments in Dar al-Islam</h2>
                <p>As the <strong>Abbasid Caliphate</strong> fragmented, new Islamic political entities emerged, most of which were dominated by Turkic peoples.</p>
                <div className="space-y-4 mt-4">
                  <div className="bg-muted/30 p-4 rounded-xl">
                    <h3 className="font-bold mb-2">New Political Entities:</h3>
                    <ul className="grid md:grid-cols-3 gap-4">
                      <li><strong>Seljuk Empire:</strong> Central Asian Turks who conquered parts of the Middle East and took the title of Sultan.</li>
                      <li><strong>Mamluk Sultanate:</strong> Former military slaves in Egypt who established their own empire and defeated the Mongols.</li>
                      <li><strong>Delhi Sultanates:</strong> Turkic groups that established rule in Northern India, bringing Islam to a predominantly Hindu region.</li>
                    </ul>
                  </div>
                  <h3 className="text-lg font-semibold">Cultural & Intellectual Innovations</h3>
                  <ul>
                    <li><strong>House of Wisdom:</strong> A renowned center of learning in Baghdad where scholars preserved Greek classics and made advances in math (Algebra) and medicine.</li>
                    <li><strong>Nasir al-Din al-Tusi:</strong> One of the most celebrated Islamic scholars who contributed to astronomy, law, and mathematics.</li>
                    <li><strong>Sufism:</strong> A mystical form of Islam that emphasized an emotional connection to God. Sufi missionaries were highly effective in spreading Islam because they adapted to local cultures.</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold border-b pb-2 text-primary">1.3 Developments in South and Southeast Asia</h2>
                <p>State formation and development in these regions were demonstrated by the continuity, innovation, and diversity of Hindu, Buddhist, and Islamic traditions.</p>
                <div className="grid md:grid-cols-2 gap-8 mt-4">
                  <div>
                    <h3 className="font-bold text-blue-600 dark:text-blue-400">South Asia (India)</h3>
                    <ul>
                      <li><strong>Vijayanagara Empire:</strong> A Hindu empire in Southern India that served as a barrier against Muslim invasions from the north.</li>
                      <li><strong>Rajput Kingdoms:</strong> Decentralized Hindu kingdoms in Northern India led by various clans that often fought each other.</li>
                      <li><strong>Bhakti Movement:</strong> A Hindu devotional movement that emphasized a personal relationship with a specific deity, similar to Sufism in Islam.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-emerald-600 dark:text-emerald-400">Southeast Asia</h3>
                    <ul>
                      <li><strong>Srivijaya Empire:</strong> A Hindu maritime empire based on Sumatra that grew wealthy by taxing trade through the Strait of Malacca.</li>
                      <li><strong>Majapahit Kingdom:</strong> A Buddhist kingdom based on Java that controlled sea trade.</li>
                      <li><strong>Khmer Empire (Angkor):</strong> Known for its complex irrigation systems and the massive temple complex of Angkor Wat, showing both Hindu and Buddhist influences.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold border-b pb-2 text-primary">1.4 State Building in the Americas</h2>
                <p>In the Americas, as in Afro-Eurasia, state systems demonstrated continuity, innovation, and diversity, and expanded in scope and reach.</p>
                <div className="space-y-6 mt-4">
                  <div className="border-l-4 border-red-500 pl-6">
                    <h3 className="text-xl font-bold">The Mexica (Aztecs)</h3>
                    <p>Centered at <strong>Tenochtitlan</strong>, they built a massive empire through conquest. They used a <strong>Tribute System</strong> where conquered people paid in food, luxury goods, and human captives for sacrifice. They utilized <strong>Chinampas</strong> (floating gardens) to increase food production in their swampy capital.</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-6">
                    <h3 className="text-xl font-bold">The Inca</h3>
                    <p>A highly centralized empire in the Andes. They used the <strong>Mita System</strong>, a mandatory public service labor tax. They were master engineers, building the <strong>Carpa Nan</strong> (a 25,000-mile road system) and utilizing <strong>Waru Waru</strong> (raised beds with channels) for agriculture.</p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-6">
                    <h3 className="text-xl font-bold">Mississippian Culture</h3>
                    <p>The first large-scale civilization in North America, known for building enormous earthen mounds (e.g., <strong>Cahokia</strong>). They had a rigid class system led by a "Great Sun."</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold border-b pb-2 text-primary">1.5 State Building in Africa</h2>
                <p>African states were diverse, ranging from small kin-based networks to large, centralized empires.</p>
                <ul>
                  <li><strong>Mali:</strong> Replaced Ghana as the most powerful state in West Africa. It grew wealthy through the <strong>Trans-Saharan trade</strong> of gold and salt. <strong>Mansa Musa</strong> is the most famous ruler, known for his immense wealth and pilgrimage to Mecca.</li>
                  <li><strong>Great Zimbabwe:</strong> A powerful state in East Africa known for its massive stone walls. It grew wealthy through the gold trade and its connection to the Indian Ocean trade network.</li>
                  <li><strong>Ethiopia:</strong> A Christian kingdom that remained isolated from the spread of Islam. It is famous for its rock-hewn churches.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold border-b pb-2 text-primary">1.6 Developments in Europe</h2>
                <p>Europe was politically fragmented and characterized by decentralized monarchies, feudalism, and the manorial system.</p>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div className="bg-muted/50 p-5 rounded-2xl">
                    <h3 className="font-bold mb-2">Feudalism (Political/Social)</h3>
                    <p className="text-sm">A system of mutual obligations. Monarchs granted land (fiefs) to Lords in exchange for loyalty. Lords provided land to Knights in exchange for military service. Peasants (Serfs) worked the land in exchange for protection.</p>
                  </div>
                  <div className="bg-muted/50 p-5 rounded-2xl">
                    <h3 className="font-bold mb-2">Manorialism (Economic)</h3>
                    <p className="text-sm">The economic system of the Middle Ages. Manors were self-sufficient estates where serfs lived and worked. The <strong>Three-Field System</strong> was an innovation that increased agricultural productivity.</p>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold">The Role of the Church</h3>
                  <p>The Roman Catholic Church was the only centralized authority in Europe. It provided cultural unity and controlled education. The <strong>Crusades</strong> (holy wars to retake the Holy Land) increased European exposure to the Middle East and stimulated trade.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold border-b pb-2 text-primary">1.7 Comparison in the Period 1200-1450</h2>
                <p>While states across the world were diverse, they shared several commonalities in how they built and maintained power.</p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-primary/10">
                        <th className="p-3 text-left border">Method of Power</th>
                        <th className="p-3 text-left border">Examples</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border font-medium">Religion</td>
                        <td className="p-3 border">Confucianism (China), Islam (Dar al-Islam), Hinduism/Buddhism (SE Asia), Christianity (Europe/Ethiopia).</td>
                      </tr>
                      <tr>
                        <td className="p-3 border font-medium">Bureaucracy</td>
                        <td className="p-3 border">Civil Service Exam (China), Mita System (Inca), Tribute System (Aztecs).</td>
                      </tr>
                      <tr>
                        <td className="p-3 border font-medium">Trade</td>
                        <td className="p-3 border">Grand Canal (China), Trans-Saharan (Mali), Indian Ocean (Srivijaya/Zimbabwe).</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
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
              <Link to={`/flashcards/${unit.id}`}>Practice Cards</Link>
            </Button>
            <Button asChild className="rounded-xl">
              <Link to={`/quiz/${unit.id}`}>Take Quiz</Link>
            </Button>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default StudyGuide;