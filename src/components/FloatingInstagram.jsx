import { Instagram } from 'lucide-react';

const FloatingInstagram = () => (
  <a href="https://www.instagram.com/betti_sweets/" target="_blank" rel="noopener noreferrer"
    className="fixed right-[18px] z-[60] flex items-center gap-2.5 px-4 py-3.5 rounded-full border border-[#f0cdb9] btn-gradient text-[var(--text-dark)] shadow-[0_12px_28px_rgba(0,0,0,0.14)]"
    aria-label="View Betti's Sweets on Instagram"
    style={{ bottom: 'max(18px, calc(18px + env(safe-area-inset-bottom)))' }}>
    <Instagram className="w-5 h-5" aria-hidden="true" /><span className="font-bold">Instagram</span>
  </a>
);
export default FloatingInstagram;
