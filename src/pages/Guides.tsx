import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight, BookOpen, Brain, Calculator, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { useTitle } from "@/hooks/useTitle";
import { courseCovers, guideHero } from "@/data/course-covers";

const courses = [
  {
    id: "ap-world",
    title: "AP World History",
    blurb: "Nine unit guides covering state building, trade, revolutions, and the modern world.",
    units: "9 unit guides",
    href: "/guides/ap-world",
    image: courseCovers["ap-world"],
  },
  {
    id: "ap-psych",
    title: "AP Psychology",
    blurb: "Five CED units plus a full-course review you can read straight through.",
    units: "5 units + full review",
    href: "/guides/ap-psych",
    image: courseCovers["ap-psych"],
  },
  {
    id: "ap-precalc",
    title: "AP Precalculus",
    blurb: "Formulas, worked examples, and practice for the three exam units.",
    units: "3 exam units",
    href: "/guides/ap-precalc",
    image: courseCovers["ap-precalc"],
  },
];

const Guides = () => {
  useTitle("Study Guides");

  return (
    <Layout wide>
      <section className="relative overflow-hidden">
        <img src={guideHero} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-8 py-20 sm:py-28 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary uppercase tracking-widest"
          >
            <FileText size={12} />
            Study guides
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground"
          >
            Guides that match the exam, not a textbook dump
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Short unit reviews for the courses that are live. Open a guide, then jump into the library when you want cards or a quiz.
          </motion.p>
        </div>
      </section>

      <section className="px-4 sm:px-8 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
            >
              <Link
                to={course.href}
                className="group flex flex-col h-full rounded-[2rem] border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all"
              >
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={course.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                </div>
                <div className="p-8 space-y-4 -mt-8 relative">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                    {course.id === "ap-psych" ? (
                      <Brain size={22} />
                    ) : course.id === "ap-precalc" ? (
                      <Calculator size={22} />
                    ) : (
                      <BookOpen size={22} />
                    )}
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{course.units}</p>
                  <h2 className="text-2xl font-bold tracking-tight">{course.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{course.blurb}</p>
                  <span className="inline-flex items-center font-bold text-primary">
                    Browse guides
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Guides;
