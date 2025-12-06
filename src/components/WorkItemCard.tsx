"use client";

import { WorkItem } from "@/types/portfolio";
import { useState } from "react";
import ReadmeModal from "./ReadmeModal";
import AnimatedSection from "./AnimatedSection";
import ProjectScreenshot from "./ProjectScreenshot";

interface WorkItemCardProps {
  item: WorkItem;
  type: "experience" | "project";
}

export default function WorkItemCard({ item, type }: WorkItemCardProps) {
  const [showReadme, setShowReadme] = useState(false);
  const [showAllQuotes, setShowAllQuotes] = useState(false);

  return (
    <AnimatedSection
      hover="spotlight"
      className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-white/30 hover:bg-black/60 transition-all duration-300 overflow-hidden"
    >
      {/* Project Screenshot Preview - Only for projects with live URLs */}
      {type === "project" && item.liveUrl && (
        <ProjectScreenshot url={item.liveUrl} projectTitle={item.title} />
      )}

      <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              {item.title}
            </h3>
            {type === "project" && item.stars !== undefined && (
              <div className="flex items-center gap-1 text-yellow-400">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-medium">{item.stars}</span>
              </div>
            )}
          </div>
          <p className="text-gray-400 text-sm">{item.organization}</p>
        </div>
        <span className="text-xs text-gray-500 md:text-right">{item.date}</span>
      </div>

      <p className="relative text-gray-300 text-sm leading-relaxed mb-6">
        {item.description}
      </p>

      {item.highlights && item.highlights.length > 0 && (
        <ul className="relative mb-6 space-y-2">
          {item.highlights.map((highlight, idx) => (
            <li key={idx} className="text-sm text-gray-400 flex items-start">
              <span className="text-white mr-3 mt-0.5">·</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      )}

      {item.quotes && item.quotes.length > 0 && (
        <div className="relative mb-6 space-y-4">
          {item.quotes
            .slice(0, showAllQuotes ? item.quotes.length : 2)
            .map((testimonial, idx) => (
              <div
                key={idx}
                className="p-4 bg-white/5 border-l-4 border-white/30 rounded-r-lg"
              >
                <svg
                  className="w-6 h-6 text-white/20 mb-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-300 italic text-sm leading-relaxed mb-3">
                  "{testimonial.quote}"
                </p>
                <div className="flex flex-col">
                  <span className="text-white font-medium text-sm">
                    {testimonial.name}
                  </span>
                  <span className="text-gray-400 text-xs">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            ))}
          {item.quotes.length > 2 && (
            <div className="flex justify-center">
              <button
                onClick={() => setShowAllQuotes(!showAllQuotes)}
                className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 px-4 py-2 bg-white/5 rounded border border-white/10 hover:bg-white/10"
              >
                {showAllQuotes ? (
                  <>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                    Show Less
                  </>
                ) : (
                  <>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    Show More ({item.quotes.length - 2} more)
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      )}

      <div className="relative flex flex-wrap gap-2 mb-6">
        {item.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1.5 text-xs font-medium bg-white/5 text-gray-300 rounded border border-white/10 hover:bg-white/10 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>

      {(item.githubUrl ||
        item.liveUrl ||
        item.link ||
        item.readme ||
        item.companyUrl) && (
        <div className="relative flex gap-4 pt-4 border-t border-white/10">
          {item.companyUrl && (
            <a
              href={item.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              Website
            </a>
          )}
          {item.githubUrl && (
            <a
              href={item.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Code
            </a>
          )}
          {item.liveUrl && (
            <a
              href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Live
            </a>
          )}
          {item.readme && type === "project" && (
            <button
              onClick={() => setShowReadme(true)}
              className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              README
            </button>
          )}
          {item.link && !item.githubUrl && !item.liveUrl && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Learn More
            </a>
          )}
        </div>
      )}

      {/* README Modal */}
      {item.readme && (
        <ReadmeModal
          isOpen={showReadme}
          onClose={() => setShowReadme(false)}
          readme={item.readme}
          projectTitle={item.title}
        />
      )}
    </AnimatedSection>
  );
}
