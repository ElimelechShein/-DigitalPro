import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './style.css'
function App() {
  return (
    <div className="min-h-screen bg-white  w-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        {/* <Portfolio /> */}
        {/* <Testimonials /> */}
        <Contact />

      </main>
      <Footer />
      {/* <WhatsAppButton /> */}
    </div>
  );
}

export default App;