import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Mail, Globe, Phone, Send, CheckCircle, Calendar, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { Link } from "wouter";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-8 bg-background/50 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold font-display text-white mb-4">
              {t.contact.title} <span className="text-gradient">{t.contact.titleHighlight}</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              {t.contact.subtitle}
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{t.contact.email}</p>
                  <a href="mailto:info@extrucon.de" className="font-medium hover:text-primary transition-colors">info@extrucon.de</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{t.contact.phone}</p>
                  <a href="tel:+4989444438879" className="font-medium hover:text-primary transition-colors">089 444438879</a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Globe className="w-5 h-5 text-pink-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{t.contact.webpage}</p>
                  <a href="https://extrucon.de" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary transition-colors">https://extrucon.de</a>
                </div>
              </div>
            </div>

            {/* Booking CTA */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-white">{t.contactPage.bookingCta.title}</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">{t.contactPage.bookingCta.subtitle}</p>
              <Link href="/termin">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-background font-bold"
                  data-testid="button-book-appointment-home"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  {t.contactPage.bookingCta.button}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          <Card className="glass-card p-8 border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">{t.contact.formTitle}</h3>
            
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{t.contact.thankYou}</h3>
                <p className="text-gray-400">
                  {t.contact.thankYouMessage}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="home-name" className="text-gray-300">{t.contact.name} *</Label>
                    <Input 
                      id="home-name" 
                      placeholder={t.contact.namePlaceholder}
                      required
                      className="bg-white/5 border-white/10 text-white mt-1 placeholder:text-gray-600"
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="home-company" className="text-gray-300">{t.contact.company}</Label>
                    <Input 
                      id="home-company" 
                      placeholder={t.contact.companyPlaceholder}
                      className="bg-white/5 border-white/10 text-white mt-1 placeholder:text-gray-600"
                      data-testid="input-company"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="home-email" className="text-gray-300">{t.contact.emailLabel} *</Label>
                    <Input 
                      id="home-email" 
                      type="email" 
                      placeholder={t.contact.emailPlaceholder}
                      required
                      className="bg-white/5 border-white/10 text-white mt-1 placeholder:text-gray-600"
                      data-testid="input-email"
                    />
                  </div>
                  <div>
                    <Label htmlFor="home-phone" className="text-gray-300">{t.contact.phone}</Label>
                    <Input 
                      id="home-phone" 
                      type="tel" 
                      placeholder={t.contact.phonePlaceholder}
                      className="bg-white/5 border-white/10 text-white mt-1 placeholder:text-gray-600"
                      data-testid="input-phone"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="home-service" className="text-gray-300">{t.contact.interest}</Label>
                  <select 
                    id="home-service"
                    className="w-full mt-1 px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white"
                    data-testid="select-service"
                  >
                    <option value="" className="bg-gray-900">{t.contact.selectPlaceholder}</option>
                    <option value="ki" className="bg-gray-900">{t.contact.kiAutomation}</option>
                    <option value="social" className="bg-gray-900">{t.contact.socialMediaMarketing}</option>
                    <option value="web" className="bg-gray-900">{t.contact.webDevelopment}</option>
                    <option value="marketing" className="bg-gray-900">{t.contact.performanceMarketing}</option>
                    <option value="content" className="bg-gray-900">{t.contact.contentCreation}</option>
                    <option value="brand" className="bg-gray-900">{t.contact.brandBuilding}</option>
                    <option value="other" className="bg-gray-900">{t.contact.other}</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="home-message" className="text-gray-300">{t.contact.message} *</Label>
                  <Textarea 
                    id="home-message" 
                    placeholder={t.contact.messagePlaceholder}
                    rows={4}
                    required
                    className="bg-white/5 border-white/10 text-white mt-1 resize-none placeholder:text-gray-600"
                    data-testid="textarea-message"
                  />
                </div>

                <p className="text-xs text-gray-500">
                  {t.contact.privacyText} <a href="/privacy" className="text-primary hover:underline">{t.contact.privacyLink}</a> {t.contact.privacyEnd}
                </p>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold h-12"
                  data-testid="button-submit-contact"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {t.contact.submit}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
