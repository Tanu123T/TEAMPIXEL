import { lazy, Suspense } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { BackgroundEffects } from './components/BackgroundEffects';
import { smoothScrollToId } from '../utils/smoothScroll';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { ScrollOptimizer } from './components/ScrollOptimizer';

// Lazy load components for better performance
const About = lazy(() => import('./components/About').then(module => ({ default: module.About })));
const StatsSection = lazy(() => import('./components/StatsSection').then(module => ({ default: module.StatsSection })));
const Expertise = lazy(() => import('./components/Expertise').then(module => ({ default: module.Expertise })));
const ProcessSection = lazy(() => import('./components/ProcessSection').then(module => ({ default: module.ProcessSection })));
const Contact = lazy(() => import('./components/Contact').then(module => ({ default: module.Contact })));

export default function App() {
  return (
    <div className="min-h-screen relative">
      <ScrollOptimizer />
      <BackgroundEffects />
      <Navigation />
      
      <main id="top">
        <Hero />
        
        <Suspense fallback={<div className="py-32 text-center">Loading...</div>}>
          <div id="about">
            <About />
          </div>
          
          <StatsSection />
          
          <div id="expertise">
            <Expertise />
          </div>
          
          <div id="process">
            <ProcessSection />
          </div>
          
          <div id="contact">
            <Contact />
          </div>
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
}
