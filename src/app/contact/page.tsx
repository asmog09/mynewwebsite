"use client";
import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    recipient: "",
    fullName: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <main className="w-full min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[45vh] md:h-[55vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://mediaassets.cbre.com/-/media/project/cbre/shared/australia/porfolios/industrial-and-logistics/industrial-and-logistics-vic-breaker-1424x1068.jpg"
          alt="Contact Hero"
          fill
          className="object-cover object-center z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2 drop-shadow-lg tracking-tight uppercase" style={{letterSpacing:'-0.01em', lineHeight:'1.1'}}>Get In Touch</h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-6xl mx-auto w-full py-24 md:py-32 px-4">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1565c0] mb-4 uppercase tracking-wider italic" style={{letterSpacing: '0.04em'}}>
            HERE FOR YOU
          </h2>
          <p className="text-xl text-gray-700">GENERAL ENQUIRIES</p>
          <p className="text-lg text-gray-600 mt-2">
            Our highly trained staff are happy to help with all<br />
            general enquiries, for assistance please fill out<br />
            the form below.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Contact Recipient (Required)
              </label>
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1565c0]"
                required
                value={formData.recipient}
                onChange={(e) => setFormData({...formData, recipient: e.target.value})}
              >
                <option value="">Select Recipient</option>
                <option value="reception">Reception</option>
                <option value="operations">Operations</option>
                <option value="freight-sales">Freight Sales</option>
                <option value="timeslots-sa">Timeslots - SA</option>
                <option value="timeslots-vic">Timeslots - VIC</option>
                <option value="timeslots-nsw">Timeslots - NSW</option>
                <option value="cold-storage-sa">Cold Storage - SA</option>
                <option value="cold-storage-vic">Cold Storage - VIC</option>
                <option value="cold-storage-nsw">Cold Storage - NSW</option>
                <option value="warehouse-sa">Warehouse Management - SA</option>
                <option value="warehouse-vic">Warehouse Management - VIC</option>
                <option value="warehouse-nsw">Warehouse Management - NSW</option>
                <option value="hr">Human Resources</option>
                <option value="accounts">Accounts</option>
                <option value="workshop">Workshop</option>
                <option value="admin">Administration</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Full Name (Required)
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1565c0]"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Email (Required)
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1565c0]"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Your Message (Required)
              </label>
              <textarea
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1565c0] h-32"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-4 bg-[#1565c0] text-white font-bold rounded-full shadow-lg hover:bg-[#1976d2] transition text-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
} 