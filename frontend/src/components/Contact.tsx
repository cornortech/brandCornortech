"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, ArrowRight, Zap } from "lucide-react";
import { useContactModal } from "@/components/ContactContext";
import { contactConfig } from "@/lib/contactConfig";

const ContactRow = ({
  href,
  icon,
  label,
  value,
  extra,
}: {
  href?: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  extra?: React.ReactNode;
}) => {
  const Tag = href ? "a" : "div";
  return (
    <Tag
      {...(href
        ? {
            href,
            target: href.startsWith("http") ? "_blank" : undefined,
            rel: href.startsWith("http") ? "noopener noreferrer" : undefined,
          }
        : {})}
      className="group flex items-center gap-4 py-4 border-b border-[#9333EA]/10 last:border-0 hover:bg-[#9333EA]/5 -mx-4 px-4 rounded-xl transition-colors duration-200 cursor-pointer"
    >
      <div className="w-10 h-10 rounded-xl bg-[#9333EA]/10 border border-[#9333EA]/20 flex items-center justify-center shrink-0 group-hover:bg-[#9333EA]/20 group-hover:border-[#9333EA]/40 transition-all duration-200">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9333EA]/50 mb-0.5">{label}</p>
        <p className="text-[13.5px] font-semibold text-slate-800 group-hover:text-primary transition-colors truncate">{value}</p>
      </div>
      {extra}
      {href && (
        <ArrowRight className="w-3.5 h-3.5 text-[#9333EA]/25 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200 shrink-0" />
      )}
    </Tag>
  );
};

