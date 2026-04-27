import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BookOpen, LayoutDashboard } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border px-4 sm:px-6 py-3">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-lg sm:text-xl hover:opacity-80 transition-opacity shrink-0">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-lg shadow-lg shadow-primary/20">
              <BookOpen size={18} className="sm:w-5 sm:h-5" />
            </div>
            <span className="tracking-tight">AceAP<span className="text-primary">.app</span></span>
          </Link>

          {/* Center: Dashboard (Hidden on very small screens if not on dashboard) */}
          <div className="hidden md:flex items-center justify-center flex-1 px-4">
            <Link 
              to="/dashboard" 
              className={cn(
                "text-sm font-medium transition-colors flex items-center gap-1.5",
                isDashboard ? "text-primary" : "text-muted-foreground hover:text-primary"
              )}
            >
              <LayoutDashboard size={16} />
              Dashboard
            </Link>
          </div>
          
          {/* Right: Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <div className="h-4 w-[1px] bg-border mx-1 hidden sm:block" />
            <Button asChild variant="ghost" size="sm" className="hidden sm:flex font-semibold">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild size="sm" className="rounded-full px-4 sm:px-5 font-semibold shadow-md shadow-primary/10 text-xs sm:text-sm">
              <Link to="/signup">Signup</Link>
            </Button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Dashboard Link (Bottom bar or just visible on mobile) */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <Link 
          to="/dashboard" 
          className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-2xl shadow-primary/40 font-bold text-sm"
        >
          <LayoutDashboard size={18} />
          Dashboard
        </Link>
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 pb-24 md:pb-12">
        {children}
      </main>

      <footer className="max-w-5xl mx-auto px-4 sm:px-6 py-12 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} AceAP.app — The Ultimate AP Revision Tool</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;