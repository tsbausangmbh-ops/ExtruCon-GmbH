import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Share2, Globe, PenTool } from "lucide-react";
import aiImg from "@assets/generated_images/glowing_neural_network_brain.png";
import socialImg from "@assets/generated_images/digital_social_connection_abstract_art.png";
import webImg from "@assets/generated_images/holographic_creative_interface.png";
import { motion } from "framer-motion";

const services = [
  {
    title: "AI & Automation",
    description: "Custom AI bots and intelligent automation workflows to streamline your operations 24/7.",
    icon: Bot,
    image: aiImg,
    color: "text-cyan-400"
  },
  {
    title: "Social Media Marketing",
    description: "Data-driven strategies to grow your audience and engage customers across all platforms.",
    icon: Share2,
    image: socialImg,
    color: "text-purple-400"
  },
  {
    title: "Web & Digital Platforms",
    description: "High-performance, visually stunning websites and web apps built for the modern web.",
    icon: Globe,
    image: webImg,
    color: "text-blue-400"
  },
  {
    title: "Content Creation",
    description: "Compelling storytelling and visual content that resonates with your target market.",
    icon: PenTool,
    image: null, // Using a gradient fallback if no image
    color: "text-pink-400"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">Our Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital solutions powered by innovation and creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass-card border-none overflow-hidden group hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  {service.image ? (
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-purple-900 to-pink-900 flex items-center justify-center">
                      <service.icon className="w-16 h-16 text-white/20" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4">
                    <service.icon className={`w-8 h-8 ${service.color} drop-shadow-lg`} />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-white font-display tracking-wide">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
