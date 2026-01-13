# Quick Start Guide

Get your portfolio up and running in 5 minutes!

## 🚀 Step 1: Install Dependencies

```bash
cd about-me
npm install
```

This will install all required packages:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (icons)

## 🎨 Step 2: Customize Your Info

### Quick Updates (Required)

1. **Personal Info** - `src/components/sections/HeroSection.tsx`
   - Update your name
   - Update your tech stack
   - Update your description

2. **Contact Info** - `src/components/sections/ContactSection.tsx`
   - Update email address
   - Update GitHub username
   - Update LinkedIn profile
   - Update WhatsApp number

3. **Social Links** - `src/components/layout/Footer.tsx`
   - Update all social media links

4. **WhatsApp** - `src/components/common/WhatsAppButton.tsx`
   - Update phone number (without + or spaces)

5. **SEO** - `src/app/layout.tsx`
   - Update metadata
   - Update your name in title
   - Update description

### Detailed Customization

See [CUSTOMIZATION.md](./CUSTOMIZATION.md) for complete guide on:
- Adding/editing work experience
- Updating skills
- Adding projects
- Changing colors and fonts
- Adding your CV

## 🏃 Step 3: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## ✅ Step 4: Test Everything

- [ ] Check all sections load correctly
- [ ] Test dark/light mode toggle
- [ ] Click all navigation links
- [ ] Test WhatsApp button
- [ ] Test contact form
- [ ] Check mobile responsiveness (resize browser)
- [ ] Verify all personal info is updated

## 📦 Step 5: Build for Production

```bash
npm run build
```

Fix any errors that appear during build.

## 🚀 Step 6: Deploy

### Deploy to Vercel (Easiest)

1. Push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Click "Deploy"
6. Done! Your site is live 🎉

See [DEPLOYMENT.md](./DEPLOYMENT.md) for more deployment options.

## 📝 Before Going Live Checklist

- [ ] All personal information updated
- [ ] CV PDF added to `/public` folder
- [ ] All social links working
- [ ] Email addresses correct
- [ ] WhatsApp number correct
- [ ] Favicon added
- [ ] OG image added (for social sharing)
- [ ] Sitemap updated with your domain
- [ ] Tested on mobile device
- [ ] Tested dark and light modes
- [ ] No build errors

## 🎯 Common Issues

### Issue: "Module not found"
**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Build errors
**Solution:**
```bash
rm -rf .next
npm run build
```

### Issue: Styles not loading
**Solution:**
- Make sure Tailwind CSS is configured
- Check `globals.css` is imported in `layout.tsx`
- Clear browser cache

### Issue: Fonts not loading
**Solution:**
- Check internet connection (fonts load from Google Fonts)
- Verify font imports in `layout.tsx`

## 📚 Next Steps

1. **Add Your CV**
   - Export as PDF
   - Name it `cv-leynardo-yosef.pdf`
   - Place in `public` folder

2. **Add Profile Picture**
   - Add image to `public` folder
   - Update components to use it

3. **Add Project Images**
   - Add screenshots to showcase work
   - Use Next.js Image component

4. **Setup Analytics** (Optional)
   ```bash
   npm install @vercel/analytics
   ```

5. **Custom Domain** (Optional)
   - Configure in Vercel dashboard
   - Update DNS settings

## 🆘 Need Help?

- 📖 Read [README.md](./README.md)
- 🎨 Check [CUSTOMIZATION.md](./CUSTOMIZATION.md)
- 🚀 Review [DEPLOYMENT.md](./DEPLOYMENT.md)
- 💬 Open an issue on GitHub

## 🎉 You're All Set!

Your futuristic portfolio is ready to impress recruiters and showcase your backend engineering skills!

---

**Pro Tips:**
- Keep your experience and projects updated
- Share your portfolio on LinkedIn
- Add it to your GitHub profile README
- Include it in job applications
- Get feedback from peers

**Remember:** This is YOUR portfolio. Make it unique by:
- Customizing colors to your preference
- Adding personal projects
- Showcasing your best work
- Keeping content professional yet authentic

Good luck! 🚀
