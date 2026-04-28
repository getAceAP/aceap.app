import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Lock, ArrowRight, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/components/AuthProvider";

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
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </Layout>
    );
  }

  if (!user) {
    return (
      <Layout>
        <div className="max-w-md mx-auto text-center space-y-8 py-12">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Welcome to AceAP</h1>
            <p className="text-muted-foreground">Please login to access your study dashboard</p>
          </div>
          <div className="space-y-3">
            <Button asChild className="w-full">
              <Link to="/login">Login</Link>
            </Button>
            <Button variant="outline" asChild className="w-full">
              <Link to="/signup">Create Account</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-8">
        <header className="space-y-2 text-center">
          <h1 className="text-4xl font-bold tracking-tight">Welcome back, {user.email}</h1>
          <p className="text-xl text-muted-foreground">Select a subject to start your revision journey.</p>
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