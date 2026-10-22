"use client";

import Image from "next/image";
import { ArrowUpRight, Camera, BookOpen } from "lucide-react";
import { CLIENT_ALBUMS, ClientAlbum } from "@/data/photographyData";

interface ClientAlbumsProps {
  onSelectCategory?: (category: string) => void;
}

export default function ClientAlbumsSection({ onSelectCategory }: ClientAlbumsProps) {
  const handleViewAlbum = (album: ClientAlbum) => {
    if (album.facebookUrl) {
      window.open(album.facebookUrl, "_blank", "noopener,noreferrer");
      return;
    }
    if (onSelectCategory) {
      if (album.category.toLowerCase().includes("wedding") || album.category.toLowerCase().includes("elopement")) {
        onSelectCategory("weddings");
      } else if (album.category.toLowerCase().includes("editorial")) {
        onSelectCategory("editorial");
      } else {
        onSelectCategory("all");
      }
    }
    const worksEl = document.getElementById("works");
    if (worksEl) {
      worksEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="albums" className="py-20 sm:py-28 bg-[#f8fafc] border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16">
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-[0.22em] text-zinc-500 font-semibold block font-mono">
              Delivered Stories
            </span>
            <h2 className="font-serif-display text-3xl sm:text-5xl text-zinc-950 font-bold tracking-tight">
              Featured Client Albums
            </h2>
          </div>
          <p className="text-zinc-600 text-sm max-w-md sm:text-right">
            Full heirloom monographs and delivered gallery suites curated for couples and celebrations.
          </p>
        </div>

        {/* Albums Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {CLIENT_ALBUMS.map((album) => (
            <div
              key={album.id}
              onClick={() => handleViewAlbum(album)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#eceae3] hover:border-[#181816] hover:shadow-lg transition-all duration-500 flex flex-col justify-between"
            >
              {/* Cover Image */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#eceae3]">
                <Image
                  src={album.coverImage}
                  alt={album.title}
                  fill
                  className="object-cover img-zoom"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                {/* Badges */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider text-[#181816]">
                  {album.category}
                </div>

                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] text-white flex items-center gap-1 font-mono">
                  <Camera className="w-3 h-3 text-zinc-300" />
                  <span>{album.photoCount} Photos</span>
                </div>

                {/* Over-image caption */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-300 block font-mono mb-1">
                    {album.date}
                  </span>
                  <h3 className="font-serif-display text-2xl font-normal leading-tight">
                    {album.title}
                  </h3>
                  <p className="text-xs text-zinc-300 line-clamp-1 mt-1 font-light">
                    {album.location}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-4 sm:p-5 flex items-center justify-between bg-white border-t border-[#eceae3]">
                <div className="text-left">
                  <span className="text-[10px] text-[#807d74] uppercase tracking-[0.16em] block font-mono">Volume</span>
                  <span className="text-xs font-medium text-[#181816] truncate max-w-[170px] block">{album.subtitle}</span>
                </div>
                {album.facebookUrl ? (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1877F2]/10 group-hover:bg-[#1877F2] text-[#1877F2] group-hover:text-white text-[11px] font-medium transition-colors">
                    <span>Facebook</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-[#f6f5f0] group-hover:bg-[#181816] group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#181816] group-hover:text-white transition-colors" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
