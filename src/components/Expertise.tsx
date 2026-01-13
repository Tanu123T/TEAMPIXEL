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
    color: 'bg-[#0F2A44]', // Deep Navy
    border: 'border-[#0F2A44]/10'
  },
  {
    icon: Search,
    title: 'Google Advertising',
    description: 'High-intent search and performance strategies capturing demand at the moment it matters most.',
    color: 'bg-[#1E3A8A]', // Royal Navy
    border: 'border-[#1E3A8A]/10'
  },
  {
    icon: Code2,
    title: 'Development & Support',
    description: 'Architected digital platforms built for speed, stability, and seamless user experience.',
    color: 'bg-[#0F172A]', // Dark Navy
    border: 'border-[#0F172A]/10'
  },
  {
    icon: TrendingUp,
    title: 'Strategic SEO',
    description: 'A disciplined approach to organic growth through strategic search visibility and authority.',
    color: 'bg-[#1E40AF]', // Blue 800
    border: 'border-[#1E40AF]/10'
  },
  {
    icon: ShoppingCart,
    title: 'Marketplace Ads',
    description: 'Precision-led marketplace strategies that enhance discoverability and profitability.',
    note: 'Quick-commerce & E-commerce',
    color: 'bg-[#172554]', // Darker Royal
    border: 'border-[#172554]/10'
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Refined visual language that communicates trust, quality, and brand distinction.',
    color: 'bg-[#334155]', // Slate Navy
    border: 'border-[#334155]/10'
  }
];

export function Expertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 sm:py-28 md:py-36 px-4 sm:px-6 relative interactive-bg overflow-hidden">
      {/* Enhanced Abstract Design Elements */}
      <div className="absolute top-[-15%] right-[-8%] w-[45%] h-[70%] bg-[#0F2A44]/10 rounded-full blur-[180px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[-15%] left-[-8%] w-[35%] h-[55%] bg-[#1E3A8A]/10 rounded-full blur-[150px] pointer-events-none animate-pulse" style={{ animationDelay: '3s' }} />
      <div className="absolute top-[40%] left-[50%] w-[25%] h-[35%] bg-[#172554]/8 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: '6s' }} />
      
      {/* Floating Particles */}
      <div className="floating-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-30">
        <div className="space-y-20 sm:space-y-28">
          <div className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-luxury border border-[#0F2A44]/10 text-[#0F2A44] text-sm font-semibold shadow-lg magnetic"
            >
              <span>Capabilities</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0F2A44] tracking-tight leading-tight text-reveal"
            >
              Driven by <span className="text-gradient-navy font-black italic">Precision.</span>
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="premium-card p-10 rounded-[3rem] relative group overflow-hidden min-h-[400px] flex flex-col justify-between"
                >
                  <div className="space-y-8">
                    <div className={`size-18 rounded-3xl ${service.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl shadow-black/15 magnetic`}>
                      <Icon className="size-9 text-white" />
                    </div>
                    
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-[#0F2A44] tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                        {service.title}
                      </h3>
                      {service.note && (
                        <span className="inline-block px-4 py-2 rounded-full glass-luxury text-xs font-black text-[#475569] uppercase tracking-widest border border-[#0F2A44]/10 shadow-sm">
                          {service.note}
                        </span>
                      )}
                      <p className="text-[#475569] leading-relaxed text-lg font-medium">
                        {service.description}
                      </p>
                    </div>
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
