import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, RefreshCcw, CheckCircle2, XCircle, Info, BookOpen, X, Timer, Shuffle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { playSound } from "@/utils/sounds";
import QuizModeSelection from "@/components/QuizModeSelection";
import { useQuizProgress } from "@/hooks/useQuizProgress";

const stimuli = [
  { id: 1, text: "The city of Cambaluc is at the end of the Silk Road... there are many merchants from all parts of the world who bring there many costly wares... the Great Khan has made a paper money which is current in all his kingdoms.", source: "Marco Polo, The Travels of Marco Polo, c. 1300" },
  { id: 2, text: "The inhabitants of Mali are seldom unjust, and have a greater abhorrence of injustice than any other people... there is complete security in their country. Neither traveler nor inhabitant in it has anything to fear from robbers.", source: "Ibn Battuta, Travels in Asia and Africa, 1325-1354" },
  { id: 3, text: "The Mongols made the roads so safe that a young woman with a golden tray on her head could travel from one end of the empire to the other without being molested.", source: "Persian chronicler describing the Pax Mongolica, c. 1260" },
  { id: 4, text: "The ships of the Great Treasure Fleet were like floating cities... they sailed with the monsoon winds to the Western Ocean, bringing silk and porcelain to trade for ivory, spices, and exotic animals.", source: "Records of the Ming Dynasty regarding Zheng He's voyages, c. 1430" },
  { id: 5, text: "In the year 1348, there came to the city of Florence a most terrible plague... it spread from the East, carried by merchants and travelers, and no medicine or human wisdom could stop its progress.", source: "Giovanni Boccaccio, The Decameron, 1353" },
  { id: 6, text: "The caravanserai is a large building with a courtyard, where merchants and their camels can rest for the night... it is protected by walls and guards, ensuring the safety of the valuable goods being transported.", source: "Description of a Silk Road trade hub, c. 1250" },
  { id: 7, text: "The introduction of Champa rice from Vietnam to China allowed for two harvests a year... this led to a massive increase in population and the growth of cities in the southern regions.", source: "Song Dynasty agricultural records, c. 1100" },
  { id: 8, text: "The Hanseatic League is an alliance of trading cities in Northern Europe... they control the trade of timber, fish, and furs, and have their own laws and armies to protect their interests.", source: "Charter of the Hanseatic League, c. 1350" },
  { id: 9, text: "The monsoon winds blow from the southwest in the summer and from the northeast in the winter... the sailors of the Indian Ocean have learned to use these winds to cross the vast sea with ease.", source: "Arab navigator's manual, c. 1200" },
  { id: 10, text: "Mansa Musa's pilgrimage to Mecca was so grand that he gave away so much gold in Cairo that the value of the metal dropped for over a decade.", source: "Al-Umari, describing the visit of the King of Mali, 1324" }
];

