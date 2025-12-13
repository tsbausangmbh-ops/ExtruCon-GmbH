import { motion } from "framer-motion";
import { Star, Building2, Users, TrendingUp, Quote } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function Referenzen() {
  const { t } = useLanguage();

  const references = [
    {
      company: "TechStart GmbH",
      industry: "SaaS / Software",
      logo: "🚀",
      quote: "ExtruCon hat unseren Kundenservice mit KI-Agenten revolutioniert. 70% weniger Support-Tickets!",
      results: ["+70% Effizienz", "24/7 Support", "5x ROI"],
      person: "Max Müller",
      role: "CEO"
    },
    {
      company: "Immobilien Weber",
      industry: "Immobilien",
      logo: "🏠",
      quote: "Die Automatisierung der Lead-Qualifizierung spart uns täglich 4 Stunden Arbeit.",
      results: ["+200% Leads", "4h/Tag gespart", "Schnellere Abschlüsse"],
      person: "Anna Weber",
      role: "Geschäftsführerin"
    },
    {
      company: "Klinik am Park",
      industry: "Gesundheitswesen",
      logo: "🏥",
      quote: "Der KI-Chatbot beantwortet Patientenanfragen sofort - auch nachts und am Wochenende.",
      results: ["24/7 Erreichbar", "-60% Telefonanrufe", "Höhere Zufriedenheit"],
      person: "Dr. Thomas Schmidt",
      role: "Klinikleiter"
    },
    {
      company: "AutoHaus Premium",
      industry: "Automotive",
      logo: "🚗",
      quote: "Probefahrt-Buchungen laufen jetzt vollautomatisch. Kein manueller Aufwand mehr!",
      results: ["+150% Buchungen", "0 manuelle Arbeit", "Mehr Verkäufe"],
      person: "Stefan Bauer",
      role: "Verkaufsleiter"
    },
    {
      company: "Restaurant Bella Italia",
      industry: "Gastronomie",
      logo: "🍝",
      quote: "Online-Reservierungen und Bestellungen werden jetzt automatisch verarbeitet.",
      results: ["+80% Reservierungen", "Weniger No-Shows", "Bessere Auslastung"],
      person: "Marco Rossi",
      role: "Inhaber"
    },
    {
      company: "Rechtsanwalt Schneider",
      industry: "Rechtsberatung",
      logo: "⚖️",
      quote: "Die KI-gestützte Terminbuchung hat unsere Kanzlei modernisiert.",
      results: ["Automatische Termine", "Weniger Verwaltung", "Professioneller Auftritt"],
      person: "RA Schneider",
      role: "Partner"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" data-testid="text-referenzen-title">
            {t.references?.title || "Unsere Referenzen"}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto" data-testid="text-referenzen-subtitle">
            {t.references?.subtitle || "Erfolgsgeschichten unserer Kunden aus verschiedenen Branchen"}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {references.map((ref, index) => (
            <motion.div
              key={ref.company}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all"
              data-testid={`card-reference-${index}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{ref.logo}</div>
                <div>
                  <h3 className="text-lg font-bold text-white">{ref.company}</h3>
                  <p className="text-sm text-gray-400">{ref.industry}</p>
                </div>
              </div>

              <div className="mb-4">
                <Quote className="w-6 h-6 text-primary/50 mb-2" />
                <p className="text-gray-300 italic">"{ref.quote}"</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {ref.results.map((result, i) => (
                  <span key={i} className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full">
                    {result}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-400 border-t border-white/10 pt-4">
                <span className="font-medium text-white">{ref.person}</span>
                <span>•</span>
                <span>{ref.role}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-white/10 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {t.references?.cta || "Werden Sie unsere nächste Erfolgsgeschichte"}
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            {t.references?.ctaText || "Lassen Sie uns gemeinsam Ihre Prozesse automatisieren und Ihr Unternehmen mit KI auf das nächste Level bringen."}
          </p>
          <a
            href="/kontakt"
            className="inline-block bg-primary text-background font-bold px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            data-testid="link-referenzen-kontakt"
          >
            {t.references?.ctaButton || "Kostenloses Beratungsgespräch"}
          </a>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-gray-400">{t.references?.stats?.projects || "Projekte"}</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-gray-400">{t.references?.stats?.satisfaction || "Zufriedenheit"}</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">10+</div>
            <div className="text-gray-400">{t.references?.stats?.industries || "Branchen"}</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">5x</div>
            <div className="text-gray-400">{t.references?.stats?.roi || "Ø ROI"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
