import React from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  BarChart3, Eye, ArrowRight, Zap, Brain, Activity, 
  Database, FileText, Cloud, Truck, Leaf, ChefHat, Camera,
  MessageSquare, Bell, Palette, Layers, Cpu, Globe,
  Sparkles, TrendingUp, Shield, Users, Settings
} from "lucide-react";

const Products = () => {
  const controls = useAnimation();

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      });
    }, { threshold: 0.1 });
    
    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach(section => observer.observe(section));
    
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const capabilities = [
    {
      title: "Advanced Visualizations",
      description: "Generate bar, heat-map, or geospatial charts from a single prompt—then polish them in CIRO Studio à la Canva.",
      icon: Palette,
      color: "purple"
    },
    {
      title: "Template Gallery",
      description: "Kick-start storytelling with pre-built KPI boards and industry templates you can inject with your own data in seconds.",
      icon: Layers,
      color: "blue"
    },
    {
      title: "Omnichannel Alerts",
      description: "Insight triggers push to email, SMS, Slack, Teams, webhooks—anywhere your team lives—so nothing slips through the cracks.",
      icon: Bell,
      color: "green"
    },
    {
      title: "Data Science & Forecasts",
      description: "Run cleaning, feature engineering, and time-series forecasts without writing Python; export models or schedule automated reports.",
      icon: TrendingUp,
      color: "orange"
    }
  ];

  const dataSources = [
    { name: "DB", icon: Database, color: "blue" },
    { name: "Docs", icon: FileText, color: "purple" },
    { name: "IoT", icon: Cpu, color: "green" },
    { name: "Cloud", icon: Cloud, color: "cyan" },
    { name: "Supply", icon: Truck, color: "orange" },
    { name: "Agri", icon: Leaf, color: "emerald" },
    { name: "Food", icon: ChefHat, color: "amber" },
    { name: "Vision", icon: Camera, color: "red" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0b0c10] to-[#06070a] text-white">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <motion.section 
          className="container mx-auto px-4 py-16 animate-on-scroll"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={containerVariants}
        >
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-purple-400 via-orange-400 to-blue-400 bg-clip-text text-transparent">
                CIRO AI Capabilities
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              variants={itemVariants}
            >
              Transform your industrial operations with AI that turns fragmented data streams 
              into automated decisions in milliseconds.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Badge variant="secondary" className="mb-8 bg-gradient-to-r from-orange-500/20 to-red-500/20 border-orange-400/30 text-orange-300">
                <Sparkles className="h-3 w-3 mr-1" />
                Live Product Demo Available
              </Badge>
            </motion.div>
          </div>
        </motion.section>

        {/* Capabilities Grid */}
        <motion.section 
          className="container mx-auto px-4 py-16 animate-on-scroll"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={containerVariants}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Card className={`bg-gradient-to-br from-${capability.color}-900/20 to-${capability.color}-800/10 border-${capability.color}-500/20 hover:border-${capability.color}-400/40 transition-all duration-300 backdrop-blur-sm`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 bg-${capability.color}-500/20 rounded-lg group-hover:bg-${capability.color}-500/30 transition-colors duration-300`}>
                        <capability.icon className={`h-6 w-6 text-${capability.color}-400`} />
                      </div>
                      <CardTitle className="text-lg text-white">{capability.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 text-sm leading-relaxed">
                      {capability.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Unified Data Hub */}
        <motion.section 
          className="container mx-auto px-4 py-16 animate-on-scroll"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={containerVariants}
        >
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Unified Data Hub
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Ingest PDFs, Excel, live Kafka streams, ERPs, CRMs, and cloud apps—then enforce fine-grained org, team, and role permissions in one place.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="border-purple-400/30 text-purple-300">
                  <Shield className="h-3 w-3 mr-1" /> Role-based Access
                </Badge>
                <Badge variant="outline" className="border-blue-400/30 text-blue-300">
                  <Users className="h-3 w-3 mr-1" /> Team Permissions
                </Badge>
                <Badge variant="outline" className="border-green-400/30 text-green-300">
                  <Settings className="h-3 w-3 mr-1" /> Fine-grained Control
                </Badge>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              variants={itemVariants}
            >
              {/* Central Hub */}
              <div className="relative w-64 h-64 mx-auto">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center"
                  animate={{ 
                    boxShadow: [
                      "0 0 20px rgba(168, 85, 247, 0.3)",
                      "0 0 40px rgba(59, 130, 246, 0.5)",
                      "0 0 20px rgba(168, 85, 247, 0.3)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="text-white text-4xl font-bold">C</span>
                </motion.div>
                
                {/* Data Source Nodes */}
                {dataSources.map((source, index) => {
                  const angle = (index * 45) * (Math.PI / 180);
                  const radius = 100;
                  const x = Math.cos(angle) * radius + 128;
                  const y = Math.sin(angle) * radius + 128;
                  
                  return (
                    <motion.div
                      key={source.name}
                      className="absolute w-12 h-12 bg-gray-800/80 border border-gray-600 rounded-full flex items-center justify-center backdrop-blur-sm"
                      style={{ left: x - 24, top: y - 24 }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.2, zIndex: 10 }}
                    >
                      <source.icon className={`h-5 w-5 text-${source.color}-400`} />
                      <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-300 whitespace-nowrap">
                        {source.name}
                      </span>
                    </motion.div>
                  );
                })}
                
                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {dataSources.map((_, index) => {
                    const angle = (index * 45) * (Math.PI / 180);
                    const radius = 100;
                    const x = Math.cos(angle) * radius + 128;
                    const y = Math.sin(angle) * radius + 128;
                    
                    return (
                      <motion.line
                        key={index}
                        x1="128"
                        y1="128"
                        x2={x}
                        y2={y}
                        stroke="url(#gradient)"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 0.3 + index * 0.05, duration: 0.8 }}
                      />
                    );
                  })}
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Natural Language Analytics - Focus Section */}
        <motion.section 
          className="container mx-auto px-4 py-16 animate-on-scroll"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={containerVariants}
        >
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Natural-Language Analytics
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Ask questions (or speak them) and CIRO instantly scans billions of rows, returning answers, KPIs, or SQL you can tweak.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-300">Instant SQL generation from natural language</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-300">Voice-to-query capabilities</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-300">Real-time KPI calculations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-300">Editable and exportable results</span>
                </div>
              </div>
              
              <Button size="lg" asChild className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                <Link to="/contact" className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Try Natural Language Query
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div 
              className="relative"
              variants={itemVariants}
            >
              {/* Chat Interface Mockup */}
              <div className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-medium">CIRO AI Assistant</span>
                </div>
                
                <div className="space-y-4">
                  {/* User Message */}
                  <div className="flex justify-end">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-2xl rounded-br-md max-w-xs">
                      "Show me production efficiency for the last 30 days"
                    </div>
                  </div>
                  
                  {/* AI Response */}
                  <div className="flex justify-start">
                    <div className="bg-gray-800/80 text-gray-200 px-4 py-3 rounded-2xl rounded-bl-md max-w-xs">
                      <div className="text-sm mb-2">📊 Production Efficiency Report</div>
                      <div className="text-xs text-gray-400 mb-2">Generated SQL:</div>
                                             <div className="bg-gray-900/50 p-2 rounded text-xs font-mono text-green-400">
                         SELECT AVG(efficiency) FROM production WHERE date &gt;= DATE_SUB(NOW(), INTERVAL 30 DAY)
                       </div>
                    </div>
                  </div>
                  
                  {/* KPI Display */}
                  <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/20 rounded-xl p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">94.2%</div>
                      <div className="text-sm text-gray-400">Average Efficiency</div>
                      <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                        <motion.div 
                          className="bg-gradient-to-r from-green-500 to-emerald-400 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "94.2%" }}
                          transition={{ delay: 1, duration: 1.5 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Autonomous AI Agents & Real-time Dashboards */}
        <motion.section 
          className="container mx-auto px-4 py-16 animate-on-scroll"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={containerVariants}
        >
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Autonomous AI Agents */}
            <motion.div variants={itemVariants}>
              <Card className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-500/20 hover:border-green-400/40 transition-all duration-300 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-green-500/20 rounded-lg">
                      <Brain className="h-8 w-8 text-green-400" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-white">Autonomous AI Agents</CardTitle>
                      <CardDescription className="text-gray-300">
                        Continuous monitoring and automated workflows
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6">
                    Continuous anomaly detection, predictive models, and maintenance triggers that fire workflows in Slack, Teams, or WhatsApp—before issues escalate.
                  </p>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Ask Aurix AI
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Real-time Dashboards */}
            <motion.div variants={itemVariants}>
              <Card className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-blue-500/20 rounded-lg">
                      <BarChart3 className="h-8 w-8 text-blue-400" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-white">Real-Time Dashboards</CardTitle>
                      <CardDescription className="text-gray-300">
                        Live monitoring and visualization
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6">
                    Drag charts into live, multi-tab boards; connect Power BI or Looker; and watch every metric update the moment your data changes.
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Activity className="h-4 w-4 mr-2" />
                    View Live Demo
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="container mx-auto px-4 py-16 animate-on-scroll"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={containerVariants}
        >
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold mb-6 text-white"
              variants={itemVariants}
            >
              Ready to Transform Your Operations?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              variants={itemVariants}
            >
              See CIRO AI in action with a personalized demo of your industrial use case.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button size="lg" asChild className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                <Link to="/contact" className="flex items-center gap-2">
                  Book Live Demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products; 