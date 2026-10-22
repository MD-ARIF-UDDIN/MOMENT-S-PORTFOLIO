"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X, Film, Clock, MapPin } from "lucide-react";
import { FILMS_DATA, FilmWork, COMPANY_INFO } from "@/data/photographyData";

interface FilmsSectionProps {
  onInquireFilm: (filmTitle: string) => void;
}

function getVideoEmbedUrl(url: string): { type: "facebook" | "youtube" | "html5"; src: string } {
  if (url.includes("facebook.com") || url.includes("fb.watch")) {
    return {
      type: "facebook",
      src: `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&autoplay=1`
    };
  }
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    if (url.includes("/embed/")) {
      return { type: "youtube", src: `${url}?autoplay=1&rel=0` };
    }
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    const videoId = match && match[2].length === 11 ? match[2] : null;
    return {
      type: "youtube",
      src: videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0` : url
    };
  }
  return { type: "html5", src: url };
}

export default function FilmsSection({ onInquireFilm }: FilmsSectionProps) {
  const [selectedFilm, setSelectedFilm] = useState<FilmWork | null>(null);

  return (
    <section id="films" className="py-20 sm:py-28 bg-[#f8fafc] border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16">
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-[0.22em] text-zinc-500 font-semibold block font-mono flex items-center gap-2">
              <Film className="w-3.5 h-3.5" />
              Motion &amp; Cinema
            </span>
            <h2 className="font-serif-display text-3xl sm:text-5xl text-zinc-950 font-bold tracking-tight">
              Cinematic Films
            </h2>
          </div>
          <p className="text-zinc-600 text-sm max-w-md sm:text-right">
            4K cinema-grade wedding highlights and motion campaigns with analog color grading and live vow audio.
          </p>
        </div>

        {/* Films Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {FILMS_DATA.map((film) => (
            <div
              key={film.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#eceae3] hover:border-[#181816] shadow-xs hover:shadow-md transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail with Play Overlay */}
                <div
                  onClick={() => setSelectedFilm(film)}
                  className="relative aspect-video w-full bg-[#181816] cursor-pointer overflow-hidden"
                >
                  <Image
                    src={film.thumbnail}
                    alt={film.title}
                    fill
                    className="object-cover opacity-90 img-zoom"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors" />

                  {/* Play Button Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/95 text-[#181816] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-white transition-transform">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-md text-white px-2.5 py-1 rounded-full text-[10px] font-mono flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-zinc-400" />
                    <span>{film.duration}</span>
                  </div>
                </div>

                {/* Film Details */}
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#807d74] mb-2 font-mono">
                    <MapPin className="w-3 h-3 text-[#807d74]" />
                    <span>{film.location}</span>
                    <span className="mx-1">·</span>
                    <span className="text-[#181816]">{film.coupleOrClient}</span>
                  </div>

                  <h3 className="font-serif-display text-2xl text-[#181816] font-normal mb-2 leading-snug">
                    {film.title}
                  </h3>

                  <p className="text-xs text-[#57554f] leading-relaxed font-light">
                    {film.description}
                  </p>
                </div>
              </div>

              {/* Action Bar */}
              <div className="px-6 pb-6 pt-3 flex items-center justify-between border-t border-zinc-100">
                <a
                  href={film.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-[0.14em] font-bold text-zinc-950 hover:text-[#1877F2] transition-colors inline-flex items-center gap-1.5 group/btn"
                >
                  <div className="w-6 h-6 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center group-hover/btn:bg-[#1877F2] group-hover/btn:text-white transition-colors">
                    <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                  </div>
                  <span>Watch on Facebook</span>
                </a>

                <button
                  onClick={() => onInquireFilm(film.title)}
                  className="px-4 py-1.5 rounded-full bg-zinc-100 hover:bg-zinc-950 hover:text-white text-zinc-900 text-xs font-semibold uppercase tracking-[0.12em] transition-colors"
                >
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Facebook Films Showcase Banner */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-white border border-zinc-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <span className="text-[11px] uppercase tracking-[0.22em] text-zinc-500 font-semibold block font-mono">
              Live Feed &amp; Highlights
            </span>
            <h3 className="font-serif-display text-xl sm:text-2xl text-zinc-950 font-bold tracking-tight">
              Watch Our Full Wedding Teasers &amp; Short Reels on Facebook
            </h3>
            <p className="text-zinc-600 text-xs sm:text-sm">
              We regularly publish wedding cinematic teasers, Gaye Holud highlights, and client stories on our official page.
            </p>
          </div>

          <a
            href={COMPANY_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs uppercase tracking-[0.14em] font-semibold transition-all shadow-sm hover:shadow shrink-0"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span>Visit @Moments7775</span>
          </a>
        </div>
      </div>

      {/* Video Lightbox Modal */}
      {selectedFilm && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6"
        >
          <div className="absolute inset-0" onClick={() => setSelectedFilm(null)} />

          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl z-10 border border-zinc-800">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-zinc-950/90 border-b border-zinc-800 text-white">
              <div>
                <h4 className="font-serif-display text-xl font-normal">{selectedFilm.title}</h4>
                <p className="text-xs text-zinc-400 font-mono mt-0.5">{selectedFilm.location} · {selectedFilm.coupleOrClient}</p>
              </div>
              <button
                onClick={() => setSelectedFilm(null)}
                className="p-2 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player (Supports Facebook Cinema Showcase, YouTube, and Direct Video) */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
              {(() => {
                const isFacebook = selectedFilm.videoUrl.includes("facebook.com") || selectedFilm.videoUrl.includes("fb.watch");
                if (isFacebook) {
                  return (
                    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                      {/* Atmospheric Blurred Background */}
                      <Image
                        src={selectedFilm.thumbnail}
                        alt={selectedFilm.title}
                        fill
                        sizes="100vw"
                        className="object-cover scale-110 filter blur-md opacity-45"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40" />

                      {/* Foreground Cinema Card */}
                      <div className="relative z-10 text-center p-6 sm:p-10 max-w-lg space-y-5">
                        <a
                          href={selectedFilm.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative inline-block group"
                          aria-label={`Play ${selectedFilm.title} on Facebook`}
                        >
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#1877F2] text-white flex items-center justify-center mx-auto shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-[#166fe5]">
                            <Play className="w-9 h-9 sm:w-10 sm:h-10 fill-current ml-1" />
                          </div>
                        </a>

                        <div className="space-y-1.5 text-white">
                          <span className="text-[11px] uppercase tracking-[0.24em] text-[#70a9ff] font-semibold font-mono block">
                            Stream via Official Facebook Page
                          </span>
                          <h4 className="font-serif-display text-2xl sm:text-3xl font-bold leading-tight">
                            {selectedFilm.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto">
                            Plays in 4K with full original music &amp; audio directly on Facebook.
                          </p>
                        </div>

                        <div className="pt-2">
                          <a
                            href={selectedFilm.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs uppercase tracking-[0.16em] font-bold transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                          >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                            <span>Watch Reel on Facebook</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                }

                const embed = getVideoEmbedUrl(selectedFilm.videoUrl);
                if (embed.type === "html5") {
                  return (
                    <video
                      src={embed.src}
                      controls
                      autoPlay
                      className="w-full h-full object-contain"
                    />
                  );
                }
                return (
                  <iframe
                    src={embed.src}
                    title={selectedFilm.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                );
              })()}
            </div>

            {/* Modal Bottom Bar */}
            <div className="p-5 bg-zinc-950 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-zinc-400 border-t border-zinc-800">
              <p className="font-light">{selectedFilm.description}</p>
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={selectedFilm.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#1877F2] hover:bg-[#166fe5] text-white rounded-full font-medium text-xs uppercase tracking-[0.12em] transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Watch on Facebook</span>
                </a>
                <button
                  onClick={() => {
                    const title = selectedFilm.title;
                    const waText =
`*CINEMATIC FILM INQUIRY — MOMENT'S PHOTOGRAPHY*

I watched your film on Facebook and would like to commission a similar cinematic work:

*Film Reference:* ${title}
*Style / Client:* ${selectedFilm.coupleOrClient}
*Type:* ${selectedFilm.duration}
*Location:* ${selectedFilm.location}

Please share available dates, rates, and your cinematic wedding/event packages.`;
                    window.open(
                      `https://wa.me/8801643666825?text=${encodeURIComponent(waText)}`,
                      "_blank",
                      "noopener,noreferrer"
                    );
                    setSelectedFilm(null);
                    onInquireFilm(title);
                  }}
                  className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-semibold text-xs uppercase tracking-[0.12em] transition-colors inline-flex items-center gap-1.5"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 2C6.495 2 2 6.486 2 12.012c0 1.954.561 3.86 1.626 5.502L2 22l4.636-1.583A10.02 10.02 0 0 0 12.031 22C17.568 22 22 17.514 22 12.012 22 6.486 17.568 2 12.031 2Zm5.792 14.288c-.244.686-1.222 1.294-1.874 1.344-.614.047-1.408.067-4.148-1.066-3.298-1.365-5.385-4.717-5.55-4.935-.165-.218-1.332-1.77-1.332-3.376 0-1.606.84-2.395 1.139-2.72.298-.326.653-.408.871-.408.217 0 .435.002.624.011.202.01.472-.077.738.563.272.653.926 2.261 1.008 2.428.082.167.136.363.027.581-.109.218-.163.354-.326.545-.163.19-.344.426-.492.572-.163.164-.333.342-.143.669.19.327.848 1.398 1.817 2.261 1.246 1.11 2.296 1.455 2.623 1.618.327.163.517.136.708-.082.19-.218.816-.953 1.034-1.28.217-.326.435-.272.734-.163.299.109 1.897.896 2.223 1.06.326.163.544.245.626.381.082.136.082.789-.163 1.475Z"/>
                  </svg>
                  Commission Cinema
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
