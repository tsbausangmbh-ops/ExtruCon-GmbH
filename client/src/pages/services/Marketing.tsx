import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { TrendingUp, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/images/hero-marketing-abstract.webp";
import { useLanguage } from "@/lib/i18n";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedServices, ExploreMoreSection, GeoLinks } from "@/components/InternalLinks";

export default function Marketing() {
  const { t } = useLanguage();

  const channels = ["Google Ads", "Meta Ads", "LinkedIn Ads", "TikTok Ads", "Google SEO", "YouTube Ads", "Microsoft Ads"];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SEOHead
        title="Performance Marketing | Google Ads & Meta Ads | ExtruCon"
        description="Datengetriebenes Performance Marketing. Google Ads, Meta Ads, SEO & Conversion-Optimierung. Agentur Fürstenfeldbruck."
        keywords="Performance Marketing, Google Ads Agentur, Meta Ads, SEO Fürstenfeldbruck"
        canonical="https://extrucon.de/leistungen/marketing"
      />
      <Navbar />
      <main className="pt-24">
        <Breadcrumbs items={[
          { label: t.nav.services, href: "/#services" },
          { label: t.nav.marketing }
        ]} />
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={heroImg} alt="" className="w-full h-full object-cover opacity-40" fetchPriority="high" decoding="async" width={1920} height={1080} />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-12 h-12 text-orange-400" />
                <span className="text-orange-400 font-semibold">{t.marketingPage.badge}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">
                {t.marketingPage.title}
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                {t.marketingPage.subtitle}
              </p>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-black" data-testid="button-contact-marketing">
                {t.marketingPage.ctaButton} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Leistungsumfang */}
        <section className="py-16 bg-card/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-display text-white mb-12 text-center">{t.marketingPage.servicesTitle}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.marketingPage.services.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-xl bg-card/30 border border-white/5"
                >
                  <Check className="w-8 h-8 text-orange-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Plattformen */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-display text-white mb-12 text-center">{t.marketingPage.channelsTitle}</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {channels.map((channel, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="px-6 py-3 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300"
                >
                  {channel}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vorteile */}
        <section className="py-16 bg-card/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold font-display text-white mb-8">{t.marketingPage.benefitsTitle}</h2>
              <div className="space-y-4 text-left">
                {t.marketingPage.benefits.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-card/30">
                    <Check className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-orange-900/20 to-red-900/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-display text-white mb-4">{t.marketingPage.ctaTitle}</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              {t.marketingPage.ctaSubtitle}
            </p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-black" data-testid="button-cta-marketing">
              {t.marketingPage.ctaButtonAlt} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        <RelatedServices currentPage="marketing" />
        <ExploreMoreSection />
      </main>
      <Footer />
    </div>
  );
}
