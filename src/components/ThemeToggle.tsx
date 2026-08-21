"use client";

import * as React from "react";
import { flushSync } from "react-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const startViewTransition = (update: () => void) => {
  const doc = document as Document & {
    startViewTransition?: (cb: () => void) => { finished: Promise<void> };
  };
  if (typeof doc.startViewTransition === "function") {
    doc.startViewTransition(update);
    return;
  }
  document.documentElement.classList.add("theme-animating");
  update();
  window.setTimeout(() => {
    document.documentElement.classList.remove("theme-animating");
  }, 500);
};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  const onToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    const next = isDark ? "light" : "dark";
    const root = document.documentElement;
    root.style.setProperty("--theme-x", `${event.clientX}px`);
    root.style.setProperty("--theme-y", `${event.clientY}px`);

    const apply = () => {
      document.documentElement.classList.toggle("dark", next === "dark");
      flushSync(() => setTheme(next));
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      apply();
      return;
    }

    startViewTransition(apply);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onToggle}
      className="relative rounded-full w-9 h-9 border border-border/50"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-transform duration-300 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-transform duration-300 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
