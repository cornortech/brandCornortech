"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useContactModal } from "@/components/ContactContext";

const packages = [
  {
    name: "UDAAN LAUNCH PACKAGE",
    desc: "From New Business To Trusted Brand",
    price: { monthly: 9999, yearly: 119988 },
    bestFor: "Startups, Cafes, Salons, Clothing Stores, Retail Shops, Local Brands, New Business",
    includes: [
      "5 Professional Posts",
      "5 Reels/Product Service Videos",
      "3 Promotional Graphics",
      "Story Based Branding Content",
      "Trust Building & UGC Strategy",
      "CTA-Focused Campaigns",
      "Facebook & Instagram Management",
      "Monthly Content Calender",
      "Google & WhatsApp Optimization",
      "1 Sponsored Ad Campaign",
      "SEO & Hashtag Optimization",
      "Monthly Insignts",
      "Audience Engagement Support",
      "$10 Ad Credit"
    ],
    brandFocus: "Awareness, Trust, Consideration, Conversion",
    idealFor: "Business that are newly launched and need visiblity, audience trust, professional branding, and customer attention.",
    cta: "Launch My Brand",
    recommended: false
  },
  {
    name: "PRAGATI BRAND GROWTH PACKAGE",
    desc: "From Known Brand To Trusted Market Choice",
    price: { monthly: 19999, yearly: 239988 },
    bestFor: "Growing Brands, Cafes, Fashion Brands, Hospitality, Retail, Service Businesses, Expanding Businesses",
    includes: [
      "6 Premium Posts",
      "10 High-Quality Reels",
      "6 Custom Brand Graphics",
      "Storytelling & Brand Positioning",
      "Testimonial & Trust-Based Content",
      "Strategic CTA Campaigns",
      "Competitor Analysis",
      "Facebook & Instagram Management",
      "Google SEO Optimization",
      "WhatsApp Auto Reply Setup",
      "2 Sponsored Ad Campaigns",
      "Weekly Reports & Insights",
      "Professional Photography Session",
      "Lead Generation Setup",
      "Website Updates",
      "$20 Ad Credit"
    ],
    brandFocus: "Positioning, Trust, Engagement, Conversion",
    idealFor: "Business that are newly launched and need visibility, audience trust, professional branding, and customer attention",
    cta: "Scale My Brand",
    recommended: true
  },
  {
    name: "AAROHAN DIGITAL DOMINANCE PACKAGE",
    desc: "Lead Bigger, Influence Stronger, Dominate The Market",
    price: { monthly: 39999, yearly: 479988 },
    bestFor: "Corporate Brands, Colleges, Hospitals, Cooperatives, Real Estate, Industry Leaders, Multi-Branch Business",
    includes: [
      "24 Premium Posts",
      "16 Professional Reels/Videos",
      "Advanced Graphics & Motion Design",
      "Story-Driven Marketing Campaigns",
      "Authority & Trust Building Content",
      "High-Converting CTA Strategy",
      "Meta Lead Generation Setup",
      "Facebook, Instagram & TikTok Management",
      "Advanced Google Optimization",
      "Weekly Analysis Reports",
      "Website Maintenance",
      "2 Professional Photography Sessions",
      "AI Customer Response Setup",
      "Lead Funnel System",
      "Competitor & Market Research",
      "Priority Support",
      "3 Sponsored Ad Campaigns",
      "$40 Ad Credit"
    ],
    brandFocus: "Influence, Authority, Engagement, Conversion, Market Leadership",
    idealFor: "Brands that are already performing well and now need premium digital dominance, stronger authority, scalable growth, and market leadership",
    cta: "Become A Market Leader",
    recommended: false
  }
];

