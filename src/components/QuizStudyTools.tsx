import { Suspense, lazy, createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { Calculator, PenLine, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const DesmosCalculator = lazy(() => import("@/components/DesmosCalculator"));
const QuizWhiteboard = lazy(() => import("@/components/QuizWhiteboard"));

const ToolFallback = () => (
  <div className="flex h-full min-h-[320px] items-center justify-center text-sm text-muted-foreground">
    Loading tool…
  </div>
);

type TabId = "whiteboard" | "desmos";

type ToolsCtx = {
  allowCalculator: boolean;
  persistenceKey: string;
  tab: TabId;
  setTab: (t: TabId) => void;
  openSheet: (t: TabId) => void;
  sheetOpen: boolean;
  setSheetOpen: (o: boolean) => void;
};

const QuizToolsContext = createContext<ToolsCtx | null>(null);

const useQuizTools = () => {
  const ctx = useContext(QuizToolsContext);
  if (!ctx) throw new Error("Quiz study tools used outside provider");
  return ctx;
};

const ToolsBody = ({ boardClassName }: { boardClassName?: string }) => {
  const { allowCalculator, persistenceKey, tab, setTab } = useQuizTools();
  const active = allowCalculator ? tab : "whiteboard";

  return (
    <Tabs value={active} onValueChange={(v) => setTab(v as TabId)} className="flex h-full flex-col gap-3">
      <TabsList className={cn("grid w-full rounded-xl h-11", allowCalculator ? "grid-cols-2" : "grid-cols-1")}>
        <TabsTrigger value="whiteboard" className="rounded-lg gap-1.5">
          <PenLine size={14} />
          Whiteboard
        </TabsTrigger>
        {allowCalculator && (
          <TabsTrigger value="desmos" className="rounded-lg gap-1.5">
            <Calculator size={14} />
            Desmos
          </TabsTrigger>
        )}
      </TabsList>
      <TabsContent value="whiteboard" className="mt-0 flex-1 min-h-0 data-[state=inactive]:hidden">
        <Suspense fallback={<ToolFallback />}>
          <QuizWhiteboard persistenceKey={persistenceKey} className={boardClassName} />
        </Suspense>
      </TabsContent>
      {allowCalculator && (
        <TabsContent value="desmos" className="mt-0 flex-1 min-h-0 data-[state=inactive]:hidden">
          <Suspense fallback={<ToolFallback />}>
            <DesmosCalculator className={boardClassName} />
          </Suspense>
        </TabsContent>
      )}
    </Tabs>
  );
};

export const QuizStudyToolsProvider = ({
  allowCalculator,
  persistenceKey,
  children,
}: {
  allowCalculator: boolean;
  persistenceKey: string;
  children: ReactNode;
}) => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [tab, setTab] = useState<TabId>("whiteboard");

  const value = useMemo<ToolsCtx>(
    () => ({
      allowCalculator,
      persistenceKey,
      tab,
      setTab,
      sheetOpen,
      setSheetOpen,
      openSheet: (t) => {
        setTab(t);
        setSheetOpen(true);
      },
    }),
    [allowCalculator, persistenceKey, tab, sheetOpen]
  );

  return (
    <QuizToolsContext.Provider value={value}>
      {children}
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent side="bottom" className="h-[85vh] rounded-t-3xl p-4 flex flex-col gap-3 [&>button]:hidden">
          <SheetHeader className="text-left space-y-1 pr-8">
            <SheetTitle className="flex items-center justify-between gap-3">
              <span>Study tools</span>
              <Button variant="ghost" size="icon" className="rounded-full shrink-0" onClick={() => setSheetOpen(false)}>
                <X size={18} />
              </Button>
            </SheetTitle>
          </SheetHeader>
          <div className="flex-1 min-h-0">
            <ToolsBody boardClassName="h-[min(60vh,520px)]" />
          </div>
        </SheetContent>
      </Sheet>
    </QuizToolsContext.Provider>
  );
};

export const QuizStudyToolsBar = () => {
  const { allowCalculator, openSheet } = useQuizTools();
  return (
    <div className="flex flex-wrap gap-2 lg:hidden">
      <Button type="button" variant="outline" className="rounded-xl h-10" onClick={() => openSheet("whiteboard")}>
        <PenLine className="mr-2 h-4 w-4" />
        Whiteboard
      </Button>
      {allowCalculator ? (
        <Button type="button" variant="outline" className="rounded-xl h-10" onClick={() => openSheet("desmos")}>
          <Calculator className="mr-2 h-4 w-4" />
          Desmos
        </Button>
      ) : (
        <span className="text-xs text-muted-foreground self-center">Desmos locked on no-calc items</span>
      )}
    </div>
  );
};

export const QuizStudyToolsPanel = () => {
  const { allowCalculator } = useQuizTools();
  return (
    <aside className="hidden lg:flex flex-col sticky top-24 h-[min(70vh,640px)] rounded-[1.5rem] border border-border bg-card/50 p-4">
      {!allowCalculator && (
        <p className="text-[11px] text-muted-foreground mb-2">
          This item is no-calculator — Desmos is hidden. Whiteboard is still available for scratch work.
        </p>
      )}
      <ToolsBody boardClassName="h-full min-h-[420px]" />
    </aside>
  );
};
