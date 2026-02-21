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
import { useTranslation } from "react-i18next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/home/Contact";
import { EmailService } from "@/lib/emailService";
import { logVisitorEvent } from "@/lib/analytics";

const Partners = () => {
  const { t } = useTranslation();

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
      toast.success(t('pages.partners.successMessage'));
      
      // Reset form
      (e.target as HTMLFormElement).reset();
      
    } catch (error) {
      console.error('Partnership inquiry error:', error);
      toast.error(t('pages.partners.errorMessage'));
    }
  };

  const partnershipTypes = [
    {
      icon: Code,
      title: t('pages.partners.types.technology.title'),
      description: t('pages.partners.types.technology.desc'),
      benefits: t('pages.partners.types.technology.benefits', { returnObjects: true }) as string[]
    },
    {
      icon: Building,
      title: t('pages.partners.types.channel.title'),
      description: t('pages.partners.types.channel.desc'),
      benefits: t('pages.partners.types.channel.benefits', { returnObjects: true }) as string[]
    },
    {
      icon: Target,
      title: t('pages.partners.types.strategic.title'),
      description: t('pages.partners.types.strategic.desc'),
      benefits: t('pages.partners.types.strategic.benefits', { returnObjects: true }) as string[]
    },
    {
      icon: Globe,
      title: t('pages.partners.types.global.title'),
      description: t('pages.partners.types.global.desc'),
      benefits: t('pages.partners.types.global.benefits', { returnObjects: true }) as string[]
    }
  ];

  const existingPartners = [
    {
      name: "Microsoft",
      logo: "Microsoft",
      type: t('pages.partners.existingPartners.microsoft.type'),
      description: t('pages.partners.existingPartners.microsoft.desc')
    },
    {
      name: "AWS",
      logo: "AWS",
      type: t('pages.partners.existingPartners.aws.type'),
      description: t('pages.partners.existingPartners.aws.desc')
    },
    {
      name: "Snowflake",
      logo: "Snowflake",
      type: t('pages.partners.existingPartners.snowflake.type'),
      description: t('pages.partners.existingPartners.snowflake.desc')
    },
    {
      name: "NVIDIA",
      logo: "NVIDIA",
      type: t('pages.partners.existingPartners.nvidia.type'),
      description: t('pages.partners.existingPartners.nvidia.desc')
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: t('pages.partners.whyPartner.revenue.title'),
      description: t('pages.partners.whyPartner.revenue.desc')
    },
    {
      icon: Shield,
      title: t('pages.partners.whyPartner.risk.title'),
      description: t('pages.partners.whyPartner.risk.desc')
    },
    {
      icon: Users,
      title: t('pages.partners.whyPartner.customer.title'),
      description: t('pages.partners.whyPartner.customer.desc')
    },
    {
      icon: Award,
      title: t('pages.partners.whyPartner.competitive.title'),
      description: t('pages.partners.whyPartner.competitive.desc')
    }
  ];

  const industries = t('pages.partners.industries', { returnObjects: true }) as string[];

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
                <span>{t('pages.partners.badge')}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {t('pages.partners.heading1')}
                </span>
                <br />
                <span className="text-white">
                  {t('pages.partners.heading2')}
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                {t('pages.partners.description')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => document.getElementById('partnership-types')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Handshake className="w-5 h-5 mr-2" />
                  {t('pages.partners.explorePartnerships')}
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3 border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50 rounded-lg font-semibold transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {t('pages.partners.getInTouch')}
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
                {t('pages.partners.typesTitle')}
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                {t('pages.partners.typesDesc')}
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
                  
                  <h4 className="text-sm font-semibold text-white mb-3">{t('pages.partners.keyBenefits')}</h4>
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
                {t('pages.partners.whyPartnerTitle')}
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                {t('pages.partners.whyPartnerDesc')}
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
                {t('pages.partners.trustedTitle')}
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                {t('pages.partners.trustedDesc')}
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
                  {t('pages.partners.formTitle')}
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  {t('pages.partners.formDesc')}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">{t('pages.partners.contactTitle')}</h3>
                    <p className="text-gray-300 mb-8 leading-relaxed">
                      {t('pages.partners.contactDesc')}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">{t('pages.partners.emailUs')}</h4>
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
                        <h4 className="text-lg font-semibold text-white">{t('pages.partners.visitUs')}</h4>
                        <p className="text-gray-300">{t('pages.partners.location')}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-white mb-3">{t('pages.partners.processTitle')}</h4>
                    <div className="space-y-3">
                      {(t('pages.partners.processSteps', { returnObjects: true }) as string[]).map((step, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">{index + 1}</span>
                          </div>
                          <span className="text-sm text-gray-300">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Inquiry Form */}
                <div className="bg-card/80 border border-border/50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">{t('pages.partners.inquiryTitle')}</h3>
                  
                  <form onSubmit={handlePartnershipInquiry} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          {t('pages.partners.companyName')}
                        </label>
                        <Input
                          placeholder={t('pages.partners.companyPlaceholder')}
                          className="bg-card/50 border-border/50 text-white placeholder:text-gray-400 focus:border-purple-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          {t('pages.partners.industry')}
                        </label>
                        <Select>
                          <SelectTrigger className="bg-card/50 border-border/50 text-white">
                            <SelectValue placeholder={t('pages.partners.selectIndustry')} />
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
                          {t('pages.partners.contactName')}
                        </label>
                        <Input
                          placeholder={t('pages.partners.namePlaceholder')}
                          className="bg-card/50 border-border/50 text-white placeholder:text-gray-400 focus:border-purple-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          {t('pages.partners.email')}
                        </label>
                        <Input
                          type="email"
                          placeholder={t('pages.partners.emailPlaceholder')}
                          className="bg-card/50 border-border/50 text-white placeholder:text-gray-400 focus:border-purple-500"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {t('pages.partners.partnershipType')}
                      </label>
                      <Select>
                        <SelectTrigger className="bg-card/50 border-border/50 text-white">
                          <SelectValue placeholder={t('pages.partners.selectPartnershipType')} />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-border">
                          <SelectItem value="technology">{t('pages.partners.partnershipOptions.technology')}</SelectItem>
                          <SelectItem value="channel">{t('pages.partners.partnershipOptions.channel')}</SelectItem>
                          <SelectItem value="strategic">{t('pages.partners.partnershipOptions.strategic')}</SelectItem>
                          <SelectItem value="global">{t('pages.partners.partnershipOptions.global')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {t('pages.partners.message')}
                      </label>
                      <Textarea
                        placeholder={t('pages.partners.messagePlaceholder')}
                        className="resize-none bg-card/50 border-border/50 text-white placeholder:text-gray-400 focus:border-purple-500"
                        rows={4}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
                    >
                      <Handshake className="w-5 h-5 mr-2" />
                      {t('pages.partners.sendInquiry')}
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