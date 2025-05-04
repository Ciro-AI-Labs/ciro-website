import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ChartBarIcon, 
  ChatBubbleLeftRightIcon, 
  CpuChipIcon, 
  ClipboardDocumentListIcon, 
  PresentationChartLineIcon, 
  ViewColumnsIcon, 
  BellAlertIcon, 
  CircleStackIcon, 
  CloudIcon, 
  ArrowsRightLeftIcon, 
  DocumentTextIcon, 
  TableCellsIcon, 
  PlusIcon,
  TruckIcon,            // heroicons v2 outline – supply chain
  BugAntIcon,           // used as "Agriculture" leaf/bug
  CakeIcon,             // food-service stand-in
  CameraIcon,           // visual AI
  SparklesIcon,         // For decorative elements
} from '@heroicons/react/24/outline'; // Example icons, replace if needed

// Add keyframes for animations
const keyframes = `
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
}

@keyframes pulse-subtle {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; }
}

@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes ping-slow {
  75%, 100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

@keyframes shimmer {
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}

@keyframes sparkle {
  0%, 100% { opacity: 0; transform: scale(0.8) rotate(0deg); }
  50% { opacity: 1; transform: scale(1.2) rotate(45deg); }
}
`;

const Products = () => {
  // Peripheral node helpers for Data Hub Visual - UPDATED
  const sources = [
    { Icon: CpuChipIcon,       color:'text-cyan-400',    deg:  0, label:'IoT'       }, // Industrial IoT
    { Icon: CloudIcon,         color:'text-sky-400',     deg: 45, label:'Cloud'     }, // Cloud Services
    { Icon: TruckIcon,         color:'text-orange-400',  deg: 90, label:'Supply'    }, // Supply Chain
    { Icon: BugAntIcon,        color:'text-lime-400',    deg:135, label:'Agri'      }, // Agriculture
    { Icon: CakeIcon,          color:'text-rose-400',    deg:180, label:'Food'      }, // Food Service
    { Icon: CameraIcon,        color:'text-indigo-400',  deg:225, label:'Vision'    }, // Visual AI
    { Icon: CircleStackIcon,   color:'text-yellow-400',  deg:270, label:'DB'        }, // Enterprise DBs
    { Icon: DocumentTextIcon,  color:'text-pink-400',    deg:315, label:'Docs'      }, // Docs / PDFs
  ];

  // Adjusted radius to align with dashed circle
  const radius = 132; 

  return (
    <section className="py-16 md:py-24 bg-background text-foreground relative">
      {/* Add style tag for animations */}
      <style dangerouslySetInnerHTML={{ __html: keyframes }} />

      {/* Background accent - abstract geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
           <span className="inline-block px-3 py-1 text-xs font-medium leading-none text-center text-blue-400 bg-blue-400/10 rounded-full mb-2">
            Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Unlock Insights & Automate Action with CIRO
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Integrate scattered data, ask questions in plain English, and let AI agents drive real-time decisions across your organization.
          </p>
        </div>

        {/* Bottom Row of 4 - MOVED UP */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {/* Advanced Analytics */}
          <div className="bg-card/50 border border-border/20 rounded-lg p-5 text-center flex flex-col items-center">
            <div className="mb-3 w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
               <PresentationChartLineIcon className="w-5 h-5 text-green-500" />
            </div>
             {/* A ▸ Advanced Visualizations */}
            <h4 className="font-semibold mb-1 text-sm">Advanced Visualizations</h4>
            <p className="text-muted-foreground text-xs">
            Generate bar, heat-map, or geospatial charts from a single prompt—then polish them in CIRO Studio à la Canva.
            </p>
          </div>

          {/* Template Gallery */}
           <div className="bg-card/50 border border-border/20 rounded-lg p-5 text-center flex flex-col items-center">
             <div className="mb-3 w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center">
               <ViewColumnsIcon className="w-5 h-5 text-indigo-500" />
            </div>
             {/* B ▸ Template Gallery */}
            <h4 className="font-semibold mb-1 text-sm">Template Gallery</h4>
            <p className="text-muted-foreground text-xs">
            Kick-start storytelling with pre-built KPI boards and industry templates you can inject with your own data in seconds.
            </p>
          </div>

          {/* Omnichannel Alerts */}
          <div className="bg-card/50 border border-border/20 rounded-lg p-5 text-center flex flex-col items-center">
            <div className="mb-3 w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center">
               <BellAlertIcon className="w-5 h-5 text-red-500" />
            </div>
             {/* C ▸ Omnichannel Alerts */}
            <h4 className="font-semibold mb-1 text-sm">Omnichannel Alerts</h4>
            <p className="text-muted-foreground text-xs">
            Insight triggers push to email, SMS, Slack, Teams, webhooks—anywhere your team lives—so nothing slips through the cracks.
            </p>
          </div>

          {/* Data Science & Forecasts */}
          <div className="bg-card/50 border border-border/20 rounded-lg p-5 text-center flex flex-col items-center">
             <div className="mb-3 w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
               <CircleStackIcon className="w-5 h-5 text-blue-500" />
            </div>
             {/* D ▸ Data Science & Forecasts */}
            <h4 className="font-semibold mb-1 text-sm">Data Science & Forecasts</h4>
            <p className="text-muted-foreground text-xs">
            Run cleaning, feature engineering, and time-series forecasts without writing Python; export models or schedule automated reports.
            </p>
          </div>
        </div>

        {/* Top 2x2 Grid - NOW BELOW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Unified Data Hub */}
          <div className="relative overflow-hidden bg-card border border-border/30 rounded-xl p-6 shadow-lg hover:shadow-blue-500/10 transition-shadow duration-300 flex flex-col justify-between">
            {/* Content Wrapper - Removed relative z-20 */}
            <div> 
              {/* 1 ▸ Unified Data Hub */}
              <h3 className="text-xl font-semibold mb-2">Unified Data Hub</h3>
              <p className="text-muted-foreground mb-4 text-sm">
              Ingest PDFs, Excel, live Kafka streams, ERPs, CRMs, and cloud apps—then enforce fine-grained org, team, and role permissions in one place.
              </p>
            </div>

            {/* Inner Visual Container - Now with animations */}
            <div className="relative h-96 rounded-lg overflow-hidden border border-border/50 bg-transparent shadow-lg hover:shadow-blue-500/30 transition-shadow duration-700 isolate">
              {/* Particle Background Layer - Refined for better appearance */}
              <div className="absolute inset-0 z-[-1]">
                {/* Dark base with circular clip - Adjusted size */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[22rem] h-[22rem] rounded-full bg-[#0A0A0C] overflow-hidden">
                  {/* Denser particle pattern with animation */}
                  <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_15%_25%,rgba(255,255,255,0.15)_0.8px,transparent_0.8px),radial-gradient(circle_at_75%_65%,rgba(255,255,255,0.15)_0.8px,transparent_0.8px),radial-gradient(circle_at_40%_80%,rgba(255,255,255,0.15)_0.8px,transparent_0.8px),radial-gradient(circle_at_60%_10%,rgba(255,255,255,0.15)_0.8px,transparent_0.8px)] bg-[size:20px_20px]"
                       style={{ animation: "pulse-subtle 8s ease-in-out infinite" }}>
                  </div>
                  {/* Second particle layer with different animation timing */}
                  <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_25%_35%,rgba(255,255,255,0.12)_0.6px,transparent_0.6px),radial-gradient(circle_at_65%_55%,rgba(255,255,255,0.12)_0.6px,transparent_0.6px),radial-gradient(circle_at_50%_70%,rgba(255,255,255,0.12)_0.6px,transparent_0.6px),radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12)_0.6px,transparent_0.6px)] bg-[size:18px_18px]"
                       style={{ animation: "pulse-subtle 10s ease-in-out infinite reverse" }}>
                  </div>
                  {/* Improved radial fade overlay - more gradual */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(10,10,12,0.3)_60%,#0A0A0C_95%)]"></div>
                </div>
              </div>

              {/* Enhanced background layers */}
              {/* Subtle radial light from center with animation */}
              <div className="absolute inset-0 z-[-1] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,rgba(0,0,0,0)_60%)] opacity-90"
                   style={{ animation: "pulse-subtle 6s ease-in-out infinite" }}>
              </div>
              
              {/* Bottom edge glow with subtle movement */}
              <div className="absolute inset-x-0 bottom-0 h-24 z-[-1] bg-gradient-to-t from-indigo-600/15 to-transparent"
                   style={{ animation: "shimmer 30s linear infinite" }}>
              </div>

              {/* Decorative rays emanating from center - very subtle */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent" style={{ transform: "rotate(0deg)" }} />
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent" style={{ transform: "rotate(45deg)" }} />
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent" style={{ transform: "rotate(90deg)" }} />
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent" style={{ transform: "rotate(135deg)" }} />
              </div>

              {/* dotted orbit - Precisely aligned with node centers - with animation */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[16.5rem] h-[16.5rem] rounded-full border border-dashed border-indigo-300/15"
                     style={{ animation: "spin-slow 60s linear infinite" }}></div>
              </div>

              {/* Enhanced central logo with improved glow effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="relative" style={{ animation: "float 6s ease-in-out infinite" }}>
                    <img
                      src="/logos/Ciro Logo.png"
                      alt="Ciro"
                      className="w-16 h-16 object-contain relative z-10 rounded-2xl transition-all duration-500 hover:scale-105"
                      style={{
                        filter: 'drop-shadow(0 0 18px rgba(79, 70, 229, 0.7)) drop-shadow(0 0 12px rgba(16, 185, 129, 0.6))'
                      }}
                    />
                    {/* Enhanced glow layer with animation */}
                    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-500/20 to-emerald-500/20 blur-2xl rounded-full scale-75 opacity-30"
                         style={{ animation: "pulse-subtle 4s ease-in-out infinite" }}></div>
                  </div>
              </div>

              {/* add-source button with pulse animation - Positioned at corner of logo */}
              <button className="absolute top-1/2 left-1/2 translate-x-[12px] translate-y-[12px] w-8 h-8 rounded-full bg-green-900/40 border border-green-500/40 text-green-400 flex items-center justify-center hover:bg-green-900/60 hover:border-green-400/70 hover:scale-110 hover:shadow-green-900/60 transition-all duration-300 z-30 shadow-green-900/50 shadow-md group overflow-hidden">
                <PlusIcon className="w-4 h-4 transition-transform duration-300 group-hover:rotate-90"/>
                {/* Pulse animation ring */}
                <span className="absolute inset-0 border border-green-400/30 rounded-full group-hover:animate-[ping-slow_2s_ease-out_infinite]"></span>
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 bg-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
              </button>

              {/* peripheral nodes with ANIMATIONS - FIXED POSITIONING */}
              <div>
                {/* Decorative sparkles - very subtle */}
                <SparklesIcon className="absolute top-1/4 right-1/4 w-4 h-4 text-indigo-300/20" 
                              style={{ animation: "sparkle 4s ease-in-out infinite" }} />
                <SparklesIcon className="absolute bottom-1/3 left-1/3 w-3 h-3 text-emerald-300/20" 
                              style={{ animation: "sparkle 5s ease-in-out infinite 1s" }} />
                
                {sources.map(({ Icon, color, deg, label }) => {
                  const rad = (deg * Math.PI) / 180;
                  // Using the updated radius constant
                  const x = Math.cos(rad) * radius;
                  const y = Math.sin(rad) * radius;
                  
                  // Get the base color for glow effect (extract from text color class)
                  const baseColor = color.includes('cyan') ? 'rgba(34, 211, 238, 0.15)' : 
                                   color.includes('sky') ? 'rgba(56, 189, 248, 0.15)' :
                                   color.includes('orange') ? 'rgba(251, 146, 60, 0.15)' :
                                   color.includes('lime') ? 'rgba(163, 230, 53, 0.15)' :
                                   color.includes('rose') ? 'rgba(251, 113, 133, 0.15)' :
                                   color.includes('indigo') ? 'rgba(129, 140, 248, 0.15)' :
                                   color.includes('yellow') ? 'rgba(250, 204, 21, 0.15)' :
                                   color.includes('pink') ? 'rgba(244, 114, 182, 0.15)' : 'rgba(255, 255, 255, 0.15)';
                  
                  // Get a more saturated version for connector gradient
                  const brightColor = baseColor.replace('0.15', '0.3');

                  // Calculate animation delay based on position
                  const animDelay = (deg / 45) * 0.5; // 0.5s delay between each node
                  
                  return (
                    <div
                      key={label}
                      className="absolute"
                      style={{ 
                        top: '50%', 
                        left: '50%', 
                        transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` 
                      }}
                    >
                      {/* ENHANCED connector line with gradient and glow */}
                      <div className="absolute top-1/2 left-1/2 h-[1px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10"
                           style={{
                             width: `${radius - 35}px`, 
                             transformOrigin: 'left center',
                             transform: `rotate(${deg + 180}deg)`,
                             background: `linear-gradient(to right, ${brightColor}, rgba(148,163,184,0.1))`,
                             boxShadow: `0 0 5px ${baseColor}`
                           }}>
                        {/* Pulse animation along connector */}
                        <div className="absolute top-0 left-1/2 w-1 h-1 rounded-full bg-white/20"
                             style={{ animation: `shimmer 5s linear infinite ${animDelay}s` }}></div>
                      </div>
                      
                      {/* Node with animation that doesn't affect positioning */}
                      <div className="relative">
                        <div className="relative" style={{ animation: `float 5s ease-in-out infinite ${animDelay}s` }}>
                          <div className="w-12 h-12 rounded-full bg-black/80 border border-gray-700/80 backdrop-blur-md flex items-center justify-center transition-all duration-300 relative z-30 shadow-xl hover:scale-110 hover:shadow-lg hover:border-gray-600/90 group"
                               style={{
                                 boxShadow: `0 0 20px ${baseColor}`
                               }}>
                            <Icon className={`w-6 h-6 ${color} transition-transform duration-300 group-hover:scale-110`} />
                          </div>
                          
                          {/* Node label */}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 text-[10px] text-gray-400 font-medium z-30 whitespace-nowrap transition-all duration-300 group-hover:text-gray-300">
                            {label}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Smart Communication */}
          <div className="bg-card border border-border/30 rounded-xl p-6 shadow-lg hover:shadow-blue-500/10 transition-shadow duration-300 flex flex-col justify-between">
             <div>
              {/* 2 ▸ Natural-Language Analytics */}
              <h3 className="text-xl font-semibold mb-2">Natural-Language Analytics</h3>
              <p className="text-muted-foreground mb-4 text-sm">
              Ask questions (or speak them) and CIRO instantly scans billions of rows, returning answers, KPIs, or SQL you can tweak.
              </p>
            </div>
             {/* Placeholder for visual */}
            <div className="h-32 bg-muted/30 rounded-md border border-border/30 flex items-center justify-center text-muted-foreground text-xs mt-4">
              Communication Visual Placeholder
            </div>
          </div>

          {/* AI Teammate */}
          <div className="bg-card border border-border/30 rounded-xl p-6 shadow-lg hover:shadow-blue-500/10 transition-shadow duration-300 flex flex-col justify-between">
            <div>
              {/* 3 ▸ Autonomous AI Agents */}
              <h3 className="text-xl font-semibold mb-2">Autonomous AI Agents</h3>
              <p className="text-muted-foreground mb-4 text-sm">
              Continuous anomaly detection, predictive models, and maintenance triggers that fire workflows in Slack, Teams, or WhatsApp—before issues escalate.
              </p>
            </div>
            {/* Placeholder for visual - simplified button */}
             <div className="mt-4 flex justify-center">
               <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center gap-2">
                 <span className="text-yellow-300">✨</span> Ask Aurix AI
               </button>
             </div>
             {/* Placeholder for visual */}
            <div className="h-20 bg-muted/30 rounded-md border border-border/30 flex items-center justify-center text-muted-foreground text-xs mt-4">
              AI Assistant Placeholder
            </div>
          </div>

          {/* Simple Task Tracking */}
          <div className="bg-card border border-border/30 rounded-xl p-6 shadow-lg hover:shadow-blue-500/10 transition-shadow duration-300 flex flex-col justify-between">
            <div>
              {/* 4 ▸ Real-Time Dashboards */}
              <h3 className="text-xl font-semibold mb-2">Real-Time Dashboards</h3>
              <p className="text-muted-foreground mb-4 text-sm">
              Drag charts into live, multi-tab boards; connect Power BI or Looker; and watch every metric update the moment your data changes.
              </p>
            </div>
            {/* Placeholder for visual */}
            <div className="h-32 bg-muted/30 rounded-md border border-border/30 flex items-center justify-center text-muted-foreground text-xs mt-4">
              Task Tracking Visual Placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

