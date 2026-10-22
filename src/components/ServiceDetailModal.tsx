"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, Check, ArrowRight, MessageCircle } from "lucide-react";
import { DetailedService, COMPANY_INFO } from "@/data/photographyData";

interface ServiceDetailModalProps {
  service: DetailedService | null;
  onClose: () => void;
  onBookService: (serviceTitle: string) => void;
}

export default function ServiceDetailModal({
  service,
  onClose,
  onBookService
}: ServiceDetailModalProps) {
  useEffect(() => {
    if (!service) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={service.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-3 sm:p-5"
    >
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative max-w-3xl w-full max-h-[92dvh] flex flex-col bg-[#fcfbf9] rounded-2xl overflow-hidden shadow-2xl border border-[#eceae3] z-10 animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black text-white transition-colors border border-white/20"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Hero Image */}
        <div className="relative h-60 sm:h-72 w-full bg-[#eceae3] shrink-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
          <div className="absolute bottom-5 left-6 right-6 text-white">
            <span className="text-[10px] uppercase tracking-[0.25em] bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full font-mono">
              {service.duration}
            </span>
            <h3 className="font-serif-display text-3xl sm:text-4xl font-normal mt-1.5 leading-tight">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Price & Overview */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-5 border-b border-[#eceae3]">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#807d74] font-mono">Starting Investment</span>
              <p className="font-serif-display text-4xl font-normal text-[#181816] mt-0.5">
                {service.startingPrice}
              </p>
            </div>
            <p className="text-xs text-[#57554f] font-mono">
              Standard Coverage: {service.duration}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-[#57554f] leading-relaxed font-light">
            {service.fullDesc}
          </p>

          {/* Deliverables Checklist */}
          <div className="space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#181816]">
              Deliverables &amp; What Is Included
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {service.deliverables.map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-xs text-[#57554f]">
                  <Check className="w-3.5 h-3.5 text-[#181816] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          {service.features && service.features.length > 0 && (
            <div className="p-4 rounded-xl bg-[#f6f5f0] border border-[#eceae3]">
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#807d74] block mb-2 font-mono">
                Atelier Highlights
              </span>
              <ul className="flex flex-wrap gap-2">
                {service.features.map((feat) => (
                  <li key={feat} className="text-xs px-3 py-1 rounded-full bg-white border border-[#eceae3] text-[#181816]">
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Sample Images Strip */}
          {service.sampleImages && service.sampleImages.length > 1 && (
            <div className="space-y-2.5">
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#807d74] block font-mono">
                Representative Works
              </span>
              <div className="grid grid-cols-3 gap-3">
                {service.sampleImages.map((img, idx) => (
                  <div key={idx} className="relative h-28 rounded-xl overflow-hidden bg-[#eceae3] border border-[#eceae3]">
                    <Image
                      src={img}
                      alt={`${service.title} sample ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="250px"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Actions Footer */}
        <div className="p-4 sm:p-6 border-t border-[#eceae3] bg-[#f6f5f0] flex items-center justify-between gap-3 shrink-0">
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#d9d6cb] hover:border-[#181816] text-xs text-[#181816] transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Chat on WhatsApp</span>
          </a>

          <button
            onClick={() => {
              // Build WhatsApp message with service detail info
              const featureList = service.features.map(f => `  • ${f}`).join('\n');
              const waText =
`*SERVICE INQUIRY — MOMENT'S PHOTOGRAPHY*

I am interested in booking the following service:

*Service:* ${service.title}
*Duration:* ${service.duration}
*Starting Price:* ${service.startingPrice}

*Key Features:*
${featureList}

Please provide more information and available dates.`;
              window.open(
                `https://wa.me/8801643666825?text=${encodeURIComponent(waText)}`,
                "_blank",
                "noopener,noreferrer"
              );
              onBookService(service.title);
              onClose();
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold uppercase tracking-[0.14em] transition-colors shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Inquire via WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
