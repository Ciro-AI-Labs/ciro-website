import { ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const pipelineStageKeys = [
  { labelKey: "platform.stages.dataSources.label", color: "#64748b", itemsKey: "platform.stages.dataSources.items" },
  { labelKey: "platform.stages.lake.label", color: "#3b82f6", itemsKey: "platform.stages.lake.items" },
  { labelKey: "platform.stages.ai.label", color: "#6366f1", itemsKey: "platform.stages.ai.items" },
  { labelKey: "platform.stages.action.label", color: "#10b981", itemsKey: "platform.stages.action.items" },
];

const liveEventColors = ["#3b82f6", "#ef4444", "#10b981", "#f59e0b", "#6366f1"];

const PlatformOverview = () => {
  const { t } = useTranslation();

  const pipelineStages = pipelineStageKeys.map(s => ({
    label: t(s.labelKey),
    color: s.color,
    items: t(s.itemsKey, { returnObjects: true }) as string[],
  }));

  const liveEvents = (t('platform.liveEvents', { returnObjects: true }) as { text: string; time: string }[]).map((e, i) => ({
    ...e,
    color: liveEventColors[i],
  }));
  return (
    <section className="py-20 md:py-28 bg-[#050507] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/3 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-blue-400 bg-blue-600/10 border border-blue-500/20 rounded-full mb-6">
              <Zap className="w-4 h-4" />
              {t('platform.badge')}
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-white">{t('platform.heading1')}</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                {t('platform.heading2')}
              </span>
            </h2>

            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              {t('platform.description')}
            </p>
          </div>

          {/* Pipeline Flow — Desktop */}
          <div className="hidden lg:block mb-12">
            <div className="grid grid-cols-4 gap-0 items-start">
              {pipelineStages.map((stage, i) => (
                <div key={stage.label} className="relative">
                  {/* Stage card */}
                  <motion.div
                    className="mx-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                  >
                    {/* Stage header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white"
                        style={{ backgroundColor: `${stage.color}25`, color: stage.color }}
                      >
                        {i + 1}
                      </div>
                      <div
                        className="text-sm font-semibold tracking-wide"
                        style={{ color: stage.color }}
                      >
                        {stage.label}
                      </div>
                    </div>

                    {/* Items */}
                    <div className="space-y-2">
                      {stage.items.map((item, j) => (
                        <motion.div
                          key={item}
                          className="flex items-center gap-2.5 px-3 py-2 bg-white/[0.03] border border-white/[0.06] rounded-lg group hover:border-white/10 transition-colors"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.15 + j * 0.05, duration: 0.4 }}
                        >
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: stage.color }}
                          />
                          <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Arrow connector between stages */}
                  {i < 3 && (
                    <div className="absolute top-3 -right-1 z-10">
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 + 0.3 }}
                      >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path
                            d="M4 10h10m0 0l-4-4m4 4l-4 4"
                            stroke={stage.color}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            opacity="0.5"
                          />
                        </svg>
                      </motion.div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Animated data flow bar */}
            <div className="mt-8 mx-2">
              <div className="h-1 bg-white/[0.04] rounded-full overflow-hidden relative">
                <motion.div
                  className="absolute inset-y-0 left-0 w-1/4 rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #3b82f600, #3b82f6, #10b981, #10b98100)",
                  }}
                  animate={{ left: ["-25%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </div>
              <div className="flex justify-between mt-2 text-[11px] text-gray-600 px-1">
                <span>{t('platform.stats.sources')}</span>
                <span>{t('platform.stats.events')}</span>
                <span>{t('platform.stats.latency')}</span>
                <span>{t('platform.stats.actions')}</span>
              </div>
            </div>
          </div>

          {/* Pipeline Flow — Mobile */}
          <div className="lg:hidden mb-12 space-y-4">
            {pipelineStages.map((stage, i) => (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: `${stage.color}20`, color: stage.color }}
                  >
                    {i + 1}
                  </div>
                  <span className="text-sm font-semibold" style={{ color: stage.color }}>
                    {stage.label}
                  </span>
                  {i < 3 && <ArrowRight className="w-3 h-3 text-gray-600 ml-auto" />}
                </div>
                <div className="grid grid-cols-2 gap-2 pl-10">
                  {stage.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 px-3 py-2 bg-white/[0.03] border border-white/[0.06] rounded-lg"
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: stage.color }}
                      />
                      <span className="text-xs text-gray-400">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Live Event Feed */}
          <motion.div
            className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-5">
              <motion.div
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">
                {t('platform.liveActivity')}
              </span>
            </div>

            <div className="space-y-0">
              {liveEvents.map((event, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-4 py-2.5 border-b border-white/[0.04] last:border-0"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                >
                  <div
                    className="w-1 h-4 rounded-full flex-shrink-0"
                    style={{ backgroundColor: event.color }}
                  />
                  <span className="text-sm text-gray-300 flex-1">{event.text}</span>
                  <span className="text-xs text-gray-600 flex-shrink-0">{event.time}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              {t('platform.cta')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformOverview;
