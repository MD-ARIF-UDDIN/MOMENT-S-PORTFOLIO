"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/photographyData";

interface BookingFormProps {
  initialCategory?: string;
  initialPackage?: string;
}

export default function BookingForm({ initialCategory, initialPackage }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    shootType: initialCategory || "wedding",
    selectedPackage: initialPackage || "",
    preferredDate: "",
    location: "",
    budget: "৳25,000 – ৳40,000",
    message: "",
  });

  useEffect(() => {
    if (initialPackage) {
      setFormData((prev) => ({ ...prev, selectedPackage: initialPackage }));
    }
    if (initialCategory) {
      setFormData((prev) => ({ ...prev, shootType: initialCategory }));
    }
  }, [initialPackage, initialCategory]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please provide your Name, Email, and Project Details.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="booking" className="py-20 sm:py-28 bg-[#f6f5f0]" aria-label="Book a Shoot">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16">
          {/* Left Column: Direct Studio Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#807d74] font-medium block">
                Atelier Inquiries
              </span>
              <h2 className="font-serif-display text-3xl sm:text-5xl text-[#181816] font-normal tracking-tight">
                Commission an Assignment
              </h2>
              <p className="text-[#57554f] text-xs sm:text-sm leading-relaxed font-light">
                Tell us about your wedding date, model portfolio, or commercial project. Every commission request is reviewed personally by our studio director within 24 hours.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#eceae3] text-xs text-[#57554f]">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#807d74] block font-mono">Electronic Mail</span>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#181816] font-medium hover:underline text-sm font-serif-display">
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#807d74] block font-mono">Telephone</span>
                <a href="tel:+18005426636" className="text-[#181816] font-medium hover:underline text-sm font-serif-display">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#807d74] block font-mono">Studio Atelier</span>
                <p className="text-[#181816] text-xs">
                  {COMPANY_INFO.headquarters}
                </p>
              </div>
            </div>

            {/* Direct WhatsApp Callout Banner */}
            <div className="p-5 rounded-2xl bg-white border border-[#eceae3] space-y-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#807d74] font-mono block">Instant Messaging</span>
              <p className="text-xs text-[#57554f] font-light">
                Prefer immediate messaging on your phone? Connect with us via WhatsApp directly.
              </p>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-emerald-700 hover:text-emerald-800 pt-1"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp →</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Light Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-10 rounded-3xl bg-white border border-[#eceae3] shadow-xs">
              {submitted ? (
                <div className="py-12 sm:py-16 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#f6f5f0] border border-[#eceae3] flex items-center justify-center text-[#181816] mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif-display text-3xl text-[#181816] font-normal">
                    Commission Request Received
                  </h3>
                  <p className="text-xs sm:text-sm text-[#57554f] max-w-sm mx-auto leading-relaxed font-light">
                    Thank you, <strong className="text-[#181816] font-medium">{formData.name}</strong>. We will review your project details and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        shootType: "wedding",
                        selectedPackage: "",
                        preferredDate: "",
                        location: "",
                        budget: "$2,500 - $5,000",
                        message: "",
                      });
                    }}
                    className="text-xs uppercase tracking-[0.16em] text-[#181816] hover:underline pt-3 block mx-auto font-medium"
                  >
                    Submit another inquiry →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" id="inquiry-form">
                  {error && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
                      {error}
                    </div>
                  )}

                  {initialPackage && (
                    <div className="p-3.5 rounded-xl bg-[#f6f5f0] border border-[#eceae3] text-xs flex items-center justify-between">
                      <span className="text-[#807d74] font-mono text-[10px] uppercase tracking-wider">Requested Selection:</span>
                      <span className="font-medium text-[#181816]">{initialPackage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="shootType" className="block text-[11px] uppercase tracking-[0.16em] text-[#807d74] mb-1.5 font-medium font-mono">
                        Discipline / Category
                      </label>
                      <select
                        id="shootType"
                        name="shootType"
                        value={formData.shootType}
                        onChange={handleChange}
                        className="w-full bg-[#fcfbf9] border border-[#d9d6cb] rounded-xl px-4 py-3 text-xs text-[#181816] focus:bg-white focus:outline-none focus:border-[#181816]"
                      >
                        <option value="wedding">Wedding &amp; Reception</option>
                        <option value="holud">Gaye Holud &amp; Mehendi</option>
                        <option value="engagement">Engagement &amp; Couple Session</option>
                        <option value="editorial">Model Portfolio / Fashion</option>
                        <option value="commercial">Commercial &amp; Brand</option>
                        <option value="albums-framing">Heirloom Album / Custom Framing</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-[11px] uppercase tracking-[0.16em] text-[#807d74] mb-1.5 font-medium font-mono">
                        Investment Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-[#fcfbf9] border border-[#d9d6cb] rounded-xl px-4 py-3 text-xs text-[#181816] focus:bg-white focus:outline-none focus:border-[#181816]"
                      >
                        <option value="Under ৳18,000">Under ৳18,000</option>
                        <option value="৳18,000 – ৳30,000">৳18,000 – ৳30,000</option>
                        <option value="৳30,000 – ৳45,000">৳30,000 – ৳45,000</option>
                        <option value="৳45,000 – ৳65,000+">৳45,000 – ৳65,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-[11px] uppercase tracking-[0.16em] text-[#807d74] mb-1.5 font-medium font-mono">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#fcfbf9] border border-[#d9d6cb] rounded-xl px-4 py-3 text-xs text-[#181816] placeholder-zinc-400 focus:bg-white focus:outline-none focus:border-[#181816]"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-[11px] uppercase tracking-[0.16em] text-[#807d74] mb-1.5 font-medium font-mono">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="client@domain.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#fcfbf9] border border-[#d9d6cb] rounded-xl px-4 py-3 text-xs text-[#181816] placeholder-zinc-400 focus:bg-white focus:outline-none focus:border-[#181816]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="preferredDate" className="block text-[11px] uppercase tracking-[0.16em] text-[#807d74] mb-1.5 font-medium font-mono">
                        Target Date
                      </label>
                      <input
                        type="text"
                        id="preferredDate"
                        name="preferredDate"
                        placeholder="e.g. October 2026 or Spring Season"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full bg-[#fcfbf9] border border-[#d9d6cb] rounded-xl px-4 py-3 text-xs text-[#181816] placeholder-zinc-400 focus:bg-white focus:outline-none focus:border-[#181816]"
                      />
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-[11px] uppercase tracking-[0.16em] text-[#807d74] mb-1.5 font-medium font-mono">
                        Venue / City
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        placeholder="e.g. Banskhali, Chattogram, Dhaka"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full bg-[#fcfbf9] border border-[#d9d6cb] rounded-xl px-4 py-3 text-xs text-[#181816] placeholder-zinc-400 focus:bg-white focus:outline-none focus:border-[#181816]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[11px] uppercase tracking-[0.16em] text-[#807d74] mb-1.5 font-medium font-mono">
                      Project Vision &amp; Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Share your timeline, aesthetic preferences, wardrobe count, or specific requests..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#fcfbf9] border border-[#d9d6cb] rounded-xl px-4 py-3 text-xs text-[#181816] placeholder-zinc-400 focus:bg-white focus:outline-none focus:border-[#181816]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full text-xs font-medium uppercase tracking-[0.16em] text-white bg-[#181816] hover:bg-black transition-colors disabled:opacity-50 shadow-sm flex items-center justify-center gap-2"
                  >
                    <span>{isSubmitting ? "Transmitting..." : "Request Date Availability"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
