"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const HERO_SLIDES = [
  {
    title: "Antu X Nandita — Sacred Wedding Moments",
    category: "Full Day Wedding Coverage",
    image: "/works/antu-nandita-wedding-embrace.jpg",
    tagline: "Soulful vows, candid tears of joy, and eternal family memories preserved forever.",
    badge: "Real Wedding",
    accent: "from-amber-500/20 to-transparent"
  },
  {
    title: "Bridal Grand Runway & Haute Portraits",
    category: "Luxury Bridal Cinematography",
    image: "/works/bridal-runway-entrance.jpg",
    tagline: "Dramatic stage lighting, exquisite bridal couture, and breathtaking cinematic frames.",
    badge: "Bridal Cinema",
    accent: "from-rose-500/20 to-transparent"
  },
  {
    title: "Festive Gaye Holud Celebrations",
    category: "Gaye Holud & Vibrant Stories",
    image: "/works/samrat-holud.jpg",
    tagline: "Golden marigolds, high-energy dance performances, and spontaneous laughter.",
    badge: "Gaye Holud",
    accent: "from-amber-400/20 to-transparent"
  },
  {
    title: "Antar X Trisha — Seaside Romance",
    category: "Pre-Wedding & Outdoor Cinema",
    image: "/works/antar-trisha-beach-embrace.png",
    tagline: "Golden hour sea breeze, intimate storytelling, and editorial couple portraits.",
    badge: "Pre-Wedding",
    accent: "from-blue-500/20 to-transparent"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      handleNext(); // swiped left
    } else if (diff < -45) {
      handlePrev(); // swiped right
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="hero"
      className="relative pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-14 bg-white overflow-hidden border-b border-zinc-200"
      aria-label="Hero Showcase"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Clean Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 sm:pb-8 border-b border-zinc-200">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-800 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Weddings • Stories • Lifetime</span>
            </div>

            <h1 className="font-serif-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-950 leading-[1.08]">
              Wedding Photography <br />
              <span className="text-zinc-500">&amp; Cinematic Films.</span>
            </h1>
          </div>

          <div className="max-w-md space-y-4">
            <p className="text-xs sm:text-sm md:text-base text-zinc-600 leading-relaxed font-normal">
              Specialized photo and cinema coverage for weddings, Gaye Holud, and engagement sessions. Capturing your most cherished memories with crisp clarity and emotion.
            </p>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1">
              <a
                href="#services"
                id="hero-view-packages-btn"
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-zinc-950 hover:bg-black transition-all shadow-sm hover:scale-[1.02] active:scale-95 whitespace-nowrap"
              >
                <span>View Packages</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#works"
                className="inline-flex items-center px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-zinc-900 border border-zinc-300 hover:border-zinc-950 hover:bg-zinc-50 transition-colors active:scale-95 whitespace-nowrap"
              >
                <span>Our Works</span>
              </a>

              {/* Book Shoot strictly in ONE LINE on mobile with live animation */}
              <a
                href="#booking"
                className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-900 bg-emerald-50/80 border border-emerald-300/80 hover:bg-emerald-100 hover:border-emerald-400 transition-all whitespace-nowrap active:scale-95 shadow-2xs"
              >
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="whitespace-nowrap">Book Shoot →</span>
              </a>
            </div>
          </div>
        </div>

        {/* Hero Slider Banner */}
        <div
          className="relative mt-6 sm:mt-8 rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-200 shadow-lg select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Animated Progress Timer Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/15 z-30 overflow-hidden">
            <div
              key={currentSlide + (isPaused ? "-paused" : "")}
              className={`h-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 origin-left ${
                isPaused ? "w-full opacity-60" : "animate-hero-progress"
              }`}
            />
          </div>

          {/* Slide Frame */}
          <div className="relative h-[360px] sm:h-[440px] md:h-[520px] lg:h-[560px] w-full overflow-hidden">
            {HERO_SLIDES.map((item, index) => {
              const isActive = index === currentSlide;
              return (
                <div
                  key={item.image}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    isActive ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
                  }`}
                >
                  {/* Background Image with Ken Burns pan/zoom on active */}
                  <div
                    className={`relative w-full h-full transform transition-transform duration-[6500ms] ease-out ${
                      isActive ? "scale-105" : "scale-100"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      priority={index <= 1}
                      className="object-cover object-center"
                      sizes="(max-width: 1280px) 100vw, 1280px"
                    />
                  </div>

                  {/* Gradient overlays for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/20" />

                  {/* Over-image caption with fadeInUp animation */}
                  {isActive && (
                    <div
                      key={`caption-${index}`}
                      className="absolute bottom-6 left-5 sm:bottom-8 sm:left-8 right-5 sm:right-auto text-white max-w-xl z-20 animate-fade-in-up"
                    >
                      <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full text-white border border-white/20">
                          {item.badge}
                        </span>
                        <span className="text-[11px] sm:text-xs text-amber-300/90 font-medium">
                          {item.category}
                        </span>
                      </div>

                      <h2 className="font-serif-display text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight sm:leading-tight text-white drop-shadow-sm">
                        {item.title}
                      </h2>

                      <p className="text-xs sm:text-sm text-zinc-200 mt-2 font-normal line-clamp-2 sm:line-clamp-none max-w-lg leading-relaxed">
                        {item.tagline}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Slider Controls (Desktop & Mobile accessible) */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2 z-30">
              <button
                onClick={() => setIsPaused((prev) => !prev)}
                aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/10 flex items-center justify-center transition-all active:scale-95"
                title={isPaused ? "Play" : "Pause"}
              >
                {isPaused ? <Play className="w-3.5 h-3.5 fill-current" /> : <Pause className="w-3.5 h-3.5" />}
              </button>

              <button
                onClick={handlePrev}
                aria-label="Previous slide"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/10 flex items-center justify-center transition-all active:scale-95"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next slide"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/10 flex items-center justify-center transition-all active:scale-95"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Interactive Dot & Counter Bar at bottom right */}
            <div className="absolute bottom-5 right-5 sm:bottom-7 sm:right-7 z-30 flex items-center gap-3 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
              {/* Dot indicators */}
              <div className="flex items-center gap-1.5">
                {HERO_SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`transition-all duration-300 rounded-full ${
                      i === currentSlide
                        ? "w-6 h-1.5 bg-amber-400"
                        : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>

              {/* Number Counter */}
              <div className="text-[11px] font-mono font-bold text-white tracking-wider pl-1 border-l border-white/20">
                <span>0{currentSlide + 1}</span>
                <span className="text-zinc-400 mx-0.5">/</span>
                <span className="text-zinc-400">0{HERO_SLIDES.length}</span>
              </div>
            </div>

            {/* Mobile swipe hint indicator */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 sm:hidden z-20 pointer-events-none">
              <span className="text-[10px] text-zinc-300/60 uppercase tracking-widest font-mono">
                Swipe ↔
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
