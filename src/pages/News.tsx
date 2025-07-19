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
      date: "2024-01-15",
      author: "CIRO Team",
      image: "platform-launch",
      featured: true,
      tags: ["Product Launch", "AI Platform", "Manufacturing", "Innovation"],
      slug: "ciro-ai-platform-launch"
    },
    {
      id: 2,
      title: "CIRO Vision Debuts Advanced Quality Control System",
      excerpt: "Computer vision solution reduces defect rates by 85% and increases production efficiency in manufacturing assembly lines.",
      category: "Product Launch",
      date: "2024-01-10",
      author: "Product Team",
      image: "vision-launch",
      featured: false,
      tags: ["Computer Vision", "Quality Control", "Manufacturing"],
      slug: "ciro-vision-quality-control"
    },
    {
      id: 3,
      title: "CIRO Partners with Leading Cloud Providers for Enhanced AI Capabilities",
      excerpt: "Strategic partnerships bring CIRO's industrial AI solutions to enterprise customers with seamless integration and scalability.",
      category: "Partnership",
      date: "2024-01-05",
      author: "Partnership Team",
      image: "cloud-partnership",
      featured: false,
      tags: ["Partnership", "Cloud", "Enterprise", "Integration"],
      slug: "ciro-cloud-partnerships"
    },
    {
      id: 4,
      title: "CIRO AI Analytics Helps Manufacturer Reduce Waste by 60%",
      excerpt: "Case study shows how predictive analytics and real-time monitoring transformed operations for major manufacturing company.",
      category: "Case Study",
      date: "2023-12-20",
      author: "Customer Success",
      image: "manufacturing-case-study",
      featured: false,
      tags: ["Case Study", "Manufacturing", "Waste Reduction", "Analytics"],
      slug: "manufacturing-waste-reduction-case-study"
    },
    {
      id: 5,
      title: "CIRO Named to Top 50 Industrial AI Companies List",
      excerpt: "Recognition highlights CIRO's leadership in industrial AI and commitment to transforming traditional industries.",
      category: "Awards",
      date: "2023-12-15",
      author: "CIRO Team",
      image: "industry-award",
      featured: false,
      tags: ["Awards", "Innovation", "Industrial AI", "Recognition"],
      slug: "ciro-top-50-industrial-ai"
    },
    {
      id: 6,
      title: "New Research: AI Adoption in Manufacturing Expected to Grow 300% by 2025",
      excerpt: "CIRO's latest industry report reveals accelerating adoption of AI technologies in manufacturing and logistics sectors.",
      category: "Research",
      date: "2023-12-10",
      author: "Research Team",
      image: "ai-adoption-research",
      featured: false,
      tags: ["Research", "Manufacturing", "AI Adoption", "Industry Trends"],
      slug: "ai-adoption-manufacturing-2025"
    },
    {
      id: 7,
      title: "CIRO Expands Team with Key Engineering Hires",
      excerpt: "Company growth continues with addition of senior AI engineers and product specialists to accelerate platform development.",
      category: "Company News",
      date: "2023-12-05",
      author: "CIRO Team",
      image: "team-expansion",
      featured: false,
      tags: ["Company News", "Hiring", "Growth", "Engineering"],
      slug: "ciro-team-expansion-engineering"
    },
    {
      id: 8,
      title: "CIRO Vision Now Supports 50+ Camera Types for Universal Deployment",
      excerpt: "Enhanced compatibility makes CIRO Vision accessible to more manufacturing environments and use cases.",
      category: "Product Update",
      date: "2023-11-30",
      author: "Product Team",
      image: "camera-support",
      featured: false,
      tags: ["Product Update", "Computer Vision", "Compatibility", "Deployment"],
      slug: "ciro-vision-camera-support"
    }
  ];

  const categories = [
    "All News",
    "Company News",
    "Product Launch",
    "Partnership",
    "Case Study",
    "Awards",
    "Research",
    "Product Update"
  ];

  const tags = [
    "AI Platform",
    "Computer Vision",
    "Manufacturing",
    "Logistics",
    "Analytics",
    "Partnership",
    "Research",
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
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-purple-400 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-full mb-6">
                <Newspaper className="w-4 h-4" />
                <span>Latest News</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  CIRO News
                </span>
                <br />
                <span className="text-white">
                  & Updates
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Stay up to date with the latest news, product launches, partnerships, 
                and insights from CIRO AI Labs and the industrial AI industry.
              </p>

              {/* Search and Filter */}
              <div className="max-w-2xl mx-auto">
                <div className="relative mb-6">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Search news and articles..."
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

        {/* Featured Article */}
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
                      {newsArticles[0].category}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    {newsArticles[0].title}
                  </h2>
                  
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    {newsArticles[0].excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(newsArticles[0].date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <User className="w-4 h-4" />
                      <span>{newsArticles[0].author}</span>
                    </div>
                  </div>
                  
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
                
                <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-2xl h-64 lg:h-80 flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                    <p className="text-gray-300">Featured Article Image</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.slice(1).map((article) => (
                <article key={article.id} className="bg-card/80 border border-border/50 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300">
                  <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-xl h-48 flex items-center justify-center mb-6">
                    <div className="text-center">
                      <Newspaper className="w-12 h-12 text-purple-400 mx-auto mb-2" />
                      <p className="text-gray-300 text-sm">Article Image</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full">
                      {article.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4 leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
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
                    {article.tags.slice(0, 2).map((tag) => (
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
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
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
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
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