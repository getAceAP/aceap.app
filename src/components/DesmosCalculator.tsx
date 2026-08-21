import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    Desmos?: {
      GraphingCalculator: (
        element: HTMLElement,
        options?: Record<string, unknown>
      ) => {
        destroy: () => void;
        updateSettings: (settings: Record<string, unknown>) => void;
        resize: () => void;
      };
    };
  }
}

type DesmosCalc = NonNullable<ReturnType<NonNullable<Window["Desmos"]>["GraphingCalculator"]>>;

const DEMO_KEY = "dcb31709b452b1cf9dc26972add0fda6";

let desmosScriptPromise: Promise<void> | null = null;

function loadDesmosScript(): Promise<void> {
  if (window.Desmos) return Promise.resolve();
  if (desmosScriptPromise) return desmosScriptPromise;

  desmosScriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>("script[data-desmos-api]");
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("Desmos failed to load")));
      if (window.Desmos) resolve();
      return;
    }
    const key = import.meta.env.VITE_DESMOS_API_KEY || DEMO_KEY;
    const script = document.createElement("script");
    script.src = `https://www.desmos.com/api/v1.11/calculator.js?apiKey=${key}`;
    script.async = true;
    script.dataset.desmosApi = "1";
    script.onload = () => resolve();
    script.onerror = () => {
      desmosScriptPromise = null;
      reject(new Error("Desmos failed to load"));
    };
    document.head.appendChild(script);
  });

  return desmosScriptPromise;
}

const DesmosCalculator = ({ className }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const calcRef = useRef<DesmosCalc | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    let cancelled = false;
    const el = containerRef.current;
    if (!el) return;

    loadDesmosScript()
      .then(() => {
        if (cancelled || !containerRef.current || !window.Desmos) return;
        calcRef.current?.destroy();
        calcRef.current = window.Desmos.GraphingCalculator(containerRef.current, {
          expressions: true,
          settingsMenu: true,
          zoomButtons: true,
          expressionsTopbar: true,
          border: false,
          invertedColors: resolvedTheme === "dark",
        });
      })
      .catch(() => {
        /* iframe fallback handled by empty state message */
      });

    return () => {
      cancelled = true;
      calcRef.current?.destroy();
      calcRef.current = null;
    };
    // remount when theme flips so Desmos picks invertedColors cleanly
  }, [resolvedTheme]);

  useEffect(() => {
    const onResize = () => calcRef.current?.resize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className={cn("relative h-full min-h-[320px] w-full overflow-hidden rounded-2xl border border-border bg-card", className)}>
      <div ref={containerRef} className="absolute inset-0" />
    </div>
  );
};

export default DesmosCalculator;
