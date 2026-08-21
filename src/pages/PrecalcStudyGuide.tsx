import type { ComponentType } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { precalcUnits } from "@/data/precalc";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import PrecalcUnit1Content from "@/components/study-guides/PrecalcUnit1Content";
import PrecalcUnit2Content from "@/components/study-guides/PrecalcUnit2Content";
import PrecalcUnit3Content from "@/components/study-guides/PrecalcUnit3Content";
import PrecalcUnit4Content from "@/components/study-guides/PrecalcUnit4Content";

const contentById: Record<number, ComponentType> = {
  1: PrecalcUnit1Content,
  2: PrecalcUnit2Content,
  3: PrecalcUnit3Content,
  4: PrecalcUnit4Content,
};

const PrecalcStudyGuide = () => {
  const { unitId } = useParams();
  const navigate = useNavigate();
  const unitIndex = precalcUnits.findIndex((u) => u.id === Number(unitId));
  const unit = precalcUnits[unitIndex];

  if (!unit) return null;

  const prevUnit = unitIndex > 0 ? precalcUnits[unitIndex - 1] : null;
  const nextUnit = unitIndex < precalcUnits.length - 1 ? precalcUnits[unitIndex + 1] : null;
  const Content = contentById[unit.id];

  return (
    <Layout>
      <div className="max-w-5xl mx-auto space-y-8">
        <header className="space-y-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/units/ap-precalc")}
            className="text-muted-foreground -ml-2"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Units
          </Button>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
              <div className="bg-primary/10 p-1 rounded">
                <BookOpen size={14} className="text-primary" />
              </div>
              AP Precalculus Study Guide
            </div>
            <h1 className="text-4xl font-bold tracking-tight">
              Unit {unit.id}: {unit.title}
            </h1>
            <p className="text-muted-foreground">{unit.period} · {unit.description}</p>
          </div>
        </header>

        <motion.article
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-neutral dark:prose-invert max-w-none"
        >
          {Content ? <Content /> : null}
        </motion.article>

        <div className="grid grid-cols-2 gap-4 pt-8 border-t border-border">
          {prevUnit ? (
            <Button asChild variant="outline" className="h-14 rounded-2xl justify-start">
              <Link to={`/units/ap-precalc/guide/${prevUnit.id}`}>
                <ChevronLeft className="mr-2 h-4 w-4" />
                Unit {prevUnit.id}
              </Link>
            </Button>
          ) : (
            <div />
          )}
          {nextUnit ? (
            <Button asChild variant="outline" className="h-14 rounded-2xl justify-end">
              <Link to={`/units/ap-precalc/guide/${nextUnit.id}`}>
                Unit {nextUnit.id}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          ) : (
            <div />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default PrecalcStudyGuide;
