# 🚀 Deployment Guide

## Quick Deployment Options

### Option 1: Vercel (Recommended - Easiest)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd "c:\Users\Karan Joshi\Desktop\code\car-website"
   vercel
   ```

3. **Follow prompts**
   - Login/Signup when prompted
   - Confirm project settings
   - Get your live URL!

**Result**: Your site will be live at `https://your-project.vercel.app`

---

### Option 2: Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy via Netlify Drop**
   - Go to [netlify.com/drop](https://app.netlify.com/drop)
   - Drag & drop the `dist` folder
   - Get instant deployment!

**Result**: Live URL provided immediately

---

### Option 3: GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json** - Add these scripts:
   ```json
   "homepage": "https://yourusername.github.io/car-website",
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

**Result**: Site live at `https://yourusername.github.io/car-website`

---

## Pre-Deployment Checklist

- ✅ Run `npm run build` successfully
- ✅ Test the production build with `npm run preview`
- ✅ Check all features work correctly
- ✅ Verify responsive design on different devices
- ✅ Ensure no console errors
- ✅ Update README with deployment URL

---

## Environment Variables

This project doesn't require environment variables. If you add API keys later:

1. Create `.env` file
2. Add variables: `VITE_API_KEY=your_key`
3. Access in code: `import.meta.env.VITE_API_KEY`
4. Add to `.gitignore`
5. Configure in deployment platform

---

## Build Commands for Deployment Platforms

**Build Command**: `npm run build`  
**Output Directory**: `dist`  
**Install Command**: `npm install`  
**Development Command**: `npm run dev`

---

## Post-Deployment Steps

1. **Test the live site**
   - Check all features work
   - Test on mobile devices
   - Verify all images load

2. **Share the URL**
   - Add to your resume
   - Include in GitHub README
   - Share in your submission

3. **Monitor Performance**
   - Use Lighthouse for performance audit
   - Check loading times
   - Verify SEO basics

---

## Custom Domain (Optional)

### For Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS settings as instructed

### For Netlify:
1. Go to Domain Settings
2. Add custom domain
3. Configure DNS

---

## Troubleshooting

### Build Fails
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear cache: `npm cache clean --force`
- Check Node version: `node -v` (should be v16+)

### Images Not Loading
- Ensure images are in `public` folder or imported correctly
- Check image paths in production

### 404 Errors
- For Vercel/Netlify: Add `vercel.json` or `_redirects` file for SPA routing
- Ensure homepage setting in package.json is correct

---

## GitHub Repository Setup

1. **Initialize Git** (if not already)
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Car Website Assignment"
   ```

2. **Create GitHub Repository**
   - Go to github.com
   - Create new repository
   - Name it "car-website" or similar

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/car-website.git
   git branch -M main
   git push -u origin main
   ```

4. **Update README with deployment link**

---

## Deployment Checklist

Before submitting your assignment:

- ✅ Application is deployed and accessible
- ✅ All features work on live site
- ✅ Mobile responsive verified
- ✅ No console errors on live site
- ✅ GitHub repository is public
- ✅ README includes live demo link
- ✅ Deployment link added to submission

---

## Example Submission Format

```
Assignment Submission - Front-End Internship

Name: [Your Name]
Project: Car Website

🔗 Live Demo: https://your-project.vercel.app
📁 GitHub Repo: https://github.com/yourusername/car-website

✅ All features implemented:
   - Picture Scroll (Image Carousel)
   - 360° View Button
   - Price Calculator (EMI)
   - Car Overview Section

🛠️ Tech Stack: React, Vite, CSS3
📱 Fully Responsive
🎨 Professional UI/UX

Thank you for your consideration!
```

---

## Need Help?

If you encounter issues during deployment:

1. Check build logs for errors
2. Verify all dependencies are installed
3. Test locally with `npm run preview`
4. Check deployment platform documentation
5. Ensure Node version compatibility

---

## Success! 🎉

Once deployed, your car website will be live and accessible to anyone with the URL. Share it proudly in your assignment submission!

**Good luck with your interview! 🚀**
