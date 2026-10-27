"use client";

import React, { useState, useEffect } from "react";
import { Project } from "@/types";
import { X, ExternalLink, Check, Copy, TrendingUp, Layers, Lightbulb, Code2 } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import Image from "next/image";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "methodology" | "insights" | "code">("overview");
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.codeSnippet?.code) {
      navigator.clipboard.writeText(project.codeSnippet.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="flex items-start justify-between p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="space-y-1.5 pr-6">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                {project.badge.text}
              </span>
              <span className="text-xs text-slate-400 font-mono">{project.date} Case Study</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
              Tools & Stack: {project.tools.join(" • ")}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center px-6 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-x-auto">
          <button
            onClick={() => setActiveTab("overview")}
            className={`flex items-center gap-2 py-3 px-3 text-sm font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === "overview"
                ? "border-sky-500 text-sky-600 dark:text-sky-400"
                : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300"
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Overview & Problem</span>
          </button>

          <button
            onClick={() => setActiveTab("methodology")}
            className={`flex items-center gap-2 py-3 px-3 text-sm font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === "methodology"
                ? "border-sky-500 text-sky-600 dark:text-sky-400"
                : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300"
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>Methodology & Pipeline</span>
          </button>

          <button
            onClick={() => setActiveTab("insights")}
            className={`flex items-center gap-2 py-3 px-3 text-sm font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === "insights"
                ? "border-sky-500 text-sky-600 dark:text-sky-400"
                : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300"
            }`}
          >
            <Lightbulb className="w-4 h-4" />
            <span>Key Findings & Impact</span>
          </button>

          {project.codeSnippet && (
            <button
              onClick={() => setActiveTab("code")}
              className={`flex items-center gap-2 py-3 px-3 text-sm font-semibold border-b-2 whitespace-nowrap transition-colors ${
                activeTab === "code"
                  ? "border-sky-500 text-sky-600 dark:text-sky-400"
                  : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300"
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span>Analytical Code</span>
            </button>
          )}
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Tab 1: Overview */}
          {activeTab === "overview" && (
            <div className="space-y-6 animate-in fade-in-50">
              {/* Preview Banner */}
              <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* Key Metrics Grid */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Key Metrics & Quantified Impact
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {project.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800"
                    >
                      <span className="block text-xs text-slate-500 dark:text-slate-400">
                        {m.label}
                      </span>
                      <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                        {m.value}
                      </div>
                      {m.trend && (
                        <span className="inline-block text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">
                          {m.trend}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Executive Overview */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  Executive Summary
                </h4>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.overview}
                </p>
              </div>

              {/* Business Problem Statement */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 mb-1">
                  The Problem Statement
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>
            </div>
          )}

          {/* Tab 2: Methodology */}
          {activeTab === "methodology" && (
            <div className="space-y-6 animate-in fade-in-50">
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  Analytical Process & Engineering Workflow
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                  Structured execution framework designed to ensure reproducibility and statistical validity.
                </p>

                <div className="space-y-4">
                  {project.methodology.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800"
                    >
                      <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 font-mono font-bold text-xs shrink-0 mt-0.5">
                        0{idx + 1}
                      </div>
                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Insights & Impact */}
          {activeTab === "insights" && (
            <div className="space-y-6 animate-in fade-in-50">
              {/* Key Findings */}
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-3">
                  Critical Data Discoveries
                </h4>
                <ul className="space-y-3">
                  {project.keyFindings.map((finding, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-sky-50/60 dark:bg-sky-950/30 border border-sky-100 dark:border-sky-900/50"
                    >
                      <span className="w-2 h-2 rounded-full bg-sky-500 mt-2 shrink-0" />
                      <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {finding}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Business Value Created */}
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-3">
                  Business Value & Recommendations
                </h4>
                <ul className="space-y-3">
                  {project.businessImpact.map((impact, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                      <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {impact}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Tab 4: Code Snippet */}
          {activeTab === "code" && project.codeSnippet && (
            <div className="space-y-4 animate-in fade-in-50">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {project.codeSnippet.title}
                  </h4>
                  <span className="text-xs text-slate-500 font-mono">
                    Language: {project.codeSnippet.language.toUpperCase()}
                  </span>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 transition-colors"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Pre Container */}
              <div className="relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800 text-slate-200">
                <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 bg-slate-900/80 text-xs font-mono text-slate-400">
                  <span>{project.codeSnippet.language}</span>
                  <span>reproducible analytical script</span>
                </div>
                <pre className="p-4 overflow-x-auto text-xs font-mono leading-relaxed text-slate-300">
                  <code>{project.codeSnippet.code}</code>
                </pre>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with External Links */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repo</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 transition-colors shadow-xs"
              >
                <span>Live Dashboard</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
