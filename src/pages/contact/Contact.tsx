
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { submitDemoRequest, createCalendlyLink } from "@/lib/demoRequestService";
import { motion } from "framer-motion";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  Users, 
  Building, 
  Globe, 
  Zap,
  CheckCircle,
  ArrowRight,
  Calendar,
  MessageSquare,
  Shield,
  Sparkles
} from "lucide-react";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(2, { message: "Last name is required" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  phone: z.string().optional(),
  company: z.string().min(2, { message: "Company name is required" }),
  jobTitle: z.string().min(2, { message: "Job title is required" }),
  industry: z.string().min(1, { message: "Please select your industry" }),
  companySize: z.string().min(1, { message: "Please select company size" }),
  useCase: z.string().min(1, { message: "Please select primary use case" }),
  timeline: z.string().min(1, { message: "Please select timeline" }),
  message: z.string().optional(),
  newsletter: z.boolean().default(false),
  privacy: z.boolean().refine(val => val === true, { message: "You must accept the privacy policy" }),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      jobTitle: "",
      industry: "",
      companySize: "",
      useCase: "",
      timeline: "",
      message: "",
      newsletter: false,
      privacy: false,
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      const result = await submitDemoRequest(values);

      if (result.success) {
        toast.success(result.message || "Demo request submitted successfully! We'll contact you within 24 hours.");
        form.reset();
        
        // Show Calendly scheduling option
        setTimeout(() => {
          toast.info("Would you like to schedule your demo now?", {
            action: {
              label: "Schedule Demo",
              onClick: () => openCalendly(values)
            },
            duration: 10000
          });
        }, 2000);
      } else {
        toast.error(result.error || "Failed to submit demo request. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function openCalendly(formData: z.infer<typeof formSchema>) {
    const calendlyUrl = createCalendlyLink(formData);
    window.open(calendlyUrl, '_blank');
  }

  const industries = [
    { value: "manufacturing", label: "Manufacturing" },
    { value: "logistics", label: "Logistics & Distribution" },
    { value: "food", label: "Food & Beverage Processing" },
    { value: "energy", label: "Energy & Utilities" },
    { value: "automotive", label: "Automotive" },
    { value: "pharmaceutical", label: "Pharmaceutical" },
    { value: "chemical", label: "Chemical Processing" },
    { value: "mining", label: "Mining & Metals" },
    { value: "oil-gas", label: "Oil & Gas" },
    { value: "aerospace", label: "Aerospace & Defense" },
    { value: "other", label: "Other" }
  ];

  const companySizes = [
    { value: "1-50", label: "1-50 employees" },
    { value: "51-200", label: "51-200 employees" },
    { value: "201-500", label: "201-500 employees" },
    { value: "501-1000", label: "501-1,000 employees" },
    { value: "1001-5000", label: "1,001-5,000 employees" },
    { value: "5000+", label: "5,000+ employees" }
  ];

  const useCases = [
    { value: "real-time-monitoring", label: "Real-time Operations Monitoring" },
    { value: "predictive-maintenance", label: "Predictive Maintenance" },
    { value: "quality-control", label: "Quality Control & Assurance" },
    { value: "supply-chain", label: "Supply Chain Optimization" },
    { value: "energy-efficiency", label: "Energy Efficiency" },
    { value: "safety-compliance", label: "Safety & Compliance" },
    { value: "process-optimization", label: "Process Optimization" },
    { value: "data-integration", label: "Data Integration & Analytics" },
    { value: "other", label: "Other" }
  ];

  const timelines = [
    { value: "immediate", label: "Immediate (within 30 days)" },
    { value: "quarter", label: "This quarter" },
    { value: "year", label: "This year" },
    { value: "planning", label: "Planning phase" },
    { value: "research", label: "Researching options" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="pt-20 pb-16 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-orange-500 to-blue-500">
                  Let's Transform Your Operations
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-4">
                Schedule your personalized demo and see how Ciro AI can revolutionize your business
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Get a hands-on demonstration of our enterprise AI platform powered by Apache technologies, 
                custom LLMs, and 50+ connectors tailored to your specific use case.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-2"
              >
                <div className="bg-slate-800/50 border border-gray-700 rounded-xl p-8 shadow-2xl backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">Schedule Your Demo</h2>
                      <p className="text-gray-400">Tell us about your needs and we'll customize the demo for you</p>
                    </div>
                  </div>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      {/* Personal Information */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-300">First Name *</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="John" 
                                  className="bg-slate-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-300">Last Name *</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Doe" 
                                  className="bg-slate-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-300">Work Email *</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="john.doe@company.com"
                                  className="bg-slate-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-300">Phone (Optional)</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="+1 (555) 123-4567"
                                  className="bg-slate-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Company Information */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-300">Company *</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Your Company Inc." 
                                  className="bg-slate-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="jobTitle"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-300">Job Title *</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Operations Manager" 
                                  className="bg-slate-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="industry"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-300">Industry *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-slate-700/50 border-gray-600 text-white focus:border-purple-500">
                                    <SelectValue placeholder="Select your industry" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-slate-800 border-gray-600">
                                  {industries.map((industry) => (
                                    <SelectItem key={industry.value} value={industry.value} className="text-white hover:bg-slate-700">
                                      {industry.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="companySize"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-300">Company Size *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-slate-700/50 border-gray-600 text-white focus:border-purple-500">
                                    <SelectValue placeholder="Select company size" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-slate-800 border-gray-600">
                                  {companySizes.map((size) => (
                                    <SelectItem key={size.value} value={size.value} className="text-white hover:bg-slate-700">
                                      {size.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="useCase"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-300">Primary Use Case *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-slate-700/50 border-gray-600 text-white focus:border-purple-500">
                                    <SelectValue placeholder="Select primary use case" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-slate-800 border-gray-600">
                                  {useCases.map((useCase) => (
                                    <SelectItem key={useCase.value} value={useCase.value} className="text-white hover:bg-slate-700">
                                      {useCase.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="timeline"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-300">Implementation Timeline *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-slate-700/50 border-gray-600 text-white focus:border-purple-500">
                                    <SelectValue placeholder="Select timeline" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-slate-800 border-gray-600">
                                  {timelines.map((timeline) => (
                                    <SelectItem key={timeline.value} value={timeline.value} className="text-white hover:bg-slate-700">
                                      {timeline.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-300">Additional Details (Optional)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your specific challenges, current systems, or any questions you have..."
                                className="resize-none bg-slate-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500"
                                rows={4}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name="newsletter"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                  className="border-gray-600 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500"
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel className="text-gray-300 text-sm">
                                  Subscribe to our newsletter for industry insights and product updates
                                </FormLabel>
                              </div>
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="privacy"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                  className="border-gray-600 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500"
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel className="text-gray-300 text-sm">
                                  I agree to the{" "}
                                  <a href="/privacy-policy" className="text-purple-400 hover:text-purple-300 underline">
                                    Privacy Policy
                                  </a>{" "}
                                  and consent to being contacted about this demo request *
                                </FormLabel>
                                <FormMessage />
                              </div>
                            </FormItem>
                          )}
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Schedule My Demo
                            <ArrowRight className="w-5 h-5 ml-2" />
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-8"
              >
                {/* Contact Details */}
                <div className="bg-slate-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-purple-400" />
                    Get in Touch
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Email Us</h4>
                        <a href="mailto:hola@ciroai.us" className="text-purple-400 hover:text-purple-300 transition-colors">
                          hola@ciroai.us
                        </a>
                        <p className="text-sm text-gray-400 mt-1">We'll respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Visit Us</h4>
                        <p className="text-gray-300">El Salvador and California</p>
                        <p className="text-sm text-gray-400 mt-1">Global operations</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Demo Schedule</h4>
                        <p className="text-gray-300">30-60 minutes</p>
                        <p className="text-sm text-gray-400 mt-1">Customized to your needs</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What to Expect */}
                <div className="bg-slate-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-orange-400" />
                    What to Expect
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white text-sm">Personalized Demo</h4>
                        <p className="text-sm text-gray-400">Tailored to your industry and use case</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white text-sm">Technical Deep Dive</h4>
                        <p className="text-sm text-gray-400">See Apache technologies in action</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white text-sm">ROI Discussion</h4>
                        <p className="text-sm text-gray-400">Understand potential business impact</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white text-sm">Next Steps</h4>
                        <p className="text-sm text-gray-400">Implementation roadmap and timeline</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Security Badge */}
                <div className="bg-slate-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-green-400" />
                    <h3 className="text-lg font-semibold text-white">Enterprise Security</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      SOC 2 Type II Certified
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      ISO 27001 Compliant
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      End-to-end Encryption
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      GDPR Compliant
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
