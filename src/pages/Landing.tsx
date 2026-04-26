import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, Brain, Target } from "lucide-react";

const subjects = [
  "AP World History",
  "AP US History",
  "AP US Government",
  "AP Human Geography"
];

const Landing = () => {
  const [subjectIndex, setSubjectIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSubjectIndex((prev) => (prev + 1) % subjects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <div className="space-y-24 py-12">
        {/* Hero Section */}
        <section className="text-center space-y-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent border border-primary/20 text-xs font-bold text-primary uppercase tracking-widest">
              <Zap size={12} className="fill-primary" />
              Built for the 5
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
              Master{" "}
              <span className="relative inline-block min-w-[320px] md:min-w-[500px] text-left">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={subjects[subjectIndex]}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="inline-block text-primary underline decoration-primary/30 underline-offset-8 whitespace-nowrap"
                  >
                    {subjects[subjectIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <br />
              with <span className="text-muted-foreground">Active Recall.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Stop passive reading. AceAP uses randomized testing and type-in flashcards to force your brain to remember the curriculum.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="lg" className="h-14 px-8 text-lg rounded-xl shadow-xl shadow-primary/20">
              <Link to="/dashboard">
                Start Studying Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Brain className="text-blue-500" />,
              title: "Active Recall",
              description: "Type-in flashcards ensure you actually know the material, not just recognize it."
            },
            {
              icon: <Target className="text-red-500" />,
              title: "Unit Specific",
              description: "Focused practice for all 9 units, from the Global Tapestry to Globalization."
            },
            {
              icon: <Zap className="text-yellow-500" />,
              title: "Instant Feedback",
              description: "Immediate explanations for every question to close your knowledge gaps."
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-colors space-y-4"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </section>

        {/* Social Proof / Stats */}
        <section className="border-t border-border pt-24 text-center space-y-12">
          <h2 className="text-3xl font-bold">Everything you need for a 5.</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Units", value: "9" },
              { label: "Questions", value: "450+" },
              { label: "Flashcards", value: "200+" },
              { label: "Success Rate", value: "98%" }
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="text-4xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-primary rounded-3xl p-12 text-center text-primary-foreground space-y-6 shadow-2xl shadow-primary/20">
          <h2 className="text-3xl font-bold">Ready to ace the exam?</h2>
          <p className="text-primary-foreground/70 max-w-md mx-auto">
            Join thousands of students using AceAP to simplify their AP World History revision.
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-xl px-8">
            <Link to="/dashboard">Get Started for Free</Link>
          </Button>
        </section>
      </div>
    </Layout>
  );
};

export default Landing;