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
  { id: 1, text: "From Stettin in the Baltic to Trieste in the Adriatic, an iron curtain has descended across the Continent.", source: "Winston Churchill, Iron Curtain Speech, 1946" },
  { id: 2, text: "It must be the policy of the United States to support free peoples who are resisting attempted subjugation by armed minorities or by outside pressures.", source: "The Truman Doctrine, 1947" },
  { id: 3, text: "The belief that if one nation comes under Communist control, then neighboring nations will also come under Communist control.", source: "The Domino Theory (Context: Vietnam War)" },
  { id: 4, text: "We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard.", source: "John F. Kennedy, Moon Speech, 1962 (Context: The Space Race)" },
  { id: 5, text: "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.", source: "Martin Luther King Jr., I Have a Dream Speech, 1963" },
  { id: 6, text: "Long years ago we made a tryst with destiny, and now the time comes when we shall redeem our pledge... At the stroke of the midnight hour, when the world sleeps, India will awake to life and freedom.", source: "Jawaharlal Nehru, Tryst with Destiny Speech, 1947" },
  { id: 7, text: "The struggle is my life. I will continue fighting for freedom until the end of my days.", source: "Nelson Mandela (Context: Anti-Apartheid Movement)" },
  { id: 8, text: "The objective of the Palestinian Liberation Organization is the liberation of Palestine through armed struggle.", source: "PLO Charter, 1964" },
  { id: 9, text: "Mr. Gorbachev, tear down this wall!", source: "Ronald Reagan, Berlin Wall Speech, 1987" },
  { id: 10, text: "Perestroika means restructuring... Glasnost means openness. These are the keys to the future of the Soviet Union.", source: "Mikhail Gorbachev, c. 1987" }
];

