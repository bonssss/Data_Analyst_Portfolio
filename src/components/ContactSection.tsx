"use client";

import React, { useState } from "react";
import { profileData } from "@/data/profile";
import { Mail, MapPin, Send, ArrowRight, CheckCircle2, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import confetti from "canvas-confetti";

export function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Full-Time Role",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsLoading(true);
    // Simulate instantaneous dispatch
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 75,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#0284c7", "#0d9488", "#38bdf8", "#10b981"],
        });
      } catch {
        // Safe fallback
      }
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({ name: "", email: "", projectType: "Full-Time Role", message: "" });
    setIsModalOpen(false);
  };

  return (
    <section id="contact" className="relative pt-16 pb-28 overflow-hidden">
      {/* Decorative Wavy Vector graphic in bottom-left (matching mockup) */}
      <div className="absolute bottom-0 left-0 w-full sm:w-[60%] pointer-events-none opacity-40 dark:opacity-20 -z-10">
        <svg
          viewBox="0 0 700 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M 0 160 C 150 140 250 240 450 170 C 580 125 650 190 750 210 L 750 240 L 0 240 Z"
            fill="url(#waveGrad1)"
          />
          <path
            d="M 0 180 C 120 170 280 230 420 190 C 560 150 630 210 750 230 L 750 240 L 0 240 Z"
            fill="url(#waveGrad2)"
          />
          <defs>
            <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#bae6fd" />
              <stop offset="60%" stopColor="#99f6e4" />
              <stop offset="100%" stopColor="#e0f2fe" />
            </linearGradient>
            <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#2dd4bf" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading and Send Message CTA */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/60 border border-sky-100 dark:border-sky-800/80">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
              <span className="text-[11px] font-bold tracking-widest text-sky-700 dark:text-sky-300 uppercase">
                LET&apos;S CONNECT
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Get In Touch
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
              I&apos;m open to new opportunities, collaborations, and interesting data projects.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-slate-900 hover:bg-slate-800 dark:bg-sky-600 dark:hover:bg-sky-500 shadow-sm transition-all duration-200 active:scale-95"
              >
                <span>Send Message</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Verified Contact Details List (matching mockup) */}
          <div className="lg:col-span-5 space-y-3.5 border-t lg:border-t-0 lg:border-l border-slate-200/80 dark:border-slate-800/80 pt-8 lg:pt-0 lg:pl-10">
            {/* Email */}
            <a
              href={profileData.socials.email.url}
              className="group flex items-center gap-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
            >
              <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <span className="font-medium">{profileData.socials.email.address}</span>
            </a>

            {/* Location */}
            <div className="flex items-center gap-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="font-medium">{profileData.location}</span>
            </div>

            {/* LinkedIn */}
            <a
              href={profileData.socials.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
            >
              <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                <LinkedinIcon className="w-4 h-4" />
              </div>
              <span className="font-medium truncate">{profileData.socials.linkedin.url.replace("https://", "")}</span>
            </a>

            {/* GitHub */}
            <a
              href={profileData.socials.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
            >
              <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                <GithubIcon className="w-4 h-4" />
              </div>
              <span className="font-medium truncate">{profileData.socials.github.url.replace("https://", "")}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Contact Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="fixed inset-0" onClick={() => setIsModalOpen(false)} />

          <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-10 animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Send a Message to Bonsa
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Direct inquiry to bonsa.desalegn@gmail.com
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content / Form */}
            <div className="p-6">
              {isSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    Message Prepared!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xs mx-auto">
                    Thank you for reaching out, {formData.name}. You can also email directly at{" "}
                    <strong>{profileData.socials.email.address}</strong>.
                  </p>
                  <div className="pt-3">
                    <button
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-900 dark:bg-sky-600"
                    >
                      Done
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Inquiry Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                    >
                      <option value="Full-Time Role">Full-Time Data Analyst Opportunity</option>
                      <option value="Dashboard Freelance">Power BI / Excel Dashboard Project</option>
                      <option value="Consulting">Data Analytics Consulting</option>
                      <option value="General">General Collaboration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about the dataset, dashboard, or opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-slate-900 hover:bg-slate-800 dark:bg-sky-600 dark:hover:bg-sky-500 transition-colors shadow-xs disabled:opacity-50"
                  >
                    {isLoading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
