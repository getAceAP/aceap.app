import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, RefreshCcw, CheckCircle2, XCircle, Info, BookOpen, X, Timer } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { playSound } from "@/utils/sounds";
import QuizModeSelection from "@/components/QuizModeSelection";
import { useQuizProgress } from "@/hooks/useQuizProgress";

const stimuli = [
  { id: 1, text: "The Sultan's power is absolute... he recruits the sons of his Christian subjects, converts them to Islam, and trains them to be his most loyal soldiers and administrators.", source: "Ogier Ghiselin de Busbecq, Ambassador of the Holy Roman Empire to the Ottoman Court, c. 1555" },
  { id: 2, text: "Akbar the Great has established a policy of 'Sulh-i-kul' or universal peace... he has abolished the jizya tax on non-Muslims and invited scholars of all faiths to debate in his House of Worship.", source: "Abu'l-Fazl, Akbarnama (Official Chronicles of Akbar's Reign), c. 1590" },
  { id: 3, text: "The Shah has made Shi'ism the state religion of Persia... he has built a magnificent capital at Isfahan, with grand mosques and bazaars that rival any in the world.", source: "European traveler's account of the Safavid Empire, c. 1620" },
  { id: 4, text: "The Manchu rulers have ordered all Chinese men to shave their foreheads and wear their hair in a long queue... this is a sign of submission to the new Qing Dynasty.", source: "Imperial Edict of the Qing Dynasty, 1645" },
  { id: 5, text: "Peter the Great has ordered his boyars to shave their beards and wear Western-style clothing... he is determined to modernize Russia and build a powerful navy on the Baltic Sea.", source: "Decree of Peter the Great on Westernization, 1698" },
  { id: 6, text: "The King is the image of God on earth... his power is divine and absolute, and he is accountable to no one but God for his actions.", source: "Jacques-Bénigne Bossuet, Politics Drawn from the Very Words of Holy Scripture, 1709" },
  { id: 7, text: "The Aztecs demand tribute from the people they conquer... they require maize, beans, gold, and even human victims for their religious sacrifices.", source: "Bernal Díaz del Castillo, The True History of the Conquest of New Spain, c. 1560" },
  { id: 8, text: "The Inca state requires every adult male to perform labor for the government... this 'mita' system is used to build roads, terraces, and temples across the Andes.", source: "Spanish chronicler describing the Inca labor system, c. 1540" },
  { id: 9, text: "Unless I am convinced by the testimony of the Scriptures or by clear reason... I cannot and will not recant anything, for to go against conscience is neither right nor safe. Here I stand, I can do no other.", source: "Martin Luther at the Diet of Worms, 1521" },
  { id: 10, text: "The Council of Trent has reaffirmed the authority of the Pope and the seven sacraments... it has also established new rules for the education of priests to combat the spread of heresy.", source: "Decrees of the Council of Trent, 1545-1563" }
];

