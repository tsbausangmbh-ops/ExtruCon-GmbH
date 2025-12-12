import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Users, Target, Lightbulb, Rocket, Heart, Award, MapPin, Mail, Phone, Clock, CheckCircle, ArrowRight, Zap, Shield, TrendingUp, Sparkles } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Wir nutzen die neuesten KI-Technologien, um Ihrem Business einen echten Vorsprung zu verschaffen."
  },
  {
    icon: Heart,
    title: "Partnerschaft",
    description: "Wir verstehen uns als langfristiger Partner – nicht als Dienstleister, der nach dem Projekt verschwindet."
  },
  {
    icon: Shield,
    title: "Qualität",
    description: "Jedes Projekt wird sorgfältig geplant und umgesetzt. Wir liefern erst, wenn wir selbst überzeugt sind."
  },
  {
    icon: Zap,
    title: "Effizienz",
    description: "Zeit ist wertvoll. Wir arbeiten schnell und fokussiert, ohne Kompromisse bei der Qualität."
  }
];

const timeline = [
  {
    year: "Vision",
    title: "Die Idee",
    description: "Unternehmen dabei helfen, das volle Potenzial von KI und Automatisierung zu nutzen – ohne technische Hürden."
  },
  {
    year: "Mission",
    title: "Der Ansatz",
    description: "Maßgeschneiderte Lösungen statt Standardprodukte. Jedes Business ist einzigartig und verdient individuelle Betreuung."
  },
  {
    year: "Methode",
    title: "Die Umsetzung",
    description: "Enge Zusammenarbeit, klare Kommunikation und iterative Entwicklung für optimale Ergebnisse."
  },
  {
    year: "Ziel",
    title: "Das Ergebnis",
    description: "Nachhaltige Lösungen, die Ihr Unternehmen effizienter machen und langfristig Mehrwert schaffen."
  }
];

const services = [
  { name: "KI-Agenten", description: "Intelligente Assistenten für Kundenservice, Analyse und Automatisierung" },
  { name: "Automatisierungen", description: "Workflows, die Ihre wiederkehrenden Aufgaben übernehmen" },
  { name: "Webentwicklung", description: "Moderne Websites mit integrierten KI-Features" },
  { name: "Social Media", description: "Strategische Betreuung Ihrer Social-Media-Kanäle" },
  { name: "Content Creation", description: "KI-gestützte Erstellung von Texten und Grafiken" },
  { name: "Marketing", description: "Datengetriebenes Online-Marketing für mehr Reichweite" }
];

const stats = [
  { value: "100+", label: "Projekte" },
  { value: "50+", label: "Kunden" },
  { value: "500+", label: "Automatisierungen" },
  { value: "24/7", label: "Support" }
];

