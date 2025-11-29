# Portfolio Website - Quick Start Guide

## 🎯 What You Get

A complete, production-ready portfolio website with:

- Stunning animations and visual effects
- Professional design with purple/pink gradient theme
- Fully responsive (works on mobile, tablet, desktop)
- Easy to customize - just edit one file!

## 🚀 Quick Start (3 Steps)

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

### 3. Open in Browser

Navigate to: http://localhost:3000

## ✏️ Customize Your Portfolio

**Edit this ONE file to make it yours:**
`src/data/portfolio-data.ts`

### What to Change:

#### 1. Personal Info

```typescript
hero: {
  name: 'Your Name',              // Your full name
  title: 'Your Job Title',        // e.g., "Senior Developer"
  subtitle: 'Your Role',          // e.g., "Full-Stack Developer"
  tagline: 'Your Tagline',        // e.g., "Building amazing apps"
}
```

#### 2. About Section

```typescript
about: {
  bio: 'Write your bio here...',  // Tell your story
}
```

#### 3. Work Experience

```typescript
experiences: [
  {
    id: "exp-1",
    title: "Job Title",
    organization: "Company Name",
    date: "Start - End",
    description: "What you did...",
    technologies: ["Tech1", "Tech2"],
    highlights: ["Achievement 1", "Achievement 2"],
  },
];
```

#### 4. Projects

```typescript
projects: [
  {
    id: "proj-1",
    title: "Project Name",
    organization: "Personal/Open Source",
    date: "Year",
    description: "What it does...",
    technologies: ["Tech1", "Tech2"],
    githubUrl: "https://github.com/you/project",
    liveUrl: "https://your-demo.com",
  },
];
```

#### 5. Skills

```typescript
skills: [
  { name: "JavaScript", category: "language" },
  { name: "React", category: "framework" },
  { name: "Docker", category: "tool" },
  { name: "PostgreSQL", category: "database" },
  { name: "AWS", category: "cloud" },
];
```

Categories: `language`, `framework`, `tool`, `database`, `cloud`, `other`

#### 6. Contact Info

```typescript
contact: {
  email: 'your.email@example.com',
  socialLinks: [
    { name: 'GitHub', url: 'https://github.com/yourusername', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: 'linkedin' },
    { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: 'twitter' },
  ],
}
```

## 🎨 Customize Appearance

### Change Colors

Edit components in `src/components/sections/` to change gradient colors:

**Current theme:** Blue → Purple → Pink

```
from-blue-400 via-purple-500 to-pink-500
```

**Example alternatives:**

- Green theme: `from-green-400 via-emerald-500 to-teal-500`
- Orange theme: `from-orange-400 via-red-500 to-pink-500`
- Cool theme: `from-cyan-400 via-blue-500 to-indigo-500`

### Modify Sections

Each section is in `src/components/sections/`:

- `Hero.tsx` - Landing section with name
- `About.tsx` - Bio section
- `Experience.tsx` - Work history
- `Projects.tsx` - Project showcase
- `Skills.tsx` - Technology skills
- `Contact.tsx` - Contact form & socials

## 📱 Sections Overview

### 1. Hero Section

- Animated gradient background
- Floating orbs effect
- Your name in large gradient text
- Call-to-action buttons

### 2. About

- Personal bio
- Glow effect on hover

### 3. Experience

- Work history cards
- Technology badges
- Achievement highlights

### 4. Projects

- Project cards in grid
- GitHub & live demo links
- Technology tags

### 5. Skills

- Categorized badges
- Hover effects
- Colored by category

### 6. Contact

- Email button
- Social media icons
- Animated effects

## 🚀 Deploy to Production

### Option 1: Vercel (Recommended - Free)

1. Push code to GitHub
2. Go to https://vercel.com
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"
   Done! ✨

### Option 2: Build Manually

```bash
npm run build
npm run start
```

## 🎯 Tips

1. **Replace sample data** in `portfolio-data.ts` with your real info
2. **Update metadata** in `src/app/layout.tsx` for SEO
3. **Test responsiveness** by resizing browser window
4. **Check animations** by scrolling through sections
5. **Customize colors** to match your personal brand

## 📊 Features

✅ Scroll-triggered animations  
✅ Hover glow effects  
✅ Responsive design  
✅ Custom scrollbar  
✅ Gradient backgrounds  
✅ TypeScript type-safety  
✅ SEO optimized  
✅ Fast performance

## 🆘 Common Issues

**Issue:** Animations not working  
**Fix:** Make sure you're scrolling - animations trigger on scroll

**Issue:** Colors look different  
**Fix:** Check Tailwind classes in component files

**Issue:** Build fails  
**Fix:** Run `npm install` again and check for TypeScript errors

## 📝 File Structure Quick Reference

```
src/
├── data/portfolio-data.ts       ← EDIT THIS for your content
├── types/portfolio.ts           ← Type definitions
├── components/
│   ├── sections/                ← Main page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   ├── AnimatedSection.tsx      ← Scroll animation wrapper
│   ├── SectionHeader.tsx        ← Section titles
│   ├── SkillBadge.tsx           ← Skill badges
│   └── WorkItemCard.tsx         ← Experience/Project cards
└── app/
    ├── page.tsx                 ← Main page (combines sections)
    ├── layout.tsx               ← Metadata & fonts
    └── globals.css              ← Global styles
```

---

**Ready to make it yours!** 🎨  
Start by editing `src/data/portfolio-data.ts`
