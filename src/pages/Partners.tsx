import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { 
  Handshake, 
  Zap, 
  Users, 
  Globe, 
  TrendingUp, 
  Award, 
  Shield, 
  Star,
  ArrowRight,
  Mail,
  MapPin,
  CheckCircle,
  Play,
  Building,
  Code,
  Database,
  Eye,
  Briefcase,
  Target,
  Lightbulb,
  Heart
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/home/Contact";
import { EmailService } from "@/lib/emailService";
import { logVisitorEvent } from "@/lib/analytics";

const Partners = () => {
  const handlePartnershipInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('email') as string;
    const name = formData.get('name') as string;
    const company = formData.get('company') as string;
    const industry = formData.get('industry') as string;
    const partnershipType = formData.get('partnershipType') as string;
    const message = formData.get('message') as string;
    
    try {
      // Submit to Supabase
      await EmailService.submitEmail({
        email,
        name,
        company,
        industry,
        message: `Partnership Type: ${partnershipType}\n\n${message}`,
        type: 'partnership'
      });
      
      // Log analytics event
      await logVisitorEvent({
        event_type: "form_submission",
        email: email,
        name: name,
        form_data: {
          type: 'partnership',
          company: company,
          industry: industry,
          partnershipType: partnershipType,
          message: message
        }
      });
      
      // Show success message
      toast.success("Partnership inquiry submitted successfully! We'll contact you within one business day.");
      
      // Reset form
      (e.target as HTMLFormElement).reset();
      
    } catch (error) {
      console.error('Partnership inquiry error:', error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  const partnershipTypes = [
    {
      icon: Code,
      title: "Technology Partners",
      description: "Integrate our AI solutions into your platforms and applications",
      benefits: [
        "API access and technical support",
        "Co-marketing opportunities",
        "Revenue sharing programs",
        "Joint product development"
      ]
    },
    {
      icon: Building,
      title: "Channel Partners",
      description: "Resell and implement CIRO solutions for your customers",
      benefits: [
        "Competitive margins and incentives",
        "Sales and technical training",
        "Marketing materials and support",
        "Dedicated partner success manager"
      ]
    },
    {
      icon: Target,
      title: "Strategic Partners",
      description: "Deep collaboration on industry-specific solutions",
      benefits: [
        "Exclusive market access",
        "Joint go-to-market strategies",
        "Shared R&D initiatives",
        "Strategic investment opportunities"
      ]
    },
    {
      icon: Globe,
      title: "Global Partners",
      description: "Expand CIRO's reach in international markets",
      benefits: [
        "Territory exclusivity",
        "Local market expertise",
        "Cultural adaptation support",
        "Global expansion resources"
      ]
    }
  ];

  const existingPartners = [
    {
      name: "Microsoft",
      logo: "Microsoft",
      type: "Technology Partner",
      description: "Azure integration and cloud infrastructure"
    },
    {
      name: "AWS",
      logo: "AWS",
      type: "Technology Partner", 
      description: "Cloud services and AI infrastructure"
    },
    {
      name: "Snowflake",
      logo: "Snowflake",
      type: "Data Partner",
      description: "Data warehousing and analytics"
    },
    {
      name: "NVIDIA",
      logo: "NVIDIA",
      type: "Technology Partner",
      description: "GPU acceleration and AI computing"
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      description: "Access new markets and revenue streams with proven AI solutions"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Reduce development costs and time-to-market with ready solutions"
    },
    {
      icon: Users,
      title: "Customer Success",
      description: "Enhance your offerings with cutting-edge AI capabilities"
    },
    {
      icon: Award,
      title: "Competitive Advantage",
      description: "Differentiate your business with innovative AI technology"
    }
  ];

  const industries = [
    "Manufacturing",
    "Logistics & Supply Chain",
    "Energy & Utilities",
    "Healthcare",
    "Retail",
    "Financial Services",
    "Technology",
    "Consulting",
    "System Integration",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navbar />
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/3 via-blue-600/3 to-cyan-600/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-purple-400 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-full mb-6">
                <Handshake className="w-4 h-4" />
                <span>Partnership Program</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Partner With Us
                </span>
                <br />
                <span className="text-white">
                  to Transform Industries
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Join our ecosystem of partners and help bring the power of industrial AI 
                to organizations worldwide. Together, we can create solutions that drive 
                real business transformation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => document.getElementById('partnership-types')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Handshake className="w-5 h-5 mr-2" />
                  Explore Partnerships
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3 border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50 rounded-lg font-semibold transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section id="partnership-types" className="py-16">
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Partnership Opportunities
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                We offer multiple partnership models to fit your business needs and goals. 
                Choose the partnership type that aligns with your strategy and capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partnershipTypes.map((type, index) => (
                <div key={index} className="bg-card/80 border border-border/50 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center mb-6">
                    <type.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-white mb-4">{type.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{type.description}</p>
                  
                  <h4 className="text-sm font-semibold text-white mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-card/20">
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Partner With CIRO
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our partners benefit from cutting-edge AI technology, comprehensive support, 
                and a proven track record of delivering value to customers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Existing Partners */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Trusted Partners
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                We're proud to work with industry leaders who share our vision of 
                transforming industries through AI innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {existingPartners.map((partner, index) => (
                <div key={index} className="bg-card/80 border border-border/50 rounded-2xl p-8 text-center hover:border-purple-500/30 transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Building className="w-10 h-10 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
                  <p className="text-sm text-purple-400 mb-3">{partner.type}</p>
                  <p className="text-sm text-gray-300">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="py-16">
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Partner?
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Let's discuss how we can work together to bring AI innovation to your customers. 
                  Our partnership team is ready to explore opportunities with you.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                    <p className="text-gray-300 mb-8 leading-relaxed">
                      Our partnership team is here to help you understand our programs, 
                      answer questions, and explore collaboration opportunities.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Email Us</h4>
                        <a href="mailto:partners@ciroai.us" className="text-purple-400 hover:text-purple-300 transition-colors">
                          partners@ciroai.us
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Visit Us</h4>
                        <p className="text-gray-300">San Francisco, CA</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Partnership Process</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">1</span>
                        </div>
                        <span className="text-sm text-gray-300">Initial consultation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">2</span>
                        </div>
                        <span className="text-sm text-gray-300">Partnership agreement</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">3</span>
                        </div>
                        <span className="text-sm text-gray-300">Training and enablement</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">4</span>
                        </div>
                        <span className="text-sm text-gray-300">Go-to-market launch</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Inquiry Form */}
                <div className="bg-card/80 border border-border/50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Partnership Inquiry</h3>
                  
                  <form onSubmit={handlePartnershipInquiry} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Company Name
                        </label>
                        <Input
                          placeholder="Your company"
                          className="bg-card/50 border-border/50 text-white placeholder:text-gray-400 focus:border-purple-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Industry
                        </label>
                        <Select>
                          <SelectTrigger className="bg-card/50 border-border/50 text-white">
                            <SelectValue placeholder="Select industry" />
                          </SelectTrigger>
                          <SelectContent className="bg-card border-border">
                            {industries.map((industry) => (
                              <SelectItem key={industry} value={industry.toLowerCase().replace(/\s+/g, '-')}>
                                {industry}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Contact Name
                        </label>
                        <Input
                          placeholder="Your name"
                          className="bg-card/50 border-border/50 text-white placeholder:text-gray-400 focus:border-purple-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email
                        </label>
                        <Input
                          type="email"
                          placeholder="your@company.com"
                          className="bg-card/50 border-border/50 text-white placeholder:text-gray-400 focus:border-purple-500"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Partnership Type of Interest
                      </label>
                      <Select>
                        <SelectTrigger className="bg-card/50 border-border/50 text-white">
                          <SelectValue placeholder="Select partnership type" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-border">
                          <SelectItem value="technology">Technology Partner</SelectItem>
                          <SelectItem value="channel">Channel Partner</SelectItem>
                          <SelectItem value="strategic">Strategic Partner</SelectItem>
                          <SelectItem value="global">Global Partner</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Message
                      </label>
                      <Textarea
                        placeholder="Tell us about your partnership goals and how we can work together..."
                        className="resize-none bg-card/50 border-border/50 text-white placeholder:text-gray-400 focus:border-purple-500"
                        rows={4}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
                    >
                      <Handshake className="w-5 h-5 mr-2" />
                      Send Partnership Inquiry
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
};

export default Partners; 