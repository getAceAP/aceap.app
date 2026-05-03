import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Lock, ArrowRight, Sparkles, Code, Beaker, Calculator, Variable } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useAllProgress } from "@/hooks/useAllProgress";
import { Progress } from "@/components/ui/progress";
import { useTitle } from "@/hooks/useTitle";

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
  useTitle("Dashboard");
  const { stats, loading } = useAllProgress();

  const totalLearned = Object.values(stats).reduce((acc, s) => acc + s.learned, 0);
  const totalCards = Object.values(stats).reduce((acc, s) => acc + s.total, 0);
  const overallPercentage = totalCards > 0 ? Math.round((totalLearned / totalCards) * 100) : 0;

  return (
    <Layout>
      <div className="space-y-8 max-w-5xl mx-auto">
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
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
                      <div className="space-y-6">
                        <div className="space-y-3">
                          <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                            <span>Course Mastery</span>
                            <span>{overallPercentage}%</span>
                          </div>
                          <Progress value={overallPercentage} className="h-1.5 bg-muted" />
                        </div>
                        
                        {/* Integrated Predictions Banner */}
                        <Link 
                          to="/predictions"
                          className="block p-4 rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all group/pred relative overflow-hidden"
                        >
                          <div className="relative z-10 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                                <Sparkles size={16} />
                              </div>
                              <div>
                                <div className="text-xs font-bold uppercase tracking-widest opacity-80">2026 Predictions</div>
                                <div className="text-sm font-bold">View Crystal Ball</div>
                              </div>
                            </div>
                            <ArrowRight size={18} className="group-hover/pred:translate-x-1 transition-transform" />
                          </div>
                          <div className="absolute -right-4 -top-4 w-20 h-20 bg-white/10 rounded-full blur-2xl group-hover/pred:scale-150 transition-transform duration-700" />
                        </Link>
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
    </Layout>
  );
};

export default Dashboard;