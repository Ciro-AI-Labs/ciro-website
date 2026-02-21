import { useState } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  const [selectedJob, setSelectedJob] = useState<string>("");
  const [isApplying, setIsApplying] = useState(false);

  const handleJobApplication = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedJob) {
      toast.error(t('pages.careers.selectPosition'));
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
      toast.success(t('pages.careers.successMessage'));

      // Reset form and close
      setSelectedJob("");

    } catch (error) {
      console.error('Application error:', error);
      toast.error(t('pages.careers.errorMessage'));
    } finally {
      setIsApplying(false);
    }
  };

  const jobOpenings = [
    {
      id: "senior-ai-engineer",
      title: t('pages.careers.jobs.seniorAi.title'),
      department: t('pages.careers.jobs.seniorAi.dept'),
      location: t('pages.careers.jobs.seniorAi.location'),
      type: t('pages.careers.jobs.seniorAi.type'),
      experience: t('pages.careers.jobs.seniorAi.experience'),
      salary: t('pages.careers.jobs.seniorAi.salary'),
      description: t('pages.careers.jobs.seniorAi.desc'),
      requirements: t('pages.careers.jobs.seniorAi.requirements', { returnObjects: true }) as string[]
    },
    {
      id: "full-stack-developer",
      title: t('pages.careers.jobs.fullStack.title'),
      department: t('pages.careers.jobs.fullStack.dept'),
      location: t('pages.careers.jobs.fullStack.location'),
      type: t('pages.careers.jobs.fullStack.type'),
      experience: t('pages.careers.jobs.fullStack.experience'),
      salary: t('pages.careers.jobs.fullStack.salary'),
      description: t('pages.careers.jobs.fullStack.desc'),
      requirements: t('pages.careers.jobs.fullStack.requirements', { returnObjects: true }) as string[]
    },
    {
      id: "product-manager",
      title: t('pages.careers.jobs.productManager.title'),
      department: t('pages.careers.jobs.productManager.dept'),
      location: t('pages.careers.jobs.productManager.location'),
      type: t('pages.careers.jobs.productManager.type'),
      experience: t('pages.careers.jobs.productManager.experience'),
      salary: t('pages.careers.jobs.productManager.salary'),
      description: t('pages.careers.jobs.productManager.desc'),
      requirements: t('pages.careers.jobs.productManager.requirements', { returnObjects: true }) as string[]
    },
    {
      id: "sales-engineer",
      title: t('pages.careers.jobs.salesEngineer.title'),
      department: t('pages.careers.jobs.salesEngineer.dept'),
      location: t('pages.careers.jobs.salesEngineer.location'),
      type: t('pages.careers.jobs.salesEngineer.type'),
      experience: t('pages.careers.jobs.salesEngineer.experience'),
      salary: t('pages.careers.jobs.salesEngineer.salary'),
      description: t('pages.careers.jobs.salesEngineer.desc'),
      requirements: t('pages.careers.jobs.salesEngineer.requirements', { returnObjects: true }) as string[]
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: t('pages.careers.benefits.salary.title'),
      description: t('pages.careers.benefits.salary.desc')
    },
    {
      icon: Heart,
      title: t('pages.careers.benefits.health.title'),
      description: t('pages.careers.benefits.health.desc')
    },
    {
      icon: Clock,
      title: t('pages.careers.benefits.pto.title'),
      description: t('pages.careers.benefits.pto.desc')
    },
    {
      icon: Home,
      title: t('pages.careers.benefits.remote.title'),
      description: t('pages.careers.benefits.remote.desc')
    },
    {
      icon: GraduationCap,
      title: t('pages.careers.benefits.learning.title'),
      description: t('pages.careers.benefits.learning.desc')
    },
    {
      icon: Users,
      title: t('pages.careers.benefits.team.title'),
      description: t('pages.careers.benefits.team.desc')
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: t('pages.careers.values.innovation.title'),
      description: t('pages.careers.values.innovation.desc')
    },
    {
      icon: Users,
      title: t('pages.careers.values.collaboration.title'),
      description: t('pages.careers.values.collaboration.desc')
    },
    {
      icon: Shield,
      title: t('pages.careers.values.trust.title'),
      description: t('pages.careers.values.trust.desc')
    },
    {
      icon: Star,
      title: t('pages.careers.values.excellence.title'),
      description: t('pages.careers.values.excellence.desc')
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
                <span>{t('pages.careers.badge')}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {t('pages.careers.heading1')}
                </span>
                <br />
                <span className="text-white">
                  {t('pages.careers.heading2')}
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                {t('pages.careers.description')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => document.getElementById('openings')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Briefcase className="w-5 h-5 mr-2" />
                  {t('pages.careers.viewOpenings')}
                </Button>
                <Button 
                  variant="outline"
                  className="px-8 py-3 border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50 rounded-lg font-semibold transition-all duration-300"
                >
                  <Play className="w-5 h-5 mr-2" />
                  {t('pages.careers.watchCultureVideo')}
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
                {t('pages.careers.cultureTitle')}
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                {t('pages.careers.cultureDesc')}
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
                {t('pages.careers.benefitsTitle')}
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                {t('pages.careers.benefitsDesc')}
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
                {t('pages.careers.openPositionsTitle')}
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                {t('pages.careers.openPositionsDesc')}
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
                    <h4 className="text-sm font-semibold text-white mb-3">{t('pages.careers.requirements')}</h4>
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
                    {t('pages.careers.applyNow')}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              ))}
            </div>

            {/* Application Form */}
            {selectedJob && (
              <div className="bg-card/80 border border-border/50 rounded-2xl p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-6">
                  {t('pages.careers.applyFor')} {selectedJob}
                </h3>
                
                <form onSubmit={handleJobApplication} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {t('pages.careers.position')}
                      </label>
                      <Input
                        value={selectedJob}
                        disabled
                        className="bg-card/50 border-border/50 text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {t('pages.careers.department')}
                      </label>
                      <Select>
                        <SelectTrigger className="bg-card/50 border-border/50 text-white">
                          <SelectValue placeholder={t('pages.careers.selectDepartment')} />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-border">
                          <SelectItem value="engineering">{t('pages.careers.departments.engineering')}</SelectItem>
                          <SelectItem value="product">{t('pages.careers.departments.product')}</SelectItem>
                          <SelectItem value="sales">{t('pages.careers.departments.sales')}</SelectItem>
                          <SelectItem value="marketing">{t('pages.careers.departments.marketing')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {t('pages.careers.coverLetter')}
                    </label>
                    <Textarea
                      placeholder={t('pages.careers.coverLetterPlaceholder')}
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
                          {t('pages.careers.preparingApplication')}
                        </>
                      ) : (
                        <>
                          {t('pages.careers.submitApplication')}
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
                      {t('pages.careers.cancel')}
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
                {t('pages.careers.noFitTitle')}
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                {t('pages.careers.noFitDesc')}
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
                {t('pages.careers.sendGeneralApplication')}
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