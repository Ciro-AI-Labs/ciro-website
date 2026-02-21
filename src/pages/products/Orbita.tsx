import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Smartphone, Wifi, WifiOff, MapPin, ShoppingCart, ArrowRight,
  RefreshCw, Users, Package, TrendingUp, Globe, CheckCircle,
  Palette, BarChart3, Shield, Clock
} from "lucide-react";

const Orbita = () => {
  const { t } = useTranslation();

  const features = [
    { icon: WifiOff, title: t('pages.sales.features.offline.title'), desc: t('pages.sales.features.offline.desc'), color: "text-emerald-400" },
    { icon: MapPin, title: t('pages.sales.features.routeOptimization.title'), desc: t('pages.sales.features.routeOptimization.desc'), color: "text-blue-400" },
    { icon: ShoppingCart, title: t('pages.sales.features.orders.title'), desc: t('pages.sales.features.orders.desc'), color: "text-orange-400" },
    { icon: RefreshCw, title: t('pages.sales.features.sapIntegration.title'), desc: t('pages.sales.features.sapIntegration.desc'), color: "text-purple-400" },
    { icon: Palette, title: t('pages.sales.features.whiteLabel.title'), desc: t('pages.sales.features.whiteLabel.desc'), color: "text-pink-400" },
    { icon: Users, title: t('pages.sales.features.customerPortfolio.title'), desc: t('pages.sales.features.customerPortfolio.desc'), color: "text-cyan-400" },
  ];

  const modules = [
    { title: t('pages.sales.modules.routePlanning.title'), desc: t('pages.sales.modules.routePlanning.desc') },
    { title: t('pages.sales.modules.orderEntry.title'), desc: t('pages.sales.modules.orderEntry.desc') },
    { title: t('pages.sales.modules.collections.title'), desc: t('pages.sales.modules.collections.desc') },
    { title: t('pages.sales.modules.returns.title'), desc: t('pages.sales.modules.returns.desc') },
    { title: t('pages.sales.modules.inventoryCheck.title'), desc: t('pages.sales.modules.inventoryCheck.desc') },
    { title: t('pages.sales.modules.visitTracking.title'), desc: t('pages.sales.modules.visitTracking.desc') },
    { title: t('pages.sales.modules.customerInsights.title'), desc: t('pages.sales.modules.customerInsights.desc') },
    { title: t('pages.sales.modules.promotions.title'), desc: t('pages.sales.modules.promotions.desc') },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero */}
        <section className="relative pt-24 pb-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-600/8 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-emerald-400 bg-emerald-600/10 border border-emerald-500/20 rounded-full mb-8">
                <Smartphone className="w-4 h-4" />
                {t('pages.sales.badge')}
              </div>

              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                <span className="text-white">{t('pages.sales.heading1')}</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">{t('pages.sales.heading2')}</span>
              </h1>

              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                {t('pages.sales.description')}
              </p>

              <div className="flex items-center justify-center gap-8 mb-10">
                <div className="text-center">
                  <div className="text-3xl font-black text-emerald-400">{t('pages.sales.stats.travel.value')}</div>
                  <div className="text-sm text-gray-500">{t('pages.sales.stats.travel.label')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-emerald-400">{t('pages.sales.stats.offline.value')}</div>
                  <div className="text-sm text-gray-500">{t('pages.sales.stats.offline.label')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-emerald-400">{t('pages.sales.stats.visits.value')}</div>
                  <div className="text-sm text-gray-500">{t('pages.sales.stats.visits.label')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-emerald-400">{t('pages.sales.stats.sap.value')}</div>
                  <div className="text-sm text-gray-500">{t('pages.sales.stats.sap.label')}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8" asChild>
                  <Link to="/contact">{t('pages.sales.bookDemo')} <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/10 text-white hover:bg-white/5" asChild>
                  <Link to="/products">{t('pages.sales.allProducts')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-4 text-center">{t('pages.sales.featuresTitle')}</h2>
              <p className="text-lg text-gray-400 text-center mb-16 max-w-2xl mx-auto">
                {t('pages.sales.featuresDesc')}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feat) => (
                  <div key={feat.title} className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center mb-4">
                      <feat.icon className={`w-5 h-5 ${feat.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* App Modules */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-4 text-center">{t('pages.sales.modulesTitle')}</h2>
              <p className="text-lg text-gray-400 text-center mb-16">{t('pages.sales.modulesDesc')}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {modules.map((mod) => (
                  <div key={mod.title} className="bg-white/[0.02] border border-white/5 rounded-xl p-5 hover:border-emerald-500/20 transition-all">
                    <h3 className="text-sm font-bold text-white mb-1">{mod.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{mod.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Offline-First Architecture */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-6">{t('pages.sales.offlineTitle')}</h2>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {t('pages.sales.offlineDesc')}
                  </p>
                  <ul className="space-y-3">
                    {(t('pages.sales.offlineItems', { returnObjects: true }) as string[]).map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-emerald-600/10 border border-emerald-500/20 rounded-lg">
                      <WifiOff className="w-5 h-5 text-emerald-400" />
                      <div>
                        <div className="text-sm font-medium text-white">{t('pages.sales.offlineVisual.offlineMode')}</div>
                        <div className="text-xs text-gray-500">{t('pages.sales.offlineVisual.offlineModeDesc')}</div>
                      </div>
                      <div className="ml-auto w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-600/10 border border-blue-500/20 rounded-lg">
                      <ShoppingCart className="w-5 h-5 text-blue-400" />
                      <div>
                        <div className="text-sm font-medium text-white">{t('pages.sales.offlineVisual.ordersQueued')}</div>
                        <div className="text-xs text-gray-500">{t('pages.sales.offlineVisual.ordersQueuedDesc')}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-orange-600/10 border border-orange-500/20 rounded-lg">
                      <Clock className="w-5 h-5 text-orange-400" />
                      <div>
                        <div className="text-sm font-medium text-white">{t('pages.sales.offlineVisual.collectionsPending')}</div>
                        <div className="text-xs text-gray-500">{t('pages.sales.offlineVisual.collectionsPendingDesc')}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-lg">
                      <Wifi className="w-5 h-5 text-green-400" />
                      <div>
                        <div className="text-sm font-medium text-white">{t('pages.sales.offlineVisual.syncing')}</div>
                        <div className="text-xs text-gray-500">{t('pages.sales.offlineVisual.syncingDesc')}</div>
                      </div>
                      <div className="ml-auto">
                        <RefreshCw className="w-4 h-4 text-green-400 animate-spin" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-emerald-600/5 border border-emerald-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{t('pages.sales.ctaTitle')}</h3>
                <p className="text-gray-400 mb-6">{t('pages.sales.ctaDesc')}</p>
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8" asChild>
                  <Link to="/contact">{t('pages.sales.scheduleDemo')} <ArrowRight className="w-4 h-4 ml-2" /></Link>
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

export default Orbita;
