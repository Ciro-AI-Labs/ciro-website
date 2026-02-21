import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Cookie, Settings, Info, Shield, Clock, Database, Users, Target } from 'lucide-react';
import { CookieManager } from '../lib/cookieManager';

const CookiePolicy: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('overview');
  const cookieSettings = CookieManager.getCookieSettings();

  const categories = [
    {
      id: 'necessary',
      name: t('pages.cookiePolicy.categories.necessary.name'),
      description: t('pages.cookiePolicy.categories.necessary.desc'),
      color: 'red',
      icon: Shield,
      alwaysActive: true
    },
    {
      id: 'analytics',
      name: t('pages.cookiePolicy.categories.analytics.name'),
      description: t('pages.cookiePolicy.categories.analytics.desc'),
      color: 'blue',
      icon: Database
    },
    {
      id: 'marketing',
      name: t('pages.cookiePolicy.categories.marketing.name'),
      description: t('pages.cookiePolicy.categories.marketing.desc'),
      color: 'green',
      icon: Target
    },
    {
      id: 'preferences',
      name: t('pages.cookiePolicy.categories.preferences.name'),
      description: t('pages.cookiePolicy.categories.preferences.desc'),
      color: 'purple',
      icon: Settings
    }
  ];

  const getCategoryCookies = (category: string) => {
    return Object.entries(cookieSettings).filter(([_, setting]) => setting.category === category);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 px-8 py-12 text-white">
            <div className="flex items-center gap-4 mb-4">
              <Cookie className="w-12 h-12" />
              <h1 className="text-4xl font-bold">{t('pages.cookiePolicy.title')}</h1>
            </div>
            <p className="text-xl text-green-100">
              {t('pages.cookiePolicy.subtitle')}
            </p>
            <p className="text-sm text-green-200 mt-4">
              {t('pages.cookiePolicy.lastUpdated')} {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-8">
              {[
                { id: 'overview', name: t('pages.cookiePolicy.tabs.overview') },
                { id: 'categories', name: t('pages.cookiePolicy.tabs.categories') },
                { id: 'details', name: t('pages.cookiePolicy.tabs.details') },
                { id: 'manage', name: t('pages.cookiePolicy.tabs.manage') }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="px-8 py-12">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('pages.cookiePolicy.whatAreCookies')}</h2>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <Info className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <p className="text-gray-700 leading-relaxed">
                          {t('pages.cookiePolicy.whatAreCookiesDesc')}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('pages.cookiePolicy.howWeUse')}</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{t('pages.cookiePolicy.howWeUseItems.essential.title')}</h4>
                          <p className="text-gray-600 text-sm">{t('pages.cookiePolicy.howWeUseItems.essential.desc')}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{t('pages.cookiePolicy.howWeUseItems.performance.title')}</h4>
                          <p className="text-gray-600 text-sm">{t('pages.cookiePolicy.howWeUseItems.performance.desc')}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{t('pages.cookiePolicy.howWeUseItems.personalization.title')}</h4>
                          <p className="text-gray-600 text-sm">{t('pages.cookiePolicy.howWeUseItems.personalization.desc')}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{t('pages.cookiePolicy.howWeUseItems.marketing.title')}</h4>
                          <p className="text-gray-600 text-sm">{t('pages.cookiePolicy.howWeUseItems.marketing.desc')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('pages.cookiePolicy.yourChoices')}</h2>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <Settings className="w-6 h-6 text-green-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{t('pages.cookiePolicy.controlPreferences')}</h3>
                        <p className="text-gray-700 mb-4">
                          {t('pages.cookiePolicy.controlDesc')}
                        </p>
                        <ul className="text-gray-700 space-y-2">
                          <li>• <strong>Browser Settings:</strong> {t('pages.cookiePolicy.controlItems.browser')}</li>
                          <li>• <strong>Cookie Banner:</strong> {t('pages.cookiePolicy.controlItems.banner')}</li>
                          <li>• <strong>Opt-out Tools:</strong> {t('pages.cookiePolicy.controlItems.optout')}</li>
                          <li>• <strong>Contact Us:</strong> {t('pages.cookiePolicy.controlItems.contact')}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {/* Categories Tab */}
            {activeTab === 'categories' && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('pages.cookiePolicy.categoriesTitle')}</h2>
                
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  const categoryCookies = getCategoryCookies(category.id);
                  
                  return (
                    <div key={category.id} className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className={`bg-${category.color}-50 border-b border-${category.color}-200 p-6`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 bg-${category.color}-500 rounded-lg flex items-center justify-center`}>
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
                              <p className="text-gray-600">{category.description}</p>
                            </div>
                          </div>
                          {category.alwaysActive && (
                            <span className="px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full">
                              {t('pages.cookiePolicy.categories.necessary.alwaysActive')}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">{t('pages.cookiePolicy.purpose')}</h4>
                            <p className="text-gray-600 text-sm">
                              {t(`pages.cookiePolicy.categories.${category.id}.purpose`)}
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">{t('pages.cookiePolicy.examples')}</h4>
                            <ul className="text-gray-600 text-sm space-y-1">
                              {categoryCookies.slice(0, 3).map(([name, setting]) => (
                                <li key={name}>• {setting.name}</li>
                              ))}
                              {categoryCookies.length > 3 && (
                                <li>• {t('pages.cookiePolicy.andMore', { count: categoryCookies.length - 3 })}</li>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Details Tab */}
            {activeTab === 'details' && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('pages.cookiePolicy.detailedList')}</h2>
                
                {categories.map((category) => {
                  const categoryCookies = getCategoryCookies(category.id);
                  
                  return (
                    <div key={category.id} className="border border-gray-200 rounded-lg">
                      <div className={`bg-${category.color}-50 border-b border-${category.color}-200 p-4`}>
                        <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                      </div>
                      
                      <div className="divide-y divide-gray-200">
                        {categoryCookies.map(([name, setting]) => (
                          <div key={name} className="p-4">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h4 className="font-medium text-gray-900">{setting.name}</h4>
                                <p className="text-sm text-gray-600 mt-1">{setting.description}</p>
                                <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {t('pages.cookiePolicy.duration')} {setting.duration}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Users className="w-3 h-3" />
                                    {t('pages.cookiePolicy.provider')} {setting.provider}
                                  </span>
                                </div>
                              </div>
                              <code className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">
                                {name}
                              </code>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Manage Tab */}
            {activeTab === 'manage' && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('pages.cookiePolicy.manageTitle')}</h2>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <Settings className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{t('pages.cookiePolicy.cookieSettings')}</h3>
                      <p className="text-gray-700 mb-4">
                        {t('pages.cookiePolicy.cookieSettingsDesc')}
                      </p>
                      <button
                        onClick={() => {
                          // This would typically trigger the cookie banner settings modal
                          alert('Cookie settings would open here. In a real implementation, this would trigger the CookieBanner settings modal.');
                        }}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        {t('pages.cookiePolicy.openCookieSettings')}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">{t('pages.cookiePolicy.browserSettings')}</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {t('pages.cookiePolicy.browserSettingsDesc')}
                    </p>
                    <ul className="text-gray-600 text-sm space-y-2">
                      <li>• <strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                      <li>• <strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                      <li>• <strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                      <li>• <strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">{t('pages.cookiePolicy.thirdPartyOptOut')}</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {t('pages.cookiePolicy.thirdPartyDesc')}
                    </p>
                    <ul className="text-gray-600 text-sm space-y-2">
                      <li>• <a href="https://optout.aboutads.info/" className="text-blue-600 hover:underline">Digital Advertising Alliance</a></li>
                      <li>• <a href="https://www.youronlinechoices.com/" className="text-blue-600 hover:underline">Your Online Choices</a></li>
                      <li>• <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline">Google Analytics Opt-out</a></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <Info className="w-6 h-6 text-yellow-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{t('pages.cookiePolicy.importantNote')}</h3>
                      <p className="text-gray-700">
                        {t('pages.cookiePolicy.importantNoteDesc')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy; 