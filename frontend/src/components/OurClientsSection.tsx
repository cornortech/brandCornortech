"use client";

import React from "react";
import ClientMarquee from "./ClientMarquee";

export default function OurClientsSection() {
  return (
    <section className="bg-white py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
          Trusted by businesses, leaders, and startups
        </p>
        <ClientMarquee />
      </div>
    </section>
  );
}
