import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { units } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, XCircle, RefreshCcw, Brain, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Flashcards = () => {
  const { unitId } = useParams();
  const navigate = useNavigate();
  const unit = units.find((u) => u.id === Number(unitId));
  
  const [mode, setMode] = useState<"active" | "normal">("active");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  
  // Score tracking
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  if (!unit) return null;

  const currentCard = unit.flashcards[currentIndex];

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
    if (currentIndex < unit.flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setUserInput("");
      setIsSubmitted(false);
      setShowAnswer(false);
    } else {
      setIsFinished(true);
    }
  };

  const resetSession = () => {
    setCurrentIndex(0);
    setUserInput("");
    setIsSubmitted(false);
    setIsFinished(false);
    setShowAnswer(false);
    setCorrectCount(0);
    setIncorrectCount(0);
  };

  if (isFinished) {
    return (
      <Layout>
        <div className="max-w-md mx-auto text-center space-y-8 py-12">
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
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Button variant="ghost" onClick={() => navigate("/units/ap-world")} className="text-muted-foreground self-start sm:self-auto">
            <ArrowLeft className="mr-2 h-4 w-4" /> Exit
          </Button>
          
          <Tabs value={mode} onValueChange={(v) => setMode(v as any)} className="w-full sm:w-auto">
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
              {currentIndex + 1} of {unit.flashcards.length}
            </span>
          </div>
        </div>

        <div className="space-y-8">
          <Card className="border-border shadow-none bg-card min-h-[240px] flex items-center justify-center text-center p-8 relative overflow-hidden">
            <CardContent className="p-0 z-10">
              <p className="text-2xl font-medium leading-relaxed text-card-foreground">
                {showAnswer ? currentCard.answer : currentCard.prompt}
              </p>
            </CardContent>
            {showAnswer && (
              <div className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">
                Answer
              </div>
            )}
          </Card>

          {mode === "active" ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground/60 uppercase tracking-wider">Your Answer</label>
                <Input
                  autoFocus
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  disabled={isSubmitted}
                  placeholder="Type the answer here..."
                  className={cn(
                    "h-14 text-lg border-border focus-visible:ring-primary rounded-xl",
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
                <div className="space-y-4 animate-in fade-in slide-in-from-top-2">
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
                    {currentIndex < unit.flashcards.length - 1 ? "Next Card" : "Finish Session"}
                  </Button>
                </div>
              )}
            </form>
          ) : (
            <div className="space-y-4">
              {!showAnswer ? (
                <Button onClick={() => setShowAnswer(true)} className="w-full h-14 rounded-xl text-lg font-semibold shadow-lg shadow-primary/10">
                  Show Answer
                </Button>
              ) : (
                <div className="grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2">
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
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Flashcards;