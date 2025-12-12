import { Bot, Workflow, Globe, TrendingUp, Share2, FileText, BookOpen, HelpCircle, Users, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";

interface LinkItem {
  href: string;
  label: string;
  icon: React.ElementType;
  colorClass: string;
}

export function ExploreMoreSection() {
  const { t } = useLanguage();

  const links: LinkItem[] = [
    { href: "/ki-agenten", label: t.nav.kiAgents, icon: Bot, colorClass: "text-cyan-400" },
    { href: "/automatisierungen", label: t.nav.automation, icon: Workflow, colorClass: "text-orange-400" },
    { href: "/webseiten-ki", label: t.nav.websitesKI, icon: Globe, colorClass: "text-emerald-400" },
    { href: "/leistungen/social-media", label: t.nav.socialMedia, icon: Share2, colorClass: "text-purple-400" },
    { href: "/leistungen/marketing", label: t.nav.marketing, icon: TrendingUp, colorClass: "text-orange-400" },
    { href: "/leistungen/content", label: t.nav.contentCreation, icon: FileText, colorClass: "text-pink-400" },
    { href: "/ratgeber", label: t.nav.ratgeber, icon: BookOpen, colorClass: "text-blue-400" },
    { href: "/faq", label: t.nav.faq, icon: HelpCircle, colorClass: "text-yellow-400" },
    { href: "/ueber-uns", label: t.nav.about, icon: Users, colorClass: "text-primary" },
  ];

  return (
    <section className="py-10 border-t border-white/10">
      <div className="container mx-auto px-4">
        <h3 className="text-lg font-bold text-white mb-6 text-center">Weitere Themen entdecken</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {links.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:bg-white/10 hover:border-primary/30 transition-colors"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                data-testid={`explore-link-${i}`}
              >
                <Icon className={`w-4 h-4 ${link.colorClass}`} />
                {link.label}
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface GeoLinksProps {
  service: string;
}

export function GeoLinks({ service }: GeoLinksProps) {
  const locations = [
    { name: "Fürstenfeldbruck", region: "bei München" },
    { name: "München", region: "und Umgebung" },
    { name: "Bayern", region: "deutschlandweit" },
  ];

  return (
    <div className="text-sm text-gray-400 mt-4">
      <span className="font-medium text-gray-300">{service} in: </span>
      {locations.map((loc, i) => (
        <span key={loc.name}>
          <a href="/kontakt" className="text-primary hover:underline">{loc.name}</a>
          {i < locations.length - 1 && " · "}
        </span>
      ))}
    </div>
  );
}

export function ContextualCTA() {
  const { t } = useLanguage();
  
  return (
    <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
      <p className="text-gray-300 mb-3">
        Erfahren Sie mehr über unsere <a href="/ki-agenten" className="text-primary hover:underline font-medium">KI-Agenten</a>, 
        <a href="/automatisierungen" className="text-primary hover:underline font-medium ml-1">Automatisierungen</a> und 
        <a href="/webseiten-ki" className="text-primary hover:underline font-medium ml-1">Webseiten mit KI</a>.
      </p>
      <a 
        href="/kontakt" 
        className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
      >
        Kostenlose Beratung anfragen <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}
