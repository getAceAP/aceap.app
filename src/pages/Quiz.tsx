import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { useAudio } from "@/components/Layout";
import { units, Question } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, XCircle, ArrowLeft, RefreshCcw } from "lucide-react";
import { cn } from "@/lib/utils";

const Quiz = () => {
  const { unitId } = useParams();
  const navigate = useNavigate();
  const unit = units.find((u) => u.id === Number(unitId));
  const { playCorrect, playIncorrect } = useAudio();

  const [sessionQuestions, setSessionQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (unit) {
      const shuffled = [...unit.questions].sort(() => Math.random() - 0.5);
      setSessionQuestions(shuffled.slice(0, 10));
    }
  }, [unit]);

  if (!unit || sessionQuestions.length === 0) return null;

  const currentQuestion = sessionQuestions[currentIndex];
  const progress = ((currentIndex) / sessionQuestions.length) * 100;

  const handleOptionSelect = (option: string) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);

    const isCorrect = option === currentQuestion.correctAnswer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
      playCorrect();
    } else {
      playIncorrect();
    }
  };

  const handleNext = () => {
    if (currentIndex < sessionQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
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
            <h2 className="text-2xl sm:text-3xl font-bold">Quiz Complete!</h2>
            <p className="text-muted-foreground">Your score: {score} / {sessionQuestions.length}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button onClick={() => navigate("/units/ap-world")} className="flex-1 h-12 rounded-xl">
              <RefreshCcw className="mr-2 h-4 w-4" /> Back to Units
            </Button>
            <Button variant="outline" onClick={() => window.location.reload()} className="flex-1 h-12 rounded-xl">
              Try Again
            </Button>
          </div>
        </motion.div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-6 sm:space-y-8">
        <div className="flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate("/units/ap-world")} className="text-muted-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" /> Exit
          </Button>
          <div className="flex items-center gap-3 text-sm font-bold">
            <span className="text-green-600">{score}</span>
            <span className="text-muted-foreground">/ {sessionQuestions.length}</span>
          </div>
        </div>

        <Progress value={progress} className="h-2 bg-muted" />

        <Card className="border-border shadow-none bg-card">
          <CardContent className="pt-6 sm:pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 leading-tight">
              {currentQuestion.question}
            </h2>

            <div className="grid gap-3 sm:gap-4">
              {currentQuestion.options.map((option) => (
                <Button
                  key={option}
                  variant={selectedOption === option ? (option === currentQuestion.correctAnswer ? "default" : "destructive") : "outline"}
                  onClick={() => handleOptionSelect(option)}
                  className={cn(
                    "h-12 sm:h-14 rounded-xl text-base sm:text-lg font-semibold border-border transition-all",
                    isAnswered && selectedOption === option && option === currentQuestion.correctAnswer
                      ? "border-green-500 bg-green-500/10 text-green-600 dark:text-green-400"
                      : isAnswered && selectedOption === option && option !== currentQuestion.correctAnswer
                      ? "border-destructive bg-destructive/10 text-destructive"
                      : "hover:border-primary hover:bg-muted"
                  )}
                  disabled={isAnswered}
                >
                  {option}
                </Button>
              ))}
            </div>

            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-2xl border"
              >
                <div className={cn(
                  "flex items-center gap-3",
                  selectedOption === currentQuestion.correctAnswer
                    ? "text-green-600 dark:text-green-400 border-green-500/20 bg-green-500/5"
                    : "text-destructive border-destructive/20 bg-destructive/5"
                )}>
                  {selectedOption === currentQuestion.correctAnswer ? (
                    <CheckCircle2 size={20} />
                  ) : (
                    <XCircle size={20} />
                  )}
                  <div className="flex flex-col">
                    <span className="font-bold text-sm sm:text-base">
                      {selectedOption === currentQuestion.correctAnswer ? "Correct!" : "Incorrect"}
                    </span>
                    {!selectedOption && <span className="text-xs sm:text-sm opacity-70">Please select an answer.</span>}
                    {selectedOption !== currentQuestion.correctAnswer && (
                      <span className="text-xs sm:text-sm opacity-90">
                        Correct: <span className="font-bold underline">{currentQuestion.correctAnswer}</span>
                      </span>
                    )}
                  </div>
                </div>

                <Button
                  onClick={handleNext}
                  className={cn(
                    "w-full mt-4 h-12 sm:h-14 rounded-xl text-base sm:text-lg font-semibold shadow-lg",
                    selectedOption === currentQuestion.correctAnswer
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : "bg-destructive hover:bg-destructive/90 text-white"
                  )}
                >
                  {currentIndex < sessionQuestions.length - 1 ? "Next Question" : "Finish Quiz"}
                </Button>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Quiz;