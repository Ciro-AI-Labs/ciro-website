
import { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  Database, 
  BarChart3, 
  Brain, 
  Zap, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle,
  TrendingUp,
  AlertTriangle,
  Settings
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Connect Your Data",
    subtitle: "Seamless Integration",
    icon: Database,
    iconBg: "bg-purple-500/20",
    iconColor: "text-purple-400",
    gradient: "from-purple-600/20 to-blue-600/20",
    description: "Transform your fragmented data landscape into a unified intelligence hub. CIRO seamlessly connects to 50+ enterprise systems including IoT sensors, industrial machines, databases, ERP systems, and cloud platforms. Our intelligent data ingestion engine processes up to 500,000 events per second with sub-12ms latency, creating a real-time unified data stream that becomes your single source of truth.",
    features: [
      "50+ Enterprise Connectors",
      "Sub-12ms Latency",
      "500k Events/Second",
      "Zero-Downtime Integration"
    ],
    visual: (
      <div className="relative h-full w-full bg-card/50 border border-border/50 rounded-xl p-6 overflow-hidden shadow-lg">
        {/* Data Sources */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {["ERP", "IoT", "MES"].map((source, idx) => (
            <div key={idx} className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 p-3 rounded-lg text-center">
              <div className="text-sm font-semibold text-purple-400 mb-1">{source}</div>
              <div className="w-2 h-2 bg-green-400 rounded-full mx-auto animate-pulse"></div>
            </div>
          ))}
        </div>
        
        {/* Data Stream */}
        <div className="relative mb-6">
          <div className="h-3 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 animate-pulse"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
              <span className="text-white text-sm font-semibold">Ciro Data Stream</span>
            </div>
          </div>
        </div>
        
        {/* Performance Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-green-400">12ms</div>
            <div className="text-xs text-gray-400">Latency</div>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-blue-400">500k</div>
            <div className="text-xs text-gray-400">Events/sec</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Monitor & Analyze in Real-Time",
    subtitle: "Live Intelligence",
    icon: BarChart3,
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400",
    gradient: "from-blue-600/20 to-cyan-600/20",
    description: "Experience true real-time intelligence as CIRO's advanced analytics engine processes your data stream with zero delay. Our AI algorithms continuously analyze patterns, detect anomalies, and identify trends across all your systems simultaneously. The live dashboard updates instantly, providing actionable insights through interactive visualizations, heatmaps, and predictive analytics that let you make informed decisions in milliseconds.",
    features: [
      "Zero-Delay Analytics",
      "AI Pattern Detection",
      "Interactive Visualizations",
      "Predictive Insights"
    ],
    visual: (
      <div className="relative h-full w-full bg-card/50 border border-border/50 rounded-xl p-6 overflow-hidden shadow-lg">
        {/* Dashboard Header */}
        <div className="border-b border-border/30 mb-4 pb-3 flex justify-between items-center">
          <span className="font-semibold text-white">Production Dashboard</span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-sm font-medium">Live</span>
          </div>
        </div>
        
        {/* KPI Cards */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 p-3 rounded-lg">
            <div className="text-xs text-gray-400 mb-1">Machine Efficiency</div>
            <div className="text-xl font-bold text-green-400">93.2%</div>
            <div className="h-2 w-full bg-gray-700 rounded-full mt-2 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse" style={{ width: "93%" }}></div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 p-3 rounded-lg">
            <div className="text-xs text-gray-400 mb-1">Quality Rate</div>
            <div className="text-xl font-bold text-blue-400">98.7%</div>
            <div className="h-2 w-full bg-gray-700 rounded-full mt-2 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse" style={{ width: "99%" }}></div>
            </div>
          </div>
        </div>
        
        {/* Real-time Chart */}
        <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 p-3 rounded-lg">
          <div className="text-xs text-gray-400 mb-2">Real-Time Production</div>
          <div className="flex items-end h-16 gap-1">
            {[30, 45, 38, 50, 42, 60, 55, 45, 65, 60].map((h, i) => (
              <div
                key={i}
                className="bg-gradient-to-t from-purple-500 to-blue-500 w-full rounded-sm animate-pulse"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "AI Insights & Alerts",
    subtitle: "Predictive Intelligence",
    icon: Brain,
    iconBg: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
    gradient: "from-emerald-600/20 to-green-600/20",
    description: "Unlock the power of predictive intelligence with CIRO's advanced AI engine. Our machine learning algorithms continuously learn from your operational data, identifying patterns that humans might miss. Predict equipment failures before they happen, optimize production schedules, and get instant answers to complex questions through our conversational AI assistant. CIRO doesn't just report what happened – it tells you what will happen next.",
    features: [
      "Predictive Analytics",
      "Conversational AI",
      "Continuous Learning",
      "Proactive Alerts"
    ],
    visual: (
      <div className="relative h-full w-full bg-card/50 border border-border/50 rounded-xl p-6 overflow-hidden shadow-lg">
        {/* AI Assistant Header */}
        <div className="border-b border-border/30 mb-4 pb-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-white">Ask Ciro</span>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          </div>
        </div>
        
        {/* Chat Interface */}
        <div className="space-y-3">
          <div className="bg-gray-700/50 p-3 rounded-lg text-sm border border-gray-600/30">
            Which production line will likely slow down next month?
          </div>
          <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 p-3 rounded-lg text-sm border border-emerald-500/20">
            <p className="text-white mb-2">Based on pattern analysis, <strong className="text-emerald-400">Line B</strong> is predicted to slow down by <strong className="text-emerald-400">8-12%</strong> next month.</p>
            <p className="text-xs text-gray-400">Factors: Maintenance schedule, historical performance, vibration anomalies</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-emerald-400">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
            <span>AI prediction with 94% confidence</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "Automated Action",
    subtitle: "Intelligent Workflows",
    icon: Zap,
    iconBg: "bg-orange-500/20",
    iconColor: "text-orange-400",
    gradient: "from-orange-600/20 to-red-600/20",
    description: "Transform insights into immediate action with CIRO's intelligent workflow automation. Define sophisticated workflows that trigger actions in milliseconds based on real-time events, AI predictions, or threshold violations. When anomalies are detected, CIRO automatically sends alerts, adjusts machine parameters, creates tickets, or initiates corrective actions – reducing manual intervention by up to 70% and ensuring your operations run at peak efficiency 24/7.",
    features: [
      "Intelligent Workflows",
      "Millisecond Response",
      "70% Manual Work Reduction",
      "24/7 Automation"
    ],
    visual: (
      <div className="relative h-full w-full bg-card/50 border border-border/50 rounded-xl p-6 overflow-hidden shadow-lg">
        {/* Workflow Header */}
        <div className="border-b border-border/30 mb-4 pb-3 flex justify-between items-center">
          <span className="font-semibold text-white">Workflow Automation</span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-sm font-medium">Active</span>
          </div>
        </div>
        
        {/* Trigger Event */}
        <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 p-3 rounded-lg mb-4 flex items-center justify-between">
          <div className="text-sm text-white">Temperature Threshold</div>
          <div className="text-sm font-semibold text-orange-400 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            Triggered
          </div>
        </div>
        
        {/* Action Flow */}
        <div className="flex items-center mb-4">
          <div className="h-1 bg-gradient-to-r from-orange-500 to-red-500 w-full rounded-full"></div>
          <ArrowRight className="h-5 w-5 text-orange-400 ml-2" />
        </div>
        
        {/* Actions */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-3 rounded-lg text-center border border-purple-500/20">
            <div className="text-xs text-gray-400 mb-1">Alert Sent</div>
            <div className="font-semibold text-purple-400">Technician</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-3 rounded-lg text-center border border-purple-500/20">
            <div className="text-xs text-gray-400 mb-1">Ticket Created</div>
            <div className="font-semibold text-purple-400">High Priority</div>
          </div>
        </div>
        
        {/* Response Time */}
        <div className="text-center mt-4">
          <div className="text-xs text-gray-400">Response time: <span className="text-orange-400 font-semibold">&lt;500ms</span></div>
        </div>
      </div>
    )
  }
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);

  const currentStep = steps.find((step) => step.id === activeStep);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/3 via-blue-600/3 to-cyan-600/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-purple-400 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-full mb-6">
              <Settings className="w-4 h-4" />
              <span>Platform Architecture</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                How Ciro Delivers
              </span>
              <br />
              <span className="text-white">
                Real-Time Intelligence
              </span>
            </h2>
            
            <p className="text-lg md:text-xl lg:text-lg xl:text-lg 2xl:text-xl text-gray-300 mb-6 leading-relaxed max-w-4xl mx-auto">
              From data ingestion to automated action, discover how our intelligent platform transforms 
              your operations with real-time analytics, predictive insights, and automated workflows.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Real-time Processing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>AI-Powered Insights</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Automated Actions</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left: Steps Navigation */}
            <div className="lg:col-span-1">
              <div className="space-y-3">
                {steps.map((step) => (
                  <button
                    key={step.id}
                    className={cn(
                      "w-full group relative overflow-hidden rounded-xl p-6 text-left transition-all duration-500",
                      activeStep === step.id
                        ? "bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 shadow-lg shadow-purple-500/10"
                        : "bg-card/50 border border-border/30 hover:bg-card/70 hover:border-purple-500/20"
                    )}
                    onClick={() => setActiveStep(step.id)}
                  >
                    {/* Background Gradient */}
                    <div className={cn(
                      "absolute inset-0 opacity-0 transition-opacity duration-500",
                      activeStep === step.id ? "opacity-100" : "group-hover:opacity-50"
                    )}>
                      <div className={`w-full h-full bg-gradient-to-r ${step.gradient}`}></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-start gap-4">
                        <div className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300",
                          activeStep === step.id
                            ? "bg-purple-500 text-white shadow-lg shadow-purple-500/50"
                            : "bg-card/80 text-gray-400 group-hover:text-purple-400"
                        )}>
                          <step.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm font-semibold text-purple-400">Step {step.id}</span>
                            {activeStep === step.id && (
                              <CheckCircle className="w-4 h-4 text-green-400" />
                            )}
                          </div>
                          <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                          <p className="text-sm text-gray-400 mb-3">{step.subtitle}</p>
                          {activeStep === step.id && (
                            <p className="text-xs text-purple-300">Click to view details</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Content Panel */}
            <div className="lg:col-span-2">
              <div className="bg-card/80 border border-border/50 rounded-2xl p-8 shadow-xl relative overflow-hidden">
                {/* Content Header */}
                <div className="flex items-start gap-6 mb-8">
                  <div className={`w-16 h-16 ${currentStep?.iconBg} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    {currentStep && <currentStep.icon className={`w-8 h-8 ${currentStep.iconColor}`} />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-white">{currentStep?.title}</h3>
                      <span className="text-sm text-gray-400">•</span>
                      <span className="text-sm text-gray-400">{currentStep?.subtitle}</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{currentStep?.description}</p>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {currentStep?.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-card/50 rounded-lg border border-border/30">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Visual Demo */}
                <div className="aspect-video w-full bg-background/50 border border-border/30 rounded-xl overflow-hidden shadow-lg">
                  {currentStep?.visual}
                </div>

                {/* Navigation */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    onClick={() => setActiveStep(activeStep > 1 ? activeStep - 1 : 4)}
                    className="flex items-center gap-2 px-6 py-3 bg-card/50 border border-border/30 rounded-lg text-gray-300 hover:text-white hover:bg-card/70 transition-all duration-300"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Previous Step</span>
                  </button>
                  
                  <div className="flex gap-2">
                    {steps.map((step) => (
                      <button
                        key={step.id}
                        className={cn(
                          "w-3 h-3 rounded-full transition-all duration-300",
                          activeStep === step.id 
                            ? "bg-purple-500 shadow-lg shadow-purple-500/50" 
                            : "bg-gray-600 hover:bg-gray-500"
                        )}
                        onClick={() => setActiveStep(step.id)}
                      />
                    ))}
                  </div>
                  
                  <button
                    onClick={() => setActiveStep(activeStep < 4 ? activeStep + 1 : 1)}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <span>Next Step</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
