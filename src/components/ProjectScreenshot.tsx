"use client";

import { useState } from "react";

interface ProjectScreenshotProps {
  url: string;
  projectTitle: string;
  className?: string;
}

export default function ProjectScreenshot({
  url,
  projectTitle,
  className = "",
}: ProjectScreenshotProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 2;

  const screenshotUrl = `/api/screenshot?url=${encodeURIComponent(
    url
  )}&width=1280&height=720&format=jpeg&quality=50&t=${retryCount}`;

  const handleImageLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleImageError = () => {
    if (retryCount < maxRetries) {
      console.log(
        `[Screenshot] Retry ${retryCount + 1}/${maxRetries} for ${projectTitle}`
      );
      setRetryCount((prev) => prev + 1);
    } else {
      console.error(
        `[Screenshot] Max retries (${maxRetries}) reached for ${projectTitle}, disabling screenshot`
      );
      setIsLoading(false);
      setHasError(true);
    }
  };

  if (hasError) {
    return null;
  }

  return (
    <div
      className={`group relative ${className} ${isLoading ? "h-auto" : "mb-6"}`}
    >
      {isLoading && (
        <div className="flex items-center justify-center py-8">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            <span className="text-xs text-gray-400">
              Loading live screenshot...
            </span>
          </div>
        </div>
      )}

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative w-full aspect-video rounded-lg overflow-hidden bg-black/40 border border-white/10 cursor-pointer hover:border-white/30 transition-all duration-300 block ${
          isLoading ? "opacity-0 h-0 overflow-hidden" : "opacity-100"
        }`}
      >
        <img
          src={screenshotUrl}
          alt={`${projectTitle} screenshot`}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-opacity duration-500"
          onLoad={handleImageLoad}
          onError={handleImageError}
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex flex-col items-center gap-2 text-white">
            <svg
              className="w-8 h-8"
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
            <span className="text-sm font-medium">View Full Website</span>
          </div>
        </div>
      </a>
    </div>
  );
}
