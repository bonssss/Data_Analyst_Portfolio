import React from "react";
import Link from "next/link";

interface MonogramLogoProps {
  className?: string;
  showSubtitle?: boolean;
}

export function MonogramLogo({ className = "", showSubtitle = true }: MonogramLogoProps) {
  return (
    <Link
      href="#hero"
      className={`group flex items-center gap-3 transition-opacity hover:opacity-90 ${className}`}
      aria-label="Bonsa Desalegn — Home"
    >
      {/* Monogram Badge */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 dark:from-slate-800 dark:to-slate-900 border border-slate-800 shadow-sm transition-transform duration-300 group-hover:scale-105">
        {/* Decorative subtle border glow */}
        <div className="absolute inset-0 rounded-xl bg-sky-500/10 blur-sm pointer-events-none group-hover:bg-sky-500/20 transition-colors" />
        
        {/* Monogram Text */}
        <div className="relative flex items-baseline font-mono-code font-black tracking-tighter text-lg select-none">
          <span className="text-white">B</span>
          <span className="text-sky-400">D</span>
        </div>

        {/* Small corner accent dot */}
        <span className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
      </div>

      {/* Name and Role */}
      {showSubtitle && (
        <div className="flex flex-col">
          <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Bonsa Desalegn
          </span>
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400 tracking-wide">
            Data Analyst
          </span>
        </div>
      )}
    </Link>
  );
}
