import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { Facebook, Instagram, Linkedin } from './BrandIcons';
import { contactConfig } from '@/lib/contactConfig';

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

const services = [
  'Search Engine Optimization',
  'Social Media Marketing',
  'Graphic Design',
  'Content Creation',
  'Creative Services',
  'Page Boosting',
];

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/#contact' },
];

const socials = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0516] text-white font-sans">
      {/* Top gradient border */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">

              <Image 
                          src="/images/logo/logo.png"
                          alt="C"
                          width={42}
                          height={42}
                          className="object-contain"
                          />
              
                          <div className="flex flex-col gap-1">
                            <span className={`text-base font-extrabold tracking-tight transition-colors duration-200`}>
                              
                             <span className="text-[18px] text-primary group-hover:text-primary-light transition-colors">Brand</span>
                              <span className="text-[10px"> With Cornor</span>
              
                            </span>
              
                              <span className="text-[9px] uppercase font-semibold tracking-widest text-slate-400 -mt-1">
                              Ahead Of Algorithmn
                              </span>
                          </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              A digital marketing sub-brand of{' '}
              <a
                href={contactConfig.brandWebsiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-purple-300 inline-flex items-center gap-1 transition-colors"
              >
                Cornor Tech <ExternalLink className="w-3 h-3" />
              </a>
              . We help businesses grow digitally through creative marketing strategies.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary flex items-center justify-center transition-all hover:scale-105"
                >
                  <Icon className="w-4 h-4 text-slate-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-400 hover:text-primary text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/#services"
                    className="text-slate-400 hover:text-primary text-sm transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a href={`mailto:${contactConfig.footerEmail}`} className="text-slate-400 hover:text-primary text-sm transition-colors">
                  {contactConfig.footerEmail}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a href={`tel:${contactConfig.phoneHref}`} className="text-slate-400 hover:text-primary text-sm transition-colors">
                  {contactConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm">
                  {contactConfig.address}
                </span>
              </li>
            </ul>

            <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/20">
              <p className="text-xs text-slate-400 mb-1">Part of the</p>
              <a
                href={contactConfig.brandWebsiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-primary hover:text-purple-300 inline-flex items-center gap-1 transition-colors"
              >
                Cornor Tech Pvt. Ltd <ExternalLink className="w-3 h-3" />
              </a>
              <p className="text-xs text-slate-500 mt-0.5">ecosystem</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Brand With Cornor{"."} A sub-brand of Cornor Tech Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
