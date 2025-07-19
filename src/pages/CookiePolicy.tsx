import React, { useState } from 'react';
import { Cookie, Settings, Info, Shield, Clock, Database, Users, Target } from 'lucide-react';
import { CookieManager } from '../lib/cookieManager';

const CookiePolicy: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const cookieSettings = CookieManager.getCookieSettings();

  const categories = [
    {
      id: 'necessary',
      name: 'Necessary Cookies',
      description: 'Essential for the website to function properly',
      color: 'red',
      icon: Shield,
      alwaysActive: true
    },
    {
      id: 'analytics',
      name: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website',
      color: 'blue',
      icon: Database
    },
    {
      id: 'marketing',
      name: 'Marketing Cookies',
      description: 'Used to track visitors across websites for marketing purposes',
      color: 'green',
      icon: Target
    },
    {
      id: 'preferences',
      name: 'Preferences Cookies',
      description: 'Allow the website to remember your preferences',
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
              <h1 className="text-4xl font-bold">Cookie Policy</h1>
            </div>
            <p className="text-xl text-green-100">
              Learn about how we use cookies and similar technologies to enhance your experience.
            </p>
            <p className="text-sm text-green-200 mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-8">
              {[
                { id: 'overview', name: 'Overview' },
                { id: 'categories', name: 'Cookie Categories' },
                { id: 'details', name: 'Detailed List' },
                { id: 'manage', name: 'Manage Cookies' }
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <Info className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <p className="text-gray-700 leading-relaxed">
                          Cookies are small text files that are stored on your device when you visit a website. 
                          They help websites remember information about your visit, such as your preferred language 
                          and other settings, which can make your next visit easier and the site more useful to you.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Cookies</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Essential Functionality</h4>
                          <p className="text-gray-600 text-sm">Keep you signed in and maintain your session</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Performance & Analytics</h4>
                          <p className="text-gray-600 text-sm">Understand how visitors use our website</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Personalization</h4>
                          <p className="text-gray-600 text-sm">Remember your preferences and settings</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Marketing</h4>
                          <p className="text-gray-600 text-sm">Show relevant advertisements and content</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Cookie Choices</h2>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <Settings className="w-6 h-6 text-green-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Control Your Preferences</h3>
                        <p className="text-gray-700 mb-4">
                          You have several options for managing cookies on our website:
                        </p>
                        <ul className="text-gray-700 space-y-2">
                          <li>• <strong>Browser Settings:</strong> Most browsers allow you to control cookies through their settings</li>
                          <li>• <strong>Cookie Banner:</strong> Use our cookie consent banner to manage preferences</li>
                          <li>• <strong>Opt-out Tools:</strong> Use third-party opt-out tools for advertising cookies</li>
                          <li>• <strong>Contact Us:</strong> Reach out if you need help managing your preferences</li>
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
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookie Categories</h2>
                
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
                              Always Active
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Purpose</h4>
                            <p className="text-gray-600 text-sm">
                              {category.id === 'necessary' && 'These cookies are essential for the website to function and cannot be disabled.'}
                              {category.id === 'analytics' && 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.'}
                              {category.id === 'marketing' && 'These cookies are used to track visitors across websites to display relevant advertisements and measure marketing effectiveness.'}
                              {category.id === 'preferences' && 'These cookies allow the website to remember choices you make and provide enhanced, more personal features.'}
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Examples</h4>
                            <ul className="text-gray-600 text-sm space-y-1">
                              {categoryCookies.slice(0, 3).map(([name, setting]) => (
                                <li key={name}>• {setting.name}</li>
                              ))}
                              {categoryCookies.length > 3 && (
                                <li>• And {categoryCookies.length - 3} more...</li>
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
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Cookie List</h2>
                
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
                                    Duration: {setting.duration}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Users className="w-3 h-3" />
                                    Provider: {setting.provider}
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
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Manage Your Cookie Preferences</h2>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <Settings className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Cookie Settings</h3>
                      <p className="text-gray-700 mb-4">
                        You can manage your cookie preferences at any time. Click the button below to open our cookie settings panel.
                      </p>
                      <button
                        onClick={() => {
                          // This would typically trigger the cookie banner settings modal
                          alert('Cookie settings would open here. In a real implementation, this would trigger the CookieBanner settings modal.');
                        }}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Open Cookie Settings
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Browser Settings</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      You can also control cookies through your browser settings:
                    </p>
                    <ul className="text-gray-600 text-sm space-y-2">
                      <li>• <strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                      <li>• <strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                      <li>• <strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                      <li>• <strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Third-Party Opt-Out</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      For advertising cookies, you can use these opt-out tools:
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
                      <h3 className="font-semibold text-gray-900 mb-2">Important Note</h3>
                      <p className="text-gray-700">
                        Disabling certain cookies may affect the functionality of our website. 
                        Necessary cookies cannot be disabled as they are essential for the website to function properly.
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