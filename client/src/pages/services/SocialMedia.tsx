import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Share2, Check, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import socialImg from "@assets/generated_images/digital_social_connection_abstract_art.png";
import { useLanguage } from "@/lib/i18n";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedServices, ExploreMoreSection, GeoLinks } from "@/components/InternalLinks";

export default function SocialMedia() {
  const { t } = useLanguage();

  const platforms = ["Instagram", "TikTok", "LinkedIn", "Facebook", "YouTube", "X (Twitter)", "Pinterest", "Google Business"];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SEOHead
        title="KI-Social Media Marketing | GPT-4 & Midjourney Content | ExtruCon"
        description="KI-gestütztes Social Media Marketing. GPT-4 Texte, Midjourney Grafiken, automatisierte Content-Planung. Instagram, TikTok, LinkedIn. Fürstenfeldbruck."
        keywords="KI Social Media, Social Media KI, GPT-4 Social Media, Midjourney Content, Instagram Agentur, TikTok Marketing KI, AI Social Media München"
        canonical="https://extrucon.de/leistungen/social-media"
        geoRegion="DE-BY"
        geoPlacename="Fürstenfeldbruck"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://extrucon.de/leistungen/social-media#service",
            "name": "KI-Social Media Marketing",
            "alternateName": ["AI Social Media", "GPT-4 Social Media Content"],
            "description": "KI-gestütztes Social Media Marketing mit GPT-4 und Midjourney. Automatisierte Content-Erstellung und intelligente Posting-Planung für maximale Reichweite.",
            "provider": { "@type": "Organization", "@id": "https://extrucon.de/#organization" },
            "areaServed": [
              { "@type": "City", "name": "Fürstenfeldbruck" },
              { "@type": "City", "name": "München" },
              { "@type": "State", "name": "Bayern" },
              { "@type": "Country", "name": "Deutschland" }
            ],
            "serviceType": ["AI Social Media", "KI Content Creation", "Social Media Automation"]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Nutzen Sie KI für Social Media Content?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, wir nutzen GPT-4 für Captions und Texte, Midjourney für Grafiken und KI-Tools für optimale Posting-Zeiten und Hashtag-Analyse." } },
              { "@type": "Question", "name": "Welche Plattformen betreuen Sie mit KI?", "acceptedAnswer": { "@type": "Answer", "text": "Wir betreuen Instagram, TikTok, LinkedIn, Facebook, YouTube und Pinterest mit KI-gestützter Content-Erstellung und Analyse." } },
              { "@type": "Question", "name": "Wie schnell entsteht KI-Content für Social Media?", "acceptedAnswer": { "@type": "Answer", "text": "Mit KI-Unterstützung erstellen wir wöchentliche Content-Pakete in 1-2 Tagen statt einer Woche. Qualitätskontrolle durch unsere Experten inklusive." } }
            ]
          }
        ]}
      />
      <Navbar />
      <main className="pt-24">
        <Breadcrumbs items={[
          { label: t.nav.services, href: "/#services" },
          { label: t.nav.socialMedia }
        ]} />
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={socialImg} alt={t.socialMediaPage.heroImageAlt} className="w-full h-full object-cover opacity-20" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <Share2 className="w-12 h-12 text-purple-400" />
                <span className="text-purple-400 font-semibold">{t.socialMediaPage.badge}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">
                {t.socialMediaPage.title}
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                {t.socialMediaPage.subtitle}
              </p>
              <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white" data-testid="button-contact-social">
                {t.socialMediaPage.ctaButton} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Leistungsumfang */}
        <section className="py-10 bg-card/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-display text-white mb-4 text-center">{t.socialMediaPage.servicesTitle}</h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              {t.socialMediaPage.servicesSubtitle}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.socialMediaPage.services.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-xl bg-card/30 border border-white/5"
                >
                  <Check className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Plattformen */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-display text-white mb-12 text-center">{t.socialMediaPage.platformsTitle}</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {platforms.map((platform, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300"
                >
                  {platform}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vorteile */}
        <section className="py-10 bg-card/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold font-display text-white mb-8">{t.socialMediaPage.benefitsTitle}</h2>
              <div className="space-y-4 text-left">
                {t.socialMediaPage.benefits.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-card/30">
                    <Check className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-display text-white mb-8 text-center">
              {t.socialMediaPage.faqTitle}
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {t.socialMediaPage.faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-xl bg-card/30 border border-white/5"
                >
                  <h3 className="text-lg font-bold text-white mb-2 flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    {faq.q}
                  </h3>
                  <p className="text-gray-400 ml-7">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        {t.socialMediaPage.seoContent && (
          <section className="py-10 bg-card/10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold font-display text-white mb-8">{t.socialMediaPage.seoTitle}</h2>
                <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
                  {t.socialMediaPage.seoContent.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-10 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-display text-white mb-4">{t.socialMediaPage.ctaTitle}</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              {t.socialMediaPage.ctaSubtitle}
            </p>
            <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white" data-testid="button-cta-social">
              {t.socialMediaPage.ctaButtonAlt} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        <RelatedServices currentPage="social-media" />
        <ExploreMoreSection />
      </main>
      <Footer />
    </div>
  );
}
