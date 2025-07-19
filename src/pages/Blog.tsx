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
  Code
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
      title: "The Future of AI in Manufacturing: 5 Trends to Watch in 2024",
      excerpt: "Explore the key AI trends that will transform manufacturing this year, from predictive maintenance to autonomous quality control.",
      category: "AI Trends",
      date: "2024-01-20",
      author: "Dr. Sarah Chen",
      readTime: "8 min read",
      image: "ai-manufacturing-trends",
      featured: true,
      tags: ["AI", "Manufacturing", "Trends", "2024"],
      views: 1247,
      likes: 89,
      slug: "ai-manufacturing-trends-2024"
    },
    {
      id: 2,
      title: "How Computer Vision is Revolutionizing Quality Control",
      excerpt: "Discover how AI-powered computer vision systems are achieving 99.9% defect detection rates in manufacturing.",
      category: "Computer Vision",
      date: "2024-01-18",
      author: "Alex Rodriguez",
      readTime: "6 min read",
      image: "computer-vision-quality",
      featured: false,
      tags: ["Computer Vision", "Quality Control", "Manufacturing", "AI"],
      views: 892,
      likes: 67,
      slug: "computer-vision-quality-control-revolution"
    },
    {
      id: 3,
      title: "Building Scalable AI Infrastructure for Industrial Applications",
      excerpt: "Learn the best practices for deploying AI solutions at scale in industrial environments with real-world examples.",
      category: "Technical",
      date: "2024-01-15",
      author: "Michael Chang",
      readTime: "12 min read",
      image: "ai-infrastructure",
      featured: false,
      tags: ["Infrastructure", "Scalability", "Deployment", "Technical"],
      views: 654,
      likes: 45,
      slug: "scalable-ai-infrastructure-industrial"
    },
    {
      id: 4,
      title: "Case Study: Reducing Energy Consumption by 40% with AI Analytics",
      excerpt: "How a major utility company used CIRO's AI analytics to optimize energy distribution and reduce costs.",
      category: "Case Study",
      date: "2024-01-12",
      author: "Lisa Thompson",
      readTime: "10 min read",
      image: "energy-optimization",
      featured: false,
      tags: ["Case Study", "Energy", "Analytics", "Optimization"],
      views: 1123,
      likes: 78,
      slug: "energy-consumption-reduction-ai-analytics"
    },
    {
      id: 5,
      title: "The ROI of AI in Logistics: A Comprehensive Guide",
      excerpt: "Calculate the real return on investment for AI implementations in supply chain and logistics operations.",
      category: "Business",
      date: "2024-01-10",
      author: "David Park",
      readTime: "9 min read",
      image: "logistics-roi",
      featured: false,
      tags: ["ROI", "Logistics", "Business", "Analytics"],
      views: 756,
      likes: 52,
      slug: "ai-roi-logistics-comprehensive-guide"
    },
    {
      id: 6,
      title: "Machine Learning vs. Traditional Methods in Predictive Maintenance",
      excerpt: "Compare the effectiveness of ML-based predictive maintenance against traditional statistical methods.",
      category: "Technical",
      date: "2024-01-08",
      author: "Dr. Emily Watson",
      readTime: "11 min read",
      image: "predictive-maintenance",
      featured: false,
      tags: ["Machine Learning", "Predictive Maintenance", "Technical", "Comparison"],
      views: 543,
      likes: 38,
      slug: "ml-vs-traditional-predictive-maintenance"
    },
    {
      id: 7,
      title: "Implementing AI Ethics in Industrial Applications",
      excerpt: "Best practices for ensuring responsible AI deployment in manufacturing and industrial settings.",
      category: "AI Ethics",
      date: "2024-01-05",
      author: "Dr. James Wilson",
      readTime: "7 min read",
      image: "ai-ethics",
      featured: false,
      tags: ["AI Ethics", "Responsible AI", "Governance", "Best Practices"],
      views: 432,
      likes: 29,
      slug: "ai-ethics-industrial-applications"
    },
    {
      id: 8,
      title: "The Rise of Edge AI in Manufacturing: Benefits and Challenges",
      excerpt: "Explore how edge computing is enabling real-time AI processing in manufacturing environments.",
      category: "Edge Computing",
      date: "2024-01-03",
      author: "Rachel Green",
      readTime: "8 min read",
      image: "edge-ai",
      featured: false,
      tags: ["Edge Computing", "Real-time", "Manufacturing", "AI"],
      views: 678,
      likes: 41,
      slug: "edge-ai-manufacturing-benefits-challenges"
    }
  ];

  const categories = [
    "All Posts",
    "AI Trends",
    "Computer Vision",
    "Technical",
    "Case Study",
    "Business",
    "AI Ethics",
    "Edge Computing"
  ];

  const popularTags = [
    "AI",
    "Manufacturing",
    "Computer Vision",
    "Analytics",
    "Machine Learning",
    "Case Study",
    "Technical",
    "Trends"
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
                <BookOpen className="w-4 h-4" />
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
                  
                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Eye className="w-4 h-4" />
                      <span>{blogPosts[0].views} views</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Heart className="w-4 h-4" />
                      <span>{blogPosts[0].likes} likes</span>
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
                
                <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-2xl h-64 lg:h-80 flex items-center justify-center">
                  <div className="text-center">
                    <BookOpen className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                    <p className="text-gray-300">Featured Article Image</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <article key={post.id} className="bg-card/80 border border-border/50 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300">
                  <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-xl h-48 flex items-center justify-center mb-6">
                    <div className="text-center">
                      <BookOpen className="w-12 h-12 text-purple-400 mx-auto mb-2" />
                      <p className="text-gray-300 text-sm">Article Image</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Eye className="w-4 h-4" />
                      <span>{post.views}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-card/50 border border-border/50 text-gray-300 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link to={`/blog/${post.slug}`}>
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