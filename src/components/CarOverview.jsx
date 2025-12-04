import React, { useRef, useEffect } from 'react';
import GradientText from './GradientText';

const CarOverview = ({ carData }) => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e, card) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--glow-x', `${x}%`);
      card.style.setProperty('--glow-y', `${y}%`);
      card.style.setProperty('--glow-intensity', '1');
    };

    const handleMouseLeave = (card) => {
      card.style.setProperty('--glow-intensity', '0');
    };

    cardRefs.current.forEach((card) => {
      if (card) {
        const moveHandler = (e) => handleMouseMove(e, card);
        const leaveHandler = () => handleMouseLeave(card);
        card.addEventListener('mousemove', moveHandler);
        card.addEventListener('mouseleave', leaveHandler);
        
        card._moveHandler = moveHandler;
        card._leaveHandler = leaveHandler;
      }
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card && card._moveHandler) {
          card.removeEventListener('mousemove', card._moveHandler);
          card.removeEventListener('mouseleave', card._leaveHandler);
        }
      });
    };
  }, []);

  const addCardRef = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };
  const {
    model,
    variant,
    year,
    mileage,
    price,
    location,
    specifications,
    features,
    updates,
    variants
  } = carData;

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div ref={addCardRef} className="max-w-5xl mx-auto relative glass-effect rounded-2xl p-6 md:p-8 shadow-2xl overflow-hidden hover-lift group">
        <div className="absolute inset-0 bg-linear-to-br from-purple-900/40 via-gray-900/60 to-blue-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 relative z-10">
          <div className="flex-1">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">
              <GradientText
                colors={["#ffffff", "#c084fc", "#ffffff", "#c084fc", "#ffffff"]}
                animationSpeed={3}
              >
                {model}
              </GradientText>
            </h1>
            <p className="text-lg text-purple-400 mb-4">{variant}</p>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="flex items-center gap-2 text-gray-300 bg-gray-800 px-3 py-1.5 rounded-lg">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {location}
              </span>
              <span className="flex items-center gap-2 text-gray-300 bg-gray-800 px-3 py-1.5 rounded-lg">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {year}
              </span>
              <span className="flex items-center gap-2 text-gray-300 bg-gray-800 px-3 py-1.5 rounded-lg">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {mileage}
              </span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl p-6 text-center min-w-[200px]">
            <div className="text-sm text-purple-200 mb-1">Starting Price</div>
            <div className="text-3xl font-bold text-white mb-1">{price}</div>
            <div className="text-xs text-purple-200">*Ex-showroom</div>
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="max-w-5xl mx-auto relative glass-effect rounded-2xl p-6 md:p-8 hover-lift overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-purple-900/40 via-gray-900/60 to-blue-900/40"></div>
        <div className="relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          <GradientText
            colors={["#ffffff", "#c084fc", "#ffffff", "#c084fc", "#ffffff"]}
            animationSpeed={3}
          >
            Technical Specifications
          </GradientText>
        </h2>
        
        <div className="space-y-6">
          {/* Engine & Transmission */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              <GradientText
                colors={["#a855f7", "#c084fc", "#a855f7"]}
                animationSpeed={3}
              >
                Engine & Transmission
              </GradientText>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div ref={addCardRef} className="bg-gray-800/50 p-4 rounded-lg hover-lift">
                <div className="text-sm text-gray-400 mb-1">Engine Type</div>
                <div className="text-white font-semibold">{specifications.engineType}</div>
              </div>
              <div ref={addCardRef} className="bg-gray-800/50 p-4 rounded-lg hover-lift">
                <div className="text-sm text-gray-400 mb-1">Displacement</div>
                <div className="text-white font-semibold">{specifications.engineDisplacement}</div>
              </div>
              <div ref={addCardRef} className="bg-gray-800/50 p-4 rounded-lg hover-lift">
                <div className="text-sm text-gray-400 mb-1">Max Power</div>
                <div className="text-white font-semibold">{specifications.maxPower}</div>
              </div>
              <div ref={addCardRef} className="bg-gray-800/50 p-4 rounded-lg hover-lift">
                <div className="text-sm text-gray-400 mb-1">Max Torque</div>
                <div className="text-white font-semibold">{specifications.maxTorque}</div>
              </div>
              <div ref={addCardRef} className="bg-gray-800/50 p-4 rounded-lg hover-lift">
                <div className="text-sm text-gray-400 mb-1">Transmission</div>
                <div className="text-white font-semibold">{specifications.transmissionType}</div>
              </div>
              <div ref={addCardRef} className="bg-gray-800/50 p-4 rounded-lg hover-lift">
                <div className="text-sm text-gray-400 mb-1">Gearbox</div>
                <div className="text-white font-semibold">{specifications.gearbox}</div>
              </div>
            </div>
          </div>

          {/* Dimensions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              <GradientText
                colors={["#a855f7", "#c084fc", "#a855f7"]}
                animationSpeed={3}
              >
                Dimensions & Capacity
              </GradientText>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div ref={addCardRef} className="bg-gray-800/50 p-4 rounded-lg hover-lift">
                <div className="text-sm text-gray-400 mb-1">Seating Capacity</div>
                <div className="text-white font-semibold">{specifications.seatingCapacity}</div>
              </div>
              <div ref={addCardRef} className="bg-gray-800/50 p-4 rounded-lg hover-lift">
                <div className="text-sm text-gray-400 mb-1">Ground Clearance</div>
                <div className="text-white font-semibold">{specifications.groundClearance}</div>
              </div>
              <div ref={addCardRef} className="bg-gray-800/50 p-4 rounded-lg hover-lift">
                <div className="text-sm text-gray-400 mb-1">Fuel Tank</div>
                <div className="text-white font-semibold">{specifications.fuelTankCapacity}</div>
              </div>
              <div ref={addCardRef} className="bg-gray-800/50 p-4 rounded-lg hover-lift">
                <div className="text-sm text-gray-400 mb-1">Body Type</div>
                <div className="text-white font-semibold">{specifications.bodyType}</div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="max-w-5xl mx-auto relative bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-purple-900/40 via-gray-900/60 to-blue-900/40"></div>
        <div className="relative z-10">
        <h2 className="text-2xl font-bold mb-6">
          <GradientText
            colors={["#ffffff", "#c084fc", "#ffffff", "#c084fc", "#ffffff"]}
            animationSpeed={3}
          >
            Key Features
          </GradientText>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div key={index} ref={addCardRef} className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg">
              <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default CarOverview;
