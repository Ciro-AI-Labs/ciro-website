import React from 'react';
import { Shield, Eye, Lock, Users, Database, Globe, Mail, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-12 text-white">
            <div className="flex items-center gap-4 mb-4">
              <Shield className="w-12 h-12" />
              <h1 className="text-4xl font-bold">{t('pages.privacyPolicy.title')}</h1>
            </div>
            <p className="text-xl text-blue-100">
              {t('pages.privacyPolicy.subtitle')}
            </p>
            <p className="text-sm text-blue-200 mt-4">
              {t('pages.privacyPolicy.lastUpdated')} {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Content */}
          <div className="px-8 py-12 space-y-12">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('pages.privacyPolicy.introTitle')}</h2>
              <p className="text-gray-600 leading-relaxed">
                {t('pages.privacyPolicy.introP1')}
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                {t('pages.privacyPolicy.introP2')}
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('pages.privacyPolicy.collectTitle')}</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-6 h-6 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-900">{t('pages.privacyPolicy.personalInfo')}</h3>
                  </div>
                  <ul className="text-gray-600 space-y-2">
                    {(t('pages.privacyPolicy.personalItems', { returnObjects: true }) as string[]).map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="w-6 h-6 text-green-600" />
                    <h3 className="text-lg font-semibold text-gray-900">{t('pages.privacyPolicy.usageInfo')}</h3>
                  </div>
                  <ul className="text-gray-600 space-y-2">
                    {(t('pages.privacyPolicy.usageItems', { returnObjects: true }) as string[]).map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('pages.privacyPolicy.useTitle')}</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{t('pages.privacyPolicy.useItems.provide.title')}</h4>
                      <p className="text-gray-600 text-sm">{t('pages.privacyPolicy.useItems.provide.desc')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{t('pages.privacyPolicy.useItems.communication.title')}</h4>
                      <p className="text-gray-600 text-sm">{t('pages.privacyPolicy.useItems.communication.desc')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{t('pages.privacyPolicy.useItems.improve.title')}</h4>
                      <p className="text-gray-600 text-sm">{t('pages.privacyPolicy.useItems.improve.desc')}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{t('pages.privacyPolicy.useItems.marketing.title')}</h4>
                      <p className="text-gray-600 text-sm">{t('pages.privacyPolicy.useItems.marketing.desc')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{t('pages.privacyPolicy.useItems.security.title')}</h4>
                      <p className="text-gray-600 text-sm">{t('pages.privacyPolicy.useItems.security.desc')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{t('pages.privacyPolicy.useItems.legal.title')}</h4>
                      <p className="text-gray-600 text-sm">{t('pages.privacyPolicy.useItems.legal.desc')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('pages.privacyPolicy.sharingTitle')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('pages.privacyPolicy.sharingDesc')}
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <Lock className="w-6 h-6 text-yellow-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t('pages.privacyPolicy.limitedSharing')}</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>• <strong>{t('pages.privacyPolicy.sharingLabels.providers')}</strong> {t('pages.privacyPolicy.sharingItems.providers')}</li>
                      <li>• <strong>{t('pages.privacyPolicy.sharingLabels.legal')}</strong> {t('pages.privacyPolicy.sharingItems.legal')}</li>
                      <li>• <strong>{t('pages.privacyPolicy.sharingLabels.transfers')}</strong> {t('pages.privacyPolicy.sharingItems.transfers')}</li>
                      <li>• <strong>{t('pages.privacyPolicy.sharingLabels.consent')}</strong> {t('pages.privacyPolicy.sharingItems.consent')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('pages.privacyPolicy.securityTitle')}</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t('pages.privacyPolicy.securitySubtitle')}</h3>
                    <p className="text-gray-600 mb-4">
                      {t('pages.privacyPolicy.securityDesc')}
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      {(t('pages.privacyPolicy.securityItems', { returnObjects: true }) as string[]).map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('pages.privacyPolicy.rightsTitle')}</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Eye className="w-5 h-5 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{t('pages.privacyPolicy.rights.access.title')}</h4>
                      <p className="text-gray-600 text-sm">{t('pages.privacyPolicy.rights.access.desc')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Database className="w-5 h-5 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{t('pages.privacyPolicy.rights.portability.title')}</h4>
                      <p className="text-gray-600 text-sm">{t('pages.privacyPolicy.rights.portability.desc')}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-red-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{t('pages.privacyPolicy.rights.marketing.title')}</h4>
                      <p className="text-gray-600 text-sm">{t('pages.privacyPolicy.rights.marketing.desc')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-red-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{t('pages.privacyPolicy.rights.deletion.title')}</h4>
                      <p className="text-gray-600 text-sm">{t('pages.privacyPolicy.rights.deletion.desc')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('pages.privacyPolicy.cookiesTitle')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('pages.privacyPolicy.cookiesDesc')}
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600">
                  <strong>{t('pages.privacyPolicy.cookieCategories')}</strong> {t('pages.privacyPolicy.cookieCategoriesDesc')}{' '}
                  {t('pages.privacyPolicy.cookiePolicyLinkPrefix')} <a href="/cookie-policy" className="text-blue-600 hover:underline">{t('pages.privacyPolicy.cookiePolicyLink')}</a> {t('pages.privacyPolicy.cookieDetailedInfo')}
                </p>
              </div>
            </section>

            {/* International Transfers */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('pages.privacyPolicy.transfersTitle')}</h2>
              <div className="flex items-start gap-3">
                <Globe className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <p className="text-gray-600 leading-relaxed">
                    {t('pages.privacyPolicy.transfersDesc')}
                  </p>
                </div>
              </div>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('pages.privacyPolicy.childrenTitle')}</h2>
              <p className="text-gray-600 leading-relaxed">
                {t('pages.privacyPolicy.childrenDesc')}
              </p>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('pages.privacyPolicy.changesTitle')}</h2>
              <p className="text-gray-600 leading-relaxed">
                {t('pages.privacyPolicy.changesDesc')}
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('pages.privacyPolicy.contactTitle')}</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600 mb-4">
                  {t('pages.privacyPolicy.contactDesc')}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">{t('pages.privacyPolicy.emailLabel')}</p>
                      <p className="text-gray-600">privacy@ciroai.us</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">{t('pages.privacyPolicy.phoneLabel')}</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>{t('pages.privacyPolicy.dpoLabel')}</strong> {t('pages.privacyPolicy.dpoNote')}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 