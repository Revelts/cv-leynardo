# Vercel Deployment Guide

Your portfolio is ready for Vercel deployment! Follow these steps:

## 🚀 Quick Deploy (5 minutes)

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Backend Engineer Portfolio"

# Create main branch
git branch -M main

# Add your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

### Step 2: Deploy to Vercel

#### Option A: Using Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click **"Add New..."** → **"Project"**
4. Import your GitHub repository
5. Configure project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./`
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)
   - **Install Command**: `npm install` (auto-filled)
6. Click **"Deploy"**
7. Wait 2-3 minutes ⏳
8. Done! Your site is live at `https://your-project.vercel.app` 🎉

#### Option B: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? (press Enter for default)
# - Directory? ./ (press Enter)
# - Override settings? No (press Enter)

# Deploy to production
vercel --prod
```

### Step 3: Configure Custom Domain (Optional)

1. In Vercel Dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Add your domain (e.g., `leynardo.dev`)
4. Follow DNS configuration instructions:
   - **A Record**: Point to Vercel's IP
   - **CNAME**: Point `www` to `cname.vercel-dns.com`
5. Wait for DNS propagation (24-48 hours)
6. SSL certificate is automatically generated ✅

## 📋 Pre-Deployment Checklist

Before deploying, make sure you've completed:

### Required Updates
- [x] Updated personal information in all components
- [x] Updated email addresses
- [x] Updated GitHub username
- [x] Updated LinkedIn profile
- [x] Updated WhatsApp number
- [x] Updated all URLs to `https://leynardo.vercel.app`
- [x] Created `vercel.json` configuration
- [x] Created `.vercelignore` file

### Optional (Recommended)
- [ ] Added CV PDF to `/public/cv-leynardo-yosef.pdf`
- [ ] Added profile picture
- [ ] Added project screenshots
- [ ] Added favicon.ico (16x16, 32x32, 48x48)
- [ ] Added icon-192.png (192x192)
- [ ] Added icon-512.png (512x512)
- [ ] Added og-image.png (1200x630) for social sharing
- [ ] Tested on multiple devices
- [ ] Tested dark and light modes
- [ ] Verified all links work

## 🔍 Verify Build Locally

Before deploying, test the production build locally:

```bash
# Build for production
npm run build

# If successful, start production server
npm run start

# Open http://localhost:3000 and test everything
```

Fix any errors that appear during build before deploying.

## 🎯 After Deployment

### 1. Test Your Live Site
- [ ] Visit your Vercel URL
- [ ] Test all sections and navigation
- [ ] Test dark/light mode toggle
- [ ] Test WhatsApp button
- [ ] Test contact form
- [ ] Test on mobile device
- [ ] Test all external links

### 2. Setup Analytics (Optional)

Add Vercel Analytics:
```bash
npm install @vercel/analytics
```

Update `src/app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react'

// In body, after {children}:
<Analytics />
```

Redeploy:
```bash
git add .
git commit -m "Add Vercel Analytics"
git push
```

### 3. SEO Setup

#### Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property
3. Verify ownership (use HTML tag method)
4. Submit sitemap: `https://leynardo.vercel.app/sitemap.xml`

#### Update Metadata
Add your Google verification code in `src/app/layout.tsx`:
```typescript
verification: {
  google: 'YOUR_VERIFICATION_CODE',
},
```

### 4. Share Your Portfolio

- ✅ Add to LinkedIn profile
- ✅ Add to GitHub profile README
- ✅ Share on Twitter/X
- ✅ Include in job applications
- ✅ Add to email signature
- ✅ Share with your network

## 🔄 Continuous Deployment

Vercel automatically deploys when you push to GitHub:

```bash
# Make changes to your files
# ...

# Commit and push
git add .
git commit -m "Update experience section"
git push

# Vercel automatically deploys! 🚀
```

### Branch Deployments
- **Push to `main`**: Deploys to production
- **Create PR**: Creates preview deployment
- **Push to other branch**: Creates preview deployment

## 📊 Vercel Dashboard Features

### Deployments
- View all deployments
- Preview deployments before promoting
- Rollback to previous deployments
- View build logs

### Analytics
- Page views
- Top pages
- Visitor locations
- Device breakdown

### Speed Insights
- Core Web Vitals
- Performance scores
- Loading times

### Domains
- Manage custom domains
- SSL certificates
- DNS configuration

## 🐛 Troubleshooting

### Build Failed
```bash
# Check build locally
npm run build

# Common issues:
# - TypeScript errors: Fix type issues
# - Missing dependencies: npm install
# - Import errors: Check file paths
```

### Site Not Loading
- Check Vercel deployment status
- View build logs in Vercel dashboard
- Check for console errors in browser

### Images Not Loading
- Make sure images are in `/public` folder
- Use correct paths: `/image.png` not `./image.png`
- Check file names are correct (case-sensitive)

### Environment Variables
If you need env vars:
1. Go to Project Settings → Environment Variables
2. Add variables
3. Redeploy

## 🎨 Custom Configuration

### Vercel Configuration (`vercel.json`)
Already configured with:
- ✅ Build command
- ✅ Dev command
- ✅ Install command
- ✅ Framework detection
- ✅ Region optimization (Singapore)

### Environment Variables
Create `.env.local` (not committed to git):
```env
NEXT_PUBLIC_SITE_URL=https://leynardo.vercel.app
NEXT_PUBLIC_EMAIL=your.email@example.com
NEXT_PUBLIC_WHATSAPP=6281234567890
```

## 📈 Performance Optimization

Your site is already optimized with:
- ✅ Static page generation
- ✅ Automatic code splitting
- ✅ Image optimization ready
- ✅ CDN distribution
- ✅ Gzip compression
- ✅ Cache headers

Expected Lighthouse scores:
- **Performance**: 95-100
- **Accessibility**: 95-100
- **Best Practices**: 95-100
- **SEO**: 95-100

## 🆘 Need Help?

- 📖 [Vercel Documentation](https://vercel.com/docs)
- 💬 [Vercel Community](https://github.com/vercel/vercel/discussions)
- 🐛 [Report Issues](https://github.com/vercel/vercel/issues)

## 🎉 Success!

Your portfolio is now live and accessible worldwide!

**Your Live URL**: `https://leynardo.vercel.app`

Share it with:
- Recruiters
- Potential employers
- Your network
- LinkedIn connections
- GitHub followers

---

**Pro Tip**: Keep your portfolio updated with new projects and experiences. Regular updates show you're active and growing professionally!

Good luck with your job search! 🚀
