"use client";
import Image from "next/image";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-transparent">
      {/* Hero Section: Full viewport height */}
      <section className="relative min-h-screen w-full flex flex-col justify-end items-stretch overflow-hidden">
        {/* Full-screen background image (now feature1.jpg) */}
        <Image
          src="/feature1.jpg"
          alt="Swiftline Hero Background - Refrigerated Transport & Logistics"
          fill
          className="object-cover object-center z-0"
          priority
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/60 z-10" aria-hidden="true" />
        {/* Decorative logo bottom left */}
        <div className="absolute bottom-6 left-6 z-30">
          <Image src="https://static.wixstatic.com/media/64f7b5_e8126bed16284e12a4e5d1f0fd68f45f~mv2.png/v1/fill/w_408,h_408,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/flying-ninja-silhouette_168578-178_edite.png" alt="Swiftline Brand Icon" width={48} height={48} className="md:w-16 md:h-16 w-12 h-12 opacity-80" />
        </div>
        {/* Large Swiftline logo image in hero, with drop shadow and tagline */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none animate-fade-slide-up" style={{animationDelay: '0ms'}}>
          <Image
            src="/IMG_1528-removebg.png"
            alt="Swiftline Logo - Refrigerated Transport & Logistics"
            width={900}
            height={400}
            className="w-[90vw] max-w-5xl h-auto object-contain mx-auto drop-shadow-2xl opacity-90"
            priority
            style={{background: "none"}}
          />
          <span className="block mt-2 text-white text-2xl md:text-3xl font-bold drop-shadow-lg" style={{letterSpacing: '0.04em'}}>Refrigerated Transport &amp; Logistics</span>
        </div>
        {/* Bottom: Four horizontal action buttons styled as transparent boxes with SVG icons */}
        <div className="absolute z-30 w-full left-0 bottom-0 flex flex-col md:flex-row divide-x md:divide-x divide-y-0 md:divide-y-0 divide-white/40 animate-fade-slide-up homepage-nav" style={{animationDelay: '300ms'}}>
          <a href="/quote" className="flex-1 flex items-center justify-center gap-3 py-6 md:py-8 border-2 border-[#1565c0] text-[#1565c0] font-extrabold text-xl md:text-2xl transition bg-transparent hover:bg-white focus:bg-white" aria-label="Get A Quote">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8m-4-4v8m9 4H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v13z" /></svg>
            Get A Quote
          </a>
          <a href="/book-freight" className="flex-1 flex items-center justify-center gap-3 py-6 md:py-8 border-2 border-[#1565c0] text-[#1565c0] font-extrabold text-xl md:text-2xl transition bg-transparent hover:bg-white focus:bg-white" aria-label="Book Freight">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17v-6a2 2 0 012-2h2V7a2 2 0 012-2h4a2 2 0 012 2v2h2a2 2 0 012 2v6M5 21h14a2 2 0 002-2v-2a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 002 2z" /></svg>
            Book Freight
          </a>
          <a href="/work-with-swiftline" className="flex-1 flex items-center justify-center gap-3 py-6 md:py-8 border-2 border-[#1565c0] text-[#1565c0] font-extrabold text-xl md:text-2xl transition bg-transparent hover:bg-white focus:bg-white" aria-label="Work With Swiftline">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            Work With Swiftline
          </a>
          <a href="/services" className="flex-1 flex items-center justify-center gap-3 py-6 md:py-8 border-2 border-[#1565c0] text-[#1565c0] font-extrabold text-xl md:text-2xl transition bg-transparent hover:bg-white focus:bg-white" aria-label="Services">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" /></svg>
            Services
          </a>
        </div>
      </section>
      {/* Swiftline Quote Section styled for blue theme */}
      <section className="relative z-40 py-16 px-4 flex flex-col justify-center items-center animate-fade-slide-up" style={{animationDelay: '600ms'}}>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1565c0] text-center mb-4 uppercase tracking-wider italic" style={{letterSpacing: '0.04em'}}>
          A SWIFTLINE TRADITION
        </h2>
        <p className="text-2xl md:text-3xl font-semibold text-[#1565c0] text-center max-w-3xl">of customer service, the Swiftline tradition.</p>
      </section>
      {/* Testimonials Slider */}
      <section className="relative z-40 py-20 px-4 bg-[#1565c0] text-white animate-fade-slide-up" style={{animationDelay: '900ms'}}>
        <h2 className="text-3xl font-bold text-center mb-12 uppercase tracking-wider">Testimonials</h2>
        <div className="max-w-3xl mx-auto">
          {/* Simple slider with placeholder testimonials */}
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-slide gap-8">
              <div className="min-w-full bg-[#111111] rounded-xl p-8 shadow text-center text-white">
                <p className="text-xl italic mb-4">"The support is fantastic, it's personal. It comes from the top down."</p>
                <span className="font-bold">Simon Parker</span>
                <span className="block text-sm opacity-70">Warehouse Administrator</span>
              </div>
              <div className="min-w-full bg-[#111111] rounded-xl p-8 shadow text-center text-white">
                <p className="text-xl italic mb-4">"It's a great place to work, and I know that some people just say that but I mean it."</p>
                <span className="font-bold">Carl Hamilton</span>
                <span className="block text-sm opacity-70">National Workshop Manager</span>
              </div>
              <div className="min-w-full bg-[#111111] rounded-xl p-8 shadow text-center text-white">
                <p className="text-xl italic mb-4">"I still enjoy my job, I enjoy going away, I enjoy coming back. It's just a really comfortable place to work."</p>
                <span className="font-bold">Peter Dawson-Ryan</span>
                <span className="block text-sm opacity-70">Line Haul Driver</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
