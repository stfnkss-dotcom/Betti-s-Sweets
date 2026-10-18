import { Instagram } from 'lucide-react';

const InstagramShowcase = () => (
  <section id="work" className="py-14 scroll-mt-28 lg:scroll-mt-[112px]">
    <div className="max-w-[1200px] mx-auto px-5">
      <div className="bg-white border border-[#f2e8db] rounded-[14px] shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-5">
        <h2 className="text-[1.6rem] font-semibold mb-4 text-[#2b2222]">
          See our latest cakes
        </h2>
        <p className="text-[var(--text-dark)] leading-6 mb-5">
          Every cake is made to order. Visit our Instagram page for photos of our latest creations,
          ideas and inspiration for your own celebration.
        </p>
        <a
          href="https://www.instagram.com/betti_sweets/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gradient inline-flex items-center gap-2 px-5 py-3 rounded-full text-[var(--text-dark)] font-medium no-underline"
        >
          <Instagram className="w-5 h-5" aria-hidden="true" />
          View our cakes on Instagram
        </a>
      </div>
    </div>
  </section>
);

export default InstagramShowcase;
