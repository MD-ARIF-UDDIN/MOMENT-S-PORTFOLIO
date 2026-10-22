"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { PhotoWork } from "@/data/photographyData";

interface LightboxProps {
  work: PhotoWork | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSelectBookingCategory: (category: string) => void;
}

export default function LightboxModal({
  work,
  onClose,
  onPrev,
  onNext,
  onSelectBookingCategory
}: LightboxProps) {
  useEffect(() => {
    if (!work) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [work, onClose, onPrev, onNext]);

  if (!work) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={work.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-3 sm:p-5"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        id="lightbox-close-btn"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-colors"
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev / Next Buttons */}
      <button
        onClick={onPrev}
        id="lightbox-prev-btn"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-white text-white hover:text-black transition-colors border border-white/10"
        aria-label="Previous"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={onNext}
        id="lightbox-next-btn"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-white text-white hover:text-black transition-colors border border-white/10"
        aria-label="Next"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Modal Card */}
      <div className="relative max-w-5xl w-full max-h-[92dvh] flex flex-col lg:flex-row bg-[#111114] border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
        {/* Image Area */}
        <div className="relative w-full lg:w-3/5 h-[40vh] sm:h-[50vh] lg:h-[78vh] bg-black">
          <Image
            src={work.image}
            alt={work.alt}
            fill
            priority
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-2/5 p-5 sm:p-6 flex flex-col justify-between overflow-y-auto bg-[#18181b] border-t lg:border-t-0 lg:border-l border-white/10 text-white">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold text-zinc-400">
                {work.categoryLabel}
              </span>
              <span className="text-xs text-zinc-400 font-mono">
                {work.year}
              </span>
            </div>

            <div>
              <h3 className="font-serif-display text-xl sm:text-2xl text-white font-normal mb-1">
                {work.title}
              </h3>
              <p className="text-xs text-zinc-400">
                {work.location} · {work.client}
              </p>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed font-light">
              {work.story}
            </p>

          </div>

          <div className="pt-4 border-t border-white/10 mt-4 space-y-2">
            {work.facebookUrl && (
              <a
                href={work.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>View Post on Facebook</span>
              </a>
            )}
            <button
              onClick={() => {
                onSelectBookingCategory(work.category);
                onClose();
              }}
              className="w-full py-2.5 px-4 rounded-lg bg-white hover:bg-zinc-200 text-black text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Inquire About a Shoot
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
