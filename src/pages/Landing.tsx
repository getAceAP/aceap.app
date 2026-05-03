import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Brain, Target, Sparkles } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const Landing = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (user) {
        navigate("/dashboard", { replace: true });
      } else {
        document.title = "AceAP | Master your AP Exams.";
      }
    }
  }, [user, loading, navigate]);

  if (loading || user) {
    return null; // Prevent flash of landing content while redirecting
  }

  return (
    <Layout>
      <div className="space-y-24 sm:space-y-32 py-4 sm:py-12">
        {/* Hero Section */}
        <section className="text-center space-y-8 sm:space-y-12 max-w-5xl mx-auto relative">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-[10px] sm:text-xs font-bold text-primary uppercase tracking-widest shadow-sm">
              <Sparkles size={12} className="fill-primary" />
              Built for the 5
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-foreground leading-[1.05] sm:leading-[1.05]">
              Master <span className="text-primary italic">AP Exams</span>
              <br />
              <span className="text-muted-foreground/80">with Active Recall.</span>
            </h1>
            <p className="text-lg sm:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto px-4 font-medium">
              Stop passive reading. AceAP uses randomized testing and type-in flashcards to force your brain to remember the curriculum.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
          >
            <Button asChild size="lg" className="w-full sm:w-auto h-16 px-10 text-xl rounded-2xl shadow-[0_20px_50px_rgba(139,92,246,0.3)] hover:shadow-[0_20px_50px_rgba(139,92,246,0.5)] transition-all duration-500 font-bold">
              <Link to="/dashboard">
                Start Studying Now
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-4">
          {[
            {
              icon: <Brain className="text-blue-500" size={28} />,
              title: "Active Recall",
              description: "Type-in flashcards ensure you actually know the material, not just recognize it.",
              color: "blue"
            },
            {
              icon: <Target className="text-red-500" size={28} />,
              title: "Unit Specific",
              description: "Focused practice for all 9 units, from the Global Tapestry to Globalization.",
              color: "red"
            },
            {
              icon: <Zap className="text-yellow-500" size={28} />,
              title: "Instant Feedback",
              description: "Immediate explanations for every question to close your knowledge gaps.",
              color: "yellow"
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group p-8 sm:p-10 rounded-[2.5rem] border border-border bg-card hover:border-primary/30 hover:bg-primary/[0.02] transition-all duration-500 space-y-6 shadow-sm hover:shadow-xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold tracking-tight">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg font-medium">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Social Proof / Stats */}
        <section className="border-t border-border/50 pt-24 sm:pt-32 text-center space-y-16 px-4">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Everything you need for a 5.</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Units", value: "9" },
              { label: "Questions", value: "450+" },
              { label: "Flashcards", value: "200+" },
              { label: "Success Rate", value: "98%" }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-2"
              >
                <div className="text-4xl sm:text-6xl font-bold text-foreground tracking-tighter">{stat.value}</div>
                <div className="text-xs sm:text-sm font-bold text-muted-foreground uppercase tracking-[0.2em]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="mx-4">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-primary rounded-[3rem] p-10 sm:p-20 text-center text-primary-foreground space-y-8 shadow-[0_40px_100px_rgba(139,92,246,0.3)] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl sm:text-6xl font-bold tracking-tight">Ready to ace the exam?</h2>
              <p className="text-primary-foreground/80 max-w-xl mx-auto text-lg sm:text-xl font-medium">
                Join thousands of students using AceAP to simplify their AP World History revision.
              </p>
              <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto h-16 rounded-2xl px-12 text-xl font-bold shadow-2xl">
                <Link to="/dashboard">Get Started for Free</Link>
              </Button>
            </div>
          </motion.div>
        </section>
      </div>
    </Layout>
  );
};

export default Landing;