"use client";

import React from "react";
import { Check, BarChart3, Users, Clock, Sparkles } from "lucide-react";

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 lg:py-24 bg-[#0a0516] text-white relative overflow-hidden bg-grid-pattern-dark">
      {/* Glow Spheres */}
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-primary/10 filter blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 rounded-full bg-accent-green/5 filter blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-accent-green px-3 py-1 rounded-full bg-accent-green/10">
              Core Advantages
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Designed to Maximize Your Brand Valuation
            </h2>
            <p className="text-slate-400 font-medium leading-relaxed">
              As a specialized division of Cornor Tech, we combine structured engineering frameworks with conversion-driven marketing. This ensures no leaky funnels, broken setups, or wasteful ad budgets.
            </p>

            <div className="space-y-4 pt-2">
              
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent-green/15 flex items-center justify-center text-accent-green shrink-0 mt-1">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">ROI-Focused Marketing</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mt-0.5">We don't optimize for vanity metrics. We focus on customer acquisition cost (CAC), lead quality, and cash conversion loops.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center text-primary-light shrink-0 mt-1">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Pure Creative Expertise</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mt-0.5">Stunning, high-end vector graphics, clean brand guidelines, and cinematic messaging that immediately creates customer trust.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent-green/15 flex items-center justify-center text-accent-green shrink-0 mt-1">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Experienced Ecosystem Account Leaders</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mt-0.5">Your project is overseen by accountable team managers, ensuring seamless scheduling, high quality checks, and weekly progress syncs.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Interactive Stats */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div className="bg-[#120a2e]/60 border border-white/5 p-6 rounded-2xl space-y-2 hover:border-primary/20 transition-all duration-300">
              <BarChart3 className="w-8 h-8 text-primary" />
              <h3 className="text-3xl font-black text-white">4.8x</h3>
              <span className="block text-sm font-bold text-slate-200">Average Ad ROI Increase</span>
              <p className="text-xs text-slate-500 leading-normal">Optimizing Meta and Google conversion tracking with custom audience lists.</p>
            </div>

            <div className="bg-[#120a2e]/60 border border-white/5 p-6 rounded-2xl space-y-2 hover:border-accent-green/20 transition-all duration-300">
              <Users className="w-8 h-8 text-accent-green" />
              <h3 className="text-3xl font-black text-white">96%</h3>
              <span className="block text-sm font-bold text-slate-200">Client Retention Rate</span>
              <p className="text-xs text-slate-500 leading-normal">Long-term brand partnerships driven by performance and honest reporting.</p>
            </div>

            <div className="bg-[#120a2e]/60 border border-white/5 p-6 rounded-2xl space-y-2 hover:border-accent-green/20 transition-all duration-300">
              <Clock className="w-8 h-8 text-accent-green" />
              <h3 className="text-3xl font-black text-white">2.5x</h3>
              <span className="block text-sm font-bold text-slate-200">Faster Project Turnaround</span>
              <p className="text-xs text-slate-500 leading-normal">Backed by Cornor Tech's agile project management frameworks and execution teams.</p>
            </div>

            <div className="bg-[#120a2e]/60 border border-white/5 p-6 rounded-2xl space-y-2 hover:border-primary/20 transition-all duration-300">
              <Sparkles className="w-8 h-8 text-primary" />
              <h3 className="text-3xl font-black text-white">100%</h3>
              <span className="block text-sm font-bold text-slate-200">Creative Customization</span>
              <p className="text-xs text-slate-500 leading-normal">Zero cheap generic templates. Every slide, post, and visual asset is made unique.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
