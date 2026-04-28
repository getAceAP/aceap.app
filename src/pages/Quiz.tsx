import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { units, Question } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, XCircle, ArrowLeft, RefreshCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { playSound } from "@/utils/sounds";

const Quiz = () => {
  const { unitId } = useParams();
  const navigate = useNavigate();
  const unit = units.find((u) => u.id === Number(unitId));
  
  const [sessionQuestions, setSessionQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (unit) {
      const shuffled = [...unit.questions].sort(() => 0.5 - Math.random());
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
    
    if (option === currentQuestion.correctAnswer) {
      setScore(score + 1);
      playSound('correct');
    } else {
      playSound('wrong');
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
            <p className="text-muted-foreground">You scored {score} out of {sessionQuestions.length}</p>
          </div>
          
          <div className="flex gap-4">
            <Button onClick={() => {
              const shuffled = [...unit.questions].sort(() => 0.5 - Math.random());
              setSessionQuestions(shuffled.slice(0, 10));
              setCurrentIndex(0);
              setSelectedOption(null);
              setIsAnswered(false);
              setScore(0);
              setIsFinished(false);
            }} className="flex-1">
              <RefreshCcw className="mr-2 h-4 w-4" /> Try Again
            </Button>
            <Button variant="outline" onClick={() => navigate("/units/ap-world")} className="flex-1">
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
        <div className="flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate("/units/ap-world")} className="text-muted-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" /> Exit Quiz
          </Button>
          <span className="text-sm font-medium text-muted-foreground">
            Question {currentIndex + 1} of {sessionQuestions.length}
          </span>
        </div>

        <Progress value={progress} className="h-1 bg-muted" />

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold leading-tight">
            {currentQuestion.question}
          </h2>

          <div className="grid gap-3">
            {currentQuestion.options.map((option) => {
              const isCorrect = option === currentQuestion.correctAnswer;
              const isSelected = option === selectedOption;
              
              return (
                <button
                  key={option}
                  disabled={isAnswered}
                  onClick={() => handleOptionSelect(option)}
                  className={cn(
                    "w-full text-left p-4 rounded-xl border transition-all duration-200",
                    !isAnswered && "border-border hover:border-primary hover:bg-muted",
                    isAnswered && isCorrect && "border-green-500 bg-green-500/10 text-green-600 dark:text-green-400",
                    isAnswered && isSelected && !isCorrect && "border-destructive bg-destructive/10 text-destructive",
                    isAnswered && !isCorrect && !isSelected && "border-border opacity-50"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {isAnswered && isCorrect && <CheckCircle2 className="h-5 w-5 text-green-600" />}
                    {isAnswered && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-destructive" />}
                  </div>
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <Card className="border-none bg-muted shadow-none">
              <CardContent className="pt-6 space-y-4">
                <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Explanation</div>
                <p className="text-foreground leading-relaxed">{currentQuestion.explanation}</p>
                <Button onClick={handleNext} className="w-full">
                  {currentIndex < sessionQuestions.length - 1 ? "Next Question" : "Finish Quiz"}
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Quiz;