# Leynardo Yosef - Backend Engineer Portfolio

A futuristic, production-grade personal portfolio website showcasing backend engineering expertise with a system dashboard aesthetic.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## ✨ Features

- 🎨 Futuristic engineering dashboard design
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast loading with optimized performance
- 🔍 SEO-friendly with structured data
- ♿ Accessibility-friendly (ARIA, semantic HTML)
- 🎭 Smooth animations with Framer Motion
- 💎 Glassmorphism UI elements
- 🔥 Neon glow effects

## 📋 Sections

- **SYSTEM OVERVIEW** - Hero section with animated introduction
- **SYSTEM PROFILE** - Personal information and soft skills
- **EXECUTION HISTORY** - Timeline of professional experience
- **CORE MODULES** - Technical skills and competencies
- **DEPLOYED SYSTEMS** - Featured projects
- **COMMUNICATION INTERFACE** - Contact form and social links

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
\`\`\`bash
git clone <repository-url>
cd about-me
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

\`\`\`bash
npm run build
npm run start
# or
yarn build
yarn start
\`\`\`

## 📁 Project Structure

\`\`\`
about-me/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx             # Home page
│   │   └── globals.css          # Global styles
│   └── components/
│       ├── common/              # Reusable components
│       ├── layout/              # Layout components
│       ├── providers/           # Context providers
│       ├── sections/            # Page sections
│       └── seo/                 # SEO components
├── public/                      # Static assets
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies
\`\`\`

## 🎨 Customization

### Update Personal Information

Edit the content in the following files:
- `src/components/sections/HeroSection.tsx` - Hero content
- `src/components/sections/ProfileSection.tsx` - Profile details
- `src/components/sections/ExperienceSection.tsx` - Work experience
- `src/components/sections/SkillsSection.tsx` - Skills
- `src/components/sections/ProjectsSection.tsx` - Projects
- `src/components/sections/ContactSection.tsx` - Contact info

### Update Colors

Modify the color palette in `tailwind.config.ts`:
\`\`\`typescript
colors: {
  background: {
    DEFAULT: '#0B0E14',
    secondary: '#0E1015',
  },
  neon: {
    cyan: '#00E5FF',
    blue: '#3B82F6',
  },
  // ... more colors
}
\`\`\`

### Add CV File

Place your CV PDF in the `public` folder as `cv-leynardo-yosef.pdf`

## 📱 Social Links

Update social links in:
- `src/components/layout/Footer.tsx`
- `src/components/sections/ContactSection.tsx`
- `src/components/common/WhatsAppButton.tsx`

## 🔍 SEO Configuration

Update metadata in:
- `src/app/layout.tsx` - Meta tags and OpenGraph
- `src/components/seo/StructuredData.tsx` - JSON-LD structured data
- `public/sitemap.xml` - Sitemap
- `public/robots.txt` - Robots configuration

## 📝 License

© 2026 Leynardo Yosef. All rights reserved.

## 🤝 Contact

- Email: leynardo@example.com
- GitHub: [@leynardo](https://github.com/leynardo)
- LinkedIn: [leynardo-yosef](https://linkedin.com/in/leynardo-yosef)
- WhatsApp: +62 812 3456 7890

---

Built with ❤️ using Next.js and TypeScript
# cv-leynardo
