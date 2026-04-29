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
  { id: 1, text: "The Enlightenment applied new ways of understanding and empiricism to human relationships and politics. Thinkers like John Locke argued for natural rights—life, liberty, and property—and the social contract between the governed and the government.", source: "National Portrait Gallery" },
  { id: 2, text: "The French Revolution (1789) challenged the absolute monarchy and the system of aristocratic privileges. The Declaration of the Rights of Man and of the Citizen outlined the natural rights of all people and the rights they possessed as citizens.", source: "Musée Carnavalet" },
  { id: 3, text: "The Haitian Revolution (1791-1804) was the only successful slave revolt in history. Led by Toussaint L'Ouverture, it resulted in the creation of the first independent black republic and the abolition of slavery in the colony of Saint-Domingue.", source: "Historical Archive" },
  { id: 4, text: "The Industrial Revolution began in Great Britain due to a unique combination of factors: access to coal and iron, proximity to waterways, urbanization, and legal protection of private property. The steam engine was the defining technology of this era.", source: "Science Museum London" },
  { id: 5, text: "The Meiji Restoration in Japan (1868) was a state-sponsored industrialization effort. To avoid Western colonization, Japan rapidly modernized its military, economy, and education system, becoming a major global power by 1900.", source: "Tokyo National Museum" },
  { id: 6, text: "Adam Smith's 'The Wealth of Nations' (1776) laid the foundation for modern capitalism. He advocated for free markets, the 'invisible hand,' and laissez-faire policies, arguing that individual self-interest leads to collective prosperity.", source: "University of Glasgow" },
  { id: 7, text: "Karl Marx and Friedrich Engels published 'The Communist Manifesto' (1848) as a reaction to the hardships of industrial capitalism. They argued that history is a series of class struggles and predicted a proletariat revolution.", source: "International Institute of Social History" },
  { id: 8, text: "Urbanization was a major consequence of industrialization. Cities grew rapidly as people moved from rural areas to work in factories, leading to overcrowding, pollution, and the rise of tenements and poor living conditions.", source: "Museum of the City of New York" },
  { id: 9, text: "The Second Industrial Revolution (late 19th century) focused on steel, chemicals, electricity, and precision machinery. The telegraph and telephone revolutionized communication, while railroads and steamships integrated global markets.", source: "Smithsonian Institution" },
  { id: 10, text: "Feminism emerged during the Enlightenment. Mary Wollstonecraft and Olympe de Gouges argued that the principles of liberty and equality should apply to women, calling for better education and political rights.", source: "National Portrait Gallery" }
];

