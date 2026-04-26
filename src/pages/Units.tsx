import Layout from "@/components/Layout";
import { units } from "@/data/content";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BrainCircuit, GraduationCap, ArrowLeft } from "lucide-react";

const Units = () => {
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
          {units.map((unit) => (
            <Card key={unit.id} className="border-border shadow-none hover:border-primary/50 transition-colors bg-card">
              <CardHeader className="pb-3">
                <div className="text-xs font-bold text-muted-foreground/60 uppercase tracking-wider mb-1">
                  Unit {unit.id} • {unit.period}
                </div>
                <CardTitle className="text-xl">{unit.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {unit.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex gap-3">
                <Button asChild variant="outline" className="flex-1 border-border hover:bg-muted">
                  <Link to={`/quiz/${unit.id}`} className="flex items-center gap-2">
                    <GraduationCap size={16} />
                    Quiz
                  </Link>
                </Button>
                <Button asChild variant="outline" className="flex-1 border-border hover:bg-muted">
                  <Link to={`/flashcards/${unit.id}`} className="flex items-center gap-2">
                    <BrainCircuit size={16} />
                    Cards
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Units;