"use client";
import Image from "next/image";

export default function WorkWithSwiftlinePage() {
  return (
    <main className="w-full min-h-screen bg-white font-sans overflow-x-hidden flex flex-col justify-center">
      {/* Hero Section */}
      <section className="relative w-full h-[45vh] md:h-[55vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://www.sperton.com/wp-content/uploads/2023/11/blog_best_tips_tricks_logistics.jpg"
          alt="Your Road Ahead Hero"
          fill
          className="object-cover object-center z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2 drop-shadow-lg tracking-tight uppercase" style={{letterSpacing:'-0.01em', lineHeight:'1.1'}}>Your Road Ahead</h1>
        </div>
      </section>
      {/* Main Content Section */}
      <section className="max-w-6xl mx-auto w-full py-24 md:py-32 px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Large headline */}
        <div className="flex flex-col items-start justify-center bg-black text-white rounded-l-2xl p-8 md:p-12 h-full">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-2 leading-tight uppercase" style={{letterSpacing:'-0.01em', lineHeight:'1.1'}}>
            YOUR<br />NEXT<br />CAREER<br />MOVE<br /> <span className="font-normal normal-case text-[#ededed]">IS WITH US</span>
          </h2>
        </div>
        {/* Right: Description and link */}
        <div className="flex flex-col items-start justify-center">
          <h3 className="text-lg md:text-xl font-bold text-black mb-4 uppercase tracking-wide">GROW WITH US, AS WE CONTINUE TO SET THE STANDARD FOR CUSTOMER SERVICE</h3>
          <p className="text-base md:text-lg text-gray-800 mb-6">We&apos;re proud of the fact so many of our employees have been with Swiftline for many years. We see it as a testament to our family traditions and the industry-leading conditions and ongoing training we provide.<br /><br />Wherever possible, we are also committed to promotion from within, so vacancies regularly become available. From drivers to forklift operators, office staff to diesel and refrigeration mechanics and many more, we employ people throughout Australia.<br /><br />A full list of current vacancies can be found at our Seek page.<br /><br />If the job you&apos;re looking for is not currently advertised, please email us your expression of interest. You may also wish to include a completed application form.<br /><br />To gain an understanding of what it is like to become a part of the Swiftline family, click on these videos to hear what our staff have to say.</p>
          <a href="#" className="text-[#388e3c] font-bold underline text-lg">VIEW VACANCIES</a>
        </div>
      </section>
      {/* Green Accent Bar */}
      <div className="w-full h-6 md:h-8 bg-[#1565c0] mt-8" />
    </main>
  );
} 