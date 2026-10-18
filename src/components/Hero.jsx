import { Instagram, MessageCircle } from 'lucide-react';

const Hero = () => (
  <main id="home" className="hero relative isolate border-b border-[#f1e7db]" role="main"
    style={{
      backgroundImage: "url('/IMG_4972.jpg'), linear-gradient(180deg, #fff8f0, #fff)",
      backgroundSize: 'cover, cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
    <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-[30px] items-center py-12 lg:py-20">
      <div className="glass p-6 max-w-[720px]">
        <span className="inline-block bg-gradient-to-r from-[var(--blush)] to-[var(--peach)] px-3 py-1.5 rounded-full font-semibold border border-[#f3d5c4] text-sm">Salford • Manchester, UK</span>
        <h1 className="text-[clamp(28px,5vw,44px)] leading-[1.15] my-3">Custom made artisan cakes</h1>
        <p className="script text-[clamp(24px,4.2vw,32px)] text-[var(--rose)]">Freshly baked for you.</p>
        <p className="text-[var(--text-muted)] my-3">Beautiful, handmade cakes for your special occasions. Made to order and available for collection in Salford.</p>
        <div className="flex gap-3 flex-wrap mt-5">
          <a className="btn-gradient inline-flex items-center gap-2 px-5 py-3 rounded-full text-[var(--text-dark)] font-medium no-underline" href="https://wa.me/447761297615" target="_blank" rel="noopener noreferrer"><MessageCircle className="w-5 h-5" />Enquire on WhatsApp</a>
          <a className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-[#eadfce] text-[var(--text-dark)] font-medium no-underline" href="https://www.instagram.com/betti_sweets/" target="_blank" rel="noopener noreferrer"><Instagram className="w-5 h-5" />See our cakes</a>
        </div>
      </div>
    </div>
  </main>
);
export default Hero;
