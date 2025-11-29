# Software Engineer Portfolio

A modern, production-ready portfolio website built with Next.js 16, TypeScript, and Tailwind CSS. Features beautiful animations, glow effects, and a fully responsive design.

## 🚀 Features

- **Single-Page Design**: Smooth scrolling between sections
- **Beautiful Animations**: Scroll-triggered animations and hover effects
- **Glow Effects**: Tasteful gradient glows and shadows
- **Fully Responsive**: Mobile-first design that works on all devices
- **TypeScript**: Type-safe code with shared interfaces
- **Modern Stack**: Next.js 16 App Router, React 19, Tailwind CSS 4
- **Production Ready**: Optimized for performance and SEO

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css           # Global styles with custom scrollbar
│   │   ├── layout.tsx             # Root layout with metadata
│   │   └── page.tsx               # Main page component
│   ├── components/
│   │   ├── AnimatedSection.tsx    # Scroll-triggered animation wrapper
│   │   ├── SectionHeader.tsx      # Reusable section headers
│   │   ├── SkillBadge.tsx         # Skill display component
│   │   ├── WorkItemCard.tsx       # Experience/Project cards
│   │   └── sections/
│   │       ├── About.tsx          # About section
│   │       ├── Contact.tsx        # Contact section with social links
│   │       ├── Experience.tsx     # Work experience section
│   │       ├── Hero.tsx           # Hero section with animations
│   │       ├── Projects.tsx       # Projects showcase
│   │       └── Skills.tsx         # Skills categorized display
│   ├── data/
│   │   └── portfolio-data.ts      # All portfolio content (edit this!)
│   └── types/
│       └── portfolio.ts           # TypeScript interfaces
├── tailwind.config.ts             # Tailwind configuration
└── package.json
```

## 🎨 Key Features

### WorkItem Interface

The `WorkItem` interface is used for both experiences and projects:

- Title, organization, date
- Description and highlights
- Technologies array
- Optional links (GitHub, live demo)

### Sections

1. **Hero**: Animated intro with gradient text and floating orbs
2. **About**: Personal bio with glow effects
3. **Experience**: Work history with expandable details
4. **Projects**: Showcase of open-source and personal projects
5. **Skills**: Categorized technology badges
6. **Contact**: Email and social media links

### Animations

- Scroll-triggered fade-in animations
- Hover glow effects on cards
- Floating background orbs
- Smooth gradient animations
- Custom scrollbar styling

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## ✏️ Customization

### Update Your Content

Edit `src/data/portfolio-data.ts` to customize:

- Personal information (name, title, bio)
- Work experiences
- Projects
- Skills
- Contact information and social links

### Example:

```typescript
export const portfolioData: PortfolioData = {
  hero: {
    name: "Your Name",
    title: "Your Title",
    subtitle: "Your Subtitle",
    tagline: "Your Tagline",
  },
  // ... rest of your data
};
```

### Customize Colors

Update gradient colors in components or `tailwind.config.ts`:

- Primary gradient: `from-blue-400 via-purple-500 to-pink-500`
- Hover effects: Purple (`purple-500`)
- Change to match your brand

### Add More Sections

1. Create a new component in `src/components/sections/`
2. Import and add to `src/app/page.tsx`
3. Update data types in `src/types/portfolio.ts` if needed

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

### Build for Production

```bash
npm run build
npm run start
```

## 📝 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI**: React 19
- **Animations**: CSS transitions + Intersection Observer API

## 🎯 Performance

- Optimized animations with CSS transforms
- Lazy loading with Intersection Observer
- Server-side rendering with Next.js
- Minimal JavaScript bundle size
- Optimized fonts with `next/font`

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

**Built with ❤️ using Next.js and Tailwind CSS**
