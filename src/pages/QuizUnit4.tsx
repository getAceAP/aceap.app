import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, RefreshCcw, CheckCircle2, XCircle, Info, BookOpen, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { playSound } from "@/utils/sounds";

const stimuli = [
  { id: 1, text: "The expansion of maritime empires was facilitated by new technologies. The Portuguese caravel, with its lateen sails, allowed for navigation against the wind, while the astrolabe and improved cartography enabled precise location tracking.", source: "Portuguese Maritime Museum" },
  { id: 2, text: "The Columbian Exchange was a biological collision. It brought maize and potatoes to Afro-Eurasia, fueling population growth, while bringing smallpox and measles to the Americas, causing the 'Great Dying' of indigenous populations.", source: "Historical Archive" },
  { id: 3, text: "Mercantilism drove European states to establish colonies. The goal was to accumulate gold and silver by maintaining a favorable balance of trade, often through the use of joint-stock companies like the VOC and the British East India Company.", source: "British Museum" },
  { id: 4, text: "The Trans-Atlantic Slave Trade was a forced migration of unprecedented scale. Enslaved Africans were brought to the Americas to work on plantations producing cash crops like sugar, tobacco, and cotton for global markets.", source: "National Museum of African American History" },
  { id: 5, text: "The Spanish Casta System in the Americas was a rigid social hierarchy based on race. It categorized individuals as Peninsulares, Creoles, Mestizos, Mulattoes, and indigenous/African peoples, determining their legal rights and social status.", source: "Museo Nacional del Virreinato" },
  { id: 6, text: "Silver from the Potosí mines in modern-day Bolivia became the first global currency. It flowed from the Americas to Europe and then to China, where it was used to pay for luxury goods like silk and porcelain.", source: "Potosí Mint Museum" },
  { id: 7, text: "Resistance to state power was common. Queen Ana Nzinga of Ndongo and Matamba resisted Portuguese expansion in Africa, while the Pueblo Revolt in New Mexico successfully expelled the Spanish for over a decade.", source: "Historical Illustration" },
  { id: 8, text: "The Mita system, originally an Incan labor tax, was adapted by the Spanish to force indigenous people to work in dangerous silver mines. This coercive labor was essential for the extraction of wealth for the Spanish Crown.", source: "Archive of the Indies" },
  { id: 9, text: "Syncretic religions emerged as cultures collided. Santeria in Cuba and Vodun in Haiti blended West African traditions with Roman Catholicism, allowing enslaved people to maintain their heritage under colonial rule.", source: "Cultural Heritage Archive" },
  { id: 10, text: "The Treaty of Tordesillas (1494) divided the newly 'discovered' lands outside Europe between Portugal and Spain. This line of demarcation shaped the colonial boundaries of Brazil and the rest of Latin America.", source: "Torre do Tombo National Archive" }
];

