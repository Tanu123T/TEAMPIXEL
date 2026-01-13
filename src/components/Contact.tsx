import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const formRef = useRef<HTMLFormElement>(null);
  const [statusMessage, setStatusMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/xpqqzdlp', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatusMessage('Message sent successfully!');
        setIsSuccess(true);
        form.reset();
      } else {
        setStatusMessage('Failed to send message. Please try again.');
        setIsSuccess(false);
      }
    } catch (error) {
      setStatusMessage('An error occurred. Please try again.');
      setIsSuccess(false);
    }
  };

  const contactInfo = [
    { 
      icon: Mail, 
      label: 'Email Us', 
      value: 'contact@teampixell.com', 
      href: 'mailto:contact@teampixell.com',
      color: 'bg-blue-50 text-blue-600'
    },
    { 
      icon: Phone, 
      label: 'Call Us', 
      value: '+91 9370718105', 
      href: 'tel:+919370718105',
      color: 'bg-indigo-50 text-indigo-600'
    },
    { 
      icon: MessageSquare, 
      label: 'WhatsApp', 
      value: 'Start a Chat', 
      href: 'https://wa.me/919370718105',
      color: 'bg-emerald-50 text-emerald-600'
    },
    { 
      icon: MapPin, 
      label: 'Location', 
      value: 'Global Digital Agency', 
      href: '#',
      color: 'bg-slate-50 text-slate-600'
    },
  ];

  return (
    <section ref={ref} id="contact" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8 sm:space-y-12"
          >
            <div className="space-y-6 sm:space-y-8">
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-[#0F2A44]/5 text-xs sm:text-sm font-bold tracking-[0.2em] text-[#0F2A44] uppercase"
              >
                Get In Touch
              </motion.span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0F2A44] leading-[1.1] tracking-tight font-brand">
                Let's Connect <br />
                <span className="text-gradient-navy italic block sm:inline">Beyond Design.</span>
              </h2>
              <p className="text-lg sm:text-xl text-[#475569] leading-relaxed max-w-lg">
                Ready to elevate your digital presence? Our team is standing by to discuss your next breakthrough project.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="p-6 glass-card rounded-2xl group transition-all hover:shadow-xl hover:shadow-[#0F2A44]/5"
                  >
                    <div className={`size-12 rounded-xl ${info.color} flex items-center justify-center mb-4 transition-transform group-hover:rotate-6`}>
                      <Icon className="size-6" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-xs font-bold text-[#475569] uppercase tracking-widest">{info.label}</div>
                      <div className="text-sm font-bold text-[#0F2A44] break-words">{info.value}</div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="premium-card p-10 sm:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-28 h-28 sm:w-36 sm:h-36 bg-gradient-to-br from-[#0F2A44]/10 to-[#1E3A8A]/10 rounded-bl-[3rem] sm:rounded-bl-[4rem]" />
            
            <form ref={formRef} className="space-y-10 relative z-10" onSubmit={handleSubmit}>
              <div className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-black uppercase tracking-widest text-[#0F2A44]/70 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="John Doe"
                      className="w-full px-8 py-5 bg-white/80 border border-[#0F2A44]/10 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#0F2A44]/20 focus:border-[#0F2A44] transition-all text-[#0F2A44] font-medium shadow-sm focus-luxury" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-black uppercase tracking-widest text-[#0F2A44]/70 ml-1">Work Email</label>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="john@company.com"
                      className="w-full px-8 py-5 bg-white/80 border border-[#0F2A44]/10 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#0F2A44]/20 focus:border-[#0F2A44] transition-all text-[#0F2A44] font-medium shadow-sm focus-luxury" 
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-sm font-black uppercase tracking-widest text-[#0F2A44]/70 ml-1">Interested In</label>
                  <select name="service" className="w-full px-8 py-5 bg-white/80 border border-[#0F2A44]/10 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#0F2A44]/20 focus:border-[#0F2A44] transition-all text-[#0F2A44] font-medium shadow-sm focus-luxury appearance-none cursor-pointer">
                    <option>Meta Ads</option>
                    <option>Google Ads</option>
                    <option>Website and app development & support</option>
                    <option>SEO</option>
                    <option>Marketplace ads (Quick-commerce & E-commerce)</option>
                    <option>Graphic design</option>
                    <option>Video editing</option>
                  </select>
                </div>
                
                <div className="space-y-3">
                  <label className="text-sm font-black uppercase tracking-widest text-[#0F2A44]/70 ml-1">Your Vision</label>
                  <textarea 
                    rows={5} 
                    name="message"
                    placeholder="Tell us about your project goals..."
                    className="w-full px-8 py-5 bg-white/80 border border-[#0F2A44]/10 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#0F2A44]/20 focus:border-[#0F2A44] transition-all text-[#0F2A44] font-medium resize-none shadow-sm focus-luxury" 
                  />
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button size="lg" className="w-full luxury-button bg-gradient-to-r from-[#0F2A44] to-[#1E3A8A] hover:from-[#1E3A8A] hover:to-[#172554] text-white py-8 rounded-3xl text-lg font-bold shadow-2xl shadow-[#0F2A44]/20 group">
                  Send Message
                  <Send className="ml-3 size-6 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-300" />
                </Button>
              </motion.div>
              {statusMessage && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center text-sm mt-6 p-4 rounded-2xl ${
                    isSuccess 
                      ? 'text-green-700 bg-green-50 border border-green-200' 
                      : 'text-red-700 bg-red-50 border border-red-200'
                  }`}
                >
                  {statusMessage}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
