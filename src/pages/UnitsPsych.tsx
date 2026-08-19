import Layout from "@/components/Layout";
import { psychologyUnits } from "@/data/psychology";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BrainCircuit, GraduationCap, ArrowLeft, FileText, CheckCircle2, Layers } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useAllProgress } from "@/hooks/useAllProgress";
import { useTitle } from "@/hooks/useTitle";

const UnitsPsych = () => {
  useTitle("AP Psychology Units");
  const { stats } = useAllProgress(psychologyUnits);
  const reviewLearned = psychologyUnits.reduce((sum, unit) => sum + (stats[unit.id]?.learned || 0), 0);
  const reviewTotal = psychologyUnits.reduce((sum, unit) => sum + unit.flashcards.length, 0);
  const reviewPercentage = reviewTotal > 0 ? Math.round((reviewLearned / reviewTotal) * 100) : 0;

  return (
    <Layout>
      <div className="space-y-10 max-w-7xl mx-auto">
        <header className="space-y-6">
          <Link to="/home" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={16} className="mr-1" />
            Back to Subjects
          </Link>
          
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">AP Psychology</h1>
            <p className="text-xl text-muted-foreground">Select a unit to begin your active recall session.</p>
          </div>
        </header>

        <div className="flex flex-wrap justify-center gap-6">
          {psychologyUnits.map((unit) => {
            const unitStats = stats[unit.id] || { learned: 0, total: unit.flashcards.length, percentage: 0 };

            return (
              <Card key={unit.id} className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] border-border shadow-none hover:border-primary/50 transition-colors bg-card overflow-hidden rounded-[2rem]">
                <CardHeader className="pb-3 p-6">
                  <div className="flex justify-between items-start mb-1">
                    <div className="text-xs font-bold text-muted-foreground/60 uppercase tracking-wider">
                      Unit {unit.id} • {unit.period}
                    </div>
                    {unitStats.percentage === 100 && (
                      <div className="flex items-center gap-1 text-green-600 text-[10px] font-bold uppercase">
                        <CheckCircle2 size={12} />
                        Mastered
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-xl">{unit.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed line-clamp-2">
                    {unit.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 p-6 pt-0">
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      <span>Mastery Progress</span>
                      <span>{unitStats.learned} / {unitStats.total} Cards</span>
                    </div>
                    <Progress value={unitStats.percentage} className="h-1.5" />
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button asChild variant="outline" className="flex-1 min-w-[100px] border-border hover:bg-muted h-10 rounded-xl">
                      <Link to={`/units/ap-psych/quiz/${unit.id}`} className="flex items-center gap-2">
                        <GraduationCap size={16} />
                        Quiz
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="flex-1 min-w-[100px] border-border hover:bg-muted h-10 rounded-xl">
                      <Link to={`/units/ap-psych/flashcards/${unit.id}`} className="flex items-center gap-2">
                        <BrainCircuit size={16} />
                        Cards
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="flex-1 min-w-[100px] border-border hover:bg-muted h-10 rounded-xl">
                      <Link to={`/units/ap-psych/guide/${unit.id}`} className="flex items-center gap-2">
                        <FileText size={16} />
                        Guide
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="border-border shadow-none hover:border-primary/50 transition-colors bg-card overflow-hidden rounded-[2rem]">
          <CardHeader className="pb-3 p-6 sm:p-8">
            <div className="flex justify-between items-start mb-1">
              <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground/60 uppercase tracking-wider">
                <Layers size={14} />
                All Units
              </div>
              {reviewPercentage === 100 && (
                <div className="flex items-center gap-1 text-green-600 text-[10px] font-bold uppercase">
                  <CheckCircle2 size={12} />
                  Mastered
                </div>
              )}
            </div>
            <CardTitle className="text-2xl">Full Course Review</CardTitle>
            <CardDescription className="text-muted-foreground leading-relaxed">
              Combined vocabulary from every unit, a generated practice exam with stimulus questions, and a full study guide.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 p-6 sm:p-8 pt-0">
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                <span>Course Mastery</span>
                <span>{reviewLearned} / {reviewTotal} Cards</span>
              </div>
              <Progress value={reviewPercentage} className="h-1.5" />
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild variant="outline" className="flex-1 min-w-[100px] border-border hover:bg-muted h-10 rounded-xl">
                <Link to="/units/ap-psych/quiz/all" className="flex items-center gap-2">
                  <GraduationCap size={16} />
                  Practice Exam
                </Link>
              </Button>
              <Button asChild variant="outline" className="flex-1 min-w-[100px] border-border hover:bg-muted h-10 rounded-xl">
                <Link to="/units/ap-psych/flashcards/all" className="flex items-center gap-2">
                  <BrainCircuit size={16} />
                  Cards
                </Link>
              </Button>
              <Button asChild variant="outline" className="flex-1 min-w-[100px] border-border hover:bg-muted h-10 rounded-xl">
                <Link to="/units/ap-psych/guide/all" className="flex items-center gap-2">
                  <FileText size={16} />
                  Guide
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default UnitsPsych;
