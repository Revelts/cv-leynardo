# Deployment Guide

## Deploy to Vercel (Recommended)

Vercel is the recommended platform for deploying Next.js applications.

### Quick Deploy

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy with Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Configure project:
     - Framework Preset: Next.js
     - Root Directory: ./
     - Build Command: `npm run build`
     - Output Directory: (leave default)
   - Click "Deploy"

3. **Environment Variables** (Optional)
   - Add environment variables in Vercel dashboard
   - Go to Project Settings → Environment Variables
   - Add variables from `.env.example`

### Custom Domain

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Wait for DNS propagation (usually 24-48 hours)

### Automatic Deployments

- Every push to `main` branch triggers a production deployment
- Every pull request creates a preview deployment
- View deployments in the Vercel dashboard

## Alternative Deployment Options

### Deploy to Netlify

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18 or higher

2. **Deploy**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify init
   netlify deploy --prod
   ```

### Deploy to VPS (Ubuntu/Debian)

1. **Install Dependencies**
   ```bash
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Install PM2
   sudo npm install -g pm2
   ```

2. **Clone and Build**
   ```bash
   git clone <your-repo>
   cd about-me
   npm install
   npm run build
   ```

3. **Start with PM2**
   ```bash
   pm2 start npm --name "portfolio" -- start
   pm2 save
   pm2 startup
   ```

4. **Setup Nginx (Optional)**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## Pre-Deployment Checklist

- [ ] Update personal information in all components
- [ ] Add your CV PDF to `/public/cv-leynardo-yosef.pdf`
- [ ] Update social media links (GitHub, LinkedIn, WhatsApp)
- [ ] Update email addresses
- [ ] Add favicon and OG images
- [ ] Update `site.webmanifest` with correct URLs
- [ ] Update `sitemap.xml` with your domain
- [ ] Update `robots.txt` with your domain
- [ ] Test responsiveness on all devices
- [ ] Test dark/light mode
- [ ] Run `npm run build` locally to check for errors
- [ ] Test all links and buttons
- [ ] Verify SEO metadata
- [ ] Add Google Analytics (optional)
- [ ] Add Google Search Console verification

## Performance Optimization

### Image Optimization
- Use Next.js Image component for all images
- Compress images before uploading
- Use WebP format when possible

### Code Splitting
- Components are automatically code-split by Next.js
- Use dynamic imports for heavy components:
  ```typescript
  import dynamic from 'next/dynamic'
  const HeavyComponent = dynamic(() => import('./HeavyComponent'))
  ```

### Caching
- Vercel automatically handles caching
- Static assets cached for 1 year
- API routes cached based on headers

## Monitoring

### Vercel Analytics
```bash
npm install @vercel/analytics
```

Add to `layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### Error Tracking (Optional)
- Sentry: [sentry.io](https://sentry.io)
- LogRocket: [logrocket.com](https://logrocket.com)

## Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
```bash
# Check TypeScript
npx tsc --noEmit
```

## Support

For issues or questions:
- Check [Next.js Documentation](https://nextjs.org/docs)
- Check [Vercel Documentation](https://vercel.com/docs)
- Open an issue on GitHub

---

Last updated: January 2026
