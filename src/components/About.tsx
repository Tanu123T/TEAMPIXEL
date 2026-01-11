import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, TrendingUp, Award, Users } from 'lucide-react';

const stats = [
  { icon: Target, value: '200+', label: 'Projects Delivered' },
  { icon: TrendingUp, value: '250%', label: 'Average ROI' },
  { icon: Award, value: '₹6 Crore+', label: 'Monthly Ad Budget' },
  { icon: Users, value: '50+', label: 'Happy Clients' },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 1, y: 12 }}
            animate={isInView ? { y: 0 } : {}}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A44]">
              TEAM PIXELL is a boutique digital agency built for brands that value precision, clarity, and results.
            </h2>
            
            <div className="space-y-6 text-lg text-[#1E293B]">
              <p>
                We operate at the intersection of performance marketing, 
                technology, and creative excellence, crafting digital systems that scale businesses 
                while elevating brand perception.
              </p>
              
              <p>
                Every decision we make is intentional. Every execution is measured.
              </p>
            </div>
          </motion.div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.03 }}
                    className="p-8 bg-white border border-[#E6ECF4] rounded-2xl hover-card-navy transition-all"
                  >
                    <Icon className="size-8 text-[#0F2A44] mb-4" />
                    <div className="text-3xl font-bold text-[#0F2A44] mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-[#475569]">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
