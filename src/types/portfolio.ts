export interface WorkItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  technologies: string[];
  link?: string;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  companyUrl?: string;
  highlights?: string[];
  stars?: number;
  readme?: string;
  screenshotUrl?: string;
  quotes?: {
    quote: string;
    name: string;
    role: string;
  }[];
}

export interface Skill {
  name: string;
  category: "language" | "framework" | "tool" | "database" | "cloud" | "other";
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PortfolioData {
  hero: {
    name: string;
    title: string;
    subtitle: string;
    tagline: string;
  };
  about: {
    bio: string;
    image?: string;
  };
  experiences: WorkItem[];
  projects: WorkItem[];
  skills: Skill[];
  contact: {
    email: string;
    socialLinks: SocialLink[];
  };
}
