import { Bot, Workflow, Globe, TrendingUp, Share2, FileText, BookOpen, HelpCircle, Users, ArrowRight, MapPin, Calendar, MessageSquare, Award, Search } from "lucide-react";
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
    { href: "/leistungen/seo", label: t.nav.seo, icon: Search, colorClass: "text-green-400" },
    { href: "/leistungen/markenaufbau", label: "Branding", icon: Award, colorClass: "text-indigo-400" },
    { href: "/leistungen/web", label: "Webentwicklung", icon: Globe, colorClass: "text-teal-400" },
    { href: "/leistungen/ki-automatisierung", label: "KI-Automatisierung", icon: Bot, colorClass: "text-fuchsia-400" },
    { href: "/referenzen", label: t.nav.referenzen, icon: Award, colorClass: "text-amber-400" },
    { href: "/ratgeber", label: t.nav.ratgeber, icon: BookOpen, colorClass: "text-blue-400" },
    { href: "/faq", label: t.nav.faq, icon: HelpCircle, colorClass: "text-yellow-400" },
    { href: "/ueber-uns", label: t.nav.about, icon: Users, colorClass: "text-primary" },
    { href: "/ki-bot", label: "KI-Chatbot", icon: MessageSquare, colorClass: "text-violet-400" },
    { href: "/termin", label: "Termin buchen", icon: Calendar, colorClass: "text-rose-400" },
    { href: "/muenchen", label: "München", icon: MapPin, colorClass: "text-sky-400" },
    { href: "/kontakt", label: t.nav.contact, icon: Users, colorClass: "text-lime-400" },
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
  serviceKey: 'kiWebsites' | 'kiAgents' | 'workflowAutomation';
}

