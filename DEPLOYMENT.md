# Deployment Guide for Who Dat Ranch Website

This guide will help you get your website live on the internet quickly and easily.

## Prerequisites

Before deploying, make sure:

- ✅ All your images are added to `public/images/`
- ✅ Contact information is updated
- ✅ You've tested the site locally (`npm run dev`)
- ✅ Your code is in a Git repository (GitHub, GitLab, or Bitbucket)

## Option 1: Vercel (Recommended - Easiest & Free)

Vercel is made by the creators of Next.js and offers the best performance.

### Steps:

1. **Sign up at [vercel.com](https://vercel.com)**

   - Use your GitHub account for easy setup

2. **Import Your Project**

   - Click "Add New Project"
   - Select "Import Git Repository"
   - Choose your Who Dat Ranch repository

3. **Configure (Usually automatic)**

   - Framework Preset: Next.js (auto-detected)
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `.next` (auto-filled)

4. **Deploy**

   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site is live! 🎉

5. **Get Your Domain**
   - You'll get a free domain like `whodatranch.vercel.app`
   - Or connect your own custom domain (like whodatranch.com)

### Custom Domain Setup (Vercel):

1. Go to Project Settings > Domains
2. Add your domain (e.g., `whodatranch.com`)
3. Update your domain's DNS settings:
   - Add an A record pointing to Vercel's IP
   - Or add a CNAME record
   - Vercel will provide the exact instructions

**Deployment Time:** ~3 minutes  
**Cost:** FREE  
**Automatic Updates:** Yes (redeploys on git push)

---

## Option 2: Netlify (Easy & Free)

Netlify is another excellent option with a simple drag-and-drop interface.

### Steps:

1. **Sign up at [netlify.com](https://netlify.com)**

2. **Option A: Drag & Drop**

   - Build your site locally: `npm run build`
   - Drag the `.next` folder to Netlify
   - Done!

3. **Option B: Git Integration (Recommended)**

   - Click "Add new site" > "Import an existing project"
   - Choose your Git provider (GitHub)
   - Select your repository
   - Configure:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy"

4. **Custom Domain**
   - Go to Site Settings > Domain Management
   - Add custom domain
   - Follow DNS instructions

**Deployment Time:** ~3 minutes  
**Cost:** FREE  
**Automatic Updates:** Yes (with Git integration)

---

## Option 3: Traditional Web Hosting

If you have existing web hosting (GoDaddy, Bluehost, HostGator, etc.):

### Steps:

1. **Build your site:**

   ```bash
   npm run build
   ```

2. **Export static version:**
   Add to `next.config.js`:

   ```javascript
   module.exports = {
     output: "export",
   };
   ```

   Then run:

   ```bash
   npm run build
   ```

3. **Upload files:**
   - Find the `out` folder
   - Upload all contents via FTP/cPanel
   - Point domain to this folder

**Note:** This method won't support server-side features, but the site will work perfectly as a static site.

---

## Option 4: AWS, Google Cloud, or Azure

For enterprise deployments:

### AWS Amplify:

1. Connect repository
2. Auto-detected Next.js
3. Deploy

### Google Cloud Run:

1. Create Dockerfile
2. Push to container registry
3. Deploy

### Azure Static Web Apps:

1. Connect GitHub
2. Auto-build and deploy

---

## Connecting Your Custom Domain

If you own `whodatranch.com` and want to use it:

### DNS Configuration:

**For Vercel or Netlify:**

1. Log into your domain registrar (GoDaddy, Namecheap, etc.)
2. Go to DNS settings
3. Add these records:

```
Type: A
Name: @
Value: [Provided by Vercel/Netlify]

Type: CNAME
Name: www
Value: [Provided by Vercel/Netlify]
```

**Propagation time:** 24-48 hours (usually faster)

---

## SSL Certificate (HTTPS)

All recommended platforms (Vercel, Netlify) provide **free SSL certificates automatically**. Your site will be secure with `https://` from day one.

---

## Post-Deployment Checklist

After deploying:

- [ ] Test the site on multiple devices (phone, tablet, desktop)
- [ ] Verify all images load correctly
- [ ] Test the contact forms
- [ ] Check that social media links work
- [ ] Test navigation on mobile
- [ ] Verify contact information is correct
- [ ] Set up Google Analytics (optional)
- [ ] Submit to Google Search Console (optional)

---

## Updating Your Site

### With Vercel/Netlify (Git integration):

1. Make changes locally
2. Test with `npm run dev`
3. Commit to Git: `git commit -am "Update content"`
4. Push: `git push`
5. Your site automatically updates in 2-3 minutes! ✨

### Manual updates:

1. Make changes
2. Run `npm run build`
3. Re-upload files or re-deploy

---

## Costs

### Free Options:

- **Vercel Free Plan:**
  - Perfect for your needs
  - Unlimited bandwidth
  - Free SSL
  - Custom domain
- **Netlify Free Plan:**
  - 100GB bandwidth/month
  - Free SSL
  - Custom domain

### Paid (Optional):

- Custom domain: ~$10-15/year (from domain registrar)
- Vercel Pro: $20/month (only if you need team features)
- Email hosting: ~$5-10/month (for professional email)

---

## Troubleshooting

### Images not showing after deployment:

- Make sure images are in `public/images/` folder
- Check that image paths start with `/images/...`
- Verify images were included in build

### Build fails:

- Run `npm run build` locally first
- Check for errors in terminal
- Make sure all dependencies are in `package.json`

### Forms not working:

- The forms currently use browser alerts
- See README.md for email integration options
- Consider using Formspree or EmailJS

---

## Recommended: Vercel Deployment

**For the quickest deployment with best results:**

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"
6. Done in 3 minutes! 🚀

Your site will be at: `https://whodatranch.vercel.app`

Then you can connect your custom domain (whodatranch.com) in settings.

---

## Need Help?

Contact your web developers:

- King Gilbert & Matthew Christian
- 📧 mchristian@trinitygroupfl.com
- 📧 kgilbert@trinitygroupfl.com
- 📞 813-530-2061

---

**Your website is ready to go live! Choose Vercel for the fastest deployment.** 🎉
