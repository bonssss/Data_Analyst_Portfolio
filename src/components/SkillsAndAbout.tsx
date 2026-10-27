"use client";

import React, { useState } from "react";
import { toolsData, ToolItem } from "@/data/skills";
import { profileData } from "@/data/profile";
import { ToolIcon } from "./ToolIcons";
import { AboutModal } from "./AboutModal";
import { DataEngineeringGraphic } from "./DataEngineeringGraphic";
import { MapPin, GraduationCap, TrendingUp, ArrowRight } from "lucide-react";
import { SpotlightCard } from "./reactbits/SpotlightCard";

export function SkillsAndAbout() {
  const [selectedTool, setSelectedTool] = useState<ToolItem | null>(null);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Skills & Tools */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/60 border border-sky-100 dark:border-sky-800/80">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                <span className="text-[11px] font-bold tracking-widest text-sky-700 dark:text-sky-300 uppercase">
                  SKILLS & TOOLS
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Tools I Work With
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
                I use a combination of modern tools and technologies to clean, analyze, and visualize data effectively.
              </p>
            </div>

            {/* Clean Typographic Skills Grid (matching mockup) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {toolsData.map((tool) => {
                const isSelected = selectedTool?.id === tool.id;
                return (
                  <button
                    key={tool.id}
                    onClick={() => setSelectedTool(isSelected ? null : tool)}
                    type="button"
                    className={`group flex items-center gap-2.5 p-3 rounded-xl border text-left transition-all duration-200 select-none ${
                      isSelected
                        ? "bg-sky-50/90 dark:bg-sky-950/80 border-sky-400 dark:border-sky-600 shadow-xs"
                        : "bg-white dark:bg-slate-900/90 border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-2xs"
                    }`}
                  >
                    <div className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 transition-transform group-hover:scale-110">
                      <ToolIcon name={tool.name} className="w-5 h-5 shrink-0" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 truncate">
                      {tool.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Tool Detail Callout (when a tool is clicked) */}
            {selectedTool && (
              <div className="p-4 rounded-xl bg-sky-50/60 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800/80 animate-in fade-in-50 text-xs sm:text-sm space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                    <ToolIcon name={selectedTool.name} className="w-4 h-4" />
                    <span>{selectedTool.name}</span>
                    <span className="text-[11px] font-normal text-sky-700 dark:text-sky-300 px-2 py-0.5 rounded-md bg-white dark:bg-slate-900 border border-sky-100 dark:border-sky-800">
                      {selectedTool.category}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedTool(null)}
                    className="text-xs text-slate-400 hover:text-slate-600"
                  >
                    &times; Close
                  </button>
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {selectedTool.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {selectedTool.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-semibold bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: About Me Card (matching mockup) */}
          <div id="about" className="lg:col-span-6">
            <SpotlightCard className="p-6 sm:p-8 bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 rounded-3xl shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                {/* Data Analytics & Data Engineering Graphic */}
                <div className="sm:col-span-5 flex justify-center">
                  <div className="relative">
                    {/* Soft gradient rounded aura backdrop */}
                    <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-teal-200/60 to-sky-200/60 dark:from-teal-900/40 dark:to-sky-900/40 blur-xs" />
                    <DataEngineeringGraphic size="lg" />
                  </div>
                </div>

                {/* About Content */}
                <div className="sm:col-span-7 space-y-4">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-50 dark:bg-sky-950/60 border border-sky-100 dark:border-sky-800/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                    <span className="text-[10px] font-bold tracking-widest text-sky-700 dark:text-sky-300 uppercase">
                      ABOUT ME
                    </span>
                  </div>

                  {/* Greeting */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {profileData.aboutGreeting}
                  </h3>

                  {/* Concise Intro */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {profileData.aboutIntro}
                  </p>

                  {/* Key Highlights with icons (matching mockup) */}
                  <div className="space-y-2 pt-1 text-xs text-slate-700 dark:text-slate-300 font-medium">
                    <div className="flex items-center gap-2.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span>{profileData.location}</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <GraduationCap className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span>{profileData.education}</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <TrendingUp className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span>{profileData.status}</span>
                    </div>
                  </div>

                  {/* More About Me Button */}
                  <div className="pt-2">
                    <button
                      onClick={() => setAboutModalOpen(true)}
                      className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800/80 hover:bg-sky-100 dark:hover:bg-sky-900/60 transition-colors"
                    >
                      <span>More About Me</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>
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
