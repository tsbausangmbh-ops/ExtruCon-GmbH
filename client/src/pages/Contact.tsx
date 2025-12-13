import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { SEOHead } from "@/components/SEOHead";

export default function Contact() {
  const { t, language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      company: formData.get('company') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      service: formData.get('service') as string,
      message: formData.get('message') as string,
      language
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Fehler beim Senden');
      }

      setSubmitted(true);
    } catch (err) {
      setError('Es gab ein Problem beim Senden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SEOHead
        title="Kontakt | KI-Beratung Fürstenfeldbruck | ExtruCon GmbH"
        description="Kontaktieren Sie ExtruCon für KI-Beratung in Fürstenfeldbruck bei München. Kostenlose Erstberatung zu KI-Agenten und Automatisierung."
        keywords="KI Beratung Kontakt, Fürstenfeldbruck, München, ExtruCon Kontakt"
        canonical="https://extrucon.de/kontakt"
      />
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                {t.contactPage.badge}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
                {t.contactPage.title}
              </h1>
              <p className="text-lg text-gray-400">
                {t.contactPage.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="order-2 lg:order-1"
              >
                <div className="p-6 rounded-2xl bg-card/30 border border-white/10">
                  <h2 className="text-2xl font-bold text-white mb-6">{t.contactPage.formTitle}</h2>
                  
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">{t.contactPage.thankYouTitle}</h3>
                      <p className="text-gray-400">
                        {t.contactPage.thankYouMessage}
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="text-gray-300">{t.contactPage.nameLabel}</Label>
                          <Input 
                            id="name"
                            name="name"
                            placeholder={t.contactPage.namePlaceholder} 
                            required
                            className="bg-white/5 border-white/10 text-white mt-1"
                            data-testid="input-name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="company" className="text-gray-300">{t.contactPage.companyLabel}</Label>
                          <Input 
                            id="company"
                            name="company"
                            placeholder={t.contactPage.companyPlaceholder}
                            className="bg-white/5 border-white/10 text-white mt-1"
                            data-testid="input-company"
                          />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email" className="text-gray-300">{t.contactPage.emailLabel}</Label>
                          <Input 
                            id="email"
                            name="email"
                            type="email" 
                            placeholder={t.contactPage.emailPlaceholder} 
                            required
                            className="bg-white/5 border-white/10 text-white mt-1"
                            data-testid="input-email"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-gray-300">{t.contactPage.phoneLabel}</Label>
                          <Input 
                            id="phone"
                            name="phone"
                            type="tel" 
                            placeholder={t.contactPage.phonePlaceholder}
                            className="bg-white/5 border-white/10 text-white mt-1"
                            data-testid="input-phone"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="service" className="text-gray-300">{t.contactPage.interestLabel}</Label>
                        <select 
                          id="service"
                          name="service"
                          className="w-full mt-1 px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white"
                          data-testid="select-service"
                        >
                          <option value="" className="bg-gray-900">{t.contactPage.selectPlaceholder}</option>
                          <option value="ki" className="bg-gray-900">{t.contactPage.optionKI}</option>
                          <option value="social" className="bg-gray-900">{t.contactPage.optionSocial}</option>
                          <option value="web" className="bg-gray-900">{t.contactPage.optionWeb}</option>
                          <option value="marketing" className="bg-gray-900">{t.contactPage.optionMarketing}</option>
                          <option value="content" className="bg-gray-900">{t.contactPage.optionContent}</option>
                          <option value="brand" className="bg-gray-900">{t.contactPage.optionBrand}</option>
                          <option value="other" className="bg-gray-900">{t.contactPage.optionOther}</option>
                        </select>
                      </div>
                      
                      <div>
                        <Label htmlFor="message" className="text-gray-300">{t.contactPage.messageLabel}</Label>
                        <Textarea 
                          id="message"
                          name="message"
                          placeholder={t.contactPage.messagePlaceholder} 
                          rows={5}
                          required
                          className="bg-white/5 border-white/10 text-white mt-1 resize-none"
                          data-testid="textarea-message"
                        />
                      </div>

                      <p className="text-xs text-gray-500">
                        {t.contactPage.privacyText} <a href="/privacy" className="text-primary hover:underline">{t.contactPage.privacyLink}</a> {t.contactPage.privacyEnd}
                      </p>
                      
                      {error && (
                        <p className="text-red-400 text-sm p-3 rounded-lg bg-red-400/10 border border-red-400/20">
                          {error}
                        </p>
                      )}

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-primary hover:bg-primary/90 text-background font-bold"
                        data-testid="button-submit-contact"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        ) : (
                          <Send className="w-4 h-4 mr-2" />
                        )}
                        {isLoading ? 'Wird gesendet...' : t.contactPage.submitButton}
                      </Button>
                    </form>
                  )}
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="order-1 lg:order-2"
              >
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-white mb-6">{t.contactPage.contactDataTitle}</h2>
                  
                  <div className="p-5 rounded-xl bg-card/30 border border-white/10 flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/20">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">{t.contactPage.addressTitle}</h3>
                      <p className="text-gray-400">
                        ExtruCon GmbH<br />
                        Hasenheide 8<br />
                        82256 Fürstenfeldbruck
                      </p>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-card/30 border border-white/10 flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-cyan-500/20">
                      <Mail className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">{t.contactPage.emailTitle}</h3>
                      <a href="mailto:info@extrucon.de" className="text-gray-400 hover:text-primary transition-colors">
                        info@extrucon.de
                      </a>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-card/30 border border-white/10 flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-purple-500/20">
                      <Phone className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">{t.contactPage.phoneTitle}</h3>
                      <a href="tel:+4989444438879" className="text-gray-400 hover:text-primary transition-colors">
                        089 444438879
                      </a>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-card/30 border border-white/10 flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-emerald-500/20">
                      <Clock className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">{t.contactPage.availabilityTitle}</h3>
                      <p className="text-gray-400">
                        {t.contactPage.availabilityHours}<br />
                        <span className="text-sm">{t.contactPage.availabilityNote}</span>
                      </p>
                    </div>
                  </div>

                  </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Standort & Map - Full Width */}
        <section className="py-8 bg-card/20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Standort Info */}
              <div className="p-6 rounded-xl bg-card/30 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">{t.contactPage.locationTitle}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-lg text-white font-medium">ExtruCon GmbH</p>
                    <p className="text-gray-400">Hasenheide 8</p>
                    <p className="text-gray-400">82256 Fürstenfeldbruck</p>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-primary font-medium mb-2">{t.contactPage.nationwideTitle}</p>
                    <p className="text-gray-400 text-sm">
                      {t.contactPage.nationwideDesc}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3 py-1 rounded-full bg-white/5 text-gray-400 text-xs">{t.contactPage.regionBavaria}</span>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-gray-400 text-xs">{t.contactPage.regionNRW}</span>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-gray-400 text-xs">{t.contactPage.regionBW}</span>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-gray-400 text-xs">{t.contactPage.regionBerlin}</span>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-gray-400 text-xs">{t.contactPage.regionHamburg}</span>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-gray-400 text-xs">{t.contactPage.regionAll}</span>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="p-6 rounded-xl bg-card/30 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">{t.contactPage.mapTitle}</h3>
                <div className="rounded-lg bg-white/5 overflow-hidden" style={{ height: "280px" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.5!2d11.2546!3d48.1789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDEwJzQ0LjAiTiAxMcKwMTUnMTYuNiJF!5e0!3m2!1sde!2sde!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ExtruCon GmbH Standort"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold text-white mb-6 text-center">{t.contactPage.faqTitle}</h2>
            <div className="max-w-2xl mx-auto grid md:grid-cols-3 gap-4">
              {t.contactPage.faqs.map((faq, i) => (
                <div key={i} className="p-4 rounded-xl bg-card/30 border border-white/5 text-center">
                  <p className="font-medium text-white text-sm mb-1">{faq.q}</p>
                  <p className="text-gray-400 text-xs">{faq.a}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <a href="/faq" className="text-primary text-sm hover:underline">
                {t.contactPage.viewAllFaqs}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
