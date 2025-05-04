import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedStats from "../AnimatedStats";
import ParticlesBackground from "../ParticlesBackground";

// Import Lottie when ready
// import Lottie from "lottie-react";
// import heroAnimation from "../../assets/hero-animated.json";

export default function NewHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0b0c10] to-[#06070a] text-white py-32 min-h-[90vh] flex items-center">
      {/* Animated Particles or Video Background */}
      <ParticlesBackground />

      {/* Parallax/Glow Layer */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary-700/20 via-transparent to-primary-400/10" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col-reverse md:flex-row items-center px-6 md:px-12">
        {/* Left: Text Block */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl text-center md:text-left"
        >
          <h1 className="mb-4 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Where <span className="text-primary-400">Industrial Data</span>
            <br />
            Becomes <span className="text-primary-500">Real-Time Action</span>
          </h1>
          <p className="mb-8 text-lg text-slate-300 sm:text-xl lg:text-2xl">
            Ciro Labs unifies your plant's data and vision streams into a single AI command center—predict, automate, and optimize operations in milliseconds.
          </p>
          {/* Animated Stats */}
          <AnimatedStats />

          <div className="mt-8 flex flex-col items-center gap-4 md:flex-row md:justify-start">
            <Link
              to="/contact"
              className="rounded-2xl bg-primary-600 px-8 py-3 text-lg font-semibold shadow-lg shadow-primary-600/30 transition hover:bg-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-400/60 animate-pulse inline-block"
            >
              Book a Demo
            </Link>
            <Link
              to="/about"
              className="rounded-2xl border border-slate-600 px-8 py-3 text-lg font-semibold flex items-center gap-2 transition hover:border-primary-500 hover:text-primary-400"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M6 4l10 6-10 6V4z"/></svg>
              Watch 90s Overview
            </Link>
          </div>
        </motion.div>

        {/* Right: Animated Illustration Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="mb-12 md:mb-0 md:ml-12 w-full max-w-lg lg:max-w-xl"
        >
          {/* Placeholder for Lottie: Using regular img for now */}
          {/* When Lottie is ready: <Lottie animationData={heroAnimation} loop autoplay className="w-full h-auto" /> */}
          <img
            src="/placeholder.svg" // Using existing placeholder from public folder
            alt="Futuristic command center dashboard overlay"
            className="w-full rounded-xl shadow-2xl shadow-primary-600/20"
          />
        </motion.div>
      </div>
    </section>
  );
} 