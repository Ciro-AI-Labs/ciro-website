
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const useCases = [
  {
    id: 1,
    industry: "Manufacturing",
    title: "Improving Uptime & Quality",
    description: "A food manufacturer achieved 20% reduction in unplanned downtime and 15% higher quality compliance after deploying Ciro's real-time analytics. The platform connected previously siloed data from production lines, quality systems, and maintenance records, enabling predictive maintenance and real-time quality monitoring.",
    results: [
      "20% reduction in unplanned downtime",
      "15% improvement in quality compliance",
      "ROI achieved within 4 months"
    ],
    color: "from-purple-900 to-blue-900"
  },
  {
    id: 2,
    industry: "Logistics & Distribution",
    title: "Streamlining Supply Chains",
    description: "A 3PL logistics provider implemented Ciro to unify data across their warehouses and transportation network. Smart inventory alerts and predictive maintenance helped identify bottlenecks and potential delays before they impacted operations, cutting supply chain delays by 25% within just 3 months of deployment.",
    results: [
      "25% reduction in supply chain delays",
      "18% improvement in on-time delivery",
      "Increased visibility across 12 facilities"
    ],
    color: "from-blue-900 to-indigo-900"
  },
  {
    id: 3,
    industry: "Safety & Compliance",
    title: "Enhancing Workplace Safety",
    description: "A manufacturing plant deployed Ciro Vision to monitor safety compliance across their facility. The system was configured to automatically detect PPE violations, zone intrusions, and unsafe behaviors. Real-time alerts allowed safety officers to address issues immediately, resulting in a 65% reduction in workplace incidents.",
    results: [
      "65% reduction in workplace safety incidents",
      "90% faster response to safety violations",
      "Comprehensive compliance documentation"
    ],
    color: "from-indigo-900 to-purple-900"
  },
  {
    id: 4,
    industry: "Energy & Utilities",
    title: "Optimizing Resource Usage",
    description: "An energy company used Ciro to monitor and optimize their distributed energy resources. By connecting sensor data, weather forecasts, and operational systems, they were able to predict demand patterns and automatically adjust production accordingly, reducing waste and improving efficiency.",
    results: [
      "12% reduction in resource waste",
      "8% increase in energy efficiency",
      "$1.2M annual savings identified"
    ],
    color: "from-blue-900 to-green-900"
  }
];

const UseCases = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero section */}
        <section className="pt-20 pb-16 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                  Real-World Impact
                </span>
              </h1>
              <p className="text-xl mb-8 text-muted-foreground">
                See how Ciro Labs technology is transforming operations across industries
              </p>
            </div>
          </div>
        </section>

        {/* Use cases section */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              {useCases.map((useCase) => (
                <div 
                  key={useCase.id}
                  className="bg-card border border-border/50 rounded-lg overflow-hidden shadow-md"
                >
                  <div className={`h-2 bg-gradient-to-r ${useCase.color}`}></div>
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/3">
                        <div className={`h-32 bg-gradient-to-br ${useCase.color} rounded-lg flex items-center justify-center mb-4`}>
                          <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                            <span className="text-3xl font-bold text-white">
                              {useCase.id}
                            </span>
                          </div>
                        </div>
                        <h2 className="text-xl font-bold mb-2">{useCase.industry}</h2>
                        <p className="font-medium text-lg mb-4">{useCase.title}</p>
                        <div className="space-y-2">
                          {useCase.results.map((result, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <div className="w-5 h-5 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                                <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                              </div>
                              <p className="text-sm">{result}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-2xl font-bold mb-4">Challenge & Solution</h3>
                        <p className="text-muted-foreground mb-6">{useCase.description}</p>
                        <div className="bg-muted/30 rounded-lg p-6">
                          <h4 className="font-medium mb-4">Ciro Products Used:</h4>
                          <div className="flex flex-wrap gap-3">
                            <div className="bg-background border border-border/50 px-3 py-1 rounded text-sm">
                              {useCase.id === 3 ? "Ciro Vision" : "Ciro AI Analytics"}
                            </div>
                            {useCase.id !== 3 && (
                              <div className="bg-background border border-border/50 px-3 py-1 rounded text-sm">
                                Data Integration Hub
                              </div>
                            )}
                            <div className="bg-background border border-border/50 px-3 py-1 rounded text-sm">
                              Workflow Automation
                            </div>
                            {useCase.id === 3 && (
                              <div className="bg-background border border-border/50 px-3 py-1 rounded text-sm">
                                Edge AI
                              </div>
                            )}
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
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="bg-card border border-border/50 rounded-lg p-8 md:p-12 shadow-md text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                Ready to create your own success story?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Schedule a demo to see how Ciro Labs can transform your operations.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Book a Demo</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UseCases;
