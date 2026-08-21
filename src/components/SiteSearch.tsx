import { useEffect, useState, createContext, useContext, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { searchGroups, siteSearchItems, type SearchGroup } from "@/data/site-search";

const isMac =
  typeof navigator !== "undefined" && /Mac|iPhone|iPad|iPod/.test(navigator.platform);

type SearchContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const SearchContext = createContext<SearchContextValue | null>(null);

export const SiteSearchProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <SearchContext.Provider value={{ open, setOpen }}>
      {children}
      <SiteSearchDialog />
    </SearchContext.Provider>
  );
};

const useSiteSearch = () => {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error("SiteSearchTrigger must be used within SiteSearchProvider");
  return ctx;
};

export const SiteSearchTrigger = ({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) => {
  const { setOpen } = useSiteSearch();

  return (
    <Button
      type="button"
      variant="outline"
      onClick={() => setOpen(true)}
      className={cn(
        "h-9 gap-2 rounded-full border-border/70 bg-background/70 px-3 text-muted-foreground hover:bg-primary/5 hover:text-foreground",
        compact && "w-9 px-0 justify-center gap-0",
        className
      )}
      aria-label="Search AceAP"
    >
      <Search size={16} className="shrink-0 opacity-70" />
      {!compact && (
        <>
          <span className="text-sm font-medium truncate">Search courses, units…</span>
          <kbd className="pointer-events-none ml-auto hidden md:inline-flex h-5 select-none items-center gap-1 rounded-md border border-border/80 bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
            {isMac ? "⌘" : "Ctrl"}K
          </kbd>
        </>
      )}
    </Button>
  );
};

const SiteSearchDialog = () => {
  const navigate = useNavigate();
  const { open, setOpen } = useSiteSearch();

  const run = (href: string) => {
    setOpen(false);
    navigate(href);
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search guides, quizzes, flashcards…" />
      <CommandList>
        <CommandEmpty>No matches. Try a course, unit, or “quiz”.</CommandEmpty>
        {searchGroups.map((group: SearchGroup) => {
          const items = siteSearchItems.filter((item) => item.group === group);
          if (items.length === 0) return null;
          return (
            <CommandGroup key={group} heading={group}>
              {items.map((item) => (
                <CommandItem
                  key={item.id}
                  value={`${item.title} ${item.subtitle ?? ""} ${item.keywords?.join(" ") ?? ""}`}
                  onSelect={() => run(item.href)}
                  className="cursor-pointer rounded-xl"
                >
                  <div className="flex min-w-0 flex-col gap-0.5">
                    <span className="truncate font-medium">{item.title}</span>
                    {item.subtitle && (
                      <span className="truncate text-xs text-muted-foreground">{item.subtitle}</span>
                    )}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          );
        })}
      </CommandList>
    </CommandDialog>
  );
};
