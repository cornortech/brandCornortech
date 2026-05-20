"use client";

import React from "react";
import Image from "next/image";

const CLIENT_LOGOS = [
  { alt: "Career Guide", src: "/clients/caareer.webp" },
  { alt: "Debai", src: "/clients/debai.webp" },
  { alt: "Dynamic Education", src: "/clients/dynamic.webp" },
  { alt: "Web Surfer", src: "/clients/neplo.webp" },
  { alt: "Learn Nepal", src: "/clients/ln.webp" },
  { alt: "Shine Education Hub", src: "/clients/shine.webp" },
  { alt: "Writeeasy", src: "/clients/we.svg" },
  { alt: "Hotel Green Peace", src: "/clients/pz.webp" },
  { alt: "Sulav Kharel", src: "/clients/Sulav_kharel.jpeg" },
  { alt: "Siddhartha Hospitality", src: "/clients/siddhartha_hospitality.jpg" },
  { alt: "Kalika Manavgyan School", src: "/clients/kalika.jpg" },
  { alt: "Krish Marble And Tiles", src: "/clients/krish_marble.jpg" },
  { alt: "Rohan Trade Link", src: "/clients/rohan_trade_link.jpg" },
  { alt: "SRM Termite Control", src: "/clients/srm.jpg" },
  { alt: "Swargadwari Carbon Cleaning", src: "/clients/swargadwari_cc.jpg" },
  { alt: "Culinary Academy Of Arts", src: "/clients/caan.jpg" },
  { alt: "Dream Way Education", src: "/clients/dream_way.jpg" },
  { alt: "Krish Aluminium", src: "/clients/krish_aluminium.jpg" }
];

export default function ClientMarquee() {
  // Duplicate to allow seamless scroll
  const marqueeItems = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <div className="w-full overflow-hidden bg-white py-8 relative">
      {/* Gradients to fade edges */}
      <div className="absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

      <div className="flex gap-10 w-max animate-marquee">
        {marqueeItems.map((client, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-40 h-20 shrink-0 bg-white rounded-xl border border-slate-100 px-5 py-3 shadow-xs hover:border-primary/30 hover:shadow-sm transition-all duration-300 group cursor-pointer"
          >
            <div className="relative w-full h-full">
              <Image
                src={client.src}
                alt={client.alt}
                fill
                className="object-contain"
                sizes="160px"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
