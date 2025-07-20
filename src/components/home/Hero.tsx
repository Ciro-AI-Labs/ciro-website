import React, { useEffect, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedStats from "../AnimatedStats";
import ParticlesBackground from "../ParticlesBackground";
import { FaCamera, FaCommentDots, FaMapMarkerAlt, FaEye } from 'react-icons/fa';

// Import Lottie when ready
// import Lottie from "lottie-react";
// import heroAnimation from "../../assets/hero-animated.json";

const Hero = () => {
  const controls = useAnimation();
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsInView(true);
          controls.start("visible");
        }
      });
    }, { threshold: 0.1 });
    
    const heroSection = document.querySelector('#hero-section');
    if (heroSection) observer.observe(heroSection);
    
    return () => {
      if (heroSection) observer.unobserve(heroSection);
    };
  }, [controls]);

  // Dashboard data points with animated values
  const chartData = [40, 25, 35, 30, 32, 38, 42, 45, 35, 38, 50, 55];
  
  // Enhanced text animation variants with staggered children
  const headlineVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 1.2, 
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1
      }
    }
  };
  
  const headlineChildVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  const paragraphVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        delay: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.6, 
        delay: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  const dashboardVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 60, rotateY: -15 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      rotateY: 0,
      transition: {
        duration: 1.4,
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  // Enhanced floating animation for dashboard with subtle rotation
  const floatingAnimation = {
    y: [0, -8, 0],
    rotateY: [0, 2, 0],
    rotateX: [0, -1, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  };

  return (
    <section 
      id="hero-section"
      className="relative overflow-hidden bg-gradient-to-b from-[#0b0c10] to-[#06070a] text-white min-h-screen flex items-center"
    >
      {/* Enhanced Particles Background with interactive effects */}
      <ParticlesBackground />

      {/* Multi-layered Glow Effect */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary-700/20 via-transparent to-primary-400/10" />
      <motion.div 
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500/30 blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-500/20 blur-[120px]" />
      </motion.div>

      {/* Additional Decorative Dots - Positioned across the section */}
      <motion.div 
        className="absolute top-[15%] left-[10%] w-4 h-4 bg-purple-600 rounded-full opacity-40 blur-md hidden lg:block z-[5]"
        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
      />
      <motion.div 
        className="absolute bottom-[20%] right-[12%] w-5 h-5 bg-blue-400 rounded-full opacity-50 blur-lg hidden md:block z-[5]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
      />
      <motion.div 
        className="absolute top-[40%] right-[5%] w-3 h-3 bg-indigo-500 rounded-full opacity-40 blur-md hidden lg:block z-[5]"
        animate={{ scale: [1, 1.6, 1], opacity: [0.25, 0.55, 0.25] }}
        transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse", delay: 1.5 }}
      />

      {/* Container with proper mobile positioning - added pt-16 for mobile to push content below navbar */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col xl:flex-row items-center px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-20 sm:pt-24 md:pt-20 lg:pt-16 xl:pt-16 2xl:pt-16">
        {/* Left: Enhanced Text Block with sequential animations - Increased max-width */}
        <div className="max-w-2xl text-center xl:text-left order-1 xl:order-1 mt-8 sm:mt-10 lg:mt-12 xl:mt-0">
          <div className="flex flex-col relative z-10">
            {/* Corner Decorator: Top Left */}
            <motion.div
              className="absolute -top-3 -left-3 w-6 h-6 border-l-2 border-t-2 border-purple-500/50 hidden xl:block"
              initial={{ opacity: 0, x: -10, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            />
            
            {/* Decorative Dot 1 (Top Left) */}
            <motion.div 
              className="absolute -top-4 -left-4 w-3 h-3 bg-purple-500 rounded-full opacity-50 blur-sm hidden xl:block"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            {/* Subtle orange accents */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-extrabold tracking-tight leading-tight mb-4 sm:mb-6">
              {/* Animated Gradient Span with subtle orange */}
              <motion.span 
                className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-orange-500 to-blue-500"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                  duration: 5, // Slower animation
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% 100%" // Larger background size for animation
                }}
              >
                Your Operations'
              </motion.span>
              <span className="block">AI{' '}
                {/* Wrapper for Co-Pilot + Underline */}
                <span className="relative inline-block">
                  Co-Pilot
                  {/* Animated SVG Underline */}
                  <motion.svg 
                    className="absolute bottom-[-6px] left-[-2px] w-[calc(100%+4px)] h-[15px] overflow-visible pointer-events-none"
                    viewBox="0 0 100 15"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="underline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#a855f7" /> {/* Purple */}
                        <stop offset="50%" stopColor="#f97316" /> {/* Orange */}
                        <stop offset="100%" stopColor="#3b82f6" /> {/* Blue */}
                      </linearGradient>
                    </defs>
                    <motion.path
                      d="M3,8 C 30,15 70,0 97,8" // Curved path definition
                      stroke="url(#underline-gradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="transparent"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 1.5, ease: "circOut" }}
                    />
                  </motion.svg>
                </span>
              </span>
            </h1>
            <div className="max-w-2xl mx-auto xl:mx-0 space-y-3 sm:space-y-4 mb-6 sm:mb-10">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-lg xl:text-lg 2xl:text-xl text-gray-300 font-medium">
                See everything. Predict everything. Decide everything.{' '}
                <span className="text-orange-400 font-semibold">Together.</span>
              </p>
              <p className="text-base sm:text-lg md:text-xl lg:text-base xl:text-base 2xl:text-lg text-gray-400 mt-4 sm:mt-6">
                AI that amplifies human intelligence across manufacturing, logistics, energy, and beyond—giving your teams superhuman insights to make perfect decisions, instantly.
              </p>
            </div>

            {/* Corner Decorator: Bottom Right */}
            <motion.div
              className="absolute -bottom-6 -right-3 w-6 h-6 border-r-2 border-b-2 border-blue-500/50 hidden xl:block"
              initial={{ opacity: 0, x: 10, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            />

            {/* Decorative Dot 2 (Bottom Right near paragraph) */}
            <motion.div 
              className="absolute -bottom-4 -right-4 w-2.5 h-2.5 bg-blue-500 rounded-full opacity-60 blur-sm hidden xl:block"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 4,
                delay: 0.5, // Offset start time
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </div>
          
          {/* Animated Stats with improved styling */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-6 sm:mb-8"
          >
            <AnimatedStats />
          </motion.div>

          <motion.div 
            variants={buttonVariants}
            initial="hidden"
            animate={controls}
            className="mt-6 sm:mt-8 flex flex-col items-center gap-3 sm:gap-4 xl:flex-row xl:justify-start"
          >
            <Button 
              size="lg" 
              asChild 
              className="relative overflow-hidden group w-full sm:w-auto"
            >
              <Link to="/contact">
                <span className="relative z-10">Book a Demo</span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0, opacity: 0.4 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-purple-500/20"
                  animate={{ 
                    boxShadow: ["0 0 0px rgba(168, 85, 247, 0.5)", "0 0 20px rgba(168, 85, 247, 0.8)", "0 0 0px rgba(168, 85, 247, 0.5)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="group border-slate-500 hover:border-orange-400 transition-colors duration-300 w-full sm:w-auto"
            >
              <Link to="/use-cases" className="flex items-center justify-center gap-2">
                <motion.svg 
                  className="w-5 h-5 text-purple-500 group-hover:text-orange-400 transition-colors duration-300" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path d="M6 4l10 6-10 6V4z"/>
                </motion.svg>
                <span>Watch 90s Overview</span>
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Right: Enhanced Animated Dashboard with "floating" effect - moved below on mobile with order-2 - Reduced max-width */}
        <motion.div
          variants={dashboardVariants}
          initial="hidden"
          animate={controls}
          className="mb-8 sm:mb-12 mt-8 sm:mt-10 lg:mt-16 xl:mt-0 xl:mb-0 xl:ml-12 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-lg 2xl:max-w-xl order-2 xl:order-1"
        >
          {/* Container for floating dashboard and icons */}
          <motion.div 
            className="relative"
            animate={floatingAnimation}
          >
            {/* Enhanced Floating Icons */}
            <motion.div
              className="absolute -top-4 -left-6 z-10 text-purple-400/80 text-3xl"
              animate={{ 
                y: [-4, 4, -4], 
                rotate: [-8, 8, -8], 
                scale: [1, 1.15, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }}
              whileHover={{ scale: 1.3, rotate: 15 }}
            >
              <FaCamera />
            </motion.div>
            <motion.div
              className="absolute -top-2 right-4 z-10 text-blue-400/80 text-2xl"
              animate={{ 
                y: [3, -3, 3], 
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
              whileHover={{ scale: 1.4, y: -5 }}
            >
              <FaCommentDots />
            </motion.div>
             <motion.div
              className="absolute -bottom-4 -right-5 z-10 text-green-400/80 text-3xl"
              animate={{ 
                y: [-3, 3, -3], 
                rotate: [5, -5, 5],
                scale: [1, 1.12, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.8 }}
              whileHover={{ scale: 1.3, rotate: -15 }}
            >
              <FaMapMarkerAlt />
            </motion.div>
             <motion.div
              className="absolute bottom-8 -left-8 z-10 text-teal-400/70 text-4xl"
              animate={{ 
                y: [5, -5, 5],
                scale: [1, 1.2, 1],
                opacity: [0.6, 1, 0.6],
                rotate: [0, 10, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              whileHover={{ scale: 1.4, rotate: 20 }}
            >
              <FaEye />
            </motion.div>

            {/* Enhanced Dashboard mockup with lighting effects */}
            <div className="relative bg-[rgba(15,16,21,0.7)] border border-gray-700/50 shadow-[0_8px_32px_rgba(59,130,246,0.15)] rounded-lg overflow-hidden backdrop-blur-lg">
              <div className="border-b border-gray-700/50 bg-gray-800/30 p-3 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <div className="mx-auto text-sm text-gray-300 font-medium">
                  Ciro AI Analytics Dashboard
                </div>
              </div>
              
              <div className="p-4">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-800/30 rounded-md p-3 backdrop-blur-md">
                    <div className="text-sm text-gray-400 mb-2">Production Rate</div>
                    <motion.div 
                      className="text-xl font-semibold text-white"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2, duration: 0.5 }}
                    >
                      98.3%
                    </motion.div>
                    <div className="h-2 w-full bg-gray-700/50 mt-2 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: "98%" }}
                        transition={{ 
                          delay: 1.5, 
                          duration: 2, 
                          ease: [0.22, 1, 0.36, 1]
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/30 rounded-md p-3 backdrop-blur-md">
                    <div className="text-sm text-gray-400 mb-2">Equipment Status</div>
                    <motion.div 
                      className="text-xl font-semibold text-green-500"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.3, duration: 0.5 }}
                    >
                      Optimal
                    </motion.div>
                    <div className="h-2 w-full bg-gray-700/50 mt-2 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full" 
                        initial={{ width: "0%" }}
                        animate={{ width: "90%" }}
                        transition={{ 
                          delay: 1.6, 
                          duration: 2, 
                          ease: [0.22, 1, 0.36, 1]
                        }}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800/30 rounded-md p-3 mb-4 backdrop-blur-md">
                  <div className="text-sm text-gray-400 mb-2">Real-time Analytics</div>
                  <div className="flex items-end h-20 gap-1">
                    {chartData.map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: `${h}%`, opacity: 1 }}
                        transition={{ 
                          duration: 1.4, 
                          delay: 1.7 + (i * 0.08),
                          ease: [0.22, 1, 0.36, 1]
                        }}
                        className="bg-gradient-to-t from-purple-600 to-purple-400 hover:from-purple-500 hover:to-purple-300 w-full rounded-sm transition-all duration-300"
                        whileHover={{ 
                          y: -8, 
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-800/30 rounded-md p-3 backdrop-blur-md">
                  <div className="flex justify-between mb-2">
                    <div className="text-sm text-gray-400">System Status</div>
                    <motion.div 
                      className="text-xs text-green-500"
                      animate={{ 
                        opacity: [0.7, 1, 0.7] 
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity 
                      }}
                    >
                      Live
                    </motion.div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <motion.div 
                      className="w-2 h-2 rounded-full bg-green-500"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity 
                      }}
                    />
                    <span className="text-gray-300">All systems operational</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Decorative elements with Framer Motion */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: [0.4, 0.8, 0.4], 
                scale: [0.8, 1, 0.8],
                rotate: [0, 10, 0]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
              className="hidden md:block absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500/20 rounded-full blur-[50px]" 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: [0.3, 0.7, 0.3], 
                scale: [0.9, 1.1, 0.9],
                rotate: [0, -15, 0]
              }}
              transition={{ 
                duration: 9, 
                delay: 1, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
              className="hidden md:block absolute -top-12 -right-8 w-40 h-40 bg-blue-500/20 rounded-full blur-[60px]" 
            />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Enhanced Interactive mouse scroll indicator - hidden on small screens */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        initial={{ opacity: 0, y: -10, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 2.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm"
          animate={{ 
            y: [0, 8, 0],
            borderColor: ["rgba(255,255,255,0.4)", "rgba(255,255,255,0.8)", "rgba(255,255,255,0.4)"]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,1)" }}
        >
          <motion.div 
            className="w-1.5 h-1.5 bg-white/80 rounded-full mt-2"
            animate={{ 
              y: [0, 12, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
