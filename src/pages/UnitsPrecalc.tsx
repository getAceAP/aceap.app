import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BrainCircuit, GraduationCap, ArrowLeft, FileText, Clock } from "lucide-react";
import { useTitle } from "@/hooks/useTitle";

const precalcUnits = [
  { id: 1, title: "Polynomial and Rational Functions", description: "Master the behavior and properties of polynomial and rational expressions." },
  { id: 2, title: "Exponential and Logarithmic Functions", description: "Explore growth, decay, and the inverse relationship of logs and exponents." },
  { id: 3, title: "Trigonometric and Polar Functions", description: "Deep dive into periodic behavior and alternative coordinate systems." },
  { id: 4, title: "Functions Involving Parameters, Vectors, and Matrices", description: "Advanced topics in multi-dimensional and parametric modeling." }
];

const UnitsPrecalc = () => {
  useTitle("AP Precalculus Units");

  return (
    <Layout>
      <div className="space-y-10 max-w-7xl mx-auto">
        <header className="space-y-6">
          <Link to="/home" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={16} className="mr-1" />
            Back to Subjects
          </Link>
          
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">AP Precalculus</h1>
            <p className="text-xl text-muted-foreground">Content for this course is currently being prepared.</p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {precalcUnits.map((unit) => (
            <Card key={unit.id} className="border-border shadow-none opacity-60 bg-card overflow-hidden rounded-[2rem]">
              <CardHeader className="pb-3 p-6">
                <div className="flex justify-between items-start mb-1">
                  <div className="text-xs font-bold text-muted-foreground/60 uppercase tracking-wider">
                    Unit {unit.id}
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground text-[10px] font-bold uppercase">
                    <Clock size={12} />
                    Coming Soon
                  </div>
                </div>
                <CardTitle className="text-xl">{unit.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed line-clamp-2">
                  {unit.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 p-6 pt-0">
                <div className="flex flex-wrap gap-3">
                  <Button disabled variant="outline" className="flex-1 min-w-[100px] border-border h-10 rounded-xl">
                    <GraduationCap size={16} className="mr-2" />
                    Quiz
                  </Button>
                  <Button disabled variant="outline" className="flex-1 min-w-[100px] border-border h-10 rounded-xl">
                    <BrainCircuit size={16} className="mr-2" />
                    Cards
                  </Button>
                  <Button disabled variant="outline" className="flex-1 min-w-[100px] border-border h-10 rounded-xl">
                    <FileText size={16} className="mr-2" />
                    Guide
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default UnitsPrecalc;