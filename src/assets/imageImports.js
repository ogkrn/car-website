// Car image imports
// Replace these with actual Mahindra Thar images
// Add your images to src/assets/images/ folder with names: thar-1.jpg, thar-2.jpg, etc.

// Function to import images dynamically
const getCarImages = () => {
  try {
    // Try to import actual images from assets folder
    const images = [];
    for (let i = 1; i <= 6; i++) {
      try {
        images.push(new URL(`./images/thar-${i}.jpg`, import.meta.url).href);
      } catch {
        // If image doesn't exist, use placeholder
        images.push(`https://placehold.co/800x600/1a1a1a/9333ea?text=Thar+Image+${i}`);
      }
    }
    return images;
  } catch (error) {
    // Fallback to placeholder images
    return [
      'https://placehold.co/800x600/1a1a1a/9333ea?text=Mahindra+Thar+Front',
      'https://placehold.co/800x600/1a1a1a/9333ea?text=Mahindra+Thar+Side',
      'https://placehold.co/800x600/1a1a1a/9333ea?text=Mahindra+Thar+Interior',
      'https://placehold.co/800x600/1a1a1a/9333ea?text=Mahindra+Thar+Dashboard',
      'https://placehold.co/800x600/1a1a1a/9333ea?text=Mahindra+Thar+Rear',
      'https://placehold.co/800x600/1a1a1a/9333ea?text=Mahindra+Thar+Engine'
    ];
  }
};

export { getCarImages };