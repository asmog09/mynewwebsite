export default function TestimonialsPage() {
  return (
    <main className="relative z-40 py-20 px-4 bg-[#e91e63] text-white min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-12 uppercase tracking-wider">Testimonials</h2>
      <div className="max-w-3xl mx-auto">
        {/* Simple slider with placeholder testimonials */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-slide gap-8">
            <div className="min-w-full bg-[#f8bbd0] rounded-xl p-8 shadow text-center text-[#e91e63]">
              <p className="text-xl italic mb-4">&ldquo;The support is fantastic, it&apos;s personal. It comes from the top down.&rdquo;</p>
              <span className="font-bold">Simon Parker</span>
              <span className="block text-sm opacity-70">Warehouse Administrator</span>
            </div>
            <div className="min-w-full bg-[#f8bbd0] rounded-xl p-8 shadow text-center text-[#e91e63]">
              <p className="text-xl italic mb-4">&ldquo;It&apos;s a great place to work, and I know that some people just say that but I mean it.&rdquo;</p>
              <span className="font-bold">Carl Hamilton</span>
              <span className="block text-sm opacity-70">National Workshop Manager</span>
            </div>
            <div className="min-w-full bg-[#f8bbd0] rounded-xl p-8 shadow text-center text-[#e91e63]">
              <p className="text-xl italic mb-4">&ldquo;I still enjoy my job, I enjoy going away, I enjoy coming back. It&apos;s just a really comfortable place to work.&rdquo;</p>
              <span className="font-bold">Peter Dawson-Ryan</span>
              <span className="block text-sm opacity-70">Line Haul Driver</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 