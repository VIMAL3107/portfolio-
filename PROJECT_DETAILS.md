# Portfolio Project Documentation

## 🚀 Overview
This project is a high-end, professional portfolio website built for an AI & Machine Learning specialized Computer Science graduate. It showcases expertise in AI model development, full-stack architecture, and intelligent systems. The design is modern, responsive, and features a "premium" aesthetic with smooth animations and a "calm" UI.

---

## 🛠️ Technology Stack

### Core
- **Framework**: [React.js](https://reactjs.org/) (Version 18.3.1)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

### Styling & UI
- **CSS Framework**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (built on [Radix UI](https://www.radix-ui.com/))
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: Custom scroll animations and Tailwind-native animations.
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes) for dark/light mode support.

### Utilities & Other
- **Routing**: [React Router DOM](https://reactrouter.com/) (Version 6.30.1)
- **Forms**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) validation.
- **Data Fetching**: [TanStack Query](https://tanstack.com/query/latest) (v5).
- **Charts**: [Recharts](https://recharts.org/) for data visualization.

---

## 📂 Project Structure

```bash
portfolio/
├── public/                 # Static assets (images, favicon)
├── src/
│   ├── assets/             # Images and styles
│   ├── components/
│   │   ├── portfolio/      # Core portfolio sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── JourneySection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── CertificationsSection.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/             # Reusable shadcn components
│   ├── data/
│   │   └── projects.ts     # Project data and types
│   ├── hooks/              # Custom React hooks (e.g., useScrollAnimation)
│   ├── pages/
│   │   ├── Index.tsx       # Landing page (Main site)
│   │   ├── ProjectDetail.tsx # Detailed view for individual projects
│   │   └── NotFound.tsx    # 404 page
│   ├── lib/                # Utility functions (cn, etc.)
│   ├── App.tsx             # Main application entry and routing
│   ├── index.css           # Global Tailwind styles
│   └── main.tsx            # React DOM mounting
├── tailwind.config.ts      # Tailwind configuration and themes
├── package.json            # Project dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

---

## ✨ Key Features & Sections

### 1. Hero Section (`HeroSection.tsx`)
- High-impact arrival experience.
- Featured profile image and key titles.
- Call-to-action buttons for "View Projects" and "Contact Me".

### 2. About Me (`AboutSection.tsx`)
- Professional summary and career aspirations.
- **Current Focus**: ML/Deep Learning, NLP, CV, and Big Data.
- **Strengths**: Analytical skills, коммуникация (communication), and optimization.

### 3. Projects Showcase (`ProjectsSection.tsx`)
- Grid-based layout featuring key works:
  - **Hotel Harriet**: WhatsApp-based Guest Assistant (API Middleware).
  - **AI Zero**: Enterprise OS with AI-powered natural language querying.
  - **Event Horizon AI**: RAG-based AI workspace using Gemini and LangChain.

### 4. Technical Journey (`JourneySection.tsx`)
- Timeline of professional and academic milestones.

### 5. Skills Grid (`SkillsSection.tsx`)
- Categorized technical skills (Languages, Frameworks, AI/ML tools, Cloud).

### 6. Interactive Contact (`ContactSection.tsx`)
- Integrated contact form with validation.
- Social links (GitHub, LinkedIn, Email).

---

## 💾 Data Management
The project uses a structured data system located in `src/data/projects.ts` to manage featured projects. This allows for:
- Easy updates to project descriptions, tech stacks, and links.
- Consistent rendering across the main page and detail pages.
- Support for multiple media types (Images, YouTube embeds).

---

## 🎨 Design Philosophy
- **Glassmorphism**: Subtle backgrounds with blur effects for a modern look.
- **Micro-animations**: Elements reveal smoothly as the user scrolls.
- **Responsive-First**: Optimized for mobile, tablet, and desktop screens.
- **Accessibility**: Using semantic HTML and Radix UI primitives to ensure high accessibility standards.

---

## 🚀 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```
2. **Run Locally**:
   ```bash
   npm run dev
   ```
3. **Build for Production**:
   ```bash
   npm run build
   ```
