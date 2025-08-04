# Image Optimization Guide

## Current Images Status
Your website now has optimized image attributes, but for best performance, consider compressing your images:

### Recommended Tools:
1. **Online Tools:**
   - TinyPNG (https://tinypng.com/) - Free PNG/JPG compression
   - Squoosh (https://squoosh.app/) - Google's image optimizer
   - ImageOptim (https://imageoptim.com/) - Mac app

2. **Command Line (if you have ImageMagick):**
   ```bash
   # Compress and resize images
   magick images/Garden-turfing.jpg -quality 85 -resize 1920x1080 images/Garden-turfing-optimized.jpg
   magick images/decking.jpg -quality 85 -resize 600x400 images/decking-optimized.jpg
   ```

### Target Sizes:
- **Hero background**: 1920x1080px, 85% quality, <200KB
- **Gallery images**: 600x400px, 85% quality, <100KB each

### Current Optimizations Applied:
✅ Lazy loading on all gallery images
✅ Width/height attributes to prevent layout shift
✅ Preload for critical hero image
✅ Local images (no external requests)
✅ Proper alt text for accessibility

### Next Steps:
1. Compress images using tools above
2. Replace current images with optimized versions
3. Run Lighthouse test to see performance improvements

### Expected Lighthouse Improvements:
- **Performance**: +15-25 points
- **Best Practices**: +5-10 points
- **SEO**: Already optimized
- **Accessibility**: Already optimized