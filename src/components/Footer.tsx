"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { profileData } from "@/data/profile";

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-8 border-t border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          {/* Left: Bonsa Desalegn • Data Analyst */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              {profileData.name}
            </span>
            <span>&bull;</span>
            <span>{profileData.role}</span>
          </div>

          {/* Right: Copyright notice */}
          <div>
            &copy; 2026 Bonsa Desalegn. All rights reserved.
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button (matching circular blue button on mockup bottom right) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          type="button"
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 p-2.5 rounded-full bg-sky-100 hover:bg-sky-200 dark:bg-sky-950 dark:hover:bg-sky-900 text-sky-600 dark:text-sky-300 border border-sky-300/80 dark:border-sky-800 shadow-md transition-all duration-300 hover:scale-110 active:scale-95 animate-in fade-in zoom-in-75"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </footer>
  );
}
