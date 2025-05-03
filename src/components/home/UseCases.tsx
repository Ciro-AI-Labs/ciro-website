
const UseCases = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Real-World Impact
            </span>{" "}
            Across Industries
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how leading companies are using Ciro Labs technology to transform operations and drive results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Manufacturing Use Case */}
          <div className="bg-card border border-border/50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
            <div className="h-40 bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 11h-3V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v14c0 1.65 1.35 3 3 3h14c1.65 0 3-1.35 3-3v-6a1 1 0 0 0-1-1ZM5 19c-.55 0-1-.45-1-1V5h12v14H5Zm15-1c0 .55-.45 1-1 1h-1v-8h2v7ZM7 7h8v2H7V7Zm0 4h8v2H7v-2Zm0 4h5v2H7v-2Z" />
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Manufacturing</h3>
              <p className="font-medium text-lg mb-4">Improving Uptime & Quality</p>
              <p className="text-muted-foreground mb-4">
                A food manufacturer achieved <span className="font-bold text-foreground">20% reduction in unplanned downtime</span> and 
                <span className="font-bold text-foreground"> 15% higher quality compliance</span> after deploying Ciro's real-time analytics.
              </p>
              <div className="flex justify-between">
                <div className="text-sm">
                  <div className="font-medium">Industry:</div>
                  <div className="text-muted-foreground">Food Processing</div>
                </div>
                <div className="text-sm text-right">
                  <div className="font-medium">ROI Period:</div>
                  <div className="text-muted-foreground">4 months</div>
                </div>
              </div>
            </div>
          </div>

          {/* Logistics Use Case */}
          <div className="bg-card border border-border/50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
            <div className="h-40 bg-gradient-to-br from-blue-900 to-indigo-900 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9 1.96 2.5H17V9.5h2.5zM18 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Logistics & Distribution</h3>
              <p className="font-medium text-lg mb-4">Streamlining Supply Chains</p>
              <p className="text-muted-foreground mb-4">
                Smart inventory alerts and predictive maintenance helped a 3PL logistics provider cut supply chain delays by 
                <span className="font-bold text-foreground"> 25% within 3 months</span>.
              </p>
              <div className="flex justify-between">
                <div className="text-sm">
                  <div className="font-medium">Industry:</div>
                  <div className="text-muted-foreground">3PL Logistics</div>
                </div>
                <div className="text-sm text-right">
                  <div className="font-medium">Key Benefit:</div>
                  <div className="text-muted-foreground">Delivery Time</div>
                </div>
              </div>
            </div>
          </div>

          {/* Safety Use Case */}
          <div className="bg-card border border-border/50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
            <div className="h-40 bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Safety & Compliance</h3>
              <p className="font-medium text-lg mb-4">Enhancing Workplace Safety</p>
              <p className="text-muted-foreground mb-4">
                Automated PPE detection and zone monitoring via Ciro Vision reduced workplace incidents by 
                <span className="font-bold text-foreground"> 65%</span> at a manufacturing plant.
              </p>
              <div className="flex justify-between">
                <div className="text-sm">
                  <div className="font-medium">Industry:</div>
                  <div className="text-muted-foreground">Industrial Manufacturing</div>
                </div>
                <div className="text-sm text-right">
                  <div className="font-medium">Application:</div>
                  <div className="text-muted-foreground">Safety Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
