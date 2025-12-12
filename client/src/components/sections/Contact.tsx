import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background/50 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
              Ready to <span className="text-gradient">Innovate?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Let's discuss how Extrucon GmbH can transform your digital presence. 
              Reach out to us for a consultation.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Us</p>
                  <p className="font-medium">contact@extrucon.de</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call Us</p>
                  <p className="font-medium">+49 (0) 123 456 789</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <MapPin className="w-5 h-5 text-pink-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Visit Us</p>
                  <p className="font-medium">Tech Park 1, Berlin, Germany</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="glass-card p-8 border-white/10">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">First Name</label>
                  <Input placeholder="John" className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-primary/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Last Name</label>
                  <Input placeholder="Doe" className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-primary/50" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Email</label>
                <Input type="email" placeholder="john@company.com" className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-primary/50" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Message</label>
                <Textarea placeholder="Tell us about your project..." className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-primary/50 min-h-[120px]" />
              </div>

              <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold h-12">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
