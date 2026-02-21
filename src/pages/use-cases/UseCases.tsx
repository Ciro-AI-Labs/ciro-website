
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  TrendingUp, 
  Truck, 
  Shield, 
  Zap, 
  Clock, 
  DollarSign, 
  Users, 
  CheckCircle,
  ArrowRight,
  Play,
  Target,
  BarChart3,
  Cpu,
  Eye,
  Database,
  Workflow,
  Globe,
  Award,
  Calendar
} from "lucide-react";

const caseKeys = ['manufacturing', 'logistics', 'safety', 'energy', 'aerospace', 'pharma'] as const;

const caseStaticData = [
  {
    products: ["Ciro AI Analytics", "Data Integration Hub", "Workflow Automation"],
    color: "from-purple-600 to-blue-600",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Modern food processing facility with automated production lines",
    resultIcons: [Clock, CheckCircle, DollarSign, TrendingUp],
  },
  {
    products: ["Ciro AI Analytics", "Data Integration Hub", "Workflow Automation"],
    color: "from-blue-600 to-indigo-600",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Modern warehouse with automated logistics systems and robotics",
    resultIcons: [Clock, CheckCircle, Zap, Target],
  },
  {
    products: ["Ciro Vision", "Edge AI", "Safety Monitoring"],
    color: "from-indigo-600 to-purple-600",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Industrial safety monitoring system with computer vision cameras",
    resultIcons: [Shield, Zap, CheckCircle, Clock],
  },
  {
    products: ["Ciro AI Analytics", "IoT Integration", "Predictive Analytics"],
    color: "from-blue-600 to-green-600",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Solar panels and renewable energy infrastructure",
    resultIcons: [Target, TrendingUp, DollarSign, Eye],
  },
  {
    products: ["Ciro Vision", "Quality Control", "Compliance Management"],
    color: "from-green-600 to-emerald-600",
    icon: Target,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Precision aerospace manufacturing with quality control systems",
    resultIcons: [CheckCircle, Clock, Shield, Target],
  },
  {
    products: ["Ciro AI Analytics", "Compliance Management", "Documentation Automation"],
    color: "from-emerald-600 to-teal-600",
    icon: Award,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Modern pharmaceutical laboratory with GMP compliance systems",
    resultIcons: [Shield, Clock, CheckCircle, Eye],
  },
];

