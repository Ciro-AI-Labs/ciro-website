import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Enhanced stats data with more visually interesting formats
const stats = [
  { 
    label: "↓ 70% manual tasks", 
    color: "text-green-400",
    bgFrom: "from-green-500/10",
    bgTo: "to-green-500/5",
    icon: (
      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ) 
  },
  { 
    label: "↑ 15% output quality", 
    color: "text-blue-400",
    bgFrom: "from-blue-500/10",
    bgTo: "to-blue-500/5",
    icon: (
      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ) 
  },
  { 
    label: "Real-time alerts, zero delays", 
    color: "text-yellow-400",
    bgFrom: "from-yellow-500/10",
    bgTo: "to-yellow-500/5",
    icon: (
      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ) 
  },
  { 
    label: "AI-powered safety & compliance", 
    color: "text-purple-400",
    bgFrom: "from-purple-500/10",
    bgTo: "to-purple-500/5",
    icon: (
      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ) 
  },
];

export default function AnimatedStats() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Much longer interval - 5 seconds per stat
  const cycleInterval = 5000;
  
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => setIndex((i) => (i + 1) % stats.length), cycleInterval);
      return () => clearInterval(timer);
    }
    return undefined;
  }, [isPaused]);
  
  return (
    <div 
      className="h-14 flex items-center justify-center md:justify-start overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative border border-gray-700/40 rounded-full bg-gradient-to-r from-gray-900/40 to-gray-800/20 backdrop-blur-sm px-6 py-3 shadow-[0_4px_15px_rgba(0,0,0,0.1)] min-w-[280px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={stats[index].label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ 
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1]
            }}
            className={`flex items-center text-lg font-semibold ${stats[index].color}`}
          >
            <motion.div
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 0.5 }}
              className="inline-flex justify-center items-center"
            >
              {stats[index].icon}
            </motion.div>
            <span>{stats[index].label}</span>
            
            {/* Enhanced animated dots with variable size */}
            <motion.div 
              className="ml-2 flex space-x-1"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              <span className="h-1.5 w-1.5 bg-current rounded-full"></span>
              <motion.span 
                className="h-1.5 w-1.5 bg-current rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
              ></motion.span>
              <motion.span 
                className="h-1.5 w-1.5 bg-current rounded-full"
                animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
              ></motion.span>
            </motion.div>
          </motion.div>
        </AnimatePresence>
        
        {/* Enhanced progress bar with gradient matching the current stat - slowed down */}
        <motion.div 
          className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r ${stats[index].bgFrom} ${stats[index].bgTo}`}
          key={`progress-${index}`}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ 
            duration: cycleInterval / 1000, // Match the cycle interval
            ease: "linear"
          }}
        />
        
        {/* Subtle glow effect behind the text */}
        <motion.div 
          className={`absolute inset-0 rounded-full opacity-30 blur-md bg-gradient-to-r ${stats[index].bgFrom} ${stats[index].bgTo}`}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Subtle pulsing border effect */}
        <motion.div 
          className="absolute inset-0 rounded-full border border-white/5"
          animate={{ 
            boxShadow: [
              '0 0 0 0 rgba(255,255,255,0)',
              '0 0 0 1px rgba(255,255,255,0.1)',
              '0 0 0 0 rgba(255,255,255,0)'
            ] 
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Indicator dots for available stats with active indicator showing current stat */}
        <div className="absolute -bottom-6 left-0 right-0 flex justify-center space-x-2">
          {stats.map((_, i) => (
            <motion.div
              key={i}
              className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${i === index ? stats[i].color : 'bg-gray-600/40'}`}
              animate={i === index ? { scale: [1, 1.5, 1] } : {}}
              transition={{ duration: 0.5 }}
              onClick={() => setIndex(i)}
              style={{ cursor: 'pointer' }}
              title={stats[i].label}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 