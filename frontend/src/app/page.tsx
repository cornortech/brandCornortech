"use client";

import React from "react";
import HeroSection from "@/components/HeroSection";
import OurClientsSection from "@/components/OurClientsSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/Contact";

export default function Home() {
  return (
    <div className="w-full relative overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. OUR CLIENTS SECTION */}
      <OurClientsSection />

      {/* 3. SERVICES SECTION */}
      <ServicesSection />

      {/* 4. WHY CHOOSE US SECTION */}
      <WhyChooseUsSection />

      {/* 5. PRICING PLANS SECTION */}
      <PricingSection />

      {/* 6. TESTIMONIALS SECTION */}
      <TestimonialsSection />

      {/* 7. ECOSYSTEM TEAM SECTION */}
      {/* <TeamSection /> */}

      {/* 8. CONTACT SECTION */}
      <ContactSection />
    </div>
  );
}
