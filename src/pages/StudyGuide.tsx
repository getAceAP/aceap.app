import { useParams, useNavigate, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { units } from "@/data/content";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const StudyGuide = () => {
  const { unitId } = useParams();
  const navigate = useNavigate();
  const unit = units.find((u) => u.id === Number(unitId));

  if (!unit) return null;

  // Only Unit 1 has content for now as requested
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
              Study Guide
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
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold border-b pb-2">1.1 Developments in East Asia</h2>
                <p>The <strong>Song Dynasty</strong> (960-1279) was a golden age for China, characterized by economic prosperity and cultural achievement.</p>
                <ul>
                  <li><strong>Bureaucracy:</strong> Expanded the Civil Service Exam system, creating a meritocracy of "scholar-gentry."</li>
                  <li><strong>Economy:</strong> Introduction of <strong>Champa Rice</strong> from Vietnam led to a population explosion. The <strong>Grand Canal</strong> expansion facilitated internal trade.</li>
                  <li><strong>Culture:</strong> <strong>Neo-Confucianism</strong> emerged as a syncretic blend of Confucianism, Buddhism, and Daoism. <strong>Filial Piety</strong> remained the core social value.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold border-b pb-2">1.2 Developments in Dar al-Islam</h2>
                <p>As the Abbasid Caliphate fragmented, new Islamic political entities emerged, often led by Turkic peoples.</p>
                <ul>
                  <li><strong>Political:</strong> The <strong>Mamluk Sultanate</strong> (Egypt) and <strong>Seljuk Turks</strong> rose to power.</li>
                  <li><strong>Intellectual:</strong> The <strong>House of Wisdom</strong> in Baghdad was a center for preserving and expanding Greek and Indian knowledge.</li>
                  <li><strong>Sufism:</strong> Mystical missionaries who played a crucial role in spreading Islam to South and Southeast Asia.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold border-b pb-2">1.3 South and Southeast Asia</h2>
                <p>State building in this region was heavily influenced by trade and the spread of Hinduism and Buddhism.</p>
                <ul>
                  <li><strong>South Asia:</strong> The <strong>Vijayanagara Empire</strong> and <strong>Rajput Kingdoms</strong> maintained Hindu traditions amidst Islamic expansion.</li>
                  <li><strong>Southeast Asia:</strong> Maritime empires like <strong>Srivijaya</strong> controlled key trade routes (Strait of Malacca).</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold border-b pb-2">1.4 State Building in the Americas</h2>
                <ul>
                  <li><strong>Mexica (Aztecs):</strong> Built a massive empire centered at <strong>Tenochtitlan</strong> using a <strong>Tribute System</strong> to control conquered peoples.</li>
                  <li><strong>Inca:</strong> Used the <strong>Mita System</strong> (mandatory public service) and built the <strong>Carpa Nan</strong>, a 25,000-mile road network.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold border-b pb-2">1.5 State Building in Africa</h2>
                <ul>
                  <li><strong>Mali:</strong> Became wealthy through the <strong>Trans-Saharan trade</strong> (gold and salt). Mansa Musa's pilgrimage showcased this wealth.</li>
                  <li><strong>Ethiopia:</strong> Remained a unique <strong>Christian kingdom</strong> in East Africa, isolated from the spread of Islam.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold border-b pb-2">1.6 Developments in Europe</h2>
                <p>Europe was decentralized and dominated by the <strong>Manorial System</strong> and <strong>Feudalism</strong>.</p>
                <ul>
                  <li><strong>Social:</strong> A rigid hierarchy of Kings, Lords, Knights, and <strong>Serfs</strong>.</li>
                  <li><strong>Religious:</strong> The Roman Catholic Church was the only centralized authority, providing cultural unity.</li>
                  <li><strong>Change:</strong> The <strong>Crusades</strong> and the <strong>Renaissance</strong> began to shift Europe toward a more connected and centralized future.</li>
                </ul>
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