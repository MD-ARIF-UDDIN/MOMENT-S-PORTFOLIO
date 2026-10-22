"use client";

import { useState } from "react";
import { Check, ArrowRight, CheckCircle2 } from "lucide-react";
import {
  WEDDING_PACKAGES,
  HOLUD_PACKAGES,
  ENGAGEMENT_PACKAGES,
  ADDITIONAL_SERVICES,
} from "@/data/photographyData";

interface ServicesProps {
  onSelectPackage: (packageName: string) => void;
}

export default function ServicesSection({ onSelectPackage }: ServicesProps) {
  const [activeTab, setActiveTab] = useState<"wedding" | "holud" | "engagement">("wedding");

  const tabs = [
    { id: "wedding" as const, label: "Wedding Packages", count: "3 Options" },
    { id: "holud" as const, label: "Gaye Holud Packages", count: "3 Options" },
    { id: "engagement" as const, label: "Engagement & Couple", count: "3 Options" },
  ];

  const currentPackages =
    activeTab === "wedding"
      ? WEDDING_PACKAGES
      : activeTab === "holud"
      ? HOLUD_PACKAGES
      : ENGAGEMENT_PACKAGES;

  const processSteps = [
    {
      step: "01",
      title: "Consultation & Booking",
      desc: "Discuss your event plan, timeline, and lock your date with an advance retainer."
    },
    {
      step: "02",
      title: "Event Day Coverage",
      desc: "Directed photo and cinema team capturing every emotional moment and candid smiles."
    },
    {
      step: "03",
      title: "Master Editing & Grading",
      desc: "Color grading, skin retouching, and cinematic music scoring for your highlight films."
    },
    {
      step: "04",
      title: "Digital & Album Delivery",
      desc: "High-resolution private gallery download link, highlight videos, and custom photobook."
    }
  ];

  return (
    <section id="services" className="py-20 sm:py-24 bg-zinc-50 border-b border-zinc-200" aria-label="Services and Pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-3">
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold block">
            Pricing &amp; Packages
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl text-zinc-950 font-bold tracking-tight">
            Clear, All-Inclusive Packages
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Choose the perfect package for your wedding, Gaye Holud, or engagement. No hidden fees.
          </p>
        </div>

        {/* Clean Segmented Category Tabs */}
        <div className="flex justify-center mb-10 sm:mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-zinc-200/70 border border-zinc-300/80 shadow-inner max-w-full overflow-x-auto no-scrollbar gap-1.5">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 sm:px-7 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                    isActive
                      ? "bg-white text-zinc-950 shadow-sm font-bold"
                      : "text-zinc-600 hover:text-zinc-950 hover:bg-white/40"
                  }`}
                >
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {currentPackages.map((pkg) => {
            const isPopular = pkg.popular;
            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl flex flex-col justify-between p-6 sm:p-8 bg-white transition-all duration-300 ${
                  isPopular
                    ? "border-2 border-zinc-950 shadow-xl md:-translate-y-2 ring-4 ring-zinc-950/5"
                    : "border border-zinc-200 hover:border-zinc-400 shadow-sm hover:shadow-md"
                }`}
              >
                {/* Most Popular Ribbon */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-zinc-950 text-white text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  {/* Top Details */}
                  <div className="mb-6 pb-6 border-b border-zinc-100">
                    <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold block">
                      {pkg.category}
                    </span>
                    <h3 className="font-serif-display text-2xl sm:text-3xl text-zinc-950 mt-1 mb-2 font-bold">
                      {pkg.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed min-h-[38px]">
                      {pkg.subtitle}
                    </p>

                    {/* Price */}
                    <div className="mt-5 pt-5 border-t border-zinc-100 flex items-baseline gap-2">
                      <span className="font-serif-display text-4xl sm:text-5xl font-black text-zinc-950 tracking-tight">
                        {pkg.price}
                      </span>
                      <span className="text-xs sm:text-sm text-zinc-500 font-medium">/ event</span>
                    </div>
                  </div>

                  {/* Deliverables List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs uppercase tracking-wider text-zinc-900 font-bold block">
                      Package Inclusions:
                    </span>
                    <ul className="space-y-2.5">
                      {pkg.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-800">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Select Package CTA Button */}
                <button
                  onClick={() => {
                    // Build fully detailed WhatsApp booking message for this package
                    const deliverableList = pkg.deliverables.map(d => `  • ${d}`).join('\n');
                    const waText =
`*PACKAGE BOOKING INQUIRY — MOMENT'S PHOTOGRAPHY*

I would like to book the following package:

*Package:* ${pkg.title}
*Category:* ${pkg.category}
*Price:* ${pkg.price} / event
*Coverage:* ${pkg.coverage}
*Delivery:* ${pkg.turnaround}

*Included Deliverables:*
${deliverableList}

Please confirm availability and next steps.`;
                    window.open(
                      `https://wa.me/8801643666825?text=${encodeURIComponent(waText)}`,
                      "_blank",
                      "noopener,noreferrer"
                    );
                    // Also scroll to booking form for additional detail entry
                    onSelectPackage(`${pkg.category} — ${pkg.title} (${pkg.price})`);
                  }}
                  className={`w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    isPopular
                      ? "bg-zinc-950 hover:bg-black text-white shadow-md hover:scale-[1.01]"
                      : "bg-zinc-100 hover:bg-zinc-950 hover:text-white text-zinc-900 border border-zinc-200"
                  }`}
                >
                  <span>Book {pkg.title} via WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Additional Services & Add-Ons Table (Direct from user rate card) */}
        <div className="mb-16 sm:mb-20">
          <div className="p-6 sm:p-10 rounded-2xl bg-white border border-zinc-200 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-6 border-b border-zinc-100">
              <div>
                <span className="text-xs uppercase tracking-wider text-zinc-500 font-bold block">
                  A La Carte
                </span>
                <h3 className="font-serif-display text-2xl sm:text-3xl text-zinc-950 font-bold mt-1">
                  Additional Services &amp; Add-Ons
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 max-w-sm">
                Customize any package with extra coverage hours, drone cinema, and handcrafted albums.
              </p>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-zinc-200 text-xs uppercase tracking-wider text-zinc-500 font-bold">
                    <th className="py-3 px-4">Service</th>
                    <th className="py-3 px-4">Details</th>
                    <th className="py-3 px-4 text-right">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 text-xs sm:text-sm">
                  {ADDITIONAL_SERVICES.map((item) => (
                    <tr key={item.name} className="hover:bg-zinc-50 transition-colors">
                      <td className="py-4 px-4 font-bold text-zinc-950">
                        {item.name}
                      </td>
                      <td className="py-4 px-4 text-zinc-600 text-xs">
                        {item.note}
                      </td>
                      <td className="py-4 px-4 text-right font-black text-zinc-950 whitespace-nowrap text-sm sm:text-base">
                        {item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-zinc-500 mt-4 pt-4 border-t border-zinc-100">
              *Drone coverage is subject to permissions and weather conditions.
            </p>
          </div>
        </div>

        {/* 4-Step Process Section */}
        <div className="p-8 sm:p-12 rounded-2xl bg-white border border-zinc-200 shadow-sm">
          <div className="text-center max-w-md mx-auto mb-10 space-y-2">
            <span className="text-xs uppercase tracking-wider text-zinc-500 font-bold block">
              How It Works
            </span>
            <h3 className="font-serif-display text-2xl sm:text-3xl text-zinc-950 font-bold">
              Simple 4-Step Process
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="space-y-2">
                <span className="text-3xl font-black text-zinc-300 block font-serif-display">
                  {step.step}
                </span>
                <h4 className="font-serif-display text-lg text-zinc-950 font-bold">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
