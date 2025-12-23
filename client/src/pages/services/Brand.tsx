import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Fingerprint, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import brandImg from "@assets/generated_images/abstract_digital_brand_identity_construction.png";
import { useLanguage } from "@/lib/i18n";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedServices, ExploreMoreSection, GeoLinks } from "@/components/InternalLinks";

export default function Brand() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SEOHead
        title="KI-Markenentwicklung | Midjourney Logo & Corporate Design | ExtruCon"
        description="KI-gestützte Markenentwicklung mit Midjourney und DALL-E. Logo-Design, Corporate Design & visuelle Identität. Schneller, kreativer, einzigartig."
        keywords="KI Logo Design, Midjourney Branding, AI Corporate Design, KI Markenentwicklung, Branding Agentur München, DALL-E Logo, AI Brand Design"
        canonical="https://extrucon.de/leistungen/markenentwicklung"
        geoRegion="DE-BY"
        geoPlacename="Fürstenfeldbruck"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://extrucon.de/leistungen/markenentwicklung#service",
            "name": "KI-Markenentwicklung & Corporate Design",
            "alternateName": ["AI Branding", "Midjourney Logo Design", "KI Corporate Design"],
            "description": "KI-gestützte Markenentwicklung mit Midjourney und DALL-E. Logo-Design, Corporate Design und visuelle Identität – schneller und kreativer.",
            "provider": { "@type": "Organization", "@id": "https://extrucon.de/#organization" },
            "areaServed": [
              { "@type": "City", "name": "Fürstenfeldbruck" },
              { "@type": "City", "name": "München" },
              { "@type": "State", "name": "Bayern" },
              { "@type": "Country", "name": "Deutschland" }
            ],
            "serviceType": ["AI Branding", "KI Logo Design", "Corporate Design"]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Nutzen Sie KI für Logo-Design?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, wir nutzen Midjourney und DALL-E für schnelle Konzeptentwicklung und Inspiration. Die finale Ausarbeitung erfolgt durch unsere Designer." } },
              { "@type": "Question", "name": "Wie beschleunigt KI die Markenentwicklung?", "acceptedAnswer": { "@type": "Answer", "text": "Mit KI generieren wir in Stunden Hunderte von Konzepten und Varianten. Das verkürzt die Entwicklungszeit um 40-50%." } },
              { "@type": "Question", "name": "Ist KI-generiertes Design einzigartig?", "acceptedAnswer": { "@type": "Answer", "text": "Absolut. Wir nutzen KI als kreatives Werkzeug und verfeinern alle Designs manuell zu 100% einzigartigen, rechtlich geschützten Markenidentitäten." } }
            ]
          }
        ]}
      />
      <Navbar />
      <main className="pt-24">
        <Breadcrumbs items={[
          { label: t.nav.services, href: "/#services" },
          { label: t.brandPage.badge }
        ]} />
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={brandImg} alt={t.brandPage.title} className="w-full h-full object-cover opacity-20" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <Fingerprint className="w-12 h-12 text-amber-400" />
                <span className="text-amber-400 font-semibold">{t.brandPage.badge}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">
                {t.brandPage.title}
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                {t.brandPage.subtitle}
              </p>
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black" data-testid="button-contact-brand">
                {t.brandPage.ctaButton} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Leistungsumfang */}
        <section className="py-16 bg-card/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-display text-white mb-12 text-center">{t.brandPage.servicesTitle}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.brandPage.services.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-xl bg-card/30 border border-white/5"
                >
                  <Check className="w-8 h-8 text-amber-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vorteile */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold font-display text-white mb-8">{t.brandPage.benefitsTitle}</h2>
              <div className="space-y-4 text-left">
                {t.brandPage.benefits.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-card/30">
                    <Check className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-amber-900/20 to-orange-900/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-display text-white mb-4">{t.brandPage.ctaTitle}</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              {t.brandPage.ctaSubtitle}
            </p>
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black" data-testid="button-cta-brand">
              {t.brandPage.ctaButtonAlt} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        <RelatedServices currentPage="brand" />
        <ExploreMoreSection />
      </main>
      <Footer />
    </div>
  );
}
