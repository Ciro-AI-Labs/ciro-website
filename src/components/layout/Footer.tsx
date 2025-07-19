
import { Link } from "react-router-dom";
import { 
  Mail, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github, 
  ArrowRight,
  Zap,
  Database,
  Eye,
  Users,
  FileText,
  Shield,
  Clock,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { EmailService } from "@/lib/emailService";
import { logVisitorEvent } from "@/lib/analytics";
import { CookieManager } from "@/lib/cookieManager";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCookieSettings = () => {
    // Clear current consent to trigger the cookie banner again
    localStorage.removeItem('ciro_cookie_consent');
    window.location.reload();
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Subscribe to newsletter using Supabase
      const result = await EmailService.subscribeToNewsletter(email);
      
      // Log analytics event
      await logVisitorEvent({
        event_type: "newsletter_signup",
        email: email
      });
      
      // Show success message
      toast.success("Successfully subscribed to newsletter!");
      setEmail("");
      
    } catch (error) {
      console.error('Newsletter signup error:', error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-border/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-2 xl:col-span-1 space-y-6">
              <Link to="/" className="block">
                <div className="flex items-center gap-2">
                  <img 
                    src="/images/Ciro Blanco.png" 
                    alt="CIRO Logo" 
                    className="h-10 w-auto"
                  />
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    CIRO
                  </span>
                </div>
              </Link>
              
              <p className="text-gray-300 leading-relaxed max-w-md">
                Building the future of industrial intelligence with real-time AI platforms that transform operations, 
                enhance productivity, and drive innovation across manufacturing and logistics.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <a href="mailto:hola@ciroai.us" className="text-gray-300 hover:text-purple-400 transition-colors">
                    hola@ciroai.us
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span className="text-gray-300">San Francisco, CA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/company/ciro-ai-labs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center text-purple-400 hover:text-purple-300 hover:border-purple-400/50 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://twitter.com/ciro_ai_labs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center text-purple-400 hover:text-purple-300 hover:border-purple-400/50 transition-all duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/Ciro-AI-Labs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center text-purple-400 hover:text-purple-300 hover:border-purple-400/50 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Products */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-400" />
                Products
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/products/ai-analytics"
                    className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2 group"
                  >
                    <Database className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                    Ciro AI Analytics
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/vision"
                    className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2 group"
                  >
                    <Eye className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                    Ciro Vision
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-400" />
                Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/blog"
                    className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2 group"
                  >
                    <FileText className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/news"
                    className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2 group"
                  >
                    <FileText className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                    News
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company & Newsletter */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-400" />
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2 group"
                  >
                    <Users className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2 group"
                  >
                    <Clock className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2 group"
                  >
                    <Mail className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/partners"
                    className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2 group"
                  >
                    <CheckCircle className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                    Partners
                  </Link>
                </li>
              </ul>

              {/* Newsletter Signup */}
              <div className="pt-4">
                <h4 className="text-sm font-semibold text-white mb-3">Stay Updated</h4>
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-card/50 border-border/50 text-white placeholder:text-gray-400 focus:border-purple-500"
                    required
                    disabled={isSubmitting}
                  />
                  <Button 
                    type="submit" 
                    size="sm" 
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Subscribing...
                      </>
                    ) : (
                      <>
                        Subscribe
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/20 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-400">
              <p>&copy; {currentYear} Ciro Labs. All rights reserved.</p>
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4" />
                <span>ISO 27001 Certified</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <Link 
                to="/privacy-policy" 
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/cookie-policy" 
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                Cookie Policy
              </Link>
              <button
                onClick={handleCookieSettings}
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                Cookie Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
