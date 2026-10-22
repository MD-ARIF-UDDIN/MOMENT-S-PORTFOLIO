"use client";

import Image from "next/image";
import { Sparkles, MessageCircle, ArrowRight, Check } from "lucide-react";
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
    <section id="team" className="py-20 sm:py-28 bg-[#fcfbf9] border-b border-[#eceae3]" aria-label="Our Creative Team">
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
                <Sparkles className="w-3.5 h-3.5 text-[#1877F2]" />
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
        <div>
          <div className="flex items-end justify-between mb-8 pb-3 border-b border-[#eceae3]">
            <div>
              <span className="text-[10px] uppercase tracking-[0.24em] text-[#807d74] font-mono block">
                Production Artists
              </span>
              <h3 className="font-serif-display text-2xl text-[#181816] font-normal">
                Creative Specialists
              </h3>
            </div>
            <span className="text-xs text-[#807d74] font-mono">
              Lead Cinematographers &amp; Colorists
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
            {specialists.map((member) => (
              <div
                key={member.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#eceae3] hover:border-[#181816] shadow-xs hover:shadow-lg transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Member Portrait */}
                  <div className="relative aspect-[3/4] w-full bg-[#eceae3] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top img-zoom"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                    {/* Experience Badge */}
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-mono text-white">
                      {member.experience}
                    </div>

                    {/* Over-image name and role */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-300 block font-mono mb-1">
                        {member.role}
                      </span>
                      <h4 className="font-serif-display text-2xl font-normal leading-tight">
                        {member.name}
                      </h4>
                    </div>
                  </div>

                  {/* Member Details */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase tracking-[0.16em] text-[#807d74] font-mono block">
                        Discipline Focus
                      </span>
                      <p className="text-xs font-medium text-[#181816]">
                        {member.specialty}
                      </p>
                    </div>

                    <p className="text-xs text-[#57554f] leading-relaxed font-light">
                      {member.bio}
                    </p>
                  </div>
                </div>

                {/* Action Button */}
                <div className="px-6 pb-6 pt-1">
                  <button
                    onClick={() => handleInquireWithMember(member)}
                    className="w-full py-2.5 px-4 rounded-full bg-[#f6f5f0] hover:bg-[#181816] hover:text-white text-[#181816] text-xs font-medium uppercase tracking-[0.12em] transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Request for Shoot</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
