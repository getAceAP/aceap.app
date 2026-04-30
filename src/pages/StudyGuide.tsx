import { useParams, useNavigate, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { units } from "@/data/content";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Clock, MapPin, Download, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Unit3Content from "@/components/study-guides/Unit3Content";
import Unit4Content from "@/components/study-guides/Unit4Content";
import Unit5Content from "@/components/study-guides/Unit5Content";
import Unit6Content from "@/components/study-guides/Unit6Content";
import Unit7Content from "@/components/study-guides/Unit7Content";
import Unit8Content from "@/components/study-guides/Unit8Content";
import Unit9Content from "@/components/study-guides/Unit9Content";

const StudyGuide = () => {
  const { unitId } = useParams();
  const navigate = useNavigate();
  const unitIndex = units.findIndex((u) => u.id === Number(unitId));
  const unit = units[unitIndex];

  if (!unit) return null;

  const prevUnit = unitIndex > 0 ? units[unitIndex - 1] : null;
  const nextUnit = unitIndex < units.length - 1 ? units[unitIndex + 1] : null;

  const renderContent = () => {
    switch (unit.id) {
      case 3: return <Unit3Content />;
      case 4: return <Unit4Content />;
      case 5: return <Unit5Content />;
      case 6: return <Unit6Content />;
      case 7: return <Unit7Content />;
      case 8: return <Unit8Content />;
      case 9: return <Unit9Content />;
      default:
        return (
          <div className="text-center py-12 space-y-4">
            <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <Clock className="text-primary" size={32} />
            </div>
            <h2 className="text-2xl font-bold">Coming Soon</h2>
            <p className="text-muted-foreground">The study guide for Unit {unit.id} is currently being drafted. Check back soon!</p>
            <Button asChild variant="outline" className="rounded-xl">
              <Link to="/units/ap-world">Back to Units</Link>
            </Button>
          </div>
        );
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="space-y-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate("/units/ap-world")} 
              className="text-muted-foreground -ml-2"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Units
            </Button>
            <Button variant="outline" size="sm" className="rounded-lg">
              <Download className="mr-2 h-4 w-4" />
              Export PDF
            </Button>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
              <div className="bg-primary/10 p-1 rounded">
                <BookOpen size={14} className="text-primary" />
              </div>
              Comprehensive Study Guide
            </div>
            <h1 className="text-4xl font-bold tracking-tight">Unit {unit.id}: {unit.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Clock size={14} />
                {unit.period}
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin size={14} />
                Global Context
              </div>
            </div>
          </div>
        </header>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-slate dark:prose-invert max-w-none bg-card border border-border rounded-3xl p-8 sm:p-12 shadow-sm"
        >
          {renderContent()}
        </motion.div>

        {/* Navigation between units */}
        <div className="grid grid-cols-2 gap-4 pt-8 border-t border-border">
          {prevUnit ? (
            <Link 
              to={`/units/ap-world/guide/${prevUnit.id}`}
              className="flex flex-col items-start p-4 rounded-2xl border border-border hover:border-primary/50 hover:bg-muted/50 transition-all group"
            >
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-1">
                <ChevronLeft size={12} /> Previous Unit
              </span>
              <span className="font-bold text-sm line-clamp-1 group-hover:text-primary transition-colors">
                {prevUnit.title}
              </span>
            </Link>
          ) : <div />}

          {nextUnit ? (
            <Link 
              to={`/units/ap-world/guide/${nextUnit.id}`}
              className="flex flex-col items-end p-4 rounded-2xl border border-border hover:border-primary/50 hover:bg-muted/50 transition-all group text-right"
            >
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-1">
                Next Unit <ChevronRight size={12} />
              </span>
              <span className="font-bold text-sm line-clamp-1 group-hover:text-primary transition-colors">
                {nextUnit.title}
              </span>
            </Link>
          ) : <div />}
        </div>

        <footer className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8">
          <div className="text-sm text-muted-foreground">
            Ready to test your knowledge on Unit {unit.id}?
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <Button asChild variant="outline" className="flex-1 sm:flex-none rounded-xl">
              <Link to={`/units/ap-world/flashcards/${unit.id}`}>Practice Cards</Link>
            </Button>
            <Button asChild className="flex-1 sm:flex-none rounded-xl">
              <Link to={`/units/ap-world/quiz/${unit.id}`}>Take Quiz</Link>
            </Button>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default StudyGuide;