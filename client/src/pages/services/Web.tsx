import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Globe, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import webImg from "@/assets/images/hero-web-abstract.webp";
import { useLanguage } from "@/lib/i18n";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedServices, ExploreMoreSection, GeoLinks } from "@/components/InternalLinks";

export default function Web() {
  const { t } = useLanguage();

  const technologies = ["React", "Next.js", "TypeScript", "Node.js", "WordPress", "Shopify", "Webflow", "Tailwind CSS"];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SEOHead
        title="Webentwicklung Fürstenfeldbruck | Professionelle Websites | ExtruCon"
        description="Moderne Webentwicklung mit KI-Integration. React, Next.js, WordPress & Shopify. Webdesign Agentur Fürstenfeldbruck bei München."
        keywords="Webentwicklung Fürstenfeldbruck, Webdesign München, Website erstellen, React Entwicklung"
        canonical="https://extrucon.de/leistungen/webentwicklung"
      />
      <Navbar />
      <main className="pt-24">
        <Breadcrumbs items={[
          { label: t.nav.services, href: "/#services" },
          { label: t.webPage.badge }
        ]} />
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={webImg} alt={t.webPage.heroImageAlt} className="w-full h-full object-cover opacity-20" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-12 h-12 text-blue-400" />
                <span className="text-blue-400 font-semibold">{t.webPage.badge}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">
                {t.webPage.title}
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                {t.webPage.subtitle}
              </p>
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white" data-testid="button-contact-web">
                {t.webPage.ctaButton} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Leistungsumfang */}
        <section className="py-16 bg-card/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-display text-white mb-12 text-center">{t.webPage.servicesTitle}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.webPage.services.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-xl bg-card/30 border border-white/5"
                >
                  <Check className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologien */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-display text-white mb-12 text-center">{t.webPage.techTitle}</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {technologies.map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="px-6 py-3 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vorteile */}
        <section className="py-16 bg-card/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold font-display text-white mb-8">{t.webPage.benefitsTitle}</h2>
              <div className="space-y-4 text-left">
                {t.webPage.benefits.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-card/30">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-display text-white mb-4">{t.webPage.ctaTitle}</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              {t.webPage.ctaSubtitle}
            </p>
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white" data-testid="button-cta-web">
              {t.webPage.ctaButtonAlt} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        <RelatedServices currentPage="web" />
        <ExploreMoreSection />
      </main>
      <Footer />
    </div>
  );
}
