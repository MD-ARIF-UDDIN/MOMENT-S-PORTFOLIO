"use client";

import Image from "next/image";
import { TESTIMONIALS } from "@/data/photographyData";

export default function TestimonialsSection() {
  const publications = [
    "Vogue Weddings",
    "Harper's Bazaar",
    "Brides International",
    "The Lane",
    "GQ Style"
  ];

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#f6f5f0] border-b border-[#eceae3]" aria-label="Client Reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14 sm:mb-20 space-y-3">
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#807d74] font-medium block">
            Client Words
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl text-[#181816] font-normal tracking-tight">
            Enduring Impressions
          </h2>
        </div>

        {/* Reviews Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl p-7 sm:p-8 bg-white border border-[#eceae3] hover:border-[#181816] transition-all duration-500 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="font-serif-display text-5xl text-[#d4d0c5] block leading-none select-none mb-3">
                  “
                </span>

                <p className="font-serif-display text-lg text-[#181816] leading-relaxed italic font-light mb-6">
                  {item.quote}
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-[#eceae3]">
                <div className="relative w-11 h-11 rounded-full overflow-hidden bg-[#eceae3] shrink-0 border border-[#eceae3]">
                  <Image
                    src={item.avatar}
                    alt={item.author}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif-display text-base text-[#181816] font-medium leading-none">
                    {item.author}
                  </h4>
                  <p className="text-[11px] font-mono text-[#807d74] uppercase tracking-wider mt-1">
                    {item.event}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Publications Strip */}
        <div className="pt-8 border-t border-[#eceae3] text-center">
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#807d74] mb-5 font-mono">
            Featured In Print &amp; Digital Press
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-[#57554f] text-sm sm:text-base font-serif-display tracking-widest uppercase">
            {publications.map((pub) => (
              <span key={pub} className="hover:text-[#181816] transition-colors">
                {pub}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
