
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Users, Award, Shield, TrendingUp, Clock, CheckCircle, Target, Eye, Brain, Cpu, Zap, Camera, Sparkles } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero */}
        <section className="relative pt-24 pb-16 md:py-32 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/5 via-blue-600/5 to-cyan-600/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}} />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Ciro Labs</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Innovation • Research • Development</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Exploring the boundaries of human intelligence through deep tech, computer vision, and AI research. 
                Building the future where robots and AI overlays seamlessly integrate with human operations.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-purple-400" />
                  Deep Tech Research
                </span>
                <span className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-blue-400" />
                  Computer Vision
                </span>
                <span className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  AI Innovation
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Mission</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                To push the boundaries of human intelligence by developing cutting-edge AI systems that see, understand, 
                and act in the real world—bridging the gap between human intuition and machine precision.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: 'Explore', 
                  description: 'Research the frontiers of computer vision, AI, and human-machine interaction.',
                  icon: Brain,
                  color: 'from-purple-500 to-violet-500'
                },
                { 
                  title: 'Innovate', 
                  description: 'Develop breakthrough technologies that redefine what\'s possible in industrial AI.',
                  icon: Sparkles,
                  color: 'from-blue-500 to-cyan-500'
                },
                { 
                  title: 'Transform', 
                  description: 'Deploy AI solutions that revolutionize how humans and machines collaborate.',
                  icon: Zap,
                  color: 'from-cyan-500 to-teal-500'
                }
              ].map((pillar, index) => (
                <div key={index} className="group relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${pillar.color} opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-opacity duration-300`}></div>
                  <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center shadow-xl group-hover:border-white/20 transition-all duration-300">
                    <div className={`mx-auto w-16 h-16 bg-gradient-to-r ${pillar.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <pillar.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{pillar.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Ciro / The Real Cost of Latency */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Why <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">Deep Tech</span> Matters
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                The next industrial revolution isn't about faster machines—it's about intelligent systems that can see, 
                think, and adapt in real-time. The cost of staying behind isn't just inefficiency...
              </p>
              <p className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-12">
                It's obsolescence.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { 
                    stat: '60%', 
                    label: 'Manual Processes Still Dominate', 
                    color: 'text-red-400', 
                    icon: Users,
                    description: 'Most industrial operations rely on human decision-making for critical processes'
                  },
                  { 
                    stat: '90%', 
                    label: 'Data Never Analyzed in Time', 
                    color: 'text-orange-400', 
                    icon: Clock,
                    description: 'Valuable insights are discovered too late to prevent problems or capture opportunities'
                  },
                  { 
                    stat: '24hr', 
                    label: 'Average Detection Delay', 
                    color: 'text-yellow-400', 
                    icon: Target,
                    description: 'By the time problems are detected, significant damage has already occurred'
                  }
                ].map((item, index) => (
                  <div key={index} className="group">
                    <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-2xl p-8 text-center shadow-xl group-hover:border-white/20 transition-all duration-300">
                      <item.icon className={`w-12 h-12 mb-4 ${item.color} mx-auto group-hover:scale-110 transition-transform duration-300`} />
                      <div className={`text-4xl font-black ${item.color} mb-2`}>{item.stat}</div>
                      <div className="text-lg font-semibold text-white mb-3">{item.label}</div>
                      <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Innovation Labs</h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Where breakthrough research meets real-world application
                </p>
              </div>
              
              <div className="space-y-12">
                <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-10 shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6">Deep Tech Foundation</h3>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    Ciro Labs emerged from a simple but profound realization: the gap between cutting-edge AI research 
                    and practical industrial applications was growing wider every day. While academia pushed the boundaries 
                    of what's possible, industry remained stuck with legacy systems and incremental improvements.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    We founded Ciro Labs as a bridge—a place where theoretical breakthroughs in computer vision, 
                    machine learning, and robotics could be transformed into practical solutions that solve real problems 
                    in manufacturing, logistics, and industrial operations.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-10 shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Camera className="w-8 h-8 text-blue-400" />
                    Computer Vision Pioneers
                  </h3>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    Our core focus on computer vision isn't just about seeing—it's about understanding. We develop 
                    AI systems that can interpret complex industrial environments, detect anomalies invisible to human eyes, 
                    and make split-second decisions that prevent disasters before they happen.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    From thermal imaging analysis to real-time quality control, our computer vision systems don't just observe—they comprehend, 
                    predict, and act with superhuman precision and speed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section className="py-20 bg-gradient-to-br from-slate-800/50 via-purple-900/20 to-blue-900/20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
                The Future is <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Intelligent</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                We're not just building software—we're crafting the neural pathways of tomorrow's industrial landscape, 
                where AI overlays enhance human capability and robotic systems work in perfect harmony with human intuition.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="group">
                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-8 shadow-xl group-hover:border-purple-400/40 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">AI Overlays</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Augmented reality interfaces that overlay real-time AI insights directly onto physical environments, 
                      giving workers superhuman perception and decision-making capabilities.
                    </p>
                  </div>
                </div>
                
                <div className="group">
                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 shadow-xl group-hover:border-cyan-400/40 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Cpu className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Collaborative Robotics</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Robots that don't replace humans but amplify their capabilities, working alongside operators 
                      with seamless coordination and shared intelligence.
                    </p>
                  </div>
                </div>
              </div>

              <blockquote className="text-2xl text-gray-300 font-medium italic leading-relaxed max-w-4xl mx-auto">
                "The future doesn't belong to humans or machines alone—it belongs to the synthesis of human creativity 
                and artificial intelligence, working together to solve problems we never thought possible."
              </blockquote>
            </div>
          </div>
        </section>

        {/* Video section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">See Our Vision in Action</h2>
              <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Watch how Ciro Labs is pioneering the future of industrial intelligence through deep tech research and practical AI applications.
              </p>
              <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl aspect-video overflow-hidden shadow-2xl">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/cyxpYPvdhL0?autoplay=0&rel=0"
                  title="Ciro Labs: Innovation in Industrial AI"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-r from-purple-500/80 to-cyan-500/80 backdrop-blur-sm border border-white/10 rounded-3xl p-12 shadow-2xl text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Explore the Future?</h2>
                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Join us on the frontier of industrial AI research. Let's push the boundaries of what's possible together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg" asChild>
                    <Link to="/contact">Start a Collaboration</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg">
                    Research Partnerships
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

export default About;
