import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Lock, ArrowRight, Sparkles, Trophy, Target } from "lucide-react";
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
    icon: <BookOpen className="text-primary" />
  },
  {
    id: "apush",
    title: "AP US History",
    description: "From pre-colonial societies to the modern era.",
    status: "soon",
    icon: <Lock className="text-muted-foreground/60" />
  },
  {
    id: "ap-gov",
    title: "AP US Government",
    description: "Foundations of democracy and American political institutions.",
    status: "soon",
    icon: <Lock className="text-muted-foreground/60" />
  },
  {
    id: "ap-hug",
    title: "AP Human Geography",
    description: "Patterns and processes that have shaped human understanding.",
    status: "soon",
    icon: <Lock className="text-muted-foreground/60" />
  }
];

const Dashboard = () => {
  const { stats, loading } = useAllProgress();

  // Calculate overall stats
  const totalLearned = Object.values(stats).reduce((acc, s) => acc + s.learned, 0);
  const totalCards = Object.values(stats).reduce((acc, s) => acc + s.total, 0);
  const overallPercentage = totalCards > 0 ? Math.round((totalLearned / totalCards) * 100) : 0;

  return (
    <Layout>
      <div className="space-y-8">
        <header className="space-y-2 text-center">
          <h1 className="text-4xl font-bold tracking-tight">Your Dashboard</h1>
          <p className="text-xl text-muted-foreground">Track your mastery and prepare for the 5.</p>
        </header>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-border shadow-none bg-card">
            <CardContent className="pt-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Trophy size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold">{totalLearned}</div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Cards Mastered</div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-border shadow-none bg-card">
            <CardContent className="pt-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Target size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold">{overallPercentage}%</div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Overall Mastery</div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-border shadow-none bg-card">
            <CardContent className="pt-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                <Sparkles size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold">2026</div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Exam Year</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Predictions Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-3xl bg-primary p-6 sm:p-8 text-primary-foreground shadow-2xl shadow-primary/20"
        >
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-[10px] font-bold uppercase tracking-widest">
                <Sparkles size={12} />
                New Feature
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">2026 DBQ Predictions</h2>
              <p className="text-primary-foreground/80 max-w-md">
                See which units are most likely to appear on this year's exam based on historical data.
              </p>
            </div>
            <Button asChild variant="secondary" size="lg" className="rounded-xl px-8 font-bold shadow-lg">
              <Link to="/predictions">
                View Predictions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="absolute -right-12 -top-12 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -left-12 -bottom-12 w-64 h-64 bg-black/10 rounded-full blur-3xl" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {subjects.map((subject) => {
            const isAPWorld = subject.id === 'ap-world';
            return (
              <Card 
                key={subject.id} 
                className={`border-border shadow-none transition-all bg-card ${
                  subject.status === 'active' ? 'hover:border-primary/50' : 'opacity-75'
                }`}
              >
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                      {subject.icon}
                    </div>
                    {subject.status === 'soon' && (
                      <Badge variant="secondary" className="bg-muted text-muted-foreground border-none">Coming Soon</Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">{subject.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {subject.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {isAPWorld && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                        <span>Course Mastery</span>
                        <span>{overallPercentage}%</span>
                      </div>
                      <Progress value={overallPercentage} className="h-1.5" />
                    </div>
                  )}
                  
                  {subject.status === 'active' ? (
                    <Button asChild className="w-full rounded-xl">
                      <Link to="/units/ap-world">
                        Open Course
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  ) : (
                    <Button disabled className="w-full bg-muted text-muted-foreground/60 rounded-xl border-none">
                      Locked
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;