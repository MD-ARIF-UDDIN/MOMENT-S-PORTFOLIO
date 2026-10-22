"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "How far in advance should we book our wedding or event date?",
    a: "We recommend booking 3 to 6 months in advance for peak wedding seasons and Gaye Holud ceremonies. However, we also accommodate short-notice bookings based on team availability."
  },
  {
    q: "What is your delivery timeline for photos and cinematic films?",
    a: "You will receive sneak-peek highlights within 48 to 72 hours. Complete collections of edited high-resolution photos and final cinematic highlight films are delivered within 3 to 4 weeks via private online gallery and flash drive."
  },
  {
    q: "Can we customize our packages or add extra hours and drone coverage?",
    a: "Yes! All our packages (Wedding, Gaye Holud, and Engagement) can be customized with extra coverage hours (৳2,000–3,500/hr), drone aerial cinematography (৳5,000–10,000), premium wedding albums, or same-day short reels."
  },
  {
    q: "Do you travel outside Dhaka for destination events?",
    a: "Yes, our team regularly travels throughout Bangladesh and internationally for destination weddings and corporate events. Out-of-city travel and accommodation are quoted transparently."
  },
  {
    q: "How do we confirm our booking?",
    a: "A 30% advance deposit with an agreement locks your event date exclusively for our team. The remaining balance is completed upon delivery of your photos and videos."
  }
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#f8fafc] border-b border-zinc-200" aria-label="Frequently Asked Questions">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-18 space-y-3">
          <span className="text-[11px] uppercase tracking-[0.22em] text-zinc-500 font-semibold block font-mono">
            Inquiries &amp; Answers
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl text-zinc-950 font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Minimalist Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.q}
                className="rounded-2xl bg-white border border-zinc-200 overflow-hidden transition-all duration-300 shadow-xs"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-display text-base sm:text-lg text-zinc-950 font-bold leading-snug">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? "rotate-180 bg-zinc-950 text-white" : "bg-zinc-100 text-zinc-600"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 sm:pb-7 text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
