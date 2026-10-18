import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import InstagramShowcase from './components/InstagramShowcase';
import FAQ from './components/FAQ';
import Allergens from './components/Allergens';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingInstagram from './components/FloatingInstagram';
import './App.css';

function App() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Bakery",
      "name": "Betti's Sweets",
      "image": "https://www.bettissweets.co.uk/IMG_4972.jpg",
      "url": "https://www.bettissweets.co.uk/",
      "telephone": "+44 7761 297615",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Salford",
        "addressRegion": "Greater Manchester",
        "addressCountry": "GB"
      },
      "areaServed": "Manchester",
      "sameAs": [
        "https://www.instagram.com/betti_sweets/",
        "https://www.facebook.com/share/15rjNJViaL/?mibextid=wwXIfr",
        "https://www.tiktok.com/@bettis.sweets"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => script.remove();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <InstagramShowcase />
      <FAQ />
      <Allergens />
      <Contact />
      <Footer />
      <FloatingInstagram />
    </div>
  );
}

export default App;
