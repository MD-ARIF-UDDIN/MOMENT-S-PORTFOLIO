"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
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
    { label: "Photography", href: "#photography" },
    { label: "Films", href: "#films" },
    { label: "Services", href: "#our-services" },
    { label: "Packages", href: "#services" },
    { label: "Founder & Team", href: "#team" },
    { label: "Contact", href: "#booking" },
  ];

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#fcfbf9]/95 backdrop-blur-md border-b border-[#eceae3] py-2 sm:py-3 shadow-xs"
            : "bg-[#fcfbf9]/90 backdrop-blur-sm border-b border-[#eceae3]/70 py-2.5 sm:py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
          {/* Logo & Brand Identity */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 focus:outline-none group shrink-0"
            aria-label="Moment's Photography Homepage"
          >
            <div className="relative h-9 w-7 sm:h-11 sm:w-9 shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Moment's Logo"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 640px) 32px, 40px"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-brand text-2xl sm:text-3xl md:text-4xl tracking-tight font-semibold leading-none select-none transition-all duration-300">
                <span className="bg-gradient-to-r from-[#181816] via-[#78543a] to-[#181816] bg-clip-text text-transparent animate-shimmer inline-block">
                  Moment&apos;s
                </span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-[0.16em] text-[#57554f] hover:text-[#181816] transition-colors font-medium relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#181816] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Elements: Fully Structured on Mobile */}
          <div className="flex items-center gap-1 sm:gap-2.5 shrink-0">
            {/* Real Official WhatsApp Header Icon Button */}
            <a
              href="https://wa.me/8801643666825"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Moment's on WhatsApp"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white transition-all flex items-center justify-center shrink-0 active:scale-95"
              title="Chat on WhatsApp"
            >
              <svg
                className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current shrink-0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.031 2C6.495 2 2 6.486 2 12.012c0 1.954.561 3.86 1.626 5.502L2 22l4.636-1.583A10.02 10.02 0 0 0 12.031 22C17.568 22 22 17.514 22 12.012 22 6.486 17.568 2 12.031 2Zm5.792 14.288c-.244.686-1.222 1.294-1.874 1.344-.614.047-1.408.067-4.148-1.066-3.298-1.365-5.385-4.717-5.55-4.935-.165-.218-1.332-1.77-1.332-3.376 0-1.606.84-2.395 1.139-2.72.298-.326.653-.408.871-.408.217 0 .435.002.624.011.202.01.472-.077.738.563.272.653.926 2.261 1.008 2.428.082.167.136.363.027.581-.109.218-.163.354-.326.545-.163.19-.344.426-.492.572-.163.164-.333.342-.143.669.19.327.848 1.398 1.817 2.261 1.246 1.11 2.296 1.455 2.623 1.618.327.163.517.136.708-.082.19-.218.816-.953 1.034-1.28.217-.326.435-.272.734-.163.299.109 1.897.896 2.223 1.06.326.163.544.245.626.381.082.136.082.789-.163 1.475Z" />
              </svg>
            </a>

            {/* Official Facebook Icon Button */}
            <a
              href={COMPANY_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Moment's on Facebook"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#1877F2]/10 hover:bg-[#1877F2] text-[#1877F2] hover:text-white transition-all flex items-center justify-center shrink-0 active:scale-95"
              title="Facebook Page"
            >
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current shrink-0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* Book Shoot CTA Button: Always strictly in ONE LINE with LIVE pulse animation */}
            <a
              href="#booking"
              id="nav-inquire-btn"
              className="inline-flex items-center gap-1.5 whitespace-nowrap px-2.5 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white bg-zinc-950 hover:bg-black rounded-full transition-all duration-300 shadow-xs hover:shadow-md shrink-0 active:scale-95 border border-zinc-800"
            >
              {/* Live Animation Ping Dot */}
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="whitespace-nowrap">Book Shoot</span>
            </a>

            {/* Mobile Animated Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center shrink-0 text-zinc-900 hover:bg-zinc-100 transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              id="mobile-nav-toggle"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-black animate-spin-fast" />
              ) : (
                <Menu className="w-5 h-5 text-zinc-900" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================
          ANIMATED LUXURY MOBILE DRAWER & NAVIGATION
          ======================================================== */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#fcfbf9] flex flex-col justify-between pt-16 pb-6 px-5 sm:px-6 lg:hidden animate-fadeIn overflow-y-auto"
          style={{ height: "100dvh" }}
        >
          {/* Top Brand Banner */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between pb-3.5 border-b border-[#eceae3]">
              <div className="flex items-center gap-2.5">
                <div className="relative h-10 w-8 shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Moment's Logo"
                    fill
                    className="object-contain"
                    sizes="40px"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-brand text-2xl text-[#181816] font-semibold leading-none">
                    <span className="bg-gradient-to-r from-[#181816] via-[#78543a] to-[#181816] bg-clip-text text-transparent animate-shimmer inline-block">
                      Moment&apos;s
                    </span>
                  </span>
                </div>
              </div>

              {/* Live Status Badge */}
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-mono font-medium border border-emerald-200/60">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                <span>Live Bookings Open</span>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col" aria-label="Mobile Navigation">
              {navLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-serif-display text-[#181816] hover:text-emerald-700 py-3 border-b border-[#eceae3]/70 flex items-center justify-between transition-colors group"
                  style={{ animationDelay: `${idx * 40}ms` }}
                >
                  <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-emerald-700 transition-colors" />
                </a>
              ))}
            </nav>
          </div>

          {/* Bottom Structured Actions: WhatsApp, Book Shoot & Direct Call */}
          <div className="pt-4 border-t border-[#eceae3] space-y-2.5">
            {/* Live Book Shoot Button in Drawer */}
            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 px-4 rounded-xl bg-zinc-950 text-white flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider hover:bg-black transition-all shadow-md active:scale-95"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="whitespace-nowrap">Book Shoot Now</span>
            </a>

            {/* Direct WhatsApp Action with Real Icon */}
            <a
              href="https://wa.me/8801643666825?text=Hello%20Moment's%20Photography,%20I%20am%20inquiring%20via%20your%20website%20mobile%20menu."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-between transition-colors shadow-xs active:scale-95"
            >
              <div className="flex items-center gap-2.5">
                <svg
                  className="w-4 h-4 fill-current shrink-0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.031 2C6.495 2 2 6.486 2 12.012c0 1.954.561 3.86 1.626 5.502L2 22l4.636-1.583A10.02 10.02 0 0 0 12.031 22C17.568 22 22 17.514 22 12.012 22 6.486 17.568 2 12.031 2Zm5.792 14.288c-.244.686-1.222 1.294-1.874 1.344-.614.047-1.408.067-4.148-1.066-3.298-1.365-5.385-4.717-5.55-4.935-.165-.218-1.332-1.77-1.332-3.376 0-1.606.84-2.395 1.139-2.72.298-.326.653-.408.871-.408.217 0 .435.002.624.011.202.01.472-.077.738.563.272.653.926 2.261 1.008 2.428.082.167.136.363.027.581-.109.218-.163.354-.326.545-.163.19-.344.426-.492.572-.163.164-.333.342-.143.669.19.327.848 1.398 1.817 2.261 1.246 1.11 2.296 1.455 2.623 1.618.327.163.517.136.708-.082.19-.218.816-.953 1.034-1.28.217-.326.435-.272.734-.163.299.109 1.897.896 2.223 1.06.326.163.544.245.626.381.082.136.082.789-.163 1.475Z" />
                </svg>
                <span className="text-xs font-semibold uppercase tracking-wider">WhatsApp Us</span>
              </div>
              <span className="text-[11px] font-mono text-emerald-100 font-bold">01643-666825</span>
            </a>

            {/* Direct Call & Facebook 2-column grid */}
            <div className="grid grid-cols-2 gap-2">
              <a
                href="tel:+8801643666825"
                className="py-2.5 px-3 rounded-xl bg-white border border-[#eceae3] text-center text-xs font-medium text-zinc-800 hover:bg-zinc-50 flex items-center justify-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-zinc-600" />
                <span>Call 01643-666825</span>
              </a>

              <a
                href={COMPANY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-xl bg-white border border-[#eceae3] text-center text-xs font-medium text-zinc-800 hover:bg-zinc-50 flex items-center justify-center gap-1.5 transition-colors"
              >
                <svg
                  className="w-3.5 h-3.5 fill-[#1877F2]"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Facebook Page</span>
              </a>
            </div>

            <p className="text-center text-[10px] text-zinc-500 font-mono pt-1">
              Banskhali, Chattogram · Available Worldwide
            </p>
          </div>
        </div>
      )}
    </>
  );
}
