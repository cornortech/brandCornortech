"use client";

import React, { useState } from "react";
import { CheckCircle2, Layers3, MessageSquare, Sparkles, Target } from "lucide-react";
import { useContactModal } from "@/components/ContactContext";
import { contactConfig } from "@/lib/contactConfig";

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
    recommended: false
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
    recommended: true
  }
];

const businessStages = ["New Launch", "Growing Brand", "Market Leader"] as const;

const goals = ["Awareness", "Leads", "Trust", "Engagement", "Conversion"];

const customServices = [
  { key: "posts", label: "Posts", desc: "Static and carousel content" },
  { key: "reels", label: "Reels", desc: "Short-form video production" },
  { key: "ads", label: "Ads", desc: "Campaign setup and boosts" },
  { key: "seo", label: "SEO", desc: "Google and hashtag visibility" },
  { key: "photography", label: "Photography", desc: "Product and location shoots" },
  { key: "website", label: "Website Updates", desc: "Landing page and content edits" },
  { key: "whatsapp", label: "WhatsApp Setup", desc: "Reply flow and lead handling" },
  { key: "reporting", label: "Reporting", desc: "Performance reports and insights" },
];

const getWhatsAppBriefUrl = (message: string) => {
  try {
    const url = new URL(contactConfig.whatsappUrl);
    url.searchParams.set("text", message);
    return url.toString();
  } catch {
    return `https://wa.me/?text=${encodeURIComponent(message)}`;
  }
};

