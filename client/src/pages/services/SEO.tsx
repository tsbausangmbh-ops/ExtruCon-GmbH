import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Search, Check, ArrowRight, MapPin, Globe, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import seoImg from "@assets/generated_images/abstract_seo_geo-optimization_visual.png";
import { useLanguage } from "@/lib/i18n";
import { SEOHead } from "@/components/SEOHead";
import { RelatedServices } from "@/components/RelatedServices";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ExploreMoreSection } from "@/components/InternalLinks";

export default function SEO() {
  const { t } = useLanguage();

  const features = [
    { icon: Search, key: 0 },
    { icon: MapPin, key: 1 },
    { icon: Globe, key: 2 },
    { icon: BarChart3, key: 3 },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SEOHead
        title="SEO & Geo-Optimierung | Lokale Suchmaschinenoptimierung | ExtruCon"
        description="Professionelle SEO & Geo-Optimierung für lokale Unternehmen. Google My Business, lokale Keywords, strukturierte Daten. Agentur Fürstenfeldbruck bei München."
        keywords="SEO Agentur, Geo-Optimierung, lokale SEO, Google My Business, Suchmaschinenoptimierung Fürstenfeldbruck, Local SEO München"
        canonical="https://extrucon.de/leistungen/seo"
      />
      <Navbar />
      <main className="pt-24">
        <Breadcrumbs items={[
          { label: t.nav.services, href: "/#services" },
          { label: t.nav.seo }
        ]} />
        
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={seoImg} alt="SEO & Geo-Optimierung" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <Search className="w-12 h-12 text-primary" />
                <span className="text-primary font-semibold">{t.seoPage.badge}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">
                {t.seoPage.title}
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                {t.seoPage.subtitle}
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-black" data-testid="button-contact-seo">
                {t.seoPage.ctaButton} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-card/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-display text-white mb-12 text-center">{t.seoPage.servicesTitle}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.seoPage.services.map((item, i) => {
                const Icon = features[i]?.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 rounded-xl bg-card/30 border border-white/5"
                  >
                    {Icon && <Icon className="w-8 h-8 text-primary mb-4" />}
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold font-display text-white mb-8">{t.seoPage.benefitsTitle}</h2>
              <div className="space-y-4 text-left">
                {t.seoPage.benefits.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-card/30">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-display text-white mb-12 text-center">{t.seoPage.processTitle}</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {t.seoPage.process.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 text-primary font-bold text-xl flex items-center justify-center mx-auto mb-4">
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-primary/20 to-orange-900/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-display text-white mb-4">{t.seoPage.ctaTitle}</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              {t.seoPage.ctaSubtitle}
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-black" data-testid="button-cta-seo">
              {t.seoPage.ctaButtonAlt} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        <RelatedServices currentPath="/leistungen/seo" />
        <ExploreMoreSection />
      </main>
      <Footer />
    </div>
  );
}
