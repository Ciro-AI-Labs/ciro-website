import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { 
  BookOpen, 
  Calendar, 
  User, 
  ArrowRight,
  Search,
  Filter,
  Tag,
  Clock,
  Eye,
  Heart,
  Share2,
  TrendingUp,
  Zap,
  Database,
  Globe,
  Building,
  Star,
  Play,
  Lightbulb,
  Code,
  Rocket,
  Target,
  Users,
  Shield,
  Brain
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/home/Contact";
import { EmailService } from "@/lib/emailService";
import { logVisitorEvent } from "@/lib/analytics";
import { Link } from "react-router-dom";

const Blog = () => {
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
          type: 'blog_newsletter'
        }
      });
      
      // Show success message
      toast.success("Successfully subscribed to blog newsletter!");
      
      // Reset form
      (e.target as HTMLFormElement).reset();
      
    } catch (error) {
      console.error('Newsletter signup error:', error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  const blogPosts = [
    {
      id: 1,
      title: "Introducing Ciro AI: Our Vision for the Future of Intelligent Data Analytics",
      excerpt: "We're excited to announce the launch of our new website and share our manifesto for democratizing AI-powered analytics across industries. Discover how Ciro AI is transforming the way organizations understand and leverage their data.",
      category: "Company News",
      date: "2025-07-20",
      author: "Ciro AI Team",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center",
      featured: true,
      tags: ["AI", "Analytics", "Launch", "Manifesto", "Data Intelligence"],
      slug: "ciro-ai-launch-manifesto-2025"
    }
  ];

  const categories = [
    "All Posts",
    "Company News",
    "AI Trends",
    "Technical Insights",
    "Case Studies"
  ];

  const popularTags = [
    "AI",
    "Analytics",
    "Data Intelligence",
    "Computer Vision",
    "Machine Learning",
    "Industry 4.0",
    "Digital Transformation"
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
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-purple-400 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-full mb-6">
                <Rocket className="w-4 h-4" />
                <span>CIRO Blog</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  AI Insights
                </span>
                <br />
                <span className="text-white">
                  & Industry Knowledge
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Deep dive into the latest AI trends, technical insights, case studies, 
                and industry knowledge from CIRO's team of experts and thought leaders.
              </p>

              {/* Search and Filter */}
              <div className="max-w-2xl mx-auto">
                <div className="relative mb-6">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Search articles..."
                    className="pl-12 bg-card/50 border-border/50 text-white placeholder:text-gray-400 focus:border-purple-500"
                  />
                </div>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {categories.slice(1).map((category) => (
                    <Button
                      key={category}
                      variant="outline"
                      size="sm"
                      className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full">
                      Featured
                    </span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full">
                      {blogPosts[0].category}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    {blogPosts[0].title}
                  </h2>
                  
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <User className="w-4 h-4" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  

                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {blogPosts[0].tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-card/50 border border-border/50 text-gray-300 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link to={`/blog/${blogPosts[0].slug}`}>
                    <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
                
                <div className="relative">
                  <img 
                    src={blogPosts[0].image} 
                    alt="Ciro AI Launch and Manifesto"
                    className="w-full h-64 lg:h-80 object-cover rounded-2xl border border-purple-500/30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-12">
                <div className="max-w-2xl mx-auto">
                  <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-purple-400 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full mb-6">
                    <Lightbulb className="w-4 h-4" />
                    <span>More Content Coming Soon</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Stay Tuned for More Insights
                  </h2>
                  
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    We're working on bringing you more valuable content about AI trends, 
                    technical insights, case studies, and industry knowledge. Subscribe to 
                    our newsletter to be the first to know when new articles are published.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 justify-center mb-8">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Brain className="w-4 h-4" />
                      <span>AI Trends & Insights</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Code className="w-4 h-4" />
                      <span>Technical Deep Dives</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Target className="w-4 h-4" />
                      <span>Case Studies</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Users className="w-4 h-4" />
                      <span>Industry Knowledge</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Tags */}
        <section className="py-16 bg-card/20">
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Popular Topics
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Explore articles by topic and discover insights in your areas of interest.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {popularTags.map((tag) => (
                <Button
                  key={tag}
                  variant="outline"
                  className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50"
                >
                  <Tag className="w-4 h-4 mr-2" />
                  {tag}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-card/20">
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Stay Informed
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Get the latest AI insights, technical articles, and industry knowledge 
                delivered directly to your inbox. Join thousands of professionals.
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

        {/* Contact Section */}
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog; 