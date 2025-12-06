import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import ThreeBackground from "@/components/ThreeBackground";
import { getPortfolioData } from "@/data/get-portfolio-data";
import { getTranslations } from "next-intl/server";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const portfolioData = getPortfolioData(locale);
  const t = await getTranslations("footer");

  return (
    <main className="min-h-screen relative">
      <ThreeBackground />
      <Navbar />

      <Hero />
      <div className="w-full gap-16 flex flex-col items-center">
        <About />
        <Experience experiences={portfolioData.experiences} />
        <Projects projects={portfolioData.projects} />
        <Skills skills={portfolioData.skills} />
        <Contact
          email={portfolioData.contact.email}
          socialLinks={portfolioData.contact.socialLinks}
        />
      </div>

      {/* Footer */}
      <footer className="mt-64 py-8 px-4 text-center text-gray-500 border-t border-gray-800">
        <p>
          © {new Date().getFullYear()} {portfolioData.hero.name}. {t("rights")}
        </p>
      </footer>
    </main>
  );
}
