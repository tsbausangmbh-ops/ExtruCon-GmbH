import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Share2, Globe, PenTool, Fingerprint, Briefcase } from "lucide-react";
import aiImg from "@assets/generated_images/glowing_neural_network_brain.png";
import socialImg from "@assets/generated_images/digital_social_connection_abstract_art.png";
import webImg from "@assets/generated_images/holographic_creative_interface.png";
import brandImg from "@assets/generated_images/abstract_digital_brand_identity_construction.png";
import contentImg from "@assets/generated_images/abstract_content_creation_visualization.png";
import officeImg from "@assets/generated_images/digital_office_administration_visualization.png";
import { motion } from "framer-motion";

const services = [
  {
    title: "Markenaufbau / Brand",
    description: "Entwicklung unverwechselbarer Markenidentitäten, die Vertrauen schaffen und im Gedächtnis bleiben.",
    icon: Fingerprint,
    image: brandImg,
    color: "text-amber-400"
  },
  {
    title: "Büroservice",
    description: "Professionelle Büroorganisation und administrative Unterstützung, damit Sie sich auf Ihr Kerngeschäft konzentrieren können.",
    icon: Briefcase,
    image: officeImg,
    color: "text-emerald-400"
  },
  {
    title: "Social Media",
    description: "Strategisches Community-Management und virale Kampagnen, um Ihr Publikum auf allen Kanälen zu binden.",
    icon: Share2,
    image: socialImg,
    color: "text-purple-400"
  },
  {
    title: "KI & Automatisierung",
    description: "Maßgeschneiderte KI-Bots und intelligente Automatisierungs-Workflows zur Optimierung Ihrer Abläufe rund um die Uhr.",
    icon: Bot,
    image: aiImg,
    color: "text-cyan-400"
  },
  {
    title: "Web & Digitale Plattformen",
    description: "Hochleistungsfähige, visuell beeindruckende Webseiten und Web-Apps für das moderne Web.",
    icon: Globe,
    image: webImg,
    color: "text-blue-400"
  },
  {
    title: "Texting und Postings",
    description: "Zielgruppengenaue Texte und kreative Social Media Posts, die Interaktion fördern und verkaufen.",
    icon: PenTool,
    image: contentImg,
    color: "text-pink-400"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">Unsere Leistungen</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Umfassende digitale Lösungen, von starkem Branding bis zu modernster KI-Technologie.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass-card border-none overflow-hidden group hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
