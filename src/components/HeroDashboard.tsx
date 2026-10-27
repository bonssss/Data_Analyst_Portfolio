"use client";

import React, { useState } from "react";
import {
  FileText,
  Database,
  Radio,
} from "lucide-react";
import { ToolIcon } from "./ToolIcons";

export function HeroDashboard() {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const nodes = [
    {
      id: "sources",
      step: "01",
      title: "Sources",
      bgColor: "bg-white dark:bg-slate-900",
      borderColor: "border-slate-200 dark:border-slate-800",
      hoverBorder: "hover:border-sky-400 dark:hover:border-sky-600",
      badgeColor: "text-slate-700 dark:text-slate-300",
      items: [
        { label: "Files", icon: <FileText className="w-3.5 h-3.5 text-sky-500" /> },
        { label: "Databases", icon: <Database className="w-3.5 h-3.5 text-indigo-500" /> },
        { label: "Streams", icon: <Radio className="w-3.5 h-3.5 text-teal-500" /> },
      ],
      detail: "CSV, Parquet, REST APIs, & OLTP DBs",
      metric: "Multi-Source Feed",
    },
    {
      id: "ingestion",
      step: "02",
      title: "Ingestion",
      bgColor: "bg-emerald-50/70 dark:bg-emerald-950/40",
      borderColor: "border-emerald-200/80 dark:border-emerald-800/60",
      hoverBorder: "hover:border-emerald-400 dark:hover:border-emerald-500",
      badgeColor: "text-emerald-800 dark:text-emerald-300",
      icon: <ToolIcon name="kafka" className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />,
      primaryText: "Kafka",
      secondaryText: "Streaming Events",
      detail: "High-throughput partitioned event broker",
      metric: "25k events/sec",
    },
    {
      id: "processing",
      step: "03",
      title: "Processing",
      bgColor: "bg-sky-50/70 dark:bg-sky-950/40",
      borderColor: "border-sky-200/80 dark:border-sky-800/60",
      hoverBorder: "hover:border-sky-400 dark:hover:border-sky-500",
      badgeColor: "text-sky-800 dark:text-sky-300",
      dualIcons: [
        <ToolIcon key="python" name="python" className="w-6 h-6" />,
        <ToolIcon key="spark" name="spark" className="w-6 h-6" />,
      ],
      primaryText: "Python • Spark",
      subBullets: ["Transform", "Clean", "Enrich"],
      detail: "PySpark structured streaming & windowed transforms",
      metric: "< 120ms Latency",
    },
    {
      id: "storage",
      step: "04",
      title: "Storage",
      bgColor: "bg-indigo-50/60 dark:bg-indigo-950/40",
      borderColor: "border-indigo-200/80 dark:border-indigo-800/60",
      hoverBorder: "hover:border-indigo-400 dark:hover:border-indigo-500",
      badgeColor: "text-indigo-800 dark:text-indigo-300",
      icon: <ToolIcon name="postgresql" className="w-7 h-7" />,
      primaryText: "PostgreSQL",
      secondaryText: "Data Lake / Warehouse",
      detail: "Star schema with dimension & fact tables",
      metric: "99.98% Integrity",
    },
    {
      id: "insights",
      step: "05",
      title: "Insights",
      bgColor: "bg-amber-50/70 dark:bg-amber-950/40",
      borderColor: "border-amber-200/80 dark:border-amber-800/60",
      hoverBorder: "hover:border-amber-400 dark:hover:border-amber-500",
      badgeColor: "text-amber-800 dark:text-amber-300",
      icon: <ToolIcon name="powerbi" className="w-7 h-7" />,
      primaryText: "Power BI",
      secondaryText: "Dashboards • Reports",
      detail: "DAX KPIs, interactive drilldowns & executive summaries",
      metric: "Daily Live Sync",
    },
  ];

  return (
    <div className="relative w-full max-w-[680px] mx-auto select-none py-2">
      {/* 
        ========================================================================
        TOP HANDWRITTEN ANNOTATION: Data → Pipelines → Insights
        ========================================================================
      */}
      <div className="flex justify-end pr-3 sm:pr-8 mb-3">
        <div className="relative inline-flex flex-col items-end">
          <div className="flex items-center gap-1.5 font-handwriting text-xl sm:text-2xl font-bold tracking-wide text-teal-600 dark:text-teal-400 rotate-[-1.5deg]">
            <span>Data</span>
            <span className="text-teal-500">&rarr;</span>
            <span>Pipelines</span>
            <span className="text-teal-500">&rarr;</span>
            <span>Insights</span>
          </div>
          {/* Handwritten curved underline SVG */}
          <svg
            className="w-48 sm:w-56 h-4 text-teal-500/80 dark:text-teal-400/80 -mt-1"
            viewBox="0 0 180 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 4 4 C 40 12 120 14 168 6"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              d="M 160 2 L 172 6 L 162 10"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* 
        ========================================================================
        MAIN 5-CARD PIPELINE FLOW CONTAINER
        ========================================================================
      */}
      <div className="relative p-4 sm:p-6 rounded-3xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/90 dark:border-slate-800 shadow-xl backdrop-blur-md">
        {/* Subtle decorative background flow line connecting the cards */}
        <div className="hidden sm:block absolute top-[52%] left-10 right-10 h-0.5 border-t-2 border-dashed border-sky-300/50 dark:border-sky-700/40 -z-0" />

        {/* Animated pulse dots traveling along the flow */}
        <div className="hidden sm:block absolute top-[52%] left-10 right-10 -translate-y-1/2 -z-0 pointer-events-none">
          <div className="w-2.5 h-2.5 rounded-full bg-teal-400 blur-[1px] animate-pulse absolute left-1/4" />
          <div className="w-2.5 h-2.5 rounded-full bg-sky-400 blur-[1px] animate-pulse absolute left-2/4" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400 blur-[1px] animate-pulse absolute left-3/4" />
        </div>

        {/* 5 Connected Node Cards Grid / Flex */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 relative z-10 items-stretch">
          {/* Card 1: Sources */}
          <div
            onMouseEnter={() => setActiveNode(0)}
            onMouseLeave={() => setActiveNode(null)}
            className={`group relative flex flex-col justify-between p-3 rounded-2xl border transition-all duration-300 cursor-pointer ${
              nodes[0].bgColor
            } ${nodes[0].borderColor} ${nodes[0].hoverBorder} ${
              activeNode === 0
                ? "shadow-lg -translate-y-1 ring-2 ring-sky-400/40"
                : "shadow-2xs hover:shadow-md hover:-translate-y-0.5"
            }`}
          >
            <div>
              <div className="text-[11px] font-bold text-slate-800 dark:text-slate-200 mb-2.5 pb-1 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span>{nodes[0].title}</span>
                <span className="text-[9px] font-mono text-slate-400">01</span>
              </div>
              <div className="space-y-1.5">
                {nodes[0].items?.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-1.5 p-1 rounded-md bg-slate-50 dark:bg-slate-800/50 text-[10.5px] font-medium text-slate-700 dark:text-slate-300"
                  >
                    {item.icon}
                    <span className="truncate">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-2.5 pt-1.5 border-t border-slate-100 dark:border-slate-800 text-[9px] font-mono text-slate-400 text-center truncate">
              {nodes[0].metric}
            </div>

            {/* Connecting arrow pointing to next card (visible on desktop) */}
            <div className="hidden sm:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-4 h-4 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 items-center justify-center text-slate-400 text-[10px]">
              &rarr;
            </div>
          </div>

          {/* Card 2: Ingestion */}
          <div
            onMouseEnter={() => setActiveNode(1)}
            onMouseLeave={() => setActiveNode(null)}
            className={`group relative flex flex-col justify-between p-3 rounded-2xl border transition-all duration-300 cursor-pointer ${
              nodes[1].bgColor
            } ${nodes[1].borderColor} ${nodes[1].hoverBorder} ${
              activeNode === 1
                ? "shadow-lg -translate-y-1 ring-2 ring-emerald-400/40"
                : "shadow-2xs hover:shadow-md hover:-translate-y-0.5"
            }`}
          >
            <div>
              <div className="text-[11px] font-bold text-slate-800 dark:text-slate-200 mb-2 pb-1 border-b border-emerald-100 dark:border-emerald-900/40 flex items-center justify-between">
                <span>{nodes[1].title}</span>
                <span className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400">02</span>
              </div>

              <div className="flex flex-col items-center justify-center py-2 space-y-1.5 text-center">
                <div className="p-2 rounded-xl bg-white dark:bg-slate-900 shadow-2xs group-hover:scale-110 transition-transform">
                  {nodes[1].icon}
                </div>
                <div className="text-xs font-extrabold text-slate-900 dark:text-white">
                  {nodes[1].primaryText}
                </div>
                <div className="text-[9.5px] font-medium text-emerald-700 dark:text-emerald-300 leading-tight">
                  {nodes[1].secondaryText}
                </div>
              </div>
            </div>

            <div className="mt-1 pt-1.5 border-t border-emerald-200/50 dark:border-emerald-800/40 text-[9px] font-mono text-emerald-700 dark:text-emerald-300 text-center font-semibold">
              {nodes[1].metric}
            </div>

            {/* Connecting arrow pointing to next card */}
            <div className="hidden sm:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-4 h-4 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 items-center justify-center text-slate-400 text-[10px]">
              &rarr;
            </div>
          </div>

          {/* Card 3: Processing */}
          <div
            onMouseEnter={() => setActiveNode(2)}
            onMouseLeave={() => setActiveNode(null)}
            className={`group relative flex flex-col justify-between p-3 rounded-2xl border transition-all duration-300 cursor-pointer ${
              nodes[2].bgColor
            } ${nodes[2].borderColor} ${nodes[2].hoverBorder} ${
              activeNode === 2
                ? "shadow-lg -translate-y-1 ring-2 ring-sky-400/40"
                : "shadow-2xs hover:shadow-md hover:-translate-y-0.5"
            }`}
          >
            <div>
              <div className="text-[11px] font-bold text-slate-800 dark:text-slate-200 mb-2 pb-1 border-b border-sky-100 dark:border-sky-900/40 flex items-center justify-between">
                <span>{nodes[2].title}</span>
                <span className="text-[9px] font-mono text-sky-600 dark:text-sky-400">03</span>
              </div>

              <div className="flex flex-col items-center justify-center py-1.5 space-y-1 text-center">
                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white dark:bg-slate-900 shadow-2xs group-hover:scale-110 transition-transform">
                  {nodes[2].dualIcons}
                </div>
                <div className="text-xs font-extrabold text-slate-900 dark:text-white">
                  {nodes[2].primaryText}
                </div>
                <div className="flex flex-wrap justify-center gap-0.5 text-[8.5px] font-medium text-sky-700 dark:text-sky-300">
                  <span>Transform</span>
                  <span>•</span>
                  <span>Clean</span>
                  <span>•</span>
                  <span>Enrich</span>
                </div>
              </div>
            </div>

            <div className="mt-1 pt-1.5 border-t border-sky-200/50 dark:border-sky-800/40 text-[9px] font-mono text-sky-700 dark:text-sky-300 text-center font-semibold">
              {nodes[2].metric}
            </div>

            {/* Connecting arrow pointing to next card */}
            <div className="hidden sm:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-4 h-4 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 items-center justify-center text-slate-400 text-[10px]">
              &rarr;
            </div>
          </div>

          {/* Card 4: Storage */}
          <div
            onMouseEnter={() => setActiveNode(3)}
            onMouseLeave={() => setActiveNode(null)}
            className={`group relative flex flex-col justify-between p-3 rounded-2xl border transition-all duration-300 cursor-pointer ${
              nodes[3].bgColor
            } ${nodes[3].borderColor} ${nodes[3].hoverBorder} ${
              activeNode === 3
                ? "shadow-lg -translate-y-1 ring-2 ring-indigo-400/40"
                : "shadow-2xs hover:shadow-md hover:-translate-y-0.5"
            }`}
          >
            <div>
              <div className="text-[11px] font-bold text-slate-800 dark:text-slate-200 mb-2 pb-1 border-b border-indigo-100 dark:border-indigo-900/40 flex items-center justify-between">
                <span>{nodes[3].title}</span>
                <span className="text-[9px] font-mono text-indigo-600 dark:text-indigo-400">04</span>
              </div>

              <div className="flex flex-col items-center justify-center py-2 space-y-1.5 text-center">
                <div className="p-2 rounded-xl bg-white dark:bg-slate-900 shadow-2xs group-hover:scale-110 transition-transform">
                  {nodes[3].icon}
                </div>
                <div className="text-xs font-extrabold text-slate-900 dark:text-white">
                  {nodes[3].primaryText}
                </div>
                <div className="text-[9.5px] font-medium text-indigo-700 dark:text-indigo-300 leading-tight">
                  {nodes[3].secondaryText}
                </div>
              </div>
            </div>

            <div className="mt-1 pt-1.5 border-t border-indigo-200/50 dark:border-indigo-800/40 text-[9px] font-mono text-indigo-700 dark:text-indigo-300 text-center font-semibold">
              {nodes[3].metric}
            </div>

            {/* Connecting arrow pointing to next card */}
            <div className="hidden sm:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-4 h-4 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 items-center justify-center text-slate-400 text-[10px]">
              &rarr;
            </div>
          </div>

          {/* Card 5: Insights */}
          <div
            onMouseEnter={() => setActiveNode(4)}
            onMouseLeave={() => setActiveNode(null)}
            className={`group relative flex flex-col justify-between p-3 rounded-2xl border transition-all duration-300 cursor-pointer col-span-2 sm:col-span-1 ${
              nodes[4].bgColor
            } ${nodes[4].borderColor} ${nodes[4].hoverBorder} ${
              activeNode === 4
                ? "shadow-lg -translate-y-1 ring-2 ring-amber-400/40"
                : "shadow-2xs hover:shadow-md hover:-translate-y-0.5"
            }`}
          >
            <div>
              <div className="text-[11px] font-bold text-slate-800 dark:text-slate-200 mb-2 pb-1 border-b border-amber-100 dark:border-amber-900/40 flex items-center justify-between">
                <span>{nodes[4].title}</span>
                <span className="text-[9px] font-mono text-amber-600 dark:text-amber-400">05</span>
              </div>

              <div className="flex flex-col items-center justify-center py-2 space-y-1.5 text-center">
                <div className="p-2 rounded-xl bg-white dark:bg-slate-900 shadow-2xs group-hover:scale-110 transition-transform">
                  {nodes[4].icon}
                </div>
                <div className="text-xs font-extrabold text-slate-900 dark:text-white">
                  {nodes[4].primaryText}
                </div>
                <div className="text-[9.5px] font-medium text-amber-700 dark:text-amber-300 leading-tight">
                  {nodes[4].secondaryText}
                </div>
              </div>
            </div>

            <div className="mt-1 pt-1.5 border-t border-amber-200/50 dark:border-amber-800/40 text-[9px] font-mono text-amber-700 dark:text-amber-300 text-center font-semibold">
              {nodes[4].metric}
            </div>
          </div>
        </div>

        {/* Dynamic Detail Callout for hovered node */}
        {activeNode !== null && (
          <div className="mt-3 p-2.5 rounded-xl bg-slate-900 text-white dark:bg-slate-800 text-xs flex items-center justify-between animate-in fade-in-50 duration-200">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
              <span className="font-semibold text-teal-300">{nodes[activeNode].title}:</span>
              <span className="text-slate-200">{nodes[activeNode].detail}</span>
            </div>
            <span className="font-mono text-[10px] text-teal-400 font-bold bg-slate-950 px-2 py-0.5 rounded">
              {nodes[activeNode].metric}
            </span>
          </div>
        )}
      </div>

      {/* 
        ========================================================================
        BOTTOM SPACED CAPTION: INGEST → TRANSFORM → ANALYZE
        ========================================================================
      */}
      <div className="mt-4 flex items-center justify-center">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] text-slate-500 dark:text-slate-400 uppercase">
          <span>INGEST</span>
          <span className="text-sky-500">&rarr;</span>
          <span>TRANSFORM</span>
          <span className="text-teal-500">&rarr;</span>
          <span>ANALYZE</span>
        </div>
      </div>
    </div>
  );
}
