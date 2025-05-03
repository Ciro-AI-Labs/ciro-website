
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const AIAnalytics = () => {
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
                    Ciro AI Analytics
                  </span>
                </h1>
                <p className="text-xl md:text-2xl mb-6">
                  Real-time analytics built for industrial operations, unifying your data sources into actionable intelligence.
                </p>
                <p className="text-muted-foreground mb-8">
                  Connect 50+ data sources, visualize KPIs with zero latency, and reduce manual interventions by up to 70% with intelligent automation.
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
                <div className="bg-card border border-border/50 rounded-lg p-6 shadow-md">
                  <div className="border-b border-border/50 mb-6 pb-4">
                    <h3 className="text-xl font-bold">Real-Time Dashboard</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-muted/30 p-4 rounded">
                      <div className="text-muted-foreground mb-2">Production Rate</div>
                      <div className="text-2xl font-semibold">98.3%</div>
                      <div className="h-2 w-full bg-muted mt-2 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: "98%" }} />
                      </div>
                    </div>
                    <div className="bg-muted/30 p-4 rounded">
                      <div className="text-muted-foreground mb-2">Equipment Status</div>
                      <div className="text-2xl font-semibold text-green-500">Optimal</div>
                      <div className="h-2 w-full bg-muted mt-2 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: "90%" }} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-muted/30 p-4 rounded mb-4">
                    <div className="text-muted-foreground mb-2">Real-time Analytics</div>
                    <div className="flex items-end h-24 gap-1">
                      {[40, 25, 35, 30, 32, 38, 42, 45, 35, 38, 50, 55].map((h, i) => (
                        <div
                          key={i}
                          className="h-[var(--h)] bg-purple-500/80 hover:bg-purple-500 w-full rounded-sm transition-all duration-200"
                          style={{ "--h": `${h}%` } as React.CSSProperties}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-muted/30 p-4 rounded">
                    <div className="flex justify-between mb-2">
                      <div className="text-muted-foreground">Ask Ciro AI</div>
                      <div className="text-xs text-green-500">Online</div>
                    </div>
                    <div className="p-3 bg-background rounded border border-border/50">
                      <div className="text-sm italic text-muted-foreground mb-2">
                        "Show me bottlenecks in production line B"
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                        <span className="text-sm">Analyzing data...</span>
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
                  title: "Unified Data Integration",
                  description: "Connect to 50+ data sources including IoT sensors, PLCs, ERP systems, MES, and more. Our platform ingests up to 500k events/sec with <12ms latency.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  )
                },
                {
                  title: "Real-Time Dashboards",
                  description: "Zero-latency visualizations of KPIs, with interactive charts and anomaly alerts. Monitor your entire operation from a single pane of glass.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )
                },
                {
                  title: "Workflow Automation",
                  description: "Event-triggered actions and alerts that cut manual interventions by ~70%. Define intelligent workflows that respond to events in milliseconds.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )
                },
                {
                  title: "'Ask Ciro' AI Assistant",
                  description: "Natural language querying lets anyone ask questions about your data and get instant insights without specialized knowledge.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )
                },
                {
                  title: "Predictive Analytics",
                  description: "AI models learn from your data patterns to predict issues before they happen, enabling proactive maintenance and optimization.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  title: "Enterprise Integration",
                  description: "Seamlessly syncs with tools like Power BI, ERP systems, and more. Our API-first architecture connects with your existing technology stack.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
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

        {/* CTA section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-card border border-border/50 rounded-lg p-8 md:p-12 shadow-md text-center">
              <h2 className="text-3xl font-bold mb-6">
                Ready to transform your industrial operations?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Get a personalized demo of Ciro AI Analytics and see how it can provide real-time visibility and automation for your specific needs.
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

export default AIAnalytics;
