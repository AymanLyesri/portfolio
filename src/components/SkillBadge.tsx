"use client";

import { Skill } from "@/types/portfolio";
import { useState } from "react";

interface SkillBadgeProps {
  skill: Skill;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative px-3 py-1.5 bg-black/40 border border-white/20 rounded-lg text-sm font-medium text-gray-200 hover:bg-white hover:text-black hover:border-white hover:shadow-lg hover:shadow-white/20 transition-all duration-300 cursor-default"
    >
      {/* Shine effect */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer rounded-lg" />
      )}
      <span className="relative z-10">{skill.name}</span>
    </div>
  );
}
