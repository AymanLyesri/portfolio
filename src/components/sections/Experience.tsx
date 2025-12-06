import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import WorkItemCard from "@/components/WorkItemCard";
import { WorkItem } from "@/types/portfolio";
import { useTranslations } from "next-intl";

interface ExperienceProps {
  experiences: WorkItem[];
}

export default function Experience({ experiences }: ExperienceProps) {
  const t = useTranslations("experience");

  return (
    <section id="experience" className="py-20 px-6 flex justify-center">
      <div className="w-full max-w-6xl">
        <AnimatedSection>
          <SectionHeader title={t("title")} subtitle="" />
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
