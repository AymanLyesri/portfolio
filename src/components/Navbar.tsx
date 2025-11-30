"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);

      // Calculate scroll progress
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled_progress = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled_progress);

      // Detect active section
      const sections = ["about", "experience", "projects", "skills", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      setActiveSection(current || "");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about", icon: "👤" },
    { name: "Experience", href: "#experience", icon: "💼" },
    { name: "Projects", href: "#projects", icon: "🚀" },
    { name: "Skills", href: "#skills", icon: "⚡" },
    { name: "Contact", href: "#contact", icon: "📧" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-black/30 via-black/20 to-white/30 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-2xl mt-1"
            : "bg-transparent mt-1"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Name with Gradient */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="group relative text-xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 transition-all duration-300"
              >
                <span className="relative">
                  Portfolio
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                </span>
              </a>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/AymanLyesri/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
                  aria-label="View source code"
                >
                  <svg
                    className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/AymanLyesri/portfolio/stargazers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105"
                  aria-label="Star on GitHub"
                >
                  <svg
                    className="w-4 h-4 text-gray-400 group-hover:text-yellow-400 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-xs font-medium text-gray-400 group-hover:text-yellow-400 transition-colors">
                    Star
                  </span>
                </a>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-2 py-2 border border-white/10">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group ${
                      isActive
                        ? "text-white bg-white/20 shadow-lg"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-xs">{item.icon}</span>
                      <span>{item.name}</span>
                    </span>
                    {isActive && (
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative w-10 h-10 text-gray-300 hover:text-white transition-colors focus:outline-none group"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors" />
              <div className="relative flex flex-col items-center justify-center w-full h-full gap-1.5">
                <span
                  className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-black/80 backdrop-blur-xl border-t border-white/10">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                      isActive
                        ? "text-white bg-white/20 shadow-lg transform scale-105"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                    onClick={closeMobileMenu}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.name}</span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
