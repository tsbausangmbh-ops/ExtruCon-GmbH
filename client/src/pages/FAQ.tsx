import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { HelpCircle, ChevronDown, Bot, Share2, Globe, TrendingUp, CreditCard, Users, Search } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const faqCategories = [
  {
    id: "allgemein",
    name: "Allgemein",
    icon: HelpCircle,
    color: "text-primary",
    questions: [
      {
        q: "Wer ist ExtruCon?",
        a: "ExtruCon GmbH ist eine Full-Service Marketing- und KI-Agentur mit Sitz in Fürstenfeldbruck bei München. Wir betreuen Kunden deutschlandweit in den Bereichen digitales Marketing, KI-Automatisierung, Webentwicklung und Content Creation."
      },
      {
        q: "Arbeitet ihr deutschlandweit?",
        a: "Ja! Unser Hauptsitz ist in Fürstenfeldbruck, aber wir betreuen Kunden in ganz Deutschland – sowohl remote als auch vor Ort, je nach Bedarf."
      },
      {
        q: "Für welche Branchen arbeitet ihr?",
        a: "Wir arbeiten branchenübergreifend mit KMUs, Startups, Handwerksbetrieben, Dienstleistern, E-Commerce-Unternehmen und mehr. Unsere Strategien passen wir individuell an Ihre Branche an."
      },
      {
        q: "Bietet ihr kostenlose Erstgespräche an?",
        a: "Ja! Das erste Beratungsgespräch ist immer kostenlos und unverbindlich. Wir analysieren Ihre aktuelle Situation und zeigen Ihnen Potenziale auf."
      },
      {
        q: "Wie schnell antwortet ihr auf Anfragen?",
        a: "Wir antworten in der Regel innerhalb von 24 Stunden an Werktagen auf alle Anfragen."
      }
    ]
  },
  {
    id: "ki",
    name: "KI & Automatisierung",
    icon: Bot,
    color: "text-cyan-400",
    questions: [
      {
        q: "Was kostet ein KI-Chatbot?",
        a: "Ein einfacher Chatbot startet ab 1.500€ einmalig. Komplexere KI-Lösungen mit individueller Anpassung beginnen bei 3.000€. Wir beraten Sie kostenlos zu den Möglichkeiten."
      },
      {
        q: "Brauche ich technisches Wissen für KI-Tools?",
        a: "Nein! Wir übernehmen die komplette technische Umsetzung und schulen Ihr Team. Sie erhalten eine benutzerfreundliche Lösung, die einfach zu bedienen ist."
      },
      {
        q: "Wie schnell ist ein KI-Projekt umgesetzt?",
        a: "Einfache Chatbots sind in 1-2 Wochen einsatzbereit. Komplexere Automatisierungen benötigen 4-8 Wochen je nach Umfang."
      },
      {
        q: "Ist KI auch für kleine Unternehmen sinnvoll?",
        a: "Absolut! Gerade kleine Unternehmen profitieren von Automatisierung, da sie Zeit für das Kerngeschäft freisetzt. Wir haben Lösungen für jedes Budget."
      },
      {
        q: "Welche KI-Technologien setzt ihr ein?",
        a: "Wir arbeiten mit OpenAI/GPT-4, Claude AI, Google Gemini sowie Automatisierungstools wie n8n, Make und Zapier. Die Technologie wählen wir passend zu Ihren Anforderungen."
      }
    ]
  },
  {
    id: "social",
    name: "Social Media",
    icon: Share2,
    color: "text-purple-400",
    questions: [
      {
        q: "Was kostet Social Media Marketing?",
        a: "Unsere Pakete starten ab 790€/Monat für die Betreuung eines Kanals. Komplette Multi-Channel-Strategien mit Content-Produktion beginnen bei 1.490€/Monat."
      },
      {
        q: "Wie oft sollte man auf Social Media posten?",
        a: "Das hängt von der Plattform ab. Für Instagram empfehlen wir 3-5 Posts pro Woche plus tägliche Stories. Bei LinkedIn reichen 2-3 qualitative Posts pro Woche."
      },
      {
        q: "Welche Plattform ist für mein Unternehmen am besten?",
        a: "Das analysieren wir in einem kostenlosen Erstgespräch. B2B-Unternehmen profitieren oft von LinkedIn, lokale Dienstleister von Instagram und Google Business."
      },
      {
        q: "Erstellt ihr auch den Content für uns?",
        a: "Ja! Wir übernehmen die komplette Content-Produktion: Texte, Grafiken, Fotos und Videos. Auf Wunsch auch mit Vor-Ort-Shootings."
      },
      {
        q: "Wie messt ihr den Erfolg von Social Media?",
        a: "Wir tracken KPIs wie Reichweite, Engagement, Follower-Wachstum, Website-Traffic und Conversions. Sie erhalten monatliche Reports mit allen wichtigen Zahlen."
      }
    ]
  },
  {
    id: "web",
    name: "Webentwicklung",
    icon: Globe,
    color: "text-blue-400",
    questions: [
      {
        q: "Was kostet eine professionelle Website?",
        a: "Eine moderne Business-Website startet ab 2.500€. Umfangreichere Projekte mit E-Commerce oder individuellen Funktionen beginnen bei 5.000€. Wir erstellen Ihnen gerne ein individuelles Angebot."
      },
      {
        q: "Wie lange dauert die Erstellung einer Website?",
        a: "Eine Standard-Website ist in 2-4 Wochen fertig. Komplexere Projekte mit individuellen Funktionen können 6-12 Wochen dauern."
      },
      {
        q: "Ist die Website für Suchmaschinen optimiert?",
        a: "Ja! Jede Website wird von uns SEO-optimiert erstellt: schnelle Ladezeiten, mobile Optimierung, strukturierte Daten und technisches SEO sind Standard."
      },
      {
        q: "Bietet ihr auch Hosting und Wartung an?",
        a: "Ja, wir bieten Hosting- und Wartungspakete ab 49€/Monat an, inkl. Updates, Backups, SSL-Zertifikat und technischem Support."
      },
      {
        q: "Kann ich die Website selbst bearbeiten?",
        a: "Ja! Wir richten ein benutzerfreundliches Content-Management-System ein und schulen Sie in der Bedienung."
      }
    ]
  },
  {
    id: "marketing",
    name: "SEO & Performance Marketing",
    icon: TrendingUp,
    color: "text-orange-400",
    questions: [
      {
        q: "Wie schnell sehe ich Ergebnisse mit SEO?",
        a: "Erste Verbesserungen zeigen sich oft nach 4-8 Wochen. Für nachhaltige Top-Rankings planen wir 3-6 Monate ein. SEO ist eine langfristige Investition."
      },
      {
        q: "Was kostet SEO-Optimierung?",
        a: "Unsere SEO-Pakete starten ab 990€/Monat. Der genaue Preis hängt vom Umfang und der Wettbewerbssituation in Ihrer Branche ab."
      },
      {
        q: "Macht ihr auch Google Ads?",
        a: "Ja! Wir erstellen und betreuen Google Ads Kampagnen mit kontinuierlicher Optimierung. Managementgebühren starten ab 15% des Werbebudgets (mind. 300€/Monat)."
      },
      {
        q: "Wie unterscheidet sich SEO von bezahlter Werbung?",
        a: "SEO bringt langfristig kostenlose Besucher, braucht aber Zeit. Bezahlte Werbung (Google/Meta Ads) bringt sofort Traffic, kostet aber kontinuierlich. Ideal ist eine Kombination."
      },
      {
        q: "Bekomme ich regelmäßige Reports?",
        a: "Ja! Sie erhalten monatliche Reports mit allen wichtigen KPIs: Rankings, Traffic, Conversions, ROI. Auf Wunsch auch wöchentliche Updates."
      }
    ]
  },
  {
    id: "kosten",
    name: "Preise & Zusammenarbeit",
    icon: CreditCard,
    color: "text-emerald-400",
    questions: [
      {
        q: "Wie sind eure Zahlungsbedingungen?",
        a: "Bei Projekten: 50% Anzahlung, 50% bei Fertigstellung. Bei laufenden Leistungen: Monatliche Abrechnung per Rechnung mit 14 Tagen Zahlungsziel."
      },
      {
        q: "Gibt es Mindestvertragslaufzeiten?",
        a: "Für laufende Betreuungen (SEO, Social Media) empfehlen wir mindestens 6 Monate, da Ergebnisse Zeit brauchen. Einzelprojekte haben keine Laufzeit."
      },
      {
        q: "Bietet ihr auch Einzelleistungen an?",
        a: "Ja! Ob nur Social Media, nur Webdesign oder nur SEO – wir schneiden unsere Leistungen auf Ihre Bedürfnisse zu. Oft entfalten kombinierte Strategien aber die größte Wirkung."
      },
      {
        q: "Arbeitet ihr auch mit kleinen Budgets?",
        a: "Ja! Wir haben Einstiegspakete für kleinere Budgets und beraten Sie ehrlich, welche Maßnahmen mit Ihrem Budget am sinnvollsten sind."
      },
      {
        q: "Wie läuft die Zusammenarbeit ab?",
        a: "Nach dem Erstgespräch erstellen wir ein Angebot. Bei Zusage starten wir mit einem Kick-off, in dem wir Ziele und Zeitplan festlegen. Sie haben einen festen Ansprechpartner und regelmäßige Updates."
      }
    ]
  }
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("allgemein");
  const [openQuestions, setOpenQuestions] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleQuestion = (id: string) => {
    setOpenQuestions(prev => 
      prev.includes(id) ? prev.filter(q => q !== id) : [...prev, id]
    );
  };

  const allQuestions = faqCategories.flatMap(cat => 
    cat.questions.map((q, i) => ({ ...q, category: cat.id, id: `${cat.id}-${i}` }))
  );

  const filteredQuestions = searchQuery 
    ? allQuestions.filter(q => 
        q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.a.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

  const currentCategory = faqCategories.find(c => c.id === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                <HelpCircle className="w-4 h-4" />
                Hilfe & Support
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
                Häufige Fragen (FAQ)
              </h1>
              <p className="text-lg text-gray-400 mb-8">
                Finden Sie Antworten auf die häufigsten Fragen zu unseren Leistungen, 
                Preisen und der Zusammenarbeit mit ExtruCon.
              </p>
              
              {/* Search */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <Input
                  placeholder="Frage suchen..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/5 border-white/10 text-white"
                  data-testid="input-search-faq"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search Results */}
        {filteredQuestions && (
          <section className="py-8">
            <div className="container mx-auto px-4">
              <h2 className="text-xl font-bold text-white mb-4">
                Suchergebnisse ({filteredQuestions.length})
              </h2>
              {filteredQuestions.length === 0 ? (
                <p className="text-gray-400">Keine Fragen gefunden. Versuchen Sie einen anderen Suchbegriff.</p>
              ) : (
                <div className="max-w-3xl space-y-3">
                  {filteredQuestions.map((faq) => (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="rounded-xl bg-card/30 border border-white/5 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleQuestion(faq.id)}
                        className="w-full p-4 text-left flex items-center justify-between gap-4"
                        data-testid={`faq-${faq.id}`}
                      >
                        <span className="font-medium text-white">{faq.q}</span>
                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${openQuestions.includes(faq.id) ? 'rotate-180' : ''}`} />
                      </button>
                      {openQuestions.includes(faq.id) && (
                        <div className="px-4 pb-4 text-gray-400">
                          {faq.a}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Category Navigation + Questions */}
        {!filteredQuestions && (
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-4 gap-8">
                {/* Category Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-24 space-y-2">
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Kategorien</h3>
                    {faqCategories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                          activeCategory === cat.id
                            ? "bg-primary/10 text-primary border border-primary/20"
                            : "text-gray-400 hover:bg-white/5"
                        }`}
                        data-testid={`category-${cat.id}`}
                      >
                        <cat.icon className={`w-5 h-5 ${cat.color}`} />
                        <span className="font-medium">{cat.name}</span>
                        <span className="ml-auto text-xs text-gray-500">{cat.questions.length}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Questions */}
                <div className="lg:col-span-3">
                  {currentCategory && (
                    <motion.div
                      key={currentCategory.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <currentCategory.icon className={`w-8 h-8 ${currentCategory.color}`} />
                        <h2 className="text-2xl font-bold text-white">{currentCategory.name}</h2>
                      </div>
                      
                      <div className="space-y-3">
                        {currentCategory.questions.map((faq, i) => {
                          const id = `${currentCategory.id}-${i}`;
                          return (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.05 }}
                              className="rounded-xl bg-card/30 border border-white/5 overflow-hidden"
                            >
                              <button
                                onClick={() => toggleQuestion(id)}
                                className="w-full p-5 text-left flex items-center justify-between gap-4"
                                data-testid={`faq-${id}`}
                              >
                                <span className="font-medium text-white">{faq.q}</span>
                                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${openQuestions.includes(id) ? 'rotate-180' : ''}`} />
                              </button>
                              {openQuestions.includes(id) && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  className="px-5 pb-5 text-gray-400 leading-relaxed"
                                >
                                  {faq.a}
                                </motion.div>
                              )}
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Contact CTA */}
        <section className="py-10 bg-card/20">
          <div className="container mx-auto px-4 text-center">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">Frage nicht dabei?</h2>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Kontaktieren Sie uns direkt – wir beantworten Ihre Fragen gerne persönlich und unverbindlich.
            </p>
            <a 
              href="/kontakt" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background font-bold rounded-lg hover:bg-primary/90 transition-colors"
              data-testid="button-contact-faq"
            >
              Jetzt Kontakt aufnehmen
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
