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
    icon: <BookOpen className="text-blue-500" />
  },
  {
    id: "apush",
    title: "AP US History",
    description: "From pre-colonial societies to the modern era.",
    status: "soon",
    icon: <Lock className="text-[#ACABA9]" />
  },
  {
    id: "ap-gov",
    title: "AP US Government",
    description: "Foundations of democracy and American political institutions.",
    status: "soon",
    icon: <Lock className="text-[#ACABA9]" />
  },
  {
    id: "ap-hug",
    title: "AP Human Geography",
    description: "Patterns and processes that have shaped human understanding.",
    status: "soon",
    icon: <Lock className="text-[#ACABA9]" />
  }
];

const Dashboard = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <header className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Select Subject</h1>
          <p className="text-xl text-[#73726E]">Choose a course to start your revision journey.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {subjects.map((subject) => (
            <Card 
              key={subject.id} 
              className={`border-[#E9E9E8] shadow-none transition-all bg-white ${
                subject.status === 'active' ? 'hover:border-[#D3D3D2]' : 'opacity-75'
              }`}
            >
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <div className="w-10 h-10 rounded-lg bg-[#F5F5F4] flex items-center justify-center">
                    {subject.icon}
                  </div>
                  {subject.status === 'soon' && (
                    <Badge variant="secondary" className="bg-[#F5F5F4] text-[#73726E] border-none">Coming Soon</Badge>
                  )}
                </div>
                <CardTitle className="text-xl">{subject.title}</CardTitle>
                <CardDescription className="text-[#73726E] leading-relaxed">
                  {subject.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {subject.status === 'active' ? (
                  <Button asChild className="w-full bg-[#37352F] hover:bg-[#37352F]/90 rounded-xl">
                    <Link to="/units/ap-world">
                      Open Course
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                ) : (
                  <Button disabled className="w-full bg-[#F5F5F4] text-[#ACABA9] rounded-xl border-none">
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