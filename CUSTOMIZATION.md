# Customization Guide

This guide will help you customize the portfolio website with your personal information.

## 📝 Essential Updates

### 1. Personal Information

#### Hero Section (`src/components/sections/HeroSection.tsx`)
```typescript
// Update name, role, tech stack, and description
- Name: LEYNARDO YOSEF
- Role: BACKEND ENGINEER
- Tech Stack: GO • NODE.JS • DISTRIBUTED SYSTEM • SCALABLE BACKEND
- Description: Your personal summary
```

#### Profile Section (`src/components/sections/ProfileSection.tsx`)
```typescript
const profileData = {
  dateOfBirth: '01 September 1997',    // Update your DOB
  location: 'Indonesia',                // Update your location
  description: `Your professional summary...`
}

// Update education
- University name
- Degree
- Period
- GPA
```

### 2. Work Experience

Update in `src/components/sections/ExperienceSection.tsx`:

```typescript
const experiences = [
  {
    role: 'Your Role',
    company: 'Company Name',
    period: 'Month Year – Month Year',
    status: 'PRODUCTION', // or 'STABLE', 'ACTIVE'
    statusColor: 'text-success',
    description: [
      'Achievement 1',
      'Achievement 2',
      // Add more
    ],
    tech: ['Tech1', 'Tech2', 'Tech3'],
  },
  // Add more experiences
]
```

### 3. Skills

Update in `src/components/sections/SkillsSection.tsx`:

```typescript
const skillCategories = [
  {
    icon: Code,
    title: 'Category Name',
    color: 'text-neon-cyan',
    bgColor: 'bg-neon-cyan/10',
    borderColor: 'border-neon-cyan/30',
    skills: ['Skill 1', 'Skill 2'],
  },
  // Add more categories
]

// Update statistics
- Years Experience
- Technologies count
- Projects Delivered
- System Uptime
```

### 4. Projects

Update in `src/components/sections/ProjectsSection.tsx`:

```typescript
const projects = [
  {
    icon: Truck, // Choose from lucide-react icons
    title: 'Project Name',
    subtitle: 'Project Type',
    description: 'Project description...',
    status: 'PRODUCTION',
    statusColor: 'text-success',
    features: [
      'Feature 1',
      'Feature 2',
    ],
    tech: ['Tech1', 'Tech2'],
    gradient: 'from-neon-cyan to-neon-blue',
  },
  // Add more projects
]
```

### 5. Contact Information

#### Contact Section (`src/components/sections/ContactSection.tsx`)
```typescript
const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your.email@example.com',     // Update email
    href: 'mailto:your.email@example.com',
    color: 'text-neon-cyan',
    bgColor: 'bg-neon-cyan/10',
    borderColor: 'border-neon-cyan/30',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/yourusername',    // Update GitHub
    href: 'https://github.com/yourusername',
    // ...
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/yourprofile', // Update LinkedIn
    href: 'https://linkedin.com/in/yourprofile',
    // ...
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+62 XXX XXXX XXXX',           // Update WhatsApp
    href: 'https://wa.me/62XXXXXXXXXX',
    // ...
  },
]
```

#### WhatsApp Button (`src/components/common/WhatsAppButton.tsx`)
```typescript
const phoneNumber = '62XXXXXXXXXX' // Your WhatsApp number (without +)
const message = 'Your default message'
```

#### Footer (`src/components/layout/Footer.tsx`)
```typescript
const socialLinks = [
  { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
]
```

### 6. SEO & Metadata

#### Layout Metadata (`src/app/layout.tsx`)
```typescript
export const metadata: Metadata = {
  title: 'Your Name | Your Title',
  description: 'Your description...',
  keywords: [
    'your keywords',
    // Add more
  ],
  metadataBase: new URL('https://your-domain.com'),
  // Update OpenGraph and Twitter card info
}
```

#### Structured Data (`src/components/seo/StructuredData.tsx`)
```typescript
const structuredData = {
  name: 'Your Name',
  jobTitle: 'Your Job Title',
  description: 'Your description...',
  url: 'https://your-domain.com',
  sameAs: [
    'https://github.com/yourusername',
    'https://linkedin.com/in/yourprofile',
  ],
  // Update other fields
}
```

#### Sitemap (`public/sitemap.xml`)
```xml
<loc>https://your-domain.com/</loc>
<lastmod>2026-01-13</lastmod>
```

