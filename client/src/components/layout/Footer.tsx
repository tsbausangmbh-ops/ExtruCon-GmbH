import { Cpu, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold font-display tracking-wider text-white">
                EXTRUCON
              </span>
            </div>
            <p className="text-gray-400 max-w-sm">
              Empowering businesses with next-generation AI, marketing, and digital solutions. 
              We build the future today.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">AI & Bots</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Content Creation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Linkedin /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Extrucon GmbH. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Imprint</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
