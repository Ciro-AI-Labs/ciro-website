import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Factory, Beaker, Shield, Lock, ArrowRight, CheckCircle,
  Package, ShoppingCart, Truck, BarChart3, Users, Settings,
  FileText, Wrench, DollarSign, ClipboardList, FlaskConical
} from "lucide-react";

const ERP = () => {
  const { t } = useTranslation();

  const modules = [
    { icon: ShoppingCart, title: t('pages.erp.modules.sales.title'), desc: t('pages.erp.modules.sales.desc') },
    { icon: Package, title: t('pages.erp.modules.purchasing.title'), desc: t('pages.erp.modules.purchasing.desc') },
    { icon: ClipboardList, title: t('pages.erp.modules.inventory.title'), desc: t('pages.erp.modules.inventory.desc') },
    { icon: Factory, title: t('pages.erp.modules.production.title'), desc: t('pages.erp.modules.production.desc') },
    { icon: FlaskConical, title: t('pages.erp.modules.qc.title'), desc: t('pages.erp.modules.qc.desc') },
    { icon: Beaker, title: t('pages.erp.modules.formulas.title'), desc: t('pages.erp.modules.formulas.desc') },
    { icon: DollarSign, title: t('pages.erp.modules.accounting.title'), desc: t('pages.erp.modules.accounting.desc') },
    { icon: Users, title: t('pages.erp.modules.hr.title'), desc: t('pages.erp.modules.hr.desc') },
    { icon: Wrench, title: t('pages.erp.modules.maintenance.title'), desc: t('pages.erp.modules.maintenance.desc') },
    { icon: Truck, title: t('pages.erp.modules.logistics.title'), desc: t('pages.erp.modules.logistics.desc') },
    { icon: BarChart3, title: t('pages.erp.modules.analytics.title'), desc: t('pages.erp.modules.analytics.desc') },
  ];

  const traceabilityItems = t('pages.erp.traceabilityItems', { returnObjects: true }) as string[];

  const qcSteps = t('pages.erp.qcSteps', { returnObjects: true }) as { label: string; status: string }[];

  const qcStepStyles = [
    "text-green-400 bg-green-600/10 border-green-500/20",
    "text-green-400 bg-green-600/10 border-green-500/20",
    "text-yellow-400 bg-yellow-600/10 border-yellow-500/20",
    "text-gray-400 bg-white/5 border-white/10",
  ];

  const formulaItems = t('pages.erp.formulaItems', { returnObjects: true }) as string[];

  const accessRoles = t('pages.erp.accessRoles', { returnObjects: true }) as { role: string; access: string }[];

  const accessLevels = ["w-full", "w-3/4", "w-1/2", "w-1/4"];

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero */}
        <section className="relative pt-24 pb-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/8 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-[100px]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-orange-400 bg-orange-600/10 border border-orange-500/20 rounded-full mb-8">
                <Factory className="w-4 h-4" />
                {t('pages.erp.badge')}
              </div>

              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                <span className="text-white">{t('pages.erp.heading1')}</span>
                <br />
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">{t('pages.erp.heading2')}</span>
              </h1>

              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                {t('pages.erp.description')}
              </p>

              <div className="flex items-center justify-center gap-8 mb-10">
                <div className="text-center">
                  <div className="text-3xl font-black text-orange-400">{t('pages.erp.stats.modules.value')}</div>
                  <div className="text-sm text-gray-500">{t('pages.erp.stats.modules.label')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-orange-400">{t('pages.erp.stats.traceability.value')}</div>
                  <div className="text-sm text-gray-500">{t('pages.erp.stats.traceability.label')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-orange-400">{t('pages.erp.stats.invoicing.value')}</div>
                  <div className="text-sm text-gray-500">{t('pages.erp.stats.invoicing.label')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-orange-400">{t('pages.erp.stats.compliant.value')}</div>
                  <div className="text-sm text-gray-500">{t('pages.erp.stats.compliant.label')}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8" asChild>
                  <Link to="/contact">{t('pages.erp.bookDemo')} <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/10 text-white hover:bg-white/5" asChild>
                  <Link to="/products">{t('pages.erp.allProducts')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 11 Modules */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-4 text-center">{t('pages.erp.modulesTitle')}</h2>
              <p className="text-lg text-gray-400 text-center mb-16 max-w-2xl mx-auto">
                {t('pages.erp.modulesDesc')}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {modules.map((mod) => (
                  <div key={mod.title} className="bg-white/[0.02] border border-white/5 rounded-xl p-5 hover:border-orange-500/20 transition-all text-center">
                    <mod.icon className="w-6 h-6 text-orange-400 mx-auto mb-3" />
                    <h3 className="text-sm font-bold text-white mb-1">{mod.title}</h3>
                    <p className="text-xs text-gray-500">{mod.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* QC & Traceability */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-6">{t('pages.erp.traceabilityTitle')}</h2>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {t('pages.erp.traceabilityDesc')}
                  </p>
                  <ul className="space-y-3">
                    {traceabilityItems.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* QC Workflow Visual */}
                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                  <h3 className="text-sm font-semibold text-orange-400 uppercase tracking-wider mb-4">{t('pages.erp.qcWorkflow')}</h3>
                  <div className="space-y-3">
                    {qcSteps.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-white/[0.02] border border-white/5 rounded-lg">
                        <div className="w-8 h-8 bg-orange-600/20 rounded-lg flex items-center justify-center text-sm font-bold text-orange-400">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-white">{item.label}</div>
                        </div>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full border ${qcStepStyles[index]}`}>
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formula IP Protection */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                  <h3 className="text-sm font-semibold text-orange-400 uppercase tracking-wider mb-4">{t('pages.erp.accessControl')}</h3>
                  <div className="space-y-3">
                    {accessRoles.map((item, index) => (
                      <div key={item.role} className="p-3 bg-white/[0.02] border border-white/5 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-white">{item.role}</span>
                          <span className="text-xs text-gray-500">{item.access}</span>
                        </div>
                        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <div className={`h-full bg-orange-500 rounded-full ${accessLevels[index]}`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <h2 className="text-4xl font-bold text-white mb-6">{t('pages.erp.formulaTitle')}</h2>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {t('pages.erp.formulaDesc')}
                  </p>
                  <ul className="space-y-3">
                    {formulaItems.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                        <Lock className="w-4 h-4 text-orange-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-orange-600/5 border border-orange-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{t('pages.erp.ctaTitle')}</h3>
                <p className="text-gray-400 mb-6">{t('pages.erp.ctaDesc')}</p>
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8" asChild>
                  <Link to="/contact">{t('pages.erp.scheduleDemo')} <ArrowRight className="w-4 h-4 ml-2" /></Link>
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

export default ERP;
