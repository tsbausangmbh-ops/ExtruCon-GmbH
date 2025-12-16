import { motion } from "framer-motion";
import { TrendingUp, Clock, Users, Zap, CheckCircle, Award } from "lucide-react";
import { useLanguage, Language } from "@/lib/i18n";

const translations: Record<Language, {
  badge: string;
  title: string;
  subtitle: string;
  stats: { label: string; description: string }[];
  whyTitle: string;
  achievements: string[];
}> = {
  de: {
    badge: "Unsere Ergebnisse",
    title: "Messbare Erfolge für Ihr Unternehmen",
    subtitle: "Zahlen lügen nicht. Sehen Sie, welche Ergebnisse unsere Kunden mit KI-Automatisierung erreichen.",
    stats: [
      { label: "Zeitersparnis", description: "Durchschnittliche Zeitersparnis durch unsere Automatisierungen" },
      { label: "Zufriedene Kunden", description: "Unternehmen vertrauen auf unsere KI-Lösungen" },
      { label: "KI-Verfügbarkeit", description: "Ihre KI-Agenten arbeiten rund um die Uhr" },
      { label: "Mehr Leads", description: "Durchschnittliche Steigerung der Lead-Generierung" }
    ],
    whyTitle: "Warum Unternehmen uns wählen",
    achievements: ["Über 500 automatisierte Workflows erstellt", "50+ KI-Agenten im aktiven Einsatz", "DSGVO-konforme Lösungen", "Deutscher Support & Entwicklung"]
  },
  en: {
    badge: "Our Results",
    title: "Measurable Success for Your Business",
    subtitle: "Numbers don't lie. See what results our clients achieve with AI automation.",
    stats: [
      { label: "Time Saved", description: "Average time savings through our automations" },
      { label: "Happy Clients", description: "Companies trust our AI solutions" },
      { label: "AI Availability", description: "Your AI agents work around the clock" },
      { label: "More Leads", description: "Average increase in lead generation" }
    ],
    whyTitle: "Why Companies Choose Us",
    achievements: ["Over 500 automated workflows created", "50+ AI agents in active use", "GDPR-compliant solutions", "German support & development"]
  },
  hr: {
    badge: "Naši rezultati",
    title: "Mjerljivi uspjeh za vaše poslovanje",
    subtitle: "Brojke ne lažu. Pogledajte kakve rezultate naši klijenti postižu s AI automatizacijom.",
    stats: [
      { label: "Ušteda vremena", description: "Prosječna ušteda vremena kroz naše automatizacije" },
      { label: "Zadovoljnih klijenata", description: "Tvrtke vjeruju našim AI rješenjima" },
      { label: "AI dostupnost", description: "Vaši AI agenti rade non-stop" },
      { label: "Više potencijalnih kupaca", description: "Prosječno povećanje generiranja potencijalnih kupaca" }
    ],
    whyTitle: "Zašto tvrtke biraju nas",
    achievements: ["Preko 500 automatiziranih radnih procesa", "50+ AI agenata u aktivnoj upotrebi", "GDPR-sukladna rješenja", "Njemačka podrška i razvoj"]
  },
  tr: {
    badge: "Sonuçlarımız",
    title: "İşletmeniz İçin Ölçülebilir Başarı",
    subtitle: "Rakamlar yalan söylemez. Müşterilerimizin yapay zeka otomasyonu ile elde ettiği sonuçları görün.",
    stats: [
      { label: "Zaman Tasarrufu", description: "Otomasyonlarımız sayesinde ortalama zaman tasarrufu" },
      { label: "Mutlu Müşteri", description: "Şirketler yapay zeka çözümlerimize güveniyor" },
      { label: "Yapay Zeka Erişilebilirliği", description: "Yapay zeka temsilcileriniz 7/24 çalışıyor" },
      { label: "Daha Fazla Potansiyel Müşteri", description: "Potansiyel müşteri oluşturmada ortalama artış" }
    ],
    whyTitle: "Şirketler Neden Bizi Tercih Ediyor",
    achievements: ["500'den fazla otomatik iş akışı oluşturuldu", "50+ aktif yapay zeka temsilcisi", "KVKK uyumlu çözümler", "Almanya'da destek ve geliştirme"]
  }
};

export function Statistics() {
  const { language } = useLanguage();
  const t = translations[language];
  const icons = [Clock, Users, Zap, TrendingUp];

  const stats = t.stats.map((stat, i) => ({
    icon: icons[i],
    value: ["80%", "100+", "24/7", "3x"][i],
    label: stat.label,
    description: stat.description
  }));

  return (
    <section className="py-20 bg-gradient-to-b from-background to-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            {t.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-gray-800/30 border border-gray-700/50 rounded-2xl hover:border-primary/50 transition-all"
              data-testid={`stat-card-${index}`}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-200 mb-2">{stat.label}</div>
              <p className="text-sm text-gray-400">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/20 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-8 h-8 text-primary" />
            <h3 className="text-xl font-bold text-white">
              {t.whyTitle}
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.achievements.map((achievement, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{achievement}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
