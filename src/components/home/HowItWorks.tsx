import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import {
  Database, BarChart3, Zap, RefreshCw, ArrowRight,
  CheckCircle, Settings, MessageSquare, Bell, Eye,
  TrendingUp, Brain, Activity
} from "lucide-react";

/* ─── Step 1 Visual: Live Data Ingestion ─── */
const ConnectVisual = () => {
  const sources = [
    { name: "PostgreSQL", type: "DB", color: "#3b82f6", events: "1.2K/s" },
    { name: "SAP ERP", type: "ERP", color: "#f59e0b", events: "340/s" },
    { name: "IoT Gateway", type: "IoT", color: "#06b6d4", events: "8.7K/s" },
    { name: "Salesforce", type: "CRM", color: "#10b981", events: "120/s" },
    { name: "S3 Bucket", type: "Cloud", color: "#8b5cf6", events: "2.1K/s" },
  ];

  return (
    <div className="h-full flex flex-col justify-center p-6">
      {/* Streaming sources */}
      <div className="space-y-2.5">
        {sources.map((src, i) => (
          <motion.div
            key={src.name}
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            {/* Source label */}
            <div className="w-24 flex-shrink-0 text-right">
              <span className="text-xs font-medium text-gray-400">{src.name}</span>
            </div>

            {/* Animated pipeline */}
            <div className="flex-1 h-8 bg-white/[0.03] border border-white/[0.06] rounded-lg relative overflow-hidden">
              {/* Flowing data particles */}
              <motion.div
                className="absolute inset-y-0 left-0 w-1/3 rounded-lg"
                style={{
                  background: `linear-gradient(90deg, transparent, ${src.color}30, ${src.color}50, ${src.color}30, transparent)`,
                }}
                animate={{ left: ["-33%", "100%"] }}
                transition={{ duration: 1.5 + i * 0.2, repeat: Infinity, ease: "linear" }}
              />
              {/* Static content */}
              <div className="absolute inset-0 flex items-center justify-between px-3">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: src.color }} />
                  <span className="text-[11px] font-mono text-gray-500">{src.type}</span>
                </div>
                <span className="text-[11px] font-mono" style={{ color: src.color }}>{src.events}</span>
              </div>
            </div>

            {/* Arrow into lake */}
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
            >
              <ArrowRight className="w-3 h-3 text-blue-500" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* CIRO LAKE destination */}
      <motion.div
        className="mt-5 mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex items-center gap-4 px-5 py-3 bg-blue-600/10 border border-blue-500/20 rounded-xl">
          <Database className="w-5 h-5 text-blue-400" />
          <div>
            <div className="text-sm font-semibold text-blue-400">CIRO LAKE</div>
            <div className="text-[11px] text-gray-500">12.4K events/sec ingested</div>
          </div>
          <motion.div
            className="w-2 h-2 bg-green-400 rounded-full ml-auto"
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
};

/* ─── Step 2 Visual: AI Analysis in Action ─── */
const barData = [
  { label: "L1", h: 88, color: "#3b82f6" },
  { label: "L2", h: 92, color: "#3b82f6" },
  { label: "L3", h: 71, color: "#ef4444" },
  { label: "L4", h: 95, color: "#10b981" },
  { label: "L5", h: 89, color: "#3b82f6" },
  { label: "L6", h: 94, color: "#10b981" },
];

const sparkline = [32, 38, 35, 42, 40, 48, 52, 47, 55, 60, 58, 65, 62, 68, 72, 70, 75, 78, 74, 80];

const AnalyzeVisual = () => {
  const [phase, setPhase] = useState(0); // 0=typing, 1=thinking, 2=results

  useEffect(() => {
    setPhase(0);
    const t1 = setTimeout(() => setPhase(1), 600);
    const t2 = setTimeout(() => setPhase(2), 1800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // Build SVG sparkline path
  const maxVal = Math.max(...sparkline);
  const svgW = 260;
  const svgH = 40;
  const points = sparkline.map((v, i) => {
    const x = (i / (sparkline.length - 1)) * svgW;
    const y = svgH - (v / maxVal) * svgH;
    return `${x},${y}`;
  });
  const linePath = `M${points.join(" L")}`;
  const areaPath = `${linePath} L${svgW},${svgH} L0,${svgH} Z`;

  return (
    <div className="h-full flex flex-col p-6 gap-3">
      {/* NL Query input */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.05] border border-white/10 rounded-xl">
          <MessageSquare className="w-4 h-4 text-purple-400 flex-shrink-0" />
          <span className="text-sm text-gray-300">"Show me production efficiency by line this week"</span>
          <motion.div
            className="w-0.5 h-4 bg-purple-400 ml-0.5"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* AI thinking state */}
      {phase >= 1 && (
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Brain className="w-3.5 h-3.5 text-purple-400" />
          <span className="text-[11px] text-purple-400 font-medium">
            {phase === 1 ? "Analyzing 47,000 records..." : "CIRO AI analyzed 47,000 records in 1.2s"}
          </span>
          {phase === 1 && (
            <motion.div
              className="w-3 h-3 border-2 border-purple-400 border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            />
          )}
        </motion.div>
      )}

      {/* Results */}
      {phase >= 2 && (
        <motion.div
          className="flex-1 flex flex-col gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Bar chart + sparkline row */}
          <div className="grid grid-cols-5 gap-3 flex-1">
            {/* Bar chart — 3 cols */}
            <div className="col-span-3 bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-medium text-gray-400">Efficiency by Line</span>
                <span className="text-[10px] text-green-400 font-semibold">+4.2% avg</span>
              </div>
              {/* Bars rendered with explicit pixel heights */}
              <div className="flex-1 flex items-end gap-2 min-h-[100px]">
                {barData.map((bar, i) => (
                  <div key={bar.label} className="flex-1 flex flex-col items-center">
                    <motion.div
                      className="w-full rounded-t-md relative"
                      style={{ backgroundColor: bar.color, minWidth: 12 }}
                      initial={{ height: 0 }}
                      animate={{ height: bar.h }}
                      transition={{ delay: 0.15 + i * 0.08, duration: 0.7, ease: "backOut" }}
                    >
                      {/* Value label on top */}
                      <motion.span
                        className="absolute -top-4 left-1/2 -translate-x-1/2 text-[9px] font-bold"
                        style={{ color: bar.color }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 + i * 0.08 }}
                      >
                        {bar.h}%
                      </motion.span>
                    </motion.div>
                    <span className="text-[9px] text-gray-500 mt-1.5">{bar.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sparkline + KPIs — 2 cols */}
            <div className="col-span-2 flex flex-col gap-3">
              {/* Sparkline card */}
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3 flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-gray-400">Throughput Trend</span>
                  <TrendingUp className="w-3 h-3 text-green-400" />
                </div>
                <div className="text-lg font-bold text-white mb-1">1,247 <span className="text-[10px] text-gray-500 font-normal">units/hr</span></div>
                <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full h-10" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d={areaPath}
                    fill="url(#sparkFill)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  />
                  <motion.path
                    d={linePath}
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
                  />
                </svg>
              </div>

              {/* Quick KPIs */}
              <div className="grid grid-cols-2 gap-2">
                <motion.div
                  className="bg-green-500/10 border border-green-500/20 rounded-lg p-2.5 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="text-base font-bold text-green-400">93.2%</div>
                  <div className="text-[9px] text-gray-500">OEE</div>
                </motion.div>
                <motion.div
                  className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-2.5 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="text-base font-bold text-blue-400">98.7%</div>
                  <div className="text-[9px] text-gray-500">Quality</div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* AI Insight */}
          <motion.div
            className="flex items-start gap-2 p-3 bg-purple-600/10 border border-purple-500/20 rounded-xl"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Activity className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-xs text-purple-300 font-medium">AI Insight: </span>
              <span className="text-xs text-gray-400">Line 3 efficiency dropped 18% — temperature sensor anomaly detected at 14:23. Recommend maintenance check.</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

/* ─── Step 3 Visual: Action Cascade ─── */
const ActVisual = () => {
  const actions = [
    {
      product: "CIRO SALES",
      action: "Route optimized — 12 visits rescheduled",
      icon: "📱",
      color: "#10b981",
      time: "now",
    },
    {
      product: "CIRO ERP",
      action: "Batch #847 auto-released for shipping",
      icon: "🏭",
      color: "#f59e0b",
      time: "2s ago",
    },
    {
      product: "CIRO LABS",
      action: "Defect flagged — Camera 7, Line A",
      icon: "👁",
      color: "#06b6d4",
      time: "5s ago",
    },
    {
      product: "Webhook",
      action: "Alert dispatched to Slack #ops-critical",
      icon: "🔔",
      color: "#8b5cf6",
      time: "5s ago",
    },
  ];

  return (
    <div className="h-full flex flex-col justify-center p-6">
      {/* Trigger */}
      <motion.div
        className="flex items-center gap-2 px-4 py-2.5 bg-orange-600/10 border border-orange-500/20 rounded-xl mb-4 mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Zap className="w-4 h-4 text-orange-400" />
        <span className="text-xs font-semibold text-orange-400">Anomaly Trigger Fired</span>
        <motion.div
          className="w-2 h-2 bg-orange-400 rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      </motion.div>

      {/* Action cascade */}
      <div className="space-y-2">
        {actions.map((act, i) => (
          <motion.div
            key={act.product}
            className="flex items-center gap-3 px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-xl"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.2, duration: 0.4 }}
          >
            <span className="text-base">{act.icon}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold" style={{ color: act.color }}>{act.product}</span>
              </div>
              <span className="text-xs text-gray-400 block truncate">{act.action}</span>
            </div>
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <span className="text-[10px] text-gray-600">{act.time}</span>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 + i * 0.2, type: "spring" }}
              >
                <CheckCircle className="w-3.5 h-3.5 text-green-500" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Response time */}
      <motion.div
        className="mt-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <span className="text-[11px] text-gray-600">4 actions executed in </span>
        <span className="text-[11px] text-orange-400 font-bold">380ms</span>
      </motion.div>
    </div>
  );
};

/* ─── Step 4 Visual: Learning Loop ─── */
const LearnVisual = () => {
  const metrics = [
    { label: "Model Accuracy", value: 94, prev: 87, unit: "%", color: "#8b5cf6" },
    { label: "False Positives", value: 2.1, prev: 8.4, unit: "%", color: "#10b981", invert: true },
    { label: "Prediction Lead", value: 4.2, prev: 1.8, unit: "hrs", color: "#3b82f6" },
  ];

  return (
    <div className="h-full flex flex-col justify-center p-6">
      {/* Feedback loop visualization */}
      <motion.div
        className="flex items-center justify-center gap-2 mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <RefreshCw className="w-5 h-5 text-green-400" />
        </motion.div>
        <span className="text-xs font-semibold text-green-400">Continuous Learning Active — Cycle #1,847</span>
      </motion.div>

      {/* Improvement metrics with progress bars */}
      <div className="space-y-4">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.15 }}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs text-gray-400">{m.label}</span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-gray-600 line-through">{m.prev}{m.unit}</span>
                <span className="text-sm font-bold" style={{ color: m.color }}>{m.value}{m.unit}</span>
                <TrendingUp className="w-3 h-3 text-green-400" />
              </div>
            </div>
            <div className="h-2 bg-white/[0.05] rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: m.color }}
                initial={{ width: `${(m.prev / (m.invert ? 20 : 100)) * 100}%` }}
                animate={{ width: `${(m.value / (m.invert ? 20 : 100)) * 100}%` }}
                transition={{ delay: 0.5 + i * 0.2, duration: 1.2, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* ROI card */}
      <motion.div
        className="mt-5 flex items-center justify-between p-4 bg-green-600/10 border border-green-500/20 rounded-xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div>
          <div className="text-xs text-gray-400">Year 1 ROI</div>
          <div className="text-xl font-black text-green-400">3.2x</div>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-400">Annual Savings</div>
          <div className="text-xl font-black text-green-400">$2.5M</div>
        </div>
      </motion.div>
    </div>
  );
};

/* ─── Step config ─── */
const stepDefs = [
  {
    id: 1,
    titleKey: "howItWorks.steps.connect.title",
    subtitleKey: "howItWorks.steps.connect.subtitle",
    icon: Database,
    color: "#3b82f6",
    descriptionKey: "howItWorks.steps.connect.description",
    featuresKey: "howItWorks.steps.connect.features",
  },
  {
    id: 2,
    titleKey: "howItWorks.steps.analyze.title",
    subtitleKey: "howItWorks.steps.analyze.subtitle",
    icon: BarChart3,
    color: "#8b5cf6",
    descriptionKey: "howItWorks.steps.analyze.description",
    featuresKey: "howItWorks.steps.analyze.features",
  },
  {
    id: 3,
    titleKey: "howItWorks.steps.act.title",
    subtitleKey: "howItWorks.steps.act.subtitle",
    icon: Zap,
    color: "#f59e0b",
    descriptionKey: "howItWorks.steps.act.description",
    featuresKey: "howItWorks.steps.act.features",
  },
  {
    id: 4,
    titleKey: "howItWorks.steps.learn.title",
    subtitleKey: "howItWorks.steps.learn.subtitle",
    icon: RefreshCw,
    color: "#10b981",
    descriptionKey: "howItWorks.steps.learn.description",
    featuresKey: "howItWorks.steps.learn.features",
  },
];

const visuals: Record<number, React.ReactNode> = {
  1: <ConnectVisual />,
  2: <AnalyzeVisual />,
  3: <ActVisual />,
  4: <LearnVisual />,
};

const HowItWorks = () => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(1);
  const currentStep = stepDefs.find((s) => s.id === activeStep)!;

  return (
    <section className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-full mb-6">
              <Settings className="w-4 h-4" />
              {t('howItWorks.badge')}
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-slate-900">{t('howItWorks.heading1')}</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                {t('howItWorks.heading2')}
              </span>
            </h2>

            <p className="text-lg text-slate-600 mb-6 max-w-3xl mx-auto">
              {t('howItWorks.description')}
            </p>
          </div>

          {/* ── Step Selector (horizontal tabs) ── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {stepDefs.map((step, i) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={cn(
                  "relative rounded-2xl p-5 text-left transition-all duration-300 group",
                  activeStep === step.id
                    ? "bg-white border-2 shadow-lg"
                    : "bg-white/60 border-2 border-transparent hover:bg-white hover:shadow-sm"
                )}
                style={{
                  borderColor: activeStep === step.id ? step.color : undefined,
                }}
              >
                {/* Step number + progress line */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={cn(
                      "w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300",
                    )}
                    style={{
                      backgroundColor: activeStep === step.id ? step.color : "#f1f5f9",
                      color: activeStep === step.id ? "#fff" : "#94a3b8",
                    }}
                  >
                    <step.icon className="w-4 h-4" />
                  </div>
                  <div
                    className="text-[11px] font-bold uppercase tracking-wider"
                    style={{ color: step.color }}
                  >
                    {t('howItWorks.stepLabel')} {step.id}
                  </div>
                  {activeStep === step.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500 }}
                      className="ml-auto"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </motion.div>
                  )}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{t(step.titleKey)}</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{t(step.subtitleKey)}</p>

                {/* Bottom accent bar */}
                {activeStep === step.id && (
                  <motion.div
                    className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full"
                    style={{ backgroundColor: step.color }}
                    layoutId="stepAccent"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* ── Content panel ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-5 gap-0 bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
            >
              {/* Left: text + features */}
              <div className="lg:col-span-2 p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${currentStep.color}15`, color: currentStep.color }}
                  >
                    <currentStep.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{t(currentStep.titleKey)}</h3>
                </div>

                <p className="text-slate-600 leading-relaxed mb-6 text-[15px]">
                  {t(currentStep.descriptionKey)}
                </p>

                <div className="space-y-2.5">
                  {(t(currentStep.featuresKey, { returnObjects: true }) as string[]).map((feature, i) => (
                    <motion.div
                      key={feature}
                      className="flex items-center gap-2.5"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.08 }}
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right: rich animated visual */}
              <div className="lg:col-span-3 bg-slate-900 min-h-[380px] relative">
                {/* Subtle grid pattern */}
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M40 0v40H0' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E")`,
                  }}
                />
                {visuals[activeStep]}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ── Bottom: step flow indicator ── */}
          <div className="flex items-center justify-center mt-8 gap-2">
            {stepDefs.map((step, i) => (
              <div key={step.id} className="flex items-center gap-2">
                <button
                  onClick={() => setActiveStep(step.id)}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all text-xs font-medium",
                    activeStep === step.id
                      ? "bg-white shadow-md text-slate-900 border border-gray-200"
                      : "text-slate-400 hover:text-slate-600"
                  )}
                >
                  <step.icon className="w-3 h-3" />
                  {t(step.titleKey)}
                </button>
                {i < stepDefs.length - 1 && (
                  <ArrowRight className="w-3 h-3 text-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
