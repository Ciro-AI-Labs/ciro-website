import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import {
  Database,
  Zap,
  Brain,
  Shield,
  Network,
  Cloud,
  Lock,
  ArrowRight,
  CheckCircle,
  BarChart3,
  MessageSquare,
  Workflow,
  TrendingUp,
  Activity,
  Cpu,
  Layers,
  Globe,
  Server,
} from "lucide-react";
import type { TFunction } from "i18next";

/* ────────────────────────────────────────────────────────────
   Hero: Live Dashboard Mockup
──────────────────────────────────────────────────────────── */

const sparkline = [28, 35, 32, 42, 38, 50, 46, 55, 52, 62, 58, 68, 64, 72, 69, 78, 74, 82, 79, 88, 84, 90, 87, 93];
const svgW = 300;
const svgH = 50;
const maxSpark = Math.max(...sparkline);
const sparkPoints = sparkline.map((v, i) => {
  const x = (i / (sparkline.length - 1)) * svgW;
  const y = svgH - (v / maxSpark) * (svgH - 4);
  return `${x},${y}`;
});
const sparkLinePath = `M${sparkPoints.join(" L")}`;
const sparkAreaPath = `${sparkLinePath} L${svgW},${svgH} L0,${svgH} Z`;

const HeroDashboard = ({ t }: { t: TFunction }) => (
  <div className="bg-slate-900/80 border border-white/[0.08] rounded-2xl shadow-2xl backdrop-blur-sm overflow-hidden">
    {/* Title bar */}
    <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06]">
      <div className="flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-xs text-gray-500 ml-2 font-mono">app.ciroai.us/dashboard</span>
      </div>
      <div className="flex items-center gap-1.5">
        <motion.div
          className="w-2 h-2 bg-green-400 rounded-full"
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <span className="text-[10px] text-green-400 font-medium">Live</span>
      </div>
    </div>

    <div className="p-5 space-y-4">
      {/* KPI row */}
      <div className="grid grid-cols-4 gap-3">
        {[
          { label: t('pages.aiAnalytics.dashboard.eventsPerSec'), value: "487K", trend: "+12%", color: "#10b981" },
          { label: t('pages.aiAnalytics.dashboard.latency'), value: "8.3ms", trend: "-23%", color: "#3b82f6" },
          { label: t('pages.aiAnalytics.dashboard.modelsActive'), value: "12", trend: "+3", color: "#8b5cf6" },
          { label: t('pages.aiAnalytics.dashboard.uptime'), value: "99.97%", trend: "SLA", color: "#f59e0b" },
        ].map((kpi, i) => (
          <motion.div
            key={kpi.label}
            className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
          >
            <div className="text-[10px] text-gray-500 mb-1">{kpi.label}</div>
            <div className="text-lg font-bold text-white">{kpi.value}</div>
            <span className="text-[10px] font-medium" style={{ color: kpi.color }}>{kpi.trend}</span>
          </motion.div>
        ))}
      </div>

      {/* Throughput sparkline */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-400 font-medium">{t('pages.aiAnalytics.dashboard.throughput')}</span>
          <div className="flex items-center gap-1">
            <TrendingUp className="w-3 h-3 text-green-400" />
            <span className="text-[10px] text-green-400 font-medium">+18.4%</span>
          </div>
        </div>
        <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full h-12" preserveAspectRatio="none">
          <defs>
            <linearGradient id="heroSparkFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d={sparkAreaPath}
            fill="url(#heroSparkFill)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          />
          <motion.path
            d={sparkLinePath}
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.4, duration: 1.5, ease: "easeOut" }}
          />
        </svg>
      </div>

      {/* NL query row */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-xl">
        <MessageSquare className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
        <span className="text-xs text-gray-400">{t('pages.aiAnalytics.dashboard.nlQuery')}</span>
        <motion.div
          className="w-0.5 h-3.5 bg-blue-400 ml-auto"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity }}
        />
      </div>

      {/* Active connectors */}
      <div className="flex flex-wrap gap-1.5">
        {["Kafka", "PostgreSQL", "SAP", "AWS S3", "MongoDB", "MQTT", "+44"].map((c, i) => (
          <span key={i} className="px-2 py-0.5 bg-white/[0.04] border border-white/[0.06] text-[10px] text-gray-400 rounded-md">
            {c}
          </span>
        ))}
      </div>
    </div>
  </div>
);

/* ────────────────────────────────────────────────────────────
   Page
──────────────────────────────────────────────────────────── */

