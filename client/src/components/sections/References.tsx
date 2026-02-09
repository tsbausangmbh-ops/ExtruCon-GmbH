import { motion } from "framer-motion";
import { ExternalLink, Zap } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function References() {
  const { t } = useLanguage();

  const references = [
    {
      title: "089Dach GmbH",
      subtitle: "Dachdecker München",
      category: "Webentwicklung + KI",
      results: ["260+ Kunden", "4.9 ★ Bewertung"],
      color: "orange",
      link: "https://dacharbeiten.089dach.de"
    },
    {
      title: "AquaPro24",
      subtitle: "Sanitär München",
      category: "Webentwicklung + KI",
      results: ["2.500+ Kunden", "24/7 Notdienst"],
      color: "blue",
      link: "https://aquapro24.de"
    },
    {
      title: "ExtruCon Funnel",
      subtitle: "KI-Agenten Landingpage",
      category: "Webentwicklung + Marketing",
      results: ["Conversion-optimiert", "3-Schritte Funnel"],
      color: "purple",
      link: "https://funnel.extrucon.de"
    },
    {
      title: "089 Sanierer",
      subtitle: "Komplettsanierung",
      category: "Webentwicklung + KI",
      results: ["268+ Projekte", "98% Empfehlung"],
      color: "green",
      link: "https://089-sanierer.de"
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
    <section className="py-16 bg-card/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Unsere Arbeit
          </span>
          <h2 className="text-2xl md:text-3xl font-bold font-display text-white mb-4">
            Erfolgreiche <span className="text-gradient">Referenzen</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Überzeugen Sie sich selbst von unserer Arbeit
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {references.map((ref, i) => {
            const colors = colorClasses[ref.color];
            return (
              <motion.a
                key={i}
                href={ref.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-5 rounded-xl bg-card/30 border border-white/5 hover:border-white/20 transition-all hover:scale-[1.02]"
                data-testid={`card-reference-home-${i}`}
              >
                <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${colors.bg} ${colors.text} ${colors.border} border mb-3`}>
                  {ref.category}
                </span>
                <h3 className="text-lg font-bold text-white mb-1">{ref.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{ref.subtitle}</p>
                <div className="space-y-1.5 mb-3">
                  {ref.results.map((result, j) => (
                    <div key={j} className="flex items-center gap-2 text-xs">
                      <Zap className={`w-3 h-3 ${colors.text}`} />
                      <span className="text-gray-300">{result}</span>
                    </div>
                  ))}
                </div>
                <div className={`flex items-center gap-1 text-xs font-medium ${colors.text} group-hover:underline`}>
                  Ansehen <ExternalLink className="w-3 h-3" />
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <a
            href="/referenzen"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            data-testid="link-all-references"
          >
            Alle Referenzen ansehen →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
