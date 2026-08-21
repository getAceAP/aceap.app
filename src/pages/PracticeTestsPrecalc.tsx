import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useTitle } from "@/hooks/useTitle";
import { precalcUnits } from "@/data/precalc";
import { courseCovers } from "@/data/course-covers";

const PracticeTestsPrecalc = () => {
  useTitle("AP Precalculus Practice Tests");

  return (
    <Layout wide>
      <section className="relative overflow-hidden">
        <img src={courseCovers["ap-precalc"]} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-8 py-16 sm:py-24 space-y-6">
          <Link to="/practice-tests" className="inline-flex items-center text-sm font-medium text-foreground/70 hover:text-primary">
            <ArrowLeft size={16} className="mr-1" />
            All practice tests
          </Link>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground">
            AP Precalculus practice tests
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Fresh generated problems each session for Units 1–4. Calculator and no-calculator items, with Desmos when the badge says so. Unit 4 is optional (not on the AP exam).
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-8 py-12 sm:py-20">
        <div className="max-w-5xl mx-auto space-y-4">
          {precalcUnits.map((unit, i) => (
            <motion.div
              key={unit.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
            >
              <Link
                to={`/units/ap-precalc/quiz/${unit.id}`}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 p-6 sm:p-8 rounded-[1.75rem] border border-border bg-card hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all"
              >
                <div className="text-sm font-bold text-primary tracking-widest shrink-0">
                  UNIT {unit.id}
                </div>
                <div className="flex-1 min-w-0 space-y-1">
                  <h2 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {unit.title}
                  </h2>
                  <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                    <Clock size={14} />
                    {unit.period} · generated practice
                  </p>
                </div>
                <span className="inline-flex items-center font-bold text-sm text-primary shrink-0">
                  Start quiz
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}

          <div className="pt-6">
            <Button asChild variant="outline" className="rounded-xl h-12">
              <Link to="/units/ap-precalc">Go to AP Precalculus library</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PracticeTestsPrecalc;
