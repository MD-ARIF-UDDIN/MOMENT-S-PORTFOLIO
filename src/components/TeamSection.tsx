"use client";

import Image from "next/image";
import { MessageCircle, ArrowRight, Check } from "lucide-react";
import { TEAM_MEMBERS, TeamMember, COMPANY_INFO } from "@/data/photographyData";

interface TeamSectionProps {
  onSelectTeamMember?: (memberName: string) => void;
}

export default function TeamSection({ onSelectTeamMember }: TeamSectionProps) {
  const founder = TEAM_MEMBERS[0];
  const specialists = TEAM_MEMBERS.slice(1);

  const handleInquireWithMember = (member: TeamMember) => {
    if (onSelectTeamMember) {
      onSelectTeamMember(member.name);
    } else {
      const bookingEl = document.getElementById("booking");
      if (bookingEl) bookingEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="team" className="py-20 sm:py-28 bg-[#fcfbf9] border-b border-[#eceae3] scroll-mt-20 relative" aria-label="About & Creative Team">
      <div id="about" className="absolute -top-20 left-0 w-full h-1 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16">
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-[0.24em] text-[#807d74] font-semibold block font-mono">
              The Collective &amp; Leadership
            </span>
            <h2 className="font-serif-display text-3xl sm:text-5xl text-[#181816] font-bold tracking-tight">
              Meet Our Team
            </h2>
          </div>
          <p className="text-[#57554f] text-xs sm:text-sm font-light max-w-md sm:text-right">
            Master cinematographers, photographers, and editors united by an obsessive commitment to authentic light, elegance, and emotional storytelling.
          </p>
        </div>

        {/* ========================================================
            SEPARATE HIGHLIGHTED CARD FOR FOUNDER & CEO
            ======================================================== */}
        <div className="mb-20 bg-white rounded-3xl border-2 border-[#181816]/15 hover:border-[#181816] shadow-xl overflow-hidden transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Founder Portrait (5 Cols) */}
            <div className="lg:col-span-5 relative h-[420px] sm:h-[500px] lg:h-full min-h-[480px] bg-[#181816] overflow-hidden">
              <Image
                src="/al-shahriar-babu.png"
                alt="Al Shahriar Babu — Founder & CEO of Moment's Photography & Cinematography"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              {/* Founder Badges */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider text-[#181816] font-semibold flex items-center gap-1.5 shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#1877F2] animate-pulse" />
                <span>Founder &amp; CEO</span>
              </div>

              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-mono text-zinc-200">
                Active Since 2019
              </div>

              {/* Bottom Portrait Caption */}
              <div className="absolute bottom-5 left-5 right-5 p-4 sm:p-5 rounded-2xl bg-black/75 backdrop-blur-md text-white border border-white/10 shadow-lg">
                <h3 className="font-serif-display text-2xl font-normal leading-tight text-white">
                  Al Shahriar Babu
                </h3>
                <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-300 font-mono mt-1">
                  Founder &amp; CEO · Moment&apos;s Photography
                </p>
                <div className="mt-3 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-zinc-300">
                  <span>Cinematographer &amp; Editor</span>
                  <span className="font-mono text-[10px] text-zinc-400">Banskhali, Chattogram</span>
                </div>
              </div>
            </div>

            {/* Founder Bio & Personal Statement (7 Cols) */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-6">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1877F2]/10 text-[#1877F2] text-[11px] font-mono uppercase tracking-wider font-semibold">
                  <span>Founder &amp; Director Statement</span>
                </div>
                <h3 className="font-serif-display text-2xl sm:text-4xl text-[#181816] font-bold tracking-tight">
                  Al Shahriar Babu
                </h3>
                <p className="text-xs uppercase tracking-[0.18em] text-[#807d74] font-mono">
                  Founder &amp; CEO · Moment&apos;s Photography &amp; Cinematography
                </p>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-3.5 text-xs sm:text-sm text-[#57554f] leading-relaxed font-light">
                <p>
                  The founder and director of <strong className="text-[#181816] font-semibold">Moment&apos;s Photography &amp; Cinematography</strong>. My journey in photography began in <strong className="text-[#181816] font-medium">2019</strong>, and since then, I have passionately pursued capturing moments that tell stories and evoke emotions.
                </p>
                <p>
                  As both a photographer and an editor, I take pride in my ability to see the world through a unique lens and bring those visions to life through meticulous editing. My work is a reflection of years of dedication, creativity, and a relentless pursuit of excellence.
                </p>
                <p>
                  At <strong className="text-[#181816] font-semibold">Moment&apos;s Photography</strong>, we believe in creating timeless images that not only capture the essence of a moment but also resonate with the viewer on a deeper level. Whether it&apos;s a wedding, portrait, or a special event, my goal is to provide you with stunning visuals that you&apos;ll cherish forever.
                </p>
                <p className="text-[#181816] font-serif-display text-sm sm:text-base italic pt-1">
                  &ldquo;Thank you for visiting my website. I look forward to the opportunity to work with you and create something beautiful together.&rdquo;
                </p>
              </div>

              {/* Founder Credential Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-[#eceae3] text-xs text-zinc-700 font-mono">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#181816] shrink-0" />
                  <span>Cinematography &amp; Process Lead</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#181816] shrink-0" />
                  <span>Creative Direction &amp; Colorist</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#181816] shrink-0" />
                  <span>Serving Chattogram &amp; Worldwide</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#181816] shrink-0" />
                  <span>Direct Consultation Available</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#181816] hover:bg-black text-white text-xs font-medium uppercase tracking-[0.14em] transition-all shadow-sm hover:shadow-md"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Message Al Shahriar on WhatsApp</span>
                </a>

                <button
                  onClick={() => handleInquireWithMember(founder)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#f6f5f0] hover:bg-[#eceae3] text-[#181816] text-xs font-medium uppercase tracking-[0.14em] transition-colors border border-[#eceae3]"
                >
                  <span>Request Direct Shoot</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* ========================================================
            CREATIVE SPECIALISTS & PRODUCTION TEAM
            ======================================================== */}
        {specialists.length > 0 ? (
          <div>
            <div className="flex items-end justify-between mb-8 pb-3 border-b border-[#eceae3]">
              <div>
                <span className="text-[10px] uppercase tracking-[0.24em] text-[#807d74] font-mono block">
                  Cinematography &amp; Photography Team
                </span>
                <h3 className="font-serif-display text-2xl text-[#181816] font-normal">
                  Production Artists
                </h3>
              </div>
              <span className="text-xs text-[#807d74] font-mono">
                Moment&apos;s Creative Crew
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {specialists.map((member) => (
                <div
                  key={member.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#eceae3] hover:border-[#181816] shadow-xs hover:shadow-lg transition-all duration-500 flex flex-col"
                >
                  {/* Member Portrait */}
                  <div className="relative aspect-[3/4] w-full bg-[#eceae3] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={`${member.name} — ${member.role}`}
                      fill
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Name and Designation Only */}
                  <div className="p-5 sm:p-6 text-center bg-white">
                    <h4 className="font-serif-display text-xl sm:text-2xl font-normal text-[#181816] tracking-tight">
                      {member.name}
                    </h4>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#807d74] font-mono mt-1.5 font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Clean CTA panel when no additional specialists are listed */
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#eceae3] text-center space-y-5">
            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-[0.24em] text-[#807d74] font-mono block">
                Our Production Collective
              </span>
              <h3 className="font-serif-display text-2xl sm:text-3xl text-[#181816] font-normal">
                A Dedicated Team Behind Every Frame
              </h3>
              <p className="text-sm text-[#57554f] max-w-lg mx-auto leading-relaxed font-light">
                Every wedding and event is covered by a handpicked team of cinematographers, editors, and lighting specialists led by Al Shahriar Babu. Each member is personally trained for consistent excellence in every project.
              </p>
            </div>
            <a
              href={`https://wa.me/8801643666825?text=${encodeURIComponent("Hello Moment's Photography, I would like to know more about your team and book a consultation with Al Shahriar Babu.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold uppercase tracking-wider shadow-md transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Talk to Our Team via WhatsApp</span>
            </a>
          </div>
        )}

      </div>
    </section>
  );
}
