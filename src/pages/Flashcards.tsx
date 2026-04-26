import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { units } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, XCircle, RefreshCcw } from "lucide-react";
import { cn } from "@/lib/utils";

const Flashcards = () => {
  const { unitId } = useParams();
  const navigate = useNavigate();
  const unit = units.find((u) => u.id === Number(unitId));
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  if (!unit) return null;

  const currentCard = unit.flashcards[currentIndex];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitted) return;

    const normalizedInput = userInput.trim().toLowerCase();
    const normalizedAnswer = currentCard.answer.trim().toLowerCase();
    
    setIsCorrect(normalizedInput === normalizedAnswer);
    setIsSubmitted(true);
  };

  const handleNext = () => {
    if (currentIndex < unit.flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setUserInput("");
      setIsSubmitted(false);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    return (
      <Layout>
        <div className="max-w-md mx-auto text-center space-y-6 py-12">
          <h2 className="text-3xl font-bold">Unit {unit.id} Cards Complete!</h2>
          <p className="text-muted-foreground">You've reviewed all active recall cards for this unit.</p>
          <div className="flex gap-4">
            <Button onClick={() => window.location.reload()} className="flex-1">
              <RefreshCcw className="mr-2 h-4 w-4" /> Restart
            </Button>
            <Button variant="outline" onClick={() => navigate("/")} className="flex-1">
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
        <div className="flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate("/")} className="text-muted-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" /> Exit
          </Button>
          <span className="text-sm font-medium text-muted-foreground">
            Card {currentIndex + 1} of {unit.flashcards.length}
          </span>
        </div>

        <div className="space-y-8">
          <Card className="border-border shadow-none bg-card min-h-[200px] flex items-center justify-center text-center p-8">
            <CardContent className="p-0">
              <p className="text-2xl font-medium leading-relaxed text-card-foreground">
                {currentCard.prompt}
              </p>
            </CardContent>
          </Card>

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
                  "h-14 text-lg border-border focus-visible:ring-primary",
                  isSubmitted && isCorrect && "border-green-500 bg-green-500/10 text-green-600 dark:text-green-400",
                  isSubmitted && !isCorrect && "border-destructive bg-destructive/10 text-destructive"
                )}
              />
            </div>

            {!isSubmitted ? (
              <Button type="submit" className="w-full h-12">
                Check Answer
              </Button>
            ) : (
              <div className="space-y-4 animate-in fade-in slide-in-from-top-2">
                <div className={cn(
                  "p-4 rounded-xl flex items-center gap-3",
                  isCorrect ? "bg-green-500/10 text-green-600 dark:text-green-400" : "bg-destructive/10 text-destructive"
                )}>
                  {isCorrect ? <CheckCircle2 size={20} /> : <XCircle size={20} />}
                  <span className="font-medium">
                    {isCorrect ? "Correct!" : `Incorrect. The answer is: ${currentCard.answer}`}
                  </span>
                </div>
                <Button onClick={handleNext} className="w-full h-12">
                  {currentIndex < unit.flashcards.length - 1 ? "Next Card" : "Finish Session"}
                </Button>
              </div>
            )}
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Flashcards;