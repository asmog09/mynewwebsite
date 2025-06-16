"use client";
import Image from "next/image";

const jumpLinks = [
  { id: "transport", label: "Transport" },
  { id: "distribution", label: "Distribution" },
  { id: "warehousing", label: "Warehousing" },
];

export default function ServicesPage() {
  return (
    <main className="w-full min-h-screen bg-white font-sans">
      {/* Hero Section with Title Background */}
      <section className="relative w-full h-[32vh] md:h-[40vh] flex items-center justify-center overflow-hidden mb-4 min-h-[220px] md:min-h-[320px]">
        <Image
          src="https://1800westoreit.com.au/wp-content/uploads/2021/07/WarehousePalletisedBusinessStorge.jpg"
          alt="Services Hero Background"
          fill
          className="object-cover object-center z-0"
          priority
          style={{objectFit: 'cover'}}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg tracking-tight uppercase animate-fade-slide-up" style={{animationDelay: '0ms'}}>Our Services</h1>
        </div>
      </section>

      {/* Sticky Jump To Bar */}
      <nav className="sticky top-0 z-40 w-full bg-[#1565c0] py-3 flex justify-center items-center gap-4 border-b border-[#1976d2]/30 shadow-sm">
        <span className="text-white font-bold uppercase tracking-wide mr-2">Jump To:</span>
        {jumpLinks.map(link => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="px-5 py-2 rounded-full font-bold border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#1565c0] transition text-base md:text-lg"
            style={{letterSpacing: '0.02em'}}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Transport Section */}
      <section id="transport" className="max-w-5xl mx-auto py-10 px-4 flex flex-col md:flex-row items-start gap-8 border-b border-gray-200 scroll-mt-32 animate-fade-slide-up" style={{animationDelay: '300ms'}}>
        <div className="md:w-1/3 w-full flex flex-col items-start">
          <h2 className="text-4xl font-extrabold text-[#1565c0] uppercase mb-1 text-left" style={{fontStyle:'italic', letterSpacing:'-0.01em'}}>Transport</h2>
          <div className="font-bold text-black uppercase mb-2 text-left text-lg">Handle With Care</div>
        </div>
        <div className="md:w-2/3 w-full flex flex-col items-start">
          <p className="text-base text-gray-800 mb-2">
            Our highly trained drivers command a carefully maintained fleet of trucks and vans, providing dry, chilled, and frozen product transportation using up-to-the-minute temperature monitoring to ensure the careful and timely pickup and delivery of your products.
          </p>
          <a href="/book-freight" className="mt-2 mb-6 px-6 py-2 bg-[#388e3c] text-white font-bold rounded-full shadow hover:bg-[#1976d2] transition text-base md:text-lg inline-block">BOOK NOW</a>
          <div className="w-full flex justify-start">
            <img
              src="https://images.stockcake.com/public/6/c/1/6c18ef6e-55af-41e4-bbd1-796df4348956_large/warehouse-truck-activity-stockcake.jpg"
              alt="Transport Trucks"
              className="rounded-xl shadow-lg w-full max-w-xl object-cover mt-2"
            />
          </div>
        </div>
      </section>

      {/* Distribution Section */}
      <section id="distribution" className="max-w-5xl mx-auto py-10 px-4 flex flex-col md:flex-row items-start gap-8 border-b border-gray-200 scroll-mt-32 animate-fade-slide-up" style={{animationDelay: '500ms'}}>
        <div className="md:w-1/3 w-full flex flex-col items-start">
          <h2 className="text-4xl font-extrabold text-[#1565c0] uppercase mb-1 text-left" style={{fontStyle:'italic', letterSpacing:'-0.01em'}}>Distribution</h2>
          <div className="font-bold text-black uppercase mb-2 text-left text-lg">Here, There and Just About Everywhere</div>
        </div>
        <div className="md:w-2/3 w-full flex flex-col items-start">
          <p className="text-base text-gray-800 mb-2">
            We provide a full range of distribution services for local and interstate freight to ensure the on-time delivery of your goods in tip-top condition throughout the Adelaide metropolitan area, most of rural South Australia, Victoria, New South Wales and across Queensland, the Northern Territory and Western Australia.
          </p>
          <a href="/book-freight" className="mt-2 mb-6 px-6 py-2 bg-[#388e3c] text-white font-bold rounded-full shadow hover:bg-[#1976d2] transition text-base md:text-lg inline-block">BOOK NOW</a>
          <div className="w-full flex justify-start">
            <img
              src="https://www.materialhandlingsolutions.com/wp-content/uploads/2023/12/AdobeStock_622375139-1024x574.jpeg"
              alt="Distribution"
              className="rounded-xl shadow-lg w-full max-w-xl object-cover mt-2"
            />
          </div>
        </div>
      </section>

      {/* Warehousing Section */}
      <section id="warehousing" className="max-w-5xl mx-auto py-10 px-4 flex flex-col md:flex-row items-start gap-8 scroll-mt-32 animate-fade-slide-up" style={{animationDelay: '700ms'}}>
        <div className="md:w-1/3 w-full flex flex-col items-start">
          <h2 className="text-4xl font-extrabold text-[#1565c0] uppercase mb-1 text-left" style={{fontStyle:'italic', letterSpacing:'-0.01em'}}>Warehousing</h2>
          <div className="font-bold text-black uppercase mb-2 text-left text-lg">Whatever Your Needs</div>
        </div>
        <div className="md:w-2/3 w-full flex flex-col items-start">
          <p className="text-base text-gray-800 mb-2">
            Whether it is short or long term, dry, chilled, or frozen, our 20,000sqm storage capacity, which includes a 10,000-pallet freezer facility, provides thermally controlled locations with backup alternatives to ensure your produce is kept in peak condition.<br /><br />
            We will happily tailor a warehousing plan to suit your needs and can control all storage requirements on your behalf. Alternatively, should you wish to control your product storage yourself, we&apos;re more than happy to accommodate you.<br /><br />
            At our temperature-controlled facilities, we can efficiently manage any time slots with 24/7 access and round the clock transport, as well as providing electronic produce monitoring and advanced security systems and services.
          </p>
          <a href="/book-freight" className="mt-2 mb-6 px-6 py-2 bg-[#388e3c] text-white font-bold rounded-full shadow hover:bg-[#1976d2] transition text-base md:text-lg inline-block">BOOK NOW</a>
          <div className="w-full flex justify-start">
            <img
              src="https://www.transvirtual.com/wp-content/uploads/2023/09/CRL-man-transferring-boxes-to-truck-1024x538.jpg"
              alt="Warehousing"
              className="rounded-xl shadow-lg w-full max-w-xl object-cover mt-2"
            />
          </div>
        </div>
      </section>
    </main>
  );
} 