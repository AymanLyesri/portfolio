"use client";

import { useEffect, useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import WorkItemCard from "@/components/WorkItemCard";
import { WorkItem } from "@/types/portfolio";

interface ProjectsProps {
  projects: WorkItem[];
}

export default function Projects({ projects }: ProjectsProps) {
  const [enrichedProjects, setEnrichedProjects] =
    useState<WorkItem[]>(projects);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjectData = async () => {
      setLoading(true);
      const projectsWithData = await Promise.all(
        projects.map(async (project) => {
          if (!project.githubUrl) return project;

          try {
            const response = await fetch(
              `/api/github?repo=${encodeURIComponent(project.githubUrl)}`
            );
            if (!response.ok) {
              console.error(`Failed to fetch data for ${project.githubUrl}`);
              return project;
            }

            const data = await response.json();

            return {
              ...project,
              title: data.title || project.title,
              description: data.description || project.description,
              stars: data.stars,
              liveUrl: data.liveUrl || project.liveUrl,
              readme: data.readme,
              technologies:
                data.topics?.length > 0
                  ? data.topics.map(
                      (t: string) => t.charAt(0).toUpperCase() + t.slice(1)
                    )
                  : project.technologies,
            };
          } catch (error) {
            console.error(
              `Error fetching data for ${project.githubUrl}:`,
              error
            );
            return project;
          }
        })
      );

      setEnrichedProjects(projectsWithData);
      setLoading(false);
    };

    fetchProjectData();
  }, [projects]);

  return (
    <section id="projects" className="py-20 px-4 flex justify-center">
      <div className="w-full max-w-6xl">
        <AnimatedSection>
          <SectionHeader
            title="Projects"
            subtitle="Open-source contributions and personal projects"
          />
        </AnimatedSection>

        {loading && (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-white border-r-transparent"></div>
            <p className="mt-4 text-gray-400">Loading project details...</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {enrichedProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 100}>
              <WorkItemCard item={project} type="project" />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
