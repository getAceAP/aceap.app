import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
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
  
  const [sessionQuestions, setSessionQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (unit) {
      // Randomize and pick up to 10 questions for a session
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
        <div className="max-w-md mx-auto text-center space-y-6 py-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Quiz Complete!</h2>
            <p className="text-[#73726E]">You scored {score} out of {sessionQuestions.length}</p>
          </div>
          <div className="text-6xl font-bold text-[#37352F]">
            {Math.round((score / sessionQuestions.length) * 100)}%
          </div>
          <div className="flex gap-4">
            <Button onClick={() => window.location.reload()} className="flex-1 bg-[#37352F] hover:bg-[#37352F]/90">
              <RefreshCcw className="mr-2 h-4 w-4" /> Try Again
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
          <Button variant="ghost" onClick={() => navigate("/")} className="text-[#73726E]">
            <ArrowLeft className="mr-2 h-4 w-4" /> Exit Quiz
          </Button>
          <span className="text-sm font-medium text-[#73726E]">
            Question {currentIndex + 1} of {sessionQuestions.length}
          </span>
        </div>

        <Progress value={progress} className="h-1 bg-[#E9E9E8]" />

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
                    !isAnswered && "border-[#E9E9E8] hover:border-[#37352F] hover:bg-[#F5F5F4]",
                    isAnswered && isCorrect && "border-green-500 bg-green-50 text-green-900",
                    isAnswered && isSelected && !isCorrect && "border-red-500 bg-red-50 text-red-900",
                    isAnswered && !isCorrect && !isSelected && "border-[#E9E9E8] opacity-50"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {isAnswered && isCorrect && <CheckCircle2 className="h-5 w-5 text-green-600" />}
                    {isAnswered && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-red-600" />}
                  </div>
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <Card className="border-none bg-[#F5F5F4] shadow-none">
              <CardContent className="pt-6 space-y-4">
                <div className="text-sm font-bold uppercase tracking-wider text-[#73726E]">Explanation</div>
                <p className="text-[#37352F] leading-relaxed">{currentQuestion.explanation}</p>
                <Button onClick={handleNext} className="w-full bg-[#37352F] hover:bg-[#37352F]/90">
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