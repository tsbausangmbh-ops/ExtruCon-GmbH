import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { HelpCircle, ChevronDown, Bot, Share2, Globe, TrendingUp, CreditCard, Users, Search } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/lib/i18n";
import { SEOHead } from "@/components/SEOHead";
import { RelatedServices, ExploreMoreSection } from "@/components/InternalLinks";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const categoryIcons = {
  allgemein: { icon: HelpCircle, color: "text-primary" },
  ki: { icon: Bot, color: "text-cyan-400" },
  social: { icon: Share2, color: "text-purple-400" },
  web: { icon: Globe, color: "text-blue-400" },
  marketing: { icon: TrendingUp, color: "text-orange-400" },
  kosten: { icon: CreditCard, color: "text-emerald-400" },
};

type CategoryId = keyof typeof categoryIcons;

export default function FAQ() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<CategoryId>("allgemein");
  const [openQuestions, setOpenQuestions] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleQuestion = (id: string) => {
    setOpenQuestions(prev => 
      prev.includes(id) ? prev.filter(q => q !== id) : [...prev, id]
    );
  };

  const categoryIds: CategoryId[] = ["allgemein", "ki", "social", "web", "marketing", "kosten"];
  
  const faqCategories = categoryIds.map(id => ({
    id,
    name: t.faqPage.categories[id],
    icon: categoryIcons[id].icon,
    color: categoryIcons[id].color,
    questions: t.faqPage.questions[id]
  }));

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
      <SEOHead
        title="FAQ | Häufige Fragen zu KI & Automatisierung | ExtruCon"
        description="Antworten auf häufig gestellte Fragen zu KI-Agenten, Automatisierungen, Webentwicklung und Marketing. ExtruCon GmbH Fürstenfeldbruck."
        keywords="KI FAQ, Automatisierung Fragen, KI-Agenten FAQ, Webentwicklung FAQ"
        canonical="https://extrucon.de/faq"
      />
      <Navbar />
      <main className="pt-24">
        <Breadcrumbs items={[
          { label: t.faqPage.badge }
        ]} />
        {/* Hero Section */}
        <section className="relative py-12 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-amber-600/40 via-background to-cyan-600/40">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                <HelpCircle className="w-4 h-4" />
                {t.faqPage.badge}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
                {t.faqPage.title}
              </h1>
              <p className="text-lg text-gray-400 mb-8">
                {t.faqPage.subtitle}
              </p>
              
              {/* Search */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <Input
                  placeholder={t.faqPage.searchPlaceholder}
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
                {t.faqPage.searchResults} ({filteredQuestions.length})
              </h2>
              {filteredQuestions.length === 0 ? (
                <p className="text-gray-400">{t.faqPage.noResults}</p>
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
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">{t.faqPage.categoriesLabel}</h3>
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
                              transition={{ delay: i * 0.02 }}
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
            <h2 className="text-2xl font-bold text-white mb-4">{t.faqPage.ctaTitle}</h2>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              {t.faqPage.ctaSubtitle}
            </p>
            <a 
              href="/kontakt" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background font-bold rounded-lg hover:bg-primary/90 transition-colors"
              data-testid="button-contact-faq"
            >
              {t.faqPage.ctaButton}
            </a>
          </div>
        </section>

        <RelatedServices currentPage="faq" />
        <ExploreMoreSection />
      </main>
      <Footer />
    </div>
  );
}
