"use client";
import Image from "next/image";

export default function CertificationsPage() {
  return (
    <main className="w-full min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[45vh] md:h-[55vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://www.logisticspeople.co.uk/wp-content/uploads/2020/11/Rectangle-253.png"
          alt="Certifications Hero"
          fill
          className="object-cover object-center z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2 drop-shadow-lg tracking-tight uppercase" style={{letterSpacing:'-0.01em', lineHeight:'1.1'}}>Certifications</h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-6xl mx-auto w-full py-24 md:py-32 px-4">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#217346] mb-4 uppercase tracking-wider italic" style={{letterSpacing: '0.04em'}}>
            Quality Programs and Certifications
          </h2>
        </div>

        {/* Main Content */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-gray-700 mb-8">
            Our commitment to food safety, quality, heavy vehicle accreditation, and vehicle and driver safety is at the heart of our business. This is the foundation of who we are. We are proud to be aligned with these quality and regulatory programs.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-2xl font-bold text-[#217346]">
            <span>HACCP</span>
            <span>|</span>
            <span>NHVAS-ALL</span>
            <span>|</span>
            <span>TRUCKSAFE</span>
            <span>|</span>
            <span>PC-SEP</span>
            <span>|</span>
            <span>FRESHCARE</span>
          </div>
        </div>
      </section>
    </main>
  );
} 