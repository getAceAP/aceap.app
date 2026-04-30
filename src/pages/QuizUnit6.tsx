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
  { id: 1, text: "The path of progress is strewn with the wreck of nations... the lower races must give way to the higher, for the higher are more capable of utilizing the resources of the earth.", source: "Karl Pearson, Social Darwinism and Nationalism, 1900" },
  { id: 2, text: "Take up the White Man's burden—Send forth the best ye breed—Go bind your sons to exile To serve your captives' need.", source: "Rudyard Kipling, The White Man's Burden, 1899" },
  { id: 3, text: "The Congo is a land of immense wealth... but the methods used to extract the rubber are a stain on humanity. The natives are treated as slaves, their hands cut off if they fail to meet their quotas.", source: "Roger Casement, Report on the Administration of the Congo Free State, 1904" },
  { id: 4, text: "We, the representatives of the European powers, hereby agree to the following rules for the partition of Africa... any power that takes possession of a territory must notify the others.", source: "General Act of the Berlin Conference, 1885" },
  { id: 5, text: "The greased cartridges were a direct insult to our faith... we could not bite them without losing our caste and our honor. We had no choice but to rise against the British.", source: "Account of a Sepoy soldier during the Indian Rebellion of 1857" },
  { id: 6, text: "The prophecy said that if we killed our cattle and destroyed our crops, the ancestors would return and drive the English into the sea.", source: "Oral history of the Xhosa Cattle-Killing Movement, c. 1856" },
  { id: 7, text: "The Monroe Doctrine established that the American continents are henceforth not to be considered as subjects for future colonization by any European powers.", source: "James Monroe, Seventh Annual Message to Congress, 1823" },
  { id: 8, text: "The demand for cotton in Manchester has turned the Nile Valley into a vast plantation... the wealth of Egypt is now tied to the fluctuations of the global market.", source: "European economist describing the Egyptian economy, c. 1870" },
  { id: 9, text: "The Ghost Dance will bring back the buffalo and the lands of our fathers... the white man will vanish, and the world will be made new again.", source: "Wovoka, Paiute Prophet and founder of the Ghost Dance, c. 1889" },
  { id: 10, text: "The Opium trade has corrupted our people and drained our silver... we must stop this poison from entering our ports, even if it means war with the British.", source: "Lin Zexu, Letter to Queen Victoria, 1839" }
];

