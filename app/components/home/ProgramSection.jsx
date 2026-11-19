"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { PROGRAM_CARDS, PROGRAM_GALLERY } from '../../lib/data';

export default function ProgramSection() {
  const [showGallery, setShowGallery] = useState(false);

  // Top 2 cards (Saturdays, Sundays)
  const topCards = PROGRAM_CARDS.slice(0, 2);
  // Remaining items split: col1, center, col3
  const col1 = [PROGRAM_CARDS[2], PROGRAM_CARDS[3]];
  const center = PROGRAM_CARDS[4];
  const col3 = [PROGRAM_CARDS[5], PROGRAM_CARDS[6]];

  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-6 md:px-10 relative" style={{ background: '#060D25' }}>
      <div className="max-w-[1100px] mx-auto flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-semibold mb-2 sm:mb-3 tracking-tight text-center">Out from the classroom</h2>
        <p className="text-white/60 text-sm sm:text-[15px] mb-8 sm:mb-12 text-center max-w-lg">A community of aspiring and seasoned Product Managers getting 1% better every day.</p>

        <div className="w-full flex flex-col gap-3 sm:gap-4">
          {/* Top Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4" style={{ height: 'auto' }}>
            {topCards.map((card, i) => (
              <div key={i} className="relative rounded-2xl sm:rounded-3xl overflow-hidden group border border-white/10 shadow-lg h-[170px] sm:h-[220px] md:h-[260px]">
                <img src={card.img} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={card.title} />
              </div>
            ))}
          </div>

          {/* Bottom Grid — 3 columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {/* Column 1 */}
            <div className="flex flex-col gap-3 sm:gap-4">
              {col1.map((card, i) => (
                <div key={i} className={`relative rounded-2xl sm:rounded-3xl overflow-hidden group border border-white/10 shadow-lg ${i === 0 ? 'h-[150px] sm:h-[200px] md:h-[250px] flex-grow' : 'h-[100px] sm:h-[130px] md:h-[180px] shrink-0'}`}>
                  <img src={card.img} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={card.title} />
                </div>
              ))}
            </div>

            {/* Center column — full height */}
            <div className="relative h-full min-h-[260px] sm:min-h-[350px] rounded-2xl sm:rounded-3xl overflow-hidden group border border-white/10 shadow-lg">
              <img src={center.img} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={center.title} />
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-3 sm:gap-4 col-span-2 sm:col-span-1">
              {col3.map((card, i) => (
                <div key={i} className={`relative rounded-2xl sm:rounded-3xl overflow-hidden group border border-white/10 shadow-lg ${i === 0 ? 'h-[150px] sm:h-[200px] md:h-[250px] flex-grow' : 'h-[100px] sm:h-[130px] md:h-[180px] shrink-0'}`}>
                  <img src={card.img} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={card.title} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="relative w-full mt-4">
          <div className={`relative transition-all duration-1000 ease-in-out overflow-hidden ${showGallery ? 'max-h-[5000px] mb-8' : 'max-h-[200px] sm:max-h-[250px]'}`}>
            <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4 space-y-3 sm:space-y-4 pb-12">
              {PROGRAM_GALLERY.map((img, i) => (
                <img key={i} src={img.src} className="w-full rounded-xl sm:rounded-2xl border border-[#5363B1]/25 hover:border-[#5363B1]/60 transition-colors break-inside-avoid shadow-lg" alt={img.alt} />
              ))}
            </div>
            {!showGallery && (
              <div className="absolute bottom-0 left-0 right-0 h-[150px] sm:h-[200px] bg-gradient-to-t from-[#060D25] via-[#060D25]/80 to-transparent pointer-events-none" />
            )}
          </div>
          <div className={`flex justify-center transition-all duration-300 w-full ${!showGallery ? 'absolute bottom-4 z-20' : 'relative mt-4'}`}>
            <button onClick={() => setShowGallery(!showGallery)} className="flex items-center gap-2 px-7 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-[#3D5BF1] to-[#84ADFF] rounded-full text-white text-[14px] sm:text-[15px] font-bold hover:shadow-[0_0_30px_rgba(61,91,241,0.5)] hover:-translate-y-1 transition-all duration-300">
              {showGallery ? 'Collapse Gallery' : 'See All Images'}
              <ChevronDown size={17} className={`transition-transform duration-500 ${showGallery ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
