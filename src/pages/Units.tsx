import Layout from "@/components/Layout";
import { units } from "@/data/content";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BrainCircuit, GraduationCap, ArrowLeft, FileText, CheckCircle2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useAllProgress } from "@/hooks/useAllProgress";

const Units = () => {
  const { stats, loading } = useAllProgress();

  return (
    <Layout>
      <div className="space-y-8">
        <header className="space-y-4">
          <Link to="/dashboard" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={16} className="mr-1" />
            Back to Subjects
          </Link>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">AP World History</h1>
            <p className="text-xl text-muted-foreground">Select a unit to begin your active recall session.</p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {units.map((unit) => {
            const unitStats = stats[unit.id] || { learned: 0, total: unit.flashcards.length, percentage: 0 };
            
            // Determine the quiz path based on the unit ID
            const quizPath = [2, 3, 4, 5].includes(unit.id) 
              ? `/units/ap-world/quiz/${unit.id}` 
              : `/units/ap-world/quiz/${unit.id}`;
            
            return (
              <Card key={unit.id} className="border-border shadow-none hover:border-primary/50 transition-colors bg-card overflow-hidden">
                <CardHeader className="pb-3">
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
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      <span>Mastery Progress</span>
                      <span>{unitStats.learned} / {unitStats.total} Cards</span>
                    </div>
                    <Progress value={unitStats.percentage} className="h-1.5" />
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button asChild variant="outline" className="flex-1 min-w-[100px] border-border hover:bg-muted h-10 rounded-xl">
                      <Link to={quizPath} className="flex items-center gap-2">
                        <GraduationCap size={16} />
                        Quiz
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="flex-1 min-w-[100px] border-border hover:bg-muted h-10 rounded-xl">
                      <Link to={`/units/ap-world/flashcards/${unit.id}`} className="flex items-center gap-2">
                        <BrainCircuit size={16} />
                        Cards
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="flex-1 min-w-[100px] border-border hover:bg-muted h-10 rounded-xl">
                      <Link to={`/units/ap-world/guide/${unit.id}`} className="flex items-center gap-2">
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
      </div>
    </Layout>
  );
};

export default Units;