#### Robots.txt (`public/robots.txt`)
```txt
Sitemap: https://your-domain.com/sitemap.xml
```

## 🎨 Design Customization

### Colors

Update in `tailwind.config.ts`:

```typescript
colors: {
  background: {
    DEFAULT: '#0B0E14',      // Main background
    secondary: '#0E1015',    // Secondary background
  },
  neon: {
    cyan: '#00E5FF',         // Primary accent
    blue: '#3B82F6',         // Secondary accent
  },
  success: '#22C55E',        // Success color
  text: {
    primary: '#E5E7EB',      // Primary text
    muted: '#9CA3AF',        // Muted text
  },
}
```

### Fonts

Update in `tailwind.config.ts`:

```typescript
fontFamily: {
  sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
  heading: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
  mono: ['var(--font-jetbrains-mono)', 'monospace'],
}
```

Or change fonts in `src/app/layout.tsx`:

```typescript
import { YourFont } from 'next/font/google'

const yourFont = YourFont({ 
  subsets: ['latin'],
  variable: '--font-your-font',
})
```

### Animations

All animations use Framer Motion. Customize in component files:

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Your content
</motion.div>
```

## 📄 Add Your CV

1. Export your CV as PDF
2. Name it `cv-leynardo-yosef.pdf` (or update the filename in HeroSection.tsx)
3. Place it in the `public` folder
4. The download button will automatically work

## 🖼️ Add Images

### Profile Picture
1. Add your image to `public` folder
2. Import in components where needed

### Project Images
Add project screenshots:
```typescript
import Image from 'next/image'

<Image 
  src="/project-image.png" 
  alt="Project name"
  width={800}
  height={600}
/>
```

### Favicon & Icons
1. Create favicon.ico (16x16, 32x32, 48x48)
2. Create icon-192.png (192x192)
3. Create icon-512.png (512x512)
4. Create og-image.png (1200x630) for social sharing
5. Place all in `public` folder

## 🔧 Advanced Customization

### Add New Section

1. Create component in `src/components/sections/`:
```typescript
'use client'
import { SectionWrapper } from '@/components/common/SectionWrapper'

export function NewSection() {
  return (
    <SectionWrapper id="new-section" title="NEW SECTION">
      {/* Your content */}
    </SectionWrapper>
  )
}
```

2. Import and add to `src/app/page.tsx`:
```typescript
import { NewSection } from '@/components/sections/NewSection'

export default function Home() {
  return (
    <>
      {/* Existing sections */}
      <NewSection />
    </>
  )
}
```

3. Add to navigation in `src/components/layout/Navbar.tsx`:
```typescript
const navItems = [
  // Existing items
  { name: 'NEW SECTION', href: '#new-section' },
]
```

### Custom Animations

Create reusable animation variants:
```typescript
const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

<motion.div {...fadeInUp}>
  Content
</motion.div>
```

### Add Analytics

Install Vercel Analytics:
```bash
npm install @vercel/analytics
```

Update `src/app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react'

// In body:
<Analytics />
```

### Add Blog Section

1. Install MDX: `npm install @next/mdx @mdx-js/loader @mdx-js/react`
2. Create `src/app/blog/` directory
3. Add blog posts as MDX files
4. Create blog listing and post pages

## 📱 Testing

### Responsive Testing
- Desktop: 1920px, 1440px, 1366px
- Tablet: 768px, 1024px
- Mobile: 375px, 414px, 390px

### Browser Testing
- Chrome
- Firefox
- Safari
- Edge

### Accessibility Testing
- Use browser DevTools Lighthouse
- Check keyboard navigation
- Verify ARIA labels
- Test with screen readers

## 🚀 Performance Tips

1. **Optimize Images**
   - Use WebP format
   - Compress before upload
   - Use next/image component

2. **Code Splitting**
   - Use dynamic imports for heavy components
   - Lazy load below-the-fold content

3. **Reduce Bundle Size**
   - Remove unused dependencies
   - Tree-shake libraries
   - Use production build

4. **Caching**
   - Static assets cached automatically
   - Use CDN for images

## 🎯 Best Practices

1. ✅ Keep components small and reusable
2. ✅ Use TypeScript for type safety
3. ✅ Follow accessibility guidelines
4. ✅ Optimize for SEO
5. ✅ Test on multiple devices
6. ✅ Keep dependencies updated
7. ✅ Use semantic HTML
8. ✅ Maintain consistent code style

---

Need help? Check the README.md or create an issue on GitHub.
