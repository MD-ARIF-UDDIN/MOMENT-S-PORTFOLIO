"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { DETAILED_SERVICES, DetailedService } from "@/data/photographyData";

interface OurServicesProps {
  onOpenServiceDetails: (service: DetailedService) => void;
  onBookService: (serviceTitle: string) => void;
}

export default function OurServicesSection({
  onOpenServiceDetails,
  onBookService
}: OurServicesProps) {
  return (
    <section id="our-services" className="py-20 sm:py-24 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-14">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-wider text-zinc-500 font-bold block">
              What We Offer
            </span>
            <h2 className="font-serif-display text-3xl sm:text-5xl text-zinc-950 font-bold tracking-tight">
              Our Services
            </h2>
          </div>
          <p className="text-zinc-600 text-sm sm:text-base max-w-md sm:text-right font-normal">
            Specialized photography and cinematic video coverage for every milestone, celebration, and family story.
          </p>
        </div>

        {/* 10 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DETAILED_SERVICES.map((service, index) => {
            const indexStr = (index + 1).toString().padStart(2, "0");
            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:border-zinc-950 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Service Card Image */}
                  <div className="relative h-56 sm:h-60 w-full bg-zinc-100 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover img-zoom"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                    {/* Service Index */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full text-xs font-bold text-zinc-950 font-mono">
                      {indexStr}
                    </div>

                    {/* Price Badge */}
                    <div className="absolute top-3 right-3 bg-zinc-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white">
                      From {service.startingPrice}
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <span className="text-xs font-medium text-zinc-300 block">
                        {service.duration}
                      </span>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="p-6">
                    <h3 className="font-serif-display text-xl sm:text-2xl text-zinc-950 font-bold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-zinc-100 gap-2">
                  <button
                    onClick={() => onOpenServiceDetails(service)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-950 hover:text-zinc-600 transition-colors py-1.5"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onBookService(service.title)}
                    className="px-4 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-950 hover:text-white text-zinc-950 text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
