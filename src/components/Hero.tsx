"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/photographyData";

const HERO_SLIDES = [
  {
    title: "Wedding Photography & Cinematography",
    category: "Full Day Wedding Coverage",
    image: "/works/miton-moni-tea-garden.jpg",
    tagline: "Candid emotional moments, vows, and grand reception cinema",
    badge: "Weddings"
  },
  {
    title: "Festive Gaye Holud Celebrations",
    category: "Gaye Holud & Festive Cinema",
    image: "/works/samrat-holud.jpg",
    tagline: "Vibrant family traditions, dance performances, and candid laughter",
    badge: "Gaye Holud"
  },
  {
    title: "Miton X Moni — Pre-Wedding Stories",
    category: "Romantic Portraits",
    image: "/works/miton-moni-portrait.png",
    tagline: "Scenic outdoor couple portraits and cinematic pre-wedding memories",
    badge: "Couples"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section
      id="hero"
      className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 bg-white overflow-hidden border-b border-zinc-200"
      aria-label="Hero Showcase"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Clean Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 sm:pb-10 border-b border-zinc-200">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-800 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Weddings • Stories • Lifetime</span>
            </div>

            <h1 className="font-serif-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-zinc-950 leading-[1.08]">
              Wedding Photography <br />
              <span className="text-zinc-600">&amp; Cinematic Films.</span>
            </h1>
          </div>

          <div className="max-w-md space-y-4">
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
              Specialized photo and cinema coverage for weddings, Gaye Holud, and engagement sessions. Capturing your most cherished memories with crisp clarity and emotion.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#services"
                id="hero-view-packages-btn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-zinc-950 hover:bg-black transition-all shadow-sm hover:scale-[1.01]"
              >
                <span>View Packages</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#works"
                className="inline-flex items-center px-5 py-3 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-zinc-900 border border-zinc-300 hover:border-zinc-950 hover:bg-zinc-50 transition-colors"
              >
                <span>Our Works</span>
              </a>

              <a
                href="#booking"
                className="inline-flex items-center px-4 py-3 text-xs sm:text-sm font-medium text-zinc-600 hover:text-black transition-colors"
              >
                <span>Book Shoot →</span>
              </a>
            </div>
          </div>
        </div>

        {/* Hero Slider Banner */}
        <div className="relative mt-8 rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200 shadow-sm">
          <div className="relative h-[380px] sm:h-[480px] md:h-[540px] w-full">
            {HERO_SLIDES.map((item, index) => (
              <div
                key={item.image}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  priority={index === 0}
                  className="object-cover img-zoom"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Over-image caption */}
                <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 right-6 text-white max-w-xl">
                  <span className="text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white inline-block mb-2">
                    {item.badge}
                  </span>

                  <h2 className="font-serif-display text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
                    {item.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-200 mt-1.5 font-normal">
                    {item.tagline}
                  </p>
                </div>
              </div>
            ))}

            {/* Slider Controls */}
            <div className="absolute top-6 right-6 flex items-center gap-2 z-20">
              <button
                onClick={handlePrev}
                aria-label="Previous slide"
                className="w-10 h-10 rounded-full bg-black/50 hover:bg-black text-white flex items-center justify-center transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next slide"
                className="w-10 h-10 rounded-full bg-black/50 hover:bg-black text-white flex items-center justify-center transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-6 right-6 z-20 hidden sm:flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-white font-mono text-xs font-bold">
              <span>{currentSlide + 1}</span>
              <span className="text-zinc-400">/</span>
              <span className="text-zinc-400">{HERO_SLIDES.length}</span>
            </div>
          </div>
        </div>

        {/* Studio Numbers Grid */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-zinc-200">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <span className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-950 block">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
