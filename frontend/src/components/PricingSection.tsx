"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useContactModal } from "@/components/ContactContext";

const packages = [
  {
    name: "Starter Bundle",
    desc: "Perfect for local startups and personal brands beginning their digital journey.",
    price: { monthly: 15000, yearly: 12000 },
    features: [
      "2 Managed Social Platforms",
      "8 Custom Graphic Posts / Month",
      "Basic SEO Set-up & Audit",
      "Monthly Performance Reports",
      "Standard Email Support"
    ],
    cta: "Start Starter Plan",
    recommended: false,
    glow: "border-slate-200"
  },
  {
    name: "Growth Engine",
    desc: "Designed for scaling brands looking to dominate their market with high-volume content.",
    price: { monthly: 30000, yearly: 24000 },
    features: [
      "4 Managed Social Platforms",
      "15 Custom Graphics + 4 Reels/Shorts",
      "Comprehensive On-Page & Tech SEO",
      "Meta & Google Ad Campaign Setup",
      "Bi-weekly Dashboard Syncs",
      "Dedicated Account Strategist"
    ],
    cta: "Launch Growth Engine",
    recommended: true,
    glow: "border-primary shadow-xl shadow-primary/10 relative"
  },
  {
    name: "Professional Core",
    desc: "Complete creative suite + high-performance digital marketing for mature businesses.",
    price: { monthly: 60000, yearly: 48000 },
    features: [
      "Full Channel Management & Strategy",
      "Daily Custom Posting & Interactive Reels",
      "Advanced Competitive SEO & Blog Engine",
      "High-Yield Ad Campaigns (Rs. 2L+ budget support)",
      "Premium Video/Creative Scripting",
      "Direct Slack Channel Communication",
      "Weekly Custom ROI Audits"
    ],
    cta: "Deploy Professional",
    recommended: false,
    glow: "border-slate-200"
  },
  {
    name: "Enterprise Custom",
    desc: "Custom-built marketing operations and bespoke creative solutions for leaders.",
    price: { monthly: "Custom", yearly: "Bespoke" },
    features: [
      "Full-Scale Brand Identity Design",
      "Custom Production & Video Shoots",
      "Continuous Multi-Region SEO campaigns",
      "Bespoke Lead Generation Funnels",
      "Unlimited Consulting & Training",
      "Quarterly Leadership Reviews"
    ],
    cta: "Schedule Consultation",
    recommended: false,
    glow: "border-slate-200"
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
              Yearly Saving
              <span className="px-1.5 py-0.5 rounded-full bg-accent-green/10 text-[9px] text-accent-green font-extrabold">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => {
            const isCustom = typeof pkg.price.monthly === "string";
            const currentPrice = isCustom 
              ? billingCycle === "monthly" ? pkg.price.monthly : pkg.price.yearly
              : billingCycle === "monthly" ? pkg.price.monthly : pkg.price.yearly;

            return (
              <div
                key={index}
                className={`bg-white border p-6 rounded-2xl flex flex-col justify-between hover:shadow-lg transition-all duration-300 group ${
                  pkg.recommended ? "border-primary shadow-lg ring-1 ring-primary/20 scale-[1.03]" : "border-slate-100 hover:border-slate-300"
                }`}
              >
                <div>
                  {pkg.recommended && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[9px] uppercase font-black tracking-widest text-white px-3 py-1 rounded-full bg-primary shadow-sm shadow-primary/20">
                      RECOMMENDED
                    </span>
                  )}

                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-slate-950">{pkg.name}</h3>
                    <p className="text-xs text-slate-400 leading-normal mt-1 min-h-[40px]">
                      {pkg.desc}
                    </p>
                  </div>

                  <div className="mb-6 flex items-baseline gap-1 py-3 border-y border-slate-50 bg-slate-50/50 rounded-lg px-3">
                    {!isCustom && (
                      <span className="text-slate-700 font-bold text-sm mr-0.5 shrink-0 self-center">
                        Rs.
                      </span>
                    )}
                    <span className="text-3xl font-black text-slate-900 leading-none">
                      {typeof currentPrice === 'number' ? currentPrice.toLocaleString('en-IN') : currentPrice}
                    </span>
                    {!isCustom && <span className="text-xs text-slate-400 font-semibold">/ month</span>}
                  </div>

                  <ul className="space-y-3.5 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-2 text-xs text-slate-500 font-medium">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 ${pkg.recommended ? "text-primary" : "text-slate-400"}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
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
