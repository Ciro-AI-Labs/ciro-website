import { Users, Award, Globe, Brain, Building2, Rocket, Presentation } from "lucide-react";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-full mb-6">
              <Building2 className="w-4 h-4" />
              {t('aboutSection.badge')}
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-slate-900">{t('aboutSection.heading1')}</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                {t('aboutSection.heading2')}
              </span>
            </h2>

            <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
              {t('aboutSection.description')}
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{t('aboutSection.missionTitle')}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                {t('aboutSection.missionP1')}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {t('aboutSection.missionP2')}
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{t('aboutSection.visionTitle')}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                {t('aboutSection.visionP1')}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {t('aboutSection.visionP2')}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Users, value: "25+", labelKey: "aboutSection.stats.team" },
              { icon: Award, value: "NVIDIA", labelKey: "aboutSection.stats.nvidia" },
              { icon: Rocket, value: "5", labelKey: "aboutSection.stats.products" },
              { icon: Globe, value: "3", labelKey: "aboutSection.stats.countries" },
            ].map((stat) => (
              <div key={t(stat.labelKey)} className="text-center bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <stat.icon className="w-6 h-6 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500">{t(stat.labelKey)}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              {t('aboutSection.ctaHeading')}
            </h3>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-8">
              {t('aboutSection.ctaDescription')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center gap-2">
                {t('aboutSection.ctaContact')}
              </a>
              <a href="/careers" className="border border-gray-300 hover:border-blue-300 text-slate-600 hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center gap-2">
                <Users className="w-4 h-4" />
                {t('aboutSection.ctaCareers')}
              </a>
              <a href="https://pitch.ciroai.us" target="_blank" rel="noopener noreferrer" className="border border-gray-300 hover:border-blue-300 text-slate-600 hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center gap-2">
                <Presentation className="w-4 h-4" />
                {t('aboutSection.ctaPitchDeck')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
