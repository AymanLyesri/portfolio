import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import WorkItemCard from "@/components/WorkItemCard";
import { WorkItem } from "@/types/portfolio";

interface ExperienceProps {
  experiences: WorkItem[];
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <section id="experience" className=" px-6 flex justify-center">
      <div className="w-full max-w-6xl">
        <AnimatedSection>
          <SectionHeader
            title="Experience"
            subtitle="Building great products at amazing companies"
          />
        </AnimatedSection>

        <div className="space-y-6 flex flex-col gap-6">
          {experiences.map((exp, index) => (
            <AnimatedSection key={exp.id} delay={index * 100}>
              <WorkItemCard item={exp} type="experience" />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
