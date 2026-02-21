
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Users, Award, Shield, TrendingUp, Clock, CheckCircle, Target, Eye, Brain, Cpu, Zap, Camera, Sparkles } from "lucide-react";

const About = () => {
  const { t } = useTranslation();

  const pillars = [
    {
      title: t('pages.about.pillars.explore.title'),
      description: t('pages.about.pillars.explore.desc'),
      icon: Brain,
      color: 'from-purple-500 to-violet-500'
    },
    {
      title: t('pages.about.pillars.innovate.title'),
      description: t('pages.about.pillars.innovate.desc'),
      icon: Sparkles,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: t('pages.about.pillars.transform.title'),
      description: t('pages.about.pillars.transform.desc'),
      icon: Zap,
      color: 'from-cyan-500 to-teal-500'
    }
  ];

  const stats = [
    {
      stat: t('pages.about.stats.manual.stat'),
      label: t('pages.about.stats.manual.label'),
      color: 'text-red-400',
      icon: Users,
      description: t('pages.about.stats.manual.desc')
    },
    {
      stat: t('pages.about.stats.data.stat'),
      label: t('pages.about.stats.data.label'),
      color: 'text-orange-400',
      icon: Clock,
      description: t('pages.about.stats.data.desc')
    },
    {
      stat: t('pages.about.stats.delay.stat'),
      label: t('pages.about.stats.delay.label'),
      color: 'text-yellow-400',
      icon: Target,
      description: t('pages.about.stats.delay.desc')
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero */}
        <section className="relative pt-24 pb-16 md:py-32 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/5 via-blue-600/5 to-cyan-600/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}} />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">{t('pages.about.heading')}</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('pages.about.subtitle')}</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                {t('pages.about.description')}
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                {(t('pages.about.tags', { returnObjects: true }) as string[]).map((tag, index) => {
                  const icons = [Brain, Eye, Cpu];
                  const colors = ['text-purple-400', 'text-blue-400', 'text-cyan-400'];
                  const Icon = icons[index];
                  return (
                    <span key={index} className="flex items-center gap-2">
                      <Icon className={`w-4 h-4 ${colors[index]}`} />
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t('pages.about.missionTitle')}</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                {t('pages.about.missionDesc')}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                <div key={index} className="group relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${pillar.color} opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-opacity duration-300`}></div>
                  <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center shadow-xl group-hover:border-white/20 transition-all duration-300">
                    <div className={`mx-auto w-16 h-16 bg-gradient-to-r ${pillar.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <pillar.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{pillar.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Ciro / The Real Cost of Latency */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                {(t('pages.about.whyDeepTech') as string).split('Deep Tech')[0]}
                <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">Deep Tech</span>
                {(t('pages.about.whyDeepTech') as string).split('Deep Tech')[1]}
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                {t('pages.about.whyDeepTechDesc')}
              </p>
              <p className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-12">
                {t('pages.about.obsolescence')}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((item, index) => (
                  <div key={index} className="group">
                    <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-2xl p-8 text-center shadow-xl group-hover:border-white/20 transition-all duration-300">
                      <item.icon className={`w-12 h-12 mb-4 ${item.color} mx-auto group-hover:scale-110 transition-transform duration-300`} />
                      <div className={`text-4xl font-black ${item.color} mb-2`}>{item.stat}</div>
                      <div className="text-lg font-semibold text-white mb-3">{item.label}</div>
                      <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t('pages.about.labsTitle')}</h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {t('pages.about.labsDesc')}
                </p>
              </div>
              
              <div className="space-y-12">
                <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-10 shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6">{t('pages.about.deepTechTitle')}</h3>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    {t('pages.about.deepTechP1')}
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {t('pages.about.deepTechP2')}
                  </p>
                </div>

                <div className="bg-gradient-to-r from-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-10 shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Camera className="w-8 h-8 text-blue-400" />
                    {t('pages.about.cvTitle')}
                  </h3>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    {t('pages.about.cvP1')}
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {t('pages.about.cvP2')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section className="py-20 bg-gradient-to-br from-slate-800/50 via-purple-900/20 to-blue-900/20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
                {t('pages.about.futureTitle')} <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">{t('pages.about.futureHighlight')}</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                {t('pages.about.futureDesc')}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="group">
                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-8 shadow-xl group-hover:border-purple-400/40 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{t('pages.about.aiOverlays.title')}</h3>
                    <p className="text-gray-300 leading-relaxed">
                      {t('pages.about.aiOverlays.desc')}
                    </p>
                  </div>
                </div>
                
                <div className="group">
                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 shadow-xl group-hover:border-cyan-400/40 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Cpu className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{t('pages.about.robotics.title')}</h3>
                    <p className="text-gray-300 leading-relaxed">
                      {t('pages.about.robotics.desc')}
                    </p>
                  </div>
                </div>
              </div>

              <blockquote className="text-2xl text-gray-300 font-medium italic leading-relaxed max-w-4xl mx-auto">
                {t('pages.about.quote')}
              </blockquote>
            </div>
          </div>
        </section>

        {/* Video section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{t('pages.about.videoTitle')}</h2>
              <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                {t('pages.about.videoDesc')}
              </p>
              <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl aspect-video overflow-hidden shadow-2xl">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/cyxpYPvdhL0?autoplay=0&rel=0"
                  title="Ciro Labs: Innovation in Industrial AI"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-r from-purple-500/80 to-cyan-500/80 backdrop-blur-sm border border-white/10 rounded-3xl p-12 shadow-2xl text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t('pages.about.ctaTitle')}</h2>
                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                  {t('pages.about.ctaDesc')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg" asChild>
                    <Link to="/contact">{t('pages.about.ctaCollaboration')}</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg">
                    {t('pages.about.ctaPartnerships')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
