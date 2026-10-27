"use client";

import React, { useEffect } from "react";
import { profileData } from "@/data/profile";
import { DataEngineeringGraphic } from "./DataEngineeringGraphic";
import { X, GraduationCap, MapPin, TrendingUp, CheckCircle2, Award, BookOpen, Compass } from "lucide-react";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AboutModal({ isOpen, onClose }: AboutModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 shrink-0">
              <DataEngineeringGraphic size="sm" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                About Bonsa Desalegn
              </h3>
              <p className="text-xs text-sky-600 dark:text-sky-400 font-medium">
                Software Engineering Graduate &bull; Data Analyst
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto max-h-[75vh] space-y-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {/* Engineering Foundation */}
          <div className="space-y-2">
            <h4 className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-base">
              <GraduationCap className="w-5 h-5 text-sky-600 dark:text-sky-400" />
              <span>Software Engineering Foundation</span>
            </h4>
            <p>
              I graduated with a <strong>BSc in Software Engineering from Arba Minch University</strong>. This academic training provided me with strong computer science principles, database modeling skills, object-oriented programming, and computational thinking.
            </p>
            <p>
              Rather than viewing data in isolation, my engineering background allows me to understand full data architectures — from how data is created at the application layer to relational normalization, ETL pipelines, and executive dashboards.
            </p>
          </div>

          {/* Analytical Philosophy */}
          <div className="space-y-2">
            <h4 className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-base">
              <Compass className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              <span>My Analytical Philosophy</span>
            </h4>
            <p>
              I believe that <strong>the best analytics don&apos;t just describe what happened; they explain why and what to do next</strong>. A beautiful dashboard is useless if it doesn&apos;t answer real commercial questions or empower faster decision-making.
            </p>
          </div>

          {/* Core Competencies */}
          <div className="space-y-3">
            <h4 className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-base">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span>Key Areas of Focus</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {profileData.interests.map((interest, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200"
                >
                  &bull; {interest}
                </div>
              ))}
            </div>
          </div>

          {/* Location & Contact Notice */}
          <div className="p-4 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-100 dark:border-sky-800 text-xs text-sky-900 dark:text-sky-200">
            <strong>Location:</strong> Based in <strong>Addis Ababa, Ethiopia</strong>, open to local and remote roles, contract consulting, and high-impact analytics projects.
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-sky-600 dark:hover:bg-sky-500 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
