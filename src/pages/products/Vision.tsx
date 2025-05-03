
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Vision = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero section */}
        <section className="pt-20 pb-16 md:py-28">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                    Ciro Vision
                  </span>
                </h1>
                <p className="text-xl md:text-2xl mb-6">
                  AI-powered visual monitoring for safety, quality, and operational excellence.
                </p>
                <p className="text-muted-foreground mb-8">
                  Deploy intelligent computer vision across your facilities to automatically detect safety issues, quality defects, and operational anomalies 15× faster than manual inspection.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">Request a Demo</Link>
                  </Button>
                  <Button size="lg" variant="outline">
                    View Documentation
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-card border border-border/50 rounded-lg shadow-md overflow-hidden">
                  <div className="border-b border-border/50 bg-muted/30 p-3 flex items-center">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <div className="mx-auto text-sm text-muted-foreground font-medium">
                      Ciro Vision Dashboard
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-muted/30 p-4 rounded relative aspect-video flex items-center justify-center">
                        <div className="absolute top-2 left-2 text-xs bg-background/70 px-2 py-0.5 rounded">
                          Camera 1: Assembly Line
                        </div>
                        <div className="w-full h-full bg-muted/50 rounded flex items-center justify-center">
                          <div className="border-2 border-dashed border-blue-500 w-16 h-12 relative">
                            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                            <div className="text-xs text-blue-500">Quality Check</div>
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 text-xs bg-green-500/20 text-green-500 px-2 py-0.5 rounded flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1"></div>
                          Normal
                        </div>
                      </div>
                      
                      <div className="bg-muted/30 p-4 rounded relative aspect-video flex items-center justify-center">
                        <div className="absolute top-2 left-2 text-xs bg-background/70 px-2 py-0.5 rounded">
                          Camera 2: Loading Bay
                        </div>
                        <div className="w-full h-full bg-muted/50 rounded flex items-center justify-center">
                          <div className="border-2 border-dashed border-red-500 w-16 h-12 relative">
                            <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                            <div className="text-xs text-red-500">No PPE</div>
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 text-xs bg-red-500/20 text-red-500 px-2 py-0.5 rounded flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500 mr-1"></div>
                          Alert
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-muted/30 p-4 rounded mb-4">
                      <div className="flex justify-between mb-2">
                        <div className="text-muted-foreground">Zone Monitoring</div>
                        <div className="text-xs text-yellow-500">Warning</div>
                      </div>
                      <div className="grid grid-cols-4 gap-1">
                        <div className="h-2 rounded-full bg-green-500"></div>
                        <div className="h-2 rounded-full bg-green-500"></div>
                        <div className="h-2 rounded-full bg-yellow-500 animate-pulse"></div>
                        <div className="h-2 rounded-full bg-green-500"></div>
                      </div>
                      <div className="mt-2 text-xs bg-yellow-500/10 p-2 rounded text-yellow-500">
                        Person detected in restricted zone (Camera 3)
                      </div>
                    </div>
                    
                    <div className="bg-muted/30 p-4 rounded">
                      <div className="flex justify-between mb-2">
                        <div className="text-muted-foreground">Live Alerts</div>
                        <div className="text-xs text-green-500">
                          3 active cameras
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="p-2 bg-red-500/10 rounded border border-red-500/20 text-xs flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                            <span>PPE violation - Camera 2</span>
                          </div>
                          <span className="text-muted-foreground">Just now</span>
                        </div>
                        <div className="p-2 bg-yellow-500/10 rounded border border-yellow-500/20 text-xs flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                            <span>Restricted zone entry - Camera 3</span>
                          </div>
                          <span className="text-muted-foreground">1m ago</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="hidden md:block absolute -bottom-6 -left-6 w-24 h-24 bg-purple-500/10 rounded-full blur-xl" />
                <div className="hidden md:block absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Features section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Key Features & Capabilities
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Safety Compliance",
                  description: "Automatically detect PPE violations, zone intrusions, and unsafe behaviors. Reduce safety incidents by up to 65% through real-time monitoring.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  )
                },
                {
                  title: "Quality Assurance",
                  description: "Detect product defects, packaging errors, and quality issues in real-time. Catch problems before they reach your customers.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                },
                {
                  title: "Multi-Camera Support",
                  description: "Monitor up to 200+ camera feeds simultaneously with high accuracy. Scale across multiple facilities with centralized management.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )
                },
                {
                  title: "Edge Computing",
                  description: "Process AI models directly on-site with support for NVIDIA Jetson and other edge devices. Reduce bandwidth needs and ensure privacy.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  )
                },
                {
                  title: "Sensor Integration",
                  description: "Combine camera data with other sensors (RFID, thermal, etc.) for comprehensive monitoring. Get the full picture of your operations.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  )
                },
                {
                  title: "Custom AI Models",
                  description: "Train specialized models for your specific detection needs. Our platform adapts to your unique operational requirements.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                    </svg>
                  )
                }
              ].map((feature, index) => (
                <div key={index} className="bg-card border border-border/50 rounded-lg p-6 shadow-sm">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-purple-500">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use cases section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Common Use Cases</h2>
            <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
              Ciro Vision helps companies across industries improve safety, quality, and operational efficiency.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Safety Compliance Monitoring",
                  description: "Automatically detect PPE violations, unauthorized personnel in restricted areas, and unsafe behaviors. Receive alerts in real-time to address safety concerns immediately.",
                  stats: "65% reduction in safety incidents"
                },
                {
                  title: "Quality Control & Defect Detection",
                  description: "Identify product defects, packaging errors, and quality issues on production lines. Catch problems early to reduce waste and customer complaints.",
                  stats: "15% improvement in quality metrics"
                },
                {
                  title: "Process Optimization",
                  description: "Monitor workflows and identify bottlenecks or inefficiencies. Use AI-driven insights to streamline operations and improve throughput.",
                  stats: "20% increase in operational efficiency"
                },
                {
                  title: "Theft & Loss Prevention",
                  description: "Monitor storage areas, loading docks, and high-value asset locations. Get immediate alerts for suspicious activities or unauthorized access.",
                  stats: "30% reduction in inventory shrinkage"
                }
              ].map((useCase, index) => (
                <div key={index} className="bg-card border border-border/50 rounded-lg overflow-hidden shadow-sm">
                  <div className="h-2 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                    <p className="text-muted-foreground mb-4">{useCase.description}</p>
                    <div className="bg-muted/30 px-4 py-3 rounded-lg text-center">
                      <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                        {useCase.stats}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="bg-card border border-border/50 rounded-lg p-8 md:p-12 shadow-md text-center">
              <h2 className="text-3xl font-bold mb-6">
                See Ciro Vision in action
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Request a personalized demo to see how Ciro Vision can enhance safety and quality across your operations.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Schedule a Demo</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Vision;
