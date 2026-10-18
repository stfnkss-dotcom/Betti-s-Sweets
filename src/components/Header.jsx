import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Our cakes' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' }
];

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 header-glare bg-[rgba(255,248,240,0.95)] backdrop-blur-glass border-b border-[#f1e7db]">
      <div className="max-w-[1200px] mx-auto px-5 flex items-center justify-between min-h-20">
        <a href="#home" aria-label="Betti's Sweets home" className="flex items-center">
          <img src="/logo.svg" alt="Betti's Sweets" className="h-[76px] w-auto object-contain" />
        </a>
        <nav className="hidden lg:block" aria-label="Primary">
          <ul className="flex gap-4 list-none p-0 m-0">
            {links.map(link => <li key={link.href}><a className="block py-2 px-2.5 rounded-[10px] hover:bg-white" href={link.href}>{link.label}</a></li>)}
          </ul>
        </nav>
        <button className="lg:hidden bg-transparent p-3 text-[var(--rose)]" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="primary-menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && <nav className="lg:hidden bg-[#fff8f0] px-5 pb-4 border-b border-[#f1e7db]" aria-label="Mobile primary">
        <ul id="primary-menu" className="grid gap-1 list-none p-0 m-0">
          {links.map(link => <li key={link.href}><a href={link.href} className="block p-3 rounded-lg hover:bg-white" onClick={() => setOpen(false)}>{link.label}</a></li>)}
        </ul>
      </nav>}
    </header>
  );
};
export default Header;
