import { motion, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { smoothScrollToId } from '../utils/smoothScroll';

export function Navigation() {
  const baseUrl = (import.meta as any).env?.BASE_URL ?? '/';
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['top', 'about', 'expertise', 'process', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    smoothScrollToId(id, {
      duration: 1000,
      offset: 80,
    });
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Expertise', id: 'expertise' },
    { label: 'Process', id: 'process' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0F2A44] to-[#1E3A8A] origin-left z-[60]"
        style={{ scaleX: scrollYProgress }}
      />

      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-2xl border-b border-[#0F2A44]/10 py-4 shadow-xl shadow-[#0F2A44]/5' : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={() => scrollToSection('top')}
              className="flex items-center gap-4 group relative magnetic"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-12 h-12 flex items-center justify-center overflow-hidden rounded-2xl glass-luxury border border-[#0F2A44]/10 group-hover:shadow-lg transition-shadow">
                <img
                  src={baseUrl + 'logo.png'}
                  alt="TEAM PIXELL Logo"
                  className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col items-start text-left">
                <span className="text-2xl font-extrabold tracking-tight text-[#0F2A44] font-brand group-hover:text-[#1E3A8A] transition-colors">
                  TEAM PIXELL
                </span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#475569] group-hover:text-[#0F2A44] transition-colors">Digital Excellence</span>
              </div>
            </motion.button>

            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-6 py-3 text-sm font-semibold rounded-2xl transition-all duration-300 relative overflow-hidden group ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-[#0F2A44] to-[#1E3A8A] shadow-lg shadow-[#0F2A44]/20'
                      : 'text-[#475569] hover:text-[#0F2A44] glass-luxury border border-[#0F2A44]/5 hover:border-[#0F2A44]/20 hover:shadow-md'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{item.label}</span>
                  {activeSection !== item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0F2A44]/5 to-[#1E3A8A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </motion.button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="hidden md:flex luxury-button bg-gradient-to-r from-[#0F2A44] to-[#1E3A8A] hover:from-[#1E3A8A] hover:to-[#172554] text-white gap-3 shadow-xl shadow-[#0F2A44]/20 rounded-2xl px-8 py-6 text-sm font-bold"
                  size="sm"
                >
                  Get Started
                  <ChevronDown className="size-4 group-hover:translate-y-1 transition-transform" />
                </Button>
              </motion.div>

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-3 rounded-2xl glass-luxury border border-[#0F2A44]/10 hover:bg-[#0F2A44]/5 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <motion.div
                  animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {mobileMenuOpen ? (
                    <X className="size-6 text-[#0F2A44]" />
                  ) : (
                    <Menu className="size-6 text-[#0F2A44]" />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      <motion.div
        initial={false}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          y: mobileMenuOpen ? 0 : -20,
          pointerEvents: mobileMenuOpen ? 'auto' : 'none',
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-[85px] left-0 right-0 z-40 lg:hidden"
      >
        <div className="bg-white/95 backdrop-blur-2xl border-b border-[#0F2A44]/10 shadow-2xl shadow-[#0F2A44]/10 mx-4 rounded-3xl overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 py-8 space-y-4">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`block w-full text-left py-4 px-6 rounded-2xl font-semibold transition-all duration-300 relative overflow-hidden group ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-[#0F2A44] to-[#1E3A8A] text-white shadow-lg shadow-[#0F2A44]/20'
                    : 'bg-transparent text-[#475569] hover:text-[#0F2A44] glass-luxury border border-[#0F2A44]/5 hover:border-[#0F2A44]/20 hover:shadow-md'
                  }`}
              >
                <span className="relative z-10">{item.label}</span>
                {activeSection !== item.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0F2A44]/5 to-[#1E3A8A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="pt-4"
            >
              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full luxury-button bg-gradient-to-r from-[#0F2A44] to-[#1E3A8A] hover:from-[#1E3A8A] hover:to-[#172554] text-white rounded-2xl py-6 text-base font-bold shadow-xl shadow-[#0F2A44]/20"
              >
                Get Started
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
