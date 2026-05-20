"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Linkedin, Github } from "@/components/BrandIcons";

const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  skills: string[];
  gradient: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Ramit Neupane",
    role: "Founder & CEO",
    bio: "Visionary leader passionate about driving innovation and building impactful digital solutions. Focused on guiding the company's strategy, growth, and long-term vision.",
    image: "/teams/ramit.jpeg",
    skills: ["Leadership", "Business Strategy", "Innovation"],
    gradient: "from-primary/10 to-primary/30",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    id: "2",
    name: "Santosh Kunwar",
    role: "Chief Operational Officer",
    bio: "Tech enthusiast leading our engineering team. Expert in full-stack development, AI/ML, and cloud architecture with a proven track record.",
    image: "/teams/coo.jpeg",
    skills: ["Full-Stack", "AI/ML", "Cloud"],
    gradient: "from-accent-green/10 to-accent-green/30",
    social: { linkedin: "#", github: "#" }
  },
  {
    id: "3",
    name: "Laxman Neupane",
    role: "Chief Financial Officer",
    bio: "Financial strategist responsible for managing company finances, budgeting, and investment planning. Focused on maintaining financial stability and supporting sustainable business growth.",
    image: "/teams/cfo.jpeg",
    skills: ["Financial Planning", "Budget Management", "Risk Analysis"],
    gradient: "from-primary/10 to-accent-green/30",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    id: "4",
    name: "Aman Pokhrel",
    role: "Organizational Manager",
    bio: "Experienced organizational manager responsible for coordinating team operations and ensuring smooth workflow across departments.",
    image: "/teams/om.jpeg",
    skills: ["Team Management", "Operations", "Coordination"],
    gradient: "from-accent-green/10 to-primary/30",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    id: "5",
    name: "Rubi Ale",
    role: "Marketing Head",
    bio: "Creative marketing leader focused on building brand presence and driving growth. Skilled in digital marketing, campaign strategy, market research, and audience engagement.",
    image: "/teams/mh.jpg",
    skills: ["Digital Marketing", "Brand Strategy", "Market Research"],
    gradient: "from-primary/20 to-accent-green/20",
    social: { linkedin: "#", twitter: "#" }
  }
];

export default function TeamSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrorMap((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="team" className="py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-primary/5 filter blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent-green/5 filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/5">
            Ecosystem Experts
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Meet the Accountable Minds Driving Your Brand
          </h2>
          <p className="text-slate-500 font-medium text-sm sm:text-base">
            Not freelancers. Not outsourcing. You are backed by Cornor Tech's core leadership, expert engineers, and digital marketing leaders.
          </p>
        </div>

        {/* First Row: 4 Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.slice(0, 4).map((member) => {
            const hasError = imageErrorMap[member.id];
            const isHovered = hoveredId === member.id;
            const initials = member.name.split(" ").map(n => n[0]).join("");

            return (
              <div
                key={member.id}
                onMouseEnter={() => setHoveredId(member.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group bg-slate-50 border border-slate-100 hover:border-primary/20 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                {/* Photo container */}
                <div className={`aspect-square bg-gradient-to-br ${member.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="w-full h-full bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center relative overflow-hidden">
                      <div className="w-48 h-48 rounded-full bg-white shadow-md transform group-hover:scale-105 transition-transform duration-500 overflow-hidden relative flex items-center justify-center">
                        {!hasError ? (
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover object-top"
                            sizes="192px"
                            onError={() => handleImageError(member.id)}
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-black text-3xl">
                            {initials}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Bio Hover Overlay */}
                  <div
                    className={`absolute inset-0 bg-white/95 backdrop-blur-xs p-6 flex flex-col justify-center items-center text-center transition-all duration-300 ${
                      isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    <p className="text-slate-600 text-xs font-semibold leading-relaxed mb-4">
                      {member.bio}
                    </p>
                    {/* Social networks */}
                    <div className="flex gap-3">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          className="w-8 h-8 rounded-full bg-slate-100 hover:bg-primary/10 text-slate-600 hover:text-primary flex items-center justify-center transition-colors"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          className="w-8 h-8 rounded-full bg-slate-100 hover:bg-primary/10 text-slate-600 hover:text-primary flex items-center justify-center transition-colors"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                      )}
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          className="w-8 h-8 rounded-full bg-slate-100 hover:bg-primary/10 text-slate-600 hover:text-primary flex items-center justify-center transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Info & Skills */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs text-primary font-bold">{member.role}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-slate-100">
                    {member.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-full bg-primary/5 text-primary text-[10px] font-bold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Second Row: Centered Rubi Ale */}
        <div className="flex justify-center mt-8">
          <div className="w-full sm:w-1/2 lg:w-1/4">
            {(() => {
              const member = teamMembers[4];
              const hasError = imageErrorMap[member.id];
              const isHovered = hoveredId === member.id;
              const initials = member.name.split(" ").map(n => n[0]).join("");

              return (
                <div
                  onMouseEnter={() => setHoveredId(member.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group bg-slate-50 border border-slate-100 hover:border-primary/20 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div className={`aspect-square bg-gradient-to-br ${member.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <div className="w-full h-full bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center relative overflow-hidden">
                        <div className="w-48 h-48 rounded-full bg-white shadow-md transform group-hover:scale-105 transition-transform duration-500 overflow-hidden relative flex items-center justify-center">
                          {!hasError ? (
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover object-top"
                              sizes="192px"
                              onError={() => handleImageError(member.id)}
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-black text-3xl">
                              {initials}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Bio Hover Overlay */}
                    <div
                      className={`absolute inset-0 bg-white/95 backdrop-blur-xs p-6 flex flex-col justify-center items-center text-center transition-all duration-300 ${
                        isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                      }`}
                    >
                      <p className="text-slate-600 text-xs font-semibold leading-relaxed mb-4">
                        {member.bio}
                      </p>
                      <div className="flex gap-3">
                        {member.social.linkedin && (
                          <a
                            href={member.social.linkedin}
                            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-primary/10 text-slate-600 hover:text-primary flex items-center justify-center transition-colors"
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                        )}
                        {member.social.twitter && (
                          <a
                            href={member.social.twitter}
                            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-primary/10 text-slate-600 hover:text-primary flex items-center justify-center transition-colors"
                          >
                            <Twitter className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-xs text-primary font-bold">{member.role}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-slate-100">
                      {member.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-full bg-primary/5 text-primary text-[10px] font-bold"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>

      </div>
    </section>
  );
}
