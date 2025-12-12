import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
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
                Deutschlandweit für Sie da
              </span>
              <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
                Kontakt aufnehmen
              </h1>
              <p className="text-lg text-gray-400">
                Haben Sie Fragen oder möchten Sie ein Projekt besprechen? 
                Wir freuen uns auf Ihre Nachricht und melden uns innerhalb von 24 Stunden.
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
                  <h2 className="text-2xl font-bold text-white mb-6">Nachricht senden</h2>
                  
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">Vielen Dank!</h3>
                      <p className="text-gray-400">
                        Ihre Nachricht wurde gesendet. Wir melden uns schnellstmöglich bei Ihnen.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="text-gray-300">Name *</Label>
                          <Input 
                            id="name" 
                            placeholder="Ihr Name" 
                            required
                            className="bg-white/5 border-white/10 text-white mt-1"
                            data-testid="input-name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="company" className="text-gray-300">Unternehmen</Label>
                          <Input 
                            id="company" 
                            placeholder="Firma (optional)"
                            className="bg-white/5 border-white/10 text-white mt-1"
                            data-testid="input-company"
                          />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email" className="text-gray-300">E-Mail *</Label>
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="ihre@email.de" 
                            required
                            className="bg-white/5 border-white/10 text-white mt-1"
                            data-testid="input-email"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-gray-300">Telefon</Label>
                          <Input 
                            id="phone" 
                            type="tel" 
                            placeholder="+49 ..."
                            className="bg-white/5 border-white/10 text-white mt-1"
                            data-testid="input-phone"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="service" className="text-gray-300">Interesse an</Label>
                        <select 
                          id="service"
                          className="w-full mt-1 px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white"
                          data-testid="select-service"
                        >
                          <option value="" className="bg-gray-900">Bitte wählen...</option>
                          <option value="ki" className="bg-gray-900">KI & Automatisierung</option>
                          <option value="social" className="bg-gray-900">Social Media Marketing</option>
                          <option value="web" className="bg-gray-900">Webentwicklung</option>
                          <option value="marketing" className="bg-gray-900">Performance Marketing</option>
                          <option value="content" className="bg-gray-900">Content Creation</option>
                          <option value="brand" className="bg-gray-900">Markenaufbau</option>
                          <option value="other" className="bg-gray-900">Sonstiges</option>
                        </select>
                      </div>
                      
                      <div>
                        <Label htmlFor="message" className="text-gray-300">Nachricht *</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Wie können wir Ihnen helfen?" 
                          rows={5}
                          required
                          className="bg-white/5 border-white/10 text-white mt-1 resize-none"
                          data-testid="textarea-message"
                        />
                      </div>

                      <p className="text-xs text-gray-500">
                        Mit dem Absenden stimmen Sie unserer <a href="/privacy" className="text-primary hover:underline">Datenschutzerklärung</a> zu.
                      </p>
                      
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-primary hover:bg-primary/90 text-background font-bold"
                        data-testid="button-submit-contact"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Nachricht senden
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
                  <h2 className="text-2xl font-bold text-white mb-6">Kontaktdaten</h2>
                  
                  <div className="p-5 rounded-xl bg-card/30 border border-white/10 flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/20">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Adresse</h3>
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
                      <h3 className="font-bold text-white mb-1">E-Mail</h3>
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
                      <h3 className="font-bold text-white mb-1">Telefon</h3>
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
                      <h3 className="font-bold text-white mb-1">Erreichbarkeit</h3>
                      <p className="text-gray-400">
                        Mo – Fr: 08:00 – 17:00 Uhr<br />
                        <span className="text-sm">Termine nach Vereinbarung</span>
                      </p>
                    </div>
                  </div>

                  {/* Map and FAQ side by side */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Map */}
                    <div className="p-5 rounded-xl bg-card/30 border border-white/10">
                      <h3 className="font-bold text-white mb-3">Standort</h3>
                      <div className="aspect-video rounded-lg bg-white/5 flex items-center justify-center overflow-hidden">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.5!2d11.2546!3d48.1789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDEwJzQ0LjAiTiAxMcKwMTUnMTYuNiJF!5e0!3m2!1sde!2sde!4v1234567890"
                          width="100%"
                          height="100%"
                          style={{ border: 0, minHeight: "180px" }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="ExtruCon GmbH Standort"
                        />
                      </div>
                      <p className="text-sm text-gray-500 mt-2">
                        Deutschlandweiter Service
                      </p>
                    </div>

                    {/* FAQ */}
                    <div className="p-5 rounded-xl bg-card/30 border border-white/10">
                      <h3 className="font-bold text-white mb-3">Häufige Fragen</h3>
                      <div className="space-y-3">
                        {[
                          { q: "Wie schnell erhalte ich eine Antwort?", a: "Innerhalb von 24 Stunden an Werktagen." },
                          { q: "Kostenlose Erstgespräche?", a: "Ja! Immer kostenlos und unverbindlich." },
                          { q: "Auch für kleine Unternehmen?", a: "Absolut. Lösungen für jedes Budget." }
                        ].map((faq, i) => (
                          <div key={i} className="text-sm">
                            <p className="font-medium text-white">{faq.q}</p>
                            <p className="text-gray-400">{faq.a}</p>
                          </div>
                        ))}
                        <a href="/faq" className="text-primary text-sm hover:underline inline-block mt-2">
                          → Alle FAQs ansehen
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
