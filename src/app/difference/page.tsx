import Image from "next/image";

export default function DifferencePage() {
  return (
    <main className="relative z-40 py-20 px-4 bg-[#fff] text-[#e91e63] min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-12 uppercase tracking-wider">The Swiftline Difference</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#fce4ec] rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
          <Image src="/feature1.jpg" alt="Reliable Transport" width={120} height={120} className="mb-4 rounded-lg object-cover h-32 w-32" />
          <h3 className="text-xl font-bold mb-2">Reliable Transport</h3>
          <p>Swift, safe, and on-time delivery across Australia.</p>
        </div>
        <div className="bg-[#fce4ec] rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
          <Image src="/feature2.jpg" alt="Customer Focus" width={120} height={120} className="mb-4 rounded-lg object-cover h-32 w-32" />
          <h3 className="text-xl font-bold mb-2">Customer Focus</h3>
          <p>We go the extra mile to support our clients and their families.</p>
        </div>
        <div className="bg-[#fce4ec] rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
          <Image src="/feature3.jpg" alt="Proven Experience" width={120} height={120} className="mb-4 rounded-lg object-cover h-32 w-32" />
          <h3 className="text-xl font-bold mb-2">Proven Experience</h3>
          <p>Decades of expertise and a proud tradition of service.</p>
        </div>
      </div>
    </main>
  );
} 