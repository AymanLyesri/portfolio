import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  hero: {
    name: "Ayman Lyesri",
    title: "Software Engineer",
    subtitle: "Full-Stack & Mobile Developer",
    tagline: "Crafting clean interfaces and scalable backend systems",
  },

  about: {
    bio: "I'm a motivated software engineer with experience across frontend, backend, and mobile development. I’ve worked in Agile and Scrum environments, contributing to cross-platform apps, Angular dashboards, REST APIs, and full-stack personal projects. I enjoy building practical, user-focused solutions and constantly exploring new technologies.",
  },

  experiences: [
    {
      id: "exp-1",
      title: "React Native & Node.js Developer",
      organization: "VNB-IT, France",
      date: "2025",
      description:
        "Built cross-platform mobile applications using React Native and Node.js, ensuring smooth performance across iOS and Android.",
      technologies: [
        "React Native",
        "Node.js",
        "TypeScript",
        "JavaScript",
        "REST APIs",
        "PostgreSQL",
      ],
      companyUrl: "https://vnb-it.fr/",
      imageUrl:
        "https://vnb-it.fr/wp-content/uploads/2024/05/cropped-vnb-it-removebg-preview-1-3.png",
      highlights: [
        "Improved app load times by 30% with reusable components",
        "Integrated backend services and third-party APIs",
        "Participated in Agile sprints and code reviews",
      ],
    },
    {
      id: "exp-2",
      title: "Angular Developer",
      organization: "E-AMBITION, Rabat",
      date: "2023",
      description:
        "Developed optimized Angular applications with strong UI/UX, improved performance, and clean state management.",
      technologies: [
        "Angular",
        "TypeScript",
        "SCSS",
        "RxJS",
        "REST APIs",
        "Git",
      ],
      companyUrl: "https://e-ambition.com/",
      imageUrl: "https://www.e-ambition.com/assets/images/logo.svg",
      highlights: [
        "Boosted application performance by 20% using RxJS optimizations",
        "Delivered features ahead of schedule in Agile Scrum",
        "Reduced bugs by implementing clean, testable code",
      ],
    },
    {
      id: "exp-3",
      title: "Full-Stack & Mobile Developer (Freelance)",
      organization: "Fiverr & Independent",
      date: "2021 - 2024",
      description:
        "Developed Angular web apps, C++ applications, and full-stack solutions for global clients with consistent 5-star ratings.",
      technologies: [
        "Angular",
        "React",
        "Node.js",
        "TypeScript",
        "C++",
        "MySQL",
      ],
      highlights: [
        "Delivered fully responsive, dynamic web apps for clients worldwide",
        "Built C++ applications tailored to client needs",
        "Maintained a perfect 5⭐ rating",
      ],
    },
    {
      id: "exp-4",
      title: "Software Developer (Personal Projects)",
      organization: "GitHub",
      date: "2021 - 2025",
      description:
        "Built numerous full-stack and system-level projects using Angular, React, Next.js, TypeScript, Python, and GTK.",
      technologies: [
        "React",
        "Next.js",
        "Angular",
        "TypeScript",
        "Python",
        "Node.js",
        "Bash",
        "GTK",
      ],
      highlights: [
        "Created Linux GTK widgets with TypeScript",
        "Built multiple open-source applications actively used by developers",
        "Showcased versatility across tooling and frameworks",
      ],
    },
  ],

  projects: [
    {
      id: "proj-1",
      title: "Hyprland Config & GTK Widgets",
      organization: "Open Source",
      date: "2024",
      description:
        "A complete Hyprland configuration with custom GTK/TS widgets, wallpapers, automation scripts, and a polished Linux UX.",
      technologies: ["TypeScript", "GTK", "Bash", "Linux"],
      githubUrl: "https://github.com/AymanLyesri/hyprland-conf",
      highlights: [
        "350+ GitHub stars",
        "Highly used in Linux customization community",
      ],
    },
    {
      id: "proj-2",
      title: "CryptoSpy",
      organization: "Personal Project",
      date: "2024",
      description:
        "A cryptocurrency dashboard built with Next.js and React, featuring real-time prices, charts, and a clean UI.",
      technologies: ["Next.js", "React", "TypeScript"],
      githubUrl: "https://github.com/AymanLyesri/CryptoSpy",
      liveUrl: "http://crypto-spy-io.vercel.app/",
      highlights: ["Modern UI with charts", "Real-time market data"],
    },
    {
      id: "proj-3",
      title: "Car Rental Platform (Frontend)",
      organization: "Open Source",
      date: "2024",
      description:
        "A responsive car rental front-end with filtering, booking flows, and clean UI components.",
      technologies: ["React", "TypeScript", "Tailwind"],
      githubUrl: "https://github.com/AymanLyesri/car_rental_frontend",
      liveUrl: "https://car-rental-frontend-delta.vercel.app/",
      highlights: ["Fully responsive UI", "Smooth filtering & browsing"],
    },
    {
      id: "proj-4",
      title: "Image Viewer Gallery",
      organization: "Open Source",
      date: "2023",
      description:
        "A minimal online gallery for viewing and managing images with a fast, clean interface.",
      technologies: ["React", "TypeScript"],
      githubUrl: "https://github.com/AymanLyesri/Image-Viewer",
      liveUrl: "https://image-viewer-gallery.vercel.app/",
      highlights: ["Lightweight and super fast", "Intuitive UI"],
    },
    {
      id: "proj-5",
      title: "AI Profiler",
      organization: "Open Source",
      date: "2023",
      description:
        "AI-powered profiling and analysis tool for code and system interaction.",
      technologies: ["Python", "OpenAI API"],
      githubUrl: "https://github.com/AymanLyesri/ai-profiler",
      highlights: ["Smart code analysis", "Integrates with AI models"],
    },
    {
      id: "proj-6",
      title: "Linux Chat Bot",
      organization: "Open Source",
      date: "2023",
      description:
        "A command-line chatbot built for Linux users using Python and OpenAI APIs.",
      technologies: ["Python", "OpenAI"],
      githubUrl: "https://github.com/AymanLyesri/linux-chat-bot",
      highlights: ["Works directly inside Linux terminal"],
    },
  ],

  skills: [
    // Languages
    { name: "JavaScript", category: "language" },
    { name: "TypeScript", category: "language" },
    { name: "Python", category: "language" },
    { name: "Java", category: "language" },
    { name: "C++", category: "language" },
    { name: "HTML5", category: "language" },
    { name: "CSS3", category: "language" },
    { name: "SQL", category: "language" },

    // Frontend & Mobile
    { name: "Angular", category: "framework" },
    { name: "React", category: "framework" },
    { name: "Next.js", category: "framework" },
    { name: "React Native", category: "framework" },
    { name: "Redux", category: "framework" },
    { name: "RxJS", category: "framework" },
    { name: "Tailwind CSS", category: "framework" },
    { name: "SCSS", category: "framework" },
    { name: "GTK", category: "framework" },

    // Backend
    { name: "Node.js", category: "framework" },
    { name: "Express", category: "framework" },
    { name: "REST APIs", category: "framework" },
    { name: "Java Spring", category: "framework" },

    // Databases
    { name: "MongoDB", category: "database" },
    { name: "MySQL", category: "database" },
    { name: "PostgreSQL", category: "database" },

    // Tools
    { name: "Git", category: "tool" },
    { name: "CI/CD", category: "tool" },
    { name: "Linux", category: "tool" },
    { name: "Docker", category: "tool" },
    { name: "Bash", category: "tool" },
    { name: "AWS", category: "cloud" },
    { name: "Vercel", category: "cloud" },
  ],

  contact: {
    email: "ayman.lyesri.99@gmail.com",
    socialLinks: [
      {
        name: "GitHub",
        url: "https://github.com/AymanLyesri",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aymanlyesri",
        icon: "linkedin",
      },
    ],
  },
};
