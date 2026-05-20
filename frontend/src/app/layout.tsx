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
  title: "Brand With Cornor — Digital Marketing & Creative Agency",
  description: "Official digital marketing, branding, SEO, content creation, and creative agency division of Cornor Tech. Scale your business strategically.",
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
