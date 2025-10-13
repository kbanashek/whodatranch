# How to Get Images from Your Current Website

Since you own the property, here are several ways to obtain the images from whodatranch.com:

## Method 1: Right-Click and Save (Easiest)

1. Go to [whodatranch.com](https://www.whodatranch.com/)
2. Right-click on any image
3. Select "Save Image As..."
4. Save to your computer
5. Move the image to `public/images/` folder
6. Rename according to the requirements (see below)

**Pros:** Simple, no technical knowledge needed  
**Cons:** Can be tedious for many images, may not get highest quality

---

## Method 2: Browser Developer Tools (Better Quality)

This method often gives you higher quality images:

### Chrome/Edge:

1. Go to whodatranch.com
2. Press `F12` (or right-click > Inspect)
3. Click the **Network** tab
4. Click **Img** filter
5. Refresh the page (`Ctrl+R` or `Cmd+R`)
6. You'll see all images loading
7. Right-click any image > "Open in new tab"
8. Right-click the image > "Save Image As..."

### Safari:

1. Safari > Preferences > Advanced
2. Check "Show Develop menu"
3. Develop > Show Web Inspector
4. Follow similar steps as Chrome

**Pros:** Gets original quality images  
**Cons:** Slightly more technical

---

## Method 3: Contact Your Web Host (Best Quality)

Since you own the site, you can get direct access to all your original images:

### For Wix (Your current host):

1. **Try to Login:**

   - Go to [wix.com](https://www.wix.com)
   - Try to login with any email/password you might have used
   - Try password recovery with property-related emails

2. **Contact Wix Support:**

   - Call: 1-800-6000-WIX (949)
   - Explain you own the property and need access
   - Provide proof of ownership (property deed, tax records)
   - They can help you regain access or export your media

3. **Once logged in:**
   - Go to "Media Manager"
   - Select all images
   - Download as a ZIP file
   - Extract and use in your new site

**Pros:** Gets all original high-quality images at once  
**Cons:** May require time to regain access

---

## Method 4: Wayback Machine (Backup Option)

If the current site goes down:

1. Go to [archive.org/web](https://archive.org/web/)
2. Enter: whodatranch.com
3. Select a recent snapshot
4. Download images from the archived version

---

## Method 5: Browser Extensions

### Chrome/Edge Extensions:

- **Image Downloader** - Download all images from a page
- **Download All Images** - Batch download
- **Image Cyborg** - Extract all images

1. Install extension from Chrome Web Store
2. Go to whodatranch.com
3. Click the extension icon
4. Select "Download All Images"
5. Images save to your Downloads folder

**Pros:** Fast, downloads all images at once  
**Cons:** Need to install extension, may download extra images

---

## Method 6: Professional Tools

### For Tech-Savvy Users:

**HTTrack Website Copier:**

1. Download HTTrack (free)
2. Enter URL: whodatranch.com
3. It downloads the entire site including images
4. Find images in the downloaded folder

**wget (Command Line):**

```bash
wget -r -l1 -H -t1 -nd -N -np -A jpg,jpeg,png -erobots=off https://www.whodatranch.com/
```

---

## After Downloading Images

### Required Image Names:

Save/rename your images to match these names exactly:

```
public/images/
├── hero1.jpg          (Main property photo for slideshow)
├── hero2.jpg          (Second slideshow photo)
├── hero3.jpg          (Third slideshow photo)
├── main-home.jpg      (Main house exterior)
├── fishing-pond.jpg   (Pond/dock photo)
├── garage.jpg         (Machine garage)
├── barn.jpg           (Barn/animal area)
├── gallery1.jpg       (Gallery image 1)
├── gallery2.jpg       (Gallery image 2)
├── gallery3.jpg       (Gallery image 3)
├── gallery4.jpg       (Gallery image 4)
├── gallery5.jpg       (Gallery image 5)
├── gallery6.jpg       (Gallery image 6)
├── gallery7.jpg       (Gallery image 7)
├── gallery8.jpg       (Gallery image 8)
└── gallery9.jpg       (Gallery image 9)
```

### Image Selection Guide:

- **hero1.jpg** - Your best, most impressive property shot
- **hero2.jpg** - Alternative impressive view
- **hero3.jpg** - Third impressive view
- **main-home.jpg** - Clear shot of the main house
- **fishing-pond.jpg** - Pond with dock
- **garage.jpg** - Machine garage/vehicles
- **barn.jpg** - Barn or animal area
- **gallery1-9.jpg** - Mix of property views:
  - Interior shots
  - Exterior views
  - Amenities
  - Landscape
  - Wildlife
  - Pool area
  - Unique features

---

## Image Optimization (Optional)

After getting your images, you can optimize them for web:

### Free Online Tools:

- **TinyPNG** ([tinypng.com](https://tinypng.com)) - Compress without losing quality
- **Squoosh** ([squoosh.app](https://squoosh.app)) - Google's image compressor
- **ImageOptim** (Mac) - Drag and drop optimization

### Recommended Settings:

- Format: JPG for photos
- Quality: 80-85%
- Max width: 1920px for hero images
- Max width: 1200px for other images

---

## Need Help?

If you're having trouble getting the images:

1. **Ask the listing agents:**

   - King Gilbert: kgilbert@trinitygroupfl.com
   - Matthew Christian: mchristian@trinitygroupfl.com
   - They may have the original photo shoot files

2. **Contact the photographer:**

   - If you had professional photos taken for the original listing
   - They should have high-res originals

3. **Use your own photos:**
   - If you have personal photos of the property
   - Even phone photos work if they're good quality

---

## Temporary Solution

Don't have the images yet but want to see the site working?

You can use **placeholder images** temporarily:

- [Unsplash](https://unsplash.com) - Free high-quality photos
- [Pexels](https://pexels.com) - Free stock photos
- Search for "ranch", "property", "luxury home"

Just remember to replace them with your actual property photos before going live!

---

## Quick Checklist

- [ ] Download all images from current site
- [ ] Rename images according to the list above
- [ ] Place images in `public/images/` folder
- [ ] Optimize images for web (under 500KB each)
- [ ] Test the site (`npm run dev`)
- [ ] Verify all images display correctly

---

**Once you have your images in place, your new website will be ready to go live!** 🎉
