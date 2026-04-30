import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Lock, ArrowRight, Sparkles, Trophy, Target, FileText, ChevronRight } from "lucide-react";
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Course List */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <BookOpen className="text-primary" size={20} />
              Your Courses
            </h3>
            <div className="grid grid-cols-1 gap-6">
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

          {/* Sidebar: Quick Access & Predictions */}
          <div className="space-y-8">
            {/* Predictions Banner */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative overflow-hidden rounded-3xl bg-primary p-6 text-primary-foreground shadow-xl shadow-primary/20"
            >
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-bold uppercase tracking-widest">
                  <Sparkles size={10} />
                  2026 Predictions
                </div>
                <h2 className="text-xl font-bold leading-tight">What's on the DBQ?</h2>
                <Button asChild variant="secondary" size="sm" className="w-full rounded-lg font-bold">
                  <Link to="/predictions">View Crystal Ball</Link>
                </Button>
              </div>
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            </motion.div>

            {/* Quick Access Study Guides */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                <FileText size={14} />
                Quick Study Guides
              </h3>
              <div className="grid gap-2">
                {[3, 4, 5, 6].map((id) => (
                  <Link 
                    key={id}
                    to={`/units/ap-world/guide/${id}`}
                    className="flex items-center justify-between p-3 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-muted/50 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                        U{id}
                      </div>
                      <span className="text-sm font-medium group-hover:text-primary transition-colors">
                        Unit {id} Guide
                      </span>
                    </div>
                    <ChevronRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
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