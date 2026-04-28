import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { supabase } from "@/utils/supabase";
import { useToast } from "@/components/ui/use-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (error) {
      toast({
        title: "Password Reset Failed",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Password Reset Email Sent",
        description: "Check your email for instructions to reset your password.",
      });
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }

    setLoading(false);
  };

  return (
    <Layout>
      <div className="flex items-center justify-center py-12">
        <Card className="w-full max-w-md border-border shadow-xl shadow-primary/5">
          <CardHeader className="space-y-2 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-primary p-2 rounded-lg shadow-lg shadow-primary/20">
                <Mail size={24} className="text-primary-foreground" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold">Reset your password</CardTitle>
            <CardDescription>
              Enter your email address and we'll send you a link to reset your password
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleReset} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="rounded-xl"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full rounded-xl h-11 font-semibold"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send reset link"}
              </Button>
            </form>
            <div className="text-center text-sm text-muted-foreground">
              Remember your password?{" "}
              <Link to="/login" className="text-primary font-semibold hover:underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default ForgotPassword;