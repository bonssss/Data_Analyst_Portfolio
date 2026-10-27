"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projectsData } from "@/data/projects";
import { Project } from "@/types";
import { ProjectModal } from "./ProjectModal";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SpotlightCard } from "./reactbits/SpotlightCard";

export function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filterTool, setFilterTool] = useState<string>("All");

  const filterOptions = ["All", "Power BI", "Python", "SQL", "Excel"];

  const filteredProjects =
    filterTool === "All"
      ? projectsData
      : projectsData.filter((p) =>
          p.tools.some((t) => t.toLowerCase().includes(filterTool.toLowerCase()))
        );

  const getBadgeClass = (variant: string) => {
    switch (variant) {
      case "cyan":
        return "bg-teal-50 dark:bg-teal-950/80 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800";
      case "blue":
        return "bg-sky-50 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800";
      case "purple":
        return "bg-purple-50 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800";
      default:
        return "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700";
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-50/50 dark:bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-200/80 dark:border-slate-800/80 gap-6">
          <div className="space-y-2 max-w-2xl">
            {/* Uppercase Label */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/60 border border-sky-100 dark:border-sky-800/80">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
              <span className="text-[11px] font-bold tracking-widest text-sky-700 dark:text-sky-300 uppercase">
                MY PROJECTS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Featured Projects
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              A collection of data analysis and visualization projects where I explore real datasets, clean data, and uncover valuable insights.
            </p>
          </div>

          {/* Filter Pills and View All */}
          <div className="flex flex-wrap items-center gap-2">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setFilterTool(opt)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  filterTool === opt
                    ? "bg-slate-900 text-white dark:bg-sky-600 dark:text-white shadow-xs"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* 4-Project Grid matching the mockup */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project, idx) => (
            <SpotlightCard
              key={project.id}
              className="group flex flex-col justify-between h-full bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Visual Preview Image */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-800 cursor-pointer group-hover:border-sky-500/30 transition-colors"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle hover overlay badge */}
                  <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-white shadow-md">
                      Inspect Study
                    </span>
                  </div>
                </div>

                {/* Badge Tag */}
                <div>
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-md text-[11px] font-bold border ${getBadgeClass(
                      project.badge.variant
                    )}`}
                  >
                    {project.badge.text}
                  </span>
                </div>

                {/* Project Title */}
                <h3
                  onClick={() => setSelectedProject(project)}
                  className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors cursor-pointer leading-snug"
                >
                  {project.title}
                </h3>

                {/* Tools string */}
                <p className="text-xs font-medium text-slate-400 dark:text-slate-500">
                  {project.tools.join("  •  ")}
                </p>

                {/* Short Description */}
                <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {project.shortDescription}
                </p>
              </div>

              {/* View Project Link Button */}
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="group/btn inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
