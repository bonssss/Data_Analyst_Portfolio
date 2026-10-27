"use client";

import React, { useEffect } from "react";
import { profileData } from "@/data/profile";
import { X, Download } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
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

      <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-10 animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Curriculum Vitae Preview
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Bonsa Desalegn &bull; Data Analyst
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={profileData.cvUrl}
              download="Bonsa_Desalegn_Data_Analyst_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          {/* Header Banner */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
            <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              BONSA DESALEGN
            </h1>
            <p className="text-xs font-semibold text-sky-600 dark:text-sky-400 mt-0.5">
              DATA ANALYST &bull; DATA ENGINEERING &bull; SOFTWARE ENGINEERING GRADUATE
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400 mt-2">
              <span>📍 Addis Ababa, Ethiopia</span>
              <span>✉️ bonsa.desalegn@gmail.com</span>
              <span>🔗 linkedin.com/in/bonsa-desalegn-90175b257/</span>
              <span>🐙 github.com/bonssss</span>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-bold tracking-wider uppercase text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="leading-relaxed">
              Analytical and detail-driven Data Analyst &amp; Data Engineer with a solid Software Engineering foundation. Skilled at transforming raw transactional databases into actionable executive dashboards, automated ETL pipelines, and statistical insights using Python, SQL, PostgreSQL, Power BI, and Excel. Proven ability to bridge engineering precision with commercial impact.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold tracking-wider uppercase text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-1 mb-2">
              Education
            </h2>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">
                  Bachelor of Science in Software Engineering
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Software Engineering Degree &bull; Addis Ababa, Ethiopia
                </p>
              </div>
              <span className="text-slate-400 font-mono text-xs">Graduated</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Coursework: Database Management Systems, Data Structures & Algorithms, Object-Oriented Software Design, Probability & Statistics, Web Technologies.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold tracking-wider uppercase text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-1 mb-2">
              Technical Skillset
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <strong className="text-slate-900 dark:text-white">Languages & DBs:</strong> Python, SQL, PostgreSQL, MySQL
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white">Libraries:</strong> Pandas, NumPy, Matplotlib, Seaborn
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white">BI & Visualization:</strong> Power BI (DAX, Star Schema), Excel (Pivot, XLOOKUP)
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white">Tools & Workflow:</strong> Jupyter Notebook, Git, GitHub, VS Code
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-bold tracking-wider uppercase text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-1 mb-2">
              Key Analytics Projects
            </h2>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between">
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    Sales Performance Analysis
                  </h3>
                  <span className="text-slate-400 text-xs">Power BI &bull; SQL</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  Extracted 50K+ PostgreSQL records, engineered Star Schema and DAX measures, identifying category margin drivers ($125K total revenue, 18.6% margin).
                </p>
              </div>

              <div>
                <div className="flex justify-between">
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    Exploratory Data Analysis Pipeline
                  </h3>
                  <span className="text-slate-400 text-xs">Python &bull; Pandas &bull; Matplotlib</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  Engineered automated feature extraction and missingness imputation routines, identifying key behavioral correlations and reducing data prep time by 60%.
                </p>
              </div>

              <div>
                <div className="flex justify-between">
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    HR Analytics Dashboard
                  </h3>
                  <span className="text-slate-400 text-xs">Power BI &bull; Excel</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  Analyzed workforce retention across 1,470 staff members; constructed dynamic KPI risk indicators revealing the correlation between overtime and early attrition.
                </p>
              </div>

              <div>
                <div className="flex justify-between">
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    Customer Behavior & RFM Segmentation
                  </h3>
                  <span className="text-slate-400 text-xs">SQL &bull; Python</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  Calculated Recency, Frequency, and Monetary percentiles using SQL NTILE functions, clustering 43,000+ accounts into Champions, Loyal, and At-Risk segments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
