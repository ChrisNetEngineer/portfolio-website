"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg z-50 border-b border-gray-200 dark:border-slate-700 shadow-sm">
      <div className="max-w-3xl mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
          ChrisNetEngineer
        </Link>

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden md:flex space-x-4">
          <Link
            href="#about"
            className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300 font-medium"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300 font-medium"
          >
            Projects
          </Link>
          <Link
            href="#experience"
            className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300 font-medium"
          >
            Experience
          </Link>
          <Link
            href="#contact"
            className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300 font-medium"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Button - Shown only on mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col space-y-1.5 focus:outline-none z-30"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-gray-800 dark:bg-gray-200 transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-800 dark:bg-gray-200 transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-800 dark:bg-gray-200 transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu - Collapsed by default, shown when hamburger is clicked */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 space-y-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-gray-200 dark:border-slate-700">
          <Link
            href="#about"
            onClick={closeMenu}
            className="block text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors py-2 font-medium"
          >
            About
          </Link>
          <Link
            href="#projects"
            onClick={closeMenu}
            className="block text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors py-2 font-medium"
          >
            Projects
          </Link>
          <Link
            href="#experience"
            onClick={closeMenu}
            className="block text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors py-2 font-medium"
          >
            Experience
          </Link>
          <Link
            href="#contact"
            onClick={closeMenu}
            className="block text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors py-2 font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
