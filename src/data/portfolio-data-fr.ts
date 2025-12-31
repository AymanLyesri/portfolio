import { PortfolioData } from "@/types/portfolio";

export const portfolioDataFr: PortfolioData = {
  hero: {
    name: "Ayman Lyesri",
    title: "Ingénieur Logiciel",
    subtitle: "Développeur Full-Stack & Mobile",
    tagline: "Création d'interfaces élégantes et de systèmes backend évolutifs",
  },

  about: {
    bio: "Je suis un ingénieur logiciel qui aime créer des choses rapides, intuitives et fiables. Au fil des années, j'ai travaillé dans le développement mobile, frontend et backend—créant des applications multiplateformes avec React Native, concevant des tableaux de bord Angular et développant des API REST et des projets full-stack avec TypeScript, Node.js et Python. J'ai eu l'opportunité de travailler avec des équipes en France et au Maroc, contribuant aux sprints Agile, améliorant les performances, intégrant des services backend et offrant une UI/UX soignée sur différentes plateformes. En tant que freelance, j'ai créé des applications personnalisées pour des clients du monde entier et maintenu une réputation constante avec d'excellentes évaluations et une communication solide. Une grande partie de mon parcours est dédiée à l'open source. J'aime créer des outils, des widgets et des configurations Linux qui aident les développeurs à personnaliser leur flux de travail—dont certains sont largement utilisés dans la communauté. J'explore constamment de nouvelles technologies, optimisant le fonctionnement des systèmes et me poussant à créer de meilleurs systèmes, plus propres. Au final, je suis motivé par la résolution de vrais problèmes, la création d'expériences utilisateur fluides et l'apprentissage de quelque chose de nouveau à chaque projet.",
  },

  experiences: [
    {
      title: "Développeur React Native & Node.js",
      organization: "VNB-IT, France",
      date: "2025",
      description:
        "Développement d'applications mobiles multiplateformes avec React Native et Node.js, garantissant des performances optimales sur iOS et Android.",
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
        "Amélioration des temps de chargement de 30% avec des composants réutilisables",
        "Intégration de services backend et d'APIs tierces",
        "Participation aux sprints Agile et revues de code",
      ],
      quotes: [
        {
          quote:
            "Monsieur LYESRI Ayman a été d'une aide précieuse et a fourni un travail de qualité",
          name: "Berniche NGOMA",
          role: "PDG, VNB-IT",
        },
      ],
    },
    {
      title: "Développeur Angular",
      organization: "E-AMBITION, Rabat",
      date: "2023",
      description:
        "Développement d'applications Angular optimisées avec une UI/UX solide, amélioration des performances et gestion d'état propre.",
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
        "Amélioration des performances de l'application de 20% avec des optimisations RxJS",
        "Livraison de fonctionnalités en avance sur le calendrier en Agile Scrum",
        "Réduction des bugs en implémentant du code propre et testable",
      ],
    },
    {
      title: "Développeur Full-Stack & Mobile (Freelance)",
      organization: "Fiverr & Indépendant",
      date: "2021 - 2024",
      description:
        "Développement d'applications web Angular, d'applications C++ et de solutions full-stack pour des clients mondiaux avec des évaluations 5 étoiles constantes.",
      technologies: [
        "Angular",
        "React",
        "Node.js",
        "TypeScript",
        "C++",
        "MySQL",
      ],
      highlights: [
        "Livraison d'applications web entièrement responsives et dynamiques pour des clients du monde entier",
        "Création d'applications C++ adaptées aux besoins des clients",
        "Maintien d'une note parfaite de 5⭐",
      ],
      quotes: [
        {
          quote:
            "Bon travail, excellente communication et livraison rapide. Je suis client pour la deuxième fois. Je peux approuver Ayman à 100%. Excellent travail, comme convenu, corrections effectuées en quelques minutes",
          name: "Michal GALECKI",
          role: "Client sur Fiverr",
        },
        {
          quote:
            "Excellent travail, très détaillé, satisfait du frontend. Connaît très bien son travail. Je reviendrai. Merci Ayman",
          name: "Michal GALECKI",
          role: "Client sur Fiverr",
        },
        {
          quote:
            "Excellent vendeur, communication parfaite et mises à jour pendant la période de travail.",
          name: "Cherif KHALIFAH",
          role: "Client sur Fiverr",
        },
        {
          quote: "Rapide efficace , je recommande les yeux fermé :)",
          name: "valentinrizz165",
          role: "Client sur Fiverr",
        },
      ],
    },
    {
      title: "Développeur Logiciel (Projets Personnels)",
      organization: "GitHub",
      date: "2021 - 2025",
      description:
        "Création de nombreux projets full-stack et système avec Angular, React, Next.js, TypeScript, Python et GTK.",
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
        "Création de widgets GTK Linux avec TypeScript",
        "Développement de plusieurs applications open-source activement utilisées par les développeurs",
        "Démonstration de polyvalence à travers divers outils et frameworks",
      ],
    },
  ],

  projects: [
    {
      title: "Configuration Hyprland & Widgets GTK",
      organization: "Open Source",
      date: "2025",
      description:
        "Une configuration Hyprland complète avec des widgets GTK/TS personnalisés, des fonds d'écran, des scripts d'automatisation et une UX Linux soignée.",
      technologies: ["TypeScript", "GTK", "Bash", "Linux"],
      githubUrl: "https://github.com/AymanLyesri/hyprland-conf",
      highlights: [
        "Plus de 350 étoiles sur GitHub",
        "Très utilisé dans la communauté de personnalisation Linux",
      ],
    },
    {
      title: "CryptoSpy",
      organization: "Projet Personnel",
      date: "2025",
      description:
        "Un tableau de bord de cryptomonnaies construit avec Next.js et React, avec des prix en temps réel, des graphiques et une interface élégante.",
      technologies: ["Next.js", "React", "TypeScript"],
      githubUrl: "https://github.com/AymanLyesri/CryptoSpy",
      liveUrl: "https://crypto-spy-io.vercel.app/",
      highlights: [
        "Interface moderne avec graphiques",
        "Données de marché en temps réel",
      ],
    },
    {
      title: "MangaUniversal",
      organization: "Open Source",
      date: "2025",
      description:
        "Une application web de lecture de mangas construite avec Angular et Java Spring Boot, intégrant l'API MangaDex pour une expérience de lecture fluide.",
      technologies: [
        "Angular",
        "TypeScript",
        "Tailwind",
        "Java",
        "Spring Boot",
        "Docker",
        "MangaDex API",
      ],
      githubUrl: "https://github.com/AymanLyesri/MangaUniversal",
      liveUrl: "https://mangauniversal.vercel.app/",
      highlights: [
        "Intégration complète avec l'API MangaDex",
        "Interface utilisateur élégante et responsive",
      ],
    },
    {
      title: "Plateforme de Location de Voitures (Frontend)",
      organization: "Open Source",
      date: "2024",
      description:
        "Un frontend de location de voitures responsive avec filtrage, flux de réservation et composants UI élégants.",
      technologies: ["React", "TypeScript", "Tailwind"],
      githubUrl: "https://github.com/AymanLyesri/car_rental_frontend",
      liveUrl: "https://car-rental-frontend-delta.vercel.app/",
      highlights: [
        "Interface entièrement responsive",
        "Filtrage et navigation fluides",
      ],
    },
    {
      title: "Galerie de Visionneuse d'Images",
      organization: "Open Source",
      date: "2023",
      description:
        "Une galerie en ligne minimaliste pour visualiser et gérer des images avec une interface rapide et élégante.",
      technologies: ["React", "TypeScript"],
      githubUrl: "https://github.com/AymanLyesri/Image-Viewer",
      liveUrl: "https://image-viewer-gallery.vercel.app/",
      highlights: ["Léger et ultra rapide", "Interface intuitive"],
    },
    {
      title: "AI Profiler",
      organization: "Open Source",
      date: "2023",
      description:
        "Outil de profilage et d'analyse alimenté par l'IA pour l'interaction avec le code et le système.",
      technologies: ["Python", "OpenAI API"],
      githubUrl: "https://github.com/AymanLyesri/ai-profiler",
      highlights: [
        "Analyse intelligente du code",
        "Intégration avec des modèles IA",
      ],
    },
    {
      title: "Chatbot Linux",
      organization: "Open Source",
      date: "2023",
      description:
        "Un chatbot en ligne de commande construit pour les utilisateurs Linux utilisant Python et les APIs OpenAI.",
      technologies: ["Python", "OpenAI"],
      githubUrl: "https://github.com/AymanLyesri/linux-chat-bot",
      highlights: ["Fonctionne directement dans le terminal Linux"],
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
