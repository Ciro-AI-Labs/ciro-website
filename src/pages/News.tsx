import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { 
  Newspaper, 
  Calendar, 
  User, 
  ArrowRight,
  ExternalLink,
  Search,
  Filter,
  Tag,
  TrendingUp,
  Award,
  Users,
  Globe,
  Zap,
  Building,
  Star,
  Play
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/home/Contact";
import { EmailService } from "@/lib/emailService";
import { logVisitorEvent } from "@/lib/analytics";
import { Link } from "react-router-dom";

const News = () => {
  const handleNewsletterSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('email') as string;
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    try {
      // Subscribe to newsletter using Supabase
      const result = await EmailService.subscribeToNewsletter(email);
      
      // Log analytics event
      await logVisitorEvent({
        event_type: "newsletter_signup",
        email: email,
        form_data: {
          type: 'news_newsletter'
        }
      });
      
      // Show success message
      toast.success("Successfully subscribed to news newsletter!");
      
      // Reset form
      (e.target as HTMLFormElement).reset();
      
    } catch (error) {
      console.error('Newsletter signup error:', error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  const newsArticles = [
    {
      id: 1,
      title: "CIRO AI Labs Launches Revolutionary Industrial AI Platform",
      excerpt: "New platform combines natural language analytics and computer vision to transform manufacturing and logistics operations with real-time intelligence.",
      category: "Product Launch",
      date: "2025-06-20",
      author: "CIRO Team",
      image: "/images/Ciro News.png",
      featured: true,
      tags: ["Product Launch", "AI Platform", "Manufacturing", "Innovation"],
      slug: "ciro-ai-platform-launch-2025"
    },
    {
      id: 2,
      title: "Ciro AI Selected for NVIDIA Inception Program with $600K+ in Perks",
      excerpt: "Ciro AI joins NVIDIA's prestigious Inception Program, receiving over $600,000 in benefits including compute credits, technical support, and go-to-market resources to accelerate AI development across Latin America.",
      category: "Partnership",
      date: "2025-06-15",
      author: "CIRO Team",
      image: "/images/Ciro News Nvidia.png",
      featured: false,
      tags: ["NVIDIA", "Inception Program", "Partnership", "AI Development", "Latin America"],
      slug: "ciro-ai-nvidia-inception-program-2025"
    }
  ];

  const categories = [
    "All News",
    "Product Launch",
    "Partnership",
    "Company News"
  ];

  const tags = [
    "AI Platform",
    "NVIDIA",
    "Manufacturing",
    "Computer Vision",
    "Partnership",
    "Innovation"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navbar />
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/3 via-blue-600/3 to-cyan-600/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Latest News & Updates
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Stay informed about the latest developments in industrial AI, 
                product launches, partnerships, and industry insights from CIRO.
              </p>
            </div>

            {/* Featured Article */}
            <div className="bg-card/80 border border-border/50 rounded-2xl p-8 lg:p-12 mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="px-4 py-2 bg-purple-500/20 text-purple-400 text-sm rounded-full">
                      {newsArticles[0].category}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(newsArticles[0].date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <User className="w-4 h-4" />
                      <span>{newsArticles[0].author}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                    {newsArticles[0].title}
                  </h2>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {newsArticles[0].excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {newsArticles[0].tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-card/50 border border-border/50 text-gray-300 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link to={`/news/${newsArticles[0].slug}`}>
                    <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
                
                <div className="relative bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-2xl h-64 lg:h-80 overflow-hidden">
                  <img 
                    src={newsArticles[0].image} 
                    alt={newsArticles[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 right-4">
                    <img 
                      src="/images/Ciro Logo Blanco Completo.png" 
                      alt="Ciro AI Logo"
                      className="h-12 w-auto opacity-90"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
              {newsArticles.slice(1).map((article) => (
                <article key={article.id} className="bg-card/80 border border-border/50 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300">
                  <div className="relative bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-xl h-48 overflow-hidden mb-6">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    
                    {/* Ciro Logo - Bottom Left */}
                    <div className="absolute bottom-3 left-3">
                      <img 
                        src="/images/Ciro Logo Blanco Completo.png" 
                        alt="Ciro AI Logo"
                        className="h-8 w-auto opacity-90"
                      />
                    </div>
                    
                    {/* NVIDIA Badge - Bottom Right */}
                    <div className="absolute bottom-3 right-3">
                      <img 
                        src="/images/nvidia-inception-program-badge-rgb-for-screen.svg" 
                        alt="NVIDIA Inception Program Badge"
                        className="h-8 w-auto opacity-90"
                      />
                    </div>
                    
                    {/* Handshake Connection Line */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-green-400"></div>
                        <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <div className="w-16 h-0.5 bg-gradient-to-r from-green-400 to-purple-400"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full">
                      {article.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4 leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed text-base">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-card/50 border border-border/50 text-gray-300 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link to={`/news/${article.slug}`}>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </article>
              ))}
            </div>
            
            {/* Load More */}
            <div className="text-center mt-12">
              <Button 
                variant="outline"
                className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50 px-8 py-3"
              >
                Load More Articles
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-card/20">
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl">
            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Get the latest news, product updates, and industry insights delivered 
                directly to your inbox. Never miss an important update from CIRO.
              </p>
              
              <form onSubmit={handleNewsletterSignup} className="max-w-md mx-auto">
                <div className="flex gap-4">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-card/50 border-border/50 text-white placeholder:text-gray-400 focus:border-purple-500"
                    required
                  />
                  <Button 
                    type="submit" 
                    className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
                  >
                    Subscribe
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </form>
              
              <p className="text-sm text-gray-400 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>

        {/* Press Kit */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Press Resources
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Journalists and media professionals can find press releases, 
                company information, and media assets here.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card/80 border border-border/50 rounded-2xl p-8 text-center hover:border-purple-500/30 transition-all duration-300">
                <Newspaper className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Press Releases</h3>
                <p className="text-gray-300 mb-6">
                  Official press releases and company announcements
                </p>
                <Button 
                  variant="outline"
                  className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50"
                >
                  View Releases
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <div className="bg-card/80 border border-border/50 rounded-2xl p-8 text-center hover:border-purple-500/30 transition-all duration-300">
                <Building className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Company Info</h3>
                <p className="text-gray-300 mb-6">
                  Company facts, leadership team, and corporate information
                </p>
                <Button 
                  variant="outline"
                  className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50"
                >
                  Company Details
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <div className="bg-card/80 border border-border/50 rounded-2xl p-8 text-center hover:border-purple-500/30 transition-all duration-300">
                <Star className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Media Assets</h3>
                <p className="text-gray-300 mb-6">
                  Logos, images, and other media resources for press use
                </p>
                <Button 
                  variant="outline"
                  className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50"
                >
                  Download Assets
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
};

export default News; 