const initialQuestions = [
  { id: 1, stimulusId: 1, question: "The 'paper money' described by Marco Polo was an innovation that primarily addressed which economic challenge?", options: ["The scarcity of precious metals for coinage", "The need for a standardized global currency", "The high cost of transporting bulky metal coins", "The lack of trust in merchant credit"], correctAnswer: "The high cost of transporting bulky metal coins", explanation: "Paper money (flying cash) allowed merchants to deposit cash at one location and draw the equivalent elsewhere, reducing the risk and cost of transporting heavy coins." },
  { id: 2, stimulusId: 1, question: "Which of the following best explains the revival of the Silk Road trade described in the text?", options: ["The collapse of the Byzantine Empire", "The security provided by the Mongol Empire", "The discovery of new maritime routes", "The spread of the Black Death"], correctAnswer: "The security provided by the Mongol Empire", explanation: "The 'Pax Mongolica' provided the political stability and safety necessary for long-distance trade to flourish across Eurasia." },
  { id: 3, stimulusId: 1, question: "The 'costly wares' mentioned by Polo were primarily intended for which social class?", options: ["The peasantry", "The urban proletariat", "The landed aristocracy and elite", "The monastic orders"], correctAnswer: "The landed aristocracy and elite", explanation: "Silk Road trade focused on high-value luxury goods like silk and porcelain, which were affordable only to the wealthy elite." },
  { id: 4, stimulusId: 1, question: "Marco Polo's accounts of East Asian wealth primarily influenced European history by:", options: ["Leading to the immediate conquest of China", "Encouraging the search for direct maritime routes to Asia", "Causing a decline in Mediterranean trade", "Promoting the adoption of Confucianism"], correctAnswer: "Encouraging the search for direct maritime routes to Asia", explanation: "Polo's descriptions of Asian riches motivated later explorers like Columbus to find ways to bypass Middle Eastern middlemen." },
  { id: 5, stimulusId: 1, question: "The 'Great Khan' mentioned in the text refers to which specific Mongol ruler?", options: ["Genghis Khan", "Kublai Khan", "Batu Khan", "Hulegu Khan"], correctAnswer: "Kublai Khan", explanation: "Kublai Khan was the founder of the Yuan Dynasty and the ruler Polo served during his time in China." },
  { id: 6, stimulusId: 2, question: "Ibn Battuta's observations of Mali's 'security' suggest that the empire's rulers:", options: ["Relied on foreign mercenaries", "Maintained a highly centralized and effective administration", "Were constantly at war with neighbors", "Had no formal legal system"], correctAnswer: "Maintained a highly centralized and effective administration", explanation: "The safety of travelers in Mali was a testament to the strength and reach of the imperial government's authority." },
  { id: 7, stimulusId: 2, question: "The wealth of Mali, which supported its stability, was primarily derived from:", options: ["The export of manufactured textiles", "Control of the Trans-Saharan gold-salt trade", "The cultivation of Champa rice", "Maritime trade in the Indian Ocean"], correctAnswer: "Control of the Trans-Saharan gold-salt trade", explanation: "Mali's strategic location allowed it to tax and control the flow of gold from the south and salt from the north." },
  { id: 8, stimulusId: 2, question: "Timbuktu's status as a center of learning was a direct result of:", options: ["The isolation of West Africa", "The patronage of wealthy Muslim rulers like Mansa Musa", "The influence of Christian missionaries", "The discovery of the printing press"], correctAnswer: "The patronage of wealthy Muslim rulers like Mansa Musa", explanation: "Mali's rulers used their wealth to build mosques and universities, attracting scholars from across the Islamic world." },
  { id: 9, stimulusId: 2, question: "Ibn Battuta's ability to travel and find employment as a judge (Qadi) across Afro-Eurasia demonstrates:", options: ["The lack of qualified local officials", "The existence of a unified global government", "The cultural and legal cohesion of the Dar al-Islam", "The decline of traditional religions"], correctAnswer: "The cultural and legal cohesion of the Dar al-Islam", explanation: "The shared language (Arabic) and legal framework (Sharia) allowed Muslim scholars to move easily between Islamic states." },
  { id: 10, stimulusId: 2, question: "The 'inhabitants of Mali' described were primarily of which ethnic group?", options: ["Berber", "Bantu", "Mandinka (Mande)", "Swahili"], correctAnswer: "Mandinka (Mande)", explanation: "The Mali Empire was established by the Mandinka people following the collapse of the Ghana Empire." },
  { id: 11, stimulusId: 3, question: "The 'Pax Mongolica' facilitated which of the following long-term developments?", options: ["The end of the Islamic Golden Age", "The diffusion of Chinese technologies to the West", "The total isolation of Europe", "The permanent unification of Eurasia"], correctAnswer: "The diffusion of Chinese technologies to the West", explanation: "Mongol rule allowed for the transfer of gunpowder, printing, and the compass from East Asia to the Middle East and Europe." },
  { id: 12, stimulusId: 3, question: "Which of the following was a negative consequence of the increased connectivity under the Mongols?", options: ["The decline of the Silk Road", "The spread of the Bubonic Plague", "The end of maritime trade", "The rise of feudalism in China"], correctAnswer: "The spread of the Bubonic Plague", explanation: "The same routes that carried goods also carried the fleas and rats that spread the Black Death across Eurasia." },
  { id: 13, stimulusId: 3, question: "The Mongols' military success was primarily due to their:", options: ["Superior naval technology", "Use of heavy armored infantry", "Expertise in horse archery and mobility", "Reliance on fortified castles"], correctAnswer: "Expertise in horse archery and mobility", explanation: "The Mongol light cavalry could outmaneuver and outshoot almost any contemporary army." },
  { id: 14, stimulusId: 3, question: "The Mongol policy toward the religions of conquered peoples can best be described as:", options: ["Forced conversion to Shamanism", "Systematic persecution of Muslims", "Pragmatic religious tolerance", "The establishment of a state church"], correctAnswer: "Pragmatic religious tolerance", explanation: "The Mongols allowed diverse faiths to practice freely, which helped maintain order in their multi-ethnic empire." },
  { id: 15, stimulusId: 3, question: "The 'Yam' system was a Mongol innovation designed to:", options: ["Collect taxes from peasants", "Provide rapid communication and intelligence", "Train elite soldiers", "Standardize weights and measures"], correctAnswer: "Provide rapid communication and intelligence", explanation: "The Yam was a sophisticated relay system of stations and horses that allowed messages to travel thousands of miles quickly." },
  { id: 16, stimulusId: 4, question: "Zheng He's voyages were primarily intended to:", options: ["Conquer new territories for the Ming", "Establish permanent Chinese colonies in Africa", "Project Ming prestige and collect tribute", "Find a route to the Americas"], correctAnswer: "Project Ming prestige and collect tribute", explanation: "The voyages were a display of 'soft power' designed to bring the world into the Chinese tributary system." },
  { id: 17, stimulusId: 4, question: "The 'Treasure Ships' of the Ming Dynasty were technologically superior to European ships of the time in terms of:", options: ["Speed and maneuverability", "Size and cargo capacity", "Use of lateen sails", "Ability to sail against the wind"], correctAnswer: "Size and cargo capacity", explanation: "Zheng He's ships were massive, multi-masted vessels that dwarfed the caravels used by later European explorers." },
  { id: 18, stimulusId: 4, question: "The decision to end the voyages of the Treasure Fleet was driven by:", options: ["A major naval defeat", "The discovery of the Americas by Europe", "Internal pressure from Confucian officials and defense needs", "A lack of interest in foreign goods"], correctAnswer: "Internal pressure from Confucian officials and defense needs", explanation: "Officials argued the voyages were a waste of resources that should be spent on defending the northern border against nomads." },
  { id: 19, stimulusId: 4, question: "Which region was the furthest point reached by Zheng He's fleet?", options: ["The Cape of Good Hope", "The Swahili Coast of East Africa", "The coast of Australia", "The Mediterranean Sea"], correctAnswer: "The Swahili Coast of East Africa", explanation: "Zheng He reached as far as Malindi and Mogadishu, bringing back exotic animals like giraffes to the Ming court." },
  { id: 20, stimulusId: 4, question: "The Indian Ocean trade network, which Zheng He utilized, was unique because it was:", options: ["Controlled by a single empire", "Primarily a network of independent merchant communities", "Limited to luxury goods only", "Fought over by constant naval wars"], correctAnswer: "Primarily a network of independent merchant communities", explanation: "Before the arrival of the Portuguese, the Indian Ocean was a largely peaceful network of diverse traders (Arabs, Indians, Chinese, etc.)." },
  { id: 21, stimulusId: 5, question: "The 'terrible plague' described by Boccaccio had which of the following economic effects in Europe?", options: ["A decrease in the value of labor", "An increase in the power of the landed nobility", "A labor shortage that led to higher wages for peasants", "The total collapse of the money economy"], correctAnswer: "A labor shortage that led to higher wages for peasants", explanation: "The massive loss of life meant that surviving workers could demand better pay and conditions, weakening serfdom." },
  { id: 22, stimulusId: 5, question: "The spread of the plague from the 'East' was a direct consequence of:", options: ["The Crusades", "The increased connectivity of the Mongol era", "The fall of the Roman Empire", "The discovery of the New World"], correctAnswer: "The increased connectivity of the Mongol era", explanation: "The Silk Road and maritime routes acted as conduits for the disease to travel from Central Asia to Europe." },
  { id: 23, stimulusId: 5, question: "How did the Black Death affect the authority of the Catholic Church?", options: ["It led to an immediate increase in church power", "It caused many to question the Church's ability to provide spiritual protection", "It ended the Great Schism", "It led to the abolition of the Papacy"], correctAnswer: "It caused many to question the Church's ability to provide spiritual protection", explanation: "The inability of the clergy to stop the plague led to a loss of prestige and the rise of new spiritual movements." },
  { id: 24, stimulusId: 5, question: "The 'merchants and travelers' mentioned in the text were unintentional vectors for:", options: ["Cultural diffusion", "Biological exchange", "Technological transfer", "Religious conversion"], correctAnswer: "Biological exchange", explanation: "The spread of disease is a form of biological exchange that often accompanies trade and migration." },
  { id: 25, stimulusId: 5, question: "Which of the following was a long-term social result of the plague in Western Europe?", options: ["The strengthening of the manorial system", "The decline of feudalism and the rise of a middle class", "The end of urbanization", "The return to a hunter-gatherer lifestyle"], correctAnswer: "The decline of feudalism and the rise of a middle class", explanation: "The economic shifts caused by the plague helped break down the rigid social structures of the Middle Ages." },
  { id: 26, stimulusId: 6, question: "Caravansaries were essential to the Silk Road because they provided:", options: ["Free trade zones", "Protection from bandits and rest for animals", "Religious instruction", "Standardized currency exchange"], correctAnswer: "Protection from bandits and rest for animals", explanation: "These fortified inns allowed merchants to travel safely across dangerous and arid terrain." },
  { id: 27, stimulusId: 6, question: "The use of camels on the Silk Road was made possible by the invention of the:", options: ["Stirrup", "Camel saddle", "Stern rudder", "Lateen sail"], correctAnswer: "Camel saddle", explanation: "Different types of saddles allowed camels to carry heavy loads or be used effectively in warfare." },
  { id: 28, stimulusId: 6, question: "The growth of cities like Kashgar and Samarkand was primarily due to their role as:", options: ["Religious capitals", "Oasis hubs where trade routes intersected", "Military fortresses", "Isolated mountain retreats"], correctAnswer: "Oasis hubs where trade routes intersected", explanation: "These cities provided water, food, and markets for merchants traveling between East and West." },
  { id: 29, stimulusId: 6, question: "Caravansaries also served as centers for:", options: ["Industrial manufacturing", "The exchange of ideas, religions, and cultures", "The training of naval officers", "The storage of surplus grain"], correctAnswer: "The exchange of ideas, religions, and cultures", explanation: "As meeting places for people from different backgrounds, they were vital for cultural diffusion." },
  { id: 30, stimulusId: 6, question: "The decline of the Silk Road in the 15th century was partly due to:", options: ["The rise of the Mongol Empire", "The development of more efficient maritime trade routes", "The end of the Black Death", "The total disappearance of camels"], correctAnswer: "The development of more efficient maritime trade routes", explanation: "Sea trade was faster and could carry more bulk goods than land-based caravans." },
  { id: 31, stimulusId: 7, question: "The introduction of Champa rice to China is an example of:", options: ["Industrialization", "Agricultural diffusion through tribute and trade", "Mercantilism", "The Enclosure Movement"], correctAnswer: "Agricultural diffusion through tribute and trade", explanation: "The fast-ripening rice was sent to the Song court as a gift from the Champa state in Vietnam." },
  { id: 32, stimulusId: 7, question: "The 'massive increase in population' during the Song Dynasty led to:", options: ["The collapse of the empire", "Rapid urbanization and the growth of mega-cities", "A return to nomadic life", "The end of the Silk Road"], correctAnswer: "Rapid urbanization and the growth of mega-cities", explanation: "The food surplus allowed more people to live in cities like Hangzhou, which became the largest in the world." },
  { id: 33, stimulusId: 7, question: "Which of the following was another key innovation of the Song 'Economic Revolution'?", options: ["The Steam Engine", "The use of coal for fuel and iron production", "The invention of the telescope", "The discovery of electricity"], correctAnswer: "The use of coal for fuel and iron production", explanation: "The Song used coal to mass-produce iron for tools, weapons, and construction." },
  { id: 34, stimulusId: 7, question: "The Song Dynasty's use of paper money and credit systems was a response to:", options: ["A lack of paper", "The 'money famine' caused by a shortage of copper coins", "The influence of European banking", "The end of all trade"], correctAnswer: "The 'money famine' caused by a shortage of copper coins", explanation: "The booming economy required more currency than the state could produce in metal." },
  { id: 35, stimulusId: 7, question: "The 'southern regions' of China became the economic heart of the empire due to:", options: ["The building of the Great Wall", "The expansion of the Grand Canal and rice cultivation", "The invasion of the Mongols", "The discovery of gold mines"], correctAnswer: "The expansion of the Grand Canal and rice cultivation", explanation: "The Grand Canal linked the productive south to the political centers in the north." },
  { id: 36, stimulusId: 8, question: "The Hanseatic League is best described as a:", options: ["Unified nation-state", "Commercial and defensive alliance of merchant guilds", "Religious order of knights", "Branch of the Mongol Empire"], correctAnswer: "Commercial and defensive alliance of merchant guilds", explanation: "It was a confederation of cities that worked together to protect their trade interests in Northern Europe." },
  { id: 37, stimulusId: 8, question: "The League's control of 'timber, fish, and furs' demonstrates its focus on:", options: ["Luxury goods only", "Bulk raw materials and essential commodities", "The spice trade", "The export of silk"], correctAnswer: "Bulk raw materials and essential commodities", explanation: "Unlike the Silk Road, Northern European trade focused on heavy, necessary goods." },
  { id: 38, stimulusId: 8, question: "The existence of the Hanseatic League shows that in the 14th century:", options: ["Kings had absolute power", "Merchant groups could exercise significant political and military power", "Europe was completely isolated", "Trade was illegal"], correctAnswer: "Merchant groups could exercise significant political and military power", explanation: "The League had its own laws, diplomats, and even fought wars to protect its monopolies." },
  { id: 39, stimulusId: 8, question: "The decline of the Hanseatic League was caused by the rise of:", options: ["The Silk Road", "Strong centralized monarchies in England and France", "The Black Death", "The Crusades"], correctAnswer: "Strong centralized monarchies in England and France", explanation: "As national governments grew stronger, they challenged the independent power of the trading cities." },
  { id: 40, stimulusId: 8, question: "The League's primary goal was to:", options: ["Spread Christianity", "Establish a monopoly on trade in the Baltic and North Seas", "Conquer the Holy Land", "Abolish the feudal system"], correctAnswer: "Establish a monopoly on trade in the Baltic and North Seas", explanation: "The League used its collective power to secure exclusive trading rights and protect its members from competition." },
  { id: 41, stimulusId: 9, question: "The 'lateen sail' was a crucial innovation because it allowed ships to:", options: ["Carry more heavy cargo", "Navigate against the wind by tacking", "Stay underwater for long periods", "Travel without any wind at all"], correctAnswer: "Navigate against the wind by tacking", explanation: "The triangular lateen sail was more maneuverable than square sails, allowing sailors to harness the wind from different angles." },
  { id: 42, stimulusId: 9, question: "Which of the following best describes the impact of the astrolabe on maritime trade?", options: ["It allowed sailors to calculate their speed", "It enabled more accurate navigation by determining latitude", "It was used to predict underwater earthquakes", "It helped sailors communicate with other ships"], correctAnswer: "It enabled more accurate navigation by determining latitude", explanation: "By measuring the angle of the stars or sun, the astrolabe allowed sailors to know their position relative to the equator." },
  { id: 43, stimulusId: 9, question: "The 'stern rudder' was an improvement over previous steering methods because it:", options: ["Required fewer sailors to operate", "Provided much greater control and maneuverability for large ships", "Allowed ships to travel in reverse", "Was made of lighter materials"], correctAnswer: "Provided much greater control and maneuverability for large ships", explanation: "The stern-mounted rudder allowed for precise steering of the massive dhows and junks used in the Indian Ocean." },
  { id: 44, stimulusId: 9, question: "The Swahili culture that emerged in East Africa is a classic example of:", options: ["Cultural isolation", "Syncretism between Bantu and Arab/Persian influences", "The total destruction of indigenous traditions", "The spread of European feudalism"], correctAnswer: "Syncretism between Bantu and Arab/Persian influences", explanation: "The Swahili language and culture blended African roots with Islamic and Middle Eastern elements brought by trade." },
  { id: 45, stimulusId: 9, question: "The primary exports from the Swahili City-States to the Indian Ocean network were:", options: ["Silk and Porcelain", "Raw materials like gold, ivory, and iron", "Spices and Tea", "Manufactured steel and glass"], correctAnswer: "Raw materials like gold, ivory, and iron", explanation: "East Africa acted as a source of valuable raw materials for the markets of India, Arabia, and China." },
  { id: 46, stimulusId: 10, question: "Mansa Musa's pilgrimage to Mecca (Hajj) primarily demonstrated:", options: ["The poverty of West Africa", "The immense wealth and Islamic devotion of the Mali Empire", "Mali's desire to conquer Egypt", "The decline of the Trans-Saharan trade"], correctAnswer: "The immense wealth and Islamic devotion of the Mali Empire", explanation: "Musa's lavish display of gold and his large entourage shocked the Mediterranean world and highlighted Mali's power." },
  { id: 47, stimulusId: 10, question: "What was a long-term cultural consequence of Mansa Musa's journey?", options: ["The end of Islam in Mali", "The recruitment of Islamic scholars and architects to Mali", "The adoption of Christianity by the Mande people", "The isolation of Mali from the rest of the world"], correctAnswer: "The recruitment of Islamic scholars and architects to Mali", explanation: "Musa brought back experts who helped transform Timbuktu into a world-class center of learning and architecture." },
  { id: 48, stimulusId: 10, question: "The 'drop in the value of gold' in Cairo caused by Musa's visit is an example of:", options: ["Deflation", "Inflation", "Mercantilism", "A trade embargo"], correctAnswer: "Inflation", explanation: "The sudden influx of a massive amount of gold increased the money supply, causing prices to rise and the value of the metal to fall." },
  { id: 49, stimulusId: 10, question: "Mali's control over the gold fields of West Africa allowed it to replace which previous empire?", options: ["Songhai", "Ghana", "Ethiopia", "Kongo"], correctAnswer: "Ghana", explanation: "Mali rose to power in the 13th century, taking over the trade routes and resources formerly controlled by the Ghana Empire." },
  { id: 50, stimulusId: 10, question: "Mansa Musa's Hajj is a significant event in world history because it:", options: ["Led to the discovery of the Americas", "Connected West Africa more deeply to the global Islamic community", "Caused the fall of the Mongol Empire", "Ended the use of camels in trade"], correctAnswer: "Connected West Africa more deeply to the global Islamic community", explanation: "The pilgrimage strengthened Mali's ties to the Dar al-Islam and increased its prestige across Afro-Eurasia." }
];

