
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero section */}
        <section className="pt-20 pb-16 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                  Ciro Labs
                </span>
              </h1>
              <p className="text-xl mb-8 text-muted-foreground">
                We're building the AI Engine for Industry 4.0
              </p>
            </div>
          </div>
        </section>

        {/* Mission section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
              <p className="text-lg text-center mb-8">
                Ciro Labs builds intelligent platforms that turn fragmented streams of industrial data into automated decisions, 
                helping manufacturers and logistics operators achieve real-time operational excellence.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Unify",
                    description: "Connect disparate data sources to create a single source of truth for industrial operations."
                  },
                  {
                    title: "Analyze",
                    description: "Apply AI to extract meaningful insights and patterns from complex operational data."
                  },
                  {
                    title: "Automate",
                    description: "Turn insights into action with intelligent workflows that reduce manual effort."
                  }
                ].map((pillar, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border/50 rounded-lg p-6 text-center shadow-sm"
                  >
                    <div className="mx-auto w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mb-4">
                      <div className="text-xl font-bold text-purple-500">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
                    <p className="text-muted-foreground">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Story section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
              <div className="bg-card border border-border/50 rounded-lg p-8 shadow-md">
                <p className="text-lg mb-6">
                  Ciro Labs was founded by a team of industrial automation experts and AI engineers who saw a critical gap in the market:
                  despite the promise of Industry 4.0, most manufacturers and logistics operators were struggling with fragmented data,
                  slow response times, and missed optimization opportunities.
                </p>
                <p className="text-lg mb-6">
                  Our founders had experienced these challenges firsthand while working at leading manufacturing and technology companies.
                  They understood that the key to unlocking operational excellence wasn't just more data—it was the ability to unify,
                  understand, and act on that data in real time.
                </p>
                <p className="text-lg">
                  Today, Ciro Labs is building the industrial command center that empowers operations teams with instant visibility,
                  AI-driven insights, and automated workflows. Our mission is to help industrial companies thrive in an era of increasing
                  complexity by making their operations more transparent, intelligent, and efficient.
                </p>
              </div>
              
              <div className="mt-12 text-center">
                <h3 className="text-2xl font-bold mb-4">Join Us on Our Journey</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  We're always looking for talented individuals who share our passion for industrial innovation.
                </p>
                <Button asChild>
                  <a href="mailto:careers@cirolabs.com">Explore Careers</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Video section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Watch an Overview</h2>
              <p className="text-lg text-muted-foreground mb-8">
                See how Ciro Labs is transforming industrial operations with AI and real-time analytics.
              </p>
              <div className="relative bg-card border border-border/50 rounded-lg aspect-video overflow-hidden shadow-md">
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="rounded-full h-16 w-16 bg-white/90 flex items-center justify-center shadow-lg">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-purple-500 border-b-[10px] border-b-transparent ml-1"></div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white font-medium">
                    Ciro Labs: AI for Industrial Intelligence
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-card border border-border/50 rounded-lg p-8 md:p-12 shadow-md text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                Ready to see Ciro in action?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Schedule a demo with our team and discover how our platform can transform your operations.
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

export default About;
