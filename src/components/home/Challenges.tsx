
import { CheckCircle, TrendingUp, Clock, DollarSign, AlertTriangle, Zap } from "lucide-react";

const Challenges = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-orange-400 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-full mb-6 hover:border-orange-400/40 transition-all duration-300">
            <AlertTriangle className="w-4 h-4" />
            <span>Industry Pain Points</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
              The Hidden Cost of
            </span>
            <br />
            <span className="text-white">
              Industrial Inefficiency
            </span>
          </h2>
          
          <p className="text-lg md:text-xl lg:text-lg xl:text-lg 2xl:text-xl text-gray-300 mb-8 leading-relaxed">
            While manufacturers collect terabytes of data, most decisions still happen on gut instinct. 
            The gap between data and action costs billions annually.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Pain Point 1: Data Silos */}
          <div className="bg-card/80 border border-border/50 rounded-xl p-8 shadow-lg hover:shadow-red-500/10 transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-red-500/20 rounded-lg group-hover:bg-red-500/30 transition-colors duration-300">
                <TrendingUp className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Data Silos</h3>
                <p className="text-red-400 text-sm font-medium">$2.3B Annual Loss</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              <span className="text-red-400 font-semibold">87%</span> of industrial data remains trapped in isolated systems, 
              creating blind spots that lead to costly inefficiencies and missed opportunities.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span>ERP, MES, and IoT systems don't communicate</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span>Real-time insights buried in disconnected databases</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span>Cross-functional teams work with incomplete data</span>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-border/30">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Data Utilization</span>
                <span className="text-red-400 font-bold">13%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-2 overflow-hidden">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full transition-all duration-1000" style={{ width: "13%" }}></div>
              </div>
            </div>
          </div>
          
          {/* Pain Point 2: Slow Response Times */}
          <div className="bg-card/80 border border-border/50 rounded-xl p-8 shadow-lg hover:shadow-yellow-500/10 transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-yellow-500/20 rounded-lg group-hover:bg-yellow-500/30 transition-colors duration-300">
                <Clock className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Slow Response</h3>
                <p className="text-yellow-400 text-sm font-medium">$5.2B Annual Loss</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Legacy systems create <span className="text-yellow-400 font-semibold">45-minute delays</span> between 
              events and decisions, costing enterprises up to $5M annually in preventable losses.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Manual data processing takes hours, not seconds</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Alerts arrive too late to prevent issues</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Decision-makers wait for reports instead of acting</span>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-border/30">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Average Response Time</span>
                <span className="text-yellow-400 font-bold">45 min</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-2 overflow-hidden">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full transition-all duration-1000" style={{ width: "85%" }}></div>
              </div>
            </div>
          </div>
          
          {/* Pain Point 3: Integration Bottlenecks */}
          <div className="bg-card/80 border border-border/50 rounded-xl p-8 shadow-lg hover:shadow-orange-500/10 transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-orange-500/20 rounded-lg group-hover:bg-orange-500/30 transition-colors duration-300">
                <Zap className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Integration Chaos</h3>
                <p className="text-orange-400 text-sm font-medium">$3.8B Annual Loss</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              <span className="text-orange-400 font-semibold">73%</span> of companies struggle to integrate 
              IoT and ERP data in real-time, driving operational costs up 30% and reducing efficiency.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span>Complex API integrations take months to implement</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span>Data quality issues from mismatched formats</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span>Scalability limitations with legacy connectors</span>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-border/30">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Integration Success Rate</span>
                <span className="text-orange-400 font-bold">27%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-2 overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-1000" style={{ width: "27%" }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Why CIRO Section */}
        <div className="bg-gradient-to-br from-card/80 to-card/60 border border-border/50 rounded-2xl p-8 lg:p-12 shadow-xl relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-green-400 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-full mb-6">
              <CheckCircle className="w-4 h-4" />
              <span>Why Choose CIRO?</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Turn Data Chaos into
              </span>
              <br />
              <span className="text-white">
                Competitive Advantage
              </span>
            </h3>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              While others struggle with data silos and slow responses, CIRO delivers 
              <span className="text-green-400 font-semibold"> real-time intelligence</span> that drives 
              <span className="text-green-400 font-semibold"> immediate action</span>.
            </p>
            
            {/* Key Differentiators */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg flex-shrink-0">
                  <Zap className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Sub-12ms Latency</h4>
                  <p className="text-gray-400 text-sm">While competitors take minutes, CIRO delivers insights in milliseconds, enabling real-time decision making.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-500/20 rounded-lg flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">70% Cost Reduction</h4>
                  <p className="text-gray-400 text-sm">AI-driven automation reduces manual effort by 70%, freeing teams to focus on strategic initiatives.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-purple-500/20 rounded-lg flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">50+ Data Sources</h4>
                  <p className="text-gray-400 text-sm">Unified platform connects ERP, IoT, cameras, and cloud apps without complex integrations.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-emerald-500/20 rounded-lg flex-shrink-0">
                  <DollarSign className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">$11.3B Savings</h4>
                  <p className="text-gray-400 text-sm">Combined annual savings from eliminating the three major pain points that plague manufacturers.</p>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                <span>See CIRO in Action</span>
                <TrendingUp className="w-4 h-4" />
              </button>
              <button className="border border-gray-600 hover:border-green-500 text-gray-300 hover:text-green-400 font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center gap-2">
                <span>Calculate Your ROI</span>
                <DollarSign className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
