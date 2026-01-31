import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Search, Check, ArrowRight, MapPin, Globe, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import seoImg from "@/assets/images/hero-seo-abstract.webp";
import { useLanguage } from "@/lib/i18n";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedServices, ExploreMoreSection } from "@/components/InternalLinks";

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
        
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-4 pb-4">
          <div className="absolute inset-0 z-0">
            <img src={seoImg} alt="SEO & Geo-Optimierung" className="w-full h-full object-cover opacity-60" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
          </div>
          <div className="container mx-auto px-4 z-40 relative">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium backdrop-blur-sm">
                    <MapPin className="w-3.5 h-3.5" />
                    Fürstenfeldbruck & München
                  </span>
                </div>
                
                <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6 mt-6 backdrop-blur-sm">
                  <Search className="w-4 h-4" />
                  {t.seoPage.badge}
                </span>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-6 leading-tight">
                  {t.seoPage.title.split(" ").slice(0, 2).join(" ")}{" "}
                  <span className="text-gradient">{t.seoPage.title.split(" ").slice(2).join(" ")}</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed font-medium">
                  {t.seoPage.subtitle}
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mb-8">
                  <span className="flex items-center gap-1.5"><Search className="w-4 h-4 text-primary" /> Keyword-Analyse</span>
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Lokale SEO</span>
                  <span className="flex items-center gap-1.5"><Globe className="w-4 h-4 text-primary" /> Google My Business</span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-30">
                  <a href="/kontakt" className="inline-flex items-center justify-center h-12 px-8 bg-primary text-background hover:bg-primary/90 font-bold text-lg rounded-md transition-colors cursor-pointer" data-testid="button-contact-seo">
                    {t.seoPage.ctaButton} <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                  <a href="#services" className="inline-flex items-center justify-center h-12 px-8 border border-white/20 text-white hover:bg-white/10 font-medium text-lg rounded-md transition-colors group cursor-pointer" data-testid="button-seo-services">
                    Unsere Leistungen <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-20" />
        </section>

        <section id="services" className="py-10 bg-card/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-display text-white mb-8 text-center">{t.seoPage.servicesTitle}</h2>
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

        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold font-display text-white mb-6">{t.seoPage.benefitsTitle}</h2>
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

        <section className="py-10 bg-card/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-display text-white mb-8 text-center">{t.seoPage.processTitle}</h2>
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

        <section className="py-10 bg-gradient-to-r from-primary/20 to-orange-900/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-display text-white mb-4">{t.seoPage.ctaTitle}</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              {t.seoPage.ctaSubtitle}
            </p>
            <a href="/kontakt" className="inline-flex items-center justify-center h-12 px-8 bg-primary text-background hover:bg-primary/90 font-bold text-lg rounded-md transition-colors cursor-pointer" data-testid="button-cta-seo">
              {t.seoPage.ctaButtonAlt} <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </section>

        <RelatedServices currentPage="seo" />
        <ExploreMoreSection />
      </main>
      <Footer />
    </div>
  );
}
