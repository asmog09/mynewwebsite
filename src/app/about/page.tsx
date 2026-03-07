"use client";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[45vh] md:h-[55vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://mediaassets.cbre.com/-/media/project/cbre/shared/australia/porfolios/industrial-and-logistics/industrial-and-logistics-vic-breaker-1424x1068.jpg"
          alt="About Swiftline Hero"
          fill
          className="object-cover object-center z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2 drop-shadow-lg tracking-tight uppercase" style={{letterSpacing:'-0.01em', lineHeight:'1.1'}}>We Go The Extra Mile</h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-6xl mx-auto w-full py-24 md:py-32 px-4">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1565c0] mb-4 uppercase tracking-wider italic" style={{letterSpacing: '0.04em'}}>
            A SWIFTLINE TRADITION
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-[#1565c0] text-center max-w-3xl mx-auto">
            OF CUSTOMER SERVICE
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <p className="text-gray-700">
              Since its inception in 2023, SwiftLine has been driven by a clear purpose: to introduce a new standard of precision, professionalism, and modern thinking to Australia&apos;s transport industry.
            </p>
            <p className="text-gray-700">
              Founded by brothers Kalaab Tikue and Aron Tikue, the company began with just one rigid truck and a strong belief that reliability, discipline, and hard work could build something greater.
            </p>
            <p className="text-gray-700">
              What started as a single vehicle on the road has grown into a rapidly expanding fleet, supported by a modern approach to operations and a growing network of trusted clients.
            </p>
            <p className="text-gray-700">
              Although SwiftLine is a young company, it operates with the mindset of an established industry leader, with every kilometre reflecting its commitment to precision, accountability, and uncompromising service.
            </p>
            <p className="text-xl font-bold text-[#1565c0]">
              SwiftLine isn&apos;t simply part of the industry.
            </p>
            <p className="text-xl font-bold text-[#1565c0]">
              It&apos;s helping shape what comes next.
            </p>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="https://www.shipbob.com/wp-content/uploads/2018/12/iStock-96923935-1.jpg?w=1024"
              alt="Swiftline Operations"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a href="/book-freight" className="inline-block px-8 py-4 bg-[#1565c0] text-white font-bold rounded-full shadow-lg hover:bg-[#1976d2] transition text-lg">
            BOOK FREIGHT
          </a>
        </div>
      </section>
    </main>
  );
} 