export default function PricingSection() {
  const { openModal } = useContactModal();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [businessStage, setBusinessStage] = useState<(typeof businessStages)[number]>("Growing Brand");
  const [selectedGoals, setSelectedGoals] = useState<string[]>(["Leads", "Trust"]);
  const [selectedServices, setSelectedServices] = useState<string[]>(["reels", "ads", "seo", "reporting"]);

  const selectedServiceLabels = customServices
    .filter((service) => selectedServices.includes(service.key))
    .map((service) => service.label);

  const recommendedPackage =
    businessStage === "New Launch"
      ? packages[0]
      : businessStage === "Growing Brand"
        ? packages[1]
        : packages[2];
  const packageAccent =
    businessStage === "New Launch"
      ? "text-accent-green"
      : businessStage === "Growing Brand"
        ? "text-primary"
        : "text-slate-950";
  const packageBadge =
    businessStage === "New Launch"
      ? "bg-accent-green/10 border-accent-green/20 text-accent-green"
      : businessStage === "Growing Brand"
        ? "bg-primary/10 border-primary/20 text-primary"
        : "bg-slate-900 text-white border-slate-900";

  const customBrief = [
    "Hello Brand With Cornor Team, I want to build a custom digital marketing package.",
    `Business stage: ${businessStage}`,
    `Goals: ${selectedGoals.length ? selectedGoals.join(", ") : "Need guidance"}`,
    `Services: ${selectedServiceLabels.length ? selectedServiceLabels.join(", ") : "Need guidance"}`,
    `Recommended base package: ${recommendedPackage.name}`,
    "Please share a custom quote and next steps.",
  ].join("\n");

  const customWhatsAppUrl = getWhatsAppBriefUrl(customBrief);

  const toggleGoal = (goal: string) => {
    setSelectedGoals((current) =>
      current.includes(goal) ? current.filter((item) => item !== goal) : [...current, goal]
    );
  };

  const toggleService = (serviceKey: string) => {
    setSelectedServices((current) =>
      current.includes(serviceKey) ? current.filter((item) => item !== serviceKey) : [...current, serviceKey]
    );
  };

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
            const currentPrice = billingCycle === "monthly" ? pkg.price.monthly : pkg.price.yearly;

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
                    <span className="text-slate-700 font-bold text-sm mr-0.5 shrink-0 self-center">
                      Rs.
                    </span>
                    <span className="text-3xl font-black text-slate-900 leading-none">
                      {currentPrice.toLocaleString("en-IN")}
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">
                      / {billingCycle === "monthly" ? "month" : "year"}
                    </span>
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

        <div className="max-w-6xl mx-auto mt-10">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/70">
            <div
              className="absolute inset-0 opacity-70 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgba(147,51,234,0.08), transparent 38%), linear-gradient(315deg, rgba(16,185,129,0.08), transparent 34%)",
              }}
              aria-hidden="true"
            />
            <div className="relative grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-0">
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/5 border border-primary/10">
                      <Sparkles className="w-3.5 h-3.5" />
                      Custom Package Builder
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black leading-tight mt-4 text-slate-950">
                      Build Your Custom Package
                    </h3>
                    <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed mt-2 max-w-xl">
                      Pick the exact marketing engine your brand needs.
                    </p>
                  </div>
                  <div className="rounded-xl border border-accent-green/20 bg-accent-green/5 px-4 py-3 min-w-[150px]">
                    <p className="text-[10px] font-black uppercase tracking-widest text-accent-green/70">Pricing</p>
                    <p className="text-xl font-black text-slate-950">Custom Quote</p>
                  </div>
                </div>

                <div className="space-y-7">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Target className="w-4 h-4 text-primary" />
                      <p className="text-xs font-black uppercase tracking-widest text-slate-500">Business stage</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {businessStages.map((stage) => (
                        <button
                          key={stage}
                          onClick={() => setBusinessStage(stage)}
                          className={`rounded-xl border px-4 py-3 text-left transition-all duration-200 cursor-pointer ${
                            businessStage === stage
                              ? "border-primary bg-primary text-white shadow-md shadow-primary/15"
                              : "border-slate-200 bg-white text-slate-600 hover:border-primary/40 hover:text-slate-950 hover:bg-primary/5"
                          }`}
                        >
                          <span className="text-sm font-bold">{stage}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-4 h-4 text-accent-green" />
                      <p className="text-xs font-black uppercase tracking-widest text-slate-500">Primary goals</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {goals.map((goal) => (
                        <button
                          key={goal}
                          onClick={() => toggleGoal(goal)}
                          className={`rounded-full border px-4 py-2 text-xs font-bold transition-all duration-200 cursor-pointer ${
                            selectedGoals.includes(goal)
                              ? "border-accent-green bg-accent-green text-white shadow-sm shadow-emerald-500/15"
                              : "border-slate-200 bg-white text-slate-500 hover:border-accent-green/50 hover:text-slate-900 hover:bg-accent-green/5"
                          }`}
                        >
                          {goal}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Layers3 className="w-4 h-4 text-primary" />
                      <p className="text-xs font-black uppercase tracking-widest text-slate-500">Services to include</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {customServices.map((service) => {
                        const isSelected = selectedServices.includes(service.key);

                        return (
                          <button
                            key={service.key}
                            onClick={() => toggleService(service.key)}
                            className={`group rounded-xl border p-4 text-left transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? "border-primary/40 bg-primary/5 shadow-sm"
                                : "border-slate-200 bg-white hover:border-primary/30 hover:bg-slate-50"
                            }`}
                          >
                            <span className="flex items-start gap-3">
                              <span
                                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                                  isSelected ? "border-primary bg-primary" : "border-slate-300 bg-white"
                                }`}
                              >
                                {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                              </span>
                              <span>
                                <span className="block text-sm font-bold text-slate-900">{service.label}</span>
                                <span className="block text-xs text-slate-500 mt-0.5">{service.desc}</span>
                              </span>
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <aside className="border-t lg:border-t-0 lg:border-l border-slate-200 bg-slate-50/80 p-6 sm:p-8 lg:p-10">
                <div className="sticky top-24 space-y-6">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">
                      Your custom package
                    </p>
                    <h4 className={`text-2xl font-black leading-tight ${packageAccent}`}>
                      {recommendedPackage.name.replace(" PACKAGE", "")}
                    </h4>
                    <p className="text-sm text-slate-500 mt-2">
                      A flexible starting point based on your selected business stage.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-4">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Selected goals</p>
                    <div className="flex flex-wrap gap-2">
                      {(selectedGoals.length ? selectedGoals : ["Need guidance"]).map((goal) => (
                        <span key={goal} className="rounded-full bg-accent-green/10 px-3 py-1 text-[11px] font-bold text-accent-green">
                          {goal}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-4">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Included services</p>
                    <ul className="space-y-2">
                      {(selectedServiceLabels.length ? selectedServiceLabels : ["Need guidance"]).map((service) => (
                        <li key={service} className="flex items-center gap-2 text-sm font-medium text-slate-600">
                          <CheckCircle2 className="w-4 h-4 shrink-0 text-primary" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`rounded-xl border p-4 ${packageBadge}`}>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-70 mb-1">
                      Recommended base
                    </p>
                    <p className="text-sm font-bold">{recommendedPackage.desc}</p>
                  </div>

                  <a
                    href={customWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent-green px-5 py-3 text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-emerald-500/20 transition-all duration-200 hover:bg-accent-green-dark active:scale-[0.98]"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Send WhatsApp Brief
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
