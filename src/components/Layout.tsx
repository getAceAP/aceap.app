import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import correctSfx from "@/assets/correct.wav?url";
import incorrectSfx from "@/assets/incorrect.mp3?url";

type AudioContextType = {
  playCorrect: () => void;
  playIncorrect: () => void;
  muted: boolean;
  toggleMute: () => void;
};

const AudioContext = createContext<AudioContextType | null>(null);

export const useAudio = () => {
  const ctx = useContext(AudioContext);
  if (!ctx) {
    throw new Error("useAudio must be used within AudioProvider");
  }
  return ctx;
};

function loadBuffer(url: string): Promise<AudioBuffer> {
  return fetch(url)
    .then((res) => res.arrayBuffer())
    .then((arrayBuffer) => audioCtx.decodeAudioData(arrayBuffer));
}

let audioCtx: AudioContext | null = null;
function getAudioCtx() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  return audioCtx;
}

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  // Refs must be inside a component/hook
  const correctBufferRef = useRef<AudioBuffer | null>(null);
  const incorrectBufferRef = useRef<AudioBuffer | null>(null);

  const [muted, setMuted] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("aceap_mute") || "false");
    } catch {
      return false;
    }
  });

  useEffect(() => {
    localStorage.setItem("aceap_mute", JSON.stringify(muted));
    if (!muted) {
      const resume = async () => {
        const ctx = getAudioCtx();
        if (ctx.state === "suspended") await ctx.resume();
        document.removeEventListener("click", resume, { once: true });
        document.removeEventListener("keydown", resume, { once: true });
      };
      document.addEventListener("click", resume, { once: true });
      document.addEventListener("keydown", resume, { once: true });
    }
  }, [muted]);

  useEffect(() => {
    if (muted) {
      correctBufferRef.current = null;
      incorrectBufferRef.current = null;
      return;
    }
    let mounted = true;
    Promise.all([loadBuffer(correctSfx), loadBuffer(incorrectSfx)]).then(
      ([correctBuf, incorrectBuf]) => {
        if (mounted) {
          correctBufferRef.current = correctBuf;
          incorrectBufferRef.current = incorrectBuf;
        }
      }
    );
    return () => {
      mounted = false;
    };
  }, [muted]);

  const playCorrect = () => {
    if (muted) return;
    const ctx = getAudioCtx();
    const buffer = correctBufferRef.current;
    if (!buffer) return;
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    const gain = ctx.createGain();
    gain.gain.value = 0.15;
    src.connect(gain).connect(ctx.destination);
    src.start(0);
  };

  const playIncorrect = () => {
    if (muted) return;
    const ctx = getAudioCtx();
    const buffer = incorrectBufferRef.current;
    if (!buffer) return;
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    const gain = ctx.createGain();
    gain.gain.value = 0.15;
    src.connect(gain).connect(ctx.destination);
    src.start(0);
  };

  const toggleMute = () => setMuted((prev) => !prev);

  return (
    <AudioContext.Provider value={{ playCorrect, playIncorrect, muted, toggleMute }}>
      {children}
    </AudioContext.Provider>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";
  const { muted, toggleMute } = useAudio();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border px-4 sm:px-6 py-3">
        <div className="max-w-5xl mx-auto flex items-center justify-between relative">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-lg sm:text-xl hover:opacity-80 transition-opacity shrink-0">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-lg shadow-lg shadow-primary/20">
              <BookOpen size={18} className="sm:w-5 sm:h-5" />
            </div>
            <span className="tracking-tight">AceAP<span className="text-primary">.app</span></span>
          </Link>

          {/* Center: Dashboard link (perfectly centered on desktop) */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
            <Link
              to="/dashboard"
              className={cn(
                "text-sm font-medium transition-colors flex items-center gap-1.5",
                isDashboard ? "text-primary" : "text-muted-foreground hover:text-primary"
              )}
            >
              <Button variant="ghost" size="sm" className="h-7 px-2">
                <Button variant="ghost" size="sm" className="h-7 px-2">
                  <span className="hidden sm:inline">Dashboard</span>
                  <span className="sm:hidden">
                    <BookOpen size={16} />
                  </span>
                </Button>
              </Button>
            </Link>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-1 sm:gap-3">
            <ThemeToggle />
            <div className="h-4 w-[1px] bg-border mx-1 hidden sm:block" />
            <Button asChild variant="ghost" size="sm" className="flex font-semibold text-xs sm:text-sm px-2 h-8">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild size="sm" className="rounded-full px-3 sm:px-5 font-semibold shadow-md shadow-primary/10 text-xs sm:text-sm">
              <Link to="/signup">Signup</Link>
            </Button>

            {/* Mute toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMute}
              className="rounded-full w-9 h-9 border border-border/50"
              title={muted ? "Unmute" : "Mute"}
            >
              {muted ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5l6 6-6 6" /><path d="M6.5 6.5l11 11" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" /></svg>
              )}
            </Button>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {children}
      </main>

      <footer className="max-w-5xl mx-auto px-4 sm:px-6 py-12 pb-32 md:pb-12 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
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