const UseCases = () => {
  const { t } = useTranslation();

  const useCases = caseKeys.map((key, index) => {
    const staticData = caseStaticData[index];
    const translatedResults = t(`pages.useCasesPage.cases.${key}.results`, { returnObjects: true }) as { metric: string; label: string }[];
    const resultsWithIcons = translatedResults.map((result, rIndex) => ({
      ...result,
      icon: staticData.resultIcons[rIndex],
    }));

    return {
      id: index + 1,
      industry: t(`pages.useCasesPage.cases.${key}.industry`),
      title: t(`pages.useCasesPage.cases.${key}.title`),
      subtitle: t(`pages.useCasesPage.cases.${key}.subtitle`),
      description: t(`pages.useCasesPage.cases.${key}.description`),
      challenge: t(`pages.useCasesPage.cases.${key}.challenge`),
      solution: t(`pages.useCasesPage.cases.${key}.solution`),
      results: resultsWithIcons,
      company: t(`pages.useCasesPage.cases.${key}.company`),
      implementation: t(`pages.useCasesPage.cases.${key}.implementation`),
      products: staticData.products,
      color: staticData.color,
      icon: staticData.icon,
      image: staticData.image,
      imageAlt: staticData.imageAlt,
    };
  });

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
        {/* Hero section */}
        <section className="pt-24 pb-16 md:py-28">
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-purple-400 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-full mb-6">
                <TrendingUp className="w-4 h-4" />
                <span>{t('pages.useCasesPage.badge')}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {t('pages.useCasesPage.heading1')}
                </span>
                <br />
                <span className="text-white">
                  {t('pages.useCasesPage.heading2')}
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                {t('pages.useCasesPage.description')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <BarChart3 className="w-5 h-5 mr-2" />
                  {t('pages.useCasesPage.viewCaseStudies')}
                </Button>
                <Button
                  variant="outline"
                  className="px-8 py-3 border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50 rounded-lg font-semibold transition-all duration-300"
                >
                  <Play className="w-5 h-5 mr-2" />
                  {t('pages.useCasesPage.watchDemo')}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
            <div className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 border border-purple-500/20 rounded-2xl p-8 lg:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {t('pages.useCasesPage.impactTitle')}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                  {t('pages.useCasesPage.impactDesc')}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">{t('pages.useCasesPage.impactStats.savings.value')}</div>
                  <div className="text-gray-400 text-sm">{t('pages.useCasesPage.impactStats.savings.label')}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">{t('pages.useCasesPage.impactStats.companies.value')}</div>
                  <div className="text-gray-400 text-sm">{t('pages.useCasesPage.impactStats.companies.label')}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{t('pages.useCasesPage.impactStats.success.value')}</div>
                  <div className="text-gray-400 text-sm">{t('pages.useCasesPage.impactStats.success.label')}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-400 mb-2">{t('pages.useCasesPage.impactStats.roi.value')}</div>
                  <div className="text-gray-400 text-sm">{t('pages.useCasesPage.impactStats.roi.label')}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use cases section */}
        <section id="case-studies" className="py-16">
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t('pages.useCasesPage.caseStudiesTitle')}
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                {t('pages.useCasesPage.caseStudiesDesc')}
              </p>
            </div>

            <div className="space-y-12">
              {useCases.map((useCase) => (
                <div 
                  key={useCase.id}
                  className="bg-card/80 border border-border/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                  {/* Header with gradient */}
                  <div className={`h-4 bg-gradient-to-r ${useCase.color}`}></div>
                  
                  <div className="p-8 lg:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Left Column - Overview */}
                      <div className="lg:col-span-1">
                        <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                          <img 
                            src={useCase.image} 
                            alt={useCase.imageAlt}
                            className="w-full h-full object-cover transition-opacity duration-300"
                            onLoad={(e) => {
                              // Fade in the image when loaded
                              e.currentTarget.style.opacity = '1';
                            }}
                            onError={(e) => {
                              // Fallback to gradient background if image fails to load
                              const target = e.currentTarget as HTMLImageElement;
                              const fallback = target.nextElementSibling as HTMLElement;
                              if (target && fallback) {
                                target.style.display = 'none';
                                fallback.style.display = 'flex';
                              }
                            }}
                            style={{ opacity: 0 }}
                          />
                          <div 
                            className={`hidden w-full h-full bg-gradient-to-br ${useCase.color} items-center justify-center`}
                          >
                            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                              <useCase.icon className="w-10 h-10 text-white" />
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-2">{useCase.industry}</h3>
                            <p className="text-lg font-semibold text-gray-300 mb-1">{useCase.title}</p>
                            <p className="text-sm text-gray-400">{useCase.subtitle}</p>
                          </div>
                          
                          <div className="bg-card/50 rounded-lg p-4 border border-border/30">
                            <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                              <Users className="w-4 h-4" />
                              <span>{t('pages.useCasesPage.company')}</span>
                            </div>
                            <p className="text-white font-semibold">{useCase.company}</p>
                          </div>
                          
                          <div className="bg-card/50 rounded-lg p-4 border border-border/30">
                            <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                              <Clock className="w-4 h-4" />
                              <span>{t('pages.useCasesPage.implementation')}</span>
                            </div>
                            <p className="text-white font-semibold">{useCase.implementation}</p>
                          </div>
                        </div>
                      </div>

                      {/* Right Column - Details */}
                      <div className="lg:col-span-2">
                        <div className="space-y-6">
                          {/* Challenge & Solution */}
                          <div>
                            <h4 className="text-xl font-bold text-white mb-4">{t('pages.useCasesPage.challengeAndSolution')}</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                                <h5 className="font-semibold text-red-400 mb-2">{t('pages.useCasesPage.challenge')}</h5>
                                <p className="text-gray-300 text-sm">{useCase.challenge}</p>
                              </div>
                              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                                <h5 className="font-semibold text-green-400 mb-2">{t('pages.useCasesPage.solution')}</h5>
                                <p className="text-gray-300 text-sm">{useCase.solution}</p>
                              </div>
                            </div>
                          </div>

                          {/* Results */}
                          <div>
                            <h4 className="text-xl font-bold text-white mb-4">{t('pages.useCasesPage.keyResults')}</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {useCase.results.map((result, index) => (
                                <div key={index} className="flex items-center justify-between p-4 bg-card/50 rounded-lg border border-border/30">
                                  <div className="flex items-center gap-3">
                                    <div className="p-2 bg-purple-500/20 rounded-lg">
                                      <result.icon className="w-4 h-4 text-purple-400" />
                                    </div>
                                    <span className="text-gray-300 text-sm">{result.label}</span>
                                  </div>
                                  <span className="text-purple-400 font-bold text-lg">{result.metric}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Products Used */}
                          <div>
                            <h4 className="text-xl font-bold text-white mb-4">{t('pages.useCasesPage.productsUsed')}</h4>
                            <div className="flex flex-wrap gap-3">
                              {useCase.products.map((product, index) => (
                                <div key={index} className="bg-background border border-border/50 px-4 py-2 rounded-lg text-sm font-medium text-gray-300">
                                  {product}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
            <div className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 border border-purple-500/20 rounded-2xl p-8 lg:p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t('pages.useCasesPage.ctaTitle')}
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {t('pages.useCasesPage.ctaDesc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link to="/contact">
                    <Calendar className="w-5 h-5 mr-2" />
                    {t('pages.useCasesPage.ctaDemo')}
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50 font-semibold py-3 px-8 transition-all duration-300"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  {t('pages.useCasesPage.ctaProducts')}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default UseCases;
