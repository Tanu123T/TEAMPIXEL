import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Expertise } from './components/Expertise';
import { ProcessSection } from './components/ProcessSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen relative bg-white">
      <Navigation />
      
      <main id="top">
        <Hero />
        <div id="about">
          <About />
        </div>
        <div id="expertise">
          <Expertise />
        </div>
        <div id="process">
          <ProcessSection />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
