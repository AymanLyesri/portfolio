"use client";

import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import SkillBadge from "@/components/SkillBadge";
import { Skill } from "@/types/portfolio";
import { useTranslations } from "next-intl";
import { useState } from "react";

interface SkillsProps {
  skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
  const t = useTranslations("skills");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const categoryInfo = {
    language: {
      label: t("categories.language"),
      icon: (
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
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-400",
    },
    framework: {
      label: t("categories.framework"),
      icon: (
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
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      iconColor: "text-purple-400",
    },
    tool: {
      label: t("categories.tool"),
      icon: (
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
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      iconColor: "text-green-400",
    },
    database: {
      label: t("categories.database"),
      icon: (
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
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      ),
      color: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30",
      iconColor: "text-orange-400",
    },
    cloud: {
      label: t("categories.cloud"),
      icon: (
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
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
      color: "from-sky-500/20 to-blue-500/20",
      borderColor: "border-sky-500/30",
      iconColor: "text-sky-400",
    },
    other: {
      label: "Other",
      icon: (
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
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
      color: "from-gray-500/20 to-slate-500/20",
      borderColor: "border-gray-500/30",
      iconColor: "text-gray-400",
    },
  };

  const filteredCategories = selectedCategory
    ? { [selectedCategory]: groupedSkills[selectedCategory] }
    : groupedSkills;

  return (
    <section id="skills" className="py-20 px-6 flex justify-center">
      <div className="w-full max-w-6xl">
        <AnimatedSection>
          <SectionHeader title={t("title")} subtitle="" />
        </AnimatedSection>

        {/* Category Filter Pills */}
        <AnimatedSection delay={100}>
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === null
                  ? "bg-white text-black"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {t("allSkills")}
            </button>
            {Object.entries(categoryInfo).map(([key, info]) => {
              if (!groupedSkills[key]) return null;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === key
                      ? "bg-white text-black"
                      : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
                >
                  <span className="text-xs">{info.icon}</span>
                  {info.label}
                  <span className="text-xs opacity-60">
                    ({groupedSkills[key].length})
                  </span>
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(filteredCategories).map(
            ([category, categorySkills], idx) => {
              const info = categoryInfo[category as keyof typeof categoryInfo];
              return (
                <AnimatedSection
                  key={category}
                  delay={idx * 100}
                  hover="glow"
                  className={`relative bg-gradient-to-br ${info.color} backdrop-blur-sm border ${info.borderColor} rounded-xl p-6 transition-all duration-300 overflow-hidden`}
                >
                  <div className="relative">
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`${info.iconColor}`}>{info.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {info.label}
                        </h3>
                        <p className="text-xs text-gray-400">
                          {categorySkills.length}{" "}
                          {categorySkills.length === 1 ? "skill" : "skills"}
                        </p>
                      </div>
                    </div>

                    {/* Skills List */}
                    <div className="flex flex-wrap gap-2">
                      {categorySkills.map((skill) => (
                        <SkillBadge key={skill.name} skill={skill} />
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