const questions = [
  { id: 1, stimulusId: 1, question: "The recruitment system described by Busbecq is known as:", options: ["Mita", "Devshirme", "Zamindar", "Enslavement"], correctAnswer: "Devshirme", explanation: "The devshirme system involved taking Christian boys from the Balkans to serve the Ottoman state." },
  { id: 2, stimulusId: 1, question: "The elite soldiers created through this system were called:", options: ["Samurai", "Janissaries", "Cossacks", "Knights"], correctAnswer: "Janissaries", explanation: "Janissaries were the Sultan's elite infantry, known for their discipline and use of gunpowder." },
  { id: 3, stimulusId: 1, question: "The Ottoman Empire was primarily of which Islamic sect?", options: ["Sunni", "Shi'a", "Sufi", "Ibadi"], correctAnswer: "Sunni", explanation: "The Ottomans were the leading Sunni power, often in conflict with the Shi'a Safavids." },
  { id: 4, stimulusId: 1, question: "Which city did the Ottomans conquer in 1453, ending the Byzantine Empire?", options: ["Rome", "Baghdad", "Constantinople", "Vienna"], correctAnswer: "Constantinople", explanation: "The fall of Constantinople marked the rise of the Ottomans as a major world power." },
  { id: 5, stimulusId: 1, question: "The Ottoman Sultan also claimed the title of 'Caliph,' meaning:", options: ["King of Kings", "Successor to Muhammad", "Holy Warrior", "Chief Administrator"], correctAnswer: "Successor to Muhammad", explanation: "The title of Caliph asserted the Sultan's leadership over the entire Muslim world." },
  { id: 6, stimulusId: 2, question: "Akbar's 'House of Worship' (Ibadat Khana) is an example of:", options: ["Religious intolerance", "Syncretism and dialogue", "Military planning", "Tax collection"], correctAnswer: "Syncretism and dialogue", explanation: "Akbar encouraged debates between Muslims, Hindus, Christians, and others to find common truth." },
  { id: 7, stimulusId: 2, question: "The 'jizya' tax was a tax on:", options: ["Land", "Trade", "Non-Muslims", "Luxury goods"], correctAnswer: "Non-Muslims", explanation: "The jizya was a traditional Islamic tax on non-Muslim subjects, which Akbar abolished to promote unity." },
  { id: 8, stimulusId: 2, question: "The Mughal Empire ruled over a majority population of which faith?", options: ["Islam", "Hinduism", "Buddhism", "Sikhism"], correctAnswer: "Hinduism", explanation: "The Mughals were a Muslim minority ruling over a vast Hindu majority in India." },
  { id: 9, stimulusId: 2, question: "Which Mughal emperor built the Taj Mahal as a tomb for his wife?", options: ["Akbar", "Babur", "Shah Jahan", "Aurangzeb"], correctAnswer: "Shah Jahan", explanation: "Shah Jahan built the Taj Mahal, a masterpiece of Indo-Islamic architecture." },
  { id: 10, stimulusId: 2, question: "The 'Zamindars' in the Mughal Empire were responsible for:", options: ["Leading the army", "Collecting taxes", "Religious education", "Naval exploration"], correctAnswer: "Collecting taxes", explanation: "Zamindars were local landholders who acted as tax collectors for the central government." },
  { id: 11, stimulusId: 3, question: "The Safavid Empire was located in which modern-day country?", options: ["Turkey", "India", "Iran", "Egypt"], correctAnswer: "Iran", explanation: "The Safavids established a powerful Persian state centered in modern-day Iran." },
  { id: 12, stimulusId: 3, question: "The Safavids' adoption of Shi'ism led to frequent conflict with which neighbor?", options: ["Mughals", "Ottomans", "Russians", "Chinese"], correctAnswer: "Ottomans", explanation: "The Sunni-Shi'a split was a major cause of the long-running Ottoman-Safavid wars." },
  { id: 13, stimulusId: 3, question: "The Safavid capital of Isfahan was famous for its:", options: ["Great Wall", "Pyramids", "Grand architecture and bazaars", "Naval port"], correctAnswer: "Grand architecture and bazaars", explanation: "Isfahan was one of the most beautiful and prosperous cities of the early modern world." },
  { id: 14, stimulusId: 3, question: "The Safavid rulers used which title to claim authority?", options: ["Sultan", "Shah", "Tsar", "Emperor"], correctAnswer: "Shah", explanation: "Shah is the traditional Persian title for a monarch." },
  { id: 15, stimulusId: 3, question: "Which group of elite soldiers did the Safavids create to counter the Janissaries?", options: ["Samurai", "Ghulams", "Cossacks", "Mamluks"], correctAnswer: "Ghulams", explanation: "Ghulams were enslaved soldiers, often of Georgian or Armenian origin, loyal only to the Shah." },
  { id: 16, stimulusId: 4, question: "The Qing Dynasty was founded by which ethnic group?", options: ["Han", "Manchu", "Mongol", "Tibetan"], correctAnswer: "Manchu", explanation: "The Manchus from the northeast conquered the Ming Dynasty and established the Qing." },
  { id: 17, stimulusId: 4, question: "The 'queue' hairstyle was used by the Qing to:", options: ["Promote fashion", "Identify soldiers", "Enforce submission and loyalty", "Improve hygiene"], correctAnswer: "Enforce submission and loyalty", explanation: "Forcing Han Chinese men to wear the queue was a way to demonstrate Manchu dominance." },
  { id: 18, stimulusId: 4, question: "The Qing Dynasty expanded Chinese borders to include which region?", options: ["Japan", "Tibet and Mongolia", "Vietnam", "The Philippines"], correctAnswer: "Tibet and Mongolia", explanation: "The Qing greatly expanded the empire's territory through military conquest." },
  { id: 19, stimulusId: 4, question: "Which system did the Qing continue to use to recruit government officials?", options: ["The Mita system", "The Civil Service Exam", "The Devshirme", "The Feudal system"], correctAnswer: "The Civil Service Exam", explanation: "The Qing maintained the traditional Confucian exam system to ensure a capable bureaucracy." },
  { id: 20, stimulusId: 4, question: "The Qing policy of 'Cantor System' restricted trade with which group?", options: ["The Mongols", "The Japanese", "Europeans", "The Mughals"], correctAnswer: "Europeans", explanation: "The Canton System limited European trade to a single port to control foreign influence." },
  { id: 21, stimulusId: 5, question: "Peter the Great's primary goal for Russia was:", options: ["Isolation", "Westernization and modernization", "Returning to Mongol rule", "Spreading Buddhism"], correctAnswer: "Westernization and modernization", explanation: "Peter sought to make Russia a major European power through technology and cultural change." },
  { id: 22, stimulusId: 5, question: "The 'boyars' mentioned in the text were Russia's:", options: ["Peasants", "Merchants", "Landowning nobles", "Priests"], correctAnswer: "Landowning nobles", explanation: "Peter worked to reduce the power of the boyars and centralize authority in the Tsar." },
  { id: 23, stimulusId: 5, question: "Peter built a new capital city called:", options: ["Moscow", "St. Petersburg", "Kiev", "Novgorod"], correctAnswer: "St. Petersburg", explanation: "St. Petersburg was Peter's 'window to the West,' built on the Baltic Sea." },
  { id: 24, stimulusId: 5, question: "Which empire did Peter defeat to gain access to the Baltic Sea?", options: ["Ottoman", "Swedish", "Polish", "Mongol"], correctAnswer: "Swedish", explanation: "The Great Northern War against Sweden gave Russia its vital warm-water port." },
  { id: 25, stimulusId: 5, question: "Peter's reforms included the creation of a 'Table of Ranks,' which was a:", options: ["Tax code", "Merit-based system for the military and bureaucracy", "Religious hierarchy", "List of banned books"], correctAnswer: "Merit-based system for the military and bureaucracy", explanation: "The Table of Ranks allowed commoners to rise in status through service to the state." },
  { id: 26, stimulusId: 6, question: "The idea that a King's power is 'divine' is known as:", options: ["Popular Sovereignty", "Divine Right of Kings", "Social Contract", "Constitutionalism"], correctAnswer: "Divine Right of Kings", explanation: "This theory argued that monarchs were chosen by God and had absolute authority." },
  { id: 27, stimulusId: 6, question: "Which French King is the best example of an absolute monarch?", options: ["Louis XIV", "Henry IV", "Napoleon", "Louis XVI"], correctAnswer: "Louis XIV", explanation: "The 'Sun King' famously said 'L'état, c'est moi' (I am the state) and built Versailles." },
  { id: 28, stimulusId: 6, question: "How did Louis XIV use the Palace of Versailles to control the nobility?", options: ["He imprisoned them there", "He forced them to live there to keep an eye on them", "He gave it to them as a gift", "He banned them from the palace"], correctAnswer: "He forced them to live there to keep an eye on them", explanation: "By keeping the nobles at court, Louis prevented them from plotting rebellions in their home provinces." },
  { id: 29, stimulusId: 6, question: "Absolute monarchs often used which of the following to legitimize their rule?", options: ["Elections", "Grand architecture and art", "Free speech", "Labor unions"], correctAnswer: "Grand architecture and art", explanation: "Palaces, portraits, and monuments were used to project power and divine favor." },
  { id: 30, stimulusId: 6, question: "Which country developed a 'Constitutional Monarchy' instead of an absolute one?", options: ["France", "Russia", "England", "Spain"], correctAnswer: "England", explanation: "The Glorious Revolution and the Bill of Rights limited the power of the English monarch." },
  { id: 31, stimulusId: 7, question: "The Aztec Empire was centered in which modern-day country?", options: ["Peru", "Mexico", "Guatemala", "Brazil"], correctAnswer: "Mexico", explanation: "The Aztecs built their capital, Tenochtitlan, in the Valley of Mexico." },
  { id: 32, stimulusId: 7, question: "The Aztec 'tribute system' was primarily used to:", options: ["Spread their religion", "Support the capital and military", "Build schools", "Encourage trade"], correctAnswer: "Support the capital and military", explanation: "Tribute from conquered peoples provided the food and wealth needed to sustain the empire." },
  { id: 33, stimulusId: 7, question: "Which Spanish conquistador led the conquest of the Aztecs?", options: ["Francisco Pizarro", "Hernán Cortés", "Christopher Columbus", "Ferdinand Magellan"], correctAnswer: "Hernán Cortés", explanation: "Cortés used alliances with Aztec enemies and superior technology to conquer the empire." },
  { id: 34, stimulusId: 7, question: "The Aztec capital, Tenochtitlan, was unique because it was built:", options: ["On a mountain", "In a rainforest", "On an island in a lake", "Underground"], correctAnswer: "On an island in a lake", explanation: "The city was built on Lake Texcoco and featured advanced engineering like causeways and chinampas." },
  { id: 35, stimulusId: 7, question: "What was a major factor in the fall of the Aztec Empire?", options: ["A massive earthquake", "Internal civil war", "Smallpox and other diseases", "Lack of food"], correctAnswer: "Smallpox and other diseases", explanation: "European diseases decimated the Aztec population, making resistance difficult." },
  { id: 36, stimulusId: 8, question: "The Inca Empire was located in which mountain range?", options: ["Himalayas", "Rockies", "Andes", "Alps"], correctAnswer: "Andes", explanation: "The Inca built a vast empire stretching along the western coast of South America." },
  { id: 37, stimulusId: 8, question: "The 'mita' system was a form of:", options: ["Religious sacrifice", "Labor tax", "Military draft", "Trade agreement"], correctAnswer: "Labor tax", explanation: "The mita required subjects to work on state projects like roads and bridges." },
  { id: 38, stimulusId: 8, question: "How did the Inca maintain communication across their vast empire?", options: ["By sea", "A massive road system (Carpa Nan)", "Using horses", "Through the jungle"], correctAnswer: "A massive road system (Carpa Nan)", explanation: "The Inca built over 25,000 miles of roads to move troops and information." },
  { id: 39, stimulusId: 8, question: "Which Spanish conquistador led the conquest of the Inca?", options: ["Hernán Cortés", "Francisco Pizarro", "Vasco da Gama", "Bartholomew Dias"], correctAnswer: "Francisco Pizarro", explanation: "Pizarro captured the Inca ruler Atahualpa and eventually took control of the empire." },
  { id: 40, stimulusId: 8, question: "The Inca used 'quipu' for record-keeping, which were:", options: ["Written books", "Knotted strings", "Painted pottery", "Stone carvings"], correctAnswer: "Knotted strings", explanation: "Quipu were used to record numerical data and possibly narrative information." },
  { id: 41, stimulusId: 9, question: "Martin Luther's primary grievance with the Catholic Church was:", options: ["The use of Latin", "The sale of indulgences", "The power of the King", "The Crusades"], correctAnswer: "The sale of indulgences", explanation: "Luther argued that salvation could not be bought through payments to the church." },
  { id: 42, stimulusId: 9, question: "Which technology helped spread Luther's ideas rapidly?", options: ["The Steam Engine", "The Printing Press", "The Compass", "The Telescope"], correctAnswer: "The Printing Press", explanation: "Gutenberg's printing press allowed Luther's 95 Theses and German Bible to reach a wide audience." },
  { id: 43, stimulusId: 9, question: "The Protestant Reformation led to the creation of which new branch of Christianity?", options: ["Eastern Orthodox", "Protestantism", "Catholicism", "Coptic"], correctAnswer: "Protestantism", explanation: "The Reformation split Western Christianity into Catholic and various Protestant denominations." },
  { id: 44, stimulusId: 9, question: "What was a major political consequence of the Reformation?", options: ["The unification of Europe", "The Thirty Years' War", "The end of all monarchy", "The rise of the Mongols"], correctAnswer: "The Thirty Years' War", explanation: "Religious differences fueled a devastating conflict that involved most of Europe." },
  { id: 45, stimulusId: 9, question: "Luther's belief in 'Sola Fide' meant that salvation comes through:", options: ["Good works", "Faith alone", "The Pope", "The Sacraments"], correctAnswer: "Faith alone", explanation: "Luther argued that faith in God was the only requirement for salvation." },
  { id: 46, stimulusId: 10, question: "The Council of Trent was a key part of the:", options: ["Protestant Reformation", "Counter-Reformation (Catholic Reformation)", "Enlightenment", "Scientific Revolution"], correctAnswer: "Counter-Reformation (Catholic Reformation)", explanation: "The Catholic Church met to reform itself and respond to the Protestant challenge." },
  { id: 47, stimulusId: 10, question: "Which new religious order was founded to spread Catholicism and combat heresy?", options: ["Franciscans", "Dominicans", "Jesuits (Society of Jesus)", "Benedictines"], correctAnswer: "Jesuits (Society of Jesus)", explanation: "The Jesuits, founded by Ignatius of Loyola, became famous for their education and missionary work." },
  { id: 48, stimulusId: 10, question: "The 'Inquisition' was used by the Catholic Church to:", options: ["Explore the Americas", "Root out and punish heresy", "Build new cathedrals", "Translate the Bible"], correctAnswer: "Root out and punish heresy", explanation: "The Inquisition was a system of courts used to enforce religious orthodoxy." },
  { id: 49, stimulusId: 10, question: "The Counter-Reformation succeeded in:", options: ["Ending Protestantism", "Reforming church abuses and stopping the spread of Protestantism in some areas", "Unifying all Christians", "Abolishing the Papacy"], correctAnswer: "Reforming church abuses and stopping the spread of Protestantism in some areas", explanation: "The Church addressed corruption and successfully re-converted parts of Europe and the Americas." },
  { id: 50, stimulusId: 10, question: "The religious wars in Europe eventually ended with the:", options: ["Treaty of Tordesillas", "Peace of Westphalia", "Magna Carta", "Edict of Nantes"], correctAnswer: "Peace of Westphalia", explanation: "The 1648 treaty established the principle of state sovereignty and religious self-determination." }
];