export default function PricingSection() {
  const { openModal } = useContactModal();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <section id="pricing" className="py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/5">
            Cost & Value Structure
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Bespoke Pricing Tailored to Your Scaling Needs
          </h2>
          <p className="text-slate-500 font-medium text-sm sm:text-base">
            Select the optimal plan to ignite your brand growth. Choose yearly billing to unlock a 20% flat discount.
          </p>

          {/* Toggle Button */}
          <div className="inline-flex items-center gap-2.5 p-1 rounded-full bg-slate-100 border border-slate-200 mt-4">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                billingCycle === "monthly" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-950"
              }`}
            >
              Monthly Plan
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1 cursor-pointer ${
                billingCycle === "yearly" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-950"
              }`}
            >
              Yearly Plan
            </button>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => {
            const isCustom = typeof pkg.price.monthly === "string";
            const currentPrice = isCustom 
              ? billingCycle === "monthly" ? pkg.price.monthly : pkg.price.yearly
              : billingCycle === "monthly" ? pkg.price.monthly : pkg.price.yearly;

            return (
              <div
                key={index}
                className={`relative h-full bg-white border-2 p-6 rounded-2xl flex flex-col justify-between hover:shadow-lg transition-all duration-300 group ${
                  pkg.recommended ? "border-primary shadow-lg ring-1 ring-primary/20 scale-[1.03]" : "border-slate-200 hover:border-primary/40"
                } ${pkg.recommended ? "md:order-last md:col-span-2 md:w-[calc(50%-1rem)] md:mx-auto" : ""}`}
              >
                <div>
                  {pkg.recommended && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[9px] uppercase font-black tracking-widest text-white px-3 py-1 rounded-full bg-primary shadow-sm shadow-primary/20">
                      RECOMMENDED
                    </span>
                  )}

                  <div className="mb-4 min-h-[88px]">
                    <h3 className="text-xl font-bold text-primary">{pkg.name}</h3>
                    <p className="text-sm text-slate-400 leading-normal mt-1">
                      {pkg.desc}
                    </p>
                  </div>

                  <div className="mb-6 flex items-baseline gap-1 py-1 border-y border-slate-50 bg-slate-50/50 rounded-lg px-3">
                    {!isCustom && (
                      <span className="text-slate-700 font-bold text-sm mr-0.5 shrink-0 self-center">
                        Rs.
                      </span>
                    )}
                    <span className="text-3xl font-black text-slate-900 leading-none">
                      {typeof currentPrice === 'number' ? currentPrice.toLocaleString('en-IN') : currentPrice}
                    </span>
                    {!isCustom && (
                      <span className="text-xs text-slate-400 font-semibold">
                        / {billingCycle === "monthly" ? "month" : "year"}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-3 mb-8 items-stretch">
                    <div className="grid grid-rows-[minmax(116px,auto)_minmax(74px,auto)_minmax(132px,auto)] gap-4 rounded-xl border border-slate-200 bg-white p-4">
                      <div className="min-h-0">
                        <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-1.5">Best for</p>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed">{pkg.bestFor}</p>
                      </div>
                      <div className="min-h-0">
                        <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-1.5">Brand focus</p>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed">{pkg.brandFocus}</p>
                      </div>
                      <div className="min-h-0">
                        <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-1.5">Ideal for</p>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed">{pkg.idealFor}</p>
                      </div>
                    </div>

                    <div className="h-full rounded-xl border border-slate-200 bg-slate-50/60 p-4">
                      <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Includes</p>
                      <ul className="space-y-2.5">
                        {pkg.includes.map((item, idx) => (
                          <li key={idx} className="flex gap-1.5 text-[13px] text-slate-500 font-medium leading-snug">
                            <CheckCircle2 className={`w-4 h-4 shrink-0 ${pkg.recommended ? "text-primary" : "text-slate-400"}`} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <button
                  onClick={openModal}
                  className={`w-full py-2.5 rounded-lg text-xs font-bold tracking-wide transition-all duration-200 cursor-pointer ${
                    pkg.recommended
                      ? "bg-primary hover:bg-primary-dark text-white shadow-md shadow-primary/10"
                      : "bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200"
                  }`}
                >
                  {pkg.cta}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
