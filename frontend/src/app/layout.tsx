import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { ContactProvider } from "@/components/ContactContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import FloatingWidgets from "@/components/FloatingWidgets";

export const metadata: Metadata = {
  title:{
    default: "Brand With Cornor Tech | Digital Marketing & Creative Agency",
    template: '%s | Brand With Cornor Tech'  
  },
  description: "Official digital marketing, branding, SEO, content creation, and creative agency division of Cornor Tech. Scale your business strategically.",
  keywords: [
    'digital marketing',
    'branding',
    'Seo',
    'content creation',
    'creative agencey'
  ],
  authors: [{ name: 'Brand With Cornor Tech'}],
  creator: 'Cornor Tech Pvt. Ltd.',
  metadataBase: new URL('https://brand.cornortech'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: "/images/logo/logo.png",
    shortcut: "/images/logo/logo.png",
    apple: "/images/logo/logo.png",
  },
    // when it shared on social media
  openGraph: {
    title: 'Brand With Cornor Tech | Digital Marketing & Creative Agency',
    description: 'Official digital marketing, branding, SEO, content creation, and creative agency division of Cornor Tech. Scale your business strategically.',
    url: 'https://brand.cornortech',
    siteName: 'Brand with Cornor Tech',
    images: [
      {
        url: '/images/logo/logo.png', // For search engine
        width: 1200,
        height: 630,
        alt: 'Brqnd With Cornor Tech',
      },
    ],
    locale: 'en_NP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand With Cornor Tech',
    description: 'PM-led tech teams for web, mobile, design, and digital marketing.Official digital marketing, branding, SEO, content creation, and creative agency division of Cornor Tech. Scale your business strategically.',
    images: ['/images/logo/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-800">
        <ContactProvider>
          <Navbar />
          <main className="flex-grow pt-0">{children}</main>
          <Footer />
          <ContactModal />
          <FloatingWidgets />
        </ContactProvider>
      </body>
    </html>
  );
}
