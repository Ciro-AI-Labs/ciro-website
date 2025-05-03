
import { CheckCircle } from "lucide-react";

const Challenges = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Silos, Latency, and Lost Opportunities – 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              {" "}The Industrial Data Crisis
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Manufacturers and logistics operators are awash in data, yet real-time insight is elusive. 
            Legacy systems and data silos stall decision-making and cost millions in inefficiencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Pain point 1 */}
          <div className="bg-card border border-border/50 rounded-lg p-6 shadow-sm">
            <div className="text-2xl font-bold mb-2">
              Data Fragmentation
            </div>
            <p className="text-muted-foreground mb-4">
              <span className="font-bold text-foreground">90%</span> of industrial 
              data remains trapped in silos, leading to costly blind spots.
            </p>
            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-red-500/70 rounded-full" style={{ width: "90%" }} />
            </div>
          </div>
          
          {/* Pain point 2 */}
          <div className="bg-card border border-border/50 rounded-lg p-6 shadow-sm">
            <div className="text-2xl font-bold mb-2">
              Slow Response Times
            </div>
            <p className="text-muted-foreground mb-4">
              Decisions lag behind events – legacy systems slow responses by ~
              <span className="font-bold text-foreground">40%</span>, costing 
              enterprises up to $5M a year.
            </p>
            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-red-500/70 rounded-full" style={{ width: "40%" }} />
            </div>
          </div>
          
          {/* Pain point 3 */}
          <div className="bg-card border border-border/50 rounded-lg p-6 shadow-sm">
            <div className="text-2xl font-bold mb-2">
              Integration Bottlenecks
            </div>
            <p className="text-muted-foreground mb-4">
              Over <span className="font-bold text-foreground">60%</span> of companies 
              struggle to integrate IoT and ERP data in real-time, driving costs up 30%.
            </p>
            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-red-500/70 rounded-full" style={{ width: "60%" }} />
            </div>
          </div>
        </div>

        <div className="bg-card border border-border/50 rounded-lg p-8 shadow-md">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Ciro – Your Real-Time Command Center for Industry 4.0
            </h3>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Ciro Labs provides an AI-powered <strong>Industrial Command Center</strong> that 
              unifies all your operational data streams in real time and turns them into 
              actionable intelligence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Unified Data Streaming from 50+ sources with sub-12ms latency.",
                "Real-time visibility into operations via live dashboards.",
                "AI-driven automation that reduces manual effort by ~70%.",
                "Scalable computer vision and analytics on the edge."
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
