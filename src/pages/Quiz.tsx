import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { units, Question } from "@/data/content";
import { psychologyUnits, getPsychologyUnit, isPsychologyReview, buildPsychologyPracticeExam } from "@/data/psychology";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, XCircle, ArrowLeft, RefreshCcw, Timer, AlertCircle, Shuffle, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { playSound } from "@/utils/sounds";
import QuizModeSelection from "@/components/QuizModeSelection";
import { useQuizProgress } from "@/hooks/useQuizProgress";

const Quiz = () => {
  const { courseId = "ap-world", unitId } = useParams();
  const navigate = useNavigate();
  const courseUnits = courseId === "ap-psych" ? psychologyUnits : units;
  const coursePath = `/units/${courseId}`;
  const unit = courseId === "ap-psych" ? getPsychologyUnit(unitId) : courseUnits.find((u) => u.id === Number(unitId));
  const review = isPsychologyReview(unit);
  const examMinutes = review ? 90 : 50;
  const { saveQuizResult } = useQuizProgress();
  
  const [mode, setMode] = useState<'study' | 'exam' | null>(null);
  const [sessionQuestions, setSessionQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(50 * 60);

  const prepareQuestions = (qs: Question[]) => {
    if (review) {
      return buildPsychologyPracticeExam(10).map((q) => ({
        ...q,
        options: [...q.options].sort(() => 0.5 - Math.random()),
      }));
    }
    const shuffled = [...qs]
      .sort(() => 0.5 - Math.random())
      .map(q => ({
        ...q,
        options: [...q.options].sort(() => 0.5 - Math.random())
      }));
    return courseId === "ap-psych" ? shuffled : shuffled.slice(0, 15);
  };

  useEffect(() => {
    if (unit) {
      const prepared = prepareQuestions(unit.questions);
      setSessionQuestions(prepared);
      setTimeLeft(review ? examMinutes * 60 : courseId === "ap-psych" ? prepared.length * 60 : 50 * 60);
    }
  }, [unit, courseId]);

  useEffect(() => {
    if (mode === 'exam' && !isFinished && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !isFinished) {
      finishQuiz();
    }
  }, [mode, isFinished, timeLeft]);

  const handleShuffle = () => {
    if (unit) {
      const prepared = prepareQuestions(unit.questions);
      setSessionQuestions(prepared);
      setCurrentIndex(0);
      setUserAnswers({});
      setIsAnswered(false);
      setScore(0);
      setIncorrectCount(0);
      setTimeLeft(review ? examMinutes * 60 : courseId === "ap-psych" ? prepared.length * 60 : 50 * 60);
    }
  };

  if (!unit || sessionQuestions.length === 0) return null;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleOptionSelect = (option: string) => {
    if (mode === 'study' && isAnswered) return;
    setUserAnswers(prev => ({ ...prev, [currentIndex]: option }));
    if (mode === 'study') {
      setIsAnswered(true);
      if (option === sessionQuestions[currentIndex].correctAnswer) {
        setScore((currentScore) => currentScore + 1);
        playSound('correct');
      } else {
        setIncorrectCount((currentCount) => currentCount + 1);
        playSound('wrong');
      }
    }
  };

  const handleNext = () => {
    if (currentIndex < sessionQuestions.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setIsAnswered(mode === "study" && Boolean(userAnswers[nextIndex]));
    } else {
      finishQuiz();
    }
  };

  const handleBack = () => {
    if (currentIndex === 0) return;
    const prevIndex = currentIndex - 1;
    setCurrentIndex(prevIndex);
    setIsAnswered(mode === "study" && Boolean(userAnswers[prevIndex]));
  };

  const finishQuiz = () => {
    let finalScore = score;
    if (mode === 'exam') {
      finalScore = sessionQuestions.reduce((acc, q, idx) => {
        return acc + (userAnswers[idx] === q.correctAnswer ? 1 : 0);
      }, 0);
      setScore(finalScore);
    }
    setIsFinished(true);
    const progressUnitId = courseId === "ap-psych" ? 100 + unit.id : unit.id;
    saveQuizResult(progressUnitId, finalScore, sessionQuestions.length, mode!);
  };

  if (!mode) {
    return (
      <Layout>
        <QuizModeSelection
          unitTitle={unit.title}
          onSelect={setMode}
          examMinutes={examMinutes}
          examDescription={review ? "About 75 mixed questions, including stimulus-based items from every unit." : undefined}
        />
      </Layout>
    );
  }

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
            <p className="text-muted-foreground">Mode: <span className="capitalize font-bold text-foreground">{mode}</span></p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 sm:p-6 rounded-2xl bg-green-500/10 border border-green-500/20">
              <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400">{score}</div>
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-green-600/70">Correct</div>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-destructive/10 border border-destructive/20">
              <div className="text-2xl sm:text-3xl font-bold text-destructive">{sessionQuestions.length - score}</div>
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-destructive/70">Incorrect</div>
            </div>
          </div>
          <div className="p-8 rounded-3xl bg-primary/10 border border-primary/20">
            <div className="text-5xl font-bold text-primary mb-2">{Math.round((score/sessionQuestions.length)*100)}%</div>
            <div className="text-sm font-bold uppercase tracking-widest text-primary/70">Final Score</div>
          </div>
          <div className="flex gap-4">
            <Button onClick={() => window.location.reload()} className="flex-1 h-12 rounded-xl">
              <RefreshCcw className="mr-2 h-4 w-4" /> Try Again
            </Button>
            <Button variant="outline" onClick={() => navigate(coursePath)} className="flex-1 h-12 rounded-xl">
              Back to Units
            </Button>
          </div>
        </motion.div>
      </Layout>
    );
  }

  const currentQuestion = sessionQuestions[currentIndex];
  const progress = ((currentIndex) / sessionQuestions.length) * 100;

  return (
    <Layout>
      <div className="space-y-6 sm:space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="ghost" onClick={() => navigate(coursePath)} className="text-muted-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" /> Exit
            </Button>
            <Button variant="outline" size="sm" onClick={handleShuffle} className="rounded-lg h-8 px-3 text-[10px] font-bold uppercase tracking-wider">
              <Shuffle className="mr-1.5 h-3 w-3" /> Shuffle
            </Button>
          </div>
          <div className="flex items-center gap-4">
            {mode === 'exam' && (
              <div className={cn(
                "flex items-center gap-2 px-3 py-1 rounded-full font-mono font-bold border",
                timeLeft < 300 ? "bg-destructive/10 text-destructive border-destructive/20 animate-pulse" : "bg-muted text-foreground border-border"
              )}>
                <Timer size={16} />
                {formatTime(timeLeft)}
              </div>
            )}
            {mode === "exam" ? null : (
              <div className="flex items-center gap-4 text-xs sm:text-sm font-bold">
                <span className="text-green-600 dark:text-green-400">{score} right</span>
                <span className="text-destructive">{incorrectCount} wrong</span>
              </div>
            )}
          </div>
        </div>
        <Progress value={progress} className="h-1.5 bg-muted" />
        <div className={cn("space-y-6", currentQuestion.stimulus && "grid grid-cols-1 lg:grid-cols-2 gap-8 items-start space-y-0")}>
          {currentQuestion.stimulus && (
            <Card className="overflow-hidden border-border shadow-xl shadow-primary/5 rounded-3xl lg:sticky lg:top-24">
              <CardContent className="p-6 sm:p-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
                  <BookOpen size={12} />
                  Stimulus
                </div>
                <p className="text-base sm:text-lg leading-relaxed font-medium italic text-foreground/90">
                  “{currentQuestion.stimulus.text}”
                </p>
                <div className="pt-4 border-t border-border text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
                  Source: {currentQuestion.stimulus.source}
                </div>
              </CardContent>
            </Card>
          )}
          <div className="space-y-6">
          <h2 className="text-2xl font-semibold leading-tight">{currentQuestion.question}</h2>
          <div className="grid gap-3">
            {currentQuestion.options.map((option) => {
              const isCorrect = option === currentQuestion.correctAnswer;
              const isSelected = userAnswers[currentIndex] === option;
              return (
                <button
                  key={option}
                  disabled={mode === 'study' && isAnswered}
                  onClick={() => handleOptionSelect(option)}
                  className={cn(
                    "w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 text-lg font-medium",
                    !isAnswered && !isSelected && "border-border hover:border-primary/50",
                    !isAnswered && isSelected && "border-primary bg-primary/5",
                    mode === 'study' && isAnswered && isCorrect && "border-green-500 bg-green-500/10 text-green-600",
                    mode === 'study' && isAnswered && isSelected && !isCorrect && "border-destructive bg-destructive/10 text-destructive",
                    mode === 'study' && isAnswered && !isCorrect && !isSelected && "border-border opacity-40"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {mode === 'study' && isAnswered && isCorrect && <CheckCircle2 className="h-6 w-6 text-green-600" />}
                    {mode === 'study' && isAnswered && isSelected && !isCorrect && <XCircle className="h-6 w-6 text-destructive" />}
                  </div>
                </button>
              );
            })}
          </div>
          <div className="pt-4">
            {mode === 'study' && isAnswered ? (
              <Card className="border-none bg-muted shadow-none rounded-2xl">
                <CardContent className="pt-6 space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                    <AlertCircle size={14} /> Explanation
                  </div>
                  <p className="text-foreground leading-relaxed">{currentQuestion.explanation}</p>
                  <div className="flex gap-3">
                    <Button variant="outline" onClick={handleBack} disabled={currentIndex === 0} className="flex-1 h-12 rounded-xl text-lg font-bold">
                      Back
                    </Button>
                    <Button onClick={handleNext} className="flex-[2] h-12 rounded-xl text-lg font-bold">
                      {currentIndex < sessionQuestions.length - 1 ? "Next Question" : "Finish Quiz"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="flex gap-3">
                <Button variant="outline" onClick={handleBack} disabled={currentIndex === 0} className="flex-1 h-14 rounded-2xl text-lg font-bold">
                  Back
                </Button>
                <Button onClick={handleNext} disabled={!userAnswers[currentIndex]} className="flex-[2] h-14 rounded-2xl text-lg font-bold shadow-lg shadow-primary/20">
                  {currentIndex < sessionQuestions.length - 1 ? "Next Question" : "Submit Quiz"}
                </Button>
              </div>
            )}
          </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Quiz;