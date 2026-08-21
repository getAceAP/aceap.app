"use client";

import * as React from "react";
import { flushSync } from "react-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

type ViewTransition = {
  finished: Promise<void>;
  ready: Promise<void>;
};

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function runThemeTransition(
  apply: () => void,
  coords: { x: number; y: number },
  toLight: boolean
) {
  const doc = document as Document & {
    startViewTransition?: (cb: () => void) => ViewTransition;
  };
  const root = document.documentElement;

  root.style.setProperty("--theme-x", `${coords.x}px`);
  root.style.setProperty("--theme-y", `${coords.y}px`);
  root.dataset.themeTo = toLight ? "light" : "dark";

  const cleanup = () => {
    delete root.dataset.themeTo;
    root.classList.remove("theme-animating");
  };

  if (typeof doc.startViewTransition !== "function" || prefersReducedMotion()) {
    root.classList.add("theme-animating");
    apply();
    window.setTimeout(cleanup, toLight ? 650 : 450);
    return;
  }

  const transition = doc.startViewTransition(apply);

  transition.ready
    .then(() => {
      const maxRadius = Math.hypot(
        Math.max(coords.x, window.innerWidth - coords.x),
        Math.max(coords.y, window.innerHeight - coords.y)
      );

      if (toLight) {
        // Dark → light: soft dawn bloom
        document.documentElement.animate(
          [
            {
              clipPath: `circle(0px at ${coords.x}px ${coords.y}px)`,
              filter: "brightness(1.4) saturate(0.8)",
            },
            {
              clipPath: `circle(${maxRadius * 1.15}px at ${coords.x}px ${coords.y}px)`,
              filter: "brightness(1) saturate(1)",
            },
          ],
          {
            duration: 700,
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
        document.documentElement.animate(
          [
            { opacity: 1, filter: "brightness(1)" },
            { opacity: 0.2, filter: "brightness(1.2) blur(3px)" },
          ],
          {
            duration: 520,
            easing: "cubic-bezier(0.4, 0, 0.2, 1)",
            pseudoElement: "::view-transition-old(root)",
          }
        );
      } else {
        // Light → dark: crisp circle wipe
        document.documentElement.animate(
          [
            { clipPath: `circle(0px at ${coords.x}px ${coords.y}px)` },
            { clipPath: `circle(${maxRadius}px at ${coords.x}px ${coords.y}px)` },
          ],
          {
            duration: 520,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      }
    })
    .catch(() => {
      /* ready can reject if interrupted */
    });

  transition.finished.finally(cleanup);
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  const onToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    const next = isDark ? "light" : "dark";
    const coords = { x: event.clientX, y: event.clientY };

    const apply = () => {
      flushSync(() => setTheme(next));
    };

    runThemeTransition(apply, coords, next === "light");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onToggle}
      className="relative rounded-full w-9 h-9 border border-border/50 overflow-hidden"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] dark:-rotate-90 dark:scale-0 dark:opacity-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] dark:rotate-0 dark:scale-100 dark:opacity-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
