import { TrendingUp, Truck, Shield, Zap, Clock, DollarSign, Users, CheckCircle } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: TrendingUp,
      iconBg: "bg-green-500/20",
      iconColor: "text-green-400",
      gradient: "from-green-600/20 to-emerald-600/20",
      title: "Manufacturing Excellence",
      subtitle: "Improving Uptime & Quality",
      description: "A leading food manufacturer transformed their operations with CIRO's real-time analytics, achieving unprecedented efficiency gains.",
      metrics: [
        { label: "Downtime Reduction", value: "20%", icon: Clock },
        { label: "Quality Compliance", value: "+15%", icon: CheckCircle },
        { label: "ROI Period", value: "4 months", icon: DollarSign }
      ],
      industry: "Food Processing",
      keyBenefit: "Operational Efficiency",
      color: "green"
    },
    {
      icon: Truck,
      iconBg: "bg-blue-500/20",
      iconColor: "text-blue-400",
      gradient: "from-blue-600/20 to-indigo-600/20",
      title: "Logistics & Distribution",
      subtitle: "Streamlining Supply Chains",
      description: "A major 3PL logistics provider revolutionized their supply chain operations with CIRO's predictive intelligence.",
      metrics: [
        { label: "Delivery Delays", value: "-25%", icon: Clock },
        { label: "Inventory Accuracy", value: "+30%", icon: CheckCircle },
        { label: "Implementation", value: "3 months", icon: Zap }
      ],
      industry: "3PL Logistics",
      keyBenefit: "Supply Chain Optimization",
      color: "blue"
    },
    {
      icon: Shield,
      iconBg: "bg-purple-500/20",
      iconColor: "text-purple-400",
      gradient: "from-purple-600/20 to-violet-600/20",
      title: "Safety & Compliance",
      subtitle: "Enhancing Workplace Safety",
      description: "An industrial manufacturer achieved breakthrough safety improvements through CIRO's computer vision technology.",
      metrics: [
        { label: "Incident Reduction", value: "65%", icon: Shield },
        { label: "Compliance Rate", value: "99.8%", icon: CheckCircle },
        { label: "Response Time", value: "<2s", icon: Zap }
      ],
      industry: "Industrial Manufacturing",
      keyBenefit: "Safety Monitoring",
      color: "purple"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-green-600/3 via-blue-600/3 to-purple-600/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-green-400 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-full mb-6">
              <TrendingUp className="w-4 h-4" />
              <span>Real-World Impact</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Transforming Industries
              </span>
              <br />
              <span className="text-white">
                with Real Results
              </span>
            </h2>
            
            <p className="text-lg md:text-xl lg:text-lg xl:text-lg 2xl:text-xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
              See how leading companies across industries are using CIRO technology to achieve breakthrough results 
              and gain competitive advantages.
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {useCases.map((useCase, index) => (
              <div key={index} className="group relative">
                <div className="bg-card/80 border border-border/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
                  {/* Header with Icon */}
                  <div className={`h-48 bg-gradient-to-br ${useCase.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-24 h-24 ${useCase.iconBg} rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform duration-500`}>
                        <useCase.icon className={`w-12 h-12 ${useCase.iconColor}`} />
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1">
                      <span className="text-white text-sm font-semibold">{useCase.industry}</span>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1">
                      <span className="text-white text-sm font-semibold">{useCase.keyBenefit}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{useCase.title}</h3>
                    <p className="text-lg font-semibold text-gray-300 mb-4">{useCase.subtitle}</p>
                    <p className="text-gray-400 leading-relaxed mb-6">{useCase.description}</p>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-1 gap-4 mb-6">
                      {useCase.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="flex items-center justify-between p-3 bg-card/50 rounded-lg border border-border/30">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 ${useCase.iconBg} rounded-lg`}>
                              <metric.icon className={`w-4 h-4 ${useCase.iconColor}`} />
                            </div>
                            <span className="text-gray-400 text-sm">{metric.label}</span>
                          </div>
                          <span className={`text-${useCase.color}-400 font-bold text-lg`}>{metric.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Success Indicator */}
                    <div className="flex items-center gap-2 text-green-400 text-sm font-semibold">
                      <CheckCircle className="w-4 h-4" />
                      <span>Successfully Implemented</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Impact Summary */}
          <div className="bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 border border-green-500/20 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Combined Impact Across All Industries
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                These success stories represent just a fraction of the transformative impact CIRO is delivering 
                across global industries.
              </p>
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">$2.3B+</div>
                <div className="text-gray-400 text-sm">Annual Savings Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-gray-400 text-sm">Companies Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">99.7%</div>
                <div className="text-gray-400 text-sm">Average Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">4.2mo</div>
                <div className="text-gray-400 text-sm">Average ROI Period</div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/use-cases" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                  <span>See More Success Stories</span>
                  <TrendingUp className="w-4 h-4" />
                </a>
                <a href="/contact" className="border border-green-500/30 hover:border-green-400 text-gray-300 hover:text-green-400 font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center gap-2">
                  <span>Calculate Your Impact</span>
                  <DollarSign className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
