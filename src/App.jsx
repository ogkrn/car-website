import React from 'react';
import { useState, useEffect } from 'react';
import ImageCarousel from './components/ImageCarousel';
import View360 from './components/View360';
import PriceCalculator from './components/PriceCalculator';
import CarOverview from './components/CarOverview';
import PillNav from './components/PillNav';
import ClickSpark from './lib/click';
import GradientText from './components/GradientText';

// Import car images from assets
import thar1 from './assets/2189881.jpg';
import thar2 from './assets/2189904.jpg';
import thar3 from './assets/2189915.jpg';
import thar4 from './assets/2189949.jpg';
import thar5 from './assets/2190059.jpg';
import logo from './assets/logo.png';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Real Mahindra Thar images from assets folder
  const carImages = [thar1, thar2, thar3, thar4, thar5];
  
  // Use first image for 360° view
  const view360Image = thar1;

  const navItems = [
    { label: 'Gallery', href: '#gallery' },
    { label: 'Overview', href: '#overview' },
    { label: 'Calculator', href: '#calculator' }
  ];

  const carData = {
    model: 'Mahindra Thar',
    variant: 'LXT 4WD Diesel',
    year: 2021,
    mileage: '9 kmpl',
    price: 'Rs. 9.99 Lakh',
    priceRange: 'Rs. 12.19 - 16.99 Lakh',
    kmDriven: '32,450 km',
    fuelType: 'Diesel',
    transmission: 'Manual',
    ownership: 'First Owner',
    registrationState: 'HR (Haryana)',
    location: 'Delhi',
    
    // Specifications from the image
    specifications: {
      engineDisplacement: '1497 cc',
      numberOfCylinders: 4,
      maxPower: '116.93bhp@3500rpm',
      maxTorque: '300Nm@1750-2500rpm',
      seatingCapacity: 4,
      fuelTankCapacity: '45 Litres',
      groundClearance: '226 mm',
      bodyType: 'SUV',
      engineType: 'D117 CRDe Diesel',
      transmissionType: 'Manual',
      gearbox: '6-Speed',
      driveType: '4WD',
      valvesPerCylinder: 4,
      turboCharger: true
    },

    // Key features
    features: [
      'Power Steering',
      'Power Windows Front',
      'Anti-lock Braking System (ABS)',
      'Air Conditioner',
      'Driver Airbag',
      'Passenger Airbag',
      'Alloy Wheels',
      'Multi-function Steering Wheel'
    ],

    // Latest updates
    updates: [
      {
        date: '3 Oct 2025',
        text: 'Mahindra Thar facelift 2025 has been launched at Rs. 9.99 lakh (ex-showroom).'
      },
      {
        date: '22 Sep 2025',
        text: 'The Mahindra Thar facelift is expected to launch on 3 October. It will likely feature new head lights with LED DRLs, updated bumpers, grille, alloys and wheel arches.'
      },
      {
        date: '18 Jun 2025',
        text: 'Fresh spy shots of the Thar 3-door facelift hint that the model will receive a fascia inspired by the Thar Roxx. The SUV will also under minor changes to the interior.'
      }
    ],

    // Variants
    variants: [
      { name: 'AXT', price: 'Rs. 9.99 Lakh' },
      { name: 'LXT', price: 'Rs. 12.19 - 16.99 Lakh' }
    ]
  };

  return (
    <ClickSpark
      sparkColor='#f1b139ff'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="min-h-screen bg-gray-950">
      {/* Glassmorphic Navbar with PillNav */}
      <header className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${isScrolled ? 'top-4' : 'top-6'}`}>
        <nav className="backdrop-blur-md bg-gray-900/60 border border-gray-700/50 rounded-full px-6 py-3 shadow-2xl shadow-black/20">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-600/30 transition-all rounded-full"></div>
                <img src={logo} alt="Mahindra Logo" className="w-8 h-8 object-contain relative z-10 drop-shadow-2xl" />
              </div>
              <span className="text-xl font-bold tracking-wider text-transparent bg-clip-text bg-linear-to-r from-amber-500 to-yellow-500">
                CARS
              </span>
            </div>
            
            <PillNav
              items={navItems}
              activeHref="#gallery"
              ease="power2.easeOut"
              baseColor="transparent"
              pillColor="rgb(188, 127, 3)"
              hoveredPillTextColor="#ffffff"
              pillTextColor="#d1d5db"
              className="hidden md:flex"
            />
            
            <button className="md:hidden text-gray-300 hover:text-white transition-colors p-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <div className="container mx-auto px-4 py-8 pt-32">
        <main className="space-y-12">
        <section id="gallery" className="space-y-6 animate-fadeIn">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-3 pb-1" style={{ lineHeight: '1.3' }}>
                  <GradientText
                    colors={["#ffffff", "#c084fc", "#ffffff", "#c084fc", "#ffffff"]}
                    animationSpeed={3}
                  >
                    Vehicle Gallery
                  </GradientText>
                </h2>
                <p className="text-gray-400 text-lg">Explore every angle of the Mahindra Thar</p>
              </div>
              <View360 image360={view360Image} />
            </div>
          </div>
          <ImageCarousel images={carImages} />
        </section>

        <section id="overview">
          <CarOverview carData={carData} />
        </section>

        <section id="calculator" className="space-y-6">
          <div className="max-w-5xl mx-auto text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-2">
              <GradientText
                colors={["#ffffff", "#c084fc", "#ffffff", "#c084fc", "#ffffff"]}
                animationSpeed={3}
              >
                Calculate Your EMI
              </GradientText>
            </h2>
            <p className="text-gray-400 text-lg">Find out your monthly payment with our easy-to-use calculator</p>
          </div>
          <PriceCalculator carPrice={999000} />
        </section>
        </main>
      </div>

      <footer className="glass-effect border-t border-gray-800/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-2">
            <p className="text-gray-300">&copy; 2025 Mahindra Thar Showcase. All rights reserved.</p>
            <p className="text-gray-500 text-sm">Modern car showcase built with React, Vite, and Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
    </ClickSpark>
  );
}

export default App;
