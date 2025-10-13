# Getting Started with Who Dat Ranch Website

## Quick Start Guide

### Step 1: Install Dependencies

Open your terminal in this directory and run:

```bash
npm install
```

This will install all necessary packages (Next.js, React, Tailwind CSS, etc.)

### Step 2: Add Your Images

**This is the most important step!** Your website needs your property photos.

1. Create images in the `public/images/` folder
2. Download your images from whodatranch.com (right-click and save)
3. Rename them according to the list below

**Required image files:**

- Hero section: `hero1.jpg`, `hero2.jpg`, `hero3.jpg`
- Main home: `main-home.jpg`
- Amenities: `fishing-pond.jpg`, `garage.jpg`, `barn.jpg`
- Gallery: `gallery1.jpg` through `gallery9.jpg` (or more)

See `public/images/README.md` for detailed requirements.

### Step 3: Run the Development Server

```bash
npm run dev
```

Then open your browser to: **http://localhost:3000**

You should see your website! 🎉

### Step 4: Customize (Optional)

- Update contact info in `components/Footer.tsx` and `components/Header.tsx`
- Modify property descriptions in components
- Change colors in `tailwind.config.ts`

### Step 5: Deploy to the Internet

When you're ready to make it live:

**Option A: Vercel (Easiest)**

1. Create account at vercel.com
2. Connect your GitHub repository
3. Click "Deploy"
4. Done! Your site is live

**Option B: Netlify**

1. Create account at netlify.com
2. Drag and drop your project folder
3. Done!

## Need Help?

### Website isn't showing images?

- Make sure images are in `public/images/` folder
- Check that filenames match exactly (case-sensitive)
- Images should be JPG format

### Website won't start?

- Make sure Node.js 18+ is installed
- Delete `node_modules` folder and `.next` folder
- Run `npm install` again
- Run `npm run dev` again

### Form isn't sending emails?

- The forms currently just show alerts
- You'll need to integrate an email service (see README.md)
- Options: EmailJS, Formspree, SendGrid

## Quick Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Run production server
npm run lint     # Check for code issues
```

## What's Included

✅ Beautiful responsive design
✅ Image slideshow
✅ Interactive gallery
✅ Booking forms
✅ Mobile-friendly
✅ Fast performance
✅ SEO optimized

## Contact

King Gilbert & Matthew Christian

- 📞 813-530-2061 / 813-492-8233
- 📧 mchristian@trinitygroupfl.com
- 📧 kgilbert@trinitygroupfl.com

---

**Your website is ready! Just add your images and you're set to go live.** 🚀
