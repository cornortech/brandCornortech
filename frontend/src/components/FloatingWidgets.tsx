"use client";

import React from "react";
import { useContactModal } from "./ContactContext";
import { Zap } from "lucide-react";
import ScrollToTopButton from "./ui/ScrollToTop";

export default function FloatingWidgets() {
  const { openModal } = useContactModal();

  return (
    <>
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-3 items-end pointer-events-none">
        {/* Availability Pill (Bottom-Center in widescreen, stacked on mobile) */}
        <div className="hidden md:flex fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900/90 text-white px-4 py-2 rounded-full border border-white/10 shadow-lg shadow-black/30 items-center gap-2.5 backdrop-blur-md pointer-events-auto hover:bg-slate-800 transition-colors duration-200">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green"></span>
          </span>
          <span className="text-xs font-bold tracking-wide">
            Available for Consultation
          </span>
          <div className="w-[1px] h-3 bg-white/20" />
          <button
            onClick={openModal}
            className="text-xs font-extrabold text-primary hover:text-primary-light flex items-center gap-0.5 transition-colors cursor-pointer"
          >
            Book Now
            <Zap className="w-3 h-3 fill-current" />
          </button>
        </div>
      </div>

      {/* Render the specialized ScrollToTop Button */}
      <ScrollToTopButton />
    </>
  );
}
