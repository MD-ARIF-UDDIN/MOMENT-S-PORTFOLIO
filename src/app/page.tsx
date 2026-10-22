"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SplitFeature from "@/components/SplitFeature";
import ClientAlbumsSection from "@/components/ClientAlbumsSection";
import FilmsSection from "@/components/FilmsSection";
import OurServicesSection from "@/components/OurServicesSection";
import ServiceDetailModal from "@/components/ServiceDetailModal";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import BookingForm from "@/components/BookingForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import { DetailedService } from "@/data/photographyData";

export default function Home() {
  const [selectedBookingCategory, setSelectedBookingCategory] = useState<string>("wedding");
  const [selectedBookingPackage, setSelectedBookingPackage] = useState<string>("");
  const [activeServiceDetail, setActiveServiceDetail] = useState<DetailedService | null>(null);

  // Scroll to photography albums
  const handleScrollToPhotography = () => {
    const el = document.getElementById("photography") || document.getElementById("albums");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Service modal handlers
  const handleOpenServiceDetail = (service: DetailedService) => {
    setActiveServiceDetail(service);
  };

  const handleCloseServiceDetail = () => {
    setActiveServiceDetail(null);
  };

  const handleBookFromService = (serviceTitle: string) => {
    setActiveServiceDetail(null);
    setSelectedBookingPackage(serviceTitle);
    const bookingEl = document.getElementById("booking");
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Pre-fill booking form from packages or films
  const handleSelectPackageForBooking = (packageName: string) => {
    setSelectedBookingPackage(packageName);
    const bookingEl = document.getElementById("booking");
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#fcfbf9] text-[#181816] selection:bg-[#181816] selection:text-white">
      {/* Sticky Navigation Header */}
      <Navbar />

      <main id="main-content">
        {/* Cinematic Hero Slider */}
        <Hero />

        {/* Dual Signature Showcase: Wedding Romance & Model Editorial */}
        <SplitFeature onSelectCategory={handleScrollToPhotography} />

        {/* Featured Photography Client Albums with in-card photo slider & detail modal */}
        <ClientAlbumsSection onSelectCategory={handleScrollToPhotography} />

        {/* Cinematic Films (Films showcase with Facebook shares) */}
        <FilmsSection onInquireFilm={handleSelectPackageForBooking} />

        {/* 10 Services Overview with Detail Modal Trigger */}
        <OurServicesSection
          onOpenServiceDetails={handleOpenServiceDetail}
          onBookService={handleBookFromService}
        />

        {/* Investment Collections & 4-Step Process */}
        <ServicesSection onSelectPackage={handleSelectPackageForBooking} />

        {/* Unified Founder & Creative Team Section (Combines About & Team) */}
        <TeamSection
          onSelectTeamMember={(memberName) =>
            handleSelectPackageForBooking("Requested Artist: " + memberName)
          }
        />

        {/* Interactive Consultation / Booking Form sending to WhatsApp */}
        <BookingForm
          initialCategory={selectedBookingCategory}
          initialPackage={selectedBookingPackage}
        />
      </main>

      {/* Interactive Service Detail Modal */}
      <ServiceDetailModal
        service={activeServiceDetail}
        onClose={handleCloseServiceDetail}
        onBookService={handleBookFromService}
      />

      {/* Floating Direct WhatsApp Button */}
      <WhatsAppButton />

      {/* Footer */}
      <Footer />
    </div>
  );
}
