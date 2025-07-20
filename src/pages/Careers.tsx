import { useState } from "react";
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
  Users, 
  Zap, 
  Database, 
  Eye, 
  Code, 
  TrendingUp, 
  Globe, 
  Heart,
  ArrowRight,
  MapPin,
  Clock,
  DollarSign,
  Briefcase,
  GraduationCap,
  Star,
  CheckCircle,
  Play,
  Award,
  Shield,
  Lightbulb,
  Mail,
  Home
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/home/Contact";
import { EmailService } from "@/lib/emailService";
import { logVisitorEvent } from "@/lib/analytics";

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<string>("");
  const [isApplying, setIsApplying] = useState(false);

  const handleJobApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedJob) {
      toast.error("Please select a position");
      return;
    }

    setIsApplying(true);
    
    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const email = formData.get('email') as string;
      const name = formData.get('name') as string;
      const department = formData.get('department') as string;
      const coverLetter = formData.get('coverLetter') as string;
      
      // Submit to Supabase
      await EmailService.submitEmail({
        email,
        name,
        company: 'N/A', // Individual applicant
        industry: department,
        message: `Position: ${selectedJob}\nDepartment: ${department}\n\nCover Letter:\n${coverLetter}`,
        type: 'career'
      });
      
      // Log analytics event
      await logVisitorEvent({
        event_type: "form_submission",
        email: email,
        name: name,
        form_data: {
          type: 'career',
          position: selectedJob,
          department: department,
          coverLetter: coverLetter
        }
      });
      
      // Show success message
      toast.success("Application submitted successfully! We'll review your application and contact you soon.");
      
      // Reset form and close
      setSelectedJob("");
      
    } catch (error) {
      console.error('Application error:', error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsApplying(false);
    }
  };

  const jobOpenings = [
    {
      id: "senior-ai-engineer",
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "El Salvador and California",
      type: "Full-time",
      experience: "5+ years",
      salary: "$150K - $200K",
      description: "Lead the development of cutting-edge AI models for industrial applications.",
      requirements: [
        "Strong background in machine learning and deep learning",
        "Experience with PyTorch, TensorFlow, or similar frameworks",
        "Knowledge of computer vision and NLP",
        "Experience with cloud platforms (AWS, GCP, Azure)",
        "Strong software engineering principles"
      ]
    },
    {
      id: "full-stack-developer",
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      salary: "$120K - $160K",
      description: "Build scalable web applications and APIs for our AI platform.",
      requirements: [
        "Proficiency in React, TypeScript, and Node.js",
        "Experience with cloud services and databases",
        "Knowledge of API design and microservices",
        "Experience with DevOps and CI/CD",
        "Strong problem-solving skills"
      ]
    },
    {
      id: "product-manager",
      title: "Product Manager",
      department: "Product",
      location: "El Salvador and California",
      type: "Full-time",
      experience: "4+ years",
      salary: "$140K - $180K",
      description: "Drive product strategy and execution for our AI solutions.",
      requirements: [
        "Experience in B2B SaaS product management",
        "Strong analytical and strategic thinking",
        "Experience with industrial/manufacturing sector",
        "Excellent communication and leadership skills",
        "Data-driven decision making"
      ]
    },
    {
      id: "sales-engineer",
      title: "Sales Engineer",
      department: "Sales",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      salary: "$100K - $140K + Commission",
      description: "Bridge the gap between technical capabilities and business value.",
      requirements: [
        "Technical background in software or engineering",
        "Experience in B2B sales or technical consulting",
        "Strong presentation and communication skills",
        "Knowledge of manufacturing/logistics industry",
        "Ability to travel 30-40%"
      ]
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Above-market compensation with equity options"
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision coverage"
    },
    {
      icon: Clock,
      title: "Flexible PTO",
      description: "Unlimited vacation days and flexible work hours"
    },
    {
      icon: Home,
      title: "Remote Work",
      description: "Work from anywhere with home office stipend"
    },
    {
      icon: GraduationCap,
      title: "Learning Budget",
      description: "$5,000 annual budget for courses and conferences"
    },
    {
      icon: Users,
      title: "Team Events",
      description: "Regular team building and social activities"
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We push boundaries and embrace new technologies"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Great ideas come from working together"
    },
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "We build trust through transparency and honesty"
    },
    {
      icon: Star,
      title: "Excellence",
      description: "We strive for excellence in everything we do"
    }
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
                <Users className="w-4 h-4" />
                <span>Join Our Team</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Build the Future
                </span>
                <br />
                <span className="text-white">
                  of Industrial AI
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Join a team of passionate innovators working to transform industries through 
                cutting-edge AI technology. Help us build solutions that make a real impact.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => document.getElementById('openings')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Briefcase className="w-5 h-5 mr-2" />
                  View Openings
                </Button>
                <Button 
                  variant="outline"
                  className="px-8 py-3 border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50 rounded-lg font-semibold transition-all duration-300"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Culture Video
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Culture & Values */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Culture & Values
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                We're building more than just technology – we're building a culture of innovation, 
                collaboration, and impact that drives everything we do.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-card/80 border border-border/50 rounded-2xl p-8 text-center hover:border-purple-500/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
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
                Why Work With Us
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                We believe in taking care of our team with comprehensive benefits and a 
                supportive environment that helps you thrive both personally and professionally.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                    <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section id="openings" className="py-16">
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Open Positions
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Ready to make an impact? Explore our current openings and find the perfect 
                role for your skills and career goals.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {jobOpenings.map((job) => (
                <div key={job.id} className="bg-card/80 border border-border/50 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full">
                      {job.department}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{job.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-purple-400" />
                      <span className="text-sm text-gray-300">{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-purple-400" />
                      <span className="text-sm text-gray-300">{job.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-purple-400" />
                      <span className="text-sm text-gray-300">{job.experience}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-purple-400" />
                      <span className="text-sm text-gray-300">{job.salary}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    onClick={() => setSelectedJob(job.title)}
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              ))}
            </div>

            {/* Application Form */}
            {selectedJob && (
              <div className="bg-card/80 border border-border/50 rounded-2xl p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Apply for {selectedJob}
                </h3>
                
                <form onSubmit={handleJobApplication} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Position
                      </label>
                      <Input
                        value={selectedJob}
                        disabled
                        className="bg-card/50 border-border/50 text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Department
                      </label>
                      <Select>
                        <SelectTrigger className="bg-card/50 border-border/50 text-white">
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-border">
                          <SelectItem value="engineering">Engineering</SelectItem>
                          <SelectItem value="product">Product</SelectItem>
                          <SelectItem value="sales">Sales</SelectItem>
                          <SelectItem value="marketing">Marketing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Cover Letter
                    </label>
                    <Textarea
                      placeholder="Tell us why you're interested in this position and what you can bring to the team..."
                      className="resize-none bg-card/50 border-border/50 text-white placeholder:text-gray-400 focus:border-purple-500"
                      rows={6}
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      type="submit" 
                      className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
                      disabled={isApplying}
                    >
                      {isApplying ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Preparing Application...
                        </>
                      ) : (
                        <>
                          Submit Application
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                    <Button 
                      type="button"
                      variant="outline"
                      onClick={() => setSelectedJob("")}
                      className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Don't See the Right Fit?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals to join our team. 
                Send us your resume and let's start a conversation about how you can contribute to our mission.
              </p>
              <Button 
                onClick={() => {
                  const subject = encodeURIComponent("General Application");
                  const body = encodeURIComponent(`
Hello CIRO Team,

I'm interested in joining your team and would like to submit a general application.

Please find my resume attached.

I look forward to hearing about potential opportunities!

Best regards,
[Your Name]
                  `);
                  window.open(`mailto:careers@ciroai.us?subject=${subject}&body=${body}`, '_blank');
                }}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send General Application
              </Button>
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

export default Careers; 