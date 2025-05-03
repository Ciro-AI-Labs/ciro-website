
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-purple-950/20 z-0" />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                Where Industrial Data 
              </span>{" "}
              <span className="block mt-2">Drives Real-Time Action.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground">
              Ciro Labs builds intelligent platforms that turn fragmented streams of data into automated decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">Book a Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">Watch Overview</Link>
              </Button>
            </div>
          </div>
          
          <div className="lg:pl-8 mt-8 lg:mt-0">
            <div className="relative">
              {/* Dashboard mockup */}
              <div className="relative bg-background border border-border/50 shadow-lg rounded-lg overflow-hidden backdrop-blur-sm">
                <div className="border-b border-border/50 bg-muted/30 p-3 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <div className="mx-auto text-sm text-muted-foreground font-medium">
                    Ciro AI Analytics Dashboard
                  </div>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-muted/30 rounded-md p-3">
                      <div className="text-sm text-muted-foreground mb-2">Production Rate</div>
                      <div className="text-xl font-semibold">98.3%</div>
                      <div className="h-2 w-full bg-muted mt-2 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: "98%" }} />
                      </div>
                    </div>
                    <div className="bg-muted/30 rounded-md p-3">
                      <div className="text-sm text-muted-foreground mb-2">Equipment Status</div>
                      <div className="text-xl font-semibold text-green-500">Optimal</div>
                      <div className="h-2 w-full bg-muted mt-2 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: "90%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted/30 rounded-md p-3 mb-4">
                    <div className="text-sm text-muted-foreground mb-2">Real-time Analytics</div>
                    <div className="flex items-end h-20 gap-1">
                      {[40, 25, 35, 30, 32, 38, 42, 45, 35, 38, 50, 55].map((h, i) => (
                        <div
                          key={i}
                          className="h-[var(--h)] bg-purple-500/80 hover:bg-purple-500 w-full rounded-sm transition-all duration-200"
                          style={{ "--h": `${h}%` } as React.CSSProperties}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="bg-muted/30 rounded-md p-3">
                    <div className="flex justify-between mb-2">
                      <div className="text-sm text-muted-foreground">System Status</div>
                      <div className="text-xs text-green-500">Live</div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span>All systems operational</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="hidden md:block absolute -bottom-6 -left-6 w-24 h-24 bg-purple-500/10 rounded-full blur-xl" />
              <div className="hidden md:block absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
