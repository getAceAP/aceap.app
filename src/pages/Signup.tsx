import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const Signup = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center py-12">
        <Card className="w-full max-w-md border-border shadow-xl shadow-primary/5">
          <CardHeader className="space-y-2 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-primary text-primary-foreground p-2 rounded-xl shadow-lg shadow-primary/20">
                <BookOpen size={24} />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
            <CardDescription>
              Start your journey to a 5 today
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="John" className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Doe" className="rounded-xl" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="name@example.com" className="rounded-xl" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" className="rounded-xl" />
            </div>
            <Button className="w-full rounded-xl h-11 font-semibold">
              Create Account
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>
            <Button variant="outline" className="w-full rounded-xl h-11">
              Google
            </Button>
          </CardContent>
          <CardFooter className="flex flex-wrap items-center justify-center gap-1 text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-semibold hover:underline">
              Login
            </Link>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
};

export default Signup;