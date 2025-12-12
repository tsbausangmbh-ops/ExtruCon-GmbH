import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { BookOpen, Clock, ArrowRight, Search, Bot, Share2, Globe, TrendingUp, Sparkles, Mail, Lightbulb } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const categories = [
  { name: "Alle", value: "all", icon: Sparkles, color: "text-primary" },
  { name: "KI & Automatisierung", value: "ki", icon: Bot, color: "text-cyan-400" },
  { name: "Social Media", value: "social", icon: Share2, color: "text-purple-400" },
  { name: "SEO & Marketing", value: "marketing", icon: TrendingUp, color: "text-orange-400" },
  { name: "Webentwicklung", value: "web", icon: Globe, color: "text-blue-400" },
];

const articles = [
  {
    id: 1,
    title: "KI-Chatbots für Unternehmen: Der komplette Leitfaden 2025",
    excerpt: "Erfahren Sie, wie KI-Chatbots Ihren Kundenservice revolutionieren und gleichzeitig Kosten senken können.",
    category: "ki",
    readTime: "8 Min.",
    date: "10. Dez 2025",
    featured: true
  },
  {
    id: 2,
    title: "Instagram Reels: 10 Tipps für mehr Reichweite",
    excerpt: "So nutzen Sie das volle Potenzial von Instagram Reels für Ihr Unternehmen und erreichen tausende neue Kunden.",
    category: "social",
    readTime: "5 Min.",
    date: "8. Dez 2025",
    featured: true
  },
  {
    id: 3,
    title: "Local SEO: So dominieren Sie die Google-Suche",
    excerpt: "Lokale Suchmaschinenoptimierung ist der Schlüssel für regionale Unternehmen. Die wichtigsten Strategien.",
    category: "marketing",
    readTime: "7 Min.",
    date: "5. Dez 2025",
    featured: true
  },
  {
    id: 4,
    title: "Website-Geschwindigkeit optimieren: Performance-Tipps",
    excerpt: "Eine schnelle Website ist entscheidend für SEO und Nutzererfahrung. So verbessern Sie Ihre Ladezeiten.",
    category: "web",
    readTime: "6 Min.",
    date: "3. Dez 2025",
    featured: false
  },
  {
    id: 5,
    title: "ChatGPT für Marketing: Praktische Anwendungsfälle",
    excerpt: "Von Content-Erstellung bis Kundenanalyse: So setzen Sie ChatGPT effektiv in Ihrem Marketing ein.",
    category: "ki",
    readTime: "10 Min.",
    date: "1. Dez 2025",
    featured: false
  },
  {
    id: 6,
    title: "LinkedIn für B2B: Die beste Strategie für 2025",
    excerpt: "LinkedIn ist das wichtigste Netzwerk für B2B-Unternehmen. So bauen Sie eine starke Präsenz auf.",
    category: "social",
    readTime: "8 Min.",
    date: "28. Nov 2025",
    featured: false
  },
  {
    id: 7,
    title: "Google Ads vs. Meta Ads: Was lohnt sich mehr?",
    excerpt: "Wir vergleichen die beiden Werbeplattformen und zeigen, welche für Ihr Business besser geeignet ist.",
    category: "marketing",
    readTime: "9 Min.",
    date: "25. Nov 2025",
    featured: false
  },
  {
    id: 8,
    title: "n8n Workflow-Automatisierung: Der komplette Guide",
    excerpt: "Mit n8n automatisieren Sie Geschäftsprozesse ohne Programmierkenntnisse. So starten Sie durch.",
    category: "ki",
    readTime: "12 Min.",
    date: "22. Nov 2025",
    featured: false
  },
  {
    id: 9,
    title: "Responsive Webdesign: Mobile First im Jahr 2025",
    excerpt: "Warum Mobile-First-Design heute Standard ist und wie Sie Ihre Website für alle Geräte optimieren.",
    category: "web",
    readTime: "6 Min.",
    date: "19. Nov 2025",
    featured: false
  },
  {
    id: 10,
    title: "TikTok für Unternehmen: Lohnt sich der Einstieg?",
    excerpt: "Die Plattform boomt – aber ist TikTok auch für B2B relevant? Wir zeigen Chancen und Strategien.",
    category: "social",
    readTime: "7 Min.",
    date: "16. Nov 2025",
    featured: false
  },
  {
    id: 11,
    title: "E-Mail-Marketing: 12 Tipps für höhere Öffnungsraten",
    excerpt: "So optimieren Sie Ihre Newsletter und E-Mail-Kampagnen für bessere Ergebnisse.",
    category: "marketing",
    readTime: "8 Min.",
    date: "13. Nov 2025",
    featured: false
  },
  {
    id: 12,
    title: "Voice Search SEO: Optimierung für Sprachsuche",
    excerpt: "Immer mehr Menschen suchen per Sprache. So passen Sie Ihre SEO-Strategie an.",
    category: "marketing",
    readTime: "6 Min.",
    date: "10. Nov 2025",
    featured: false
  },
  {
    id: 13,
    title: "n8n für E-Commerce: Automatisierte Bestellprozesse",
    excerpt: "So automatisieren Sie Bestellbestätigungen, Lagerbestand und Versand mit n8n.",
    category: "ki",
    readTime: "9 Min.",
    date: "7. Nov 2025",
    featured: false
  },
  {
    id: 14,
    title: "Conversion-Rate optimieren: A/B-Testing richtig nutzen",
    excerpt: "Wie Sie mit systematischen Tests Ihre Website-Performance verbessern.",
    category: "web",
    readTime: "10 Min.",
    date: "4. Nov 2025",
    featured: false
  },
  {
    id: 15,
    title: "Content-Planung: Der perfekte Redaktionskalender",
    excerpt: "So erstellen Sie einen effizienten Content-Plan für Social Media und Blog.",
    category: "social",
    readTime: "5 Min.",
    date: "1. Nov 2025",
    featured: false
  },
  {
    id: 16,
    title: "Schema Markup: Strukturierte Daten für bessere Rankings",
    excerpt: "Mit Schema.org zu Rich Snippets: So steigern Sie Ihre Sichtbarkeit in Google.",
    category: "marketing",
    readTime: "8 Min.",
    date: "28. Okt 2025",
    featured: false
  },
  {
    id: 17,
    title: "n8n vs. Make vs. Zapier: Welches Tool passt zu Ihnen?",
    excerpt: "Wir vergleichen die drei beliebtesten Automatisierungstools und zeigen Vor- und Nachteile.",
    category: "ki",
    readTime: "11 Min.",
    date: "25. Okt 2025",
    featured: false
  },
  {
    id: 18,
    title: "Barrierefreie Websites: WCAG-Richtlinien verstehen",
    excerpt: "Warum Accessibility wichtig ist und wie Sie Ihre Website barrierefrei gestalten.",
    category: "web",
    readTime: "7 Min.",
    date: "22. Okt 2025",
    featured: false
  },
  {
    id: 19,
    title: "KI im Kundenservice: Automatisierung ohne Qualitätsverlust",
    excerpt: "So setzen Sie KI-Tools ein, ohne die persönliche Note zu verlieren.",
    category: "ki",
    readTime: "8 Min.",
    date: "19. Okt 2025",
    featured: false
  },
  {
    id: 20,
    title: "OpenAI API für Unternehmen: Erste Schritte",
    excerpt: "Ein praktischer Einstieg in die Integration von GPT-4 in Ihre Geschäftsprozesse.",
    category: "ki",
    readTime: "14 Min.",
    date: "16. Okt 2025",
    featured: false
  },
  {
    id: 21,
    title: "Automatisierte Lead-Generierung mit KI",
    excerpt: "Wie Sie mit intelligenten Systemen qualifizierte Leads gewinnen und nurturing automatisieren.",
    category: "ki",
    readTime: "10 Min.",
    date: "13. Okt 2025",
    featured: false
  },
  {
    id: 22,
    title: "n8n Webhooks: Echtzeit-Automatisierung einrichten",
    excerpt: "So verbinden Sie externe Dienste mit n8n für sofortige Reaktionen auf Events.",
    category: "ki",
    readTime: "9 Min.",
    date: "10. Okt 2025",
    featured: false
  },
  {
    id: 23,
    title: "Claude AI vs. ChatGPT: Der große Vergleich",
    excerpt: "Welches KI-Modell eignet sich besser für Ihre Anwendungsfälle? Stärken und Schwächen.",
    category: "ki",
    readTime: "11 Min.",
    date: "7. Okt 2025",
    featured: false
  },
  {
    id: 24,
    title: "KI-gestützte Datenanalyse für Marketing-Entscheidungen",
    excerpt: "So nutzen Sie Machine Learning für bessere Kampagnen und höheren ROI.",
    category: "ki",
    readTime: "12 Min.",
    date: "4. Okt 2025",
    featured: false
  },
  {
    id: 25,
    title: "Automatisierte Reports mit n8n und Google Sheets",
    excerpt: "Erstellen Sie automatische Berichte, die sich selbst aktualisieren.",
    category: "ki",
    readTime: "8 Min.",
    date: "1. Okt 2025",
    featured: false
  }
];

