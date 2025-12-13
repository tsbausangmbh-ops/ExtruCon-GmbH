import { memo } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ExploreMoreSection } from "@/components/InternalLinks";
import { motion } from "framer-motion";
import { Users, Target, Lightbulb, Rocket, Heart, Award, MapPin, Mail, Phone, Clock, CheckCircle, ArrowRight, Zap, Shield, TrendingUp, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { RelatedServices } from "@/components/RelatedServices";

const valueIcons = [Lightbulb, Heart, Shield, Zap];

function UeberUns() {
  const { t } = useLanguage();
  const about = t.aboutPage;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SEOHead 
        title="Über uns | ExtruCon GmbH – KI-Agentur München"
        description="ExtruCon GmbH: Ihre KI-Agentur in München. Wir entwickeln KI-Agenten, automatisieren Prozesse und erstellen intelligente Websites."
        keywords="ExtruCon GmbH, KI-Agentur Fürstenfeldbruck, Automatisierung München, Marketing Agentur Bayern, HRB 18623"
      />
      <Navbar />
      <main className="pt-24">
        <Breadcrumbs items={[
          { label: about.badge }
        ]} />
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Users className="w-4 h-4" />
                {about.badge}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-6">
                {about.title}
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                {about.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "100+", label: about.stats.projects },
                { value: "50+", label: about.stats.clients },
                { value: "500+", label: about.stats.automations },
                { value: "24/7", label: about.stats.support }
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

        {/* Wer wir sind */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold font-display text-white mb-6">
                  {about.whoWeAre.title}
                </h2>
                <p className="text-gray-400 mb-4">
                  {about.whoWeAre.paragraph1}
                </p>
                <p className="text-gray-400 mb-4">
                  {about.whoWeAre.paragraph2}
                </p>
                <p className="text-gray-400 mb-6">
                  {about.whoWeAre.paragraph3}
                </p>
                <div className="flex flex-wrap gap-3">
                  {about.whoWeAre.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">{tag}</span>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/10"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-white font-medium">{about.contact.location}</div>
                      <div className="text-gray-400 text-sm">Hasenheide 8, 82256 Fürstenfeldbruck</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-white font-medium">{about.contact.email}</div>
                      <div className="text-gray-400 text-sm">info@extrucon.de</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-white font-medium">{about.contact.phone}</div>
                      <div className="text-gray-400 text-sm">089 444438879</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-white font-medium">{about.contact.availability}</div>
                      <div className="text-gray-400 text-sm">{about.contact.hours}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision Timeline */}
        <section className="py-16 bg-card/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold font-display text-white mb-4">
                {about.timeline.title}
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                {about.timeline.subtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {about.timeline.items.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  {i < 3 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-primary/20" />
                  )}
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mx-auto mb-4 relative z-10">
                      <span className="text-primary font-bold text-sm">{item.year}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Unsere Werte */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold font-display text-white mb-4">
                {about.values.title}
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                {about.values.subtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {about.values.items.map((value, i) => {
                const Icon = valueIcons[i];
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 rounded-xl bg-white/5 border border-white/10 text-center"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                    <p className="text-gray-400 text-sm">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Unsere Leistungen */}
        <section className="py-16 bg-card/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold font-display text-white mb-4">
                {about.services.title}
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                {about.services.subtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {about.services.items.map((service, i) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-white">{service.name}</h3>
                    <p className="text-gray-400 text-sm">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Warum ExtruCon */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold font-display text-white mb-4">
                  {about.whyExtrucon.title}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {about.whyExtrucon.items.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Rechtliche Infos */}
        <section className="py-12 bg-card/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-xl font-bold text-white mb-6">{about.legal.title}</h2>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <p className="text-gray-400 text-sm">
                      <strong className="text-white">{about.legal.companyLabel}</strong><br />
                      Hasenheide 8<br />
                      82256 Fürstenfeldbruck
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">
                      <strong className="text-white">{about.legal.registerLabel}</strong><br />
                      {about.legal.registerNumber}<br />
                      {about.legal.court}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10 border-y border-white/10">
          <div className="container mx-auto px-4 text-center">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {about.cta.title}
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              {about.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/kontakt" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-background font-bold rounded-lg hover:bg-primary/90 transition-colors text-lg"
                data-testid="button-about-contact"
              >
                {about.cta.button} <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="tel:089444438879" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors border border-white/10"
              >
                <Phone className="w-5 h-5" />
                089 444438879
              </a>
            </div>
          </div>
        </section>

        <RelatedServices currentPath="/ueber-uns" />
        <ExploreMoreSection />
      </main>
      <Footer />
    </div>
  );
}

export default memo(UeberUns);
