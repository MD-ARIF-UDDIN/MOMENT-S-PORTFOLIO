"use client";

import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { COMPANY_INFO } from "@/data/photographyData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#fcfbf9] border-t border-[#eceae3] pt-16 pb-10 sm:pt-20 sm:pb-12 text-[#57554f] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 sm:pb-16 border-b border-[#eceae3]">
          {/* Brand Info with Inverted Black Logo */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-9 shrink-0">
                <Image
                  src="/logo.png"
                  alt="Moment's Logo"
                  fill
                  className="object-contain invert"
                  sizes="44px"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-display text-2xl tracking-normal font-normal text-[#181816] leading-none">
                  Moment&apos;s
                </span>
                <span className="text-[9px] uppercase tracking-[0.28em] text-[#807d74] mt-1 font-mono">
                  Photography Studio
                </span>
              </div>
            </div>
            <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed max-w-sm">
              Wedding photography, cinematic films, Gaye Holud coverage, and heirloom portraiture. Based in Banskhali, Chattogram, available across Bangladesh and worldwide.
            </p>
          </div>

          {/* Column 1: Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#181816] font-mono">
              Portfolio
            </h4>
            <ul className="space-y-2">
              <li><a href="#works" className="hover:text-[#181816] transition-colors">Portfolio</a></li>
              <li><a href="#our-services" className="hover:text-[#181816] transition-colors">Our Services</a></li>
              <li><a href="#albums" className="hover:text-[#181816] transition-colors">Client Albums</a></li>
              <li><a href="#films" className="hover:text-[#181816] transition-colors">Cinematic Films</a></li>
              <li><a href="#services" className="hover:text-[#181816] transition-colors">Collections</a></li>
            </ul>
          </div>

          {/* Column 2: Studio */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#181816] font-mono">
              Studio
            </h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-[#181816] transition-colors">Philosophy</a></li>
              <li><a href="#team" className="hover:text-[#181816] transition-colors">Our Team</a></li>
              <li><a href="#services" className="hover:text-[#181816] transition-colors">Pricing Guide</a></li>
              <li><a href="#faq" className="hover:text-[#181816] transition-colors">FAQ</a></li>
              <li><a href="#booking" className="hover:text-[#181816] transition-colors">Commission</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Summary */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#181816] font-mono">
              Direct Contact
            </h4>
            <p className="text-[#57554f] text-xs leading-relaxed font-light">
              Atelier: {COMPANY_INFO.headquarters}<br />
              Email: {COMPANY_INFO.email}<br />
              Telephone: {COMPANY_INFO.phone}
            </p>
            <p className="text-[#807d74] text-[11px] pt-1 font-mono">
              Available for commissions worldwide.
            </p>
            <div className="pt-2">
              <a
                href={COMPANY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-[#181816] hover:text-[#57554f] transition-colors font-medium"
                aria-label="Visit Moment's on Facebook"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Follow on Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[#807d74] text-[11px] font-mono">
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-[11px]">
            <a href="#booking" className="hover:text-[#181816] transition-colors">Commission Shoot</a>
            <span className="text-[#eceae3]">·</span>
            <a href="#services" className="hover:text-[#181816] transition-colors">Pricing Guide</a>
            <span className="text-[#eceae3]">·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#57554f] hover:text-[#181816] transition-colors font-medium"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
