import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { BookOpen, Clock, ArrowRight, Search, Bot, Share2, Globe, TrendingUp, Sparkles, Mail, Lightbulb } from "lucide-react";
import heroImg from "@/assets/images/hero-ratgeber-abstract.webp";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/lib/i18n";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedServices, ExploreMoreSection } from "@/components/InternalLinks";

const articleMetadata: { id: number; category: string; featured: boolean }[] = [
  { id: 1, category: "ki", featured: true },
  { id: 2, category: "social", featured: true },
  { id: 3, category: "marketing", featured: true },
  { id: 4, category: "web", featured: true },
  { id: 5, category: "ki", featured: true },
  { id: 6, category: "social", featured: true },
  { id: 7, category: "marketing", featured: false },
  { id: 8, category: "ki", featured: false },
  { id: 9, category: "web", featured: false },
  { id: 10, category: "social", featured: false },
  { id: 11, category: "marketing", featured: false },
  { id: 12, category: "marketing", featured: false },
  { id: 13, category: "ki", featured: false },
  { id: 14, category: "web", featured: false },
  { id: 15, category: "social", featured: false },
  { id: 16, category: "marketing", featured: false },
  { id: 17, category: "ki", featured: false },
  { id: 18, category: "web", featured: false },
  { id: 19, category: "ki", featured: false },
  { id: 20, category: "ki", featured: false },
  { id: 21, category: "ki", featured: false },
  { id: 22, category: "ki", featured: false },
  { id: 23, category: "ki", featured: false },
  { id: 24, category: "ki", featured: false },
  { id: 25, category: "ki", featured: false },
  { id: 26, category: "social", featured: false },
  { id: 27, category: "social", featured: false },
  { id: 28, category: "social", featured: false },
  { id: 29, category: "social", featured: false },
  { id: 30, category: "social", featured: false },
  { id: 31, category: "social", featured: false },
  { id: 32, category: "social", featured: false },
  { id: 33, category: "social", featured: false },
  { id: 34, category: "marketing", featured: false },
  { id: 35, category: "marketing", featured: false },
  { id: 36, category: "marketing", featured: false },
  { id: 37, category: "marketing", featured: false },
  { id: 38, category: "marketing", featured: false },
  { id: 39, category: "marketing", featured: false },
  { id: 40, category: "marketing", featured: false },
  { id: 41, category: "web", featured: false },
  { id: 42, category: "web", featured: false },
  { id: 43, category: "web", featured: false },
  { id: 44, category: "web", featured: false },
  { id: 45, category: "web", featured: false },
  { id: 46, category: "web", featured: false },
  { id: 47, category: "web", featured: false },
  { id: 48, category: "web", featured: false },
];

const categoryIcons = {
  all: Sparkles,
  ki: Bot,
  social: Share2,
  marketing: TrendingUp,
  web: Globe,
};

const categoryColors = {
  all: "text-primary",
  ki: "text-cyan-400",
  social: "text-purple-400",
  marketing: "text-orange-400",
  web: "text-blue-400",
};

export default function Ratgeber() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { name: t.ratgeberPage.categories.all, value: "all", icon: categoryIcons.all, color: categoryColors.all },
    { name: t.ratgeberPage.categories.ki, value: "ki", icon: categoryIcons.ki, color: categoryColors.ki },
    { name: t.ratgeberPage.categories.social, value: "social", icon: categoryIcons.social, color: categoryColors.social },
    { name: t.ratgeberPage.categories.marketing, value: "marketing", icon: categoryIcons.marketing, color: categoryColors.marketing },
    { name: t.ratgeberPage.categories.web, value: "web", icon: categoryIcons.web, color: categoryColors.web },
  ];

  const articles = t.ratgeberPage.articles.map((article) => {
    const meta = articleMetadata.find((m) => m.id === article.id);
    return {
      ...article,
      category: meta?.category || "ki",
      featured: meta?.featured || false,
    };
  });

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
      <SEOHead
        title="KI Ratgeber | Tipps zu KI, Marketing & Automatisierung | ExtruCon"
        description="Expertenwissen zu KI, Automatisierung, Social Media und Webentwicklung. Praxistipps von Ihrer KI-Agentur aus Fürstenfeldbruck."
        keywords="KI Ratgeber, Automatisierung Tipps, Marketing Guide, KI Wissen"
        canonical="https://extrucon.de/ratgeber"
      />
      <Navbar />
      <main className="pt-24">
        <Breadcrumbs items={[
          { label: t.ratgeberPage.badge }
        ]} />
        {/* Hero Section */}
        <section className="relative py-10 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={heroImg} alt="" className="w-full h-full object-cover opacity-40" fetchPriority="high" decoding="async" width={1920} height={1080} />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                <BookOpen className="w-4 h-4" />
                {t.ratgeberPage.badge}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
                {t.ratgeberPage.title}
              </h1>
              <p className="text-lg text-gray-400 mb-6">
                {t.ratgeberPage.subtitle}
              </p>
              
              {/* Search */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <Input
                  placeholder={t.ratgeberPage.searchPlaceholder}
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
                <h2 className="text-xl font-bold text-white">{t.ratgeberPage.featuredTitle}</h2>
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
                          {t.ratgeberPage.read} <ArrowRight className="w-3 h-3" />
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
              {selectedCategory === "all" ? t.ratgeberPage.allArticlesTitle : getCategoryInfo(selectedCategory)?.name}
              <span className="text-gray-500 font-normal ml-2 text-base">({filteredArticles.length})</span>
            </h2>
            
            {filteredArticles.length === 0 ? (
              <div className="text-center py-12">
                <Search className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400">{t.ratgeberPage.noResults}</p>
                <button 
                  onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
                  className="text-primary hover:underline mt-2"
                >
                  {t.ratgeberPage.resetFilter}
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
              <h2 className="text-2xl font-bold text-white mb-3">{t.ratgeberPage.newsletter.title}</h2>
              <p className="text-gray-400 mb-6">
                {t.ratgeberPage.newsletter.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder={t.ratgeberPage.newsletter.placeholder}
                  className="bg-white/5 border-white/10 text-white flex-1"
                  data-testid="input-newsletter"
                />
                <button className="px-6 py-2 bg-primary text-background font-bold rounded-md hover:bg-primary/90 transition-colors" data-testid="button-subscribe">
                  {t.ratgeberPage.newsletter.button}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                {t.ratgeberPage.newsletter.consent} <a href="/privacy" className="text-primary hover:underline">{t.ratgeberPage.newsletter.privacyLink}</a> {t.ratgeberPage.newsletter.consentEnd}
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">{t.ratgeberPage.cta.title}</h2>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              {t.ratgeberPage.cta.subtitle}
            </p>
            <a 
              href="/kontakt" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background font-bold rounded-lg hover:bg-primary/90 transition-colors"
            >
              {t.ratgeberPage.cta.button} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        <RelatedServices currentPage="ratgeber" />
        <ExploreMoreSection />
      </main>
      <Footer />
    </div>
  );
}
