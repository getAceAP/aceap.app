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
  { id: 1, stimulusId: 1, question: "The 'paper money' described by Marco Polo was an innovation of which dynasty?", options: ["Tang", "Song", "Yuan", "Ming"], correctAnswer: "Yuan", explanation: "The Yuan Dynasty, under Mongol rule, widely implemented paper currency (chao) to facilitate trade." },
  { id: 2, stimulusId: 1, question: "Which empire's collapse originally disrupted the Silk Road before its Mongol revival?", options: ["Roman", "Han", "Abbasid", "Gupta"], correctAnswer: "Han", explanation: "The fall of the Han and Roman empires led to a decline in Silk Road trade until the Tang and Mongols revived it." },
  { id: 3, stimulusId: 1, question: "The 'costly wares' mentioned most likely included which Chinese export?", options: ["Cotton", "Porcelain", "Spices", "Gold"], correctAnswer: "Porcelain", explanation: "Silk and porcelain were the primary high-value luxury exports from China during this period." },
  { id: 4, stimulusId: 1, question: "Marco Polo's accounts primarily stimulated interest in trade for which region?", options: ["West Africa", "Western Europe", "South Asia", "The Americas"], correctAnswer: "Western Europe", explanation: "Polo's travels introduced Europeans to the wealth and technology of East Asia, sparking a desire for direct trade." },
  { id: 5, stimulusId: 1, question: "The 'Great Khan' mentioned in the text refers to:", options: ["Genghis Khan", "Kublai Khan", "Batu Khan", "Hulegu Khan"], correctAnswer: "Kublai Khan", explanation: "Kublai Khan was the ruler of the Yuan Dynasty during Marco Polo's visit to China." },
  { id: 6, stimulusId: 2, question: "Ibn Battuta's travels are a primary source for the spread of which religion?", options: ["Buddhism", "Christianity", "Islam", "Hinduism"], correctAnswer: "Islam", explanation: "Ibn Battuta traveled throughout the Dar al-Islam, documenting the practice of Islam in diverse cultures." },
  { id: 7, stimulusId: 2, question: "The 'security' in Mali was largely due to the control of which trade?", options: ["Silk and Spice", "Gold and Salt", "Fur and Timber", "Silver and Tea"], correctAnswer: "Gold and Salt", explanation: "Mali's wealth and stability were built on its control of the Trans-Saharan gold-salt trade routes." },
  { id: 8, stimulusId: 2, question: "Which city in Mali became a world-renowned center of Islamic learning?", options: ["Cairo", "Timbuktu", "Mogadishu", "Kilwa"], correctAnswer: "Timbuktu", explanation: "Timbuktu was a major hub for trade and scholarship, home to famous universities and libraries." },
  { id: 9, stimulusId: 2, question: "Ibn Battuta's role as a 'Qadi' meant he served as a:", options: ["Merchant", "Soldier", "Judge", "Sailor"], correctAnswer: "Judge", explanation: "As a Qadi (Islamic judge), Ibn Battuta was often employed by rulers to interpret Sharia law." },
  { id: 10, stimulusId: 2, question: "The 'inhabitants of Mali' described were primarily of which ethnic group?", options: ["Berber", "Bantu", "Mande", "Swahili"], correctAnswer: "Mande", explanation: "The Mali Empire was founded by the Mandinka (Mande) people." },
  { id: 11, stimulusId: 3, question: "The 'Pax Mongolica' led to an increase in:", options: ["Warfare", "Cultural and technological exchange", "Isolationism", "Feudalism"], correctAnswer: "Cultural and technological exchange", explanation: "The stability of Mongol rule allowed for the safe movement of people, ideas, and goods across Eurasia." },
  { id: 12, stimulusId: 3, question: "Which technology spread from China to Europe during this period?", options: ["The Steam Engine", "Gunpowder", "The Telescope", "The Cotton Gin"], correctAnswer: "Gunpowder", explanation: "Gunpowder, printing, and the compass all spread westward during the Mongol era." },
  { id: 13, stimulusId: 3, question: "The Mongols' primary military advantage was their use of:", options: ["Heavy Infantry", "Naval fleets", "Horse Archers", "Fortified castles"], correctAnswer: "Horse Archers", explanation: "Mongol light cavalry and expert archery allowed them to outmaneuver and defeat larger armies." },
  { id: 14, stimulusId: 3, question: "How did the Mongols treat the religions of conquered peoples?", options: ["Forced conversion", "Religious tolerance", "Banned all religion", "Only allowed Buddhism"], correctAnswer: "Religious tolerance", explanation: "The Mongols were famously tolerant of diverse religions, including Islam, Christianity, and Buddhism." },
  { id: 15, stimulusId: 3, question: "The 'Yam' system mentioned in Mongol history was a:", options: ["Tax system", "Postal/relay system", "Military formation", "Legal code"], correctAnswer: "Postal/relay system", explanation: "The Yam system allowed for rapid communication across the vast empire using relay stations." },
  { id: 16, stimulusId: 4, question: "Zheng He's voyages were sponsored by which dynasty?", options: ["Yuan", "Ming", "Qing", "Song"], correctAnswer: "Ming", explanation: "The Ming Emperor Yongle sponsored the voyages to project Chinese power and collect tribute." },
  { id: 17, stimulusId: 4, question: "What was the primary goal of the 'Treasure Fleet'?", options: ["Colonization", "Military conquest", "Projecting prestige and tribute", "Finding a route to the Americas"], correctAnswer: "Projecting prestige and tribute", explanation: "Unlike European explorers, Zheng He sought to establish Chinese dominance and the tributary system." },
  { id: 18, stimulusId: 4, question: "Why did the Ming Dynasty eventually end the voyages?", options: ["They were defeated at sea", "They ran out of ships", "Focus shifted to internal defense (Great Wall)", "They found nothing of value"], correctAnswer: "Focus shifted to internal defense (Great Wall)", explanation: "Confucian officials argued the voyages were too expensive and that resources should be used to defend against northern nomads." },
  { id: 19, stimulusId: 4, question: "Which region did Zheng He NOT visit?", options: ["East Africa", "Southeast Asia", "The Americas", "South Asia"], correctAnswer: "The Americas", explanation: "Zheng He's voyages reached as far as the Swahili coast of Africa but did not cross the Pacific or Atlantic." },
  { id: 20, stimulusId: 4, question: "The 'monsoon winds' were critical for trade in which ocean?", options: ["Atlantic", "Pacific", "Indian", "Arctic"], correctAnswer: "Indian", explanation: "The Indian Ocean trade relied on the predictable seasonal monsoon winds for navigation." },
  { id: 21, stimulusId: 5, question: "The 'terrible plague' described is also known as:", options: ["The Great Famine", "The Black Death", "The Spanish Flu", "Smallpox"], correctAnswer: "The Black Death", explanation: "The Bubonic Plague (Black Death) killed an estimated 75-200 million people in Eurasia." },
  { id: 22, stimulusId: 5, question: "How did the plague primarily travel to Europe?", options: ["By birds", "Along trade routes (Silk Road/Sea)", "Through contaminated water", "By wind"], correctAnswer: "Along trade routes (Silk Road/Sea)", explanation: "The plague spread from Central Asia via merchant ships and caravansaries." },
  { id: 23, stimulusId: 5, question: "What was a major social consequence of the plague in Europe?", options: ["Rise of feudalism", "Decline of serfdom and higher wages", "Increased power of the Church", "End of all trade"], correctAnswer: "Decline of serfdom and higher wages", explanation: "The massive loss of life led to a labor shortage, giving peasants more bargaining power and weakening the manorial system." },
  { id: 24, stimulusId: 5, question: "Which group was often scapegoated for the spread of the plague?", options: ["Merchants", "The Nobility", "Jewish communities", "The Clergy"], correctAnswer: "Jewish communities", explanation: "Anti-Semitic violence increased as people looked for someone to blame for the catastrophe." },
  { id: 25, stimulusId: 5, question: "The plague is an example of which type of consequence of trade?", options: ["Cultural", "Technological", "Biological", "Economic"], correctAnswer: "Biological", explanation: "The spread of disease is a biological consequence of increased global connectivity." },
  { id: 26, stimulusId: 6, question: "Caravansaries were essential for trade in which environment?", options: ["The Ocean", "The Desert/Steppe", "The Rainforest", "The Mountains"], correctAnswer: "The Desert/Steppe", explanation: "They provided vital rest and protection for camel caravans crossing arid regions." },
  { id: 27, stimulusId: 6, question: "Which animal was the 'ship of the desert' on these routes?", options: ["Horse", "Ox", "Camel", "Elephant"], correctAnswer: "Camel", explanation: "Camels were uniquely adapted to long-distance travel in desert environments." },
  { id: 28, stimulusId: 6, question: "The growth of trade cities like Samarkand was due to their location as:", options: ["Island ports", "Oasis/Trade hubs", "Mountain fortresses", "Religious capitals"], correctAnswer: "Oasis/Trade hubs", explanation: "Samarkand and Kashgar were vital stopping points where trade routes intersected." },
  { id: 29, stimulusId: 6, question: "What was the primary 'protection' offered by a caravanserai?", options: ["Medicine", "Safety from bandits", "Free food", "Religious guidance"], correctAnswer: "Safety from bandits", explanation: "The fortified nature of these buildings protected merchants and their valuable cargo." },
  { id: 30, stimulusId: 6, question: "Caravansaries facilitated the spread of which of the following?", options: ["Religions and ideas", "New crops", "Diseases", "All of the above"], correctAnswer: "All of the above", explanation: "As hubs of interaction, they facilitated the exchange of culture, biology, and technology." },
  { id: 31, stimulusId: 7, question: "Champa rice originated in which modern-day country?", options: ["China", "Vietnam", "India", "Japan"], correctAnswer: "Vietnam", explanation: "Champa rice was a drought-resistant, fast-ripening variety from the Champa kingdom in Vietnam." },
  { id: 32, stimulusId: 7, question: "The 'two harvests a year' led to which demographic shift?", options: ["Urbanization", "Mass migration to the north", "Population decline", "End of the civil service exam"], correctAnswer: "Urbanization", explanation: "Increased food supply supported larger populations and the growth of massive cities like Hangzhou." },
  { id: 33, stimulusId: 7, question: "Which dynasty is known for its 'economic revolution' and use of Champa rice?", options: ["Tang", "Song", "Han", "Sui"], correctAnswer: "Song", explanation: "The Song Dynasty saw a period of immense economic growth, technological innovation, and agricultural expansion." },
  { id: 34, stimulusId: 7, question: "The spread of Champa rice is an example of:", options: ["Industrialization", "Agricultural diffusion", "Mercantilism", "Feudalism"], correctAnswer: "Agricultural diffusion", explanation: "It represents the spread of crops and farming techniques through trade and tribute." },
  { id: 35, stimulusId: 7, question: "What other Chinese innovation improved agricultural production?", options: ["The Steam Engine", "The Iron Plow", "The Cotton Gin", "The Printing Press"], correctAnswer: "The Iron Plow", explanation: "Improvements in iron tools and irrigation systems further boosted Song agricultural output." },
  { id: 36, stimulusId: 8, question: "The Hanseatic League operated in which seas?", options: ["Mediterranean and Red", "Baltic and North", "Caribbean and Atlantic", "Indian and Pacific"], correctAnswer: "Baltic and North", explanation: "The League dominated trade in Northern Europe, connecting cities from London to Novgorod." },
  { id: 37, stimulusId: 8, question: "What was the primary purpose of the League's 'own armies'?", options: ["To conquer new lands", "To protect trade from pirates and rivals", "To spread Christianity", "To overthrow kings"], correctAnswer: "To protect trade from pirates and rivals", explanation: "The League was a defensive and economic alliance designed to secure trade routes." },
  { id: 38, stimulusId: 8, question: "The League is an example of which type of trade organization?", options: ["Joint-stock company", "Commercial alliance", "Religious order", "Government department"], correctAnswer: "Commercial alliance", explanation: "It was a confederation of merchant guilds and their market towns." },
  { id: 39, stimulusId: 8, question: "Which city was a major hub for the Hanseatic League?", options: ["Venice", "Lübeck", "Constantinople", "Cairo"], correctAnswer: "Lübeck", explanation: "Lübeck was the leading city and administrative center of the Hanseatic League." },
  { id: 40, stimulusId: 8, question: "The League's decline was partly due to the rise of:", options: ["The Mongols", "National monarchies (England/France)", "The Silk Road", "The Crusades"], correctAnswer: "National monarchies (England/France)", explanation: "As centralized states grew stronger, they challenged the independent power of the trading cities." },
  { id: 41, stimulusId: 9, question: "The 'lateen sail' was an innovation that allowed ships to:", options: ["Carry more weight", "Sail against the wind", "Go faster in a straight line", "Stay underwater"], correctAnswer: "Sail against the wind", explanation: "The triangular lateen sail allowed for 'tacking,' making it possible to navigate regardless of wind direction." },
  { id: 42, stimulusId: 9, question: "Which culture is credited with the invention of the astrolabe?", options: ["Chinese", "Greek/Islamic", "Portuguese", "Indian"], correctAnswer: "Greek/Islamic", explanation: "The astrolabe was developed in the Hellenistic world and perfected by Islamic scholars." },
  { id: 43, stimulusId: 9, question: "The 'stern rudder' improved which aspect of sailing?", options: ["Speed", "Steering and maneuverability", "Cargo capacity", "Defense"], correctAnswer: "Steering and maneuverability", explanation: "The stern-mounted rudder allowed for much more precise control of large vessels." },
  { id: 44, stimulusId: 9, question: "Indian Ocean trade led to the rise of which East African culture?", options: ["Zulu", "Swahili", "Mali", "Ghana"], correctAnswer: "Swahili", explanation: "The Swahili culture emerged from the blending of Bantu and Arab/Persian influences along the coast." },
  { id: 45, stimulusId: 9, question: "What was a major export from the Swahili City-States?", options: ["Silk", "Gold and Ivory", "Spices", "Porcelain"], correctAnswer: "Gold and Ivory", explanation: "East Africa provided raw materials like gold, ivory, and iron to the Indian Ocean network." },
  { id: 46, stimulusId: 10, question: "Mansa Musa was the ruler of which empire?", options: ["Ghana", "Songhai", "Mali", "Ethiopia"], correctAnswer: "Mali", explanation: "Mansa Musa is often considered the wealthiest individual in history and ruled the Mali Empire." },
  { id: 47, stimulusId: 10, question: "What was the primary purpose of Musa's pilgrimage (Hajj)?", options: ["To conquer Egypt", "To fulfill a religious duty", "To find new gold mines", "To escape a rebellion"], correctAnswer: "To fulfill a religious duty", explanation: "As a devout Muslim, Musa's Hajj to Mecca was a central act of his faith." },
  { id: 48, stimulusId: 10, question: "How did Musa's journey affect the perception of Mali?", options: ["It made Mali look poor", "It put Mali on the world map (literally)", "It led to an invasion of Mali", "It had no impact"], correctAnswer: "It put Mali on the world map (literally)", explanation: "Musa's display of wealth led to Mali being included on European maps, like the Catalan Atlas." },
  { id: 49, stimulusId: 10, question: "The 'gold' Musa distributed came from which region?", options: ["North Africa", "West Africa (Bure/Bambuk)", "East Africa", "South Africa"], correctAnswer: "West Africa (Bure/Bambuk)", explanation: "Mali controlled the rich gold fields of West Africa." },
  { id: 50, stimulusId: 10, question: "Musa's pilgrimage is an example of which theme?", options: ["Industrialization", "Cultural and religious diffusion", "Isolationism", "Environmental change"], correctAnswer: "Cultural and religious diffusion", explanation: "His journey strengthened Islamic ties and brought scholars and architects back to Mali." }
];

const QuizUnit2 = () => {
  const navigate = useNavigate();
  const { saveQuizResult } = useQuizProgress();
  
  const [mode, setMode] = useState<'study' | 'exam' | null>(null);
  const [questions, setQuestions] = useState(initialQuestions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [checkedIndices, setCheckedIndices] = useState<Set<number>>(new Set());
  const [crossedOut, setCrossedOut] = useState<Record<number, string[]>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(50 * 60);

  const currentQuestion = questions[currentIndex];
  const currentStimulus = stimuli.find(s => s.id === currentQuestion.stimulusId);
  const progress = (currentIndex / questions.length) * 100;

  useEffect(() => {
    if (mode === 'exam' && !isFinished && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !isFinished) {
      finishQuiz();
    }
  }, [mode, isFinished, timeLeft]);

  const handleShuffle = () => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    setQuestions(shuffled);
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
    if (userAnswers[currentIndex] === currentQuestion.correctAnswer) {
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
                  {currentQuestion.options.map((option, idx) => {
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