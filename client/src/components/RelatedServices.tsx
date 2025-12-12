import { Bot, Workflow, Globe, TrendingUp, Share2, FileText, Palette, Users, BookOpen, HelpCircle, Building2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";

interface ServiceLink {
  href: string;
  icon: React.ElementType;
  colorClass: string;
  nameKey: keyof typeof import("@/lib/i18n").translations.de.nav;
  descKey?: string;
}

const allServices: ServiceLink[] = [
  { href: "/ki-agenten", icon: Bot, colorClass: "cyan-500", nameKey: "kiAgents" },
  { href: "/automatisierungen", icon: Workflow, colorClass: "orange-500", nameKey: "automation" },
  { href: "/webseiten-ki", icon: Globe, colorClass: "emerald-500", nameKey: "websitesKI" },
  { href: "/leistungen/social-media", icon: Share2, colorClass: "purple-500", nameKey: "socialMedia" },
  { href: "/leistungen/content", icon: FileText, colorClass: "pink-500", nameKey: "contentCreation" },
  { href: "/leistungen/marketing", icon: TrendingUp, colorClass: "orange-500", nameKey: "marketing" },
];

interface RelatedServicesProps {
  currentPath: string;
  maxItems?: number;
}

export function RelatedServices({ currentPath, maxItems = 3 }: RelatedServicesProps) {
  const { t } = useLanguage();
  
  const filteredServices = allServices.filter(service => service.href !== currentPath);
  const relatedServices = filteredServices.slice(0, maxItems);

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { border: string; icon: string }> = {
      "cyan-500": { border: "hover:border-cyan-500/50", icon: "text-cyan-500" },
      "orange-500": { border: "hover:border-orange-500/50", icon: "text-orange-500" },
      "emerald-500": { border: "hover:border-emerald-500/50", icon: "text-emerald-500" },
      "purple-500": { border: "hover:border-purple-500/50", icon: "text-purple-500" },
      "pink-500": { border: "hover:border-pink-500/50", icon: "text-pink-500" },
      "blue-500": { border: "hover:border-blue-500/50", icon: "text-blue-500" },
    };
    return colorMap[color] || colorMap["cyan-500"];
  };

  const getServiceDescription = (nameKey: string): string => {
    const descMap: Record<string, string> = {
      kiAgents: t.services.kiAgents.desc,
      automation: t.services.automation.desc,
      websitesKI: t.services.websites.desc,
      socialMedia: t.services.socialMedia.desc,
      contentCreation: t.services.content.desc,
      marketing: t.services.marketing.desc,
    };
    return descMap[nameKey] || "";
  };

  return (
    <section className="py-12 bg-white/5">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-white text-center mb-8">{t.nav.services}</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {relatedServices.map((service, i) => {
            const IconComponent = service.icon;
            const colors = getColorClasses(service.colorClass);
            return (
              <motion.a 
                key={service.href}
                href={service.href} 
                className={`p-6 bg-white/5 border border-white/10 rounded-xl ${colors.border} transition-colors group`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-testid={`link-related-service-${i}`}
              >
                <IconComponent className={`w-8 h-8 ${colors.icon} mb-3`} />
                <h3 className="text-lg font-bold text-white mb-2">{t.nav[service.nameKey]}</h3>
                <p className="text-sm text-gray-400">{getServiceDescription(service.nameKey)}</p>
              </motion.a>
            );
          })}
          <motion.a 
            href="/kontakt" 
            className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-primary/50 transition-colors group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            data-testid="link-related-contact"
          >
            <Users className="w-8 h-8 text-primary mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">{t.nav.contact}</h3>
            <p className="text-sm text-gray-400">{t.hero.freeConsultation}</p>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
