import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ExploreMoreSection } from "@/components/InternalLinks";
import { motion } from "framer-motion";
import { Bot, Zap, Building2, MapPin, Phone, Mail, ArrowRight, CheckCircle, Brain, Workflow, Users, Clock, Shield, TrendingUp, Globe, Star } from "lucide-react";
import { Link } from "wouter";
export default function Antalya() {

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://extrucon.de/antalya#localbusiness",
    "name": "ExtruCon GmbH - Yapay Zeka Ajansı Antalya",
    "image": "https://extrucon.de/logo.png",
    "description": "Antalya ve Türkiye genelinde yapay zeka ajansı. Yapay zeka ajanları geliştiriyoruz, iş süreçlerini otomatikleştiriyoruz ve modern web siteleri oluşturuyoruz.",
    "url": "https://extrucon.de/antalya",
    "telephone": "+4989444438879",
    "email": "info@extrucon.de",
    "priceRange": "€€-€€€",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Antalya",
      "addressRegion": "Antalya",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 36.8969,
      "longitude": 30.7133
    },
    "areaServed": [
      { "@type": "City", "name": "Antalya" },
      { "@type": "City", "name": "Istanbul" },
      { "@type": "City", "name": "Ankara" },
      { "@type": "City", "name": "Izmir" },
      { "@type": "Country", "name": "Türkiye" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/extrucon",
      "https://www.instagram.com/extrucon"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Antalya'da yapay zeka danışmanlığı ne kadar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ExtruCon'da ilk danışmanlık ücretsizdir. İhtiyaçlarınızı analiz eder ve işletmeniz için özel bir teklif hazırlarız."
        }
      },
      {
        "@type": "Question",
        "name": "ExtruCon Türkiye'de hizmet veriyor mu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet, Antalya, İstanbul, Ankara ve İzmir başta olmak üzere tüm Türkiye'de uzaktan danışmanlık ve proje geliştirme hizmeti veriyoruz."
        }
      },
      {
        "@type": "Question",
        "name": "Hangi yapay zeka modellerini kullanıyorsunuz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Akıllı yapay zeka ajanları için GPT-4, Claude AI ve Gemini kullanıyoruz. Görsel için Midjourney ve DALL-E. İş akışı otomasyonu için n8n, Make ve Zapier."
        }
      }
    ]
  };

  const schemaData = [localBusinessSchema, faqSchema];

  const services = [
    {
      icon: Bot,
      title: "Yapay Zeka Ajanları",
      description: "Müşteri hizmetlerinizi otomatikleştiren ve 7/24 hizmet veren akıllı chatbot ve yapay zeka asistanları.",
      link: "/ki-agenten"
    },
    {
      icon: Workflow,
      title: "Otomasyon",
      description: "n8n tabanlı iş akışı otomasyonları. E-posta, CRM ve fatura işlemlerinde zaman kazanın.",
      link: "/automatisierungen"
    },
    {
      icon: Globe,
      title: "KI-Destekli Web Siteleri",
      description: "Entegre yapay zeka özellikleri ile modern web siteleri. SEO optimize ve dönüşüm odaklı.",
      link: "/webseiten-ki"
    }
  ];

  const benefits = [
    { icon: Globe, title: "Uzaktan Hizmet", description: "Türkiye genelinde online danışmanlık ve proje geliştirme" },
    { icon: Clock, title: "Hızlı Yanıt", description: "24 saat içinde geri dönüş garantisi" },
    { icon: Users, title: "Türk Pazarı Uzmanlığı", description: "Türk işletmelerinin ihtiyaçlarını anlıyoruz" },
    { icon: Shield, title: "KVKK Uyumlu", description: "Veri güvenliği ve gizlilik standartlarına uygun" },
    { icon: TrendingUp, title: "Ölçülebilir Sonuçlar", description: "Şeffaf KPI'lar ve düzenli raporlama" },
    { icon: Star, title: "Yüksek Müşteri Memnuniyeti", description: "4.9/5 yıldız müşteri değerlendirmesi" }
  ];

  const majorCities = [
    "Antalya", "İstanbul", "Ankara", "İzmir"
  ];

  const antalyaDistricts = [
    "Muratpaşa", "Konyaaltı", "Kepez", "Lara", "Kundu",
    "Alanya", "Manavgat", "Serik", "Belek", "Side"
  ];

  const otherCities = [
    "Bursa", "Adana", "Konya", "Gaziantep", "Mersin",
    "Kayseri", "Eskişehir", "Trabzon", "Samsun", "Denizli"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Yapay Zeka Ajansı Antalya | ExtruCon GmbH – AI Ajanları & Otomasyon"
        description="Antalya için yapay zeka ajansınız: AI ajanları, iş akışı otomasyonu ve yapay zeka destekli web siteleri. ✓ KVKK uyumlu ✓ 7/24 destek ✓ Türkiye geneli hizmet"
        keywords="Yapay Zeka Antalya, AI Ajanları Antalya, Chatbot Antalya, Otomasyon Antalya, Yapay Zeka Danışmanlığı, AI Türkiye, Dijital Ajans Antalya, n8n Türkiye"
        canonical="https://extrucon.de/antalya"
        schema={schemaData}
        geoRegion="TR-07"
        geoPlacename="Antalya, Türkiye"
      />
      <Navbar />
      
      <main>
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-background to-cyan-900/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.15),transparent_50%)]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex justify-center mb-8">
                <Breadcrumbs
                  items={[
                    { label: "Ana Sayfa", href: "/" },
                    { label: "Antalya", href: "/antalya" }
                  ]}
                />
              </div>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm mb-6">
                <MapPin className="w-4 h-4" />
                <span>Antalya ve Türkiye İçin Yapay Zeka Ajansınız</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-white">Yapay Zeka Ajansı</span>{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Antalya</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Türk işletmelerine yapay zeka getiriyoruz. AI ajanlarından otomasyona, akıllı web sitelerine kadar – hepsi tek elden, profesyonel hizmet.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/termin">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25"
                    data-testid="button-termin-hero-antalya"
                  >
                    Ücretsiz Danışmanlık Alın
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <a href="tel:+4989444438879">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-white/5"
                    data-testid="button-call-hero-antalya"
                  >
                    <Phone className="w-5 h-5" />
                    +49 89 444 438 879
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-12 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Antalya İçin Yapay Zeka Hizmetlerimiz
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Danışmanlıktan uygulamaya – Türk işletmelerini yapay zeka ile dijital dönüşümde destekliyoruz.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={service.link}>
                    <div className="group p-8 bg-gray-800/50 border border-gray-700/50 rounded-2xl hover:border-cyan-500/50 transition-all cursor-pointer h-full">
                      <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <service.icon className="w-7 h-7 text-cyan-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-400 mb-4">{service.description}</p>
                      <span className="text-cyan-400 flex items-center gap-2 group-hover:gap-3 transition-all">
                        Daha Fazla Bilgi <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-900/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Neden ExtruCon'u Tercih Etmelisiniz?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Alman mühendislik kalitesi ile Türk pazarına özel yapay zeka çözümleri sunuyoruz.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-gray-800/30 border border-gray-700/30 rounded-xl"
                >
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Türk İşletmeleri İçin Sektör Çözümleri
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Turizm, e-ticaret veya hizmet sektörü – her sektör için uygun yapay zeka çözümümüz var.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Turizm & Otelcilik", desc: "Rezervasyon chatbotları, otomatik misafir iletişimi ve kişiselleştirilmiş pazarlama kampanyaları.", icon: "🏨" },
                { title: "E-Ticaret", desc: "Akıllı ürün önerileri, otomatik müşteri hizmetleri ve stok yönetimi.", icon: "🛒" },
                { title: "Sağlık & Klinikler", desc: "Online randevu sistemi, hasta iletişimi ve otomatik hatırlatmalar. KVKK uyumlu.", icon: "⚕️" },
                { title: "Emlak", desc: "Otomatik mülk sorguları, sanal turlar ve potansiyel müşteri değerlendirmesi.", icon: "🏠" },
                { title: "Restoranlar & Kafeler", desc: "Rezervasyon chatbotları, otomatik yorum yanıtları ve sadakat programları.", icon: "🍽️" },
                { title: "Hukuk & Mali Müşavirlik", desc: "Belge otomasyonu, müvekkil iletişimi ve akıllı SSS botları.", icon: "⚖️" }
              ].map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-gray-800/30 border border-gray-700/30 rounded-xl hover:border-cyan-500/30 transition-all"
                >
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{industry.title}</h3>
                  <p className="text-sm text-gray-400">{industry.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-900/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Müşterilerimiz Ne Diyor?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Türkiye'deki müşterilerimizin deneyimlerini keşfedin.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { quote: "ExtruCon, müşteri hizmetlerimizi tamamen dönüştürdü. Yapay zeka chatbotu sorguların %80'ini otomatik olarak yanıtlıyor.", author: "Mehmet A.", company: "Otel Yöneticisi, Antalya", stars: 5 },
                { quote: "Randevu sistemimizin otomasyonu her gün saatler kazandırıyor. Kesinlikle tavsiye ederim!", author: "Dr. Ayşe K.", company: "Diş Kliniği, İstanbul", stars: 5 },
                { quote: "Profesyonel, hızlı ve her zaman ulaşılabilir. İşletmemiz için en iyi yatırım.", author: "Ali B.", company: "E-Ticaret, İzmir", stars: 5 }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-gray-800/50 border border-gray-700/50 rounded-xl"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">
                  Tüm Türkiye'de Yapay Zeka Çözümleri
                </h2>
                <p className="text-gray-400 mb-6">
                  Antalya, İstanbul, Ankara ve İzmir başta olmak üzere Türkiye'nin her yerindeki işletmelere hizmet veriyoruz.
                </p>
                <div className="flex flex-wrap gap-2">
                  {majorCities.map((city, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/40 rounded-full text-sm text-cyan-300"
                    >
                      {city}
                    </span>
                  ))}
                  {otherCities.map((city, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800/50 border border-gray-700/50 rounded-full text-sm text-gray-300"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">
                  Antalya ve Çevresi
                </h2>
                <p className="text-gray-400 mb-6">
                  Antalya ili ve çevresindeki tüm ilçelere özel yapay zeka danışmanlığı sunuyoruz.
                </p>
                <div className="flex flex-wrap gap-2">
                  {antalyaDistricts.map((district, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-300"
                    >
                      {district}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-900/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Sık Sorulan Sorular
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Yapay zeka hizmetlerimiz hakkında merak edilenler.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                { 
                  q: "Antalya'da yapay zeka danışmanlığı ne kadar?", 
                  a: "İlk danışmanlık ücretsizdir. İhtiyaçlarınızı analiz eder ve bütçenize uygun özel bir teklif hazırlarız. Projeler genellikle aylık 990€'dan başlar." 
                },
                { 
                  q: "Türkiye'de yerinde hizmet veriyor musunuz?", 
                  a: "Ana ofisimiz Almanya'da olmasına rağmen, Türkiye'deki müşterilerimize uzaktan danışmanlık ve proje geliştirme hizmeti sunuyoruz. Video görüşmeler ve online toplantılarla sürekli iletişim halindeyiz." 
                },
                { 
                  q: "Hangi yapay zeka teknolojilerini kullanıyorsunuz?", 
                  a: "Akıllı yapay zeka ajanları için GPT-4, Claude AI ve Gemini kullanıyoruz. Görsel içerik için Midjourney ve DALL-E. İş akışı otomasyonu için n8n, Make ve Zapier." 
                },
                { 
                  q: "Yapay zeka ile sonuçları ne kadar sürede görebilirim?", 
                  a: "Chatbot ve otomasyon projeleri genellikle 2-4 hafta içinde tamamlanır. İlk sonuçlar hemen görülür, sürekli optimizasyon ile performans artırılır." 
                },
                { 
                  q: "Veri güvenliği nasıl sağlanıyor?", 
                  a: "Tüm projelerimiz KVKK ve GDPR uyumludur. Verileriniz şifrelenir ve güvenli Alman sunucularında barındırılır." 
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-gray-800/30 border border-gray-700/30 rounded-xl"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                  <p className="text-gray-400">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-br from-cyan-900/20 to-blue-900/20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <Building2 className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                İşletmenizde Yapay Zeka Kullanmaya Hazır mısınız?
              </h2>
              <p className="text-gray-300 mb-8">
                Ücretsiz ilk görüşmemizde, yapay zeka ajanları ve otomasyonun işinizi nasıl ileriye taşıyabileceğini konuşalım.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/termin">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2"
                    data-testid="button-termin-cta-antalya"
                  >
                    Ücretsiz Danışmanlık Randevusu
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400">
                <a href="tel:+4989444438879" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                  <Phone className="w-5 h-5" />
                  +49 89 444 438 879
                </a>
                <a href="mailto:info@extrucon.de" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                  <Mail className="w-5 h-5" />
                  info@extrucon.de
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <ExploreMoreSection />
      </main>

      <Footer />
    </div>
  );
}
