"use client";

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play, CircleCheck as CheckCircle } from 'lucide-react';
import { useContactModal } from '@/components/ContactContext';
import { motion } from 'framer-motion';

const highlights = ['SEO & Content Strategy', 'Social Media Growth', 'Brand Identity Design'];

// ── Canvas animated wave ──────────────────────────────────────────────
const AnimatedWave = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef   = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let t = 0;

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // ── Wave helper ──
      const wave = (amp: number, freq: number, phase: number, yBase: number) => {
        ctx.beginPath();
        ctx.moveTo(0, h);
        for (let x = 0; x <= w; x++) {
          const y = yBase - amp * Math.sin((x / w) * Math.PI * freq + t * phase);
          ctx.lineTo(x, y);
        }
        ctx.lineTo(w, h);
        ctx.closePath();
      };

      // Layer 1 — deep purple glow
      wave(22, 3.2, 0.6, h * 0.52);
      const g1 = ctx.createLinearGradient(0, 0, 0, h);
      g1.addColorStop(0, 'rgba(147,51,234,0.20)');
      g1.addColorStop(1, 'rgba(255,255,255,1)');
      ctx.fillStyle = g1;
      ctx.fill();

      // Layer 2 — indigo mid
      wave(16, 2.8, 0.9, h * 0.66);
      const g2 = ctx.createLinearGradient(0, 0, 0, h);
      g2.addColorStop(0, 'rgba(99,102,241,0.15)');
      g2.addColorStop(1, 'rgba(255,255,255,1)');
      ctx.fillStyle = g2;
      ctx.fill();

      // Layer 3 — solid white front
      wave(10, 2.2, 1.3, h * 0.80);
      ctx.fillStyle = '#ffffff';
      ctx.fill();

      t += 0.011;
      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute bottom-0 left-0 w-full h-full block"
    />
  );
};
// ─────────────────────────────────────────────────────────────────────

export default function HeroSection() {
  const { openModal } = useContactModal();

  return (
    <section className="relative min-h-screen flex items-center bg-[#0a0516] overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0516] via-[#120a2e] to-[#0a0516]" />
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.22) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.15) 0%, transparent 40%),
                           radial-gradient(circle at 60% 80%, rgba(147, 51, 234, 0.10) 0%, transparent 40%)`,
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-1/4 right-[10%] w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-[5%] w-48 h-48 bg-purple-400/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-36">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>

            <div className='flex flex-col gap-3'>
            {/* Line 1: "Your Brand's" */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-[8vw] sm:text-[6.5vw] lg:text-[3.6vw] xl:text-[4vw] 2xl:text-[46px] leading-[0.9] font-bold tracking-tighter text-white uppercase"
            >
              Your Brand's
            </motion.h1>

            {/* Line 2: "Growth Partner" */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[8vw] sm:text-[6.5vw] lg:text-[3.6vw] xl:text-[4vw] 2xl:text-[46px] leading-[0.9] font-bold tracking-tighter text-white/90 uppercase whitespace-nowrap mb-6 lg:mb-7 lg:-mt-1"
            >
              Growth{' '}
              <span className="text-[#a855f7]">Partner</span>
            </motion.h1>

            </div>

            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
              Strategic digital marketing, creative branding, and data-driven campaigns that deliver real, measurable results for your business.
            </p>

            {/* Highlights */}
            <ul className="flex flex-wrap gap-4 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={openModal}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 cursor-pointer"
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 glassmorphism text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:bg-white/15 hover:-translate-y-0.5"
              >
                <Play className="w-4 h-4 text-primary" />
                Explore Services
              </Link>
            </div>
          </div>

          {/* Right visual */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              {/* Main card */}
              <div className="glassmorphism rounded-2xl p-7 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center">
                    <Image
                    src="/images/logo/logo.png"
                    alt='BWC'
                    height={42}
                    width={42}
                    className='object-contain'
                    />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Brand Dashboard</p>
                    <p className="text-slate-400 text-xs">Real-time growth metrics</p>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: 'Organic Reach', value: '+284%', color: 'text-emerald-400' },
                    { label: 'Leads Generated', value: '1,240', color: 'text-primary' },
                    { label: 'Engagement Rate', value: '8.6%', color: 'text-amber-400' },
                    { label: 'Brand Score', value: '96/100', color: 'text-purple-300' },
                  ].map(({ label, value, color }) => (
                    <div key={label} className="bg-white/5 rounded-xl p-4">
                      <p className="text-slate-400 text-xs mb-1">{label}</p>
                      <p className={`font-bold text-xl ${color}`}>{value}</p>
                    </div>
                  ))}
                </div>

                {/* Progress bars */}
                <div className="space-y-3">
                  {[
                    { label: 'SEO Score', pct: 87 },
                    { label: 'Social Engagement', pct: 73 },
                    { label: 'Content Reach', pct: 91 },
                  ].map(({ label, pct }) => (
                    <div key={label}>
                      <div className="flex justify-between text-xs text-slate-400 mb-1">
                        <span>{label}</span>
                        <span>{pct}%</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-purple-400 rounded-full"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-5 -right-5 glassmorphism rounded-2xl px-4 py-3 shadow-lg animate-float">
                <p className="text-white text-xs font-medium">50+ Clients</p>
                <p className="text-primary text-xs">Trusted Worldwide</p>
              </div>

              {/* Bottom floating */}
              <div className="absolute -bottom-5 -left-5 glassmorphism rounded-2xl px-4 py-3 shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                <p className="text-emerald-400 font-bold text-sm">+3.2x ROI</p>
                <p className="text-slate-400 text-xs">Average Client Return</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom — canvas animated wave */}
      <div className="absolute bottom-[-1px] left-0 right-0 pointer-events-none h-[130px] select-none">
        <AnimatedWave />
      </div>
    </section>
  );
}
