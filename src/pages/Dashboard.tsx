import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Lock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
  return (
    <Layout>
      <div className="space-y-8">
        <header className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Select Subject</h1>
          <p className="text-xl text-muted-foreground">Choose a course to start your revision journey.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {subjects.map((subject) => (
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
              <CardContent>
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
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;