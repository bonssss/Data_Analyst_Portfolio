"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { HeroDashboard } from "./HeroDashboard";
import { ArrowRight, BarChart3, Workflow } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
    >
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/4 right-5 w-96 h-96 bg-sky-200/20 dark:bg-sky-900/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-teal-200/20 dark:bg-teal-900/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* 
            ====================================================================
            LEFT COLUMN: Headline, Editorial Copy, 2 Competency Blocks & CTAs
            ====================================================================
          */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start">
            {/* Small uppercase category label matching mockup */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-sky-600 dark:text-sky-400 uppercase">
                DATA ANALYTICS &bull; DATA ENGINEERING
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-[52px] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12] mb-5">
              From raw data to{" "}
              <span className="block">reliable pipelines and</span>
              <span className="bg-gradient-to-r from-sky-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                meaningful insights.
              </span>
            </h1>

            {/* Supporting Editorial Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed mb-7">
              I explore data, build reliable data workflows, and transform complex information into insights that help people make better decisions.
            </p>

            {/* 
              Two Competency Blocks matching the inspiration mockup:
              Data Analytics (left) and Data Engineering (right)
            */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl mb-8">
              {/* Block 1: Data Analytics */}
              <div className="p-3.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:border-sky-300 dark:hover:border-sky-700 transition-colors">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-xl bg-sky-50 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                    Data Analytics
                  </h3>
                </div>
                <div className="space-y-0.5 text-xs text-slate-600 dark:text-slate-400 font-medium pl-0.5">
                  <p>Python &bull; Pandas &bull; SQL</p>
                  <p>Power BI &bull; Excel</p>
                </div>
              </div>

              {/* Block 2: Data Engineering */}
              <div className="p-3.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:border-teal-300 dark:hover:border-teal-700 transition-colors">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-xl bg-teal-50 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400">
                    <Workflow className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                    Data Engineering
                  </h3>
                </div>
                <div className="space-y-0.5 text-xs text-slate-600 dark:text-slate-400 font-medium pl-0.5">
                  <p>Apache Kafka &bull; Apache Spark</p>
                  <p>ETL/ELT &bull; PostgreSQL &bull; Pipelines</p>
                </div>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
              <a
                href="#projects"
                className="group flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-slate-900 hover:bg-slate-800 dark:bg-sky-600 dark:hover:bg-sky-500 shadow-sm transition-all duration-200 active:scale-95"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/80 shadow-2xs transition-all duration-200 active:scale-95"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-6 pt-3 border-t border-slate-200/70 dark:border-slate-800/70 w-full">
              <a
                href={profileData.socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                <span>GitHub</span>
              </a>

              <a
                href={profileData.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-sky-600" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* 
            ====================================================================
            RIGHT COLUMN: 5-Card End-to-End Pipeline & Analytics Flow
            ====================================================================
          */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center items-center">
            <HeroDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}
