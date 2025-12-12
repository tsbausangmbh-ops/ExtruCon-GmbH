import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Globe, Phone, Bot, Sparkles } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  return (
    <section id="contact" className="py-8 bg-background/50 relative overflow-hidden">
      {/* Decorative glow */}
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
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Vorname</label>
                  <Input placeholder="Max" className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-primary/50" data-testid="input-firstname" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Nachname</label>
                  <Input placeholder="Mustermann" className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-primary/50" data-testid="input-lastname" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">E-Mail</label>
                <Input type="email" placeholder="max@firma.de" className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-primary/50" data-testid="input-email" />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-400">Interesse an</label>
                <div className="grid grid-cols-1 gap-3">
                  <label 
                    className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                      selectedServices.includes('ki-agenten') 
                        ? 'bg-primary/10 border-primary/50' 
                        : 'bg-white/5 border-white/10 hover:border-white/20'
                    }`}
                    data-testid="checkbox-ki-agenten"
                  >
                    <Checkbox 
                      checked={selectedServices.includes('ki-agenten')}
                      onCheckedChange={() => toggleService('ki-agenten')}
                      className="border-white/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    />
                    <Bot className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-white font-medium">KI-Agenten</p>
                      <p className="text-xs text-gray-500">Chatbots, Automatisierung, Kundenservice</p>
                    </div>
                  </label>
                  
                  <label 
                    className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                      selectedServices.includes('webseiten-ki') 
                        ? 'bg-secondary/10 border-secondary/50' 
                        : 'bg-white/5 border-white/10 hover:border-white/20'
                    }`}
                    data-testid="checkbox-webseiten-ki"
                  >
                    <Checkbox 
                      checked={selectedServices.includes('webseiten-ki')}
                      onCheckedChange={() => toggleService('webseiten-ki')}
                      className="border-white/30 data-[state=checked]:bg-secondary data-[state=checked]:border-secondary"
                    />
                    <Sparkles className="w-5 h-5 text-secondary" />
                    <div>
                      <p className="text-white font-medium">Webseiten mit KI</p>
                      <p className="text-xs text-gray-500">Moderne Websites mit KI-Features</p>
                    </div>
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Nachricht</label>
                <Textarea placeholder="Erzählen Sie uns von Ihrem Projekt..." className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-primary/50 min-h-[100px]" data-testid="input-message" />
              </div>

              <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold h-12" data-testid="button-submit-contact">
                Nachricht senden
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
