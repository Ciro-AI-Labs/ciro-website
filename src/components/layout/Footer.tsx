import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  ArrowRight,
  BarChart3,
  Database,
  Smartphone,
  Factory,
  Eye,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { EmailService } from "@/lib/emailService";
import { logVisitorEvent } from "@/lib/analytics";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useTranslation();

  const handleCookieSettings = () => {
    localStorage.removeItem('ciro_cookie_consent');
    window.location.reload();
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error(t('footer.emailRequired'));
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await EmailService.subscribeToNewsletter(email);
      await logVisitorEvent({ event_type: "newsletter_signup", email: email });
      toast.success(t('footer.newsletterSuccess'));
      setEmail("");
    } catch (error) {
      console.error('Newsletter signup error:', error);
      toast.error(t('footer.newsletterError'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-black border-t border-white/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12">

            {/* Company Info */}
            <div className="lg:col-span-2 xl:col-span-1 space-y-6">
              <Link to="/" className="block">
                <img
                  src="/logos/Ciro Logo Full White.svg"
                  alt="CIRO"
                  className="h-10 w-auto"
                />
              </Link>

              <p className="text-gray-400 leading-relaxed max-w-md">
                {t('footer.companyDesc')}
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <a href="mailto:hola@ciroai.us" className="text-gray-400 hover:text-blue-400 transition-colors">
                    hola@ciroai.us
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-400">{t('footer.location')}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/company/cirolabs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400/30 transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com/cirolabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400/30 transition-all duration-300"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/orgs/Ciro-AI-Labs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400/30 transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Products */}
            <div className="space-y-6">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                {t('footer.products')}
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/products/ai-analytics" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 text-sm">
                    <BarChart3 className="w-3.5 h-3.5" />
                    CIRO AI
                  </Link>
                </li>
                <li>
                  <Link to="/products/erp" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 text-sm">
                    <Factory className="w-3.5 h-3.5" />
                    CIRO ERP
                  </Link>
                </li>
                <li>
                  <Link to="/products/sales" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 text-sm">
                    <Smartphone className="w-3.5 h-3.5" />
                    CIRO SALES
                  </Link>
                </li>
                <li>
                  <Link to="/products/lake" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 text-sm">
                    <Database className="w-3.5 h-3.5" />
                    CIRO LAKE
                  </Link>
                </li>
                <li>
                  <Link to="/products/vision" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 text-sm">
                    <Eye className="w-3.5 h-3.5" />
                    CIRO LABS
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-6">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                {t('footer.resources')}
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/blog" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    {t('footer.blog')}
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    {t('footer.news')}
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    {t('footer.aboutUs')}
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    {t('footer.careers')}
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    {t('footer.contact')}
                  </Link>
                </li>
                <li>
                  <Link to="/partners" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    {t('footer.partners')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-6">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                {t('footer.stayUpdated')}
              </h3>
              <p className="text-gray-400 text-sm">{t('footer.newsletterDesc')}</p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder={t('footer.emailPlaceholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500 h-10"
                  required
                  disabled={isSubmitting}
                />
                <Button
                  type="submit"
                  size="sm"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      {t('footer.subscribing')}
                    </>
                  ) : (
                    <>
                      {t('footer.subscribe')}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/5 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-500">
              <p>&copy; {currentYear} CIRO AI. {t('footer.copyright')}</p>
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4" />
                <span>SOC 2 Type II</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-500 hover:text-blue-400 transition-colors">
                {t('footer.privacyPolicy')}
              </Link>
              <Link to="/cookie-policy" className="text-gray-500 hover:text-blue-400 transition-colors">
                {t('footer.cookiePolicy')}
              </Link>
              <button onClick={handleCookieSettings} className="text-gray-500 hover:text-blue-400 transition-colors">
                {t('footer.cookieSettings')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
