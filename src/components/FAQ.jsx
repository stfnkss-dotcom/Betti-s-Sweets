import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const items = [
  { question: 'How do I order?', answer: 'Get in touch via WhatsApp, Instagram, phone or email with your ideas and desired collection date. We will discuss availability and provide a quote.' },
  { question: 'How much notice do you need?', answer: 'We recommend contacting us 5–10 days ahead. Last-minute availability varies, so please ask.' },
  { question: 'How do payments work?', answer: 'A 50% deposit secures your booking. The remaining balance is due 72 hours before collection.' },
  { question: 'Do you deliver?', answer: 'Orders are collection only from Salford, Greater Manchester.' },
  { question: 'Can you cater for dietary requirements?', answer: 'Please discuss dietary requirements and allergies before ordering. We handle common allergens in our kitchen and cannot guarantee an allergen-free cake.' }
];

const FAQ = () => {
  const [open, setOpen] = useState(0);
  return <section id="faq" className="py-14 scroll-mt-28 lg:scroll-mt-[112px]">
    <div className="max-w-[1200px] mx-auto px-5">
      <div className="bg-white border border-[#f2e8db] rounded-[14px] shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-5">
        <h2 className="text-[1.6rem] font-semibold mb-5 text-[#2b2222]">Frequently asked questions</h2>
        {items.map((item, index) => <div key={item.question} className="border-b border-[#f1e7db] last:border-b-0 py-3">
          <button className="w-full flex items-center justify-between text-left gap-4" aria-expanded={open === index} onClick={() => setOpen(open === index ? -1 : index)}>
            <strong>{item.question}</strong>{open === index ? <ChevronUp className="w-5 h-5 shrink-0" /> : <ChevronDown className="w-5 h-5 shrink-0" />}
          </button>
          {open === index && <p className="mt-3 text-[var(--text-dark)] leading-6">{item.answer}</p>}
        </div>)}
      </div>
    </div>
  </section>;
};
export default FAQ;
