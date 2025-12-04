# How to Add Your Mahindra Thar Images

## Quick Steps:

### 1. Prepare Your Images
- Collect 6 high-quality Mahindra Thar images
- Recommended angles:
  - Image 1: Front view
  - Image 2: Side/Profile view
  - Image 3: Interior/Dashboard
  - Image 4: Rear view
  - Image 5: Engine or detailed shot
  - Image 6: Another angle or feature

### 2. Rename Your Images
Rename your images to:
- `thar-1.jpg`
- `thar-2.jpg`
- `thar-3.jpg`
- `thar-4.jpg`
- `thar-5.jpg`
- `thar-6.jpg`

### 3. Place Images in Assets Folder
Copy all 6 images to:
```
src/assets/images/
```

### 4. Update App.jsx (Method 1 - Import Images)
Replace the placeholder URLs in `src/App.jsx` with:

```javascript
import thar1 from './assets/images/thar-1.jpg';
import thar2 from './assets/images/thar-2.jpg';
import thar3 from './assets/images/thar-3.jpg';
import thar4 from './assets/images/thar-4.jpg';
import thar5 from './assets/images/thar-5.jpg';
import thar6 from './assets/images/thar-6.jpg';

function App() {
  const carImages = [thar1, thar2, thar3, thar4, thar5, thar6];
  // ... rest of the code
}
```

### 5. Alternative - Place in Public Folder (Method 2)
If you prefer, you can place images in the `public` folder:

1. Create folder: `public/images/`
2. Copy your images there
3. Update `src/App.jsx`:

```javascript
const carImages = [
  '/images/thar-1.jpg',
  '/images/thar-2.jpg',
  '/images/thar-3.jpg',
  '/images/thar-4.jpg',
  '/images/thar-5.jpg',
  '/images/thar-6.jpg'
];
```

## Image Specifications:

**Recommended:**
- Format: JPG or PNG
- Dimensions: 800x600 pixels minimum (4:3 ratio)
- File size: Under 500KB each
- Total size: Under 3MB for all 6 images

**For best quality:**
- Resolution: 1200x800 pixels or higher
- Color space: sRGB
- Compression: High quality (80-90%)

## Where to Find Mahindra Thar Images:

1. **Official Mahindra Website**: Download press images
2. **Car Dealership**: Request high-res photos
3. **Stock Photo Sites**: 
   - Unsplash.com (search "Mahindra Thar")
   - Pexels.com
   - Pixabay.com

## Current Status:

✅ Placeholder images are currently being used
✅ Dark theme is applied
✅ Assets folder is ready at `src/assets/images/`
✅ README is in the images folder

## After Adding Images:

1. The images will automatically appear in the gallery
2. Thumbnails will be generated automatically
3. The carousel will work with your new images
4. No code changes needed if you follow the naming convention

---

**Ready to add your images!** Just copy them to `src/assets/images/` and update the import in `App.jsx`.
