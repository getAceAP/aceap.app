import { Link, useLocation } from "react-router-dom";
import type { ComponentType } from "react";
import {
  Home,
  Folder,
  Users,
  Bell,
  Layers,
  FileText,
  ListChecks,
  BookOpen,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { showSuccess } from "@/utils/toast";

const NavItem = ({
  to,
  icon: Icon,
  label,
  hint,
  active,
  onClick,
}: {
  to?: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  label: string;
  hint?: string;
  active?: boolean;
  onClick?: () => void;
}) => {
  const className = cn(
    "flex items-center gap-3 w-full rounded-xl px-3 py-2.5 text-[15px] font-medium transition-colors",
    active
      ? "bg-primary/10 text-primary"
      : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
  );

  const inner = (
    <>
      <Icon size={20} className="shrink-0" />
      <span className="flex min-w-0 flex-col items-start text-left leading-tight">
        <span>{label}</span>
        {hint && (
          <span className="mt-0.5 text-[11px] font-normal text-muted-foreground">
            {hint}
          </span>
        )}
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={className}>
        {inner}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {inner}
    </button>
  );
};

const AppSidebar = ({ onNavigate }: { onNavigate?: () => void }) => {
  const { pathname } = useLocation();
  const isHome = pathname === "/home";
  const isLibrary = pathname.startsWith("/units");
  const isFlashcards =
    pathname === "/flashcards" ||
    pathname.startsWith("/flashcards/") ||
    pathname.includes("/flashcards/");
  const isGuides = pathname.startsWith("/guides") || pathname.includes("/guide");
  const isPracticeTests = pathname.startsWith("/practice-tests") || pathname.includes("/quiz");

  const comingSoon = (label: string) => {
    showSuccess(`${label} is coming soon.`);
    onNavigate?.();
  };

  return (
    <div className="flex h-full flex-col bg-background px-3 py-5">
      <Link
        to="/home"
        onClick={onNavigate}
        className="mb-6 flex items-center gap-2 px-3 font-bold text-lg hover:opacity-80"
      >
        <div className="bg-primary text-primary-foreground p-1.5 rounded-xl shadow-lg shadow-primary/20">
          <BookOpen size={16} />
        </div>
        AceAP
      </Link>

      <nav className="flex flex-col gap-1">
        <NavItem to="/home" icon={Home} label="Home" active={isHome} onClick={onNavigate} />
        <NavItem to="/home" icon={Folder} label="Your library" active={isLibrary && !isFlashcards && !isPracticeTests && !isGuides} onClick={onNavigate} />
        <NavItem icon={Users} label="Study groups" onClick={() => comingSoon("Study groups")} />
        <NavItem icon={Bell} label="Notifications" onClick={() => { showSuccess("You're all caught up."); onNavigate?.(); }} />
      </nav>

      <div className="my-4 border-t border-border" />

      <p className="px-3 pb-2 text-[13px] font-medium text-muted-foreground">Start here</p>
      <nav className="flex flex-col gap-1">
        <NavItem
          to="/flashcards"
          icon={Layers}
          label="Flashcards"
          hint="Try our cards for the available ones"
          active={isFlashcards}
          onClick={onNavigate}
        />
        <NavItem
          to="/guides"
          icon={FileText}
          label="Study Guides"
          hint="Try our guides for the available ones"
          active={isGuides}
          onClick={onNavigate}
        />
        <NavItem
          to="/practice-tests"
          icon={ListChecks}
          label="Practice Tests"
          hint="Try our tests for the available ones"
          active={isPracticeTests}
          onClick={onNavigate}
        />
      </nav>
    </div>
  );
};

export default AppSidebar;
