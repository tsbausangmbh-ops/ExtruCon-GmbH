import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { PenTool, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import contentImg from "@assets/generated_images/abstract_content_creation_visualization.png";
import { useLanguage } from "@/lib/i18n";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedServices, ExploreMoreSection, GeoLinks } from "@/components/InternalLinks";

export default function Content() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SEOHead
        title="KI-Content-Erstellung | GPT-4 & Midjourney Content | ExtruCon"
        description="KI-gestützte Content-Erstellung mit GPT-4 & Midjourney. Texte, Grafiken, Videos & Social Media Content. Schnell, qualitativ, skalierbar. Fürstenfeldbruck."
        keywords="KI Content, GPT-4 Texte, Midjourney Grafiken, AI Content Creation, KI Texterstellung, Social Media Content KI, KI Bilder, DALL-E, Claude AI Content"
        canonical="https://extrucon.de/leistungen/content"
        geoRegion="DE-BY"
        geoPlacename="Fürstenfeldbruck"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://extrucon.de/leistungen/content#service",
            "name": "KI-Content-Erstellung",
            "alternateName": ["AI Content Creation", "GPT-4 Content", "KI Texterstellung"],
            "description": "KI-gestützte Content-Erstellung mit GPT-4, Claude AI und Midjourney. Texte, Grafiken, Videos und Social Media Content – schnell, qualitativ und skalierbar.",
            "provider": { "@type": "Organization", "@id": "https://extrucon.de/#organization" },
            "areaServed": [
              { "@type": "City", "name": "Fürstenfeldbruck" },
              { "@type": "City", "name": "München" },
              { "@type": "State", "name": "Bayern" },
              { "@type": "Country", "name": "Deutschland" }
            ],
            "serviceType": ["AI Content Creation", "KI Texterstellung", "GPT-4 Content"]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Welche KI-Tools nutzen Sie für Content?", "acceptedAnswer": { "@type": "Answer", "text": "Wir nutzen GPT-4 und Claude AI für Texte, Midjourney und DALL-E für Grafiken, sowie ElevenLabs für Voiceover – immer mit menschlicher Qualitätskontrolle." } },
              { "@type": "Question", "name": "Ist KI-Content SEO-optimiert?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, wir optimieren alle KI-generierten Inhalte für Suchmaschinen mit strukturierten Daten, Keywords und Meta-Beschreibungen." } },
              { "@type": "Question", "name": "Wie schnell ist KI-Content verfügbar?", "acceptedAnswer": { "@type": "Answer", "text": "Mit KI-Unterstützung liefern wir Content innerhalb von 1-3 Werktagen. Bei großen Mengen oder Rush-Aufträgen noch schneller." } }
            ]
          }
        ]}
      />
      <Navbar />
      <main className="pt-24">
        <Breadcrumbs items={[
          { label: t.nav.services, href: "/#services" },
          { label: t.nav.contentCreation }
        ]} />
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={contentImg} alt="Content Creation" className="w-full h-full object-cover opacity-20" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <PenTool className="w-12 h-12 text-pink-400" />
                <span className="text-pink-400 font-semibold">{t.contentPage.badge}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">
                {t.contentPage.title}
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                {t.contentPage.subtitle}
              </p>
              <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white" data-testid="button-contact-content">
                {t.contentPage.ctaButton} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Leistungsumfang */}
        <section className="py-16 bg-card/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-display text-white mb-12 text-center">{t.contentPage.servicesTitle}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.contentPage.services.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-xl bg-card/30 border border-white/5"
                >
                  <Check className="w-8 h-8 text-pink-400 mb-4" />
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
              <h2 className="text-3xl font-bold font-display text-white mb-8">{t.contentPage.benefitsTitle}</h2>
              <div className="space-y-4 text-left">
                {t.contentPage.benefits.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-card/30">
                    <Check className="w-5 h-5 text-pink-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-pink-900/20 to-purple-900/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-display text-white mb-4">{t.contentPage.ctaTitle}</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              {t.contentPage.ctaSubtitle}
            </p>
            <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white" data-testid="button-cta-content">
              {t.contentPage.ctaButtonAlt} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        <RelatedServices currentPage="content" />
        <ExploreMoreSection />
      </main>
      <Footer />
    </div>
  );
}
