import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TrustSection } from './components/TrustSection';
import { SecondaryStats } from './components/SecondaryStats';
import { Expertise } from './components/Expertise';
import { ProcessSection } from './components/ProcessSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  console.log('App rendering');
  return (
    <div className="min-h-screen w-full relative bg-white flex flex-col">
      <Navigation />
      
      <main id="top" className="flex-grow">
        <Hero />
        <div id="about">
          <About />
        </div>
        <TrustSection />
        <SecondaryStats />
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
