import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShieldCheck, Trophy } from 'lucide-react';

const partners = ['Google', 'Meta', 'AWS'];

export function TrustSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-6 bg-white border-y border-[#E6ECF4]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="space-y-6"
          >
            <div className="flex items-center gap-2 text-sm font-bold text-[#0F2A44] uppercase tracking-wider">
              <ShieldCheck className="size-4" />
              Certified Partners
            </div>
            <div className="flex flex-wrap gap-4">
              {partners.map((partner) => (
                <div 
                  key={partner} 
                  className="px-8 py-4 bg-slate-50 border border-[#E6ECF4] rounded-2xl text-lg font-black text-[#0F2A44] shadow-sm hover:border-[#0F2A44] transition-colors"
                >
                  {partner}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2 text-sm font-bold text-[#0F2A44] uppercase tracking-wider">
              <Trophy className="size-4" />
              Industry Recognition
            </div>
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-[#0F2A44] text-white rounded-2xl shadow-xl shadow-[#0F2A44]/20 hover:scale-105 transition-transform cursor-default">
              <span className="text-lg font-bold">Top 1% Digital Agencies 2025</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
