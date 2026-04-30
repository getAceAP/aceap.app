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
  { id: 1, text: "The lamps are going out all over Europe; we shall not see them lit again in our lifetime.", source: "Sir Edward Grey, British Foreign Secretary, August 3, 1914" },
  { id: 2, text: "We intend to begin on the first of February unrestricted submarine warfare. We shall endeavor in spite of this to keep the United States of America neutral.", source: "The Zimmermann Telegram, 1917" },
  { id: 3, text: "The Allied and Associated Governments affirm and Germany accepts the responsibility of Germany and her allies for causing all the loss and damage.", source: "Article 231 of the Treaty of Versailles (The War Guilt Clause), 1919" },
  { id: 4, text: "The history of all hitherto existing society is the history of class struggles... the proletarians have nothing to lose but their chains.", source: "Karl Marx and Friedrich Engels, The Communist Manifesto (Context: Russian Revolution 1917)" },
  { id: 5, text: "Fascism, the more it considers and observes the future and the development of humanity... believes neither in the possibility nor the utility of perpetual peace.", source: "Benito Mussolini, The Doctrine of Fascism, 1932" },
  { id: 6, text: "The Japanese people forever renounce war as a sovereign right of the nation and the threat or use of force as means of settling international disputes.", source: "Article 9 of the Japanese Constitution, 1947 (Context: Post-WWII)" },
  { id: 7, text: "Yesterday, December 7th, 1941—a date which will live in infamy—the United States of America was suddenly and deliberately attacked by naval and air forces of the Empire of Japan.", source: "Franklin D. Roosevelt, Pearl Harbor Address, 1941" },
  { id: 8, text: "The atomic bomb was no 'great decision.' It was merely another powerful weapon in the arsenal of righteousness.", source: "Harry S. Truman, Memoirs, 1955 (Context: Hiroshima and Nagasaki)" },
  { id: 9, text: "A revolution is not a dinner party... a revolution is an insurrection, an act of violence by which one class overthrows another.", source: "Mao Zedong, Report on an Investigation of the Peasant Movement in Hunan, 1927" },
  { id: 10, text: "The Holocaust was the systematic, state-sponsored persecution and murder of six million Jews by the Nazi regime and its collaborators.", source: "United States Holocaust Memorial Museum (Context: WWII Genocide)" }
];

