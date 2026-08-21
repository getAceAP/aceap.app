import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Lock, ArrowRight, Code, Beaker, Calculator, Variable, Brain } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useAllProgress } from "@/hooks/useAllProgress";
import { psychologyUnits } from "@/data/psychology";
import { Progress } from "@/components/ui/progress";
import { useTitle } from "@/hooks/useTitle";
import { useAuth } from "@/context/AuthContext";
import { courseCovers } from "@/data/course-covers";

const subjects = [
  {
    id: "ap-world",
    title: "AP World History",
    description: "Master the global tapestry, trade networks, and modern conflicts.",
    status: "active",
    icon: <BookOpen className="text-primary" size={20} />
  },
  {
    id: "ap-psych",
    title: "AP Psychology",
    description: "Explore the human mind, behavior, and biological processes.",
    status: "active",
    icon: <Brain className="text-primary" size={20} />
  },
  {
    id: "ap-precalc",
    title: "AP Precalculus",
    description: "Preparation for calculus through functions and trigonometry.",
    status: "active",
    icon: <Calculator className="text-primary" size={20} />
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
  useTitle("Home");
  const { user } = useAuth();
  const { stats, loading } = useAllProgress();
  const { stats: psychStats } = useAllProgress(psychologyUnits);

  const totalLearned = Object.values(stats).reduce((acc, s) => acc + s.learned, 0);
  const totalCards = Object.values(stats).reduce((acc, s) => acc + s.total, 0);
  const overallPercentage = totalCards > 0 ? Math.round((totalLearned / totalCards) * 100) : 0;

  const psychLearned = Object.values(psychStats).reduce((acc, s) => acc + s.learned, 0);
  const psychCards = Object.values(psychStats).reduce((acc, s) => acc + s.total, 0);
  const psychPercentage = psychCards > 0 ? Math.round((psychLearned / psychCards) * 100) : 0;

  const firstName = user?.user_metadata?.first_name;

  return (
    <Layout>
      <div className="space-y-10 max-w-7xl mx-auto">
        <header className="space-y-2">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight"
          >
            Welcome{firstName ? `, ${firstName}` : ""}
          </motion.h1>
          <p className="text-muted-foreground text-lg">Continue your journey to a 5.</p>
        </header>

        <div className="space-y-6">
          <h3 className="text-2xl font-bold flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <BookOpen className="text-primary" size={20} />
            </div>
            Your Courses
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, i) => {
              const masteryPercentage = subject.id === "ap-world"
                ? overallPercentage
                : subject.id === "ap-psych"
                  ? psychPercentage
                  : subject.id === "ap-precalc"
                    ? 0
                    : null;
              return (
                <motion.div
                  key={subject.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Card 
                    className={`border-border shadow-sm transition-colors duration-200 bg-card rounded-[2.5rem] overflow-hidden group h-full flex flex-col ${
                      subject.status === 'active' ? 'hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10' : 'opacity-70'
                    }`}
                  >
                    <div className="relative h-36 overflow-hidden">
                      <img
                        src={courseCovers[subject.id]}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                      {subject.status === 'soon' && (
                        <Badge variant="secondary" className="absolute top-4 right-4 bg-background/80 text-muted-foreground border-none font-bold px-3 py-1 rounded-full backdrop-blur-sm">Soon</Badge>
                      )}
                    </div>
                    <CardHeader className="p-8 pb-4">
                      <div className="w-12 h-12 -mt-12 mb-4 rounded-2xl bg-muted border border-border flex items-center justify-center relative z-10 group-hover:scale-105 transition-transform duration-300">
                        {subject.icon}
                      </div>
                      <CardTitle className="text-xl font-bold tracking-tight">{subject.title}</CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed text-sm font-medium line-clamp-2">
                        {subject.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-8 pt-4 space-y-6 mt-auto">
                      {masteryPercentage !== null && (
                        <div className="space-y-3">
                          <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                            <span>Course Mastery</span>
                            <span>{masteryPercentage}%</span>
                          </div>
                          <Progress value={masteryPercentage} className="h-1.5 bg-muted" />
                        </div>
                      )}
                      
                      {subject.status === 'active' ? (
                        <Button asChild className="w-full h-12 rounded-2xl text-base font-bold shadow-lg shadow-primary/15 group-hover:shadow-primary/25 transition-shadow duration-300">
                          <Link to={`/units/${subject.id}`}>
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
      </div>
    </Layout>
  );
};

export default Dashboard;