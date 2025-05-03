
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const steps = [
  {
    id: 1,
    title: "Connect Your Data",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    description: "Ciro connects to your existing systems – IoT sensors, machines, databases, ERP – over 50+ connectors. It ingests millions of events in real time (up to 500k events/sec) with <12ms latency, creating a live unified data stream.",
    visual: (
      <div className="relative h-full w-full bg-card border border-border/50 rounded-lg p-4 overflow-hidden shadow-sm">
        <div className="grid grid-cols-3 gap-2">
          {["ERP", "IoT", "MES"].map((source, idx) => (
            <div key={idx} className="bg-muted/30 p-2 rounded text-center text-sm">
              {source}
            </div>
          ))}
        </div>
        <div className="my-4 flex justify-center">
          <div className="animate-pulse w-full max-w-[80%] h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
        </div>
        <div className="bg-muted/30 p-3 rounded text-center flex items-center justify-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Ciro Data Stream</span>
          </div>
        </div>
        <div className="text-xs text-muted-foreground mt-3 text-center">
          &lt;12ms latency • 500k events/sec
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Monitor & Analyze in Real-Time",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    description: "As data flows in, Ciro's dashboard updates instantly. AI algorithms analyze patterns on the fly, and a live dashboard displays KPIs, trends, and anomalies with zero delay. Interactive charts and heatmaps let you deep-dive into any metric in real time.",
    visual: (
      <div className="relative h-full w-full bg-card border border-border/50 rounded-lg p-4 overflow-hidden shadow-sm">
        <div className="border-b border-border/50 mb-3 pb-2 flex justify-between items-center">
          <span className="font-medium">Production Dashboard</span>
          <span className="text-green-500 text-xs">Live</span>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="bg-muted/30 p-2 rounded">
            <div className="text-xs text-muted-foreground mb-1">Machine Efficiency</div>
            <div className="text-lg font-medium">93.2%</div>
            <div className="h-1.5 w-full bg-muted rounded-full mt-1 overflow-hidden">
              <div className="h-full bg-green-500 rounded-full" style={{ width: "93%" }}></div>
            </div>
          </div>
          <div className="bg-muted/30 p-2 rounded">
            <div className="text-xs text-muted-foreground mb-1">Quality Rate</div>
            <div className="text-lg font-medium">98.7%</div>
            <div className="h-1.5 w-full bg-muted rounded-full mt-1 overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: "99%" }}></div>
            </div>
          </div>
        </div>
        <div className="bg-muted/30 p-2 rounded">
          <div className="text-xs text-muted-foreground mb-1">Real-Time Production</div>
          <div className="flex items-end h-12 gap-1">
            {[30, 45, 38, 50, 42, 60, 55, 45, 65, 60].map((h, i) => (
              <div
                key={i}
                className="h-[var(--h)] bg-purple-500/80 w-full rounded-sm"
                style={{ "--h": `${h}%` } as React.CSSProperties}
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
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    description: "Ciro's AI engine continuously learns from your data. It can predict issues (like equipment failures) before they happen, and it powers an 'Ask Ciro' conversational assistant that lets you query your data in plain English.",
    visual: (
      <div className="relative h-full w-full bg-card border border-border/50 rounded-lg p-4 overflow-hidden shadow-sm">
        <div className="border-b border-border/50 mb-3 pb-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            </div>
            <span className="font-medium">Ask Ciro</span>
          </div>
        </div>
        <div className="space-y-3">
          <div className="bg-muted/30 p-2 rounded-lg text-sm">
            Which production line will likely slow down next month?
          </div>
          <div className="bg-purple-500/10 p-2 rounded-lg text-sm flex flex-col gap-1">
            <p>Based on pattern analysis, <strong>Line B</strong> is predicted to slow down by <strong>8-12%</strong> next month.</p>
            <p className="text-xs text-muted-foreground">Factors: Maintenance schedule, historical performance, vibration anomalies</p>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            <span>AI prediction with 94% confidence</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "Automated Action",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    description: "Ciro doesn't just visualize – it acts. Define intelligent workflows that trigger actions in milliseconds based on events. If a threshold is crossed or an anomaly is detected, Ciro's Workflow Engine might send an alert, adjust a machine, or create a ticket immediately, reducing manual work by up to 70%.",
    visual: (
      <div className="relative h-full w-full bg-card border border-border/50 rounded-lg p-4 overflow-hidden shadow-sm">
        <div className="border-b border-border/50 mb-3 pb-2 flex justify-between items-center">
          <span className="font-medium">Workflow Automation</span>
          <span className="text-green-500 text-xs">Active</span>
        </div>
        <div className="space-y-3">
          <div className="bg-muted/30 p-2 rounded flex items-center justify-between">
            <div className="text-sm">Temperature Threshold</div>
            <div className="text-sm font-medium text-yellow-500">Triggered</div>
          </div>
          <div className="flex items-center">
            <div className="h-0.5 bg-yellow-500 w-full"></div>
            <svg className="h-6 w-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
            </svg>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-purple-500/10 p-2 rounded text-center text-sm">
              <div className="text-xs text-muted-foreground mb-1">Alert Sent</div>
              <div className="font-medium">Technician</div>
            </div>
            <div className="bg-purple-500/10 p-2 rounded text-center text-sm">
              <div className="text-xs text-muted-foreground mb-1">Ticket Created</div>
              <div className="font-medium">High Priority</div>
            </div>
          </div>
          <div className="text-xs text-muted-foreground text-center">
            Response time: &lt;500ms
          </div>
        </div>
      </div>
    )
  }
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);

  const currentStep = steps.find((step) => step.id === activeStep);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Ciro{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Delivers Real-Time Intelligence
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From data ingestion to automated action, see how our platform functions under the hood.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <div className="mb-6">
              <div className="flex flex-col gap-2">
                {steps.map((step) => (
                  <button
                    key={step.id}
                    className={cn(
                      "flex items-center gap-4 text-left p-4 rounded-lg transition-all",
                      activeStep === step.id
                        ? "bg-card border border-border shadow-sm"
                        : "hover:bg-muted/30"
                    )}
                    onClick={() => setActiveStep(step.id)}
                  >
                    <div
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
                        activeStep === step.id
                          ? "bg-purple-500 text-white"
                          : "bg-muted text-muted-foreground"
                      )}
                    >
                      {activeStep === step.id ? step.icon : step.id}
                    </div>
                    <div>
                      <h3 className="font-medium">{step.title}</h3>
                      {activeStep === step.id && (
                        <p className="text-sm text-muted-foreground mt-1 hidden md:block">
                          Click to view details
                        </p>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 text-purple-500">{currentStep?.icon}</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{currentStep?.title}</h3>
                  <p className="text-muted-foreground">{currentStep?.description}</p>
                </div>
              </div>

              <div className="aspect-video w-full h-auto bg-background border border-border/50 rounded-lg overflow-hidden">
                {currentStep?.visual}
              </div>

              <div className="mt-6 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
                <Button
                  variant="outline"
                  onClick={() => setActiveStep(activeStep > 1 ? activeStep - 1 : 4)}
                  className="w-full md:w-auto"
                >
                  Previous Step
                </Button>
                <div className="flex justify-center gap-2">
                  {steps.map((step) => (
                    <button
                      key={step.id}
                      className={cn(
                        "w-2.5 h-2.5 rounded-full",
                        activeStep === step.id ? "bg-purple-500" : "bg-muted"
                      )}
                      onClick={() => setActiveStep(step.id)}
                    />
                  ))}
                </div>
                <Button
                  onClick={() => setActiveStep(activeStep < 4 ? activeStep + 1 : 1)}
                  className="w-full md:w-auto"
                >
                  Next Step
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
