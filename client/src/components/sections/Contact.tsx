import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Mail, Globe, Phone, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

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
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
              Bereit für <span className="text-gradient">Innovation?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Lassen Sie uns besprechen, wie die ExtruCon GmbH Ihre digitale Präsenz verändern kann. 
              Kontaktieren Sie uns für ein Beratungsgespräch.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">E-Mail</p>
                  <a href="mailto:info@extrucon.de" className="font-medium hover:text-primary transition-colors">info@extrucon.de</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Anrufen</p>
                  <a href="tel:+4989444438879" className="font-medium hover:text-primary transition-colors">089 444438879</a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Globe className="w-5 h-5 text-pink-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Webpage</p>
                  <a href="https://extrucon.de" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary transition-colors">https://extrucon.de</a>
                </div>
              </div>
            </div>
          </div>

          <Card className="glass-card p-8 border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Nachricht senden</h3>
            
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Vielen Dank!</h3>
                <p className="text-gray-400">
                  Ihre Nachricht wurde gesendet. Wir melden uns schnellstmöglich bei Ihnen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="home-name" className="text-gray-300">Name *</Label>
                    <Input 
                      id="home-name" 
                      placeholder="Ihr Name" 
                      required
                      className="bg-white/5 border-white/10 text-white mt-1 placeholder:text-gray-600"
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="home-company" className="text-gray-300">Unternehmen</Label>
                    <Input 
                      id="home-company" 
                      placeholder="Firma (optional)"
                      className="bg-white/5 border-white/10 text-white mt-1 placeholder:text-gray-600"
                      data-testid="input-company"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="home-email" className="text-gray-300">E-Mail *</Label>
                    <Input 
                      id="home-email" 
                      type="email" 
                      placeholder="ihre@email.de" 
                      required
                      className="bg-white/5 border-white/10 text-white mt-1 placeholder:text-gray-600"
                      data-testid="input-email"
                    />
                  </div>
                  <div>
                    <Label htmlFor="home-phone" className="text-gray-300">Telefon</Label>
                    <Input 
                      id="home-phone" 
                      type="tel" 
                      placeholder="+49 ..."
                      className="bg-white/5 border-white/10 text-white mt-1 placeholder:text-gray-600"
                      data-testid="input-phone"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="home-service" className="text-gray-300">Interesse an</Label>
                  <select 
                    id="home-service"
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
                  <Label htmlFor="home-message" className="text-gray-300">Nachricht *</Label>
                  <Textarea 
                    id="home-message" 
                    placeholder="Wie können wir Ihnen helfen?" 
                    rows={4}
                    required
                    className="bg-white/5 border-white/10 text-white mt-1 resize-none placeholder:text-gray-600"
                    data-testid="textarea-message"
                  />
                </div>

                <p className="text-xs text-gray-500">
                  Mit dem Absenden stimmen Sie unserer <a href="/privacy" className="text-primary hover:underline">Datenschutzerklärung</a> zu.
                </p>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold h-12"
                  data-testid="button-submit-contact"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Nachricht senden
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
