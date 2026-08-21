import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useTitle } from "@/hooks/useTitle";
import { units } from "@/data/content";
import { courseCovers } from "@/data/course-covers";

const FlashcardsWorld = () => {
  useTitle("AP World History Flashcards");

  return (
    <Layout wide>
      <section className="relative overflow-hidden">
        <img src={courseCovers["ap-world"]} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-8 py-16 sm:py-24 space-y-6">
          <Link to="/flashcards" className="inline-flex items-center text-sm font-medium text-foreground/70 hover:text-primary">
            <ArrowLeft size={16} className="mr-1" />
            All flashcards
          </Link>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground">
            AP World History flashcards
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Vocab and concept cards for every unit. Flip, type answers, or open the list view before a quiz.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-8 py-12 sm:py-20">
        <div className="max-w-5xl mx-auto space-y-4">
          {units.map((unit, i) => (
            <motion.div
              key={unit.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
            >
              <Link
                to={`/units/ap-world/flashcards/${unit.id}`}
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
                    {unit.period} · {unit.flashcards.length} cards
                  </p>
                </div>
                <span className="inline-flex items-center font-bold text-sm text-primary shrink-0">
                  Open deck
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
          <div className="pt-6">
            <Button asChild variant="outline" className="rounded-xl h-12">
              <Link to="/units/ap-world">Go to AP World library</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FlashcardsWorld;
