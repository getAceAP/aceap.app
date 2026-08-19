import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { psychologyUnits, getPsychologyUnit, isPsychologyReview, PSYCH_REVIEW_SLUG } from "@/data/psychology";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTitle } from "@/hooks/useTitle";
import PsychUnit1Content from "@/components/study-guides/PsychUnit1Content";
import PsychUnit2Content from "@/components/study-guides/PsychUnit2Content";
import PsychUnit3Content from "@/components/study-guides/PsychUnit3Content";
import PsychUnit4Content from "@/components/study-guides/PsychUnit4Content";
import PsychUnit5Content from "@/components/study-guides/PsychUnit5Content";

const unitGuides: Record<number, () => JSX.Element> = {
  1: PsychUnit1Content,
  2: PsychUnit2Content,
  3: PsychUnit3Content,
  4: PsychUnit4Content,
  5: PsychUnit5Content,
};

const PsychStudyGuide = () => {
  const { unitId } = useParams();
  const unit = getPsychologyUnit(unitId);
  const review = isPsychologyReview(unit);
  const unitIndex = psychologyUnits.findIndex((item) => item.id === unit?.id);

  useTitle(review ? "AP Psychology Study Guide" : `Unit ${unit?.id} Study Guide`);

  if (!unit) return null;

  const prevUnit = !review && unitIndex > 0 ? psychologyUnits[unitIndex - 1] : null;
  const nextUnit = !review && unitIndex < psychologyUnits.length - 1 ? psychologyUnits[unitIndex + 1] : null;
  const UnitContent = !review ? unitGuides[unit.id] : null;

  return (
    <Layout>
      <div className="max-w-5xl mx-auto space-y-8">
        <header className="space-y-4">
          <Button asChild variant="ghost" size="sm" className="text-muted-foreground -ml-2">
            <Link to="/units/ap-psych">
              <ArrowLeft size={16} className="mr-2" />
              Back to Units
            </Link>
          </Button>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
              <div className="bg-primary/10 p-1 rounded">
                <BookOpen size={14} className="text-primary" />
              </div>
              {review ? "Full Course Study Guide" : "Comprehensive Study Guide"}
            </div>
            <h1 className="text-4xl font-bold tracking-tight">
              {review ? "AP Psychology" : `Unit ${unit.id}: ${unit.title}`}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Clock size={14} />
                {unit.period}
              </div>
            </div>
          </div>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-slate dark:prose-invert max-w-none bg-card border border-border rounded-3xl p-8 sm:p-12 shadow-sm"
        >
          {review ? (
            <div className="space-y-20">
              <p className="text-muted-foreground not-prose leading-relaxed m-0">
                Use this as a full-course pass. Each section matches one AP Psychology unit.
              </p>
              {psychologyUnits.map((item) => {
                const Content = unitGuides[item.id];
                return Content ? (
                  <div key={item.id} className="space-y-8">
                    <Content />
                  </div>
                ) : null;
              })}
            </div>
          ) : UnitContent ? (
            <UnitContent />
          ) : null}
        </motion.div>

        {!review && (
          <div className="grid grid-cols-2 gap-4 pt-8 border-t border-border">
            {prevUnit ? (
              <Link
                to={`/units/ap-psych/guide/${prevUnit.id}`}
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
                to={`/units/ap-psych/guide/${nextUnit.id}`}
                className="flex flex-col items-end p-4 rounded-2xl border border-border hover:border-primary/50 hover:bg-muted/50 transition-all group text-right"
              >
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-1">
                  Next Unit <ChevronRight size={12} />
                </span>
                <span className="font-bold text-sm line-clamp-1 group-hover:text-primary transition-colors">
                  {nextUnit.title}
                </span>
              </Link>
            ) : (
              <Link
                to={`/units/ap-psych/guide/${PSYCH_REVIEW_SLUG}`}
                className="flex flex-col items-end p-4 rounded-2xl border border-border hover:border-primary/50 hover:bg-muted/50 transition-all group text-right"
              >
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-1">
                  Next <ChevronRight size={12} />
                </span>
                <span className="font-bold text-sm line-clamp-1 group-hover:text-primary transition-colors">
                  Full Course Review
                </span>
              </Link>
            )}
          </div>
        )}

        <footer className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8">
          <div className="text-sm text-muted-foreground">
            Ready to test your knowledge{review ? "" : ` on Unit ${unit.id}`}?
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <Button asChild variant="outline" className="flex-1 sm:flex-none rounded-xl">
              <Link to={`/units/ap-psych/flashcards/${review ? PSYCH_REVIEW_SLUG : unit.id}`}>Practice Cards</Link>
            </Button>
            <Button asChild className="flex-1 sm:flex-none rounded-xl">
              <Link to={`/units/ap-psych/quiz/${review ? PSYCH_REVIEW_SLUG : unit.id}`}>
                {review ? "Practice Exam" : "Take Quiz"}
              </Link>
            </Button>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default PsychStudyGuide;
