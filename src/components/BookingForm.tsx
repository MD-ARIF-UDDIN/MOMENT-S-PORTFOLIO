"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, MessageCircle, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
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
  const [whatsappRedirectUrl, setWhatsappRedirectUrl] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError("Please provide your Name and Phone Number to send WhatsApp inquiry.");
      return;
    }

    setIsSubmitting(true);

    // Format professional WhatsApp message with markdown styling
    const waText = 
`*NEW INQUIRY — MOMENT'S PHOTOGRAPHY*

*Client Name:* ${formData.name}
*Phone / WhatsApp:* ${formData.phone}
*Email:* ${formData.email || "Not specified"}
*Category:* ${formData.shootType}
*Package / Selection:* ${formData.selectedPackage || "Standard Consultation"}
*Target Date:* ${formData.preferredDate || "Flexible"}
*Location / Venue:* ${formData.location || "Chattogram / Bangladesh"}
*Budget Range:* ${formData.budget}

*Message & Details:*
${formData.message || "I would like to inquire about date availability and booking."}`;

    const waUrl = `https://wa.me/8801643666825?text=${encodeURIComponent(waText)}`;
    setWhatsappRedirectUrl(waUrl);

    // Trigger opening WhatsApp directly
    try {
      window.open(waUrl, "_blank", "noopener,noreferrer");
    } catch (err) {
      console.warn("Could not open new tab automatically, fallback button available", err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <section id="booking" className="py-20 sm:py-28 bg-[#f6f5f0] border-t border-[#eceae3] scroll-mt-20" aria-label="Book a Shoot">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16">
          
          {/* Left Column: Direct Studio Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#807d74] font-medium block font-mono">
                Atelier Inquiries &amp; WhatsApp
              </span>
              <h2 className="font-serif-display text-3xl sm:text-5xl text-[#181816] font-normal tracking-tight">
                Commission an Assignment
              </h2>
              <p className="text-[#57554f] text-xs sm:text-sm leading-relaxed font-light">
                Tell us about your wedding date, Gaye Holud celebration, or portrait commission. All inquiries are sent directly to our official WhatsApp (+880 1643-666825) for immediate response and date confirmation.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#eceae3] text-xs text-[#57554f]">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white border border-[#eceae3] text-emerald-600 mt-0.5">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#807d74] block font-mono">Official WhatsApp</span>
                  <a 
                    href="https://wa.me/8801643666825" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#181816] font-medium hover:underline text-sm font-serif-display"
                  >
                    +880 1643-666825
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white border border-[#eceae3] text-zinc-700 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#807d74] block font-mono">Direct Telephone</span>
                  <a href="tel:+8801643666825" className="text-[#181816] font-medium hover:underline text-sm font-serif-display">
                    01643-666825
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white border border-[#eceae3] text-zinc-700 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#807d74] block font-mono">Electronic Mail</span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#181816] font-medium hover:underline text-sm font-serif-display">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white border border-[#eceae3] text-zinc-700 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#807d74] block font-mono">Studio Atelier</span>
                  <p className="text-[#181816] text-xs">
                    {COMPANY_INFO.headquarters}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout Banner */}
            <div className="p-5 rounded-2xl bg-white border border-[#eceae3] space-y-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#807d74] font-mono block">Instant WhatsApp Support</span>
              <p className="text-xs text-[#57554f] font-light">
                Prefer immediate messaging? Reach out directly on WhatsApp anytime:
              </p>
              <a
                href="https://wa.me/8801643666825?text=Hello%20Moment's%20Photography,%20I%20would%20like%20to%20inquire%20about%20booking%20and%20rates."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 hover:text-emerald-800 pt-1"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>+880 1643-666825 · Message Now →</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Form Connected to WhatsApp */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-10 rounded-3xl bg-white border border-[#eceae3] shadow-xs">
              {submitted ? (
                <div className="py-12 sm:py-16 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif-display text-2xl sm:text-3xl text-[#181816] font-normal">
                      Inquiry Ready on WhatsApp
                    </h3>
                    <p className="text-xs sm:text-sm text-[#57554f] max-w-md mx-auto leading-relaxed font-light">
                      Thank you, <strong className="text-[#181816] font-medium">{formData.name}</strong>. Your project details have been formatted for our WhatsApp number (+880 1643-666825).
                    </p>
                  </div>

                  {whatsappRedirectUrl && (
                    <div className="pt-2">
                      <a
                        href={whatsappRedirectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold uppercase tracking-wider shadow-md transition-all hover:scale-105"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Continue in WhatsApp App</span>
                      </a>
                    </div>
                  )}

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
                        budget: "৳25,000 – ৳40,000",
                        message: "",
                      });
                    }}
                    className="text-xs uppercase tracking-[0.16em] text-[#807d74] hover:text-[#181816] hover:underline pt-4 block mx-auto font-medium"
                  >
                    Send another inquiry →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" id="inquiry-form">
                  <div className="flex items-center justify-between pb-2 border-b border-[#eceae3]">
                    <span className="text-xs font-medium text-[#181816]">Direct Inquiry Form</span>
                    <span className="text-[10px] text-emerald-600 font-mono flex items-center gap-1 font-semibold">
                      <MessageCircle className="w-3 h-3" /> Sends to WhatsApp
                    </span>
                  </div>

                  {error && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
                      {error}
                    </div>
                  )}

                  {initialPackage && (
                    <div className="p-3.5 rounded-xl bg-[#f6f5f0] border border-[#eceae3] text-xs flex items-center justify-between">
                      <span className="text-[#807d74] font-mono text-[10px] uppercase tracking-wider">Selected Package:</span>
                      <span className="font-medium text-[#181816]">{initialPackage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-[11px] uppercase tracking-[0.16em] text-[#807d74] mb-1 font-medium font-mono">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="e.g. Al Shahriar"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#fcfbf9] border border-[#d9d6cb] rounded-xl px-4 py-2.5 text-xs text-[#181816] placeholder-zinc-400 focus:bg-white focus:outline-none focus:border-[#181816]"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-[11px] uppercase tracking-[0.16em] text-[#807d74] mb-1 font-medium font-mono">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+880 1XXX-XXXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#fcfbf9] border border-[#d9d6cb] rounded-xl px-4 py-2.5 text-xs text-[#181816] placeholder-zinc-400 focus:bg-white focus:outline-none focus:border-[#181816]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-[11px] uppercase tracking-[0.16em] text-[#807d74] mb-1 font-medium font-mono">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="client@domain.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-[#fcfbf9] border border-[#d9d6cb] rounded-xl px-4 py-2.5 text-xs text-[#181816] placeholder-zinc-400 focus:bg-white focus:outline-none focus:border-[#181816]"
                      />
                    </div>

                    <div>
                      <label htmlFor="shootType" className="block text-[11px] uppercase tracking-[0.16em] text-[#807d74] mb-1 font-medium font-mono">
                        Photography Discipline
                      </label>
                      <select
                        id="shootType"
                        name="shootType"
                        value={formData.shootType}
                        onChange={handleChange}
                        className="w-full bg-[#fcfbf9] border border-[#d9d6cb] rounded-xl px-4 py-2.5 text-xs text-[#181816] focus:bg-white focus:outline-none focus:border-[#181816]"
                      >
                        <option value="Wedding & Reception">Wedding &amp; Reception</option>
                        <option value="Gaye Holud & Mehendi">Gaye Holud &amp; Mehendi</option>
                        <option value="Pre-Wedding & Outdoor Couple">Pre-Wedding &amp; Outdoor Couple</option>
                        <option value="Akdh Ceremony">Akdh Ceremony</option>
                        <option value="Cinematic Highlight Film">Cinematic Highlight Film</option>
                        <option value="Commercial & Brand">Commercial &amp; Brand</option>
                        <option value="Heirloom Album & Framing">Heirloom Album &amp; Framing</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="preferredDate" className="block text-[11px] uppercase tracking-[0.16em] text-[#807d74] mb-1 font-medium font-mono">
                        Target Date
                      </label>
                      <input
                        type="text"
                        id="preferredDate"
                        name="preferredDate"
                        placeholder="e.g. 15 December 2026"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full bg-[#fcfbf9] border border-[#d9d6cb] rounded-xl px-4 py-2.5 text-xs text-[#181816] placeholder-zinc-400 focus:bg-white focus:outline-none focus:border-[#181816]"
                      />
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-[11px] uppercase tracking-[0.16em] text-[#807d74] mb-1 font-medium font-mono">
                        Event Venue / City
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        placeholder="e.g. Banskhali, Chattogram, Dhaka"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full bg-[#fcfbf9] border border-[#d9d6cb] rounded-xl px-4 py-2.5 text-xs text-[#181816] placeholder-zinc-400 focus:bg-white focus:outline-none focus:border-[#181816]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-[11px] uppercase tracking-[0.16em] text-[#807d74] mb-1 font-medium font-mono">
                      Estimated Investment Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-[#fcfbf9] border border-[#d9d6cb] rounded-xl px-4 py-2.5 text-xs text-[#181816] focus:bg-white focus:outline-none focus:border-[#181816]"
                    >
                      <option value="Under ৳20,000">Under ৳20,000</option>
                      <option value="৳25,000 – ৳40,000 (Silver/Gold)">৳25,000 – ৳40,000 (Silver/Gold)</option>
                      <option value="৳40,000 – ৳65,000 (Platinum/Royal)">৳40,000 – ৳65,000 (Platinum/Royal)</option>
                      <option value="৳65,000+ (Full Multi-Day Wedding)">৳65,000+ (Full Multi-Day Wedding)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[11px] uppercase tracking-[0.16em] text-[#807d74] mb-1 font-medium font-mono">
                      Project Vision &amp; Notes
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Share your wedding timeline, specific camera requests, or personal preferences..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-[#fcfbf9] border border-[#d9d6cb] rounded-xl px-4 py-2.5 text-xs text-[#181816] placeholder-zinc-400 focus:bg-white focus:outline-none focus:border-[#181816]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 sm:py-4 rounded-full text-xs font-semibold uppercase tracking-[0.16em] text-white bg-emerald-700 hover:bg-emerald-800 transition-all disabled:opacity-50 shadow-md flex items-center justify-center gap-2 hover:scale-[1.01]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{isSubmitting ? "Connecting to WhatsApp..." : "Send Inquiry via WhatsApp (+880 1643-666825)"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-center text-[10px] text-zinc-500 font-mono">
                    Submitting opens WhatsApp with your pre-filled inquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
