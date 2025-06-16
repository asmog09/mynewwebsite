"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const [showLevy, setShowLevy] = useState(false);
  const [showWidgets, setShowWidgets] = useState(false);
  const pathname = usePathname();
  const handleSubToggle = (key: string) => {
    setOpenSub(openSub === key ? null : key);
  };

  useEffect(() => {
    const onScroll = () => {
      // Only show after scrolling halfway down the hero (assume 50vh)
      if (window.scrollY > window.innerHeight * 0.5) {
        setShowLevy(true);
        setShowWidgets(true);
      } else {
        setShowLevy(false);
        setShowWidgets(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <html lang="en" className={montserrat.variable}>
      <body className={`antialiased font-sans ${montserrat.variable}`}> 
        {/* Left vertical semi-transparent white bar */}
        <div className="fixed top-0 left-0 h-full w-20 bg-white/30 z-[100] pointer-events-none" style={{backdropFilter: 'blur(2px)'}} />
        {/* Hamburger Menu and Home Button in left bar, aligned as requested */}
        <div className="fixed left-0 top-0 h-full w-20 z-[130] flex flex-col items-center justify-between pointer-events-none">
          {/* Hamburger menu at top left, just three lines, now with solid circle background for contrast */}
          <button
            className="pointer-events-auto flex flex-col gap-1.5 w-12 h-12 items-center justify-center bg-white/90 border-none shadow-lg hover:bg-[#1565c0]/90 hover:text-white transition mt-6 rounded-full"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            style={{backdropFilter: 'none'}}
          >
            <span className="block w-8 h-1 bg-[#1565c0] rounded transition"></span>
            <span className="block w-8 h-1 bg-[#1565c0] rounded transition"></span>
            <span className="block w-8 h-1 bg-[#1565c0] rounded transition"></span>
          </button>
          {/* Home button, centered vertically */}
          <div className="flex-1 flex flex-col justify-center items-center w-full">
            <a href="/" className="pointer-events-auto flex items-center justify-center" style={{cursor: 'pointer'}} aria-label="Home">
              <Image src="https://static.wixstatic.com/media/64f7b5_e8126bed16284e12a4e5d1f0fd68f45f~mv2.png/v1/fill/w_408,h_408,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/flying-ninja-silhouette_168578-178_edite.png" alt="Home Logo" width={48} height={48} className="md:w-16 md:h-16 w-12 h-12 transition-transform duration-300 hover:scale-110" />
            </a>
          </div>
        </div>
        {/* Fuel Levy Box (top left, home only, always visible, now with icon) */}
        {pathname === "/" && (
          <div className="fixed top-6 left-28 z-[120] flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg shadow-lg font-bold text-xs md:text-sm border border-[#90caf9]/30 animate-fade-slide-up" style={{animationDelay: '0ms'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUewq8zo9_DeEqvcGiFOB6TXiaK8XNJrh-Qg&s" alt="Fuel Gauge Logo" className="w-5 h-5 object-contain" />
            FUEL LEVY | June 2025 ~ 14.2%
          </div>
        )}
        {/* Bottom 3 widgets (home only, pops up on scroll) */}
        {pathname === "/" && showWidgets && (
          <div className="fixed bottom-6 right-8 z-[120] flex flex-col gap-4 items-end animate-fade-slide-up" style={{animationDelay: '0ms'}}>
            <a href="tel:1800123456" className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 hover:bg-[#1565c0] hover:text-white transition text-[#1565c0]" aria-label="Phone">
              <img src="https://pngimg.com/d/phone_PNG48988.png" alt="Phone" className="w-7 h-7" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 hover:bg-[#1565c0] hover:text-white transition text-[#1565c0]" aria-label="Facebook">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWEbfjuyn9VmJ8GgZ59dV9x8cTzp3fMvD_lQ&s" alt="Facebook" className="w-7 h-7" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 hover:bg-[#1565c0] hover:text-white transition text-[#1565c0]" aria-label="LinkedIn">
              <img src="https://img.icons8.com/ios_filled/512/linkedin.png" alt="LinkedIn" className="w-7 h-7" />
            </a>
          </div>
        )}
        {/* Slide-in Fullscreen Menu Overlay (from left, 5 columns, animated) */}
        {menuOpen && (
          <div className="fixed inset-0 z-[200] flex bg-[#0a2239]/90 backdrop-blur-sm animate-slide-in-left">
            {/* Close Icon */}
            <button className="absolute top-8 left-10 text-5xl font-bold text-[#1976d2] z-10" aria-label="Close menu" onClick={() => setMenuOpen(false)}>&times;</button>
            <div className="flex flex-1 h-full w-full items-center justify-center">
              <div className="grid grid-cols-1 md:grid-cols-5 w-full max-w-7xl divide-x divide-[#1976d2]/40 animate-fade-slide-up">
                {/* Company */}
                <div className="flex flex-col gap-2 px-6 md:px-8">
                  <span className="text-2xl md:text-3xl font-extrabold mb-4">Swiftline</span>
                  <Link href="/" className="text-lg py-1 hover:underline" onClick={() => setMenuOpen(false)}>Home</Link>
                  <a href="/about" className="text-lg py-1 hover:underline" onClick={() => setMenuOpen(false)}>About</a>
                  <a href="/certifications" className="text-lg py-1 hover:underline" onClick={() => setMenuOpen(false)}>Certifications</a>
                </div>
                {/* Contact */}
                <div className="flex flex-col gap-2 px-6 md:px-8">
                  <span className="text-2xl md:text-3xl font-extrabold mb-4">Contact</span>
                  <a href="/contact" className="text-lg py-1 hover:underline" onClick={() => setMenuOpen(false)}>Contact</a>
                  <a href="/quote" className="text-lg py-1 hover:underline" onClick={() => setMenuOpen(false)}>Get A Quote</a>
                </div>
                {/* Services */}
                <div className="flex flex-col gap-2 px-6 md:px-8">
                  <span className="text-2xl md:text-3xl font-extrabold mb-4">Services</span>
                  <a href="/services" className="text-lg py-1 hover:underline" onClick={() => setMenuOpen(false)}>All Services</a>
                  <a href="/services#transport" className="text-lg py-1 hover:underline" onClick={() => setMenuOpen(false)}>Transport</a>
                  <a href="/services#distribution" className="text-lg py-1 hover:underline" onClick={() => setMenuOpen(false)}>Distribution</a>
                  <a href="/services#warehousing" className="text-lg py-1 hover:underline" onClick={() => setMenuOpen(false)}>Warehousing</a>
                </div>
                {/* Careers */}
                <div className="flex flex-col gap-2 px-6 md:px-8">
                  <span className="text-2xl md:text-3xl font-extrabold mb-4">Careers</span>
                  <a href="/work-with-swiftline" className="text-lg py-1 hover:underline" onClick={() => setMenuOpen(false)}>Work With Us</a>
                  <a href="/careers/vacancies" className="text-lg py-1 hover:underline" onClick={() => setMenuOpen(false)}>Vacancies</a>
                  <a href="/careers/testimonials" className="text-lg py-1 hover:underline" onClick={() => setMenuOpen(false)}>Testimonials</a>
                </div>
                {/* Locations (updated) */}
                <div className="flex flex-col gap-2 px-6 md:px-8">
                  <span className="text-2xl md:text-3xl font-extrabold mb-4">Locations</span>
                  <span className="text-lg py-1">Melbourne – Head Office</span>
                  <span className="text-lg py-1">Sydney – Onforwarder</span>
                  <span className="text-lg py-1">Brisbane – OF</span>
                  <span className="text-lg py-1">Perth – OF</span>
                  <span className="text-lg py-1">Adelaide – OF</span>
                </div>
              </div>
            </div>
          </div>
        )}
        {children}
      </body>
    </html>
  );
}
