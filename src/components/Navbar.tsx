"use client";

import React, { useState, useEffect } from "react";
import { MonogramLogo } from "./MonogramLogo";
import { ThemeToggle } from "./ThemeToggle";
import { Download, Menu, X } from "lucide-react";
import { profileData } from "@/data/profile";

const navLinks = [
  { name: "Home", href: "#hero", id: "hero" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "About", href: "#about", id: "about" },
  { name: "Contact", href: "#contact", id: "contact" },
];

interface NavbarProps {
  onOpenResume?: () => void;
}

export function Navbar({ onOpenResume }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.id);
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 dark:bg-slate-950/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-xs"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <MonogramLogo />

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 rounded-lg ${
                    isActive
                      ? "text-sky-600 dark:text-sky-400 font-semibold"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/60"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-sky-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />

            {/* Download CV Button */}
            <a
              href={profileData.cvUrl}
              download="Bonsa_Desalegn_Data_Analyst_CV.pdf"
              onClick={() => {
                if (onOpenResume) {
                  // If resume modal handler provided, allow quick preview option or standard download
                }
              }}
              className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 shadow-xs hover:shadow-sm transition-all duration-200 active:scale-95"
            >
              <Download className="w-4 h-4 text-slate-600 dark:text-slate-300 transition-transform group-hover:-translate-y-0.5" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pt-2 pb-6 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  activeSection === link.id
                    ? "bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 font-semibold"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900"
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
              <a
                href={profileData.cvUrl}
                download="Bonsa_Desalegn_Data_Analyst_CV.pdf"
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold rounded-xl text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
