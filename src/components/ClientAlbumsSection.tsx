"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Maximize2, 
  X, 
  ExternalLink,
  MessageCircle,
  Images,
  ArrowUpRight,
  Sparkles as SparklesDeprecated // not used
} from "lucide-react";
import { 
  CLIENT_ALBUMS, 
  ClientAlbum, 
  PHOTOGRAPHY_SHOWCASE_PHOTOS, 
  ShowcasePhoto, 
  COMPANY_INFO 
} from "@/data/photographyData";

interface ClientAlbumsProps {
  onSelectCategory?: (category: string) => void;
}

export default function ClientAlbumsSection({ onSelectCategory }: ClientAlbumsProps) {
  // Master auto-slide state for the single photo stream reel
  const [activeMasterSlide, setActiveMasterSlide] = useState(0);
  const [isMasterPlaying, setIsMasterPlaying] = useState(true);
  
  // Single-photo stream full-screen modal lightbox state
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // Event-wise Album Modal state
  const [selectedAlbum, setSelectedAlbum] = useState<ClientAlbum | null>(null);
  const [selectedAlbumPhotoIndex, setSelectedAlbumPhotoIndex] = useState<number>(0);

  // Individual card auto-slide indices for each event album
  const [cardSlideIndices, setCardSlideIndices] = useState<number[]>(() =>
    CLIENT_ALBUMS.map(() => 0)
  );
  const [hoveredAlbumId, setHoveredAlbumId] = useState<string | null>(null);

  const totalShowcasePhotos = PHOTOGRAPHY_SHOWCASE_PHOTOS.length;

  // Auto-slide photos inside each event album card every 3.6s
  useEffect(() => {
    const timer = setInterval(() => {
      setCardSlideIndices((prev) =>
        prev.map((idx, albumIndex) => {
          const album = CLIENT_ALBUMS[albumIndex];
          if (!album || !album.images || album.images.length <= 1) return 0;
          // If the card is currently hovered or an album modal is open, don't slide that card
          if (hoveredAlbumId === album.id || selectedAlbum !== null) return idx;
          return (idx + 1) % album.images.length;
        })
      );
    }, 3600);

    return () => clearInterval(timer);
  }, [hoveredAlbumId, selectedAlbum]);

  // Auto-slide master showcase reel
  useEffect(() => {
    if (!isMasterPlaying || selectedPhotoIndex !== null || selectedAlbum !== null) return;

    const interval = setInterval(() => {
      setActiveMasterSlide((prev) => (prev + 1) % totalShowcasePhotos);
    }, 4000);

    return () => clearInterval(interval);
  }, [isMasterPlaying, selectedPhotoIndex, selectedAlbum, totalShowcasePhotos]);

  // Keyboard navigation for modals (album modal & photo stream modal)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedPhotoIndex(null);
        setSelectedAlbum(null);
      } else if (selectedAlbum) {
        if (e.key === "ArrowLeft") {
          setSelectedAlbumPhotoIndex((prev) =>
            (prev - 1 + selectedAlbum.images.length) % selectedAlbum.images.length
          );
        } else if (e.key === "ArrowRight") {
          setSelectedAlbumPhotoIndex((prev) =>
            (prev + 1) % selectedAlbum.images.length
          );
        }
      } else if (selectedPhotoIndex !== null) {
        if (e.key === "ArrowLeft") {
          setSelectedPhotoIndex((prev) =>
            prev !== null ? (prev - 1 + totalShowcasePhotos) % totalShowcasePhotos : 0
          );
        } else if (e.key === "ArrowRight") {
          setSelectedPhotoIndex((prev) =>
            prev !== null ? (prev + 1) % totalShowcasePhotos : 0
          );
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    if (selectedPhotoIndex !== null || selectedAlbum !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedPhotoIndex, selectedAlbum, totalShowcasePhotos]);

  // Open album in modal
  const handleOpenAlbum = (album: ClientAlbum) => {
    setSelectedAlbum(album);
    setSelectedAlbumPhotoIndex(0);
  };

  const handlePrevMaster = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveMasterSlide((prev) => (prev - 1 + totalShowcasePhotos) % totalShowcasePhotos);
  };

  const handleNextMaster = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveMasterSlide((prev) => (prev + 1) % totalShowcasePhotos);
  };

  return (
    <section id="photography" className="py-20 sm:py-28 bg-[#f8fafc] border-b border-zinc-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-800 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>Authentic Light · Emotional Storytelling</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-5xl text-zinc-950 font-bold tracking-tight">
              Photography &amp; Delivered Albums
            </h2>
          </div>
          <p className="text-zinc-600 text-xs sm:text-sm max-w-md sm:text-right font-light leading-relaxed">
            Every frame tells a story. Pure authentic emotion, natural light, and cinema-grade color grading captured across Bangladesh.
          </p>
        </div>

        {/* ========================================================
            PART 1 (FIRST): EVENT-WISE ALBUMS WITH AUTO-SLIDE & MODAL
            ======================================================== */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-zinc-200">
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-[0.22em] text-zinc-500 font-mono font-semibold block">
                Delivered Event Suites
              </span>
              <h3 className="font-serif-display text-2xl sm:text-3xl text-zinc-950 font-bold">
                Featured Event Albums
              </h3>
            </div>
            <span className="text-xs text-zinc-500 font-mono hidden sm:inline">
              Auto-sliding preview frames · Click to open full album &amp; Facebook link
            </span>
          </div>

          {/* Event Albums Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {CLIENT_ALBUMS.map((album, albumIdx) => {
              const currentCardPhotoIdx = cardSlideIndices[albumIdx] || 0;
              const currentPhotoSrc = album.images && album.images.length > 0 
                ? album.images[currentCardPhotoIdx] 
                : album.coverImage;

              return (
                <div
                  key={album.id}
                  onClick={() => handleOpenAlbum(album)}
                  onMouseEnter={() => setHoveredAlbumId(album.id)}
                  onMouseLeave={() => setHoveredAlbumId(null)}
                  className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-zinc-200/90 hover:border-zinc-950 hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
                  role="button"
                  tabIndex={0}
                  aria-label={`View album: ${album.title} - ${album.subtitle}`}
                >
                  {/* Card Image Stage with Auto-slide Transitions */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-900 select-none">
                    {album.images && album.images.length > 0 ? (
                      album.images.map((img, imgIdx) => (
                        <Image
                          key={img + imgIdx}
                          src={img}
                          alt={`${album.title} - photo ${imgIdx + 1}`}
                          fill
                          className={`object-cover transition-opacity duration-700 ease-in-out group-hover:scale-105 transition-transform ${
                            imgIdx === currentCardPhotoIdx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                          }`}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      ))
                    ) : (
                      <Image
                        src={album.coverImage}
                        alt={album.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    )}

                    {/* Gradient Overlay for Legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30 z-10 pointer-events-none" />

                    {/* Badges on Top */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-none">
                      <span className="bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider text-zinc-900 shadow-xs">
                        {album.category}
                      </span>

                      <div className="bg-black/65 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] text-white flex items-center gap-1.5 font-mono border border-white/10 shadow-xs">
                        <Images className="w-3 h-3 text-amber-400" />
                        <span>{album.images?.length || album.photoCount} Photos</span>
                      </div>
                    </div>

                    {/* Auto-slide Progress Dot Pills on Top-Center */}
                    {album.images && album.images.length > 1 && (
                      <div className="absolute top-11 left-3 z-20 flex items-center gap-1">
                        {album.images.map((_, dotIdx) => (
                          <span
                            key={dotIdx}
                            className={`h-1 rounded-full transition-all duration-300 ${
                              dotIdx === currentCardPhotoIdx 
                                ? "w-4 bg-amber-400" 
                                : "w-1 bg-white/40"
                            }`}
                          />
                        ))}
                      </div>
                    )}

                    {/* Over-image caption */}
                    <div className="absolute bottom-4 left-4 right-4 text-white z-20 pointer-events-none">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-amber-300/90 font-mono">
                          {album.date}
                        </span>
                        <span className="text-zinc-400 text-[10px]">·</span>
                        <span className="text-[10px] text-zinc-300 font-light truncate">
                          {album.location}
                        </span>
                      </div>

                      <h4 className="font-serif-display text-2xl font-bold leading-tight drop-shadow-sm">
                        {album.title}
                      </h4>
                      <p className="text-xs text-zinc-200 line-clamp-1 mt-0.5 font-light">
                        {album.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom Bar */}
                  <div className="p-4 flex items-center justify-between bg-white border-t border-zinc-100">
                    <div className="text-left">
                      <span className="text-[9px] text-zinc-500 uppercase tracking-[0.16em] block font-mono font-semibold">
                        Event Monograph
                      </span>
                      <span className="text-xs font-semibold text-zinc-900 truncate max-w-[150px] block">
                        {album.subtitle}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-950 group-hover:bg-amber-500 text-white group-hover:text-black text-[11px] font-semibold transition-all shadow-xs">
                      <span>Open Album</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            PART 2 (BOTTOM / AFTER ALBUMS): MASTER REEL & PHOTO STREAM
            ======================================================== */}
        <div className="mt-8 pt-12 border-t border-zinc-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-[0.22em] text-zinc-500 font-mono font-semibold block">
                Continuous Gallery
              </span>
              <h3 className="font-serif-display text-2xl sm:text-3xl text-zinc-950 font-bold">
                Photography Highlights &amp; Single Stream
              </h3>
            </div>
            <p className="text-xs text-zinc-500 font-mono">
              Auto-sliding master reel below · Complete high-resolution captures
            </p>
          </div>

          {/* Master Auto-Sliding Reel */}
          <div 
            onClick={() => setSelectedPhotoIndex(activeMasterSlide)}
            className="group relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[2.2/1] rounded-3xl overflow-hidden bg-zinc-950 shadow-xl cursor-pointer select-none border border-zinc-200"
            role="region"
            aria-label="Auto-sliding photography showcase"
          >
            {/* Stacked Images with Smooth Crossfade */}
            {PHOTOGRAPHY_SHOWCASE_PHOTOS.map((photo, idx) => (
              <Image
                key={photo.id}
                src={photo.image}
                alt={photo.alt}
                fill
                priority={idx === 0}
                className={`object-cover transition-opacity duration-1000 ease-in-out group-hover:scale-105 transition-transform ${
                  idx === activeMasterSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            ))}

            {/* Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 z-10 pointer-events-none" />

            {/* Top Info Bar */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between z-20 pointer-events-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>Moment&apos;s Signature Reel</span>
              </div>

              <div className="flex items-center gap-2">
                {/* Play / Pause Toggle */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMasterPlaying((prev) => !prev);
                  }}
                  aria-label={isMasterPlaying ? "Pause auto-slide" : "Play auto-slide"}
                  className="p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-transform hover:scale-110 border border-white/10"
                >
                  {isMasterPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>

                {/* Slide Counter */}
                <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10 text-xs font-mono">
                  {String(activeMasterSlide + 1).padStart(2, "0")} / {String(totalShowcasePhotos).padStart(2, "0")}
                </div>
              </div>
            </div>

            {/* Chevrons Navigation */}
            <div className="absolute inset-y-0 inset-x-3 sm:inset-x-6 flex items-center justify-between pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={handlePrevMaster}
                aria-label="Previous photo"
                className="pointer-events-auto p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-all hover:scale-110 border border-white/10"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextMaster}
                aria-label="Next photo"
                className="pointer-events-auto p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-all hover:scale-110 border border-white/10"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Bar: Click to Expand CTA */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between text-white z-20 pointer-events-auto">
              <div className="text-left">
                <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-300 font-mono block">
                  Auto-Sliding Showcase
                </span>
                <p className="text-xs sm:text-sm text-white/90 font-light mt-0.5">
                  Click any frame to view in full resolution
                </p>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/20 hover:bg-white text-white hover:text-black backdrop-blur-md text-xs font-medium transition-all shadow-md">
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Open Lightbox</span>
              </div>
            </div>

            {/* Progress Bar Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
              <div 
                className="h-full bg-white transition-all duration-300"
                style={{ width: `${((activeMasterSlide + 1) / totalShowcasePhotos) * 100}%` }}
              />
            </div>
          </div>

          {/* Pure Continuous Photo Stream Grid */}
          <div className="mt-10 sm:mt-12">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-zinc-200">
              <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 font-mono">
                Continuous Photography Stream · {totalShowcasePhotos} Captures
              </span>
              <span className="text-xs text-zinc-500 font-mono">
                Click any image to enlarge
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {PHOTOGRAPHY_SHOWCASE_PHOTOS.map((photo, index) => {
                const isLandscape = photo.aspectRatio === "landscape";

                return (
                  <div
                    key={photo.id}
                    onClick={() => setSelectedPhotoIndex(index)}
                    className={`group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-200/80 hover:border-zinc-900 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer ${
                      isLandscape ? "aspect-[3/2]" : "aspect-[4/5]"
                    }`}
                  >
                    <Image
                      src={photo.image}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Corner Hover Badges */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                      <div className="p-2 rounded-full bg-black/60 backdrop-blur-md text-white">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 text-white flex items-center justify-between text-xs font-mono">
                      <span className="text-[11px] text-zinc-300">Moment&apos;s Photography</span>
                      <span className="text-[10px] text-zinc-400">Photo {String(index + 1).padStart(2, "0")}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ========================================================
            PART 3: SEE MORE ON OUR FACEBOOK BANNER
            ======================================================== */}
        <div className="mt-14 sm:mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#1877F2]/10 via-[#1877F2]/5 to-white border-2 border-[#1877F2]/20 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm hover:border-[#1877F2]/40 transition-all">
          <div className="flex items-center gap-4 sm:gap-6 text-left">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#1877F2] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#1877F2]/25">
              <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#1877F2]/10 text-[#1877F2] text-[10px] font-mono font-semibold uppercase tracking-wider">
                Official Facebook Page
              </div>
              <h3 className="font-serif-display text-2xl sm:text-3xl text-zinc-950 font-normal">
                See More On Our Facebook
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 font-light max-w-xl leading-relaxed">
                Explore hundreds of full wedding sessions, bridal albums, Gaye Holud highlights, and behind-the-scenes stories updated daily on our Facebook page.
              </p>
            </div>
          </div>

          <a
            href={COMPANY_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-lg shadow-[#1877F2]/30 hover:shadow-xl hover:scale-105 transition-all shrink-0"
          >
            <span>Visit Facebook Page</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* ========================================================
          MODAL 1: EVENT-WISE ALBUM LIGHTBOX (FULL ALBUM SUITE + FB LINK)
          ======================================================== */}
      {selectedAlbum !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label={`Album viewer: ${selectedAlbum.title}`}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 sm:px-8 py-4 border-b border-white/10 bg-black/50 text-white z-10">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
              <div>
                <span className="text-xs font-bold text-white font-serif-display block sm:inline">
                  {selectedAlbum.title}
                </span>
                <span className="text-xs text-zinc-400 font-mono sm:ml-2">
                  · {selectedAlbum.subtitle}
                </span>
              </div>
              <span className="text-[11px] uppercase tracking-wider text-amber-400 font-mono">
                Frame {selectedAlbumPhotoIndex + 1} of {selectedAlbum.images.length}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Direct Facebook Link for this Album */}
              {selectedAlbum.facebookUrl && (
                <a
                  href={selectedAlbum.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs font-semibold shadow-md transition-all hover:scale-105"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>See Album on Facebook</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}

              {/* Close Button */}
              <button
                onClick={() => setSelectedAlbum(null)}
                aria-label="Close album viewer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Album Photo Stage */}
          <div className="relative flex-1 flex items-center justify-center p-4 sm:p-8 overflow-hidden">
            {/* Prev Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedAlbumPhotoIndex((prev) =>
                  (prev - 1 + selectedAlbum.images.length) % selectedAlbum.images.length
                );
              }}
              aria-label="Previous photo in album"
              className="absolute left-4 sm:left-8 z-20 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-all hover:scale-110 border border-white/10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Active Image */}
            <div className="relative w-full h-full max-w-6xl max-h-[75vh] flex items-center justify-center">
              <Image
                src={selectedAlbum.images[selectedAlbumPhotoIndex]}
                alt={`${selectedAlbum.title} - photo ${selectedAlbumPhotoIndex + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
              />
            </div>

            {/* Next Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedAlbumPhotoIndex((prev) =>
                  (prev + 1) % selectedAlbum.images.length
                );
              }}
              aria-label="Next photo in album"
              className="absolute right-4 sm:right-8 z-20 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-all hover:scale-110 border border-white/10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Bar: Thumbnails & WhatsApp inquiry */}
          <div className="px-4 sm:px-8 py-3 bg-black/60 border-t border-white/10 backdrop-blur-md text-white z-10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-left">
              <span className="text-xs text-zinc-300 font-medium">
                {selectedAlbum.title} · {selectedAlbum.location}
              </span>
              <p className="text-[11px] text-zinc-400 font-light hidden sm:block">
                {selectedAlbum.description || "Timeless memories documented by Moment's Studio"}
              </p>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex items-center gap-2 overflow-x-auto max-w-xs sm:max-w-md lg:max-w-xl py-1">
              {selectedAlbum.images.map((img, idx) => (
                <button
                  key={img + idx}
                  onClick={() => setSelectedAlbumPhotoIndex(idx)}
                  className={`relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                    idx === selectedAlbumPhotoIndex ? "border-amber-400 scale-105" : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </button>
              ))}
            </div>

            {/* WhatsApp Quick Inquire */}
            <a
              href={`https://wa.me/8801643666825?text=${encodeURIComponent(
                `Hello Moment's Photography, I saw the album "${selectedAlbum.title} - ${selectedAlbum.subtitle}" on your website and would like to inquire about booking a similar event shoot.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md transition-colors shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Inquire This Event via WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      {/* ========================================================
          MODAL 2: CONTINUOUS STREAM FULL-SCREEN LIGHTBOX
          ======================================================== */}
      {selectedPhotoIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Photography viewer"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 sm:px-8 py-4 border-b border-white/10 bg-black/50 text-white z-10">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-mono">
                Photo {selectedPhotoIndex + 1} of {totalShowcasePhotos}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={PHOTOGRAPHY_SHOWCASE_PHOTOS[selectedPhotoIndex].facebookUrl || COMPANY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs font-semibold shadow-md transition-all hover:scale-105"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="hidden sm:inline">See on Facebook</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <button
                onClick={() => setSelectedPhotoIndex(null)}
                aria-label="Close lightbox"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Photo Stage */}
          <div className="relative flex-1 flex items-center justify-center p-4 sm:p-8 overflow-hidden">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhotoIndex((prev) =>
                  prev !== null ? (prev - 1 + totalShowcasePhotos) % totalShowcasePhotos : 0
                );
              }}
              aria-label="Previous photo"
              className="absolute left-4 sm:left-8 z-20 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-all hover:scale-110 border border-white/10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="relative w-full h-full max-w-6xl max-h-[75vh] flex items-center justify-center">
              <Image
                src={PHOTOGRAPHY_SHOWCASE_PHOTOS[selectedPhotoIndex].image}
                alt={PHOTOGRAPHY_SHOWCASE_PHOTOS[selectedPhotoIndex].alt}
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
              />
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhotoIndex((prev) =>
                  prev !== null ? (prev + 1) % totalShowcasePhotos : 0
                );
              }}
              aria-label="Next photo"
              className="absolute right-4 sm:right-8 z-20 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-all hover:scale-110 border border-white/10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Bar: Thumbnails & WhatsApp inquiry */}
          <div className="px-4 sm:px-8 py-3 bg-black/60 border-t border-white/10 backdrop-blur-md text-white z-10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-zinc-400 font-mono">
              Moment&apos;s Photography · High-Resolution Capture
            </span>

            {/* Thumbnail Strip */}
            <div className="flex items-center gap-2 overflow-x-auto max-w-xs sm:max-w-md lg:max-w-xl py-1">
              {PHOTOGRAPHY_SHOWCASE_PHOTOS.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedPhotoIndex(idx)}
                  className={`relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                    idx === selectedPhotoIndex ? "border-white scale-105" : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={p.image}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </button>
              ))}
            </div>

            <a
              href={`https://wa.me/8801643666825?text=${encodeURIComponent(
                `Hello Moment's Photography, I saw your photography work on your website and would like to inquire about booking a photoshoot.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md transition-colors shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Inquire via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