export default function Ratgeber() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = articles.filter(a => a.featured);

  const getCategoryInfo = (value: string) => categories.find(c => c.value === value);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-10 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                <BookOpen className="w-4 h-4" />
                Wissen & Insights
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
                Marketing Ratgeber
              </h1>
              <p className="text-lg text-gray-400 mb-6">
                Praktische Tipps, Anleitungen und Strategien für digitales Marketing, 
                KI-Automatisierung und erfolgreiche Online-Präsenz.
              </p>
              
              {/* Search */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <Input
                  placeholder="Artikel durchsuchen..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/5 border-white/10 text-white"
                  data-testid="input-search-ratgeber"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-4 border-b border-white/10 sticky top-16 bg-background/95 backdrop-blur-md z-30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.value}
                    onClick={() => setSelectedCategory(cat.value)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === cat.value
                        ? "bg-primary text-background"
                        : "bg-white/5 text-gray-300 hover:bg-white/10"
                    }`}
                    data-testid={`filter-${cat.value}`}
                  >
                    <Icon className="w-4 h-4" />
                    {cat.name}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Articles - 3 columns */}
        {searchQuery === "" && selectedCategory === "all" && (
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="flex items-center gap-2 mb-6">
                <Lightbulb className="w-5 h-5 text-yellow-400" />
                <h2 className="text-xl font-bold text-white">Empfohlene Artikel</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {featuredArticles.map((article, i) => {
                  const catInfo = getCategoryInfo(article.category);
                  const Icon = catInfo?.icon || BookOpen;
                  return (
                    <motion.a
                      key={article.id}
                      href={`/ratgeber/${article.id}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="group p-5 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/10 hover:border-primary/30 transition-all"
                      data-testid={`card-featured-${article.id}`}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <Icon className={`w-4 h-4 ${catInfo?.color}`} />
                        <span className={`text-xs font-medium ${catInfo?.color}`}>
                          {catInfo?.name}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3 line-clamp-2">{article.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {article.readTime}
                        </span>
                        <span className="flex items-center gap-1 text-primary group-hover:gap-2 transition-all">
                          Lesen <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* All Articles - 3x3 Grid */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold text-white mb-6">
              {selectedCategory === "all" ? "Alle Artikel" : getCategoryInfo(selectedCategory)?.name}
              <span className="text-gray-500 font-normal ml-2 text-base">({filteredArticles.length})</span>
            </h2>
            
            {filteredArticles.length === 0 ? (
              <div className="text-center py-12">
                <Search className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400">Keine Artikel gefunden.</p>
                <button 
                  onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
                  className="text-primary hover:underline mt-2"
                >
                  Filter zurücksetzen
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredArticles.map((article, i) => {
                  const catInfo = getCategoryInfo(article.category);
                  const Icon = catInfo?.icon || BookOpen;
                  return (
                    <motion.a
                      key={article.id}
                      href={`/ratgeber/${article.id}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.03 }}
                      className="group p-4 rounded-xl bg-card/30 border border-white/5 hover:border-primary/30 hover:bg-card/50 transition-all"
                      data-testid={`card-article-${article.id}`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className={`p-1.5 rounded-lg bg-white/5 ${catInfo?.color}`}>
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs text-gray-500">{article.date}</span>
                        </div>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {article.readTime}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-2">{article.excerpt}</p>
                    </motion.a>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-10 bg-gradient-to-r from-primary/10 to-secondary/10 border-y border-white/10">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-3">Newsletter abonnieren</h2>
              <p className="text-gray-400 mb-6">
                Erhalten Sie die neuesten Marketing-Tipps und KI-Insights direkt in Ihr Postfach.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Ihre E-Mail-Adresse"
                  className="bg-white/5 border-white/10 text-white flex-1"
                  data-testid="input-newsletter"
                />
                <button className="px-6 py-2 bg-primary text-background font-bold rounded-md hover:bg-primary/90 transition-colors" data-testid="button-subscribe">
                  Abonnieren
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Mit der Anmeldung stimmen Sie unserer <a href="/privacy" className="text-primary hover:underline">Datenschutzerklärung</a> zu.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Individuelle Beratung gewünscht?</h2>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Unsere Experten helfen Ihnen, die richtige Strategie für Ihr Unternehmen zu finden.
            </p>
            <a 
              href="/kontakt" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background font-bold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Kostenlose Beratung anfragen <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
