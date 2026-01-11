import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Facebook,
  Search, 
  Code2, 
  TrendingUp, 
  ShoppingCart, 
  Palette, 
  Video 
} from 'lucide-react';

const services = [
  {
    icon: Facebook,
    title: 'Meta Advertising',
    description: 'Elegantly engineered Facebook and Instagram campaigns designed to convert attention into sustained revenue.',
  },
  {
    icon: Search,
    title: 'Google Advertising',
    description: 'High-intent search and performance strategies capturing demand at the moment it matters most.',
  },
  {
    icon: Code2,
    title: 'Website & App Development & Support',
    description: 'Architected digital platforms built for speed, stability, and seamless user experience — supported with ongoing technical care.',
  },
  {
    icon: TrendingUp,
    title: 'Search Engine Optimization',
    description: 'A disciplined, long-term approach to organic growth through strategic search visibility and authority building.',
  },
  {
    icon: ShoppingCart,
    title: 'Marketplace Advertising',
    description: 'Precision-led marketplace strategies that enhance discoverability, conversions, and profitability.',
    note: 'Quick-commerce & E-commerce',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Refined visual language that communicates trust, quality, and brand distinction across digital touchpoints.',
  },
  {
    icon: Video,
    title: 'Video Editing',
    description: 'Cinematic, performance-oriented video edits crafted for ads, products, and modern storytelling.',
  },
];

export function Expertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 relative bg-white">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="space-y-16">
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A44]">
              Capabilities That Drive Results
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  whileHover={{ scale: 1.03 }}
                  className="p-8 bg-white border border-[#E6ECF4] rounded-2xl hover-card-navy group transition-all"
                >
                  <Icon className="size-10 text-[#0F2A44] mb-6" />
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-[#0F2A44]">
                      {service.title}
                    </h3>
                    {service.note && (
                      <div className="text-xs text-[#475569] font-medium">
                        ({service.note})
                      </div>
                    )}
                    <p className="text-[#1E293B] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