const QuizUnit2 = () => {
  const navigate = useNavigate();
  const { saveQuizResult } = useQuizProgress();
  
  const [mode, setMode] = useState<'study' | 'exam' | null>(null);
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [checkedIndices, setCheckedIndices] = useState<Set<number>>(new Set());
  const [crossedOut, setCrossedOut] = useState<Record<number, string[]>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(50 * 60);

  const prepareQuestions = (qs: any[]) => {
    return [...qs]
      .sort(() => 0.5 - Math.random())
      .map(q => ({
        ...q,
        options: [...q.options].sort(() => 0.5 - Math.random())
      }));
  };

  useEffect(() => {
    setQuestions(prepareQuestions(initialQuestions));
  }, []);

  useEffect(() => {
    if (mode === 'exam' && !isFinished && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !isFinished) {
      finishQuiz();
    }
  }, [mode, isFinished, timeLeft]);

  const handleShuffle = () => {
    setQuestions(prepareQuestions(initialQuestions));
    setCurrentIndex(0);
    setUserAnswers({});
    setCheckedIndices(new Set());
    setCrossedOut({});
    setTimeLeft(50 * 60);
  };

  const handleOptionSelect = (option: string) => {
    if (mode === 'study' && checkedIndices.has(currentIndex)) return;
    setUserAnswers(prev => ({ ...prev, [currentIndex]: option }));
  };

  const toggleCrossOut = (e: React.MouseEvent, option: string) => {
    e.stopPropagation();
    if (checkedIndices.has(currentIndex)) return;
    setCrossedOut(prev => {
      const current = prev[currentIndex] || [];
      if (current.includes(option)) {
        return { ...prev, [currentIndex]: current.filter(o => o !== option) };
      }
      return { ...prev, [currentIndex]: [...current, option] };
    });
  };

  const handleCheck = () => {
    if (!userAnswers[currentIndex]) return;
    setCheckedIndices(prev => new Set(prev).add(currentIndex));
    if (userAnswers[currentIndex] === questions[currentIndex].correctAnswer) {
      playSound('correct');
    } else {
      playSound('wrong');
    }
  };

  const finishQuiz = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctAnswer) score++;
    });
    setIsFinished(true);
    saveQuizResult(2, score, questions.length, mode!);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      finishQuiz();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!mode) {
    return (
      <Layout>
        <QuizModeSelection unitTitle="Unit 2: Networks of Exchange" onSelect={setMode} />
      </Layout>
    );
  }

  if (isFinished) {
    let finalScore = 0;
    questions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctAnswer) finalScore++;
    });
    return (
      <Layout>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto text-center space-y-8 py-12"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Unit 2 Mastery Complete!</h2>
            <p className="text-muted-foreground">Mode: <span className="capitalize font-bold text-foreground">{mode}</span></p>
            <p className="text-muted-foreground">You scored {finalScore} out of {questions.length}</p>
          </div>
          <div className="p-8 rounded-3xl bg-primary/10 border border-primary/20">
            <div className="text-5xl font-bold text-primary mb-2">{Math.round((finalScore/questions.length)*100)}%</div>
            <div className="text-sm font-bold uppercase tracking-widest text-primary/70">Final Score</div>
          </div>
          <div className="flex gap-4">
            <Button onClick={() => window.location.reload()} className="flex-1 h-12 rounded-xl">
              <RefreshCcw className="mr-2 h-4 w-4" /> Try Again
            </Button>
            <Button variant="outline" onClick={() => navigate("/units/ap-world")} className="flex-1 h-12 rounded-xl">
              Back to Units
            </Button>
          </div>
        </motion.div>
      </Layout>
    );
  }

  const currentQuestion = questions[currentIndex];
  if (!currentQuestion) return null;
  const currentStimulus = stimuli.find(s => s.id === currentQuestion.stimulusId);
  const progress = (currentIndex / questions.length) * 100;

  return (
    <Layout>
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="ghost" onClick={() => navigate("/units/ap-world")} className="text-muted-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" /> Exit
            </Button>
            <Button variant="outline" size="sm" onClick={handleShuffle} className="rounded-lg h-8 px-3 text-[10px] font-bold uppercase tracking-wider">
              <Shuffle className="mr-1.5 h-3 w-3" /> Shuffle
            </Button>
          </div>
          <div className="flex items-center gap-4">
            {mode === 'exam' && (
              <div className={cn(
                "flex items-center gap-2 px-3 py-1 rounded-full font-mono font-bold border",
                timeLeft < 300 ? "bg-destructive/10 text-destructive border-destructive/20 animate-pulse" : "bg-muted text-foreground border-border"
              )}>
                <Timer size={16} />
                {formatTime(timeLeft)}
              </div>
            )}
            <div className="text-right">
              <div className="text-sm font-bold text-primary">Question {currentIndex + 1} / {questions.length}</div>
              <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">Unit 2: Networks of Exchange</div>
            </div>
          </div>
        </div>
        <Progress value={progress} className="h-1.5 bg-muted" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6 sticky top-24">
            <Card className="overflow-hidden border-border shadow-xl shadow-primary/5 rounded-3xl">
              <CardContent className="p-6 sm:p-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
                  <BookOpen size={12} />
                  Stimulus Prompt
                </div>
                <p className="text-base sm:text-lg leading-relaxed font-medium italic text-foreground/90">
                  "{currentStimulus?.text}"
                </p>
                <div className="pt-4 border-t border-border text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
                  Source: {currentStimulus?.source}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={`question-${currentQuestion.id}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <h2 className="text-2xl sm:text-3xl font-bold leading-tight">{currentQuestion.question}</h2>
                <div className="grid gap-3">
                  {currentQuestion.options.map((option: string, idx: number) => {
                    const letter = String.fromCharCode(65 + idx);
                    const isSelected = userAnswers[currentIndex] === option;
                    const isCrossed = crossedOut[currentIndex]?.includes(option);
                    const isChecked = checkedIndices.has(currentIndex);
                    const isCorrect = option === currentQuestion.correctAnswer;
                    return (
                      <div key={option} className="relative group">
                        <button
                          disabled={mode === 'study' && isChecked}
                          onClick={() => handleOptionSelect(option)}
                          className={cn(
                            "w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 text-lg font-medium flex items-center gap-4",
                            !isChecked && !isSelected && "border-border hover:border-primary/50",
                            !isChecked && isSelected && "border-primary bg-primary/5",
                            mode === 'study' && isChecked && isCorrect && "border-green-500 bg-green-500/10 text-green-600",
                            mode === 'study' && isChecked && isSelected && !isCorrect && "border-destructive bg-destructive/10 text-destructive",
                            mode === 'study' && isChecked && !isCorrect && !isSelected && "border-border opacity-40",
                            isCrossed && "opacity-30 grayscale"
                          )}
                        >
                          <span className={cn(
                            "flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold border",
                            isSelected ? "bg-primary text-primary-foreground border-primary" : "bg-muted text-muted-foreground border-border"
                          )}>{letter}</span>
                          <span className={cn(isCrossed && "line-through")}>{option}</span>
                          <div className="ml-auto flex items-center gap-2">
                            {mode === 'study' && isChecked && isCorrect && <CheckCircle2 className="h-6 w-6 text-green-600" />}
                            {mode === 'study' && isChecked && isSelected && !isCorrect && <XCircle className="h-6 w-6 text-destructive" />}
                          </div>
                        </button>
                        {!isChecked && (
                          <button
                            onClick={(e) => toggleCrossOut(e, option)}
                            className="absolute -right-2 -top-2 w-6 h-6 rounded-full bg-muted border border-border flex items-center justify-center text-muted-foreground hover:bg-destructive hover:text-destructive-foreground transition-colors opacity-0 group-hover:opacity-100 z-10"
                            title="Cross out"
                          ><X size={12} /></button>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="space-y-4">
                  {mode === 'study' && checkedIndices.has(currentIndex) && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-6 rounded-2xl bg-muted/50 border border-border/50 space-y-3"
                    >
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        <Info size={14} /> Explanation
                      </div>
                      <p className="text-foreground leading-relaxed">{currentQuestion.explanation}</p>
                    </motion.div>
                  )}
                  <div className="flex gap-3">
                    <Button variant="outline" onClick={() => setCurrentIndex(prev => prev - 1)} disabled={currentIndex === 0} className="flex-1 h-14 rounded-2xl text-lg font-bold">Back</Button>
                    {mode === 'study' && !checkedIndices.has(currentIndex) ? (
                      <Button onClick={handleCheck} disabled={!userAnswers[currentIndex]} className="flex-[2] h-14 rounded-2xl text-lg font-bold shadow-lg shadow-primary/20">Check Answer</Button>
                    ) : (
                      <Button onClick={handleNext} disabled={mode === 'exam' && !userAnswers[currentIndex]} className="flex-[2] h-14 rounded-2xl text-lg font-bold shadow-lg shadow-primary/20">
                        {currentIndex < questions.length - 1 ? "Next Question" : "Finish Quiz"}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default QuizUnit2;