const questions = [
  { id: 1, stimulusId: 1, question: "The 'iron curtain' described by Churchill refers to the division between:", options: ["North and South", "East and West", "Rich and Poor", "Europe and Asia"], correctAnswer: "East and West", explanation: "The 'iron curtain' symbolized the ideological and physical boundary between the democratic West and the communist East." },
  { id: 2, stimulusId: 1, question: "Which two superpowers led the opposing blocs during the Cold War?", options: ["USA and UK", "USA and USSR", "USSR and China", "Germany and Japan"], correctAnswer: "USA and USSR", explanation: "The Cold War was a global struggle for dominance between the United States and the Soviet Union." },
  { id: 3, stimulusId: 1, question: "The 'West' was primarily organized under which military alliance?", options: ["The Warsaw Pact", "NATO", "The League of Nations", "The UN"], correctAnswer: "NATO", explanation: "The North Atlantic Treaty Organization (NATO) was a collective defense alliance of Western nations." },
  { id: 4, stimulusId: 1, question: "The 'East' was primarily organized under which military alliance?", options: ["NATO", "The Warsaw Pact", "SEATO", "CENTO"], correctAnswer: "The Warsaw Pact", explanation: "The Warsaw Pact was the Soviet-led military alliance of Eastern European states." },
  { id: 5, stimulusId: 1, question: "The Cold War was 'cold' because:", options: ["It was fought in the winter", "The superpowers never directly fought each other on the battlefield", "It only involved nuclear weapons", "It was fought in space"], correctAnswer: "The superpowers never directly fought each other on the battlefield", explanation: "The conflict was characterized by proxy wars, espionage, and an arms race rather than direct combat." },
  { id: 6, stimulusId: 2, question: "The Truman Doctrine was a policy of:", options: ["Isolationism", "Containment", "Expansionism", "Free trade"], correctAnswer: "Containment", explanation: "Containment aimed to stop the spread of communism beyond its existing borders." },
  { id: 7, stimulusId: 2, question: "The Marshall Plan provided economic aid to:", options: ["The USSR", "Western Europe to rebuild after WWII", "China", "Latin America"], correctAnswer: "Western Europe to rebuild after WWII", explanation: "The plan aimed to prevent the spread of communism by stabilizing European economies." },
  { id: 8, stimulusId: 2, question: "The first major test of containment occurred in which country?", options: ["Vietnam", "Korea", "Cuba", "Afghanistan"], correctAnswer: "Korea", explanation: "The Korean War (1950-1953) was a UN-led effort to stop the invasion of South Korea by the communist North." },
  { id: 9, stimulusId: 2, question: "The 'Berlin Airlift' was a response to:", options: ["A Soviet blockade of West Berlin", "A famine in Germany", "The building of the wall", "A nuclear attack"], correctAnswer: "A Soviet blockade of West Berlin", explanation: "The US and UK flew supplies into the city for nearly a year to bypass the blockade." },
  { id: 10, stimulusId: 2, question: "The 'Hot Line' established in 1963 was a direct result of the:", options: ["Korean War", "Cuban Missile Crisis", "Vietnam War", "Space Race"], correctAnswer: "Cuban Missile Crisis", explanation: "The crisis brought the world to the brink of nuclear war, leading to a need for direct communication between leaders." },
  { id: 11, stimulusId: 3, question: "The Domino Theory was used to justify US involvement in:", options: ["The Korean War", "The Vietnam War", "The Gulf War", "The Iraq War"], correctAnswer: "The Vietnam War", explanation: "The US feared that if South Vietnam fell to communism, all of Southeast Asia would follow." },
  { id: 12, stimulusId: 3, question: "A 'Proxy War' is a conflict where:", options: ["Superpowers fight directly", "Superpowers support opposing sides in a third-party conflict", "Only robots fight", "There are no weapons"], correctAnswer: "Superpowers support opposing sides in a third-party conflict", explanation: "Vietnam, Korea, and Afghanistan are classic examples of Cold War proxy wars." },
  { id: 13, stimulusId: 3, question: "The 'Viet Cong' were:", options: ["South Vietnamese communists using guerrilla tactics", "The North Vietnamese Army", "US special forces", "French colonizers"], correctAnswer: "South Vietnamese communists using guerrilla tactics", explanation: "The Viet Cong fought to overthrow the US-backed government in the South." },
  { id: 14, stimulusId: 3, question: "The Vietnam War ended with:", options: ["A US victory", "The unification of Vietnam under a communist government", "A permanent division of the country", "A French return"], correctAnswer: "The unification of Vietnam under a communist government", explanation: "The US withdrew in 1973, and the South fell to the North in 1975." },
  { id: 15, stimulusId: 3, question: "The 'Non-Aligned Movement' consisted of nations that:", options: ["Joined NATO", "Joined the Warsaw Pact", "Refused to take sides in the Cold War", "Had no government"], correctAnswer: "Refused to take sides in the Cold War", explanation: "Led by nations like India and Egypt, the movement sought to maintain independence from both blocs." },
  { id: 16, stimulusId: 4, question: "The Space Race was a competition for technological superiority between:", options: ["USA and China", "USA and USSR", "USSR and Germany", "UK and France"], correctAnswer: "USA and USSR", explanation: "The race began with the Soviet launch of Sputnik in 1957." },
  { id: 17, stimulusId: 4, question: "The first artificial satellite to orbit the Earth was:", options: ["Apollo 11", "Sputnik 1", "Explorer 1", "Vostok 1"], correctAnswer: "Sputnik 1", explanation: "The Soviet success sparked fear in the US and led to the creation of NASA." },
  { id: 18, stimulusId: 4, question: "The first human to travel into space was:", options: ["Neil Armstrong", "Yuri Gagarin", "John Glenn", "Buzz Aldrin"], correctAnswer: "Yuri Gagarin", explanation: "The Soviet cosmonaut orbited the Earth in 1961." },
  { id: 19, stimulusId: 4, question: "The US 'won' the race to the moon with the landing of:", options: ["Apollo 1", "Apollo 11", "Apollo 13", "Gemini 7"], correctAnswer: "Apollo 11", explanation: "Neil Armstrong and Buzz Aldrin walked on the moon in July 1969." },
  { id: 20, stimulusId: 4, question: "The Space Race led to the development of which military technology?", options: ["Tanks", "ICBMs (Intercontinental Ballistic Missiles)", "Submarines", "Machine guns"], correctAnswer: "ICBMs (Intercontinental Ballistic Missiles)", explanation: "The same rockets used for space exploration could carry nuclear warheads across continents." },
  { id: 21, stimulusId: 5, question: "The Civil Rights Movement in the US aimed to end:", options: ["Communism", "Racial segregation and discrimination", "The Vietnam War", "Taxes"], correctAnswer: "Racial segregation and discrimination", explanation: "The movement used non-violent protest to achieve legal and social equality." },
  { id: 22, stimulusId: 5, question: "The 1960s saw a global wave of social movements, including:", options: ["Feminism", "Environmentalism", "Student protests", "All of the above"], correctAnswer: "All of the above", explanation: "The decade was a period of intense cultural and political change worldwide." },
  { id: 23, stimulusId: 5, question: "The 'Second Wave' of feminism focused on:", options: ["The right to vote", "Workplace equality, reproductive rights, and social roles", "Ending slavery", "Education only"], correctAnswer: "Workplace equality, reproductive rights, and social roles", explanation: "It expanded the goals of the earlier suffrage movement." },
  { id: 24, stimulusId: 5, question: "The 'Green Revolution' of the mid-20th century involved:", options: ["A political party", "New agricultural technologies to increase food production", "Reforestation", "The end of oil"], correctAnswer: "New agricultural technologies to increase food production", explanation: "High-yield seeds and fertilizers helped prevent mass famine in developing nations." },
  { id: 25, stimulusId: 5, question: "A negative consequence of the Green Revolution was:", options: ["Less food", "Environmental damage from pesticides and fertilizers", "The end of farming", "Lower populations"], correctAnswer: "Environmental damage from pesticides and fertilizers", explanation: "The increased production came with significant ecological costs." },
  { id: 26, stimulusId: 6, question: "Nehru was the first Prime Minister of which newly independent nation?", options: ["Pakistan", "India", "Bangladesh", "Sri Lanka"], correctAnswer: "India", explanation: "India gained independence from British rule in 1947." },
  { id: 27, stimulusId: 6, question: "The 'Partition' of 1947 divided British India into:", options: ["India and China", "India and Pakistan", "India and Burma", "India and Iran"], correctAnswer: "India and Pakistan", explanation: "The division was based on religious lines (Hindu-majority India and Muslim-majority Pakistan)." },
  { id: 28, stimulusId: 6, question: "The primary leader of the non-violent independence movement in India was:", options: ["Jawaharlal Nehru", "Mohandas Gandhi", "Muhammad Ali Jinnah", "Indira Gandhi"], correctAnswer: "Mohandas Gandhi", explanation: "Gandhi's tactics of civil disobedience inspired movements worldwide." },
  { id: 29, stimulusId: 6, question: "Decolonization after WWII was driven by:", options: ["The weakness of European powers", "The rise of nationalist movements", "Superpower support for self-determination", "All of the above"], correctAnswer: "All of the above", explanation: "A combination of internal and external factors led to the end of European empires." },
  { id: 30, stimulusId: 6, question: "Which African nation was the first to gain independence from Britain in 1957?", options: ["Nigeria", "Kenya", "Ghana", "South Africa"], correctAnswer: "Ghana", explanation: "Kwame Nkrumah led Ghana to independence, inspiring other African nations." },
  { id: 31, stimulusId: 7, question: "Apartheid was a system of institutionalized racial segregation in:", options: ["The USA", "South Africa", "Rhodesia", "Kenya"], correctAnswer: "South Africa", explanation: "The white-minority government enforced strict separation and discrimination against the black majority." },
  { id: 32, stimulusId: 7, question: "Nelson Mandela was a leader of which anti-apartheid organization?", options: ["The PLO", "The ANC (African National Congress)", "The IRA", "The UN"], correctAnswer: "The ANC (African National Congress)", explanation: "Mandela spent 27 years in prison before becoming South Africa's first black president." },
  { id: 33, stimulusId: 7, question: "The end of Apartheid in the 1990s was due to:", options: ["Internal protests", "International sanctions and pressure", "Negotiations between Mandela and de Klerk", "All of the above"], correctAnswer: "All of the above", explanation: "A combination of factors led to the peaceful transition to multiracial democracy." },
  { id: 34, stimulusId: 7, question: "Which leader in Algeria led the fight for independence from France?", options: ["Kwame Nkrumah", "Ahmed Ben Bella", "Jomo Kenyatta", "Gamal Abdel Nasser"], correctAnswer: "Ahmed Ben Bella", explanation: "The Algerian War was a long and bloody conflict that ended in 1962." },
  { id: 35, stimulusId: 7, question: "The 'Mau Mau' rebellion occurred in which British colony?", options: ["Nigeria", "Kenya", "Ghana", "Uganda"], correctAnswer: "Kenya", explanation: "The rebellion was a violent response to British land seizure and colonial rule." },
  { id: 36, stimulusId: 8, question: "The conflict in Palestine is primarily a struggle over:", options: ["Religion", "Land and national identity", "Oil", "Trade"], correctAnswer: "Land and national identity", explanation: "Both Jews and Arabs claim the same territory as their ancestral homeland." },
  { id: 37, stimulusId: 8, question: "The modern state of Israel was created in:", options: ["1918", "1945", "1948", "1967"], correctAnswer: "1948", explanation: "The UN partition plan led to the creation of Israel and the first Arab-Israeli war." },
  { id: 38, stimulusId: 8, question: "The 'Six-Day War' of 1967 resulted in Israel occupying:", options: ["The West Bank and Gaza Strip", "The Sinai Peninsula", "The Golan Heights", "All of the above"], correctAnswer: "All of the above", explanation: "The war significantly expanded the territory under Israeli control." },
  { id: 39, stimulusId: 8, question: "The 'Camp David Accords' were a peace treaty between Israel and:", options: ["Jordan", "Egypt", "Syria", "Lebanon"], correctAnswer: "Egypt", explanation: "Egypt became the first Arab nation to recognize Israel." },
  { id: 40, stimulusId: 8, question: "The 'Intifada' refers to:", options: ["A peace treaty", "Palestinian uprisings against Israeli occupation", "A religious holiday", "A type of food"], correctAnswer: "Palestinian uprisings against Israeli occupation", explanation: "The first Intifada began in 1987." },
  { id: 41, stimulusId: 9, question: "The Berlin Wall was a symbol of:", options: ["The Cold War and the division of Germany", "Economic success", "Global peace", "The end of communism"], correctAnswer: "The Cold War and the division of Germany", explanation: "The wall was built by East Germany to stop its citizens from fleeing to the West." },
  { id: 42, stimulusId: 9, question: "The fall of the Berlin Wall in 1989 marked the beginning of the end of:", options: ["WWII", "The Cold War and Soviet dominance in Eastern Europe", "The UN", "NATO"], correctAnswer: "The Cold War and Soviet dominance in Eastern Europe", explanation: "The collapse of the wall led to the reunification of Germany and the fall of communist regimes." },
  { id: 43, stimulusId: 9, question: "Which US President is credited with pressuring the USSR to reform?", options: ["Jimmy Carter", "Ronald Reagan", "George H.W. Bush", "Bill Clinton"], correctAnswer: "Ronald Reagan", explanation: "Reagan's military buildup and rhetoric challenged the 'Evil Empire'." },
  { id: 44, stimulusId: 9, question: "The 'Strategic Defense Initiative' (SDI) was also known as:", options: ["The New Deal", "Star Wars", "The Great Society", "The Iron Curtain"], correctAnswer: "Star Wars", explanation: "The proposed space-based missile defense system pressured the Soviet economy." },
  { id: 45, stimulusId: 9, question: "The Cold War officially ended with the:", options: ["Fall of the Berlin Wall", "Collapse of the Soviet Union in 1991", "End of the Vietnam War", "Signing of the SALT treaty"], correctAnswer: "Collapse of the Soviet Union in 1991", explanation: "The USSR fragmented into 15 independent republics, including Russia." },
  { id: 46, stimulusId: 10, question: "Gorbachev's policy of 'Glasnost' meant:", options: ["Economic restructuring", "Political openness and freedom of speech", "Military buildup", "Isolation"], correctAnswer: "Political openness and freedom of speech", explanation: "Glasnost allowed for criticism of the government and exposure of past crimes." },
  { id: 47, stimulusId: 10, question: "Gorbachev's policy of 'Perestroika' meant:", options: ["Openness", "Economic restructuring and limited free-market reforms", "Religious freedom", "The end of the wall"], correctAnswer: "Economic restructuring and limited free-market reforms", explanation: "Perestroika aimed to modernize the stagnant Soviet economy." },
  { id: 48, stimulusId: 10, question: "The unintended consequence of Gorbachev's reforms was:", options: ["A stronger USSR", "The collapse of the Soviet Union and the end of the Cold War", "A new world war", "The rise of China"], correctAnswer: "The collapse of the Soviet Union and the end of the Cold War", explanation: "The reforms unleashed nationalist and democratic forces that the government could not control." },
  { id: 49, stimulusId: 10, question: "The 'Solidarity' movement in which country challenged communist rule?", options: ["Hungary", "Czechoslovakia", "Poland", "East Germany"], correctAnswer: "Poland", explanation: "The trade union led by Lech Walesa was a key factor in the fall of communism in Eastern Europe." },
  { id: 50, stimulusId: 10, question: "The 'Velvet Revolution' was a peaceful transition to democracy in:", options: ["Poland", "Czechoslovakia", "Romania", "Bulgaria"], correctAnswer: "Czechoslovakia", explanation: "The 1989 revolution ended decades of communist rule without violence." }
];

const QuizUnit8 = () => {
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
            <h2 className="text-3xl font-bold">Unit 8 Mastery Complete!</h2>
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
            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">Unit 8: Cold War & Decolonization</div>
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

export default QuizUnit8;