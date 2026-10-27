"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { SkillsAndAbout } from "@/components/SkillsAndAbout";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ResumeModal } from "@/components/ResumeModal";

export default function Home() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-slate-50/30 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      {/* Editorial Navigation */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Thin divider line */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <hr className="border-slate-200/70 dark:border-slate-800/70" />
        </div>

        {/* Featured Case Studies */}
        <FeaturedProjects />

        {/* Thin divider line */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <hr className="border-slate-200/70 dark:border-slate-800/70" />
        </div>

        {/* Skills & About Me Sections */}
        <SkillsAndAbout />

        {/* Thin divider line */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <hr className="border-slate-200/70 dark:border-slate-800/70" />
        </div>

        {/* Contact & Connect Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Online Resume Preview Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