export function GeoLinks({ serviceKey }: GeoLinksProps) {
  const { t } = useLanguage();
  const locations = ["Fürstenfeldbruck", "München", "Bayern"];

  return (
    <div className="text-sm text-gray-400 mt-4">
      <span className="font-medium text-gray-300">{t.geoLinks[serviceKey]} {t.geoLinks.serviceIn} </span>
      {locations.map((loc, i) => (
        <span key={loc}>
          <a href="/kontakt" className="text-primary hover:underline">{loc}</a>
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

export function LocationLinks() {
  const locations = [
    { name: "München", href: "/muenchen" },
    { name: "Schwabing", href: "/muenchen/schwabing" },
    { name: "Bogenhausen", href: "/muenchen/bogenhausen" },
    { name: "Nymphenburg", href: "/muenchen/nymphenburg" },
    { name: "Grünwald", href: "/muenchen/gruenwald" },
    { name: "Harlaching", href: "/muenchen/harlaching" },
    { name: "Starnberg", href: "/starnberg" },
    { name: "Dachau", href: "/dachau" },
    { name: "Germering", href: "/germering" },
    { name: "Puchheim", href: "/puchheim" },
    { name: "Olching", href: "/olching" },
  ];

  return (
    <section className="py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <h3 className="text-lg font-bold text-white mb-4 text-center flex items-center justify-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          Unsere Standorte in Bayern
        </h3>
        <div className="flex flex-wrap justify-center gap-2">
          {locations.map((loc) => (
            <a
              key={loc.href}
              href={loc.href}
              className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:bg-primary/20 hover:border-primary/30 transition-colors"
            >
              {loc.name}
            </a>
          ))}
        </div>
        <p className="text-center text-gray-500 text-sm mt-4">
          KI-Agentur für <a href="/muenchen" className="text-primary hover:underline">München</a> und Umgebung · 
          <a href="/kontakt" className="text-primary hover:underline ml-1">Kostenlose Beratung</a>
        </p>
      </div>
    </section>
  );
}

export function ServiceQuickLinks() {
  const services = [
    { name: "KI-Agenten", href: "/ki-agenten" },
    { name: "Automatisierungen", href: "/automatisierungen" },
    { name: "Webseiten mit KI", href: "/webseiten-ki" },
    { name: "Social Media", href: "/leistungen/social-media" },
    { name: "Marketing", href: "/leistungen/marketing" },
    { name: "Content", href: "/leistungen/content" },
    { name: "SEO", href: "/leistungen/seo" },
    { name: "Branding", href: "/leistungen/markenaufbau" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 py-4">
      {services.map((svc) => (
        <a
          key={svc.href}
          href={svc.href}
          className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary hover:bg-primary/20 transition-colors"
        >
          {svc.name}
        </a>
      ))}
    </div>
  );
}

interface RelatedService {
  href: string;
  title: string;
  description: string;
  icon: React.ElementType;
  colorClass: string;
  bgClass: string;
}

interface RelatedServicesProps {
  currentPage: 'ki-agenten' | 'automatisierungen' | 'webseiten-ki' | 'faq' | 'chatbot' | 'contact' | 'referenzen' | 'marketing' | 'social-media' | 'content' | 'brand' | 'web' | 'ki-automatisierung' | 'seo' | 'ratgeber' | 'ueber-uns';
}

export function RelatedServices({ currentPage }: RelatedServicesProps) {
  const { t } = useLanguage();

  const allServices: Record<string, RelatedService> = {
    'ki-agenten': {
      href: '/ki-agenten',
      title: t.relatedServices?.kiAgents?.title || t.nav.kiAgents,
      description: t.relatedServices?.kiAgents?.desc || t.services.kiAgents.desc,
      icon: Bot,
      colorClass: 'text-cyan-400',
      bgClass: 'from-cyan-500/20 to-cyan-500/5'
    },
    'automatisierungen': {
      href: '/automatisierungen',
      title: t.relatedServices?.automation?.title || t.nav.automation,
      description: t.relatedServices?.automation?.desc || t.services.automation.desc,
      icon: Workflow,
      colorClass: 'text-orange-400',
      bgClass: 'from-orange-500/20 to-orange-500/5'
    },
    'webseiten-ki': {
      href: '/webseiten-ki',
      title: t.relatedServices?.websites?.title || t.nav.websitesKI,
      description: t.relatedServices?.websites?.desc || t.services.websites.desc,
      icon: Globe,
      colorClass: 'text-emerald-400',
      bgClass: 'from-emerald-500/20 to-emerald-500/5'
    },
    'faq': {
      href: '/faq',
      title: t.relatedServices?.faq?.title || t.nav.faq,
      description: t.relatedServices?.faq?.desc || 'Antworten auf häufige Fragen',
      icon: HelpCircle,
      colorClass: 'text-yellow-400',
      bgClass: 'from-yellow-500/20 to-yellow-500/5'
    },
    'chatbot': {
      href: '/chatbot',
      title: t.relatedServices?.chatbot?.title || 'KI-Chatbot',
      description: t.relatedServices?.chatbot?.desc || 'Testen Sie unseren AI-Assistenten',
      icon: Bot,
      colorClass: 'text-purple-400',
      bgClass: 'from-purple-500/20 to-purple-500/5'
    },
    'contact': {
      href: '/kontakt',
      title: t.relatedServices?.contact?.title || t.nav.contact,
      description: t.relatedServices?.contact?.desc || 'Kontaktieren Sie uns',
      icon: Users,
      colorClass: 'text-primary',
      bgClass: 'from-primary/20 to-primary/5'
    },
    'referenzen': {
      href: '/referenzen',
      title: t.relatedServices?.referenzen?.title || t.nav.referenzen,
      description: t.relatedServices?.referenzen?.desc || 'Unsere erfolgreichen Projekte',
      icon: Users,
      colorClass: 'text-blue-400',
      bgClass: 'from-blue-500/20 to-blue-500/5'
    },
    'marketing': {
      href: '/leistungen/marketing',
      title: t.nav.marketing,
      description: t.services.marketing.desc,
      icon: Bot,
      colorClass: 'text-orange-400',
      bgClass: 'from-orange-500/20 to-orange-500/5'
    },
    'social-media': {
      href: '/leistungen/social-media',
      title: t.nav.socialMedia,
      description: t.services.socialMedia.desc,
      icon: Globe,
      colorClass: 'text-purple-400',
      bgClass: 'from-purple-500/20 to-purple-500/5'
    },
    'content': {
      href: '/leistungen/content',
      title: t.nav.contentCreation,
      description: t.services.content.desc,
      icon: Bot,
      colorClass: 'text-pink-400',
      bgClass: 'from-pink-500/20 to-pink-500/5'
    },
    'ratgeber': {
      href: '/ratgeber',
      title: t.nav.ratgeber,
      description: 'Wissen und Tipps rund um KI-Technologien',
      icon: HelpCircle,
      colorClass: 'text-blue-400',
      bgClass: 'from-blue-500/20 to-blue-500/5'
    }
  };

  const getRelatedForPage = (): RelatedService[] => {
    switch (currentPage) {
      case 'ki-agenten':
        return [allServices['automatisierungen'], allServices['webseiten-ki'], allServices['chatbot']];
      case 'automatisierungen':
        return [allServices['ki-agenten'], allServices['webseiten-ki'], allServices['contact']];
      case 'webseiten-ki':
        return [allServices['ki-agenten'], allServices['automatisierungen'], allServices['referenzen']];
      case 'faq':
        return [allServices['ki-agenten'], allServices['automatisierungen'], allServices['webseiten-ki']];
      case 'chatbot':
        return [allServices['ki-agenten'], allServices['automatisierungen'], allServices['contact']];
      case 'contact':
        return [allServices['ki-agenten'], allServices['automatisierungen'], allServices['webseiten-ki']];
      case 'referenzen':
        return [allServices['ki-agenten'], allServices['automatisierungen'], allServices['webseiten-ki']];
      case 'marketing':
        return [allServices['ki-agenten'], allServices['social-media'], allServices['content']];
      case 'social-media':
        return [allServices['marketing'], allServices['content'], allServices['ki-agenten']];
      case 'content':
        return [allServices['social-media'], allServices['marketing'], allServices['webseiten-ki']];
      case 'brand':
      case 'web':
      case 'ki-automatisierung':
        return [allServices['ki-agenten'], allServices['automatisierungen'], allServices['webseiten-ki']];
      case 'seo':
        return [allServices['marketing'], allServices['webseiten-ki'], allServices['content']];
      case 'ratgeber':
        return [allServices['ki-agenten'], allServices['faq'], allServices['contact']];
      case 'ueber-uns':
        return [allServices['referenzen'], allServices['ki-agenten'], allServices['contact']];
      default:
        return [allServices['ki-agenten'], allServices['automatisierungen'], allServices['webseiten-ki']];
    }
  };

  const related = getRelatedForPage();

  return (
    <section className="py-16 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            {t.relatedServices?.title || 'Das könnte Sie auch interessieren'}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t.relatedServices?.subtitle || 'Entdecken Sie weitere Leistungen unserer KI-Agentur aus Fürstenfeldbruck'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {related.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.a
                key={service.href}
                href={service.href}
                className={`block p-6 rounded-xl bg-gradient-to-br ${service.bgClass} border border-white/10 hover:border-white/20 transition-all group`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-testid={`related-service-${i}`}
              >
                <div className={`w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 ${service.colorClass}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                  {t.relatedServices?.learnMore || 'Mehr erfahren'} <ArrowRight className="w-4 h-4" />
                </span>
              </motion.a>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <a
            href="/kontakt"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            data-testid="related-cta-button"
          >
            {t.relatedServices?.ctaButton || 'Kostenlose Beratung anfragen'}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
