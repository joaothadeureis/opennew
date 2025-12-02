
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BusinessIntro } from './components/BusinessIntro';
import { Portfolio } from './components/Portfolio';
import { Benefits } from './components/Benefits';
import { AlgarSection } from './components/AlgarSection';
import { Integrations } from './components/Integrations';
import { Steps } from './components/Steps';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { AnnouncementBar } from './components/AnnouncementBar';

function App() {
  return (
    <main className="font-sans text-gray-900 bg-white selection:bg-primary/20 selection:text-primary">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <BusinessIntro />
      <Portfolio />
      <Benefits />
      <AlgarSection />
      <Integrations />
      <Steps />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

export default App;
