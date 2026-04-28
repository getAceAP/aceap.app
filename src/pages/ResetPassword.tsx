import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock } from "lucide-react";
import { supabase } from "@/utils/supabase";
import { useToast } from "@/components/ui/use-toast";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  const token = searchParams.get("token");
  const email = searchParams.get("email");

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please confirm your new password matches.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    const { data, error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      toast({
        title: "Password Reset Failed",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Password Reset Successful",
        description: "Your password has been updated. You can now sign in.",
      });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }

    setLoading(false);
  };

  if (!token || !email) {
    navigate("/forgot-password");
    return null;
  }

  return (
    <Layout>
      <div className="flex items-center justify-center py-12">
        <Card className="w-full max-w-md border-border shadow-xl shadow-primary/5">
          <CardHeader className="space-y-2 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-primary p-2 rounded-lg shadow-lg shadow-primary/20">
                <Lock size={24} className="text-primary-foreground" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold">Reset your password</CardTitle>
            <CardDescription>
              Enter your new password below
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleReset} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">New Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="rounded-xl"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full rounded-xl h-11 font-semibold"
                disabled={loading}
              >
                {loading ? "Resetting..." : "Reset Password"}
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

export default ResetPassword;