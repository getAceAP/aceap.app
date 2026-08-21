"use client";

import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BookOpen, LogOut, User, Mail, Settings as SettingsIcon, Home, Menu, FileText } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { SoundToggle } from "./SoundToggle";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { CursorGloss } from "./CursorGloss";
import AppSidebar from "./AppSidebar";
import { SiteSearchProvider, SiteSearchTrigger } from "./SiteSearch";
import UpdatesPopup from "./UpdatesPopup";
import { Sheet, SheetContent, SheetTitle } from "./ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Layout = ({ children, wide = false }: { children: React.ReactNode; wide?: boolean }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/home";
  const isGuides = location.pathname.startsWith("/guides");
  const { user, signOut } = useAuth();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <SiteSearchProvider>
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <CursorGloss />
      <div className={cn("min-h-screen", user && "lg:flex")}>
        {user && (
          <aside className="hidden lg:flex w-60 shrink-0 sticky top-0 h-screen overflow-hidden border-r border-white/10">
            <AppSidebar />
          </aside>
        )}

        <div className="flex-1 min-w-0 flex flex-col">
          <nav className="sticky top-0 z-50 glass border-b border-border/50 px-4 sm:px-8 py-3 transition-all duration-300">
            <div className={cn("flex items-center justify-between relative", !user && "max-w-7xl mx-auto")}>
              <div className="flex items-center gap-2">
                {user && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden rounded-full"
                    onClick={() => setMobileNavOpen(true)}
                    aria-label="Open menu"
                  >
                    <Menu size={20} />
                  </Button>
                )}
                <Link to={user ? "/home" : "/"} className={cn("flex items-center gap-2 font-bold text-lg sm:text-xl hover:opacity-80 transition-all shrink-0 group", user && "lg:hidden")}>
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="bg-primary text-primary-foreground p-1.5 rounded-xl shadow-lg shadow-primary/20"
                  >
                    <BookOpen size={18} className="sm:w-5 sm:h-5" />
                  </motion.div>
                  <span className="tracking-tight text-foreground">AceAP</span>
                </Link>
              </div>

              {!user && (
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center gap-1">
                  <Link
                    to="/home"
                    className={cn(
                      "text-sm font-semibold transition-colors flex items-center gap-1.5 px-4 py-2 rounded-full",
                      isHome ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    )}
                  >
                    <Home size={16} />
                    Home
                  </Link>
                  <Link
                    to="/guides"
                    className={cn(
                      "text-sm font-semibold transition-colors flex items-center gap-1.5 px-4 py-2 rounded-full",
                      isGuides ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    )}
                  >
                    <FileText size={16} />
                    Guides
                  </Link>
                </div>
              )}

              {user && (
                <div className="hidden sm:flex flex-1 justify-center px-4 max-w-xl mx-auto">
                  <SiteSearchTrigger className="w-full max-w-md justify-start" />
                </div>
              )}

              <div className="flex items-center gap-1 sm:gap-2">
                {!user && (
                  <>
                    <SiteSearchTrigger compact className="sm:hidden" />
                    <SiteSearchTrigger className="hidden sm:inline-flex max-w-[15rem]" />
                  </>
                )}
                {user && <SiteSearchTrigger compact className="sm:hidden" />}
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
                      <DropdownMenuItem onClick={handleSignOut} className="rounded-xl cursor-pointer text-destructive focus:text-destructive focus:bg-destructive/5">
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

          <AnimatePresence>
            {!user && !isHome && (
              <motion.div
                initial={{ y: 100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
                exit={{ y: 100, x: "-50%", opacity: 0 }}
                className="md:hidden fixed bottom-8 left-1/2 z-50"
              >
                <Link
                  to="/home"
                  className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full shadow-2xl shadow-primary/40 font-bold text-sm active:scale-95 transition-transform"
                >
                  <Home size={18} />
                  Home
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.main
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "flex-1",
              wide ? "px-0 py-0" : "max-w-7xl mx-auto w-full px-4 sm:px-8 py-8 sm:py-12"
            )}
          >
            {children}
          </motion.main>

          <footer className={cn("mx-auto px-4 sm:px-8 py-12 border-t border-border/50 w-full", user ? "pb-12" : "pb-32 md:pb-12 max-w-7xl")}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left text-sm text-muted-foreground">
              <div className="space-y-2">
                <p className="font-medium">© {new Date().getFullYear()} AceAP — The Ultimate AP Revision Tool</p>
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
      </div>

      <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
        <SheetContent side="left" className="p-0 w-72 border-0 ace-sidebar [&>button]:text-white [&>button]:hover:bg-white/10 [&>button]:hover:text-white">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <AppSidebar onNavigate={() => setMobileNavOpen(false)} />
        </SheetContent>
      </Sheet>
      <UpdatesPopup />
    </div>
    </SiteSearchProvider>
  );
};

export default Layout;
