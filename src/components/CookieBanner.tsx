import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { X, Settings, Check, AlertCircle, Info } from 'lucide-react';
import { CookieManager, CookieConsent } from '../lib/cookieManager';

interface CookieBannerProps {
  onConsentChange?: (consent: CookieConsent) => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onConsentChange }) => {
  const { t } = useTranslation();
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
    timestamp: new Date().toISOString(),
    version: '1.0'
  });

  useEffect(() => {
    // Don't show cookie banner on admin page
    if (window.location.pathname === '/admin') {
      return;
    }

    const currentConsent = CookieManager.getConsent();
    if (currentConsent) {
      setConsent(currentConsent);
    }
    
    if (CookieManager.isConsentRequired()) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    CookieManager.acceptAll();
    const newConsent = CookieManager.getConsent()!;
    setConsent(newConsent);
    setShowBanner(false);
    onConsentChange?.(newConsent);
  };

  const handleRejectAll = () => {
    CookieManager.rejectAll();
    const newConsent = CookieManager.getConsent()!;
    setConsent(newConsent);
    setShowBanner(false);
    onConsentChange?.(newConsent);
  };

  const handleSaveSettings = () => {
    CookieManager.saveConsent(consent);
    setShowSettings(false);
    setShowBanner(false);
    onConsentChange?.(consent);
  };

  const handleConsentChange = (category: keyof CookieConsent, value: boolean) => {
    setConsent(prev => ({
      ...prev,
      [category]: value
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Main Cookie Banner */}
      {!showSettings && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {t('cookieBanner.title')}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  {t('cookieBanner.description')}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <button
                  onClick={() => setShowSettings(true)}
                  className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Settings className="w-4 h-4" />
                  {t('cookieBanner.customize')}
                </button>
                <button
                  onClick={handleRejectAll}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {t('cookieBanner.rejectAll')}
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {t('cookieBanner.acceptAll')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{t('cookieBanner.settingsTitle')}</h2>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Necessary Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-red-500 rounded flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{t('cookieBanner.necessary.title')}</h3>
                        <p className="text-sm text-gray-600">{t('cookieBanner.necessary.desc')}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">{t('cookieBanner.necessary.alwaysActive')}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    {t('cookieBanner.necessary.detail')}
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-blue-500 rounded flex items-center justify-center">
                        <Info className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{t('cookieBanner.analytics.title')}</h3>
                        <p className="text-sm text-gray-600">{t('cookieBanner.analytics.desc')}</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={consent.analytics}
                        onChange={(e) => handleConsentChange('analytics', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600">
                    {t('cookieBanner.analytics.detail')}
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-green-500 rounded flex items-center justify-center">
                        <Info className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{t('cookieBanner.marketing.title')}</h3>
                        <p className="text-sm text-gray-600">{t('cookieBanner.marketing.desc')}</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={consent.marketing}
                        onChange={(e) => handleConsentChange('marketing', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600">
                    {t('cookieBanner.marketing.detail')}
                  </p>
                </div>

                {/* Preferences Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-purple-500 rounded flex items-center justify-center">
                        <Info className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{t('cookieBanner.preferences.title')}</h3>
                        <p className="text-sm text-gray-600">{t('cookieBanner.preferences.desc')}</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={consent.preferences}
                        onChange={(e) => handleConsentChange('preferences', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600">
                    {t('cookieBanner.preferences.detail')}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <button
                  onClick={handleRejectAll}
                  className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {t('cookieBanner.rejectAll')}
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {t('cookieBanner.acceptAll')}
                </button>
                <button
                  onClick={handleSaveSettings}
                  className="flex-1 px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
                >
                  {t('cookieBanner.saveSettings')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}; 