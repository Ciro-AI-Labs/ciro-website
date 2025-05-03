
import { useState } from "react";
import { cn } from "@/lib/utils";
 
const testimonials = [
  {
    id: 1,
    quote: "Ciro became our plant's command center – we spotted and fixed issues 20% faster. I can't imagine operations without it now.",
    name: "Jane Doe",
    title: "Operations Manager",
    company: "FoodCo",
  },
  {
    id: 2,
    quote: "Thanks to Ciro Vision, our safety incidents have plummeted. It's like having an extra supervisor 24/7.",
    name: "John Smith",
    title: "Safety Lead",
    company: "Manufacturing Inc.",
  },
  {
    id: 3,
    quote: "The natural language querying reduced our analytics time by 65%. Now everyone can access insights, not just our data team.",
    name: "Alex Johnson",
    title: "Data Analytics Director",
    company: "Logistics Partners",
  },
];

const metrics = [
  {
    value: "↓70%",
    label: "Manual Tasks",
    description: "Workflow automation eliminated routine manual processes for a client, freeing engineers to focus on high-value work."
  },
  {
    value: "↑15%",
    label: "Output Quality",
    description: "Real-time monitoring and AI optimization led to significant improvement in product quality compliance."
  },
  {
    value: "$2.5M",
    label: "Savings",
    description: "Predictive maintenance prevented downtime, saving an estimated $2.5M annually."
  }
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how our clients are achieving real results with Ciro Labs technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 items-center mb-16">
          {/* Client logos */}
          <div className="md:col-span-6 flex flex-wrap justify-center gap-6 md:gap-12 mb-8">
            {["Manufacturing Co.", "Logistics Corp.", "Industrial Inc.", "Food Systems", "Safety Tech"].map((company, index) => (
              <div 
                key={index} 
                className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
              >
                <div className="bg-card border border-border/50 px-4 py-2 rounded shadow-sm">
                  <span className="font-semibold">{company}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial carousel */}
          <div className="md:col-span-3 relative">
            <div className="bg-card border border-border/50 rounded-lg p-6 md:p-8 shadow-md relative">
              <svg
                className="absolute text-muted-foreground opacity-20 w-16 h-16 -top-4 -left-4 transform -translate-x-1/4 -translate-y-1/4"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>

              <div className="min-h-[200px] flex flex-col justify-between">
                <div>
                  <p className="text-lg md:text-xl italic mb-6">
                    "{testimonials[activeTestimonial].quote}"
                  </p>
                  <div>
                    <p className="font-medium">{testimonials[activeTestimonial].name}</p>
                    <p className="text-muted-foreground">
                      {testimonials[activeTestimonial].title}, {testimonials[activeTestimonial].company}
                    </p>
                  </div>
                </div>

                <div className="flex justify-center space-x-2 mt-6">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={cn(
                        "w-2.5 h-2.5 rounded-full transition-colors",
                        index === activeTestimonial
                          ? "bg-purple-500"
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      )}
                      onClick={() => setActiveTestimonial(index)}
                      aria-label={`View testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Metrics highlights */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-4">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-card border border-border/50 rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                      {metric.value}
                    </div>
                    <div className="text-lg font-medium">{metric.label}</div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