const AIAnalytics = () => {
  const { t } = useTranslation();

  /* ── Capabilities (built with translation keys) ── */
  const capabilities = [
    {
      icon: MessageSquare,
      title: t('pages.aiAnalytics.capabilities.streaming.title'),
      description: t('pages.aiAnalytics.capabilities.streaming.desc'),
      color: "#f59e0b",
      stats: { value: t('pages.aiAnalytics.capabilities.streaming.statsValue'), label: t('pages.aiAnalytics.capabilities.streaming.statsLabel') },
      techs: ["Apache Kafka", "Apache Flink"],
    },
    {
      icon: Brain,
      title: t('pages.aiAnalytics.capabilities.nlAi.title'),
      description: t('pages.aiAnalytics.capabilities.nlAi.desc'),
      color: "#8b5cf6",
      stats: { value: t('pages.aiAnalytics.capabilities.nlAi.statsValue'), label: t('pages.aiAnalytics.capabilities.nlAi.statsLabel') },
      techs: ["Custom LLMs", "RAG Pipeline"],
    },
    {
      icon: Workflow,
      title: t('pages.aiAnalytics.capabilities.workflow.title'),
      description: t('pages.aiAnalytics.capabilities.workflow.desc'),
      color: "#3b82f6",
      stats: { value: t('pages.aiAnalytics.capabilities.workflow.statsValue'), label: t('pages.aiAnalytics.capabilities.workflow.statsLabel') },
      techs: ["Apache Airflow", "Event Triggers"],
    },
    {
      icon: Network,
      title: t('pages.aiAnalytics.capabilities.connectors.title'),
      description: t('pages.aiAnalytics.capabilities.connectors.desc'),
      color: "#10b981",
      stats: { value: t('pages.aiAnalytics.capabilities.connectors.statsValue'), label: t('pages.aiAnalytics.capabilities.connectors.statsLabel') },
      techs: ["Auto-Discovery", "Schema Sync"],
    },
    {
      icon: Lock,
      title: t('pages.aiAnalytics.capabilities.private.title'),
      description: t('pages.aiAnalytics.capabilities.private.desc'),
      color: "#ef4444",
      stats: { value: t('pages.aiAnalytics.capabilities.private.statsValue'), label: t('pages.aiAnalytics.capabilities.private.statsLabel') },
      techs: ["Private Nodes", "Air-Gapped"],
    },
    {
      icon: Shield,
      title: t('pages.aiAnalytics.capabilities.security.title'),
      description: t('pages.aiAnalytics.capabilities.security.desc'),
      color: "#06b6d4",
      stats: { value: t('pages.aiAnalytics.capabilities.security.statsValue'), label: t('pages.aiAnalytics.capabilities.security.statsLabel') },
      techs: ["ISO 27001", "E2E Encryption"],
    },
  ];

  /* ── Connector categories ── */
  const connectorCategories = [
    { icon: Database, label: t('pages.aiAnalytics.connectorCategories.databases'), items: ["PostgreSQL", "MySQL", "Oracle", "MongoDB", "Redis", "ClickHouse"], color: "#3b82f6" },
    { icon: Cloud, label: t('pages.aiAnalytics.connectorCategories.cloud'), items: ["AWS", "Azure", "GCP", "Snowflake", "BigQuery", "Redshift"], color: "#8b5cf6" },
    { icon: Layers, label: t('pages.aiAnalytics.connectorCategories.enterprise'), items: ["SAP", "Salesforce", "Workday", "ServiceNow", "Jira", "Slack"], color: "#f59e0b" },
    { icon: Activity, label: t('pages.aiAnalytics.connectorCategories.iot'), items: ["OPC UA", "Modbus", "MQTT", "PLC Systems", "SCADA", "Sensors"], color: "#10b981" },
    { icon: Cpu, label: t('pages.aiAnalytics.connectorCategories.streaming'), items: ["Kafka", "RabbitMQ", "Pulsar", "Kinesis", "EventHub", "Pub/Sub"], color: "#ef4444" },
    { icon: Globe, label: t('pages.aiAnalytics.connectorCategories.files'), items: ["CSV", "Excel", "JSON", "Parquet", "REST", "GraphQL"], color: "#06b6d4" },
  ];

  /* ── Architecture layers ── */
  const architectureLayers = [
    {
      title: t('pages.aiAnalytics.layers.ingestion.title'),
      color: "#3b82f6",
      items: t('pages.aiAnalytics.layers.ingestion.items', { returnObjects: true }) as string[],
    },
    {
      title: t('pages.aiAnalytics.layers.processing.title'),
      color: "#8b5cf6",
      items: t('pages.aiAnalytics.layers.processing.items', { returnObjects: true }) as string[],
    },
    {
      title: t('pages.aiAnalytics.layers.intelligence.title'),
      color: "#f59e0b",
      items: t('pages.aiAnalytics.layers.intelligence.items', { returnObjects: true }) as string[],
    },
    {
      title: t('pages.aiAnalytics.layers.action.title'),
      color: "#10b981",
      items: t('pages.aiAnalytics.layers.action.items', { returnObjects: true }) as string[],
    },
  ];

  /* ── Flow labels ── */
  const flowLabels = t('pages.aiAnalytics.flowLabels', { returnObjects: true }) as string[];

  /* ── Hero stats ── */
  const heroStats = [
    { value: t('pages.aiAnalytics.stats.events.value'), label: t('pages.aiAnalytics.stats.events.label') },
    { value: t('pages.aiAnalytics.stats.latency.value'), label: t('pages.aiAnalytics.stats.latency.label') },
    { value: t('pages.aiAnalytics.stats.connectors.value'), label: t('pages.aiAnalytics.stats.connectors.label') },
    { value: t('pages.aiAnalytics.stats.uptime.value'), label: t('pages.aiAnalytics.stats.uptime.label') },
  ];

  /* ── Deploy options ── */
  const deployOptions = [
    {
      icon: Cloud,
      title: t('pages.aiAnalytics.deployOptions.cloud.title'),
      color: "#3b82f6",
      desc: t('pages.aiAnalytics.deployOptions.cloud.desc'),
      items: t('pages.aiAnalytics.deployOptions.cloud.items', { returnObjects: true }) as string[],
    },
    {
      icon: Lock,
      title: t('pages.aiAnalytics.deployOptions.private.title'),
      color: "#ef4444",
      desc: t('pages.aiAnalytics.deployOptions.private.desc'),
      items: t('pages.aiAnalytics.deployOptions.private.items', { returnObjects: true }) as string[],
      featured: true,
    },
    {
      icon: Server,
      title: t('pages.aiAnalytics.deployOptions.hybrid.title'),
      color: "#10b981",
      desc: t('pages.aiAnalytics.deployOptions.hybrid.desc'),
      items: t('pages.aiAnalytics.deployOptions.hybrid.items', { returnObjects: true }) as string[],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      <main className="flex-grow pt-20">

        {/* ━━━ Hero ━━━ */}
        <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[150px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px]" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
              {/* Left: copy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-blue-400 bg-blue-600/10 border border-blue-500/20 rounded-full mb-6">
                  <BarChart3 className="w-4 h-4" />
                  {t('pages.aiAnalytics.badge')}
                </div>

                <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.05]">
                  <span className="text-white">{t('pages.aiAnalytics.heading1')}</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    {t('pages.aiAnalytics.heading2')}
                  </span>
                </h1>

                <p className="text-xl text-gray-400 mb-8 max-w-xl leading-relaxed">
                  {t('pages.aiAnalytics.description')}
                </p>

                {/* Hero stats */}
                <div className="flex items-center gap-8 mb-8">
                  {heroStats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-2xl font-black text-blue-400">{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8" asChild>
                    <Link to="/contact">{t('pages.aiAnalytics.bookDemo')} <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/10 text-white hover:bg-white/5" asChild>
                    <a href="https://app.ciroai.us">{t('pages.aiAnalytics.loginPlatform')}</a>
                  </Button>
                </div>
              </motion.div>

              {/* Right: dashboard */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <HeroDashboard t={t} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ━━━ Trusted By bar ━━━ */}
        <section className="py-8 border-y border-white/[0.04]">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-10 flex-wrap">
              <span className="text-xs text-gray-600 uppercase tracking-wider">{t('pages.aiAnalytics.poweredBy')}</span>
              {["Apache Kafka", "Apache Flink", "Apache Airflow", "Kubernetes", "S3 + Parquet"].map((tech) => (
                <span key={tech} className="text-sm text-gray-500 font-medium">{tech}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ Capabilities (bento grid) ━━━ */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {t('pages.aiAnalytics.capabilitiesTitle')}
                </h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                  {t('pages.aiAnalytics.capabilitiesDesc')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {capabilities.map((cap, i) => (
                  <motion.div
                    key={cap.title}
                    className="group bg-white/[0.02] border border-white/[0.06] rounded-2xl p-7 hover:border-white/[0.12] transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                  >
                    {/* Icon + stat */}
                    <div className="flex items-start justify-between mb-5">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${cap.color}15`, color: cap.color }}
                      >
                        <cap.icon className="w-5 h-5" />
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-black" style={{ color: cap.color }}>{cap.stats.value}</div>
                        <div className="text-[10px] text-gray-500">{cap.stats.label}</div>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">{cap.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">{cap.description}</p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {cap.techs.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[10px] font-medium rounded-md border"
                          style={{
                            color: cap.color,
                            backgroundColor: `${cap.color}08`,
                            borderColor: `${cap.color}20`,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ Architecture Diagram ━━━ */}
        <section className="py-20 md:py-28 border-t border-white/[0.04]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {t('pages.aiAnalytics.architectureTitle')}
                </h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                  {t('pages.aiAnalytics.architectureDesc')}
                </p>
              </div>

              {/* Flow layers */}
              <div className="space-y-3">
                {architectureLayers.map((layer, i) => (
                  <motion.div
                    key={layer.title}
                    className="flex flex-col lg:flex-row items-stretch gap-0 bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden"
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    {/* Layer label */}
                    <div
                      className="lg:w-56 flex-shrink-0 flex items-center gap-3 px-6 py-5 border-b lg:border-b-0 lg:border-r border-white/[0.06]"
                      style={{ backgroundColor: `${layer.color}08` }}
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                        style={{ backgroundColor: `${layer.color}20`, color: layer.color }}
                      >
                        {i + 1}
                      </div>
                      <span className="text-sm font-semibold" style={{ color: layer.color }}>
                        {layer.title}
                      </span>
                    </div>

                    {/* Items */}
                    <div className="flex-1 flex items-center gap-3 px-6 py-4 flex-wrap">
                      {layer.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 px-3 py-1.5 bg-white/[0.03] border border-white/[0.06] rounded-lg"
                        >
                          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: layer.color }} />
                          <span className="text-sm text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Arrow (desktop) */}
                    {i < architectureLayers.length - 1 && (
                      <div className="hidden lg:flex items-center pr-4">
                        <ArrowRight className="w-4 h-4 text-gray-600" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Animated data flow */}
              <div className="mt-6">
                <div className="h-1 bg-white/[0.04] rounded-full overflow-hidden relative">
                  <motion.div
                    className="absolute inset-y-0 left-0 w-1/4 rounded-full"
                    style={{ background: "linear-gradient(90deg, transparent, #3b82f6, #8b5cf6, #10b981, transparent)" }}
                    animate={{ left: ["-25%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-[11px] text-gray-600 px-1">
                  {flowLabels.map((label) => (
                    <span key={label}>{label}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ Connectors ━━━ */}
        <section className="py-20 md:py-28 border-t border-white/[0.04]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {t('pages.aiAnalytics.connectorsTitle')}
                </h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                  {t('pages.aiAnalytics.connectorsDesc')}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {connectorCategories.map((cat, i) => (
                  <motion.div
                    key={cat.label}
                    className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 hover:border-white/[0.1] transition-all"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${cat.color}15`, color: cat.color }}
                      >
                        <cat.icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-white">{cat.label}</h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.items.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/[0.03] border border-white/[0.06] rounded-lg text-xs text-gray-400"
                        >
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ Deployment Options ━━━ */}
        <section className="py-20 md:py-28 border-t border-white/[0.04]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {t('pages.aiAnalytics.deployTitle')}
                </h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                  {t('pages.aiAnalytics.deployDesc')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {deployOptions.map((opt, i) => (
                  <motion.div
                    key={opt.title}
                    className={`rounded-2xl p-7 border transition-all ${
                      opt.featured
                        ? "bg-white/[0.04] border-white/[0.1]"
                        : "bg-white/[0.02] border-white/[0.06]"
                    }`}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {opt.featured && (
                      <div className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold text-red-400 bg-red-600/10 border border-red-500/20 rounded-full mb-4">
                        {t('pages.aiAnalytics.deployOptions.private.badge')}
                      </div>
                    )}
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${opt.color}15`, color: opt.color }}
                    >
                      <opt.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{opt.title}</h3>
                    <p className="text-sm text-gray-400 mb-5 leading-relaxed">{opt.desc}</p>
                    <ul className="space-y-2">
                      {opt.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* Security badges */}
              <div className="flex items-center justify-center gap-8 mt-12">
                {[
                  { label: "SOC 2 Type II", icon: Shield },
                  { label: "ISO 27001", icon: Shield },
                  { label: "GDPR Compliant", icon: Lock },
                  { label: "E2E Encryption", icon: Lock },
                ].map((badge) => (
                  <div key={badge.label} className="flex items-center gap-2 text-gray-500">
                    <badge.icon className="w-4 h-4" />
                    <span className="text-xs font-medium">{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ CTA ━━━ */}
        <section className="py-20 border-t border-white/[0.04]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-blue-600/5 border border-blue-500/20 rounded-2xl p-10 md:p-14">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {t('pages.aiAnalytics.ctaTitle')}
                </h2>
                <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                  {t('pages.aiAnalytics.ctaDesc')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8" asChild>
                    <Link to="/contact">{t('pages.aiAnalytics.scheduleDemo')} <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/10 text-white hover:bg-white/5" asChild>
                    <a href="https://app.ciroai.us">{t('pages.aiAnalytics.tryPlatform')}</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default AIAnalytics;
