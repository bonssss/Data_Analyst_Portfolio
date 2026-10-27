"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { HeroDashboard } from "./HeroDashboard";
import { ArrowRight, Mail, Database, BarChart3, FileSpreadsheet, Code2, Workflow } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export function Hero() {
  const getToolIcon = (name: string) => {
    switch (name) {
      case "Python":
        return <Code2 className="w-3.5 h-3.5 text-blue-500" />;
      case "SQL":
        return <Database className="w-3.5 h-3.5 text-sky-600" />;
      case "PostgreSQL":
        return <Database className="w-3.5 h-3.5 text-indigo-500" />;
      case "ETL Pipelines":
        return <Workflow className="w-3.5 h-3.5 text-teal-500" />;
      case "Power BI":
        return <BarChart3 className="w-3.5 h-3.5 text-amber-500" />;
      case "Excel":
        return <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />;
      default:
        return null;
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/4 right-5 w-96 h-96 bg-sky-200/20 dark:bg-sky-900/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-teal-200/20 dark:bg-teal-900/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Bio */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start">
            {/* Small uppercase greeting label */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/60 border border-sky-100 dark:border-sky-800/80 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
              <span className="text-[11px] font-bold tracking-widest text-sky-700 dark:text-sky-300 uppercase">
                HELLO, I&apos;M
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-2">
              Bonsa Desalegn
            </h1>

            {/* Highlighted Role Title in Electric Cyan/Teal */}
            <div className="text-2xl sm:text-3xl xl:text-4xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-sky-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
              Data Analyst &amp; Data Engineer
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed mb-8">
              {profileData.bioHero}
            </p>

            {/* Compact Core Skills Badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-8">
              {profileData.heroSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xs transition-all duration-200 select-none text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200"
                >
                  {getToolIcon(skill.name)}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="group flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-slate-900 hover:bg-slate-800 dark:bg-sky-600 dark:hover:bg-sky-500 shadow-sm transition-all duration-200 active:scale-95"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/80 shadow-2xs transition-all duration-200 active:scale-95"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-6 pt-2 border-t border-slate-200/70 dark:border-slate-800/70 w-full">
              <a
                href={profileData.socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                <span>GitHub</span>
              </a>

              <a
                href={profileData.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-sky-600" />
                <span>LinkedIn</span>
              </a>

              <a
                href={profileData.socials.email.url}
                className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-teal-600" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Analytics Illustration & Laptop Mockup */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center items-center">
            <HeroDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}
