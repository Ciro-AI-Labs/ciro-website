import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ParticlesBackground from "../ParticlesBackground";
import { BarChart3, Database, Smartphone, Factory, Eye, ArrowRight } from 'lucide-react';

const Hero = () => {
  const controls = useAnimation();
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
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

  const chartData = [40, 25, 35, 30, 32, 38, 42, 45, 35, 38, 50, 55];

  const productIcons = [
    { icon: BarChart3, label: "CIRO AI", color: "text-blue-400" },
    { icon: Factory, label: "CIRO ERP", color: "text-orange-400" },
    { icon: Smartphone, label: "CIRO SALES", color: "text-green-400" },
    { icon: Database, label: "CIRO LAKE", color: "text-blue-400" },
  ];

  return (
    <section
      id="hero-section"
      className="relative overflow-hidden bg-black text-white min-h-screen flex items-center"
    >
      <ParticlesBackground />

      {/* Subtle blue glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-500/8 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col xl:flex-row items-center px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-20 sm:pt-24 md:pt-20 lg:pt-16 xl:pt-16 2xl:pt-16">
        {/* Left: Text */}
        <div className="max-w-2xl text-center xl:text-left order-1 xl:order-1 mt-8 sm:mt-10 lg:mt-12 xl:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-blue-400 bg-blue-600/10 border border-blue-500/20 rounded-full mb-8">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
              {t('hero.badge')}
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-white">{t('hero.heading1')}</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              {t('hero.heading2')}
            </span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-gray-300 font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.p
            className="text-base sm:text-lg text-gray-400 mb-8 max-w-xl mx-auto xl:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {t('hero.description')}
          </motion.p>

          {/* Product icons row */}
          <motion.div
            className="flex items-center justify-center xl:justify-start gap-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {productIcons.map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5">
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <span className="text-xs text-gray-500">{item.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col items-center gap-3 sm:gap-4 sm:flex-row xl:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button
              size="lg"
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold w-full sm:w-auto px-8"
            >
              <Link to="/contact">
                {t('hero.bookDemo')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white/10 hover:border-white/20 hover:bg-white/5 text-white w-full sm:w-auto"
            >
              <a href="https://app.ciroai.us">
                {t('hero.loginCta')}
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Right: Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 sm:mb-12 mt-8 sm:mt-10 lg:mt-16 xl:mt-0 xl:mb-0 xl:ml-12 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-lg 2xl:max-w-xl order-2 xl:order-1"
        >
          <motion.div
            className="relative"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          >
            {/* Dashboard */}
            <div className="relative bg-[#0a0a0f] border border-white/10 shadow-2xl shadow-blue-500/5 rounded-xl overflow-hidden">
              <div className="border-b border-white/5 bg-white/[0.02] p-3 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <div className="mx-auto text-sm text-gray-400 font-medium">
                  {t('hero.dashboard.title')}
                </div>
              </div>

              <div className="p-4">
                {/* Product status row */}
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {productIcons.map((item, i) => (
                    <motion.div
                      key={i}
                      className="bg-white/[0.03] border border-white/5 rounded-lg p-2 text-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                    >
                      <item.icon className={`w-4 h-4 ${item.color} mx-auto mb-1`} />
                      <div className="text-[10px] text-gray-500">{item.label}</div>
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mx-auto mt-1" />
                    </motion.div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-white/[0.03] border border-white/5 rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-1">{t('hero.dashboard.activeConnections')}</div>
                    <motion.div
                      className="text-xl font-bold text-white"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2, duration: 0.5 }}
                    >
                      2,847
                    </motion.div>
                    <div className="text-xs text-green-400 mt-1">{t('hero.dashboard.thisWeek')}</div>
                  </div>

                  <div className="bg-white/[0.03] border border-white/5 rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-1">{t('hero.dashboard.aiPredictions')}</div>
                    <motion.div
                      className="text-xl font-bold text-white"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.3, duration: 0.5 }}
                    >
                      98.3%
                    </motion.div>
                    <div className="text-xs text-blue-400 mt-1">{t('hero.dashboard.accuracyRate')}</div>
                  </div>
                </div>

                <div className="bg-white/[0.03] border border-white/5 rounded-lg p-3 mb-3">
                  <div className="text-xs text-gray-500 mb-2">{t('hero.dashboard.realTimeAnalytics')}</div>
                  <div className="flex items-end h-20 gap-1">
                    {chartData.map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: `${h}%`, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 1.5 + (i * 0.06), ease: [0.22, 1, 0.36, 1] }}
                        className="bg-gradient-to-t from-blue-600 to-blue-400 w-full rounded-sm"
                      />
                    ))}
                  </div>
                </div>

                <div className="bg-white/[0.03] border border-white/5 rounded-lg p-3">
                  <div className="flex justify-between mb-1">
                    <div className="text-xs text-gray-500">{t('hero.dashboard.systemStatus')}</div>
                    <motion.div
                      className="text-xs text-green-400"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {t('hero.dashboard.live')}
                    </motion.div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <motion.div
                      className="w-2 h-2 rounded-full bg-green-400"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-gray-300">{t('hero.dashboard.allSystemsOperational')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow effects */}
            <div className="hidden md:block absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500/10 rounded-full blur-[50px]" />
            <div className="hidden md:block absolute -top-8 -right-8 w-40 h-40 bg-blue-600/10 rounded-full blur-[60px]" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-white/60 rounded-full mt-2"
            animate={{ y: [0, 12, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
