"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { COMPANY_INFO } from "@/data/photographyData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Portfolio", href: "#works" },
    { label: "Services", href: "#our-services" },
    { label: "Albums", href: "#albums" },
    { label: "Films", href: "#films" },
    { label: "Packages", href: "#services" },
    { label: "Team", href: "#team" },
    { label: "About", href: "#about" },
  ];

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#fcfbf9]/95 backdrop-blur-md border-b border-[#eceae3] py-3 shadow-xs"
            : "bg-[#fcfbf9]/85 backdrop-blur-sm border-b border-[#eceae3]/70 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 focus:outline-none"
            aria-label="Moment's Photography Homepage"
          >
            <div className="relative h-10 w-8 sm:h-11 sm:w-9 shrink-0">
              <Image
                src="/logo.png"
                alt="Moment's Logo"
                fill
                priority
                className="object-contain invert"
                sizes="44px"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-display text-2xl sm:text-3xl tracking-normal font-normal text-[#181816] leading-none">
                Moment&apos;s
              </span>
              <span className="text-[9px] uppercase tracking-[0.28em] text-[#807d74] mt-1 font-mono">
                Photography Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-[0.16em] text-[#57554f] hover:text-[#181816] transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Facebook Icon Button */}
            <a
              href={COMPANY_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Moment's on Facebook"
              className="p-2 rounded-full text-[#57554f] hover:text-[#181816] hover:bg-[#eceae3]/60 transition-colors flex items-center justify-center"
              title="Facebook"
            >
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            <a
              href="#booking"
              id="nav-inquire-btn"
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-medium uppercase tracking-[0.14em] text-white bg-[#181816] hover:bg-black rounded-full transition-colors shadow-xs"
            >
              Book Shoot
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-zinc-700 hover:text-black focus:outline-none"
              aria-label="Toggle navigation menu"
              id="mobile-nav-toggle"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-black" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-white flex flex-col justify-between pt-20 pb-8 px-6 lg:hidden"
          style={{ height: "100dvh" }}
        >
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-zinc-100">
              <div className="relative h-10 w-8 shrink-0">
                <Image
                  src="/logo.png"
                  alt="Moment's Logo"
                  fill
                  className="object-contain invert"
                  sizes="40px"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-display text-xl text-black">
                  Moment&apos;s
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                  Photography Studio
                </span>
              </div>
            </div>

            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-serif-display text-zinc-800 hover:text-black py-2.5 border-b border-zinc-100 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-zinc-400 text-sm">→</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-4 border-t border-zinc-100 space-y-3">
            <div className="flex items-center justify-between pb-1">
              <span className="text-xs uppercase tracking-wider text-zinc-500 font-medium">Follow Us</span>
              <a
                href={COMPANY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-zinc-800 hover:text-black py-1 px-3 rounded-full bg-zinc-100 transition-colors"
              >
                <svg
                  className="w-3.5 h-3.5 fill-current text-zinc-700"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Facebook</span>
              </a>
            </div>

            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-full text-center text-xs font-semibold uppercase tracking-wider text-white bg-black block"
            >
              Reserve a Date
            </a>
            <p className="text-center text-[11px] text-zinc-500">
              hello@momentsphotography.com · +1 (800) 542-6636
            </p>
          </div>
        </div>
      )}
    </>
  );
}
