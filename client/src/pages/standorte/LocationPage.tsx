import { SEOHead } from "@/components/SEOHead";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock, ArrowRight, Bot, Zap, Globe, TrendingUp } from "lucide-react";
import { buildLocalBusinessSchema, buildServiceSchema, COMPANY_INFO, type BreadcrumbItem } from "@/lib/schema";
import { motion } from "framer-motion";

export interface LocationData {
  slug: string;
  name: string;
  region: string;
  country: string;
  latitude: number;
  longitude: number;
  headline: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  nearbyAreas: string[];
  localContent: {
    intro: string;
    whyUs: string[];
    industries: string[];
  };
}

interface LocationPageProps {
  location: LocationData;
}

const services = [
  {
    icon: Bot,
    title: "KI-Agenten",
    description: "Intelligente Chatbots und virtuelle Assistenten für Kundenservice und Lead-Generierung.",
    link: "/ki-agenten"
  },
  {
    icon: Zap,
    title: "Automatisierung",
    description: "Workflow-Automatisierung mit n8n für effizientere Geschäftsprozesse.",
    link: "/automatisierungen"
  },
  {
    icon: Globe,
    title: "Webseiten mit KI",
    description: "Moderne Websites mit integrierten KI-Features und Chatbots.",
    link: "/webseiten-ki"
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description: "Google Ads, Meta Ads und SEO für maximale Sichtbarkeit.",
    link: "/leistungen/marketing"
  }
];

export function LocationPage({ location }: LocationPageProps) {
  const breadcrumb: BreadcrumbItem[] = [
    { name: "Home", url: "https://extrucon.de/" },
    { name: "Standorte", url: "https://extrucon.de/standorte" },
    { name: location.name, url: `https://extrucon.de/standorte/${location.slug}` }
  ];

  const localBusinessSchema = buildLocalBusinessSchema({
    locationKey: location.slug as keyof typeof import("@/lib/schema").LOCATIONS,
    name: `ExtruCon GmbH - KI-Agentur ${location.name}`,
    description: location.seoDescription,
    url: `https://extrucon.de/standorte/${location.slug}`
  });

  const serviceSchema = buildServiceSchema({
    name: `KI-Agentur ${location.name}`,
    description: location.seoDescription,
    url: `https://extrucon.de/standorte/${location.slug}`,
    areaServed: [location.name, location.region, "Deutschland"]
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <SEOHead
        title={location.seoTitle}
        description={location.seoDescription}
        canonical={`https://extrucon.de/standorte/${location.slug}`}
        keywords={location.seoKeywords}
        type="website"
        breadcrumb={breadcrumb}
        structuredData={[localBusinessSchema, serviceSchema]}
      />
      <Navbar />

      <main>
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-medium">{location.region}, Deutschland</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-testid="text-headline">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  KI-Agentur {location.name}
                </span>
              </h1>
              
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto" data-testid="text-description">
                {location.headline}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/kontakt">
                  <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600" data-testid="button-contact">
                    Kostenlose Beratung
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/terminbuchung">
                  <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10" data-testid="button-booking">
                    Termin buchen
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">
                  Ihr Partner für KI & Automatisierung in {location.name}
                </h2>
                <p className="text-white/70 mb-6 leading-relaxed">
                  {location.localContent.intro}
                </p>
                <ul className="space-y-3">
                  {location.localContent.whyUs.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-cyan-400 text-sm">✓</span>
                      </div>
                      <span className="text-white/80">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/50 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-cyan-400" />
                      Kontakt in {location.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-cyan-400" />
                      <a href={`tel:${COMPANY_INFO.telephone}`} className="text-white/80 hover:text-cyan-400 transition-colors" data-testid="link-phone">
                        089 / 444 43 88 79
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-cyan-400" />
                      <a href={`mailto:${COMPANY_INFO.email}`} className="text-white/80 hover:text-cyan-400 transition-colors" data-testid="link-email">
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-cyan-400" />
                      <span className="text-white/80">Mo-Fr: 08:00 - 18:00 Uhr</span>
                    </div>
                    <div className="pt-4 border-t border-white/10">
                      <a 
                        href={`https://www.google.com/maps?q=${location.latitude},${location.longitude}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                        data-testid="link-maps"
                      >
                        <MapPin className="w-4 h-4" />
                        Auf Google Maps anzeigen
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">
                Unsere Leistungen in {location.name}
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Wir unterstützen Unternehmen in {location.name} und {location.region} mit innovativen KI-Lösungen.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={service.link}>
                    <Card className="bg-black/50 border-white/10 hover:border-cyan-500/50 transition-all duration-300 h-full cursor-pointer group" data-testid={`card-service-${index}`}>
                      <CardContent className="pt-6">
                        <service.icon className="w-10 h-10 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                        <p className="text-white/60 text-sm">{service.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">
                Branchen in {location.name}
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Wir haben Erfahrung mit verschiedenen Branchen in der Region.
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-3">
              {location.localContent.industries.map((industry, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/70 text-sm"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl font-bold mb-4">
                Wir betreuen auch Unternehmen in der Umgebung
              </h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-2">
              {location.nearbyAreas.map((area, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-6">
                Bereit für die digitale Zukunft in {location.name}?
              </h2>
              <p className="text-white/70 mb-8">
                Lassen Sie uns gemeinsam herausfinden, wie KI und Automatisierung Ihr Unternehmen voranbringen können.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/kontakt">
                  <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600" data-testid="button-cta-contact">
                    Jetzt Kontakt aufnehmen
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/terminbuchung">
                  <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10" data-testid="button-cta-booking">
                    Kostenloses Erstgespräch
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
