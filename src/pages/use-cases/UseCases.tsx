
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  TrendingUp, 
  Truck, 
  Shield, 
  Zap, 
  Clock, 
  DollarSign, 
  Users, 
  CheckCircle,
  ArrowRight,
  Play,
  Target,
  BarChart3,
  Cpu,
  Eye,
  Database,
  Workflow,
  Globe,
  Award,
  Calendar
} from "lucide-react";

const useCases = [
  {
    id: 1,
    industry: "Manufacturing",
    title: "Improving Uptime & Quality",
    subtitle: "Food Processing Excellence",
    description: "A leading food manufacturer achieved breakthrough operational improvements by deploying CIRO's real-time analytics platform. The system connected previously siloed data from production lines, quality systems, and maintenance records, enabling predictive maintenance and real-time quality monitoring across their entire facility.",
    challenge: "Facing 15% unplanned downtime and quality compliance issues affecting 8% of production batches.",
    solution: "Implemented CIRO AI Analytics with real-time monitoring, predictive maintenance algorithms, and automated quality control systems.",
    results: [
      { metric: "20%", label: "Reduction in unplanned downtime", icon: Clock },
      { metric: "15%", label: "Improvement in quality compliance", icon: CheckCircle },
      { metric: "4 months", label: "ROI achievement period", icon: DollarSign },
      { metric: "$2.1M", label: "Annual cost savings", icon: TrendingUp }
    ],
    products: ["Ciro AI Analytics", "Data Integration Hub", "Workflow Automation"],
    color: "from-purple-600 to-blue-600",
    icon: TrendingUp,
    company: "Global Food Corp",
    implementation: "6 months",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Modern food processing facility with automated production lines"
  },
  {
    id: 2,
    industry: "Logistics & Distribution",
    title: "Streamlining Supply Chains",
    subtitle: "3PL Network Optimization",
    description: "A major 3PL logistics provider revolutionized their supply chain operations by implementing CIRO across their network of 12 facilities. The platform provided unified visibility, smart inventory alerts, and predictive maintenance capabilities that helped identify bottlenecks and potential delays before they impacted operations.",
    challenge: "Managing complex supply chain across 12 facilities with 25% delivery delays and limited visibility.",
    solution: "Deployed CIRO's unified platform with predictive analytics, real-time tracking, and automated alert systems.",
    results: [
      { metric: "25%", label: "Reduction in supply chain delays", icon: Clock },
      { metric: "18%", label: "Improvement in on-time delivery", icon: CheckCircle },
      { metric: "3 months", label: "Implementation timeline", icon: Zap },
      { metric: "30%", label: "Increase in inventory accuracy", icon: Target }
    ],
    products: ["Ciro AI Analytics", "Data Integration Hub", "Workflow Automation"],
    color: "from-blue-600 to-indigo-600",
    icon: Truck,
    company: "LogiTech Solutions",
    implementation: "3 months",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Modern warehouse with automated logistics systems and robotics"
  },
  {
    id: 3,
    industry: "Safety & Compliance",
    title: "Enhancing Workplace Safety",
    subtitle: "Industrial Safety Monitoring",
    description: "An industrial manufacturer achieved breakthrough safety improvements through CIRO Vision's computer vision technology. The system was configured to automatically detect PPE violations, zone intrusions, and unsafe behaviors in real-time, allowing safety officers to address issues immediately.",
    challenge: "Experiencing 12 safety incidents monthly with 90% response time to violations taking over 5 minutes.",
    solution: "Implemented CIRO Vision with edge AI processing, real-time monitoring, and automated alert systems.",
    results: [
      { metric: "65%", label: "Reduction in workplace incidents", icon: Shield },
      { metric: "90%", label: "Faster response to violations", icon: Zap },
      { metric: "99.8%", label: "Compliance documentation rate", icon: CheckCircle },
      { metric: "<2s", label: "Average response time", icon: Clock }
    ],
    products: ["Ciro Vision", "Edge AI", "Safety Monitoring"],
    color: "from-indigo-600 to-purple-600",
    icon: Shield,
    company: "Industrial Manufacturing Co",
    implementation: "4 months",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Industrial safety monitoring system with computer vision cameras"
  },
  {
    id: 4,
    industry: "Energy & Utilities",
    title: "Optimizing Resource Usage",
    subtitle: "Distributed Energy Management",
    description: "An energy company transformed their distributed energy resources management using CIRO's predictive analytics. By connecting sensor data, weather forecasts, and operational systems, they were able to predict demand patterns and automatically adjust production accordingly.",
    challenge: "Managing distributed energy resources with 15% waste and inefficient demand forecasting.",
    solution: "Deployed CIRO with predictive analytics, IoT integration, and automated optimization algorithms.",
    results: [
      { metric: "12%", label: "Reduction in resource waste", icon: Target },
      { metric: "8%", label: "Increase in energy efficiency", icon: TrendingUp },
      { metric: "$1.2M", label: "Annual savings identified", icon: DollarSign },
      { metric: "24/7", label: "Automated monitoring", icon: Eye }
    ],
    products: ["Ciro AI Analytics", "IoT Integration", "Predictive Analytics"],
    color: "from-blue-600 to-green-600",
    icon: Zap,
    company: "Green Energy Solutions",
    implementation: "5 months",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Solar panels and renewable energy infrastructure"
  },
  {
    id: 5,
    industry: "Aerospace & Defense",
    title: "Precision Manufacturing",
    subtitle: "Quality Assurance Excellence",
    description: "A leading aerospace manufacturer implemented CIRO to enhance their precision manufacturing processes. The system provided real-time quality monitoring, predictive maintenance, and automated compliance tracking across their production facilities.",
    challenge: "Maintaining 99.99% quality standards with complex manufacturing processes and strict compliance requirements.",
    solution: "Integrated CIRO's precision monitoring, automated quality control, and compliance management systems.",
    results: [
      { metric: "99.99%", label: "Quality compliance rate", icon: CheckCircle },
      { metric: "40%", label: "Faster inspection process", icon: Clock },
      { metric: "100%", label: "Compliance documentation", icon: Shield },
      { metric: "Zero", label: "Defects in final assembly", icon: Target }
    ],
    products: ["Ciro Vision", "Quality Control", "Compliance Management"],
    color: "from-green-600 to-emerald-600",
    icon: Target,
    company: "AeroTech Industries",
    implementation: "8 months",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Precision aerospace manufacturing with quality control systems"
  },
  {
    id: 6,
    industry: "Pharmaceuticals",
    title: "Regulatory Compliance",
    subtitle: "GMP Manufacturing Excellence",
    description: "A pharmaceutical company achieved unprecedented regulatory compliance and operational efficiency using CIRO's integrated platform. The system ensured real-time monitoring of critical processes, automated documentation, and predictive quality control.",
    challenge: "Managing complex GMP requirements with manual processes causing 20% documentation delays.",
    solution: "Implemented CIRO's automated compliance system with real-time monitoring and predictive analytics.",
    results: [
      { metric: "100%", label: "Regulatory compliance rate", icon: Shield },
      { metric: "60%", label: "Faster documentation process", icon: Clock },
      { metric: "Zero", label: "Compliance violations", icon: CheckCircle },
      { metric: "24/7", label: "Automated monitoring", icon: Eye }
    ],
    products: ["Ciro AI Analytics", "Compliance Management", "Documentation Automation"],
    color: "from-emerald-600 to-teal-600",
    icon: Award,
    company: "PharmaCorp International",
    implementation: "7 months",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Modern pharmaceutical laboratory with GMP compliance systems"
  }
];

