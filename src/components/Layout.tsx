import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, LayoutDashboard, UserCircle } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border px-6 py-3">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl hover:opacity-80 transition-opacity">
              <div className="bg-primary text-primary-foreground p-1.5 rounded-lg shadow-lg shadow-primary/20">
                <BookOpen size={20} />
              </div>
              <span className="tracking-tight">AceAP<span className="text-primary">.app</span></span>
            </Link>
            <div className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
              <Link to="/dashboard" className="hover:text-primary flex items-center gap-1.5 transition-colors">
                <LayoutDashboard size={16} />
                Dashboard
              </Link>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <div className="h-4 w-[1px] bg-border mx-1 hidden sm:block" />
            <Button variant="ghost" size="sm" className="hidden sm:flex font-semibold">
              Log in
            </Button>
            <Button size="sm" className="rounded-full px-5 font-semibold shadow-md shadow-primary/10">
              Sign up
            </Button>
          </div>
        </div>
      </nav>
      <main className="max-w-5xl mx-auto px-6 py-12">
        {children}
      </main>
      <footer className="max-w-5xl mx-auto px-6 py-12 border-t border-border text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} AceAP.app — The Ultimate AP Revision Tool</p>
      </footer>
    </div>
  );
};

export default Layout;