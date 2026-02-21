import { TrendingUp, Truck, Shield, Zap, Clock, DollarSign, Users, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const UseCases = () => {
  const { t } = useTranslation();

  const useCases = [
    {
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Industrial safety monitoring with computer vision cameras and protective equipment",
      iconBg: "bg-green-500/20",
      iconColor: "text-green-400",
      gradient: "from-green-600/20 to-emerald-600/20",
      title: t('useCases.cases.manufacturing.title'),
      subtitle: t('useCases.cases.manufacturing.subtitle'),
      description: t('useCases.cases.manufacturing.description'),
      metrics: [
        { label: t('useCases.cases.manufacturing.metrics.downtime.label'), value: t('useCases.cases.manufacturing.metrics.downtime.value'), icon: Clock },
        { label: t('useCases.cases.manufacturing.metrics.quality.label'), value: t('useCases.cases.manufacturing.metrics.quality.value'), icon: CheckCircle },
        { label: t('useCases.cases.manufacturing.metrics.roi.label'), value: t('useCases.cases.manufacturing.metrics.roi.value'), icon: DollarSign }
      ],
      industry: t('useCases.cases.manufacturing.industry'),
      keyBenefit: t('useCases.cases.manufacturing.keyBenefit'),
      color: "green"
    },
    {
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Modern logistics warehouse with automated sorting and robotics systems",
      iconBg: "bg-blue-500/20",
      iconColor: "text-blue-400",
      gradient: "from-blue-600/20 to-indigo-600/20",
      title: t('useCases.cases.logistics.title'),
      subtitle: t('useCases.cases.logistics.subtitle'),
      description: t('useCases.cases.logistics.description'),
      metrics: [
        { label: t('useCases.cases.logistics.metrics.delivery.label'), value: t('useCases.cases.logistics.metrics.delivery.value'), icon: Clock },
        { label: t('useCases.cases.logistics.metrics.inventory.label'), value: t('useCases.cases.logistics.metrics.inventory.value'), icon: CheckCircle },
        { label: t('useCases.cases.logistics.metrics.implementation.label'), value: t('useCases.cases.logistics.metrics.implementation.value'), icon: Zap }
      ],
      industry: t('useCases.cases.logistics.industry'),
      keyBenefit: t('useCases.cases.logistics.keyBenefit'),
      color: "blue"
    },
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Modern food processing facility with automated production lines",
      iconBg: "bg-purple-500/20",
      iconColor: "text-purple-400",
      gradient: "from-purple-600/20 to-violet-600/20",
      title: t('useCases.cases.safety.title'),
      subtitle: t('useCases.cases.safety.subtitle'),
      description: t('useCases.cases.safety.description'),
      metrics: [
        { label: t('useCases.cases.safety.metrics.incident.label'), value: t('useCases.cases.safety.metrics.incident.value'), icon: Shield },
        { label: t('useCases.cases.safety.metrics.compliance.label'), value: t('useCases.cases.safety.metrics.compliance.value'), icon: CheckCircle },
        { label: t('useCases.cases.safety.metrics.response.label'), value: t('useCases.cases.safety.metrics.response.value'), icon: Zap }
      ],
      industry: t('useCases.cases.safety.industry'),
      keyBenefit: t('useCases.cases.safety.keyBenefit'),
      color: "purple"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-green-600 bg-green-50 border border-green-200 rounded-full mb-6">
              <TrendingUp className="w-4 h-4" />
              <span>{t('useCases.badge')}</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                {t('useCases.heading1')}
              </span>
              <br />
              <span className="text-slate-900">
                {t('useCases.heading2')}
              </span>
            </h2>

            <p className="text-lg md:text-xl lg:text-lg xl:text-lg 2xl:text-xl text-slate-600 mb-8 leading-relaxed max-w-4xl mx-auto">
              {t('useCases.description')}
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {useCases.map((useCase, index) => (
              <div key={index} className="group relative">
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 hover:scale-[1.02]">
                  {/* Header with Image */}
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={useCase.image}
                      alt={useCase.imageAlt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* Floating Elements */}
                    <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1">
                      <span className="text-white text-sm font-semibold">{useCase.industry}</span>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1">
                      <span className="text-white text-sm font-semibold">{useCase.keyBenefit}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{useCase.title}</h3>
                    <p className="text-lg font-semibold text-slate-600 mb-4">{useCase.subtitle}</p>
                    <p className="text-slate-500 leading-relaxed mb-6">{useCase.description}</p>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-1 gap-4 mb-6">
                      {useCase.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 ${useCase.iconBg} rounded-lg`}>
                              <metric.icon className={`w-4 h-4 ${useCase.iconColor}`} />
                            </div>
                            <span className="text-slate-500 text-sm">{metric.label}</span>
                          </div>
                          <span className={`text-${useCase.color}-400 font-bold text-lg`}>{metric.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Success Indicator */}
                    <div className="flex items-center gap-2 text-green-600 text-sm font-semibold">
                      <CheckCircle className="w-4 h-4" />
                      <span>{t('useCases.successfullyImplemented')}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Impact Summary */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 lg:p-12 shadow-sm">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                {t('useCases.impactTitle')}
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
                {t('useCases.impactDescription')}
              </p>
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{t('useCases.impactStats.savings.value')}</div>
                <div className="text-slate-500 text-sm">{t('useCases.impactStats.savings.label')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{t('useCases.impactStats.companies.value')}</div>
                <div className="text-slate-500 text-sm">{t('useCases.impactStats.companies.label')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">{t('useCases.impactStats.success.value')}</div>
                <div className="text-slate-500 text-sm">{t('useCases.impactStats.success.label')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">{t('useCases.impactStats.roiPeriod.value')}</div>
                <div className="text-slate-500 text-sm">{t('useCases.impactStats.roiPeriod.label')}</div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/use-cases" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2">
                  <span>{t('useCases.ctaStories')}</span>
                  <TrendingUp className="w-4 h-4" />
                </a>
                <a href="/contact" className="border border-gray-300 hover:border-blue-300 text-slate-600 hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center gap-2">
                  <span>{t('useCases.ctaImpact')}</span>
                  <DollarSign className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
