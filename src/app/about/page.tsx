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
            <p className="text-xl font-bold text-gray-800">
              WE&apos;RE A &apos;LOOK YOU STRAIGHT IN THE EYE AND GIVE YOU A FIRM HANDSHAKE&apos; KIND OF BUSINESS.
            </p>
            <p className="text-gray-700">
              A contemporary logistics company built on traditional family values. We treat your business as if it is our own and we have been doing it that way since 1965. While our heritage and reputation are things we value greatly, we're firmly focussed on the road ahead.
            </p>
            <p className="text-gray-700">
              We take great pride in every aspect of our operation from maintaining our industry-leading equipment and impeccably presented fleet, to our longstanding customer relationships.
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

        {/* Additional Content Sections */}
        <div className="space-y-16">
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-[#1565c0] mb-4">KEEPING IT CLEAN, GREEN AND SAFE</h3>
            <p className="text-gray-700 mb-4">
              A rock-solid commitment to training, regular audits and up-to-the-minute certification and accreditation, means we once again not only meet, but exceed security, food safety and environmental benchmarks.
            </p>
            <p className="text-gray-700">
              Our customers enjoy the peace of mind knowing our security standards are second to none. Around the clock security guard patrols and video surveillance coupled with access checks, personnel recording, and an electronic keying system, means your precious cargo is fully protected. Always.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-[#1565c0] mb-4">MISSION, VISION, VALUES</h3>
            <p className="text-gray-700 mb-4">
              Our fleet of trucks and vans offer state of the art temperature monitoring, that coupled with our highly trained and skilled drivers, we offer:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>On time delivery/pickup and distribution</li>
              <li>Temperature sensitive monitoring</li>
              <li>Freezer, chilled, and dry transportation</li>
            </ul>
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