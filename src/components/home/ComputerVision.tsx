import { Camera, Eye, Shield, Zap, TrendingUp, CheckCircle } from "lucide-react";

const ComputerVision = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-600/3 to-blue-600/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-purple-400 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-full mb-6">
              <Camera className="w-4 h-4" />
              <span>Computer Vision Intelligence</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Transform Cameras into
              </span>
              <br />
              <span className="text-white">
                Intelligent Sensors
              </span>
            </h2>
            
            <p className="text-lg md:text-xl lg:text-lg xl:text-lg 2xl:text-xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
              Our advanced computer vision technology turns any camera into an intelligent monitoring system, 
              providing real-time insights for quality control, safety monitoring, and process optimization.
            </p>
          </div>

          {/* Main Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            {/* Left: Visual Demo */}
            <div className="relative">
              <div className="bg-card/50 border border-border/30 rounded-2xl p-8 shadow-xl">
                <div className="relative h-80 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl overflow-hidden border border-purple-500/20">
                  {/* Simulated Camera Feed */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Camera className="w-8 h-8 text-purple-400" />
                      </div>
                      <p className="text-purple-400 font-semibold">Live Camera Feed</p>
                      <p className="text-gray-400 text-sm mt-2">Real-time AI Analysis</p>
                    </div>
                  </div>
                  
                  {/* AI Detection Overlay */}
                  <div className="absolute top-4 left-4 bg-green-500/20 border border-green-400/30 rounded-lg px-3 py-1">
                    <span className="text-green-400 text-sm font-semibold">✓ Quality Pass</span>
                  </div>
                  
                  <div className="absolute top-4 right-4 bg-blue-500/20 border border-blue-400/30 rounded-lg px-3 py-1">
                    <span className="text-blue-400 text-sm font-semibold">⚡ 12ms</span>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 bg-purple-500/20 border border-purple-400/30 rounded-lg px-3 py-1">
                    <span className="text-purple-400 text-sm font-semibold">🎯 99.7% Accuracy</span>
                  </div>
                </div>
                
                {/* Stats Bar */}
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">12ms</div>
                    <div className="text-gray-400 text-sm">Latency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">99.7%</div>
                    <div className="text-gray-400 text-sm">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">24/7</div>
                    <div className="text-gray-400 text-sm">Monitoring</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Key Capabilities */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-8">Advanced Vision Capabilities</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-card/30 border border-border/20 rounded-lg hover:bg-card/50 transition-all duration-300">
                  <div className="p-2 bg-green-500/20 rounded-lg flex-shrink-0">
                    <Eye className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Quality Control & Defect Detection</h4>
                    <p className="text-gray-400 text-sm">Automatically detect product defects, surface imperfections, and quality issues in real-time with 99.7% accuracy.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card/30 border border-border/20 rounded-lg hover:bg-card/50 transition-all duration-300">
                  <div className="p-2 bg-blue-500/20 rounded-lg flex-shrink-0">
                    <Shield className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Safety Monitoring & Compliance</h4>
                    <p className="text-gray-400 text-sm">Monitor workplace safety, PPE compliance, and hazardous situations with instant alerts and reporting.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card/30 border border-border/20 rounded-lg hover:bg-card/50 transition-all duration-300">
                  <div className="p-2 bg-purple-500/20 rounded-lg flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Process Optimization</h4>
                    <p className="text-gray-400 text-sm">Analyze production workflows, identify bottlenecks, and optimize processes through visual intelligence.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card/30 border border-border/20 rounded-lg hover:bg-card/50 transition-all duration-300">
                  <div className="p-2 bg-orange-500/20 rounded-lg flex-shrink-0">
                    <Zap className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Edge AI Processing</h4>
                    <p className="text-gray-400 text-sm">Run AI models directly on cameras and edge devices for ultra-low latency and offline operation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Use Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card/50 border border-border/30 rounded-xl overflow-hidden hover:shadow-purple-500/10 transition-all duration-300">
              <div className="h-32 relative">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Modern food processing facility with automated production lines"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              <div className="p-6 text-center">
                <h4 className="font-semibold text-white mb-3">Manufacturing</h4>
                <p className="text-gray-400 text-sm">
                  Detect defects, monitor assembly lines, and ensure quality standards across production processes.
                </p>
              </div>
            </div>
            
            <div className="bg-card/50 border border-border/30 rounded-xl overflow-hidden hover:shadow-blue-500/10 transition-all duration-300">
              <div className="h-32 relative">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Industrial safety monitoring with computer vision cameras and protective equipment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              <div className="p-6 text-center">
                <h4 className="font-semibold text-white mb-3">Workplace Safety</h4>
                <p className="text-gray-400 text-sm">
                  Monitor safety compliance, detect hazards, and prevent accidents with real-time alerts.
                </p>
              </div>
            </div>
            
            <div className="bg-card/50 border border-border/30 rounded-xl overflow-hidden hover:shadow-purple-500/10 transition-all duration-300">
              <div className="h-32 relative">
                <img 
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Modern logistics warehouse with automated sorting and robotics systems"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              <div className="p-6 text-center">
                <h4 className="font-semibold text-white mb-3">Logistics & Warehousing</h4>
                <p className="text-gray-400 text-sm">
                  Track inventory, monitor loading operations, and optimize warehouse workflows.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 border border-purple-500/20 rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to See Computer Vision in Action?
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              Experience how our computer vision technology can transform your operations with a personalized demo.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                <span>Schedule a Demo</span>
                <Camera className="w-4 h-4" />
              </a>
              <a href="/products/vision" className="border border-purple-500/30 hover:border-purple-400 text-gray-300 hover:text-purple-400 font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center gap-2">
                <span>Learn More</span>
                <Eye className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComputerVision; 