import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, LayoutDashboard } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#37352F] font-sans selection:bg-[#ebf5ff]">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E9E9E8] px-6 py-3">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 font-semibold text-lg hover:opacity-80 transition-opacity">
            <div className="bg-[#37352F] text-white p-1 rounded">
              <BookOpen size={18} />
            </div>
            <span>AceAP.app</span>
          </Link>
          <div className="flex gap-6 text-sm font-medium text-[#73726E]">
            <Link to="/dashboard" className="hover:text-[#37352F] flex items-center gap-1">
              <LayoutDashboard size={16} />
              Dashboard
            </Link>
          </div>
        </div>
      </nav>
      <main className="max-w-4xl mx-auto px-6 py-12">
        {children}
      </main>
      <footer className="max-w-4xl mx-auto px-6 py-12 border-t border-[#E9E9E8] text-center text-sm text-[#ACABA9]">
        <p>© {new Date().getFullYear()} AceAP.app — AP World History Revision</p>
      </footer>
    </div>
  );
};

export default Layout;