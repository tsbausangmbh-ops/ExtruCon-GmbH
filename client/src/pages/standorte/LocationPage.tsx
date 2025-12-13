import { SEOHead } from "@/components/SEOHead";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock, ArrowRight, Bot, Zap, Globe, TrendingUp } from "lucide-react";
import { buildLocalBusinessSchema, buildServiceSchema, COMPANY_INFO, type BreadcrumbItem } from "@/lib/schema";
import { motion } from "framer-motion";
import { useLanguage, type Language } from "@/lib/i18n";

export interface LocationData {
  slug: string;
  name: string;
  region: string;
  country: string;
  latitude: number;
  longitude: number;
  nearbyAreas: string[];
}

interface LocationPageProps {
  location: LocationData;
}

type LocationKey = 'muenchen' | 'fuerstenfeldbruck' | 'bayern';

function getLocalizedLocation(slug: string, t: any) {
  const locationKey = slug as LocationKey;
  const locationData = t.locations[locationKey];
  const common = t.locations.common;
  
  return {
    name: locationData?.name || slug,
    region: locationData?.region || 'Bayern',
    headline: locationData?.headline || '',
    intro: locationData?.intro || '',
    whyUs: locationData?.whyUs || [],
    industries: locationData?.industries || [],
    common
  };
}

const serviceIcons = [Bot, Zap, Globe, TrendingUp];
const serviceLinks = ["/ki-agenten", "/automatisierungen", "/webseiten-ki", "/leistungen/marketing"];
const serviceKeys = ['kiAgents', 'automation', 'websites', 'marketing'] as const;

export function LocationPage({ location }: LocationPageProps) {
  const { t, language } = useLanguage();
  const localized = getLocalizedLocation(location.slug, t);
  const common = localized.common;

  const breadcrumb: BreadcrumbItem[] = [
    { name: common.breadcrumbHome, url: "https://extrucon.de/" },
    { name: common.breadcrumbLocations, url: "https://extrucon.de/standorte" },
    { name: localized.name, url: `https://extrucon.de/standorte/${location.slug}` }
  ];

  const localBusinessSchema = buildLocalBusinessSchema({
    locationKey: location.slug as keyof typeof import("@/lib/schema").LOCATIONS,
    name: `ExtruCon GmbH - ${common.kiAgency} ${localized.name}`,
    description: localized.headline,
    url: `https://extrucon.de/standorte/${location.slug}`
  });

  const serviceSchema = buildServiceSchema({
    name: `${common.kiAgency} ${localized.name}`,
    description: localized.headline,
    url: `https://extrucon.de/standorte/${location.slug}`,
    areaServed: [localized.name, localized.region, common.region]
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <SEOHead
        title={`${common.kiAgency} ${localized.name} | ExtruCon GmbH`}
        description={localized.headline}
        canonical={`https://extrucon.de/standorte/${location.slug}`}
        keywords={`${common.seoKeywords} ${localized.name}`}
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
                <span className="text-cyan-400 text-sm font-medium">{localized.region}, {common.region}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-testid="text-headline">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {common.kiAgency} {localized.name}
                </span>
              </h1>
              
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto" data-testid="text-description">
                {localized.headline}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/kontakt">
                  <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600" data-testid="button-contact">
                    {common.freeConsultation}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/terminbuchung">
                  <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10" data-testid="button-booking">
                    {common.bookAppointment}
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
                  {common.partnerTitle} {localized.name}
                </h2>
                <p className="text-white/70 mb-6 leading-relaxed">
                  {localized.intro}
                </p>
                <ul className="space-y-3">
                  {localized.whyUs.map((point: string, index: number) => (
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
                      {common.contactIn} {localized.name}
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
                      <span className="text-white/80">{common.hoursValue}</span>
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
                        {common.showOnMaps}
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
                {common.servicesTitle} {localized.name}
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                {common.servicesSubtitle} {localized.name} {common.servicesSubtitleEnd}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceKeys.map((key, index) => {
                const Icon = serviceIcons[index];
                const service = common.services[key];
                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={serviceLinks[index]}>
                      <Card className="bg-black/50 border-white/10 hover:border-cyan-500/50 transition-all duration-300 h-full cursor-pointer group" data-testid={`card-service-${index}`}>
                        <CardContent className="pt-6">
                          <Icon className="w-10 h-10 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                          <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                          <p className="text-white/60 text-sm">{service.desc}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                );
              })}
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
                {common.industriesTitle} {localized.name}
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                {common.industriesSubtitle}
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-3">
              {localized.industries.map((industry: string, index: number) => (
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
                {common.nearbyTitle}
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
                {common.ctaTitle} {localized.name}?
              </h2>
              <p className="text-white/70 mb-8">
                {common.ctaSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/kontakt">
                  <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600" data-testid="button-cta-contact">
                    {common.ctaContact}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/terminbuchung">
                  <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10" data-testid="button-cta-booking">
                    {common.ctaBooking}
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