const questions = [
  { id: 1, stimulusId: 1, question: "Which technology allowed the Portuguese to sail against the wind?", options: ["Astrolabe", "Lateen Sail", "Stern Rudder", "Magnetic Compass"], correctAnswer: "Lateen Sail", explanation: "The triangular lateen sail allowed ships to tack against the wind, essential for exploring the African coast." },
  { id: 2, stimulusId: 1, question: "The astrolabe was primarily used for what purpose?", options: ["Measuring speed", "Determining latitude", "Predicting weather", "Mapping the stars"], correctAnswer: "Determining latitude", explanation: "The astrolabe measured the angle of the sun or stars above the horizon to find latitude." },
  { id: 3, stimulusId: 1, question: "Which culture originally developed the magnetic compass?", options: ["Portuguese", "Islamic", "Chinese", "Greek"], correctAnswer: "Chinese", explanation: "The magnetic compass was a Chinese invention that spread to Europe via trade routes." },
  { id: 4, stimulusId: 1, question: "The caravel was a ship design pioneered by which nation?", options: ["Spain", "England", "Netherlands", "Portugal"], correctAnswer: "Portugal", explanation: "Portugal developed the caravel specifically for long-distance maritime exploration." },
  { id: 5, stimulusId: 1, question: "What was the primary goal of improved cartography in this era?", options: ["To find gold", "To map the stars", "To navigate more accurately", "To claim land"], correctAnswer: "To navigate more accurately", explanation: "Better maps allowed sailors to return to specific locations and navigate open oceans with more confidence." },
  { id: 6, stimulusId: 2, question: "Which crop from the Americas led to a population boom in Afro-Eurasia?", options: ["Wheat", "Rice", "Potato", "Sugar"], correctAnswer: "Potato", explanation: "The potato provided high caloric value and grew in varied climates, supporting massive population growth." },
  { id: 7, stimulusId: 2, question: "The 'Great Dying' refers to the mass death of which group?", options: ["Enslaved Africans", "European Sailors", "Indigenous Americans", "Chinese Merchants"], correctAnswer: "Indigenous Americans", explanation: "Old World diseases like smallpox killed up to 90% of the indigenous population in the Americas." },
  { id: 8, stimulusId: 2, question: "Which of these was a 'New World' crop introduced to the 'Old World'?", options: ["Coffee", "Maize", "Sugar", "Bananas"], correctAnswer: "Maize", explanation: "Maize (corn) is native to the Americas and was a key part of the Columbian Exchange." },
  { id: 9, stimulusId: 2, question: "What was the primary cause of the 'Great Dying'?", options: ["Warfare", "Famine", "Disease", "Slavery"], correctAnswer: "Disease", explanation: "Indigenous people had no immunity to Afro-Eurasian diseases like smallpox and measles." },
  { id: 10, stimulusId: 2, question: "Which animal was introduced to the Americas from Europe?", options: ["Llama", "Turkey", "Horse", "Bison"], correctAnswer: "Horse", explanation: "Horses were brought by Europeans and fundamentally changed indigenous cultures, especially on the Great Plains." },
  { id: 11, stimulusId: 3, question: "What was the primary goal of mercantilism?", options: ["Free trade", "Accumulating gold and silver", "Religious conversion", "Abolishing slavery"], correctAnswer: "Accumulating gold and silver", explanation: "Mercantilism focused on state wealth through the accumulation of precious metals." },
  { id: 12, stimulusId: 3, question: "How did mercantilist states view colonies?", options: ["As equal partners", "As sources of raw materials", "As independent nations", "As religious centers"], correctAnswer: "As sources of raw materials", explanation: "Colonies provided raw materials and served as markets for the mother country's manufactured goods." },
  { id: 13, stimulusId: 3, question: "What is a 'favorable balance of trade'?", options: ["Equal imports and exports", "Exporting more than importing", "Importing more than exporting", "Trading only with allies"], correctAnswer: "Exporting more than importing", explanation: "States wanted to sell more than they bought to keep gold within their borders." },
  { id: 14, stimulusId: 3, question: "The VOC (Dutch East India Company) is an example of what?", options: ["A religious order", "A joint-stock company", "A pirate fleet", "A government agency"], correctAnswer: "A joint-stock company", explanation: "Joint-stock companies allowed private investors to pool capital for global trade ventures." },
  { id: 15, stimulusId: 3, question: "Which company held a monopoly on the spice trade in the 17th century?", options: ["British East India Company", "VOC (Dutch)", "Spanish Armada", "French Fur Company"], correctAnswer: "VOC (Dutch)", explanation: "The Dutch VOC dominated the spice trade in Southeast Asia through military and economic force." },
  { id: 16, stimulusId: 4, question: "What was the primary destination for most enslaved Africans?", options: ["North America", "Europe", "Brazil and the Caribbean", "South Africa"], correctAnswer: "Brazil and the Caribbean", explanation: "The majority of enslaved people were sent to sugar plantations in Brazil and the Caribbean." },
  { id: 17, stimulusId: 4, question: "Which crop was the main driver of the Trans-Atlantic Slave Trade?", options: ["Tobacco", "Cotton", "Sugar", "Indigo"], correctAnswer: "Sugar", explanation: "Sugar production was extremely labor-intensive and highly profitable, driving the demand for enslaved labor." },
  { id: 18, stimulusId: 4, question: "The 'Middle Passage' refers to which part of the trade?", options: ["The journey from Europe to Africa", "The journey from Africa to the Americas", "The journey from the Americas to Europe", "The internal African trade"], correctAnswer: "The journey from Africa to the Americas", explanation: "The Middle Passage was the brutal sea voyage across the Atlantic for enslaved Africans." },
  { id: 19, stimulusId: 4, question: "What was a demographic consequence of the slave trade in Africa?", options: ["Population boom", "Gender imbalance", "Unification of tribes", "Industrialization"], correctAnswer: "Gender imbalance", explanation: "The trade primarily targeted young men, leaving a significant gender imbalance in many African societies." },
  { id: 20, stimulusId: 4, question: "How did the slave trade affect the Americas?", options: ["It led to the end of farming", "It created multicultural societies", "It reduced the population", "It led to the rise of democracy"], correctAnswer: "It created multicultural societies", explanation: "The forced migration of Africans introduced new cultures, languages, and religions to the Americas." },
  { id: 21, stimulusId: 5, question: "Who were the 'Peninsulares' in the Casta System?", options: ["People born in the Americas", "People born in Spain", "Mixed-race individuals", "Enslaved people"], correctAnswer: "People born in Spain", explanation: "Peninsulares were at the top of the hierarchy and were born on the Iberian Peninsula." },
  { id: 22, stimulusId: 5, question: "A 'Mestizo' was a person of which mixed heritage?", options: ["Spanish and African", "Spanish and Indigenous", "Indigenous and African", "French and Spanish"], correctAnswer: "Spanish and Indigenous", explanation: "Mestizos were individuals of mixed Spanish and indigenous American descent." },
  { id: 23, stimulusId: 5, question: "What determined a person's place in the Casta System?", options: ["Wealth", "Education", "Race and ancestry", "Religion"], correctAnswer: "Race and ancestry", explanation: "The system was a rigid hierarchy based on racial purity and place of birth." },
  { id: 24, stimulusId: 5, question: "Who were the 'Creoles'?", options: ["Spanish born in the Americas", "Spanish born in Spain", "Mixed-race individuals", "Indigenous leaders"], correctAnswer: "Spanish born in the Americas", explanation: "Creoles were of Spanish descent but born in the colonies; they often led later independence movements." },
  { id: 25, stimulusId: 5, question: "What was the purpose of the Casta System?", options: ["To promote equality", "To maintain social control", "To encourage migration", "To spread Christianity"], correctAnswer: "To maintain social control", explanation: "The system ensured that power remained in the hands of those with the most 'pure' Spanish blood." },
  { id: 26, stimulusId: 6, question: "Where was the largest silver mine in the world located?", options: ["Mexico City", "Potosí", "Lima", "Madrid"], correctAnswer: "Potosí", explanation: "Potosí, in modern-day Bolivia, was the site of the world's most productive silver mine." },
  { id: 27, stimulusId: 6, question: "Which country was the ultimate destination for most global silver?", options: ["Spain", "England", "China", "India"], correctAnswer: "China", explanation: "China's economy was silver-based, and it traded luxury goods for the metal." },
  { id: 28, stimulusId: 6, question: "What was an economic consequence of the silver flow in Spain?", options: ["Deflation", "Industrialization", "Inflation", "Economic boom"], correctAnswer: "Inflation", explanation: "The massive influx of silver led to the 'Price Revolution' and high inflation in Spain and Europe." },
  { id: 29, stimulusId: 6, question: "How did silver affect global trade?", options: ["It ended trade with Asia", "It created the first global currency", "It led to the fall of China", "It reduced the need for ships"], correctAnswer: "It created the first global currency", explanation: "Spanish silver coins were accepted worldwide, facilitating global trade." },
  { id: 30, stimulusId: 6, question: "What was the 'Single Whip' tax in China?", options: ["A tax on tea", "A tax paid only in silver", "A tax on land", "A tax on silk"], correctAnswer: "A tax paid only in silver", explanation: "The Ming Dynasty required all taxes to be paid in silver, driving global demand for the metal." },
  { id: 31, stimulusId: 7, question: "Queen Ana Nzinga ruled which African kingdoms?", options: ["Mali and Songhai", "Ndongo and Matamba", "Kongo and Ethiopia", "Zimbabwe and Zulu"], correctAnswer: "Ndongo and Matamba", explanation: "Nzinga was a powerful leader who resisted Portuguese colonization in modern-day Angola." },
  { id: 32, stimulusId: 7, question: "What was the outcome of the Pueblo Revolt of 1680?", options: ["The Spanish were defeated forever", "The Spanish were expelled for 12 years", "The Pueblo people were enslaved", "The revolt failed immediately"], correctAnswer: "The Spanish were expelled for 12 years", explanation: "The Pueblo people successfully drove the Spanish out of New Mexico for over a decade." },
  { id: 33, stimulusId: 7, question: "Who were the 'Maroons'?", options: ["Spanish soldiers", "Escaped enslaved people", "Indigenous traders", "Dutch merchants"], correctAnswer: "Escaped enslaved people", explanation: "Maroons formed independent communities in the Caribbean and Brazil after escaping slavery." },
  { id: 34, stimulusId: 7, question: "Metacom's War was a conflict between which groups?", options: ["Spanish and Aztecs", "English and Native Americans", "Portuguese and Africans", "Dutch and French"], correctAnswer: "English and Native Americans", explanation: "Also known as King Philip's War, it was a major conflict in New England." },
  { id: 35, stimulusId: 7, question: "Why did indigenous groups resist European expansion?", options: ["To gain gold", "To protect their land and culture", "To join the slave trade", "To spread their own religion"], correctAnswer: "To protect their land and culture", explanation: "Resistance was a response to the loss of land, forced labor, and cultural suppression." },
  { id: 36, stimulusId: 8, question: "The Mita system was originally used by which empire?", options: ["Aztec", "Inca", "Maya", "Spanish"], correctAnswer: "Inca", explanation: "The Inca used the Mita as a mandatory public service labor tax." },
  { id: 37, stimulusId: 8, question: "How did the Spanish adapt the Mita system?", options: ["They abolished it", "They used it for silver mining", "They used it for religious education", "They paid workers high wages"], correctAnswer: "They used it for silver mining", explanation: "The Spanish turned the Mita into a system of forced, dangerous labor in the mines." },
  { id: 38, stimulusId: 8, question: "What was the primary resource extracted using Mita labor?", options: ["Gold", "Sugar", "Silver", "Tobacco"], correctAnswer: "Silver", explanation: "Silver extraction in Potosí relied heavily on the forced labor of indigenous people." },
  { id: 39, stimulusId: 8, question: "What was a consequence of the Mita system for indigenous communities?", options: ["Wealth accumulation", "Population growth", "Social disruption and death", "Better education"], correctAnswer: "Social disruption and death", explanation: "The dangerous conditions in the mines led to high mortality rates and the breakdown of communities." },
  { id: 40, stimulusId: 8, question: "The Mita system is an example of what type of labor?", options: ["Free labor", "Coercive labor", "Indentured servitude", "Guild labor"], correctAnswer: "Coercive labor", explanation: "Coercive labor involves forcing people to work against their will through legal or physical means." },
  { id: 41, stimulusId: 9, question: "What is 'syncretism'?", options: ["The destruction of a culture", "The blending of different beliefs", "The spread of a single religion", "The rejection of all religion"], correctAnswer: "The blending of different beliefs", explanation: "Syncretism occurs when different cultural or religious traditions merge into a new form." },
  { id: 42, stimulusId: 9, question: "Santeria is a syncretic religion found primarily in which country?", options: ["Haiti", "Brazil", "Cuba", "Mexico"], correctAnswer: "Cuba", explanation: "Santeria developed in Cuba, blending Yoruba traditions with Catholicism." },
  { id: 43, stimulusId: 9, question: "Which two traditions blended to form Vodun?", options: ["Spanish and Aztec", "West African and Catholic", "French and English", "Indigenous and Islamic"], correctAnswer: "West African and Catholic", explanation: "Vodun (Voodoo) emerged in Haiti from West African animism and French Catholicism." },
  { id: 44, stimulusId: 9, question: "Why did enslaved people adopt syncretic religions?", options: ["They were forced to", "To hide their original beliefs", "They liked the new religions better", "To gain freedom"], correctAnswer: "To hide their original beliefs", explanation: "Syncretism allowed enslaved people to continue their traditions under the guise of practicing Christianity." },
  { id: 45, stimulusId: 9, question: "The 'Virgin of Guadalupe' is a syncretic figure in which culture?", options: ["Brazilian", "Mexican", "Cuban", "Haitian"], correctAnswer: "Mexican", explanation: "The Virgin of Guadalupe blended indigenous imagery with Catholic devotion." },
  { id: 46, stimulusId: 10, question: "The Treaty of Tordesillas was signed between which two nations?", options: ["England and France", "Spain and Portugal", "Netherlands and Spain", "Portugal and England"], correctAnswer: "Spain and Portugal", explanation: "The treaty was a deal between the two major maritime powers of the time." },
  { id: 47, stimulusId: 10, question: "What was the purpose of the 'Line of Demarcation'?", options: ["To end a war", "To divide newly discovered lands", "To map the stars", "To stop the slave trade"], correctAnswer: "To divide newly discovered lands", explanation: "The line divided the world into Spanish and Portuguese spheres of influence." },
  { id: 48, stimulusId: 10, question: "Which modern-day country in South America became Portuguese due to this treaty?", options: ["Argentina", "Peru", "Brazil", "Colombia"], correctAnswer: "Brazil", explanation: "Brazil fell on the Portuguese side of the line, explaining why they speak Portuguese today." },
  { id: 49, stimulusId: 10, question: "Who mediated the Treaty of Tordesillas?", options: ["The King of England", "The Pope", "The Emperor of China", "The Sultan of the Ottomans"], correctAnswer: "The Pope", explanation: "Pope Alexander VI mediated the treaty to prevent conflict between the two Catholic nations." },
  { id: 50, stimulusId: 10, question: "What was a long-term impact of the Treaty of Tordesillas?", options: ["It prevented all future wars", "It shaped the colonial map of the Americas", "It led to the fall of Spain", "It ended the Age of Exploration"], correctAnswer: "It shaped the colonial map of the Americas", explanation: "The treaty established the foundational boundaries for Spanish and Portuguese colonization." }
];

