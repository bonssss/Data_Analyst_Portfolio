"use client";

import React, { useState } from "react";
import { categorizedSkills, TechItem } from "@/data/skills";
import { profileData } from "@/data/profile";
import { ToolIcon } from "./ToolIcons";
import { AboutModal } from "./AboutModal";
import { DataEngineeringGraphic } from "./DataEngineeringGraphic";
import {
  MapPin,
  GraduationCap,
  TrendingUp,
  ArrowRight,
  BarChart3,
  Settings,
  Code2,
} from "lucide-react";
import { SpotlightCard } from "./reactbits/SpotlightCard";

export function SkillsAndAbout() {
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Analytics":
        return <BarChart3 className="w-4 h-4 text-sky-500" />;
      case "Engineering":
        return <Settings className="w-4 h-4 text-teal-500" />;
      case "Development & Tools":
      default:
        return <Code2 className="w-4 h-4 text-indigo-500" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* 
          ======================================================================
          TOP SECTION: Technologies I Work With (3 columns matching mockup)
          ======================================================================
        */}
        <div className="space-y-8">
          {/* Header Row with Legend */}
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-slate-200/80 dark:border-slate-800/80 gap-6">
            <div className="space-y-2">
              <div className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-sky-600 dark:text-sky-400 uppercase">
                SKILLS &amp; TOOLS
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Technologies I Work With
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                A robust toolkit spanning data analysis, distributed engineering, and modern development workflows.
              </p>
            </div>

            {/* Legend on the right side */}
            <div className="flex items-center gap-5 text-xs font-medium text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 px-4 py-2 rounded-full border border-slate-200/90 dark:border-slate-800 shadow-2xs">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Currently using</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sky-500" />
                <span>Learning / Exploring</span>
              </div>
            </div>
          </div>

          {/* 3 Categorized Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categorizedSkills.map((cat) => (
              <div
                key={cat.category}
                className="p-5 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-4"
              >
                {/* Column Header */}
                <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    {cat.category}
                  </h3>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => {
                    const isSelected = selectedTech?.id === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setSelectedTech(isSelected ? null : item)}
                        className={`group inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 select-none ${
                          isSelected
                            ? "bg-sky-50 dark:bg-sky-950 border-sky-400 text-sky-900 dark:text-sky-200 shadow-xs ring-1 ring-sky-400"
                            : "bg-slate-50/80 dark:bg-slate-800/60 hover:bg-white dark:hover:bg-slate-800 border-slate-200/80 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600"
                        }`}
                      >
                        <ToolIcon name={item.name} className="w-3.5 h-3.5 shrink-0" />
                        <span>{item.name}</span>
                        {/* Status dot */}
                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                            item.status === "using" ? "bg-emerald-500" : "bg-sky-500"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive detail on click */}
          {selectedTech && (
            <div className="p-4 rounded-2xl bg-sky-50/70 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800/80 text-xs sm:text-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ToolIcon name={selectedTech.name} className="w-5 h-5" />
                <div>
                  <span className="font-bold text-slate-900 dark:text-white">
                    {selectedTech.name}
                  </span>{" "}
                  <span className="text-slate-600 dark:text-slate-400">
                    &bull; {selectedTech.category} &bull;{" "}
                    {selectedTech.status === "using" ? "Currently in active production use" : "In active exploration"}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedTech(null)}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
              >
                Dismiss &times;
              </button>
            </div>
          )}
        </div>

        {/* 
          ======================================================================
          ABOUT ME CARD (Editorial Profile with NO University Name)
          ======================================================================
        */}
        <div id="about">
          <SpotlightCard className="p-6 sm:p-10 bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 rounded-3xl shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Graphic Illustration */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-teal-200/50 to-sky-200/50 dark:from-teal-900/30 dark:to-sky-900/30 blur-sm" />
                  <DataEngineeringGraphic size="lg" />
                </div>
              </div>

              {/* Bio Content */}
              <div className="lg:col-span-7 space-y-4">
                <div className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-sky-600 dark:text-sky-400 uppercase">
                  ABOUT ME
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {profileData.aboutGreeting}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {profileData.aboutIntro}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                    <MapPin className="w-4 h-4 text-sky-500 shrink-0" />
                    <span className="truncate">{profileData.location}</span>
                  </div>

                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                    <GraduationCap className="w-4 h-4 text-teal-500 shrink-0" />
                    <span className="truncate">{profileData.education}</span>
                  </div>

                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                    <TrendingUp className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="truncate">{profileData.status}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setAboutModalOpen(true)}
                    className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800/80 hover:bg-sky-100 dark:hover:bg-sky-900/60 transition-colors"
                  >
                    <span>More About Me &amp; Background</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>

      {/* Expanded Bio Modal */}
      <AboutModal
        isOpen={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
      />
    </section>
  );
}
