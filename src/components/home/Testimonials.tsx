
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import {
  Quote,
  Star,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Award,
  Users,
  CheckCircle,
  ArrowLeft,
  ArrowRight
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "CIRO became our plant's command center – we spotted and fixed issues 20% faster. The real-time insights and predictive alerts have transformed how we operate. I can't imagine running our facility without it now.",
    name: "Sarah Chen",
    title: "Operations Director",
    company: "Global Manufacturing Co.",
    rating: 5,
    industry: "Manufacturing",
    avatar: "SC"
  },
  {
    id: 2,
    quote: "Thanks to CIRO LABS Vision, our safety incidents have plummeted by 85%. It's like having an extra supervisor 24/7. The computer vision capabilities caught issues we never would have noticed.",
    name: "Michael Rodriguez",
    title: "Safety & Compliance Manager",
    company: "Industrial Safety Tech",
    rating: 5,
    industry: "Safety & Compliance",
    avatar: "MR"
  },
  {
    id: 3,
    quote: "The natural language querying reduced our analytics time by 65%. Now everyone can access insights, not just our data team. It's democratized data access across our entire organization.",
    name: "Dr. Emily Watson",
    title: "Chief Data Officer",
    company: "Logistics Partners Inc.",
    rating: 5,
    industry: "Logistics",
    avatar: "EW"
  },
  {
    id: 4,
    quote: "CIRO's predictive maintenance saved us $3.2M last year alone. We went from reactive to proactive maintenance, and our equipment uptime increased to 99.7%. Game-changing technology.",
    name: "David Kim",
    title: "Plant Manager",
    company: "Advanced Food Systems",
    rating: 5,
    industry: "Food & Beverage",
    avatar: "DK"
  }
];

const metrics = [
  {
    valueKey: "testimonials.metrics.manualTasks.value",
    labelKey: "testimonials.metrics.manualTasks.label",
    descriptionKey: "testimonials.metrics.manualTasks.description",
    icon: TrendingDown,
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-500/10 to-emerald-500/10",
    borderColor: "border-green-500/20"
  },
  {
    valueKey: "testimonials.metrics.outputQuality.value",
    labelKey: "testimonials.metrics.outputQuality.label",
    descriptionKey: "testimonials.metrics.outputQuality.description",
    icon: TrendingUp,
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-500/10 to-cyan-500/10",
    borderColor: "border-blue-500/20"
  },
  {
    valueKey: "testimonials.metrics.savings.value",
    labelKey: "testimonials.metrics.savings.label",
    descriptionKey: "testimonials.metrics.savings.description",
    icon: DollarSign,
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-500/10 to-pink-500/10",
    borderColor: "border-purple-500/20"
  },
  {
    valueKey: "testimonials.metrics.uptime.value",
    labelKey: "testimonials.metrics.uptime.label",
    descriptionKey: "testimonials.metrics.uptime.description",
    icon: CheckCircle,
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-500/10 to-red-500/10",
    borderColor: "border-orange-500/20"
  }
];

const companies = [
  { name: "Global Manufacturing Co.", industry: "Manufacturing" },
  { name: "Logistics Partners Inc.", industry: "Logistics" },
  { name: "Industrial Safety Tech", industry: "Safety" },
  { name: "Advanced Food Systems", industry: "Food & Beverage" },
  { name: "Smart Energy Solutions", industry: "Energy" },
  { name: "Precision Aerospace", industry: "Aerospace" }
];

const Testimonials = () => {
  const { t } = useTranslation();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/3 via-blue-600/3 to-cyan-600/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-purple-400 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-full mb-6">
              <Award className="w-4 h-4" />
              <span>{t('testimonials.badge')}</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {t('testimonials.heading1')}
              </span>
              <br />
              <span className="text-white">
                {t('testimonials.heading2')}
              </span>
            </h2>
            
            <p className="text-lg md:text-xl lg:text-lg xl:text-lg 2xl:text-xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
              {t('testimonials.description')}
            </p>
          </div>

          {/* Company Logos */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <p className="text-sm text-gray-400 mb-4">{t('testimonials.trustedBy')}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {companies.map((company, index) => (
                <div 
                  key={index} 
                  className="group relative bg-card/50 border border-border/30 rounded-xl p-4 hover:bg-card/70 hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="text-center">
                    <div className="text-lg font-bold text-white mb-1">{company.name}</div>
                    <div className="text-xs text-gray-400">{company.industry}</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Testimonials */}
            <div className="relative">
              <div className="bg-card/80 border border-border/50 rounded-2xl p-8 shadow-xl relative overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-purple-500/20">
                  <Quote className="w-12 h-12" />
                </div>

                {/* Testimonial Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <blockquote className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 italic">
                    "{testimonials[activeTestimonial].quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonials[activeTestimonial].avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonials[activeTestimonial].name}</div>
                      <div className="text-sm text-gray-400">
                        {testimonials[activeTestimonial].title}, {testimonials[activeTestimonial].company}
                      </div>
                      <div className="text-xs text-purple-400 font-medium">
                        {testimonials[activeTestimonial].industry}
                      </div>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between mt-8">
                    <button
                      onClick={prevTestimonial}
                      className="flex items-center gap-2 px-4 py-2 bg-card/50 border border-border/30 rounded-lg text-gray-300 hover:text-white hover:bg-card/70 transition-all duration-300"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span className="text-sm">{t('testimonials.previous')}</span>
                    </button>
                    
                    <div className="flex gap-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          className={cn(
                            "w-3 h-3 rounded-full transition-all duration-300",
                            index === activeTestimonial 
                              ? "bg-purple-500 shadow-lg shadow-purple-500/50" 
                              : "bg-gray-600 hover:bg-gray-500"
                          )}
                          onClick={() => setActiveTestimonial(index)}
                        />
                      ))}
                    </div>
                    
                    <button
                      onClick={nextTestimonial}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <span className="text-sm">{t('testimonials.next')}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="space-y-6">
              <div className="text-center lg:text-left mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{t('testimonials.provenResults')}</h3>
                <p className="text-gray-400">{t('testimonials.provenResultsDesc')}</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {metrics.map((metric, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${metric.bgColor} border ${metric.borderColor} rounded-xl p-6 hover:shadow-lg transition-all duration-300 group`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <metric.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className={`text-2xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                          {t(metric.valueKey)}
                        </div>
                        <div className="text-sm font-semibold text-white">{t(metric.labelKey)}</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {t(metric.descriptionKey)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">{t('testimonials.ctaHeading')}</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                {t('testimonials.ctaDescription')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                  {t('testimonials.ctaDemo')}
                </a>
                <a href="/use-cases" className="px-8 py-3 bg-card/50 border border-border/30 text-gray-300 hover:text-white hover:bg-card/70 rounded-lg font-semibold transition-all duration-300">
                  {t('testimonials.ctaCases')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
