import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const openFullscreen = () => {
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  // Keyboard navigation for fullscreen mode
  useEffect(() => {
    if (!isFullscreen) return;

    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        closeFullscreen();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isFullscreen]);

  return (
    <>
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="relative glass-effect rounded-2xl overflow-hidden shadow-2xl hover-lift">
        <button 
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 glass-effect hover:bg-purple-600/80 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-purple-500 group"
          onClick={prevSlide}
        >
          <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="aspect-video w-full relative overflow-hidden cursor-zoom-in" onClick={openFullscreen}>
          <img 
            src={images[currentIndex]} 
            alt={`Car view ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute top-4 right-4 glass-effect px-3 py-1 rounded-full text-sm text-white flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
            </svg>
            Tap to Zoom In
          </div>
        </div>

        <button 
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 glass-effect hover:bg-purple-600/80 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-purple-500 group"
          onClick={nextSlide}
        >
          <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 glass-effect px-4 py-2 rounded-full">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-purple-500 w-8 shadow-lg shadow-purple-500/50' 
                  : 'bg-gray-600 hover:bg-gray-400'
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-5 gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            className={`relative aspect-video rounded-lg overflow-hidden transition-all duration-300 hover-lift group ${
              index === currentIndex 
                ? 'ring-4 ring-purple-500 scale-105 shadow-lg shadow-purple-500/50' 
                : 'ring-2 ring-gray-700 hover:ring-purple-400 opacity-70 hover:opacity-100'
            }`}
            onClick={() => goToSlide(index)}
          >
            <img 
              src={image} 
              alt={`Thumbnail ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        ))}
      </div>
    </div>

    {/* Fullscreen Modal */}
    {isFullscreen && (
      <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={closeFullscreen}
          className="absolute top-6 right-6 z-[110] p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-90 group"
          aria-label="Close fullscreen"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image Counter */}
        <div className="absolute top-6 left-6 z-[110] px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white font-medium">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Main Image Container */}
        <div className="flex items-center justify-center h-full px-20">
          <div className="relative max-w-6xl max-h-[85vh] w-full">
            <img
              src={images[currentIndex]}
              alt={`Fullscreen view ${currentIndex + 1}`}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-[110] p-4 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
          aria-label="Previous image"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-[110] p-4 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
          aria-label="Next image"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Thumbnail Strip - Left Side */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 z-[105] flex flex-col gap-3 max-h-[70vh] overflow-y-auto custom-scrollbar pr-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 group ${
                currentIndex === index 
                  ? 'ring-4 ring-purple-500 scale-105' 
                  : 'ring-2 ring-white/20 hover:ring-white/40 hover:scale-105'
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {currentIndex === index && (
                <div className="absolute inset-0 bg-purple-500/20"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    )}
  </>
  );
};

export default ImageCarousel;
