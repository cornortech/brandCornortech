"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Star, ChevronDown, ChevronUp } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image?: string;
  rating: number;
  text: string;
  service?: string;
  gradient: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sulav Kharel",
    image: "/testimonials/sulav_kharel.jpeg",
    role: "MP of Nepal & Political Leader",
    company: "Rastriya Swatantra Party (RSP)",
    rating: 5,
    text: "Cornor Tech managed our social media content with excellent professionalism and creativity. Their team understood our audience and delivered clear, engaging, and impactful content consistently. Our digital presence saw noticeable improvement in a short time.",
    service: "Social Media Marketing",
    gradient: "from-[#a855f7]/5 to-[#9333EA]/5"
  },
  {
    id: "2",
    name: "Bhusan Giri",
    image: "/testimonials/bhusan_giri.jpeg",
    role: "Co-Founder",
    company: "ARKBO Technologies Pvt. Ltd",
    rating: 5,
    text: "We had a great experience working with the team. They took the time to understand our needs and delivered a clean, well-structured design that truly fits our vision.",
    service: "Web Development",
    gradient: "from-[#9333EA]/5 to-[#7c3aed]/5"
  },
  {
    id: "3",
    name: "Padam Neupane",
    image: "/testimonials/padam_neupane.jpeg",
    role: "Branch Manager",
    company: "Siddhartha Cottage Butwal",
    rating: 5,
    text: "Cornor Tech transformed our digital marketing and Meta boosting campaigns at Siddhartha Cottage Butwal. Their strategies, insights, and execution helped us reach more customers effectively and improve engagement. The team is professional, responsive, and results-driven—I highly recommend their services.",
    service: "Social Media Marketing",
    gradient: "from-[#9333EA]/5 to-[#7e22ce]/5"
  },
  {
    id: "4",
    name: "Manish Thapa",
    image: "/testimonials/manish_thapa.jpeg",
    role: "Managing Director",
    company: "Nav Yantra Trading Pvt. Ltd",
    rating: 5,
    text: "Cornor Tech delivered an outstanding website for Nav Yantra Trading. Their professionalism, technical expertise, and attention to detail made the process smooth and efficient. I’m very impressed with the final product and highly recommend their web development services.",
    service: "Web Development",
    gradient: "from-[#9333EA]/5 to-[#a855f7]/5"
  },
  {
    id: "5",
    name: "Roshan Neupane",
    image: "/testimonials/roshan_neupane.jpeg",
    role: "Managing Director",
    company: "SR Creations Pvt. Ltd",
    rating: 5,
    text: "Cornor Tech has been fantastic in handling both our web development and video editing needs. Their creativity, technical skills, and timely delivery helped SR Creations Pvt. Ltd. enhance its digital presence and content quality. Highly recommended for anyone looking for reliable tech solutions.",
    service: "Web Development",
    gradient: "from-[#7c3aed]/5 to-[#9333EA]/5"
  },
  {
    id: "6",
    name: "Bardan Acharya",
    image: "/testimonials/bardan_acharya.jpeg",
    role: "Managing Director",
    company: "Dynamic Education Center",
    rating: 5,
    text: "Cornor Tech helped Dynamic Education strengthen its digital marketing efforts. Their expertise, strategic approach, and timely execution significantly boosted our online reach and engagement. The team is professional, creative, and highly reliable—I highly recommend their services.",
    service: "Social Media Marketing",
    gradient: "from-[#7e22ce]/5 to-[#9333EA]/5"
  }
];

const AvatarImage = ({ name, src }: { name: string; src?: string }) => {
  const [failed, setFailed] = useState(false);

  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0].toUpperCase())
    .join("");

  if (failed || !src) {
    return (
      <div className="w-12 h-12 rounded-full ring-2 ring-primary/20 group-hover:ring-primary transition-all duration-300 bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white font-bold text-sm select-none">
        {initials}
      </div>
    );
  }

  return (
    <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary transition-all duration-300 relative">
      <Image
        src={src}
        alt={name}
        fill
        className="object-cover"
        sizes="48px"
        onError={() => setFailed(true)}
      />
    </div>
  );
};

export default function TestimonialsSection() {
  const [expanded, setExpanded] = useState(false);
  const expandBtnRef = useRef<HTMLButtonElement>(null);

  const visibleTestimonials = expanded ? testimonials : testimonials.slice(0, 3);

  const handleToggle = () => {
    if (expanded) {
      setExpanded(false);
      setTimeout(() => {
        expandBtnRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    } else {
      setExpanded(true);
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-[#0a0516] text-white relative overflow-hidden bg-grid-pattern-dark">
      {/* Glow Spheres */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-primary/5 filter blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-accent-green px-3 py-1 rounded-full bg-accent-green/10">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            What Leaders & Partners Say About Us
          </h2>
          <p className="text-slate-400 font-medium text-sm sm:text-base">
            Hear directly from the organizations, branch managers, and political entities we have helped establish authority.
          </p>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleTestimonials.map((test, index) => (
            <div
              key={test.id}
              className={`group bg-[#120a2e]/40 border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-primary/20 transition-all duration-300 relative overflow-hidden`}
            >
              {/* Subtle hover gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${test.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div className="relative z-10">
                {/* Rating Stars & Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-0.5 text-amber-400">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                </div>
                
                <blockquote className="text-sm text-slate-300 italic leading-relaxed font-medium mb-4">
                  "{test.text}"
                </blockquote>

                {test.service && (
                  <span className="inline-block px-2.5 py-0.5 bg-primary/10 text-primary rounded-full text-[10px] font-bold uppercase tracking-wider mb-6">
                    {test.service}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3 pt-4 mt-6 border-t border-white/5 relative z-10">
                <div className="relative shrink-0">
                  <AvatarImage name={test.name} src={test.image} />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-primary rounded-full border-2 border-[#120a2e]" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-xs font-bold text-white group-hover:text-primary transition-colors truncate">
                    {test.name}
                  </span>
                  <span className="block text-[10px] text-slate-400 font-semibold truncate">
                    {test.role}
                  </span>
                  <span className="block text-[9px] text-primary-light font-medium truncate">
                    {test.company}
                  </span>
                </div>
                <div className="shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center" title="Verified Client">
                  <svg className="w-3.5 h-3.5 text-primary-light" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        <div className="flex flex-col items-center gap-4 mt-12">
          <p className="text-xs text-slate-400 font-medium">
            Showing <span className="text-primary font-bold">{visibleTestimonials.length}</span> of <span className="text-primary font-bold">{testimonials.length}</span> premium reviews
          </p>
          
          <button
            ref={expandBtnRef}
            onClick={handleToggle}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-lg shadow-primary/20 active:scale-95"
          >
            <span>{expanded ? "Collapse Reviews" : "Show More Reviews"}</span>
            {expanded ? (
              <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-200" />
            ) : (
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200" />
            )}
          </button>
        </div>

      </div>
    </section>
  );
}
