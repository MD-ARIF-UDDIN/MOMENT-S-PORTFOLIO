"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, ArrowUpRight } from "lucide-react";
import { PHOTOGRAPHY_WORKS, PhotoWork } from "@/data/photographyData";

interface GalleryProps {
  onOpenLightbox: (work: PhotoWork) => void;
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
}

export default function PortfolioGallery({
  onOpenLightbox,
  selectedCategory: externalCategory,
  onSelectCategory: externalSetCategory
}: GalleryProps) {
  const [internalCategory, setInternalCategory] = useState<string>("all");

  const activeCategory = externalCategory !== undefined ? externalCategory : internalCategory;
  const setCategory = (cat: string) => {
    if (externalSetCategory) {
      externalSetCategory(cat);
    } else {
      setInternalCategory(cat);
    }
  };

  const categories = [
    { id: "all", label: "Selected Works", count: PHOTOGRAPHY_WORKS.length },
    { id: "weddings", label: "Weddings", count: PHOTOGRAPHY_WORKS.filter((w) => w.category === "weddings").length },
    { id: "editorial", label: "Model & Fashion", count: PHOTOGRAPHY_WORKS.filter((w) => w.category === "editorial").length },
    { id: "portraits", label: "Portraits", count: PHOTOGRAPHY_WORKS.filter((w) => w.category === "portraits").length },
    { id: "commercial", label: "Commercial", count: PHOTOGRAPHY_WORKS.filter((w) => w.category === "commercial").length },
    { id: "events", label: "Events", count: PHOTOGRAPHY_WORKS.filter((w) => w.category === "events").length },
  ];

  const filteredWorks =
    activeCategory === "all"
      ? PHOTOGRAPHY_WORKS
      : PHOTOGRAPHY_WORKS.filter((w) => w.category === activeCategory);

  return (
    <section id="works" className="py-20 sm:py-28 bg-[#f8fafc] relative border-b border-zinc-200" aria-label="Portfolio Works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-[0.22em] text-zinc-500 font-semibold block font-mono">
              Curated Archive
            </span>
            <h2 className="font-serif-display text-3xl sm:text-5xl text-zinc-950 font-bold tracking-tight">
              Featured Portfolio
            </h2>
          </div>
          <p className="text-zinc-600 text-sm max-w-xs sm:text-right">
            Click any image to inspect high-resolution photographs in full screen.
          </p>
        </div>

        {/* Minimalist Exhibition Filter Tabs */}
        <div className="mb-10 pb-4 border-b border-[#eceae3]">
          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0" role="tablist">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  id={`filter-tab-${cat.id}`}
                  onClick={() => setCategory(cat.id)}
                  className={`py-2 px-3 sm:px-4 text-xs uppercase tracking-[0.16em] whitespace-nowrap transition-all rounded-full flex items-center gap-2 ${
                    isActive
                      ? "bg-[#181816] text-white font-medium shadow-xs"
                      : "text-[#57554f] hover:text-[#181816] hover:bg-[#f6f5f0]"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                      isActive ? "bg-white/20 text-white" : "bg-[#eceae3] text-[#807d74]"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Luxury Masonry Exhibition Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredWorks.map((work) => {
            return (
              <article
                key={work.id}
                onClick={() => onOpenLightbox(work)}
                className="group relative rounded-xl overflow-hidden bg-[#f6f5f0] border border-[#eceae3] cursor-pointer transition-all duration-500 hover:shadow-lg hover:border-[#181816] flex flex-col justify-between"
              >
                {/* Photo Frame */}
                <div
                  className={`relative w-full overflow-hidden bg-[#eceae3] ${
                    work.aspectRatio === "landscape"
                      ? "aspect-[16/10]"
                      : work.aspectRatio === "square"
                      ? "aspect-square"
                      : "aspect-[3/4]"
                  }`}
                >
                  <Image
                    src={work.image}
                    alt={work.alt || work.title}
                    fill
                    className="object-cover img-zoom"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider text-[#181816]">
                    {work.categoryLabel}
                  </div>

                  {/* Expand Icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  {/* Over-image metadata */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-300 block font-mono">
                      {work.location} · {work.year}
                    </span>
                    <h3 className="font-serif-display text-xl sm:text-2xl font-normal leading-snug">
                      {work.title}
                    </h3>
                  </div>
                </div>

                {/* Card Sub-Bar */}
                <div className="p-3.5 sm:p-4 bg-white border-t border-[#eceae3] flex items-center justify-between text-xs text-[#57554f]">
                  <div className="truncate">
                    <span className="font-medium text-[#181816] text-xs block truncate">{work.client}</span>
                    <span className="text-[10px] text-[#807d74] font-mono block truncate">{work.location}</span>
                  </div>
                  {work.facebookUrl ? (
                    <a
                      href={work.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1877F2]/10 hover:bg-[#1877F2] text-[#1877F2] hover:text-white text-[11px] font-medium transition-colors shrink-0"
                    >
                      <span>Facebook Post</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-[#807d74] shrink-0">
                      {work.year}
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
