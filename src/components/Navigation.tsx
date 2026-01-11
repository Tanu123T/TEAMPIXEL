import { motion, useScroll, useTransform } from 'framer-motion';
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md ${scrolled ? 'border-b border-[#E6ECF4] shadow-sm' : ''
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={() => scrollToSection('top')}
              className="flex items-center gap-3 group relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-10 h-10 flex items-center justify-center overflow-hidden">
                <img
                  src={baseUrl + 'logo.png'}
                  alt="TEAM PIXELL Logo"
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                />
              </div>
              <div className="flex flex-col items-start text-left">
                <span className="text-xl font-bold tracking-tight text-[#0F2A44]">
                  TEAM PIXELL
                </span>
                <span className="text-xs text-[#475569]">Digital Excellence</span>
              </div>
            </motion.button>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all relative ${activeSection === item.id
                    ? 'text-[#0F2A44] bg-[#0F2A44]/5'
                    : 'text-[#475569] hover:text-[#0F2A44] hover:bg-[#0F2A44]/5'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Button
                onClick={() => scrollToSection('contact')}
                className="hidden md:flex bg-[#0F2A44] hover:bg-[#1E3A8A] text-white gap-2"
                size="sm"
              >
                Get Started
                <ChevronDown className="size-3" />
              </Button>

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-[#0F2A44]/5 border border-[#E6ECF4] hover:bg-[#0F2A44]/10 transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="size-5 text-[#0F2A44]" />
                ) : (
                  <Menu className="size-5 text-[#0F2A44]" />
                )}
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
        className="fixed top-[73px] left-0 right-0 z-40 lg:hidden"
      >
        <div className="bg-white/98 backdrop-blur-xl border-b border-[#E6ECF4] shadow-xl">
          <div className="max-w-7xl mx-auto px-6 py-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-3 px-4 rounded-lg font-medium transition-all ${activeSection === item.id
                  ? 'bg-[#0F2A44]/10 text-[#0F2A44]'
                  : 'bg-transparent text-[#475569] hover:bg-[#0F2A44]/5'
                  }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2">
              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-[#0F2A44] hover:bg-[#1E3A8A] text-white"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
