"use client";
import Image from "next/image";
import { useState } from "react";

const steps = [
  "Freight Details",
  "Pickup Details",
  "Delivery Details"
];

export default function QuotePage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    // Freight Details
    companyName: "",
    fullName: "",
    email: "",
    phone: "",
    hasAccount: "",
    accountNumber: "",
    temperature: "",
    freightType: "",
    palletQty: "",
    weight: "",
    frequency: "",
    annualSpend: "",
    hasPalletAccount: "",
    chepPalletDetails: "",
    loscamPalletDetails: "",
    description: "",
    
    // Pickup Details
    pickupName: "",
    pickupAddress: "",
    pickupStreet: "",
    pickupCity: "",
    pickupState: "",
    pickupPostcode: "",
    pickupBDAccess: false,
    pickupLoadingDock: false,
    pickupForklift: false,
    
    // Delivery Details
    deliveryName: "",
    deliveryAddress: "",
    deliveryStreet: "",
    deliveryCity: "",
    deliveryState: "",
    deliveryPostcode: "",
    deliveryBDAccess: false,
    deliveryLoadingDock: false,
    deliveryForklift: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden font-sans">
      {/* Full-screen background image */}
      <Image
        src="https://www.silklogistics.com.au/wp-content/uploads/2021/06/Forklift-driver-scaled.jpg"
        alt="Forklift driver background"
        fill
        className="object-cover object-center z-0"
        priority
      />
      {/* Overlay for darkening background */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      
      {/* Centered form card */}
      <div className="relative z-20 w-full max-w-4xl mx-auto my-16 bg-white/95 rounded-2xl shadow-2xl p-8 md:p-12 flex flex-col items-center animate-fade-in">
        {/* Progress indicator */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {steps.map((label, idx) => (
            <div key={label} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-lg ${idx === step ? 'bg-[#1565c0]' : 'bg-gray-300'}`}>
                {idx + 1}
              </div>
              <span className={`text-lg font-bold ${idx === step ? 'text-[#1565c0]' : 'text-gray-400'}`}>
                {label}
              </span>
              {idx < steps.length - 1 && <div className="w-8 h-1 bg-gray-300 rounded" />}
            </div>
          ))}
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#1565c0] mb-2 text-center">Get a Quote</h1>
        <p className="text-lg text-gray-700 mb-6 text-center max-w-xl">
          Our easy to use facilities are ready to help you with planning and lodgement of freight consignments. Fill out the form below and Swiftline will be in contact with you.
        </p>

        {/* Step form */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
          {step === 0 && (
            <div className="flex flex-col gap-4">
              <input
                className="border border-gray-300 rounded px-4 py-3 text-gray-900 placeholder-gray-500"
                placeholder="Company Name*"
                required
                value={formData.companyName}
                onChange={(e) => setFormData({...formData, companyName: e.target.value})}
              />
              <input
                className="border border-gray-300 rounded px-4 py-3 text-gray-900 placeholder-gray-500"
                placeholder="Full Name*"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              />
              <input
                className="border border-gray-300 rounded px-4 py-3 text-gray-900 placeholder-gray-500"
                placeholder="Email*"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <input
                className="border border-gray-300 rounded px-4 py-3 text-gray-900 placeholder-gray-500"
                placeholder="Phone*"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
              <select
                className="border border-gray-300 rounded px-4 py-3 text-gray-900 placeholder-gray-500"
                required
                value={formData.hasAccount}
                onChange={(e) => setFormData({...formData, hasAccount: e.target.value})}
              >
                <option value="">Do you have an account with us?*</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <input
                className="border border-gray-300 rounded px-4 py-3 text-gray-900 placeholder-gray-500"
                placeholder="Account/Code Number"
                value={formData.accountNumber}
                onChange={(e) => setFormData({...formData, accountNumber: e.target.value})}
              />
              <select
                className="border border-gray-300 rounded px-4 py-3 text-gray-900 placeholder-gray-500"
                value={formData.temperature}
                onChange={(e) => setFormData({...formData, temperature: e.target.value})}
              >
                <option value="">Temperature</option>
                <option value="chilled">Chilled</option>
                <option value="ambient">Ambient</option>
                <option value="frozen">Frozen</option>
              </select>
              <input
                className="border border-gray-300 rounded px-4 py-3 text-gray-900 placeholder-gray-500"
                placeholder="Freight Type*"
                required
                value={formData.freightType}
                onChange={(e) => setFormData({...formData, freightType: e.target.value})}
              />
              <input
                className="border border-gray-300 rounded px-4 py-3 text-gray-900 placeholder-gray-500"
                placeholder="Pallet Qty"
                type="number"
                value={formData.palletQty}
                onChange={(e) => setFormData({...formData, palletQty: e.target.value})}
              />
              <input
                className="border border-gray-300 rounded px-4 py-3 text-gray-900 placeholder-gray-500"
                placeholder="Weight (Kg)"
                type="number"
                value={formData.weight}
                onChange={(e) => setFormData({...formData, weight: e.target.value})}
              />
              <select
                className="border border-gray-300 rounded px-4 py-3 text-gray-900 placeholder-gray-500"
                value={formData.frequency}
                onChange={(e) => setFormData({...formData, frequency: e.target.value})}
              >
                <option value="">Frequency</option>
                <option value="once">Once</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
              <input
                className="border border-gray-300 rounded px-4 py-3 text-gray-900 placeholder-gray-500"
                placeholder="Estimated Annual Spend"
                value={formData.annualSpend}
                onChange={(e) => setFormData({...formData, annualSpend: e.target.value})}
              />
              <select
                className="border border-gray-300 rounded px-4 py-3 text-gray-900 placeholder-gray-500"
                value={formData.hasPalletAccount}
                onChange={(e) => setFormData({...formData, hasPalletAccount: e.target.value})}
              >
                <option value="">Do you have a pallet account?</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <input
                className="border border-gray-300 rounded px-4 py-3 text-gray-900 placeholder-gray-500"
                placeholder="CHEP Pallet Account Details"
                value={formData.chepPalletDetails}
                onChange={(e) => setFormData({...formData, chepPalletDetails: e.target.value})}
              />
              <input
                className="border border-gray-300 rounded px-4 py-3 text-gray-900 placeholder-gray-500"
                placeholder="LOSCAM Pallet Account Details"
                value={formData.loscamPalletDetails}
                onChange={(e) => setFormData({...formData, loscamPalletDetails: e.target.value})}
              />
              <textarea
                className="border border-gray-300 rounded px-4 py-3 text-gray-900 placeholder-gray-500"
                placeholder="Description of goods"
                rows={2}
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              />
            </div>
          )}

          {step === 1 && (
            <div className="flex flex-col gap-4">
              <input
                className="border border-gray-300 rounded px-4 py-3 text-gray-900 placeholder-gray-500"
                placeholder="Pickup Name"
                value={formData.pickupName}
                onChange={(e) => setFormData({...formData, pickupName: e.target.value})}
              />
              <input
                className="border border-gray-300 rounded px-4 py-3 text-gray-900 placeholder-gray-500"
                placeholder="Street Address"
                value={formData.pickupStreet}
                onChange={(e) => setFormData({...formData, pickupStreet: e.target.value})}
              />
              <div className="grid grid-cols-3 gap-4">
                <input
                  className="border border-gray-300 rounded px-4 py-3 text-gray-900 placeholder-gray-500"
                  placeholder="City"
                  value={formData.pickupCity}
                  onChange={(e) => setFormData({...formData, pickupCity: e.target.value})}
                />
                <input
                  className="border border-gray-300 rounded px-4 py-3 text-gray-900 placeholder-gray-500"
                  placeholder="State"
                  value={formData.pickupState}
                  onChange={(e) => setFormData({...formData, pickupState: e.target.value})}
                />
                <input
                  className="border border-gray-300 rounded px-4 py-3 text-gray-900 placeholder-gray-500"
                  placeholder="Postcode"
                  value={formData.pickupPostcode}
                  onChange={(e) => setFormData({...formData, pickupPostcode: e.target.value})}
                />
              </div>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.pickupBDAccess}
                    onChange={(e) => setFormData({...formData, pickupBDAccess: e.target.checked})}
                  />
                  B/D Access
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.pickupLoadingDock}
                    onChange={(e) => setFormData({...formData, pickupLoadingDock: e.target.checked})}
                  />
                  Loading Dock Accessible & Available
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.pickupForklift}
                    onChange={(e) => setFormData({...formData, pickupForklift: e.target.checked})}
                  />
                  Forklift Available*
                </label>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="flex flex-col gap-4">
              <input
                className="border border-gray-300 rounded px-4 py-3 text-gray-900 placeholder-gray-500"
                placeholder="Delivery Name"
                value={formData.deliveryName}
                onChange={(e) => setFormData({...formData, deliveryName: e.target.value})}
              />
              <input
                className="border border-gray-300 rounded px-4 py-3 text-gray-900 placeholder-gray-500"
                placeholder="Street Address"
                value={formData.deliveryStreet}
                onChange={(e) => setFormData({...formData, deliveryStreet: e.target.value})}
              />
              <div className="grid grid-cols-3 gap-4">
                <input
                  className="border border-gray-300 rounded px-4 py-3 text-gray-900 placeholder-gray-500"
                  placeholder="City"
                  value={formData.deliveryCity}
                  onChange={(e) => setFormData({...formData, deliveryCity: e.target.value})}
                />
                <input
                  className="border border-gray-300 rounded px-4 py-3 text-gray-900 placeholder-gray-500"
                  placeholder="State"
                  value={formData.deliveryState}
                  onChange={(e) => setFormData({...formData, deliveryState: e.target.value})}
                />
                <input
                  className="border border-gray-300 rounded px-4 py-3 text-gray-900 placeholder-gray-500"
                  placeholder="Postcode"
                  value={formData.deliveryPostcode}
                  onChange={(e) => setFormData({...formData, deliveryPostcode: e.target.value})}
                />
              </div>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.deliveryBDAccess}
                    onChange={(e) => setFormData({...formData, deliveryBDAccess: e.target.checked})}
                  />
                  B/D Access
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.deliveryLoadingDock}
                    onChange={(e) => setFormData({...formData, deliveryLoadingDock: e.target.checked})}
                  />
                  Loading Dock Access
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.deliveryForklift}
                    onChange={(e) => setFormData({...formData, deliveryForklift: e.target.checked})}
                  />
                  Forklift Available
                </label>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-4">
            <button
              type="button"
              className="px-6 py-2 rounded bg-gray-200 text-gray-700 font-bold hover:bg-gray-300 disabled:opacity-50"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
            >
              Back
            </button>
            {step < steps.length - 1 ? (
              <button
                type="button"
                className="px-6 py-2 rounded bg-[#1565c0] text-white font-bold hover:bg-[#1976d2]"
                onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-6 py-2 rounded bg-[#1565c0] text-white font-bold hover:bg-[#1976d2]"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </main>
  );
} 