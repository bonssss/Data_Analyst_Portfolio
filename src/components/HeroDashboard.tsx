"use client";

import React, { useState } from "react";
import { TrendingUp, BarChart2, SlidersHorizontal, Maximize2, Sparkles } from "lucide-react";
import { AnimatedCounter } from "./reactbits/AnimatedCounter";

export function HeroDashboard() {
  const [activeMonthIndex, setActiveMonthIndex] = useState<number>(9); // Default to Oct
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const months = [
    { name: "Jan", revenue: 68 },
    { name: "Feb", revenue: 74 },
    { name: "Mar", revenue: 82 },
    { name: "Apr", revenue: 95 },
    { name: "May", revenue: 88 },
    { name: "Jun", revenue: 104 },
    { name: "Jul", revenue: 112 },
    { name: "Aug", revenue: 108 },
    { name: "Sep", revenue: 118 },
    { name: "Oct", revenue: 125 },
    { name: "Nov", revenue: 132 },
    { name: "Dec", revenue: 145 },
  ];

  const categories = [
    { name: "Electronics", percent: 29, color: "#0284c7" },
    { name: "Clothing", percent: 24, color: "#06b6d4" },
    { name: "Home & Living", percent: 18, color: "#14b8a6" },
    { name: "Beauty", percent: 17, color: "#f59e0b" },
    { name: "Sports", percent: 12, color: "#6366f1" },
  ];

  // SVG coordinates calculation for line chart
  const width = 280;
  const height = 110;
  const paddingX = 15;
  const paddingY = 15;

  const getCoordinates = (index: number, val: number) => {
    const x = paddingX + (index / (months.length - 1)) * (width - 2 * paddingX);
    const minVal = 50;
    const maxVal = 150;
    const y = height - paddingY - ((val - minVal) / (maxVal - minVal)) * (height - 2 * paddingY);
    return { x, y };
  };

  const points = months.map((m, idx) => getCoordinates(idx, m.revenue));
  const linePath = points.reduce(
    (acc, pt, idx) => (idx === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`),
    ""
  );
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${height - 5} L ${points[0].x} ${height - 5} Z`;

  return (
    <div className="relative w-full max-w-[580px] mx-auto select-none">
      {/* Decorative Potted Plant on Left (matching mockup) */}
      <div className="absolute -left-10 md:-left-16 bottom-10 z-20 pointer-events-none drop-shadow-md">
        <svg
          className="w-20 md:w-28 h-auto overflow-visible animate-float"
          viewBox="0 0 100 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Leaves */}
          <path
            d="M 50 85 C 20 60 10 20 35 10 C 50 30 52 60 50 85 Z"
            fill="url(#leafGrad1)"
          />
          <path
            d="M 50 85 C 70 55 90 25 70 12 C 55 25 52 65 50 85 Z"
            fill="url(#leafGrad2)"
          />
          <path
            d="M 50 85 C 40 40 45 10 60 5 C 65 25 58 60 50 85 Z"
            fill="url(#leafGrad3)"
          />
          <path
            d="M 50 85 C 10 70 5 45 20 40 C 35 50 45 70 50 85 Z"
            fill="url(#leafGrad1)"
          />
          {/* Ceramic Pot */}
          <ellipse cx="50" cy="85" rx="20" ry="4" fill="#cbd5e1" />
          <path
            d="M 32 85 L 36 122 C 36 126 64 126 64 122 L 68 85 Z"
            fill="url(#potGrad)"
          />
          <ellipse cx="50" cy="122" rx="14" ry="2.5" fill="#94a3b8" />

          <defs>
            <linearGradient id="leafGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
            <linearGradient id="leafGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <linearGradient id="leafGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6ee7b7" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
            <linearGradient id="potGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="50%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Laptop Device Frame */}
      <div className="relative z-10">
        {/* Screen Bezel */}
        <div className="relative rounded-t-2xl p-2.5 sm:p-3 bg-gradient-to-b from-slate-800 to-slate-900 shadow-2xl border-t border-x border-slate-700/80">
          {/* Top Notch / Web camera dot */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-950 border border-slate-700" />
          </div>

          {/* Inner Dashboard Display */}
          <div className="relative rounded-xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 text-slate-800 dark:text-slate-100 shadow-inner">
            {/* Dashboard App Top Bar */}
            <div className="flex items-center justify-between px-3.5 py-2 border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/70">
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-md bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400">
                  <BarChart2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                  Analytics Overview
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <SlidersHorizontal className="w-3 h-3 hover:text-slate-600 dark:hover:text-slate-300 transition-colors" />
                <Maximize2 className="w-3 h-3 hover:text-slate-600 dark:hover:text-slate-300 transition-colors" />
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-3 sm:p-4 space-y-3">
              {/* Top 3 KPI Cards */}
              <div className="grid grid-cols-3 gap-2">
                {/* Metric 1 */}
                <div className="p-2 sm:p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                  <span className="block text-[10px] text-slate-500 dark:text-slate-400 font-medium truncate">
                    Total Revenue
                  </span>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                    <AnimatedCounter value="$125,430" />
                  </div>
                  <div className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">
                    <TrendingUp className="w-2.5 h-2.5" />
                    <span>+12.5%</span>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="p-2 sm:p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                  <span className="block text-[10px] text-slate-500 dark:text-slate-400 font-medium truncate">
                    Total Orders
                  </span>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                    <AnimatedCounter value="2,842" />
                  </div>
                  <div className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">
                    <TrendingUp className="w-2.5 h-2.5" />
                    <span>+8.3%</span>
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="p-2 sm:p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                  <span className="block text-[10px] text-slate-500 dark:text-slate-400 font-medium truncate">
                    Profit Margin
                  </span>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                    <AnimatedCounter value="18.6%" />
                  </div>
                  <div className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">
                    <TrendingUp className="w-2.5 h-2.5" />
                    <span>+4.2%</span>
                  </div>
                </div>
              </div>

              {/* Bottom Row: Line Chart + Donut Chart */}
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-1">
                {/* Monthly Revenue Line Chart (3 cols) */}
                <div className="sm:col-span-3 p-2.5 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/80">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-semibold text-slate-800 dark:text-slate-200">
                      Monthly Revenue
                    </span>
                    <span className="text-[9px] font-mono font-medium text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/80 px-1.5 py-0.5 rounded">
                      {months[activeMonthIndex].name}: ${months[activeMonthIndex].revenue}k
                    </span>
                  </div>

                  <div className="relative">
                    <svg
                      viewBox={`0 0 ${width} ${height}`}
                      className="w-full h-24 overflow-visible"
                    >
                      <defs>
                        <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#0284c7" stopOpacity="0.28" />
                          <stop offset="100%" stopColor="#0284c7" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Horizontal Grid lines */}
                      {[30, 60, 90].map((y, idx) => (
                        <line
                          key={idx}
                          x1="10"
                          y1={y}
                          x2={width - 10}
                          y2={y}
                          stroke="currentColor"
                          className="text-slate-200 dark:text-slate-800"
                          strokeDasharray="2 2"
                        />
                      ))}

                      {/* Gradient fill below line */}
                      <path d={areaPath} fill="url(#revenueGradient)" />

                      {/* Main Trend Line */}
                      <path
                        d={linePath}
                        fill="none"
                        stroke="#0284c7"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      {/* Interactive Data Dots */}
                      {points.map((pt, idx) => {
                        const isCurrent = activeMonthIndex === idx;
                        return (
                          <g
                            key={idx}
                            onMouseEnter={() => setActiveMonthIndex(idx)}
                            className="cursor-pointer"
                          >
                            <circle
                              cx={pt.x}
                              cy={pt.y}
                              r={isCurrent ? 4.5 : 2.5}
                              className={`transition-all duration-150 ${
                                isCurrent
                                  ? "fill-sky-500 stroke-white dark:stroke-slate-900 stroke-2"
                                  : "fill-white dark:fill-slate-900 stroke-sky-500 stroke-1.5"
                              }`}
                            />
                          </g>
                        );
                      })}
                    </svg>

                    {/* X-axis Month Labels */}
                    <div className="flex justify-between text-[8px] font-mono text-slate-400 mt-1 px-1">
                      {months.map((m, idx) => (
                        <span
                          key={idx}
                          onClick={() => setActiveMonthIndex(idx)}
                          className={`cursor-pointer transition-colors ${
                            activeMonthIndex === idx
                              ? "text-sky-600 dark:text-sky-400 font-bold"
                              : "hover:text-slate-600 dark:hover:text-slate-300"
                          }`}
                        >
                          {m.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sales by Category Donut Chart (2 cols) */}
                <div className="sm:col-span-2 p-2.5 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/80 flex flex-col justify-between">
                  <span className="text-[11px] font-semibold text-slate-800 dark:text-slate-200">
                    Sales by Category
                  </span>

                  <div className="flex items-center gap-2 my-auto">
                    {/* Donut SVG */}
                    <div className="relative w-16 h-16 shrink-0">
                      <svg viewBox="0 0 40 40" className="w-full h-full -rotate-90">
                        {/* Circle circumference = 2 * PI * 15.9155 ≈ 100 */}
                        {/* Segment 1: Electronics 29% */}
                        <circle
                          cx="20"
                          cy="20"
                          r="15.915"
                          fill="transparent"
                          stroke="#0284c7"
                          strokeWidth="6"
                          strokeDasharray="29 71"
                          strokeDashoffset="0"
                          className="transition-opacity hover:opacity-80 cursor-pointer"
                          onMouseEnter={() => setHoveredCategory("Electronics")}
                          onMouseLeave={() => setHoveredCategory(null)}
                        />
                        {/* Segment 2: Clothing 24% */}
                        <circle
                          cx="20"
                          cy="20"
                          r="15.915"
                          fill="transparent"
                          stroke="#06b6d4"
                          strokeWidth="6"
                          strokeDasharray="24 76"
                          strokeDashoffset="-29"
                          className="transition-opacity hover:opacity-80 cursor-pointer"
                          onMouseEnter={() => setHoveredCategory("Clothing")}
                          onMouseLeave={() => setHoveredCategory(null)}
                        />
                        {/* Segment 3: Home & Living 18% */}
                        <circle
                          cx="20"
                          cy="20"
                          r="15.915"
                          fill="transparent"
                          stroke="#14b8a6"
                          strokeWidth="6"
                          strokeDasharray="18 82"
                          strokeDashoffset="-53"
                          className="transition-opacity hover:opacity-80 cursor-pointer"
                          onMouseEnter={() => setHoveredCategory("Home & Living")}
                          onMouseLeave={() => setHoveredCategory(null)}
                        />
                        {/* Segment 4: Beauty 17% */}
                        <circle
                          cx="20"
                          cy="20"
                          r="15.915"
                          fill="transparent"
                          stroke="#f59e0b"
                          strokeWidth="6"
                          strokeDasharray="17 83"
                          strokeDashoffset="-71"
                          className="transition-opacity hover:opacity-80 cursor-pointer"
                          onMouseEnter={() => setHoveredCategory("Beauty")}
                          onMouseLeave={() => setHoveredCategory(null)}
                        />
                        {/* Segment 5: Sports 12% */}
                        <circle
                          cx="20"
                          cy="20"
                          r="15.915"
                          fill="transparent"
                          stroke="#6366f1"
                          strokeWidth="6"
                          strokeDasharray="12 88"
                          strokeDashoffset="-88"
                          className="transition-opacity hover:opacity-80 cursor-pointer"
                          onMouseEnter={() => setHoveredCategory("Sports")}
                          onMouseLeave={() => setHoveredCategory(null)}
                        />
                      </svg>
                    </div>

                    {/* Legend */}
                    <div className="flex flex-col gap-0.5 text-[9px] w-full">
                      {categories.map((c) => (
                        <div
                          key={c.name}
                          className={`flex items-center justify-between transition-colors ${
                            hoveredCategory === c.name ? "font-bold text-sky-600" : "text-slate-600 dark:text-slate-400"
                          }`}
                        >
                          <div className="flex items-center gap-1 truncate">
                            <span
                              className="w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ backgroundColor: c.color }}
                            />
                            <span className="truncate">{c.name}</span>
                          </div>
                          <span className="font-mono text-slate-700 dark:text-slate-300 ml-1">
                            {c.percent}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Laptop Keyboard Base & Hinge */}
        <div className="relative">
          {/* Base bottom slab */}
          <div className="h-3 sm:h-3.5 bg-gradient-to-b from-slate-300 via-slate-400 to-slate-500 dark:from-slate-700 dark:via-slate-800 dark:to-slate-900 rounded-b-xl shadow-xl flex items-center justify-center">
            {/* Trackpad notch indent */}
            <div className="w-16 h-1 rounded-b bg-slate-400/80 dark:bg-slate-700" />
          </div>
          {/* Bottom shelf shadow */}
          <div className="w-[96%] mx-auto h-2 bg-slate-400/30 dark:bg-slate-950/60 blur-xs rounded-full" />
        </div>
      </div>

      {/* Handwritten Annotation Underneath: "Data → Insights → Impact" with custom drawn arrow */}
      <div className="mt-4 sm:mt-5 flex flex-col items-center sm:items-end sm:pr-8">
        <div className="relative inline-flex flex-col items-center">
          <span className="font-handwriting text-xl sm:text-2xl font-bold tracking-wide text-teal-600 dark:text-teal-400 rotate-[-2deg]">
            Data → Insights → Impact
          </span>
          {/* Handwritten curved underline and arrow */}
          <svg
            className="w-36 sm:w-44 h-6 text-teal-500/80 dark:text-teal-400/80 -mt-1 overflow-visible"
            viewBox="0 0 160 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 5 6 C 45 14 110 16 148 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Arrowhead */}
            <path
              d="M 140 3 L 152 7 L 143 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
