import { Link, useLocation } from "react-router-dom";
import type { ComponentType } from "react";
import {
  Home,
  Folder,
  Layers,
  FileText,
  ListChecks,
  BookOpen,
  Newspaper,
} from "lucide-react";
import { cn } from "@/lib/utils";

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
      ? "bg-white/15 text-white shadow-sm shadow-black/10"
      : "text-white/70 hover:bg-white/10 hover:text-white"
  );

  const inner = (
    <>
      <Icon size={20} className="shrink-0" />
      <span className="flex min-w-0 flex-col items-start text-left leading-tight">
        <span>{label}</span>
        {hint && (
          <span className="mt-0.5 text-[11px] font-normal text-white/50">
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
  const isUpdates = pathname.startsWith("/updates");
  const isLibrary = pathname.startsWith("/units");
  const isFlashcards =
    pathname === "/flashcards" ||
    pathname.startsWith("/flashcards/") ||
    pathname.includes("/flashcards/");
  const isGuides = pathname.startsWith("/guides") || pathname.includes("/guide");
  const isPracticeTests = pathname.startsWith("/practice-tests") || pathname.includes("/quiz");

  return (
    <div className="ace-sidebar flex h-full w-full flex-col overflow-y-auto px-3 py-5">
      <Link
        to="/home"
        onClick={onNavigate}
        className="mb-6 flex items-center gap-2 px-3 font-bold text-lg text-white hover:opacity-90"
      >
        <div className="bg-white/15 text-white p-1.5 rounded-xl shadow-lg shadow-black/20 ring-1 ring-white/20">
          <BookOpen size={16} />
        </div>
        AceAP
      </Link>

      <nav className="flex flex-col gap-1">
        <NavItem to="/home" icon={Home} label="Home" active={isHome} onClick={onNavigate} />
        <NavItem
          to="/home"
          icon={Folder}
          label="Your library"
          active={isLibrary && !isFlashcards && !isPracticeTests && !isGuides}
          onClick={onNavigate}
        />
        <NavItem
          to="/updates"
          icon={Newspaper}
          label="Updates"
          hint="What’s new — blog-style posts"
          active={isUpdates}
          onClick={onNavigate}
        />
      </nav>

      <div className="my-4 border-t border-white/15" />

      <p className="px-3 pb-2 text-[13px] font-medium text-white/45">Start here</p>
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