export default function UeberUns() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SEOHead 
        title="Über uns | ExtruCon GmbH Fürstenfeldbruck – KI-Agentur & Automatisierung"
        description="ExtruCon GmbH: Ihre KI-Agentur aus Fürstenfeldbruck bei München. Wir entwickeln KI-Agenten, automatisieren Prozesse und erstellen intelligente Websites – deutschlandweit."
        keywords="ExtruCon GmbH, KI-Agentur Fürstenfeldbruck, Automatisierung München, Marketing Agentur Bayern, HRB 18623"
      />
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Users className="w-4 h-4" />
                Über ExtruCon
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-6">
                Ihr Partner für digitale Transformation
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Wir sind ExtruCon GmbH – eine Agentur aus Fürstenfeldbruck, die Unternehmen 
                deutschlandweit bei KI, Automatisierung und digitalem Marketing unterstützt.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Wer wir sind */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold font-display text-white mb-6">
                  Wer wir sind
                </h2>
                <p className="text-gray-400 mb-4">
                  ExtruCon GmbH ist eine spezialisierte Agentur für KI-Lösungen, Automatisierung 
                  und digitales Marketing. Von unserem Standort in Fürstenfeldbruck aus betreuen 
                  wir Unternehmen in ganz Deutschland.
                </p>
                <p className="text-gray-400 mb-4">
                  Unser Fokus liegt auf praktischen Lösungen, die echten Mehrwert schaffen. 
                  Keine theoretischen Konzepte, sondern funktionierende Systeme, die Ihren 
                  Arbeitsalltag erleichtern.
                </p>
                <p className="text-gray-400 mb-6">
                  Wir kombinieren technisches Know-how mit Marketing-Expertise – und bringen 
                  so beide Welten zusammen, um ganzheitliche Lösungen zu entwickeln.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">KI & Automatisierung</span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">Webentwicklung</span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">Marketing</span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/10"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Standort</div>
                      <div className="text-gray-400 text-sm">Hasenheide 8, 82256 Fürstenfeldbruck</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-white font-medium">E-Mail</div>
                      <div className="text-gray-400 text-sm">info@extrucon.de</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Telefon</div>
                      <div className="text-gray-400 text-sm">089 444438879</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Erreichbarkeit</div>
                      <div className="text-gray-400 text-sm">Mo–Fr 08:00–17:00 Uhr</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision Timeline */}
        <section className="py-16 bg-card/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold font-display text-white mb-4">
                Von der Vision zur Umsetzung
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Unser Ansatz ist klar strukturiert und auf nachhaltige Ergebnisse ausgerichtet.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  {i < 3 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-primary/20" />
                  )}
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mx-auto mb-4 relative z-10">
                      <span className="text-primary font-bold text-sm">{item.year}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Unsere Werte */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold font-display text-white mb-4">
                Unsere Werte
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Was uns antreibt und wie wir arbeiten.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Unsere Leistungen */}
        <section className="py-16 bg-card/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold font-display text-white mb-4">
                Was wir anbieten
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Unsere Kernkompetenzen für Ihren digitalen Erfolg.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {services.map((service, i) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-white">{service.name}</h3>
                    <p className="text-gray-400 text-sm">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Warum ExtruCon */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold font-display text-white mb-4">
                  Warum ExtruCon?
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Persönliche Betreuung",
                    description: "Kein anonymer Support – Sie haben einen festen Ansprechpartner, der Ihr Projekt kennt."
                  },
                  {
                    title: "Technische Expertise",
                    description: "Wir verstehen KI, Automatisierung und moderne Webtechnologien – nicht nur oberflächlich."
                  },
                  {
                    title: "Praxisorientiert",
                    description: "Keine theoretischen Konzepte, sondern Lösungen, die in der Praxis funktionieren."
                  },
                  {
                    title: "Transparente Preise",
                    description: "Sie wissen von Anfang an, was Ihr Projekt kostet. Keine versteckten Gebühren."
                  },
                  {
                    title: "Deutschlandweit",
                    description: "Remote-Zusammenarbeit mit Kunden in ganz Deutschland – persönliche Meetings auf Wunsch."
                  },
                  {
                    title: "Langfristige Partnerschaft",
                    description: "Wir betreuen unsere Kunden auch nach dem Launch mit Wartung und Weiterentwicklung."
                  }
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Rechtliche Infos */}
        <section className="py-12 bg-card/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-xl font-bold text-white mb-6">Rechtliche Informationen</h2>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <p className="text-gray-400 text-sm">
                      <strong className="text-white">ExtruCon GmbH</strong><br />
                      Hasenheide 8<br />
                      82256 Fürstenfeldbruck
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">
                      <strong className="text-white">Handelsregister</strong><br />
                      HRB 18623<br />
                      Amtsgericht München
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10 border-y border-white/10">
          <div className="container mx-auto px-4 text-center">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Lernen Sie uns kennen
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Erzählen Sie uns von Ihrem Projekt – in einem kostenlosen Erstgespräch 
              finden wir gemeinsam die beste Lösung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/kontakt" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-background font-bold rounded-lg hover:bg-primary/90 transition-colors text-lg"
                data-testid="button-about-contact"
              >
                Kontakt aufnehmen <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="tel:089444438879" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors border border-white/10"
              >
                <Phone className="w-5 h-5" />
                089 444438879
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
