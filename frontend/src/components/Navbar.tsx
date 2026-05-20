"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useContactModal } from "./ContactContext";
import { Menu, X, Rocket, ArrowRight } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const { openModal } = useContactModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Pricing", href: "/#pricing" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const isDarkHeroPage = pathname === "/" || pathname === "/about";

  // Header style variables
  const headerBg = mobileMenuOpen
    ? "bg-slate-950 border-white/5 text-white"
    : isScrolled
    ? "bg-white/90 border-slate-100 shadow-sm text-slate-800 backdrop-blur-md"
    : isDarkHeroPage
      ? "bg-transparent border-transparent text-white"
      : "bg-white/50 border-transparent text-slate-800 backdrop-blur-sm";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-300 border-b ${headerBg}`}
    >
      <div className="relative z-[80] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">

          {/* ===== Logo ===== */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/logo/logo.png"
              alt="C"
              width={42}
              height={42}
              className="object-contain"
            />

            <div className="flex flex-col gap-1">
              <span className={`text-base font-extrabold tracking-tight transition-colors duration-200 ${mobileMenuOpen ? "text-white" : isScrolled ? "text-slate-900" : isDarkHeroPage ? "text-white" : "text-slate-900"
                }`}>

                <span className="text-[18px] text-primary group-hover:text-primary-light transition-colors">Brand</span>
                <span className="text-[10px"> With Cornor</span>

              </span>

              <span className="text-[9px] uppercase font-semibold tracking-widest text-slate-400 -mt-1">
                Ahead Of Algorithmn
              </span>
            </div>

          </Link>
          {/* ===== End Logo ===== */}

          {/* ===== Desktop Navigation ===== */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold tracking-wide transition-colors duration-200 ${isScrolled
                      ? "text-slate-600 hover:text-primary"
                      : isDarkHeroPage
                        ? "text-white hover:text-purple-300"
                        : "text-slate-600 hover:text-primary"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          {/* ===== End Desktop Navigation ===== */}

          {/* ===== Book Consultation CTA ===== */}
          <div className="hidden md:block">
            <button
              onClick={openModal}
              className={`px-5 py-2.5 rounded-lg text-sm font-bold tracking-wide flex items-center gap-1.5 transition-all duration-300 transform active:scale-95 shadow-md cursor-pointer ${isScrolled
                  ? "bg-primary hover:bg-primary-dark text-white shadow-primary/20"
                  : isDarkHeroPage
                    ? "bg-white hover:bg-slate-100 text-slate-900 shadow-white/10"
                    : "bg-primary hover:bg-primary-dark text-white shadow-primary/20"
                }`}
            >
              Book Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          {/* ===== Book Consultation CTA ===== */}

          {/*===== Mobile Menu Button or Hamburger button =====*/}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`relative z-[90] p-2 rounded-lg transition-colors focus:outline-none ${mobileMenuOpen ? "text-white hover:bg-white/10" : isScrolled ? "text-slate-800 hover:bg-slate-100" : isDarkHeroPage ? "text-white hover:bg-white/10" : "text-slate-800 hover:bg-slate-100"
                }`}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {/*===== End Mobile Menu Button or Hamburger button =====*/}

        </div>
      </div>

      {/* ===== Mobile Drawer Overlay ===== */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-slate-950 flex flex-col md:hidden animate-fade-in border-t border-white/5">
          <div className="flex-1 px-4 pt-24 pb-8 space-y-6 flex flex-col justify-between">
            <nav className="flex flex-col space-y-5">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`text-xl font-bold tracking-wide py-2 border-b border-white/5 transition-all duration-200 ${isActive ? "text-primary pl-2 border-l-2 border-primary" : "text-slate-300 hover:text-white"
                      }`}
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <button
                onClick={() => {
                  handleLinkClick();
                  openModal();
                }}
                className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-lg text-base font-bold flex items-center justify-center gap-2 transition-all duration-200"
              >
                Book Consultation
                <Rocket className="w-4 h-4" />
              </button>
              <p className="text-center text-[10px] text-slate-500 font-semibold tracking-wider uppercase">
                Sub-Brand of Cornor Tech
              </p>
            </div>
          </div>
        </div>
      )}
       {/* ===== End Mobile Drawer Overlay ===== */}

    </header>
  );
}
