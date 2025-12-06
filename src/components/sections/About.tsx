"use client";

import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import { useEffect, useRef, useState } from "react";

interface AboutProps {
  bio: string;
}

export default function About({ bio }: AboutProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (card) {
        card.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 px-6 flex justify-center">
      <div className="w-full max-w-4xl">
        <AnimatedSection>
          <SectionHeader
            title="About Me"
            subtitle="Passionate about creating impactful software solutions"
          />
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div
            ref={cardRef}
            className="group relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-10 hover:border-white/30 hover:bg-black/60 transition-all duration-300 overflow-hidden"
          >
            {/* Spotlight effect */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.1), transparent 40%)`,
              }}
            />
            <div className="relative space-y-4">
              {bio.split(". ").map((sentence, idx) => {
                // Group sentences into paragraphs (approximately 3-4 sentences each)
                const sentencesPerParagraph = 3;
                const paragraphIndex = Math.floor(idx / sentencesPerParagraph);
                const isFirstInParagraph = idx % sentencesPerParagraph === 0;

                if (!isFirstInParagraph) return null;

                const paragraphSentences = bio
                  .split(". ")
                  .slice(idx, idx + sentencesPerParagraph)
                  .join(". ");

                return (
                  <p
                    key={idx}
                    className="text-base text-gray-300 leading-relaxed"
                  >
                    {paragraphSentences}
                    {!paragraphSentences.endsWith(".") ? "." : ""}
                  </p>
                );
              })}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