const UseCases = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navbar />
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/3 via-blue-600/3 to-cyan-600/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Hero section */}
        <section className="pt-24 pb-16 md:py-28">
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-purple-400 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-full mb-6">
                <TrendingUp className="w-4 h-4" />
                <span>Real-World Impact</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Success Stories
                </span>
                <br />
                <span className="text-white">
                  That Drive Results
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Discover how leading companies across industries are using CIRO technology to achieve 
                breakthrough results and gain competitive advantages in their markets.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <BarChart3 className="w-5 h-5 mr-2" />
                  View Case Studies
                </Button>
                <Button 
                  variant="outline"
                  className="px-8 py-3 border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50 rounded-lg font-semibold transition-all duration-300"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
            <div className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 border border-purple-500/20 rounded-2xl p-8 lg:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Global Impact Across Industries
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                  These success stories represent just a fraction of the transformative impact CIRO is delivering 
                  across global industries.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">$2.3B+</div>
                  <div className="text-gray-400 text-sm">Annual Savings Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
                  <div className="text-gray-400 text-sm">Companies Transformed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">99.7%</div>
                  <div className="text-gray-400 text-sm">Average Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-400 mb-2">4.2mo</div>
                  <div className="text-gray-400 text-sm">Average ROI Period</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use cases section */}
        <section id="case-studies" className="py-16">
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Detailed Case Studies
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Explore comprehensive case studies showing how CIRO technology delivers measurable results 
                across different industries and use cases.
              </p>
            </div>

            <div className="space-y-12">
              {useCases.map((useCase) => (
                <div 
                  key={useCase.id}
                  className="bg-card/80 border border-border/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                  {/* Header with gradient */}
                  <div className={`h-4 bg-gradient-to-r ${useCase.color}`}></div>
                  
                  <div className="p-8 lg:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Left Column - Overview */}
                      <div className="lg:col-span-1">
                        <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                          <img 
                            src={useCase.image} 
                            alt={useCase.imageAlt}
                            className="w-full h-full object-cover transition-opacity duration-300"
                            onLoad={(e) => {
                              // Fade in the image when loaded
                              e.currentTarget.style.opacity = '1';
                            }}
                            onError={(e) => {
                              // Fallback to gradient background if image fails to load
                              const target = e.currentTarget as HTMLImageElement;
                              const fallback = target.nextElementSibling as HTMLElement;
                              if (target && fallback) {
                                target.style.display = 'none';
                                fallback.style.display = 'flex';
                              }
                            }}
                            style={{ opacity: 0 }}
                          />
                          <div 
                            className={`hidden w-full h-full bg-gradient-to-br ${useCase.color} items-center justify-center`}
                          >
                            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                              <useCase.icon className="w-10 h-10 text-white" />
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-2">{useCase.industry}</h3>
                            <p className="text-lg font-semibold text-gray-300 mb-1">{useCase.title}</p>
                            <p className="text-sm text-gray-400">{useCase.subtitle}</p>
                          </div>
                          
                          <div className="bg-card/50 rounded-lg p-4 border border-border/30">
                            <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                              <Users className="w-4 h-4" />
                              <span>Company</span>
                            </div>
                            <p className="text-white font-semibold">{useCase.company}</p>
                          </div>
                          
                          <div className="bg-card/50 rounded-lg p-4 border border-border/30">
                            <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                              <Clock className="w-4 h-4" />
                              <span>Implementation</span>
                            </div>
                            <p className="text-white font-semibold">{useCase.implementation}</p>
                          </div>
                        </div>
                      </div>

                      {/* Right Column - Details */}
                      <div className="lg:col-span-2">
                        <div className="space-y-6">
                          {/* Challenge & Solution */}
                          <div>
                            <h4 className="text-xl font-bold text-white mb-4">Challenge & Solution</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                                <h5 className="font-semibold text-red-400 mb-2">Challenge</h5>
                                <p className="text-gray-300 text-sm">{useCase.challenge}</p>
                              </div>
                              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                                <h5 className="font-semibold text-green-400 mb-2">Solution</h5>
                                <p className="text-gray-300 text-sm">{useCase.solution}</p>
                              </div>
                            </div>
                          </div>

                          {/* Results */}
                          <div>
                            <h4 className="text-xl font-bold text-white mb-4">Key Results</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {useCase.results.map((result, index) => (
                                <div key={index} className="flex items-center justify-between p-4 bg-card/50 rounded-lg border border-border/30">
                                  <div className="flex items-center gap-3">
                                    <div className="p-2 bg-purple-500/20 rounded-lg">
                                      <result.icon className="w-4 h-4 text-purple-400" />
                                    </div>
                                    <span className="text-gray-300 text-sm">{result.label}</span>
                                  </div>
                                  <span className="text-purple-400 font-bold text-lg">{result.metric}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Products Used */}
                          <div>
                            <h4 className="text-xl font-bold text-white mb-4">CIRO Products Used</h4>
                            <div className="flex flex-wrap gap-3">
                              {useCase.products.map((product, index) => (
                                <div key={index} className="bg-background border border-border/50 px-4 py-2 rounded-lg text-sm font-medium text-gray-300">
                                  {product}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
            <div className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 border border-purple-500/20 rounded-2xl p-8 lg:p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Create Your Own Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Schedule a personalized demo to see how CIRO can transform your operations 
                and deliver measurable results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link to="/contact">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book a Demo
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50 font-semibold py-3 px-8 transition-all duration-300"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  View Products
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default UseCases;