const questions = [
  { id: 1, stimulusId: 1, question: "John Locke's 'natural rights' included which of the following?", options: ["Life, Liberty, Happiness", "Life, Liberty, Property", "Freedom, Equality, Fraternity", "Order, Progress, Security"], correctAnswer: "Life, Liberty, Property", explanation: "Locke argued that all humans are born with the rights to life, liberty, and property." },
  { id: 2, stimulusId: 1, question: "The 'social contract' is an agreement between whom?", options: ["The King and the Church", "The People and the Government", "Different Nations", "The Rich and the Poor"], correctAnswer: "The People and the Government", explanation: "The social contract theory posits that people give up some freedoms in exchange for government protection of their rights." },
  { id: 3, stimulusId: 1, question: "Which Enlightenment thinker advocated for the separation of powers?", options: ["Voltaire", "Rousseau", "Montesquieu", "Adam Smith"], correctAnswer: "Montesquieu", explanation: "Montesquieu's 'The Spirit of the Laws' proposed dividing government into three branches to prevent tyranny." },
  { id: 4, stimulusId: 1, question: "Enlightenment ideas primarily challenged which form of government?", options: ["Democracy", "Absolute Monarchy", "Republic", "Theocracy"], correctAnswer: "Absolute Monarchy", explanation: "Enlightenment thinkers questioned the 'Divine Right of Kings' and absolute power." },
  { id: 5, stimulusId: 1, question: "What was a major social consequence of Enlightenment thought?", options: ["The rise of slavery", "The abolitionist movement", "The end of trade", "The fall of the Church"], correctAnswer: "The abolitionist movement", explanation: "The focus on individual rights and equality led many to question and oppose the institution of slavery." },
  { id: 6, stimulusId: 2, question: "Which group made up the 'Third Estate' in pre-revolutionary France?", options: ["The Clergy", "The Nobility", "The Commoners", "The Royal Family"], correctAnswer: "The Commoners", explanation: "The Third Estate included peasants, artisans, and the bourgeoisie, making up 97% of the population." },
  { id: 7, stimulusId: 2, question: "What was the primary cause of the French Revolution?", options: ["Religious conflict", "Economic crisis and inequality", "Foreign invasion", "A plague"], correctAnswer: "Economic crisis and inequality", explanation: "High taxes on the Third Estate and a massive national debt triggered the revolution." },
  { id: 8, stimulusId: 2, question: "The 'Declaration of the Rights of Man' was inspired by which document?", options: ["The Magna Carta", "The US Declaration of Independence", "The Communist Manifesto", "The Bible"], correctAnswer: "The US Declaration of Independence", explanation: "The French document mirrored the American focus on natural rights and popular sovereignty." },
  { id: 9, stimulusId: 2, question: "Who was the radical leader during the 'Reign of Terror'?", options: ["Napoleon Bonaparte", "Louis XVI", "Maximilien Robespierre", "Marquis de Lafayette"], correctAnswer: "Maximilien Robespierre", explanation: "Robespierre led the Committee of Public Safety during the revolution's most violent phase." },
  { id: 10, stimulusId: 2, question: "What was the ultimate outcome of the French Revolution by 1804?", options: ["A stable democracy", "The return of the old monarchy", "The rise of Napoleon as Emperor", "The total destruction of France"], correctAnswer: "The rise of Napoleon as Emperor", explanation: "Napoleon seized power in a coup and eventually declared himself Emperor, ending the revolutionary period." },
  { id: 11, stimulusId: 3, question: "Haiti was a colony of which European power?", options: ["Spain", "Britain", "France", "Portugal"], correctAnswer: "France", explanation: "Haiti, then known as Saint-Domingue, was France's wealthiest sugar colony." },
  { id: 12, stimulusId: 3, question: "Who was the primary leader of the Haitian Revolution?", options: ["Simon Bolivar", "Toussaint L'Ouverture", "Jose de San Martin", "Napoleon"], correctAnswer: "Toussaint L'Ouverture", explanation: "L'Ouverture was a former enslaved man who organized the rebel forces into a disciplined army." },
  { id: 13, stimulusId: 3, question: "What made the Haitian Revolution unique?", options: ["It was led by the nobility", "It was the only successful slave revolt", "It was peaceful", "It failed to gain independence"], correctAnswer: "It was the only successful slave revolt", explanation: "It is the only instance in history where enslaved people overthrew their masters and created a new state." },
  { id: 14, stimulusId: 3, question: "How did the Haitian Revolution affect the United States?", options: ["It led to the Louisiana Purchase", "It caused the US Civil War", "It ended US slavery", "It had no effect"], correctAnswer: "It led to the Louisiana Purchase", explanation: "Napoleon's failure in Haiti led him to sell the Louisiana Territory to the US in 1803." },
  { id: 15, stimulusId: 3, question: "What was the main economic driver of Saint-Domingue?", options: ["Silver mining", "Fur trade", "Sugar and coffee plantations", "Textile manufacturing"], correctAnswer: "Sugar and coffee plantations", explanation: "The colony produced massive amounts of sugar and coffee using enslaved labor." },
  { id: 16, stimulusId: 4, question: "Why did the Industrial Revolution begin in Great Britain?", options: ["Large gold reserves", "Access to coal and iron", "A warm climate", "A small population"], correctAnswer: "Access to coal and iron", explanation: "Britain had abundant natural resources necessary for steam power and machine building." },
  { id: 17, stimulusId: 4, question: "Who improved the steam engine to make it practical for industry?", options: ["Eli Whitney", "James Watt", "Thomas Edison", "Alexander Graham Bell"], correctAnswer: "James Watt", explanation: "Watt's improvements allowed the steam engine to power factories and locomotives." },
  { id: 18, stimulusId: 4, question: "The 'factory system' led to which of the following?", options: ["Increased artisan work", "Specialization of labor", "The end of cities", "Lower production rates"], correctAnswer: "Specialization of labor", explanation: "Factories divided tasks into simple, repetitive steps to increase efficiency." },
  { id: 19, stimulusId: 4, question: "Which industry was the first to be industrialized?", options: ["Steel", "Chemicals", "Textiles", "Automotive"], correctAnswer: "Textiles", explanation: "The production of cloth was the first to move from homes (cottage industry) to factories." },
  { id: 20, stimulusId: 4, question: "What was a major environmental impact of early industrialization?", options: ["Reforestation", "Air and water pollution", "Increased biodiversity", "The end of mining"], correctAnswer: "Air and water pollution", explanation: "Coal-burning factories and lack of waste regulation led to severe pollution in industrial cities." },
  { id: 21, stimulusId: 5, question: "What was the primary goal of the Meiji Restoration?", options: ["To isolate Japan", "To modernize and industrialize", "To return to feudalism", "To join the Chinese Empire"], correctAnswer: "To modernize and industrialize", explanation: "Japan sought to adopt Western technology and methods to protect its sovereignty." },
  { id: 22, stimulusId: 5, question: "Which group lost their traditional status during the Meiji era?", options: ["The Merchants", "The Samurai", "The Peasants", "The Emperor"], correctAnswer: "The Samurai", explanation: "The feudal class of warriors was abolished as Japan created a modern conscript army." },
  { id: 23, stimulusId: 5, question: "How did the Japanese government support industrialization?", options: ["By banning trade", "By building state-owned factories", "By lowering taxes", "By invading Europe"], correctAnswer: "By building state-owned factories", explanation: "The government jumpstarted industry by building factories and then selling them to private investors (zaibatsu)." },
  { id: 24, stimulusId: 5, question: "The Meiji Restoration was a response to which event?", options: ["The Opium War", "The arrival of Commodore Matthew Perry", "The French Revolution", "The Black Death"], correctAnswer: "The arrival of Commodore Matthew Perry", explanation: "Perry's arrival in 1853 forced Japan to open its ports and realize its technological disadvantage." },
  { id: 25, stimulusId: 5, question: "What was the result of Japan's modernization by 1900?", options: ["It was colonized by Britain", "It became a major imperial power", "It remained a feudal society", "It collapsed into civil war"], correctAnswer: "It became a major imperial power", explanation: "Japan's rapid success allowed it to defeat China and Russia and begin its own empire." },
  { id: 26, stimulusId: 6, question: "Adam Smith's 'invisible hand' refers to what?", options: ["Government regulation", "Market forces of supply and demand", "The power of the King", "Religious influence"], correctAnswer: "Market forces of supply and demand", explanation: "Smith argued that the market naturally regulates itself without government interference." },
  { id: 27, stimulusId: 6, question: "What does 'laissez-faire' mean?", options: ["Government control", "Hands-off / Let it be", "Fair trade for all", "High taxes on the rich"], correctAnswer: "Hands-off / Let it be", explanation: "Laissez-faire is the policy of minimum government interference in the economy." },
  { id: 28, stimulusId: 6, question: "According to Smith, what drives economic progress?", options: ["Charity", "Individual self-interest", "Government planning", "War"], correctAnswer: "Individual self-interest", explanation: "Smith believed that individuals seeking profit would benefit society as a whole." },
  { id: 29, stimulusId: 6, question: "Capitalism replaced which previous economic system?", options: ["Socialism", "Mercantilism", "Communism", "Barter"], correctAnswer: "Mercantilism", explanation: "Capitalism moved away from state-controlled trade toward private ownership and free markets." },
  { id: 30, stimulusId: 6, question: "What is a 'transnational business'?", options: ["A local shop", "A company operating in multiple countries", "A government-owned utility", "A non-profit organization"], correctAnswer: "A company operating in multiple countries", explanation: "Businesses like HSBC and Unilever began to operate globally during this era." },
  { id: 31, stimulusId: 7, question: "Marx defined the 'proletariat' as which group?", options: ["The owners of factories", "The working class", "The nobility", "The clergy"], correctAnswer: "The working class", explanation: "The proletariat are the workers who do not own the means of production." },
  { id: 32, stimulusId: 7, question: "Who were the 'bourgeoisie' in Marx's view?", options: ["The poor peasants", "The middle-class owners", "The royal family", "The military"], correctAnswer: "The middle-class owners", explanation: "The bourgeoisie owned the factories, land, and capital." },
  { id: 33, stimulusId: 7, question: "What did Marx predict would happen to capitalism?", options: ["It would last forever", "It would be overthrown by workers", "It would become more fair", "It would end due to a plague"], correctAnswer: "It would be overthrown by workers", explanation: "Marx believed the proletariat would eventually revolt and establish a classless society." },
  { id: 34, stimulusId: 7, question: "Marxism was a reaction to which of the following?", options: ["The Enlightenment", "The hardships of the Industrial Revolution", "The fall of Rome", "The discovery of the Americas"], correctAnswer: "The hardships of the Industrial Revolution", explanation: "Marx sought to address the extreme inequality and poor conditions faced by industrial workers." },
  { id: 35, stimulusId: 7, question: "What is the core idea of 'socialism'?", options: ["Private ownership of everything", "Collective or government ownership of production", "No government at all", "Rule by the military"], correctAnswer: "Collective or government ownership of production", explanation: "Socialism advocates for society as a whole to own and manage resources." },
  { id: 36, stimulusId: 8, question: "What was the primary cause of rapid urbanization?", options: ["Better farming", "The search for factory jobs", "Religious pilgrimages", "War in the countryside"], correctAnswer: "The search for factory jobs", explanation: "The shift from agriculture to industry drew millions of people to cities." },
  { id: 37, stimulusId: 8, question: "What were 'tenements'?", options: ["Luxury apartments", "Overcrowded, low-quality housing", "Government offices", "Religious temples"], correctAnswer: "Overcrowded, low-quality housing", explanation: "Tenements were built to house the massive influx of poor workers in industrial cities." },
  { id: 38, stimulusId: 8, question: "Which disease was common in overcrowded industrial cities?", options: ["Smallpox", "Cholera", "Malaria", "Scurvy"], correctAnswer: "Cholera", explanation: "Poor sanitation and contaminated water led to frequent cholera outbreaks." },
  { id: 39, stimulusId: 8, question: "How did urbanization affect the family structure?", options: ["Families became larger", "Families moved together to farms", "Work and home life became separated", "Children stopped working"], correctAnswer: "Work and home life became separated", explanation: "In the industrial age, family members left the home to work in separate factories." },
  { id: 40, stimulusId: 8, question: "What was a positive outcome of urbanization over time?", options: ["Less pollution", "Better access to education and culture", "The end of poverty", "More land for farming"], correctAnswer: "Better access to education and culture", explanation: "Cities eventually became centers for new ideas, education, and social movements." },
  { id: 41, stimulusId: 9, question: "The Second Industrial Revolution is most associated with which material?", options: ["Iron", "Steel", "Bronze", "Wood"], correctAnswer: "Steel", explanation: "The Bessemer process made steel cheap and abundant, allowing for skyscrapers and better rails." },
  { id: 42, stimulusId: 9, question: "Which invention revolutionized long-distance communication?", options: ["The Printing Press", "The Telegraph", "The Steam Engine", "The Compass"], correctAnswer: "The Telegraph", explanation: "The telegraph allowed for near-instant communication across continents." },
  { id: 43, stimulusId: 9, question: "What was the impact of the Trans-Siberian Railroad?", options: ["It isolated Russia", "It connected European Russia to the Pacific", "It ended trade with China", "It led to the fall of the Tsar"], correctAnswer: "It connected European Russia to the Pacific", explanation: "The railroad allowed Russia to expand its influence and trade into Asia." },
  { id: 44, stimulusId: 9, question: "How did electricity change factory work?", options: ["It made it more dangerous", "It allowed factories to run 24/7", "It ended the use of machines", "It required more human labor"], correctAnswer: "It allowed factories to run 24/7", explanation: "Electric lighting and power meant production was no longer limited by daylight." },
  { id: 45, stimulusId: 9, question: "The internal combustion engine relied on which fuel?", options: ["Coal", "Wood", "Petroleum (Oil)", "Water"], correctAnswer: "Petroleum (Oil)", explanation: "The development of the engine drove the global demand for oil." },
  { id: 46, stimulusId: 10, question: "Mary Wollstonecraft's 'A Vindication of the Rights of Woman' focused on what?", options: ["The right to vote", "The importance of education", "The right to own property", "The end of slavery"], correctAnswer: "The importance of education", explanation: "Wollstonecraft argued that women only appeared inferior because they lacked access to education." },
  { id: 47, stimulusId: 10, question: "Olympe de Gouges wrote a declaration for which group?", options: ["The Clergy", "The Nobility", "Women and Female Citizens", "The Military"], correctAnswer: "Women and Female Citizens", explanation: "She challenged the French Revolution's failure to include women in its new rights." },
  { id: 48, stimulusId: 10, question: "What was the 'Cult of Domesticity'?", options: ["A religious sect", "The idealization of women as homemakers", "A political party", "A labor union"], correctAnswer: "The idealization of women as homemakers", explanation: "This middle-class value system restricted women to the private sphere of the home." },
  { id: 49, stimulusId: 10, question: "When did most women in the West gain the right to vote?", options: ["1790s", "1840s", "Early 20th Century", "Late 20th Century"], correctAnswer: "Early 20th Century", explanation: "The suffrage movement achieved its main goals after decades of struggle, mostly after WWI." },
  { id: 50, stimulusId: 10, question: "Feminism was a direct outgrowth of which movement?", options: ["The Crusades", "The Enlightenment", "The Black Death", "The Renaissance"], correctAnswer: "The Enlightenment", explanation: "The Enlightenment's focus on reason and individual rights provided the logical basis for women's equality." }
];

const QuizUnit5 = () => {
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
            <h2 className="text-3xl font-bold">Unit 5 Mastery Complete!</h2>
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
            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">Unit 5: Revolutions</div>
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

export default QuizUnit5;