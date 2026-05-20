"use client";

import React, { useState, useEffect } from "react";
import { useContactModal } from "./ContactContext";
import { X, Send, Phone, MessageSquare, CheckCircle, Copy } from "lucide-react";
import { contactConfig } from "@/lib/contactConfig";

export default function ContactModal() {
  const { isOpen, closeModal } = useContactModal();
  const [activeTab, setActiveTab] = useState<"message" | "call" | "whatsapp">("message");
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "SEO & Digital Marketing",
    message: "",
  });

  // Handle Esc key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(contactConfig.phoneDisplay);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", service: "SEO & Digital Marketing", message: "" });
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in transition-all duration-300">
      {/* Backdrop click close */}
      <div className="absolute inset-0" onClick={closeModal} />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-[#0f0a24] border border-primary/20 rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 z-10 animate-float-slow">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-slate-400 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors duration-200"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 pb-4 border-b border-white/5">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] uppercase font-bold tracking-widest text-accent-green px-2 py-0.5 rounded-full bg-accent-green/10">
              Sub-Brand of Cornor Tech
            </span>
          </div>
          <h3 className="text-xl font-bold text-white">Book a Consultation</h3>
          <p className="text-sm text-slate-400">
            Let&apos;s grow your digital presence and elevate your brand.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-white/5 bg-white/[0.02]">
          <button
            onClick={() => { setActiveTab("message"); setSubmitted(false); }}
            className={`flex-1 py-3 text-sm font-semibold flex items-center justify-center gap-2 border-b-2 transition-colors duration-200 ${
              activeTab === "message"
                ? "border-primary text-primary"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <Send className="w-4 h-4" />
            Send Message
          </button>
          <button
            onClick={() => setActiveTab("call")}
            className={`flex-1 py-3 text-sm font-semibold flex items-center justify-center gap-2 border-b-2 transition-colors duration-200 ${
              activeTab === "call"
                ? "border-primary text-primary"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <Phone className="w-4 h-4" />
            Call Agency
          </button>
          <button
            onClick={() => setActiveTab("whatsapp")}
            className={`flex-1 py-3 text-sm font-semibold flex items-center justify-center gap-2 border-b-2 transition-colors duration-200 ${
              activeTab === "whatsapp"
                ? "border-primary text-primary"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            WhatsApp
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 min-h-[280px] flex flex-col justify-center">
          {activeTab === "message" && (
            <>
              {submitted ? (
                <div className="text-center py-6 animate-fade-in">
                  <div className="inline-flex items-center justify-center p-3 rounded-full bg-accent-green/10 text-accent-green mb-4">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-sm text-slate-400 max-w-sm mx-auto mb-6">
                    Thank you for reaching out. A digital strategist from Brand With Cornor will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg text-sm font-semibold transition-colors duration-200 shadow-md shadow-primary/25"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Required Service</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#120d2d] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                    >
                      <option value="SEO & Optimization">Search Engine Optimization (SEO)</option>
                      <option value="Graphic Design">Graphic Design & Creative</option>
                      <option value="Social Media Marketing">Social Media Marketing</option>
                      <option value="Page Boosting">Social Media Page Boosting</option>
                      <option value="Content Creation">High-Impact Content Creation</option>
                      <option value="Full Creative Suite">Complete Brand Identity Transformation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Project Brief / Message *</label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your brand goals and what you need..."
                      className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-dark disabled:bg-primary/50 text-white py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-colors duration-200 shadow-md shadow-primary/25 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Brief
                      </>
                    )}
                  </button>
                </form>
              )}
            </>
          )}

          {activeTab === "call" && (
            <div className="text-center py-6 space-y-5 animate-fade-in">
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 text-primary mb-2">
                <Phone className="w-12 h-12" />
              </div>
              <h4 className="text-lg font-bold text-white">Call Our Strategy Hotline</h4>
              <p className="text-sm text-slate-400 max-w-sm mx-auto">
                Speak directly with our brand manager. We are active from 9:00 AM to 6:00 PM (NPT) for direct consultations.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={`tel:${contactConfig.phoneHref}`}
                  className="w-full sm:w-auto px-6 py-2.5 bg-primary hover:bg-primary-dark text-white rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-colors duration-200 shadow-md shadow-primary/20"
                >
                  <Phone className="w-4 h-4" />
                  {contactConfig.phoneDisplay}
                </a>
                <button
                  onClick={handleCopyPhone}
                  className="w-full sm:w-auto px-6 py-2.5 bg-white/5 hover:bg-white/10 text-slate-300 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 border border-white/10 transition-colors duration-200"
                >
                  {copied ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-accent-green" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy Number
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {activeTab === "whatsapp" && (
            <div className="text-center py-6 space-y-5 animate-fade-in">
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-accent-green/10 text-accent-green mb-2">
                <MessageSquare className="w-12 h-12" />
              </div>
              <h4 className="text-lg font-bold text-white">Instant WhatsApp Consultation</h4>
              <p className="text-sm text-slate-400 max-w-sm mx-auto">
                Skip forms and email threads. Start an instant chat conversation on WhatsApp directly with our account strategist.
              </p>
              <a
                href={contactConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-8 py-3 bg-accent-green hover:bg-accent-green-dark text-white rounded-lg text-sm font-semibold items-center justify-center gap-2 transition-colors duration-200 shadow-md shadow-emerald-500/20"
              >
                <MessageSquare className="w-5 h-5" />
                Launch WhatsApp Chat
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
