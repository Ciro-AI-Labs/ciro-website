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
  MessageCircle,
  Rocket,
  Target,
  Users,
  Shield,
  Brain,
  Globe,
  Zap,
  Database,
  Lightbulb
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/home/Contact";
import { useEffect } from "react";

const BlogPost = () => {
  const { slug } = useParams();

  // Mock data - in real app this would come from Supabase
  const blogPosts = [
    {
      id: 1,
      title: "Introducing Ciro AI: Our Vision for the Future of Intelligent Data Analytics",
      excerpt: "We're excited to announce the launch of our new website and share our manifesto for democratizing AI-powered analytics across industries. Discover how Ciro AI is transforming the way organizations understand and leverage their data.",
      content: `
        <div class="max-w-none">
          <p class="mb-8 text-xl text-gray-300 leading-relaxed">
            Today marks a significant milestone for Ciro AI as we launch our new website and share our vision 
            for the future of intelligent data analytics. We're not just announcing a website launch—we're 
            sharing our manifesto for democratizing AI-powered analytics across industries.
          </p>
          
          <div class="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-8 mb-12">
            <h2 class="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              Our Mission
            </h2>
            <p class="text-lg text-gray-300 leading-relaxed">
              To democratize AI-powered analytics, making advanced data intelligence accessible to organizations 
              of all sizes, across all industries, regardless of their technical expertise or resources.
            </p>
          </div>
          
          <h2 class="text-3xl font-bold text-white mb-6 mt-12">The Challenge We're Solving</h2>
          <p class="mb-6 text-lg text-gray-300 leading-relaxed">
            In today's data-driven world, organizations are drowning in information but starving for insights. 
            Traditional analytics tools require specialized knowledge, expensive infrastructure, and months of 
            implementation time. This creates a barrier that prevents many organizations from unlocking the 
            true value of their data.
          </p>
          <p class="mb-8 text-lg text-gray-300 leading-relaxed">
            We believe that AI-powered analytics should be as accessible as using a smartphone—intuitive, 
            powerful, and available to everyone who needs it.
          </p>
          
          <h2 class="text-3xl font-bold text-white mb-6 mt-12">Our Manifesto: The Five Pillars</h2>
          
          <div class="space-y-8 mb-12">
            <div class="bg-card/50 border border-border/50 rounded-xl p-6">
              <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
                1. Democratization of AI
              </h3>
              <p class="text-gray-300 leading-relaxed">
                We're breaking down the barriers to AI adoption by creating intuitive interfaces that don't 
                require data science degrees. Our platform transforms complex AI algorithms into simple, 
                actionable insights that anyone can understand and act upon.
              </p>
            </div>
            
            <div class="bg-card/50 border border-border/50 rounded-xl p-6">
              <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                2. Universal Accessibility
              </h3>
              <p class="text-gray-300 leading-relaxed">
                From Fortune 500 companies to small businesses, from manufacturing to healthcare, our solutions 
                are designed to work across all industries and organization sizes. We believe that powerful 
                analytics shouldn't be limited by budget or technical constraints.
              </p>
            </div>
            
            <div class="bg-card/50 border border-border/50 rounded-xl p-6">
              <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <svg class="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                3. Real-Time Intelligence
              </h3>
              <p class="text-gray-300 leading-relaxed">
                In today's fast-paced world, insights that arrive too late are worthless. Our platform provides 
                real-time analytics and predictive capabilities that enable organizations to make decisions 
                at the speed of business.
              </p>
            </div>
            
            <div class="bg-card/50 border border-border/50 rounded-xl p-6">
              <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
                4. Trust and Transparency
              </h3>
              <p class="text-gray-300 leading-relaxed">
                We believe in AI that you can trust. Our platform provides clear explanations for every insight, 
                ensuring that users understand not just what the AI found, but why it matters and how to act on it.
              </p>
            </div>
            
            <div class="bg-card/50 border border-border/50 rounded-xl p-6">
              <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                </svg>
                5. Human-Centric Design
              </h3>
              <p class="text-gray-300 leading-relaxed">
                Technology should augment human capabilities, not replace them. Our solutions are designed to 
                work alongside people, enhancing their decision-making abilities while preserving the human 
                intuition and creativity that machines cannot replicate.
              </p>
            </div>
          </div>
          
          <h2 class="text-3xl font-bold text-white mb-6 mt-12">What Sets Ciro AI Apart</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div class="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-6">
              <h3 class="text-lg font-bold text-white mb-3">Advanced Computer Vision</h3>
              <p class="text-gray-300 text-sm">
                Our computer vision capabilities can analyze images and videos in real-time, detecting patterns, 
                anomalies, and opportunities that human eyes might miss.
              </p>
            </div>
            
            <div class="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6">
              <h3 class="text-lg font-bold text-white mb-3">Natural Language Analytics</h3>
              <p class="text-gray-300 text-sm">
                Ask questions in plain English and get intelligent answers. No need to learn complex query 
                languages or build dashboards.
              </p>
            </div>
            
            <div class="bg-gradient-to-br from-cyan-500/10 to-green-500/10 border border-cyan-500/20 rounded-xl p-6">
              <h3 class="text-lg font-bold text-white mb-3">Predictive Intelligence</h3>
              <p class="text-gray-300 text-sm">
                Go beyond historical analysis to predict future trends, identify risks, and uncover opportunities 
                before they become obvious.
              </p>
            </div>
            
            <div class="bg-gradient-to-br from-green-500/10 to-purple-500/10 border border-green-500/20 rounded-xl p-6">
              <h3 class="text-lg font-bold text-white mb-3">Seamless Integration</h3>
              <p class="text-gray-300 text-sm">
                Connect to your existing data sources, tools, and workflows without disruption. Our platform 
                works with what you already have.
              </p>
            </div>
          </div>
          
          <h2 class="text-3xl font-bold text-white mb-6 mt-12">Our Commitment to the Future</h2>
          <p class="mb-6 text-lg text-gray-300 leading-relaxed">
            As we launch this new chapter, we're committed to continuous innovation and improvement. We'll 
            be sharing regular updates about new features, case studies, and insights that demonstrate the 
            real-world impact of our technology.
          </p>
          <p class="mb-8 text-lg text-gray-300 leading-relaxed">
            We invite you to join us on this journey. Whether you're exploring our website, trying our 
            solutions, or simply curious about the future of AI-powered analytics, we're here to help you 
            unlock the full potential of your data.
          </p>
          
          <div class="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-8 mb-12">
            <h2 class="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
              What's Next?
            </h2>
            <p class="text-lg text-gray-300 leading-relaxed mb-4">
              In the coming weeks and months, we'll be sharing:
            </p>
            <ul class="list-disc list-inside text-gray-300 space-y-2">
              <li>Detailed case studies from our early customers</li>
              <li>Technical deep-dives into our AI capabilities</li>
              <li>Industry-specific insights and trends</li>
              <li>Behind-the-scenes looks at our development process</li>
              <li>Expert interviews and thought leadership content</li>
            </ul>
          </div>
          
          <h2 class="text-3xl font-bold text-white mb-6 mt-12">Join the Revolution</h2>
          <p class="mb-8 text-lg text-gray-300 leading-relaxed">
            The future of data analytics is here, and it's more accessible, powerful, and human-centric 
            than ever before. We're excited to have you with us as we transform how organizations understand 
            and leverage their data.
          </p>
          <p class="mb-8 text-lg text-gray-300 leading-relaxed">
            Thank you for being part of this journey. Together, we're building a future where AI-powered 
            insights are available to everyone who needs them.
          </p>
          
          <div class="text-center py-8">
            <p class="text-xl font-semibold text-purple-400 mb-2">The Ciro AI Team</p>
            <p class="text-gray-400">July 20, 2025</p>
          </div>
        </div>
      `,
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

  const post = blogPosts.find(post => post.slug === slug);

  // Set metadata for social sharing
  useEffect(() => {
    if (post) {
      // Update document title
      document.title = `${post.title} | Ciro AI Blog`;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.excerpt);
      } else {
        const newMetaDescription = document.createElement('meta');
        newMetaDescription.name = 'description';
        newMetaDescription.content = post.excerpt;
        document.head.appendChild(newMetaDescription);
      }
      
      // Update Open Graph tags
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', post.title);
      } else {
        const newOgTitle = document.createElement('meta');
        newOgTitle.setAttribute('property', 'og:title');
        newOgTitle.content = post.title;
        document.head.appendChild(newOgTitle);
      }
      
      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', post.excerpt);
      } else {
        const newOgDescription = document.createElement('meta');
        newOgDescription.setAttribute('property', 'og:description');
        newOgDescription.content = post.excerpt;
        document.head.appendChild(newOgDescription);
      }
      
      const ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage) {
        ogImage.setAttribute('content', '/images/ciro-social-share.png');
      } else {
        const newOgImage = document.createElement('meta');
        newOgImage.setAttribute('property', 'og:image');
        newOgImage.content = '/images/ciro-social-share.png';
        document.head.appendChild(newOgImage);
      }
      
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) {
        ogUrl.setAttribute('content', window.location.href);
      } else {
        const newOgUrl = document.createElement('meta');
        newOgUrl.setAttribute('property', 'og:url');
        newOgUrl.content = window.location.href;
        document.head.appendChild(newOgUrl);
      }
      
      const ogType = document.querySelector('meta[property="og:type"]');
      if (ogType) {
        ogType.setAttribute('content', 'article');
      } else {
        const newOgType = document.createElement('meta');
        newOgType.setAttribute('property', 'og:type');
        newOgType.content = 'article';
        document.head.appendChild(newOgType);
      }
      
      // Twitter Card tags
      const twitterCard = document.querySelector('meta[name="twitter:card"]');
      if (twitterCard) {
        twitterCard.setAttribute('content', 'summary_large_image');
      } else {
        const newTwitterCard = document.createElement('meta');
        newTwitterCard.name = 'twitter:card';
        newTwitterCard.content = 'summary_large_image';
        document.head.appendChild(newTwitterCard);
      }
      
      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      if (twitterTitle) {
        twitterTitle.setAttribute('content', post.title);
      } else {
        const newTwitterTitle = document.createElement('meta');
        newTwitterTitle.name = 'twitter:title';
        newTwitterTitle.content = post.title;
        document.head.appendChild(newTwitterTitle);
      }
      
      const twitterDescription = document.querySelector('meta[name="twitter:description"]');
      if (twitterDescription) {
        twitterDescription.setAttribute('content', post.excerpt);
      } else {
        const newTwitterDescription = document.createElement('meta');
        newTwitterDescription.name = 'twitter:description';
        newTwitterDescription.content = post.excerpt;
        document.head.appendChild(newTwitterDescription);
      }
      
      const twitterImage = document.querySelector('meta[name="twitter:image"]');
      if (twitterImage) {
        twitterImage.setAttribute('content', '/images/ciro-social-share.png');
      } else {
        const newTwitterImage = document.createElement('meta');
        newTwitterImage.name = 'twitter:image';
        newTwitterImage.content = '/images/ciro-social-share.png';
        document.head.appendChild(newTwitterImage);
      }
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Blog Post Not Found</h1>
            <p className="text-gray-300 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog">
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/3 via-blue-600/3 to-cyan-600/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
                <Link to="/blog" className="hover:text-purple-400 transition-colors">
                  Blog
                </Link>
                <span>/</span>
                <span className="text-gray-300">{post.category}</span>
              </div>
              
              {/* Article Header */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-6">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full">
                    {post.category}
                  </span>
                  {post.featured && (
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  {post.title}
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {post.excerpt}
                </p>
                
                {/* Article Meta */}
                <div className="flex flex-wrap items-center gap-6 mb-8">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-card/50 border border-border/50 text-gray-300 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Share Buttons */}
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm" className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
              
              {/* Featured Image */}
              <div className="mb-12">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-2xl border border-purple-500/30"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
            <div className="max-w-4xl mx-auto">
              <article 
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
                             {/* Article Footer */}
               <div className="mt-16 pt-8 border-t border-border/50">
                 <div className="flex items-center justify-between">
                   <div className="flex items-center gap-4">
                     <Button variant="outline" size="sm" className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50">
                       <MessageCircle className="w-4 h-4 mr-2" />
                       Comment
                     </Button>
                   </div>
                   
                   <Link to="/blog">
                     <Button variant="outline" className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50">
                       <ArrowLeft className="w-4 h-4 mr-2" />
                       Back to Blog
                     </Button>
                   </Link>
                 </div>
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

export default BlogPost; 