import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/utils/supabase";
import { useToast } from "@/components/ui/use-toast";

const AuthCallback = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const handleAuthCallback = async () => {
      const { data, error } = await supabase.auth.getSessionFromUrl();

      if (error) {
        toast({
          title: "Authentication Failed",
          description: error.message,
          variant: "destructive",
        });
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else if (data) {
        toast({
          title: "Authentication Successful",
          description: "Welcome back! Redirecting to dashboard...",
        });
        setTimeout(() => {
          navigate("/dashboard");
        }, 1500);
      }
    };

    handleAuthCallback();
  }, [navigate, toast]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        <p className="text-muted-foreground">Authenticating...</p>
      </div>
    </div>
  );
};

export default AuthCallback;