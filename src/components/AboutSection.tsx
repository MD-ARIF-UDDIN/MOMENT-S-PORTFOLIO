"use client";

import Image from "next/image";
import { Check, ShieldCheck, Heart, Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#fcfbf9] relative border-b border-[#eceae3]" aria-label="About Moment's Studio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 items-center">
          
          {/* Studio Craft Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-[#eceae3] bg-[#eceae3] shadow-md group">
              <Image
                src="/works/miton-moni-portrait.png"
                alt="Moment's Photography & Cinematography Studio Craft"
                fill
                className="object-cover img-zoom"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider text-[#181816] font-semibold shadow-xs">
                Fine-Art Craftsmanship
              </div>

              <div className="absolute bottom-5 left-5 right-5 p-4 sm:p-5 rounded-xl bg-black/70 backdrop-blur-md text-white border border-white/10">
                <p className="font-serif-display text-2xl font-normal leading-tight">
                  Moment&apos;s Studio
                </p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-300 font-mono mt-1">
                  Banskhali, Chattogram · Available Worldwide
                </p>
              </div>
            </div>
          </div>

          {/* Studio Information & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-[0.24em] text-zinc-500 font-semibold block font-mono">
                Our Creative Philosophy
              </span>

              <h2 className="font-serif-display text-3xl sm:text-5xl text-zinc-950 font-bold leading-tight tracking-tight">
                Weddings • Stories • Lifetime
              </h2>
            </div>

            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Based in Banskhali, Chattogram, <strong className="text-zinc-950 font-semibold">Moment&apos;s Photography &amp; Cinematography</strong> is built on an unwavering commitment to authentic storytelling, natural golden light, and timeless cinema-grade craft.
            </p>

            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              From grand royal wedding ceremonies and electrifying Gaye Holud celebrations to quiet, intimate pre-wedding moments and industrial commercial cinema, our team approaches every shoot with meticulous preparation and unobtrusive artistry.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-200 text-sm text-zinc-800">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#f6f5f0] border border-[#eceae3] flex items-center justify-center shrink-0 mt-0.5">
                  <Heart className="w-4 h-4 text-[#181816]" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-[#181816] uppercase tracking-wider font-mono">Emotional Truth</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">Capturing raw candid joy, heartfelt tears, and unprompted love.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#f6f5f0] border border-[#eceae3] flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-4 h-4 text-[#181816]" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-[#181816] uppercase tracking-wider font-mono">Cinema-Grade Motion</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">Multi-angle 4K motion, drone vistas, and master color grading.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#f6f5f0] border border-[#eceae3] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-[#181816]" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-[#181816] uppercase tracking-wider font-mono">Lifetime Archival</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">Private cloud download suites and heirloom print readiness.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#f6f5f0] border border-[#eceae3] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-[#181816]" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-[#181816] uppercase tracking-wider font-mono">Nationwide Coverage</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">Ready to travel anywhere across Bangladesh and international destinations.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
