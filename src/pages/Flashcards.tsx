import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { units, Flashcard } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, RefreshCcw, Brain, Eye, Shuffle, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { playSound } from "@/utils/sounds";

const Flashcards = () => {
  const { unitId } = useParams();
  const navigate = useNavigate();
  const unit = units.find((u) => u.id === Number(unitId));
  
  const [mode, setMode] = useState<"active" | "normal">("active");
  const [shuffledCards, setShuffledCards] = useState<Flashcard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showHint, setShowHint] = useState(false);
  
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [overrideSet, setOverrideSet] = useState<boolean>(false); // tracks if user manually overrode

  useEffect(() => {
    if (unit) {
      setShuffledCards([...unit.flashcards]);
    }
  }, [unit]);

  if (!unit || shuffledCards.length === 0) return null;

  const currentCard = shuffledCards[currentIndex];

  const handleShuffle = () => {
    const shuffled = [...shuffledCards].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
    resetSession();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitted || !userInput.trim()) return;

    const normalizedInput = userInput.trim().toLowerCase();
    const normalizedTarget = currentCard.prompt.trim().toLowerCase();
    
    const correct = normalizedInput === normalizedTarget;
    setIsCorrect(correct);
    setIsSubmitted(true);
    setOverrideSet(false); // reset any previous override

    if (correct) {
      setCorrectCount(prev => prev + 1);
      playSound('correct');
    } else {
      setIncorrectCount(prev => prev + 1);
      playSound('wrong');
    }
  };

  const handleShowAnswer = () => {
    setIsCorrect(false);
    setIsSubmitted(true);
    setIncorrectCount(prev => prev + 1);
    setOverrideSet(false);
    playSound('wrong');
  };

  const handleNormalResult = (correct: boolean) => {
    if (correct) {
      setCorrectCount(prev => prev + 1);
      playSound('correct');
    } else {
      setIncorrectCount(prev => prev + 1);
      playSound('wrong');
    }
    handleNext();
  };

  const handleNext = () => {
    if (currentIndex < shuffledCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setUserInput("");
      setIsSubmitted(false);
      setIsFlipped(false);
      setShowHint(false);
      setOverrideSet(false);
    } else {
      setIsFinished(true);
    }
  };

  const resetSession = () => {
    setCurrentIndex(0);
    setUserInput("");
    setIsSubmitted(false);
    setIsFinished(false);
    setIsFlipped(false);
    setShowHint(false);
    setCorrectCount(0);
    setIncorrectCount(0);
    setOverrideSet(false);
  };

  // Manual override handlers
  const overrideCorrect = () => {
    if (!isSubmitted) return;
    if (!isCorrect) {
      setCorrectCount(prev => prev + 1);
      setIncorrectCount(prev => Math.max(prev - 1, 0));
      playSound('correct');
    }
    setIsCorrect(true);
    setOverrideSet(true);
  };

  const overrideIncorrect = () => {
    if (!isSubmitted) return;
    if (isCorrect) {
      setIncorrectCount(prev => prev + 1);
      setCorrectCount(prev => Math.max(prev - 1, 0));
      playSound('wrong');
    }
    setIsCorrect(false);
    setOverrideSet(true);
  };

  if (isFinished) {
    return (
      <Layout>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto text-center space-y-8 py-6 sm:py-12"
        >
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold">Unit {unit.id} Complete!</h2>
            <p className="text-muted-foreground">Session Summary</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 sm:p-6 rounded-2xl bg-green-500/10 border border-green-500/20">
              <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400">{correctCount}</div>
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-green-600/70">Correct</div>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-destructive/10 border border-destructive/20">
              <div className="text-2xl sm:text-3xl font-bold text-destructive">{incorrectCount}</div>
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-destructive/70">Incorrect</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button onClick={resetSession} className="w-full h-12 rounded-xl">
              <RefreshCcw className="mr-2 h-4 w-4" /> Restart
            </Button>
            <Button variant="outline" onClick={() => navigate("/units/ap-world")} className="w-full h-12 rounded-xl">
              Back to Units
            </Button>
          </div>
        </motion.div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-6 sm:space-y-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={() => navigate("/units/ap-world")} className="text-muted-foreground h-8 px-2">
                <ArrowLeft className="mr-1 h-4 w-4" /> Exit
              </Button>
              <Button variant="outline" size="sm" onClick={handleShuffle} className="rounded-lg text-[10px] font-bold uppercase tracking-wider h-8">
                <Shuffle className="mr-1.5 h-3 w-3" /> Shuffle
              </Button>
            </div>
            <div className="flex items-center gap-3 text-xs sm:text-sm font-bold">
              <span className="text-green-600 dark:text-green-400">{correctCount}</span>
              <span className="text-muted-foreground">/</span>
              <span className="text-destructive">{incorrectCount}</span>
              <span className="ml-1 text-muted-foreground font-medium">
                {currentIndex + 1}/{shuffledCards.length}
              </span>
            </div>
          </div>
          
          <Tabs value={mode} onValueChange={(v) => { setMode(v as any); setIsFlipped(false); setUserInput(""); setIsSubmitted(false); setShowHint(false); setOverrideSet(false); }} className="w-full">
            <TabsList className="grid w-full grid-cols-2 rounded-xl h-11">
              <TabsTrigger value="active" className="rounded-lg gap-2 text-xs sm:text-sm">
                <Brain size={14} /> Active Recall
              </TabsTrigger>
              <TabsTrigger value="normal" className="rounded-lg gap-2 text-xs sm:text-sm">
                <Eye size={14} /> Normal
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="space-y-6 sm:space-y-8">
          <div 
            className="perspective-1000 cursor-pointer touch-none"
            onClick={() => mode === "normal" && setIsFlipped(!isFlipped)}
          >
            <motion.div
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative w-full min-h-[240px] sm:min-h-[300px]"
            >
              {/* Front Side */}
              <Card className="absolute inset-0 w-full h-full border-border shadow-none bg-card flex items-center justify-center text-center p-6 sm:p-8 backface-hidden overflow-hidden">
                <CardContent className="p-0 w-full">
                  <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-card-foreground break-words">
                    {mode === "active" ? currentCard.answer : currentCard.prompt}
                  </p>
                  {mode === "normal" && !isFlipped && (
                    <p className="mt-4 text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest">Tap to flip</p>
                  )}
                </CardContent>
              </Card>

              {/* Back Side */}
              <Card 
                className="absolute inset-0 w-full h-full border-border shadow-none bg-accent flex items-center justify-center text-center p-6 sm:p-8 backface-hidden overflow-hidden"
                style={{ transform: "rotateY(180deg)" }}
              >
                <CardContent className="p-0 w-full">
                  <p className="text-lg sm:text-xl font-medium leading-relaxed text-accent-foreground break-words">
                    {mode === "active" ? currentCard.prompt : currentCard.answer}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <AnimatePresence mode="wait">
            {mode === "active" ? (
              <motion.form 
                key="active-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleSubmit} 
                className="space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <label className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-wider">Type the Term</label>
                    {showHint && !isSubmitted && (
                      <span className="text-[10px] font-medium text-primary animate-in fade-in slide-in-from-right-2">
                        Starts with: <span className="font-bold uppercase">{currentCard.prompt.charAt(0)}</span>
                      </span>
                    )}
                  </div>
                  <Input
                    autoFocus
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    disabled={isSubmitted}
                    placeholder="What is this term?"
                    className={cn(
                      "h-12 sm:h-14 text-base sm:text-lg border-border focus-visible:ring-primary rounded-xl transition-all",
                      isSubmitted && isCorrect && "border-green-500 bg-green-500/10 text-green-600 dark:text-green-400",
                      isSubmitted && !isCorrect && "border-destructive bg-destructive/10 text-destructive"
                    )}
                  />
                </div>

                {!isSubmitted ? (
                  <div className="flex gap-2 sm:gap-3">
                    <Button type="submit" className="flex-[2] h-12 sm:h-14 rounded-xl text-base sm:text-lg font-semibold shadow-lg shadow-primary/10">
                      Check
                    </Button>
                    <Button 
                      type="button"
                      variant="outline"
                      onClick={() => showHint ? handleShowAnswer() : setShowHint(true)}
                      className="flex-1 h-12 sm:h-14 rounded-xl border-primary/20 text-primary hover:bg-primary/5 text-xs sm:text-sm"
                    >
                      {showHint ? "Answer" : "Hint"}
                    </Button>
                  </div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-4"
                  >
                    <div className={cn(
                      "p-3 sm:p-4 rounded-xl flex items-center gap-3 border",
                      isCorrect 
                        ? "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20" 
                        : "bg-destructive/10 text-destructive border-destructive/20"
                    )}>
                      {isCorrect ? <CheckCircle2 size={18} /> : <XCircle size={18} />}
                      <div className="flex flex-col">
                        <span className="font-bold text-sm sm:text-base">
                          {isCorrect ? "Correct!" : "Incorrect"}
                        </span>
                        {!isCorrect && (
                          <span className="text-xs sm:text-sm opacity-90">
                            Correct term: <span className="font-bold underline">{currentCard.prompt}</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Manual override buttons */}
                    <div className="flex gap-2">
                      <Button
                        variant={isCorrect ? "default" : "outline"}
                        onClick={overrideCorrect}
                        disabled={overrideSet && isCorrect}
                        className="flex-1 h-10 rounded-md"
                      >
                        Mark Correct
                      </Button>
                      <Button
                        variant={!isCorrect ? "default" : "outline"}
                        onClick={overrideIncorrect}
                        disabled={overrideSet && !isCorrect}
                        className="flex-1 h-10 rounded-md"
                      >
                        Mark Incorrect
                      </Button>
                    </div>

                    <Button onClick={handleNext} className="w-full h-12 sm:h-14 rounded-xl text-base sm:text-lg font-semibold">
                      {currentIndex < shuffledCards.length - 1 ? "Next Card" : "Finish Session"}
                    </Button>
                  </motion.div>
                )}
              </motion.form>
            ) : (
              <motion.div 
                key="normal-controls"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-4"
              >
                {!isFlipped ? (
                  <div className="flex gap-3">
                    <Button onClick={() => setIsFlipped(true)} className="flex-[2] h-12 sm:h-14 rounded-xl text-base sm:text-lg font-semibold shadow-lg shadow-primary/10">
                      Show Answer
                    </Button>
                    <Button variant="outline" onClick={handleNext} className="flex-1 h-12 sm:h-14 rounded-xl border-border hover:bg-muted">
                      Skip <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <Button 
                      variant="outline" 
                      onClick={() => handleNormalResult(false)}
                      className="h-12 sm:h-14 rounded-xl border-destructive text-destructive hover:bg-destructive/10 text-xs sm:text-sm"
                    >
                      <XCircle className="mr-1.5 h-4 w-4 sm:h-5 sm:w-5" /> Incorrect
                    </Button>
                    <Button 
                      onClick={() => handleNormalResult(true)}
                      className="h-12 sm:h-14 rounded-xl bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm"
                    >
                      <CheckCircle2 className="mr-1.5 h-4 w-4 sm:h-5 sm:w-5" /> Correct
                    </Button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Layout>
  );
};

export default Flashcards;