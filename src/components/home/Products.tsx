
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            One Platform,{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Two Powerful Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive suite of products delivers real-time insights and automation
            for manufacturers and logistics operators.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Ciro AI Analytics */}
          <div className="bg-card border border-border/50 rounded-lg overflow-hidden shadow-sm group hover:shadow-md transition-all">
            <div className="h-56 overflow-hidden border-b border-border/50 bg-muted/30 relative">
              {/* Product visual */}
              <div className="absolute inset-0 p-6 flex items-center justify-center">
                <div className="w-full rounded-md overflow-hidden bg-background border border-border/50">
                  <div className="border-b border-border/50 bg-muted/30 p-2 flex items-center">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                    </div>
                    <div className="mx-auto text-xs text-muted-foreground">
                      Analytics Dashboard
                    </div>
                  </div>
                  <div className="p-2">
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      <div className="bg-muted/30 rounded p-2">
                        <div className="text-xs text-muted-foreground">Production</div>
                        <div className="flex items-end h-10 gap-0.5 mt-1">
                          {[40, 25, 35, 55, 45, 60, 50, 65].map((h, i) => (
                            <div
                              key={i}
                              className="h-[var(--h)] bg-purple-500/80 w-full rounded-sm"
                              style={{ "--h": `${h}%` } as React.CSSProperties}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="bg-muted/30 rounded p-2">
                        <div className="text-xs text-muted-foreground">KPI Status</div>
                        <div className="flex flex-col gap-1 mt-1">
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 rounded-full" style={{ width: "90%" }} />
                          </div>
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-yellow-500 rounded-full" style={{ width: "75%" }} />
                          </div>
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 rounded-full" style={{ width: "85%" }} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-muted/30 rounded p-2">
                      <div className="text-xs text-muted-foreground flex justify-between">
                        <span>AI Assistant</span>
                        <span className="text-green-500">Active</span>
                      </div>
                      <div className="mt-1 text-xs p-1 rounded bg-background">
                        "Show me production trends for line 3 this week"
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/10" />
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                Ciro AI Analytics
              </h3>
              <p className="text-lg font-medium mb-4">
                Real-Time Analytics, Built for Operations
              </p>
              
              <ul className="mb-6 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-purple-500" />
                  </div>
                  <div>
                    <span className="font-medium">Unified Data Integration:</span>{" "}
                    <span className="text-muted-foreground">
                      Connects 50+ data sources (sensors, PLCs, ERP, MES, etc.) into one live stream.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-purple-500" />
                  </div>
                  <div>
                    <span className="font-medium">Live Operational Dashboards:</span>{" "}
                    <span className="text-muted-foreground">
                      Zero-latency visualizations of KPIs, with interactive charts and anomaly alerts.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-purple-500" />
                  </div>
                  <div>
                    <span className="font-medium">Intelligent Workflow Automation:</span>{" "}
                    <span className="text-muted-foreground">
                      Event-triggered actions and alerts that cut manual interventions by ~70%.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-purple-500" />
                  </div>
                  <div>
                    <span className="font-medium">"Ask Ciro" AI Assistant:</span>{" "}
                    <span className="text-muted-foreground">
                      Conversational AI lets anyone query data in natural language and get instant insights.
                    </span>
                  </div>
                </li>
              </ul>
              
              <Button variant="outline" asChild className="w-full">
                <Link to="/products/ai-analytics">Learn More →</Link>
              </Button>
            </div>
          </div>
          
          {/* Ciro Vision */}
          <div className="bg-card border border-border/50 rounded-lg overflow-hidden shadow-sm group hover:shadow-md transition-all">
            <div className="h-56 overflow-hidden border-b border-border/50 bg-muted/30 relative">
              {/* Product visual */}
              <div className="absolute inset-0 p-6 flex items-center justify-center">
                <div className="w-full rounded-md overflow-hidden bg-background border border-border/50">
                  <div className="border-b border-border/50 bg-muted/30 p-2 flex items-center">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                    </div>
                    <div className="mx-auto text-xs text-muted-foreground">
                      Vision Dashboard
                    </div>
                  </div>
                  <div className="p-2">
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      <div className="bg-muted/30 rounded relative flex items-center justify-center p-1">
                        <div className="absolute top-1 left-1 text-[0.5rem] text-muted-foreground bg-background/50 rounded px-1">
                          Camera 1
                        </div>
                        <div className="w-full h-full bg-muted/50 rounded flex items-center justify-center">
                          <div className="border border-dashed border-blue-500 w-8 h-6 relative">
                            <div className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-muted/30 rounded relative flex items-center justify-center p-1">
                        <div className="absolute top-1 left-1 text-[0.5rem] text-muted-foreground bg-background/50 rounded px-1">
                          Camera 2
                        </div>
                        <div className="w-full h-full bg-muted/50 rounded flex items-center justify-center">
                          <div className="border border-dashed border-green-500 w-8 h-6 relative">
                            <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-green-500"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-muted/30 rounded p-2">
                      <div className="text-xs text-muted-foreground flex justify-between mb-1">
                        <span>Status</span>
                        <span className="text-yellow-500">Alert</span>
                      </div>
                      <div className="flex gap-1">
                        <div className="flex-1 h-2 rounded-full bg-green-500"></div>
                        <div className="flex-1 h-2 rounded-full bg-green-500"></div>
                        <div className="flex-1 h-2 rounded-full bg-yellow-500 animate-pulse"></div>
                        <div className="flex-1 h-2 rounded-full bg-green-500"></div>
                      </div>
                      <div className="mt-1 text-[0.5rem] text-yellow-500 bg-yellow-500/10 p-1 rounded">
                        Person detected in restricted zone (Camera 3)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/10" />
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                Ciro Vision
              </h3>
              <p className="text-lg font-medium mb-4">
                AI Eyes for Your Plant & Fleet
              </p>
              
              <ul className="mb-6 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-purple-500" />
                  </div>
                  <div>
                    <span className="font-medium">Real-Time Visual Monitoring:</span>{" "}
                    <span className="text-muted-foreground">
                      Supports 200+ camera feeds simultaneously with high accuracy, detecting anomalies 15× faster than manual monitoring.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-purple-500" />
                  </div>
                  <div>
                    <span className="font-medium">Safety & Quality Assurance:</span>{" "}
                    <span className="text-muted-foreground">
                      Uses AI to monitor safety compliance (PPE detection, zone intrusions) and product quality in real time, helping reduce incidents by 65%.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-purple-500" />
                  </div>
                  <div>
                    <span className="font-medium">Edge Computing & IoT:</span>{" "}
                    <span className="text-muted-foreground">
                      Runs on the edge (supporting devices like NVIDIA Jetson) and integrates with sensors for comprehensive monitoring.
                    </span>
                  </div>
                </li>
              </ul>
              
              <Button variant="outline" asChild className="w-full">
                <Link to="/products/vision">Learn More →</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
