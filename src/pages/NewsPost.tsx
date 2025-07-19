import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft,
  Calendar,
  User,
  Tag,
  Share2,
  ExternalLink,
  Clock,
  BookOpen
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/home/Contact";

const NewsPost = () => {
  const { slug } = useParams();

  // Mock data - in real app this would come from Supabase
  const newsArticles = [
    {
      id: 1,
      title: "CIRO AI Labs Launches Revolutionary Industrial AI Platform",
      excerpt: "New platform combines natural language analytics and computer vision to transform manufacturing and logistics operations with real-time intelligence.",
      content: `
        <p class="mb-6 text-lg text-gray-300 leading-relaxed">
          CIRO AI Labs is excited to announce the launch of our revolutionary industrial AI platform, 
          designed to transform how manufacturing and logistics companies operate in the digital age.
        </p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-8">A New Era of Industrial Intelligence</h2>
        <p class="mb-6 text-gray-300 leading-relaxed">
          Our platform represents a breakthrough in industrial AI, combining cutting-edge natural language 
          processing with advanced computer vision capabilities. This unique combination enables companies 
          to ask questions about their operations in plain English and receive instant, actionable insights.
        </p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-8">Key Features</h2>
        <ul class="list-disc list-inside mb-6 text-gray-300 space-y-2">
          <li><strong>Natural Language Analytics:</strong> Ask questions about your data in plain English</li>
          <li><strong>Real-time Computer Vision:</strong> Monitor production lines and quality control automatically</li>
          <li><strong>Predictive Maintenance:</strong> Identify potential issues before they cause downtime</li>
          <li><strong>Seamless Integration:</strong> Works with existing manufacturing systems and databases</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-8">Industry Impact</h2>
        <p class="mb-6 text-gray-300 leading-relaxed">
          Early adopters of our platform have already seen remarkable results, including 85% reduction 
          in defect rates, 60% decrease in waste, and 40% improvement in operational efficiency. 
          These improvements translate to millions of dollars in cost savings and enhanced competitiveness.
        </p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-8">What's Next</h2>
        <p class="mb-6 text-gray-300 leading-relaxed">
          This launch marks just the beginning of our journey to democratize industrial AI. We're 
          already working on advanced features including autonomous decision-making capabilities, 
          enhanced predictive analytics, and expanded industry-specific solutions.
        </p>
        
        <p class="mb-6 text-gray-300 leading-relaxed">
          To learn more about how CIRO AI can transform your operations, contact our team for a 
          personalized demonstration and consultation.
        </p>
      `,
      category: "Product Launch",
      date: "2024-01-15",
      author: "CIRO Team",
      readTime: "5 min read",
      image: "platform-launch",
      featured: true,
      tags: ["Product Launch", "AI Platform", "Manufacturing", "Innovation"],
      slug: "ciro-ai-platform-launch"
    },
    {
      id: 2,
      title: "CIRO Vision Debuts Advanced Quality Control System",
      excerpt: "Computer vision solution reduces defect rates by 85% and increases production efficiency in manufacturing assembly lines.",
      content: `
        <p class="mb-6 text-lg text-gray-300 leading-relaxed">
          CIRO Vision, our advanced computer vision system, is now available for manufacturing 
          quality control applications, delivering unprecedented accuracy and efficiency.
        </p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-8">Revolutionary Quality Control</h2>
        <p class="mb-6 text-gray-300 leading-relaxed">
          Traditional quality control methods rely heavily on human inspection, which can be 
          inconsistent, slow, and expensive. CIRO Vision changes this paradigm by providing 
          automated, real-time quality assessment with accuracy that exceeds human capabilities.
        </p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-8">Key Capabilities</h2>
        <ul class="list-disc list-inside mb-6 text-gray-300 space-y-2">
          <li><strong>Real-time Detection:</strong> Identify defects in milliseconds</li>
          <li><strong>High Accuracy:</strong> 99.9% defect detection rate</li>
          <li><strong>Multi-camera Support:</strong> Monitor entire production lines</li>
          <li><strong>Adaptive Learning:</strong> Continuously improves detection accuracy</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-8">Proven Results</h2>
        <p class="mb-6 text-gray-300 leading-relaxed">
          In pilot programs with leading manufacturers, CIRO Vision has demonstrated:
        </p>
        <ul class="list-disc list-inside mb-6 text-gray-300 space-y-2">
          <li>85% reduction in defect rates</li>
          <li>60% increase in inspection speed</li>
          <li>40% reduction in quality control costs</li>
          <li>Real-time quality metrics and reporting</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-8">Easy Integration</h2>
        <p class="mb-6 text-gray-300 leading-relaxed">
          CIRO Vision is designed for easy integration with existing manufacturing systems. 
          The system supports over 50 different camera types and can be deployed in as little 
          as 24 hours, with minimal disruption to existing operations.
        </p>
      `,
      category: "Product Launch",
      date: "2024-01-10",
      author: "Product Team",
      readTime: "4 min read",
      image: "vision-launch",
      featured: false,
      tags: ["Computer Vision", "Quality Control", "Manufacturing"],
      slug: "ciro-vision-quality-control"
    }
  ];

  const article = newsArticles.find(article => article.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <Navbar />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
          <p className="text-gray-300 mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/news">
            <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to News
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navbar />
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Article Header */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <div className="mb-8">
                <Link to="/news" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to News</span>
                </Link>
              </div>

              {/* Article Meta */}
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full">
                  {article.category}
                </span>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(article.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              {/* Article Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {article.title}
              </h1>

              {/* Article Excerpt */}
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {article.excerpt}
              </p>

              {/* Article Meta Bottom */}
              <div className="flex items-center justify-between py-6 border-b border-border/50">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <User className="w-4 h-4" />
                    <span>By {article.author}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <BookOpen className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-3">
                  {/* Featured Image */}
                  <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-2xl h-64 lg:h-80 flex items-center justify-center mb-12">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <BookOpen className="w-8 h-8 text-purple-400" />
                      </div>
                      <p className="text-gray-300">Article Featured Image</p>
                    </div>
                  </div>

                  {/* Article Body */}
                  <div 
                    className="prose prose-invert prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />

                  {/* Tags */}
                  <div className="mt-12 pt-8 border-t border-border/50">
                    <h3 className="text-lg font-semibold text-white mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-card/50 border border-border/50 text-gray-300 text-sm rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-24">
                    {/* Author Info */}
                    <div className="bg-card/80 border border-border/50 rounded-2xl p-6 mb-8">
                      <h3 className="text-lg font-semibold text-white mb-4">About the Author</h3>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-medium">{article.author}</p>
                          <p className="text-gray-400 text-sm">CIRO AI Labs</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Expert insights on industrial AI, manufacturing technology, and digital transformation.
                      </p>
                    </div>

                    {/* Related Articles */}
                    <div className="bg-card/80 border border-border/50 rounded-2xl p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Related Articles</h3>
                      <div className="space-y-4">
                        {newsArticles.filter(a => a.id !== article.id).slice(0, 3).map((relatedArticle) => (
                          <Link 
                            key={relatedArticle.id} 
                            to={`/news/${relatedArticle.slug}`}
                            className="block p-4 bg-card/50 border border-border/30 rounded-xl hover:border-purple-500/30 transition-all duration-300"
                          >
                            <h4 className="text-white font-medium mb-2 line-clamp-2">
                              {relatedArticle.title}
                            </h4>
                            <p className="text-gray-400 text-sm mb-2 line-clamp-2">
                              {relatedArticle.excerpt}
                            </p>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <Calendar className="w-3 h-3" />
                              <span>{new Date(relatedArticle.date).toLocaleDateString()}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-card/20">
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Stay Updated with CIRO
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Get the latest news, product updates, and industry insights delivered 
                directly to your inbox. Never miss an important update from CIRO.
              </p>
              
              <div className="flex gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-card/50 border border-border/50 text-white placeholder:text-gray-400 focus:border-purple-500 rounded-lg focus:outline-none"
                />
                <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white">
                  Subscribe
                </Button>
              </div>
              
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

export default NewsPost; 