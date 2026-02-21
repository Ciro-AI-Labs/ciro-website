import { Link } from "react-router-dom";
import { BarChart3, Database, Smartphone, Factory, Eye, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { trackEvent } from "@/lib/gtag";


const ecosystemProducts = [
  {
    name: "CIRO ERP",
    taglineKey: "products.ecosystem.erp.tagline",
    icon: Factory,
    color: "orange",
    href: "/products/erp",
    pointsKey: "products.ecosystem.erp.points",
  },
  {
    name: "CIRO SALES",
    taglineKey: "products.ecosystem.sales.tagline",
    icon: Smartphone,
    color: "green",
    href: "/products/sales",
    pointsKey: "products.ecosystem.sales.points",
  },
  {
    name: "CIRO LAKE",
    taglineKey: "products.ecosystem.lake.tagline",
    icon: Database,
    color: "blue",
    href: "/products/lake",
    pointsKey: "products.ecosystem.lake.points",
  },
  {
    name: "CIRO LABS RESEARCH",
    taglineKey: "products.ecosystem.labs.tagline",
    icon: Eye,
    color: "cyan",
    href: "/products/vision",
    pointsKey: "products.ecosystem.labs.points",
  },
];

const colorMap: Record<string, { dot: string; icon: string; iconBg: string }> = {
  orange: { dot: "bg-orange-500", icon: "text-orange-600", iconBg: "bg-orange-50" },
  green: { dot: "bg-emerald-500", icon: "text-emerald-600", iconBg: "bg-emerald-50" },
  blue: { dot: "bg-blue-500", icon: "text-blue-600", iconBg: "bg-blue-50" },
  cyan: { dot: "bg-cyan-500", icon: "text-cyan-600", iconBg: "bg-cyan-50" },
};

const orbitalNodes = [
  { name: "DB", color: "#3b82f6" },
  { name: "Docs", color: "#8b5cf6" },
  { name: "IoT", color: "#06b6d4" },
  { name: "Cloud", color: "#6366f1" },
  { name: "ERP", color: "#f59e0b" },
  { name: "CRM", color: "#10b981" },
  { name: "APIs", color: "#ec4899" },
  { name: "Files", color: "#64748b" },
];

const OrbitalHub = () => {
  const size = 320;
  const cx = size / 2;
  const cy = size / 2;
  const orbitRadius = 120;
  const hubRadius = 28;
  const nodeRadius = 24;

  const nodes = orbitalNodes.map((node, i) => {
    const angle = (i * 45 - 90) * (Math.PI / 180);
    return {
      ...node,
      x: cx + Math.cos(angle) * orbitRadius,
      y: cy + Math.sin(angle) * orbitRadius,
    };
  });

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
        className="absolute inset-0"
      >
        <defs>
          {/* Orbit ring gradient */}
          <radialGradient id="orbitGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="85%" stopColor="#3b82f6" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </radialGradient>
          {/* Connection line gradient */}
          {nodes.map((node, i) => (
            <linearGradient
              key={`grad-${i}`}
              id={`lineGrad-${i}`}
              x1={cx}
              y1={cy}
              x2={node.x}
              y2={node.y}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
              <stop offset="100%" stopColor={node.color} stopOpacity="0.15" />
            </linearGradient>
          ))}
          {/* Pulse dot filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background glow */}
        <circle cx={cx} cy={cy} r={orbitRadius + 20} fill="url(#orbitGlow)" />

        {/* Orbit ring */}
        <circle
          cx={cx}
          cy={cy}
          r={orbitRadius}
          fill="none"
          stroke="rgba(148, 163, 184, 0.08)"
          strokeWidth="1"
          strokeDasharray="4 6"
        />

        {/* Connection lines */}
        {nodes.map((node, i) => (
          <line
            key={`line-${i}`}
            x1={cx}
            y1={cy}
            x2={node.x}
            y2={node.y}
            stroke={`url(#lineGrad-${i})`}
            strokeWidth="1"
          />
        ))}

        {/* Animated pulse dots traveling along lines */}
        {nodes.map((node, i) => (
          <circle key={`pulse-${i}`} r="2.5" fill="#3b82f6" filter="url(#glow)" opacity="0.9">
            <animateMotion
              dur={`${2.5 + i * 0.3}s`}
              repeatCount="indefinite"
              path={`M${cx},${cy} L${node.x},${node.y}`}
            />
          </circle>
        ))}
      </svg>

      {/* Central Hub */}
      <motion.div
        className="absolute z-20 flex items-center justify-center"
        style={{
          left: cx - hubRadius,
          top: cy - hubRadius,
          width: hubRadius * 2,
          height: hubRadius * 2,
        }}
        animate={{
          boxShadow: [
            '0 0 20px rgba(59,130,246,0.3), 0 0 40px rgba(59,130,246,0.1)',
            '0 0 30px rgba(59,130,246,0.5), 0 0 60px rgba(59,130,246,0.15)',
            '0 0 20px rgba(59,130,246,0.3), 0 0 40px rgba(59,130,246,0.1)',
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
          <BarChart3 className="w-6 h-6 text-white" />
        </div>
      </motion.div>

      {/* Data source nodes */}
      {nodes.map((node, i) => (
        <motion.div
          key={node.name}
          className="absolute z-10 flex items-center justify-center"
          style={{
            left: node.x - nodeRadius,
            top: node.y - nodeRadius,
            width: nodeRadius * 2,
            height: nodeRadius * 2,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 + i * 0.08, duration: 0.5, ease: "backOut" }}
          whileHover={{ scale: 1.15 }}
        >
          <div
            className="w-full h-full rounded-full flex items-center justify-center text-[11px] font-semibold tracking-wide border backdrop-blur-sm cursor-default select-none"
            style={{
              background: `linear-gradient(135deg, ${node.color}15, ${node.color}08)`,
              borderColor: `${node.color}30`,
              color: node.color,
            }}
          >
            {node.name}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const Products = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-full mb-6">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
            {t('products.badge')}
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-slate-900">{t('products.heading1')}</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              {t('products.heading2')}
            </span>
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            {t('products.description')}
          </p>
        </div>

        {/* CIRO AI Hero Card — full width, dark bg */}
        <div className="mb-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 lg:p-12 border border-slate-700 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left side: text + CTA */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-blue-400 bg-blue-600/10 border border-blue-500/20 rounded-full mb-4">
                  <BarChart3 className="w-3.5 h-3.5" />
                  {t('products.flagshipBadge')}
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  {t('products.ciroAiTitle')}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                  {t('products.ciroAiDesc')}
                </p>
                <ul className="space-y-2 mb-8">
                  {(t('products.ciroAiBullets', { returnObjects: true }) as string[]).map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/products/ai-analytics"
                  onClick={() => trackEvent('cta_click_learn_more', { product: 'ciro_ai', page: '/' })}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all"
                >
                  {t('products.exploreCiroAi')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Right side: Orbital Data Hub Visualization */}
              <div className="hidden lg:flex items-center justify-center">
                <OrbitalHub />
              </div>
            </div>
          </div>
        </div>

        {/* 4 Ecosystem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {ecosystemProducts.map((product) => {
            const colors = colorMap[product.color];
            return (
              <Link
                key={product.name}
                to={product.href}
                onClick={() => trackEvent('cta_click_learn_more', { product: product.name, page: '/' })}
                className="group bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-5">
                  <div className={`w-12 h-12 ${colors.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <product.icon className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{product.name}</h3>
                    <p className="text-slate-600 mt-1">{t(product.taglineKey)}</p>
                  </div>
                </div>

                {/* Key Points */}
                <ul className="space-y-2.5 mb-6">
                  {(t(product.pointsKey, { returnObjects: true }) as string[]).map((point, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-slate-600">
                      <div className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Learn More */}
                <div className={`flex items-center gap-1 text-sm font-medium ${colors.icon} group-hover:gap-2 transition-all`}>
                  {t('products.learnMore')}
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            {t('products.viewAll')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
