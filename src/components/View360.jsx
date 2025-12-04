import React, { useState, useEffect, useRef } from 'react';

const View360 = ({ image360 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const spinContainerRef = useRef(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen && spinContainerRef.current) {
      // Load the Sirv script when modal opens
      const script = document.createElement('script');
      script.src = 'https://scripts.sirv.com/sirvjs/v3/sirv.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        // Cleanup script when modal closes
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [isOpen]);

  return (
    <>
      <button 
        className="relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 hover:from-purple-700 hover:via-purple-800 hover:to-blue-700 text-white rounded-lg font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/60 transition-all duration-300 transform hover:scale-105 overflow-hidden group"
        onClick={openModal}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        <span className="text-2xl font-bold relative z-10">360°</span>
        <span className="relative z-10">Interactive View</span>
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 animate-fadeIn p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-gray-900 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto border border-gray-800 shadow-2xl animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 bg-gray-800 hover:bg-gray-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:rotate-90 z-10"
              onClick={closeModal}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="text-center py-8 px-6 border-b border-gray-800">
              <h2 className="text-3xl font-bold text-white mb-2">360° Interactive View</h2>
              <p className="text-gray-400">Drag to rotate the car</p>
            </div>

            <div 
              className="p-8 md:p-12 min-h-[500px] flex items-center justify-center bg-gradient-to-br from-gray-950 to-gray-900"
              ref={spinContainerRef}
            >
              <div 
                className="Sirv w-full h-full max-w-4xl min-h-[400px]" 
                data-src="https://ogkrn777.sirv.com/Images/z/thar.spin"
              ></div>
            </div>

            <div className="text-center py-6 px-6 bg-gray-950 border-t border-gray-800 rounded-b-2xl">
              <p className="text-gray-400 text-sm">Click and drag to rotate • Swipe on mobile</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default View360;
