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
  BookOpen,
  Eye,
  Heart,
  MessageCircle
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/home/Contact";

const BlogPost = () => {
  const { slug } = useParams();

  // Mock data - in real app this would come from Supabase
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Manufacturing: 5 Trends to Watch in 2024",
      excerpt: "Explore the key AI trends that will transform manufacturing this year, from predictive maintenance to autonomous quality control.",
      content: `
        <p class="mb-6 text-lg text-gray-300 leading-relaxed">
          As we step into 2024, the manufacturing industry is on the cusp of a technological revolution 
          driven by artificial intelligence. The convergence of AI, IoT, and advanced analytics is 
          creating unprecedented opportunities for manufacturers to optimize operations, reduce costs, 
          and improve quality.
        </p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-8">1. Predictive Maintenance Goes Mainstream</h2>
        <p class="mb-6 text-gray-300 leading-relaxed">
          Predictive maintenance is no longer a futuristic concept—it's becoming the standard for 
          modern manufacturing. AI-powered systems can now predict equipment failures with 95% 
          accuracy, reducing unplanned downtime by up to 50% and maintenance costs by 30%.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
          Companies like CIRO AI are leading this transformation with advanced machine learning 
          algorithms that analyze sensor data, historical maintenance records, and environmental 
          factors to provide real-time insights into equipment health.
        </p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-8">2. Autonomous Quality Control</h2>
        <p class="mb-6 text-gray-300 leading-relaxed">
          Computer vision and AI are revolutionizing quality control processes. Modern systems can 
          detect defects with accuracy rates exceeding 99.9%, far surpassing human capabilities. 
          This technology is particularly transformative in industries like automotive, electronics, 
          and pharmaceuticals.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
          The key advantage is consistency—AI systems don't get tired, don't have bad days, and 
          can work 24/7 without breaks. This leads to higher quality products and reduced waste.
        </p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-8">3. Natural Language Analytics</h2>
        <p class="mb-6 text-gray-300 leading-relaxed">
          One of the most exciting developments is the ability to query manufacturing data using 
          natural language. Instead of writing complex SQL queries or building dashboards, 
          operators can simply ask questions like "Why did production slow down yesterday?" or 
          "Which machines need maintenance this week?"
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
          This democratization of data access means that insights previously available only to 
          data scientists are now accessible to everyone on the factory floor.
        </p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-8">4. Edge AI for Real-Time Processing</h2>
        <p class="mb-6 text-gray-300 leading-relaxed">
          Edge computing is bringing AI processing closer to where data is generated, enabling 
          real-time decision making without the latency of cloud processing. This is crucial for 
          applications like autonomous robots, real-time quality control, and safety systems.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
          The combination of edge AI and 5G networks is creating new possibilities for 
          distributed manufacturing and remote operations.
        </p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-8">5. AI-Powered Supply Chain Optimization</h2>
        <p class="mb-6 text-gray-300 leading-relaxed">
          Supply chain disruptions have highlighted the need for more intelligent, adaptive 
          supply chain management. AI is enabling predictive supply chain optimization that can 
          anticipate disruptions, optimize inventory levels, and suggest alternative suppliers.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
          This trend will become even more important as global supply chains become more complex 
          and interconnected.
        </p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-8">Looking Ahead</h2>
        <p class="mb-6 text-gray-300 leading-relaxed">
          The pace of AI adoption in manufacturing is accelerating, driven by the need to remain 
          competitive in an increasingly digital world. Companies that embrace these trends early 
          will gain significant advantages in efficiency, quality, and cost control.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
          However, successful AI implementation requires more than just technology—it requires 
          cultural change, new skills, and a commitment to continuous learning. The manufacturers 
          who succeed will be those who view AI as a tool to augment human capabilities, not 
          replace them.
        </p>
      `,
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
      content: `
        <p class="mb-6 text-lg text-gray-300 leading-relaxed">
          Quality control has always been a critical aspect of manufacturing, but traditional 
          methods have been limited by human capabilities and consistency. Computer vision 
          technology is changing this paradigm, offering unprecedented accuracy and efficiency 
          in defect detection.
        </p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-8">The Evolution of Quality Control</h2>
        <p class="mb-6 text-gray-300 leading-relaxed">
          Traditional quality control relied heavily on human inspectors who would visually 
          examine products for defects. While effective, this approach had several limitations: 
          human fatigue, inconsistency, and the inability to process large volumes quickly.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
          Computer vision systems overcome these limitations by providing consistent, 
          tireless, and rapid inspection capabilities that can operate 24/7.
        </p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-8">How Computer Vision Works</h2>
        <p class="mb-6 text-gray-300 leading-relaxed">
          Modern computer vision systems use a combination of high-resolution cameras, 
          advanced lighting, and deep learning algorithms to detect defects. The process 
          typically involves:
        </p>
        <ul class="list-disc list-inside mb-6 text-gray-300 space-y-2">
          <li><strong>Image Capture:</strong> High-resolution cameras capture detailed images of products</li>
          <li><strong>Preprocessing:</strong> Images are enhanced and normalized for analysis</li>
          <li><strong>Feature Extraction:</strong> AI algorithms identify key features and patterns</li>
          <li><strong>Classification:</strong> Defects are classified and categorized</li>
          <li><strong>Decision Making:</strong> Systems determine if products meet quality standards</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-8">Real-World Applications</h2>
        <p class="mb-6 text-gray-300 leading-relaxed">
          Computer vision is being applied across various industries with remarkable results:
        </p>
        <ul class="list-disc list-inside mb-6 text-gray-300 space-y-2">
          <li><strong>Automotive:</strong> Detecting paint defects, weld quality, and assembly issues</li>
          <li><strong>Electronics:</strong> Identifying component placement errors and soldering defects</li>
          <li><strong>Pharmaceuticals:</strong> Ensuring pill quality and packaging integrity</li>
          <li><strong>Food & Beverage:</strong> Detecting contamination and packaging defects</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-8">The Future of Quality Control</h2>
        <p class="mb-6 text-gray-300 leading-relaxed">
          As computer vision technology continues to advance, we can expect even more 
          sophisticated applications. Future developments may include:
        </p>
        <ul class="list-disc list-inside mb-6 text-gray-300 space-y-2">
          <li>3D vision systems for volumetric inspection</li>
          <li>Multi-spectral imaging for material analysis</li>
          <li>Real-time adaptive learning systems</li>
          <li>Integration with predictive maintenance</li>
        </ul>
        
        <p class="mb-6 text-gray-300 leading-relaxed">
          The key to success with computer vision quality control is not just the technology, 
          but the integration with existing processes and the training of personnel to work 
          effectively with these new systems.
        </p>
      `,
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
    }
  ];

  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <Navbar />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
          <p className="text-gray-300 mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
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
                <Link to="/blog" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Blog</span>
                </Link>
              </div>

              {/* Article Meta */}
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Article Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Article Excerpt */}
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Article Meta Bottom */}
              <div className="flex items-center justify-between py-6 border-b border-border/50">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <User className="w-4 h-4" />
                    <span>By {post.author}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <BookOpen className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Eye className="w-4 h-4" />
                    <span>{post.views} views</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Heart className="w-4 h-4" />
                    <span>{post.likes} likes</span>
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
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />

                  {/* Tags */}
                  <div className="mt-12 pt-8 border-t border-border/50">
                    <h3 className="text-lg font-semibold text-white mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-card/50 border border-border/50 text-gray-300 text-sm rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Engagement */}
                  <div className="mt-8 flex items-center gap-6">
                    <Button variant="outline" size="sm" className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50">
                      <Heart className="w-4 h-4 mr-2" />
                      Like Article
                    </Button>
                    <Button variant="outline" size="sm" className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Comment
                    </Button>
                    <Button variant="outline" size="sm" className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
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
                          <p className="text-white font-medium">{post.author}</p>
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
                        {blogPosts.filter(p => p.id !== post.id).slice(0, 3).map((relatedPost) => (
                          <Link 
                            key={relatedPost.id} 
                            to={`/blog/${relatedPost.slug}`}
                            className="block p-4 bg-card/50 border border-border/30 rounded-xl hover:border-purple-500/30 transition-all duration-300"
                          >
                            <h4 className="text-white font-medium mb-2 line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <p className="text-gray-400 text-sm mb-2 line-clamp-2">
                              {relatedPost.excerpt}
                            </p>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <Calendar className="w-3 h-3" />
                              <span>{new Date(relatedPost.date).toLocaleDateString()}</span>
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
                Get the latest AI insights, technical articles, and industry knowledge 
                delivered directly to your inbox. Never miss an important update from CIRO.
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

export default BlogPost; 