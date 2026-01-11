import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Facebook,
  Search, 
  Code2, 
  TrendingUp, 
  ShoppingCart, 
  Palette
} from 'lucide-react';

const services = [
  {
    icon: Facebook,
    title: 'Meta Advertising',
    description: 'Elegantly engineered Facebook and Instagram campaigns designed to convert attention into sustained revenue.',
    accent: 'bg-blue-50'
  },
  {
    icon: Search,
    title: 'Google Advertising',
    description: 'High-intent search and performance strategies capturing demand at the moment it matters most.',
    accent: 'bg-slate-50'
  },
  {
    icon: Code2,
    title: 'Development & Support',
    description: 'Architected digital platforms built for speed, stability, and seamless user experience.',
    accent: 'bg-indigo-50'
  },
  {
    icon: TrendingUp,
    title: 'Strategic SEO',
    description: 'A disciplined approach to organic growth through strategic search visibility and authority.',
    accent: 'bg-cyan-50'
  },
  {
    icon: ShoppingCart,
    title: 'Marketplace Ads',
    description: 'Precision-led marketplace strategies that enhance discoverability and profitability.',
    note: 'Quick-commerce & E-commerce',
    accent: 'bg-blue-50'
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Refined visual language that communicates trust, quality, and brand distinction.',
    accent: 'bg-slate-50'
  }
];

export function Expertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 relative bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E6ECF4] to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="space-y-20">
          <div className="text-center space-y-4">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-sm font-bold tracking-[0.2em] text-[#0F2A44] uppercase"
            >
              Capabilities
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-[#0F2A44] tracking-tight"
            >
              Driven by <span className="text-gradient-navy">Precision.</span>
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="p-10 bg-white border border-[#E6ECF4] rounded-[2rem] hover:border-[#0F2A44] transition-all duration-500 hover:shadow-2xl hover:shadow-[#0F2A44]/5 group"
                >
                  <div className={`size-16 rounded-2xl ${service.accent} flex items-center justify-center mb-8 group-hover:bg-[#0F2A44] transition-colors duration-500`}>
                    <Icon className="size-8 text-[#0F2A44] group-hover:text-white transition-colors duration-500" />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-[#0F2A44] tracking-tight">
                      {service.title}
                    </h3>
                    {service.note && (
                      <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-[10px] font-bold text-[#475569] uppercase tracking-wider">
                        {service.note}
                      </span>
                    )}
                    <p className="text-[#475569] leading-relaxed text-lg">
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
