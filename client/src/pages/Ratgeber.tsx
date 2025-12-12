import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { BookOpen, Clock, ArrowRight, Search, Bot, Share2, Globe, TrendingUp } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const categories = [
  { name: "Alle", value: "all" },
  { name: "KI & Automatisierung", value: "ki", icon: Bot },
  { name: "Social Media", value: "social", icon: Share2 },
  { name: "SEO & Marketing", value: "marketing", icon: TrendingUp },
  { name: "Webentwicklung", value: "web", icon: Globe },
];

const articles = [
  {
    id: 1,
    title: "KI-Chatbots für Unternehmen: Der komplette Leitfaden 2025",
    excerpt: "Erfahren Sie, wie KI-Chatbots Ihren Kundenservice revolutionieren und gleichzeitig Kosten senken können.",
    category: "ki",
    readTime: "8 Min.",
    date: "10. Dezember 2025",
    featured: true
  },
  {
    id: 2,
    title: "Instagram Reels: 10 Tipps für mehr Reichweite",
    excerpt: "So nutzen Sie das volle Potenzial von Instagram Reels für Ihr Unternehmen und erreichen tausende neue Kunden.",
    category: "social",
    readTime: "5 Min.",
    date: "8. Dezember 2025",
    featured: true
  },
  {
    id: 3,
    title: "Local SEO: So dominieren Sie die Google-Suche in Ihrer Region",
    excerpt: "Lokale Suchmaschinenoptimierung ist der Schlüssel für regionale Unternehmen. Hier sind die wichtigsten Strategien.",
    category: "marketing",
    readTime: "7 Min.",
    date: "5. Dezember 2025",
    featured: false
  },
  {
    id: 4,
    title: "Website-Geschwindigkeit optimieren: Performance-Tipps 2025",
    excerpt: "Eine schnelle Website ist entscheidend für SEO und Nutzererfahrung. So verbessern Sie Ihre Ladezeiten.",
    category: "web",
    readTime: "6 Min.",
    date: "3. Dezember 2025",
    featured: false
  },
  {
    id: 5,
    title: "ChatGPT für Marketing: Praktische Anwendungsfälle",
    excerpt: "Von Content-Erstellung bis Kundenanalyse: So setzen Sie ChatGPT effektiv in Ihrem Marketing ein.",
    category: "ki",
    readTime: "10 Min.",
    date: "1. Dezember 2025",
    featured: false
  },
  {
    id: 6,
    title: "LinkedIn für B2B: Die beste Strategie für 2025",
    excerpt: "LinkedIn ist das wichtigste Netzwerk für B2B-Unternehmen. So bauen Sie eine starke Präsenz auf.",
    category: "social",
    readTime: "8 Min.",
    date: "28. November 2025",
    featured: false
  },
  {
    id: 7,
    title: "Google Ads vs. Meta Ads: Was lohnt sich mehr?",
    excerpt: "Wir vergleichen die beiden Werbeplattformen und zeigen, welche für Ihr Business besser geeignet ist.",
    category: "marketing",
    readTime: "9 Min.",
    date: "25. November 2025",
    featured: false
  },
  {
    id: 8,
    title: "Automatisierung mit Make & Zapier: Einsteiger-Guide",
    excerpt: "Sparen Sie Zeit mit Workflow-Automatisierung. Diese Tools verbinden Ihre Apps und automatisieren Aufgaben.",
    category: "ki",
    readTime: "12 Min.",
    date: "22. November 2025",
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
                <BookOpen className="w-4 h-4" />
                Wissen & Insights
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
                Marketing Ratgeber
              </h1>
              <p className="text-lg text-gray-400 mb-8">
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

        {/* Featured Articles */}
        {searchQuery === "" && selectedCategory === "all" && (
          <section className="py-10">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-white mb-6">Empfohlene Artikel</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {featuredArticles.map((article, i) => (
                  <motion.a
                    key={article.id}
                    href={`/ratgeber/${article.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/10 hover:border-primary/30 transition-all"
                    data-testid={`card-featured-${article.id}`}
                  >
                    <span className="text-xs text-primary font-medium uppercase tracking-wider">
                      {categories.find(c => c.value === article.category)?.name}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-2 mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {article.readTime}
                      </span>
                      <span className="flex items-center gap-1 text-primary group-hover:gap-2 transition-all">
                        Lesen <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Category Filter */}
        <section className="py-6 border-y border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === cat.value
                      ? "bg-primary text-background"
                      : "bg-white/5 text-gray-300 hover:bg-white/10"
                  }`}
                  data-testid={`filter-${cat.value}`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* All Articles */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-white mb-6">
              {selectedCategory === "all" ? "Alle Artikel" : categories.find(c => c.value === selectedCategory)?.name}
              <span className="text-gray-500 font-normal ml-2">({filteredArticles.length})</span>
            </h2>
            
            {filteredArticles.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400">Keine Artikel gefunden.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article, i) => (
                  <motion.a
                    key={article.id}
                    href={`/ratgeber/${article.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group p-5 rounded-xl bg-card/30 border border-white/5 hover:border-primary/30 transition-all"
                    data-testid={`card-article-${article.id}`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs text-gray-500">{article.date}</span>
                      <span className="text-gray-600">·</span>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2 mb-3">{article.excerpt}</p>
                    <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-400">
                      {categories.find(c => c.value === article.category)?.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-10 bg-card/20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Newsletter abonnieren</h2>
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
      </main>
      <Footer />
    </div>
  );
}
