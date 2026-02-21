
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { toast } from "sonner";
import { 
  Calendar, 
  Clock, 
  Users, 
  Mail, 
  CheckCircle,
  ArrowRight,
  Play,
  Zap
} from "lucide-react";

import { EmailService } from "@/lib/emailService";
import { logVisitorEvent } from "@/lib/analytics";

// Type declarations for Calendly
declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (config: {
        url: string;
        parentElement: HTMLElement | null;
        prefill: any;
        utm: any;
      }) => void;
    };
  }
}

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  company: z.string().min(2, { message: "Company name is required" }),
  industry: z.string().min(1, { message: "Please select your industry" }),
  message: z.string().optional(),
});

type FormType = 'custom' | 'calendly';

const Contact = () => {
  const { t } = useTranslation();
  const [formType, setFormType] = useState<FormType>('custom');
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      industry: "",
      message: "",
    },
  });

  // Load Calendly script when component mounts
  useEffect(() => {
    // Check if Calendly script already exists
    const existingScript = document.querySelector('script[src*="calendly.com"]');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => {
        console.log('Calendly script loaded');
        setIsCalendlyLoaded(true);
      };
      script.onerror = () => {
        console.error('Failed to load Calendly script');
      };
      document.head.appendChild(script);
    } else {
      setIsCalendlyLoaded(true);
    }
  }, []);

  // Initialize Calendly widget when switching to Calendly form
  useEffect(() => {
    if (formType === 'calendly') {
      // Clear any existing content first
      const widgetContainer = document.getElementById('calendly-widget');
      if (widgetContainer) {
        widgetContainer.innerHTML = '';
        
        // Create the Calendly inline widget div
        const calendlyDiv = document.createElement('div');
        calendlyDiv.className = 'calendly-inline-widget';
        calendlyDiv.setAttribute('data-url', 'https://calendly.com/meet-ciro');
        calendlyDiv.style.minWidth = '320px';
        calendlyDiv.style.height = '700px';
        
        widgetContainer.appendChild(calendlyDiv);
        
        // If script is already loaded, trigger widget initialization
        if (isCalendlyLoaded) {
          // Trigger Calendly to reinitialize widgets
          setTimeout(() => {
            if (window.Calendly) {
              window.Calendly.initInlineWidget({
                url: 'https://calendly.com/meet-ciro',
                parentElement: calendlyDiv,
                prefill: {},
                utm: {}
              });
            }
          }, 100);
        }
      }
    }
  }, [formType, isCalendlyLoaded]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Submit to Supabase
      await EmailService.submitEmail({
        email: values.email,
        name: values.name,
        company: values.company,
        industry: values.industry,
        message: values.message,
        type: 'contact'
      });
      
      // Log analytics event
      await logVisitorEvent({
        event_type: "form_submission",
        email: values.email,
        name: values.name,
        form_data: {
          type: 'contact',
          company: values.company,
          industry: values.industry,
          message: values.message
        }
      });
      
      // Show success message
      toast.success(t('pages.homeContact.successMessage'));
      form.reset();
      
      // Show Calendly after form submission
      setFormType('calendly');
      
    } catch (error) {
      console.error('Submission error:', error);
      toast.error(t('pages.homeContact.errorMessage'));
    }
  }

  const benefits = [
    {
      icon: Calendar,
      title: t('pages.homeContact.benefits.walkthrough.title'),
      description: t('pages.homeContact.benefits.walkthrough.desc'),
    },
    {
      icon: Users,
      title: t('pages.homeContact.benefits.qa.title'),
      description: t('pages.homeContact.benefits.qa.desc'),
    },
    {
      icon: CheckCircle,
      title: t('pages.homeContact.benefits.noObligation.title'),
      description: t('pages.homeContact.benefits.noObligation.desc'),
    },
  ];

  const industries = [
    "Manufacturing",
    "Logistics & Distribution", 
    "Food & Beverage",
    "Energy & Utilities",
    "Aerospace & Defense",
    "Automotive",
    "Pharmaceuticals",
    "Chemicals",
    "Mining & Metals",
    "Other"
  ];

  const renderForm = () => {
    switch (formType) {
      case 'calendly':
        return (
          <div className="bg-card/80 border border-border/50 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">{t('pages.homeContact.scheduleYourDemo')}</h3>
              <Button
                onClick={() => setFormType('custom')}
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
              >
                {t('pages.homeContact.backToForm')}
              </Button>
            </div>
            <div 
              id="calendly-widget"
              className="min-h-[700px] w-full"
            />
            {!isCalendlyLoaded && (
              <div className="flex items-center justify-center h-[700px]">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
                  <p className="text-gray-400">{t('pages.homeContact.loadingCalendar')}</p>
                </div>
              </div>
            )}
          </div>
        );
      

      
      default:
        return (
          <>
            {/* Form */}
            <div className="bg-card/80 border border-border/50 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">{t('pages.homeContact.bookYourDemo')}</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">{t('pages.homeContact.name')}</FormLabel>
                          <FormControl>
                            <Input
                              placeholder={t('pages.homeContact.namePlaceholder')}
                              className="bg-card/50 border-border/50 text-white placeholder:text-gray-400"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">{t('pages.homeContact.workEmail')}</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder={t('pages.homeContact.emailPlaceholder')}
                              className="bg-card/50 border-border/50 text-white placeholder:text-gray-400"
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
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">{t('pages.homeContact.company')}</FormLabel>
                          <FormControl>
                            <Input
                              placeholder={t('pages.homeContact.companyPlaceholder')}
                              className="bg-card/50 border-border/50 text-white placeholder:text-gray-400"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="industry"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">{t('pages.homeContact.industry')}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-card/50 border-border/50 text-white">
                                <SelectValue placeholder={t('pages.homeContact.selectIndustry')} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-card border-border">
                              {industries.map((industry) => (
                                <SelectItem key={industry} value={industry.toLowerCase().replace(/\s+/g, '-')}>
                                  {industry}
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
                        <FormLabel className="text-gray-300">{t('pages.homeContact.message')}</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={t('pages.homeContact.messagePlaceholder')}
                            className="resize-none bg-card/50 border-border/50 text-white placeholder:text-gray-400"
                            rows={4}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    {t('pages.homeContact.bookMyDemo')}
                  </Button>
                </form>
              </Form>
              <p className="text-sm text-gray-400 mt-6 text-center">
                {t('pages.homeContact.responseTime')}
              </p>
            </div>

            {/* Form Options */}
            <div className="space-y-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border/30" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-slate-900 text-gray-400">{t('pages.homeContact.orChoose')}</span>
                </div>
              </div>

              <div className="flex justify-center">
                <Button
                  onClick={() => setFormType('calendly')}
                  variant="outline"
                  size="lg"
                  className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50 font-semibold py-3"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  {t('pages.homeContact.scheduleCalendly')}
                </Button>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/3 via-blue-600/3 to-cyan-600/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-purple-400 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-full mb-6">
              <Play className="w-4 h-4" />
              <span>{t('pages.homeContact.badge')}</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {t('pages.homeContact.heading1')}
              </span>
              <br />
              <span className="text-white">
                {t('pages.homeContact.heading2')}
              </span>
            </h2>
            
            <p className="text-lg md:text-xl lg:text-lg xl:text-lg 2xl:text-xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
              {t('pages.homeContact.description')}
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Benefits and Info */}
            <div className="space-y-8">
              {/* Benefits */}
              <div className="bg-card/80 border border-border/50 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-6">{t('pages.homeContact.whatToExpect')}</h3>
                <div className="space-y-6">
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

              {/* Contact Info */}
              <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">{t('pages.homeContact.otherWays')}</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <div>
                      <p className="text-gray-300 text-sm">{t('pages.homeContact.emailDirectly')}</p>
                      <a 
                        href="mailto:hola@ciroai.us" 
                        className="text-purple-400 hover:text-purple-300 font-medium"
                      >
                        hola@ciroai.us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form Options */}
            <div className="space-y-6">
              {renderForm()}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">{t('pages.homeContact.ctaTitle')}</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                {t('pages.homeContact.ctaDesc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => setFormType('calendly')}
                  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  {t('pages.homeContact.scheduleDemo')}
                </Button>
                <Button 
                  variant="outline"
                  className="px-8 py-3 border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50 rounded-lg font-semibold transition-all duration-300"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  {t('pages.homeContact.viewCaseStudies')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
