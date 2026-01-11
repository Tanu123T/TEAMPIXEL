import { lazy, Suspense } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';

// Lazy load components for better performance
const About = lazy(() => import('./components/About').then(module => ({ default: module.About })));
const StatsSection = lazy(() => import('./components/StatsSection').then(module => ({ default: module.StatsSection })));
const Expertise = lazy(() => import('./components/Expertise').then(module => ({ default: module.Expertise })));
const ProcessSection = lazy(() => import('./components/ProcessSection').then(module => ({ default: module.ProcessSection })));
const Contact = lazy(() => import('./components/Contact').then(module => ({ default: module.Contact })));

export default function App() {
  return (
    <div className="min-h-screen relative bg-white">
      <Navigation />
      
      <main id="top">
        <Hero />
        
        <Suspense fallback={<div className="py-32 text-center text-[#0F2A44]">Loading...</div>}>
          <div id="about" className="reveal-on-scroll">
            <About />
          </div>
          
          <div className="reveal-on-scroll">
            <StatsSection />
          </div>
          
          <div id="expertise" className="reveal-on-scroll">
            <Expertise />
          </div>
          
          <div id="process" className="reveal-on-scroll">
            <ProcessSection />
          </div>
          
          <div id="contact" className="reveal-on-scroll">
            <Contact />
          </div>
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
}
