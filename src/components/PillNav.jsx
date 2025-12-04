import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const PillNav = ({ 
  items, 
  logo, 
  logoAlt = "Logo",
  activeHref = '/',
  className = '',
  ease = 'power2.easeOut',
  baseColor = '#1a1a1a',
  pillColor = '#9333ea',
  hoveredPillTextColor = '#ffffff',
  pillTextColor = '#e5e7eb'
}) => {
  const [activeItem, setActiveItem] = useState(activeHref);
  const [hoveredItem, setHoveredItem] = useState(null);
  const pillRef = useRef(null);
  const navRef = useRef(null);
  const itemRefs = useRef({});

  useEffect(() => {
    const activeElement = itemRefs.current[activeItem];
    if (activeElement && pillRef.current) {
      gsap.to(pillRef.current, {
        width: activeElement.offsetWidth,
        x: activeElement.offsetLeft,
        duration: 0.3,
        ease: ease
      });
    }
  }, [activeItem, ease]);

  const handleMouseEnter = (item) => {
    setHoveredItem(item.href);
    const element = itemRefs.current[item.href];
    if (element && pillRef.current) {
      gsap.to(pillRef.current, {
        width: element.offsetWidth,
        x: element.offsetLeft,
        duration: 0.3,
        ease: ease
      });
    }
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    const activeElement = itemRefs.current[activeItem];
    if (activeElement && pillRef.current) {
      gsap.to(pillRef.current, {
        width: activeElement.offsetWidth,
        x: activeElement.offsetLeft,
        duration: 0.3,
        ease: ease
      });
    }
  };

  return (
    <nav 
      ref={navRef}
      className={`flex items-center gap-6 px-6 py-2 rounded-full relative backdrop-blur-md bg-gray-900/40 border border-purple-500/20 shadow-lg ${className}`}
      style={{ backgroundColor: 'transparent' }}
    >
      {logo && (
        <div className="flex items-center z-10">
          <img src={logo} alt={logoAlt} className="h-8 w-auto" />
        </div>
      )}
      
      <div className="flex items-center gap-2 relative">
        <div 
          ref={pillRef}
          className="absolute h-full rounded-full transition-all"
          style={{ 
            backgroundColor: pillColor,
            left: 0,
            top: 0
          }}
        />
        
        {items.map((item, index) => (
          <a
            key={index}
            ref={(el) => itemRefs.current[item.href] = el}
            href={item.href}
            onClick={(e) => {
              if (item.href.startsWith('#')) {
                e.preventDefault();
                setActiveItem(item.href);
                document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
              } else {
                setActiveItem(item.href);
              }
            }}
            onMouseEnter={() => handleMouseEnter(item)}
            onMouseLeave={handleMouseLeave}
            className="px-4 py-2 text-sm font-medium transition-colors duration-300 relative z-10 cursor-pointer"
            style={{
              color: (hoveredItem === item.href || activeItem === item.href) 
                ? hoveredPillTextColor 
                : pillTextColor
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default PillNav;
