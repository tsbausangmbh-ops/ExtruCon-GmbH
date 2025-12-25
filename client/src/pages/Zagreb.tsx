import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ExploreMoreSection } from "@/components/InternalLinks";
import { motion } from "framer-motion";
import { Bot, Zap, Building2, MapPin, Phone, Mail, ArrowRight, CheckCircle, Brain, Workflow, Users, Clock, Shield, TrendingUp, Globe, Star } from "lucide-react";
import { Link } from "wouter";

export default function Zagreb() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://extrucon.de/zagreb#localbusiness",
    "name": "ExtruCon GmbH - AI Agencija Zagreb",
    "image": "https://extrucon.de/logo.png",
    "description": "AI agencija za Hrvatsku. Razvijamo AI agente, automatiziramo poslovne procese i stvaramo moderne web stranice s AI značajkama.",
    "url": "https://extrucon.de/zagreb",
    "telephone": "+4989444438879",
    "email": "info@extrucon.de",
    "priceRange": "€€-€€€",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Zagreb",
      "addressRegion": "Grad Zagreb",
      "addressCountry": "HR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 45.8150,
      "longitude": 15.9819
    },
    "areaServed": [
      { "@type": "City", "name": "Zagreb" },
      { "@type": "City", "name": "Split" },
      { "@type": "City", "name": "Rijeka" },
      { "@type": "City", "name": "Osijek" },
      { "@type": "Country", "name": "Hrvatska" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/extrucon",
      "https://www.instagram.com/extrucon"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Koliko košta AI konzultacija u Zagrebu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "U ExtruConu prva konzultacija je besplatna. Analiziramo vaše potrebe i pripremamo prilagođenu ponudu za vaše poslovanje."
        }
      },
      {
        "@type": "Question",
        "name": "Pruža li ExtruCon usluge u Hrvatskoj?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Da, pružamo usluge daljinskog savjetovanja i razvoja projekata diljem Hrvatske, uključujući Zagreb, Split, Rijeku i Osijek."
        }
      },
      {
        "@type": "Question",
        "name": "Koje AI modele koristite?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Koristimo GPT-4, Claude AI i Gemini za pametne AI agente. Za vizualno stvaranje koristimo Midjourney i DALL-E. Za automatizaciju radnih tokova koristimo n8n, Make i Zapier."
        }
      },
      {
        "@type": "Question",
        "name": "Koliko vremena treba za implementaciju AI rješenja?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jednostavni chatbotovi mogu biti spremni za 2-4 tjedna. Složeniji AI agenti s CRM integracijom obično zahtijevaju 4-8 tjedana razvoja."
        }
      },
      {
        "@type": "Question",
        "name": "Jesu li vaša rješenja usklađena s GDPR-om?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Da, sva naša rješenja su potpuno usklađena s GDPR-om i europskim standardima zaštite podataka. Sigurnost podataka je naš prioritet."
        }
      }
    ]
  };

  const schemaData = [localBusinessSchema, faqSchema];

  const services = [
    {
      icon: Bot,
      title: "AI Agenti",
      description: "Pametni chatbotovi i AI asistenti koji automatiziraju korisničku podršku i dostupni su 24/7.",
      link: "/ki-agenten"
    },
    {
      icon: Workflow,
      title: "Automatizacija",
      description: "Automatizacija radnih tokova temeljena na n8n. Uštedite vrijeme na e-mailovima, CRM-u i fakturiranju.",
      link: "/automatisierungen"
    },
    {
      icon: Globe,
      title: "Web stranice s AI",
      description: "Moderne web stranice s integriranim AI značajkama. SEO optimizirane i usmjerene na konverziju.",
      link: "/webseiten-ki"
    }
  ];

  const benefits = [
    { icon: Globe, title: "Udaljena usluga", description: "Online savjetovanje i razvoj projekata diljem Hrvatske" },
    { icon: Clock, title: "Brz odgovor", description: "Jamstvo povratne informacije unutar 24 sata" },
    { icon: Users, title: "Stručnost za hrvatsko tržište", description: "Razumijemo potrebe hrvatskih poduzeća" },
    { icon: Shield, title: "GDPR usklađenost", description: "U skladu sa standardima sigurnosti i privatnosti podataka" },
    { icon: TrendingUp, title: "Mjerljivi rezultati", description: "Transparentni KPI-evi i redovito izvještavanje" },
    { icon: Star, title: "Visoko zadovoljstvo klijenata", description: "4.9/5 zvjezdica ocjena klijenata" }
  ];

  const majorCities = [
    "Zagreb", "Split", "Rijeka", "Osijek"
  ];

  const croatianRegions = [
    "Grad Zagreb", "Splitsko-dalmatinska", "Primorsko-goranska", 
    "Osječko-baranjska", "Istarska", "Varaždinska", "Dubrovačko-neretvanska"
  ];

  const industries = [
    { name: "Turizam i Hotelijerstvo", description: "AI rješenja za hotele, agencije i turističke tvrtke" },
    { name: "E-trgovina", description: "Pametni chatbotovi i personalizirane preporuke proizvoda" },
    { name: "Zdravstvo", description: "Digitalni asistenti za medicinske ustanove" },
    { name: "Nekretnine", description: "Automatizacija upita i virtualni obilasci" },
    { name: "Financije", description: "Automatizacija procesa i analiza podataka" },
    { name: "Proizvodnja", description: "Optimizacija procesa i prediktivno održavanje" }
  ];

  return (
    <>
      <SEOHead 
        title="AI Agencija Zagreb | ExtruCon - Automatizacija & AI Agenti"
        description="ExtruCon - vaša AI agencija za Hrvatsku. Razvijamo AI agente, automatiziramo poslovne procese i stvaramo moderne web stranice. Besplatna konzultacija."
        canonical="https://extrucon.de/zagreb"
        schema={schemaData}
      />
      <Navbar />
      
      <main className="min-h-screen bg-background">
        <Breadcrumbs items={[
          { label: "Početna", href: "/" },
          { label: "Zagreb", href: "/zagreb" }
        ]} />

        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-background to-purple-900/20" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary">AI Agencija za Hrvatsku</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
                AI Agencija Zagreb
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Vaš partner za umjetnu inteligenciju i automatizaciju u Hrvatskoj. 
                Razvijamo AI agente, automatiziramo procese i stvaramo moderne web stranice s AI značajkama.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/kontakt">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold flex items-center gap-2 justify-center"
                    data-testid="button-contact-hero"
                  >
                    Besplatna konzultacija
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <Link href="/termin">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 border border-primary/50 text-foreground rounded-lg font-semibold hover:bg-primary/10 transition-colors"
                    data-testid="button-booking-hero"
                  >
                    Rezerviraj termin
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Naše usluge</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
                >
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link href={service.link}>
                    <span className="text-primary hover:underline flex items-center gap-1">
                      Saznaj više <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Zašto ExtruCon?</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Nudimo vrhunska AI rješenja prilagođena hrvatskom tržištu
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border/50"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Industrijska rješenja</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Prilagođena AI rješenja za različite industrije
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors"
                >
                  <Building2 className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">{industry.name}</h3>
                  <p className="text-sm text-muted-foreground">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Područje usluga</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Glavni gradovi
                </h3>
                <div className="flex flex-wrap gap-2">
                  {majorCities.map(city => (
                    <span key={city} className="px-3 py-1 bg-primary/10 rounded-full text-sm">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  Županije
                </h3>
                <div className="flex flex-wrap gap-2">
                  {croatianRegions.map(region => (
                    <span key={region} className="px-3 py-1 bg-secondary/50 rounded-full text-sm">
                      {region}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-primary/10 via-background to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Kontaktirajte nas</h2>
              <p className="text-muted-foreground mb-8">
                Spremni smo pomoći vašem poslovanju s AI rješenjima. Prva konzultacija je besplatna!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                <a href="tel:+4989444438879" className="flex items-center gap-2 text-lg hover:text-primary transition-colors">
                  <Phone className="w-5 h-5" />
                  +49 89 444 438 879
                </a>
                <a href="mailto:info@extrucon.de" className="flex items-center gap-2 text-lg hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                  info@extrucon.de
                </a>
              </div>
              <Link href="/kontakt">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold"
                  data-testid="button-contact-cta"
                >
                  Pošalji upit
                </motion.button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Česta pitanja</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqSchema.mainEntity.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-card border border-border"
                >
                  <h3 className="font-semibold mb-2 flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    {faq.name}
                  </h3>
                  <p className="text-muted-foreground pl-7">{faq.acceptedAnswer.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <ExploreMoreSection />
      </main>

      <Footer />
    </>
  );
}