const questions = [
  { id: 1, stimulusId: 1, question: "The 'higher races' mentioned by Pearson is a core concept of:", options: ["Socialism", "Social Darwinism", "Mercantilism", "Abolitionism"], correctAnswer: "Social Darwinism", explanation: "Social Darwinism applied 'survival of the fittest' to justify racial hierarchy and imperialism." },
  { id: 2, stimulusId: 1, question: "Imperialists used this ideology to justify:", options: ["Free trade", "Global equality", "Territorial expansion and dominance", "Religious freedom"], correctAnswer: "Territorial expansion and dominance", explanation: "It provided a 'scientific' rationale for Western nations to conquer and rule others." },
  { id: 3, stimulusId: 1, question: "Which movement directly opposed the ideas expressed in the text?", options: ["Nationalism", "Anti-imperialism", "Industrialization", "Urbanization"], correctAnswer: "Anti-imperialism", explanation: "Anti-imperialists challenged the morality and logic of racial superiority and colonial rule." },
  { id: 4, stimulusId: 1, question: "Pearson's view reflects the perspective of which group?", options: ["Indigenous leaders", "European imperialists", "Enslaved Africans", "Socialist revolutionaries"], correctAnswer: "European imperialists", explanation: "This perspective was common among those seeking to justify the expansion of Western empires." },
  { id: 5, stimulusId: 1, question: "The 'wreck of nations' refers to the decline of:", options: ["Industrial powers", "Non-Western societies", "The Catholic Church", "The Mongol Empire"], correctAnswer: "Non-Western societies", explanation: "Pearson suggests that 'weaker' nations must inevitably fall to 'stronger' ones." },
  { id: 6, stimulusId: 2, question: "The 'White Man's Burden' was a rationale for imperialism based on:", options: ["Economic profit", "A 'civilizing mission'", "Military defense", "Scientific curiosity"], correctAnswer: "A 'civilizing mission'", explanation: "It suggested that Europeans had a moral duty to 'uplift' and 'civilize' non-Western peoples." },
  { id: 7, stimulusId: 2, question: "Kipling's poem was written in response to the US annexation of:", options: ["Hawaii", "The Philippines", "Texas", "Alaska"], correctAnswer: "The Philippines", explanation: "The poem encouraged the US to take up the 'burden' of colonial rule in the Philippines." },
  { id: 8, stimulusId: 2, question: "Critics of this 'burden' argued it was actually a cover for:", options: ["Religious conversion", "Economic exploitation", "Cultural exchange", "Global peace"], correctAnswer: "Economic exploitation", explanation: "Critics saw the 'civilizing' rhetoric as a mask for the extraction of wealth and resources." },
  { id: 9, stimulusId: 2, question: "Which religion was often spread as part of this 'burden'?", options: ["Buddhism", "Islam", "Christianity", "Hinduism"], correctAnswer: "Christianity", explanation: "Missionary work was a central component of the Western 'civilizing mission'." },
  { id: 10, stimulusId: 2, question: "The 'captives' mentioned in the poem refer to:", options: ["European prisoners", "Colonized peoples", "Industrial workers", "Soldiers"], correctAnswer: "Colonized peoples", explanation: "Kipling portrays colonized peoples as 'captives' who need Western guidance." },
  { id: 11, stimulusId: 3, question: "The 'Congo Free State' was the personal colony of which monarch?", options: ["Queen Victoria", "King Leopold II", "Napoleon III", "Kaiser Wilhelm II"], correctAnswer: "King Leopold II", explanation: "Leopold II of Belgium ruled the Congo as his private property, leading to horrific abuses." },
  { id: 12, stimulusId: 3, question: "What was the primary resource extracted from the Congo?", options: ["Gold", "Diamonds", "Rubber", "Cotton"], correctAnswer: "Rubber", explanation: "The global demand for rubber for tires and machinery drove the brutal exploitation of the Congo." },
  { id: 13, stimulusId: 3, question: "The 'stain on humanity' described by Casement led to:", options: ["The Berlin Conference", "International outcry and the transfer of the colony to the Belgian government", "The end of all imperialism", "A war between Belgium and Britain"], correctAnswer: "International outcry and the transfer of the colony to the Belgian government", explanation: "The exposure of the atrocities forced Leopold to hand over control to the Belgian state in 1908." },
  { id: 14, stimulusId: 3, question: "The methods used in the Congo are an extreme example of:", options: ["Free labor", "Coercive labor", "Indentured servitude", "Guild labor"], correctAnswer: "Coercive labor", explanation: "The system relied on forced labor, violence, and terror to meet production quotas." },
  { id: 15, stimulusId: 3, question: "Which technology increased the global demand for the Congo's rubber?", options: ["The Steam Engine", "The Automobile (tires)", "The Telegraph", "The Printing Press"], correctAnswer: "The Automobile (tires)", explanation: "The rise of the bicycle and automobile industries created a massive market for rubber." },
  { id: 16, stimulusId: 4, question: "The Berlin Conference aimed to prevent war between:", options: ["African tribes", "European powers", "The US and Europe", "China and Japan"], correctAnswer: "European powers", explanation: "The conference was held to regulate the 'Scramble for Africa' and avoid conflict among colonizers." },
  { id: 17, stimulusId: 4, question: "How many African leaders were invited to the Berlin Conference?", options: ["Zero", "Five", "Ten", "All of them"], correctAnswer: "Zero", explanation: "No African representatives were present, and the continent was divided without regard for indigenous groups." },
  { id: 18, stimulusId: 4, question: "The 'partition of Africa' resulted in borders that were:", options: ["Based on geography", "Based on ethnic groups", "Artificial and often split tribes", "Temporary"], correctAnswer: "Artificial and often split tribes", explanation: "The colonial borders ignored existing cultural and linguistic boundaries, leading to long-term instability." },
  { id: 19, stimulusId: 4, question: "Which two African nations remained independent by 1914?", options: ["Egypt and Nigeria", "Ethiopia and Liberia", "Congo and South Africa", "Mali and Ghana"], correctAnswer: "Ethiopia and Liberia", explanation: "Ethiopia defeated Italy at Adwa, and Liberia was protected by its ties to the US." },
  { id: 20, stimulusId: 4, question: "The 'effective occupation' rule meant a power had to:", options: ["Just claim the land", "Have a physical presence and administration", "Convert the people", "Find gold"], correctAnswer: "Have a physical presence and administration", explanation: "Powers had to prove they could actually control and govern the territories they claimed." },
  { id: 21, stimulusId: 5, question: "The Indian Rebellion of 1857 is also known as the:", options: ["Boxer Rebellion", "Sepoy Mutiny", "Taiping Rebellion", "Zulu War"], correctAnswer: "Sepoy Mutiny", explanation: "Sepoys were Indian soldiers serving in the British East India Company's army." },
  { id: 22, stimulusId: 5, question: "The 'greased cartridges' were rumored to contain fat from:", options: ["Cows and Pigs", "Sheep and Goats", "Chickens", "Horses"], correctAnswer: "Cows and Pigs", explanation: "This offended both Hindus (cows are sacred) and Muslims (pigs are forbidden), sparking the revolt." },
  { id: 23, stimulusId: 5, question: "What was a major political result of the rebellion?", options: ["India gained independence", "The British East India Company was abolished and the British Crown took direct control", "The Mughals returned to power", "The French invaded India"], correctAnswer: "The British East India Company was abolished and the British Crown took direct control", explanation: "The 'British Raj' began, with India becoming the 'Jewel in the Crown' of the British Empire." },
  { id: 24, stimulusId: 5, question: "The rebellion was a response to which long-term trend?", options: ["Industrialization", "Westernization and cultural insensitivity", "The end of trade", "A plague"], correctAnswer: "Westernization and cultural insensitivity", explanation: "The British had been increasingly interfering with Indian social and religious customs." },
  { id: 25, stimulusId: 5, question: "Which group remained mostly loyal to the British during the revolt?", options: ["The Sikhs", "The Mughals", "The Marathas", "The peasants"], correctAnswer: "The Sikhs", explanation: "The lack of unity among Indian groups was a key reason the rebellion failed." },
  { id: 26, stimulusId: 6, question: "The Xhosa Cattle-Killing Movement occurred in which modern-day country?", options: ["Nigeria", "Kenya", "South Africa", "Egypt"], correctAnswer: "South Africa", explanation: "The Xhosa people were resisting British encroachment on their lands in the Cape Colony." },
  { id: 27, stimulusId: 6, question: "The movement is an example of a:", options: ["Secular revolution", "Millenarian/Spiritual response to imperialism", "Trade dispute", "Naval battle"], correctAnswer: "Millenarian/Spiritual response to imperialism", explanation: "It relied on a prophecy that supernatural intervention would drive out the colonizers." },
  { id: 28, stimulusId: 6, question: "What was the tragic outcome of the movement?", options: ["The British left", "Massive famine and the death of thousands of Xhosa", "The return of the ancestors", "A Xhosa empire"], correctAnswer: "Massive famine and the death of thousands of Xhosa", explanation: "The destruction of their own food supply left the Xhosa vulnerable and broken." },
  { id: 29, stimulusId: 6, question: "The British used the aftermath of the movement to:", options: ["Provide aid", "Seize more Xhosa land and labor", "Leave South Africa", "Build schools"], correctAnswer: "Seize more Xhosa land and labor", explanation: "The weakened Xhosa were forced to work on British farms and their lands were annexed." },
  { id: 30, stimulusId: 6, question: "Similar spiritual resistance movements occurred among:", options: ["The Aztecs", "The Mongols", "Native Americans (Ghost Dance) and Mahdists in Sudan", "The Japanese"], correctAnswer: "Native Americans (Ghost Dance) and Mahdists in Sudan", explanation: "Many indigenous groups turned to spiritual movements when military resistance failed." },
  { id: 31, stimulusId: 7, question: "The Monroe Doctrine was primarily aimed at:", options: ["China", "European powers", "South America", "Japan"], correctAnswer: "European powers", explanation: "It warned Europeans not to interfere in the affairs of the newly independent Latin American nations." },
  { id: 32, stimulusId: 7, question: "The doctrine asserted US dominance in which hemisphere?", options: ["Eastern", "Western", "Northern", "Southern"], correctAnswer: "Western", explanation: "The US claimed the Americas as its own sphere of influence." },
  { id: 33, stimulusId: 7, question: "The Monroe Doctrine is an early example of:", options: ["Isolationism", "US Imperialism/Hegemony", "Global cooperation", "Communism"], correctAnswer: "US Imperialism/Hegemony", explanation: "While framed as protection, it established the US as the dominant power in the region." },
  { id: 34, stimulusId: 7, question: "Which later policy expanded on the Monroe Doctrine?", options: ["The New Deal", "The Roosevelt Corollary", "The Marshall Plan", "The Truman Doctrine"], correctAnswer: "The Roosevelt Corollary", explanation: "The Corollary claimed the US had the right to intervene militarily in Latin America to maintain order." },
  { id: 35, stimulusId: 7, question: "The US used this doctrine to justify its role in which war?", options: ["WWI", "The Spanish-American War", "The Civil War", "The Napoleonic Wars"], correctAnswer: "The Spanish-American War", explanation: "The US intervened in Cuba to drive out Spain, leading to the acquisition of Puerto Rico and Guam." },
  { id: 36, stimulusId: 8, question: "Egypt's focus on cotton production made it an:", options: ["Industrial power", "Export economy", "Isolated nation", "Absolute monarchy"], correctAnswer: "Export economy", explanation: "Export economies focused on a single raw material for the global market." },
  { id: 37, stimulusId: 8, question: "Which event caused a massive boom in Egyptian cotton demand?", options: ["The French Revolution", "The US Civil War", "The Black Death", "The Opium War"], correctAnswer: "The US Civil War", explanation: "The blockade of Southern US ports forced British mills to find new sources of cotton in Egypt and India." },
  { id: 38, stimulusId: 8, question: "The 'wealth of Egypt' was used by Muhammad Ali to:", options: ["Build pyramids", "Modernize and industrialize the military and economy", "Pay off the Ottomans", "Buy luxury goods"], correctAnswer: "Modernize and industrialize the military and economy", explanation: "Ali attempted to use state-sponsored industrialization to make Egypt a major power." },
  { id: 39, stimulusId: 8, question: "Egypt eventually fell into debt, leading to British control of the:", options: ["Nile River", "Suez Canal", "Pyramids", "Red Sea"], correctAnswer: "Suez Canal", explanation: "The canal was a vital strategic link between Britain and its colonies in India and Asia." },
  { id: 40, stimulusId: 8, question: "The reliance on a single crop (monoculture) made colonies vulnerable to:", options: ["Global market price drops", "Pests and disease", "Soil depletion", "All of the above"], correctAnswer: "All of the above", explanation: "Monocultures are economically and environmentally risky." },
  { id: 41, stimulusId: 9, question: "The Ghost Dance was a response to the loss of:", options: ["Gold", "Land and the buffalo", "The Civil War", "Trade with China"], correctAnswer: "Land and the buffalo", explanation: "The destruction of the buffalo and the reservation system devastated Plains Indian cultures." },
  { id: 42, stimulusId: 9, question: "The US government's fear of the Ghost Dance led to the:", options: ["Trail of Tears", "Wounded Knee Massacre", "Battle of Little Bighorn", "Purchase of Alaska"], correctAnswer: "Wounded Knee Massacre", explanation: "The 1890 massacre marked the end of armed Native American resistance on the Great Plains." },
  { id: 43, stimulusId: 9, question: "Wovoka's prophecy is an example of a:", options: ["Nationalist movement", "Revitalization/Millenarian movement", "Socialist revolution", "Scientific discovery"], correctAnswer: "Revitalization/Millenarian movement", explanation: "These movements seek to restore a lost golden age through spiritual means." },
  { id: 44, stimulusId: 9, question: "The 'white man will vanish' reflects the desire for:", options: ["Integration", "Sovereignty and the removal of colonizers", "Trade", "Education"], correctAnswer: "Sovereignty and the removal of colonizers", explanation: "Resistance aimed to reclaim independence and traditional ways of life." },
  { id: 45, stimulusId: 9, question: "The US policy toward Native Americans in the late 19th century focused on:", options: ["Equality", "Forced assimilation and the reservation system", "Independence", "Trade"], correctAnswer: "Forced assimilation and the reservation system", explanation: "The government sought to destroy indigenous cultures and integrate individuals into Western society." },
  { id: 46, stimulusId: 10, question: "The Opium trade was conducted by merchants from which nation?", options: ["USA", "Great Britain", "France", "Russia"], correctAnswer: "Great Britain", explanation: "The British East India Company grew opium in India and smuggled it into China to balance trade." },
  { id: 47, stimulusId: 10, question: "The 'silver' mentioned was being drained from China to pay for:", options: ["Tea", "Opium", "Silk", "Porcelain"], correctAnswer: "Opium", explanation: "The addiction to opium reversed the flow of silver, which had previously favored China." },
  { id: 48, stimulusId: 10, question: "The resulting Opium Wars ended with the:", options: ["Treaty of Tordesillas", "Treaty of Nanjing", "Peace of Westphalia", "Treaty of Versailles"], correctAnswer: "Treaty of Nanjing", explanation: "The 'unequal treaty' forced China to open ports, pay an indemnity, and cede Hong Kong." },
  { id: 49, stimulusId: 10, question: "The Opium Wars marked the beginning of China's:", options: ["Golden Age", "Century of Humiliation", "Industrial Revolution", "Mongol rule"], correctAnswer: "Century of Humiliation", explanation: "China suffered a series of military defeats and loss of sovereignty to Western powers and Japan." },
  { id: 50, stimulusId: 10, question: "The British victory was due to their superior:", options: ["Numbers", "Cavalry", "Industrialized naval technology and weaponry", "Knowledge of the land"], correctAnswer: "Industrialized naval technology and weaponry", explanation: "Steam-powered gunboats (like the Nemesis) easily defeated the traditional Chinese junk fleet." }
];

const QuizUnit6 = () => {
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
    saveQuizResult(6, score, questions.length, mode!);
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
        <QuizModeSelection unitTitle="Unit 6: Consequences of Industrialization" onSelect={setMode} />
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
            <h2 className="text-3xl font-bold">Unit 6 Mastery Complete!</h2>
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
              <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">Unit 6: Consequences of Industrialization</div>
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
                    const letter= String.fromCharCode(65 + idx);
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

export default QuizUnit6;