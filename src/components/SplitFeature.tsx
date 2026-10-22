"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface SplitFeatureProps {
  onSelectCategory?: (category: string) => void;
}

export default function SplitFeature({ onSelectCategory }: SplitFeatureProps) {
  const handleSelect = (category: string) => {
    if (onSelectCategory) {
      onSelectCategory(category);
    } else {
      const worksEl = document.getElementById("works");
      if (worksEl) worksEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="spotlight" className="py-16 sm:py-24 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs uppercase tracking-wider text-zinc-500 font-bold block">
            Core Disciplines
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl text-zinc-950 font-bold tracking-tight">
            Weddings &amp; Gaye Holud Specialists
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
            From intimate ceremonies and grand receptions to vibrant, high-energy Gaye Holud celebrations.
          </p>
        </div>

        {/* Dual Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {/* Wedding Column */}
          <div
            id="weddings-spotlight"
            onClick={() => handleSelect("weddings")}
            className="group cursor-pointer bg-zinc-50 rounded-2xl overflow-hidden border border-zinc-200 hover:border-zinc-900 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-lg"
          >
            <div>
              {/* Image Frame */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
                <Image
                  src="/works/miton-moni-tea-garden.jpg"
                  alt="Miton X Moni Pre-Wedding by Moment's"
                  fill
                  className="object-cover img-zoom"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-zinc-950">
                  Weddings &amp; Receptions
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif-display text-2xl sm:text-3xl font-bold">
                    Wedding Photography &amp; Film
                  </h3>
                </div>
              </div>

              {/* Text Description */}
              <div className="p-6 sm:p-8 space-y-4 bg-white">
                <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                  Complete documentary coverage capturing unscripted tears, laughter, and vows, followed by relaxed portrait sessions with flattering light.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-zinc-100 text-xs">
                  <div>
                    <span className="text-zinc-500 font-bold block uppercase tracking-wider">Packages</span>
                    <span className="font-bold text-zinc-950 text-sm">৳25,000 – ৳65,000</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 font-bold block uppercase tracking-wider">Turnaround</span>
                    <span className="font-bold text-zinc-950 text-sm">Full Gallery &amp; Film</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="px-6 sm:px-8 py-4 bg-zinc-50 border-t border-zinc-200 flex items-center justify-between">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-950 group-hover:underline">
                View Wedding Works
              </span>
              <div className="w-8 h-8 rounded-full bg-zinc-950 text-white flex items-center justify-center transition-transform group-hover:translate-x-1">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Gaye Holud Column */}
          <div
            id="holud-spotlight"
            onClick={() => handleSelect("events")}
            className="group cursor-pointer bg-zinc-50 rounded-2xl overflow-hidden border border-zinc-200 hover:border-zinc-900 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-lg"
          >
            <div>
              {/* Image Frame */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
                <Image
                  src="/works/samrat-holud.jpg"
                  alt="Samrat On Fire Gaye Holud by Moment's"
                  fill
                  className="object-cover img-zoom"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-zinc-950">
                  Gaye Holud &amp; Mehendi
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif-display text-2xl sm:text-3xl font-bold">
                    Gaye Holud Celebrations
                  </h3>
                </div>
              </div>

              {/* Text Description */}
              <div className="p-6 sm:p-8 space-y-4 bg-white">
                <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                  High-energy coverage of family traditions, colorful stages, dance performances, and spontaneous laughter with multi-camera cinematic video.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-zinc-100 text-xs">
                  <div>
                    <span className="text-zinc-500 font-bold block uppercase tracking-wider">Packages</span>
                    <span className="font-bold text-zinc-950 text-sm">৳18,000 – ৳45,000</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 font-bold block uppercase tracking-wider">Cinema</span>
                    <span className="font-bold text-zinc-950 text-sm">Highlight &amp; Teaser</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="px-6 sm:px-8 py-4 bg-zinc-50 border-t border-zinc-200 flex items-center justify-between">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-950 group-hover:underline">
                View Holud Packages
              </span>
              <div className="w-8 h-8 rounded-full bg-zinc-950 text-white flex items-center justify-center transition-transform group-hover:translate-x-1">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
