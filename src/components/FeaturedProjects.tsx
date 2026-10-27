"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projectsData } from "@/data/projects";
import { Project } from "@/types";
import { ProjectModal } from "./ProjectModal";
import { ArrowRight } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { SpotlightCard } from "./reactbits/SpotlightCard";

export function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Analytics", "Engineering"];

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  const getBadgeClass = (category: string) => {
    switch (category) {
      case "Engineering":
        return "bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800";
      case "Analytics":
      default:
        return "bg-sky-50 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800";
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-50/50 dark:bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-200/80 dark:border-slate-800/80 gap-6">
          <div className="space-y-2 max-w-2xl">
            {/* Small uppercase category label matching mockup */}
            <div className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-sky-600 dark:text-sky-400 uppercase">
              FEATURED PROJECTS
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              My Projects
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Real-world data solutions, from analysis and visualization to data pipelines and automation.
            </p>
          </div>

          {/* Filter Pills matching the mockup: All | Analytics | Engineering */}
          <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800/80 p-1 rounded-full border border-slate-200/80 dark:border-slate-700/80">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-slate-900 text-white dark:bg-sky-600 dark:text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 4-Project Grid matching the mockup */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <SpotlightCard
              key={project.id}
              className="group flex flex-col justify-between h-full bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="space-y-3.5">
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
                      View Study
                    </span>
                  </div>
                </div>

                {/* Badge Tag & Title */}
                <div className="flex items-center justify-between gap-2">
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-base font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors cursor-pointer leading-snug truncate"
                  >
                    {project.title}
                  </h3>
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold border shrink-0 ${getBadgeClass(
                      project.category
                    )}`}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Tools string */}
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {project.tools.join("  •  ")}
                </p>

                {/* Short Description */}
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {project.shortDescription}
                </p>
              </div>

              {/* Bottom Actions: View Project → and GitHub */}
              <div className="pt-3 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="group/btn inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
                    <span>GitHub</span>
                  </a>
                )}
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
