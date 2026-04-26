import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { units, Flashcard } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, XCircle, RefreshCcw, Brain, Eye, Shuffle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";

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
  
  // Score tracking
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

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
    if (isSubmitted) return;

    const normalizedInput = userInput.trim().toLowerCase();
    const normalizedAnswer = currentCard.answer.trim().toLowerCase();
    
    const correct = normalizedInput === normalizedAnswer;
    setIsCorrect(correct);
    setIsSubmitted(true);
    
    if (correct) {
      setCorrectCount(prev => prev + 1);
    } else {
      setIncorrectCount(prev => prev + 1);
    }
  };

  const handleNormalResult = (correct: boolean) => {
    if (correct) {
      setCorrectCount(prev => prev + 1);
    } else {
      setIncorrectCount(prev => prev + 1);
    }
    handleNext();
  };

  const handleNext = () => {
    if (currentIndex < shuffledCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setUserInput("");
      setIsSubmitted(false);
      setIsFlipped(false);
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
    setCorrectCount(0);
    setIncorrectCount(0);
  };

  if (isFinished) {
    return (
      <Layout>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto text-center space-y-8 py-12"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Unit {unit.id} Complete!</h2>
            <p className="text-muted-foreground">Session Summary</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-green-500/10 border border-green-500/20">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">{correctCount}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-green-600/70">Correct</div>
            </div>
            <div className="p-6 rounded-2xl bg-destructive/10 border border-destructive/20">
              <div className="text-3xl font-bold text-destructive">{incorrectCount}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-destructive/70">Incorrect</div>
            </div>
          </div>

          <div className="flex gap-4">
            <Button onClick={resetSession} className="flex-1 h-12 rounded-xl">
              <RefreshCcw className="mr-2 h-4 w-4" /> Restart
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
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <Button variant="ghost" size="sm" onClick={() => navigate("/units/ap-world")} className="text-muted-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" /> Exit
            </Button>
            <Button variant="outline" size="sm" onClick={handleShuffle} className="rounded-lg text-xs font-bold uppercase tracking-wider">
              <Shuffle className="mr-2 h-3 w-3" /> Shuffle
            </Button>
          </div>
          
          <Tabs value={mode} onValueChange={(v) => { setMode(v as any); setIsFlipped(false); }} className="w-full sm:w-auto">
            <TabsList className="grid w-full grid-cols-2 rounded-xl">
              <TabsTrigger value="active" className="rounded-lg gap-2">
                <Brain size={14} /> Active Recall
              </TabsTrigger>
              <TabsTrigger value="normal" className="rounded-lg gap-2">
                <Eye size={14} /> Normal
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex items-center gap-4 text-sm font-bold">
            <span className="text-green-600 dark:text-green-400">{correctCount}</span>
            <span className="text-muted-foreground">/</span>
            <span className="text-destructive">{incorrectCount}</span>
            <span className="ml-2 text-muted-foreground font-medium">
              {currentIndex + 1} of {shuffledCards.length}
            </span>
          </div>
        </div>

        <div className="space-y-8">
          <div 
            className="perspective-1000 cursor-pointer"
            onClick={() => mode === "normal" && setIsFlipped(!isFlipped)}
          >
            <motion.div
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative w-full min-h-[300px]"
            >
              {/* Front Side */}
              <Card className="absolute inset-0 w-full h-full border-border shadow-none bg-card flex items-center justify-center text-center p-8 backface-hidden">
                <CardContent className="p-0">
                  <p className="text-2xl font-medium leading-relaxed text-card-foreground">
                    {currentCard.prompt}
                  </p>
                  {mode === "normal" && !isFlipped && (
                    <p className="mt-4 text-xs font-bold text-muted-foreground/40 uppercase tracking-widest">Click to flip</p>
                  )}
                </CardContent>
              </Card>

              {/* Back Side */}
              <Card 
                className="absolute inset-0 w-full h-full border-border shadow-none bg-accent flex items-center justify-center text-center p-8 backface-hidden"
                style={{ transform: "rotateY(180deg)" }}
              >
                <CardContent className="p-0">
                  <p className="text-xl font-medium leading-relaxed text-accent-foreground">
                    {currentCard.answer}
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
                  <label className="text-xs font-bold text-muted-foreground/60 uppercase tracking-wider">Your Answer</label>
                  <Input
                    autoFocus
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    disabled={isSubmitted}
                    placeholder="Type the answer here..."
                    className={cn(
                      "h-14 text-lg border-border focus-visible:ring-primary rounded-xl transition-all",
                      isSubmitted && isCorrect && "border-green-500 bg-green-500/10 text-green-600 dark:text-green-400",
                      isSubmitted && !isCorrect && "border-destructive bg-destructive/10 text-destructive"
                    )}
                  />
                </div>

                {!isSubmitted ? (
                  <Button type="submit" className="w-full h-14 rounded-xl text-lg font-semibold shadow-lg shadow-primary/10">
                    Check Answer
                  </Button>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-4"
                  >
                    <div className={cn(
                      "p-4 rounded-xl flex items-center gap-3 border",
                      isCorrect 
                        ? "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20" 
                        : "bg-destructive/10 text-destructive border-destructive/20"
                    )}>
                      {isCorrect ? <CheckCircle2 size={20} /> : <XCircle size={20} />}
                      <span className="font-medium">
                        {isCorrect ? "Correct!" : `Incorrect. The answer is: ${currentCard.answer}`}
                      </span>
                    </div>
                    <Button onClick={handleNext} className="w-full h-14 rounded-xl text-lg font-semibold">
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
                  <Button onClick={() => setIsFlipped(true)} className="w-full h-14 rounded-xl text-lg font-semibold shadow-lg shadow-primary/10">
                    Show Answer
                  </Button>
                ) : (
                  <div className="grid grid-cols-2 gap-4">
                    <Button 
                      variant="outline" 
                      onClick={() => handleNormalResult(false)}
                      className="h-14 rounded-xl border-destructive text-destructive hover:bg-destructive/10"
                    >
                      <XCircle className="mr-2 h-5 w-5" /> Incorrect
                    </Button>
                    <Button 
                      onClick={() => handleNormalResult(true)}
                      className="h-14 rounded-xl bg-green-600 hover:bg-green-700 text-white"
                    >
                      <CheckCircle2 className="mr-2 h-5 w-5" /> Correct
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