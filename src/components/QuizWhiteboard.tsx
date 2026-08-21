import { useEffect, useState } from "react";
import { Tldraw } from "tldraw";
import "tldraw/tldraw.css";
import { cn } from "@/lib/utils";

const QuizWhiteboard = ({ className, persistenceKey }: { className?: string; persistenceKey?: string }) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) {
    return (
      <div className={cn("flex h-full min-h-[320px] items-center justify-center rounded-2xl border border-border bg-muted/30 text-sm text-muted-foreground", className)}>
        Loading whiteboard…
      </div>
    );
  }

  return (
    <div className={cn("h-full min-h-[320px] w-full overflow-hidden rounded-2xl border border-border bg-card [&_.tl-theme__light]:!bg-card", className)}>
      <Tldraw persistenceKey={persistenceKey ?? "aceap-quiz-whiteboard"} />
    </div>
  );
};

export default QuizWhiteboard;
