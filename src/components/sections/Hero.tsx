import AnimatedSection from "@/components/AnimatedSection";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <AnimatedSection>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="text-white">{t("name")}</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
            {t("title")}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            {t("subtitle")}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={600}>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            {t("tagline")}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={800}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20 hover:bg-gray-200"
            >
              <span className="relative z-10">{t("getInTouch")}</span>
            </a>
            <a
              href="#projects"
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20"
            >
              {t("viewProjects")}
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={1000}>
          <div className="mt-16">
            <a
              href="#about"
              className="inline-block animate-bounce text-gray-400 hover:text-white transition-colors"
            >
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
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
