
import { CheckCircle, TrendingUp, Clock, DollarSign, AlertTriangle, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

const Challenges = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-50 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-orange-600 bg-orange-50 border border-orange-200 rounded-full mb-6 hover:border-orange-300 transition-all duration-300">
            <AlertTriangle className="w-4 h-4" />
            <span>{t('challenges.badge')}</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              {t('challenges.heading1')}
            </span>
            <br />
            <span className="text-slate-900">
              {t('challenges.heading2')}
            </span>
          </h2>

          <p className="text-lg md:text-xl lg:text-lg xl:text-lg 2xl:text-xl text-slate-600 mb-8 leading-relaxed">
            {t('challenges.description')}
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Pain Point 1: Data Silos */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-red-50 rounded-lg group-hover:bg-red-100 transition-colors duration-300">
                <TrendingUp className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">{t('challenges.painPoints.silos.title')}</h3>
                <p className="text-red-500 text-sm font-medium">{t('challenges.painPoints.silos.loss')}</p>
              </div>
            </div>

            <p className="text-slate-600 mb-6 leading-relaxed">
              <span className="text-red-500 font-semibold">{t('challenges.painPoints.silos.stat')}</span> {t('challenges.painPoints.silos.desc')}
            </p>

            <div className="space-y-3">
              {(t('challenges.painPoints.silos.bullets', { returnObjects: true }) as string[]).map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-slate-500">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">{t('challenges.painPoints.silos.barLabel')}</span>
                <span className="text-red-500 font-bold">{t('challenges.painPoints.silos.barValue')}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2 overflow-hidden">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full transition-all duration-1000" style={{ width: "13%" }}></div>
              </div>
            </div>
          </div>

          {/* Pain Point 2: Slow Response Times */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-yellow-50 rounded-lg group-hover:bg-yellow-100 transition-colors duration-300">
                <Clock className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">{t('challenges.painPoints.slow.title')}</h3>
                <p className="text-yellow-500 text-sm font-medium">{t('challenges.painPoints.slow.loss')}</p>
              </div>
            </div>

            <p className="text-slate-600 mb-6 leading-relaxed">
              {t('challenges.painPoints.slow.descPre')} <span className="text-yellow-500 font-semibold">{t('challenges.painPoints.slow.descDelay')}</span> {t('challenges.painPoints.slow.descPost')}
            </p>

            <div className="space-y-3">
              {(t('challenges.painPoints.slow.bullets', { returnObjects: true }) as string[]).map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-slate-500">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">{t('challenges.painPoints.slow.barLabel')}</span>
                <span className="text-yellow-500 font-bold">{t('challenges.painPoints.slow.barValue')}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2 overflow-hidden">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full transition-all duration-1000" style={{ width: "85%" }}></div>
              </div>
            </div>
          </div>

          {/* Pain Point 3: Integration Bottlenecks */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-orange-50 rounded-lg group-hover:bg-orange-100 transition-colors duration-300">
                <Zap className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">{t('challenges.painPoints.integration.title')}</h3>
                <p className="text-orange-500 text-sm font-medium">{t('challenges.painPoints.integration.loss')}</p>
              </div>
            </div>

            <p className="text-slate-600 mb-6 leading-relaxed">
              <span className="text-orange-500 font-semibold">{t('challenges.painPoints.integration.stat')}</span> {t('challenges.painPoints.integration.descPre')}
            </p>

            <div className="space-y-3">
              {(t('challenges.painPoints.integration.bullets', { returnObjects: true }) as string[]).map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-slate-500">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">{t('challenges.painPoints.integration.barLabel')}</span>
                <span className="text-orange-500 font-bold">{t('challenges.painPoints.integration.barValue')}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2 overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-1000" style={{ width: "27%" }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Why CIRO Section */}
        <div className="bg-slate-50 border border-gray-200 rounded-2xl p-8 lg:p-12 shadow-sm relative overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-green-600 bg-green-50 border border-green-200 rounded-full mb-6">
              <CheckCircle className="w-4 h-4" />
              <span>{t('challenges.whyCiro.badge')}</span>
            </div>

            <h3 className="text-3xl md:text-4xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-blue-500 bg-clip-text text-transparent">
                {t('challenges.whyCiro.heading1')}
              </span>
              <br />
              <span className="text-slate-900">
                {t('challenges.whyCiro.heading2')}
              </span>
            </h3>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {t('challenges.whyCiro.descPre')}
              <span className="text-green-600 font-semibold"> {t('challenges.whyCiro.descHighlight1')}</span> {t('challenges.whyCiro.descMid')}
              <span className="text-green-600 font-semibold"> {t('challenges.whyCiro.descHighlight2')}</span>.
            </p>

            {/* Key Differentiators */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-green-50 border border-green-200 rounded-lg flex-shrink-0">
                  <Zap className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">{t('challenges.whyCiro.differentiators.latency.title')}</h4>
                  <p className="text-slate-500 text-sm">{t('challenges.whyCiro.differentiators.latency.desc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-50 border border-blue-200 rounded-lg flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">{t('challenges.whyCiro.differentiators.cost.title')}</h4>
                  <p className="text-slate-500 text-sm">{t('challenges.whyCiro.differentiators.cost.desc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-purple-50 border border-purple-200 rounded-lg flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">{t('challenges.whyCiro.differentiators.sources.title')}</h4>
                  <p className="text-slate-500 text-sm">{t('challenges.whyCiro.differentiators.sources.desc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-emerald-50 border border-emerald-200 rounded-lg flex-shrink-0">
                  <DollarSign className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">{t('challenges.whyCiro.differentiators.savings.title')}</h4>
                  <p className="text-slate-500 text-sm">{t('challenges.whyCiro.differentiators.savings.desc')}</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2">
                <span>{t('challenges.whyCiro.ctaAction')}</span>
                <TrendingUp className="w-4 h-4" />
              </a>
              <a href="/contact" className="border border-gray-300 hover:border-blue-300 text-slate-600 hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center gap-2">
                <span>{t('challenges.whyCiro.ctaRoi')}</span>
                <DollarSign className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