const questions = [
  { id: 1, stimulusId: 1, question: "The 'lamps going out' refers to the start of which conflict?", options: ["The Napoleonic Wars", "World War I", "World War II", "The Cold War"], correctAnswer: "World War I", explanation: "Grey's quote captured the sense of impending doom as WWI began in 1914." },
  { id: 2, stimulusId: 1, question: "Which long-term cause of WWI involved the buildup of large standing armies?", options: ["Militarism", "Alliances", "Imperialism", "Nationalism"], correctAnswer: "Militarism", explanation: "Militarism (the 'M' in MAIN) was the glorification and expansion of military power." },
  { id: 3, stimulusId: 1, question: "The assassination of which figure triggered the start of WWI?", options: ["Archduke Franz Ferdinand", "Kaiser Wilhelm II", "Czar Nicholas II", "Woodrow Wilson"], correctAnswer: "Archduke Franz Ferdinand", explanation: "The assassination in Sarajevo by a Serbian nationalist was the immediate spark for the war." },
  { id: 4, stimulusId: 1, question: "WWI was characterized by which type of static warfare on the Western Front?", options: ["Blitzkrieg", "Trench Warfare", "Guerrilla Warfare", "Naval Blockades"], correctAnswer: "Trench Warfare", explanation: "Trench warfare led to a brutal stalemate that lasted for years." },
  { id: 5, stimulusId: 1, question: "Which new technology made WWI particularly deadly?", options: ["Poison Gas", "Machine Guns", "Tanks", "All of the above"], correctAnswer: "All of the above", explanation: "Industrialized warfare introduced devastating new weapons to the battlefield." },
  { id: 6, stimulusId: 2, question: "The Zimmermann Telegram proposed an alliance between Germany and:", options: ["Japan", "Mexico", "Russia", "Italy"], correctAnswer: "Mexico", explanation: "Germany promised to help Mexico reclaim lost territory in the US if they joined the war." },
  { id: 7, stimulusId: 2, question: "What was the primary reason the US entered WWI in 1917?", options: ["The assassination of the Archduke", "Unrestricted submarine warfare and the Zimmermann Telegram", "The Russian Revolution", "The invasion of Belgium"], correctAnswer: "Unrestricted submarine warfare and the Zimmermann Telegram", explanation: "German U-boat attacks on neutral ships and the telegram pushed the US toward war." },
  { id: 8, stimulusId: 2, question: "The concept of 'Total War' meant that:", options: ["Only soldiers were involved", "Nations mobilized all resources and populations for the war effort", "The war was fought only at sea", "There were no rules of engagement"], correctAnswer: "Nations mobilized all resources and populations for the war effort", explanation: "Total war blurred the lines between the home front and the battlefield." },
  { id: 9, stimulusId: 2, question: "Propaganda during WWI was used to:", options: ["Encourage enlistment", "Demonize the enemy", "Maintain morale", "All of the above"], correctAnswer: "All of the above", explanation: "Governments used media to control public opinion and support the war effort." },
  { id: 10, stimulusId: 2, question: "The entry of the US into WWI provided the Allies with:", options: ["New territory", "Fresh troops and massive industrial resources", "A secret weapon", "A way to end the war peacefully"], correctAnswer: "Fresh troops and massive industrial resources", explanation: "US involvement tipped the balance of power in favor of the Triple Entente." },
  { id: 11, stimulusId: 3, question: "The Treaty of Versailles primarily targeted which nation for punishment?", options: ["Austria-Hungary", "The Ottoman Empire", "Germany", "Bulgaria"], correctAnswer: "Germany", explanation: "Germany was forced to accept full blame and pay massive reparations." },
  { id: 12, stimulusId: 3, question: "Which international organization was created to prevent future wars?", options: ["The United Nations", "The League of Nations", "NATO", "The Warsaw Pact"], correctAnswer: "The League of Nations", explanation: "The League was a key part of Woodrow Wilson's Fourteen Points but ultimately failed." },
  { id: 13, stimulusId: 3, question: "The 'Mandate System' established after WWI was a form of:", options: ["Independence", "Disguised colonialism in the Middle East and Africa", "Free trade", "Democracy"], correctAnswer: "Disguised colonialism in the Middle East and Africa", explanation: "Former Ottoman and German territories were placed under the 'tutelage' of Allied powers." },
  { id: 14, stimulusId: 3, question: "The economic hardship caused by reparations in Germany led to:", options: ["Hyperinflation and the rise of extremism", "A period of great wealth", "The end of the monarchy", "Industrialization"], correctAnswer: "Hyperinflation and the rise of extremism", explanation: "Economic instability provided fertile ground for the Nazi Party's rise to power." },
  { id: 15, stimulusId: 3, question: "Which empire collapsed as a result of WWI?", options: ["The Ottoman Empire", "The Austro-Hungarian Empire", "The Russian Empire", "All of the above"], correctAnswer: "All of the above", explanation: "WWI redrew the map of Europe and the Middle East as old empires fell." },
  { id: 16, stimulusId: 4, question: "The Russian Revolution of 1917 led to the creation of the world's first:", options: ["Democratic state", "Communist state", "Fascist state", "Theocracy"], correctAnswer: "Communist state", explanation: "The Bolsheviks, led by Lenin, established the Soviet Union (USSR)." },
  { id: 17, stimulusId: 4, question: "The Bolshevik slogan 'Peace, Land, and Bread' appealed to:", options: ["The nobility", "The weary soldiers, peasants, and urban workers", "Foreign investors", "The Church"], correctAnswer: "The weary soldiers, peasants, and urban workers", explanation: "The slogan addressed the primary grievances of the Russian people during WWI." },
  { id: 18, stimulusId: 4, question: "Who was the leader of the Bolsheviks during the revolution?", options: ["Joseph Stalin", "Vladimir Lenin", "Leon Trotsky", "Nicholas II"], correctAnswer: "Vladimir Lenin", explanation: "Lenin adapted Marxist theory to the conditions of Russia." },
  { id: 19, stimulusId: 4, question: "The Russian Revolution was a direct consequence of:", options: ["Industrial success", "The failures and losses of WWI", "A successful harvest", "The end of the Cold War"], correctAnswer: "The failures and losses of WWI", explanation: "The war exposed the weakness and corruption of the Czarist regime." },
  { id: 20, stimulusId: 4, question: "Stalin's 'Five-Year Plans' aimed to:", options: ["Spread democracy", "Rapidly industrialize the USSR", "End the war", "Promote free trade"], correctAnswer: "Rapidly industrialize the USSR", explanation: "Stalin used state planning to transform the Soviet economy into an industrial powerhouse." },
  { id: 21, stimulusId: 5, question: "Fascism is characterized by:", options: ["Extreme nationalism and totalitarian rule", "Global cooperation", "Individual rights", "Free market capitalism"], correctAnswer: "Extreme nationalism and totalitarian rule", explanation: "Fascism glorified the state and the leader above all else." },
  { id: 22, stimulusId: 5, question: "Which leader established the first Fascist regime in Italy?", options: ["Adolf Hitler", "Benito Mussolini", "Francisco Franco", "Joseph Stalin"], correctAnswer: "Benito Mussolini", explanation: "Mussolini's 'Blackshirts' seized power in the early 1920s." },
  { id: 23, stimulusId: 5, question: "The Great Depression contributed to the rise of totalitarianism by:", options: ["Ending all trade", "Causing widespread economic misery and loss of faith in democracy", "Promoting peace", "Increasing taxes"], correctAnswer: "Causing widespread economic misery and loss of faith in democracy", explanation: "Economic collapse led many to seek 'strong' leaders who promised order and jobs." },
  { id: 24, stimulusId: 5, question: "Hitler's ideology of 'Lebensraum' meant:", options: ["Peace with neighbors", "Living space for the 'Aryan' race through expansion", "Religious freedom", "Economic cooperation"], correctAnswer: "Living space for the 'Aryan' race through expansion", explanation: "This justified the invasion of Eastern Europe and the USSR." },
  { id: 25, stimulusId: 5, question: "The policy of 'Appeasement' involved:", options: ["Attacking Germany immediately", "Giving in to Hitler's demands to avoid war", "Joining the League of Nations", "Banning all trade"], correctAnswer: "Giving in to Hitler's demands to avoid war", explanation: "Britain and France hoped to satisfy Hitler's ambitions without a major conflict." },
  { id: 26, stimulusId: 6, question: "The Japanese Constitution of 1947 was written during the occupation by:", options: ["The USSR", "The United States", "China", "Great Britain"], correctAnswer: "The United States", explanation: "The US, led by General MacArthur, oversaw the democratization of Japan." },
  { id: 27, stimulusId: 6, question: "Japan's expansion in the 1930s was driven by a need for:", options: ["Religious conversion", "Natural resources and raw materials", "Global peace", "New technology"], correctAnswer: "Natural resources and raw materials", explanation: "As an island nation, Japan sought to secure oil, rubber, and iron through conquest." },
  { id: 28, stimulusId: 6, question: "The 'Greater East Asia Co-Prosperity Sphere' was Japan's term for its:", options: ["Trade alliance", "Empire in Asia", "Peace treaty", "Religious movement"], correctAnswer: "Empire in Asia", explanation: "Japan claimed to be 'liberating' Asia from Western imperialism while establishing its own dominance." },
  { id: 29, stimulusId: 6, question: "The invasion of which region in 1931 marked the start of Japanese aggression?", options: ["Korea", "Manchuria", "Vietnam", "The Philippines"], correctAnswer: "Manchuria", explanation: "The League of Nations failed to stop the invasion, exposing its weakness." },
  { id: 30, stimulusId: 6, question: "The 'Rape of Nanjing' was a horrific atrocity committed by Japanese troops in:", options: ["Korea", "China", "The Philippines", "Burma"], correctAnswer: "China", explanation: "The 1937 massacre in the Chinese capital shocked the world." },
  { id: 31, stimulusId: 7, question: "The attack on Pearl Harbor brought which nation into WWII?", options: ["The USSR", "The United States", "Great Britain", "China"], correctAnswer: "The United States", explanation: "The surprise attack ended US isolationism and unified the country for war." },
  { id: 32, stimulusId: 7, question: "The 'Allied Powers' in WWII included:", options: ["Germany, Italy, Japan", "USA, UK, USSR, China", "France, Spain, Portugal", "Turkey, Iran, Iraq"], correctAnswer: "USA, UK, USSR, China", explanation: "The 'Big Three' (Roosevelt, Churchill, Stalin) led the global effort against the Axis." },
  { id: 33, stimulusId: 7, question: "The 'Axis Powers' in WWII included:", options: ["Germany, Italy, Japan", "USA, UK, USSR", "France, Belgium, Netherlands", "China, India, Australia"], correctAnswer: "Germany, Italy, Japan", explanation: "The Axis sought to redraw the world map through military conquest." },
  { id: 34, stimulusId: 7, question: "The 'D-Day' invasion of Normandy aimed to:", options: ["Defeat Japan", "Liberate Western Europe from Nazi control", "Invade the USSR", "End the war in Italy"], correctAnswer: "Liberate Western Europe from Nazi control", explanation: "The 1944 invasion opened a second front against Germany." },
  { id: 35, stimulusId: 7, question: "The 'Island Hopping' strategy was used by the US to:", options: ["Invade Germany", "Defeat Japan in the Pacific", "Protect Australia", "End the war in Africa"], correctAnswer: "Defeat Japan in the Pacific", explanation: "The US captured strategic islands to move closer to the Japanese mainland." },
  { id: 36, stimulusId: 8, question: "The decision to use the atomic bomb was made by:", options: ["Franklin D. Roosevelt", "Harry S. Truman", "Winston Churchill", "Douglas MacArthur"], correctAnswer: "Harry S. Truman", explanation: "Truman argued the bomb would end the war quickly and save American lives." },
  { id: 37, stimulusId: 8, question: "The two Japanese cities targeted by atomic bombs were:", options: ["Tokyo and Osaka", "Hiroshima and Nagasaki", "Kyoto and Nagoya", "Yokohama and Kobe"], correctAnswer: "Hiroshima and Nagasaki", explanation: "The bombings in August 1945 led to Japan's unconditional surrender." },
  { id: 38, stimulusId: 8, question: "The start of the 'Nuclear Age' led to which long-term conflict?", options: ["WWI", "WWII", "The Cold War", "The Vietnam War"], correctAnswer: "The Cold War", explanation: "The nuclear monopoly of the US and later the arms race with the USSR defined the post-war era." },
  { id: 39, stimulusId: 8, question: "The 'Manhattan Project' was the secret US program to:", options: ["Build a new tank", "Develop the atomic bomb", "Crack the Enigma code", "Invade Japan"], correctAnswer: "Develop the atomic bomb", explanation: "The project involved top scientists and massive industrial resources." },
  { id: 40, stimulusId: 8, question: "Critics of the atomic bomb argue that:", options: ["It was not powerful enough", "It was unnecessary and targeted civilians", "It was too expensive", "It should have been used on Germany"], correctAnswer: "It was unnecessary and targeted civilians", explanation: "The moral and strategic necessity of the bombings remains a subject of intense debate." },
  { id: 41, stimulusId: 9, question: "Mao Zedong's revolution focused on which group as the revolutionary force?", options: ["Urban workers", "The peasantry", "The nobility", "The military"], correctAnswer: "The peasantry", explanation: "Mao adapted Marxism to the conditions of rural China." },
  { id: 42, stimulusId: 9, question: "The 'Long March' was a strategic retreat by the:", options: ["Nationalists", "Chinese Communist Party (CCP)", "Japanese Army", "Warlords"], correctAnswer: "Chinese Communist Party (CCP)", explanation: "The march allowed the CCP to survive and build support in the countryside." },
  { id: 43, stimulusId: 9, question: "The Chinese Civil War was fought between the CCP and the:", options: ["Japanese", "Nationalists (Kuomintang)", "Mongols", "Russians"], correctAnswer: "Nationalists (Kuomintang)", explanation: "The war ended in 1949 with the CCP's victory and the creation of the People's Republic of China." },
  { id: 44, stimulusId: 9, question: "The 'Great Leap Forward' was Mao's attempt to:", options: ["Promote democracy", "Rapidly industrialize and collectivize agriculture", "End the war with Japan", "Build the Great Wall"], correctAnswer: "Rapidly industrialize and collectivize agriculture", explanation: "The policy resulted in a massive famine and millions of deaths." },
  { id: 45, stimulusId: 9, question: "The 'Cultural Revolution' aimed to:", options: ["Promote traditional arts", "Purge 'capitalist' elements and reinforce Maoist ideology", "End communism", "Open trade with the West"], correctAnswer: "Purge 'capitalist' elements and reinforce Maoist ideology", explanation: "The movement caused widespread chaos and social disruption in China." },
  { id: 46, stimulusId: 10, question: "The 'Final Solution' was the Nazi plan for:", options: ["Winning the war", "The genocide of the Jewish people", "Economic recovery", "Colonizing Africa"], correctAnswer: "The genocide of the Jewish people", explanation: "The Holocaust was a systematic, industrialized attempt to eliminate an entire population." },
  { id: 47, stimulusId: 10, question: "The 'Nuremberg Laws' of 1935:", options: ["Ended the war", "Stripped Jews of their citizenship and rights in Germany", "Banned the Nazi Party", "Promoted equality"], correctAnswer: "Stripped Jews of their citizenship and rights in Germany", explanation: "The laws were a key step in the legal persecution of Jews." },
  { id: 48, stimulusId: 10, question: "The 'Kristallnacht' (Night of Broken Glass) was a:", options: ["Peace treaty", "State-sponsored pogrom against Jewish property and people", "Religious holiday", "Military victory"], correctAnswer: "State-sponsored pogrom against Jewish property and people", explanation: "The 1938 violence marked a major escalation in Nazi persecution." },
  { id: 49, stimulusId: 10, question: "The 'Nuremberg Trials' after the war established the principle of:", options: ["Collective guilt", "Individual responsibility for 'crimes against humanity'", "Total immunity for soldiers", "The end of all trials"], correctAnswer: "Individual responsibility for 'crimes against humanity'", explanation: "The trials held Nazi leaders accountable for their actions." },
  { id: 50, stimulusId: 10, question: "The term 'Genocide' was coined to describe the:", options: ["Casualties of WWI", "Industrial Revolution", "Systematic destruction of a racial, political, or cultural group", "The Great Depression"], correctAnswer: "Systematic destruction of a racial, political, or cultural group", explanation: "The Holocaust led to the creation of new international laws to prevent and punish genocide." }
];

const QuizUnit7 = () => {
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
            <h2 className="text-3xl font-bold">Unit 7 Mastery Complete!</h2>
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
            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">Unit 7: Global Conflict</div>
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

export default QuizUnit7;