const QuizUnit3 = () => {
  const navigate = useNavigate();
  const { saveQuizResult } = useQuizProgress();
  
  const [mode, setMode] = useState<'study' | 'exam' | null>(null);
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
    saveQuizResult(3, score, questions.length, mode!);
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
        <QuizModeSelection unitTitle="Unit 3: Land-Based Empires" onSelect={setMode} />
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
            <h2 className="text-3xl font-bold">Unit 3 Mastery Complete!</h2>
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
          <Button variant="ghost" onClick={() => navigate("/units/ap-world")} className="text-muted-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" /> Exit
          </Button>
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
              <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">Unit 3: Land-Based Empires</div>
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
                <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
                  {currentQuestion.question}
                </h2>

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
                          )}>
                            {letter}
                          </span>
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
                          >
                            <X size={12} />
                          </button>
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
                        <Info size={14} />
                        Explanation
                      </div>
                      <p className="text-foreground leading-relaxed">{currentQuestion.explanation}</p>
                    </motion.div>
                  )}

                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      onClick={() => setCurrentIndex(prev => prev - 1)} 
                      disabled={currentIndex === 0}
                      className="flex-1 h-14 rounded-2xl text-lg font-bold"
                    >
                      Back
                    </Button>
                    
                    {mode === 'study' && !checkedIndices.has(currentIndex) ? (
                      <Button 
                        onClick={handleCheck} 
                        disabled={!userAnswers[currentIndex]}
                        className="flex-[2] h-14 rounded-2xl text-lg font-bold shadow-lg shadow-primary/20"
                      >
                        Check Answer
                      </Button>
                    ) : (
                      <Button 
                        onClick={handleNext} 
                        disabled={mode === 'exam' && !userAnswers[currentIndex]}
                        className="flex-[2] h-14 rounded-2xl text-lg font-bold shadow-lg shadow-primary/20"
                      >
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

export default QuizUnit3;