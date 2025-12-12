import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BackToHome } from "@/components/BackToHome";
import { ExploreMoreSection, GeoLinks } from "@/components/InternalLinks";
import { motion } from "framer-motion";
import { Bot, Zap, MessageSquare, BarChart3, Clock, Shield, Sparkles, ArrowRight, CheckCircle, Brain, Workflow, Users, Mail, Calendar, FileText, ShoppingCart, Headphones, TrendingUp, Settings, Database, Globe, Cpu, Lock, RefreshCw, HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n";

const agentIcons = [MessageSquare, BarChart3, Workflow, Brain, Mail, Calendar, ShoppingCart, FileText];
const agentColors = [
  "from-cyan-500/20 to-cyan-500/5",
  "from-purple-500/20 to-purple-500/5",
  "from-orange-500/20 to-orange-500/5",
  "from-emerald-500/20 to-emerald-500/5",
  "from-blue-500/20 to-blue-500/5",
  "from-pink-500/20 to-pink-500/5",
  "from-yellow-500/20 to-yellow-500/5",
  "from-indigo-500/20 to-indigo-500/5"
];

const benefitIcons = [Clock, Zap, Shield, Users, TrendingUp, Database];
const useCaseIcons = [Headphones, TrendingUp, Settings];

export default function KIAgenten() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SEOHead 
        title="KI-Agenten Entwicklung | ExtruCon Fürstenfeldbruck – Chatbots & Automatisierung"
        description="Individuelle KI-Agenten für Kundenservice, Lead-Generierung & Automatisierung. 24/7 verfügbar, mehrsprachig, lernfähig. KI-Agentur aus Fürstenfeldbruck – deutschlandweit."
        keywords="KI-Agenten, Chatbot Entwicklung, Kundenservice Automatisierung, Lead-Qualifizierung, KI München, Automatisierung Bayern"
      />
      <Navbar />
      <main className="pt-24">
        <BackToHome />
        <Breadcrumbs items={[
          { label: t.nav.services, href: "/#services" },
          { label: t.nav.kiAgents }
        ]} />
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                <Bot className="w-4 h-4" />
                {t.kiAgentsPage.badge}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-6">
                {t.kiAgentsPage.title}
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                {t.kiAgentsPage.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/kontakt" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-background font-bold rounded-lg hover:bg-primary/90 transition-colors"
                  data-testid="button-ki-agenten-cta"
                >
                  {t.kiAgentsPage.ctaPrimary} <ArrowRight className="w-4 h-4" />
                </a>
                <a 
                  href="#agents" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 text-white font-medium rounded-lg hover:bg-white/10 transition-colors border border-white/10"
                >
                  {t.kiAgentsPage.ctaSecondary}
                </a>
              </div>
              <GeoLinks service="KI-Agenten Entwicklung" />
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "80%", label: t.kiAgentsPage.stats.timeSaving },
                { value: "24/7", label: t.kiAgentsPage.stats.availability },
                { value: "500+", label: t.kiAgentsPage.stats.integrations },
                { value: "<2 Sek", label: t.kiAgentsPage.stats.responseTime }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold font-display text-white mb-3">
                {t.kiAgentsPage.whyTitle}
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                {t.kiAgentsPage.whySubtitle}
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              {t.kiAgentsPage.benefits.map((benefit, i) => {
                const IconComponent = benefitIcons[i] || Clock;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="text-center p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-white text-sm mb-1">{benefit.title}</h3>
                    <p className="text-gray-400 text-xs">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Agents Grid */}
        <section id="agents" className="py-16 bg-card/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
                {t.kiAgentsPage.agentsTitle}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                {t.kiAgentsPage.agentsSubtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {t.kiAgentsPage.agents.map((agent, i) => {
                const IconComponent = agentIcons[i] || Bot;
                const colorClass = agentColors[i] || agentColors[0];
                return (
                  <motion.div
                    key={agent.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className={`p-6 rounded-2xl bg-gradient-to-br ${colorClass} border border-white/10`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{agent.title}</h3>
                        <p className="text-gray-400 mb-4 text-sm">{agent.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {agent.features.map((feature) => (
                            <span 
                              key={feature}
                              className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                        <div className="pt-3 border-t border-white/10">
                          <p className="text-xs text-gray-500 mb-2">{t.kiAgentsPage.typicalApps}</p>
                          <div className="flex flex-wrap gap-2">
                            {agent.useCases.map((useCase) => (
                              <span 
                                key={useCase}
                                className="text-xs text-gray-400"
                              >
                                • {useCase}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold font-display text-white mb-4">
                {t.kiAgentsPage.useCasesTitle}
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                {t.kiAgentsPage.useCasesSubtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {t.kiAgentsPage.useCaseCategories.map((category, i) => {
                const IconComponent = useCaseIcons[i] || Headphones;
                return (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                    <ul className="space-y-3">
                      {category.examples.map((example) => (
                        <li key={example} className="flex items-start gap-2 text-gray-400 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 bg-card/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold font-display text-white mb-4">
                {t.kiAgentsPage.howTitle}
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                {t.kiAgentsPage.howSubtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {t.kiAgentsPage.processSteps.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center relative"
                >
                  {i < 4 && (
                    <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-primary/20" />
                  )}
                  <div className="w-12 h-12 rounded-full bg-primary text-background font-bold text-lg flex items-center justify-center mx-auto mb-3 relative z-10">
                    {i + 1}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-xs">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold font-display text-white mb-4">
                {t.kiAgentsPage.techTitle}
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                {t.kiAgentsPage.techSubtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {t.kiAgentsPage.technologies.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Cpu className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">{tech.name}</h3>
                    <p className="text-gray-400 text-xs">{tech.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-card/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Sparkles className="w-10 h-10 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">
                {t.kiAgentsPage.pricingTitle}
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                {t.kiAgentsPage.pricingSubtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {t.kiAgentsPage.pricing.map((plan, i) => (
                <motion.div
                  key={plan.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-6 rounded-2xl border ${plan.best ? 'bg-primary/10 border-primary/30' : 'bg-white/5 border-white/10'}`}
                >
                  <h3 className="text-lg font-bold text-white mb-1">{plan.title}</h3>
                  <div className="text-2xl font-bold text-primary mb-2">{plan.price}</div>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 justify-center mt-10">
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-5 h-5 text-primary" />
                {t.hero.freeConsultation}
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Lock className="w-5 h-5 text-primary" />
                {t.kiAgentsPage.gdprCompliant}
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <RefreshCw className="w-5 h-5 text-primary" />
                {t.kiAgentsPage.monthlyMaintenance}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <HelpCircle className="w-10 h-10 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold font-display text-white mb-4">
                {t.kiAgentsPage.faqTitle}
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-3">
              {t.kiAgentsPage.faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-xl bg-white/5 border border-white/10 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                    data-testid={`faq-toggle-${i}`}
                  >
                    <span className="font-medium text-white">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-400 text-sm">{faq.a}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10 border-y border-white/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t.kiAgentsPage.ctaTitle}
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              {t.kiAgentsPage.ctaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/kontakt" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-background font-bold rounded-lg hover:bg-primary/90 transition-colors text-lg"
                data-testid="button-ki-agenten-contact"
              >
                {t.kiAgentsPage.ctaPrimary} <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="tel:089444438879" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors border border-white/10"
              >
                <Globe className="w-5 h-5" />
                089 444438879
              </a>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-12 bg-white/5">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-white text-center mb-8">{t.nav.services}</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/automatisierungen" className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-orange-500/50 transition-colors group">
                <Workflow className="w-8 h-8 text-orange-500 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">{t.nav.automation}</h3>
                <p className="text-sm text-gray-400">{t.services.automation.desc}</p>
              </a>
              <a href="/webseiten-ki" className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-secondary/50 transition-colors group">
                <Globe className="w-8 h-8 text-secondary mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">{t.nav.websitesKI}</h3>
                <p className="text-sm text-gray-400">{t.services.websites.desc}</p>
              </a>
              <a href="/kontakt" className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-primary/50 transition-colors group">
                <Users className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">{t.nav.contact}</h3>
                <p className="text-sm text-gray-400">{t.hero.freeConsultation}</p>
              </a>
            </div>
          </div>
        </section>

        <ExploreMoreSection />
      </main>
      <Footer />
    </div>
  );
}
