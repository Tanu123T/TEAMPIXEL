import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6 py-32 relative overflow-hidden bg-white">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full h-full text-[#0F2A44]">
          <path fill="currentColor" d="M0 400L400 0H0V400Z" />
        </svg>
      </div>
      
      <motion.div 
        style={{ opacity }}
        className="max-w-7xl w-full relative z-30 grid lg:grid-cols-2 gap-12 items-center"
      >
        <motion.div
          initial={{ opacity: 1, y: 12 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#0F2A44]">
            Where Strategy Meets Sophistication.
          </h1>
          
          <p className="text-xl text-[#1E293B] max-w-xl">
            TEAM PIXELL partners with ambitious brands to deliver refined digital experiences, 
            performance-driven growth, and measurable impact.
          </p>
          
          <div className="pt-4 flex gap-4">
            <Button 
              size="lg" 
              className="bg-[#0F2A44] hover:bg-[#1E3A8A] text-white rounded-md px-8 py-6 text-lg transition-colors"
              onClick={() => window.open('https://wa.me/919370718105', '_blank')}
            >
              Start a Conversation
              <ArrowRight className="ml-2 size-5" />
            </Button>
          </div>
        </motion.div>

        {/* Hero Illustration */}
        <div className="hidden lg:block relative">
          <motion.div
            initial={{ opacity: 1, scale: 0.95 }}
            animate={{ scale: 1 }}
            className="w-full aspect-square bg-[#0F2A44]/5 rounded-3xl border border-[#E6ECF4] p-8 flex items-center justify-center"
          >
            <svg viewBox="0 0 200 200" className="w-full h-full text-[#0F2A44]">
              <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
              <rect x="60" y="60" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M40 40L160 160M160 40L40 160" stroke="currentColor" strokeWidth="1" opacity="0.3" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
