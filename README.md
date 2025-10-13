# Who Dat Ranch Website

A modern, responsive website for Who Dat Ranch - a luxury 32-acre property in Frostproof, FL.

## Overview

This website showcases the beautiful Who Dat Ranch property with all its amenities including:

- 4 bedroom, 3 bathroom main home
- 32 acres of fully fenced property
- Fishing ponds
- Machine garages
- Multiple barns with livestock
- And much more!

## Tech Stack

- **Next.js 14** - React framework for production
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🖼️ IMPORTANT: Adding Your Images

The website is fully built but requires your property images. You'll need to add images to the `/public/images/` directory:

### Required Images:

Create a folder: `/public/images/`

Then add these images:

**Hero Section (3 images for slideshow):**

- `hero1.jpg` - Main property view
- `hero2.jpg` - Alternative property view
- `hero3.jpg` - Third property view

**Property Overview:**

- `main-home.jpg` - Main house exterior/interior

**Amenities:**

- `fishing-pond.jpg` - Fishing pond view
- `garage.jpg` - Machine garage
- `barn.jpg` - Barn/animal area

**Gallery (9+ images):**

- `gallery1.jpg` through `gallery9.jpg` - Various property views
- You can add more gallery images by adding `gallery10.jpg`, `gallery11.jpg`, etc.

### How to Get Your Images from the Current Website

Since you own the property, you can download images from your current site:

1. **Right-click on images** on whodatranch.com and select "Save Image As"
2. **Use browser developer tools:**

   - Right-click > Inspect
   - Go to Network tab
   - Reload page
   - Filter by "img"
   - Download each image

3. **Contact your hosting provider** (Wix) to get access to your media library

4. **Use a web scraper tool** (if comfortable with technical tools)

### Image Specifications:

- **Format**: JPG, PNG, or WebP
- **Hero images**: Minimum 1920x1080px (landscape)
- **Gallery images**: Minimum 1200x800px
- **Other images**: Minimum 800x600px
- **File size**: Optimize to under 500KB each for best performance

## Project Structure

```
whodatranch/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section with slideshow
│   ├── PropertyOverview.tsx # Property details
│   ├── BookingForm.tsx     # Tour booking form
│   ├── Gallery.tsx         # Image gallery
│   ├── Amenities.tsx       # Amenities showcase
│   ├── WhyChoose.tsx       # Benefits section
│   └── Footer.tsx          # Footer with contact info
├── public/
│   └── images/             # ADD YOUR IMAGES HERE
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Features

✅ Fully responsive design (mobile, tablet, desktop)
✅ Smooth scrolling navigation
✅ Image slideshow in hero section
✅ Interactive gallery with lightbox
✅ Contact/booking forms
✅ Social media integration
✅ Modern animations
✅ SEO optimized
✅ Fast loading with Next.js optimization

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel will automatically detect Next.js and deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" > "Import an existing project"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `.next`

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Update Contact Information

Edit `/components/Footer.tsx` and `/components/Header.tsx` to update:

- Phone numbers
- Email addresses
- Social media links
- Address

### Change Colors

Edit `/tailwind.config.ts`:

```typescript
colors: {
  primary: '#2C5F2D',    // Main green color
  secondary: '#97BC62',   // Light green
  accent: '#DAA520',      // Gold accent
}
```

### Modify Content

Each component contains the content inline. Simply edit the text in:

- `/components/PropertyOverview.tsx` - Property description
- `/components/Amenities.tsx` - Amenities descriptions
- `/components/WhyChoose.tsx` - Benefits text

## Form Handling

The booking forms currently show browser alerts. To integrate with a backend:

1. **EmailJS** - Free email service
2. **Formspree** - Simple form backend
3. **SendGrid** - Email API
4. **Custom API** - Build your own with Next.js API routes

Example with API route:

```typescript
// app/api/contact/route.ts
export async function POST(request: Request) {
  const data = await request.json();
  // Send email or save to database
  return Response.json({ success: true });
}
```

## Support

For questions or issues:

- Email: mchristian@trinitygroupfl.com
- Phone: 813-530-2061

## License

© 2035 Who Dat Ranch. All rights reserved.

---

**Built with ❤️ for Who Dat Ranch**
