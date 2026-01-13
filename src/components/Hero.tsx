import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Star, TrendingUp, Target, Users, Award } from 'lucide-react';
import { Button } from './ui/button';
import { useRef, useState, useEffect } from 'react';

function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay]);

  return (
    <span>
      {displayText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </span>
  );
}

// Using PNG images from public folder
const heroImages = [
  "/hero-images/image1.png",
  "/hero-images/image2.png",
  "/hero-images/image3.png"
];

export function Hero() {
  const ref = useRef(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [images, setImages] = useState<string[]>([]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    // Set the image paths directly
    setImages(heroImages);

    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  const expertiseItems = [
    { label: 'Meta Ads', icon: Zap },
    { label: 'Google Ads', icon: Sparkles },
    { label: 'SEO', icon: Star },
    { label: 'Marketplace Ads', icon: Zap }
  ];
  
  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-24 md:py-32 relative overflow-hidden interactive-bg">
      {/* Enhanced Dynamic Background Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-[#0F2A44]/8 rounded-full blur-[150px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[50%] bg-[#1E3A8A]/8 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[50%] left-[50%] w-[20%] h-[30%] bg-[#172554]/5 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDelay: '4s' }} />
      
      {/* Floating Particles */}
      <div className="floating-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      
      {/* Enhanced Floating Icons */}
      <motion.div
        className="hidden sm:block absolute top-20 left-20 text-[#0F2A44]/25 magnetic"
        animate={{ y: [0, -15, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.2, rotate: 12 }}
      >
        <TrendingUp size={52} />
      </motion.div>
      <motion.div
        className="hidden md:block absolute top-40 right-32 text-[#0F2A44]/20 magnetic"
        animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        whileHover={{ scale: 1.15, rotate: -10 }}
      >
        <Target size={44} />
      </motion.div>
      <motion.div
        className="hidden sm:block absolute bottom-32 left-16 text-[#0F2A44]/25 magnetic"
        animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        whileHover={{ scale: 1.1, rotate: 8 }}
      >
        <Users size={48} />
      </motion.div>
      <motion.div
        className="hidden md:block absolute bottom-20 right-20 text-[#0F2A44]/20 magnetic"
        animate={{ y: [0, 18, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        whileHover={{ scale: 1.2, rotate: -12 }}
      >
        <Award size={46} />
      </motion.div>
      
      <motion.div 
        style={{ opacity, y }}
        className="max-w-7xl w-full relative z-30 grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center"
      >
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-luxury border border-[#0F2A44]/10 text-[#0F2A44] text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 magnetic"
          >
            <Sparkles className="size-5 animate-pulse text-[#1E3A8A]" />
            <span>Premium Digital Solutions</span>
          </motion.div>

          <div className="space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#0F2A44] leading-[1.2] xl:leading-[1.1]"
            >
              <span>
                <TypewriterText text="Where Strategy" delay={500} />
              </span>
              <br />
              <span className="text-gradient-navy font-black italic">
                <TypewriterText text="Meets Sophistication." delay={1500} />
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-[#475569] max-w-xl leading-relaxed font-medium"
            >
              TEAM PIXELL partners with ambitious brands to deliver refined digital experiences, performance-driven growth, and measurable impact.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            {expertiseItems.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-5 py-3 rounded-2xl glass-luxury border border-[#0F2A44]/8 text-[#0F2A44] text-sm font-bold flex items-center gap-3 shadow-md hover:shadow-lg transition-all duration-300 magnetic"
              >
                <item.icon className="size-4 text-[#1E3A8A]" />
                {item.label}
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-10 pt-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="luxury-button bg-[#0F2A44] hover:bg-[#1E3A8A] text-white rounded-2xl px-12 py-8 text-lg font-bold shadow-2xl shadow-[#0F2A44]/20 transition-all duration-300 group"
                onClick={() => window.open('https://wa.me/919370718105', '_blank')}
              >
                Start a Conversation
                <ArrowRight className="ml-3 size-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </motion.div>
            
            <div className="flex items-center gap-10">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col text-center"
              >
                <span className="text-3xl font-black text-[#0F2A44]">50+</span>
                <span className="text-xs font-bold text-[#475569] uppercase tracking-wider">Happy Clients</span>
              </motion.div>
              <div className="w-px h-12 bg-gradient-to-b from-[#0F2A44]/20 to-transparent" />
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col text-center"
              >
                <div className="flex items-center gap-2 justify-center">
                  <span className="text-3xl font-black text-[#0F2A44]">4.9</span>
                  <Star className="size-5 fill-amber-400 text-amber-400 animate-pulse" />
                </div>
                <span className="text-xs font-bold text-[#475569] uppercase tracking-wider">Rating</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F2A44]/20 to-[#1E3A8A]/20 rounded-[3rem] rotate-6 -z-10 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-[#0F2A44] rounded-[3rem] rotate-3 -z-10 opacity-10 group-hover:opacity-15 transition-opacity duration-500" />
          
          <div className="premium-card p-6 rounded-[3rem] shadow-2xl border border-[#0F2A44]/10 relative overflow-hidden group min-h-[550px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F2A44]/5 via-transparent to-[#1E3A8A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0F2A44] to-[#1E3A8A] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="w-full h-full relative aspect-square bg-gradient-to-br from-slate-50 to-white rounded-[2.5rem] flex items-center justify-center overflow-hidden shadow-inner border border-[#0F2A44]/5">
              <AnimatePresence mode="wait">
                {images[imageIndex] ? (
                  <motion.img
                    key={imageIndex}
                    src={images[imageIndex]}
                    initial={{ opacity: 0, scale: 1.1, rotate: 2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.95, rotate: -2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center text-[#0F2A44]/30"
                  >
                    <svg viewBox="0 0 200 200" className="w-32 h-32 animate-float">
                      <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="8 8" />
                      <path d="M50 100 Q100 30 150 100 T250 170" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <rect x="75" y="75" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="2" />
                      <circle cx="85" cy="85" r="3" fill="currentColor" />
                      <circle cx="115" cy="85" r="3" fill="currentColor" />
                      <path d="M85 105 Q100 115 115 105" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <div className="mt-4 loading-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          
          {/* Enhanced Floating Metric Card */}
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-8 -left-8 premium-card p-6 rounded-3xl shadow-2xl border border-[#0F2A44]/10 flex items-center gap-4 z-40 group hover:scale-105 transition-transform duration-300"
          >
            <div className="size-14 rounded-2xl bg-gradient-to-br from-[#0F2A44] to-[#1E3A8A] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <Zap className="size-7 text-white" />
            </div>
            <div>
              <div className="text-3xl font-black text-[#0F2A44]">250%</div>
              <div className="text-sm text-[#475569] font-semibold uppercase tracking-wider">Avg. ROI Gained</div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
