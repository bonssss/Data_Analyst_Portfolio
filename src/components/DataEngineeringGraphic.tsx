"use client";

import React from "react";
import { Database, LineChart, Cpu } from "lucide-react";

interface DataEngineeringGraphicProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function DataEngineeringGraphic({
  className = "",
  size = "lg",
}: DataEngineeringGraphicProps) {
  if (size === "sm") {
    return (
      <div className={`relative flex items-center justify-center w-full h-full rounded-2xl bg-gradient-to-br from-sky-500/10 via-teal-500/10 to-indigo-500/10 border border-sky-200 dark:border-sky-800 ${className}`}>
        <div className="relative flex items-center justify-center">
          <Database className="w-6 h-6 text-sky-600 dark:text-sky-400" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-teal-400 animate-ping" />
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-48 sm:w-52 h-64 sm:h-68 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 shadow-xl flex flex-col justify-between p-4 select-none ${className}`}>
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/15 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-500/15 rounded-full blur-2xl pointer-events-none" />

      {/* Top Header Tag */}
      <div className="relative flex items-center justify-between border-b border-slate-800/80 pb-2.5">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-slate-300">
            DATA PIPELINE
          </span>
        </div>
        <div className="flex items-center gap-1 text-[9px] font-mono text-sky-400 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-800/60">
          <Cpu className="w-3 h-3" />
          <span>ETL &bull; BI</span>
        </div>
      </div>

      {/* Center Interactive Data Engineering & Analytics Diagram */}
      <div className="relative my-auto flex flex-col items-center justify-center space-y-3">
        {/* Layer 1: Data Engineering Warehouse Disks */}
        <div className="relative group/db cursor-pointer">
          <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-slate-800/90 border border-slate-700/80 shadow-md transition-transform group-hover/db:scale-105">
            <div className="p-1.5 rounded-lg bg-sky-950 text-sky-400 border border-sky-800/50">
              <Database className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-bold text-white leading-tight">
                Data Lakehouse
              </span>
              <span className="text-[8px] font-mono text-slate-400">
                SQL &bull; PostgreSQL &bull; ETL
              </span>
            </div>
          </div>

          {/* Animated Connecting Data Stream */}
          <div className="flex justify-center my-1">
            <div className="w-0.5 h-3.5 bg-gradient-to-b from-sky-400 to-teal-400 relative">
              <span className="absolute top-0 -left-1 w-2.5 h-2.5 rounded-full bg-teal-400/50 animate-ping" />
            </div>
          </div>
        </div>

        {/* Layer 2: Transformation & Analytics Engine */}
        <div className="relative group/analytics cursor-pointer">
          <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-sky-900/60 to-teal-900/60 border border-sky-700/50 shadow-md transition-transform group-hover/analytics:scale-105">
            <div className="p-1.5 rounded-lg bg-teal-950 text-teal-400 border border-teal-800/50">
              <LineChart className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-bold text-white leading-tight">
                Analytics & Insights
              </span>
              <span className="text-[8px] font-mono text-teal-300">
                Power BI &bull; DAX &bull; Python
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mini Data Bar Chart Animation Graphic */}
      <div className="relative pt-2.5 border-t border-slate-800/80">
        <div className="flex items-end justify-between gap-1.5 h-8 px-1">
          <div className="w-full bg-sky-500/20 rounded-t h-[40%] group-hover:h-[60%] transition-all" />
          <div className="w-full bg-sky-500/40 rounded-t h-[65%] group-hover:h-[80%] transition-all" />
          <div className="w-full bg-teal-500/50 rounded-t h-[50%] group-hover:h-[70%] transition-all" />
          <div className="w-full bg-teal-400/70 rounded-t h-[85%] group-hover:h-[95%] transition-all" />
          <div className="w-full bg-emerald-400 rounded-t h-[100%] shadow-xs" />
        </div>
        <div className="flex items-center justify-between text-[8px] font-mono text-slate-400 mt-1">
          <span>Ingest</span>
          <span>Transform</span>
          <span className="text-emerald-400 font-bold">Insights</span>
        </div>
      </div>
    </div>
  );
}
