import { Phone, MessageCircle, Mail, Instagram } from 'lucide-react';

const contacts = [
  { label: 'WhatsApp', href: 'https://wa.me/447761297615', icon: MessageCircle, external: true },
  { label: 'Call', href: 'tel:+447761297615', icon: Phone },
  { label: 'General enquiries', href: 'mailto:hello@bettissweets.co.uk', icon: Mail },
  { label: 'Cake enquiries', href: 'mailto:cakes@bettissweets.co.uk', icon: Mail },
  { label: 'Instagram', href: 'https://www.instagram.com/betti_sweets/', icon: Instagram, external: true }
];

const Contact = () => (
  <section id="contact" className="py-14 scroll-mt-28 lg:scroll-mt-[112px]">
    <div className="max-w-[1200px] mx-auto px-5">
      <div className="bg-white border border-[#f2e8db] rounded-[14px] shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-5">
        <h2 className="text-[1.6rem] font-semibold mb-3 text-[#2b2222]">Get in touch</h2>
        <p className="text-[var(--text-dark)] mb-5">For cake enquiries, availability or a quote, contact Betti directly. Please include your preferred collection date and cake ideas.</p>
        <div className="flex flex-wrap gap-3">
          {contacts.map(({label, href, icon: Icon, external}) => (
            <a key={label} href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-2 px-5 py-3 border border-[#eadfce] rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] text-[var(--text-dark)] hover:shadow-lg transition-shadow font-medium">
              <Icon className="w-5 h-5" aria-hidden="true" />{label}
            </a>
          ))}
        </div>
        <p className="text-[var(--text-muted)] text-sm mt-5">Collection only • Salford, Greater Manchester</p>
      </div>
    </div>
  </section>
);
export default Contact;
