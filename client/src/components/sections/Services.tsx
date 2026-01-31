import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Share2, Globe, PenTool, Fingerprint, TrendingUp, Search, Award, HelpCircle } from "lucide-react";
import aiImg from "@assets/generated_images/optimized/glowing_neural_network_brain.webp";
import socialImg from "@assets/generated_images/optimized/digital_social_connection_abstract_art.webp";
import webImg from "@assets/generated_images/optimized/holographic_creative_interface.webp";
import brandImg from "@assets/generated_images/optimized/abstract_digital_brand_identity_construction.webp";
import contentImg from "@assets/generated_images/optimized/abstract_content_creation_visualization.webp";
import marketingImg from "@assets/generated_images/optimized/abstract_performance_marketing_growth.webp";
import seoImg from "@assets/generated_images/optimized/abstract_seo_geo-optimization_visual.webp";
import referenzenImg from "@assets/generated_images/optimized/portfolio_references_showcase_visual.webp";
import faqImg from "@assets/generated_images/optimized/faq_knowledge_help_visual.webp";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

export function Services() {
  const { t } = useLanguage();

  const mainServices = [
    {
      title: t.nav.kiAgents,
      description: "GPT-4 & Claude AI Chatbots für 24/7 Kundenservice, Lead-Generierung und automatisierte Beratung",
      icon: Bot,
      image: aiImg,
      color: "text-cyan-400",
      href: "/ki-agenten",
      featured: true
    },
    {
      title: t.nav.automation,
      description: "n8n & Make Workflows für automatisierte Geschäftsprozesse und nahtlose System-Integration",
      icon: Share2,
      image: socialImg,
      color: "text-orange-400",
      href: "/automatisierungen",
      featured: true
    },
    {
      title: t.nav.websitesKI,
      description: "Moderne Websites mit KI-Chatbot, SEO-Optimierung und Conversion-Fokus",
      icon: Globe,
      image: webImg,
      color: "text-emerald-400",
      href: "/webseiten-ki",
      featured: true
    }
  ];

  const services = [
    {
      title: t.servicesPage.brand.title,
      description: t.servicesPage.brand.desc,
      icon: Fingerprint,
      image: brandImg,
      color: "text-amber-400",
      href: "/leistungen/markenaufbau"
    },
    {
      title: t.servicesPage.content.title,
      description: t.servicesPage.content.desc,
      icon: PenTool,
      image: contentImg,
      color: "text-pink-400",
      href: "/leistungen/content"
    },
    {
      title: t.servicesPage.social.title,
      description: t.servicesPage.social.desc,
      icon: Share2,
      image: socialImg,
      color: "text-purple-400",
      href: "/leistungen/social-media"
    },
    {
      title: t.servicesPage.ki.title,
      description: t.servicesPage.ki.desc,
      icon: Bot,
      image: aiImg,
      color: "text-cyan-400",
      href: "/leistungen/ki-automatisierung"
    },
    {
      title: t.servicesPage.web.title,
      description: t.servicesPage.web.desc,
      icon: Globe,
      image: webImg,
      color: "text-blue-400",
      href: "/leistungen/web"
    },
    {
      title: t.servicesPage.marketing.title,
      description: t.servicesPage.marketing.desc,
      icon: TrendingUp,
      image: marketingImg,
      color: "text-orange-400",
      href: "/leistungen/marketing"
    },
    {
      title: t.servicesPage.seo.title,
      description: t.servicesPage.seo.desc,
      icon: Search,
      image: seoImg,
      color: "text-green-400",
      href: "/leistungen/seo"
    },
    {
      title: "Referenzen",
      description: "Überzeugen Sie sich von unseren erfolgreichen Projekten und zufriedenen Kunden",
      icon: Award,
      image: referenzenImg,
      color: "text-yellow-400",
      href: "/referenzen"
    },
    {
      title: "FAQ",
      description: "Antworten auf häufig gestellte Fragen zu unseren Leistungen und Prozessen",
      icon: HelpCircle,
      image: faqImg,
      color: "text-violet-400",
      href: "/faq"
    }
  ];

  return (
    <section id="services" className="py-8 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">{t.servicesPage.title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t.servicesPage.subtitle}
          </p>
        </div>

        {/* Main Services - Featured */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {mainServices.map((service, index) => (
            <motion.div
              key={`main-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <a href={service.href} className="block h-full" data-testid={`link-main-service-${index}`}>
                <Card className="glass-card border-2 border-primary/30 overflow-hidden group hover:bg-white/10 hover:border-primary/50 transition-all duration-300 h-full flex flex-col cursor-pointer">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80" />
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 bg-primary/20 border border-primary/40 rounded-full text-xs text-primary font-medium">Featured</span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <service.icon className={`w-8 h-8 ${service.color} drop-shadow-lg`} />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-white font-display tracking-wide">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400 text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <a href={service.href} className="block h-full" data-testid={`link-service-${index}`}>
                <Card className="glass-card border-none overflow-hidden group hover:bg-white/10 transition-all duration-300 h-full flex flex-col cursor-pointer">
                  <div className="h-48 overflow-hidden relative">
                    {service.image ? (
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-purple-900 to-pink-900 flex items-center justify-center">
                        <service.icon className="w-16 h-16 text-white/20" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-4">
                      <service.icon className={`w-8 h-8 ${service.color} drop-shadow-lg`} />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-white font-display tracking-wide">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400 text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
