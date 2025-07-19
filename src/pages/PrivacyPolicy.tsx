import React from 'react';
import { Shield, Eye, Lock, Users, Database, Globe, Mail, Phone } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-12 text-white">
            <div className="flex items-center gap-4 mb-4">
              <Shield className="w-12 h-12" />
              <h1 className="text-4xl font-bold">Privacy Policy</h1>
            </div>
            <p className="text-xl text-blue-100">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-blue-200 mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Content */}
          <div className="px-8 py-12 space-y-12">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                Ciro AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us in any way.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Information We Collect</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-6 h-6 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                  </div>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Name and contact information</li>
                    <li>• Email address</li>
                    <li>• Company or organization</li>
                    <li>• Job title or role</li>
                    <li>• Communication preferences</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="w-6 h-6 text-green-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Usage Information</h3>
                  </div>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Website usage and analytics</li>
                    <li>• Device and browser information</li>
                    <li>• IP address and location data</li>
                    <li>• Session and interaction data</li>
                    <li>• Form submissions and preferences</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Provide Services</h4>
                      <p className="text-gray-600 text-sm">To deliver our AI-powered analytics and business intelligence services</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Communication</h4>
                      <p className="text-gray-600 text-sm">To respond to inquiries and provide customer support</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Improve Services</h4>
                      <p className="text-gray-600 text-sm">To analyze usage patterns and enhance our platform</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Marketing</h4>
                      <p className="text-gray-600 text-sm">To send relevant updates and promotional materials (with consent)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Security</h4>
                      <p className="text-gray-600 text-sm">To protect against fraud and ensure platform security</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Legal Compliance</h4>
                      <p className="text-gray-600 text-sm">To comply with applicable laws and regulations</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <Lock className="w-6 h-6 text-yellow-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Limited Sharing</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>• <strong>Service Providers:</strong> Trusted partners who help us operate our services</li>
                      <li>• <strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                      <li>• <strong>Business Transfers:</strong> In connection with a merger or acquisition</li>
                      <li>• <strong>Consent:</strong> When you explicitly authorize us to share your information</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Security Measures</h3>
                    <p className="text-gray-600 mb-4">
                      We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Encryption of data in transit and at rest</li>
                      <li>• Regular security assessments and updates</li>
                      <li>• Access controls and authentication</li>
                      <li>• Employee training on data protection</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights and Choices</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Eye className="w-5 h-5 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Access and Update</h4>
                      <p className="text-gray-600 text-sm">Request access to or update your personal information</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Database className="w-5 h-5 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Data Portability</h4>
                      <p className="text-gray-600 text-sm">Request a copy of your data in a portable format</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-red-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Marketing Preferences</h4>
                      <p className="text-gray-600 text-sm">Opt out of marketing communications</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-red-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Deletion</h4>
                      <p className="text-gray-600 text-sm">Request deletion of your personal information</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content. You can control cookie settings through your browser or our cookie preferences.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600">
                  <strong>Cookie Categories:</strong> Necessary, Analytics, Marketing, and Preferences. 
                  See our <a href="/cookie-policy" className="text-blue-600 hover:underline">Cookie Policy</a> for detailed information.
                </p>
              </div>
            </section>

            {/* International Transfers */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
              <div className="flex items-start gap-3">
                <Globe className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <p className="text-gray-600 leading-relaxed">
                    Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable laws.
                  </p>
                </div>
              </div>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">privacy@ciroai.us</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Data Protection Officer:</strong> For GDPR-related inquiries, you may also contact our Data Protection Officer at dpo@ciroai.us
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