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
  Award,
  Zap,
  Globe,
  Users,
  Building,
  Newspaper
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/home/Contact";
import { useEffect } from "react";

const NewsPost = () => {
  const { slug } = useParams();

  // Mock data - in real app this would come from Supabase
  const newsArticles = [
    {
      id: 1,
      title: "CIRO AI Labs Launches Revolutionary Industrial AI Platform",
      excerpt: "New platform combines natural language analytics and computer vision to transform manufacturing and logistics operations with real-time intelligence.",
      content: `
        <div class="max-w-none">
          <p class="mb-8 text-xl text-gray-300 leading-relaxed">
            CIRO AI Labs is excited to announce the launch of our revolutionary industrial AI platform, 
            designed to transform how manufacturing and logistics companies operate in the digital age. 
            This groundbreaking platform represents a significant leap forward in industrial automation 
            and intelligence.
          </p>
          
          <div class="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-8 mb-12">
            <h2 class="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              Revolutionary Features
            </h2>
            <p class="text-lg text-gray-300 leading-relaxed">
              Our platform combines cutting-edge natural language processing with advanced computer vision 
              capabilities, enabling companies to ask questions about their operations in plain English 
              and receive instant, actionable insights.
            </p>
          </div>
          
          <h2 class="text-3xl font-bold text-white mb-6 mt-12">A New Era of Industrial Intelligence</h2>
          <p class="mb-6 text-lg text-gray-300 leading-relaxed">
            The CIRO AI platform represents a breakthrough in industrial AI, combining cutting-edge natural language 
            processing with advanced computer vision capabilities. This unique combination enables companies 
            to ask questions about their operations in plain English and receive instant, actionable insights.
          </p>
          <p class="mb-8 text-lg text-gray-300 leading-relaxed">
            "We're democratizing AI for industrial applications," says our CEO. "Companies no longer need 
            specialized data science teams to unlock the power of their operational data."
          </p>
          
          <h2 class="text-3xl font-bold text-white mb-6 mt-12">Key Platform Features</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div class="bg-card/50 border border-border/50 rounded-xl p-6">
              <h3 class="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
                Natural Language Analytics
              </h3>
              <p class="text-gray-300 text-sm">
                Ask questions about your data in plain English and get intelligent, contextual answers 
                without needing to write complex queries or build dashboards.
              </p>
            </div>
            
            <div class="bg-card/50 border border-border/50 rounded-xl p-6">
              <h3 class="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
                Real-time Computer Vision
              </h3>
              <p class="text-gray-300 text-sm">
                Monitor production lines and quality control automatically with AI-powered visual 
                analysis that detects anomalies and defects in real-time.
              </p>
            </div>
            
            <div class="bg-card/50 border border-border/50 rounded-xl p-6">
              <h3 class="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
                Predictive Maintenance
              </h3>
              <p class="text-gray-300 text-sm">
                Identify potential issues before they cause downtime with advanced predictive 
                analytics that learn from your equipment's operational patterns.
              </p>
            </div>
            
            <div class="bg-card/50 border border-border/50 rounded-xl p-6">
              <h3 class="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Seamless Integration
              </h3>
              <p class="text-gray-300 text-sm">
                Works with existing manufacturing systems and databases without requiring 
                expensive infrastructure changes or complex migrations.
              </p>
            </div>
          </div>
          
          <h2 class="text-3xl font-bold text-white mb-6 mt-12">Industry Impact</h2>
          <p class="mb-6 text-lg text-gray-300 leading-relaxed">
            Early adopters of our platform have already seen remarkable results, including 85% reduction 
            in defect rates, 60% decrease in waste, and 40% improvement in operational efficiency. 
            These improvements translate to millions of dollars in cost savings and enhanced competitiveness.
          </p>
          <p class="mb-8 text-lg text-gray-300 leading-relaxed">
            "The CIRO AI platform has transformed how we think about manufacturing intelligence," 
            says a leading automotive manufacturer. "We're seeing insights we never had before."
          </p>
          
          <h2 class="text-3xl font-bold text-white mb-6 mt-12">What's Next</h2>
          <p class="mb-6 text-lg text-gray-300 leading-relaxed">
            This launch marks just the beginning of our journey to democratize industrial AI. We're 
            already working on advanced features including autonomous decision-making capabilities, 
            enhanced predictive analytics, and expanded industry-specific solutions.
          </p>
          <p class="mb-8 text-lg text-gray-300 leading-relaxed">
            To learn more about how CIRO AI can transform your operations, contact our team for a 
            personalized demonstration and consultation.
          </p>
          
          <div class="text-center py-8">
            <p class="text-xl font-semibold text-purple-400 mb-2">CIRO Team</p>
            <p class="text-gray-400">June 20, 2025</p>
          </div>
        </div>
      `,
      category: "Product Launch",
      date: "2025-06-20",
      author: "CIRO Team",
      readTime: "5 min read",
      image: "/images/Ciro News.png",
      featured: true,
      tags: ["Product Launch", "AI Platform", "Manufacturing", "Innovation"],
      slug: "ciro-ai-platform-launch-2025"
    },
    {
      id: 2,
      title: "Ciro AI Selected for NVIDIA Inception Program with $600K+ in Perks",
      excerpt: "Ciro AI joins NVIDIA's prestigious Inception Program, receiving over $600,000 in benefits including compute credits, technical support, and go-to-market resources to accelerate AI development across Latin America.",
      content: `
        <div class="max-w-none">
          <p class="mb-8 text-xl text-gray-300 leading-relaxed">
            Ciro AI is proud to announce our selection for NVIDIA's prestigious Inception Program, 
            a global initiative that supports cutting-edge AI startups. This recognition comes with 
            over $600,000 in benefits and resources that will accelerate our AI development efforts 
            across Latin America.
          </p>
          
          <div class="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-2xl p-8 mb-12">
            <h2 class="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
              </svg>
              NVIDIA Inception Program Benefits
            </h2>
            <p class="text-lg text-gray-300 leading-relaxed">
              As part of the Inception Program, Ciro AI will receive comprehensive support including 
              compute credits, technical expertise, and go-to-market resources valued at over $600,000.
            </p>
          </div>
          
          <h2 class="text-3xl font-bold text-white mb-6 mt-12">What This Means for Ciro AI</h2>
          <p class="mb-6 text-lg text-gray-300 leading-relaxed">
            The NVIDIA Inception Program is one of the most prestigious accelerators for AI startups 
            worldwide. Being selected for this program validates our technology and provides us with 
            unprecedented access to NVIDIA's ecosystem and resources.
          </p>
          <p class="mb-8 text-lg text-gray-300 leading-relaxed">
            "This partnership with NVIDIA will be transformative for our development capabilities," 
            says our CTO. "The compute resources and technical support will accelerate our AI platform 
            development significantly."
          </p>
          
          <h2 class="text-3xl font-bold text-white mb-6 mt-12">Key Benefits and Resources</h2>
          
          <div class="space-y-6 mb-12">
            <div class="bg-card/50 border border-border/50 rounded-xl p-6">
              <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                </svg>
                Compute Credits & Infrastructure
              </h3>
              <p class="text-gray-300 leading-relaxed">
                Access to NVIDIA's powerful GPU infrastructure and compute credits worth over $200,000, 
                enabling us to train and deploy more sophisticated AI models without infrastructure constraints.
              </p>
            </div>
            
            <div class="bg-card/50 border border-border/50 rounded-xl p-6">
              <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
                Technical Support & Training
              </h3>
              <p class="text-gray-300 leading-relaxed">
                Direct access to NVIDIA's technical experts, specialized training programs, and best 
                practices for AI development and deployment.
              </p>
            </div>
            
            <div class="bg-card/50 border border-border/50 rounded-xl p-6">
              <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                Go-to-Market Support
              </h3>
              <p class="text-gray-300 leading-relaxed">
                Marketing resources, customer introductions, and partnership opportunities to accelerate 
                our market presence and customer acquisition across Latin America.
              </p>
            </div>
          </div>
          
          <h2 class="text-3xl font-bold text-white mb-6 mt-12">Impact on Latin America</h2>
          <p class="mb-6 text-lg text-gray-300 leading-relaxed">
            This partnership will have a significant impact on our ability to serve the Latin American market. 
            The additional compute power and resources will enable us to:
          </p>
          <ul class="list-disc list-inside mb-8 text-gray-300 space-y-2 text-lg">
            <li>Accelerate development of region-specific AI solutions</li>
            <li>Provide faster and more reliable AI services to Latin American customers</li>
            <li>Expand our technical team with NVIDIA-certified expertise</li>
            <li>Establish stronger partnerships with local technology providers</li>
            <li>Reduce costs for our customers through more efficient AI processing</li>
          </ul>
          
          <h2 class="text-3xl font-bold text-white mb-6 mt-12">Looking Forward</h2>
          <p class="mb-6 text-lg text-gray-300 leading-relaxed">
            This is a significant milestone for Ciro AI and represents our commitment to bringing 
            world-class AI capabilities to Latin America. The NVIDIA Inception Program will accelerate 
            our mission to democratize AI for industrial applications across the region.
          </p>
          <p class="mb-8 text-lg text-gray-300 leading-relaxed">
            We're excited to leverage these resources to deliver even more powerful and efficient 
            AI solutions to our customers while expanding our presence across Latin America.
          </p>
          
          <div class="text-center py-8">
            <p class="text-xl font-semibold text-purple-400 mb-2">CIRO Team</p>
            <p class="text-gray-400">June 15, 2025</p>
          </div>
        </div>
      `,
      category: "Partnership",
      date: "2025-06-15",
      author: "CIRO Team",
      readTime: "6 min read",
      image: "/images/Ciro News Nvidia.png",
      featured: false,
      tags: ["NVIDIA", "Inception Program", "Partnership", "AI Development", "Latin America"],
      slug: "ciro-ai-nvidia-inception-program-2025"
    }
  ];

  const article = newsArticles.find(article => article.slug === slug);

  // Set metadata for social sharing
  useEffect(() => {
    if (article) {
      // Update document title
      document.title = `${article.title} | Ciro AI News`;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', article.excerpt);
      } else {
        const newMetaDescription = document.createElement('meta');
        newMetaDescription.name = 'description';
        newMetaDescription.content = article.excerpt;
        document.head.appendChild(newMetaDescription);
      }
      
      // Update Open Graph tags
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', article.title);
      } else {
        const newOgTitle = document.createElement('meta');
        newOgTitle.setAttribute('property', 'og:title');
        newOgTitle.content = article.title;
        document.head.appendChild(newOgTitle);
      }
      
      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', article.excerpt);
      } else {
        const newOgDescription = document.createElement('meta');
        newOgDescription.setAttribute('property', 'og:description');
        newOgDescription.content = article.excerpt;
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
        twitterTitle.setAttribute('content', article.title);
      } else {
        const newTwitterTitle = document.createElement('meta');
        newTwitterTitle.name = 'twitter:title';
        newTwitterTitle.content = article.title;
        document.head.appendChild(newTwitterTitle);
      }
      
      const twitterDescription = document.querySelector('meta[name="twitter:description"]');
      if (twitterDescription) {
        twitterDescription.setAttribute('content', article.excerpt);
      } else {
        const newTwitterDescription = document.createElement('meta');
        newTwitterDescription.name = 'twitter:description';
        newTwitterDescription.content = article.excerpt;
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
  }, [article]);

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
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl">
            <div className="max-w-6xl mx-auto">
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
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
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
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                {/* Featured Image */}
                <div className="relative bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-2xl h-64 lg:h-80 overflow-hidden mb-12">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  {/* Ciro Logo - Bottom Left */}
                  <div className="absolute bottom-4 left-4">
                    <img 
                      src="/images/Ciro Logo Blanco Completo.png" 
                      alt="Ciro AI Logo"
                      className="h-12 w-auto opacity-90"
                    />
                  </div>
                  
                  {/* NVIDIA Badge - Bottom Right */}
                  <div className="absolute bottom-4 right-4">
                    <img 
                      src="/images/nvidia-inception-program-badge-rgb-for-screen.svg" 
                      alt="NVIDIA Inception Program Badge"
                      className="h-12 w-auto opacity-90"
                    />
                  </div>
                  
                  {/* Handshake Connection Line */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center gap-3">
                      <div className="w-20 h-0.5 bg-gradient-to-r from-purple-400 to-green-400"></div>
                      <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      <div className="w-20 h-0.5 bg-gradient-to-r from-green-400 to-purple-400"></div>
                    </div>
                  </div>
                </div>

                {/* Article Content */}
                <div 
                  className="prose prose-invert prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-8">
                {/* About the Author */}
                <div className="bg-card/80 border border-border/50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">About the Author</h3>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{article.author}</p>
                      <p className="text-sm text-gray-400">CIRO AI Labs</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300">
                    Expert insights on industrial AI, manufacturing technology, and digital transformation.
                  </p>
                </div>

                {/* Related Articles */}
                <div className="bg-card/80 border border-border/50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {newsArticles.filter(a => a.id !== article.id).slice(0, 2).map((relatedArticle) => (
                      <Link 
                        key={relatedArticle.id} 
                        to={`/news/${relatedArticle.slug}`}
                        className="block group"
                      >
                        <div className="relative bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl h-24 overflow-hidden mb-3">
                          <img 
                            src={relatedArticle.image} 
                            alt={relatedArticle.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/20"></div>
                          
                          {/* Add logo overlays for specific articles */}
                          {relatedArticle.slug === "ciro-ai-platform-launch-2025" && (
                            <div className="absolute bottom-1 right-1">
                              <img 
                                src="/images/Ciro Logo Blanco Completo.png" 
                                alt="Ciro AI Logo"
                                className="h-4 w-auto opacity-90"
                              />
                            </div>
                          )}
                          
                          {relatedArticle.slug === "ciro-ai-nvidia-inception-program-2025" && (
                            <>
                              <div className="absolute bottom-1 left-1">
                                <img 
                                  src="/images/Ciro Logo Blanco Completo.png" 
                                  alt="Ciro AI Logo"
                                  className="h-4 w-auto opacity-90"
                                />
                              </div>
                              <div className="absolute bottom-1 right-1">
                                <img 
                                  src="/images/nvidia-inception-program-badge-rgb-for-screen.svg" 
                                  alt="NVIDIA Inception Program Badge"
                                  className="h-4 w-auto opacity-90"
                                />
                              </div>
                            </>
                          )}
                        </div>
                        <h4 className="text-sm font-semibold text-white group-hover:text-purple-400 transition-colors line-clamp-2">
                          {relatedArticle.title}
                        </h4>
                        <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                          {relatedArticle.excerpt}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <Calendar className="w-3 h-3 text-gray-500" />
                          <span className="text-xs text-gray-500">
                            {new Date(relatedArticle.date).toLocaleDateString()}
                          </span>
                        </div>
                      </Link>
                    ))}
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