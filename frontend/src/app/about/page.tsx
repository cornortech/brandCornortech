"use client";

import React from "react";
import Link from "next/link";
import { useContactModal } from "@/components/ContactContext";
import { ShieldCheck, Compass, ArrowRight, CheckCircle2, Zap } from "lucide-react";
import TeamSection from "@/components/TeamSection";

export default function About() {
  const { openModal } = useContactModal();

  const processSteps = [
    {
      num: "01",
      title: "Discover & Audit",
      desc: "We research your competitors, audit technical SEO signals, track current ad leaks, and identify market opportunities."
    },
    {
      num: "02",
      title: "Brand Strategy",
      desc: "We build tailored user personas, map content schedules, and design custom conversion funnels before launching any assets."
    },
    {
      num: "03",
      title: "Bespoke Creation",
      desc: "Our graphic designers and copywriters deploy premium visual assets, engaging articles, and high-conversion ad creative."
    },
    {
      num: "04",
      title: "Measure & Optimize",
      desc: "We track CTR, cost-per-lead, and absolute acquisition cash loops, executing continuous tweaks to scale your revenue."
    }
  ];



  return (
    <div className="w-full min-h-screen bg-white">
      
      {/* 1. HERO HEADER */}
      <section className="relative bg-bg-dark text-white pt-36 pb-20 bg-grid-pattern-dark">
        {/* Glow Spheres */}
        <div className="absolute top-0 right-10 w-96 h-96 rounded-full bg-primary/10 filter blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-primary/5 filter blur-[80px] pointer-events-none animate-float" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-green">
              Our Story & DNA
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-none text-white max-w-4xl mx-auto">
            Bespoke Creative Marketing <br />
            <span className="bg-gradient-to-r from-primary via-primary-light to-accent-green bg-clip-text text-transparent">
              Backed by Tech Excellence.
            </span>
          </h1>

          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-medium">
            Learn why Brand With Cornor exists, how we leverage the powerful technological capabilities of Cornor Tech, and meet the team driving your digital growth.
          </p>
        </div>
      </section>

      {/* 2. THE BRAND SYNERGY RELATIONSHIP */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Relationship Image/Graphic mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[380px] p-6 rounded-3xl bg-[#0a0516] text-white border border-primary/20 shadow-2xl relative overflow-hidden bg-grid-pattern-dark">
                {/* Dot Grid overlay */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
                
                <span className="text-[9px] font-extrabold tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded uppercase block w-fit mb-4">
                  Ecosystem Synergy
                </span>
                
                <h3 className="text-lg font-bold text-white mb-2">Cornor Tech Hierarchy</h3>
                
                <div className="space-y-4 pt-2">
                  <div className="p-3 bg-white/[0.03] border border-white/5 rounded-xl flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-primary flex items-center justify-center font-bold text-sm text-white">CT</div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Cornor Tech (Parent)</h4>
                      <p className="text-[10px] text-slate-400">Web, Apps, AI & IT Delivery</p>
                    </div>
                  </div>

                  <div className="w-0.5 h-6 bg-primary/30 ml-7" />

                  <div className="p-3 bg-white/[0.06] border border-primary/35 rounded-xl flex items-center gap-3 shadow-md shadow-primary/10">
                    <div className="w-8 h-8 rounded bg-accent-green flex items-center justify-center font-bold text-sm text-slate-900">BW</div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Brand With Cornor</h4>
                      <p className="text-[10px] text-accent-green font-semibold">Branding, SMM, Copy, SEO & Ads</p>
                    </div>
                  </div>
                </div>

                <p className="text-[10px] text-slate-500 leading-normal mt-6 italic">
                  Two brands, one continuous engineering quality standard. We deliver clean customer acquisition pipelines.
                </p>
              </div>
            </div>

            {/* Relationship Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/5">
                Our Relationship to Cornor Tech
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Part of the Cornor Tech Ecosystem
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                Historically, digital marketing agencies have struggled with technological integrations—leaving sites with slow speeds, broken pixels, messy CSS code, and incorrect SEO indexing headers.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                **Brand With Cornor** was specifically established in 2024 to solve this. By working hand-in-hand with Cornor Tech's master developers, we ensure that every design guidelines package, organic SEO launch, and social media analytics hook operates at a premium tech standard.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex gap-2 text-xs text-slate-700 font-bold">
                  <CheckCircle2 className="w-4.5 h-4.5 text-accent-green shrink-0" />
                  <span>Technical & Pixel Integration Audits</span>
                </div>
                <div className="flex gap-2 text-xs text-slate-700 font-bold">
                  <CheckCircle2 className="w-4.5 h-4.5 text-accent-green shrink-0" />
                  <span>Agile Deliveries & Account Leadership</span>
                </div>
                <div className="flex gap-2 text-xs text-slate-700 font-bold">
                  <CheckCircle2 className="w-4.5 h-4.5 text-accent-green shrink-0" />
                  <span>Enterprise SEO Infrastructure Setups</span>
                </div>
                <div className="flex gap-2 text-xs text-slate-700 font-bold">
                  <CheckCircle2 className="w-4.5 h-4.5 text-accent-green shrink-0" />
                  <span>Bespoke Creative Vectors & Brand Kits</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="py-20 bg-white bg-grid-pattern relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Mission card */}
            <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-950">Our Mission</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                To empower companies, high-ticket startups, and personal brands to command market authority by delivering ROI-focused marketing strategies, custom vector identity guidelines, and flawless technical search engine positioning.
              </p>
            </div>

            {/* Vision card */}
            <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-accent-green/20 transition-all duration-300 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-accent-green/5 border border-accent-green/10 flex items-center justify-center text-accent-green">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-950">Our Vision</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                To build Nepal's most trusted, highly integrated creative digital agency, recognized globally for bridging the gap between artistic marketing and absolute backend conversion analytics.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CREATIVE PROCESS FLOW */}
      <section className="py-20 bg-[#0a0516] text-white relative overflow-hidden bg-grid-pattern-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-accent-green px-3 py-1 rounded-full bg-accent-green/10">
              Work Flowchart
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              The Brand With Cornor Creative Process
            </h2>
            <p className="text-slate-400 font-medium text-xs sm:text-sm">
              We execute a strict 4-step framework to ensure absolute brand consistency and scaling safety.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#120a2e]/45 border border-white/5 p-6 rounded-2xl relative hover:border-primary/30 transition-all duration-300"
              >
                <div className="absolute top-4 right-4 text-3xl font-black text-white/5">
                  {step.num}
                </div>
                <span className="text-xs font-extrabold text-primary mb-2 block uppercase tracking-wider">
                  Step {step.num}
                </span>
                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. TEAM & LEADERSHIP GRID */}
      {/* <TeamSection /> */}

      {/* 6. CONVERSION FOOTER BANNER */}
      <section className="py-16 bg-slate-50 relative border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Ready to Partner With Nepal's Tech-Enabled Creative Agency?
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto leading-relaxed font-medium">
            Contact us today for a free strategic audit. Let's inspect your current conversion numbers and draw an action roadmap.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={openModal}
              className="px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-xl text-sm font-bold flex items-center justify-center gap-1.5 shadow-md shadow-primary/20 transform active:scale-95 transition-all duration-300 cursor-pointer"
            >
              Book Consultation
              <Zap className="w-4 h-4 fill-white" />
            </button>
            <Link
              href="/#contact"
              className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-800 rounded-xl text-sm font-bold flex items-center justify-center gap-1 border border-slate-200 shadow-sm transition-colors duration-200"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