export default function Contact() {
  const { openModal } = useContactModal();
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Search Engine Optimization (SEO)",
    message: "",
  });

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(contactConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "Search Engine Optimization (SEO)",
        message: "",
      });
    }, 1200);
  };

  return (
    <section id="contact" className="w-full min-h-screen bg-white relative overflow-hidden pt-32 pb-20 font-sans scroll-mt-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Bento grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* ════ CARD 1 — Contact details (col-span-5) ════ */}
          <div className="lg:col-span-5">
            <div className="relative h-full bg-white border border-[#9333EA]/12 rounded-3xl p-6 lg:p-8 flex flex-col justify-between shadow-[0_4px_40px_rgba(147,51,234,0.05)] overflow-hidden">

              <div
                className="absolute -top-16 -right-16 w-44 h-44 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(147,51,234,0.12) 0%, transparent 65%)" }}
                aria-hidden="true"
              />

              <div className="flex items-center justify-between mb-8 z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#9333EA]/50">
                  Sub-Brand Details
                </p>
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#9333EA] bg-[#9333EA]/8 border border-[#9333EA]/15 px-2.5 py-1 rounded-full">
                  Est. 2024
                </span>
              </div>

              <div className="flex-1 flex flex-col justify-center space-y-2 z-10">
                <ContactRow
                  href={`mailto:${contactConfig.email}`}
                  label="Email"
                  value={contactConfig.email}
                  icon={<Mail className="w-4 h-4 text-primary" />}
                  extra={
                    <button
                      onClick={copyEmail}
                      className={`text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border transition-all duration-200 shrink-0 cursor-pointer ${
                        copied
                          ? "border-emerald-400/50 text-emerald-600 bg-emerald-50"
                          : "border-[#9333EA]/20 text-[#9333EA]/50 hover:border-primary/50 hover:text-primary hover:bg-[#9333EA]/5"
                      }`}
                    >
                      {copied ? "✓ Copied" : "Copy"}
                    </button>
                  }
                />

                <ContactRow
                  href={`tel:${contactConfig.phoneHref}`}
                  label="Hotline"
                  value={contactConfig.phoneDisplay}
                  icon={<Phone className="w-4 h-4 text-primary" />}
                />

                <ContactRow
                  label="Response Time"
                  value="Within 24 Hours"
                  icon={<Clock className="w-4 h-4 text-primary" />}
                />
              </div>

              <div className="mt-8 pt-5 border-t border-[#9333EA]/10 flex items-center justify-between z-10">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                    Available for new projects
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ════ CARD 2 — CTA Banner + Form (col-span-7) ════ */}
          <div className="lg:col-span-7 flex flex-col gap-6">

            {/* ── Branded Dark CTA Banner ── */}
            <div
              className="relative rounded-3xl p-6 lg:p-8 overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-lg border border-primary/20"
              style={{
                background: "linear-gradient(135deg, #1e003a 0%, #0a0516 45%, #2d0a52 100%)",
              }}
            >
              <div
                className="absolute -bottom-12 -right-12 w-52 h-52 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(147,51,234,0.18) 0%, transparent 65%)" }}
                aria-hidden="true"
              />
              <div className="absolute top-4 right-6 text-[80px] font-black text-white/[0.03] leading-none select-none pointer-events-none" aria-hidden="true">
                ✉
              </div>
              <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle, #9333ea 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
                aria-hidden="true"
              />

              <div className="relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent-green mb-2">
                  Launch Strategy
                </p>
                <h3 className="text-xl lg:text-2xl font-black text-white leading-tight">
                  Have a brand idea?
                  <br />
                  <span className="text-white/45">Let&apos;s map the funnel.</span>
                </h3>
              </div>

              <div className="relative z-10 shrink-0">
                <button
                  onClick={openModal}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-200 active:scale-95 shadow-[0_4px_20px_rgba(147,51,234,0.45)] cursor-pointer"
                >
                  Book Free Call
                  <Zap className="w-3.5 h-3.5 fill-white" />
                </button>
              </div>
            </div>

            {/* ── Form Card ── */}
            <div className="bg-white border border-[#9333EA]/12 rounded-3xl p-6 lg:p-8 shadow-[0_4px_40px_rgba(147,51,234,0.05)] flex-grow">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="inline-flex items-center justify-center p-3 rounded-full bg-emerald-500/10 text-emerald-500">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Brief Submitted!</h3>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                    Thank you. A Brand strategist will inspect your metrics and sync with you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wide mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wide mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wide mb-1">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+977 98xxxxxxx"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wide mb-1">Service Interest</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-primary transition-colors"
                      >
                        <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                        <option value="Social Media Marketing">Social Media Marketing</option>
                        <option value="Social Page Boosting">Social Media Boosting</option>
                        <option value="Graphic Design & Branding">Graphic Design &amp; Branding</option>
                        <option value="Creative Production">Bespoke Creative Production</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wide mb-1">Message / Campaign Brief *</label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Explain your goals, company name, or current leaks..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-dark disabled:bg-primary/50 text-white py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {isSubmitting ? (
                      <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        Send Brief
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* ════ CARD 3 — Maps Card ════ */}
        <div className="mt-6 z-10 relative">
          <div className="relative bg-white border border-[#9333EA]/12 rounded-3xl overflow-hidden shadow-[0_4px_40px_rgba(147,51,234,0.05)] flex flex-col">

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-4 bg-white border-b border-[#9333EA]/10 gap-3 z-10 relative">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#9333EA]/10 border border-[#9333EA]/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-[12px] font-bold text-slate-900 leading-none">{contactConfig.companyName}</p>
                  <p className="text-[10px] text-[#9333EA]/50 mt-0.5 font-bold uppercase tracking-wider">{contactConfig.address}</p>
                </div>
              </div>

              <a
                href={contactConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/map inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#9333EA] hover:bg-[#7c3aed] transition-all duration-200 shadow-[0_2px_12px_rgba(147,51,234,0.25)] cursor-pointer"
              >
                <MapPin className="w-3 h-3 text-white" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                  Get Directions
                </span>
                <span className="text-white/70 group-hover/map:translate-x-0.5 group-hover/map:-translate-y-0.5 transition-transform duration-200 text-xs">↗</span>
              </a>
            </div>

            <div className="relative w-full h-[350px]">
              <iframe
                src={contactConfig.mapsEmbedUrl}
                width="100%"
                height="100%"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${contactConfig.companyName} Office Location - ${contactConfig.address}`}
              />
            </div>

            <div className="flex items-center justify-between px-6 py-3.5 bg-slate-50 border-t border-[#9333EA]/10 relative z-10">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9333EA]" />
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Cornor Tech · Est. 2023
                </p>
              </div>
              <a
                href={contactConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-bold text-[#9333EA] hover:text-[#7c3aed] transition-colors uppercase tracking-widest cursor-pointer"
              >
                Open in Maps ↗
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
