
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useTranslation } from "react-i18next";
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

  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      const result = await submitDemoRequest(values);

      if (result.success) {
        toast.success(result.message || t('pages.contactPage.successMessage'));
        form.reset();

        // Show Calendly scheduling option
        setTimeout(() => {
          toast.info(t('pages.contactPage.scheduleNow'), {
            action: {
              label: t('pages.contactPage.scheduleDemoButton'),
              onClick: () => openCalendly(values)
            },
            duration: 10000
          });
        }, 2000);
      } else {
        toast.error(result.error || t('pages.contactPage.errorMessage'));
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(t('pages.contactPage.networkError'));
    } finally {
      setIsSubmitting(false);
    }
  }

  function openCalendly(formData: z.infer<typeof formSchema>) {
    const calendlyUrl = createCalendlyLink(formData);
    window.open(calendlyUrl, '_blank');
  }

  const industries = [
    { value: "manufacturing", label: t('pages.contactPage.industries.manufacturing') },
    { value: "logistics", label: t('pages.contactPage.industries.logistics') },
    { value: "food", label: t('pages.contactPage.industries.food') },
    { value: "energy", label: t('pages.contactPage.industries.energy') },
    { value: "automotive", label: t('pages.contactPage.industries.automotive') },
    { value: "pharmaceutical", label: t('pages.contactPage.industries.pharmaceutical') },
    { value: "chemical", label: t('pages.contactPage.industries.chemical') },
    { value: "mining", label: t('pages.contactPage.industries.mining') },
    { value: "oil-gas", label: t('pages.contactPage.industries.oilGas') },
    { value: "aerospace", label: t('pages.contactPage.industries.aerospace') },
    { value: "other", label: t('pages.contactPage.industries.other') }
  ];

  const companySizes = [
    { value: "1-50", label: t('pages.contactPage.companySizes.1_50') },
    { value: "51-200", label: t('pages.contactPage.companySizes.51_200') },
    { value: "201-500", label: t('pages.contactPage.companySizes.201_500') },
    { value: "501-1000", label: t('pages.contactPage.companySizes.501_1000') },
    { value: "1001-5000", label: t('pages.contactPage.companySizes.1001_5000') },
    { value: "5000+", label: t('pages.contactPage.companySizes.5000plus') }
  ];

  const useCases = [
    { value: "real-time-monitoring", label: t('pages.contactPage.useCases.realTimeMonitoring') },
    { value: "predictive-maintenance", label: t('pages.contactPage.useCases.predictiveMaintenance') },
    { value: "quality-control", label: t('pages.contactPage.useCases.qualityControl') },
    { value: "supply-chain", label: t('pages.contactPage.useCases.supplyChain') },
    { value: "energy-efficiency", label: t('pages.contactPage.useCases.energyEfficiency') },
    { value: "safety-compliance", label: t('pages.contactPage.useCases.safetyCompliance') },
    { value: "process-optimization", label: t('pages.contactPage.useCases.processOptimization') },
    { value: "data-integration", label: t('pages.contactPage.useCases.dataIntegration') },
    { value: "other", label: t('pages.contactPage.useCases.other') }
  ];

  const timelines = [
    { value: "immediate", label: t('pages.contactPage.timelines.immediate') },
    { value: "quarter", label: t('pages.contactPage.timelines.quarter') },
    { value: "year", label: t('pages.contactPage.timelines.year') },
    { value: "planning", label: t('pages.contactPage.timelines.planning') },
    { value: "research", label: t('pages.contactPage.timelines.research') }
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
                  {t('pages.contactPage.heading')}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-4">
                {t('pages.contactPage.subtitle')}
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                {t('pages.contactPage.description')}
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
                      <h2 className="text-2xl font-bold text-white">{t('pages.contactPage.scheduleTitle')}</h2>
                      <p className="text-gray-400">{t('pages.contactPage.scheduleDesc')}</p>
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
                              <FormLabel className="text-gray-300">{t('pages.contactPage.firstName')} *</FormLabel>
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
                              <FormLabel className="text-gray-300">{t('pages.contactPage.lastName')} *</FormLabel>
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
                              <FormLabel className="text-gray-300">{t('pages.contactPage.workEmail')} *</FormLabel>
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
                              <FormLabel className="text-gray-300">{t('pages.contactPage.phone')}</FormLabel>
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
                              <FormLabel className="text-gray-300">{t('pages.contactPage.company')} *</FormLabel>
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
                              <FormLabel className="text-gray-300">{t('pages.contactPage.jobTitle')} *</FormLabel>
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
                              <FormLabel className="text-gray-300">{t('pages.contactPage.industry')} *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-slate-700/50 border-gray-600 text-white focus:border-purple-500">
                                    <SelectValue placeholder={t('pages.contactPage.selectIndustry')} />
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
                              <FormLabel className="text-gray-300">{t('pages.contactPage.companySize')} *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-slate-700/50 border-gray-600 text-white focus:border-purple-500">
                                    <SelectValue placeholder={t('pages.contactPage.selectCompanySize')} />
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
                              <FormLabel className="text-gray-300">{t('pages.contactPage.primaryUseCase')} *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-slate-700/50 border-gray-600 text-white focus:border-purple-500">
                                    <SelectValue placeholder={t('pages.contactPage.selectUseCase')} />
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
                              <FormLabel className="text-gray-300">{t('pages.contactPage.implementationTimeline')} *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-slate-700/50 border-gray-600 text-white focus:border-purple-500">
                                    <SelectValue placeholder={t('pages.contactPage.selectTimeline')} />
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
                            <FormLabel className="text-gray-300">{t('pages.contactPage.additionalDetails')}</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder={t('pages.contactPage.additionalPlaceholder')}
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
                                  {t('pages.contactPage.newsletterConsent')}
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
                                  {t('pages.contactPage.privacyConsent')}{" "}
                                  <a href="/privacy-policy" className="text-purple-400 hover:text-purple-300 underline">
                                    Privacy Policy
                                  </a>{" "}
                                  {t('pages.contactPage.privacyConsentEnd')} *
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
                            {t('pages.contactPage.submitting')}
                          </>
                        ) : (
                          <>
                            {t('pages.contactPage.scheduleMyDemo')}
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
                    {t('pages.contactPage.getInTouch')}
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{t('pages.contactPage.emailUs')}</h4>
                        <a href="mailto:hola@ciroai.us" className="text-purple-400 hover:text-purple-300 transition-colors">
                          hola@ciroai.us
                        </a>
                        <p className="text-sm text-gray-400 mt-1">{t('pages.contactPage.respondTime')}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{t('pages.contactPage.visitUs')}</h4>
                        <p className="text-gray-300">El Salvador and California</p>
                        <p className="text-sm text-gray-400 mt-1">{t('pages.contactPage.globalOps')}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{t('pages.contactPage.demoSchedule')}</h4>
                        <p className="text-gray-300">{t('pages.contactPage.demoLength')}</p>
                        <p className="text-sm text-gray-400 mt-1">{t('pages.contactPage.customized')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What to Expect */}
                <div className="bg-slate-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-orange-400" />
                    {t('pages.contactPage.whatToExpect')}
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white text-sm">{t('pages.contactPage.personalizedDemo')}</h4>
                        <p className="text-sm text-gray-400">{t('pages.contactPage.personalizedDemoDesc')}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white text-sm">{t('pages.contactPage.technicalDeepDive')}</h4>
                        <p className="text-sm text-gray-400">{t('pages.contactPage.technicalDeepDiveDesc')}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white text-sm">{t('pages.contactPage.roiDiscussion')}</h4>
                        <p className="text-sm text-gray-400">{t('pages.contactPage.roiDiscussionDesc')}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white text-sm">{t('pages.contactPage.nextSteps')}</h4>
                        <p className="text-sm text-gray-400">{t('pages.contactPage.nextStepsDesc')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Security Badge */}
                <div className="bg-slate-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-green-400" />
                    <h3 className="text-lg font-semibold text-white">{t('pages.contactPage.enterpriseSecurity')}</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {t('pages.contactPage.soc2')}
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {t('pages.contactPage.iso27001')}
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {t('pages.contactPage.e2e')}
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {t('pages.contactPage.gdpr')}
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
