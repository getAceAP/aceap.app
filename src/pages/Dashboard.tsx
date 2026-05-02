import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Lock, ArrowRight, Sparkles, Trophy, Target, FileText, ChevronRight, Code, Beaker, Calculator, Variable } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useAllProgress } from "@/hooks/useAllProgress";
import { Progress } from "@/components/ui/progress";

const subjects = [
  {
    id: "ap-world",
    title: "AP World History",
    description: "Master the global tapestry, trade networks, and modern conflicts.",
    status: "active",
    icon: <BookOpen className="text-primary" size={20} />
  },
  {
    id: "apush",
    title: "AP US History",
    description: "From pre-colonial societies to the modern era.",
    status: "soon",
    icon: <Lock className="text-muted-foreground/60" size={20} />
  },
  {
    id: "ap-gov",
    title: "AP US Government",
    description: "Foundations of democracy and American political institutions.",
    status: "soon",
    icon: <Lock className="text-muted-foreground/60" size={20} />
  },
  {
    id: "ap-cs",
    title: "AP Computer Science",
    description: "Fundamental concepts of programming and computational thinking.",
    status: "soon",
    icon: <Code className="text-muted-foreground/60" size={20} />
  },
  {
    id: "ap-chem",
    title: "AP Chemistry",
    description: "Atomic structure, chemical reactions, and thermodynamics.",
    status: "soon",
    icon: <Beaker className="text-muted-foreground/60" size={20} />
  },
  {
    id: "ap-precalc",
    title: "AP Precalculus",
    description: "Preparation for calculus through functions and trigonometry.",
    status: "soon",
    icon: <Calculator className="text-muted-foreground/60" size={20} />
  },
  {
    id: "ap-calc-ab",
    title: "AP Calculus AB",
    description: "Limits, derivatives, and introductory integrals.",
    status: "soon",
    icon: <Variable className="text-muted-foreground/60" size={20} />
  },
  {
    id: "ap-calc-bc",
    title: "AP Calculus BC",
    description: "Advanced integration, sequences, and series.",
    status: "soon",
    icon: <Variable className="text-muted-foreground/60" size={20} />
  }
];

const Dashboard = () => {
  const { stats, loading } = useAllProgress();

  const totalLearned = Object.values(stats).reduce((acc, s) => acc + s.learned, 0);
  const totalCards = Object.values(stats).reduce((acc, s) => acc + s.total, 0);
  const overallPercentage = totalCards > 0 ? Math.round((totalLearned / totalCards) * 100) : 0;

  return (
    <Layout>
      <div className="space-y-12">
        <header className="space-y-3 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight"
          >
            Your Dashboard
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground font-medium"
          >
            Track your mastery and prepare for the 5.
          </motion.p>
        </header>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <Trophy size={24} />, value: totalLearned, label: "Cards Mastered", color: "primary" },
            { icon: <Target size={24} />, value: `${overallPercentage}%`, label: "Overall Mastery", color: "blue" },
            { icon: <Sparkles size={24} />, value: "2026", label: "Exam Year", color: "orange" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="border-border/50 shadow-sm bg-card hover:shadow-md transition-all duration-300 rounded-[2rem]">
                <CardContent className="pt-8 pb-8 flex items-center gap-5">
                  <div className={`w-14 h-14 rounded-2xl bg-${stat.color}/10 flex items-center justify-center text-${stat.color}`}>
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-3xl font-bold tracking-tight">{stat.value}</div>
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Course List */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <BookOpen className="text-primary" size={20} />
              </div>
              Your Courses
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {subjects.map((subject, i) => {
                const isAPWorld = subject.id === 'ap-world';
                return (
                  <motion.div
                    key={subject.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                  >
                    <Card 
                      className={`border-border/50 shadow-sm transition-all duration-500 bg-card rounded-[2.5rem] overflow-hidden group h-full flex flex-col ${
                        subject.status === 'active' ? 'hover:border-primary/30 hover:shadow-xl' : 'opacity-70'
                      }`}
                    >
                      <CardHeader className="p-8 pb-4">
                        <div className="flex justify-between items-start mb-4">
                          <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                            {subject.icon}
                          </div>
                          {subject.status === 'soon' && (
                            <Badge variant="secondary" className="bg-muted text-muted-foreground border-none font-bold px-3 py-1 rounded-full">Soon</Badge>
                          )}
                        </div>
                        <CardTitle className="text-xl font-bold tracking-tight">{subject.title}</CardTitle>
                        <CardDescription className="text-muted-foreground leading-relaxed text-sm font-medium line-clamp-2">
                          {subject.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-8 pt-4 space-y-6 mt-auto">
                        {isAPWorld && (
                          <div className="space-y-3">
                            <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                              <span>Course Mastery</span>
                              <span>{overallPercentage}%</span>
                            </div>
                            <Progress value={overallPercentage} className="h-1.5 bg-muted" />
                          </div>
                        )}
                        
                        {subject.status === 'active' ? (
                          <Button asChild className="w-full h-12 rounded-2xl text-base font-bold shadow-lg shadow-primary/10 group-hover:shadow-primary/20 transition-all duration-500">
                            <Link to="/units/ap-world">
                              Open Course
                              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </Button>
                        ) : (
                          <Button disabled className="w-full h-12 bg-muted text-muted-foreground/60 rounded-2xl border-none font-bold">
                            Locked
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Sidebar: Quick Access & Predictions */}
          <div className="space-y-10">
            {/* Predictions Banner */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="relative overflow-hidden rounded-[2.5rem] bg-primary p-8 text-primary-foreground shadow-2xl shadow-primary/30 group"
            >
              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-[10px] font-bold uppercase tracking-widest">
                  <Sparkles size={12} />
                  2026 Predictions
                </div>
                <h2 className="text-2xl font-bold leading-tight tracking-tight">What's on the DBQ?</h2>
                <Button asChild variant="secondary" size="lg" className="w-full rounded-xl font-bold h-12 shadow-xl">
                  <Link to="/predictions">View Crystal Ball</Link>
                </Button>
              </div>
              <div className="absolute -right-8 -top-8 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
            </motion.div>

            {/* Quick Access Study Guides */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2 px-2">
                <FileText size={16} />
                Quick Study Guides
              </h3>
              <div className="grid gap-3">
                {[3, 4, 5, 6].map((id, i) => (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + (i * 0.1) }}
                  >
                    <Link 
                      to={`/units/ap-world/guide/${id}`}
                      className="flex items-center justify-between p-4 rounded-2xl border border-border/50 bg-card hover:border-primary/30 hover:bg-primary/[0.02] transition-all duration-300 group shadow-sm"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                          U{id}
                        </div>
                        <span className="text-base font-bold group-hover:text-primary transition-colors">
                          Unit {id} Guide
                        </span>
                      </div>
                      <ChevronRight size={18} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;