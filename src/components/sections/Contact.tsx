"use client";

import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import { SocialLink } from "@/types/portfolio";
import { useState } from "react";

interface ContactProps {
  email: string;
  socialLinks: SocialLink[];
}

const iconMap: Record<string, React.ReactElement> = {
  github: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  linkedin: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  twitter: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
};

const socialColors: Record<
  string,
  { gradient: string; shadow: string; hover: string }
> = {
  github: {
    gradient: "from-gray-600 to-gray-800",
    shadow: "shadow-gray-500/50",
    hover: "hover:from-gray-500 hover:to-gray-700",
  },
  linkedin: {
    gradient: "from-blue-600 to-blue-800",
    shadow: "shadow-blue-500/50",
    hover: "hover:from-blue-500 hover:to-blue-700",
  },
  twitter: {
    gradient: "from-sky-500 to-blue-600",
    shadow: "shadow-sky-500/50",
    hover: "hover:from-sky-400 hover:to-blue-500",
  },
};

export default function Contact({ email, socialLinks }: ContactProps) {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section id="contact" className="px-6 flex justify-center pb-20">
      <div className="w-full max-w-5xl">
        <AnimatedSection>
          <SectionHeader
            title="Get In Touch"
            subtitle="Let's work together on something great"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Contact Card */}
          <AnimatedSection
            delay={200}
            hover="spotlight"
            className="relative bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 overflow-hidden"
          >
            <div className="relative">
              {/* Decorative Icon */}
              <div className="mb-6">
                <div className="inline-flex p-4 bg-white/10 rounded-2xl">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Start a Project?
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to collaborate on innovative solutions.
              </p>

              {/* Email Button */}
              <div className="space-y-4">
                <a
                  href={`mailto:${email}`}
                  className="group flex items-center gap-3 px-6 py-4 bg-white text-black rounded-xl font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
                >
                  <svg
                    className="w-5 h-5 group-hover:rotate-12 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="flex-1 text-left">{email}</span>
                  <svg
                    className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>

                <button
                  onClick={copyEmail}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white/5 text-white rounded-xl font-medium border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  {emailCopied ? (
                    <>
                      <svg
                        className="w-5 h-5 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-green-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </AnimatedSection>

          {/* Social Links Card */}
          <AnimatedSection
            delay={300}
            hover="glow"
            className="relative bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 overflow-hidden"
          >
            <div className="relative">
              {/* Decorative Icon */}
              <div className="mb-6">
                <div className="inline-flex p-4 bg-white/10 rounded-2xl">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Connect With Me
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Follow me on social media for updates on my latest projects and
                tech insights.
              </p>

              {/* Social Links */}
              <div className="space-y-4 gap-4 flex flex-col">
                {socialLinks.map((link, index) => {
                  const colors = socialColors[link.icon] || socialColors.github;
                  return (
                    <AnimatedSection key={link.name} delay={400 + index * 100}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex items-center gap-4 px-6 py-4 bg-gradient-to-r ${colors.gradient} ${colors.hover} rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl ${colors.shadow}`}
                      >
                        <div className="group-hover:scale-110 transition-transform text-white">
                          {iconMap[link.icon] || iconMap.github}
                        </div>
                        <div className="flex-1">
                          <p className="text-white font-semibold">
                            {link.name}
                          </p>
                          <p className="text-white/70 text-sm">
                            @{link.url.split("/").pop()}
                          </p>
                        </div>
                        <svg
                          className="w-5 h-5 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </a>
                    </AnimatedSection>
                  );
                })}
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-sm text-gray-400 text-center">
                  Response time: Usually within 24 hours
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
