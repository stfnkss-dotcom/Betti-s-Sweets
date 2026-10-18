import { Instagram, Facebook, Mail, Phone, MessageCircle } from 'lucide-react';

const Footer = () => (
  <footer className="border-t border-[#f1e7db] bg-white py-8 pb-14">
    <div className="max-w-[1200px] mx-auto px-5 grid gap-7 md:grid-cols-3">
      <div>
        <div className="script text-[28px] text-[var(--rose)] mb-2">Betti's Sweets</div>
        <p className="text-[#86766a] text-sm">© {new Date().getFullYear()} Betti's Sweets<br />Handmade cakes • Salford, Manchester<br />Collection only</p>
      </div>
      <div>
        <h3 className="font-semibold mb-3">Follow our work</h3>
        <div className="flex flex-col items-start gap-2">
          <a className="inline-flex items-center gap-2" href="https://www.instagram.com/betti_sweets/" target="_blank" rel="noopener noreferrer"><Instagram className="w-5 h-5" />Instagram</a>
          <a className="inline-flex items-center gap-2" href="https://www.facebook.com/share/15rjNJViaL/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"><Facebook className="w-5 h-5" />Facebook</a>
          <a className="inline-flex items-center gap-2" href="https://www.tiktok.com/@bettis.sweets" target="_blank" rel="noopener noreferrer">TikTok</a>
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-3">Contact</h3>
        <div className="flex flex-col items-start gap-2">
          <a className="inline-flex items-center gap-2" href="https://wa.me/447761297615" target="_blank" rel="noopener noreferrer"><MessageCircle className="w-5 h-5" />WhatsApp</a>
          <a className="inline-flex items-center gap-2" href="tel:+447761297615"><Phone className="w-5 h-5" />+44 7761 297615</a>
          <a className="inline-flex items-center gap-2 break-all" href="mailto:hello@bettissweets.co.uk"><Mail className="w-5 h-5 shrink-0" />hello@bettissweets.co.uk</a>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
