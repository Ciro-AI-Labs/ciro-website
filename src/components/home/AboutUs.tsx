import { Beaker, Users, Award, Globe, Zap, Brain } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/3 to-blue-600/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-purple-400 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-full mb-6">
              <Beaker className="w-4 h-4" />
              <span>Ciro AI Research Lab</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Pioneering the Future of
              </span>
              <br />
              <span className="text-white">
                Industrial Intelligence
              </span>
            </h2>
            
            <p className="text-lg md:text-xl lg:text-lg xl:text-lg 2xl:text-xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
              At Ciro AI Research Lab, we're not just building software—we're redefining how industries 
              think, operate, and compete in the age of artificial intelligence.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            {/* Left: Mission & Vision */}
            <div className="space-y-8">
              <div className="bg-card/50 border border-border/30 rounded-xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <Brain className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  To democratize industrial AI by making real-time intelligence accessible to every manufacturer, 
                  regardless of size or technical expertise.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We believe that the next industrial revolution won't be about bigger machines—it will be about 
                  smarter decisions, faster responses, and seamless automation.
                </p>
              </div>

              <div className="bg-card/50 border border-border/30 rounded-xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Globe className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  A world where every factory operates with the precision of a Swiss watch and the intelligence 
                  of a supercomputer.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Where data flows like water, insights arrive before problems, and human creativity is amplified 
                  by AI, not replaced by it.
                </p>
              </div>
            </div>

            {/* Right: Research Areas */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-8">Research Focus Areas</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-card/30 border border-border/20 rounded-lg hover:bg-card/50 transition-all duration-300">
                  <div className="p-2 bg-green-500/20 rounded-lg flex-shrink-0">
                    <Zap className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Real-Time AI Processing</h4>
                    <p className="text-gray-400 text-sm">Developing sub-millisecond AI inference engines for industrial edge computing.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card/30 border border-border/20 rounded-lg hover:bg-card/50 transition-all duration-300">
                  <div className="p-2 bg-purple-500/20 rounded-lg flex-shrink-0">
                    <Brain className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Computer Vision & Edge AI</h4>
                    <p className="text-gray-400 text-sm">Advanced visual intelligence for quality control, safety monitoring, and process optimization.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card/30 border border-border/20 rounded-lg hover:bg-card/50 transition-all duration-300">
                  <div className="p-2 bg-blue-500/20 rounded-lg flex-shrink-0">
                    <Beaker className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Data Fusion & Integration</h4>
                    <p className="text-gray-400 text-sm">Seamless integration of IoT, ERP, and legacy systems with intelligent data orchestration.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card/30 border border-border/20 rounded-lg hover:bg-card/50 transition-all duration-300">
                  <div className="p-2 bg-orange-500/20 rounded-lg flex-shrink-0">
                    <Award className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Predictive Analytics</h4>
                    <p className="text-gray-400 text-sm">Next-generation forecasting models for equipment maintenance and demand planning.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team & Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">25+</h3>
              <p className="text-gray-400">AI Researchers & Engineers</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">15+</h3>
              <p className="text-gray-400">Published Research Papers</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">50+</h3>
              <p className="text-gray-400">Global Industry Partners</p>
            </div>
          </div>

          {/* Innovation Statement */}
          <div className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 border border-purple-500/20 rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              "Innovation happens at the intersection of research and real-world problems"
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
              Our research lab bridges the gap between cutting-edge AI research and practical industrial applications. 
              Every breakthrough in our lab is designed to solve real problems faced by manufacturers worldwide.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/blog" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                <span>Explore Our Research</span>
                <Beaker className="w-4 h-4" />
              </a>
              <a href="/careers" className="border border-purple-500/30 hover:border-purple-400 text-gray-300 hover:text-purple-400 font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center gap-2">
                <span>Join Our Team</span>
                <Users className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 