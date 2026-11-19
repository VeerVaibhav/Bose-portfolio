"use client";

import React, { useState } from 'react';
import { Zap, CalendarDays, ArrowRight, ChevronDown, Building2, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE } from '../../lib/data';

const ORG_EMOJIS = ['🏫', '💡', '🏛️', '🛡️', '🤝'];

export default function ExperienceSection({ onExpClick }) {
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? EXPERIENCE : EXPERIENCE.slice(0, 3);

  return (
    <section id="experience" className="w-full pb-20 sm:pb-28 px-4 sm:px-6 md:px-10 relative overflow-hidden" style={{ background: '#060D25' }}>
      <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 sm:gap-4 mb-16 sm:mb-24 animate-fadeUp">
          <div className="inline-flex items-center gap-2 bg-[#0D1635] border border-[#5363B1]/25 rounded-full px-3 sm:px-4 py-1.5 mb-1 sm:mb-2">
            <Zap size={13} className="text-white/60" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Career History</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-white leading-[1.02] mb-2 sm:mb-4">
            Work <span className="text-white/80">Experience</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-sm sm:text-base px-4">A journey through my professional roles, delivering impact and building scalable real-world products.</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-3 md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2 pointer-events-none" />

          <div className="relative overflow-hidden" style={{ maxHeight: !showAll ? '520px' : 'none' }}>
            {displayed.map((e, i) => (
              <div key={i} className={`relative flex items-center mb-4 sm:mb-3 last:mb-10 animate-fadeUp ${i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`} style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}>
                {/* Node */}
                <div className="absolute left-3 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full border-[3px] border-[#050E24] shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10 bg-white/10">
                  <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-white opacity-80" />
                </div>

                {/* Card */}
                <div
                  onClick={() => onExpClick?.(e)}
                  className="w-[calc(100%-2rem)] ml-8 md:ml-0 md:w-[calc(50%-1.5rem)] max-w-full sm:max-w-[340px] md:max-w-[360px] rounded-xl border border-[#5363B1]/20 bg-[#000B21] shadow-2xl transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(61,91,241,0.3)] hover:border-[#3D5BF1] relative overflow-hidden group cursor-pointer"
                >
                  <div className="absolute top-0 left-0 w-full h-[1px] opacity-40 group-hover:opacity-100 transition-opacity z-10" style={{ background: `linear-gradient(90deg,transparent,${e.color},transparent)` }} />
                  <div className="p-3.5 sm:p-4 relative z-10">
                    <div className="inline-flex px-2 py-1 rounded-full text-[8px] font-black uppercase tracking-widest border border-[#5363B1]/25 bg-[#000B21] text-white/70 items-center gap-1 shadow-sm mb-2">
                      <CalendarDays size={9} className="opacity-50" /> {e.period}
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg font-black text-white mb-0.5 tracking-tight group-hover:text-[#84ADFF] transition-colors leading-tight">{e.role}</h3>
                    <div className="text-[10px] sm:text-[11px] font-bold flex items-center gap-1.5 text-white/40 uppercase tracking-widest">
                      <span className="text-sm opacity-60">{ORG_EMOJIS[i] || '💼'}</span>
                      <span className="truncate">{e.org}</span>
                    </div>
                    <div className="mt-3.5 sm:mt-4 w-full py-2 sm:py-2.5 rounded-lg bg-white/5 border border-white/10 text-white/60 text-[9px] sm:text-[10px] font-black tracking-widest uppercase group-hover:bg-gradient-to-r group-hover:from-[#3D5BF1] group-hover:to-[#4179EA] group-hover:text-white group-hover:border-transparent group-hover:shadow-[0_5px_15px_rgba(61,91,241,0.4)] transition-all flex items-center justify-center gap-2">
                      <span>See Detailed Impact</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Fade overlay */}
            {!showAll && EXPERIENCE.length > 2 && (
              <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none" style={{ height: '380px', background: 'linear-gradient(to bottom, transparent 0%, transparent 15%, rgba(4,7,18,0.35) 45%, rgba(3,5,12,0.82) 72%, #000000 100%)' }} />
            )}
          </div>

          {/* Show All Button */}
          {!showAll && EXPERIENCE.length > 2 && (
            <div className="flex justify-center -mt-6 sm:-mt-8 relative z-30">
              <button onClick={() => setShowAll(true)} className="px-7 sm:px-8 py-2.5 sm:py-3 rounded-full text-white text-[12px] sm:text-[13px] font-bold border border-white/20 hover:border-white/40 hover:scale-105 transition-all uppercase tracking-widest inline-flex items-center gap-2 backdrop-blur-sm" style={{ background: 'rgba(8, 12, 30, 0.85)' }}>
                See All Experience
                <span className="text-white/40 text-[10px] sm:text-[11px] font-normal normal-case">+{EXPERIENCE.length - 2} more</span>
                <ChevronDown size={14} />
              </button>
            </div>
          )}
          {showAll && EXPERIENCE.length > 2 && (
            <div className="flex justify-center mt-8 sm:mt-10 relative z-30">
              <button onClick={() => setShowAll(false)} className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-white/50 text-[12px] sm:text-[13px] font-bold border border-white/10 hover:text-white hover:border-[#5363B1]/50 hover:bg-[#5363B1]/10 transition-all uppercase tracking-widest">
                See Less
              </button>
            </div>
          )}
        </div>

        {/* CTA Box */}
        <div className="mt-20 sm:mt-28 bg-[#0A1228] text-white rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-10 md:p-12 relative overflow-hidden border border-[#5363B1]/25 group hover:border-[#5363B1]/50 transition-all">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-60 rounded-[2.5rem] pointer-events-none" />
          <div className="absolute top-[-40%] left-[-5%] w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] rounded-full opacity-10 blur-[80px] pointer-events-none bg-white" />
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 sm:gap-8">
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 sm:mb-3">Open to opportunities</div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
                Want to collaborate<br />or discuss a role?
              </h3>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white text-black font-bold text-sm hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] whitespace-nowrap">
              Get In Touch <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
