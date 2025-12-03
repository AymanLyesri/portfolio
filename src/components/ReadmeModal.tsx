"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

interface ReadmeModalProps {
  isOpen: boolean;
  onClose: () => void;
  readme: string;
  projectTitle: string;
}

export default function ReadmeModal({
  isOpen,
  onClose,
  readme,
  projectTitle,
}: ReadmeModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] bg-[#0d1117] border border-[#30363d] rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-8 py-5 bg-[#0d1117]/98 border-b border-[#30363d]">
          <div className="flex items-center gap-3">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
            </svg>
            <h2 className="text-xl font-semibold text-[#e6edf3]">
              {projectTitle}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-[#30363d] transition-colors text-gray-400 hover:text-white"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(92vh-88px)] px-8 py-8 bg-[#0d1117]">
          <article className="prose prose-invert prose-base max-w-none readme-content">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                // Headings with GitHub-style anchor links
                h1: ({ node, ...props }: any) => (
                  <h1
                    className="text-3xl font-semibold text-[#e6edf3] border-b border-[#30363d] pb-2 mb-4 mt-6"
                    {...props}
                  />
                ),
                h2: ({ node, ...props }: any) => (
                  <h2
                    className="text-2xl font-semibold text-[#e6edf3] border-b border-[#30363d] pb-2 mb-3 mt-6"
                    {...props}
                  />
                ),
                h3: ({ node, ...props }: any) => (
                  <h3
                    className="text-xl font-semibold text-[#e6edf3] mb-3 mt-6"
                    {...props}
                  />
                ),
                h4: ({ node, ...props }: any) => (
                  <h4
                    className="text-lg font-semibold text-[#e6edf3] mb-2 mt-4"
                    {...props}
                  />
                ),
                h5: ({ node, ...props }: any) => (
                  <h5
                    className="text-base font-semibold text-[#e6edf3] mb-2 mt-4"
                    {...props}
                  />
                ),
                h6: ({ node, ...props }: any) => (
                  <h6
                    className="text-sm font-semibold text-[#8b949e] mb-2 mt-4"
                    {...props}
                  />
                ),

                // Paragraphs
                p: ({ node, ...props }: any) => (
                  <p
                    className="text-[#e6edf3] mb-4 leading-relaxed"
                    {...props}
                  />
                ),

                // Links
                a: ({ node, ...props }: any) => (
                  <a
                    {...props}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#58a6ff] hover:underline font-normal no-underline"
                  />
                ),

                // Code blocks and inline code
                code({ node, inline, className, children, ...props }: any) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <div className="my-4 rounded-md overflow-hidden border border-[#30363d]">
                      <SyntaxHighlighter
                        style={vscDarkPlus}
                        language={match[1]}
                        PreTag="div"
                        customStyle={{
                          margin: 0,
                          padding: "16px",
                          background: "#161b22",
                          fontSize: "14px",
                          lineHeight: "1.5",
                        }}
                        {...props}
                      >
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>
                    </div>
                  ) : (
                    <code
                      className="bg-[#343942] text-[#e6edf3] px-1.5 py-0.5 rounded text-[85%] font-mono"
                      {...props}
                    >
                      {children}
                    </code>
                  );
                },

                // Blockquotes
                blockquote: ({ node, ...props }: any) => (
                  <blockquote
                    className="border-l-4 border-[#30363d] pl-4 py-1 text-[#8b949e] italic my-4 bg-[#161b22]/50"
                    {...props}
                  />
                ),

                // Lists
                ul: ({ node, ...props }: any) => (
                  <ul
                    className="list-disc list-inside text-[#e6edf3] mb-4 space-y-1 ml-4"
                    {...props}
                  />
                ),
                ol: ({ node, ...props }: any) => (
                  <ol
                    className="list-decimal list-inside text-[#e6edf3] mb-4 space-y-1 ml-4"
                    {...props}
                  />
                ),
                li: ({ node, children, ...props }: any) => {
                  // Check if this is a task list item
                  const content = String(children);
                  const isTask = content.match(/^\[( |x)\]/);

                  if (isTask) {
                    const isChecked = content.includes("[x]");
                    const text = content.replace(/^\[( |x)\]\s*/, "");
                    return (
                      <li
                        className="list-none flex items-start gap-2"
                        {...props}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          disabled
                          className="mt-1 rounded border-[#30363d] bg-[#161b22]"
                        />
                        <span>{text}</span>
                      </li>
                    );
                  }

                  return (
                    <li className="ml-2" {...props}>
                      {children}
                    </li>
                  );
                },

                // Tables
                table: ({ node, ...props }: any) => (
                  <div className="overflow-x-auto my-4">
                    <table
                      className="min-w-full border border-[#30363d] rounded-md overflow-hidden"
                      {...props}
                    />
                  </div>
                ),
                thead: ({ node, ...props }: any) => (
                  <thead className="bg-[#161b22]" {...props} />
                ),
                tbody: ({ node, ...props }: any) => (
                  <tbody className="bg-[#0d1117]" {...props} />
                ),
                tr: ({ node, ...props }: any) => (
                  <tr className="border-b border-[#30363d]" {...props} />
                ),
                th: ({ node, ...props }: any) => (
                  <th
                    className="px-4 py-2 text-left text-[#e6edf3] font-semibold border-r border-[#30363d] last:border-r-0"
                    {...props}
                  />
                ),
                td: ({ node, ...props }: any) => (
                  <td
                    className="px-4 py-2 text-[#e6edf3] border-r border-[#30363d] last:border-r-0"
                    {...props}
                  />
                ),

                // Images
                img: ({ node, ...props }: any) => (
                  <img
                    {...props}
                    className="rounded-md border border-[#30363d] max-w-full h-auto my-4"
                    loading="lazy"
                  />
                ),

                // Horizontal rule
                hr: ({ node, ...props }: any) => (
                  <hr
                    className="border-0 border-t border-[#30363d] my-6"
                    {...props}
                  />
                ),

                // Strong/Bold
                strong: ({ node, ...props }: any) => (
                  <strong className="font-semibold text-[#e6edf3]" {...props} />
                ),

                // Emphasis/Italic
                em: ({ node, ...props }: any) => (
                  <em className="italic text-[#e6edf3]" {...props} />
                ),
              }}
            >
              {readme}
            </ReactMarkdown>
          </article>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
