"use client";

import React from 'react';
import { Search, Palette, Megaphone, TrendingUp, Sparkles, PenTool, ArrowRight } from 'lucide-react';
import { useContactModal } from '@/components/ContactContext';

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    desc: "Dominate search rankings. We build targeted keyword strategies, audit technical infrastructure, and construct premium backlinks to scale organic reach and drive consistent conversions.",
    tag: "Organic Growth",
    glow: "hover:shadow-purple-500/10 hover:border-purple-500/30"
  },
  {
    icon: Palette,
    title: "Graphic Design & Identity",
    desc: "Establish a remarkable brand presence. From luxury logos to custom vector illustrations, brand guidelines, and high-impact pitch decks that captivate and convert high-ticket clients.",
    tag: "Branding",
    glow: "hover:shadow-pink-500/10 hover:border-pink-500/30"
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing (SMM)",
    desc: "Turn impressions into community. End-to-end management of your social channels, targeted audience research, creative copywriting, and high-conversion campaign workflows.",
    tag: "Social Engine",
    glow: "hover:shadow-blue-500/10 hover:border-blue-500/30"
  },
  {
    icon: TrendingUp,
    title: "Social Page Boosting & Ads",
    desc: "Supercharge your sales pipeline. High-yield paid campaigns across Meta, Google, and LinkedIn with micro-targeted demographics, pixel setup, A/B testing, and weekly ROI dashboards.",
    tag: "Paid Acquisition",
    glow: "hover:shadow-emerald-500/10 hover:border-emerald-500/30"
  },
  {
    icon: Sparkles,
    title: "Creative Agency Services",
    desc: "Cohesive brand positioning and digital consulting. We audit your market, map customer journeys, and architect a premium corporate messaging system that commands authority.",
    tag: "Strategy",
    glow: "hover:shadow-amber-500/10 hover:border-amber-500/30"
  },
  {
    icon: PenTool,
    title: "High-Impact Content Creation",
    desc: "Engage, educate, and sell. Dynamic blog writing, research-heavy whitepapers, conversion copy, scriptwriting, and visual content curated specifically for your target demographic.",
    tag: "Content Engine",
    glow: "hover:shadow-rose-500/10 hover:border-rose-500/30"
  }
];

export default function ServicesSection() {
  const { openModal } = useContactModal();

  return (
    <section id="services" className="py-20 lg:py-24 bg-white bg-grid-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/5">
            Service Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            We Build Digital Products & Campaigns That Scale
          </h2>
          <p className="text-slate-500 font-medium text-base sm:text-lg">
            Every service is crafted with strategic precision, execution speed, and your bottom-line growth in mind.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between ${service.glow}`}
              >
                <div className="space-y-4">
                  {/* Icon container */}
                  <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  <span className="inline-block text-[10px] uppercase font-bold tracking-wider text-slate-400 px-2 py-0.5 rounded bg-slate-100">
                    {service.tag}
                  </span>

                  <h3 className="text-lg font-bold text-slate-950 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-50 flex items-center justify-between">
                  <button
                    onClick={openModal}
                    className="text-xs font-extrabold text-primary hover:text-primary-dark flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    Book Service
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
