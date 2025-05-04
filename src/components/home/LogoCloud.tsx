import React from 'react';
import Marquee from "react-fast-marquee";
import { motion } from 'framer-motion';

// Updated list of logos based on files found in /public/logos/
const logos = [
  { name: 'Microsoft Teams', filename: 'Microsoft_Office_Teams Logo.png' },
  { name: 'Slack', filename: 'Slack-logo.png' },
  { name: 'Claude AI', filename: 'Claude_AI_logo.png' },
  { name: 'Gemini', filename: 'Gemini-Logo.png' },
  { name: 'OpenAI', filename: 'OpenAI-Logo.png' },
  { name: 'Looker Studio', filename: 'Looker Studio.png' },
  { name: 'Google Analytics', filename: 'Google Analytics Logo.png' },
  { name: 'Power BI', filename: 'Power BI Logo.png' },
  { name: 'HubSpot', filename: 'HubSpot_Logo.png' },
  { name: 'Snowflake', filename: 'Snowflake_Logo.svg.png' },
  { name: 'SAP', filename: 'SAP_logo.png' },
  { name: 'Envida', filename: 'envida-logo.png' },
  { name: 'SugarFunge', filename: 'SugarFunge Logo.png' }, // Note: filename changed slightly from search result
  { name: 'Pollo Campestre', filename: 'Pollo_Campestre_logo.png' },
];

const LogoCloud = () => {
  return (
    // Match background, add border, add relative positioning for decorators
    <div className="relative overflow-hidden bg-[#06070a] py-16 sm:py-20 border-t border-b border-gray-800/50">
      {/* Faint Background Grid */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 z-0 opacity-[0.04] 
                   before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,_rgba(100,116,139,0.3)_1px,_transparent_1px)] before:bg-[size:2rem_2rem] 
                   after:absolute after:inset-0 after:bg-[linear-gradient(to_right,_rgba(100,116,139,0.3)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(100,116,139,0.3)_1px,_transparent_1px)] after:bg-[size:2rem_2rem]"
      />

      {/* Subtle Top Glow Effect - Increased opacity, reduced blur */}
      <div 
        aria-hidden="true" 
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900/30 opacity-60 blur-xl"
      />

      {/* Decorative Dots - Increased size, opacity, reduced blur */}
      <motion.div 
        className="absolute top-[15%] left-[8%] w-5 h-5 bg-purple-600 rounded-full opacity-50 blur-sm hidden lg:block z-0"
        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4.5, repeat: Infinity, repeatType: "reverse", delay: 0.8 }}
      />
      <motion.div 
        className="absolute bottom-[20%] right-[10%] w-6 h-6 bg-blue-500 rounded-full opacity-60 blur-md hidden md:block z-0"
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 5.5, repeat: Infinity, repeatType: "reverse", delay: 1.2 }}
      />
      {/* Additional Decorative Dot */}
      <motion.div 
        className="absolute top-[60%] left-[15%] w-4 h-4 bg-teal-600 rounded-full opacity-40 blur-md hidden md:block z-0"
        animate={{ y: [0, 10, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", delay: 0.4 }}
      />
      {/* New Decorative Dot 1 */}
      <motion.div 
        className="absolute top-[25%] right-[12%] w-3 h-3 bg-pink-500 rounded-full opacity-30 blur-sm hidden lg:block z-0"
        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", delay: 1.5 }}
      />
      {/* New Decorative Dot 2 */}
      <motion.div 
        className="absolute bottom-[30%] left-[25%] w-5 h-5 bg-indigo-600 rounded-full opacity-40 blur-md hidden md:block z-0"
        animate={{ x: [0, -8, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", delay: 0.9 }}
      />
      
      {/* Content Container - Ensure it's above decorators and hides marquee overflow */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 overflow-hidden">
        <h2 className="text-center text-base font-semibold leading-7 text-gray-400 mb-8 sm:mb-10">
          Integrating seamlessly with your existing ecosystem
        </h2>
        {/* Marquee Component */}
        <Marquee 
          gradient={true} 
          gradientColor={'rgb(6, 7, 10)'} // Match bg color #06070a for fade
          gradientWidth={50}
          speed={40} // Adjust speed as needed
          pauseOnHover={true}
          className="overflow-hidden"
        >
          {logos.map((logo, index) => {
            // List of logos that need color inversion for dark backgrounds
            const logosToInvert = ['Claude AI', 'OpenAI', 'Slack'];
            const shouldInvert = logosToInvert.includes(logo.name);

            // List of logos that should be slightly larger
            const logosToEnlarge = ['Slack', 'Gemini', 'OpenAI', 'Power BI'];
            const shouldEnlarge = logosToEnlarge.includes(logo.name);

            return (
              <div 
                key={`${logo.name}_${index}`} 
                // Ensure items are centered vertically within fixed height
                className="mx-10 flex h-12 w-auto items-center justify-center overflow-y-hidden sm:mx-12" 
              >
                {/* 
                  ↓↓↓ LOGO IMAGE IMPLEMENTATION ↓↓↓
                  - Ensure logo files (e.g., envida-logo.png) exist in /public/logos/
                */}
                <img 
                  src={`/logos/${logo.filename}`} // Use the filename directly
                  alt={`${logo.name} Logo`} 
                  title={logo.name}
                  // Conditionally add 'invert' class and adjust max-height
                  className={`
                    w-auto object-contain filter grayscale hover:filter-none 
                    transition-all duration-300 opacity-70 hover:opacity-100
                    ${shouldInvert ? 'invert' : ''}
                    ${shouldEnlarge ? 'max-h-10' : 'max-h-8'} // Apply conditional height
                  `}
                  onError={(e) => { 
                    // Optional: Hide if image fails to load
                    (e.target as HTMLImageElement).style.display = 'none'; 
                    // You could potentially show the placeholder text again here
                  }}
                /> 

                {/* Placeholder Div - Removed */}
                {/* 
                <div 
                  className="flex h-full w-full items-center justify-center rounded-lg"
                  title={logo.name}
                >
                  <span className="whitespace-nowrap text-sm font-medium text-gray-500">{logo.placeholder}</span>
                </div>
                */}
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
};

export default LogoCloud; 