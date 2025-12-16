import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Award, ArrowRight, MapPin, ExternalLink, Star, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@assets/generated_images/portfolio_showcase_tech_visual.png";
import { useLanguage } from "@/lib/i18n";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function Referenzen() {
  const { t } = useLanguage();

  const projects = [
    {
      title: "089Dach GmbH – Dachdecker München",
      category: "Webentwicklung + KI",
      description: "Moderne Landingpage mit KI-Chatbot für Dachdecker-Meisterbetrieb. Mehrstufiges Anfrageformular und 24/7 Notdienst-Integration.",
      results: ["100+ zufriedene Kunden", "4.9 Google-Bewertung", "90 Min Reaktionszeit"],
      color: "orange",
      link: "https://089dach.de"
    },
    {
      title: "AquaPro24 – Sanitär & Wasserinstallation München",
      category: "Webentwicklung + KI",
      description: "Professionelle Landingpage mit KI-Chatbot für Sanitär-Partnernetzwerk. Festpreis-Kalkulator und 24/7 Notdienst-Integration.",
      results: ["2.500+ zufriedene Kunden", "4.9 Google-Bewertung", "Ab 60 Min vor Ort"],
      color: "blue",
      link: "https://aquapro24.de"
    },
    {
      title: "089 Sanierer – Komplettsanierung München",
      category: "Webentwicklung + KI",
      description: "Full-Service Sanierungsportal mit KI-Beratung. Mehrstufiges Anfrageformular, Handwerker-Vermittlung und Online-Terminbuchung.",
      results: ["268+ Projekte", "98% Weiterempfehlung", "20+ Jahre Erfahrung"],
      color: "green",
      link: "https://089-sanierer.de"
    },
    {
      title: "089 Bayern – Energiesysteme Türkei",
      category: "Webentwicklung",
      description: "Türkischsprachige Landingpage für 4-in-1 Energiesysteme. Wärmepumpen, Solar, Kühlung und Energiespeicher für den türkischen Markt.",
      results: ["4-in-1 System", "Deutsche Qualität", "Türkischer Markt"],
      color: "cyan",
      link: "https://www.089bayern.com"
    },
    {
      title: "ExtruCon Funnel – KI Agenten Landingpage",
      category: "Webentwicklung + Marketing",
      description: "Conversion-optimierte Landingpage für KI-Agentur. Mehrstufiger Sales-Funnel mit emotionalem Storytelling und Leadgenerierung.",
      results: ["3-Schritte Funnel", "Conversion-optimiert", "KI-Chatbot integriert"],
      color: "purple",
      link: "https://funnel.extrucon.de"
    },
    {
      title: "KSHW – Komplettsanierungen München",
      category: "Webentwicklung",
      description: "Umfangreiche Unternehmenswebsite für Generalunternehmer. Leistungsseiten, Kontaktformulare und professionelle Darstellung aller Sanierungsgewerke.",
      results: ["Full-Service Sanierung", "Alle Gewerke", "KFW-Förderberatung"],
      color: "pink",
      link: "https://komplettsanierungen-haus-wohnung.de"
    },
    {
      title: "FitLife München – Fitness-Studio Kette",
      category: "SEO & Geo-Optimierung",
      description: "Lokale Suchmaschinenoptimierung für Fitnessstudio-Kette mit 5 Standorten in München. Google My Business Optimierung und lokale Keyword-Strategie.",
      results: ["Platz 1 bei 'Fitnessstudio München'", "+200% organischer Traffic", "5 Standorte optimiert"],
      color: "orange"
    },
    {
      title: "Dr. Müller Praxis – Arztpraxis München",
      category: "KI-Agent",
      description: "KI-gestützte Terminvergabe und Patientenkommunikation für Allgemeinmediziner. 24/7 Terminbuchung ohne Warteschleife.",
      results: ["90% weniger Telefonanrufe", "Wartezeit -50%", "24/7 Erreichbarkeit"],
      color: "green"
    },
    {
      title: "AutoHaus Berger – Kfz-Werkstatt",
      category: "KI-Agent + Automatisierung",
      description: "Automatisierte Werkstatt-Terminvergabe mit KI-Chatbot. Integration in bestehendes Werkstattsystem und SMS-Erinnerungen.",
      results: ["75% weniger No-Shows", "Automatische Erinnerungen", "CRM-Integration"],
      color: "cyan"
    },
    {
      title: "Bella Italia Restaurant – Gastronomie",
      category: "Social Media + Marketing",
      description: "Social-Media-Strategie und Content-Erstellung für italienisches Restaurant. Instagram, Facebook und Google Ads Management.",
      results: ["+350% Instagram Follower", "40 Reservierungen/Woche", "5.0 Google-Bewertung"],
      color: "pink"
    },
    {
      title: "Malermeister Schmidt – Handwerk",
      category: "Webentwicklung + SEO",
      description: "Moderne Website mit Referenzgalerie und integriertem Angebotsrechner für Malermeister. Lokale SEO-Optimierung für Landkreis FFB.",
      results: ["12 neue Anfragen/Monat", "Angebotsrechner", "Mobile-optimiert"],
      color: "blue"
    },
    {
      title: "Rechtsanwalt Weber – Kanzlei",
      category: "KI-Agent",
      description: "KI-gestützter Erstkontakt und Terminbuchung für Rechtsanwaltskanzlei. Mandantenportal mit sicherer Dokumentenübertragung.",
      results: ["Erstberatung automatisiert", "Sichere Datenübertragung", "DSGVO-konform"],
      color: "purple"
    },
    {
      title: "Immobilien König – Makler",
      category: "Automatisierung + Marketing",
      description: "Automatisierte Objektverwaltung mit Lead-Qualifizierung. KI-Chatbot für Interessenten und automatische Exposé-Versendung.",
      results: ["60% schnellere Leadbearbeitung", "Auto-Exposé-Versand", "Lead-Scoring"],
      color: "orange"
    },
    {
      title: "Yoga Studio Harmonie – Wellness",
      category: "Webentwicklung + Automatisierung",
      description: "Online-Buchungssystem für Yoga-Kurse mit automatischer Teilnehmerverwaltung. Newsletter-Integration und Mitgliederbereich.",
      results: ["Online-Kursbuchung", "Mitgliederportal", "+80% Buchungsrate"],
      color: "green"
    },
    {
      title: "TechStart GmbH – IT-Dienstleister",
      category: "Content Creation + SEO",
      description: "Blog-Strategie und technische SEO für IT-Unternehmen. Regelmäßige Fachartikel und Whitepaper-Erstellung mit KI-Unterstützung.",
      results: ["20 Fachartikel/Jahr", "+150% Website-Traffic", "3 Whitepaper"],
      color: "cyan"
    },
    {
      title: "Blumen Paradies – Floristik",
      category: "Social Media + Webshop",
      description: "Instagram-Marketing mit täglichem Content und Online-Shop für Blumenlieferung. Automatisierte Bestellbestätigung und Liefertracking.",
      results: ["Online-Shop integriert", "1.500+ Instagram Follower", "Same-Day Delivery"],
      color: "pink"
    }
  ];

  const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
    cyan: { bg: "bg-cyan-500/20", text: "text-cyan-400", border: "border-cyan-500/30" },
    blue: { bg: "bg-blue-500/20", text: "text-blue-400", border: "border-blue-500/30" },
    purple: { bg: "bg-purple-500/20", text: "text-purple-400", border: "border-purple-500/30" },
    pink: { bg: "bg-pink-500/20", text: "text-pink-400", border: "border-pink-500/30" },
    orange: { bg: "bg-orange-500/20", text: "text-orange-400", border: "border-orange-500/30" },
    green: { bg: "bg-green-500/20", text: "text-green-400", border: "border-green-500/30" }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SEOHead
        title="Referenzen & Erfolgsgeschichten | ExtruCon KI-Agentur"
        description="Unsere erfolgreichen Projekte: KI-Agenten, Websites, Automatisierungen und mehr. Überzeugen Sie sich von unserer Arbeit. Agentur Fürstenfeldbruck."
        keywords="Referenzen, Portfolio, Erfolgsgeschichten, KI Projekte, Webdesign Projekte, Fürstenfeldbruck"
        canonical="https://extrucon.de/referenzen"
      />
      <Navbar />
      <main className="pt-24">
        <Breadcrumbs items={[
          { label: t.referenzenPage.breadcrumb }
        ]} />
        
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-4 pb-4">
          <div className="absolute inset-0 z-0">
            <img src={heroImg} alt="Referenzen & Erfolgsgeschichten" className="w-full h-full object-cover opacity-60" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
          </div>
          <div className="container mx-auto px-4 z-40 relative">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium backdrop-blur-sm">
                    <MapPin className="w-3.5 h-3.5" />
                    Fürstenfeldbruck & München
                  </span>
                </div>
                
                <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6 mt-6 backdrop-blur-sm">
                  <Award className="w-4 h-4" />
                  {t.referenzenPage.badge}
                </span>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-6 leading-tight">
                  {t.referenzenPage.title.split(" ").slice(0, 1).join(" ")}{" "}
                  <span className="text-gradient">{t.referenzenPage.title.split(" ").slice(1).join(" ")}</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed font-medium">
                  {t.referenzenPage.subtitle}
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mb-8">
                  <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-primary" /> {t.referenzenPage.stat1}</span>
                  <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-primary" /> {t.referenzenPage.stat2}</span>
                  <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-primary" /> {t.referenzenPage.stat3}</span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-30">
                  <a href="/kontakt" className="inline-flex items-center justify-center h-12 px-8 bg-primary text-background hover:bg-primary/90 font-bold text-lg rounded-md transition-colors cursor-pointer" data-testid="button-contact-referenzen">
                    {t.referenzenPage.ctaButton} <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                  <a href="#projekte" className="inline-flex items-center justify-center h-12 px-8 border border-white/20 text-white hover:bg-white/10 font-medium text-lg rounded-md transition-colors group cursor-pointer" data-testid="button-projekte">
                    {t.referenzenPage.ctaSecondary} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-20" />
        </section>

        <section id="projekte" className="py-10 bg-card/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-display text-white mb-8 text-center">{t.referenzenPage.projectsTitle}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, i) => {
                const colors = colorClasses[project.color];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 rounded-xl bg-card/30 border border-white/5 hover:border-white/10 transition-colors"
                    data-testid={`card-project-${i}`}
                  >
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text} ${colors.border} border mb-4`}>
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="space-y-2 mb-4">
                      {project.results.map((result, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm">
                          <Zap className={`w-4 h-4 ${colors.text}`} />
                          <span className="text-gray-300">{result}</span>
                        </div>
                      ))}
                    </div>
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 text-sm font-medium ${colors.text} hover:underline`}
                      >
                        Website ansehen <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold font-display text-white mb-6">{t.referenzenPage.testimonialsTitle}</h2>
              <div className="space-y-6">
                {t.referenzenPage.testimonials.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 rounded-xl bg-card/30 border border-white/5 text-left"
                  >
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-gray-300 italic mb-4">"{item.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-bold">{item.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">{item.name}</p>
                        <p className="text-gray-400 text-sm">{item.company}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-gradient-to-r from-primary/20 to-orange-900/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-display text-white mb-4">{t.referenzenPage.ctaTitle}</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              {t.referenzenPage.ctaSubtitle}
            </p>
            <a href="/kontakt" className="inline-flex items-center justify-center h-12 px-8 bg-primary text-background hover:bg-primary/90 font-bold text-lg rounded-md transition-colors cursor-pointer" data-testid="button-cta-referenzen">
              {t.referenzenPage.ctaButtonAlt} <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
