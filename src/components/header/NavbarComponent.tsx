"use client";

import Link from "next/link";
import { navLink } from "./menu";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function NavbarComponent() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme: Load from localStorage or system
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (
        saved === "dark" ||
        (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        setTheme("dark");
        document.documentElement.classList.add("dark");
      } else {
        setTheme("light");
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  // Theme: Toggle handler
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-slate-200/50 bg-white/80 shadow-lg backdrop-blur-md dark:border-slate-700/50 dark:bg-slate-900/80"
          : "bg-white/60 backdrop-blur-sm dark:bg-slate-900/60"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="group flex items-center space-x-2">
              <div className="flex h-8 w-8 transform items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-blue-600 transition-transform group-hover:scale-110">
                <span className="text-sm font-bold text-white">M</span>
              </div>
              <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-xl font-bold text-transparent lg:text-2xl dark:from-slate-100 dark:to-slate-400">
                NextSpring
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-1 md:flex">
            {navLink.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className={`relative rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  pathname === item.path
                    ? "bg-green-50 text-green-600 dark:bg-green-950/50 dark:text-green-400"
                    : "text-slate-700 hover:bg-slate-50 hover:text-green-600 dark:text-slate-300 dark:hover:bg-slate-800/50 dark:hover:text-green-400"
                }`}
              >
                {item.name}
                {pathname === item.path && (
                  <div className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 transform rounded-full bg-green-600 dark:bg-green-400"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden items-center space-x-4 md:flex">
            <button
              className="rounded-xl p-2 text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                // Sun icon for light mode
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="5"
                    stroke="currentColor"
                    strokeWidth={2}
                  />
                  <path
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                  />
                </svg>
              ) : (
                // Moon icon for dark mode
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 118.646 3.646 7 7 0 0020.354 15.354z"
                  />
                </svg>
              )}
            </button>
            <Link
              href="#contact"
              className="group relative inline-flex items-center rounded-xl bg-gradient-to-r from-green-600 to-green-700 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:from-green-700 hover:to-green-800 hover:shadow-xl hover:shadow-green-500/25"
            >
              Get Started
              <svg
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              className="rounded-xl p-2 text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="5"
                    stroke="currentColor"
                    strokeWidth={2}
                  />
                  <path
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 118.646 3.646 7 7 0 0020.354 15.354z"
                  />
                </svg>
              )}
            </button>
            <button
              onClick={toggleMobileMenu}
              className="rounded-xl p-2 text-slate-700 transition-colors hover:bg-slate-100 focus:outline-none dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <svg
                className={`h-6 w-6 transition-transform duration-200 ${
                  isMobileMenuOpen ? "rotate-90" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`transition-all duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="border-t border-slate-200/50 bg-white/95 px-4 py-6 backdrop-blur-md dark:border-slate-700/50 dark:bg-slate-900/95">
          <div className="space-y-2">
            {navLink.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className={`block rounded-xl px-4 py-3 text-base font-medium transition-all duration-200 ${
                  pathname === item.path
                    ? "bg-green-50 text-green-600 dark:bg-green-950/50 dark:text-green-400"
                    : "text-slate-700 hover:bg-slate-50 hover:text-green-600 dark:text-slate-300 dark:hover:bg-slate-800/50 dark:hover:text-green-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="mt-6 border-t border-slate-200 pt-6 dark:border-slate-700">
            <Link
              href="#contact"
              className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-green-600 to-green-700 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:from-green-700 hover:to-green-800"
            >
              Get Started
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
