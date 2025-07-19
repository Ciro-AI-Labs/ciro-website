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
    { name: "DB", icon: Database, color: "slate" },
    { name: "Docs", icon: FileText, color: "gray" },
    { name: "IoT", icon: Cpu, color: "zinc" },
    { name: "Cloud", icon: Cloud, color: "neutral" },
    { name: "Supply", icon: Truck, color: "stone" },
    { name: "Agri", icon: Leaf, color: "emerald" },
    { name: "Food", icon: ChefHat, color: "rose" },
    { name: "Vision", icon: Camera, color: "indigo" }
  ];

  React.useEffect(() => {
    console.log('Rendering data sources:', dataSources.length);
  }, [dataSources]);

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
                CIRO AI Products
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

        {/* Products Grid */}
        <motion.section 
          className="container mx-auto px-4 py-16 animate-on-scroll"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={containerVariants}
        >
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* AI Analytics Engine */}
            <motion.div variants={itemVariants} whileHover={{ y: -5, scale: 1.02 }}>
              <Card className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-purple-500/20 rounded-lg">
                      <BarChart3 className="h-8 w-8 text-purple-400" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-white">AI Analytics Engine</CardTitle>
                      <CardDescription className="text-gray-300">
                        Real-time industrial intelligence
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-300">
                      Connect your data systems for real-time visibility, insights, and automated workflows. 
                      Ask questions in natural language and get instant SQL, KPIs, and actionable insights.
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="border-purple-400/30 text-purple-300">
                        <Zap className="h-3 w-3 mr-1" /> Natural Language Analytics
                      </Badge>
                      <Badge variant="outline" className="border-purple-400/30 text-purple-300">
                        <Brain className="h-3 w-3 mr-1" /> AI Agents
                      </Badge>
                      <Badge variant="outline" className="border-purple-400/30 text-purple-300">
                        <Activity className="h-3 w-3 mr-1" /> Real-time Dashboards
                      </Badge>
                    </div>
                    
                    <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                      <Link to="/products/ai-analytics" className="flex items-center justify-center gap-2">
                        Explore AI Analytics
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Vision System */}
            <motion.div variants={itemVariants} whileHover={{ y: -5, scale: 1.02 }}>
              <Card className="bg-gradient-to-br from-blue-900/20 to-teal-900/20 border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-blue-500/20 rounded-lg">
                      <Eye className="h-8 w-8 text-blue-400" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-white">Vision Intelligence</CardTitle>
                      <CardDescription className="text-gray-300">
                        Computer vision for industrial automation
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-300">
                      Advanced computer vision and real-time monitoring that transforms your cameras 
                      into intelligent sensors for quality control and operational excellence.
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="border-blue-400/30 text-blue-300">
                        <Eye className="h-3 w-3 mr-1" /> Quality Control
                      </Badge>
                      <Badge variant="outline" className="border-blue-400/30 text-blue-300">
                        <Activity className="h-3 w-3 mr-1" /> Anomaly Detection
                      </Badge>
                      <Badge variant="outline" className="border-blue-400/30 text-blue-300">
                        <Zap className="h-3 w-3 mr-1" /> Real-time Alerts
                      </Badge>
                    </div>
                    
                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                      <Link to="/products/vision" className="flex items-center justify-center gap-2">
                        Explore Vision System
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Capabilities Overview */}
        <motion.section 
          className="container mx-auto px-4 py-16 animate-on-scroll"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={containerVariants}
        >
          <div className="text-center max-w-4xl mx-auto mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
              variants={itemVariants}
            >
              Platform Capabilities
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300"
              variants={itemVariants}
            >
              Comprehensive features that power both AI Analytics and Vision Intelligence
            </motion.p>
          </div>
          
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
              <div className="relative w-96 h-96 mx-auto">
                {/* Connection Lines using CSS */}
                <div className="absolute inset-0">
                  {dataSources.map((source, index) => {
                    const angle = index * 45; // degrees
                    return (
                      <div
                        key={`connection-${index}`}
                        className="absolute w-32 h-0.5 bg-gray-500 opacity-60"
                        style={{
                          left: '50%',
                          top: '50%',
                          transformOrigin: '0 50%',
                          transform: `rotate(${angle}deg)`
                        }}
                      />
                    );
                  })}
                </div>

                {/* Central Hub */}
                <div className="absolute inset-4 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <img 
                    src="/images/Ciro Blanco.png" 
                    alt="Ciro Logo" 
                    className="w-12 h-12 object-contain"
                  />
                </div>

                {/* Data Source Nodes */}
                {dataSources.map((source, index) => {
                  const angle = (index * 45) * (Math.PI / 180);
                  const radius = 140;
                  const x = Math.cos(angle) * radius + 192;
                  const y = Math.sin(angle) * radius + 192;
                  
                  return (
                    <div
                      key={source.name}
                      className={`absolute w-14 h-14 bg-gray-800 border border-gray-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200`}
                      style={{ 
                        left: x - 28, 
                        top: y - 28,
                        zIndex: 10
                      }}
                    >
                      <source.icon className={`h-6 w-6 text-gray-400`} />
                    </div>
                  );
                })}

                {/* Pulse Effect */}
                <motion.div
                  className="absolute inset-2 rounded-2xl border border-purple-400/40"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                />
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
                  <span className="text-gray-300">Instant geospatial visualization generation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-300">Interactive maps and heatmaps</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-300">Real-time location-based insights</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-300">Exportable map visualizations</span>
                </div>
              </div>
              
              <Button size="lg" asChild className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                <Link to="/products/ai-analytics" className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Try Geospatial Query
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div 
              className="relative"
              variants={itemVariants}
            >
              {/* Geospatial Visualization Interface Mockup */}
              <div className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-medium">CIRO AI Assistant</span>
                </div>
                
                <div className="space-y-4">
                  {/* User Message */}
                  <div className="flex justify-end">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-2xl rounded-br-md max-w-xs">
                      "Show me production facilities by efficiency across regions"
                    </div>
                  </div>
                  
                  {/* AI Response */}
                  <div className="flex justify-start">
                    <div className="bg-gray-800/80 text-gray-200 px-4 py-3 rounded-2xl rounded-bl-md max-w-xs">
                      <div className="text-sm mb-2">🗺️ Geospatial Production Analysis</div>
                      <div className="text-xs text-gray-400 mb-2">Generated Query:</div>
                      <div className="bg-gray-900/50 p-2 rounded text-xs font-mono text-green-400">
                        SELECT facility_name, location, efficiency FROM production_facilities WHERE region IN ('North', 'South', 'East', 'West')
                      </div>
                    </div>
                  </div>
                  
                  {/* Interactive Map Visualization */}
                  <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/20 rounded-xl p-4">
                    <div className="text-center mb-3">
                      <div className="text-sm font-medium text-white mb-1">Production Efficiency Map</div>
                      <div className="text-xs text-gray-400">Interactive geospatial visualization</div>
                    </div>
                    
                    {/* Map Container */}
                    <div className="relative bg-gray-800 rounded-lg h-48 overflow-hidden">
                      {/* Map Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-green-900/20"></div>
                      
                      {/* Map Grid Lines */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="h-full w-full" style={{
                          backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                          `,
                          backgroundSize: '20px 20px'
                        }}></div>
                      </div>
                      
                      {/* Facility Markers */}
                      <motion.div 
                        className="absolute w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg"
                        style={{ left: '20%', top: '30%' }}
                        animate={{ 
                          scale: [1, 1.2, 1],
                          boxShadow: ['0 0 10px rgba(34, 197, 94, 0.5)', '0 0 20px rgba(34, 197, 94, 0.8)', '0 0 10px rgba(34, 197, 94, 0.5)']
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                          North Plant<br/>98.5%
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="absolute w-4 h-4 bg-yellow-500 rounded-full border-2 border-white shadow-lg"
                        style={{ left: '70%', top: '40%' }}
                        animate={{ 
                          scale: [1, 1.2, 1],
                          boxShadow: ['0 0 10px rgba(234, 179, 8, 0.5)', '0 0 20px rgba(234, 179, 8, 0.8)', '0 0 10px rgba(234, 179, 8, 0.5)']
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      >
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black text-xs px-2 py-1 rounded whitespace-nowrap">
                          East Plant<br/>87.2%
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="absolute w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"
                        style={{ left: '40%', top: '70%' }}
                        animate={{ 
                          scale: [1, 1.2, 1],
                          boxShadow: ['0 0 10px rgba(239, 68, 68, 0.5)', '0 0 20px rgba(239, 68, 68, 0.8)', '0 0 10px rgba(239, 68, 68, 0.5)']
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      >
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                          South Plant<br/>72.1%
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="absolute w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg"
                        style={{ left: '80%', top: '70%' }}
                        animate={{ 
                          scale: [1, 1.2, 1],
                          boxShadow: ['0 0 10px rgba(59, 130, 246, 0.5)', '0 0 20px rgba(59, 130, 246, 0.8)', '0 0 10px rgba(59, 130, 246, 0.5)']
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                      >
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                          West Plant<br/>94.8%
                        </div>
                      </motion.div>
                      
                      {/* Legend */}
                      <div className="absolute bottom-2 left-2 bg-black/50 rounded p-2">
                        <div className="flex items-center gap-2 text-xs">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-white">High (90%+)</span>
                          <div className="w-2 h-2 bg-yellow-500 rounded-full ml-2"></div>
                          <span className="text-white">Medium (80-90%)</span>
                          <div className="w-2 h-2 bg-red-500 rounded-full ml-2"></div>
                          <span className="text-white">Low (&lt;80%)</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Map Controls */}
                    <div className="flex justify-between items-center mt-3">
                      <div className="flex gap-2">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-2 py-1 rounded">
                          Zoom In
                        </button>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-2 py-1 rounded">
                          Zoom Out
                        </button>
                      </div>
                      <div className="text-xs text-gray-400">
                        <span className="text-green-400">4 facilities</span> detected
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Computer Vision - Focus Section */}
        <motion.section 
          className="container mx-auto px-4 py-16 animate-on-scroll"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={containerVariants}
        >
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Computer Vision Intelligence
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Transform your cameras into intelligent sensors that detect defects, monitor processes, and ensure quality control in real-time.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Real-time defect detection and classification</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Process monitoring and optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Automated quality control workflows</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Predictive maintenance alerts</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <Badge variant="outline" className="border-blue-400/30 text-blue-300">
                  <Eye className="h-3 w-3 mr-1" /> Quality Control
                </Badge>
                <Badge variant="outline" className="border-blue-400/30 text-blue-300">
                  <Activity className="h-3 w-3 mr-1" /> Anomaly Detection
                </Badge>
                <Badge variant="outline" className="border-blue-400/30 text-blue-300">
                  <Zap className="h-3 w-3 mr-1" /> Real-time Processing
                </Badge>
                <Badge variant="outline" className="border-blue-400/30 text-blue-300">
                  <Shield className="h-3 w-3 mr-1" /> Safety Monitoring
                </Badge>
              </div>
              
              <Button size="lg" asChild className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600">
                <Link to="/products/vision" className="flex items-center gap-2">
                  <Camera className="h-4 w-4" />
                  Explore Vision System
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div 
              className="relative"
              variants={itemVariants}
            >
              {/* Computer Vision Interface Mockup */}
              <div className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-blue-400 text-sm font-medium">CIRO Vision System</span>
                </div>
                
                {/* Camera Feed Mockup */}
                <div className="relative bg-gray-800 rounded-xl p-4 mb-4">
                  <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg relative overflow-hidden">
                    {/* Real industrial image with detection overlay */}
                    <div className="absolute inset-0">
                      <img 
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                        alt="Industrial manufacturing line with computer vision detection"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                    
                    {/* Detection bounding boxes on real image */}
                    <motion.div 
                      className="absolute border-2 border-red-500 rounded"
                      style={{ left: '25%', top: '35%', width: '50%', height: '30%' }}
                      animate={{ 
                        borderColor: ['#ef4444', '#dc2626', '#ef4444'],
                        boxShadow: ['0 0 10px rgba(239, 68, 68, 0.5)', '0 0 20px rgba(239, 68, 68, 0.8)', '0 0 10px rgba(239, 68, 68, 0.5)']
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="absolute -top-6 left-0 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        Surface Defect
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute border-2 border-green-500 rounded"
                      style={{ left: '15%', top: '60%', width: '25%', height: '20%' }}
                    >
                      <div className="absolute -top-6 left-0 bg-green-500 text-white text-xs px-2 py-1 rounded">
                        Normal
                      </div>
                    </motion.div>

                    <motion.div 
                      className="absolute border-2 border-yellow-500 rounded"
                      style={{ left: '65%', top: '25%', width: '20%', height: '25%' }}
                      animate={{ 
                        borderColor: ['#eab308', '#ca8a04', '#eab308'],
                        boxShadow: ['0 0 10px rgba(234, 179, 8, 0.5)', '0 0 20px rgba(234, 179, 8, 0.8)', '0 0 10px rgba(234, 179, 8, 0.5)']
                      }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    >
                      <div className="absolute -top-6 left-0 bg-yellow-500 text-black text-xs px-2 py-1 rounded">
                        Warning
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                {/* Detection Results */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-red-500/20 border border-red-500/30 rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-red-300 text-sm">Surface Defect</span>
                    </div>
                    <span className="text-red-300 text-sm font-mono">98.7%</span>
                  </div>
                  
                  <div className="flex justify-between items-center bg-green-500/20 border border-green-500/30 rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-green-300 text-sm">Quality Pass</span>
                    </div>
                    <span className="text-green-300 text-sm font-mono">99.2%</span>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/20 rounded-lg p-3">
                    <div className="text-center">
                      <div className="text-lg font-bold text-white mb-1">Processing: 45ms</div>
                      <div className="text-xs text-gray-400">Real-time detection</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Computer Vision Use Cases */}
        <motion.section 
          className="container mx-auto px-4 py-16 animate-on-scroll"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={containerVariants}
        >
          <div className="text-center max-w-4xl mx-auto mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
              variants={itemVariants}
            >
              Computer Vision Use Cases
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300"
              variants={itemVariants}
            >
              From manufacturing to agriculture, CIRO's computer vision powers intelligent automation across industries
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Manufacturing Quality Control */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors duration-300">
                      <Settings className="h-6 w-6 text-blue-400" />
                    </div>
                    <CardTitle className="text-lg text-white">Manufacturing QC</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-sm leading-relaxed mb-4">
                    Detect surface defects, measure dimensions, and ensure product quality in real-time production lines.
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-blue-400/20 text-blue-300 text-xs">
                      Defect Detection
                    </Badge>
                    <Badge variant="outline" className="border-blue-400/20 text-blue-300 text-xs">
                      Dimensional Analysis
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Agricultural Monitoring */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-500/20 hover:border-green-400/40 transition-all duration-300 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors duration-300">
                      <Leaf className="h-6 w-6 text-green-400" />
                    </div>
                    <CardTitle className="text-lg text-white">Agricultural Monitoring</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-sm leading-relaxed mb-4">
                    Monitor crop health, detect pests, and optimize irrigation using drone and ground-based cameras.
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-green-400/20 text-green-300 text-xs">
                      Crop Health
                    </Badge>
                    <Badge variant="outline" className="border-green-400/20 text-green-300 text-xs">
                      Pest Detection
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Food Safety */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border-orange-500/20 hover:border-orange-400/40 transition-all duration-300 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-orange-500/20 rounded-lg group-hover:bg-orange-500/30 transition-colors duration-300">
                      <ChefHat className="h-6 w-6 text-orange-400" />
                    </div>
                    <CardTitle className="text-lg text-white">Food Safety</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-sm leading-relaxed mb-4">
                    Ensure food quality, detect contamination, and monitor processing conditions in food production.
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-orange-400/20 text-orange-300 text-xs">
                      Contamination Detection
                    </Badge>
                    <Badge variant="outline" className="border-orange-400/20 text-orange-300 text-xs">
                      Quality Assessment
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Supply Chain Monitoring */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-gradient-to-br from-purple-900/20 to-violet-900/20 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors duration-300">
                      <Truck className="h-6 w-6 text-purple-400" />
                    </div>
                    <CardTitle className="text-lg text-white">Supply Chain</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-sm leading-relaxed mb-4">
                    Track packages, monitor warehouse operations, and ensure proper handling throughout the supply chain.
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-purple-400/20 text-purple-300 text-xs">
                      Package Tracking
                    </Badge>
                    <Badge variant="outline" className="border-purple-400/20 text-purple-300 text-xs">
                      Warehouse Monitoring
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* IoT Device Monitoring */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors duration-300">
                      <Cpu className="h-6 w-6 text-cyan-400" />
                    </div>
                    <CardTitle className="text-lg text-white">IoT Monitoring</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-sm leading-relaxed mb-4">
                    Monitor IoT devices, detect malfunctions, and predict maintenance needs using visual inspection.
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-cyan-400/20 text-cyan-300 text-xs">
                      Device Health
                    </Badge>
                    <Badge variant="outline" className="border-cyan-400/20 text-cyan-300 text-xs">
                      Predictive Maintenance
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Safety & Security */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-gradient-to-br from-red-900/20 to-pink-900/20 border-red-500/20 hover:border-red-400/40 transition-all duration-300 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-red-500/20 rounded-lg group-hover:bg-red-500/30 transition-colors duration-300">
                      <Shield className="h-6 w-6 text-red-400" />
                    </div>
                    <CardTitle className="text-lg text-white">Safety & Security</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-sm leading-relaxed mb-4">
                    Monitor workplace safety, detect security threats, and ensure compliance with safety protocols.
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-red-400/20 text-red-300 text-xs">
                      Safety Compliance
                    </Badge>
                    <Badge variant="outline" className="border-red-400/20 text-red-300 text-xs">
                      Threat Detection
                    </Badge>
                  </div>
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