const QuizUnit4 = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [checkedIndices, setCheckedIndices] = useState<Set<number>>(new Set());
  const [crossedOut, setCrossedOut] = useState<Record<number, string[]>>({});
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = questions[currentIndex];
  const currentStimulus = stimuli.find(s => s.id === currentQuestion.stimulusId);
  const progress = (currentIndex / questions.length) * 100;

  const handleOptionSelect = (option: string) => {
    if (checkedIndices.has(currentIndex)) return;
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

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctAnswer) score++;
    });
    return score;
  };

  if (isFinished) {
    const finalScore = calculateScore();
    return (
      <Layout>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto text-center space-y-8 py-12"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Unit 4 Mastery Complete!</h2>
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
            <ArrowLeft className="mr-2 h-4 w-4" /> Exit Quiz
          </Button>
          <div className="text-right">
            <div className="text-sm font-bold text-primary">Question {currentIndex + 1} / {questions.length}</div>
            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">Unit 4: Transoceanic Interconnections</div>
          </div>
        </div>

        <Progress value={progress} className="h-1.5 bg-muted" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Stimulus Section */}
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

          {/* Question Section */}
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
                          disabled={isChecked}
                          onClick={() => handleOptionSelect(option)}
                          className={cn(
                            "w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 text-lg font-medium flex items-center gap-4",
                            !isChecked && !isSelected && "border-border hover:border-primary/50",
                            !isChecked && isSelected && "border-primary bg-primary/5",
                            isChecked && isCorrect && "border-green-500 bg-green-500/10 text-green-600",
                            isChecked && isSelected && !isCorrect && "border-destructive bg-destructive/10 text-destructive",
                            isChecked && !isCorrect && !isSelected && "border-border opacity-40",
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
                            {isChecked && isCorrect && <CheckCircle2 className="h-6 w-6 text-green-600" />}
                            {isChecked && isSelected && !isCorrect && <XCircle className="h-6 w-6 text-destructive" />}
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
                  {checkedIndices.has(currentIndex) && (
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
                      onClick={handleBack} 
                      disabled={currentIndex === 0}
                      className="flex-1 h-14 rounded-2xl text-lg font-bold"
                    >
                      Back
                    </Button>
                    
                    {!checkedIndices.has(currentIndex) ? (
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

export default QuizUnit4;