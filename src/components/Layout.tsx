"use client";

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BookOpen, LayoutDashboard, LogOut, User, Mail, Settings as SettingsIcon } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { SoundToggle } from "./SoundToggle";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { CursorGloss } from "./CursorGloss";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <CursorGloss />
      <nav className="sticky top-0 z-50 glass border-b border-border/50 px-4 sm:px-6 py-3 transition-all duration-300">
        <div className="max-w-5xl mx-auto flex items-center justify-between relative">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-lg sm:text-xl hover:opacity-80 transition-all shrink-0 group">
            <motion.div 
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="bg-primary text-primary-foreground p-1.5 rounded-xl shadow-lg shadow-primary/20"
            >
              <BookOpen size={18} className="sm:w-5 sm:h-5" />
            </motion.div>
            <span className="tracking-tight">AceAP<span className="text-primary">.app</span></span>
          </Link>

          {/* Center: Dashboard */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
            <Link 
              to="/dashboard" 
              className={cn(
                "text-sm font-semibold transition-all flex items-center gap-1.5 px-4 py-2 rounded-full",
                isDashboard ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-primary hover:bg-primary/5"
              )}
            >
              <LayoutDashboard size={16} />
              Dashboard
            </Link>
          </div>
          
          {/* Right: Actions */}
          <div className="flex items-center gap-1 sm:gap-2">
            <SoundToggle />
            <ThemeToggle />
            <div className="h-4 w-[1px] bg-border/50 mx-1 hidden sm:block" />
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-9 w-9 rounded-full p-0 hover:bg-primary/5 transition-colors">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-accent text-xs font-medium">
                      <User size={18} />
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 rounded-2xl p-2 shadow-2xl border-border/50" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal p-2">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-bold leading-none">
                        {user.user_metadata?.username || user.user_metadata?.first_name || "Student"}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="opacity-50" />
                  <DropdownMenuItem asChild className="rounded-xl cursor-pointer">
                    <Link to="/settings" className="flex items-center">
                      <SettingsIcon className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={signOut} className="rounded-xl cursor-pointer text-destructive focus:text-destructive focus:bg-destructive/5">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button asChild variant="ghost" size="sm" className="font-bold text-xs sm:text-sm px-3 rounded-full">
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild size="sm" className="rounded-full px-5 font-bold shadow-xl shadow-primary/20 text-xs sm:text-sm">
                  <Link to="/signup">Signup</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </nav>
      
      {/* Mobile Dashboard Link */}
      <AnimatePresence>
        {!isDashboard && (
          <motion.div 
            initial={{ y: 100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            exit={{ y: 100, x: "-50%", opacity: 0 }}
            className="md:hidden fixed bottom-8 left-1/2 z-50"
          >
            <Link 
              to="/dashboard" 
              className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full shadow-[0_20px_50px_rgba(139,92,246,0.4)] font-bold text-sm active:scale-95 transition-all"
            >
              <LayoutDashboard size={18} />
              Dashboard
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.main 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12"
      >
        {children}
      </motion.main>

      <footer className="max-w-5xl mx-auto px-4 sm:px-6 py-12 pb-32 md:pb-12 border-t border-border/50">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left text-sm text-muted-foreground">
          <div className="space-y-2">
            <p className="font-medium">© {new Date().getFullYear()} AceAP.app — The Ultimate AP Revision Tool</p>
            <a 
              href="mailto:hello@aceap.app" 
              className="inline-flex items-center gap-2 text-xs hover:text-primary transition-colors"
            >
              <Mail size={12} />
              hello@aceap.app
            </a>
          </div>
          <div className="flex gap-6 font-medium">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;