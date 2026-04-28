import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, AlertTriangle, TrendingUp, Target, Zap, Info } from "lucide-react";
import { motion } from "framer-motion";

const Predictions = () => {
  const predictions = [
    {
      rank: "1st MOST LIKELY",
      units: "Units 3 & 4",
      period: "c. 1450 - 1900",
      prompt: "Evaluate the extent to which cultural influences lead to the expanding empires c. 1450-1900.",
      color: "bg-primary/10 border-primary/50 text-primary",
      icon: <Target className="text-primary" size={24} />,
      probability: "High"
    },
    {
      rank: "2nd Most Likely",
      units: "Units 5 & 6",
      period: "c. 1750 - 1900",
      prompt: "Evaluate the extent to which the Industrial Revolution changed society and how that led to societal resistance.",
      color: "bg-blue-500/10 border-blue-500/50 text-blue-600 dark:text-blue-400",
      icon: <Zap className="text-blue-500" size={24} />,
      probability: "Medium-High"
    },
    {
      rank: "3rd Most Likely",
      units: "Units 6 - 8",
      period: "1945 - 2001",
      prompt: "Evaluate the extent to which imperialism influenced decolonization from 1945-2001.",
      color: "bg-orange-500/10 border-orange-500/50 text-orange-600 dark:text-orange-400",
      icon: <TrendingUp className="text-orange-500" size={24} />,
      probability: "Medium"
    }
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary uppercase tracking-widest"
          >
            <Sparkles size={14} className="fill-primary" />
            2026 DBQ Predictions
          </motion.div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">The Crystal Ball</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategic insights based on historical exam patterns and curriculum weighting. Use these to prioritize your deep-dive revision.
          </p>
        </header>

        {/* The "No Unit 1 or 2" Rule */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-destructive/5 border border-destructive/20 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left"
        >
          <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center shrink-0">
            <AlertTriangle className="text-destructive" size={32} />
          </div>
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-destructive">The Golden Rule: No Unit 1 or 2</h2>
            <p className="text-muted-foreground leading-relaxed">
              Historical data suggests that Units 1 and 2 are extremely unlikely to be the primary focus of the DBQ. Focus your document analysis practice on later periods.
            </p>
          </div>
        </motion.div>

        {/* Predictions List */}
        <div className="space-y-6">
          {predictions.map((pred, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className={`border-2 ${pred.color} shadow-xl shadow-primary/5 overflow-hidden`}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <Badge variant="outline" className={`${pred.color} border-current font-bold uppercase tracking-tighter`}>
                        {pred.rank}
                      </Badge>
                      <CardTitle className="text-2xl font-bold pt-2">{pred.units}</CardTitle>
                      <CardDescription className="font-medium">{pred.period}</CardDescription>
                    </div>
                    <div className="p-3 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50">
                      {pred.icon}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 sm:p-6 rounded-2xl bg-background/80 border border-border/50 italic text-lg sm:text-xl leading-relaxed font-serif">
                    "{pred.prompt}"
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <Info size={16} />
                    <span>Probability Score: <span className="text-foreground font-bold">{pred.probability}</span></span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <footer className="text-center p-8 bg-muted/30 rounded-3xl border border-border">
          <p className="text-sm text-muted-foreground italic">
            Disclaimer: These are strategic predictions based on curriculum trends. While highly likely, students should still maintain a foundational understanding of all units for the MCQ and SAQ sections.
          </p>
        </footer>
      </div>
    </Layout>
  );
};

export default Predictions;