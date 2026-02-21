import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Database, Layers, Zap, Shield, Lock, Globe, ArrowRight,
  BarChart3, MessageSquare, Settings, Server, Cloud, Cpu,
  FileText, RefreshCw, CheckCircle
} from "lucide-react";

const Singularity = () => {
  const { t } = useTranslation();

  const connectorCategories = [
    {
      title: t('pages.lake.connectorCategories.databases'),
      items: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server", "Oracle", "Redis", "DynamoDB", "Cassandra"],
    },
    {
      title: t('pages.lake.connectorCategories.cloudStorage'),
      items: ["AWS S3", "Google Cloud", "Azure Blob", "Snowflake", "BigQuery", "Redshift", "Databricks"],
    },
    {
      title: t('pages.lake.connectorCategories.enterprise'),
      items: ["SAP", "Salesforce", "HubSpot", "Oracle ERP", "NetSuite", "Dynamics 365", "ServiceNow"],
    },
    {
      title: t('pages.lake.connectorCategories.iotStreaming'),
      items: ["Apache Kafka", "MQTT", "OPC-UA", "Modbus", "REST APIs", "Webhooks", "gRPC"],
    },
  ];

  const layers = [
    { name: t('pages.lake.layers.bronze.name'), subtitle: t('pages.lake.layers.bronze.subtitle'), description: t('pages.lake.layers.bronze.description'), icon: Database, color: "text-amber-600" },
    { name: t('pages.lake.layers.silver.name'), subtitle: t('pages.lake.layers.silver.subtitle'), description: t('pages.lake.layers.silver.description'), icon: RefreshCw, color: "text-gray-300" },
    { name: t('pages.lake.layers.gold.name'), subtitle: t('pages.lake.layers.gold.subtitle'), description: t('pages.lake.layers.gold.description'), icon: Zap, color: "text-yellow-400" },
    { name: t('pages.lake.layers.intelligence.name'), subtitle: t('pages.lake.layers.intelligence.subtitle'), description: t('pages.lake.layers.intelligence.description'), icon: BarChart3, color: "text-blue-400" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero */}
        <section className="relative pt-24 pb-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/8 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-blue-400 bg-blue-600/10 border border-blue-500/20 rounded-full mb-8">
                <Database className="w-4 h-4" />
                {t('pages.lake.badge')}
              </div>

              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                <span className="text-white">{t('pages.lake.heading1')}</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">{t('pages.lake.heading2')}</span>
              </h1>

              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                {t('pages.lake.description')}
              </p>

              <div className="flex items-center justify-center gap-8 mb-10">
                <div className="text-center">
                  <div className="text-3xl font-black text-blue-400">{t('pages.lake.stats.connectors.value')}</div>
                  <div className="text-sm text-gray-500">{t('pages.lake.stats.connectors.label')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-blue-400">{t('pages.lake.stats.events.value')}</div>
                  <div className="text-sm text-gray-500">{t('pages.lake.stats.events.label')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-blue-400">{t('pages.lake.stats.latency.value')}</div>
                  <div className="text-sm text-gray-500">{t('pages.lake.stats.latency.label')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-blue-400">{t('pages.lake.stats.uptime.value')}</div>
                  <div className="text-sm text-gray-500">{t('pages.lake.stats.uptime.label')}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8" asChild>
                  <Link to="/contact">{t('pages.lake.bookDemo')} <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/10 text-white hover:bg-white/5" asChild>
                  <Link to="/products">{t('pages.lake.allProducts')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Lakehouse Architecture */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">{t('pages.lake.architectureTitle')}</h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                  {t('pages.lake.architectureDesc')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {layers.map((layer, i) => (
                  <div key={layer.name} className="relative">
                    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                          <layer.icon className={`w-5 h-5 ${layer.color}`} />
                        </div>
                        <div>
                          <div className={`text-lg font-bold ${layer.color}`}>{layer.name}</div>
                          <div className="text-xs text-gray-500">{layer.subtitle}</div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-400">{layer.description}</p>
                    </div>
                    {i < 3 && (
                      <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                        <ArrowRight className="w-5 h-5 text-gray-600" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Capabilities */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-4 text-center">{t('pages.lake.capabilitiesTitle')}</h2>
              <p className="text-lg text-gray-400 text-center mb-16 max-w-2xl mx-auto">
                {t('pages.lake.capabilitiesDesc')}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: MessageSquare, title: t('pages.lake.capabilities.nlQueries.title'), desc: t('pages.lake.capabilities.nlQueries.desc'), color: "text-blue-400" },
                  { icon: Zap, title: t('pages.lake.capabilities.realTimeStreaming.title'), desc: t('pages.lake.capabilities.realTimeStreaming.desc'), color: "text-yellow-400" },
                  { icon: Settings, title: t('pages.lake.capabilities.workflowOrchestration.title'), desc: t('pages.lake.capabilities.workflowOrchestration.desc'), color: "text-purple-400" },
                  { icon: BarChart3, title: t('pages.lake.capabilities.aiAnalytics.title'), desc: t('pages.lake.capabilities.aiAnalytics.desc'), color: "text-green-400" },
                  { icon: Lock, title: t('pages.lake.capabilities.dataGovernance.title'), desc: t('pages.lake.capabilities.dataGovernance.desc'), color: "text-red-400" },
                  { icon: Globe, title: t('pages.lake.capabilities.connectors.title'), desc: t('pages.lake.capabilities.connectors.desc'), color: "text-cyan-400" },
                ].map((cap) => (
                  <div key={cap.title} className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center mb-4">
                      <cap.icon className={`w-5 h-5 ${cap.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{cap.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{cap.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Connectors */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-4 text-center">{t('pages.lake.connectorsTitle')}</h2>
              <p className="text-lg text-gray-400 text-center mb-16">{t('pages.lake.connectorsDesc')}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {connectorCategories.map((cat) => (
                  <div key={cat.title} className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                    <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">{cat.title}</h3>
                    <ul className="space-y-2">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Security & Compliance */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-4">{t('pages.lake.securityTitle')}</h2>
              <p className="text-lg text-gray-400 mb-12">{t('pages.lake.securityDesc')}</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                {[
                  { icon: Shield, title: t('pages.lake.securityBadges.soc2.title'), desc: t('pages.lake.securityBadges.soc2.desc') },
                  { icon: Lock, title: t('pages.lake.securityBadges.iso27001.title'), desc: t('pages.lake.securityBadges.iso27001.desc') },
                  { icon: Server, title: t('pages.lake.securityBadges.encryption.title'), desc: t('pages.lake.securityBadges.encryption.desc') },
                ].map((badge) => (
                  <div key={badge.title} className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                    <badge.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                    <div className="text-lg font-bold text-white mb-1">{badge.title}</div>
                    <div className="text-sm text-gray-400">{badge.desc}</div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-600/5 border border-blue-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{t('pages.lake.ctaTitle')}</h3>
                <p className="text-gray-400 mb-6">{t('pages.lake.ctaDesc')}</p>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8" asChild>
                  <Link to="/contact">{t('pages.lake.scheduleDemo')} <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Singularity;
