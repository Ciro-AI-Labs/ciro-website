
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Eye, Shield, CheckCircle, Camera, Cpu, Zap, Brain, Target, AlertTriangle, TrendingUp, Users, Layers, Monitor, Settings, Lock, Sparkles } from "lucide-react";

const Vision = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero section */}
        <section className="relative pt-24 pb-16 md:py-32 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/5 via-blue-600/5 to-cyan-600/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}} />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-purple-400 tracking-wider uppercase">Computer Vision Platform</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                  <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Ciro Vision
                  </span>
                </h1>
                
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                  AI That Sees Everything,<br />
                  <span className="text-gray-300">Misses Nothing</span>
                </h2>
                
                <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
                  Revolutionary computer vision platform that transforms any camera into an intelligent monitoring system. 
                  Detect safety violations, quality defects, and operational anomalies with superhuman precision—
                  <span className="text-blue-400 font-semibold"> 15× faster than human inspection.</span>
                </p>
                
                <div className="flex items-center gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-black text-purple-400">99.8%</div>
                    <div className="text-sm text-gray-400">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-blue-400">200+</div>
                    <div className="text-sm text-gray-400">Cameras</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-cyan-400">&lt;50ms</div>
                    <div className="text-sm text-gray-400">Response</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold px-8 py-4 text-lg" asChild>
                    <Link to="/contact">Request Live Demo</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg">
                    <Camera className="w-5 h-5 mr-2" />
                    See It In Action
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                {/* Enhanced Dashboard Mockup */}
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl shadow-2xl overflow-hidden">
                  {/* Header */}
                  <div className="border-b border-slate-600/30 bg-slate-700/50 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full" />
                        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                        <div className="w-3 h-3 bg-green-500 rounded-full" />
                      </div>
                      <div className="text-white font-medium">Ciro Vision Control Center</div>
                    </div>
                    <div className="flex items-center gap-2 text-green-400 text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      Live Monitoring
                    </div>
                  </div>
                  
                  {/* Main Dashboard */}
                  <div className="p-6">
                    {/* Camera Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-slate-700/30 p-4 rounded-xl relative group hover:bg-slate-700/50 transition-all duration-300">
                        <div className="absolute top-3 left-3 text-xs bg-slate-900/70 px-2 py-1 rounded text-white">
                          Production Line A
                        </div>
                        <div className="aspect-video bg-slate-600/30 rounded-lg flex items-center justify-center mb-3 relative overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                            alt="Computer vision quality control system tracking products on assembly line"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 flex items-center justify-center">
                            <div className="border-2 border-dashed border-blue-400 w-20 h-16 relative">
                              <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-blue-400 animate-pulse"></div>
                              <div className="text-xs text-blue-400 text-center mt-2">Quality OK</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-xs text-gray-300">Cam #1</div>
                          <div className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded flex items-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                            Normal
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-slate-700/30 p-4 rounded-xl relative group hover:bg-slate-700/50 transition-all duration-300">
                        <div className="absolute top-3 left-3 text-xs bg-slate-900/70 px-2 py-1 rounded text-white">
                          Safety Zone B
                        </div>
                        <div className="aspect-video bg-slate-600/30 rounded-lg flex items-center justify-center mb-3 relative overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                            alt="Computer vision safety monitoring detecting PPE violations in industrial workplace"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-red-500/30 to-orange-500/30 flex items-center justify-center">
                            <div className="border-2 border-dashed border-red-400 w-20 h-16 relative">
                              <div className="absolute top-2 left-2 w-4 h-4 rounded-full bg-red-400 animate-pulse"></div>
                              <div className="text-xs text-red-400 text-center mt-2">No PPE</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-xs text-gray-300">Cam #2</div>
                          <div className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded flex items-center gap-1">
                            <AlertTriangle className="w-3 h-3" />
                            Alert
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* AI Insights Panel */}
                    <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-400/20 rounded-xl p-4 mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Brain className="w-4 h-4 text-purple-400" />
                          <span className="text-white font-medium">AI Analysis</span>
                        </div>
                        <div className="text-xs text-purple-400">Real-time Processing</div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 mb-3">
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-400">47</div>
                          <div className="text-xs text-gray-400">Objects Detected</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-yellow-400">2</div>
                          <div className="text-xs text-gray-400">Warnings</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-red-400">1</div>
                          <div className="text-xs text-gray-400">Critical</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Live Alerts */}
                    <div className="bg-slate-700/30 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-3">
                        <div className="text-white font-medium">Live Alerts</div>
                        <div className="text-xs text-green-400 flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                          12 Cameras Active
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/20 text-xs flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                            <span className="text-red-400">PPE violation detected - Zone B</span>
                          </div>
                          <span className="text-gray-400">Just now</span>
                        </div>
                        <div className="p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20 text-xs flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                            <span className="text-yellow-400">Quality check needed - Line A</span>
                          </div>
                          <span className="text-gray-400">2m ago</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="hidden md:block absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
                <div className="hidden md:block absolute -top-8 -right-8 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Technology Deep Dive */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Powered by <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Deep Learning</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Our computer vision platform combines cutting-edge AI models with industrial-grade hardware 
                to deliver unmatched accuracy and reliability in the most demanding environments.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Neural Networks",
                  description: "Advanced deep learning models trained on millions of industrial images for maximum accuracy.",
                  icon: Brain,
                  gradient: "from-purple-500 to-violet-500",
                  stats: "99.8% accuracy"
                },
                {
                  title: "Edge Computing",
                  description: "Process AI models locally with NVIDIA Jetson and specialized hardware for real-time performance.",
                  icon: Cpu,
                  gradient: "from-blue-500 to-cyan-500",
                  stats: "<50ms latency"
                },
                {
                  title: "Computer Vision",
                  description: "Multi-modal visual AI that understands context, identifies objects, and predicts behaviors.",
                  icon: Eye,
                  gradient: "from-cyan-500 to-teal-500",
                  stats: "200+ cameras"
                }
              ].map((tech, index) => (
                <div key={index} className="group relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${tech.gradient} opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-opacity duration-300`}></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8 text-center shadow-xl group-hover:border-white/20 transition-all duration-300">
                    <div className={`mx-auto w-16 h-16 bg-gradient-to-r ${tech.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <tech.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{tech.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">{tech.description}</p>
                    <div className={`text-lg font-bold bg-gradient-to-r ${tech.gradient} bg-clip-text text-transparent`}>
                      {tech.stats}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Models & Capabilities */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">AI Models & Capabilities</h2>
                <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  Specialized AI models trained for industrial environments, delivering superhuman perception 
                  and decision-making in real-time operations.
                </p>
              </div>
              
                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {[
                   {
                     title: "Safety Compliance",
                     description: "Detect PPE violations, zone intrusions, and unsafe behaviors with 99.8% accuracy.",
                     icon: Shield,
                     color: "text-red-400",
                     bgColor: "bg-red-500/10",
                     borderColor: "border-red-500/20",
                     features: ["PPE Detection", "Zone Monitoring", "Behavior Analysis", "Real-time Alerts"],
                     image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                   },
                                     {
                     title: "Quality Assurance",
                     description: "Identify defects, packaging errors, and quality issues before they reach customers.",
                     icon: CheckCircle,
                     color: "text-green-400",
                     bgColor: "bg-green-500/10",
                     borderColor: "border-green-500/20",
                     features: ["Defect Detection", "Packaging Inspection", "Dimension Analysis", "Color Matching"],
                     image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                   },
                                     {
                     title: "Process Monitoring",
                     description: "Optimize workflows by identifying bottlenecks and inefficiencies in real-time.",
                     icon: TrendingUp,
                     color: "text-blue-400",
                     bgColor: "bg-blue-500/10",
                     borderColor: "border-blue-500/20",
                     features: ["Flow Analysis", "Bottleneck Detection", "Efficiency Tracking", "Performance KPIs"],
                     image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                   },
                                     {
                     title: "Security & Access",
                     description: "Monitor unauthorized access, theft prevention, and asset protection systems.",
                     icon: Lock,
                     color: "text-purple-400",
                     bgColor: "bg-purple-500/10",
                     borderColor: "border-purple-500/20",
                     features: ["Access Control", "Theft Detection", "Perimeter Security", "Asset Tracking"],
                     image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Security camera image
                   },
                   {
                     title: "Multi-Camera Fusion",
                     description: "Coordinate insights across hundreds of cameras for comprehensive monitoring.",
                     icon: Layers,
                     color: "text-cyan-400",
                     bgColor: "bg-cyan-500/10",
                     borderColor: "border-cyan-500/20",
                     features: ["Multi-view Analysis", "3D Reconstruction", "Object Tracking", "Centralized Control"],
                     image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                   },
                   {
                     title: "Custom AI Training",
                     description: "Train specialized models for your unique detection needs and requirements.",
                     icon: Sparkles,
                     color: "text-orange-400",
                     bgColor: "bg-orange-500/10",
                     borderColor: "border-orange-500/20",
                     features: ["Custom Models", "Transfer Learning", "Domain Adaptation", "Continuous Improvement"],
                     image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                   }
                                 ].map((capability, index) => (
                   <div key={index} className={`group ${capability.bgColor} backdrop-blur-sm border ${capability.borderColor} rounded-2xl overflow-hidden shadow-xl hover:border-white/20 transition-all duration-300`}>
                     {/* Image Header */}
                     <div className="relative h-32 overflow-hidden">
                       <img 
                         src={capability.image}
                         alt={`${capability.title} computer vision in action`}
                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                         onError={e => { e.currentTarget.onerror = null; e.currentTarget.src = "https://via.placeholder.com/400x128/3b0764/ffffff?text=Security+AI"; }}
                       />
                       <div className={`absolute inset-0 ${capability.bgColor} opacity-50`}></div>
                       <div className="absolute top-3 left-3">
                         <div className={`w-10 h-10 ${capability.bgColor} rounded-lg flex items-center justify-center backdrop-blur-sm border ${capability.borderColor}`}>
                           <capability.icon className={`w-5 h-5 ${capability.color}`} />
                         </div>
                       </div>
                     </div>
                     
                     <div className="p-6">
                       <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                       <p className="text-gray-300 leading-relaxed mb-4">{capability.description}</p>
                                           <div className="space-y-2">
                         {capability.features.map((feature, featureIndex) => (
                           <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                             <div className={`w-1.5 h-1.5 rounded-full ${capability.color.replace('text-', 'bg-')}`}></div>
                             {feature}
                           </div>
                         ))}
                       </div>
                     </div>
                   </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Real-world Impact */}
        <section className="py-20 bg-gradient-to-br from-slate-800/50 via-purple-900/20 to-blue-900/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Real-World Impact</h2>
                <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  See how Ciro Vision transforms operations across industries with measurable results 
                  and quantifiable improvements in safety, quality, and efficiency.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Manufacturing Excellence",
                    description: "A food processing facility reduced safety incidents by 65% and improved quality metrics by 15% within 6 months of deployment.",
                    icon: Target,
                    gradient: "from-orange-500 to-red-500",
                    metrics: [
                      { label: "Safety Incidents", value: "65%", trend: "decrease" },
                      { label: "Quality Improvements", value: "15%", trend: "increase" },
                      { label: "Detection Speed", value: "15x", trend: "faster" }
                    ]
                  },
                  {
                    title: "Logistics Optimization",
                    description: "A distribution center achieved 30% reduction in inventory shrinkage and 20% improvement in operational efficiency.",
                    icon: TrendingUp,
                    gradient: "from-blue-500 to-cyan-500",
                    metrics: [
                      { label: "Inventory Shrinkage", value: "30%", trend: "decrease" },
                      { label: "Operational Efficiency", value: "20%", trend: "increase" },
                      { label: "Response Time", value: "90%", trend: "faster" }
                    ]
                  },
                  {
                    title: "Warehouse Security",
                    description: "Enhanced security monitoring with real-time threat detection, preventing unauthorized access and protecting valuable assets.",
                    icon: Shield,
                    gradient: "from-purple-500 to-violet-500",
                    metrics: [
                      { label: "Security Breaches", value: "95%", trend: "decrease" },
                      { label: "False Alarms", value: "80%", trend: "reduction" },
                      { label: "Asset Protection", value: "99.9%", trend: "uptime" }
                    ]
                  },
                  {
                    title: "Quality Control",
                    description: "Automated quality inspection systems catching defects 15x faster than manual processes with 99.8% accuracy.",
                    icon: CheckCircle,
                    gradient: "from-green-500 to-emerald-500",
                    metrics: [
                      { label: "Defect Detection", value: "99.8%", trend: "accuracy" },
                      { label: "Inspection Speed", value: "15x", trend: "faster" },
                      { label: "Customer Complaints", value: "40%", trend: "decrease" }
                    ]
                  }
                ].map((impact, index) => (
                                     <div key={index} className="group relative">
                     <div className={`absolute inset-0 bg-gradient-to-r ${impact.gradient} opacity-10 rounded-2xl blur-xl group-hover:opacity-20 transition-opacity duration-300`}></div>
                     <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl overflow-hidden shadow-xl group-hover:border-white/20 transition-all duration-300">
                       {/* Image Header */}
                       <div className="relative h-48 overflow-hidden">
                         <img 
                           src={
                             index === 0 ? "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" :
                             index === 1 ? "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" :
                             index === 2 ? "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" :
                             "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                           }
                           alt={`Computer vision ${impact.title.toLowerCase()} in action`}
                           className="w-full h-full object-cover"
                         />
                         <div className={`absolute inset-0 bg-gradient-to-r ${impact.gradient} opacity-20`}></div>
                         {/* Simulated tracking overlay */}
                         <div className="absolute inset-0 flex items-center justify-center">
                           <div className="border-2 border-dashed border-white w-24 h-16 relative animate-pulse">
                             <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-white"></div>
                             <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-white"></div>
                             <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-white"></div>
                             <div className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full bg-white"></div>
                           </div>
                         </div>
                       </div>
                       
                       <div className="p-8">
                         <div className="flex items-center gap-3 mb-6">
                           <div className={`w-12 h-12 bg-gradient-to-r ${impact.gradient} rounded-xl flex items-center justify-center`}>
                             <impact.icon className="w-6 h-6 text-white" />
                           </div>
                           <h3 className="text-2xl font-bold text-white">{impact.title}</h3>
                         </div>
                         <p className="text-gray-300 leading-relaxed mb-6">{impact.description}</p>
                         <div className="grid grid-cols-1 gap-4">
                           {impact.metrics.map((metric, metricIndex) => (
                             <div key={metricIndex} className="flex justify-between items-center bg-slate-700/30 rounded-lg p-3">
                               <span className="text-gray-300 text-sm">{metric.label}</span>
                               <div className="flex items-center gap-2">
                                 <span className={`text-lg font-bold bg-gradient-to-r ${impact.gradient} bg-clip-text text-transparent`}>
                                   {metric.value}
                                 </span>
                                 <span className="text-xs text-gray-400">{metric.trend}</span>
                               </div>
                             </div>
                           ))}
                         </div>
                       </div>
                     </div>
                   </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Integration & Deployment */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Easy Integration,<br />
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Powerful Results</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
                Deploy Ciro Vision with your existing camera infrastructure in days, not months. 
                Our platform adapts to your environment and scales with your operations.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {[
                  {
                    step: "01",
                    title: "Camera Integration",
                    description: "Connect existing IP cameras or install new ones with our recommended hardware.",
                    icon: Camera
                  },
                  {
                    step: "02", 
                    title: "AI Model Deployment",
                    description: "Deploy pre-trained models or customize AI for your specific detection needs.",
                    icon: Brain
                  },
                  {
                    step: "03",
                    title: "Dashboard Setup",
                    description: "Configure monitoring dashboards and alert systems for your team.",
                    icon: Monitor
                  },
                  {
                    step: "04",
                    title: "Live Monitoring",
                    description: "Start receiving real-time insights and alerts across all your operations.",
                    icon: Zap
                  }
                ].map((step, index) => (
                  <div key={index} className="group">
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-6 text-center shadow-xl group-hover:border-white/20 transition-all duration-300">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-sm font-bold text-purple-400 mb-2">{step.step}</div>
                      <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Operations?</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  See Ciro Vision in action with a personalized demo tailored to your industry and use cases.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold px-8 py-4 text-lg" asChild>
                    <Link to="/contact">Schedule Live Demo</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg">
                    <Users className="w-5 h-5 mr-2" />
                    Talk to Expert
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Vision;
