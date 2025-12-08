import { PortfolioData } from "@/types/portfolio";

export const portfolioDataEn: PortfolioData = {
  hero: {
    name: "Ayman Lyesri",
    title: "Software Engineer",
    subtitle: "Full-Stack & Mobile Developer",
    tagline: "Crafting clean interfaces and scalable backend systems",
  },

  about: {
    bio: "I'm a software engineer who enjoys building things that feel fast, intuitive, and reliable. Over the years, I've worked across mobile, frontend, and backend development—creating cross-platform apps with React Native, designing Angular dashboards, and building REST APIs and full-stack projects with TypeScript, Node.js, and Python. I've had the chance to work with teams in France and Morocco, contributing to Agile sprints, improving performance, integrating backend services, and delivering polished UI/UX across different platforms. On the freelance side, I've built custom applications for clients worldwide and maintained a consistent record of high ratings and strong communication. A big part of my journey is open source. I enjoy crafting tools, widgets, and Linux configurations that help developers customize their workflow—some of which are widely used in the community. I'm always exploring new technologies, optimizing how things work under the hood, and pushing myself to build better, cleaner systems. At the end of the day, I'm driven by solving real problems, creating smooth user experiences, and learning something new with every project.",
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
      quotes: [
        {
          quote:
            "Monsieur LYESRI Ayman a été d'une aide précieuse et a fourni un travail de qualité",
          name: "Berniche NGOMA",
          role: "CEO, VNB-IT",
        },
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
      quotes: [
        {
          quote:
            "Good job, great communication and quick delivery. I am second time customer. I can approve Ayman for 100%. Great work, as we agreed, fixes done in minutes",
          name: "Michal GALECKI",
          role: "Client on Fiverr",
        },
        {
          quote:
            "Great job, very detailed, happy about the front end. Know his work very well. Will come back. Thank You Ayman",
          name: "Michal GALECKI",
          role: "Client on Fiverr",
        },
        {
          quote:
            "Excellent seller, perfect communication and updates during the work period.",
          name: "Cherif KHALIFAH",
          role: "Client on Fiverr",
        },
        {
          quote: "Rapide efficace , je recommande les yeux fermé :)",
          name: "valentinrizz165",
          role: "Client on Fiverr",
        },
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
      liveUrl: "https://crypto-spy-io.vercel.app/",
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
