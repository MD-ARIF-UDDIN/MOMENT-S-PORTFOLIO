"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SplitFeature from "@/components/SplitFeature";
import PortfolioGallery from "@/components/PortfolioGallery";
import LightboxModal from "@/components/LightboxModal";
import OurServicesSection from "@/components/OurServicesSection";
import ServiceDetailModal from "@/components/ServiceDetailModal";
import ClientAlbumsSection from "@/components/ClientAlbumsSection";
import FilmsSection from "@/components/FilmsSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import BookingForm from "@/components/BookingForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import { PhotoWork, DetailedService, PHOTOGRAPHY_WORKS } from "@/data/photographyData";

export default function Home() {
  const [activeLightboxWork, setActiveLightboxWork] = useState<PhotoWork | null>(null);
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState<string>("all");
  const [selectedBookingCategory, setSelectedBookingCategory] = useState<string>("wedding");
  const [selectedBookingPackage, setSelectedBookingPackage] = useState<string>("");
  const [activeServiceDetail, setActiveServiceDetail] = useState<DetailedService | null>(null);

  // Lightbox handlers
  const handleOpenLightbox = (work: PhotoWork) => {
    setActiveLightboxWork(work);
  };

  const handleCloseLightbox = () => {
    setActiveLightboxWork(null);
  };

  const handlePrevLightbox = () => {
    if (!activeLightboxWork) return;
    const currentList =
      selectedGalleryCategory === "all"
        ? PHOTOGRAPHY_WORKS
        : PHOTOGRAPHY_WORKS.filter((w) => w.category === selectedGalleryCategory);
    const currentIndex = currentList.findIndex((w) => w.id === activeLightboxWork.id);
    const prevIndex = (currentIndex - 1 + currentList.length) % currentList.length;
    setActiveLightboxWork(currentList[prevIndex]);
  };

  const handleNextLightbox = () => {
    if (!activeLightboxWork) return;
    const currentList =
      selectedGalleryCategory === "all"
        ? PHOTOGRAPHY_WORKS
        : PHOTOGRAPHY_WORKS.filter((w) => w.category === selectedGalleryCategory);
    const currentIndex = currentList.findIndex((w) => w.id === activeLightboxWork.id);
    const nextIndex = (currentIndex + 1) % currentList.length;
    setActiveLightboxWork(currentList[nextIndex]);
  };

  // Switch category from split feature, albums or lightbox
  const handleFilterFromFeature = (category: string) => {
    setSelectedGalleryCategory(category);
    const worksEl = document.getElementById("works");
    if (worksEl) {
      worksEl.scrollIntoView({ behavior: "smooth" });
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

  const handleSelectBookingCategory = (category: string) => {
    setSelectedBookingCategory(category);
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
        <SplitFeature onSelectCategory={handleFilterFromFeature} />

        {/* Filterable Masonry Portfolio */}
        <PortfolioGallery
          onOpenLightbox={handleOpenLightbox}
          selectedCategory={selectedGalleryCategory}
          onSelectCategory={setSelectedGalleryCategory}
        />

        {/* 10 Services Overview with Detail Modal Trigger (matches reference site) */}
        <OurServicesSection
          onOpenServiceDetails={handleOpenServiceDetail}
          onBookService={handleBookFromService}
        />

        {/* Featured Client Albums (matches reference site) */}
        <ClientAlbumsSection onSelectCategory={handleFilterFromFeature} />

        {/* Cinematic Films (matches reference site /flims) */}
        <FilmsSection onInquireFilm={handleSelectPackageForBooking} />

        {/* Investment Collections & 4-Step Process */}
        <ServicesSection onSelectPackage={handleSelectPackageForBooking} />

        {/* Studio Craft & Philosophy */}
        <AboutSection />

        {/* The Creative Team & Collective */}
        <TeamSection
          onSelectTeamMember={(memberName) =>
            handleSelectPackageForBooking("Requested Artist: " + memberName)
          }
        />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Interactive Consultation / Booking Form */}
        <BookingForm
          initialCategory={selectedBookingCategory}
          initialPackage={selectedBookingPackage}
        />
      </main>

      {/* Global Interactive Photo Lightbox */}
      <LightboxModal
        work={activeLightboxWork}
        onClose={handleCloseLightbox}
        onPrev={handlePrevLightbox}
        onNext={handleNextLightbox}
        onSelectBookingCategory={handleSelectBookingCategory}
      />

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
